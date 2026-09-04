+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/09/04'
date = 2026-09-04T22:49:26.107Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月4日 22:49:26
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 20
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製の開発者ツールとAI関連ツールがトレンドを席巻し、特にAIエージェント支援ツールが高い注目を集めている

- 全20リポジトリがRustで実装されており、言語の統一性が顕著
- AIエージェント・LLM関連ツールが7件（35%）を占め、最大のカテゴリを形成
- 最もスターを獲得したのはAI関連ツールで、rtk-ai/rtk（958スター）とtinyhumansai/openhuman（937スター）が突出
- 開発者の生産性向上ツール（CLI、エディタ、Gitツールなど）が多数ランクイン
- インフラ・システム系（仮想化、メールサーバー、組み込み）からアプリケーション層まで幅広いレイヤーをカバー

### 主なテーマ

- **AIエージェント・LLM開発支援ツール**: AIコーディングエージェントやLLMの効率化・管理を目的としたツールが7件ランクインし、合計2,700以上のスターを獲得。トークン削減、スキル管理、アカウント切替、エージェント統合管理など多様な側面からAI開発を支援している。（`rtk-ai/rtk`、`tinyhumansai/openhuman`、`xingkongliang/skills-manager`、`RizRiyz/luvus`、`lbjlaq/Antigravity-Manager`、`tailcallhq/forgecode`、`dmtrKovalenko/fff`）
- **開発者生産性向上CLIツール**: ターミナル環境での作業効率を高めるツールが複数登場。ディレクトリジャンプ、プロンプトカスタマイズ、Git差分表示、パッケージ管理など、日常的な開発ワークフローを改善する実用的なツールが注目されている。（`ajeetdsouza/zoxide`、`starship/starship`、`dandavison/delta`、`pnpm/pnpm`）
- **システムインフラ・低レイヤー技術**: 仮想化、メールサーバー、組み込みフレームワークなど、システムの基盤となる技術がRustで実装されている。セキュリティ、パフォーマンス、リソース効率を重視した設計が共通の特徴。（`firecracker-microvm/firecracker`、`stalwartlabs/stalwart`、`embassy-rs/embassy`）
- **デスクトップアプリケーション・GUI**: エンドユーザー向けのデスクトップアプリケーションが複数ランクイン。画面録画、学習支援、グラフィックス編集など多様な用途で、Rustのクロスプラットフォーム性とパフォーマンスを活用している。（`CapSoftware/Cap`、`ankitects/anki`、`GraphiteEditor/Graphite`、`emilk/egui`）
- **モダンなテキストエディタ**: Vimライクなモーダル編集を採用しつつ、LSPやtree-sitterによる最新の開発支援機能を統合したエディタが注目を集めている。（`helix-editor/helix`）

### 補足的な観察

- 全20リポジトリがRustで実装されており、言語分布が完全に均一
- スター獲得数のトップ2（rtk-ai/rtk: 958、tinyhumansai/openhuman: 937）はいずれもAI関連ツールで、3位以下（Cap: 324）を大きく引き離している
- AI関連ツールの多くがClaude Code、Cursor、Codexなど複数のAIコーディングツールとの統合を謳っており、マルチツール対応がトレンド
- ローカルファースト、プライバシー重視、セルフホスト可能といったキーワードが複数のプロジェクトで強調されている

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 20 |

## Repository一覧

### 1. [firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker)

> Secure and fast microVMs for serverless computing.

- Language: Rust
- Stars: 36,539
- Forks: 2,602
- Stars in 1週間: 173
- Category: 仮想化技術
- Keywords: `microVM` `サーバーレス` `KVM` `コンテナ` `セキュリティ` `AWS`
- Summary source: README

#### README要約

