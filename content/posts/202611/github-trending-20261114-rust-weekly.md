+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/11/14'
date = 2026-11-14T01:19:30.011Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月14日 1:19:30
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 14
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが圧倒的な存在感を示し、特にAIエージェント向けの自動化・実行環境ツールがトレンドの中心となっている

- 一覧の全14リポジトリがRust製であり、言語分布が完全にRustに集中している
- AIエージェント関連ツールが多数を占め、ブラウザ操作・デスクトップ操作・コーディング・実行環境管理など多様な領域に広がっている
- vercel-labsのagent-desktop（5408スター）とagent-browser（4360スター）が上位を占め、AIエージェントによるGUI操作への関心の高さがうかがえる
- AI以外では、Zedエディタ、Ruff、RustDesk、Sniffnetなど実用的な開発者ツールやデスクトップアプリが安定した支持を集めている

### 主なテーマ

- **AIエージェントによるGUI自動化**: AIエージェントがブラウザやデスクトップアプリを操作するためのCLIツールが上位を独占。agent-browserはChrome DevTools Protocolでブラウザを制御し、agent-desktopはOSのアクセシビリティツリー経由でデスクトップアプリを操作する。どちらもスクリーンショットではなくアクセシビリティツリーとref指定で要素を操作する点が共通しており、2件合計で約9800スターを獲得している。（`vercel-labs/agent-browser`、`vercel-labs/agent-desktop`）
- **AIコーディングエージェントとその実行基盤**: OpenAIのcodex CLI（1929スター）に加え、コーディングエージェントのランタイム環境を提供するherdr（2423スター）、AIエージェントの並列実行を目的としたGit worktree管理CLIのworktrunk（766スター）が登場。エージェント本体だけでなく、それを支える周辺インフラへの関心が高まっている。（`openai/codex`、`herdrdev/herdr`、`max-sixty/worktrunk`）
- **Rust製デスクトップアプリ・GUI開発**: 高性能エディタのZed（2117スター）、GPUIベースのUIコンポーネント集gpui-kit（1012スター）、Webサイトをデスクトップアプリ化するPake（725スター）、リモートデスクトップのRustDesk（980スター）など、Rustによるデスクトップアプリケーション開発とそのエコシステムが活発である。（`zed-industries/zed`、`longbridge/gpui-kit`、`tw93/Pake`、`rustdesk/rustdesk`）
- **Rust製の開発者向け基盤ツール**: Pythonリンター/フォーマッターのRuff（940スター）、Webフレームワークのtopcoat（868スター）、ワークフロー自動化プラットフォームのWindmill（151スター）など、開発者の生産性を高める基盤ツールがRustで構築されており、言語を超えたツールチェインの置き換えが進んでいる。（`astral-sh/ruff`、`tokio-rs/topcoat`、`windmill-labs/windmill`）
- **センシング・ネットワーク監視**: WiFi信号からバイタルサインや存在検知を行うRuView（1639スター）と、ネットワークトラフィック監視ツールのSniffnet（774スター）が、Rustによるシステムレベルのデータ収集・可視化ツールとして注目を集めている。（`ruvnet/RuView`、`GyulyVGC/sniffnet`）

### 補足的な観察

- 全14リポジトリの言語がすべてRustであり、GitHub TrendingでRustが異例の独占状態にある
- スター獲得数の上位3件（agent-desktop: 5408、agent-browser: 4360、herdr: 2423）がすべてAIエージェント関連であり、トレンドの牽引役となっている
- vercel-labsが2リポジトリを上位に送り込んでおり、AIエージェント向けツールの開発組織として存在感を示している
- Windmill（151スター）のようにスター数は少ないながらもランクインしており、ワークフロー自動化分野での継続的な関心がうかがえる

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 14 |

## Repository一覧

### 1. [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)

> Browser automation CLI for AI agents

- Language: Rust
- Stars: 50,739
- Forks: 3,526
- Stars in 1週間: 4,360
- Category: ブラウザ自動化CLI
- Keywords: `AIエージェント` `ブラウザ自動化` `Rust` `CLI` `Chrome DevTools Protocol` `アクセシビリティツリー`
- Summary source: README

#### README要約

- AIエージェントがシェルからブラウザを操作できる、Rust製のネイティブCLIツール。
- snapshotコマンドでページをアクセシビリティツリー形式のテキストとして取得し、各要素のref（@e1など）を指定してクリックや入力を実行する。
- バックグラウンドデーモンがChrome DevTools Protocolでブラウザを制御し、コマンド間でブラウザを開いたまま維持する。
- npmやHomebrewでインストール可能で、初回はagent-browser installでChrome for Testingをダウンロードする必要がある。

