+++
title = 'GitHub Trending 1週間レポート (go) - 2026/11/07'
date = 2026-11-07T00:38:33.862Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月7日 0:38:33
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 20
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のインフラ・開発者ツールが支配的で、AIエージェント関連とセルフホスト型ソリューションが強い注目を集めている

- 全20リポジトリがGo言語で記述されており、言語分布が完全にGoに集中している
- AIエージェント関連（multica-ai/multica、infiniflow/ragflow、gastownhall/beads）が高いスター数を獲得している
- セルフホスト可能なツール（go-gitea/gitea、netbirdio/netbird、Billionmail/BillionMail、mayswind/ezbookkeeping）が複数ランクインしている
- コンテナ・Kubernetesエコシステム（moby/moby、kubernetes/kubernetes、docker/compose、argoproj/argo-cd）が引き続き安定した人気を維持している
- 最もスターを獲得したのはmultica-ai/multica（825スター）で、AIエージェントと人間の協業プラットフォームへの関心の高さがうかがえる

### 主なテーマ

- **AIエージェントとLLMインフラ**: multica-ai/multica（825スター）がAIコーディングエージェントのチーム管理プラットフォームとして最高のスター数を記録。infiniflow/ragflow（540スター）はRAGエンジンとして、LLM向けコンテキスト層を提供。gastownhall/beads（271スター）はコーディングエージェント向けの永続メモリを提供するイシュートラッカー。AIエージェントを実運用に組み込むための基盤ツールが強く注目されている。（`multica-ai/multica`、`infiniflow/ragflow`、`gastownhall/beads`、`Mag1cFall/AIStudio2API`）
- **コンテナ・Kubernetesエコシステム**: kubernetes/kubernetes（708スター）を筆頭に、moby/moby（205スター）、docker/compose（146スター）、argoproj/argo-cd（59スター）がランクイン。コンテナランタイムからオーケストレーション、GitOps継続的デリバリーまで、クラウドネイティブ基盤の中核プロジェクトが安定した人気を維持している。（`kubernetes/kubernetes`、`moby/moby`、`docker/compose`、`argoproj/argo-cd`）
- **セルフホスト型プラットフォーム**: go-gitea/gitea（178スター）がセルフホストGitサービス、netbirdio/netbird（395スター）がZero Trustネットワーク、Billionmail/BillionMail（213スター）がメールマーケティング、mayswind/ezbookkeeping（137スター）が家計簿アプリとして登場。プライバシー重視とSaaS依存からの脱却を求める流れが複数分野で見られる。（`go-gitea/gitea`、`netbirdio/netbird`、`Billionmail/BillionMail`、`mayswind/ezbookkeeping`）
- **開発者生産性ツール**: nektos/act（120スター）がGitHub Actionsのローカル実行、gin-gonic/gin（199スター）が高性能Webフレームワーク、gohugoio/hugo（134スター）が静的サイトジェネレーターとしてランクイン。開発ワークフローの効率化とローカル環境での再現性向上を目的としたツールが支持を集めている。（`nektos/act`、`gin-gonic/gin`、`gohugoio/hugo`）
- **分散システム基盤とモニタリング**: prometheus/prometheus（354スター）が監視・時系列データベース、etcd-io/etcd（209スター）が分散キーバリューストアとして登場。golang/go（635スター）自体も高いスター数を獲得しており、Goエコシステムの基盤技術への関心が根強い。（`prometheus/prometheus`、`etcd-io/etcd`、`golang/go`）

### 補足的な観察

- 全20リポジトリがGo言語で記述されており、他言語のプロジェクトは1件もランクインしていない
- スター数の上位3件はmultica-ai/multica（825）、kubernetes/kubernetes（708）、golang/go（635）で、AIエージェント管理とGoエコシステムの基盤が注目を集めている
- セキュリティ関連ではnetbirdio/netbird（Zero Trust VPN）とCarterPerez-dev/Cybersecurity-Projects（561スター、学習プロジェクト集）がランクインし、実用ツールと学習リソースの両方が注目されている
- fleetdm/fleet（65スター）とargoproj/argo-cd（59スター）は比較的スター数が少ないものの、GitOps・デバイス管理という特定領域で安定した支持を得ている

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 20 |

