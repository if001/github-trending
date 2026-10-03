+++
title = 'GitHub Trending 1週間レポート (go) - 2026/10/03'
date = 2026-10-03T00:11:17.211Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月3日 0:11:17
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 21
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語のリポジトリが圧倒的多数を占め、AIエージェントの運用基盤・メモリ・ワークフロー自動化と、セキュリティ・監視などのインフラ系ツールが人気を集めている。

- 一覧の全21リポジトリがGo言語で書かれており、Goエコシステムの強さが際立っている。
- AIエージェント関連が最多のテーマで、オーケストレーション基盤（google/ax）、ワークフロー自動化（github/gh-aw）、メモリ（Gentleman-Programming/engram、gastownhall/beads）、ターミナルエージェント（charmbracelet/crush）など多層的なツールが並ぶ。
- セキュリティ系も強く、シークレット管理（openbao/openbao）、漏洩認証情報検出（trufflesecurity/trufflehog）、AIクローラー対策（TecharoHQ/anubis）、学習プロジェクト集（CarterPerez-dev/Cybersecurity-Projects）がランクイン。
- 最もスターを集めたのはgoogle/axの1783で、2位のopenbao/openbao（713）と大きな差があり、エージェント実行基盤への関心の高さがうかがえる。
- 監視・インフラの定番（prometheus/prometheus、netdata/netdata、kubernetes/kubernetes、cockroachdb/cockroach）も堅調にスターを獲得している。

### 主なテーマ

- **AIエージェントの実行基盤とワークフロー自動化**: google/axが1783スターでトップ、github/gh-awが158スターと、AIエージェントを安全に大規模実行するための基盤やGitHub Actions連携の自動化ツールが注目されている。axはKubernetes上のサンドボックスで宣言的にエージェントを実行し、gh-awはMarkdownで定義したワークフローをサンドボックス化して実行する点が共通する。（`google/ax`、`github/gh-aw`）
- **AIコーディングエージェント向けメモリ・タスク管理**: Gentleman-Programming/engram（174）、gastownhall/beads（190）、Gentleman-Programming/gentle-ai（218）、charmbracelet/crush（189）がランクインし、Claude CodeやCodexなど複数のエージェントに永続メモリや構造化タスク管理を提供するツール群が伸びている。エージェント非依存・ロックイン回避を掲げる点が共通している。（`Gentleman-Programming/engram`、`gastownhall/beads`、`Gentleman-Programming/gentle-ai`、`charmbracelet/crush`）
- **セキュリティとシークレット保護**: openbao/openbao（713、2位）、trufflesecurity/trufflehog（207）、TecharoHQ/anubis（329）、CarterPerez-dev/Cybersecurity-Projects（280）が入り、シークレット管理・漏洩検出・AIクローラー防御・学習教材と幅広いセキュリティ需要が見られる。（`openbao/openbao`、`trufflesecurity/trufflehog`、`TecharoHQ/anubis`、`CarterPerez-dev/Cybersecurity-Projects`）
- **監視・オブザーバビリティとクラウドネイティブ基盤**: prometheus/prometheus（154）、netdata/netdata（155）、kubernetes/kubernetes（241）、cockroachdb/cockroach（48）といった定番インフラが安定した支持を集めており、netdataはAIによる異常検知を前面に出している。（`prometheus/prometheus`、`netdata/netdata`、`kubernetes/kubernetes`、`cockroachdb/cockroach`）
- **ネットワーク・データ収集・セルフホスト系ユーティリティ**: daeuniverse/dae（50）のeBPFトランスペアレントプロキシ、AminMGMT/BackPack（58）のリバーストンネル、gosom/google-maps-scraper（145）のスクレイピング、Billionmail/BillionMail（191）のセルフホストメール、photoprism/photoprism（47）の写真管理など、実用志向のネットワーク・データ系ツールが散見される。（`daeuniverse/dae`、`AminMGMT/BackPack`、`gosom/google-maps-scraper`、`Billionmail/BillionMail`、`photoprism/photoprism`）

### 補足的な観察

- 言語分布はGoが21件中21件（100%）で、他言語は一切登場しない偏った構成になっている。
- スター数はgoogle/axの1783が突出しており、次いでopenbao/openbaoの713、TecharoHQ/anubisの329、CarterPerez-dev/Cybersecurity-Projectsの280の順で、上位はエージェント基盤とセキュリティに集中している。
- golang/go本体（201）やurfave/cli（32）など言語・CLI基盤もランクインしており、Goコミュニティ自体の活発さが裏付けられる。
- AI関連リポジトリの多くがMCP（Model Context Protocol）対応やマルチエージェント対応を謳っており、特定エージェントへのロックイン回避が共通の訴求点になっている。

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 21 |

