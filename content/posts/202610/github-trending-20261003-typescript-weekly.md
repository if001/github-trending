+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/10/03'
date = 2026-10-03T23:34:05.963Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月3日 23:34:05
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> TypeScript製のAIエージェント管理・連携ツールがトレンドを席巻し、開発ワークフローから日常業務までエージェント統合が進んでいる

- 全16リポジトリ中15件がTypeScriptで、AIエージェント関連が約7割を占める
- Claude Code、Codex、Cursorなど複数のAIコーディングエージェントを統合管理するツールが複数ランクイン
- paperclipai/paperclipが12,825スターで圧倒的首位、AIエージェントの組織化管理への関心の高さを示す
- MCP（Model Context Protocol）対応ツールが複数登場し、エージェント連携の標準化が進行
- セルフホスト型・オープンソースのAIツールが主流で、プライバシーとカスタマイズ性を重視する傾向

### 主なテーマ

- **AIエージェント統合管理プラットフォーム**: 複数のAIコーディングエージェント（Claude Code、Codex、Cursor等）を一元管理するツールが3件ランクイン。paperclipは12,825スターで組織図・予算管理・ガバナンス機能を提供し、t3codeはモバイルからリモート操作可能、openclawは20以上のチャネル連携に対応。（`paperclipai/paperclip`、`pingdotgg/t3code`、`openclaw/openclaw`）
- **MCP対応のエージェント連携基盤**: Model Context Protocolを活用したツールが2件登場。mobile-mcpはiOS/Androidの自動操作を実現し、jarvisはMCPサーバー経由でWeb検索・画像生成・スマホ操作を実行。エージェント間連携の標準化が進んでいる。（`mobile-next/mobile-mcp`、`adewaskar/jarvis`）
- **AI駆動のコンテンツ生成・自動化**: hyperframesはHTMLからMP4動画を生成しAIエージェント向けスキルを提供、AiToEarnは14以上のSNSへの自動投稿と収益化を実現、claude-code-actionはGitHub Actionsでコードレビューを自動化。コンテンツ制作からデプロイまでAI自動化が多様化。（`heygen-com/hyperframes`、`yikart/AiToEarn`、`anthropics/claude-code-action`）
- **セルフホスト型AIコンパニオン・アシスタント**: airiはリアルタイム音声チャットとゲームプレイ可能なバーチャルキャラクター、openclawはローカル動作するAIアシスタント。プライバシー重視でユーザーのハードウェア上で動作する設計が特徴。（`moeru-ai/airi`、`openclaw/openclaw`）
- **開発者向け基盤ライブラリ・ツール**: Effect-TS/effectは型安全な本番アプリケーション構築、univerはOffice機能を組み込むSDK、scriptcはTypeScriptをネイティブコンパイル、Velaは金融チャートライブラリ。AI以外の開発基盤も堅調。（`Effect-TS/effect`、`dream-num/univer`、`vercel-labs/scriptc`、`LuxAlgo/Vela`）

### 補足的な観察

- 言語分布はTypeScriptが94%（15/16件）と圧倒的で、残り1件もTypeScript関連のワークフローテンプレート管理
- スター数の分布は1位のpaperclip（12,825）が突出し、2位univer（4,208）、3位hyperframes（2,661）と続く
- Claude Codeとの連携を明示するリポジトリが6件あり、Anthropicのエージェントエコシステムへの注目度が高い
- オープンソースライセンス（MIT、Apache-2.0等）を明示するプロジェクトが多く、商用利用を意識した設計が一般的

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 16 |

## Repository一覧

### 1. [paperclipai/paperclip](https://github.com/paperclipai/paperclip)

> The open-source app everyone uses to manage agents at work

- Language: TypeScript
- Stars: 96,742
- Forks: 16,384
- Stars in 1週間: 12,825
- Category: AIエージェント管理
- Keywords: `AIエージェント` `オーケストレーション` `組織管理` `タスク管理` `マルチエージェント` `オープンソース`
- Summary source: README

#### README要約