---

### 2. [zed-industries/zed](https://github.com/zed-industries/zed)

> Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.

- Language: Rust
- Stars: 94,963
- Forks: 11,697
- Stars in 1週間: 2,117
- Category: コードエディタ
- Keywords: `Zed` `Rust` `マルチプレイヤー` `高性能` `オープンソース` `GPL-3.0`
- Summary source: README

#### README要約

- ZedはAtomとTree-sitterの開発者による高性能マルチプレイヤーコードエディタです。
- Rustで実装され、macOS・Linux・Windows向けに公式サイトまたはパッケージマネージャーからインストールできます。
- 高速な編集環境を求める開発者や、共同編集機能を活用したいチームを対象としています。
- ソースコードは主にGPL-3.0-or-laterで提供され、Web版は未対応です。

---

### 3. [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)

> Computer use CLI for AI agents

- Language: Rust
- Stars: 23,304
- Forks: 1,725
- Stars in 1週間: 5,408
- Category: AIエージェントツール
- Keywords: `AIエージェント` `デスクトップ自動化` `アクセシビリティツリー` `CLI` `クロスプラットフォーム` `Rust`
- Summary source: README

#### README要約

- AIエージェントがmacOS、Windows、LinuxのデスクトップアプリをOSのアクセシビリティツリー経由で認識・操作するためのCLIツールです。
- スクリーンショットやピクセルマッチングを使わず、アクセシビリティツリーをJSONとして返し、各要素にrefを付与してクリックや入力を実行します。
- AIエージェント開発者や自動化ツール制作者が、デスクトップアプリをプログラム的に操作する用途に適しています。
- npm、Homebrew、GitHub Releasesからインストール可能で、macOSではアクセシビリティ権限の付与が必要です。

---

### 4. [herdrdev/herdr](https://github.com/herdrdev/herdr)

> the runtime your coding agents live on

- Language: Rust
- Stars: 50,850
- Forks: 4,108
- Stars in 1週間: 2,423
- Category: 開発者ツール
- Keywords: `コーディングエージェント` `ターミナル管理` `Rust` `セッション永続化` `マルチマシン` `CLI`
- Summary source: README

#### README要約

- コーディングエージェントが動作するランタイム環境を提供するツール。
- バックグラウンドサーバーでターミナルを維持し、セッション状態の復元や複数マシンの一元管理、エージェントの状態監視を行う。
- Claude Code、Codex、Cursorなどの既存エージェントをラップせずにターミナル管理を行い、CLIやソケットAPIでエージェントが操作可能。
- Rust製の単一バイナリで、curlやHomebrewなどでインストールでき、tmux風のキーボード操作とマウス操作の両方に対応。

---

### 5. [ruvnet/RuView](https://github.com/ruvnet/RuView)

> π RuView turns commodity WiFi signals into real-time spatial intelligence, vital sign monitoring, and presence detection — all without a single pixel of video.

- Language: Rust
- Stars: 104,241
- Forks: 13,564
- Stars in 1週間: 1,639
- Category: WiFiセンシング
- Keywords: `WiFi CSI` `バイタルサイン監視` `存在検知` `ESP32` `スマートホーム連携` `エッジコンピューティング`
- Summary source: README

#### README要約

- RuViewは、市販のWiFi信号を用いてカメラやウェアラブルなしで空間インテリジェンス、バイタルサイン監視、存在検知を行うRust製プラットフォームです。
- 低コストのESP32センサーからCSI（チャネル状態情報）を取得し、呼吸数・心拍数の測定、活動認識、環境マッピング、睡眠品質監視などを実現します。
- Home Assistant、Apple Home、Google Home、Amazon Alexaなどの主要スマートホームエコシステムと連携し、エッジハードウェア上でローカルに動作します。
- ベータ版ソフトウェアであり、ESP32-C3や初代ESP32は非対応、単一ノードでは空間解像度が限定的、ポーズ推定精度に制約があるなど既知の制限があります。

---

### 6. [astral-sh/ruff](https://github.com/astral-sh/ruff)

> An extremely fast Python linter and code formatter, written in Rust.

- Language: Rust
- Stars: 51,227
- Forks: 2,667
- Stars in 1週間: 940
- Category: Python開発ツール
- Keywords: `Python` `リンター` `フォーマッター` `Rust` `Flake8` `Black`
- Summary source: README