- Firecrackerは、サーバーレス運用モデルを提供するコンテナおよび関数ベースのサービスを作成・管理するためのオープンソース仮想化技術です。
- Linux KVMを使用してmicroVMを作成・実行するVMMを中核とし、不要なデバイスを排除したミニマリスト設計で、メモリフットプリントと攻撃対象領域を削減しています。
- AWS LambdaやAWS Fargateなどのサービスを高速化・効率化するためにAWSで開発され、Kata ContainersやFlintlockなどのコンテナランタイムと統合されています。
- 最新リリースバイナリのダウンロードまたはソースからビルドが可能で、本番環境では適切に設定されたLinuxホストOSが必要です。

---

### 2. [emilk/egui](https://github.com/emilk/egui)

> egui: an easy-to-use immediate mode GUI in Rust that runs on both web and native

- Language: Rust
- Stars: 30,426
- Forks: 2,125
- Stars in 1週間: 216
- Category: GUIライブラリ
- Keywords: `Rust` `GUI` `イミディエイトモード` `Web` `ネイティブ` `クロスプラットフォーム`
- Summary source: README

#### README要約

- eguiはRust製のシンプルで高速なイミディエイトモードGUIライブラリで、Webとネイティブの両方で動作する。
- テクスチャ付き三角形を描画できる環境ならどこでも動作し、ゲームエンジンへの統合も容易で、eframeフレームワークでWeb・Linux・Mac・Windows・Android向けアプリを開発できる。
- RustでシンプルなGUIを作りたい開発者や、ゲームエンジンにGUIを追加したいユーザーに適しており、ネイティブルックや破壊的変更のない安定性を求める場合は不向き。
- cargoで導入可能だが、Linuxでデモアプリを動かすにはlibclang-devやlibgtk-3-devなどの依存パッケージが必要で、egui自体はプラットフォーム非依存。

---

### 3. [CapSoftware/Cap](https://github.com/CapSoftware/Cap)

> Open source Loom alternative. Beautiful, shareable screen recordings.

- Language: Rust
- Stars: 21,695
- Forks: 1,862
- Stars in 1週間: 324
- Category: 画面録画・動画共有ツール
- Keywords: `画面録画` `Loom代替` `オープンソース` `セルフホスト` `非同期コラボレーション` `Rust`
- Summary source: README

#### README要約

- CapはオープンソースのLoom代替で、美しく共有可能な画面録画を提供するツールです。
- Instant Modeで録画中にアップロードし即座に共有リンクを取得、Studio Modeでローカル録画後に背景・ズーム・トリミング・キャプションなどの編集が可能です。
- 製品デモ、バグ報告、オンボーディング、チュートリアル、デザインレビュー、非同期スタンドアップなど、チームでの非同期コラボレーションに適しています。
- macOSとWindowsのデスクトップアプリをダウンロードして使用開始でき、Docker Composeでセルフホストも可能です。本番環境では公開URLとデフォルトシークレットの変更が必要です。

---

### 4. [embassy-rs/embassy](https://github.com/embassy-rs/embassy)

> Modern embedded framework, using Rust and async.

- Language: Rust
- Stars: 9,783
- Forks: 1,646
- Stars in 1週間: 33
- Category: 組み込みフレームワーク
- Keywords: `Rust` `async/await` `組み込み` `HAL` `RTOS不要` `低消費電力`
- Summary source: README

#### README要約

- Rustのasync/awaitを活用した次世代の組み込みアプリケーションフレームワークで、安全で正確かつエネルギー効率の高いコードを高速に記述できる。
- コンパイル時にタスクをステートマシンへ変換する協調的マルチタスクを採用し、動的メモリ割り当て不要・単一スタックで動作するため従来のRTOSより高速かつ小型。
- STM32・nRF・RP2040・ESP32など多数のマイコン向けHALに加え、タイマー、ネットワーク、Bluetooth、LoRa、USB、ブートローダーなどの機能を統合提供する。
- 最新安定版Rustでコンパイルが保証され、examplesフォルダにチップ別のサンプルが用意されており、probe-rsをインストールしてcargo runで実行できる。

---

### 5. [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff)

> The fastest and the most accurate file search SDK for AI agents, Neovim, Rust, C, Python, Bun and NodeJS

