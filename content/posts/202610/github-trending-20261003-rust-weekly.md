+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/10/03'
date = 2026-10-03T00:12:16.901Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月3日 0:12:16
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 22
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが一覧を独占し、AIエージェントの実行基盤・安全制御と開発者向けインフラの2軸で強い関心が集まっている。

- 掲載22件すべてのlanguageがRustであり、言語分布はRust一色の構成になっている。
- AIエージェント関連が多数を占め、実行環境の分離・サンドボックス・制御・評価まで幅広いレイヤーに広がっている。
- データベース、決済、オブザーバビリティ、パッケージ管理などの基盤ソフトウェアも上位に入り、実用インフラへの注目が強い。
- デスクトップ／CLI／TUIなど複数形態で提供されるツールが目立ち、ローカルファーストやセルフホストを明示するプロジェクトも複数ある。

### 主なテーマ

- **AIエージェントの安全な実行と制御**: NVIDIA/OpenShellはカーネルレベルのサンドボックスと形式検証によるポリシー制御を提供し、trailofbits/coopはClaude CodeやCodexを分離VMで実行する。pydantic/montyはAI生成コード向けのセキュアなPython実行環境で、いずれも安全性や隔離を前面に出している。（`NVIDIA/OpenShell`、`trailofbits/coop`、`pydantic/monty`）
- **コーディングエージェントの統合管理**: pacifio/atlasは複数コーディングエージェントの変更履歴を一元管理し、zeronsh/zeronはClaude Code、Codex、Cursor、Devinなどを束ねるコントロールプレーンを提供する。block/buzzも人間とAIエージェントの協働を前提にしており、複数エージェント運用の需要がうかがえる。（`pacifio/atlas`、`zeronsh/zeron`、`block/buzz`）
- **Rust製の実用インフラ・データ基盤**: hydra-db/hydradbはオブジェクトストレージを永続層にする分散グラフDB、juspay/hyperswitchはモジュール型決済基盤、vectordotdev/vectorは高性能オブザーバビリティパイプラインで、基盤系ソフトウェアがRustで実装され高い関心を集めている。（`hydra-db/hydradb`、`juspay/hyperswitch`、`vectordotdev/vector`）
- **開発者向けデスクトップ／CLIツールの高機能化**: t8y2/dbxは100以上のDBに対応する軽量クライアントでAIやMCPも内蔵し、timhartmann7/omnysshはGUIとTUIを備えるSSH管理ツール、clash-verge-rev/clash-verge-revはTauriベースのプロキシGUIで、日常開発や運用の作業を統合するツールが目立つ。（`t8y2/dbx`、`timhartmann7/omnyssh`、`clash-verge-rev/clash-verge-rev`）
- **ローカル実行・自己最適化するAI／ランタイム基盤**: magnitudedev/magnitudeはハードウェアに合わせてカーネルを自己最適化する推論エンジンで、oven-sh/bunは高速なJavaScriptランタイム、pnpm/pnpmは効率的なパッケージ管理を提供する。ローカル環境での高速実行や効率化への関心が共通している。（`magnitudedev/magnitude`、`oven-sh/bun`、`pnpm/pnpm`）

### 補足的な観察

- starsDuringPeriodの上位はhydra-db/hydradbの6827、NVIDIA/OpenShellの5535、t8y2/dbxの3204、pacifio/atlasの2691で、データ基盤とAI実行基盤が特に強い。
- 言語分布は全22件中22件がRustで、他言語は確認できない。
- AI関連でも、単なるチャットUIではなく実行隔離、監査、制御、評価、推論最適化に重心がある。
- rust-lang/rust自体も335で掲載されており、エコシステム全体への関心の高さを補足している。

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 22 |

## Repository一覧

### 1. [t8y2/dbx](https://github.com/t8y2/dbx)

