+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/09/18'
date = 2026-09-18T23:06:34.071Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月18日 23:06:34
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが独占し、AIコーディングエージェントの並列実行・管理・最適化を支える開発基盤がトレンドの中心

- 一覧の全18リポジトリがRust製であり、CLI、デスクトップアプリ、ランタイムまで幅広い層でRustが採用されている
- AIコーディングエージェント関連のツールが多数を占め、並列実行管理（worktrunk、workmux）、変更追跡（atlas）、トークン削減（rtk）、実行環境（arcbox、webcodex）など多角的な支援ツールが登場している
- Claude CodeやCodexなど複数のエージェントを横断的に扱う設計が共通しており、マルチエージェント運用の実用化が進んでいる
- ローカルファースト・セルフホストを明示するツールが目立ち、データや実行環境を手元に置く志向が強い
- AI関連以外にも、WiFiセンシング（RuView）、CAD（OpenCADStudio）、GPUコンパイラ（cuda-oxide）など専門性の高いツールもランクインしている

### 主なテーマ

- **AIエージェントの並列実行とワークフロー管理**: git worktreeやtmuxを活用して複数のAIエージェントを並列で動かすためのツールが複数ランクイン。worktrunk（1060スター）はworktree管理に特化し、workmuxはworktreeとtmuxを組み合わせ、atlas（1550スター）はエージェントの変更をチェックポイントで追跡する。いずれもClaude CodeやCodexを対象としており、マルチエージェント開発の実用化が進んでいることを示す。（`max-sixty/worktrunk`、`raine/workmux`、`pacifio/atlas`）
- **AIエージェントの実行環境とコスト最適化**: エージェントの実行基盤と効率化を担うツールが台頭。arcbox（2436スター）は100ms未満で起動する隔離microVMでエージェントを実行し、webcodexはクラウドAIにローカル開発環境を提供、rtk（1149スター）はコマンド出力を圧縮してトークン消費を60〜90%削減する。エージェントの安全性とコストの両立が課題意識として共有されている。（`arcboxlabs/arcbox`、`yyjeqhc/webcodex`、`rtk-ai/rtk`）
- **研究・実験へのエージェント応用**: OpenResearch（4029スター）はコーディングエージェントを研究エージェントに変換し、gitネイティブな実験ツリーで再現可能な実験を管理する。並列探索や証拠のコンテキスト管理を備え、コーディング以外の知的作業へのエージェント適用が注目されている。期間内スター数は一覧で2番目に多い。（`alphaXiv/OpenResearch`）
- **ローカルファーストのデスクトップ・メディアツール**: omniget（4033スター、一覧最多）はyt-dlpベースで1800以上のサイトからメディアをダウンロードするGUIアプリで、テレメトリなし・ローカル保存を強調。rustdesk（988スター）はセルフホスト可能なリモートデスクトップ、clash-verge-rev（1567スター）はTauri製プロキシGUI、MovieBox-Tuiはターミナルでのストリーミングを提供し、いずれもユーザーがデータや環境を管理できる設計。（`tonhowtf/omniget`、`rustdesk/rustdesk`、`clash-verge-rev/clash-verge-rev`、`mesamirh/MovieBox-Tui`）
- **専門領域向けのRust製基盤・ツール**: AI以外の専門分野でもRust製ツールがランクイン。rustfs（1049スター）はS3互換オブジェクトストレージ、cuda-oxideはRustからPTXへコンパイルするGPUバックエンド、OpenCADStudioはGPU加速レンダリングを備えたCAD、RuView（1627スター）はWiFi信号でバイタルサインを検知するセンシング基盤、check-if-email-existsはメール検証ツール。性能と安全性を求める領域でRustが選ばれている。（`rustfs/rustfs`、`NVlabs/cuda-oxide`、`HakanSeven12/OpenCADStudio`、`ruvnet/RuView`、`reacherhq/check-if-email-exists`）

### 補足的な観察

