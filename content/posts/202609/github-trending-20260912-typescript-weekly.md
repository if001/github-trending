+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/09/12'
date = 2026-09-12T22:53:57.271Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月12日 22:53:57
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントの拡張・運用基盤がTypeScript製を中心に席巻し、MCP連携やスキル管理、ローカル推論など周辺エコシステムの整備が進んでいる。

- 一覧の全18件がTypeScript製で、言語分布が完全にTypeScriptに集中している。
- MCPサーバーやエージェントスキル、ハーネスなど、Claude Code・Codex・CursorなどのAIコーディングエージェントを拡張・統制するツールが多数を占める。
- 最もスターを集めたのは動画生成フレームワークのheygen-com/hyperframes（5100）で、AIエージェントによるHTMLからの動画レンダリングという新しい用途が注目されている。
- 教育（OpenMAIC）、トレーディング（CloddsBot）、CRM（DeskcommCRM）、SEO（open-seo）など、AIエージェントを特定業務に適用する垂直型プロダクトも複数ランクインしている。
- magnitudedev/magnitudeのようなローカル推論基盤や、セルフホスト型のCRM・SEOツールなど、クラウドAPIに依存しない運用を志向するプロジェクトも見られる。

### 主なテーマ

- **AIエージェントの拡張・統制基盤（MCP・スキル・ハーネス）**: mksglu/context-modeはMCPサーバーとしてコンテキスト消費を98%削減し17プラットフォームに対応、ChromeDevTools/chrome-devtools-mcpはブラウザ制御をエージェントに提供、vercel-labs/skillsとhumanlayer/skillsはスキルの配布・管理を担い、ruvnet/rufloはマルチエージェントスワームのハーネスを提供するなど、AIコーディングエージェントを取り巻く拡張・統制レイヤーのツールが最も厚いカテゴリを形成している。（`mksglu/context-mode`、`ChromeDevTools/chrome-devtools-mcp`、`vercel-labs/skills`、`humanlayer/skills`、`ruvnet/ruflo`）
- **AIコーディングエージェント本体と開発ワークフロー**: anomalyco/opencodeはオープンソースのコーディングエージェント本体、OpenHands/OpenHandsは複数のACP互換エージェントを統合管理するコントロールセンター、awslabs/aidlc-workflowsは5フェーズ33ステージの構造化されたデリバリーワークフローを提供しており、エージェント本体からその運用管理までをカバーする層が存在する。（`anomalyco/opencode`、`OpenHands/OpenHands`、`awslabs/aidlc-workflows`）
- **エージェント駆動のコンテンツ・メディア生成**: heygen-com/hyperframesはAIエージェントがHTMLを記述してMP4動画をレンダリングするフレームワークで5100スターと期間内トップ、pascalorg/editorはMCP経由でAIエージェントと連携する3D建築エディタであり、エージェントがコード以外のリッチなコンテンツを生成する用途が台頭している。（`heygen-com/hyperframes`、`pascalorg/editor`）
- **特定業務向けAIエージェント応用**: THU-MAIC/OpenMAICはマルチエージェントによるAI教室を構築し4509スターを獲得、alsk1992/CloddsBotは1000以上の市場で自律取引するトレーディングエージェント、melgarafael/DeskcommCRMはWhatsApp接客を行うAI搭載CRM、every-app/open-seoはMCP連携のSEOツールと、教育・金融・営業・マーケティングの各領域にAIエージェントを適用したプロダクトが複数ランクインしている。（`THU-MAIC/OpenMAIC`、`alsk1992/CloddsBot`、`melgarafael/DeskcommCRM`、`every-app/open-seo`）
- **ローカル・セルフホスト志向のインフラとツール**: magnitudedev/magnitudeは手持ちのハードウェアでLLMを動かすローカル推論エンジンで2096スター、MoonTechLab/LunaTVはDockerデプロイの動画アグリゲーションプレイヤー、BraveOPotato/FckSignupsは登録不要のブラウザ内ツールを集めたディレクトリ、nab138/iloaderはiOSサイドローディングツールであり、クラウドサービスやアカウント登録に依存しない利用形態への関心がうかがえる。（`magnitudedev/magnitude`、`MoonTechLab/LunaTV`、`BraveOPotato/FckSignups`、`nab138/iloader`）