> 25 MB lightweight cross-platform database client for 100+ databases, including MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB, SQL Server, and Dameng. Built-in AI, MCP Server, CLI, desktop and Docker. | 轻量级跨平台数据库管理工具，支持 MySQL、PostgreSQL、SQLite、Redis、MongoDB、达梦等 100+ 数据库，提供桌面端、Docker、CLI、内置 AI 助手和 MCP。

- Language: Rust
- Stars: 23,959
- Forks: 2,194
- Stars in 1週間: 3,204
- Category: データベースクライアント
- Keywords: `Rust` `データベース管理` `クロスプラットフォーム` `AIアシスタント` `MCP Server` `CLI`
- Summary source: README

#### README要約

- Rust製の25MB軽量クロスプラットフォームデータベースクライアントで、MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB、SQL Server、Damengなど100以上のデータベースに対応する。
- デスクトップアプリ、Docker、CLIの複数形態で提供され、AIアシスタントとMCP Serverを内蔵している。
- 複数種類のデータベースを一つのツールで管理したい開発者やデータベース管理者に適している。
- GitHubのReleasesから入手でき、ライセンスはApache-2.0。QQ、WeChat、Feishu、Discordのコミュニティが用意されている。

---

### 2. [timhartmann7/omnyssh](https://github.com/timhartmann7/omnyssh)

> Fast, open-source SSH client and server manager for macOS, Windows and Linux. Desktop GUI and terminal TUI with a live metrics dashboard, tabbed terminal, SFTP file manager, port forwarding, one-click SSH keys and snippets. Built in Rust.

- Language: Rust
- Stars: 1,117
- Forks: 64
- Stars in 1週間: 371
- Category: SSHクライアント・サーバー管理ツール
- Keywords: `SSH` `SFTP` `Rust` `TUI` `ダッシュボード` `オープンソース`
- Summary source: README

#### README要約

- macOS・Windows・Linux向けのオープンソースSSHクライアント兼サーバー管理ツールで、デスクトップGUIとターミナルTUIの両方を提供する。
- ライブメトリクスダッシュボード、タブ式PTYターミナル、2ペインSFTP、ポートフォワーディング、ワンクリックSSH鍵設定、パラメータ付きスニペット一括実行などを備え、Rust製のcargoワークスペースでコアとフロントエンドを分離している。
- 複数サーバーを一元管理したい開発者やインフラ運用者向けで、既存の~/.ssh/config（ProxyJump含む）を読み込み、アカウント不要・テレメトリなしで使える。
- インストールスクリプトまたはReleasesのバイナリで導入でき、TUI版はcargo・Homebrew・Nixにも対応。鍵設定はsshd_configを変更するため、本番使用前にコード確認が推奨されている。

---

### 3. [longbridge/gpui-kit](https://github.com/longbridge/gpui-kit)

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

- Language: Rust
- Stars: 15,703
- Forks: 971
- Stars in 1週間: 877
- Category: GUIフレームワーク
- Keywords: `Rust` `GPUI` `デスクトップアプリ` `UIコンポーネント` `クロスプラットフォーム` `WebAssembly`
- Summary source: README

#### README要約

- RustとGPUIで高性能なクロスプラットフォームデスクトップアプリを構築するためのUIフレームワーク。
- 75以上のコンポーネント、WebAssembly対応、AccessKitアクセシビリティ、UI統合テスト、JS拡張ランタイムを備える。
- 実運用アプリLongbridge Proで使われており、データテーブル、仮想リスト、コードエディタ、ドックレイアウトなどを提供する。
- gpui-kitクレートを依存に追加して利用し、不要な機能はCargoフィーチャーで無効化できる。

---

### 4. [hydra-db/hydradb](https://github.com/hydra-db/hydradb)

> HydraDB - fast graph database on object storage

- Language: Rust
- Stars: 13,091
- Forks: 5,556
- Stars in 1週間: 6,827
- Category: 分散グラフデータベース
- Keywords: `グラフデータベース` `オブジェクトストレージ` `Rust` `OpenCypher` `Bolt` `S3互換`
- Summary source: README