- 言語分布は全18件中18件がRustで、他言語のリポジトリは一件も含まれていない
- 期間内スター数の上位はomniget（4033）、OpenResearch（4029）、arcbox（2436）、RuView（1627）、clash-verge-rev（1567）の順で、AI関連と一般消費者向けツールが混在している
- Tauriフレームワーク採用のデスクトップアプリがomniget、Antigravity-Manager、clash-verge-revの3件あり、Rust製GUIアプリの定番基盤として定着している
- Anki（688スター）のような既存の定番ソフトウェアもランクインしており、新規プロジェクトだけでなく成熟したプロジェクトへの継続的な関心も見られる

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 18 |

## Repository一覧

### 1. [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)

> Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows

- Language: Rust
- Stars: 8,013
- Forks: 274
- Stars in 1週間: 1,060
- Category: Git開発ツール
- Keywords: `git worktree` `CLI` `AIエージェント` `並列開発` `Rust` `ワークフロー自動化`
- Summary source: README

#### README要約

- WorktrunkはGit worktreeを管理するCLIツールで、AIエージェントの並列実行を目的として設計されている。
- ブランチ名でworktreeを操作でき、作成・切替・削除・一覧表示のほか、フックによる自動化、LLM生成コミットメッセージ、CI状態表示、ビルドキャッシュ共有などの機能を備える。
- Claude CodeやCodexなどのAIエージェントを5〜10以上並列で管理する開発者や、複数の変更を同時に扱うGitユーザーが対象。
- Homebrew、Cargo、Winget、pacman、Condaなどでインストール可能で、ディレクトリ移動を有効にするにはシェル統合の設定が必要。Windowsではコマンド名の競合を避けるためgit-wtとしてインストールされる。

---

### 2. [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch)

> Turn your coding agents into research agents

- Language: Rust
- Stars: 5,290
- Forks: 324
- Stars in 1週間: 4,029
- Category: AI研究支援ツール
- Keywords: `研究エージェント` `ローカルファースト` `実験管理` `git統合` `並列探索` `CLI`
- Summary source: README

#### README要約

- Claude Code、Codex、OpenCode、Cursor、Google Antigravityなどのコーディングエージェントを研究エージェントに変換するローカルファーストのワークスペース。
- 並列探索、再現可能な実験、証拠のコンテキスト管理を提供し、gitネイティブな実験ツリーで各実行の不変アーカイブを保持する。
- 文献レビュー、仮説開発、実験実行、研究成果物の作成を行う研究者や開発者向けで、ローカル、SSH、Slurm、Kubernetesなど多様な環境で実行可能。
- macOS 11+、Windows（ベータ、Git for Windows必須）、Linuxに対応し、CLIはcurlでインストール後「orx up」で起動、デフォルトでローカル実行されテレメトリはオプトアウト可能。

---

### 3. [tonhowtf/omniget](https://github.com/tonhowtf/omniget)

> Download Udemy and Hotmart courses, YouTube videos, music and books — 1,800+ sites, no terminal. Free open-source desktop app for Windows, macOS and Linux, with a built-in course player, PDF/EPUB reader and music library. Powered by yt-dlp. Your files stay on your computer.

- Language: Rust
- Stars: 13,709
- Forks: 1,181
- Stars in 1週間: 4,033
- Category: メディアダウンローダー
- Keywords: `yt-dlp` `Tauri` `Rust` `Udemy` `動画ダウンロード` `デスクトップアプリ`
- Summary source: README

#### README要約

- UdemyやHotmartの講座、YouTube、Instagram、X、Pinterest、TikTokなど1,800以上のサイトから動画・音楽・書籍をダウンロードできる無料オープンソースのデスクトップアプリです。
- yt-dlpとFFmpegを内蔵し自動インストール・更新されるためターミナル不要で、コースプレイヤー、PDF/EPUBリーダー、音楽ライブラリ、文字起こし、変換など158のツールを備えています。
- 購入した講座をローカルに保存したい学習者や、複数サイトのダウンロードを一つのGUIで管理したいユーザーに適し、Windows、macOS、Linuxに対応しています。
- Releasesページやwinget、brewからインストールでき、GPL-3.0ライセンスでアカウント不要・テレメトリなしですが、初回起動時にOSの署名警告への対応が必要です。

---

### 4. [HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)

> A CAD application built with Rust — 2D/3D drawing, DWG/DXF support, and GPU-accelerated rendering