## Repository一覧

### 1. [moby/moby](https://github.com/moby/moby)

> The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems

- Language: Go
- Stars: 72,352
- Forks: 19,318
- Stars in 1週間: 205
- Category: コンテナ基盤
- Keywords: `コンテナ` `Docker` `オープンソース` `モジュラー` `Go` `コンテナランタイム`
- Summary source: README

#### README要約

- Dockerが作成したオープンソースプロジェクトで、ソフトウェアコンテナ化を実現・加速するためのツールキットコンポーネントを提供する。
- コンテナビルドツール、レジストリ、オーケストレーションツール、ランタイムなどのモジュール式コンポーネントを組み合わせてカスタムコンテナシステムを構築できる。
- コンテナベースのシステムを改造・実験・構築したいエンジニア、インテグレーター、愛好家を対象としており、商用サポートを求めるユーザー向けではない。
- Docker v29以降、github.com/docker/dockerは非推奨となり、github.com/moby/moby/clientとgithub.com/moby/moby/apiへの移行が必要。Apache License 2.0でライセンスされている。

---

### 2. [multica-ai/multica](https://github.com/multica-ai/multica)

> Make humans and AI agents work as one team — open-source and self-hostable.

- Language: Go
- Stars: 55,162
- Forks: 7,272
- Stars in 1週間: 825
- Category: AIエージェント管理プラットフォーム
- Keywords: `AIエージェント` `セルフホスト` `ワークスペース` `Claude Code` `Codex` `チーム協業`
- Summary source: README

#### README要約

- Multicaは、AIコーディングエージェントをチームメイトのように扱えるソースアベイラブルなワークスペースです。
- Claude CodeやCodexなど既存のエージェントCLIを接続し、イシューの割り当て・進捗報告・レビュー依頼を一元管理します。
- 複数のAIエージェントと人間のチームを統合し、実行ログやコスト分析、レビューゲートで透明性を確保したい開発チーム向けです。
- セルフホスト可能でDocker ComposeやHelmに対応。エージェント実行には対応CLIのインストールと認証が必要です。

---

### 3. [go-gitea/gitea](https://github.com/go-gitea/gitea)

> Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD

- Language: Go
- Stars: 58,928
- Forks: 7,364
- Stars in 1週間: 178
- Category: セルフホストGitサービス
- Keywords: `Gitホスティング` `コードレビュー` `CI/CD` `パッケージレジストリ` `セルフホスト` `Go`
- Summary source: README

#### README要約

- Giteaはセルフホスト型のオールインワンソフトウェア開発サービスを簡単かつ高速に構築することを目的としたプロジェクトです。
- Gitホスティング、コードレビュー、課題管理、プロジェクトカンバン、Wiki、チームコラボレーション、パッケージレジストリ、GitHub Actionsを再利用できるCI/CDを提供します。
- Goで書かれており、Linux、macOS、FreeBSD/OpenBSD、WindowsなどGoが対応する多様なプラットフォームとアーキテクチャで動作します。
- 公式DockerイメージやGitea Cloudでのデプロイが可能で、ソースからのビルド手順やドキュメントも整備されており、MITライセンスで公開されています。

---

### 4. [argoproj/argo-cd](https://github.com/argoproj/argo-cd)

> Declarative Continuous Deployment for Kubernetes

- Language: Go
- Stars: 24,558
- Forks: 8,104
- Stars in 1週間: 59
- Category: 継続的デリバリー
- Keywords: `GitOps` `Kubernetes` `継続的デリバリー` `宣言的` `自動化` `Argo CD`
- Summary source: README

#### README要約

- Argo CDは、Kubernetes向けの宣言的なGitOps継続的デリバリーツールです。
- アプリケーション定義や設定をバージョン管理し、デプロイとライフサイクル管理を自動化・監査可能にします。
- GitOpsの原則に従い、Kubernetes環境での宣言的かつ自動化されたアプリケーションデプロイを求める開発者や運用チームが対象です。
- 詳細は公式ドキュメントを参照し、GitHub DiscussionsやSlackなどのコミュニティチャネルでサポートを受けられます。

---

### 5. [docker/compose](https://github.com/docker/compose)