### 補足的な観察

- スター獲得数の上位はheygen-com/hyperframes（5100）、THU-MAIC/OpenMAIC（4509）、anomalyco/opencode（3074）の順で、エージェント基盤だけでなくコンテンツ生成や教育といった応用系が上位を占めている。
- 18件中少なくとも10件以上がClaude Code、Codex、Cursor、Gemini CLIなどのAIコーディングエージェントとの連携を明示しており、MCPが事実上の標準インターフェースとして繰り返し登場している。
- awslabs/aidlc-workflows（217）やnab138/iloader（316）などスター数は少ないものの、AWS公式ラボ発のワークフロー基盤やiOSサイドローディングというニッチな実用ツールがランクインしており、裾野の広さが見られる。
- ライセンス面ではMIT、Apache 2.0、GPL-3.0に加え、Elastic License 2.0（context-mode）やCC BY-NC-SA（LunaTV）など商用利用を制限するものも混在している。

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 18 |

## Repository一覧

### 1. [mksglu/context-mode](https://github.com/mksglu/context-mode)

> Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.

- Language: TypeScript
- Stars: 22,354
- Forks: 1,609
- Stars in 1週間: 1,810
- Category: AI開発支援ツール
- Keywords: `MCPサーバー` `コンテキスト最適化` `セッション永続化` `FTS5検索` `Claude Code` `Elastic License 2.0`
- Summary source: README

#### README要約

- AIコーディングエージェントのコンテキストウィンドウを最適化するMCPサーバー。
- ツール出力をサンドボックス化してコンテキスト消費を98%削減し、SQLite+FTS5でセッション記憶を永続化する。
- Claude CodeやGemini CLIなど17プラットフォームのAIエージェント利用者が対象で、MCPとフックでルーティングを強制する。
- Claude Codeではプラグインコマンドで自動導入でき、ライセンスはElastic License 2.0でホスト型サービス提供は禁止。

---

### 2. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 49,206
- Forks: 4,491
- Stars in 1週間: 5,100
- Category: 動画生成フレームワーク
- Keywords: `HTML to Video` `AIエージェント` `MP4レンダリング` `TypeScript` `CLI` `オープンソース`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLI、AIコーディングエージェント用スキル、ホスト型オーサリングワークフローのレンダリングコアとして利用可能。
- Claude Code、Cursor、Gemini CLI、Codexなどのエージェントが動画計画、HTML記述、アニメーション配線、レンダリングを実行。
- Node.js 22以上が必要で、開発用クローンにはGit LFSのインストールが必要（約240MBのテスト用MP4ファイル）。

---

### 3. [humanlayer/skills](https://github.com/humanlayer/skills)

- Language: TypeScript
- Stars: 3,908
- Forks: 116
- Stars in 1週間: 1,637
- Category: Claude Codeスキル集
- Keywords: `Claude Code` `スキル` `HumanLayer` `エージェント` `開発ワークフロー` `TypeScript`
- Summary source: README

#### README要約

- HumanLayerが提供するClaude Code用スキル集のリポジトリです。
- npx skills addコマンドで個別スキルを導入し、スラッシュコマンドで実行します。
- CLAUDE.md改善、React prop型の絞り込み、エージェントループ構築、制御ループ設計、図解説明の5スキルを収録しています。
- Claude Codeユーザーがプロジェクトの開発ワークフローを改善する用途に向いています。

---

### 4. [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

> Chrome DevTools for coding agents