- Language: Rust
- Stars: 2,060
- Forks: 208
- Stars in 1週間: 607
- Category: CADアプリケーション
- Keywords: `Rust` `CAD` `DWG/DXF` `2D製図` `3Dモデリング` `GPUレンダリング`
- Summary source: README

#### README要約

- Rust製のオープンソースCADアプリケーションで、デスクトップとWebの両方で動作する2D製図・3Dモデリングツール。
- DWG/DXFのネイティブ読み書き、精密な2D製図機能、ソリッドモデリング、wgpuによるGPU加速レンダリングを備える。
- 技術図面やレイアウト作業、3Dモデリングを行う設計者・エンジニア向けで、Windows/Linux/macOSおよびブラウザで利用可能。
- GPL-3.0ライセンスで活発に開発中のため、重要な図面はバックアップを取り、問題はGitHub Issuesで報告することが推奨される。

---

### 5. [pacifio/atlas](https://github.com/pacifio/atlas)

> Source control for agents. Use multiple coding agents, track their changes and query them in one place

- Language: Rust
- Stars: 4,717
- Forks: 280
- Stars in 1週間: 1,550
- Category: 開発者ツール
- Keywords: `コーディングエージェント` `ソースコントロール` `チェックポイント` `マルチエージェント` `共有メモリ` `ローカルファースト`
- Summary source: README

#### README要約

- コーディングエージェント向けのソースコントロールツールで、エージェントの実行ごとにチェックポイントを生成し、コミットをセッション・プロンプト・ツール呼び出し・推論と紐付けて記録する。
- Claude Code、Codex、Atlas独自エージェント、ACPレジストリのエージェントを同一コードベースで並行実行でき、共有メモリによりエージェント切り替え時もコンテキストを維持する。
- 複数のコーディングエージェントを使い分ける開発者や、エージェントの変更履歴と理由を追跡したいチームを対象とし、ローカルファーストで動作する。
- macOS 13+とWindows 10+（x64）をサポートし、.dmgまたは.msiでインストール可能。Linuxは未テスト。匿名使用分析はデフォルトで有効だが無効化できる。

---

### 6. [rustfs/rustfs](https://github.com/rustfs/rustfs)

> RustFS is an open-source, S3-compatible high-performance object storage system supporting migration and coexistence with other S3-compatible platforms such as MinIO and Ceph.

- Language: Rust
- Stars: 33,138
- Forks: 1,482
- Stars in 1週間: 1,049
- Category: オブジェクトストレージ
- Keywords: `Rust` `S3互換` `分散ストレージ` `オブジェクトストレージ` `データレイク` `Apache 2.0`
- Summary source: README

#### README要約

- RustFSはRustで構築された高性能な分散オブジェクトストレージシステムです。
- S3 API互換性を持ち、バージョニング、暗号化、レプリケーションなどの機能を提供します。
- データレイク、AI、ビッグデータワークロードに最適化されており、MinIOやCephなどのS3互換プラットフォームとの移行・共存をサポートします。
- Apache 2.0ライセンスで提供され、DockerイメージやKubernetes Helmチャートでのデプロイが可能です。

---

### 7. [ankitects/anki](https://github.com/ankitects/anki)

> Anki is a smart spaced repetition flashcard program

- Language: Rust
- Stars: 31,199
- Forks: 3,237
- Stars in 1週間: 688
- Category: 学習支援ソフトウェア
- Keywords: `間隔反復` `フラッシュカード` `記憶学習` `Rust` `オープンソース` `教育`
- Summary source: README

#### README要約

- Ankiは間隔反復学習を支援するフラッシュカードプログラムのコンピュータ版ソースコードです。
- 科学的な記憶理論に基づく間隔反復アルゴリズムを用いて、効率的な学習スケジュールを自動管理します。
- 語学学習者や資格試験受験者など、長期記憶を必要とする学習者全般を対象としています。
- 貢献ガイドラインと開発ドキュメントが整備されており、ベータ版の利用も可能です。

---

### 8. [NVlabs/cuda-oxide](https://github.com/NVlabs/cuda-oxide)

