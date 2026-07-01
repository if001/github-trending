export type TrendingPeriod = 'weekly' | 'monthly';

export interface TrendingRepository {
  rank: number;
  owner: string;
  name: string;
  fullName: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number | null;
  forks: number | null;
  periodStars: number | null;
}

export interface RepositorySummary {
  lines: [string, string, string, string];
  category: string;
  keywords: string[];
  source: 'readme' | 'description';
  warning?: string;
}

export interface SummarizedRepository {
  repository: TrendingRepository;
  summary: RepositorySummary;
}

export interface TrendTheme {
  name: string;
  explanation: string;
  repositories: string[];
}

export interface TrendAnalysis {
  headline: string;
  overview: string[];
  themes: TrendTheme[];
  observations: string[];
}

export interface CliOptions {
  language: string;
  period: TrendingPeriod;
  limit: number;
  output: string;
  model: string;
  ollamaHost: string;
  ollamaApiKey?: string;
  concurrency: number;
  readmeMaxChars: number;
}
