+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/09/05'
date = 2026-09-05T22:42:57.940Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月5日 22:42:57
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントの周辺基盤（MCP連携・ローカル推論・ワークフロー統制）をTypeScriptで整備する動きが集中し、非AIの基盤ライブラリも一部で堅調です。

- 掲載18件中17件がTypeScriptで、言語分布が大きく偏っています。
- MCPサーバー経由でエージェントに機能を足す構成が複数見られます（Chrome DevTools、SEO、Web検索、コード解析など）。
- ローカル/セルフホスト志向が強く、オフライン推論やAPIキー不要、Docker/セルフホスト可能な構成が目立ちます。
- スター獲得はOpenMAICが突出して多く、次いでopen-seo、freellmapi、humanlayer/skillsの順です。

### 主なテーマ

- **コーディングエージェントの実行基盤（CLI/ローカル推論/無料API集約）**: openclaudeは複数プロバイダーを切り替えるコーディングエージェントCLI、magnitudeはハードウェアに合わせたローカルモデル推論サーバー、freellmapiは無料LLMエンドポイントをOpenAI互換APIに集約するゲートウェイで、いずれも既存エージェントやOpenAI互換クライアントとの接続を前提にしています。（`Gitlawb/openclaude`、`magnitudedev/magnitude`、`tashfeenahmed/freellmapi`）
- **MCPでエージェントに外部能力を追加（ブラウザ/SEO/Web/コード理解）**: chrome-devtools-mcpはChrome制御・検査、open-seoはSEOワークフロー、wigoloは検索/取得/クロール、GitNexusはコードのナレッジグラフ化をMCP経由で提供し、エージェントの作業範囲を広げる方向が共通しています。（`ChromeDevTools/chrome-devtools-mcp`、`every-app/open-seo`、`KnockOutEZ/wigolo`、`abhigyanpatwari/GitNexus`）
- **AI開発プロセスの標準化・拡張（スキル/プラグイン/ワークフロー）**: humanlayer/skillsはClaude Code用スキル集、cursor/pluginsはCursor公式プラグインとマニフェスト管理、aidlc-workflowsは承認ゲート付きの多段ワークフロー、ArchonはYAMLで開発工程を定義して再現可能にするなど、エージェント運用を仕組み化するテーマが並んでいます。（`humanlayer/skills`、`cursor/plugins`、`awslabs/aidlc-workflows`、`coleam00/Archon`）
- **ローカル/セルフホストのAI・データ基盤（ブラウザ推論/知識化/メッセージング）**: web-llmはWebGPUでブラウザ内推論、llm_wikiはローカルでWiki化とMCP内蔵、OpenWAはセルフホストのWhatsApp APIゲートウェイで、クラウド依存を減らす設計が明示されています。（`mlc-ai/web-llm`、`nashsu/llm_wiki`、`rmyndharis/OpenWA`）
- **非AIの基盤ライブラリ/開発体験改善（バリデーション/3D/ローカルURL）**: zodはスキーマ検証と型推論、react-three-fiberはThree.jsのReactレンダラー、portlessはポート番号の代わりに安定した名前付きローカルURLを提供し、AI以外の開発基盤もランクインしています。（`colinhacks/zod`、`pmndrs/react-three-fiber`、`vercel-labs/portless`）

### 補足的な観察

- starsDuringPeriodの最大はTHU-MAIC/OpenMAICの10274で、2位のevery-app/open-seo（2950）と大きく離れています。
- 上位はAI関連が中心ですが、colinhacks/zod（297）やpmndrs/react-three-fiber（261）など非AIの基盤系も一定の伸びを示しています。
- ローカル実行・セルフホストを明示する項目が複数あり、magnitude（オフライン/プライバシー）、wigolo（APIキー不要/ローカル保存）、OpenWA（Docker/セルフホスト）などに表れています。

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 18 |

## Repository一覧

### 1. [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)

> Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click

- Language: TypeScript
- Stars: 31,910
- Forks: 5,236
- Stars in 1週間: 10,274
- Category: AI教育プラットフォーム
- Keywords: `マルチエージェント` `インタラクティブ学習` `AI教室` `コース生成` `TypeScript` `オープンソース`
- Summary source: README

#### README要約

- OpenMAICは、トピックやドキュメントからインタラクティブな教室体験を生成するオープンソースのAIプラットフォームです。
- マルチエージェントオーケストレーションにより、スライド、クイズ、シミュレーション、PBL活動を生成し、AI教師とAIクラスメートがリアルタイムで対話します。
- 教育者や学習者がワンクリックで没入型のマルチエージェント学習体験を得ることを目的としています。
- Vercelでのデプロイが可能で、LLMプロバイダーのAPIキー設定が必要です。ライセンスはMITです。

