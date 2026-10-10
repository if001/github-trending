+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/10/10'
date = 2026-10-10T00:31:38.463Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月10日 0:31:38
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 14
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製の高性能デスクトップツールとAIエージェント関連基盤がトレンドを席巻している

- 一覧の全14件がRust製であり、言語分布が完全にRustに集中している
- AIエージェント関連のリポジトリが6件（openhuman、OpenShell、skills-manager、zeron、dbx、fframes）を占め、実行基盤・管理・セキュリティと多様なレイヤーに広がっている
- 獲得スター数の上位はdbx（1579）、openhuman（1350）、OpenShell（1315）、gpui-kit（1063）で、AI基盤とGUIフレームワークが牽引している
- ローカルファースト・オフライン動作を謳うツール（Handy、autoshorts、zeronなど）が複数見られ、プライバシー重視の傾向がうかがえる

### 主なテーマ

- **AIエージェントの実行・管理基盤**: tinyhumansai/openhumanは低コストで500以上のエージェントを実行できるハーネスを謳い1350スターを獲得、NVIDIA/OpenShellはカーネルレベルのサンドボックスでエージェントの動作を制御するランタイムで1315スター、zeronsh/zeronは複数のコーディングエージェントを一元管理するコントロールプレーンを提供しており、エージェントの実行・制御・管理を担う基盤レイヤーへの関心の高さが示されている（`tinyhumansai/openhuman`、`NVIDIA/OpenShell`、`zeronsh/zeron`）
- **AIスキル・ツール連携のエコシステム**: xingkongliang/skills-managerはClaude CodeやCursorなど50以上のコーディングツール間でスキルを同期管理し、t8y2/dbxはMCPサーバーやAIアシスタントを内蔵したDBクライアントで1579スターと今期最多、dmtrKovalenko/fframesはコーディングエージェント向けスキルと検証CLIを備えており、個別ツールにまたがるAI連携の仕組みが注目されている（`xingkongliang/skills-manager`、`t8y2/dbx`、`dmtrKovalenko/fframes`）
- **ローカルファーストなデスクトップ生産性ツール**: cjpais/Handyは完全オフラインで動作する音声テキスト変換アプリ、JayWebtech/autoshortsはOllama+Whisperによる完全オフライン動作も可能なショート動画生成アプリ、zerx-lab/FluxDownはアカウント不要でローカル利用できるダウンロードマネージャーであり、クラウドに依存しないプライバシー重視のデスクトップツールが複数ランクインしている（`cjpais/Handy`、`JayWebtech/autoshorts`、`zerx-lab/FluxDown`）
- **Rustによる高性能GUI・メディア基盤**: longbridge/gpui-kitは75以上のコンポーネントを持つGPUIベースのUIフレームワークで1063スター、dmtrKovalenko/fframesはSkiaとGPUによる高速動画レンダリング、eolix/photosuiteはRust製エンジンでPSD/PSBネイティブ互換の画像エディタを実現しており、RustでリッチなGUIやメディア処理を構築する動きが活発である（`longbridge/gpui-kit`、`dmtrKovalenko/fframes`、`eolix/photosuite`）
- **既存ソフトウェアのRust製代替・再実装**: eolix/photosuiteはクラシックPhotoshopの忠実な再現を目指し、zerx-lab/FluxDownはIDM代替を明示、Pumpkin-MC/PumpkinはMinecraftサーバーをRustで完全再構築、touchHLE/touchHLEは初期iOSアプリをハイレベルエミュレーションで動かしており、既存の確立されたソフトウェアをRustで置き換える試みが複数見られる（`eolix/photosuite`、`zerx-lab/FluxDown`、`Pumpkin-MC/Pumpkin`、`touchHLE/touchHLE`）

### 補足的な観察