- Language: TypeScript
- Stars: 51,762
- Forks: 3,636
- Stars in 1週間: 804
- Category: 開発者ツール
- Keywords: `MCP` `Chrome DevTools` `ブラウザ自動化` `デバッグ` `パフォーマンス分析` `AIエージェント`
- Summary source: README

#### README要約

- コーディングエージェントがChromeブラウザを制御・検査できるようにするMCPサーバーです。
- パフォーマンストレースの記録、ネットワーク解析、スクリーンショット撮影、コンソール確認などの機能を提供します。
- ClaudeやCursorなどのAIコーディングアシスタントを利用する開発者が、ブラウザの自動化やデバッグを行う際に使用します。
- Node.jsとChromeが必要で、npxコマンドでMCPクライアントに設定して導入します。

---

### 5. [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)

> Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click

- Language: TypeScript
- Stars: 36,175
- Forks: 5,735
- Stars in 1週間: 4,509
- Category: AI教育プラットフォーム
- Keywords: `マルチエージェント` `AI教室` `インタラクティブ学習` `コース生成` `TypeScript` `MITライセンス`
- Summary source: README

#### README要約

- OpenMAICは、任意のトピックやドキュメントをインタラクティブな教室体験に変換するオープンソースのAIプラットフォームです。
- マルチエージェントオーケストレーションにより、スライド、クイズ、シミュレーション、PBLアクティビティを生成し、AI教師とAIクラスメートがリアルタイムで講義・議論します。
- 教育者や学習者がワンクリックで没入型のマルチエージェント学習環境を構築し、FeishuやSlackなどのメッセージングアプリからも利用可能です。
- Vercelでワンクリックデプロイでき、少なくとも1つのLLMプロバイダーAPIキー（OPENAI_API_KEYなど）の設定が必要です。ライセンスはMITです。

---

### 6. [ruvnet/ruflo](https://github.com/ruvnet/ruflo)

> 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated

- Language: TypeScript
- Stars: 72,233
- Forks: 8,548
- Stars in 1週間: 1,726
- Category: AIエージェント基盤
- Keywords: `AIエージェント` `マルチエージェント` `Claude Code` `自己学習` `スワーム` `MCP`
- Summary source: README

#### README要約

- RufloはClaude CodeやCodexなどのAIコーディングツールを拡張するエージェントメタハーネスです。
- 100以上の専門エージェント、協調スワーム、自己学習メモリ、マシン間連携、エンタープライズセキュリティ機能を提供します。
- AIエージェントを活用したい開発者やチームが、複雑なタスクの自動化、知識の永続化、安全な分散協調を実現するために使用します。
- npx ruflo initで導入でき、Claude Codeプラグインとしても利用可能ですが、フル機能を使うにはCLIインストールが推奨されます。

---

### 7. [every-app/open-seo](https://github.com/every-app/open-seo)

> Open source alternative to Semrush and Ahrefs

- Language: TypeScript
- Stars: 18,540
- Forks: 2,345
- Stars in 1週間: 1,507
- Category: SEOツール
- Keywords: `オープンソース` `SEO` `MCP` `AIエージェント` `セルフホスト` `DataForSEO`
- Summary source: README

#### README要約

- OpenSEOはSemrushやAhrefsのオープンソース代替となるSEOツールで、従量課金制で自分で管理できる。
- キーワード調査、ランクトラッキング、競合分析、バックリンク、サイト監査、AI可視性などの主要SEOワークフローを備える。
- MCPサーバーとAgent Skillsを通じてClaude CodeなどのAIエージェントと連携し、SEOデータを直接活用できる。
- セルフホストはDockerまたはCloudflareで可能だが、利用にはDataForSEO APIキーが必要で従量課金が発生する。

---

### 8. [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows)

> AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents

- Language: TypeScript
- Stars: 4,569
- Forks: 823
- Stars in 1週間: 217
- Category: AI開発ワークフロー
- Keywords: `AI-DLC` `ワークフロー自動化` `マルチハーネス` `承認ゲート` `監査証跡` `TypeScript`
- Summary source: README

