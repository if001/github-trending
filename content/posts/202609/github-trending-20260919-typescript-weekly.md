+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/09/19'
date = 2026-09-19T22:43:32.468Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月19日 22:43:32
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントとその周辺ツールがTypeScript製プロジェクトとして席巻し、セルフホスト型の業務・クリエイターツールも並行して伸びている

- 一覧16件中すべてがTypeScript製で、言語分布が完全にTypeScriptに集中している
- Claude Code、Cline、PI-DesktopなどAIコーディングエージェント本体と、context-modeやOpenSpecのようなエージェント運用を支える周辺ツールが多数を占める
- stablyai/orcaが5272スターで最大の伸びを示し、複数エージェントの並列実行・管理への関心の高さがうかがえる
- LibreChat、DeskcommCRM、OpenStockなど「高額SaaSのオープンソース代替」を掲げるセルフホスト型プロダクトが複数ランクインしている
- hyperframesやvoiceboxのように、AIエージェント連携を前提とした動画・音声のクリエイター向けツールも登場している

### 主なテーマ

- **AIコーディングエージェント本体**: anthropics/claude-code（1620スター）、cline/cline（1090スター）、vastsa/PI-Desktop（1661スター）がランクインしており、ターミナル・IDE・デスクトップそれぞれで動作するエージェント型コーディングツールが揃って注目されている。PI-Desktopはローカルファーストとモデル非依存を謳い、ベンダーロックイン回避を訴求している。（`anthropics/claude-code`、`cline/cline`、`vastsa/PI-Desktop`）
- **エージェント運用・オーケストレーション基盤**: 最大の伸びを示したstablyai/orca（5272スター）は複数エージェントをgit worktreeで並列実行する環境を提供し、mksglu/context-mode（1398スター）はコンテキスト消費を最大98%削減、Fission-AI/OpenSpec（1519スター）は仕様駆動開発ワークフローを提供する。エージェントを実運用するための周辺基盤が厚く支持されている。（`stablyai/orca`、`mksglu/context-mode`、`Fission-AI/OpenSpec`）
- **セルフホスト型のオープンソース代替プロダクト**: danny-avila/LibreChat（1528スター）はChatGPT風のセルフホストチャット、melgarafael/DeskcommCRM（2089スター）はKommoやIntercomの代替CRM、Open-Dev-Society/OpenStock（1460スター）は高額な市場プラットフォームの代替を明示しており、既存SaaSへのオープンソース対抗軸が共通している。（`danny-avila/LibreChat`、`melgarafael/DeskcommCRM`、`Open-Dev-Society/OpenStock`）
- **エージェント連携を前提としたクリエイター・音声動画ツール**: heygen-com/hyperframes（2401スター）は「Built for agents」と銘打ちHTMLからMP4動画を生成し、jamiepine/voicebox（2281スター）は音声クローニング・TTS・MCP対応の音声出力を備える。いずれもAIエージェントとの連携を設計前提にしたメディア生成系ツールで、2000スター超の伸びを見せている。（`heygen-com/hyperframes`、`jamiepine/voicebox`）

### 補足的な観察

- スター伸びの上位はstablyai/orca（5272）、ever-co/ever-gauzy（3559）、heygen-com/hyperframes（2401）の順で、AI以外ではERP/CRM統合のever-gauzyが大きく伸びている
- 下位にはNangoHQ/nango（462）やrowboatlabs/rowboat（438）などAPI統合・AIコワーカー系が位置し、伸び幅には約12倍の開きがある
- supabase/supabase（1152）のような定番インフラがAIアプリ構築を謳って再び注目される一方、reconurge/flowsint（1171）のようなOSINT調査ツールもランクインし用途は多岐にわたる
- MCP（Model Context Protocol）対応を明示するリポジトリがcontext-mode、LibreChat、voicebox、nango、rowboatなど複数あり、エージェント間連携の規格として定着しつつある様子がうかがえる

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 16 |

## Repository一覧

### 1. [anthropics/claude-code](https://github.com/anthropics/claude-code)

> Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.