- Language: Rust
- Stars: 10,402
- Forks: 433
- Stars in 1週間: 234
- Category: ファイル検索SDK
- Keywords: `ファイル検索` `AIエージェント` `MCPサーバー` `Neovimプラグイン` `Rust` `高速検索`
- Summary source: README

#### README要約

- fffは人間とAIエージェント向けの高速ファイル検索ツールキットで、Rust製のコアを持つ。
- タイポ耐性のあるパス・コンテンツ検索、頻度ランキング、バックグラウンドウォッチャー、軽量インメモリインデックスを備える。
- AIエージェント、Neovimユーザー、Rust/C/Python/Bun/NodeJS開発者が対象で、MCPサーバーやNeovimプラグインとして利用可能。
- MCPサーバーはワンラインインストールやHomebrewで導入でき、長時間実行プロセスでの繰り返し検索に最適化されている。

---

### 6. [stalwartlabs/stalwart](https://github.com/stalwartlabs/stalwart)

> All-in-one Mail & Collaboration server. Secure, scalable and fluent in every protocol (IMAP, JMAP, SMTP, CalDAV, CardDAV, WebDAV).

- Language: Rust
- Stars: 14,532
- Forks: 928
- Stars in 1週間: 144
- Category: メールサーバー
- Keywords: `メールサーバー` `コラボレーション` `Rust` `JMAP` `IMAP` `SMTP`
- Summary source: README

#### README要約

- Stalwartは、Rustで書かれたオープンソースのオールインワン・メール＆コラボレーションサーバーです。
- JMAP、IMAP4、POP3、SMTP、CalDAV、CardDAV、WebDAVを包括的にサポートし、スパムフィルターや認証機能を内蔵しています。
- セキュリティ、速度、堅牢性、スケーラビリティを重視して設計されており、小規模から大規模なデプロイメントまで対応可能です。
- AGPL-3.0とStalwart Enterprise License v2のデュアルライセンスで提供され、Webベースの管理インターフェースも備えています。

---

### 7. [rust-unofficial/awesome-rust](https://github.com/rust-unofficial/awesome-rust)

> A curated list of Rust code and resources.

- Language: Rust
- Stars: 59,190
- Forks: 3,591
- Stars in 1週間: 186
- Category: キュレーションリスト
- Keywords: `Rust` `awesome-list` `ライブラリ` `開発ツール` `リソース集`
- Summary source: README

#### README要約

- Rustで書かれたコードやリソースを集めたキュレーションリストです。
- アプリケーション、開発ツール、ライブラリ、リソースなど多数のカテゴリ別に整理されています。
- Rust開発者が目的に応じたツールやライブラリを探す際の参照用です。
- 貢献したい場合はCONTRIBUTING.mdを読む必要があります。

---

### 8. [dandavison/delta](https://github.com/dandavison/delta)

> A syntax-highlighting pager for git, diff, grep, rg --json, and blame output

- Language: Rust
- Stars: 32,081
- Forks: 568
- Stars in 1週間: 207
- Category: Git差分表示ツール
- Keywords: `git` `diff` `シンタックスハイライト` `ページャー` `Rust` `side-by-side`
- Summary source: README

#### README要約

- git、diff、grep、rg --json、blameの出力をシンタックスハイライト表示するページャーです。
- batと同じテーマによる言語シンタックスハイライト、Levenshteinアルゴリズムによる単語レベルの差分ハイライト、side-by-side表示、行番号表示などの機能を備えています。
- diffを頻繁に確認する開発者向けで、git blameやマージコンフリクトの表示改善、rgやgit grepの出力のハイライトにも対応しています。
- ほとんどのパッケージマネージャーではgit-deltaという名前でインストールでき、~/.gitconfigにpager = deltaを設定して使用します。

---

### 9. [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

> OpenHuman is an open source personal AI for Mac, Windows and Linux — local-first memory, agent orchestration, and deep research.