## Repository一覧

### 1. [google/ax](https://github.com/google/ax)

> Google's open agentic orchestration runtime

- Language: Go
- Stars: 12,905
- Forks: 639
- Stars in 1週間: 1,783
- Category: エージェントオーケストレーション
- Keywords: `エージェント実行基盤` `宣言的オーケストレーション` `サンドボックス` `Kubernetes` `Go` `Agent Substrate`
- Summary source: README

#### README要約

- AXはGoogleが開発した、クラスタ上で自律エージェントのワークロードを大規模に実行する宣言的オーケストレーションランタイムです。
- Task・Workspace・Modelという3つのプリミティブをYAMLマニフェストで宣言し、Agent Substrate上のサンドボックスで隔離実行します。
- Kubernetesに似たCLIでタスクの監視・サンドボックスへのシェル接続・中断と再開ができ、大規模なエージェント運用を行う開発者やプラットフォーム運用者向けです。
- 導入にはAgent Substrate導入済みのKubernetesクラスタ、Go、kubectl、koとコンテナレジストリが必要で、安定版前のため破壊的変更の可能性に注意が必要です。

---

### 2. [openbao/openbao](https://github.com/openbao/openbao)

> OpenBao is a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.

- Language: Go
- Stars: 8,286
- Forks: 607
- Stars in 1週間: 713
- Category: セキュリティ
- Keywords: `シークレット管理` `データ暗号化` `動的シークレット` `アクセス制御` `Go`
- Summary source: README

#### README要約

- OpenBaoは、シークレット、証明書、鍵などの機密データを管理、保存、配布するためのソフトウェアソリューションです。
- 主な機能として、安全なシークレットストレージ、動的シークレット生成、データ暗号化、リースと更新、およびシークレットの失効が含まれます。
- データベース認証情報やAPIキーなど、多数のシークレットへのアクセスを必要とする現代のシステムを対象としています。
- 開発にはGoが必要であり、貢献する前にCONTRIBUTING.mdを読む必要があります。

---

### 3. [netdata/netdata](https://github.com/netdata/netdata)

> The fastest path to AI-powered full stack observability, even for lean teams.

- Language: Go
- Stars: 80,778
- Forks: 6,645
- Stars in 1週間: 155
- Category: インフラ監視
- Keywords: `リアルタイム監視` `オブザーバビリティ` `ML異常検知` `ゼロコンフィグ` `ダッシュボード` `GPLv3`
- Summary source: README

#### README要約

- Netdataはオープンソースのリアルタイムインフラ監視プラットフォームで、秒単位のメトリクス収集と可視化を提供する。
- ゼロコンフィギュレーションで自動検出を行い、エッジ側でMLによる異常検知、長期保存、階層型スケーリングを備える。
- サーバー、クラウド、Kubernetes、IoTを運用するSysAdminやDevOps、小規模チームから大規模環境までを対象とする。
- AgentはGPLv3+、UIとCloudはクローズドソースで無料枠があり、Linux/macOS/FreeBSD/Windowsに対応する。

---

### 4. [Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram)

> Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.

- Language: Go
- Stars: 7,003
- Forks: 721
- Stars in 1週間: 174
- Category: AIエージェント向けメモリツール
- Keywords: `永続メモリ` `MCP` `SQLite` `FTS5` `Go` `CLI`
- Summary source: README

#### README要約

- AIコーディングエージェントに永続メモリを提供する、エージェント非依存の単一Goバイナリです。
- SQLite + FTS5全文検索を基盤に、CLI・HTTP API・MCPサーバー・対話型TUIを通じてメモリを操作できます。
- Claude Code、OpenCode、Gemini CLI、Codex、VS Code (Copilot)、CursorなどMCP互換エージェントのユーザーが対象です。
- Node.jsやPython、Docker不要でバイナリ1つとSQLiteファイル1つで動作し、GitHub ReleasesやHomebrewからインストールできます。

---

### 5. [cockroachdb/cockroach](https://github.com/cockroachdb/cockroach)

> CockroachDB — the cloud native, distributed SQL database designed for high availability, effortless scale, and control over data placement.