- Paperclipは、AIエージェントのチームを組織化してビジネスを運営するためのオープンソースのオーケストレーションツールです。
- Node.jsサーバーとReact UIで構成され、目標設定、組織図、予算管理、ガバナンス、コスト追跡などを単一のダッシュボードで行えます。
- 複数のAIエージェント（Claude Code、Codex、Cursorなど）を統合し、自律的なAI組織を構築したいチームや開発者向けです。
- MITライセンスで提供され、テレメトリーはデフォルトで有効ですが環境変数や設定ファイルで無効化できます。

---

### 2. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 56,303
- Forks: 5,061
- Stars in 1週間: 2,661
- Category: 動画生成フレームワーク
- Keywords: `HTML to Video` `MP4レンダリング` `AIエージェント` `TypeScript` `Puppeteer` `FFmpeg`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションから決定論的なMP4動画を生成するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして動作する。
- Claude Code、Codex、Cursor、Gemini CLIなどのAIエージェントを使う開発者や、プロダクト紹介・解説・モーショングラフィックスなどの動画制作を自動化したいユーザー向け。
- Node.js 22以上が必要で、npmパッケージまたはClaude Codeプラグインとしてインストール可能。開発用にクローンする場合はGit LFSの事前インストールが必要。

---

### 3. [Effect-TS/effect](https://github.com/Effect-TS/effect)

> Build production-ready applications in TypeScript

- Language: TypeScript
- Stars: 16,806
- Forks: 813
- Stars in 1週間: 466
- Category: TypeScriptアプリケーション基盤ライブラリ
- Keywords: `TypeScript` `型安全` `依存性注入` `構造化並行性` `スキーマ検証` `LTS`
- Summary source: README

#### README要約

- TypeScriptで堅牢で保守性が高く型安全な本番向けアプリケーションを構築するためのライブラリ。
- 型付きエラー、依存性注入、構造化並行性、スケジューリング、トレーシング、統合スキーマ検証を提供する。
- 大規模開発に取り組むTypeScriptチームや、長期運用を前提にした本番システムの構築に向いている。
- npm install effectで導入でき、TypeScript 5.9以上、Node.js 18以上、tsconfigのstrict有効化が必要。

---

### 4. [pablostanley/yoinks](https://github.com/pablostanley/yoinks)

> yoink any video from your terminal. no shady ads.

- Language: TypeScript
- Stars: 3,840
- Forks: 337
- Stars in 1週間: 1,415
- Category: 動画ダウンロードCLI
- Keywords: `動画ダウンロード` `CLI` `yt-dlp` `TypeScript` `ターミナル` `MP3変換`
- Summary source: README

#### README要約

- ターミナルからYouTube、X/Twitter、Instagram、TikTokなど1,800以上のサイトの動画をダウンロードできるCLIツール。
- yt-dlpを内部で利用し、URLを貼るだけで解像度や音声のみのMP3を選択して保存できる。広告やリダイレクトはない。
- コマンドラインで手軽に動画を保存したいユーザー向けで、対話式UIにより直感的に操作できる。
- Node.js 18以上が必要で、npmでグローバルインストールするかnpxで即座に実行できる。初回実行時にyt-dlpを自動取得する。

---

### 5. [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

- Language: TypeScript
- Stars: 24,669
- Forks: 6,438
- Stars in 1週間: 860
- Category: AI開発ツール
- Keywords: `AIエージェント` `Claude Code` `Codex` `リモート開発` `Electron` `TypeScript`
- Summary source: README

#### README要約

- T3 Codeは、マシン上のAIコーディングエージェントを制御するための「エージェントハーネス・コントロールサーフェス」です。
- Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravityなどの既存CLIと連携し、iOS/Androidモバイルアプリ、Webアプリ、Electronデスクトップアプリからリモート操作を可能にします。
- 複数のAIエージェントを統合的に管理したい開発者や、外出先からスマートフォンでエージェントを操作したいユーザーに適しています。
- 利用には対象プロバイダーのCLIを事前にインストール・認証する必要があり、プロジェクトは初期段階のためバグが含まれる可能性があります。

