+++
title = 'GitHub Trending 1週間レポート (go) - 2026/09/25'
date = 2026-09-25T23:51:28.530Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月25日 23:51:28
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 20
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語のリポジトリが独占する中、AIエージェント関連ツールとインフラ基盤が二大潮流を形成している。

- AIエージェント関連ツールがトレンドの中心となっており、コードレビュー、ナレッジ管理、実行ランタイム、開発環境など多様な領域で登場している。
- Go言語が全リポジトリを占めており、インフラ、DevOps、AIツールの実装言語として圧倒的な存在感を示している。
- 中国系テック企業（Alibaba、Tencent）発のAIツールが上位にランクインし、実践的なエンタープライズ向けソリューションとして注目を集めている。
- Kubernetesやコンテナ関連のインフラプロジェクトが複数ランクインし、クラウドネイティブ基盤への継続的な関心がうかがえる。
- MCP（Model Context Protocol）関連のツールやSDKが複数登場し、AIエージェントと外部システムの連携標準化が進んでいる。

### 主なテーマ

- **AIエージェント開発・運用基盤**: AIエージェントの実行環境、管理、設定を支援するツールが複数ランクイン。agent-substrate/substrateは高密度サンドボックス実行ランタイム、coder/coderはセルフホスト型開発環境、multica-ai/multicaは26種類のエージェントCLIを統合管理、Gentleman-Programming/gentle-aiは既存エージェントへの設定注入ツールであり、エージェントの実運用を支える基盤整備が進んでいる。（`agent-substrate/substrate`、`coder/coder`、`multica-ai/multica`、`Gentleman-Programming/gentle-ai`）
- **AIコードレビュー・ナレッジ管理**: LLMを活用したコードレビューとナレッジ管理の実用的なツールが上位に登場。alibaba/open-code-reviewは決定論的パイプラインとLLMエージェントのハイブリッド構成で行レベルのレビューを実現し、Tencent/WeKnoraはRAG・エージェント・Wikiの3モードで企業文書を検索・推論可能にする。いずれも大企業発で実戦投入を意識した設計が特徴。（`alibaba/open-code-review`、`Tencent/WeKnora`）
- **MCP（Model Context Protocol）エコシステム**: AIエージェントと外部システムを連携させるMCP関連のツールが複数登場。openai/tunnel-clientはプライベートMCPサーバーをChatGPT等に安全に接続し、modelcontextprotocol/go-sdkは公式Go SDKとして提供され、asciimoo/histerもMCP経由での検索に対応している。MCPがAIツール連携の標準として定着しつつある。（`openai/tunnel-client`、`modelcontextprotocol/go-sdk`、`asciimoo/hister`）
- **クラウドネイティブ・コンテナ基盤**: Kubernetesエコシステムの中核プロジェクトが複数ランクイン。kubernetes/kubernetes本体に加え、cilium/ciliumはeBPFベースのネットワーキング・セキュリティ、docker/composeはマルチコンテナ管理を提供し、コンテナオーケストレーションとその周辺技術への継続的な需要が示されている。（`kubernetes/kubernetes`、`cilium/cilium`、`docker/compose`）
- **監視・セキュリティ・ゲートウェイ**: インフラ監視とセキュリティスキャンの定番ツールが安定した人気を維持。prometheus/prometheusは時系列監視、henrygd/beszelは軽量サーバー監視、aquasecurity/trivyは包括的セキュリティスキャン、maximhq/bifrostは高性能AIゲートウェイを提供し、本番運用に不可欠なツール群として支持されている。（`prometheus/prometheus`、`henrygd/beszel`、`aquasecurity/trivy`、`maximhq/bifrost`）

### 補足的な観察

- 全20リポジトリがGo言語で実装されており、インフラ、DevOps、AIツールの領域でGoの支配的な地位が確認できる。
- スター獲得数の上位はalibaba/open-code-review（6,920）、Tencent/WeKnora（3,749）、coder/coder（2,062）で、いずれもAI関連ツールが占めている。
- kubernetes/kubernetes（196）、golang/go（194）、docker/compose（79）などの成熟した基盤プロジェクトは新興AIツールと比較してスター獲得数が少なく、トレンドの重心がAI応用層に移っている。
- 中国発のリポジトリ（alibaba/open-code-review、Tencent/WeKnora、guohuiyuan/go-music-dl、v2rayA/v2rayA）が4件ランクインし、実用的なツール開発で中国コミュニティの存在感が高まっている。

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 20 |

