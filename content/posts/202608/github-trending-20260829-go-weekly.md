+++
title = 'GitHub Trending 1週間レポート (go) - 2026/08/29'
date = 2026-08-29T03:06:54.368Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月29日 3:06:54
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 20
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のAIインフラ（LLMゲートウェイ・ルーター・エージェント基盤）がトレンドを席巻し、セルフホスト型ツールも堅調に支持されている

- 一覧の全20件がGo言語で書かれており、言語分布が完全にGoに集中している
- LLM関連のインフラ層（APIゲートウェイ、モデルルーター、エージェント基盤）が多数を占め、workweave/router（1369スター）やWei-Shaw/sub2api（1326スター）が高い伸びを記録
- asciimoo/hister（1214スター）やglanceapp/glanceなど、プライバシー重視のセルフホスト型ツールも強い支持を得ている
- MCP（Model Context Protocol）関連がopenai/tunnel-client、google/sam、higress-group/higressなど複数件に登場し、エージェント連携の標準化への関心がうかがえる
- Tencent、Google、OpenAI、Microsoft、GitHubなど大手企業発のプロジェクトと個人・コミュニティ発のプロジェクトが混在している

### 主なテーマ

- **LLMゲートウェイ・モデルルーティング**: 複数LLMの統合・変換・振り分けを行うゲートウェイ/ルーターが最も多くのスターを集めている。workweave/routerは1369スターで50ms未満のルーティングと40〜70%のコスト削減を謳い、Wei-Shaw/sub2apiは1326スターでサブスクリプション共有によるコスト分摊を提供。QuantumNous/new-api（891スター）はOpenAI/Claude/Gemini互換変換、vllm-project/semantic-router（172スター）はセマンティックルーティングを担う。コスト最適化とマルチモデル運用の需要が背景にある。（`workweave/router`、`Wei-Shaw/sub2api`、`QuantumNous/new-api`、`vllm-project/semantic-router`、`higress-group/higress`）
- **AIエージェント基盤・MCP連携**: 自律型エージェントの実行・接続基盤が複数登場。google/sam（408スター）はP2Pのエージェントメッシュ、openai/tunnel-clientはプライベートMCPサーバーをChatGPTやCodexに安全に接続するクライアント、agent-substrate/substrateは大規模エージェント向け高密度ランタイム、github/gh-awはGitHub Actions上でAIエージェントを実行するワークフロー基盤を提供する。MCPを介したエージェントとツールの接続が共通の関心事となっている。（`google/sam`、`openai/tunnel-client`、`agent-substrate/substrate`、`github/gh-aw`）
- **セルフホスト型ナレッジ・検索・ダッシュボード**: 自分のインフラでデータを管理するツールが高い支持を得ている。asciimoo/histerは1214スターで訪問ページを全文検索できるプライベート検索エンジン、Tencent/WeKnora（582スター）はRAG・エージェント・Wiki化を備えたセルフホスト可能な知識管理基盤、glanceapp/glance（188スター）はフィードを集約するセルフホストダッシュボード。プライバシーとデータ主権への意識が反映されている。（`asciimoo/hister`、`Tencent/WeKnora`、`glanceapp/glance`）
- **ネットワーク・プロキシ・認証インフラ**: 通信とアクセス制御の基盤ツールも安定した人気がある。MHSanaei/3x-ui（481スター）はXrayの多プロトコル管理パネル、authelia/authelia（98スター）はOpenID認定のSSO/多要素認証ポータル、containerd/containerd（72スター）はCNCF卒業のコンテナランタイム。いずれも既存インフラに組み込んで使う実用的な性質が特徴。（`MHSanaei/3x-ui`、`authelia/authelia`、`containerd/containerd`）
- **開発者向けツール・ユーティリティ**: 開発体験を向上させるツール群も散見される。microsoft/TypeScript（432スター）は言語本体として継続的な注目を集め、golangci/golangci-lintはGoのリンターランナー、bjarneo/cliamp（503スター）はWinamp風ターミナル音楽プレイヤー、evcc-io/evccは太陽光発電連携のEV充電コントローラー、openimsdk/open-im-serverはIM基盤を提供する。（`microsoft/TypeScript`、`golangci/golangci-lint`、`bjarneo/cliamp`、`evcc-io/evcc`、`openimsdk/open-im-server`）

### 補足的な観察