- Language: Go
- Stars: 32,538
- Forks: 4,123
- Stars in 1週間: 48
- Category: 分散SQLデータベース
- Keywords: `分散SQL` `水平スケーリング` `高可用性` `ACIDトランザクション` `PostgreSQL互換` `クラウドネイティブ`
- Summary source: README

#### README要約

- CockroachDBは、トランザクション対応で強整合性のあるキーバリューストア上に構築されたクラウドネイティブな分散SQLデータベースです。
- 水平スケーリング、ディスク・マシン・ラック・データセンター障害からの自動復旧、強整合性ACIDトランザクション、使い慣れたSQL APIを提供します。
- モダンでデータ集約的なアプリケーションを構築・スケール・管理する開発者や組織を対象としています。
- PostgreSQLワイヤープロトコル対応のため既存のPostgreSQLドライバーが利用可能で、CockroachCloudでのマネージド利用または手動・クラウド・オーケストレーションでのデプロイが選択できます。

---

### 6. [prometheus/prometheus](https://github.com/prometheus/prometheus)

> The Prometheus monitoring system and time series database.

- Language: Go
- Stars: 66,342
- Forks: 10,884
- Stars in 1週間: 154
- Category: 監視・メトリクス収集
- Keywords: `Prometheus` `監視` `時系列データベース` `PromQL` `メトリクス` `アラート`
- Summary source: README

#### README要約

- PrometheusはCNCFプロジェクトのシステムおよびサービス監視システムで、設定されたターゲットから定期的にメトリクスを収集し、ルール式を評価して結果を表示し、条件に応じてアラートを発火させる。
- 多次元データモデルと柔軟なクエリ言語PromQLを備え、HTTPプルモデルによる時系列収集、サービスディスカバリや静的設定によるターゲット検出、グラフ・ダッシュボード、フェデレーションをサポートする。
- 分散ストレージに依存せず単一サーバーノードで自律動作するため、インフラやサービスの監視を行いたい運用者やSRE向けの用途に適している。
- インストールは推奨されるコンパイル済みバイナリ、Dockerイメージ、ソースからのビルドが可能で、ソースビルドにはGo・NodeJS・npm 10以上が必要で、Goライブラリとしての利用は想定されていない点に注意が必要。

---

### 7. [urfave/cli](https://github.com/urfave/cli)

> A declarative, simple, fast, and fun package for building command line tools in Go

- Language: Go
- Stars: 24,274
- Forks: 1,832
- Stars in 1週間: 32
- Category: CLIフレームワーク
- Keywords: `Go` `CLI` `コマンドライン` `シェル補完` `フラグ解析` `サブコマンド`
- Summary source: README

#### README要約

- Goでコマンドラインツールを構築するための宣言的でシンプルかつ高速なパッケージ。
- コマンドとサブコマンドのエイリアス・前方一致、柔軟なヘルプシステム、bash/zsh/fish/powershell向け動的シェル補完を提供する。
- Go標準ライブラリ以外に依存がなく、CLIツールを作るGo開発者向けで、manやMarkdownのドキュメント生成も別モジュールで対応する。
- フラグは環境変数やテキストファイル、構造化ファイルからも読み込め、urfave_cli_no_templateビルドタグでテンプレート無しの軽量ビルドも可能。

---

### 8. [daeuniverse/dae](https://github.com/daeuniverse/dae)

> eBPF-based Linux high-performance transparent proxy solution.

- Language: Go
- Stars: 6,280
- Forks: 411
- Stars in 1週間: 50
- Category: ネットワークプロキシ
- Keywords: `eBPF` `トランスペアレントプロキシ` `Linux` `トラフィック分岐` `Go` `v2rayA後継`
- Summary source: README

#### README要約

- daeはeBPFを活用したLinux向けの高性能トランスペアレントプロキシソリューションです。
- Linuxカーネル内でトラフィックを分岐し、直接通信をプロキシ経由せずに処理することで性能低下を抑えます。
- プロセス名やMACアドレス、ポリシーに基づくノード自動切替など、柔軟なトラフィック制御を必要とするユーザー向けです。
- 導入にはQuick Start Guideの参照が推奨され、UDPサーバー併用時のルール設定などに注意が必要です。

---

### 9. [kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)

> Production-Grade Container Scheduling and Management

- Language: Go
- Stars: 128,166
- Forks: 45,831
- Stars in 1週間: 241
- Category: コンテナオーケストレーション
- Keywords: `Kubernetes` `コンテナ管理` `オープンソース` `CNCF` `Go` `マイクロサービス`
- Summary source: README

