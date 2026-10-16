+++
title = 'GitHub Trending 1週間レポート (go) - 2026/10/16'
date = 2026-10-16T23:16:23.446Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月16日 23:16:23
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のインフラ・セキュリティツールが中心で、AIエージェントによる自律型ペネトレーションテストとLLM運用基盤が二大トレンドとして浮上している。

- 全16件中16件がGo言語で実装されており、言語分布が極めて偏っている
- AIエージェントを活用した自律型セキュリティテストツールが複数ランクインし、最大の注目を集めている
- LLMのローカル実行・推論ルーティング・APIゲートウェイなど、AIモデル運用基盤の整備が進んでいる
- セルフホスト可能なファイル管理や認証プロキシ、Nginx管理など、インフラ運用を効率化する実用的なツールが堅調
- 一人会社の運営を支援するビジネスコマンドセンターや、ターミナル上で動作する高機能エディタなど、個人開発者向けの生産性向上ツールも登場

### 主なテーマ

- **AIエージェントによる自律型セキュリティテスト**: vxcontrol/pentagiが5130スターと圧倒的な支持を集め、Armur-Ai/Pentest-Swarm-AIも217スターを獲得。自然言語で指示するだけでAIエージェントチームが偵察・悪用・レポート作成までを自律的に実行する点が共通しており、ペネトレーションテストの自動化に対する関心の高さがうかがえる。BishopFox/sliverのような従来型の敵対者エミュレーションフレームワークも併せてランクインしており、セキュリティ分野全体の活発さが際立っている。（`vxcontrol/pentagi`、`Armur-Ai/Pentest-Swarm-AI`、`BishopFox/sliver`）
- **LLM運用基盤とAIゲートウェイ**: ollama/ollamaが1038スター、QuantumNous/new-apiが660スターを獲得し、ローカルLLM実行環境とマルチモデルAPI集約ゲートウェイへの需要が高い。llm-d/llm-d-routerはKubernetes上でのLLM推論ルーティングを最適化し、Project-HAMi/HAMiはGPUリソースの仮想化・共有を実現するなど、AIモデルを本番運用するためのインフラ層が充実しつつある。（`ollama/ollama`、`QuantumNous/new-api`、`llm-d/llm-d-router`、`Project-HAMi/HAMi`）
- **セルフホスト型インフラ・運用管理ツール**: gtsteffaniak/filebrowserはOIDC認証やWebDAV対応の高機能ファイルマネージャー、oauth2-proxy/oauth2-proxyはOAuth2/OIDC認証を提供するリバースプロキシ、0xJacky/nginx-uiはNginxのWeb管理インターフェースを提供する。いずれもセルフホスト可能で、既存インフラの運用管理を効率化する実用的なツールとして支持を集めている。docker/composeも176スターで、コンテナ環境の定義・実行という基本的なニーズが引き続き強い。（`gtsteffaniak/filebrowser`、`oauth2-proxy/oauth2-proxy`、`0xJacky/nginx-ui`、`docker/compose`）
- **個人開発者向け生産性向上ツール**: Bennettxai/FounderOSは一人会社をAI支援の部門として運営するためのビジネスコマンドセンターで、統合受信トレイや財務管理を単一ダッシュボードで提供する。eugenioenko/tttはターミナル上でVS Codeライクな機能を実現するTUIエディタで、LSP対応やGit統合を備える。個人や少人数チームが効率的に作業できる環境を整えるツールが注目されている。（`Bennettxai/FounderOS`、`eugenioenko/ttt`）
- **AIエージェント連携基盤**: google/agentmeshはAIエージェント向けのプライベートネットワーク基盤で、エージェント間のツールやモデルの公開・発見・呼び出しを可能にする。lharries/whatsapp-mcpはWhatsAppをMCP経由でClaudeなどのLLMから操作できるようにするサーバーで、外部サービスとAIエージェントの連携を実現する。AIエージェント同士やAIエージェントと外部システムの連携を支える基盤技術が登場している。（`google/agentmesh`、`lharries/whatsapp-mcp`）

### 補足的な観察

- vxcontrol/pentagiが5130スターで圧倒的なトップであり、2位のollama/ollama（1038スター）の約5倍の注目を集めている
- 全16件がGo言語で実装されており、他言語のプロジェクトは一件もランクインしていない
- セキュリティ関連ツールが4件（pentagi、Pentest-Swarm-AI、sliver、oauth2-proxy）と多く、AI活用と従来型フレームワークの両方が支持されている
- llm-d/llm-d-routerは28スターと少ないが、Kubernetes上でのLLM推論最適化という専門性の高いテーマでランクインしており、ニッチながらも先進的な取り組みが評価されている

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 16 |