## Repository一覧

### 1. [alibaba/open-code-review](https://github.com/alibaba/open-code-review)

> Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

- Language: Go
- Stars: 41,322
- Forks: 2,970
- Stars in 1週間: 6,920
- Category: AIコードレビューツール
- Keywords: `コードレビュー` `LLMエージェント` `CLI` `Git差分` `CI/CD` `Alibaba`
- Summary source: README

#### README要約

- Alibaba発のAIコードレビューCLIツールで、Git差分をLLMエージェントに送信し、行レベルの精度で構造化されたレビューコメントを生成する。
- 決定論的パイプラインとLLMエージェントのハイブリッド構成で、ファイル選定・バンドル化・ルールマッチングを工学的に保証し、NPEやSQLインジェクション等の多言語ルールセットを内蔵する。
- 大規模な変更セットやCIパイプラインで高精度なレビューを必要とする開発者・チーム向けで、ocr scanによる差分なしの全ファイル監査にも対応する。
- npmでグローバルインストール後、Git 2.41以上とLLMプロバイダ（OpenAI/Anthropic互換）の設定が必要。Delegation ModeではOCR側のAPIキー不要で既存AIエージェントに委譲可能。

---

### 2. [Tencent/WeKnora](https://github.com/Tencent/WeKnora)

> Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

- Language: Go
- Stars: 30,071
- Forks: 4,035
- Stars in 1週間: 3,749
- Category: LLMナレッジ基盤・RAGプラットフォーム
- Keywords: `RAG` `エージェント` `ナレッジベース` `Docker Compose` `MCP` `RBAC`
- Summary source: README

#### README要約

- Tencent製のオープンソースLLMナレッジフレームワークで、企業文書の理解・意味検索・推論を行い、チームの文書を検索・推論・最新化できるようにする。
- RAG検索、マルチステップタスクのエージェント、知識整理Wikiの3モードを同一ナレッジベース上で提供し、Docker/E2Bサンドボックス実行のスキル、ブラウザ操作、MCP連携、長期記憶、Feishu/Confluence/Notion等の自動同期、27社のモデルベンダーに対応する。
- 社内文書のQ&Aやナレッジ管理を行いたい企業・チーム向けで、WeCom/Slack等のIM連携、Web埋め込み、RBAC権限管理、Langfuseトレーシングなどの運用機能を備える。
- Docker Compose・Helm・単一バイナリLiteで導入可能（MITライセンス）。本番運用では公開ネットワークへの直接公開を避け、ファイアウォール設定と定期更新が強く推奨される。

---

### 3. [agent-substrate/substrate](https://github.com/agent-substrate/substrate)

> Agent Substrate: the core system

- Language: Go
- Stars: 3,805
- Forks: 443
- Stars in 1週間: 1,806
- Category: エージェント実行ランタイム
- Keywords: `エージェント` `サンドボックス` `Kubernetes` `ランタイム` `高密度` `ステートフル`
- Summary source: README

#### README要約

- Agent Substrateは、多数のサンドボックスを高密度で実行するためのセキュアなエージェント実行ランタイムです。
- アクターのライフサイクル管理、ワーカーへの割り当て、トラフィックルーティングを提供し、Kubernetes上で動作します。
- AIエージェントやステートフルなアプリケーションをスケールさせたい開発者やインフラストラクチャー管理者を対象としています。
- pre-1.0のため後方互換性は保証されておらず、APIや動作が大きく変更される可能性があります。

---

### 4. [coder/coder](https://github.com/coder/coder)

> Secure environments for developers and their agents

- Language: Go
- Stars: 16,693
- Forks: 1,590
- Stars in 1週間: 2,062
- Category: 開発環境プラットフォーム
- Keywords: `セルフホスト` `クラウド開発環境` `AIエージェント` `Terraform` `リモート開発` `Go`
- Summary source: README

#### README要約

- Coderは、クラウド開発環境とAIコーディングエージェントをセルフホストするためのプラットフォームです。
- Terraformでワークスペースを定義し、Wireguardトンネルで安全に接続し、未使用時は自動停止してコストを削減します。
- 開発者のオンボーディングを迅速化し、AIエージェントにコーディング作業を委任したいチームや組織を対象としています。
- インストールスクリプトで手軽に開始できますが、本番環境ではPostgreSQL 13以降と外部アクセスURLの設定が必要です。

