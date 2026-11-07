+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/11/07'
date = 2026-11-07T00:39:20.329Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月7日 0:39:20
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが圧倒的多数を占め、AIコーディングエージェントの運用基盤とローカル・プライバシー重視のデスクトップアプリがトレンドの二大軸となっている。

- 一覧の全18リポジトリがRust製であり、言語分布が完全にRustに集中している。
- AIコーディングエージェント関連が最多のテーマで、エージェント本体（openai/codex）だけでなく、並列実行管理（max-sixty/worktrunk）、ランタイム（herdrdev/herdr）、ブラウザ操作（vercel-labs/agent-browser）、リモート操作（leepokai/Codync）、プロキシ（agentgateway/agentgateway）など周辺基盤が揃ってランクインしている。
- 完全オフライン動作を謳うローカルアプリが複数登場し、音声入力のanomalyco/hex（4291スター）とcjpais/Handy（2677スター）、ローカルLLMチャットのjanhq/janがプライバシー訴求で支持を集めている。
- 最もスターを獲得したのはpbakaus/impeccable（8172スター）で、AI生成UIの品質問題（「AIスロップ」）を検出するという、AI生成物の品質管理という新しい課題に対応するツールである。
- xai-org/x-algorithmのように企業がコアアルゴリズムを公開するケースや、denoland/deno、astral-sh/ruff、nushell/nushellなど定番基盤ツールの継続的な人気も見られる。

### 主なテーマ

- **AIコーディングエージェントの運用・並列実行基盤**: openai/codex自体がランクインしつつ、複数エージェントの並列実行を支える周辺ツールが多数登場している。max-sixty/worktrunkはGit worktreeで並列AIエージェントワークフローを管理し、herdrdev/herdrはエージェントのセッションを永続化するターミナルマルチプレクサ、leepokai/Codyncは40以上のエージェントをスマホ等からリモート操作できる。エージェントを「使う」段階から「複数同時に運用する」段階への移行がうかがえる。（`max-sixty/worktrunk`、`herdrdev/herdr`、`openai/codex`、`leepokai/Codync`）
- **AI生成物の品質管理とエージェントの外部接続**: 期間最大の8172スターを獲得したpbakaus/impeccableは、AI生成UIの「スロップ」を62の決定論的ルールで出荷前に検出するツールで、AI生成物の品質担保への関心の高さを示す。vercel-labs/agent-browserはエージェントにブラウザ操作能力を与え、agentgateway/agentgatewayはエージェント間通信にセキュリティとガバナンスを提供するプロキシであり、エージェントの能力拡張と統制の両面が注目されている。（`pbakaus/impeccable`、`vercel-labs/agent-browser`、`agentgateway/agentgateway`）
- **オフライン・プライバシー重視のローカルアプリ**: anomalyco/hex（4291スター）とcjpais/Handy（2677スター）はともに完全オフラインで動作するローカル音声入力ツールで、データが外部送信されない点を前面に打ち出している。janhq/janも100%オフラインで動くChatGPT代替を謳い、ローカルLLM実行とプライバシー保護を求める層の支持を集めている。（`anomalyco/hex`、`cjpais/Handy`、`janhq/jan`）
- **Rust製の軽量ネイティブデスクトップクライアント**: crmne/zapfastはブラウザエンジンを使わないRust+egui製の軽量WhatsAppクライアント、SimoHypers/limusicはRust+Tauri製の広告なしYouTube Musicクライアントであり、Electron的な重いクライアントへの代替としてネイティブアプリを提供する動きが見られる。（`crmne/zapfast`、`SimoHypers/limusic`）
- **定番基盤ツールとアルゴリズム公開**: astral-sh/ruff（高速Pythonリンター）、denoland/deno（JS/TSランタイム）、nushell/nushell（構造化データシェル）、clap-rs/clap（CLIパーサー）、zed-industries/zed（高性能エディタ）といったRust製の定番開発基盤が安定的にスターを獲得している。またxai-org/x-algorithmはXのFor Youフィードのコアアルゴリズムを公開するもので、企業による透明性目的のコード公開という異色の事例である。（`astral-sh/ruff`、`denoland/deno`、`nushell/nushell`、`clap-rs/clap`、`zed-industries/zed`、`xai-org/x-algorithm`）

### 補足的な観察