## Repository一覧

### 1. [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)

> Fully autonomous AI Agents system capable of performing complex penetration testing tasks

- Language: Go
- Stars: 30,736
- Forks: 4,678
- Stars in 1週間: 5,130
- Category: 自律型ペネトレーションテストAIエージェント
- Keywords: `ペネトレーションテスト` `AIエージェント` `自律型` `Dockerサンドボックス` `マルチエージェント` `セキュリティ`
- Summary source: README

#### README要約

- PentAGIは、自然言語でターゲットと目標を指定するだけで、専門AIエージェントチームが自律的にペネトレーションテストを計画・実行するオープンソースのセルフホスト型マルチエージェントシステムです。
- nmapやMetasploit、sqlmapなど20以上の専門ツールを隔離されたDockerサンドボックス内で実行し、PostgreSQL+pgvectorによる記憶システムやNeo4jナレッジグラフで学習内容を保持します。
- セキュリティエンジニア、ペネトレーションテスター、レッドチームなど、自社インフラ上で認可されたテストを自動化したい専門家を対象としています。
- Docker Composeによる簡単なセットアップが可能で、10以上のクラウドLLMプロバイダーやOllama/vLLM経由のローカルモデルなど、柔軟なモデル選択が可能です。

---

### 2. [gtsteffaniak/filebrowser](https://github.com/gtsteffaniak/filebrowser)

> 📂 Web File Browser

- Language: Go
- Stars: 8,783
- Forks: 489
- Stars in 1週間: 223
- Category: ファイル管理ツール
- Keywords: `セルフホスト` `Webファイルマネージャー` `Go` `ファイル共有` `OIDC認証` `WebDAV`
- Summary source: README

#### README要約

- FileBrowser Quantumは、無料でセルフホスト可能なWebベースのファイルマネージャーです。
- 複数ソース管理、OIDC/LDAP/JWT認証、リアルタイム検索、WebDAV対応、詳細な共有設定などの高度な機能を備えています。
- 個人やチームがWebブラウザからファイルにアクセスし、プレビュー、編集、共有を行う用途に適しています。
- config.yamlで簡単に設定でき、Dockerイメージは180MB、最小メモリ要件は512MBです。シェルコマンド機能は削除されています。

---

### 3. [Armur-Ai/Pentest-Swarm-AI](https://github.com/Armur-Ai/Pentest-Swarm-AI)

> Autonomous penetration testing using a swarm of AI agents. Orchestrates recon, classification, exploitation, and reporting specialists with ReAct reasoning — supports bug bounty, continuous monitoring, and CTF modes. Built with Go and 7+ native security tools.

- Language: Go
- Stars: 2,996
- Forks: 546
- Stars in 1週間: 217
- Category: セキュリティテスト自動化
- Keywords: `ペネトレーションテスト` `AIエージェント` `スウォーム` `脆弱性悪用` `バグバウンティ` `Go`
- Summary source: README

#### README要約

- オープンソースの自律型ペネトレーションテストツールで、多数のAIエージェントがスキャンだけでなく実際に脆弱性を悪用して検証する。
- スティグマジー型の共有ブラックボードで数十のエージェントが並行連携し、偵察・分類・悪用・レポート作成を創発的に実行する。
- ペンテスター、バグバウンティハンター、レッドチーム、セキュリティ研究者を対象とし、バグバウンティやCTF、継続的監視に利用できる。
- npm、Homebrew、Go、Dockerなどで導入可能で、ローカルモデルにも対応するが、許可されたシステムへのテストのみに限定される。

---

### 4. [Bennettxai/FounderOS](https://github.com/Bennettxai/FounderOS)

> An open-source, single-operator business command center: run a one-person operated company as AI-assisted departments (comms, funnel, social, finances, agents, and a knowledge graph) from one live dashboard.

- Language: Go
- Stars: 1,165
- Forks: 329
- Stars in 1週間: 154
- Category: ビジネス自動化ダッシュボード
- Keywords: `一人会社` `AIエージェント` `コマンドセンター` `Go` `SvelteKit` `オープンソース`
- Summary source: README

#### README要約