- Language: Rust
- Stars: 39,421
- Forks: 3,891
- Stars in 1週間: 937
- Category: パーソナルAIアシスタント
- Keywords: `ローカルファースト` `エージェントオーケストレーション` `メモリー管理` `Obsidian連携` `Rust` `プライバシー重視`
- Summary source: README

#### README要約

- OpenHumanはMac/Windows/Linux向けのオープンソース個人AIで、ローカルファーストの記憶、エージェントオーケストレーション、深いリサーチを提供する。
- SQLite上のMarkdownツリーによる記憶とObsidian連携、100以上のOAuth連携、ワークフロー自動化、Web検索やブラウザ操作などのツールを備える。
- 自分のデータをローカルで管理しつつ、GmailやSlackなどと連携してパーソナルAIアシスタントを使いたいユーザー向け。
- アーリーベータで開発中のため不安定な部分がある。インストーラーまたはHomebrew等で導入可能で、Rust製コアでプライバシーモードも搭載。

---

### 10. [tailcallhq/forgecode](https://github.com/tailcallhq/forgecode)

> AI enabled pair programmer for Claude, GPT, O Series, Grok, Deepseek, Gemini and 300+ models

- Language: Rust
- Stars: 7,614
- Forks: 1,459
- Stars in 1週間: 40
- Category: AIコーディングエージェント
- Keywords: `AIペアプログラミング` `ターミナル` `Rust` `マルチLLMプロバイダー` `ZSHプラグイン` `MCP`
- Summary source: README

#### README要約

- ターミナル上で動作するAI搭載のコーディングエージェントで、開発環境と統合してペアプログラミングを支援するツール。
- 対話型TUI、ワンショットCLI、ZSHプラグインの3モードを備え、コード理解・実装・デバッグ・レビュー・Git操作などをAIが支援する。
- OpenAIやAnthropicなど複数のLLMプロバイダーに対応し、ターミナルでAI支援を受けたい開発者向け。
- curlによるインストールスクリプトまたはnixで導入でき、初回起動時にプロバイダー認証情報の設定が必要。

---

### 11. [starship/starship](https://github.com/starship/starship)

> ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell!

- Language: Rust
- Stars: 59,778
- Forks: 2,652
- Stars in 1週間: 143
- Category: シェルプロンプト
- Keywords: `プロンプト` `シェル` `Rust` `カスタマイズ可能` `高速` `クロスプラットフォーム`
- Summary source: README

#### README要約

- あらゆるシェルで動作する、ミニマルで高速、無限にカスタマイズ可能なプロンプトです。
- Rust製で、プロンプトのあらゆる側面を設定でき、関連情報を一目で表示するインテリジェントな機能を備えています。
- お気に入りのツールをサポートし、あらゆるOSのシェルユーザーがターミナル環境をカスタマイズするのに適しています。
- Nerd Fontが前提条件で、各OSのパッケージマネージャーやインストールスクリプトで数分で導入できます。

---

### 12. [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide)

> A smarter cd command. Supports all major shells.

- Language: Rust
- Stars: 39,170
- Forks: 886
- Stars in 1週間: 227
- Category: CLIツール
- Keywords: `cd` `ディレクトリジャンプ` `シェル` `Rust` `生産性`
- Summary source: README

#### README要約

- zoxideはzとautojumpに触発された、より賢いcdコマンドです。
- よく使うディレクトリを記憶し、数回のキー入力でジャンプできるようにします。
- すべての主要なシェルで動作し、インタラクティブな選択や補完もサポートします。
- インストールは各プラットフォームのパッケージマネージャーやスクリプトで行い、シェルに設定を追加して使用します。

---

### 13. [pnpm/pnpm](https://github.com/pnpm/pnpm)

> Fast, disk space efficient package manager

- Language: Rust
- Stars: 36,409
- Forks: 1,691
- Stars in 1週間: 157
- Category: パッケージマネージャー
- Keywords: `pnpm` `Node.js` `モノレポ` `コンテンツアドレス可能ストレージ` `ロックファイル` `Rust`
- Summary source: README

