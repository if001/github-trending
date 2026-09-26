+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/09/26'
date = 2026-09-26T23:24:47.526Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月26日 23:24:47
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> TypeScript製のAIエージェント関連ツールが席巻し、特にコーディングエージェントの統合管理・並列実行環境が大きく注目を集めている

- 一覧の全16リポジトリがTypeScriptで書かれており、言語分布が完全にTypeScript一色となっている
- AIコーディングエージェント本体（claude-code、cline）に加え、複数エージェントを統合管理するオーケストレーション層（paperclip、orca）が高いスター数を獲得している
- stablyai/orcaが6537スターで最大の伸びを示し、並列エージェント実行環境への関心の高さを反映している
- AI生成コードの信頼性を担保する仕組み（bendの証明による検証）や、AIによるUI生成（json-render）など、AI開発の周辺基盤も台頭している
- オフライン知識サーバーや株式トラッカー、画像アップスケーラーなど非AI系の実用ツールも一定の支持を得ている

### 主なテーマ

- **AIコーディングエージェントの統合・並列管理**: Claude CodeやCodexなど複数のコーディングエージェントを一元管理・並列実行するツールが上位を占めた。orcaは6537スターで最大、paperclipは2616スターで、いずれもgit worktreeによる隔離やダッシュボードでの監督機能を提供し、エージェント運用の基盤化が進んでいる（`stablyai/orca`、`paperclipai/paperclip`、`anthropics/claude-code`、`cline/cline`）
- **AIエージェントの能力拡張・連携基盤**: ブラウザ操作（BrowserSkill、2115スター）やオフィス文書操作（univer、3928スター）など、エージェントが外部アプリケーションを操作するためのハーネスやSDKが登場し、エージェントの適用範囲がコーディング以外へ広がっている（`Tencent/BrowserSkill`、`dream-num/univer`）
- **AI生成物の信頼性とUI生成**: bend（1530スター）はAI生成コードの誤りを数学的証明でブロックする言語、json-render（2103スター）はAIの出力をコンポーネントカタログで制約して安全にUIをレンダリングするフレームワークであり、AI出力の品質担保への関心がうかがえる（`bendlang/bend`、`vercel-labs/json-render`）
- **AI活用のクリエイター・コンテンツツール**: OpenCreator（961スター）はCodex CLIをエンジンに動画・画像・音声生成を統合し、AiToEarn（412スター）はコンテンツの作成から複数SNSへの投稿・収益化までを一元化するなど、創作・マーケティング領域でのAIワークスペース化が進んでいる（`krillinai/OpenCreator`、`yikart/AiToEarn`）
- **セルフホスト・オフライン指向の実用ツール**: project-nomad（1316スター）はオフラインで動作する知識・教育サーバー、OpenStock（3794スター）は高額な市場プラットフォームのオープンソース代替、upscayl（593スター）はローカル動作のAI画像アップスケーラーであり、自前環境で動く無料・オープンソースの実用ツールが支持されている（`Crosstalk-Solutions/project-nomad`、`Open-Dev-Society/OpenStock`、`upscayl/upscayl`）

### 補足的な観察

- スター数の上位はorca（6537）、univer（3928）、OpenStock（3794）、paperclip（2616）の順で、AIエージェント管理と非AI系実用ツールが混在している
- 全16件中15件がオープンソースライセンス（MIT、Apache-2.0、AGPL-3.0など）を明示しており、オープンソース提供がトレンド入りの前提条件になりつつある
- llm-wiki-compiler（95スター）やFxEmbed（417スター）など小規模ながらMCP対応やセルフホスト可能なニッチツールもランクインし、裾野の広さが見られる
- gitdiagram（754スター）のようにGitHubリポジトリの理解をAIで支援するツールもあり、開発者体験のAI化が多面的に進んでいる

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 16 |

## Repository一覧

### 1. [anthropics/claude-code](https://github.com/anthropics/claude-code)

> Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.

- Language: TypeScript
- Stars: 148,207
- Forks: 24,738
- Stars in 1週間: 2,102
- Category: AIコーディングツール
- Keywords: `Claude Code` `エージェント` `ターミナル` `自然言語` `Gitワークフロー` `プラグイン`
- Summary source: README