---

### 6. [dream-num/univer](https://github.com/dream-num/univer)

> The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.

- Language: TypeScript
- Stars: 22,336
- Forks: 1,870
- Stars in 1週間: 4,208
- Category: Office SDK
- Keywords: `スプレッドシート` `プラグインアーキテクチャ` `AIエージェント` `TypeScript` `Canvasレンダリング` `Facade API`
- Summary source: README

#### README要約

- Univerはスプレッドシート・ドキュメント・プレゼンテーションなどのOffice機能を自社製品に組み込むためのオープンソースSDKです。
- プラグインアーキテクチャ、Canvasベースのレンダリング、数式エンジン、ブラウザとNode.jsで共通のFacade APIを提供します。
- SaaSや社内ツール、BIワークフロー、AIエージェント向けアプリにOffice編集体験を埋め込みたい開発者が対象です。
- pnpmでパッケージを追加し、プラグインモードまたはプリセットモードで導入でき、ライセンスはApache-2.0です。

---

### 7. [oblien/openship](https://github.com/oblien/openship)

> Self-hosted deployment platform

- Language: TypeScript
- Stars: 14,445
- Forks: 1,289
- Stars in 1週間: 1,902
- Category: デプロイメントプラットフォーム
- Keywords: `セルフホスト` `CI/CD` `Docker` `自動デプロイ` `TLS証明書` `マルチインターフェース`
- Summary source: README

#### README要約

- Openshipは、CI/CD機能を内蔵したオープンソースのセルフホスト型デプロイメントプラットフォームです。
- リポジトリを指定するだけでアプリのビルド、デプロイ、ルーティング、TLS終端を自動的に行います。
- 個人開発者からチームまで対応し、デスクトップアプリ、Webダッシュボード、CLIの3つのインターフェースで操作できます。
- Docker ComposeまたはCLIで導入可能で、VPSや専用サーバー、Openship Cloudなど様々な環境にデプロイできます。

---

### 8. [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp)

> Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)

- Language: TypeScript
- Stars: 8,603
- Forks: 760
- Stars in 1週間: 1,648
- Category: モバイル自動化MCPサーバー
- Keywords: `MCP` `モバイル自動化` `iOS` `Android` `アクセシビリティ` `LLMエージェント`
- Summary source: README

#### README要約

- iOS/Androidのシミュレータ・エミュレータ・実機を対象に、モバイルアプリの自動操作とスクレイピングを可能にするModel Context Protocol（MCP）サーバー。
- ネイティブのアクセシビリティツリーを優先的に利用してUI要素を構造化データとして取得し、必要時のみスクリーンショットと座標ベースのタップにフォールバックする仕組み。
- Claude CodeやGitHub CopilotなどのMCP対応エージェント・LLMから、プラットフォーム固有の知識なしにネイティブアプリのテスト、データ入力、複数ステップの操作を行いたい開発者や自動化エンジニア向け。
- 導入にはNode.js v20以上、Xcodeコマンドラインツール、Android Platform Toolsが必要で、npx経由でインストールしてMCPクライアントの設定ファイルにサーバー情報を追加する。

---

### 9. [vercel-labs/scriptc](https://github.com/vercel-labs/scriptc)

> TypeScript-to-Native Compiler

- Language: TypeScript
- Stars: 5,907
- Forks: 166
- Stars in 1週間: 880
- Category: コンパイラ
- Keywords: `TypeScript` `ネイティブコンパイル` `WebAssembly` `Vercel Labs` `実験的` `Node.js`
- Summary source: README

#### README要約

- TypeScriptとJavaScriptをネイティブ実行ファイルおよびWebAssemblyにコンパイルするVercel Labsの実験的ツール。
- TypeScriptの型情報を活用してサポート対象コードをネイティブ命令に変換し、静的ビルドはNode.jsやJavaScriptエンジンなしで動作する。
- npm依存やany型コードには--dynamicオプションでquickjs-ngエンジンを埋め込み、Node.js APIの一部もネイティブランタイムにコンパイル可能。
- 実験的プロジェクトでJavaScript/TypeScript/Node.js APIのサブセットのみ対応のため、使用前に制限事項と互換性リファレンスの確認が必要。