#### README要約

- pnpmは高速でディスク容量効率の高いNode.js向けパッケージマネージャーです。
- コンテンツアドレス可能なストレージからnode_modulesへハードリンク等でリンクし、厳格な依存解決とpnpm-lock.yamlによる決定的インストールを提供します。
- モノレポや多数のプロジェクトを扱う開発チームに適し、Windows・Linux・macOSで動作し、Node.jsのバージョン管理機能も備えます。
- 公式サイトのインストール手順に従って導入でき、ライセンスはMITですがpnprディレクトリはPolyForm Shield License 1.0.0で提供されます。

---

### 14. [ankitects/anki](https://github.com/ankitects/anki)

> Anki is a smart spaced repetition flashcard program

- Language: Rust
- Stars: 30,319
- Forks: 3,181
- Stars in 1週間: 230
- Category: 学習支援ソフトウェア
- Keywords: `間隔反復` `フラッシュカード` `暗記学習` `Rust` `オープンソース` `教育`
- Summary source: README

#### README要約

- Ankiは間隔反復学習を支援するフラッシュカードプログラムのコンピュータ版ソースコードです。
- 記憶定着を最適化するスマートな間隔反復アルゴリズムを実装しています。
- 語学学習者や資格試験受験者など、効率的な暗記学習を必要とするユーザーに適しています。
- 開発版はAnki betasで試用可能で、コントリビューションガイドラインに従って貢献できます。

---

### 15. [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager)

> A lightweight desktop app to manage, sync, and organize AI agent skills across 50+ coding tools — Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.

- Language: Rust
- Stars: 4,436
- Forks: 376
- Stars in 1週間: 264
- Category: 開発者ツール
- Keywords: `AIエージェント` `スキル管理` `Rust` `デスクトップアプリ` `マルチツール同期` `Claude Code`
- Summary source: README

#### README要約

- Claude Code、Codex、Cursorなど50以上のコーディングツール間でAIエージェントスキルを一元管理する軽量デスクトップアプリ。
- Gitリポジトリやローカルフォルダ、マーケットプレイスからスキルをインストールし、シンボリックリンクやコピーで各ツールへ同期できる。
- 複数のAIツールを使い分ける開発者や、プロジェクトごとにスキルを整理したいユーザー、複数デバイス間で設定を同期したい人に適している。
- macOSはHomebrewまたはdmg、Windows/Linuxはインストーラーで導入可能。バックアップにはGitHub連携または任意のGitリモートを使用する。

---

### 16. [RizRiyz/luvus](https://github.com/RizRiyz/luvus)

> Mission control for your AI agents

- Language: Rust
- Stars: 699
- Forks: 45
- Stars in 1週間: 205
- Category: 開発者ツール
- Keywords: `AIエージェント` `ターミナル` `ワークスペース管理` `Git統合` `マルチプラットフォーム` `Rust`
- Summary source: README

#### README要約

- LuvusはAIコーディングエージェント向けのミッションコントロールツールで、Rustで実装されている。
- 永続ワークスペース、ペイン/タブ管理、エージェント状態監視、Git/GitHub統合、ワークツリー管理、SSHリモート接続などの機能を提供する。
- Claude Code、GitHub Copilot CLI、Codex、Grokなど複数のAIエージェントを統合管理したい開発者向け。
- macOS/Linux/Windowsに対応し、curlやHomebrew、PowerShellでインストール可能。macOSではCtrl+Space競合回避の設定が必要。

---

### 17. [helix-editor/helix](https://github.com/helix-editor/helix)

> A post-modern modal text editor.

- Language: Rust
- Stars: 46,083
- Forks: 3,724
- Stars in 1週間: 161
- Category: テキストエディタ
- Keywords: `Rust` `モーダル編集` `Vim` `Kakoune` `LSP` `tree-sitter`
- Summary source: README

#### README要約