#### README要約

- Claude Codeはターミナル上で動作し、コードベースを理解して自然言語コマンドでコーディングを支援するエージェント型ツールです。
- 定型タスクの実行、複雑なコードの説明、Gitワークフローの処理を行い、ターミナル・IDE・GitHub上で@claudeタグ付けにより利用できます。
- 開発者が日常のコーディング作業を効率化するために使用し、プラグインによるカスタムコマンドやエージェントの拡張も可能です。
- npm経由のインストールは非推奨となり、MacOS/LinuxではcurlまたはHomebrew、WindowsではirmまたはWinGetでのインストールが推奨されています。

---

### 2. [paperclipai/paperclip](https://github.com/paperclipai/paperclip)

> The open-source app everyone uses to manage agents at work

- Language: TypeScript
- Stars: 87,211
- Forks: 15,418
- Stars in 1週間: 2,616
- Category: AIエージェント管理
- Keywords: `AIエージェント` `オーケストレーション` `タスク管理` `組織管理` `コスト管理` `オープンソース`
- Summary source: README

#### README要約

- Paperclipは、AIエージェントのチームを組織化して業務を管理するオープンソースのオーケストレーションアプリです。
- Node.jsサーバーとReact UIで構成され、目標設定、予算管理、ガバナンス、コスト追跡を一つのダッシュボードで行えます。
- 複数のAIエージェント（OpenClaw、Claude Code、Codex、Cursorなど）を統合し、自律的な業務遂行を監督したいチームや開発者向けです。
- MITライセンスで提供され、テレメトリーはデフォルトで有効ですが環境変数や設定で無効化可能です。

---

### 3. [stablyai/orca](https://github.com/stablyai/orca)

> Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.

- Language: TypeScript
- Stars: 78,898
- Forks: 5,170
- Stars in 1週間: 6,537
- Category: AI開発環境
- Keywords: `AIエージェント` `並列実行` `Git Worktree` `開発環境` `TypeScript` `オープンソース`
- Summary source: README

#### README要約

- Orcaは複数のAIコーディングエージェントを並列で管理・実行するためのオーケストレーションツール（ADE）です。
- 各エージェントを独立したgit worktreeで動かし、結果の比較・マージ、ターミナル分割、GitHub/Linear連携、SSH経由のリモート実行などが可能です。
- Claude CodeやCodexなど任意のCLIエージェントを自分のサブスクリプションで使いたい開発者や、モバイルから作業を監視したいユーザー向けです。
- デスクトップ（macOS/Windows/Linux）とモバイル（iOS/Android）向けに提供され、MITライセンスのオープンソースとして公開されています。

---

### 4. [dream-num/univer](https://github.com/dream-num/univer)

> The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.

- Language: TypeScript
- Stars: 19,188
- Forks: 1,633
- Stars in 1週間: 3,928
- Category: オフィススイートSDK
- Keywords: `オフィスSDK` `スプレッドシート` `プラグインアーキテクチャ` `Canvasレンダリング` `AIエージェント` `TypeScript`
- Summary source: README

#### README要約

- Univerは、スプレッドシート、ドキュメント、プレゼンテーションなどのオフィスアプリケーションを自社製品に組み込むためのオープンソースSDKです。
- プラグインアーキテクチャ、Canvasベースのレンダリング、数式エンジンを備え、ブラウザとNode.jsの両方で動作する統一されたFacade APIを提供します。
- SaaS製品や社内ツール、AIアプリケーションに表計算や文書編集機能を埋め込みたい開発者や、サーバーサイドでワークブック処理を実行したいユーザーに適しています。
- pnpmで必要なパッケージをインストールして使用し、Apache-2.0ライセンスで提供されます。PDF対応は近日公開予定です。

---

### 5. [Open-Dev-Society/OpenStock](https://github.com/Open-Dev-Society/OpenStock)

> OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.

- Language: TypeScript
- Stars: 19,310
- Forks: 2,362
- Stars in 1週間: 3,794
- Category: 株式市場トラッカー
- Keywords: `オープンソース` `株式` `Next.js` `MongoDB` `Finnhub` `TradingView`
- Summary source: README

#### README要約