- 言語分布は14件すべてがRustで、他言語のリポジトリは一件も含まれていない
- スター数の最多はt8y2/dbxの1579で、最小はtouchHLE/touchHLEの37と約43倍の開きがある
- NVIDIAがOpenShellでランクインしており、大企業によるAIエージェント向けオープンソースの公開が目立つ
- sharkdp/hyperfineのような定番CLIツール（106スター）と新興のAI関連プロジェクトが同じランキングに混在している

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 14 |

## Repository一覧

### 1. [zerx-lab/FluxDown](https://github.com/zerx-lab/FluxDown)

> Rust 驱动的多协议下载管理器，支持 HTTP/FTP/BitTorrent 磁力链接及 HLS/DASH 流媒体，智能多线程加速与浏览器无缝集成。精美界面，极致性能，永久免费，零广告。

- Language: Rust
- Stars: 4,136
- Forks: 244
- Stars in 1週間: 772
- Category: ダウンロードマネージャー
- Keywords: `Rust` `マルチプロトコル` `BitTorrent` `HLS/DASH` `ブラウザ連携` `オープンソース`
- Summary source: README

#### README要約

- Rust製の高速マルチプロトコルダウンロードマネージャーで、無料・オープンソースのIDM代替ツールです。
- HTTP/HTTPS、FTP、BitTorrent、eD2K、HLS/DASHストリーミングに対応し、動的セグメント分割による加速とブラウザ拡張機能による自動ダウンロード連携を備えています。
- デスクトップ（Windows/macOS/Linux）、Android、NAS/サーバー環境で利用可能で、AIエージェント連携（MCP）やRSS自動化、リモート管理機能を求めるユーザーに適しています。
- GitHub Releasesや公式サイトからインストール可能で、ローカル利用はアカウント不要ですが、サーバーモードではアクセスキーの設定が必要です。

---

### 2. [cjpais/Handy](https://github.com/cjpais/Handy)

> A free, open source, and extensible speech-to-text application that works completely offline.

- Language: Rust
- Stars: 33,368
- Forks: 3,110
- Stars in 1週間: 739
- Category: 音声認識ツール
- Keywords: `音声認識` `オフライン` `Whisper` `Rust` `プライバシー` `クロスプラットフォーム`
- Summary source: README

#### README要約

- Handyは完全オフラインで動作する無料・オープンソースの音声テキスト変換デスクトップアプリです。
- ショートカットキーで録音し、WhisperやParakeet V3モデルでローカル文字起こしを行い、任意のテキスト欄に直接貼り付けます。
- プライバシーを重視するユーザーやアクセシビリティツールを必要とする人向けで、Windows・macOS・Linuxに対応しています。
- リリースページやHomebrew、wingetで導入可能ですが、Linuxではxdotoolやwtype等の追加ツールが必要な場合があります。

---

### 3. [dmtrKovalenko/fframes](https://github.com/dmtrKovalenko/fframes)

> programmatic video rendering framework that is actually fast

- Language: Rust
- Stars: 2,503
- Forks: 58
- Stars in 1週間: 621
- Category: 動画レンダリングフレームワーク
- Keywords: `Rust` `SVG` `GPUレンダリング` `Skia` `ffmpeg` `コーディングエージェント`
- Summary source: README

#### README要約

- RustとSVGで動画を記述し、GPUで高速レンダリングするプログラマティック動画生成フレームワーク。
- SkiaバックエンドでMetal/Vulkan上のGPU描画を行い、静的マークアップのキャッシュやffmpegのlibav連携によるエンコードで高速化している。
- コーディングエージェント向けスキルを提供し、inspect/strip/onion/audio analyze等のCLIでエージェントが動画を検証できる設計。
- cargo install --locked cargo-fframesで導入可能。WindowsではLLVMとffmpegビルドの設定が必要で、コーデックはCargoフィーチャで選択する。

---

### 4. [longbridge/gpui-kit](https://github.com/longbridge/gpui-kit)

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