#### README要約

- AI-DLCはAIコーディングアシスタントを構造化・検証可能なソフトウェアデリバリーワークフローに変換するツール。
- 5フェーズ33ステージ、14エージェント、11ワークフロープロファイルを備え、承認ゲートと監査証跡で開発を管理する。
- Claude Code、Kiro、Codex CLI、Cursor、opencode、GitHub Copilotなど複数のハーネスで動作する開発者向けツール。
- インストールスクリプトでaidlcコマンドを導入し、aidlc configでハーネスを設定。生成AIの出力とコストは事前確認が必要。

---

### 9. [anomalyco/opencode](https://github.com/anomalyco/opencode)

> The open source coding agent.

- Language: TypeScript
- Stars: 206,950
- Forks: 27,101
- Stars in 1週間: 3,074
- Category: AIコーディングエージェント
- Keywords: `オープンソース` `AI` `コーディングエージェント` `TypeScript` `CLI` `開発ツール`
- Summary source: README

#### README要約

- OpenCodeは、オープンソースのAIコーディングエージェントです。
- Tabキーで切り替え可能な2つの組み込みエージェント（buildとplan）を備え、planは読み取り専用で分析やコード探索に適しています。
- 開発作業やコードベースの探索、変更計画の立案を行う開発者向けのツールです。
- curl、npm、brew、scoopなど複数の方法でインストール可能で、デスクトップアプリ版（ベータ）も提供されています。

---

### 10. [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)

> 🙌 OpenHands: AI-Driven Development

- Language: TypeScript
- Stars: 87,681
- Forks: 11,489
- Stars in 1週間: 1,337
- Category: AI開発ツール
- Keywords: `コーディングエージェント` `セルフホスト` `自動化` `ACP` `マルチバックエンド` `ワークフロー`
- Summary source: README

#### README要約

- OpenHands Agent Canvasは、コーディングエージェントと自動化を統合管理するセルフホスト型の開発者向けコントロールセンターです。
- OpenHands、Claude Code、Codex、GeminiなどACP互換エージェントをローカル・Docker・VM・クラウドの複数バックエンドで実行し、UIから切り替えられます。
- SlackやGitHub、Linear等と連携した自動化ワークフローを作成でき、レポート生成やGitHub Issueのタスク分解などをスケジュールやWebhookで実行する開発者・チーム向けです。
- npmパッケージ、Docker、ソースからのインストールが可能で、Node.js 22.12.x以降とuvが必要です。サンドボックスなしで実行するとエージェントがファイルシステムに完全アクセスするため注意が必要です。

---

### 11. [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot)

> Open Source AI trading agent that operates autonomously across 1000+ markets - Polymarket, Kalshi, Binance, Hyperliquid, Solana DEXs, 5 EVM chains. Scans for edge, executes instantly, manages risk while you sleep. Agent commerce protocol for machine-to-machine payments. Self-hosted. Built on Claude.

- Language: TypeScript
- Stars: 2,478
- Forks: 310
- Stars in 1週間: 1,170
- Category: AIトレーディングボット
- Keywords: `AI取引` `予測市場` `暗号資産` `Solana` `Claude` `自動売買`
- Summary source: README

#### README要約

- Cloddsは、予測市場、暗号資産現物、レバレッジ付き無期限先物、トークンローンチ、Bittensorサブネットマイニングを統合した個人向けAIトレーディングターミナルです。
- Claudeを搭載し、118以上の取引戦略、クジラ追跡、アービトラージ検出、コピートレーディング、DCAボットを備え、21のメッセージングプラットフォーム経由で自然言語による取引が可能です。
- 10の予測市場と7の先物取引所に対応し、SolanaおよびEVMチェーン上のDeFiプロトコルと連携する自律型トレーダーや開発者向けに設計されています。
- Node.js 22以上が必要で、npm経由でGitHubリリースからインストールし、APIキーとメッセージングチャネルを設定するオンボーディングウィザードでセットアップします。