- 一人会社をAI支援の「部門」として運営するための、オープンソースのビジネスコマンドセンター。
- 統合受信トレイ、クライアントファネル、財務、ナレッジグラフなどを単一のダッシュボードで提供する。
- フリーランサーや個人事業主、少人数チームのリーダーなど、すべてを一人で管理する人を対象としている。
- Go製バックエンドとPostgreSQLが必要で、外部への書き込みや定期実行は明示的に有効化しない限りオフになっている。

---

### 5. [eugenioenko/ttt](https://github.com/eugenioenko/ttt)

> TTT Editor (Terminal Text Tool): A real alternative to VS Code, Zed, and Sublime that runs in your terminal. A TUI that feels like GUI. Single binary, zero config.

- Language: Go
- Stars: 602
- Forks: 66
- Stars in 1週間: 158
- Category: ターミナルテキストエディタ
- Keywords: `TUIエディタ` `Go` `LSP対応` `Git統合` `ripgrep検索` `マルチカーソル`
- Summary source: README

#### README要約

- ターミナル上で動作するGUIライクなTUIテキストエディタで、VS Code・Zed・Sublimeの代替を目指すシングルGoバイナリのツール。
- TextMateベースのシンタックスハイライト(124言語)、LSPによる補完・診断・フォーマット、マルチカーソル、コード折りたたみ、Git統合、ripgrep検索、マルチフォルダワークスペースなどを備える。
- ターミナル環境で本格的なIDE機能を使いたい開発者向けで、ファイル編集、検索、Git操作、PRレビューなどを端末内で完結できる。
- brew、scoop、AUR、Nix、go install、バイナリ等で導入可能だが、Gitとripgrepが前提依存で、アイコン表示にはNerd Fontが必要。

---

### 6. [oauth2-proxy/oauth2-proxy](https://github.com/oauth2-proxy/oauth2-proxy)

> A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.

- Language: Go
- Stars: 15,204
- Forks: 2,237
- Stars in 1週間: 143
- Category: 認証プロキシ
- Keywords: `OAuth2` `OIDC` `リバースプロキシ` `認証` `Go` `CNCF`
- Summary source: README

#### README要約

- OAuth2 Proxyは、WebアプリケーションをOAuth2/OIDC認証で保護するオープンソースのリバースプロキシまたはミドルウェアです。
- Google、Microsoft Entra ID、GitHubなど多数のプロバイダに対応し、ユーザー名やグループ情報をHTTPヘッダーとしてアプリケーションに転送できます。
- 既存のリバースプロキシやロードバランサーに組み込み、複数アプリケーションの認証を一元管理したい開発者やインフラ担当者に適しています。
- バイナリやコンテナイメージで提供され、v6.0.0以前には既知の脆弱性があるため最新版への更新が強く推奨されています。

---

### 7. [ollama/ollama](https://github.com/ollama/ollama)

> Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

- Language: Go
- Stars: 183,498
- Forks: 18,337
- Stars in 1週間: 1,038
- Category: ローカルLLM実行ツール
- Keywords: `Ollama` `ローカルLLM` `Go` `REST API` `llama.cpp` `オープンモデル`
- Summary source: README

#### README要約

- Ollamaは、Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemmaなどのオープンモデルをローカルまたはクラウドで実行できるツールです。
- CLI、REST API、Python/JavaScriptライブラリを提供し、llama.cppをバックエンドとしてモデルの実行と管理を行います。
- Claude CodeやCodexなどのコーディングエージェント、OpenClawによるAIアシスタント化など、開発者やAIアプリ連携を目的としたユーザー向けです。
- macOS、Windows、Linux、Dockerでインストール可能で、ollama runコマンドでモデルを即座に起動できます。

---

### 8. [llm-d/llm-d-router](https://github.com/llm-d/llm-d-router)

> llm-d Router: The intelligent entry point for inference requests

- Language: Go
- Stars: 414
- Forks: 459
- Stars in 1週間: 28
- Category: LLM推論ルーター
- Keywords: `LLM推論` `ロードバランシング` `Kubernetes` `Envoy` `Gateway API` `KVキャッシュ`
- Summary source: README

#### README要約

- 推論リクエストのインテリジェントなエントリーポイントとして、LLM負荷とプレフィックスキャッシュを考慮したルーティングを提供する。
- Endpoint Picker（EPP）がext-procプロトコル経由でEnvoy等のプロキシと連携し、KVキャッシュ局所性・負荷・優先度に基づき最適な配置を決定する。
- Kubernetes上でLLM推論ワークロードを運用するユーザー向けで、A/Bテストやカナリアリリース、Prefill/Decode分離などの高度なトラフィック管理に対応する。
- StandaloneモードとGatewayモードの2つのデプロイメントをサポートし、本番環境ではGateway APIを活用したGatewayモードが推奨される。