---

### 2. [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

> runs anywhere. uses anything

- Language: TypeScript
- Stars: 32,707
- Forks: 9,063
- Stars in 1週間: 1,679
- Category: コーディングエージェントCLI
- Keywords: `CLI` `コーディングエージェント` `マルチプロバイダー` `Ollama` `MCP` `VS Code拡張`
- Summary source: README

#### README要約

- クラウドおよびローカルのモデルプロバイダー向けのオープンソースコーディングエージェントCLIです。
- OpenAI互換API、Gemini、GitHub Models、Ollamaなど複数バックエンドを切り替え、プロンプト、ツール、エージェント、MCP、スラッシュコマンド、ストリーミング出力を一つのターミナルワークフローで扱えます。
- プロバイダー横断でコーディング作業を行いたい開発者向けで、会話の再開・分岐、バックグラウンドセッション、VS Code拡張による起動連携やエディタ内チャットも提供します。
- Node.js 22以上が必要でnpmでグローバルインストールし、/providerで設定します。プロジェクトの.envは自動読み込みされず、ripgrepが必要な場合があります。Anthropic非公式の独立プロジェクトです。

---

### 3. [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude)

> Open source inference server that runs the best local models for your hardware, plugged into the agent you already use. Works with Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.

- Language: TypeScript
- Stars: 3,168
- Forks: 227
- Stars in 1週間: 740
- Category: ローカルLLM推論サーバー
- Keywords: `ローカルLLM` `推論サーバー` `AIエージェント` `オフライン` `プライバシー` `TypeScript`
- Summary source: README

#### README要約

- Magnitudeは、ハードウェアに最適なローカルモデルを実行し、既存のAIエージェントに接続するオープンソースの推論サーバーです。
- マシンの性能をプロファイルして最適なモデルを推薦・ダウンロード・チューニングし、投機的デコーディングやメモリ管理を自動で行います。
- Pi、OpenCode、Claude Code、Clineなどのエージェントと連携し、完全オフラインかつプライベートな環境でAIコーディングを行いたい開発者に適しています。
- macOSとLinux（WindowsはWSL経由）に対応し、npmでCLIをインストールしてエージェント経由または対話形式のセットアップで導入できます。

---

### 4. [every-app/open-seo](https://github.com/every-app/open-seo)

> Open source alternative to Semrush and Ahrefs

- Language: TypeScript
- Stars: 17,268
- Forks: 2,161
- Stars in 1週間: 2,950
- Category: SEOツール
- Keywords: `SEO` `オープンソース` `MCP` `AIエージェント` `セルフホスト` `DataForSEO`
- Summary source: README

#### README要約

- SemrushやAhrefsのオープンソース代替となる、従量課金制のオールインワンSEOツール。
- キーワード調査、ランクトラッキング、競合分析、バックリンク、サイト監査などのワークフローを備え、MCPサーバー経由でClaude CodeなどのAIエージェントと連携できる。
- 高価なSEOツールを避けたい個人やチーム、AIエージェントにSEOデータを使わせたい開発者向け。
- 利用にはDataForSEO APIキーが必要で、DockerまたはCloudflareでセルフホスト可能。ホスト版は月額10ドル。

---

### 5. [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

> Chrome DevTools for coding agents

- Language: TypeScript
- Stars: 51,056
- Forks: 3,578
- Stars in 1週間: 1,067
- Category: 開発者ツール
- Keywords: `MCP` `Chrome DevTools` `ブラウザ自動化` `Puppeteer` `パフォーマンス分析` `デバッグ`
- Summary source: README

#### README要約

- コーディングエージェントがChromeブラウザを制御・検査できるようにするMCPサーバー。
- パフォーマンストレースの記録、ネットワーク解析、スクリーンショット、Puppeteerによる自動化を提供する。
- Claude、Cursor、CopilotなどのAIコーディングアシスタントを使う開発者向けで、デバッグや性能分析に利用する。
- Node.js LTSと安定版Chromeが必要で、npxで起動。ブラウザ内容がMCPクライアントに公開される点に注意が必要。

---

### 6. [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)

> 7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.

- Language: TypeScript
- Stars: 24,421
- Forks: 3,338
- Stars in 1週間: 2,888
- Category: LLM APIゲートウェイ
- Keywords: `OpenAI互換API` `無料LLMプロバイダー集約` `スマートルーティング` `自動フェイルオーバー` `セルフホスト` `TypeScript`
- Summary source: README