> Define and run multi-container applications with Docker

- Language: Go
- Stars: 38,630
- Forks: 5,902
- Stars in 1週間: 146
- Category: コンテナオーケストレーション
- Keywords: `Docker` `マルチコンテナ` `compose.yaml` `コンテナ管理` `開発環境` `Go`
- Summary source: README

#### README要約

- Docker Composeは、Composeファイル形式で定義されたマルチコンテナアプリケーションをDocker上で実行するためのツールです。
- compose.yamlでサービスを定義し、docker compose upコマンド一つでアプリケーション全体を起動・管理できます。
- 複数のコンテナで構成されるアプリケーションを開発・運用するDockerユーザー向けで、ローカル環境での再現性の高い環境構築に適しています。
- Windows/macOSではDocker Desktopに同梱され、Linuxではリリースページからバイナリをダウンロードしてcli-pluginsディレクトリに配置します。

---

### 6. [netbirdio/netbird](https://github.com/netbirdio/netbird)

> NetBird securely connects people, machines and AI agents across any network with one identity-based Zero Trust platform. Powered by peer-to-peer WireGuard®

- Language: Go
- Stars: 30,748
- Forks: 1,833
- Stars in 1週間: 395
- Category: Zero Trustネットワーク/VPN
- Keywords: `WireGuard` `Zero Trust` `P2P VPN` `セルフホスト` `アクセス制御` `Go`
- Summary source: README

#### README要約

- NetBirdは、人・マシン・AIエージェントをIDベースのZero Trustプラットフォームで安全に接続するオープンソースのプライベートネットワークツールです。
- WireGuardベースのP2Pオーバーレイネットワークと集中型アクセス制御を組み合わせ、SSO/MFA、アクセスポリシー、監査ログ、プライベートDNSなどを提供します。
- 組織やホームユーザーがVPNゲートウェイや複雑なファイアウォール設定なしにセキュアなリモートアクセス環境を構築する用途に適しています。
- NetBird Cloudまたはセルフホスト（Docker Compose、公開ドメインとVMが必要）で導入でき、mainブランチは不安定な場合があるため安定版はリリースを参照してください。

---

### 7. [nektos/act](https://github.com/nektos/act)

> Run your GitHub Actions locally 🚀

- Language: Go
- Stars: 72,571
- Forks: 2,109
- Stars in 1週間: 120
- Category: 開発者ツール
- Keywords: `GitHub Actions` `ローカル実行` `Docker` `CLI` `Go` `CI/CD`
- Summary source: README

#### README要約

- GitHub Actionsのワークフローをローカル環境で実行できるGo製のCLIツール。
- `.github/workflows/`を読み込み、Docker APIでイメージを取得・ビルドし、依存関係に基づいて各アクションをコンテナで実行する。
- ワークフローの変更をコミット・プッシュせずに素早くテストしたい開発者や、Makefileの代わりにローカルタスクランナーとして使いたいユーザー向け。
- 実行にはDockerが必要で、ソースからビルドする場合はGo（go.mod記載のバージョン）のインストールが必要。

---

### 8. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)

> RAGFlow is an agent-native database: a Retrieval-Augmented Generation (RAG) engine that grew into context infrastructure.

- Language: Go
- Stars: 93,696
- Forks: 11,253
- Stars in 1週間: 540
- Category: RAGエンジン
- Keywords: `RAG` `エージェント` `LLM` `コンテキストエンジン` `文書理解` `オープンソース`
- Summary source: README

#### README要約

- RAGFlowは、最先端のRAGとエージェント機能を融合させ、LLM向けのコンテキスト層を構築するオープンソースのRAGエンジンです。
- 複雑な非構造化データからの深い文書理解に基づく知識抽出、テンプレートベースのチャンキング、複数の思考モードを持つエージェンティック検索などを提供します。
- 個人から大企業まで幅広い規模の開発者や企業が、複雑なデータを高忠実度で本番対応のAIシステムに変換するために利用できます。
- Dockerによるローカルデプロイが可能で、推奨構成は4 CPUコア、16GB RAM、50GBの空きディスク容量です。Elasticsearch使用時はvm.max_map_countの設定が必要です。

---

### 9. [Billionmail/BillionMail](https://github.com/Billionmail/BillionMail)