- Language: TypeScript
- Stars: 146,684
- Forks: 23,914
- Stars in 1週間: 1,620
- Category: AIコーディングツール
- Keywords: `Claude Code` `エージェント` `ターミナル` `自然言語` `Git` `プラグイン`
- Summary source: README

#### README要約

- Claude Codeはターミナル上で動作し、コードベースを理解して自然言語コマンドでコーディングを支援するエージェント型ツールです。
- 定型タスクの実行、複雑なコードの説明、Gitワークフローの処理などを自然言語で指示でき、ターミナル・IDE・GitHub上で利用可能です。
- 開発者が日常のコーディング作業を効率化するために設計されており、プラグインによる機能拡張もサポートされています。
- npm経由のインストールは非推奨となり、curl・Homebrew・WinGetなどの推奨方法でインストールし、プロジェクトディレクトリでclaudeコマンドを実行して起動します。

---

### 2. [mksglu/context-mode](https://github.com/mksglu/context-mode)

> Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.

- Language: TypeScript
- Stars: 23,662
- Forks: 1,706
- Stars in 1週間: 1,398
- Category: AI開発ツール
- Keywords: `コンテキスト最適化` `MCPサーバー` `AIコーディングエージェント` `セッション永続化` `TypeScript`
- Summary source: README

#### README要約

- AIコーディングエージェントのコンテキストウィンドウを最適化するMCPサーバー。
- ツール出力をサンドボックス化してコンテキスト消費を最大98%削減し、SQLite+FTS5でセッション記憶を永続化する。
- Claude CodeやGemini CLIなど17プラットフォームのAIエージェント利用者が対象で、MCP+フック経由でルーティングを強制する。
- Claude Codeではプラグインマーケットプレイスから導入可能。ライセンスはElastic License 2.0で、ホスト型サービスとしての提供は禁止。

---

### 3. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 51,644
- Forks: 4,706
- Stars in 1週間: 2,401
- Category: 動画生成フレームワーク
- Keywords: `HTML to Video` `AIエージェント` `MP4レンダリング` `TypeScript` `Puppeteer` `FFmpeg`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションから決定論的なMP4動画を生成するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして動作し、PuppeteerとFFmpegを使用したキャプチャエンジンを備える。
- Claude Code、Cursor、Gemini CLI、CodexなどのAIエージェントや、プロダクト紹介動画、解説動画、プレゼンデッキなどを作成する開発者・チームが対象。
- Node.js 22以上が必要で、開発用にクローンする場合はGit LFSのインストールが必要（ソースのみならスキップ可能）。

---

### 4. [stablyai/orca](https://github.com/stablyai/orca)

> Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.

- Language: TypeScript
- Stars: 72,580
- Forks: 4,749
- Stars in 1週間: 5,272
- Category: AI開発環境
- Keywords: `AIエージェント` `並列実行` `git worktree` `コーディングエージェント` `モバイル連携` `オープンソース`
- Summary source: README

#### README要約

- 複数のAIコーディングエージェントを並列で実行・管理するためのオーケストレーション環境（ADE）です。
- 各エージェントを独立したgit worktreeで動かし、結果の比較・マージ、ターミナル分割、GitHub/Linear連携、SSH経由のリモート実行などが可能です。
- Claude CodeやCodexなど任意のCLIエージェントを自分のサブスクリプションで使いたい開発者や、モバイルからエージェントを監視したいユーザー向けです。
- デスクトップはHomebrewやAURでインストールでき、iOS/Androidのモバイル companion アプリと連携します。MITライセンスのオープンソースです。

---

### 5. [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat)

> Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active

- Language: TypeScript
- Stars: 44,401
- Forks: 9,120
- Stars in 1週間: 1,528
- Category: AIチャットプラットフォーム
- Keywords: `セルフホスト` `マルチモデル対応` `AIエージェント` `MCP` `コードインタプリタ` `オープンソース`
- Summary source: README

#### README要約