#### README要約

- 34の無料LLMプロバイダーと635の無料モデルエンドポイントを、単一のOpenAI互換/v1 APIの背後に集約するルーター。
- スマートルーティング、レート制限時の自動フェイルオーバー、キーの暗号化保存、キーごとの使用量追跡を備え、署名付きフィードでモデルカタログを自動更新する。
- Claude CodeやCodex CLIなどのコーディングエージェントやOpenAI互換クライアントから、無料枠を積み上げて個人の実験・学習に利用する用途を想定。
- デスクトップアプリやDockerでセルフホスト可能だが、本番利用は非推奨で各プロバイダーの利用規約遵守はユーザー責任。ライブカタログは年19ドルのプレミアム版。

---

### 7. [rmyndharis/OpenWA](https://github.com/rmyndharis/OpenWA)

> Free, Open Source, Self-Hosted WhatsApp API Gateway

- Language: TypeScript
- Stars: 13,798
- Forks: 3,196
- Stars in 1週間: 501
- Category: WhatsApp APIゲートウェイ
- Keywords: `WhatsApp API` `セルフホスト` `マルチセッション` `TypeScript` `Docker` `プラグイン`
- Summary source: README

#### README要約

- OpenWAは、ベンダーロックインなしでメッセージング基盤を完全に制御できる、無料のオープンソースWhatsApp APIゲートウェイです。
- プラグ可能なアーキテクチャを採用し、設定によりデータベース（SQLite/PostgreSQL）、ストレージ（Local/S3）、キャッシュ（Redis）を切り替え可能です。
- 複数のWhatsAppセッションを同時に管理する開発者や、Chatwoot/n8n連携による自動化を求めるセルフホストユーザーに適しています。
- 非公式のリバースエンジニアリングクライアントを使用するためアカウント制限リスクがあり、規制環境では公式Cloud APIの使用が推奨されます。

---

### 8. [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki)

> LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。

- Language: TypeScript
- Stars: 17,442
- Forks: 2,062
- Stars in 1週間: 504
- Category: 知識管理ツール
- Keywords: `LLM` `知識ベース` `RAG` `Wiki` `デスクトップアプリ` `Obsidian`
- Summary source: README

#### README要約

- LLM Wikiは、ドキュメントを自動で整理・相互リンクされた知識ベースに変換するクロスプラットフォームのデスクトップアプリケーションです。
- 従来のRAGとは異なり、LLMがソースから永続的なWikiを段階的に構築・維持し、2段階のChain-of-Thought取り込みや知識グラフ、ベクトル検索などの機能を備えています。
- 個人の知識管理を効率化したいユーザーや、研究・読書・ビジネスなどの用途で情報を体系的に整理したい人に適しています。
- TypeScript製で、ローカルHTTP APIやMCPサーバーを内蔵し、Obsidian互換のWikiディレクトリを生成します。

---

### 9. [vercel-labs/portless](https://github.com/vercel-labs/portless)

> Replace port numbers with stable, named local URLs. For humans and agents.

- Language: TypeScript
- Stars: 12,166
- Forks: 399
- Stars in 1週間: 788
- Category: ローカル開発プロキシツール
- Keywords: `localhost` `ポート管理` `HTTPS` `モノレポ` `git worktree` `TypeScript`
- Summary source: README

#### README要約

- ローカル開発でポート番号の代わりに「https://myapp.localhost」のような安定した名前付きURLを使えるようにするツール。
- ローカルプロキシがアプリにランダムなポートを割り当て、HTTPS/HTTP2対応やフレームワークへのポートフラグ自動注入、サブドメインやgit worktreeごとのURL分けに対応する。
- Next.jsやViteなどのフレームワークを使う開発者やエージェント向けで、モノレポやTurborepo環境での複数アプリ管理にも利用できる。
- npmでグローバルまたはdev依存として導入し、Node.js 24以上が必要。pre-1.0のため状態ディレクトリ形式が変わる可能性があり、初回はローカルCAの信頼設定が行われる。

---

### 10. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 6,924
- Forks: 578
- Stars in 1週間: 992
- Category: 開発ツール
- Keywords: `Cursor` `プラグイン` `マーケットプレイス` `AI` `開発者ツール` `統合`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール・フレームワーク・SaaS製品向けのプラグインを提供するマーケットプレイスリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェストで管理される。スキル、ルール、MCPサーバー定義などを含む。
- Cursorエディタのユーザーが、GitHub、Googleサービス、Slack、その他多数の外部サービスやAIワークフローと連携する際に使用する。
- マーケットプレイスから必要なプラグインを選択して導入。各プラグインは独自のREADME、CHANGELOG、LICENSEを持ち、MITライセンスで提供される。