> cuda-oxide is a Rust-to-CUDA compiler that lets you write (SIMT) GPU kernels in safe(ish), idiomatic Rust. It compiles standard Rust code directly to PTX — no DSLs, no foreign language bindings, just Rust.

- Language: Rust
- Stars: 3,502
- Forks: 273
- Stars in 1週間: 227
- Category: GPUコンパイラ
- Keywords: `Rust` `CUDA` `PTX` `GPUカーネル` `rustcバックエンド` `SIMT`
- Summary source: README

#### README要約

- cuda-oxideは、純粋なRustでGPUカーネルを記述しPTXへコンパイルするカスタムrustcバックエンドです。
- ホストとデバイスコードを同一ファイルで単一ソースコンパイルし、型安全なインデックスや共有メモリ、アトミクスなどの抽象化を提供します。
- RustでCUDA SIMTカーネルを書きたい開発者や、DSLや外部言語バインディングなしでGPUプログラミングを行いたいユーザー向けです。
- アルファ段階で活発に開発中のため、バグやAPIの破壊的変更が予想され、Rust nightlyやCUDA Toolkit 13.0+などの環境構築が必要です。

---

### 9. [rtk-ai/rtk](https://github.com/rtk-ai/rtk)

> CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies

- Language: Rust
- Stars: 80,943
- Forks: 5,134
- Stars in 1週間: 1,149
- Category: AI開発支援CLIツール
- Keywords: `CLIプロキシ` `トークン削減` `Rust` `LLMコンテキスト最適化` `シェルフック` `出力圧縮`
- Summary source: README

#### README要約

- シェルコマンドの出力をLLMのコンテキストに届く前にフィルタリング・圧縮するCLIプロキシで、エージェントが読むbash出力を最大90%削減する。
- 単一のRustバイナリで依存ゼロ、100以上のコマンドに対応し、フィルタリング・グループ化・切り詰め・重複排除の4戦略をコマンド種別ごとに適用する。
- Claude Code、Gemini CLI、Codex、CursorなどのAIコーディングツール利用者が対象で、rtk initによるフック設定でコマンドが自動的にrtk経由に書き換えられる。
- Homebrew、winget、Cargo、インストールスクリプト等で導入可能。削減率はbash出力基準で請求額の削減とは異なり、トークン数はbytes/4の推定値である点に注意。

---

### 10. [yyjeqhc/webcodex](https://github.com/yyjeqhc/webcodex)

> Give cloud AI agents a real development environment on your own machines.

- Language: Rust
- Stars: 1,304
- Forks: 163
- Stars in 1週間: 452
- Category: AI開発環境ブリッジ
- Keywords: `AIエージェント` `MCP` `ローカル開発環境` `Rust` `ChatGPT` `セルフホスト`
- Summary source: README

#### README要約

- ChatGPTやClaudeなどのAIエージェントが、自分のマシン上のコードや開発ツールを直接操作できるようにするツール。
- MCP/HTTPS経由でAIクライアントと接続し、コードの閲覧・編集・Git操作・テスト実行・長時間ジョブの監視などを実マシン上で行う。
- AIコーディングエージェントをローカルの実開発環境で使いたい開発者が対象で、リポジトリをホスト側に移す必要がない。
- npxコマンドで一時的な試用が可能。Windows/macOSはDesktop版が推奨。Rust製でApache 2.0ライセンス。ファイル読み書きとコマンド実行が可能なためセキュリティ設定に注意が必要。

---

### 11. [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk)

> An open-source remote desktop application designed for self-hosting, as an alternative to TeamViewer.

- Language: Rust
- Stars: 123,947
- Forks: 19,141
- Stars in 1週間: 988
- Category: リモートデスクトップ
- Keywords: `リモートデスクトップ` `Rust` `セルフホスト` `TeamViewer代替` `オープンソース` `クロスプラットフォーム`
- Summary source: README

#### README要約

- RustDeskはRustで書かれたオープンソースのリモートデスクトップソフトウェアで、TeamViewerの代替として自己ホスト可能です。
- 設定不要ですぐに動作し、公式のランデブー/リレーサーバーのほか、自前サーバーの構築や独自実装も可能で、データを完全に管理できます。
- 遠隔サポートやリモートアクセスを必要とする個人・組織向けで、デスクトップとモバイルの両方に対応しています。
- リリース版バイナリやF-Droid、Flathubから入手可能で、ソースからビルドする場合はRust環境、vcpkg、依存ライブラリが必要です。