- 言語分布は全20件中20件がGoで、他言語のリポジトリは一件も含まれていない
- スター獲得数の上位3件（workweave/router: 1369、Wei-Shaw/sub2api: 1326、asciimoo/hister: 1214）はいずれもLLMコスト最適化またはプライベートデータ管理に関わるプロジェクト
- openai/tunnel-client（32スター）やopenimsdk/open-im-server（24スター）など、大手・既知プロジェクトでも伸びが小さいものがあり、期間中の注目度にはばらつきがある
- MCPをキーワードに持つリポジトリがopenai/tunnel-client、google/sam、higress-group/higress、asciimoo/histerの4件あり、エージェントとツール間の接続規格への関心の高まりがうかがえる

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 20 |

## Repository一覧

### 1. [Tencent/WeKnora](https://github.com/Tencent/WeKnora)

> Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

- Language: Go
- Stars: 20,868
- Forks: 3,000
- Stars in 1週間: 582
- Category: LLM知識管理プラットフォーム
- Keywords: `RAG` `LLM` `エージェント` `Wiki` `Go` `セルフホスト`
- Summary source: README

#### README要約

- WeKnoraは、LLMを活用したオープンソースのエンタープライズ向け知識管理フレームワークです。
- RAGによる高速Q&A、複雑なタスクを自律的に処理するReActエージェント、文書を自動でWiki化するWikiモードの3つの中核機能を備えています。
- 社内文書の検索や知識基盤の構築を行いたい企業や開発者向けで、FeishuやNotionなど多様なデータソースと連携可能です。
- Dockerによるセルフホストが可能ですが、本番環境では公開ネットワークへの直接公開を避け、内部ネットワークでの運用が推奨されています。

---

### 2. [MHSanaei/3x-ui](https://github.com/MHSanaei/3x-ui)

> Xray panel supporting multi-protocol multi-user expire day & traffic & IP limit (Vmess, Vless, Trojan, ShadowSocks, Wireguard, Hysteria, Tunnel, Mixed, HTTP, Tun, MTProto)

- Language: Go
- Stars: 45,515
- Forks: 9,879
- Stars in 1週間: 481
- Category: プロキシ管理パネル
- Keywords: `Xray` `VLESS` `VMess` `Trojan` `Webパネル` `VPN`
- Summary source: README

#### README要約

- Xray-coreサーバーを管理するためのオープンソースWebコントロールパネルで、単一VPSからマルチノードまで対応する。
- VLESS、VMess、Trojan、Shadowsocks、WireGuard、Hysteria2など多プロトコル対応、クライアントごとのトラフィック制限・有効期限・IP制限、サブスクリプション、Telegramボット、REST APIを備える。
- プロキシ/VPNサーバーを個人で構築・運用したいユーザー向けで、X-UIプロジェクトの拡張フォークとして開発されている。
- インストールスクリプトまたはDockerで導入でき、SQLiteまたはPostgreSQLを選択可能。個人利用のみを想定し、違法目的や本番環境での使用は禁止と明記されている。

---

### 3. [google/sam](https://github.com/google/sam)

> SAM Sovereign Agent Mesh

- Language: Go
- Stars: 776
- Forks: 113
- Stars in 1週間: 408
- Category: 分散AIエージェントネットワーク
- Keywords: `P2Pネットワーク` `ゼロトラスト` `自律型AIエージェント` `MCP` `Kubernetes` `libp2p`
- Summary source: README

#### README要約

- SAMは自律型AIエージェント向けのスマートネットワークで、ノードが自動的にP2Pネットワークを構築するゼロコンフィグ機能を提供する。
- ゼロトラスト認証、軽量ノードによる自己修復接続、環境非依存の暗号化IDによるポータビリティを備え、コントロールプレーン・ルーター・ノードの3層アーキテクチャで構成される。
- Google GeminiやClaudeなどのAIエージェントを接続してツールを動的に発見・呼び出す用途や、パブリックテストネットでの検証、Kubernetesでの本番運用を対象とする。
- バイナリまたはDockerでインストール可能で、公開テストネットへの接続は数分で完了するが、Google公式サポート製品ではない点に注意が必要。

---

### 4. [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api)

> Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。

- Language: Go
- Stars: 39,758
- Forks: 8,216
- Stars in 1週間: 1,326
- Category: AI APIゲートウェイ
- Keywords: `サブスクリプション共有` `API中継` `Claude` `OpenAI` `Gemini` `コスト分摊`
- Summary source: README