- KakouneとNeovimにインスパイアされた、Rust製のポストモダンなモーダルテキストエディタです。
- Vimライクなモーダル編集、複数選択、Language Server Protocol（LSP）の組み込みサポート、tree-sitterによるスマートなシンタックスハイライトとコード編集を特徴としています。
- ターミナルベースのエディタを求める開発者や、Kakouneの編集モデルを好むユーザーに適しています。
- インストールは公式ドキュメントに従って行います。現時点では特定の言語のみインデント定義が利用可能です。

---

### 18. [lbjlaq/Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager)

> Professional Antigravity Account Manager & Switcher. One-click seamless account switching for Antigravity Tools. Built with Tauri v2 + React (Rust).专业的 Antigravity 账号管理与切换工具。为 Antigravity 提供一键无缝账号切换功能。

- Language: Rust
- Stars: 31,016
- Forks: 3,334
- Stars in 1週間: 264
- Category: AIアカウント管理・APIプロキシツール
- Keywords: `Antigravity` `アカウント切替` `APIプロキシ` `Tauri` `Rust` `モデルルーティング`
- Summary source: README

#### README要約

- 開発者やAI愛好家向けのデスクトップアプリで、複数AIアカウントの管理・切替とローカルAPI中継ゲートウェイを提供する。
- WebセッションをOpenAI/Anthropic/Gemini形式のAPIに変換し、モデルルーティング、429/401時の自動リトライとアカウントローテーションを行う。
- Claude Code CLIや各種AIクライアントからの利用を想定し、OAuth認証、JSON一括インポート、403検出、Imagen 3対応などを備える。
- Tauri v2+React(Rust)製で、インストールスクリプト、Homebrew、Dockerで導入可能。CC BY-NC-SA 4.0で商用利用は禁止。

---

### 19. [GraphiteEditor/Graphite](https://github.com/GraphiteEditor/Graphite)

> Community-built comprehensive 2D content creation appplication for graphic design, digital art, and interactive real-time motion graphics powered by a node-based procedural graphics engine

- Language: Rust
- Stars: 27,119
- Forks: 1,244
- Stars in 1週間: 171
- Category: グラフィックスエディタ
- Keywords: `2Dグラフィックス` `ノードベース` `非破壊編集` `Rust` `オープンソース` `プロシージャル`
- Summary source: README

#### README要約

- Graphiteは無料・オープンソースのベクターおよびラスターグラフィックスエンジンで、現在アルファ版として公開されている。
- レイヤーベースの合成とノードベースのジェネレーティブデザインを組み合わせた、完全な非破壊編集ワークフローを提供する。
- ベクター編集から始まり、写真編集、モーショングラフィックス、デジタルペイント、DTP、VFX合成などへの拡張がロードマップに計画されている。
- Rust製で、コミュニティ主導の開発と寄付によって運営されており、貢献者はApache 2.0ライセンスへの同意が必要。

---

### 20. [rtk-ai/rtk](https://github.com/rtk-ai/rtk)

> CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies

- Language: Rust
- Stars: 78,591
- Forks: 4,966
- Stars in 1週間: 958
- Category: AI開発ツール
- Keywords: `CLIプロキシ` `トークン削減` `Rust` `LLMエージェント` `出力圧縮` `Claude Code`
- Summary source: README

#### README要約

- シェルコマンドの出力をLLMエージェントに渡す前にフィルタ・圧縮し、トークン消費を最大90%削減するCLIプロキシ。
- 単一のRustバイナリで100以上のコマンドに対応し、フィルタリング・グループ化・切り詰め・重複排除の4戦略で出力を圧縮する。
- Claude Code、Gemini CLI、Codex、CursorなどのAIコーディングツール利用者が対象で、rtk initでフックを設定するとコマンドが自動的に書き換えられる。
- Homebrew・Cargo・インストールスクリプト・ビルド済みバイナリで導入可能。削減率はbash出力の推定値であり請求額の削減とは異なる点に注意。

---