#### README要約

- HydraDBはRustで書かれた、オブジェクトストレージを永続層とする分散グラフデータベースです。
- SlateDBによるスナップショット一貫性のあるOpenCypherクエリ、GraphBLASトラバーサル、Neo4j互換のBolt接続、HTTPSクエリAPIを備えています。
- S3互換ストレージを正本とし、クエリノードとインデクサーは独立にスケールするため、分散環境でのグラフ処理を必要とする開発者や運用者向けです。
- Rust 1.91以上、libcypher-parser、SuiteSparse GraphBLASなどの依存が必要で、ライセンスはAGPLv3です。

---

### 5. [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat)

> A batteries-included framework for building web apps

- Language: Rust
- Stars: 5,872
- Forks: 198
- Stars in 1週間: 577
- Category: Webフレームワーク
- Keywords: `Rust` `フルスタック` `サーバーサイドレンダリング` `リアクティビティ` `Tailwind` `モジュラールーティング`
- Summary source: README

#### README要約

- Topcoatは、RustでフルスタックWebアプリを構築するためのモジュラーでバッテリー同梱のフレームワークです。
- サーバーサイドレンダリングを基本とし、$(...)式によるクライアント側リアクティビティや#[shard]によるサーバー再レンダリングを提供します。
- view!マクロによるHTMLテンプレート、モジュールベースのルーティング、Tailwind統合、アセットバンドリングなどの機能を備えています。
- 早期段階で実験的なプロジェクトであり、破壊的変更が予想されるため、本番利用には注意が必要です。

---

### 6. [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin)

> Empowering everyone to host fast and efficient Minecraft servers

- Language: Rust
- Stars: 11,863
- Forks: 863
- Stars in 1週間: 521
- Category: ゲームサーバー
- Keywords: `Minecraft` `Rust` `マルチスレッド` `サーバー` `プラグイン` `オープンソース`
- Summary source: README

#### README要約

- PumpkinはRustで完全に構築されたMinecraftサーバーで、高速かつ効率的でカスタマイズ可能な体験を提供する。
- マルチスレッディングによるパフォーマンス重視の設計で、Java EditionとBedrock Editionの両方をサポートし、Vanillaのゲームメカニクスに準拠している。
- Minecraftサーバーをホストしたいユーザーや、プラグイン開発の基盤を求める開発者を対象としている。
- 現在開発中のプロジェクトであり、設定はTOML形式で行い、詳細はQuick Startガイドを参照する必要がある。

---

### 7. [juspay/hyperswitch](https://github.com/juspay/hyperswitch)

> Open source, composable payments platform | PCI compliant | SaaS and Self-host options | Enables connectivity to multiple payment, payout, fraud, vault and tokenization providers | Uplifts authorization with intelligent routing and revenue recovery | Reduce payment processing costs with cost observability | Reduces payment ops with reconciliation

- Language: Rust
- Stars: 45,271
- Forks: 6,420
- Stars in 1週間: 1,326
- Category: 決済インフラストラクチャ
- Keywords: `オープンソース` `決済` `Rust` `モジュラー` `PCI準拠` `マルチPSP`
- Summary source: README

#### README要約

- Hyperswitchは、Juspayが開発したオープンソースのモジュール型決済インフラストラクチャです。
- インテリジェントルーティング、収益回復、PCI準拠のVault、コスト可観測性、リコンシリエーションなどの独立したモジュールを提供します。
- StripeやAdyenなど120以上の決済プロセッサーと接続し、ベンダーロックインなしで必要なコンポーネントのみを導入可能です。
- Rustで構築されており、Dockerによるローカルセットアップ、ホステッドサンドボックス、HelmチャートによるAWS/GCP/Azureへのデプロイが可能です。

---

### 8. [pnpm/pnpm](https://github.com/pnpm/pnpm)