#### README要約

- Claude、OpenAI、Gemini、Grokなどのサブスクリプション枠を統合し、APIとして配分するオープンソースのAI APIゲートウェイプラットフォーム。
- サブスク枠の共有（拼车）によるコスト分摊、複数アカウントのフェイルオーバー、Antigravityアカウント向け専用エンドポイントやハイブリッドスケジューリングを備える。
- Claude CodeやGemini CLIなどのツールを使う開発者や、サブスクリプションを共同利用してコストを抑えたいユーザー・チーム向け。
- Go製バックエンドとVue 3フロントエンドで構成され、Docker Composeやワンクリックスクリプトで導入可能。上流プロバイダの利用規約違反リスクがあり、商用利用は認められていない点に注意。

---

### 5. [workweave/router](https://github.com/workweave/router)

> Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.

- Language: Go
- Stars: 2,446
- Forks: 72
- Stars in 1週間: 1,369
- Category: LLMモデルルーター
- Keywords: `モデルルーティング` `LLMコスト削減` `エージェントシステム` `Go` `マルチプロバイダー` `APIゲートウェイ`
- Summary source: README

#### README要約

- エージェントシステム向けのモデルルーターで、各プロンプトを50ms未満で適切なモデルに振り分ける。
- Anthropic Messages、OpenAI Chat Completions、Gemini generateContentの各API形式をサポートし、エンドポイント経由でルーティングを行う。
- LLMのコストを40〜70%削減したい開発者や、複数モデルを使い分けるエージェントシステムの運用者が対象。
- エンドポイントの変更だけで導入可能。アップストリームプロバイダーキーとルーターキーの2種類を使い分ける必要がある。

---

### 6. [openai/tunnel-client](https://github.com/openai/tunnel-client)

> Customer-run client for Secure MCP Tunnel: connect private or localhost MCP servers to ChatGPT, Codex, the Responses API, and AgentKit without exposing them to the public internet.

- Language: Go
- Stars: 317
- Forks: 64
- Stars in 1週間: 32
- Category: 開発者ツール
- Keywords: `MCP` `トンネル` `ChatGPT` `Codex` `プライベートネットワーク` `Go`
- Summary source: README

#### README要約

- プライベートやlocalhostのMCPサーバーをChatGPT、Codex、Responses API、AgentKitに公開せずに接続するためのクライアントツール。
- OpenAIがホストするMCPトンネルエンドポイントを介して接続し、/healthz、/readyz、/metrics、/uiなどの運用監視機能を提供する。
- ラップトップ、VM、Kubernetesクラスタ、プライベートネットワーク上のMCPサーバーをOpenAI製品から利用したいユーザー向け。
- Homebrewでインストール可能で、tunnel-client help quickstartでガイド付きセットアップを開始できる。

---

### 7. [QuantumNous/new-api](https://github.com/QuantumNous/new-api)

> A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management.

- Language: Go
- Stars: 46,708
- Forks: 11,098
- Stars in 1週間: 891
- Category: LLMゲートウェイ
- Keywords: `LLMゲートウェイ` `API変換` `OpenAI互換` `Claude` `Gemini` `課金管理`
- Summary source: README

#### README要約

- 複数のLLMを統合し、OpenAI・Claude・Gemini互換形式に変換して提供する次世代AIゲートウェイおよび資産管理システム。
- チャネルの重み付けルーティング、失敗時の自動リトライ、ユーザー単位のレート制限、トークン管理や課金・使用量分析機能を備える。
- 個人や企業が複数モデルを一元管理し、組織認証やコスト計算、プライベートデプロイを行う用途を想定している。
- Docker ComposeまたはDockerで導入でき、AGPLv3ライセンスのため公開サービス運用時は法的義務と帰属表示の遵守が必要。

---

### 8. [github/gh-aw](https://github.com/github/gh-aw)

> GitHub Agentic Workflows

- Language: Go
- Stars: 5,031
- Forks: 514
- Stars in 1週間: 67
- Category: AIワークフロー自動化ツール
- Keywords: `GitHub Actions` `AIエージェント` `ワークフロー自動化` `GitHub CLI拡張` `Markdown` `セキュリティ`
- Summary source: README

#### README要約