---

### 9. [lharries/whatsapp-mcp](https://github.com/lharries/whatsapp-mcp)

> WhatsApp MCP server

- Language: Go
- Stars: 6,635
- Forks: 1,418
- Stars in 1週間: 216
- Category: MCPサーバー
- Keywords: `WhatsApp` `MCP` `Claude` `Go` `Python` `SQLite`
- Summary source: README

#### README要約

- 個人のWhatsAppアカウントをMCP経由でClaudeなどのLLMから操作できるようにするサーバーです。
- Go製ブリッジがWhatsApp WebマルチデバイスAPIに接続し、メッセージをSQLiteに保存、Python製MCPサーバーが検索・閲覧・送信ツールを提供します。
- Claude DesktopやCursorから連絡先検索、メッセージ検索・閲覧、個人・グループへの送信、画像・動画・文書・音声の送受信を行いたいユーザー向けです。
- Go、Python 3.6+、UV、Claude DesktopまたはCursorが必要で、初回はQRコード認証、音声変換にはFFmpeg、WindowsではCGO有効化が必要です。

---

### 10. [docker/compose](https://github.com/docker/compose)

> Define and run multi-container applications with Docker

- Language: Go
- Stars: 38,375
- Forks: 5,876
- Stars in 1週間: 176
- Category: コンテナオーケストレーションツール
- Keywords: `Docker` `マルチコンテナ` `compose.yaml` `Go` `CLIプラグイン` `コンテナ管理`
- Summary source: README

#### README要約

- Docker Composeは、Composeファイル形式で定義された複数コンテナのアプリケーションをDocker上で実行するためのツールです。
- compose.yamlにサービス構成を記述し、docker compose upコマンド一つでアプリ全体を起動・管理できます。
- 複数コンテナで構成されるアプリを開発・運用するDockerユーザー向けで、Dockerfileと組み合わせて環境を再現可能にします。
- Windows/macOSではDocker Desktopに同梱、Linuxではリリースページからバイナリを取得しcli-pluginsに配置します。Python版はv1ブランチのレガシー扱いです。

---

### 11. [BishopFox/sliver](https://github.com/BishopFox/sliver)

> Adversary Emulation Framework

- Language: Go
- Stars: 12,134
- Forks: 1,628
- Stars in 1週間: 142
- Category: セキュリティテストフレームワーク
- Keywords: `敵対者エミュレーション` `レッドチーム` `C2フレームワーク` `Go` `クロスプラットフォーム` `ペネトレーションテスト`
- Summary source: README

#### README要約

- Sliverは、あらゆる規模の組織が許可されたセキュリティテストを実施するために設計された、オープンソースのクロスプラットフォームな敵対者エミュレーションおよびレッドチームフレームワークです。
- インプラントはmTLS、WireGuard、HTTP(S)、DNS経由のC2通信をサポートし、バイナリごとに固有の非対称暗号鍵で動的にコンパイルされます。
- macOS、Windows、Linuxに対応し、ネイティブおよびシェルコードペイロード、リフレクティブローディング、BOF/COFF実行などのポストエクスプロイト機能を提供します。
- 最新リリースのダウンロードやLinuxワンライナーで導入可能で、GPLv3ライセンスのもと提供され、詳細は公式Wikiを参照してください。

---

### 12. [QuantumNous/new-api](https://github.com/QuantumNous/new-api)

> A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management.

- Language: Go
- Stars: 50,092
- Forks: 12,060
- Stars in 1週間: 660
- Category: AIゲートウェイ
- Keywords: `AIゲートウェイ` `LLMプロキシ` `マルチモデル` `OpenAI互換` `セルフホスト` `Go`
- Summary source: README

#### README要約

- アプリケーション、エージェント、チーム向けのセルフホスト型AIゲートウェイで、複数の上流モデルサービスを一つの一貫したAPIに集約します。
- OpenAI、Anthropic、Gemini等のプロトコル変換、ルーティング、利用量・コスト管理、細かいアクセス制御、Webコンソールを提供します。
- チームでのモデルアクセス共有、プロバイダー切り替えの簡素化、プライベートなマルチモデルサービス運用を目的としたユーザー向けです。
- DockerやDocker Composeで導入可能ですが、上流APIキーの合法的な取得と利用規約の遵守が必須で、ライセンスはAGPLv3です。