> BillionMail gives you open-source MailServer, NewsLetter, Email Marketing — fully self-hosted, dev-friendly, and free from monthly fees. Join the discord: https://discord.gg/asfXzBUhZr

- Language: Go
- Stars: 16,203
- Forks: 1,807
- Stars in 1週間: 213
- Category: メールマーケティング
- Keywords: `オープンソース` `メールサーバー` `ニュースレター` `メールマーケティング` `自己ホスト型` `プライバシー`
- Summary source: README

#### README要約

- BillionMailは、オープンソースのメールサーバー、ニュースレター、メールマーケティングソリューションです。
- 高度な分析、顧客管理、無制限のメール送信、カスタマイズ可能なテンプレートなどの機能を提供します。
- 企業や個人がメールキャンペーンを簡単に管理できるように設計されており、自己ホスト型でプライバシーを重視しています。
- インストールは簡単で、8分でメール送信が可能です。DockerやaaPanelを使用したインストール方法も提供されています。

---

### 10. [prometheus/prometheus](https://github.com/prometheus/prometheus)

> The Prometheus monitoring system and time series database.

- Language: Go
- Stars: 67,179
- Forks: 10,988
- Stars in 1週間: 354
- Category: 監視・モニタリング
- Keywords: `Prometheus` `時系列データベース` `PromQL` `メトリクス収集` `アラート` `サービスディスカバリ`
- Summary source: README

#### README要約

- PrometheusはCNCFプロジェクトのシステムおよびサービス監視システムであり、設定されたターゲットから定期的にメトリクスを収集し、ルール式を評価して結果を表示し、条件に応じてアラートを発火させる。
- 多次元データモデルと強力なクエリ言語PromQLを備え、分散ストレージに依存せず単一サーバーノードが自律的に動作し、HTTPプルモデルによる時系列収集を行う。
- サービスディスカバリまたは静的設定によるターゲット検出、バッチジョブ向けのプッシュゲートウェイ、グラフ・ダッシュボード表示、階層的・水平的フェデレーションをサポートする。
- プリコンパイル済みバイナリ、Dockerイメージ、ソースからのビルドなど複数のインストール方法があり、ソースビルドにはGo、NodeJS、npm 10以上が必要で、ライセンスはApache License 2.0である。

---

### 11. [gastownhall/beads](https://github.com/gastownhall/beads)

> Beads - A memory upgrade for your coding agent

- Language: Go
- Stars: 28,561
- Forks: 1,935
- Stars in 1週間: 271
- Category: 開発者ツール
- Keywords: `AIエージェント` `イシュートラッカー` `Dolt` `タスク管理` `CLI` `分散システム`
- Summary source: README

#### README要約

- BeadsはDoltを基盤とした分散グラフ型イシュートラッカーで、コーディングエージェントに永続的で構造化されたメモリを提供する。
- 依存関係を意識したタスクグラフ、ハッシュベースIDによる衝突防止、セマンティックなメモリ圧縮、メッセージング機能を備える。
- AIコーディングエージェントや開発者が長期的なタスクを管理し、マルチエージェント環境での作業を調整するのに適している。
- CLIツールとしてシステムにインストールし、プロジェクトでbd initを実行して初期化する。macOS、Linux、Windows、FreeBSDに対応。

---

### 12. [mayswind/ezbookkeeping](https://github.com/mayswind/ezbookkeeping)

> ezBookkeeping is an open source, powerful, self-hosted personal finance app that is easy to use.

- Language: Go
- Stars: 6,014
- Forks: 753
- Stars in 1週間: 137
- Category: 家計簿・個人資産管理
- Keywords: `セルフホスト` `家計簿` `Docker` `PWA` `多通貨` `AI連携`
- Summary source: README

#### README要約

- オープンソースでセルフホスト型の個人向け家計簿・資産管理アプリで、日々の取引記録やデータ取り込み、検索・分析ができる。
- 2階層の口座・カテゴリ、画像添付、地図連携の位置記録、定期取引、高度な絞り込みと可視化、AIによるテキスト/レシート認識やカスタムチャート生成などを備える。
- プライバシーを重視して自分のサーバーで運用したい個人ユーザー向けで、モバイル/デスクトップ最適化UIとPWA、多言語・多通貨・多タイムゾーンに対応する。
- Docker一発起動やバイナリ/ソースビルドで導入でき、SQLite/MySQL/PostgreSQLをサポートし、本番利用ではデータ損失防止のため永続ボリュームのマウントが必要。