#### README要約

- Rustで書かれた非常に高速なPython用リンター兼コードフォーマッター。
- Flake8・isort・Blackなどと同等の機能を持ち、900以上のルールや自動修正、キャッシュ、pyproject.toml設定に対応する。
- Python開発者が既存ツール群を置き換え、ローカル開発やCI、エディタ連携で静的解析と整形を行う用途に向く。
- pipやuv、pipx、スタンドアロンインストーラーで導入でき、ruff checkとruff formatで実行する。

---

### 7. [longbridge/gpui-kit](https://github.com/longbridge/gpui-kit)

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

- Language: Rust
- Stars: 20,615
- Forks: 1,260
- Stars in 1週間: 1,012
- Category: GUIフレームワーク
- Keywords: `Rust` `GPUI` `デスクトップアプリ` `UIコンポーネント` `クロスプラットフォーム` `WebAssembly`
- Summary source: README

#### README要約

- RustとGPUIで高性能なクロスプラットフォームデスクトップアプリを構築するための包括的なUIフレームワーク。
- 75以上のコンポーネント、WebAssembly対応、AccessKitアクセシビリティ、UI統合テスト、JS拡張ランタイムを備える。
- Longbridge Proで実運用されており、データテーブル、コードエディタ、ドックレイアウト等を必要とする本格アプリ開発者向け。
- Cargoでgpui-kit = "0.7"を依存に追加し、gpui_kit::init(cx)を呼んでから利用する。ライセンスはApache-2.0。

---

### 8. [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk)

> An open-source remote desktop application designed for self-hosting, as an alternative to TeamViewer.

- Language: Rust
- Stars: 129,357
- Forks: 20,663
- Stars in 1週間: 980
- Category: リモートデスクトップ
- Keywords: `リモートデスクトップ` `Rust` `セルフホスト` `TeamViewer代替` `オープンソース` `クロスプラットフォーム`
- Summary source: README

#### README要約

- RustDeskはRustで書かれたオープンソースのリモートデスクトップソフトウェアで、TeamViewerの代替として自己ホスト可能です。
- 設定不要ですぐに動作し、公式のランデブー/リレーサーバーの利用、自前サーバーの構築、または独自サーバーの実装が可能で、データを完全に管理できます。
- リモートサポートや遠隔操作を必要とする個人・組織向けで、Windows、Linux、macOS、モバイルなど多様なプラットフォームに対応しています。
- ビルドにはRustとC++環境、vcpkg、依存ライブラリが必要で、Dockerでのビルドも可能です。無断アクセスなどの悪用は禁止されています。

---

### 9. [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)

> Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows

- Language: Rust
- Stars: 12,514
- Forks: 495
- Stars in 1週間: 766
- Category: Gitワークフローツール
- Keywords: `git worktree` `CLI` `AIエージェント` `並列開発` `Rust` `ワークフロー自動化`
- Summary source: README

#### README要約

- WorktrunkはGit worktreeを管理するCLIツールで、AIエージェントの並列実行を目的として設計されている。
- ブランチ名でworktreeを操作でき、作成・切替・削除・一覧表示などのコアコマンドに加え、フックによる自動化やコピーオンライトのビルドキャッシュ共有などの機能を備える。
- Claude CodeやCodexなどのAIエージェントを複数並行で管理する開発者や、多数の並列変更を扱うワークフローが対象となる。
- Homebrew、Cargo、Winget、pacman、Condaなどでインストール可能で、シェル統合の設定（wt config shell install）が必要。Windowsではコマンド名の競合を避けるためgit-wtとしてインストールされる。

---

### 10. [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat)

> A batteries-included framework for building web apps

- Language: Rust
- Stars: 7,198
- Forks: 326
- Stars in 1週間: 868
- Category: Webフレームワーク
- Keywords: `Rust` `フルスタック` `サーバーサイドレンダリング` `リアクティビティ` `モジュラールーティング` `Tailwind`
- Summary source: README

#### README要約

- Topcoatは、RustでフルスタックWebアプリを構築するためのモジュラー式バッテリー同梱フレームワークです。
- サーバーサイドレンダリングを基本とし、$(...)式によるクライアント側リアクティビティや#[shard]によるサーバー再レンダリングを提供します。
- Rust開発者がシンプルさと生産性を重視してWebアプリを構築するのに適しており、モジュールベースのルーティングやTailwind統合などの機能を備えています。
- 早期段階で実験的なプロジェクトのため、破壊的変更が予想される点に注意が必要です。