---

### 13. [0xJacky/nginx-ui](https://github.com/0xJacky/nginx-ui)

> Yet another WebUI for Nginx

- Language: Go
- Stars: 11,636
- Forks: 903
- Stars in 1週間: 64
- Category: Webサーバー管理ツール
- Keywords: `Nginx` `WebUI` `Go` `Vue` `サーバー管理` `Let's Encrypt`
- Summary source: README

#### README要約

- Nginx UIは、Nginxサーバーをブラウザから管理・設定できるオープンソースのWeb管理インターフェースです。
- 設定ファイルのオンライン編集、自動テストとリロード、ログ閲覧、Let's Encrypt証明書の自動デプロイ・更新、サーバー指標の監視、クラスタ管理などの機能を備えています。
- Nginxの設定をコマンドラインなしで管理したいサーバー管理者やWeb開発者を主な対象とし、複数サーバー環境の一元管理にも対応します。
- GoとVueで開発され単一バイナリで配布され、Linux・macOS・Windows・BSD等に対応し、Dockerやsystemdでの導入も可能です。Debian形式の設定ファイル構造を前提とするため、非Debian系では設定調整が必要な場合があります。

---

### 14. [evanw/esbuild](https://github.com/evanw/esbuild)

> An extremely fast bundler for the web

- Language: Go
- Stars: 40,093
- Forks: 1,361
- Stars in 1週間: 38
- Category: ビルドツール
- Keywords: `バンドラー` `高速` `JavaScript` `TypeScript` `CSS` `Go`
- Summary source: README

#### README要約

- esbuildは、Web向けの非常に高速なJavaScript/CSSバンドラーです。
- キャッシュ不要の高速ビルドを実現し、JavaScript、CSS、TypeScript、JSXを標準でサポートします。
- ESM/CommonJSのバンドル、Tree shaking、ミニファイ、ソースマップ、開発サーバー、ウォッチモード、プラグイン機能を備えています。
- CLI、JavaScript、Go向けのシンプルなAPIを提供し、公式サイトのGetting startedから導入できます。

---

### 15. [google/agentmesh](https://github.com/google/agentmesh)

> Agent Mesh

- Language: Go
- Stars: 1,095
- Forks: 181
- Stars in 1週間: 114
- Category: AIエージェントネットワーク基盤
- Keywords: `AIエージェント` `プライベートネットワーク` `MCP` `OpenID Connect` `サービスメッシュ` `P2P`
- Summary source: README

#### README要約

- Agent MeshはAIエージェント向けのプライベートネットワークで、ノードがエージェントの隣で動作し、ツールやモデルの公開・発見・呼び出しと検証可能なアイデンティティを提供する。
- デフォルトでは到達不可で、ポリシーによるサービス名ベースの許可制御と、OIDCトークンまたはブートストラップトークンによる短期間有効な認証情報発行の仕組みを持つ。
- AIエージェント開発者やサービス運用者が対象で、ラップトップ、コンテナ、クラスタ、NAT越しのモバイルなど多様な環境でエージェント間連携を実現する用途に向く。
- curlでインストール後にjoinとrunコマンドで開始でき、共有テストネットまたは独自メッシュをワンコマンドで構築可能だが、pre-1.0でモバイルアプリ等はプレビュー段階である。

---

### 16. [Project-HAMi/HAMi](https://github.com/Project-HAMi/HAMi)

> Heterogeneous GPU Sharing on Kubernetes

- Language: Go
- Stars: 4,812
- Forks: 868
- Stars in 1週間: 197
- Category: GPU仮想化・スケジューリング
- Keywords: `Kubernetes` `GPU共有` `vGPU` `異種アクセラレータ` `スケジューリング` `CNCF`
- Summary source: README

#### README要約

- HAMiはKubernetes上でGPUやNPUなどの異種AIアクセラレータを仮想化・共有するためのミドルウェアで、CNCF Incubatingプロジェクトです。
- メモリやコア単位でデバイスを分割割当てし、mutating webhook・scheduler extender・device pluginによりデバイス認識スケジューリングと分離を実現します。
- 共有GPUクラスタの利用率向上やマルチテナントの学習・推論基盤を構築するプラットフォームチームを対象とし、NVIDIA、Ascend、Cambricon等多数のベンダーをサポートします。
- Helmでインストール可能で、NVIDIA利用時はドライバ440以上・Kubernetes 1.23以上などの前提条件があり、アプリケーションコードの変更不要で導入できます。

---