- 言語分布は18件中18件すべてがRustであり、CLIツール、デスクトップアプリ、ランタイム、プロキシまで幅広い用途でRustが採用されている。
- スター獲得数の上位はpbakaus/impeccable（8172）、anomalyco/hex（4291）、cjpais/Handy（2677）、max-sixty/worktrunk（2184）の順で、AI品質管理とローカル音声入力が特に強い関心を集めている。
- AIエージェント関連リポジトリの多くがClaude CodeやCodexなど特定の既存エージェントとの連携を明記しており、エージェントエコシステムを前提としたツール設計が一般化している。
- xai-org/x-algorithm（217スター）やagentgateway/agentgateway（180スター）、clap-rs/clap（168スター）はスター数こそ控えめだが、企業公式アルゴリズム公開や成熟した基盤ライブラリという点で、数値以外の注目理由を持つリポジトリとなっている。

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 18 |

## Repository一覧

### 1. [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)

> Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows

- Language: Rust
- Stars: 11,801
- Forks: 453
- Stars in 1週間: 2,184
- Category: Gitワークフローツール
- Keywords: `git worktree` `CLI` `AIエージェント` `並列開発` `Rust` `ワークフロー自動化`
- Summary source: README

#### README要約

- WorktrunkはGit worktreeを管理するCLIツールで、AIエージェントの並列実行を目的として設計されている。
- ブランチ名でworktreeを操作でき、switch・list・merge・removeなどのコマンドでworktreeをブランチのように簡単に扱える。
- Claude CodeやCodexなどのAIエージェントを複数並行で管理する開発者や、多数の並列変更を扱うワークフローに適している。
- Homebrew・Cargo・Winget・pacman・Condaなどでインストールでき、シェル統合のためwt config shell installの実行が必要。

---

### 2. [pbakaus/impeccable](https://github.com/pbakaus/impeccable)

> The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships.

- Language: Rust
- Stars: 104,810
- Forks: 6,228
- Stars in 1週間: 8,172
- Category: デザイン支援ツール
- Keywords: `デザイン語彙` `AIスロップ検出` `コーディングエージェント` `UIレビュー` `スラッシュコマンド` `アクセシビリティ監査`
- Summary source: README

#### README要約

- コーディングエージェント向けのデザイン語彙ツールで、AI生成UIのありがちな「スロップ」を出荷前に検出・改善する。
- bolderやpolishなど24のコマンドでデザインを指示し、critiqueとauditでレビュー、62の決定論的ルールでLLM不要の検出を行う。
- Claude Code、Cursor、Codex CLIなど多数のコーディングツール利用者が対象で、既存UIの反復改善に強い。
- npx impeccable installで導入し、/impeccable initで初期化。ライブモードはローカル専用で本番CSPを弱めないこと。

---

### 3. [herdrdev/herdr](https://github.com/herdrdev/herdr)

> the runtime your coding agents live on

- Language: Rust
- Stars: 48,702
- Forks: 3,917
- Stars in 1週間: 1,661
- Category: 開発者ツール
- Keywords: `ターミナルマルチプレクサ` `コーディングエージェント` `Rust` `セッション永続化` `CLI` `開発環境`
- Summary source: README

#### README要約

- コーディングエージェントが動作するランタイム環境を提供するRust製のターミナルマルチプレクサです。
- バックグラウンドサーバーでターミナルを維持し、SSH切断や再起動後もセッション状態を復元します。
- Claude CodeやCodexなどの既存エージェントをラップせずにターミナルを管理し、ペインの状態監視やエージェント間連携をCLIとソケットAPIで実現します。
- curlやHomebrewでインストール可能で、単一のRustバイナリとして動作し、tmux風のキーバインドとマウス操作の両方をサポートします。

---

### 4. [openai/codex](https://github.com/openai/codex)

> Lightweight coding agent that runs in your terminal

- Language: Rust
- Stars: 133,486
- Forks: 21,156
- Stars in 1週間: 1,930
- Category: AIコーディングエージェント
- Keywords: `OpenAI` `Codex` `CLI` `コーディングエージェント` `Rust` `ターミナル`
- Summary source: README

#### README要約

- OpenAIが提供する、ローカル環境で動作するコーディングエージェント「Codex CLI」です。
- ターミナル上で動作し、コードの生成や編集を支援します。VS CodeなどのIDE拡張やデスクトップアプリ、クラウド版とも連携可能です。
- ChatGPTのPlus/Pro/Business等のプランで利用でき、APIキーでの認証も可能です。開発者のコーディング作業を効率化します。
- Mac/Linux/Windowsに対応し、curl、npm、Homebrewなどでインストール可能です。Apache-2.0ライセンスで公開されています。

---

### 5. [zed-industries/zed](https://github.com/zed-industries/zed)

> Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.

- Language: Rust
- Stars: 93,621
- Forks: 11,499
- Stars in 1週間: 995
- Category: コードエディタ
- Keywords: `コードエディタ` `マルチプレイヤー` `高性能` `Rust` `オープンソース` `クロスプラットフォーム`
- Summary source: README

#### README要約

- ZedはAtomとTree-sitterの開発者による高性能なマルチプレイヤーコードエディタです。
- Rustで開発され、macOS、Linux、Windowsで利用可能で、直接ダウンロードまたはパッケージマネージャーからインストールできます。
- コードエディタを必要とする開発者向けで、複数人での共同編集をサポートしています。
- ソースコードは主にGPL-3.0-or-laterライセンスで、一部Apache-2.0コンポーネントを含み、Web版はまだ利用できません。

---

### 6. [cjpais/Handy](https://github.com/cjpais/Handy)

> A free, open source, and extensible speech-to-text application that works completely offline.

- Language: Rust
- Stars: 37,822
- Forks: 3,573
- Stars in 1週間: 2,677
- Category: 音声認識ツール
- Keywords: `音声認識` `オフライン` `Whisper` `Rust` `プライバシー` `クロスプラットフォーム`
- Summary source: README

#### README要約

- Handyは完全オフラインで動作する無料・オープンソースの音声テキスト変換デスクトップアプリです。
- ショートカットキーで録音し、WhisperやParakeet V3モデルでローカル文字起こしを行い、任意のテキスト欄に直接貼り付けます。
- プライバシーを重視するユーザーやアクセシビリティ用途に適し、Windows・macOS・Linuxに対応しています。
- リリース版やHomebrew・wingetで導入でき、マイクとアクセシビリティ権限の付与が必要で、Linuxではxdotoolやwtype等の追加ツールが必要な場合があります。

---

### 7. [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)

> Browser automation CLI for AI agents

- Language: Rust
- Stars: 46,313
- Forks: 3,172
- Stars in 1週間: 1,404
- Category: ブラウザ自動化ツール
- Keywords: `AIエージェント` `ブラウザ自動化` `CLI` `Rust` `Chrome DevTools Protocol` `アクセシビリティツリー`
- Summary source: README

#### README要約

- AIエージェントがシェルからブラウザを操作するためのRust製ネイティブCLIツール。
- snapshotコマンドでページをアクセシビリティツリー形式のテキストとして取得し、各要素に付与されたref（@e1等）を使ってクリックや入力などの操作を実行する。
- バックグラウンドデーモンがChrome DevTools Protocol経由でブラウザを制御し、コマンド間でブラウザを開いたまま維持するため、エージェントが1コマンドずつ対話的に操作できる。
- npm、Homebrew、npxでインストール可能。初回はagent-browser installでChrome for Testingをダウンロードする必要がある。MCPサーバー機能やスキルシステムも提供。

---

### 8. [anomalyco/hex](https://github.com/anomalyco/hex)

> Local voice dictation for mac, windows and linux

- Language: Rust
- Stars: 5,536
- Forks: 325
- Stars in 1週間: 4,291
- Category: 音声入力ツール
- Keywords: `音声認識` `ディクテーション` `ローカル処理` `オフライン` `Rust` `クロスプラットフォーム`
- Summary source: README

#### README要約

- HexはMac、Windows、Linux向けのローカル音声ディクテーションツールです。
- ショートカットキーを押しながら話すと、デバイス上で文字起こしを行い、アクティブなアプリに貼り付けます。
- プライバシーを重視し、完全にオフラインで音声入力を行いたいユーザーに適しています。
- 初回実行時に音声モデルのダウンロードが必要ですが、その後はデータが外部に送信されることはありません。

---

### 9. [leepokai/Codync](https://github.com/leepokai/Codync)

> Open source Grok Bot alternative, Bring your own agent and subscription: message Claude Code, Codex, Gemini CLI, Cursor, Copilot and 40+ AI agents as bots on your own computer, from iPhone, Mac, Windows, Linux or terminal. Agent-agnostic and free. Also a Muse and Dots alternative. Built in Rust.

- Language: Rust
- Stars: 1,934
- Forks: 199
- Stars in 1週間: 922
- Category: AIエージェント連携ツール
- Keywords: `AIエージェント` `Grok Bot代替` `Rust` `ACP` `リモート操作` `オープンソース`
- Summary source: README

#### README要約

