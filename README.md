# GitHub Trending + Ollama Markdown Generator

GitHub Trending のリポジトリ一覧を取得し、各リポジトリの README を Ollama で4行に要約し、一覧全体の傾向とともに Markdown へ出力する TypeScript スクリプトです。

## 処理の流れ

1. `https://github.com/trending` または言語別 Trending ページを取得
2. リポジトリ名、説明、言語、Star/Fork、期間内StarをHTMLから抽出
3. GitHub REST API の `GET /repos/{owner}/{repo}/readme` で README を取得
4. Ollamaで各READMEを4行に要約し、カテゴリとキーワードも生成
5. 全リポジトリの要約をOllamaへ渡し、今回のTrendingの傾向を分析
6. Hugoの記事として使えるMarkdownへ出力

## 必要環境

- Node.js 20以上
- npm
- Ollama
- Ollamaにインストール済みの日本語を扱えるモデル

例:

```bash
ollama pull qwen3:8b
```

## セットアップ

```bash
npm install
cp .env.example .env
```

公開リポジトリのREADMEはGitHub認証なしでも取得できます。ただし未認証APIはレート制限が低いため、継続利用では `GITHUB_TOKEN` の設定を推奨します。

```dotenv
GITHUB_TOKEN=github_pat_xxx
OLLAMA_HOST=http://127.0.0.1:11434
OLLAMA_MODEL=qwen3:8b
```

## GitHub Pages での公開

`content/posts/` に生成された記事を Hugo でビルドし、GitHub Pages へ公開できます。リポジトリの **Settings > Pages** で **Source** を **GitHub Actions** に設定してください。

リポジトリ側には以下を設定します。

| Kind | Name | Required | Purpose |
|---|---|---|---|
| Secret | `OLLAMA_HOST` | Yes | GitHub Actions から到達できる Ollama エンドポイント |
| Secret | `OLLAMA_API_KEY` | No | Ollama が Bearer 認証を要求する場合 |
| Variable | `OLLAMA_MODEL` | No | Actions 実行時に使うモデル名。未設定時は `qwen3:8b` |

Actions では `GITHUB_TOKEN` を自動利用して README 取得のレート制限を緩和します。

### 定期実行

`.github/workflows/weekly-pages.yml` は Hugo のビルドと GitHub Pages へのデプロイまで含みます。

- `run.sh`: 毎週土曜 06:00 JST に実行
- `run_other.sh`: 毎週日曜 06:00 JST に実行

GitHub Actions の cron は UTC 基準のため、workflow 内では `0 21 * * 5` と `0 21 * * 6` を使っています。必要なら `workflow_dispatch` から `run.sh` / `run_other.sh` を手動実行できます。

## 実行例

### Language = Any、1週間

```bash
npm run trending -- --language any --date-range week
```

### TypeScript、1か月

```bash
npm run trending -- --language typescript --date-range month
```

### C++、1週間、上位10件

```bash
npm run trending -- --language "c++" --date-range week --limit 10
```

デフォルトの出力先:

```text
content/posts/YYYYMM/github-trending-YYYYMMDD-<language>-<weekly|monthly>.md
```

生成されるMarkdownには Hugo 向けの TOML front matter (`+++`) が含まれるため、そのまま記事として配置できます。

任意の出力先を指定することもできます。

```bash
npm run trending -- \
  --language rust \
  --date-range month \
  --output reports/rust-monthly.md
```

## CLIオプション

| Option | Description | Default |
|---|---|---|
| `--language` | `any` または GitHub の言語名/slug | `any` |
| `--date-range` | `week`, `month`, `weekly`, `monthly` | `week` |
| `--since` | `--date-range` の別名 | - |
| `--limit` | 処理する最大件数 | `25` |
| `--output` | Markdown出力先 | 自動生成 |
| `--model` | Ollamaモデル | `OLLAMA_MODEL` / `qwen3:8b` |
| `--ollama-host` | Ollamaのホスト | `OLLAMA_HOST` / `http://127.0.0.1:11434` |
| `--concurrency` | README取得・要約の同時実行数 | `2` |
| `--readme-max-chars` | Ollamaへ渡すREADMEの最大文字数 | `12000` |

## ビルドして実行

```bash
npm run build
npm start -- --language any --date-range week
```

Hugo のローカル確認例:

```bash
hugo server
```

## 出力されるMarkdown

- Hugo front matter
- 取得条件と実行情報
- Trending全体の要約
- 主なテーマ
- 言語分布
- LLM分類によるカテゴリ分布
- 各リポジトリの基本情報
- 各READMEの4行要約
- README取得失敗や要約失敗の警告

## 実装上の注意

GitHub Trendingには公開された公式APIがないため、一覧取得はHTMLスクレイピングです。GitHub側のDOM構造変更時には `src/github.ts` のセレクタを修正してください。

READMEはGitHub REST APIからraw形式で取得します。公開リポジトリだけならトークンなしでも利用できますが、大量・定期実行ではAPIレート制限を避けるためトークンを設定してください。

OllamaのChat APIはJSON出力モードを利用し、Markdown自体はプログラム側で組み立てています。これにより、見出しや表の形式がLLM出力に左右されにくくなっています。

GitHub-hosted runner 上に Ollama を常駐させる構成ではないため、定期実行では GitHub Actions から接続できる `OLLAMA_HOST` を用意してください。
