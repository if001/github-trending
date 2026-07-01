import * as cheerio from 'cheerio';
import type { TrendingPeriod, TrendingRepository } from './types.js';
import { normalizeWhitespace, parseHumanNumber } from './text.js';

const USER_AGENT = 'github-trending-ollama/1.0';
type CheerioSelection = ReturnType<ReturnType<typeof cheerio.load>>;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(
  url: string,
  init: RequestInit,
  attempts = 3,
  timeoutMs = 20_000
): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, { ...init, signal: controller.signal });
      const retryable = response.status === 429 || response.status >= 500;
      if (!retryable || attempt === attempts) return response;
      await sleep(500 * 2 ** (attempt - 1));
    } catch (error) {
      lastError = error;
      if (attempt === attempts) break;
      await sleep(500 * 2 ** (attempt - 1));
    } finally {
      clearTimeout(timeout);
    }
  }

  throw new Error(`Request failed after ${attempts} attempts: ${url}`, { cause: lastError });
}

function languageSlug(language: string): string | null {
  const normalized = language.trim().toLowerCase();
  if (normalized === 'any' || normalized === 'all' || normalized === '*') return null;
  return normalized.replace(/\s+/g, '-');
}

export function buildTrendingUrl(language: string, period: TrendingPeriod): string {
  const slug = languageSlug(language);
  const base = slug
    ? `https://github.com/trending/${encodeURIComponent(slug)}`
    : 'https://github.com/trending';
  const url = new URL(base);
  url.searchParams.set('since', period);
  return url.toString();
}

function parseRepositoryPath(href: string | undefined): { owner: string; name: string } | null {
  if (!href) return null;
  const match = href.match(/^\/([^/]+)\/([^/?#]+)\/?$/);
  if (!match?.[1] || !match[2]) return null;
  return { owner: match[1], name: match[2] };
}

function numberFromLink(
  article: CheerioSelection,
  suffix: '/stargazers' | '/forks'
): number | null {
  const text = article.find(`a[href$="${suffix}"]`).first().text();
  return parseHumanNumber(text);
}

function periodStarsFromArticle(article: CheerioSelection): number | null {
  const preferred = normalizeWhitespace(article.find('span.float-sm-right').text());
  const text = preferred || normalizeWhitespace(article.text());
  const match = text.match(/([0-9][0-9,.]*[km]?)\s+stars?\s+(?:today|this week|this month)/i);
  return match?.[1] ? parseHumanNumber(match[1]) : null;
}

export async function fetchTrendingRepositories(
  language: string,
  period: TrendingPeriod,
  limit: number
): Promise<{ sourceUrl: string; repositories: TrendingRepository[] }> {
  const sourceUrl = buildTrendingUrl(language, period);
  const response = await fetchWithRetry(sourceUrl, {
    headers: {
      'User-Agent': USER_AGENT,
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub Trending returned HTTP ${response.status}: ${response.statusText}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);
  const repositories: TrendingRepository[] = [];

  $('article.Box-row').each((index, element) => {
    if (repositories.length >= limit) return false;

    const article = $(element);
    const repoPath = parseRepositoryPath(article.find('h2 a').first().attr('href'));
    if (!repoPath) return;

    const descriptionText = normalizeWhitespace(
      article.find('p.col-9, p.my-1').first().text()
    );
    const languageText = normalizeWhitespace(
      article.find('[itemprop="programmingLanguage"]').first().text()
    );

    repositories.push({
      rank: index + 1,
      owner: repoPath.owner,
      name: repoPath.name,
      fullName: `${repoPath.owner}/${repoPath.name}`,
      url: `https://github.com/${repoPath.owner}/${repoPath.name}`,
      description: descriptionText || null,
      language: languageText || null,
      stars: numberFromLink(article, '/stargazers'),
      forks: numberFromLink(article, '/forks'),
      periodStars: periodStarsFromArticle(article)
    });
  });

  if (repositories.length === 0) {
    throw new Error(
      'No repositories were found. GitHub may have changed the Trending HTML or blocked the request.'
    );
  }

  return { sourceUrl, repositories };
}

export async function fetchRepositoryReadme(
  repository: TrendingRepository,
  githubToken: string | undefined
): Promise<string | null> {
  const url = `https://api.github.com/repos/${encodeURIComponent(repository.owner)}/${encodeURIComponent(repository.name)}/readme`;
  const headers: Record<string, string> = {
    'User-Agent': USER_AGENT,
    Accept: 'application/vnd.github.raw+json'
  };
  if (githubToken) headers.Authorization = `Bearer ${githubToken}`;

  const response = await fetchWithRetry(url, { headers });
  if (response.status === 404) return null;

  if (!response.ok) {
    const remaining = response.headers.get('x-ratelimit-remaining');
    const reset = response.headers.get('x-ratelimit-reset');
    const rateLimitHint = remaining === '0'
      ? ` GitHub API rate limit reached${reset ? `; reset epoch: ${reset}` : ''}. Set GITHUB_TOKEN.`
      : '';
    throw new Error(
      `README request for ${repository.fullName} returned HTTP ${response.status}.${rateLimitHint}`
    );
  }

  return response.text();
}