---

### 5. [asciimoo/hister](https://github.com/asciimoo/hister)

> Your own search engine

- Language: Go
- Stars: 5,705
- Forks: 244
- Stars in 1週間: 1,889
- Category: プライベート検索エンジン
- Keywords: `全文検索` `プライバシー` `ブラウザ拡張` `MCP対応` `セマンティック検索` `マルチユーザー`
- Summary source: README

#### README要約

- Histerは訪問したWebページや保存したファイルを全文検索できるプライベート検索エンジンです。
- ブラウザ拡張で自動インデックス化し、Web・ターミナル・MCP経由のAIアシスタントから検索できます。
- 個人の情報再発見や、ブラウザ履歴・ブックマーク・ローカルファイルの一元検索に適しています。
- バイナリをダウンロードして起動するだけで設定不要ですが、セマンティック検索は外部エンドポイント設定が必要です。

---

### 6. [kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)

> Production-Grade Container Scheduling and Management

- Language: Go
- Stars: 127,994
- Forks: 45,180
- Stars in 1週間: 196
- Category: コンテナオーケストレーション
- Keywords: `Kubernetes` `コンテナ管理` `オーケストレーション` `マイクロサービス` `CNCF` `Go`
- Summary source: README

#### README要約

- Kubernetes（K8s）は、複数のホストにまたがるコンテナ化されたアプリケーションを管理するオープンソースシステムです。
- アプリケーションのデプロイ、メンテナンス、スケーリングの基本的な仕組みを提供し、GoogleのBorgシステムの経験とコミュニティのベストプラクティスに基づいています。
- コンテナパッケージ化、動的スケジューリング、マイクロサービス指向の技術を扱う企業や開発者を対象とし、CNCFによってホストされています。
- 利用開始にはkubernetes.ioのドキュメントを参照し、開発にはGoまたはDocker環境が必要です。ライブラリとしての使用は公開コンポーネントのみサポートされています。

---

### 7. [caddyserver/caddy](https://github.com/caddyserver/caddy)

> Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS

- Language: Go
- Stars: 76,080
- Forks: 5,001
- Stars in 1週間: 261
- Category: Webサーバー
- Keywords: `HTTPS` `TLS` `HTTP/3` `自動HTTPS` `Go` `拡張可能`
- Summary source: README

#### README要約

- CaddyはデフォルトでTLSを使用する拡張可能なサーバープラットフォームで、HTTP/1.1、HTTP/2、HTTP/3をサポートするマルチプラットフォームWebサーバーです。
- Caddyfileによる簡単な設定、ネイティブJSON設定、JSON APIによる動的設定が可能で、ZeroSSLとLet's Encryptによる自動HTTPS、クラスタ内での他インスタンスとの連携、マルチ発行者フォールバック、ECHサポートを備えています。
- 本番環境対応済みで数兆のリクエストを処理し数百万のTLS証明書を管理した実績があり、数十万サイトへのスケーリングが実証されているため、企業や個人のWebサーバー運用に適しています。
- GitHub Releasesから実行ファイルをダウンロードしてPATHに配置するのが最も簡単な導入方法で、ソースからビルドする場合はGo 1.25.0以降が必要です。

---

### 8. [multica-ai/multica](https://github.com/multica-ai/multica)

> Make humans and AI agents work as one team — open-source and self-hostable.

- Language: Go
- Stars: 51,353
- Forks: 6,661
- Stars in 1週間: 1,081
- Category: AIエージェント管理プラットフォーム
- Keywords: `AIエージェント` `ワークスペース` `セルフホスト` `開発効率化` `チーム協働` `オープンソース`
- Summary source: README

#### README要約

- Multicaは、AIコーディングエージェントをチームメイトのように扱えるソースアベイラブルなワークスペースです。
- 26種類のエージェントCLIに対応し、イシューの割り当てから進捗報告、レビュー依頼までを一つのボード上で管理できます。
- 複数のAIエージェントと人間のチームメイトを効率的に協働させたい開発チームや、エージェントの管理コストを削減したいユーザーに適しています。
- セルフホストが可能で、Docker ComposeやHelmを使って自身のインフラ上で運用できます。利用には対応するエージェントCLIのインストールと認証が必要です。