- Language: Rust
- Stars: 16,668
- Forks: 1,028
- Stars in 1週間: 1,063
- Category: GUIフレームワーク
- Keywords: `Rust` `GPUI` `デスクトップアプリ` `UIコンポーネント` `クロスプラットフォーム` `WebAssembly`
- Summary source: README

#### README要約

- GPUI Kitは、RustとGPUIで高性能なクロスプラットフォームデスクトップアプリを構築するための包括的なUIフレームワークです。
- 75以上のコンポーネント、WebAssembly対応、AccessKitアクセシビリティ、UI統合テスト、JavaScript拡張ランタイムを提供します。
- 商用アプリLongbridge Proで実運用されており、データテーブル、コードエディタ、ドックレイアウトなど高度な機能を備えています。
- Cargoでgpui-kit = "0.7"を依存に追加し、gpui_kit::initで初期化して利用します。ライセンスはApache-2.0です。

---

### 5. [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager)

> A lightweight desktop app to manage, sync, and organize AI agent skills across 50+ coding tools — Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.

- Language: Rust
- Stars: 5,838
- Forks: 489
- Stars in 1週間: 457
- Category: 開発者ツール
- Keywords: `AIエージェント` `スキル管理` `Rust` `デスクトップアプリ` `マルチツール同期` `Claude Code`
- Summary source: README

#### README要約

- Claude Code、Codex、Cursorなど50以上のコーディングツール間でAIエージェントスキルを一元管理する軽量デスクトップアプリ。
- Gitリポジトリやローカルフォルダ、マーケットプレイスからスキルをインストールし、シンボリックリンクまたはコピーで各ツールへ同期できる。
- 複数のAIコーディングツールを使い分ける開発者が、スキルのプリセット管理やプロジェクト単位の同期、GitHub経由のバックアップを行う用途に適する。
- macOSはHomebrewまたはdmg、WindowsとLinuxは各種インストーラーで導入可能で、Rust製のCLIも同梱される。

---

### 6. [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin)

> Empowering everyone to host fast and efficient Minecraft servers

- Language: Rust
- Stars: 12,224
- Forks: 902
- Stars in 1週間: 375
- Category: ゲームサーバー
- Keywords: `Minecraft` `Rust` `マルチスレッディング` `プラグイン` `Java Edition` `Bedrock Edition`
- Summary source: README

#### README要約

- PumpkinはRustで完全に構築されたMinecraftサーバーで、高速で効率的かつカスタマイズ可能な体験を提供します。
- マルチスレッディングによるパフォーマンス重視の設計で、Java EditionとBedrock Editionの両方をサポートし、Vanillaのゲームメカニクスに準拠しています。
- プラグイン開発の基盤を提供し、BungeeCordやVelocityなどのプロキシに対応しているため、カスタムサーバーを構築したい開発者やサーバー運営者に適しています。
- 現在活発に開発中であり、設定はTOML形式で行い、詳細な導入方法は公式ドキュメントのQuick Startガイドを参照してください。

---

### 7. [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

> The fastest, cheapest, most efficient open-source agent harness. Run more than 500 agents on a $10 VPS.

- Language: Rust
- Stars: 41,750
- Forks: 4,108
- Stars in 1週間: 1,350
- Category: AIエージェント基盤
- Keywords: `Rust` `エージェントハーネス` `トークン圧縮` `ツール検索` `メモリ統合` `オープンソース`
- Summary source: README

#### README要約

- OpenHumanは、高速・低コスト・高効率を謳うオープンソースのAIエージェントハーネスで、10ドルのVPSで500以上のエージェントを実行できると主張している。
- RLMベースのトークン圧縮、ツール検索モデルJev、統一Rustバス、組み込みメモリ、ブラウザ/デスクトップ制御など6つの技術で高速化と省リソース化を実現している。
- 一般ユーザー向けのデスクトップアプリと、開発者がRustライブラリとして組み込めるコアを提供し、大規模なエージェント群の運用を対象とする。
- macOS/Windows/Linux向けインストーラやスクリプトで導入できるが、早期ベータ版で活発に開発中のため、粗い部分がある点に注意が必要。