> Fast, disk space efficient package manager

- Language: Rust
- Stars: 36,730
- Forks: 1,902
- Stars in 1週間: 108
- Category: パッケージマネージャー
- Keywords: `pnpm` `Node.js` `モノレポ` `コンテンツアドレス指定` `ロックファイル` `Rust`
- Summary source: README

#### README要約

- 高速でディスク容量効率の高いNode.js向けパッケージマネージャー。
- コンテンツアドレス指定ストレージからnode_modulesへリンクし、厳格な依存解決とpnpm-lock.yamlによる決定的インストールを実現。
- モノレポや大規模プロジェクトに適し、Windows/Linux/macOS対応、Node.jsバージョン管理機能も備える。
- 公式サイトのインストール手順に従って導入。ライセンスはMITだがpnpr/ディレクトリのみPolyForm Shield License 1.0.0。Rust製CLIのpacquetは実験的。

---

### 9. [trycua/cua](https://github.com/trycua/cua)

> Scale computer-use 2.0 with open-source drivers, cross-OS fleets, and benchmarks for training, evaluation, and data generation.

- Language: Rust
- Stars: 27,820
- Forks: 1,961
- Stars in 1週間: 1,477
- Category: AIエージェント基盤
- Keywords: `Computer Use` `AIエージェント` `デスクトップ自動化` `仮想マシン` `ベンチマーク` `Rust`
- Summary source: README

#### README要約

- AIエージェントに利用可能なコンピュータ環境を提供するオープンソースのツール群です。
- Cua Spacesによるデスクトップ環境、Cua DriverによるOS自動操作、LumeによるローカルVM管理、CUA-S1モデル、Cua Benchによる評価機能を含みます。
- AIエージェントの開発者や、コンピュータ操作の自動化、データ生成、エージェントのベンチマーク評価を行うユーザー向けです。
- macOS 26以降が推奨され、curlコマンドやPowerShellでインストール可能です。ライセンスはFSL-1.1-MITなどが適用されます。

---

### 10. [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell)

> OpenShell is the safe, private runtime for autonomous AI agents.

- Language: Rust
- Stars: 14,425
- Forks: 1,660
- Stars in 1週間: 5,535
- Category: AIエージェントランタイム
- Keywords: `AIエージェント` `サンドボックス` `ポリシー制御` `カーネルレベル` `形式検証` `セキュリティ`
- Summary source: README

#### README要約

- OpenShellは、自律型AIエージェントのための安全でプライベートなランタイムです。
- カーネルレベルのサンドボックスでファイルアクセスやネットワーク接続を制御し、ポリシー変更は形式検証で事前チェックします。
- AIエージェントにファイル操作やAPI呼び出しを許可しつつ、データや認証情報への無制限アクセスを防ぎたいユーザー向けです。
- Linux、macOS（Apple Silicon）、WSL 2（実験的）が必要で、Docker、Podman、またはホスト仮想化環境で動作します。

---

### 11. [block/buzz](https://github.com/block/buzz)

> A hive mind communication platform

- Language: Rust
- Stars: 35,425
- Forks: 4,665
- Stars in 1週間: 1,090
- Category: 開発者コラボレーションプラットフォーム
- Keywords: `Nostr` `AIエージェント` `セルフホスト` `Rust` `ワークスペース` `イベントログ`
- Summary source: README

#### README要約

- Buzzは人間とAIエージェントが同じルームで協働するセルフホスト可能なワークスペースです。
- Nostrリレー上に構築され、メッセージ・ワークフロー・レビュー承認・gitイベントなどすべてが署名付きイベントとして一つのログに記録されます。
- エージェントは独自の鍵と監査証跡を持ち、リポジトリ操作・パッチ送信・コードレビュー・ワークフロー実行など人間と同じ操作が可能です。
- DockerとHermit（またはRust 1.88+等）が必要で、デスクトップアプリはTauri+React製、Windows版はコード署名なしのためSmartScreen警告が出る場合があります。