- ChatGPT風のUIを持つオープンソースのセルフホスト型AIチャットアプリで、OpenAI、Anthropic、Google、Azureなど多数のAIモデルに対応する。
- AIエージェント、MCPサポート、コードインタプリタ、Web検索、画像生成、マルチモーダル対応、会話の分岐・検索など多彩な機能を備える。
- 個人利用からチーム・企業利用まで幅広く、マルチユーザー認証や権限管理を備え、AIインフラを自分で管理したいユーザー向け。
- Dockerやワンクリックデプロイで導入可能だが、更新前に破壊的変更の確認が推奨され、一部機能は実験的段階にある。

---

### 6. [supabase/supabase](https://github.com/supabase/supabase)

> The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.

- Language: TypeScript
- Stars: 110,319
- Forks: 14,382
- Stars in 1週間: 1,152
- Category: バックエンドプラットフォーム
- Keywords: `PostgreSQL` `Firebase代替` `認証` `Realtime` `オープンソース` `BaaS`
- Summary source: README

#### README要約

- Supabaseは、エンタープライズグレードのオープンソースツールを用いてFirebaseの機能を構築するPostgres開発プラットフォームです。
- ホスト型Postgresデータベース、認証・認可、自動生成API（REST/GraphQL/Realtime）、Functions、ファイルストレージ、AI/ベクトルツールキット、ダッシュボードを提供します。
- Web、モバイル、AIアプリケーションを構築する開発者が対象で、JavaScript/TypeScript、Flutter、Swift、Pythonなどの公式クライアントライブラリが用意されています。
- ホスト型プラットフォームとしてインストール不要で利用開始できるほか、セルフホストやローカル開発も可能です。

---

### 7. [cline/cline](https://github.com/cline/cline)

> Autonomous coding agent as an SDK, IDE extension, or CLI assistant.

- Language: TypeScript
- Stars: 68,780
- Forks: 7,445
- Stars in 1週間: 1,090
- Category: AIコーディングエージェント
- Keywords: `自律型エージェント` `VS Code拡張` `CLI` `マルチエージェント` `MCP` `TypeScript`
- Summary source: README

#### README要約

- ClineはIDE、ターミナル、デスクトップで動作するオープンソースの自律型コーディングエージェントです。
- コード編集、Bashコマンド実行、Plan/Actモード切替、マルチエージェント連携、スケジュール実行などの機能を備えています。
- 開発者がVS CodeやJetBrainsなどの環境でAI支援によるコーディング、自動化、CI/CD統合を行う用途に適しています。
- npmでCLIやSDKをインストール可能で、VS Code MarketplaceやJetBrains Marketplaceから拡張機能として導入できます。

---

### 8. [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop)

> Local-first AI coding agent desktop: Electron + Rust host core + pi Agent Harness + user-installable plugins

- Language: TypeScript
- Stars: 4,481
- Forks: 379
- Stars in 1週間: 1,661
- Category: AIコーディングエージェント
- Keywords: `AIエージェント` `デスクトップアプリ` `ローカルファースト` `Electron` `Rust` `プラグイン`
- Summary source: README

#### README要約

- PI-Desktopは、AIコーディングエージェントのためのローカルファーストなデスクトップワークスペースです。
- ElectronとRust製ホストコアで構築され、モデル非依存でOpenAI、Anthropic、ローカルモデルなどを切り替えて利用できます。
- コーディング作業を効率化したい開発者や、エディタやモデルベンダーにロックインされずにAIエージェントを活用したいユーザーに適しています。
- 現在Early Preview段階であり、APIや拡張機能のインターフェースは変更される可能性がある点に注意が必要です。

---

### 9. [ever-co/ever-gauzy](https://github.com/ever-co/ever-gauzy)

> Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co

- Language: TypeScript
- Stars: 7,779
- Forks: 1,154
- Stars in 1週間: 3,559
- Category: ビジネス管理プラットフォーム
- Keywords: `ERP` `CRM` `HRM` `ATS` `プロジェクト管理` `タイムトラッキング`
- Summary source: README

#### README要約