---

### 12. [lbjlaq/Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager)

> Professional Antigravity Account Manager & Switcher. One-click seamless account switching for Antigravity Tools. Built with Tauri v2 + React (Rust).专业的 Antigravity 账号管理与切换工具。为 Antigravity 提供一键无缝账号切换功能。

- Language: Rust
- Stars: 31,497
- Forks: 3,389
- Stars in 1週間: 295
- Category: AIアカウント管理・APIプロキシ
- Keywords: `Antigravity` `アカウント切替` `APIプロキシ` `プロトコル変換` `Tauri` `Docker`
- Summary source: README

#### README要約

- 開発者やAI愛好家向けのデスクトップアプリで、複数のAIアカウント管理、プロトコル変換、リクエスト振り分けを行うローカルAI中継ツールです。
- GoogleやAnthropicのWebセッションをOpenAI・Anthropic・Gemini形式のAPIに変換し、429や401時の自動リトライとアカウント切替、モデルIDのマッピングやルーティングに対応します。
- Claude Code CLIや既存のAIアプリからローカルAPIとして利用したいユーザー、複数アカウントの配额を監視しながら使い分けたい用途に向いています。
- Tauri v2 + React（Rust）製で、インストールスクリプト、Homebrew、手動ダウンロード、Dockerで導入でき、DockerではAPI_KEYの設定が必須です。

---

### 13. [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev)

> A modern GUI client based on Tauri, designed to run in Windows, macOS and Linux for tailored proxy experience

- Language: Rust
- Stars: 145,315
- Forks: 10,460
- Stars in 1週間: 1,567
- Category: プロキシクライアント
- Keywords: `Clash Meta` `Tauri` `プロキシ` `GUI` `mihomo` `クロスプラットフォーム`
- Summary source: README

#### README要約

- Clash Vergeの後継プロジェクトで、Tauri 2ベースのClash Meta（mihomo）GUIクライアントです。
- システムプロキシ、TUNモード、プロファイル管理（Merge/Script）、WebDAVバックアップ、ビジュアルノード編集などの機能を提供します。
- Windows、macOS、Linuxで動作し、カスタマイズ可能なプロキシ環境を求めるユーザー向けです。
- Releaseページからインストーラーをダウンロードでき、Stable版とAutoBuild版が選択可能です。

---

### 14. [ruvnet/RuView](https://github.com/ruvnet/RuView)

> π RuView turns commodity WiFi signals into real-time spatial intelligence, vital sign monitoring, and presence detection — all without a single pixel of video.

- Language: Rust
- Stars: 94,401
- Forks: 12,493
- Stars in 1週間: 1,627
- Category: WiFiセンシング
- Keywords: `WiFi CSI` `ESP32` `バイタルサイン監視` `存在検知` `エッジAI` `スマートホーム連携`
- Summary source: README

#### README要約

- RuViewは、市販のWiFi信号を用いてカメラやウェアラブルなしで空間インテリジェンス、バイタルサイン監視、存在検知を行うRust製プラットフォームです。
- 低コストのESP32センサーでCSI（チャネル状態情報）を取得し、呼吸数・心拍数の測定、姿勢推定、転倒検知、人数カウントなどをエッジ上でリアルタイム処理します。
- Home Assistant、Apple Home、Google Home、Alexaなど主要スマートホーム基盤と連携でき、高齢者見守り、睡眠モニタリング、部屋の occupancy 管理などの用途を想定しています。
- ベータ版ソフトウェアでAPIやファームウェアは変更の可能性があり、ESP32-C3や初代ESP32は非対応、単一ノードでは空間解像度が限られるなどの既知の制限があります。

---

### 15. [reacherhq/check-if-email-exists](https://github.com/reacherhq/check-if-email-exists)

> Check if an email address exists without sending any email, written in Rust. Comes with a ⚙️ HTTP backend.

