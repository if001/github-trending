+++
title = 'GitHub Trending 1週間レポート (All) - 2026/06/30'
date = 2026-06-30T08:10:31.209Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年6月30日 17:10:31
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 3
- 要約モデル: `gemma4:31b`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントの能力を拡張するための、ビデオ制作・コード解析・デザイン定義のツール群が注目を集めている。

- AIエージェントによるコンテンツ制作の自動化パイプラインの登場
- コードベースをナレッジグラフ化し、エージェントの解析効率を高めるMCPサーバーの普及
- AIエージェントに視覚的アイデンティティを正確に伝えるための標準フォーマットの提案

### 主なテーマ

- **AIエージェント向け開発支援・インフラ**: コードベースの高速インデックス化を実現するMCPサーバーや、デザインシステムを構造的に伝える仕様書など、エージェントの理解度と精度を向上させるツールが展開されている。（`DeusData/codebase-memory-mcp`、`google-labs-code/design.md`）
- **AIによるビデオ制作の自動化**: リサーチから編集までをAIエージェントが完結させるオープンソースのビデオ制作システムが登場している。（`calesthio/OpenMontage`）

### 補足的な観察

- Python、C、TypeScriptと、用途に応じて多様な言語が採用されている。
- OpenMontageが17,483 starsと、提示されたリポジトリの中で最も高い注目を集めている。

### 言語分布

| Language | Repositories |
|---|---:|
| C | 1 |
| Python | 1 |
| TypeScript | 1 |

### LLMによるカテゴリ分布

| Category | Repositories |
|---|---:|
| MCPサーバー | 1 |
| デザインシステム仕様 | 1 |
| ビデオ制作自動化ツール | 1 |

## Repository一覧

### 1. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)

> World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI coding assistant into a full video production studio.

- Language: Python
- Stars: 29,129
- Forks: 3,270
- Stars in 1週間: 17,483
- Category: ビデオ制作自動化ツール
- Keywords: `AIエージェント` `ビデオ制作` `オープンソース` `Remotion` `パイプライン`
- Summary source: README

#### README要約

- AIエージェントがリサーチから編集までを完結させる、オープンソースのビデオ制作システムです。
- ストック素材の収集、AI画像・動画生成、ナレーション、字幕付与、Remotionによる合成をパイプラインで制御します。
- AIコーディングアシスタントを利用して、自然言語による指示で高品質な動画を制作したいユーザーに適しています。
- Python 3.10以上、FFmpeg、Node.js 18以上の環境が必要であり、各種APIキーの設定で利用可能なツールが拡張されます。

---

### 2. [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)

> High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.

- Language: C
- Stars: 21,947
- Forks: 1,589
- Stars in 1週間: 9,899
- Category: MCPサーバー
- Keywords: `コードインテリジェンス` `ナレッジグラフ` `Tree-sitter` `静的解析` `MCP`
- Summary source: README

#### README要約

- AIコーディングエージェント向けに、コードベースを高速にインデックス化するコードインテリジェンスMCPサーバーです。
- Tree-sitterによる158言語の解析とHybrid LSPを用いて、関数やクラス、コールチェーンなどの永続的なナレッジグラフを構築します。
- Claude CodeやVS Codeなどの主要なコーディングエージェントを利用し、構造的なコード探索や影響分析を行いたい開発者に適しています。
- 依存関係のない単一の静的バイナリとして提供されており、インストールスクリプトを実行することで簡単に導入可能です。

---

### 3. [google-labs-code/design.md](https://github.com/google-labs-code/design.md)

> A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system.

- Language: TypeScript
- Stars: 23,337
- Forks: 1,840
- Stars in 1週間: 7,104
- Category: デザインシステム仕様
- Keywords: `Design Tokens` `Coding Agents` `Visual Identity` `Linter` `W3C Design Tokens Format`
- Summary source: README

#### README要約

- コーディングエージェントに視覚的アイデンティティを伝えるためのフォーマット仕様書です。
- 機械可読なYAML形式のデザイントークンと、人間が読めるMarkdown形式の設計根拠を組み合わせて構成されます。
- デザインシステムの構造的な理解をエージェントに提供し、一貫性のあるUI生成を目的として利用します。
- CLIツールによるバリデーションや差分検知、Tailwind CSS等の形式へのエクスポートが可能です。