---

### 9. [golang/go](https://github.com/golang/go)

> The Go programming language

- Language: Go
- Stars: 139,014
- Forks: 20,447
- Stars in 1週間: 194
- Category: プログラミング言語
- Keywords: `Go` `オープンソース` `コンパイラ` `BSDライセンス` `公式バイナリ` `コントリビューション`
- Summary source: README

#### README要約

- Goはシンプルで信頼性が高く効率的なソフトウェアを構築しやすくするオープンソースのプログラミング言語です。
- 公式リポジトリはgo.googlesource.comにあり、GitHubのgolang/goはミラーとして提供されています。
- 公式バイナリ配布はgo.dev/dlから入手でき、対応環境がない場合はソースからインストールできます。
- ソースはBSDスタイルライセンスで配布され、貢献時はガイドラインを確認し、Issueはバグ報告と提案専用です。

---

### 10. [docker/compose](https://github.com/docker/compose)

> Define and run multi-container applications with Docker

- Language: Go
- Stars: 38,225
- Forks: 5,844
- Stars in 1週間: 79
- Category: コンテナオーケストレーション
- Keywords: `Docker` `マルチコンテナ` `compose.yaml` `コンテナ管理` `Go` `Docker Desktop`
- Summary source: README

#### README要約

- Docker Composeは、Composeファイル形式で定義されたマルチコンテナアプリケーションをDocker上で実行するためのツールです。
- compose.yamlファイルでアプリケーションを構成する複数のコンテナの設定を定義し、docker compose upコマンド一つでアプリケーション全体を起動できます。
- 複数のコンテナで構成されるアプリケーションを開発・運用するユーザーが、環境を再現可能にし、コンテナ群を一括管理する用途に適しています。
- WindowsとmacOSではDocker Desktopに含まれ、Linuxではリリースページからバイナリをダウンロードしてcli-pluginsディレクトリに配置して導入します。

---

### 11. [cilium/cilium](https://github.com/cilium/cilium)

> eBPF-based Networking, Security, and Observability

- Language: Go
- Stars: 25,554
- Forks: 4,105
- Stars in 1週間: 362
- Category: ネットワーキング・セキュリティ
- Keywords: `eBPF` `Kubernetes` `CNI` `ネットワークポリシー` `ロードバランシング` `サービスメッシュ`
- Summary source: README

#### README要約

- CiliumはeBPFベースのデータプレーンを持つKubernetes向けネットワーキング・可観測性・セキュリティソリューションです。
- L3-L7のネットワークポリシー、分散ロードバランシング、クラスタメッシュ、サービスメッシュなどの機能を提供します。
- Kubernetesクラスタの運用者や、マルチクラスタ・ハイブリッド環境でのセキュアな接続を必要とするユーザーが対象です。
- AMD64とAArch64アーキテクチャ向けにイメージが配布され、最新3つのマイナーバージョンが安定版として保守されています。

---

### 12. [openai/tunnel-client](https://github.com/openai/tunnel-client)

> Customer-run client for Secure MCP Tunnel: connect private or localhost MCP servers to ChatGPT, Codex, the Responses API, and AgentKit without exposing them to the public internet.

- Language: Go
- Stars: 493
- Forks: 95
- Stars in 1週間: 83
- Category: MCPトンネルクライアント
- Keywords: `MCP` `トンネル` `ChatGPT` `Codex` `Go` `プライベートネットワーク`
- Summary source: README

#### README要約

- プライベートやlocalhost上のMCPサーバーを、公開インターネットに露出せずChatGPT・Codex・Responses API・AgentKitに接続するSecure MCP Tunnelの顧客側クライアント。
- OpenAIホストのトンネルエンドポイント経由で接続し、/healthz・/readyz・/metrics・/uiを備えたデーモンとして動作し、Go SDKによるプロセス内埋め込みも可能。
- ラップトップ、VM、Kubernetes、プライベートネットワーク上のMCPサーバーをOpenAI製品から利用したい運用者や開発者が対象。
- macOSではHomebrew（openai/tools/tunnel-client）でのインストールが推奨され、実行にはランタイムAPIキーとトンネルIDが必要。

---