---

### 12. [JayWebtech/autoshorts](https://github.com/JayWebtech/autoshorts)

> AutoShorts is a local-first desktop application for turning long-form video or audio recordings into high-impact, vertical short-form clip candidates (9:16 portrait) with AI-powered viral moment ranking.

- Language: Rust
- Stars: 1,123
- Forks: 213
- Stars in 1週間: 236
- Category: 動画編集・AI自動化ツール
- Keywords: `ショート動画生成` `AI瞬間検出` `Tauri` `縦型動画` `自動文字起こし` `ローカルファースト`
- Summary source: README

#### README要約

- 長尺の動画・音声からAIでバイラル瞬間を検出し、9:16縦型ショート動画候補を生成するローカルファーストのデスクトップアプリ。
- DeepSeek/Claudeによる瞬間検出、Deepgram文字起こし、ffmpegでの自動縦型クロップ、SQLiteでのローカル保存を自動パイプラインで実行。
- 動画クリエイターやコンテンツ制作者が、長尺コンテンツから効率的にショート動画を作成する用途に最適。
- FFmpeg/FFprobeの事前インストールが必須。オフライン（Ollama+Whisper）またはクラウドAPI（Deepgram/DeepSeek/Claude）の設定が必要。

---

### 13. [trailofbits/coop](https://github.com/trailofbits/coop)

> Isolated VM environment for running Claude Code and Codex

- Language: Rust
- Stars: 747
- Forks: 39
- Stars in 1週間: 182
- Category: 開発者ツール
- Keywords: `VM分離環境` `Claude Code` `Codex` `Grok Build` `Rust CLI` `セキュア実行`
- Summary source: README

#### README要約

- Claude Code、Codex、Grok Buildを分離された使い捨てVM環境で実行するためのRust製CLIツール。
- 各VMはDocker、git、コンパイラ、パッケージマネージャへの完全なツールアクセスを提供し、ホストマシンへのリスクなく動作する。
- AIコーディングエージェントを安全に実行したい開発者向けで、VMは分離・再現可能で作成と破棄が容易。
- インストールスクリプトまたはソースからビルドし、coop setupでVMテンプレートを構築。macOSではLimaが必須で、macOS arm64とLinux x86_64でテスト済み。

---

### 14. [pydantic/monty](https://github.com/pydantic/monty)

> A minimal, secure Python interpreter written in Rust for use by AI

- Language: Rust
- Stars: 8,519
- Forks: 442
- Stars in 1週間: 239
- Category: AIコード実行サンドボックス
- Keywords: `Pythonサンドボックス` `Rust` `AIコード実行` `セキュア` `低遅延` `LLM`
- Summary source: README

#### README要約

- Montyは、AIが生成したコードを安全に実行するために設計された、Rust製のセキュアなPythonサンドボックスです。
- コンテナベースのサンドボックスと比較して、起動の遅延、複雑さ、コストを大幅に削減します。
- LLMによって生成されたコードを、低遅延かつ安全に実行する必要がある開発者やAIエージェントシステムを対象としています。
- Python、JavaScript/TypeScript、Rustのパッケージとしてインストールでき、サンドボックス内からはファイルシステムやネットワークへのアクセスはできません。

---

### 15. [pacifio/atlas](https://github.com/pacifio/atlas)

> Source control for agents. Use multiple coding agents, track their changes and query them in one place

- Language: Rust
- Stars: 8,744
- Forks: 342
- Stars in 1週間: 2,691
- Category: 開発者ツール
- Keywords: `コーディングエージェント` `ソースコントロール` `チェックポイント` `共有メモリ` `ACP` `ローカルファースト`
- Summary source: README

#### README要約

