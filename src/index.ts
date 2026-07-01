import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import pLimit from 'p-limit';
import { parseCliOptions } from './cli.js';
import { fetchRepositoryReadme, fetchTrendingRepositories } from './github.js';
import { renderMarkdownReport } from './markdown.js';
import { OllamaSummarizer } from './ollama.js';
import type { SummarizedRepository, TrendAnalysis } from './types.js';

function fallbackTrendAnalysis(repositories: SummarizedRepository[]): TrendAnalysis {
  const languages = new Map<string, number>();
  const categories = new Map<string, number>();

  for (const item of repositories) {
    const language = item.repository.language ?? '不明';
    languages.set(language, (languages.get(language) ?? 0) + 1);
    categories.set(item.summary.category, (categories.get(item.summary.category) ?? 0) + 1);
  }

  const topLanguages = [...languages.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, count]) => `${name} (${count})`)
    .join('、');
  const topCategories = [...categories.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, count]) => `${name} (${count})`)
    .join('、');

  return {
    headline: 'リポジトリ要約は作成できましたが、全体傾向のLLM分析は失敗したため集計値を表示します。',
    overview: [
      `上位の言語分布: ${topLanguages || '不明'}`,
      `上位のカテゴリ分布: ${topCategories || '不明'}`
    ],
    themes: [],
    observations: []
  };
}

async function main(): Promise<void> {
  const options = parseCliOptions();
  const githubToken = process.env.GITHUB_TOKEN?.trim() || undefined;

  console.log(`[1/4] Fetching GitHub Trending: language=${options.language}, period=${options.period}`);
  const { sourceUrl, repositories } = await fetchTrendingRepositories(
    options.language,
    options.period,
    options.limit
  );
  console.log(`      Found ${repositories.length} repositories.`);

  console.log(`[2/4] Checking Ollama model: ${options.model}`);
  const summarizer = new OllamaSummarizer({
    host: options.ollamaHost,
    model: options.model,
    readmeMaxChars: options.readmeMaxChars,
    apiKey: options.ollamaApiKey
  });
  await summarizer.assertAvailable();

  console.log(`[3/4] Fetching READMEs and generating four-line summaries...`);
  const limit = pLimit(options.concurrency);
  let completed = 0;

  const summarized = await Promise.all(
    repositories.map((repository) =>
      limit(async (): Promise<SummarizedRepository> => {
        let readme: string | null = null;
        let readmeWarning: string | undefined;

        try {
          readme = await fetchRepositoryReadme(repository, githubToken);
          if (!readme) readmeWarning = 'README was not found.';
        } catch (error) {
          readmeWarning = error instanceof Error ? error.message : String(error);
          console.warn(`      README warning: ${repository.fullName}: ${readmeWarning}`);
        }

        let summary;
        try {
          summary = await summarizer.summarizeRepository(repository, readme);
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          console.warn(`      Summary warning: ${repository.fullName}: ${message}`);
          summary = {
            lines: [
              `${repository.fullName} の自動要約に失敗しました。`,
              repository.description ?? 'Trendingページに説明文がありません。',
              repository.language ? `主要言語は ${repository.language} です。` : '主要言語は不明です。',
              '詳細はリポジトリのREADMEを確認してください。'
            ] as [string, string, string, string],
            category: '要約失敗',
            keywords: [],
            source: readme ? 'readme' as const : 'description' as const,
            warning: message
          };
        }

        if (readmeWarning && !summary.warning) summary.warning = readmeWarning;
        completed += 1;
        console.log(`      [${completed}/${repositories.length}] ${repository.fullName}`);
        return { repository, summary };
      })
    )
  );

  let trendAnalysis: TrendAnalysis;
  try {
    trendAnalysis = await summarizer.analyzeTrends(summarized);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`      Trend analysis warning: ${message}`);
    trendAnalysis = fallbackTrendAnalysis(summarized);
  }

  console.log(`[4/4] Writing Markdown: ${options.output}`);
  const markdown = renderMarkdownReport({
    generatedAt: new Date(),
    language: options.language,
    period: options.period,
    sourceUrl,
    model: options.model,
    repositories: summarized,
    trendAnalysis
  });

  const outputPath = path.resolve(options.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, markdown, 'utf8');
  console.log(`Done: ${outputPath}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.stack ?? error.message : error);
  process.exitCode = 1;
});
