import { Ollama } from 'ollama';
import type {
  RepositorySummary,
  SummarizedRepository,
  TrendAnalysis,
  TrendingRepository
} from './types.js';
import {
  asRecord,
  cleanReadme,
  extractJsonObject,
  normalizeWhitespace,
  stringArray
} from './text.js';

interface OllamaSummarizerOptions {
  host: string;
  model: string;
  readmeMaxChars: number;
  apiKey?: string;
}

function stringValue(value: unknown, fallback: string): string {
  return typeof value === 'string' && normalizeWhitespace(value)
    ? normalizeWhitespace(value)
    : fallback;
}

function fourSummaryLines(value: unknown, repository: TrendingRepository): [string, string, string, string] {
  let lines = stringArray(value, 4);

  if (lines.length === 1) {
    lines = lines[0]!
      .split(/(?<=[。.!?])\s+/)
      .map(normalizeWhitespace)
      .filter(Boolean)
      .slice(0, 4);
  }

  const fallbacks = [
    `${repository.fullName} の目的と主要機能を提供するプロジェクトです。`,
    repository.description ?? 'README から利用対象とユースケースを確認してください。',
    repository.language
      ? `主要言語は ${repository.language} です。`
      : '主要言語は Trending ページから判定できませんでした。',
    '導入方法、制約、ライセンスなどの詳細はリポジトリの README を参照してください。'
  ];

  for (const fallback of fallbacks) {
    if (lines.length >= 4) break;
    lines.push(fallback);
  }

  return [lines[0]!, lines[1]!, lines[2]!, lines[3]!];
}

export class OllamaSummarizer {
  private readonly client: Ollama;
  private readonly model: string;
  private readonly readmeMaxChars: number;

  constructor(options: OllamaSummarizerOptions) {
    this.client = new Ollama({
      host: options.host,
      headers: options.apiKey ? { Authorization: `Bearer ${options.apiKey}` } : undefined
    });
    this.model = options.model;
    this.readmeMaxChars = options.readmeMaxChars;
  }

  async assertAvailable(): Promise<void> {
    let result;
    try {
      result = await this.client.list();
    } catch (error) {
      throw new Error(
        'Could not connect to Ollama. Start Ollama and verify OLLAMA_HOST/--ollama-host.',
        { cause: error }
      );
    }

    const available = result.models
      .flatMap((item) => {
        const candidate = item as unknown as { name?: string; model?: string };
        return [candidate.name, candidate.model];
      })
      .filter((name): name is string => Boolean(name));

    const modelBase = this.model.replace(/:latest$/, '');
    const found = available.some((name) => {
      const availableBase = name.replace(/:latest$/, '');
      return name === this.model || availableBase === modelBase;
    });

    if (!found) {
      const shown = available.slice(0, 12).join(', ') || '(none)';
      throw new Error(
        `Ollama model "${this.model}" is not installed. Run: ollama pull ${this.model}\nAvailable: ${shown}`
      );
    }
  }

  async summarizeRepository(
    repository: TrendingRepository,
    readme: string | null
  ): Promise<RepositorySummary> {
    const source: RepositorySummary['source'] = readme ? 'readme' : 'description';
    const input = readme
      ? cleanReadme(readme, this.readmeMaxChars)
      : repository.description ?? `${repository.fullName} has no accessible README or description.`;

    const response = await this.client.chat({
      model: this.model,
      stream: false,
      think: false,
      format: 'json',
      options: {
        temperature: 0.15,
        num_ctx: 8192
      },
      messages: [
        {
          role: 'system',
          content: [
            'あなたはOSSリポジトリのREADMEを正確に要約する技術編集者です。',
            '入力にない機能、性能、人気、将来計画を推測しないでください。',
            '出力は説明なしのJSONオブジェクトだけにしてください。'
          ].join('\n')
        },
        {
          role: 'user',
          content: [
            `Repository: ${repository.fullName}`,
            `Trending description: ${repository.description ?? '(none)'}`,
            `Primary language: ${repository.language ?? '(unknown)'}`,
            `Source: ${source}`,
            '',
            '以下のJSON形式で日本語回答してください。',
            '{',
            '  "summary": ["1行目", "2行目", "3行目", "4行目"],',
            '  "category": "短い分類名",',
            '  "keywords": ["3〜6個のキーワード"]',
            '}',
            '',
            'summary は必ず4要素とし、各要素は1文・120文字以内にします。',
            '4行は順に「何をするものか」「主な機能/仕組み」「対象ユーザー/用途」「導入や注意点」を優先してください。',
            '',
            'README or fallback description:',
            input
          ].join('\n')
        }
      ]
    });

    const data = asRecord(extractJsonObject(response.message.content));
    return {
      lines: fourSummaryLines(data.summary, repository),
      category: stringValue(data.category, 'その他'),
      keywords: stringArray(data.keywords, 6),
      source,
      warning: readme ? undefined : 'READMEを取得できなかったため、Trendingの説明文を要約しました。'
    };
  }

  async analyzeTrends(repositories: SummarizedRepository[]): Promise<TrendAnalysis> {
    const input = repositories.map(({ repository, summary }) => ({
      repository: repository.fullName,
      description: repository.description,
      language: repository.language,
      starsDuringPeriod: repository.periodStars,
      category: summary.category,
      keywords: summary.keywords,
      summary: summary.lines
    }));

    const response = await this.client.chat({
      model: this.model,
      stream: false,
      think: false,
      format: 'json',
      options: {
        temperature: 0.2,
        num_ctx: 16384
      },
      messages: [
        {
          role: 'system',
          content: [
            'あなたはGitHub Trendingを分析する技術リサーチャーです。',
            '与えられた一覧だけを根拠に、過度な一般化を避けて傾向を整理してください。',
            '出力は説明なしのJSONオブジェクトだけにしてください。'
          ].join('\n')
        },
        {
          role: 'user',
          content: [
            '次のJSON形式で日本語回答してください。',
            '{',
            '  "headline": "全体傾向を表す1文",',
            '  "overview": ["全体傾向の要点を3〜5件"],',
            '  "themes": [',
            '    {"name": "テーマ名", "explanation": "根拠を含む説明", "repositories": ["owner/repo"]}',
            '  ],',
            '  "observations": ["ランキングや言語分布などの補足を2〜4件"]',
            '}',
            'themes は2〜5件にしてください。リポジトリ名は入力にあるものだけを使ってください。',
            '',
            JSON.stringify(input)
          ].join('\n')
        }
      ]
    });

    const data = asRecord(extractJsonObject(response.message.content));
    const themesRaw = Array.isArray(data.themes) ? data.themes : [];
    const themes = themesRaw
      .map((value) => {
        try {
          const theme = asRecord(value);
          return {
            name: stringValue(theme.name, 'その他'),
            explanation: stringValue(theme.explanation, ''),
            repositories: stringArray(theme.repositories, 8)
          };
        } catch {
          return null;
        }
      })
      .filter((value): value is NonNullable<typeof value> => value !== null)
      .slice(0, 5);

    return {
      headline: stringValue(data.headline, '複数の技術テーマが並ぶTrending一覧です。'),
      overview: stringArray(data.overview, 5),
      themes,
      observations: stringArray(data.observations, 4)
    };
  }
}