---

### 11. [humanlayer/skills](https://github.com/humanlayer/skills)

- Language: TypeScript
- Stars: 2,668
- Forks: 74
- Stars in 1週間: 1,832
- Category: AI開発ツール
- Keywords: `Claude Code` `スキル` `エージェント` `GitHub Actions` `React` `TypeScript`
- Summary source: README

#### README要約

- HumanLayerが提供するClaude Code用スキル集のリポジトリです。
- CLAUDE.md改善、React props型の絞り込み、エージェントループ構築、制御ループ設計、図解説明の5スキルを収録しています。
- Claude Codeを使う開発者がプロジェクトの指示遵守やコード品質、エージェントワークフロー構築を改善する用途に向いています。
- npx skills add humanlayer/skills --skill SKILLNAMEで導入し、プロジェクト内でスラッシュコマンドとして実行します。

---

### 12. [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows)

> AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents

- Language: TypeScript
- Stars: 4,371
- Forks: 779
- Stars in 1週間: 135
- Category: AI開発ワークフローフレームワーク
- Keywords: `AI-DLC` `マルチハーネス` `承認ゲート` `14エージェント` `33ステージ` `TypeScript`
- Summary source: README

#### README要約

- AI-DLC Workflows 2.0は、AIエージェントを検証可能で自己修正型のエンジニアリングワークフローに変換する、ハーネス中立のコアから複数のAIコーディングツール（Claude Code、Kiro IDE/CLI、Codex CLI、Cursor、opencode、GitHub Copilot）にネイティブ対応するフレームワークです。
- 5フェーズ33ステージの構造化された開発ライフサイクルを、11のドメイン専門家、2つのレビュー専門エージェント、アダプティブワークフローコンポーザーを含む14エージェント体制で実行し、全ステージで承認ゲートを設けます。
- AIを活用したソフトウェア開発に構造と統制を求める開発者やチームを対象とし、概念実証から規制対応のエンタープライズ展開まで対応可能です。
- 導入にはbunのインストールが必須で、Claude Opus 4.8の利用が推奨されます。生成AIの出力は必ず確認し、依存する場合は既知の安定バージョンに固定してください。

---

### 13. [mlc-ai/web-llm](https://github.com/mlc-ai/web-llm)

> High-performance In-browser LLM Inference Engine

- Language: TypeScript
- Stars: 18,994
- Forks: 1,374
- Stars in 1週間: 375
- Category: ブラウザAI推論エンジン
- Keywords: `WebGPU` `OpenAI API互換` `インブラウザ推論` `LLM` `TypeScript` `プライバシー`
- Summary source: README

#### README要約

- WebLLMは、WebGPUによるハードウェアアクセラレーションを活用し、サーバー不要でブラウザ上で直接言語モデル推論を実行する高性能なインブラウザLLM推論エンジンです。
- OpenAI APIと完全な互換性を持ち、ストリーミング、JSONモード、関数呼び出し（開発中）などの機能をサポートし、Llama 3、Phi 3、Gemma、Mistral、Qwenなどの多様なオープンソースモデルをローカルで実行できます。
- プライバシーを重視したAIアシスタントやチャットボット、バーチャルアシスタントなどのインタラクティブなWebアプリケーションを構築する開発者を対象としています。
- npmパッケージまたはCDN経由で導入可能で、初回実行時はモデルのダウンロードに時間がかかる場合があるため、適切な非同期処理とキャッシュバックエンド（Cache API、IndexedDB、OPFSなど）の設定が必要です。

---

### 14. [colinhacks/zod](https://github.com/colinhacks/zod)

> TypeScript-first schema validation with static type inference

- Language: TypeScript
- Stars: 43,846
- Forks: 2,177
- Stars in 1週間: 297
- Category: バリデーションライブラリ
- Keywords: `TypeScript` `スキーマ検証` `型推論` `z.infer` `AOTコンパイル` `JSON Schema`
- Summary source: README

#### README要約

- TypeScriptファーストのスキーマバリデーションライブラリで、スキーマを定義してデータをパースすると強く型付けされた検証済みの結果が得られる。
- ゼロ依存・2kbのコアバンドルで、Node.jsとモダンブラウザで動作し、不変API、JSON Schema変換、AOTコンパイルによる高速化を備える。
- TypeScriptおよびプレーンなJSの開発者が、信頼できない入力データの検証やz.inferによる静的型推論に利用する。
- npm install zodで導入でき、非同期API使用時はparseAsyncが必要で、z.compileはnew Functionを使うためCSP環境では無効化される点に注意。