- Ever Gauzyは、協働型・オンデマンド・シェアリングエコノミー向けのオープンなビジネス管理プラットフォームです。
- ERP、CRM、HRM、ATS、プロジェクト管理、勤怠・活動・生産性トラッキングなどの機能を統合的に提供します。
- 企業、オンデマンド事業、フリーランス、代理店、社内チームなどが業務管理に利用することを想定しています。
- デモやSaaS版、デスクトップアプリが提供されますが、SaaS版はアルファ版のため注意して利用する必要があります。

---

### 10. [reconurge/flowsint](https://github.com/reconurge/flowsint)

> A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.

- Language: TypeScript
- Stars: 8,824
- Forks: 1,076
- Stars in 1週間: 1,171
- Category: OSINT調査ツール
- Keywords: `OSINT` `グラフ探索` `サイバーセキュリティ` `エンリッチャー` `偵察` `Docker`
- Summary source: README

#### README要約

- Flowsintは、倫理的な調査・透明性・検証を目的としたオープンソースのOSINTグラフ探索ツール。
- 視覚的なグラフインターフェースと自動エンリッチャーにより、ドメイン・IP・メール・暗号資産などのエンティティ間の関係を探索できる。
- サイバーセキュリティ研究者、ジャーナリスト、OSINT調査員、法執行機関、脅威インテリジェンス担当者などを対象としている。
- DockerとMake（WindowsはDocker DesktopとGit）で導入可能で、全データはローカルに保存される。ネットワーク公開時は.envのシークレット変更が必須。

---

### 11. [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM)

> Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.

- Language: TypeScript
- Stars: 3,301
- Forks: 801
- Stars in 1週間: 2,089
- Category: セルフホストCRM
- Keywords: `オープンソース` `WhatsApp` `AIエージェント` `セルフホスト` `CRM` `LGPD`
- Summary source: README

#### README要約

- DeskcommCRMは、WhatsApp上でAIエージェントが応対・見込み客の絞り込み・販売を行う、セルフホスト型のオープンソースCRMです。
- VPSに1コマンドでインストールでき、Docker・Supabase・WAHA（WhatsAppエンジン）を組み合わせ、OpenRouter/Anthropic/OpenAIのAIキーで動作します。
- チャットで販売するあらゆるビジネスを対象とし、Kommo・Octadesk・Intercomのオープンな代替として、月額費用なしでデータを自社管理できます。
- インストールにはDocker搭載VPS（4GB RAM推奨）、ドメイン、Supabaseアカウント、AIプロバイダーのキーが必要で、LGPD上はホスト側がデータ管理者となります。

---

### 12. [Open-Dev-Society/OpenStock](https://github.com/Open-Dev-Society/OpenStock)

> OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.

- Language: TypeScript
- Stars: 15,993
- Forks: 2,081
- Stars in 1週間: 1,460
- Category: 株式市場トラッカー
- Keywords: `Next.js` `TypeScript` `MongoDB` `Finnhub` `TradingView` `オープンソース`
- Summary source: README

#### README要約

- OpenStockは高額な市場プラットフォームのオープンソース代替で、リアルタイム価格追跡や企業インサイトを提供する株式市場アプリです。
- Next.js 15とTypeScriptで構築され、Finnhub APIによる市場データ、TradingViewウィジェットによるチャート、Better Authによる認証、MongoDBによるデータ永続化を備えています。
- 個人投資家や学生など、無料で市場情報にアクセスしたいユーザーを対象とし、ウォッチリスト管理、パーソナライズドアラート、AI生成のウェルカムメールや日次ニュース要約を提供します。
- Node.js 20+とMongoDB、Finnhub APIキーが必要で、Docker Composeでの起動も可能です。AGPL-3.0ライセンスのため、改変・再配布・Webサービスとしてデプロイする場合はソースコード公開が必須です。

---

### 13. [jamiepine/voicebox](https://github.com/jamiepine/voicebox)

> The open-source AI voice studio. Clone, dictate, create.

- Language: TypeScript
- Stars: 55,187
- Forks: 6,882
- Stars in 1週間: 2,281
- Category: AI音声合成・音声認識ツール
- Keywords: `音声クローニング` `TTS` `音声入力` `ローカル実行` `MCP` `オープンソース`
- Summary source: README