---

### 8. [touchHLE/touchHLE](https://github.com/touchHLE/touchHLE)

> High-level emulator for early iOS apps. This repo is used for issues, releases and CI. Submit patches at: https://review.gerrithub.io/admin/repos/touchHLE/touchHLE

- Language: Rust
- Stars: 3,985
- Forks: 357
- Stars in 1週間: 37
- Category: エミュレータ
- Keywords: `iOSエミュレータ` `Rust` `ハイレベルエミュレーション` `レトロゲーム` `iPhone OS` `Android対応`
- Summary source: README

#### README要約

- touchHLEは初期のiOSアプリを現代のデスクトップOSやAndroid上で動作させる、Rust製のハイレベルエミュレータです。
- ハードウェアを直接シミュレートせず、iOSのシステムフレームワーク（Foundation、UIKit、OpenGL ESなど）を独自に実装してアプリを実行します。
- 主にiPhone OS 2.x〜iOS 4.0.x時代のゲームを対象としており、動作確認済みアプリは互換性データベースで管理されています。
- 公式バイナリはWindows、macOS、Android向けに提供され、合法的に入手した復号済みアプリのみ使用可能です。

---

### 9. [JayWebtech/autoshorts](https://github.com/JayWebtech/autoshorts)

> AutoShorts is a local-first desktop application for turning long-form video or audio recordings into high-impact, vertical short-form clip candidates (9:16 portrait) with AI-powered viral moment ranking.

- Language: Rust
- Stars: 1,223
- Forks: 229
- Stars in 1週間: 116
- Category: 動画編集AIツール
- Keywords: `ショート動画生成` `Tauri` `Rust` `LLM` `ffmpeg` `ローカルファースト`
- Summary source: README

#### README要約

- 長尺の動画・音声からAIでバイラル瞬間を検出し、9:16縦型ショート動画候補を生成するローカルファーストのデスクトップアプリ。
- Deepgramで文字起こしし、DeepSeekやClaudeなどのLLMで瞬間をランク付け、ffmpegで縦型H.264クリップに自動クロップする。
- Tauri 2 + React + Rust + SQLiteで構築され、プロジェクト管理やローカル保存に対応、Ollama+Whisperによる完全オフライン動作も選択可能。
- 動作にはFFmpeg/FFprobeのインストールが必須で、クラウド利用時はDeepgram・DeepSeek・ClaudeのAPIキー設定が必要。

---

### 10. [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine)

> A command-line benchmarking tool

- Language: Rust
- Stars: 29,037
- Forks: 521
- Stars in 1週間: 106
- Category: ベンチマークツール
- Keywords: `ベンチマーク` `CLI` `Rust` `統計解析` `性能計測` `クロスプラットフォーム`
- Summary source: README

#### README要約

- hyperfineはRust製のコマンドラインベンチマークツールで、任意のシェルコマンドの実行時間を複数回計測し統計解析する。
- ウォームアップ実行、キャッシュクリア用の準備コマンド、外れ値検出、パラメータスキャン、CSV/JSON/Markdown/AsciiDocへの結果エクスポートに対応する。
- 複数コマンドの性能比較やGitブランチ間の計測、CIでの性能回帰検出など、開発者の性能評価用途に向く。
- 各OSのパッケージマネージャやcargo、バイナリから導入でき、cargo利用時はRust 1.97以降が必要で、ハードウェアカウンタはシェル有効時や一部OSでは利用不可。

---

### 11. [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell)

> OpenShell is the safe, private runtime for autonomous AI agents.

- Language: Rust
- Stars: 15,604
- Forks: 1,749
- Stars in 1週間: 1,315
- Category: AIエージェントランタイム
- Keywords: `AIエージェント` `サンドボックス` `ポリシー制御` `カーネル分離` `形式検証` `セキュリティ`
- Summary source: README