### 13. [aquasecurity/trivy](https://github.com/aquasecurity/trivy)

> Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more

- Language: Go
- Stars: 38,076
- Forks: 711
- Stars in 1週間: 116
- Category: セキュリティスキャナー
- Keywords: `脆弱性スキャン` `SBOM` `コンテナセキュリティ` `Kubernetes` `IaC` `シークレット検出`
- Summary source: README

#### README要約

- Trivyはコンテナイメージ、ファイルシステム、Gitリポジトリ、VMイメージ、Kubernetesをスキャンする包括的なセキュリティスキャナーです。
- OSパッケージや依存関係のSBOM、既知の脆弱性（CVE）、IaCの問題や設定ミス、機密情報やシークレット、ソフトウェアライセンスを検出します。
- DevOpsエンジニアやセキュリティ担当者がCI/CDパイプラインや開発環境でセキュリティチェックを行う際に使用します。
- brewやDocker、バイナリダウンロードで導入可能で、GitHub ActionsやKubernetes operator、VS Code拡張など豊富な統合が用意されています。

---

### 14. [v2rayA/v2rayA](https://github.com/v2rayA/v2rayA)

> A web client for its own Xray-based core with global transparent proxy on Linux, Windows and macOS.

- Language: Go
- Stars: 15,613
- Forks: 1,607
- Stars in 1週間: 54
- Category: ネットワークツール
- Keywords: `v2rayA` `Xray` `透過プロキシ` `VMess` `VLESS` `Shadowsocks`
- Summary source: README

#### README要約

- v2rayAは、Xrayベースの独自コアを備えたWebクライアントで、Linux、Windows、macOS上でグローバルな透過プロキシを提供します。
- VMess、VLESS、Shadowsocks、Trojan、Hysteria2、TUIC、Juicity、AnyTLS、WireGuard、SOCKS5、HTTP(S)などのプロトコルをサポートし、サブスクリプションや共有リンクからノードをインポートしてグループ化し、最低遅延のメンバーを選択したり、RoutingAでトラフィックを分割したりします。
- ブラウザからアクセス可能で、ルーターやNAS上でも動作し、プロキシ設定を必要とするユーザーや、透過プロキシを介してトラフィックを管理したいユーザーに適しています。
- インストールには、v2rayaと同じバージョンのv2raya_coreが必要で、geoip.datやgeosite.datなどのルールデータも必要です。Linuxではroot権限とiptables/nftables、Windowsでは管理者権限、macOSではroot権限が必要な場合があります。

---

### 15. [Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai)

> Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.

- Language: Go
- Stars: 7,295
- Forks: 797
- Stars in 1週間: 306
- Category: AIエージェント設定ツール
- Keywords: `AIコーディングエージェント` `永続メモリ` `ODD` `RDD` `MCP` `Go`
- Summary source: README

#### README要約

- Claude Code、Cursor、OpenCode、Codex、Piなど既存のAIコーディングエージェントに永続メモリ・ワークフロー・検証機能を設定するGo製CLIツール。
- Engramによるプロジェクトコンテキストの蓄積、ODD（Organic-Driven Development）による作業管理、Strict TDD、RDDによるレビュー証跡の固定などを提供する。
- AIエージェントを日常的に使う開発者やチームが、エージェントを乗り換えずに記憶・ワークフロー・検証の品質を底上げする用途に向く。
- Homebrew、curlスクリプト、go installで導入でき、エージェント本体はインストールされず、設定変更前にバックアップが取得される。RDDはデフォルト有効で無効化可能。

---

### 16. [modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk)

> The official Go SDK for Model Context Protocol servers and clients. Maintained in collaboration with Google.

- Language: Go
- Stars: 5,149
- Forks: 551
- Stars in 1週間: 36
- Category: MCP SDK
- Keywords: `Model Context Protocol` `Go SDK` `MCPサーバー` `MCPクライアント` `OAuth` `JSON-RPC`
- Summary source: README

#### README要約

- Model Context Protocol（MCP）の公式Go SDKで、Googleと共同でメンテナンスされている。
- MCPクライアントとサーバーの構築用API、独自トランスポート向けJSON-RPC、OAuthプリミティブと拡張の各パッケージで構成される。
- GoでMCPサーバーやクライアントを開発する開発者向けで、ツール追加やstdio/コマンド経由の接続例が提供される。
- MCP仕様の複数バージョンをサポートし、roots/sampling/loggingは2026-07-28で非推奨だが移行期間中は互換サポートされる。