- MarkdownとYAML frontmatterでAI駆動のリポジトリ自動化を定義し、GitHub Actions経由でAIエージェントを安全に実行するGitHub CLI拡張です。
- gh aw compileコマンドでワークフローを検証・標準的なGitHub Actionsワークフローに変換し、GitHub Copilot、Claude Code、OpenAI Codexなど複数のAIエンジンをサポートします。
- Issueトリアージ、PRレビュー、CI失敗調査、ドキュメント保守など、推論や解釈が必要なタスクを既存のCI/CDを補完する形で自動化したい開発者向けです。
- gh extension install github/gh-awでインストール可能。エージェントジョブはデフォルトで読み取り専用・サンドボックス化され、書き込みは検証済みsafe-outputsジョブ経由で適用されますが、セキュリティ設定の確認と人間の監督が必須です。

---

### 9. [evcc-io/evcc](https://github.com/evcc-io/evcc)

> solar charging ☀️🚘

- Language: Go
- Stars: 7,154
- Forks: 1,480
- Stars in 1週間: 46
- Category: エネルギー管理
- Keywords: `EV充電` `太陽光発電` `ホームエネルギー管理` `Go` `オープンソース` `ホームオートメーション`
- Summary source: README

#### README要約

- evccは、クラウドサービスに依存せずローカルで動作する、拡張可能なEV充電コントローラー兼ホームエネルギー管理システムです。
- 多数のEV充電器、エネルギーメーター、車両、ヒートポンプ等に対応し、Modbus・HTTP・MQTT等のプラグインやREST/MQTT API、InfluxDB/Grafanaによるログ記録、Telegram等での通知機能を備えています。
- 太陽光発電を活用したEV充電や自宅のエネルギー管理を行いたいユーザー、Home AssistantやopenHABなどのホームオートメーションと連携したいユーザー向けです。
- 導入方法は公式ドキュメントを参照し、MITライセンスですが一部のスポンサー必須コンポーネントは対象外で、利用にはスポンサーシップトークンが必要な場合があります。

---

### 10. [vllm-project/semantic-router](https://github.com/vllm-project/semantic-router)

> A programmable Mixture-of-Models router for heterogeneous LLM inference

- Language: Go
- Stars: 5,389
- Forks: 851
- Stars in 1週間: 172
- Category: LLMルーティング
- Keywords: `Mixture-of-Models` `セマンティックルーティング` `LLM推論` `vLLM` `Go` `モデル選択`
- Summary source: README

#### README要約

- 異種LLMインフラ上でMixture-of-Modelsシステムを構築するためのプログラマブルなルーティングレイヤー。
- リクエストのシグナル、ユーザー設定、アプリケーションポリシーを評価し、各リクエストに適したモデルパスを選択または構成する。
- 品質、コスト、レイテンシ、プライバシー、安全性を改善したい開発者や、エッジ・プライベート・クラウドをまたぐ推論環境の運用者向け。
- curlによるインストールスクリプトで導入可能で、オンラインプレイグラウンドやドキュメントも提供されている。

---

### 11. [bjarneo/cliamp](https://github.com/bjarneo/cliamp)

> cliamp - Terminal music player inspired by winamp

- Language: Go
- Stars: 3,823
- Forks: 227
- Stars in 1週間: 503
- Category: ターミナル音楽プレイヤー
- Keywords: `Go` `ターミナル` `音楽プレイヤー` `Winamp` `マルチプラットフォーム` `ストリーミング`
- Summary source: README

#### README要約

- Winampにインスパイアされたレトロなターミナル音楽プレイヤー。
- ローカルファイル、ストリーム、ポッドキャスト、YouTube、Spotifyなど多様な音源に対応し、スペクトラムビジュアライザーやパラメトリックEQ、プレイリスト管理機能を備える。
- ターミナル環境で音楽を楽しみたいユーザーや、複数の音楽サービスを一つのツールで管理したいユーザー向け。
- curl、Homebrew、AUR、Nix、Goなどでインストール可能。LinuxではALSA開発ヘッダーが必要で、一部のコーデックやプロバイダーにはffmpegやyt-dlpが必要。

---

### 12. [microsoft/TypeScript](https://github.com/microsoft/TypeScript)

> TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

- Language: Go
- Stars: 110,756
- Forks: 13,771
- Stars in 1週間: 432
- Category: プログラミング言語
- Keywords: `TypeScript` `JavaScript` `型付け` `コンパイラ` `Microsoft` `オープンソース`
- Summary source: README