#### README要約

- Kubernetes（K8s）は、複数ホストにまたがるコンテナ化アプリケーションを管理するオープンソースシステムです。
- アプリケーションのデプロイ、保守、スケーリングの基本メカニズムを提供し、GoogleのBorgの経験とコミュニティの知見に基づいています。
- コンテナ技術やマイクロサービスに関心のある企業や開発者が対象で、CNCFがホストしています。
- 利用開始はkubernetes.ioのドキュメントを参照し、ライブラリとしてのk8s.io/kubernetesモジュールの使用はサポートされていません。

---

### 10. [Billionmail/BillionMail](https://github.com/Billionmail/BillionMail)

> BillionMail gives you open-source MailServer, NewsLetter, Email Marketing — fully self-hosted, dev-friendly, and free from monthly fees. Join the discord: https://discord.gg/asfXzBUhZr

- Language: Go
- Stars: 15,819
- Forks: 1,735
- Stars in 1週間: 191
- Category: メールマーケティング
- Keywords: `オープンソース` `メールサーバー` `ニュースレター` `メールマーケティング` `セルフホスト` `無制限送信`
- Summary source: README

#### README要約

- BillionMailは、オープンソースのメールサーバー、ニュースレター、メールマーケティングソリューションです。
- 高度な分析、顧客管理、無制限のメール送信、カスタマイズ可能なテンプレートなどの機能を提供します。
- 企業や個人がメールキャンペーンを簡単に管理し、完全なコントロールを得ることを目的としています。
- インストールは簡単で、8分でメール送信が可能になり、DockerやaaPanelを使用したワンクリックインストールもサポートされています。

---

### 11. [CarterPerez-dev/Cybersecurity-Projects](https://github.com/CarterPerez-dev/Cybersecurity-Projects)

> Building 70 Projects ranging from beginner to advanced so anyone can — learn from, build upon, use as a reference, or even copy directly. Gamified Cybersecurity learning 👇

- Language: Go
- Stars: 7,664
- Forks: 1,115
- Stars in 1週間: 280
- Category: サイバーセキュリティ学習プロジェクト集
- Keywords: `サイバーセキュリティ` `ハンズオン学習` `段階別プロジェクト` `複数言語対応` `認定ロードマップ` `オープンソース`
- Summary source: README

#### README要約

- 初心者から上級者までを対象とした70のサイバーセキュリティプロジェクトを収録した学習用リポジトリ。
- Foundations、Beginner、Intermediate、Advancedの4段階の難易度別に構成され、ソースコードと詳細なドキュメントを提供。
- プログラミング初心者からセキュリティ専門家まで、実践的なツール構築を通じて学習したい人向け。
- 各プロジェクトはPython、Go、C++など複数言語で実装され、AGPL 3.0ライセンスで公開されている。

---

### 12. [golang/go](https://github.com/golang/go)

> The Go programming language

- Language: Go
- Stars: 139,128
- Forks: 21,081
- Stars in 1週間: 201
- Category: プログラミング言語
- Keywords: `Go` `オープンソース` `プログラミング言語` `BSDライセンス` `効率的` `クロスプラットフォーム`
- Summary source: README

#### README要約

- Goは、シンプルで信頼性が高く効率的なソフトウェアを簡単に構築できるオープンソースのプログラミング言語です。
- 公式バイナリ配布とソースからのインストールの両方をサポートし、BSDスタイルのライセンスで配布されています。
- 効率的なソフトウェア開発を目指す開発者やプログラマーを対象とし、多様なOSとアーキテクチャで利用可能です。
- 公式サイトからバイナリをダウンロードするか、ソースからビルドでき、貢献にはガイドラインの確認が必要です。

---

### 13. [photoprism/photoprism](https://github.com/photoprism/photoprism)

> AI-Powered Photos App 🌈💎✨

- Language: Go
- Stars: 40,268
- Forks: 2,331
- Stars in 1週間: 47
- Category: 写真管理アプリ
- Keywords: `AI` `写真整理` `プライバシー` `セルフホスト` `顔認識` `Docker`
- Summary source: README

#### README要約

- AIを活用したプライバシー重視の写真・動画管理アプリで、セルフホストまたはクラウドでメディアの閲覧、整理、共有を支援します。
- RAW画像や動画形式に対応し、強力な検索フィルタ、自動ラベル付け、顔認識、世界地図表示、Exif/XMPメタデータ抽出などの機能を提供します。
- 個人ユーザーや家族の写真整理に適しており、PWAとしてモバイル・デスクトップで利用可能で、WebDAVやPhotoSyncなどの外部アプリとも連携できます。
- Dockerを使ってMac、Linux、Windowsにインストールでき、Raspberry PiやApple Siliconもサポート。セルフファンドで運営され、データ販売は行われません。