---

### 17. [prometheus/prometheus](https://github.com/prometheus/prometheus)

> The Prometheus monitoring system and time series database.

- Language: Go
- Stars: 66,228
- Forks: 10,861
- Stars in 1週間: 127
- Category: 監視・モニタリング
- Keywords: `Prometheus` `時系列データベース` `メトリクス収集` `PromQL` `アラート` `CNCF`
- Summary source: README

#### README要約

- PrometheusはCNCFプロジェクトのシステム・サービス監視システムで、設定したターゲットから定期的にメトリクスを収集し、ルール評価やアラート通知を行う。
- 多次元データモデルと柔軟なクエリ言語PromQLを備え、HTTPプル型収集、サービスディスカバリ、ダッシュボード表示、フェデレーションをサポートする。
- インフラやサービスの監視・時系列データ分析を行うSREや運用担当者、開発者向けのツール。
- 推奨は公式サイトのコンパイル済みバイナリかDockerイメージでの導入。ソースからビルドする場合はGo・NodeJS・npmが必要。

---

### 18. [maximhq/bifrost](https://github.com/maximhq/bifrost)

> Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.

- Language: Go
- Stars: 8,363
- Forks: 1,290
- Stars in 1週間: 189
- Category: AIゲートウェイ
- Keywords: `AI Gateway` `OpenAI互換` `マルチプロバイダー` `負荷分散` `エンタープライズ` `高性能`
- Summary source: README

#### README要約

- Bifrostは、OpenAI互換の単一APIを通じて23以上のAIプロバイダーへの統一アクセスを提供する高性能AIゲートウェイです。
- 自動フェイルオーバー、負荷分散、セマンティックキャッシュ、ガバナンス機能を備え、5,000 RPSで11µsのオーバーヘッドを実現します。
- 本番環境でAIシステムを運用するエンタープライズチームや、複数のAIプロバイダーを統合管理したい開発者に適しています。
- npxまたはDockerで即座に起動でき、Web UIでの設定が可能です。Go SDKや既存SDKのドロップイン置換にも対応しています。

---

### 19. [henrygd/beszel](https://github.com/henrygd/beszel)

> Lightweight server monitoring with historical data, docker stats, and alerts.

- Language: Go
- Stars: 25,750
- Forks: 1,045
- Stars in 1週間: 276
- Category: サーバー監視ツール
- Keywords: `サーバー監視` `Docker統計` `軽量` `アラート` `PocketBase` `Go`
- Summary source: README

#### README要約

- BeszelはDocker統計、履歴データ、アラート機能を備えた軽量なサーバー監視プラットフォームです。
- ハブとエージェントの2つのコンポーネントで構成され、CPU、メモリ、ディスク、ネットワークなど多様なメトリクスを収集・可視化します。
- 複数ユーザーやOAuth認証に対応し、自動バックアップやS.M.A.R.T.によるディスク健全性監視も可能です。
- PocketBase上に構築されており、公式サイトのクイックスタートガイドに従うことで数分で導入・運用を開始できます。

---

### 20. [guohuiyuan/go-music-dl](https://github.com/guohuiyuan/go-music-dl)

> 一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：755087923

- Language: Go
- Stars: 4,757
- Forks: 458
- Stars in 1週間: 396
- Category: 音楽ダウンロードツール
- Keywords: `Go` `音楽検索` `Web UI` `TUI` `デスクトップアプリ` `ロスレス音源`
- Summary source: README

#### README要約

- Go言語製の音楽検索・ダウンロードツールで、Web、TUI、デスクトップアプリの3モードで利用できる。
- 複数プラットフォームの横断検索、歌単・アルバム解析、ロスレス音源対応、歌詞・カバー取得、ローカル音楽管理などを備える。
- 音楽を一括検索・試聴・保存したいユーザーや、プレイリスト整理、ローカルライブラリ管理、WebDAV同期を行いたい用途に向く。
- デスクトップ版はReleasesから取得でき、Webは./music-dl web、TUIは./music-dl -kで起動。FFmpeg導入やCookie設定、AGPL-3.0と利用上の注意に留意する。

---