- OpenStockは高額な市場プラットフォームのオープンソース代替として開発された株式市場アプリです。
- Next.js、MongoDB、Finnhub API、TradingViewウィジェットを用い、リアルタイム価格追跡、ウォッチリスト、企業インサイト、AIメール送信などの機能を提供します。
- 個人投資家や学習者など、無料で市場データや企業情報を確認したいユーザー向けのツールです。
- Node.js 20以上、MongoDB、Finnhub APIキーが必要で、Docker Composeでの起動も可能です。AGPL-3.0ライセンスで、ブローカーではなく金融アドバイスは提供しません。

---

### 6. [krillinai/OpenCreator](https://github.com/krillinai/OpenCreator)

> Formerly KrillinAI. Open-source AI workspace for creators, powered by Codex. Create videos, images, voice, avatars, video translation, and edits with Agents in one place.

- Language: TypeScript
- Stars: 12,414
- Forks: 1,278
- Stars in 1週間: 961
- Category: AIクリエイターワークスペース
- Keywords: `Codex CLI` `動画翻訳` `マルチモーダル生成` `Agent` `ローカル実行` `Electron`
- Summary source: README

#### README要約

- OpenCreator（旧KrillinAI）は、Codex CLIを実行エンジンとするクリエイター向けオープンソースAIワークスペースです。
- 動画翻訳・ダウンロード、画像・動画生成、音声合成、記事作成など10種のクリエイターツールと、自然言語でタスクを指示できるAgent会話機能を備えています。
- ローカル環境で創作・開発作業を行いたい個人やチームを対象とし、Webとデスクトップ（Electron）の両方で同一のUIとデータを利用できます。
- データやログはデフォルトでローカルに保存され、デスクトップアプリにはCodex CLIが同梱されるため、起動時にローカルRuntimeが自動で準備されます。

---

### 7. [bendlang/bend](https://github.com/bendlang/bend)

> Bend 2: a fast language that blocks AI mistakes via proof. Install: curl -fsSL https://bend-lang.com/install.sh | sh

- Language: TypeScript
- Stars: 22,940
- Forks: 698
- Stars in 1週間: 1,530
- Category: プログラミング言語
- Keywords: `Bend` `証明` `LAWS.bend` `並列処理` `GPU` `AIコード検証`
- Summary source: README

#### README要約

- Bendは、AIが生成したコードの誤りを数学的証明でブロックする高速なプログラミング言語です。
- LAWS.bendファイルでアプリのルールを宣言し、コンパイラが証明を要求することでルール違反を防ぎ、CPU/GPUでの高速実行と自動並列化を実現します。
- AIエージェントにコードを書かせる開発者や、証明付きの信頼できるバックエンドアプリを構築したいユーザー向けです。
- curlのインストールスクリプトで導入でき、Linux/macOSのバックエンド向けですが、若い言語でバグや制限が多い点に注意が必要です。

---

### 8. [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)

> Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.

- Language: TypeScript
- Stars: 38,513
- Forks: 3,831
- Stars in 1週間: 1,316
- Category: オフライン知識サーバー
- Keywords: `オフライン` `知識管理` `教育プラットフォーム` `ローカルAI` `Docker` `セルフホスト`
- Summary source: README

#### README要約

- Project NOMADは、インターネット接続なしで動作するオフラインファーストの知識・教育サーバーです。
- Dockerコンテナで管理され、オフラインWikipedia、電子書籍、Khan Academyコース、地図、ローカルAIチャット（RAG対応）などを統合します。
- 災害時やオフライン環境で知識にアクセスしたいユーザー、教育機関、プライバシーを重視する個人に適しています。
- Debian系OS（Ubuntu推奨）にインストール可能で、AI利用には高性能GPUと32GB RAM以上が推奨されます。認証機能はなく、ローカルネットワークでの利用を前提としています。

---

### 9. [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill)

> Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.

- Language: TypeScript
- Stars: 7,368
- Forks: 528
- Stars in 1週間: 2,115
- Category: ブラウザ自動化ツール
- Keywords: `AIエージェント` `ブラウザ自動化` `Chrome拡張` `CLI` `Webデバッグ` `ログイン済みセッション`
- Summary source: README

#### README要約