---

### 15. [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus)

> GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a git repository (Github, Gitlab, Azure, Local) or ZIP file, and get an interactive knowledge graph with a built in Graph RAG Agent. Perfect for code exploration

- Language: TypeScript
- Stars: 47,052
- Forks: 5,153
- Stars in 1週間: 1,006
- Category: コード解析・AI開発支援ツール
- Keywords: `ナレッジグラフ` `MCP` `Tree-sitter` `Graph RAG` `コード解析` `AIエージェント`
- Summary source: README

#### README要約

- GitNexusはコードベースをナレッジグラフ化し、依存関係・呼び出しチェーン・実行フローをAIエージェントに提供するコードインテリジェンスエンジンです。
- CLIでリポジトリを解析しMCP経由でCursorやClaude Code等と連携するほか、ブラウザ上で動作するWeb UIでもグラフ探索とAIチャットが可能です。
- AIコーディングツールを使う開発者が、依存関係の見落としや破壊的変更を防ぐための深いアーキテクチャ理解を得る用途に適しています。
- npx gitnexus analyzeとsetupの2コマンドで導入でき、npm 11の不具合時はpnpm利用やグローバルインストールが推奨されます。

---

### 16. [coleam00/Archon](https://github.com/coleam00/Archon)

> The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.

- Language: TypeScript
- Stars: 23,386
- Forks: 3,464
- Stars in 1週間: 96
- Category: AI開発ワークフローエンジン
- Keywords: `AIコーディング` `ワークフロー自動化` `YAML定義` `Claude Code` `git worktree` `PR自動化`
- Summary source: README

#### README要約

- AIコーディングを決定論的かつ再現可能にする、オープンソースのワークフローエンジンです。
- YAMLで計画・実装・検証・レビュー・PR作成などの開発プロセスを定義し、AIノードとbashなどの決定論的ノードを組み合わせて実行します。
- AIコーディングエージェントを利用する開発者が、git worktreeによる隔離環境で複数タスクを並列実行し、CLI・Web UI・Slackなどから利用できます。
- Bun・Claude Code・GitHub CLIが前提で、クローン後のセットアップウィザードか単体CLIインストールで導入し、対象リポジトリから実行します。

---

### 17. [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber)

> 🇨🇭 A React renderer for Three.js

- Language: TypeScript
- Stars: 32,115
- Forks: 1,955
- Stars in 1週間: 261
- Category: 3Dレンダリングライブラリ
- Keywords: `React` `Three.js` `3D` `JSX` `WebGL` `TypeScript`
- Summary source: README

#### README要約

- Three.jsのためのReactレンダラーで、3Dシーンを宣言的に構築できるライブラリ。
- 再利用可能なコンポーネントで状態管理やユーザーインタラクション、レンダーループへの参加が可能。
- ReactとThree.jsの両方の知識がある開発者が、WebやReact Nativeで3Dアプリを作る用途に適する。
- npmでthreeと@react-three/fiberをインストールし、Reactのメジャーバージョンに対応するバージョンを選ぶ必要がある。

---

### 18. [KnockOutEZ/wigolo](https://github.com/KnockOutEZ/wigolo)

> The go-to web for your AI coding agent — local-first search, fetch, crawl & research over MCP. No API keys, no cloud, $0/query. Public beta.

- Language: TypeScript
- Stars: 5,073
- Forks: 398
- Stars in 1週間: 252
- Category: AIエージェント用Web検索・クロール基盤
- Keywords: `MCPサーバー` `ローカルファースト` `Web検索` `クローリング` `AIエージェント` `APIキー不要`
- Summary source: README

#### README要約

- AIエージェント向けのローカルファーストなWebインテリジェンスツールで、検索・取得・クロール・抽出・リサーチなどをMCP/REST/SDK経由で提供する。
- 18の検索エンジンアダプタによるマルチエンジン検索、ランク融合、オンデバイスのMLリランキングを備え、キャッシュや埋め込みはすべて~/.wigolo/に保存される。
- Claude Code、Cursor、CodexなどのコーディングエージェントやLangChain等のフレームワーク、セルフホストエージェントの利用者が対象。
- npx wigolo initで導入できNode 20以上と約1.5GBのディスクが必要。基本機能はAPIキー不要だが、research/agentの高品質な回答生成にはLLMキー（無料のGeminiキー等）が推奨される。

---