#### README要約

- VoiceboxはローカルファーストのオープンソースAI音声スタジオで、ElevenLabsとWisprFlowの代替として音声の入出力を一つのアプリで提供する。
- 7つのTTSエンジンで23言語の音声生成、数秒の音声からのクローニング、グローバルホットキーによる音声入力、MCP対応エージェントへの音声出力などを備える。
- プライバシーを重視する開発者やクリエイター向けで、ポッドキャスト制作、音声ナレーション、AIエージェントとの音声対話などに利用できる。
- macOS、Windows、Dockerで動作し、Linuxはソースからビルドが必要。MITライセンスで、Tauri（Rust）製のネイティブアプリとして提供される。

---

### 14. [NangoHQ/nango](https://github.com/NangoHQ/nango)

> Build product integrations with AI.

- Language: TypeScript
- Stars: 12,257
- Forks: 1,358
- Stars in 1週間: 462
- Category: API統合プラットフォーム
- Keywords: `API統合` `AI` `TypeScript` `OAuth` `オープンソース` `MCP`
- Summary source: README

#### README要約

- NangoはAIを活用してプロダクト統合を構築するオープンソースプラットフォームで、1,000以上のAPIに対応しています。
- Auth、Proxy、Functionsの3つのプリミティブを提供し、TypeScript関数として統合ロジックを記述するかAIに生成させることができます。
- AIエージェントのツール呼び出し、データ同期、Webhook処理、API統一化などの用途に対応し、あらゆるバックエンド言語やAIコーディングツールと連携可能です。
- Nango Cloudまたはセルフホストで利用でき、無料プランでは機能制限があり、Elastic Licenseの下で提供されています。

---

### 15. [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)

> Spec-driven development (SDD) for AI coding assistants.

- Language: TypeScript
- Stars: 69,558
- Forks: 4,764
- Stars in 1週間: 1,519
- Category: AI開発支援ツール
- Keywords: `仕様駆動開発` `AIコーディングアシスタント` `スラッシュコマンド` `TypeScript` `CLI` `オープンソース`
- Summary source: README

#### README要約

- AIコーディングアシスタント向けの仕様駆動開発（SDD）フレームワークで、コードを書く前に人間とAIが仕様に合意できる軽量な仕様レイヤーを提供する。
- 提案・仕様・設計・タスクを変更ごとのフォルダで管理し、/opsx:exploreや/opsx:proposeなどのスラッシュコマンドで探索から実装、アーカイブまでのワークフローを回す。
- 個人開発からチーム・エンタープライズまでを対象とし、30以上のAIアシスタントに対応、チーム向けには複数リポジトリ横断で計画を共有できるStores（ベータ）も提供する。
- Node.js 20.19.0以上が必要で、npmでグローバルインストール後にopenspec initで初期化する。高推論モデル推奨、匿名テレメトリはオプトアウト可能。

---

### 16. [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat)

> AI coworker with memory and collaboration

- Language: TypeScript
- Stars: 17,912
- Forks: 1,784
- Stars in 1週間: 438
- Category: AIアシスタント
- Keywords: `AIコワーカー` `マルチプレイヤー` `ローカルファースト` `コラボレーション` `MCP` `オープンソース`
- Summary source: README

#### README要約

- Rowboatは、記憶とコラボレーション機能を備えたAIコワーカーで、チームでのAI活用をマルチプレイヤー化するデスクトップアプリです。
- 各ユーザーが自分のマシン上でローカルアシスタントを動かし、共有スペース（Space）でメッセージ、ファイル、ホワイトボードを通じて協働します。
- メール、会議、ノート、コードなどの個人コンテキストを保持しつつ、@rowboatで呼び出すと自分のAIが自分のコンテキストで作業して結果を共有します。
- Mac/Windows/Linux向けにダウンロード提供され、ローカルファースト設計でデータはMarkdown形式で保存され、セルフホストも可能です。

---