- PC上のコーディングエージェントを常駐ボット化し、スマホ等から指示できるオープンソースのGrok Bot代替ツール。
- Claude CodeやCodexなど40以上のエージェントをACP経由で自動検出し、グループチャットやボット同士の連携、承認カードを提供する。
- 複数のAIエージェントを使い分け、外出先のiPhoneやSSH先のターミナルからリモートで開発作業を委任したいユーザー向け。
- Rust製ホストをMac・Windows・Linuxに導入して利用する。Apache 2.0ライセンスで、Windows版インストーラーは現在未署名。

---

### 10. [xai-org/x-algorithm](https://github.com/xai-org/x-algorithm)

> Algorithm powering the For You feed on X

- Language: Rust
- Stars: 34,119
- Forks: 5,514
- Stars in 1週間: 217
- Category: 推薦アルゴリズム
- Keywords: `For Youフィード` `Transformer` `ランキング` `Rust` `推薦システム` `visibility-filtering`
- Summary source: README

#### README要約

- Xの「For You」フィードに表示する投稿を決定するコアアルゴリズムのリポジトリ。
- フォロー中アカウントの投稿とML検索による外部投稿を組み合わせ、Transformerモデルで各アクションの確率を予測してスコア化・ランキングする。
- 投稿の表示可否はランキングとは別にvisibility-filteringが判定し、透明性ツールでラベル情報も確認できる。
- Apache License 2.0で公開され、Phoenixの学習コードや合成データ生成も含むが、一部ビルド・デプロイ関連ファイルは含まれない場合がある。

---

### 11. [agentgateway/agentgateway](https://github.com/agentgateway/agentgateway)

> Next Generation Agentic Proxy for AI Agents and MCP servers

- Language: Rust
- Stars: 5,994
- Forks: 1,060
- Stars in 1週間: 180
- Category: AIプロキシ
- Keywords: `AIエージェント` `MCP` `A2A` `LLMゲートウェイ` `セキュリティ` `可観測性`
- Summary source: README

#### README要約

- Agentgatewayは、AIエージェントやMCPサーバー向けの次世代オープンソースプロキシで、エージェント間通信にセキュリティ、可観測性、ガバナンスを提供します。
- LLMゲートウェイ、MCPゲートウェイ、A2Aゲートウェイ、推論ルーティング、ガードレール、認証・認可、レート制限、OpenTelemetryによる監視などの機能を備えています。
- AIエージェントやLLMを活用する開発者や企業が、エージェント間やツール間の安全な通信を実現するために利用します。
- スタンドアロンまたはKubernetes環境でデプロイ可能で、フラットなYAML設定またはKubernetesコントローラーとGateway APIを使用して導入できます。

---

### 12. [crmne/zapfast](https://github.com/crmne/zapfast)

> ZapFast: a fast, native WhatsApp client in Rust and egui

- Language: Rust
- Stars: 3,276
- Forks: 342
- Stars in 1週間: 931
- Category: デスクトップアプリ
- Keywords: `WhatsApp` `Rust` `egui` `ネイティブ` `軽量` `クロスプラットフォーム`
- Summary source: README

#### README要約

- Rustとeguiで作られた軽量で高速なネイティブWhatsAppクライアント。
- ブラウザエンジンを使わず、whatsapp-rust経由でスマホと連携してメッセージやメディアを扱う。
- Linux・macOS・Windowsで利用でき、複数アカウントや暗号化履歴、テーマ、プライバシー機能を備える。
- HomebrewやAUR、AppImageなどで導入可能だが、非公式クライアントのため利用は自己責任となる。

---

### 13. [clap-rs/clap](https://github.com/clap-rs/clap)

> A full featured, fast Command Line Argument Parser for Rust

- Language: Rust
- Stars: 16,932
- Forks: 1,307
- Stars in 1週間: 168
- Category: CLIパーサー
- Keywords: `Rust` `CLI` `引数解析` `コマンドライン` `パーサー`
- Summary source: README

#### README要約

- Rust向けのコマンドライン引数パーサーです。
- 宣言的または手続き的な方法でCLIパーサーを構築できます。
- RustでCLIツールを開発するユーザー向けです。
- cargo add clapで導入でき、Apache 2.0またはMITのデュアルライセンスです。

---

### 14. [denoland/deno](https://github.com/denoland/deno)

> A modern runtime for JavaScript and TypeScript.

- Language: Rust
- Stars: 108,906
- Forks: 6,644
- Stars in 1週間: 280
- Category: JavaScript/TypeScriptランタイム
- Keywords: `Deno` `JavaScript` `TypeScript` `WebAssembly` `Rust` `V8`
- Summary source: README

