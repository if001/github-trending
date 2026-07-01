import type {
  SummarizedRepository,
  TrendAnalysis,
  TrendingPeriod
} from './types.js';

interface ReportOptions {
  generatedAt: Date;
  language: string;
  period: TrendingPeriod;
  sourceUrl: string;
  model: string;
  repositories: SummarizedRepository[];
  trendAnalysis: TrendAnalysis;
}

function formatNumber(value: number | null): string {
  return value === null ? '不明' : new Intl.NumberFormat('ja-JP').format(value);
}

function escapeTable(value: string): string {
  return value.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function languageDistribution(repositories: SummarizedRepository[]): Array<[string, number]> {
  const counts = new Map<string, number>();
  for (const { repository } of repositories) {
    const language = repository.language ?? '不明';
    counts.set(language, (counts.get(language) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function categoryDistribution(repositories: SummarizedRepository[]): Array<[string, number]> {
  const counts = new Map<string, number>();
  for (const { summary } of repositories) {
    counts.set(summary.category, (counts.get(summary.category) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function periodLabel(period: TrendingPeriod): string {
  return period === 'weekly' ? '1週間' : '1か月';
}

function tomlString(value: string): string {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function frontMatterTitle(language: string, period: TrendingPeriod, generatedAt: Date): string {
  const date = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(generatedAt);
  const scope = language.toLowerCase() === 'any' ? 'All' : language;
  return `GitHub Trending ${periodLabel(period)}レポート (${scope}) - ${date}`;
}

export function renderMarkdownReport(options: ReportOptions): string {
  const lines: string[] = [];
  const generated = new Intl.DateTimeFormat('ja-JP', {
    dateStyle: 'long',
    timeStyle: 'medium'
  }).format(options.generatedAt);
  const title = frontMatterTitle(options.language, options.period, options.generatedAt);
  const timestamp = options.generatedAt.toISOString();
  const tags = ['github', 'trending', options.period, options.language.toLowerCase() === 'any' ? 'any' : options.language.toLowerCase()];

  lines.push('+++');
  lines.push(`title = ${tomlString(title)}`);
  lines.push(`date = ${timestamp}`);
  lines.push('draft = false');
  lines.push('categories = [\'GitHub Trending\']');
  lines.push(`tags = [${tags.map((tag) => tomlString(tag)).join(', ')}]`);
  lines.push('+++', '');

  lines.push('# GitHub Trending レポート', '');
  lines.push(`- 取得日時: ${generated}`);
  lines.push(`- Language: ${options.language.toLowerCase() === 'any' ? 'Any' : options.language}`);
  lines.push(`- Date range: ${periodLabel(options.period)}`);
  lines.push(`- 対象リポジトリ数: ${options.repositories.length}`);
  lines.push(`- 要約モデル: \`${options.model}\``);
  lines.push(`- 取得元: [GitHub Trending](${options.sourceUrl})`, '');

  lines.push('## 今回のTrendingの傾向', '');
  lines.push(`> ${options.trendAnalysis.headline}`, '');

  for (const item of options.trendAnalysis.overview) {
    lines.push(`- ${item}`);
  }
  if (options.trendAnalysis.overview.length) lines.push('');

  if (options.trendAnalysis.themes.length) {
    lines.push('### 主なテーマ', '');
    for (const theme of options.trendAnalysis.themes) {
      const repos = theme.repositories.length
        ? `（${theme.repositories.map((repo) => `\`${repo}\``).join('、')}）`
        : '';
      lines.push(`- **${theme.name}**: ${theme.explanation}${repos}`);
    }
    lines.push('');
  }

  if (options.trendAnalysis.observations.length) {
    lines.push('### 補足的な観察', '');
    for (const observation of options.trendAnalysis.observations) {
      lines.push(`- ${observation}`);
    }
    lines.push('');
  }

  lines.push('### 言語分布', '');
  lines.push('| Language | Repositories |', '|---|---:|');
  for (const [language, count] of languageDistribution(options.repositories)) {
    lines.push(`| ${escapeTable(language)} | ${count} |`);
  }
  lines.push('');

  // lines.push('### LLMによるカテゴリ分布', '');
  // lines.push('| Category | Repositories |', '|---|---:|');
  // for (const [category, count] of categoryDistribution(options.repositories)) {
  //   lines.push(`| ${escapeTable(category)} | ${count} |`);
  // }
  // lines.push('');

  lines.push('## Repository一覧', '');
  for (const { repository, summary } of options.repositories) {
    lines.push(`### ${repository.rank}. [${repository.fullName}](${repository.url})`, '');
    if (repository.description) lines.push(`> ${repository.description}`, '');

    lines.push(
      `- Language: ${repository.language ?? '不明'}`,
      `- Stars: ${formatNumber(repository.stars)}`,
      `- Forks: ${formatNumber(repository.forks)}`,
      `- Stars in ${periodLabel(options.period)}: ${formatNumber(repository.periodStars)}`,
      `- Category: ${summary.category}`,
      `- Keywords: ${summary.keywords.length ? summary.keywords.map((item) => `\`${item}\``).join(' ') : 'なし'}`,
      `- Summary source: ${summary.source === 'readme' ? 'README' : 'Trending description'}`,
      ''
    );

    lines.push('#### README要約', '');
    for (const line of summary.lines) lines.push(`- ${line}`);
    if (summary.warning) lines.push('', `> 注意: ${summary.warning}`);
    lines.push('', '---', '');
  }

  // lines.push(
  //   '## 注記',
  //   '',
  //   '- GitHub Trendingには公開された公式APIがないため、TrendingページのHTMLを解析しています。HTML構造が変わると取得処理の修正が必要です。',
  //   '- READMEは長さを制限してOllamaへ渡しています。非常に長いREADMEでは一部が省略されます。',
  //   '- LLM要約は誤りを含む可能性があります。重要な判断ではリンク先のREADMEを確認してください。',
  //   ''
  // );

  return lines.join('\n');
}
