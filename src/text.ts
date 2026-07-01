export function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function parseHumanNumber(value: string): number | null {
  const normalized = value.replace(/,/g, '').trim().toLowerCase();
  const match = normalized.match(/([0-9]+(?:\.[0-9]+)?)([km])?/);
  if (!match?.[1]) return null;

  const base = Number(match[1]);
  const multiplier = match[2] === 'k' ? 1_000 : match[2] === 'm' ? 1_000_000 : 1;
  const result = Math.round(base * multiplier);
  return Number.isFinite(result) ? result : null;
}

export function cleanReadme(markdown: string, maxChars: number): string {
  const cleaned = markdown
    .replace(/<!--([\s\S]*?)-->/g, '')
    .replace(/^\s*\[?!?\[[^\]]*\]\([^\n]+\)\]\([^\n]+\)\s*$/gm, '')
    .replace(/^\s*!\[[^\]]*\]\([^\n]+\)\s*$/gm, '')
    .replace(/^\s*<img\b[^>]*>\s*$/gim, '')
    .replace(/^\s*<picture\b[\s\S]*?<\/picture>\s*$/gim, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  if (cleaned.length <= maxChars) return cleaned;

  const marker = '\n\n[README truncated by the report generator]\n\n';
  const headLength = Math.floor((maxChars - marker.length) * 0.8);
  const tailLength = Math.max(0, maxChars - marker.length - headLength);
  return `${cleaned.slice(0, headLength)}${marker}${cleaned.slice(-tailLength)}`;
}

export function extractJsonObject(value: string): unknown {
  const trimmed = value
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '');

  try {
    return JSON.parse(trimmed);
  } catch {
    const start = trimmed.indexOf('{');
    const end = trimmed.lastIndexOf('}');
    if (start >= 0 && end > start) {
      return JSON.parse(trimmed.slice(start, end + 1));
    }
    throw new Error('Ollama did not return a JSON object.');
  }
}

export function asRecord(value: unknown): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error('Expected a JSON object.');
  }
  return value as Record<string, unknown>;
}

export function stringArray(value: unknown, max = Number.POSITIVE_INFINITY): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === 'string')
    .map((item) => normalizeWhitespace(item))
    .filter(Boolean)
    .slice(0, max);
}