---

### 13. [gin-gonic/gin](https://github.com/gin-gonic/gin)

> Gin is a high-performance HTTP web framework written in Go. It provides a Martini-like API but with significantly better performance—up to 40 times faster—thanks to httprouter. Gin is designed for building REST APIs, web applications, and microservices.

- Language: Go
- Stars: 89,591
- Forks: 8,910
- Stars in 1週間: 199
- Category: Webフレームワーク
- Keywords: `Go` `HTTP` `高性能` `REST API` `マイクロサービス` `ミドルウェア`
- Summary source: README

#### README要約

- Go言語で書かれた高性能なHTTP Webフレームワークで、Martini風のAPIを提供しながらhttprouterにより最大40倍の高速化を実現している。
- ゼロアロケーションルーター、ミドルウェアサポート、JSONバリデーション、ルートグルーピング、エラー管理、内蔵レンダリングなどの機能を備える。
- REST API、Webアプリケーション、マイクロサービスの構築に適しており、高スループットや高速レスポンスが求められる開発者を対象としている。
- Go 1.26以上が必要で、Goモジュールでimportするだけで導入可能。豊富なドキュメントとコミュニティミドルウェアが利用できる。

---

### 14. [etcd-io/etcd](https://github.com/etcd-io/etcd)

> Distributed reliable key-value store for the most critical data of a distributed system

- Language: Go
- Stars: 52,614
- Forks: 10,590
- Stars in 1週間: 209
- Category: 分散キーバリューストア
- Keywords: `etcd` `Raft` `分散システム` `キーバリューストア` `Kubernetes` `Go`
- Summary source: README

#### README要約

- 分散システムの最重要データ向けに設計された、分散型の信頼性の高いキーバリューストア。
- Raftコンセンサスアルゴリズムで高可用性の複製ログを管理し、gRPC API・自動TLS・秒間1万書き込みの性能を備える。
- Kubernetesなどと組み合わせて本番環境で広く利用され、設定情報やメタデータの保存を必要とする分散システム運用者が対象。
- OSX/Linux/Windows/Docker向けのビルド済みバイナリで導入可能。mainブランチは不安定な場合があるため安定版はリリースページから取得する。

---

### 15. [golang/go](https://github.com/golang/go)

> The Go programming language

- Language: Go
- Stars: 139,757
- Forks: 20,991
- Stars in 1週間: 635
- Category: プログラミング言語
- Keywords: `Go` `オープンソース` `プログラミング言語` `効率的` `信頼性` `BSDライセンス`
- Summary source: README

#### README要約

- Goはシンプルで信頼性が高く効率的なソフトウェアを構築するためのオープンソースプログラミング言語です。
- 公式バイナリ配布とソースからのインストールの両方をサポートし、BSDスタイルライセンスで配布されています。
- 効率的なソフトウェア開発を目指す開発者や、信頼性の高いシステムを構築したいプログラマーに適しています。
- 公式サイトからバイナリをダウンロードするか、対応するOS/アーキテクチャがない場合はソースからインストールできます。

---

### 16. [fleetdm/fleet](https://github.com/fleetdm/fleet)

> Open device management

- Language: Go
- Stars: 7,146
- Forks: 1,123
- Stars in 1週間: 65
- Category: デバイス管理プラットフォーム
- Keywords: `オープンソース` `MDM` `GitOps` `セキュリティ` `クロスプラットフォーム` `IT管理`
- Summary source: README

#### README要約

- Fleetは、ITおよびセキュリティチーム向けのオープンソースのデバイス管理プラットフォームです。
- MDM、パッチ適用、ソフトウェアデプロイ、監査証跡収集などを一元管理し、GitOpsやAPI、CLIで操作可能です。
- 数千台規模のデバイスを管理する組織を対象とし、Linux、macOS、Windows、Chromebooks、クラウド環境など多様なOSに対応しています。
- 無料版はMITライセンスで提供され、軽量でモジュール式の設計により、必要な機能のみを選択して利用できます。