- コーディングエージェント向けのソースコントロールツールで、エージェントの変更履歴を追跡・一元管理する。
- コミットをセッションに紐付けるチェックポイント機能で、プロンプト・ツール呼び出し・推論過程を記録し後から照会可能。
- Claude CodeやCodexなど複数エージェントを同一コードベースで並行利用でき、共有メモリで切り替え時も文脈を維持。
- macOS 13+とWindows 10+をサポートし、サイトまたはリリースページからインストーラーを入手。Linuxは未検証。

---

### 16. [vectordotdev/vector](https://github.com/vectordotdev/vector)

> A high-performance observability data pipeline.

- Language: Rust
- Stars: 22,660
- Forks: 2,308
- Stars in 1週間: 54
- Category: オブザーバビリティ・データパイプライン
- Keywords: `Vector` `Rust` `オブザーバビリティ` `ログ収集` `データパイプライン` `Datadog`
- Summary source: README

#### README要約

- Vectorは、ログやメトリクスなどのオブザーバビリティデータを収集・変換・転送する、Rust製の高性能なエンドツーエンドのデータパイプラインです。
- エージェントまたはアグリゲーターとしてデプロイでき、信頼性とベンダーニュートラルなデータルーティングを重視して設計されています。
- オブザーバビリティコストの削減、ベンダー移行の円滑化、データ品質の向上を目指すインフラエンジニアやSREチームに適しています。
- 公式サイトのクイックスタートガイドから導入可能ですが、トレース機能は現在開発中であり、メトリクス機能はベータ版です。

---

### 17. [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev)

> A modern GUI client based on Tauri, designed to run in Windows, macOS and Linux for tailored proxy experience

- Language: Rust
- Stars: 148,849
- Forks: 10,682
- Stars in 1週間: 1,690
- Category: プロキシクライアント
- Keywords: `Clash Meta` `Tauri` `Rust` `プロキシ` `GUI` `mihomo`
- Summary source: README

#### README要約

- Clash Vergeの後継プロジェクトで、Tauri 2とRustベースのClash Meta（mihomo）GUIクライアント。
- システムプロキシ、TUNモード、プロファイル管理（Merge/Script）、WebDavバックアップ、ノード/ルールの可視化編集を搭載。
- Windows、macOS、Linuxで動作し、カスタマイズ可能なプロキシ環境を求めるデスクトップユーザー向け。
- GitHub Releasesからインストーラーをダウンロード。Stable版は日常使用向け、AutoBuild版はテスト用で不具合の可能性あり。

---

### 18. [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude)

> Open source inference engine for agents that optimizes itself for your exact hardware. Compiles and tunes its kernels on your device, so open models run up to 2x faster than llama.cpp. Works on Apple Silicon, NVIDIA, AMD, or just a CPU.

- Language: Rust
- Stars: 6,282
- Forks: 425
- Stars in 1週間: 1,198
- Category: AI推論エンジン
- Keywords: `オープンソース` `推論エンジン` `ハードウェア最適化` `ローカルLLM` `Rust` `エージェント連携`
- Summary source: README

#### README要約

- Magnitudeは、お使いのハードウェアに合わせて自己最適化するオープンソースのエージェント向け推論エンジンです。
- デバイス上でカーネルをコンパイル・チューニングすることで、llama.cppと比較して最大2倍の高速化を実現します。
- Pi、OpenCode、Hermes、Codexなどの既存のエージェントとワンクリックで接続でき、ローカルでオープンモデルを実行したいユーザーに適しています。
- macOS、Windows、Linuxに対応したデスクトップアプリとして提供され、Apple Silicon、NVIDIA、AMD、またはCPUのみの環境で動作します。

---

### 19. [zeronsh/zeron](https://github.com/zeronsh/zeron)

> A native control plane for Claude Code, Codex, Cursor, Devin and other coding agents.

- Language: Rust
- Stars: 2,807
- Forks: 268
- Stars in 1週間: 563
- Category: 開発者ツール
- Keywords: `コーディングエージェント` `コントロールプレーン` `ローカルファースト` `マルチデバイス同期` `Rust` `デーモン`
- Summary source: README