#### README要約

- TypeScriptはJavaScriptにオプションの型を追加した、アプリケーション規模のJavaScript向け言語です。
- 任意のブラウザ・ホスト・OSで動作する大規模JavaScriptアプリケーションを支援するツールを提供し、可読性の高い標準準拠のJavaScriptにコンパイルされます。
- 大規模なJavaScriptアプリケーションを開発する開発者が対象で、ブラウザやホストを問わず利用できます。
- npm install -D typescriptで安定版を導入でき、typescript@nextでナイトリービルドも利用可能です。

---

### 13. [golangci/golangci-lint](https://github.com/golangci/golangci-lint)

> Fast linters runner for Go

- Language: Go
- Stars: 19,330
- Forks: 1,622
- Stars in 1週間: 46
- Category: 開発ツール
- Keywords: `Go` `リンター` `静的解析` `並列処理` `CI/CD` `コード品質`
- Summary source: README

#### README要約

- golangci-lintはGo言語向けの高速なリンターランナーです。
- 複数のリンターを並列実行し、キャッシュを活用して高速化を実現しています。
- 100以上のリンターを内蔵し、YAML設定や主要なIDEとの統合をサポートしています。
- ローカル環境やCI/CDシステムへのインストールが可能で、ドキュメントは公式サイトで提供されています。

---

### 14. [containerd/containerd](https://github.com/containerd/containerd)

> An open and reliable container runtime

- Language: Go
- Stars: 21,216
- Forks: 4,079
- Stars in 1週間: 72
- Category: コンテナランタイム
- Keywords: `containerd` `コンテナランタイム` `CNCF` `Kubernetes` `CRI` `OCI`
- Summary source: README

#### README要約

- containerdはシンプルさ、堅牢性、移植性を重視した業界標準のコンテナランタイムです。
- LinuxとWindowsのデーモンとして動作し、イメージ転送・ストレージ、コンテナ実行・監視、低レベルのストレージとネットワーク接続など、コンテナライフサイクル全体を管理します。
- 開発者やエンドユーザーが直接使用するのではなく、より大きなシステムに組み込まれることを想定して設計されており、Kubernetesのコンテナランタイムとしても利用できます。
- CNCFの卒業プロジェクトで、実行にはruncとLinux 4.x以降のカーネルが必要です。ナイトリービルドは本番環境での使用が推奨されていません。

---

### 15. [agent-substrate/substrate](https://github.com/agent-substrate/substrate)

> Agent Substrate: the core system

- Language: Go
- Stars: 1,642
- Forks: 278
- Stars in 1週間: 85
- Category: エージェント基盤
- Keywords: `エージェントランタイム` `Kubernetes` `サンドボックス` `gVisor` `マイクロVM` `多重化`
- Summary source: README

#### README要約

- 大規模エージェントデプロイメント向けの高密度ランタイム環境を提供するシステム
- アクターのライフサイクル管理とサブ秒のサスペンド/レジューム、ワーカーへの多重化を実現
- AIエージェントやステートフルなアプリケーションを大規模に運用する開発者・インフラ担当者向け
- 早期開発段階で本番利用は非推奨、Kubernetes上で動作しGoとkubectlが必要

---

### 16. [higress-group/higress](https://github.com/higress-group/higress)

> 🤖 AI Gateway | AI Native API Gateway

- Language: Go
- Stars: 9,231
- Forks: 1,261
- Stars in 1週間: 79
- Category: APIゲートウェイ
- Keywords: `AI Gateway` `MCPサーバー` `Wasmプラグイン` `Kubernetes Ingress` `Envoy` `LLMプロキシ`
- Summary source: README

#### README要約

- IstioとEnvoyベースのクラウドネイティブAPIゲートウェイで、AIゲートウェイ機能を提供するCNCFサンドボックスプロジェクト。
- Go/Rust/JSで書けるWasmプラグインで拡張可能で、主要LLMプロバイダーへの統一接続、MCPサーバーホスティング、Ingressコントローラー、マイクロサービス/セキュリティゲートウェイ機能を備える。
- AIエージェントやLLM APIを統合管理したい開発者、Kubernetes上でIngressやGateway APIを運用するチーム、マイクロサービス連携やWAF認証を必要とする組織向け。
- Docker一発でローカル起動でき、K8sではHelmでデプロイ可能。リージョン別レジストリミラーが用意され、UIコンソール付きで即利用できる。