- AIエージェントがユーザーのログイン済みブラウザ（Chrome/Edge）を操作できるようにするツールで、作業を中断せずにブラウザ自動化を実現する。
- bsk CLIとブラウザ拡張機能で構成され、専用のAgent Windowでタスクを実行し、ページ閲覧・フォーム入力・スクリーンショット・デバッグ証拠収集などが可能。
- Cursor、Claude Code、Codexなどのシェル対応AIエージェントやDeepSeek Harnessと連携し、Webサイトデバッグや業務ワークフロー自動化を行う開発者・利用者向け。
- macOS/Linux/WindowsにCLIをインストールし、Chrome/Edge拡張を追加してbsk doctorで接続確認する。Chromium 125以降が必要で、MITライセンス。

---

### 10. [FxEmbed/FxEmbed](https://github.com/FxEmbed/FxEmbed)

> Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others

- Language: TypeScript
- Stars: 5,474
- Forks: 259
- Stars in 1週間: 417
- Category: SNS埋め込みツール
- Keywords: `Twitter` `Bluesky` `Discord` `埋め込み` `Cloudflare Worker` `TypeScript`
- Summary source: README

#### README要約

- FxEmbedは、X/TwitterやBlueskyの投稿をDiscordやTelegramなどでリッチに埋め込み表示するためのサービスです。
- URLにfxやfixupを付け加えるだけで、動画、複数画像、投票、引用、翻訳などの埋め込みに対応します。
- SNSのリンクをチャットで共有したいユーザー向けで、APIやセルフホスティングにも対応しています。
- Cloudflare Workerとして動作し、Docker Composeで構築可能です。MITライセンスで、X Corpとは無関係のプロジェクトです。

---

### 11. [ahmedkhaleel2004/gitdiagram](https://github.com/ahmedkhaleel2004/gitdiagram)

> Free, simple, fast interactive diagrams and videos for any GitHub repository

- Language: TypeScript
- Stars: 17,188
- Forks: 1,307
- Stars in 1週間: 754
- Category: 開発者ツール
- Keywords: `GitHub` `アーキテクチャ図` `Mermaid` `AI解説` `動画生成` `Next.js`
- Summary source: README

#### README要約

- GitHubリポジトリを対話型アーキテクチャ図や約1分のナレーション付き解説動画に変換するツール。
- AI生成のMermaid図とストリーミング解説を提供し、コンポーネントをクリックすると該当コードにジャンプできる。
- リポジトリの構造を素早く理解したい開発者向けで、公開・非公開リポジトリの両方に対応する。
- ローカル実行にはBun、Cloudflare R2、Upstash Redis、OpenAIまたはOpenRouterのAPIキーが必要。

---

### 12. [yikart/AiToEarn](https://github.com/yikart/AiToEarn)

> Let's use AI to Earn!

- Language: TypeScript
- Stars: 26,455
- Forks: 4,310
- Stars in 1週間: 412
- Category: AIコンテンツマーケティング
- Keywords: `AIエージェント` `コンテンツ収益化` `マルチプラットフォーム投稿` `MCP対応` `Dockerデプロイ` `TypeScript`
- Summary source: README

#### README要約

- AIエージェントでコンテンツの作成・配信・収益化を一元化する、OPC（一人会社）向けのオープンソースAIコンテンツマーケティングプラットフォーム。
- Monetize（CPS/CPE/CPMの成果報酬型収益化）、Publish（14以上の国内外SNSへの一括投稿とカレンダー予約）、Engage（ブラウザ拡張による自動いいね・AI返信・コメント分析）、Create（動画・画像生成モデルを使ったエージェント型コンテンツ制作と一括生成）の4機能を提供。
- 個人クリエイター、一人会社、ブランド、企業のマーケティング担当者など、複数プラットフォームでコンテンツを運用し収益化したいユーザーが対象。
- Web版は登録のみで即利用可能。OpenClawやClaude/Cursor（MCP対応）経由の利用やDockerでの自前デプロイにはAPIキーが必要で、中国版と国際版でキーと環境を一致させる必要がある。

---

### 13. [atomicstrata/llm-wiki-compiler](https://github.com/atomicstrata/llm-wiki-compiler)