---

### 14. [TecharoHQ/anubis](https://github.com/TecharoHQ/anubis)

> Weighs the soul of incoming HTTP requests to stop AI crawlers

- Language: Go
- Stars: 23,002
- Forks: 744
- Stars in 1週間: 329
- Category: セキュリティツール
- Keywords: `Webファイアウォール` `AIクローラー対策` `ボット保護` `Go` `オープンソース` `スクレイパー防止`
- Summary source: README

#### README要約

- Anubisは、スクレイパーボットからアップストリームリソースを保護するWeb AIファイアウォールユーティリティです。
- 接続の「魂を量る」ために1つ以上のチャレンジを使用し、AI企業からの大量リクエストを防ぎます。
- Cloudflareを使用できない、または使用したくない状況で、小規模なインターネットコミュニティを保護したいユーザー向けです。
- 軽量に設計されていますが、Internet Archiveのような「良いボット」もブロックする可能性があるため、ポリシー設定での許可リスト登録が推奨されます。

---

### 15. [AminMGMT/BackPack](https://github.com/AminMGMT/BackPack)

> High Performance reverse tunnel engine in Go, built for edge ⇄ origin server setups

- Language: Go
- Stars: 428
- Forks: 100
- Stars in 1週間: 58
- Category: ネットワークツール
- Keywords: `Go` `リバーストンネル` `VPN` `フェイルオーバー` `CLI` `イラン`
- Summary source: README

#### README要約

- BackPackはGoで書かれた高性能トンネルエンジンで、イランと海外（kharej）サーバー間の接続を確立する。
- リバーストンネルとダイレクトトンネルをサポートし、複数のトランスポート、自動フェイルオーバー、ヘルスチェック、Web監視パネルを備える。
- 接続が不安定な環境での利用を想定しており、対話型CLIやセットアップリンクによる簡単な構成が可能。
- インストールはスクリプトで行い、AGPL-3.0ライセンスの下で提供される。トークンやポート設定に注意が必要。

---

### 16. [trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog)

> Find, verify, and analyze leaked credentials

- Language: Go
- Stars: 28,244
- Forks: 2,619
- Stars in 1週間: 207
- Category: セキュリティスキャナー
- Keywords: `シークレット検出` `認証情報漏洩` `Gitスキャン` `セキュリティ` `Go` `AGPL`
- Summary source: README

#### README要約

- TruffleHogは、Gitリポジトリやファイルシステムなどから漏洩した認証情報（シークレット）を発見・分類・検証・分析するGo製のオープンソースツールです。
- 800種類以上のシークレットタイプを識別し、実際にログイン試行を行って有効性を検証する機能や、主要な認証情報の権限やアクセス可能なリソースを詳細に分析する機能を備えています。
- セキュリティ担当者や開発者が、APIキーやデータベースパスワードなどの漏洩リスクを調査し、GitHub組織やS3バケットなどをスキャンする用途に適しています。
- Homebrew、Docker、バイナリ、ソースからのビルドなど複数の方法で導入でき、v3.0以降はAGPL 3ライセンスで提供されています。

---

### 17. [gosom/google-maps-scraper](https://github.com/gosom/google-maps-scraper)

> scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place

- Language: Go
- Stars: 6,250
- Forks: 985
- Stars in 1週間: 145
- Category: Webスクレイピングツール
- Keywords: `Google Maps` `スクレイピング` `Go` `リード生成` `CLI` `REST API`
- Summary source: README

#### README要約

- Google Mapsから店舗名・住所・電話番号・メール・レビュー・座標など33以上のデータ項目を抽出するオープンソースのスクレイパー。
- CLI・Web UI・REST APIの複数インターフェースを備え、CSV/JSON/PostgreSQL/S3への出力やSOCKS5/HTTPプロキシローテーションに対応する。
- リード獲得、ローカルビジネス調査、営業開拓、データ拡充、開発者の自動化などの用途を想定している。
- MITライセンスで無料。DockerとNode.jsが必要で、利用は適用法令と利用規約を遵守する責任がある。

---

### 18. [github/gh-aw](https://github.com/github/gh-aw)