---

### 17. [asciimoo/hister](https://github.com/asciimoo/hister)

> Your own search engine

- Language: Go
- Stars: 3,195
- Forks: 146
- Stars in 1週間: 1,214
- Category: プライベート検索エンジン
- Keywords: `全文検索` `プライバシー` `ブラウザ拡張` `MCP` `セルフホスト` `Go`
- Summary source: README

#### README要約

- 訪問したWebページやローカルファイルを全文検索できるプライベート検索エンジンです。
- ブラウザ拡張で自動インデックス化し、Web・ターミナル・MCP経由のAIアシスタントから検索できます。
- プライバシー重視の個人ユーザーや、自分のインフラで検索環境を管理したい人向けです。
- バイナリをダウンロードして起動し、ブラウザ拡張を入れるだけで設定不要で始められます。

---

### 18. [authelia/authelia](https://github.com/authelia/authelia)

> The Single Sign-On Multi-Factor portal for web apps, now OpenID Certified™

- Language: Go
- Stars: 28,732
- Forks: 1,474
- Stars in 1週間: 98
- Category: 認証・SSO
- Keywords: `SSO` `二要素認証` `OpenID Connect` `WebAuthn` `リバースプロキシ` `Go`
- Summary source: README

#### README要約

- Webアプリケーション向けに二要素認証とシングルサインオン（SSO）を提供する、オープンソースの認証・認可サーバーです。
- OpenID Connect 1.0 / OAuth 2.0に対応し、WebAuthn（Passkeys）、TOTP、Duoプッシュ通知などの多様な認証方式をサポートしています。
- nginx、Traefik、Caddyなどのリバースプロキシと連携し、自宅サーバー（セルフホスト）や企業のKubernetes環境でアプリへのアクセス制御を行いたいユーザーに適しています。
- Docker、Kubernetes（Helm）、静的バイナリなどで導入可能ですが、活発に開発中のため破壊的変更が含まれる可能性があり、アップグレード時はリリースノートの確認が推奨されます。

---

### 19. [glanceapp/glance](https://github.com/glanceapp/glance)

> A self-hosted dashboard that puts all your feeds in one place

- Language: Go
- Stars: 36,686
- Forks: 1,440
- Stars in 1週間: 188
- Category: セルフホストダッシュボード
- Keywords: `ダッシュボード` `セルフホスト` `RSSリーダー` `Go` `Docker` `YAML設定`
- Summary source: README

#### README要約

- Glanceは、RSSやSNS投稿などの各種フィードを一箇所に集約して表示する、軽量で高度にカスタマイズ可能なセルフホスト型ダッシュボードです。
- RSS、Reddit、Hacker News、天気予報、YouTube、Dockerコンテナ状態など多様なウィジェットをYAMLファイルで柔軟に設定し、ページやレイアウトを自由に構成できます。
- 自宅サーバーやVPSで情報を一元管理したい個人ユーザーや、プライバシーを重視して自分の環境でダッシュボードを運用したい開発者・パワーユーザーに適しています。
- Docker Composeまたは単一バイナリ（20MB未満）で簡単に導入でき、低メモリで動作しますが、広告ブロックDNS使用時はレート制限の調整が必要な場合があります。

---

### 20. [openimsdk/open-im-server](https://github.com/openimsdk/open-im-server)

> IM Chat OpenClaw

- Language: Go
- Stars: 16,621
- Forks: 2,947
- Stars in 1週間: 24
- Category: インスタントメッセージング
- Keywords: `IM` `チャット` `マイクロサービス` `SDK` `オープンソース` `Go`
- Summary source: README

#### README要約

- OpenIMは、開発者がアプリケーションにインスタントメッセージング機能を統合するためのオープンソースソリューションです。
- OpenIM SDKとOpenIM Serverで構成され、メッセージ送受信、ユーザー管理、グループ管理などのツールとサービスを提供します。
- 開発者が効率的なIMソリューションを実装するためのフレームワークとして設計されており、大規模グループや数十億のメッセージをサポートします。
- ソースコード、Kubernetes、Dockerによるデプロイが可能で、Linux、Windows、MacシステムとARM/AMDアーキテクチャをサポートしています。

---