> The knowledge compiler. Raw sources in, interlinked wiki out. Inspired by Karpathy's LLM Wiki pattern.

- Language: TypeScript
- Stars: 2,132
- Forks: 226
- Stars in 1週間: 95
- Category: ナレッジコンパイラ
- Keywords: `LLM Wiki` `知識コンパイル` `Markdown` `MCP` `TypeScript` `RAG`
- Summary source: README

#### README要約

- 生のソースを引用追跡可能な相互リンク付きMarkdown wikiにコンパイルするツール。KarpathyのLLM Wikiパターンを実装。
- 2段階のLLMパイプラインで概念を抽出し型付きページを生成。ライフサイクルプロファイル、ハイブリッド検索、MCPサーバー、SDKを提供。
- 論文やノート、PDFなどから永続的な知識ベースが必要な開発者やエージェント向け。監査可能な知識管理に適する。
- TypeScript製でMITライセンス。AnthropicやOpenAIなど複数のLLMプロバイダーに対応。汎用静的サイトジェネレーターとしては非推奨。

---

### 14. [cline/cline](https://github.com/cline/cline)

> Autonomous coding agent as an SDK, IDE extension, or CLI assistant.

- Language: TypeScript
- Stars: 69,392
- Forks: 7,529
- Stars in 1週間: 676
- Category: AIコーディングエージェント
- Keywords: `オープンソース` `VS Code拡張` `CLI` `SDK` `マルチエージェント` `MCP`
- Summary source: README

#### README要約

- ClineはIDE、ターミナル、デスクトップで動作するオープンソースの自律コーディングエージェントです。
- ファイル作成、コマンド実行、Web閲覧などを人間の承認を挟みながら行い、Plan/Actモードやチェックポイントによる変更管理を備えています。
- VS Code/JetBrains拡張、CLI、デスクトップアプリ、SDKとして提供され、CI/CD自動化や複数エージェント連携、スケジュール実行などに利用できます。
- npmでのインストールや各マーケットプレイスから導入可能で、複数のAIプロバイダやローカルモデルに対応し、Apache 2.0ライセンスです。

---

### 15. [vercel-labs/json-render](https://github.com/vercel-labs/json-render)

> The Generative UI framework

- Language: TypeScript
- Stars: 18,314
- Forks: 968
- Stars in 1週間: 2,103
- Category: Generative UIフレームワーク
- Keywords: `Generative UI` `AI UI生成` `JSONスキーマ` `クロスプラットフォーム` `TypeScript` `ストリーミングレンダリング`
- Summary source: README

#### README要約

- AIが自然言語プロンプトから動的でパーソナライズされたUIを生成するGenerative UIフレームワーク。
- 開発者が定義したコンポーネントカタログとアクションにAIの出力を制約し、JSONスペックをストリーミングで安全にレンダリングする。
- React、Vue、Svelte、Solid、React Native、Next.js、Remotion、PDF、メール、ターミナル、3Dなど多様なレンダラーを同一カタログから利用できる。
- npmで@json-render/coreと各フレームワーク用パッケージをインストールして導入。36個のshadcn/ui製プリビルトコンポーネントも付属する。

---

### 16. [upscayl/upscayl](https://github.com/upscayl/upscayl)

> 🆙 Upscayl - #1 Free and Open Source AI Image Upscaler for Linux, MacOS and Windows.

- Language: TypeScript
- Stars: 49,924
- Forks: 2,531
- Stars in 1週間: 593
- Category: AI画像アップスケーラー
- Keywords: `AI画像拡大` `Real-ESRGAN` `Vulkan` `オープンソース` `クロスプラットフォーム` `TypeScript`
- Summary source: README

#### README要約

- Upscaylは、低解像度画像をAIアルゴリズムで拡大・高画質化する無料・オープンソースのデスクトップアプリです。
- Real-ESRGANとVulkanアーキテクチャを用いて画像のディテールを推測・補完し、品質を落とさずに拡大します。
- Linux、macOS、Windowsに対応し、画像を高解像度化したい一般ユーザーやクリエイター向けのツールです。
- 動作にはVulkan対応GPUが必要で、多くの内蔵GPUやCPUでは動作しない点に注意が必要です。

---