---

### 10. [Comfy-Org/workflow_templates](https://github.com/Comfy-Org/workflow_templates)

> ComfyUI template workflows

- Language: TypeScript
- Stars: 1,238
- Forks: 228
- Stars in 1週間: 226
- Category: ワークフローテンプレート管理
- Keywords: `ComfyUI` `ワークフロー` `テンプレート` `サブグラフ` `Astro` `Pythonパッケージ`
- Summary source: README

#### README要約

- ComfyUI公式のワークフローテンプレートとサブグラフブループリントを管理するリポジトリ。
- テンプレートはメディア種別ごとのPythonパッケージ構造で配布され、Astro製の閲覧サイトも含む。
- ComfyUIユーザーがテンプレートピッカーやノードパレットから再利用可能なワークフローを利用する用途を想定。
- テンプレート追加時は同期スクリプト実行とマニフェストのコミットが必須で、CIで検証される。

---

### 11. [moeru-ai/airi](https://github.com/moeru-ai/airi)

> 💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.

- Language: TypeScript
- Stars: 49,981
- Forks: 4,986
- Stars in 1週間: 600
- Category: AIバーチャルコンパニオン
- Keywords: `Neuro-sama` `セルフホスト` `リアルタイム音声チャット` `ゲームプレイ` `Web技術` `TypeScript`
- Summary source: README

#### README要約

- Neuro-samaに着想を得た、セルフホスト型のAIワイフ/バーチャルキャラクターの「魂のコンテナ」を再現するプロジェクトです。
- リアルタイム音声チャットやMinecraft、Factorioなどのゲームプレイが可能で、WebGPUやWebAudioなどのWeb技術を基盤としています。
- デジタルコンパニオンとゲームで遊んだり会話したりしたいユーザー向けで、Web、macOS、Windowsに対応しています。
- WindowsではwingetやScoop、macOSではHomebrew Caskでインストール可能です。公式の暗号通貨やトークンは存在しないため注意が必要です。

---

### 12. [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action)

- Language: TypeScript
- Stars: 9,408
- Forks: 2,185
- Stars in 1週間: 417
- Category: GitHub Actions向けAIコードアシスタント
- Keywords: `Claude Code` `GitHub Actions` `コードレビュー` `PR自動化` `Anthropic API` `TypeScript`
- Summary source: README

#### README要約

- GitHubのPRやIssueで質問応答やコード変更を実装する汎用Claude Codeアクション。
- @claudeメンションやIssue割り当て、明示的プロンプトによる自動化タスクなど、ワークフローの文脈から実行モードを自動判定する。
- コードレビュー、簡単な修正・リファクタリング・新機能の実装、進捗表示、構造化JSON出力などをGitHubランナー上で実行したい開発チーム向け。
- ターミナルのClaude Codeで/install-github-appを実行してセットアップし、Anthropic APIのほかBedrock、Vertex AI、Microsoft Foundryの認証にも対応する。

---

### 13. [LuxAlgo/Vela](https://github.com/LuxAlgo/Vela)

> Fast, extensible financial charts for the web. The open-source core of Vela by LuxAlgo.

- Language: TypeScript
- Stars: 875
- Forks: 171
- Stars in 1週間: 377
- Category: 金融チャートライブラリ
- Keywords: `TypeScript` `WebGL2` `金融チャート` `プラグインSDK` `ヘッドレス` `Apache-2.0`
- Summary source: README

#### README要約

- Web向けの高速で拡張可能な金融チャートライブラリで、LuxAlgoのVelaのオープンソースコア。
- WebGL2ネイティブレンダラー（canvas2dフォールバック付き）とヘッドレス設計を採用し、データプロバイダーやスクリプトエンジン、レンダラーをプラグインとして差し替え可能。
- 70以上の内蔵インジケーター、ワークスペースによる完全なチャートアプリ、プラグインSDKを提供し、開発者が独自のチャートタイプやレイヤーを追加できる。
- npmでインストール可能で、Apache-2.0ライセンスだが帰属表示の透かしが必須。Pine Scriptアドオンは別途AGPL-3.0ライセンス。