---

### 11. [GyulyVGC/sniffnet](https://github.com/GyulyVGC/sniffnet)

> Comfortably monitor your network traffic 🕵️‍♂️

- Language: Rust
- Stars: 42,731
- Forks: 2,008
- Stars in 1週間: 774
- Category: ネットワーク監視ツール
- Keywords: `ネットワーク監視` `トラフィック分析` `Rust` `クロスプラットフォーム` `PCAP` `オープンソース`
- Summary source: README

#### README要約

- Sniffnetは、ネットワークトラフィックを快適に監視するためのクロスプラットフォーム対応のオープンソースアプリケーションです。
- ネットワークアダプタの選択、トラフィックフィルタリング、PCAPファイルのインポート/エクスポート、リアルタイムチャート表示、接続の地理的位置特定、6000以上の上位層サービスやプロトコルの識別などの機能を提供します。
- ネットワーク管理者やセキュリティ専門家、一般ユーザーが自身のネットワーク活動を詳細に分析・監視するのに適しています。
- Windows、macOS、Linux向けのインストーラーがGitHubリリースから入手可能で、OSに応じた必須依存関係のインストールが必要です。

---

### 12. [openai/codex](https://github.com/openai/codex)

> Lightweight coding agent that runs in your terminal

- Language: Rust
- Stars: 135,192
- Forks: 21,442
- Stars in 1週間: 1,929
- Category: AIコーディングエージェント
- Keywords: `OpenAI` `Codex CLI` `ターミナル` `コーディングエージェント` `Rust` `ローカル実行`
- Summary source: README

#### README要約

- OpenAIが提供する、ローカル環境で動作するコーディングエージェント「Codex CLI」です。
- ターミナル上で動作し、コードの生成や編集を支援します。VS CodeなどのIDE拡張やデスクトップアプリ、クラウド版とも連携しています。
- ChatGPTの各種プラン（Plus, Pro, Businessなど）のユーザーや、APIキーを利用する開発者が対象です。
- Mac/Linux/Windows向けのインストールスクリプトやnpm、Homebrewで導入可能です。ライセンスはApache-2.0です。

---

### 13. [windmill-labs/windmill](https://github.com/windmill-labs/windmill)

> Code-first platform for workflows, apps and AI agents, on the fastest self-hostable orchestrator (benchmarked against Airflow, Prefect and Temporal). Business teams build with AI, engineers control what ships. Open-source alternative to Lovable, Retool and n8n.

- Language: Rust
- Stars: 18,576
- Forks: 1,154
- Stars in 1週間: 151
- Category: ワークフロー自動化プラットフォーム
- Keywords: `ワークフロー` `オーケストレーション` `コードファースト` `セルフホスト` `AIエージェント` `ローコード`
- Summary source: README

#### README要約

- ワークフロー、アプリ、AIエージェントを構築するためのオープンソース（AGPLv3）のコードファーストプラットフォーム。
- PythonやTypeScriptなど20以上の言語で書かれたスクリプトを、共有可能なUI、API、定期実行ジョブへ自動的に変換する。
- エンジニアがGitでコードを管理する一方、ビジネスチームはAIを使って構築し、レビューと承認プロセスを経てデプロイする。
- Docker ComposeやKubernetes（Helmチャート）を使ってセルフホストでき、Lovable、Retool、n8nの代替として利用できる。

---

### 14. [tw93/Pake](https://github.com/tw93/Pake)

> Turn any website into a lightweight desktop app with one command, on macOS, Windows and Linux.

- Language: Rust
- Stars: 63,553
- Forks: 13,000
- Stars in 1週間: 725
- Category: デスクトップアプリ化ツール
- Keywords: `Rust` `Tauri` `CLI` `WebView` `Electron代替` `軽量`
- Summary source: README

#### README要約

- 任意のWebサイトをワンコマンドで軽量なデスクトップアプリに変換するオープンソースCLIツール。
- Rust製のTauriとシステムWebViewを採用し、Chromiumを同梱しないためインストーラーは通常10MB未満と軽量。
- ショートカット、没入型ウィンドウ、ドラッグ＆ドロップ、スタイルカスタマイズ、広告除去などの機能を備え、macOS・Windows・Linuxに対応。
- CLIはpnpm install -g pake-cliで導入可能。開発にはRust 1.85以上とNode 22以上が必要で、初心者向けにはGUI版デスクトップアプリも別途提供される。

---