#### README要約

- OpenShellは、自律型AIエージェントのための安全でプライベートなランタイムです。
- カーネルレベルのサンドボックスでファイルアクセスやネットワーク接続を制御し、ポリシー変更を形式検証で事前チェックします。
- AIエージェントにファイル操作やAPI呼び出しの能力を与えつつ、データや認証情報への無制限アクセスを防ぎたい開発者・組織向けです。
- Linux、macOS（Apple Silicon）、WSL 2環境で動作し、Docker、Podman、またはホスト仮想化が必要です。

---

### 12. [t8y2/dbx](https://github.com/t8y2/dbx)

> 25 MB lightweight cross-platform database client for 100+ databases, including MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB, SQL Server, and Dameng. Built-in AI, MCP Server, CLI, desktop and Docker. | 轻量级跨平台数据库管理工具，支持 MySQL、PostgreSQL、SQLite、Redis、MongoDB、达梦等 100+ 数据库，提供桌面端、Docker、CLI、内置 AI 助手和 MCP。

- Language: Rust
- Stars: 25,396
- Forks: 2,299
- Stars in 1週間: 1,579
- Category: データベース管理ツール
- Keywords: `データベースクライアント` `クロスプラットフォーム` `Rust` `AI統合` `MCP` `軽量`
- Summary source: README

#### README要約

- dbxは、100以上のデータベースに対応した25MBの軽量クロスプラットフォームデータベースクライアントです。
- MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB、SQL Server、Damengなどをサポートし、デスクトップ、Docker、CLI、組み込みAIアシスタント、MCPサーバーを提供します。
- 複数のデータベースを一元管理したい開発者やデータベース管理者に適しており、AI支援によるクエリ作成やデータ操作が可能です。
- Rustで構築されており、GitHubリリースからダウンロード可能で、Apache-2.0ライセンスの下で提供されています。

---

### 13. [eolix/photosuite](https://github.com/eolix/photosuite)

> A desktop image editor, faithful to classic Adobe Photoshop, with native PSD/PSB compatibility

- Language: Rust
- Stars: 1,014
- Forks: 46
- Stars in 1週間: 697
- Category: 画像編集ソフト
- Keywords: `Photoshop互換` `PSD/PSB` `Rust` `画像編集` `レイヤー` `オープンソース`
- Summary source: README

#### README要約

- クラシックAdobe Photoshopを忠実に再現したデスクトップ画像エディタで、PSD/PSB形式をネイティブサポートしています。
- レイヤー、マスク、ブレンドモード、スマートオブジェクト、Camera Raw、各種フィルターを備え、Rust製エンジン上に構築されています。
- Photoshop CS6に慣れたデザイナーや、PSDファイルを無料で編集したいユーザーに適しています。
- macOS、Windows、Linux向けインストーラーがReleasesページから入手可能で、ソースからビルドする場合はRust 1.90以降が必要です。

---

### 14. [zeronsh/zeron](https://github.com/zeronsh/zeron)

> A native control plane for Claude Code, Codex, Cursor, Devin and other coding agents.

- Language: Rust
- Stars: 3,141
- Forks: 305
- Stars in 1週間: 393
- Category: AIエージェント管理ツール
- Keywords: `コーディングエージェント` `コントロールプレーン` `Rust` `マルチデバイス同期` `CLI` `ローカルファースト`
- Summary source: README

#### README要約

- Claude Code、Codex、Cursor、Devinなどのコーディングエージェントをローカルで制御するネイティブコントロールプレーン。
- デスクトップアプリとヘッドレスCLIを提供し、オプションでマルチデバイス同期によるリモート操作が可能。
- 複数のAIコーディングエージェントを一元管理したい開発者や、VPSなどでエージェントを常時稼働させたいユーザー向け。
- GitHub Releasesからインストール可能で、アカウント不要のローカル動作がデフォルト。同期機能は信頼できるデバイスのみで使用すること。

---