#### README要約

- Claude Code、Codex、Cursor、Devinなどのコーディングエージェントをローカルで制御するネイティブコントロールプレーン。
- 各デバイスでセッションを保存する小型エンジンが動作し、アカウント不要のローカルオンリーモードで起動、オプションでマルチデバイス同期が可能。
- 複数デバイス間でエージェントを操作したい開発者や、VPSなど常時稼働マシンでエージェントを継続実行したいユーザー向け。
- Linuxはcurlインストーラー、macOSはデスクトップ版またはソースビルド、Windowsはセットアップexeで導入。同期時は信頼するデバイスのみログインすること。

---

### 20. [rust-lang/rust](https://github.com/rust-lang/rust)

> Empowering everyone to build reliable and efficient software.

- Language: Rust
- Stars: 119,411
- Forks: 17,372
- Stars in 1週間: 335
- Category: プログラミング言語
- Keywords: `Rust` `コンパイラ` `メモリ安全性` `所有権モデル` `Cargo` `システムプログラミング`
- Summary source: README

#### README要約

- Rustプログラミング言語の公式リポジトリで、コンパイラ、標準ライブラリ、ドキュメントを含む。
- 所有権モデルと型システムによりメモリ安全性とスレッド安全性をコンパイル時に保証し、高速でメモリ効率の高いソフトウェア開発を実現する。
- 信頼性とパフォーマンスを重視する開発者向けで、組み込みシステムやクリティカルなサービス、他言語との統合に適している。
- 公式サイトからインストール可能で、Cargo、rustfmt、Clippyなどのツールチェーンが利用できる。ソースからのビルドは非推奨。

---

### 21. [touchHLE/touchHLE](https://github.com/touchHLE/touchHLE)

> High-level emulator for early iOS apps. This repo is used for issues, releases and CI. Submit patches at: https://review.gerrithub.io/admin/repos/touchHLE/touchHLE

- Language: Rust
- Stars: 3,961
- Forks: 341
- Stars in 1週間: 27
- Category: エミュレータ
- Keywords: `iOSエミュレータ` `Rust` `高レベルエミュレーション` `レトロゲーム` `iPhone OS` `Android`
- Summary source: README

#### README要約

- 初期のiOSアプリを現代のデスクトップOSやAndroid上で動作させる、Rust製の高レベルエミュレータ（HLE）です。
- iPhoneのハードウェアを直接シミュレートするのではなく、iOSのシステムフレームワーク（Foundation, UIKit, OpenGL ESなど）を独自に実装してアプリを実行します。
- 主にiPhone OS 2.x〜iOS 4.x時代のゲームを動かすことを目的としており、レトロなiOSゲームをプレイしたいユーザーに適しています。
- 実行には復号化されたアプリバイナリが必要です。対応OSはWindows、macOS、Androidで、互換性はアプリごとに異なります。

---

### 22. [oven-sh/bun](https://github.com/oven-sh/bun)

> Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one

- Language: Rust
- Stars: 96,099
- Forks: 5,085
- Stars in 1週間: 118
- Category: JavaScriptランタイム
- Keywords: `JavaScript` `TypeScript` `ランタイム` `バンドラー` `パッケージマネージャー` `Node.js互換`
- Summary source: README

#### README要約

- BunはJavaScript/TypeScriptアプリ向けのオールインワンツールキットで、単一の実行ファイルとして提供される。
- Rust製でJavaScriptCoreを搭載した高速ランタイムを中核に、テストランナー、バンドラー、Node.js互換パッケージマネージャーを内蔵する。
- Node.jsの代替として既存プロジェクトにほぼ変更なく導入でき、起動時間とメモリ使用量を削減したい開発者に適している。
- Linux/macOS/Windowsに対応し、インストールスクリプト、npm、Homebrew、Dockerで導入可能。Linuxはカーネル5.6以上推奨。

---