#### README要約

- Denoは、セキュアなデフォルト設定と優れた開発者体験を備えたJavaScript、TypeScript、WebAssemblyランタイムです。
- V8エンジン、Rust、Tokioを基盤として構築されており、Webサーバー構築などに利用できます。
- 主にWebサーバー開発者やモダンなJavaScript/TypeScriptアプリケーションを構築する開発者を対象としています。
- curl、PowerShell、Homebrew、Chocolatey、WinGet、Scoopなど複数の方法でインストール可能で、ソースからのビルドもサポートされています。

---

### 15. [astral-sh/ruff](https://github.com/astral-sh/ruff)

> An extremely fast Python linter and code formatter, written in Rust.

- Language: Rust
- Stars: 50,689
- Forks: 2,611
- Stars in 1週間: 369
- Category: Python開発ツール
- Keywords: `Python` `リンター` `フォーマッタ` `Rust` `Flake8互換` `高速`
- Summary source: README

#### README要約

- Rust製の高速なPythonリンター兼コードフォーマッタで、Flake8やBlackなどの既存ツールより10〜100倍高速に動作します。
- 900以上の組み込みルール、自動修正機能、キャッシュによる再解析回避、pyproject.toml対応、モノレポ向け階層設定などを備えています。
- Flake8、Black、isort、pydocstyle、pyupgrade、autoflakeなどの代替として、Python開発者のローカル開発やCI、pre-commitフックでの利用に適しています。
- pip、uv、pipx、Homebrew、Conda、スタンドアロンインストーラーで導入でき、VS Code拡張やGitHub Actionも提供され、MITライセンスで公開されています。

---

### 16. [SimoHypers/limusic](https://github.com/SimoHypers/limusic)

> Feature rich, native desktop, YouTube Music client.

- Language: Rust
- Stars: 1,860
- Forks: 120
- Stars in 1週間: 382
- Category: 音楽プレーヤー
- Keywords: `YouTube Music` `Rust` `Tauri` `デスクトップアプリ` `libmpv` `広告なし`
- Summary source: README

#### README要約

- RustとTauriで構築された広告なしのネイティブデスクトップYouTube Musicクライアント。
- libmpvによるギャップレス再生、同期歌詞、Last.fm/ListenBrainzスクロブリング、Discord Rich Presenceなどを搭載。
- YouTube Musicアカウントでログインし、ライブラリ管理やプレイリスト編集を行いたいデスクトップユーザー向け。
- Windows/Linux/macOS向けにインストーラーやAppImageを提供。macOSでは初回起動時にquarantine属性の削除が必要。

---

### 17. [janhq/jan](https://github.com/janhq/jan)

> Jan is an open source alternative to ChatGPT that runs 100% offline on your computer.

- Language: Rust
- Stars: 45,537
- Forks: 3,154
- Stars in 1週間: 399
- Category: ローカルAIチャットアプリ
- Keywords: `オープンソース` `ChatGPT代替` `ローカルLLM` `オフライン` `プライバシー` `OpenAI互換API`
- Summary source: README

#### README要約

- Janは、コンピュータ上で100%オフラインで動作するオープンソースのChatGPT代替アプリです。
- HuggingFaceからLLMをダウンロードしてローカル実行でき、OpenAI互換APIやMCP統合、クラウドAI接続にも対応しています。
- プライバシーを重視しつつローカルAIやカスタムアシスタントを使いたい個人・開発者向けのツールです。
- Windows/macOS/Linux向けのインストーラーが用意され、ソースからのビルドにはNode.js、Yarn、Make、Rustが必要です。

---

### 18. [nushell/nushell](https://github.com/nushell/nushell)

> A new type of shell

- Language: Rust
- Stars: 40,981
- Forks: 2,343
- Stars in 1週間: 220
- Category: シェル
- Keywords: `Nushell` `構造化データ` `パイプライン` `クロスプラットフォーム` `Rust` `CLI`
- Summary source: README

#### README要約

- Nushellは、データを構造化されたものとして扱う新しいタイプのシェルです。
- Unixのパイプラインを発展させ、コマンド間でテーブル形式の構造化データを受け渡し、フィルタリングや加工ができます。
- PowerShellや関数型言語に着想を得ており、Windows、macOS、Linuxを第一級でサポートするクロスプラットフォームなシェルを求めるユーザー向けです。
- brewやwingetなどのパッケージマネージャーでインストール可能ですが、MVPレベルの品質で一部のコマンドが不安定な場合があり、設計も変更される可能性があります。

---