> GitHub Agentic Workflows

- Language: Go
- Stars: 5,335
- Forks: 572
- Stars in 1週間: 158
- Category: AIワークフロー自動化
- Keywords: `GitHub Actions` `AIエージェント` `GitHub CLI拡張` `Markdown` `セキュリティ` `CI/CD`
- Summary source: README

#### README要約

- GitHub Agentic Workflows（gh-aw）は、AIによるリポジトリ自動化をMarkdownとYAML frontmatterで定義し、GitHub Actions経由でAIエージェントを安全に実行するGitHub CLI拡張です。
- gh aw compileコマンドでワークフローを検証・標準的なGitHub Actionsワークフローに変換し、GitHub Copilot、Claude Code、OpenAI Codex、Google Gemini、PiなどのAIエンジンを組み込みでサポートします。
- Issueトリアージ、PRレビュー、CI失敗調査、ドキュメント保守、依存関係分析など、推論や解釈が必要なタスクに適しており、既存のCI/CDを補完します。
- gh extension install github/gh-awでインストール可能。エージェントジョブはデフォルトで読み取り専用・サンドボックス化され、書き込みは検証済みsafe-outputsジョブ経由で適用されますが、セキュリティ設定の確認と人間の監督が必須です。

---

### 19. [charmbracelet/crush](https://github.com/charmbracelet/crush)

> Glamourous agentic coding for all 💘

- Language: Go
- Stars: 28,458
- Forks: 2,313
- Stars in 1週間: 189
- Category: AIコーディングエージェント
- Keywords: `ターミナル` `LLM` `コーディングエージェント` `MCP` `LSP` `Go`
- Summary source: README

#### README要約

- Crushはターミナル上で動作するエージェント型コーディングツールで、ユーザーのツールやコード、ワークフローを任意のLLMに接続する。
- 複数LLMの切り替え、セッション管理、LSPによるコンテキスト強化、MCPによる機能拡張に対応し、macOS/Linux/Windows/BSDなど多環境で動く。
- ターミナル中心でAI支援コーディングを行いたい開発者向けで、OpenAIやAnthropic互換API、ローカルモデルなど幅広いプロバイダーを利用できる。
- Homebrewやnpm、Goなどで導入可能。利用には各プロバイダーのAPIキーが必要で、匿名利用メトリクスは環境変数で無効化できる。

---

### 20. [Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai)

> Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.

- Language: Go
- Stars: 7,500
- Forks: 822
- Stars in 1週間: 218
- Category: AI開発ツール
- Keywords: `AIエージェント` `永続メモリ` `TDD` `ワークフロー` `マルチエージェント対応` `オープンソース`
- Summary source: README

#### README要約

- Gentle-AIは、Claude Code、Cursor、OpenCode、Codexなど既存のAIコーディングエージェントに、記憶・ワークフロー・証拠を与える決定論的なエンジニアリング環境です。
- Engramによる永続メモリ、ODD（Organic Driven Development）による作業管理、Strict TDD、RDDによるレビュー、スキルライブラリ、MCPサーバー、ペルソナなどを提供します。
- AIエージェントを使う開発者やチームが、エージェントをロックインせずに、コンテキストの蓄積と検証可能な作業プロセスを実現するために使用します。
- Homebrew、curl、Go installで導入可能で、設定前に自動バックアップを作成し、AIエージェント自体はインストールせず既存のものを設定します。

---

### 21. [gastownhall/beads](https://github.com/gastownhall/beads)

> Beads - A memory upgrade for your coding agent

- Language: Go
- Stars: 27,597
- Forks: 1,876
- Stars in 1週間: 190
- Category: AIエージェント向けタスク管理CLI
- Keywords: `イシュートラッカー` `コーディングエージェント` `Dolt` `依存関係グラフ` `CLI` `Go`
- Summary source: README

#### README要約

- BeadsはDoltを基盤としたAIコーディングエージェント向けの分散グラフ型イシュートラッカーです。
- 依存関係を意識したタスクグラフで長期的な作業のコンテキストを保持し、ハッシュIDによる衝突防止や古いタスクの要約圧縮機能を備えています。
- Claude CodeやCodexなどのコーディングエージェントを使う開発者が、マークダウンのTODOリストの代わりに構造化されたタスク管理を行う用途に適しています。
- brewやnpm、インストールスクリプトでCLIを導入し、プロジェクトでbd initを実行します。gitなしでも動作し、ステルスモードやコントリビューターモードも利用可能です。

---