- Language: Rust
- Stars: 9,882
- Forks: 712
- Stars in 1週間: 345
- Category: メール検証ツール
- Keywords: `メール検証` `Rust` `SMTP` `CLI` `HTTPバックエンド` `Docker`
- Summary source: README

#### README要約

- メールを送信せずにメールアドレスの実在性を検証するRust製ツールで、HTTPバックエンドも付属する。
- 構文チェック、MXレコード検証、SMTP接続、使い捨てアドレス判定、キャッチオール検出などを行い、結果をJSONで返す。
- メールリストのクリーニングや到達性確認を行いたい開発者・サービス運営者向けで、Docker・CLI・Rustライブラリの3形態で利用できる。
- Docker利用時は送信側ポート25の開放が必要で、大量検証にはSMTPプロキシが推奨される。ライセンスはAGPL-3.0と商用のデュアルライセンス。

---

### 16. [raine/workmux](https://github.com/raine/workmux)

> git worktrees + tmux windows for zero-friction parallel dev

- Language: Rust
- Stars: 2,644
- Forks: 329
- Stars in 1週間: 240
- Category: 開発環境管理ツール
- Keywords: `git worktree` `tmux` `並行開発` `AIエージェント` `ワークフロー自動化` `ターミナル`
- Summary source: README

#### README要約

- git worktreeとtmuxウィンドウを組み合わせ、並行開発環境を分離して管理するワークフローツール。
- worktree作成・設定ファイルコピー・依存関係シンボリンク・ペイン自動設定・マージとクリーンアップを一コマンドで実行する。
- 複数のAIエージェントを並行実行する開発者や、ターミナル中心の開発環境を好むユーザー向け。
- tmux/WezTerm/Kitty/Zellijのいずれかが必要で、Homebrew・Cargo・mise・Nixなどでインストール可能。

---

### 17. [arcboxlabs/arcbox](https://github.com/arcboxlabs/arcbox)

> Run AI agents on real and isolated machines — own kernel, filesystem, and network — with <100ms boot. Local first, OCI compatible, pure Rust.

- Language: Rust
- Stars: 5,190
- Forks: 183
- Stars in 1週間: 2,436
- Category: コンテナ・VMランタイム
- Keywords: `Docker互換` `microVM` `AIエージェントサンドボックス` `macOS` `Rust` `Kubernetes`
- Summary source: README

#### README要約

- macOS向けのオープンソースコンテナ・VMランタイムで、Docker DesktopやOrbStackの代替を目指すRust製ソフトウェア。
- 独自VMMとVirtIOデバイスを実装し、Docker互換エンジン、AIエージェント用使い捨てmicroVMサンドボックス、Linux/macOS VMを単一デーモンで提供する。
- Docker CLIやComposeをそのまま使いたい開発者、AIエージェントや非信頼コードを隔離実行したいユーザー、ローカルKubernetes環境が必要なチームが対象。
- Homebrewまたはインストールスクリプトで導入可能。Apple SiliconのmacOSが必須で、サンドボックス機能にはM3以降かつmacOS 15+が必要。現在パブリックベータ。

---

### 18. [mesamirh/MovieBox-Tui](https://github.com/mesamirh/MovieBox-Tui)

> Terminal interface to find, download, and stream movies, TV shows, and live TV using local media players.

- Language: Rust
- Stars: 2,063
- Forks: 221
- Stars in 1週間: 220
- Category: メディアストリーミングTUI
- Keywords: `Rust` `TUI` `ストリーミング` `IPTV` `mpv` `ダウンロード`
- Summary source: README

#### README要約

- ターミナル上で映画、TV番組、ライブTVを検索・ダウンロード・ストリーミングできるRust製TUIツール。
- 複数プロバイダやStremioアドオンからのオンデマンド再生、M3UプレイリストによるIPTV、mpvやVLCなどのローカルプレイヤーでの再生に対応。
- 字幕の自動読み込み、ポスター表示、ライブラリ・履歴管理、一時停止・再開対応のダウンロード機能を備え、macOS/Linux/Windows/Androidで動作する。
- インストールはcurlやHomebrew、PowerShell、cargoから可能。再生にはmpv等のメディアプレイヤーが必須で、ポスター表示にはKitty等の対応ターミナルが必要。

---