---

### 17. [gohugoio/hugo](https://github.com/gohugoio/hugo)

> The world’s fastest framework for building websites.

- Language: Go
- Stars: 90,395
- Forks: 8,444
- Stars in 1週間: 134
- Category: 静的サイトジェネレーター
- Keywords: `Go` `静的サイト` `高速レンダリング` `テンプレート` `アセットパイプライン` `多言語対応`
- Summary source: README

#### README要約

- HugoはGoで書かれた高速かつ柔軟な静的サイトジェネレーターです。
- 高度なテンプレートシステムと高速なアセットパイプラインにより、サイト全体を数秒でレンダリングします。
- 企業サイト、ドキュメント、ポートフォリオ、ブログなど多様なサイト作成に利用されます。
- プリビルトバイナリやパッケージマネージャーからインストール可能で、ソースからビルドする場合はGo 1.27.0以降が必要です。

---

### 18. [Mag1cFall/AIStudio2API](https://github.com/Mag1cFall/AIStudio2API)

> 将AI Studio Playground和Build反代成API | AI Studio to OpenAI, Anthropic & Gemini Compatible API

- Language: Go
- Stars: 771
- Forks: 172
- Stars in 1週間: 191
- Category: APIプロキシ
- Keywords: `Google AI Studio` `OpenAI互換` `Anthropic互換` `Gemini` `Go` `リバースプロキシ`
- Summary source: README

#### README要約

- Google AI StudioのPlayground/BuildをOpenAI・Anthropic・Gemini互換APIに変換するGo製プロキシサービス。
- 複数アカウントの高並行処理、Camoufox/SpiderMonkeyによるWAA認証、4種類のAPIプロトコル（OpenAI Chat/Responses、Anthropic Messages、Gemini GenerateContent）をサポート。
- Claude CodeやCodexなどのAgentクライアント、SillyTavernなどのフロントエンドからAI Studioのモデルを利用したい開発者・ユーザー向け。
- Releasesから実行ファイルをダウンロードして起動し、管理画面でGoogleアカウントを追加後、http://127.0.0.1:2048をBase URLとして設定する。

---

### 19. [kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)

> Production-Grade Container Scheduling and Management

- Language: Go
- Stars: 128,880
- Forks: 45,751
- Stars in 1週間: 708
- Category: コンテナオーケストレーション
- Keywords: `Kubernetes` `コンテナ管理` `スケーリング` `CNCF` `Go` `マイクロサービス`
- Summary source: README

#### README要約

- Kubernetesは複数ホスト上でコンテナ化アプリケーションを管理するオープンソースシステムです。
- アプリケーションのデプロイ、保守、スケーリングの基本メカニズムを提供します。
- 本番ワークロードを運用する企業や、コンテナ技術の進化に関わりたい組織を対象としています。
- 利用にはkubernetes.ioのドキュメントを参照し、ライブラリとしての使用はサポートされていません。

---

### 20. [CarterPerez-dev/Cybersecurity-Projects](https://github.com/CarterPerez-dev/Cybersecurity-Projects)

> Building 70 Projects ranging from beginner to advanced so anyone can — learn from, build upon, use as a reference, or even copy directly. Owned by my cybersecurity company 👇

- Language: Go
- Stars: 9,288
- Forks: 1,361
- Stars in 1週間: 561
- Category: セキュリティ学習プロジェクト集
- Keywords: `サイバーセキュリティ` `学習プロジェクト` `認定資格ロードマップ` `ハンズオン` `Go` `AGPL 3.0`
- Summary source: README

#### README要約

- サイバーセキュリティ学習用の70のプロジェクト、認定資格ロードマップ、学習リソースを集めたリポジトリ。
- プロジェクトはFoundations（入門前）、Beginner、Intermediate、Advancedの4段階に分類され、ソースコードと学習用ドキュメントが付属する。
- 初めてプログラミングをする人から上級者までを対象とし、SOCアナリストやペンテスターなど10のキャリアパス向け認定ガイドも提供する。
- ライセンスはAGPL 3.0で、プロジェクトはPython、Go、C++など複数の言語で実装されている。

---