---

### 14. [yikart/AiToEarn](https://github.com/yikart/AiToEarn)

> Let's use AI to Earn!

- Language: TypeScript
- Stars: 26,266
- Forks: 4,161
- Stars in 1週間: 423
- Category: AIコンテンツマーケティング自動化プラットフォーム
- Keywords: `AIエージェント` `コンテンツ収益化` `マルチプラットフォーム投稿` `MCPプロトコル` `Dockerデプロイ` `SNS自動化`
- Summary source: README

#### README要約

- AIエージェントによる自動化で、個人事業主・クリエイター・企業が世界の主要プラットフォームでコンテンツを作成・配信・収益化するワンストッププラットフォーム。
- 収益化（CPS/CPE/CPM決済）、14以上のSNSへの一括投稿と予約管理、ブラウザ拡張による自動いいね・AI返信・コメント分析、動画・画像生成エージェントによるコンテンツ作成の4機能を提供。
- 一人会社（OPC）、クリエイター、ブランド、企業、およびマトリックスアカウント運用者を対象とし、コンテンツ販売による収益化やマルチプラットフォーム運用の効率化に活用。
- Web版（aitoearn.cn/aitoearn.ai）、OpenClawプラグイン、MCP対応AIアシスタント（Claude/Cursor）、Dockerセルフホスト、ソースコード開発の5つの利用形態があり、APIキーが必要な方式もある。

---

### 15. [adewaskar/jarvis](https://github.com/adewaskar/jarvis)

> J.A.R.V.I.S for automating your daily tasks using Claude Code

- Language: TypeScript
- Stars: 351
- Forks: 148
- Stars in 1週間: 119
- Category: 音声アシスタント
- Keywords: `Claude Code` `音声アシスタント` `MCP` `Three.js` `JARVIS` `ブラウザ`
- Summary source: README

#### README要約

- 「Hey Jarvis」と話しかけるだけで起動する、Iron Man風ホログラフィックUIを持つブラウザ音声アシスタント。
- React+Vite+Three.js+GLSL製のUIと、Claude Agent SDK経由でヘッドレス動作するClaude CodeをWebSocketで接続し、MCPサーバー経由でWeb検索・画像生成・スマホ操作などを実行する。
- 日常タスクを音声で自動化したいClaude Codeユーザー向けで、ElevenLabsキーは任意で、無ければブラウザ標準の音声認識・合成で動作する。
- 導入にはClaude Codeのログイン済み環境・Node.js 20以上・Chrome/Edgeの実ブラウザウィンドウが必要で、APIキー不要・危険な操作はデフォルトで拒否される。

---

### 16. [openclaw/openclaw](https://github.com/openclaw/openclaw)

> The AI that really does things. Any OS. Any Platform. The lobster way. 🦞

- Language: TypeScript
- Stars: 391,248
- Forks: 82,242
- Stars in 1週間: 1,170
- Category: AIアシスタント
- Keywords: `オープンソース` `AIアシスタント` `セルフホスト` `マルチプラットフォーム` `チャット連携` `TypeScript`
- Summary source: README

#### README要約

- 自分のコンピュータ上で動作し、普段使っているチャットチャネルで利用できるオープンソースのAIアシスタントです。
- Gatewayがローカルの制御基盤としてセッション、ツール、イベント、チャネル接続を管理し、モデルやエージェントハーネスはプラグインとして交換可能です。
- 個人のラップトップでの利用からチームでの共有デプロイまで対応し、Discord、Slack、WhatsAppなど20以上のチャネルや各OSのネイティブアプリで利用できます。
- macOS、Linux、Windows向けのインストーラーかnpmで導入でき、状態や認証情報はユーザーのハードウェアに保存されます。

---