---

### 12. [MoonTechLab/LunaTV](https://github.com/MoonTechLab/LunaTV)

> 本项目采用 CC BY-NC-SA 协议，禁止任何商业化行为，任何衍生项目必须保留本项目地址并以相同协议开源

- Language: TypeScript
- Stars: 10,420
- Forks: 9,085
- Stars in 1週間: 1,054
- Category: 動画プレイヤー
- Keywords: `動画アグリゲーション` `Next.js` `TypeScript` `Docker` `PWA` `マルチソース検索`
- Summary source: README

#### README要約

- Next.js 14、Tailwind CSS、TypeScriptで構築された、すぐに使えるクロスプラットフォームの動画アグリゲーションプレイヤーです。
- 複数リソースの検索、オンライン再生、お気に入り同期、再生履歴、クラウドストレージをサポートし、HLS.jsとArtPlayerを統合しています。
- いつでもどこでも無料の動画コンテンツを楽しみたい個人ユーザー向けで、PWA対応によりモバイルでもネイティブのような体験を提供します。
- DockerまたはDockerベースのプラットフォームでのみデプロイ可能で、デプロイ後は空のプロジェクトのため、再生ソースとライブソースを自分で収集する必要があります。

---

### 13. [pascalorg/editor](https://github.com/pascalorg/editor)

> Open-source 3D architectural editor with a local CLI, MCP tools, and practical workflows for humans and AI agents.

- Language: TypeScript
- Stars: 23,841
- Forks: 2,958
- Stars in 1週間: 1,592
- Category: 3D建築エディタ
- Keywords: `3Dエディタ` `建築` `MCP` `React Three Fiber` `WebGPU` `AIエージェント`
- Summary source: README

#### README要約

- React Three FiberとWebGPUで構築されたオープンソースのローカルファースト3D建築エディタ。
- ブラウザまたはCLIで動作し、MCP経由でAIエージェントと接続できる。
- 建築設計者やAIエージェント開発者が、3Dシーンの編集や自動化ワークフローに利用する。
- Node.js 22.13以上が必要で、npx @pascal-app/cli editor でローカル環境にインストール可能。

---

### 14. [BraveOPotato/FckSignups](https://github.com/BraveOPotato/FckSignups)

> A list of tools that are open-source, in-browser, and require no-signups!

- Language: TypeScript
- Stars: 4,208
- Forks: 244
- Stars in 1週間: 1,596
- Category: ツールディレクトリ
- Keywords: `オープンソース` `登録不要` `プライバシー` `React` `TypeScript` `キュレーション`
- Summary source: README

#### README要約

- アカウント登録不要でブラウザ上ですぐ使えるオープンソースツールを集めたキュレーションディレクトリです。
- React + TypeScript製のサイトで、ツール情報はスキーマに沿って管理され、カテゴリやタグで検索・分類できます。
- 登録壁やトラッキングを嫌い、プライバシー重視のツールを探すユーザー向けで、200以上のツールが掲載されています。
- ローカル実行はリポジトリをクローンしてnpm installとnpm run devを実行するだけで、コードはGPL-3.0ライセンスです。

---

### 15. [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM)

> Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.

- Language: TypeScript
- Stars: 1,776
- Forks: 548
- Stars in 1週間: 742
- Category: セルフホストCRM
- Keywords: `CRM` `WhatsApp` `AIエージェント` `セルフホスト` `オープンソース` `LGPD`
- Summary source: README

#### README要約

