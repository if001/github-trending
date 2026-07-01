import { parseArgs } from 'node:util';
import path from 'node:path';
import type { CliOptions, TrendingPeriod } from './types.js';

const HELP = `
GitHub Trending + Ollama report generator

Usage:
  npm run trending -- [options]

Options:
  --language <name>          GitHub language slug or "any" (default: any)
  --date-range <range>       week | month | weekly | monthly (default: week)
  --since <range>            Alias of --date-range
  --limit <number>           Maximum repositories to process (default: 25)
  --output <path>            Markdown output path (default: content/posts/YYYYMM/...)
  --model <name>             Ollama model (default: OLLAMA_MODEL or qwen3:8b)
  --ollama-host <url>        Ollama host (default: OLLAMA_HOST or http://127.0.0.1:11434)
  --concurrency <number>     Concurrent README/LLM jobs (default: 2)
  --readme-max-chars <n>     Maximum README characters sent to Ollama (default: 12000)
  -h, --help                 Show this help

Examples:
  npm run trending -- --language any --date-range week
  npm run trending -- --language typescript --date-range month
  npm run trending -- --language "c++" --since weekly --limit 10
`;

function parseInteger(value: string | undefined, name: string, min: number, max: number): number {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < min || parsed > max) {
    throw new Error(`${name} must be an integer between ${min} and ${max}.`);
  }
  return parsed;
}

function parsePeriod(value: string | undefined): TrendingPeriod {
  switch ((value ?? 'week').toLowerCase()) {
    case 'week':
    case 'weekly':
    case '1week':
      return 'weekly';
    case 'month':
    case 'monthly':
    case '1month':
      return 'monthly';
    default:
      throw new Error('--date-range/--since must be week, month, weekly, or monthly.');
  }
}

function safeFilePart(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9+#.-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'any';
}

function localDateParts(date: Date): { yyyymm: string; yyyymmdd: string } {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return {
    yyyymm: `${year}${month}`,
    yyyymmdd: `${year}${month}${day}`
  };
}

function defaultOutput(language: string, period: TrendingPeriod): string {
  const { yyyymm, yyyymmdd } = localDateParts(new Date());
  return path.join(
    'content',
    'posts',
    yyyymm,
    `github-trending-${yyyymmdd}-${safeFilePart(language)}-${period}.md`
  );
}

export function parseCliOptions(): CliOptions {
  const { values } = parseArgs({
    options: {
      language: { type: 'string', default: 'any' },
      'date-range': { type: 'string' },
      since: { type: 'string' },
      limit: { type: 'string', default: '25' },
      output: { type: 'string' },
      model: { type: 'string' },
      'ollama-host': { type: 'string' },
      concurrency: { type: 'string', default: '2' },
      'readme-max-chars': { type: 'string', default: '12000' },
      help: { type: 'boolean', short: 'h', default: false }
    },
    allowPositionals: false,
    strict: true
  });

  if (values.help) {
    console.log(HELP.trim());
    process.exit(0);
  }

  const language = (values.language ?? 'any').trim();
  if (!language || language.includes('/')) {
    throw new Error('--language must be "any" or a GitHub language name/slug without "/".');
  }

  const period = parsePeriod(values['date-range'] ?? values.since);

  return {
    language,
    period,
    limit: parseInteger(values.limit, '--limit', 1, 100),
    output: values.output ?? defaultOutput(language, period),
    model: values.model ?? process.env.OLLAMA_MODEL ?? 'qwen3:8b',
    ollamaHost: values['ollama-host'] ?? process.env.OLLAMA_HOST ?? 'http://127.0.0.1:11434',
    ollamaApiKey: process.env.OLLAMA_API_KEY,
    concurrency: parseInteger(values.concurrency, '--concurrency', 1, 8),
    readmeMaxChars: parseInteger(values['readme-max-chars'], '--readme-max-chars', 1000, 100000)
  };
}