- WhatsApp上でAIエージェントが接客・見込み客の絞り込み・販売を行う、セルフホスト型のオープンソースCRM。
- WAHAによるWhatsApp連携、SupabaseのPostgres基盤、OpenRouter/Anthropic/OpenAIのAI対応、マルチテナント、MCP-ready、自動化ルール（QUANDO/SE/ENTÃO）を備える。
- チャットで販売するあらゆるビジネス向けで、Kommo・Octadesk・Intercomのオープンな代替として位置づけられている。
- VPSにDocker経由で1コマンドインストール可能（HostGatorとのパートナーシップによるセットアップキット同梱）。ドメイン・Supabase・AI APIキーが必要で、LGPD上はホスティングする側がデータ管理者となる。

---

### 16. [vercel-labs/skills](https://github.com/vercel-labs/skills)

> The open agent skills tool - npx skills

- Language: TypeScript
- Stars: 31,487
- Forks: 2,687
- Stars in 1週間: 1,042
- Category: 開発者ツール
- Keywords: `CLI` `エージェントスキル` `Claude Code` `npx` `TypeScript` `オープンソース`
- Summary source: README

#### README要約

- オープンなエージェントスキルエコシステム向けのCLIツールで、コーディングエージェント用のスキルをインストール・管理できる。
- GitHub/GitLabやローカルパス等からスキルを取得し、シンボリンクまたはコピーで各エージェントのディレクトリに配置する。
- Claude Code、Codex、Cursor、OpenCodeなど75以上のコーディングエージェントを利用する開発者が対象。
- npx skills addで導入でき、プライベートリポジトリは既存のGit/GitHub CLI認証を利用し、MITライセンスで提供される。

---

### 17. [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude)

> Open source local inference engine. It runs models on the hardware you already have, whether that's a Mac, an NVIDIA or AMD GPU, or just a CPU. Plug it into Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.

- Language: TypeScript
- Stars: 4,396
- Forks: 329
- Stars in 1週間: 2,096
- Category: ローカルAI推論エンジン
- Keywords: `ローカル推論` `LLM` `ハードウェアプロファイリング` `AIエージェント連携` `オフライン` `TypeScript`
- Summary source: README

#### README要約

- Magnitudeは、手持ちのハードウェア（Mac、NVIDIA/AMD GPU、CPUのみ）で最適なローカルモデルを実行するオープンソースのローカル推論エンジンです。
- マシンのチップ、メモリ、帯域幅をプロファイルし、速度・精度・知能・メモリでモデルをランク付けして推奨し、ダウンロード、チューニング、実行までを自動化します。
- Pi、OpenCode、Claude Code、Codex、ClineなどのAIエージェントやハーネスと連携し、トークンコストやAPIキーなしで完全にプライベートかつオフラインで利用したい開発者向けです。
- npmでCLIをインストールし「magnitude setup」を実行するだけで導入でき、macOS、Linux、Windows（WSL）をサポートし、Apache License 2.0で提供されています。

---

### 18. [nab138/iloader](https://github.com/nab138/iloader)

> User friendly sideloader

- Language: TypeScript
- Stars: 3,068
- Forks: 209
- Stars in 1週間: 316
- Category: iOSサイドローディングツール
- Keywords: `SideStore` `サイドロード` `iOS` `IPA` `ペアリングファイル` `Tauri`
- Summary source: README

#### README要約

- iOSデバイスにSideStoreなどのアプリをサイドロードし、ペアリングファイルを簡単にインポートできるユーザーフレンドリーなツールです。
- SideStoreやLiveContainer+SideStoreのインストール、任意のIPAのインポート、証明書とペアリングファイルの自動配置、開発証明書とアプリIDの管理・取り消しが可能です。
- iOSデバイスにアプリをサイドロードしたいユーザーや、StikDebug、SideStore、Protokolleなどのアプリでペアリングファイルを管理したいユーザーに適しています。
- WindowsではiTunes、macOSでは標準搭載、Linuxではパッケージマネージャーからusbmuxdをインストールする必要があり、公式サイトまたはGitHubリリースからダウンロードしてください。

---
