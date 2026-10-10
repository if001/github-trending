+++
title = 'GitHub Trending 1週間レポート (go) - 2026/10/10'
date = 2026-10-10T00:30:54.501Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月10日 0:30:54
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のインフラツールとAIエージェント関連ツールがトレンドを席巻し、特にコーディングエージェントの運用・コスト削減に関するプロジェクトが急伸している。

- AIエージェント関連のプロジェクトが多数ランクインしており、トークン削減ツールのcaveman（1,941スター）やDocker製エージェントランタイムのdocker-agent（936スター）などが大きな注目を集めている
- コーディングエージェントの管理・運用に特化したツールが複数登場し、tuios（エージェント状態管理付きターミナル）やCodeAF（マルチプロジェクト対応ソフトウェア工場）など実用志向のツールが並ぶ
- Caddy（1,417スター）やOllama（762スター）など、定番のインフラ・ローカルLLMツールが引き続き高い支持を維持している
- セキュリティ・認証系のセルフホストツール（Trivy、gVisor、oauth2-proxy、Pocket ID）が堅調にスターを獲得している
- 一覧の全16リポジトリがGo言語で記述されており、言語分布がGoに完全に集中している

### 主なテーマ

- **AIエージェントの構築・運用基盤**: Docker公式のdocker-agent（936スター）はYAML宣言でマルチエージェントを構築でき、CodeAFはオープンモデル向けにタスク分割・ブランチ実行・マージを自動化する「ソフトウェア工場」を提供。awesome-ai-agents（300以上のプロジェクトを収録）のランクインも、この領域への関心の高さを裏付けている。（`docker/docker-agent`、`Agent-Field/CodeAF`、`slavakurilyak/awesome-ai-agents`）
- **コーディングエージェントの効率化・統合ツール**: caveman（1,941スター、期間内最多）はプロキシによるログ圧縮でトークンを最大33%削減し、Claude CodeやCodexなど30以上のエージェントに対応。tuiosはエージェントの状態表示とInboxによる承認管理を備えたターミナルマルチプレクサ、unitermはAIエージェント内蔵のオールインワンターミナルであり、エージェント活用の実務課題（コスト・管理）に応えるツールが注目されている。（`JuliusBrussee/caveman`、`Gaurav-Gosain/tuios`、`ys-ll/uniterm`）
- **ローカルLLMとオープンモデルの活用**: Ollama（762スター）はKimi、GLM、DeepSeek、Qwenなどのオープンモデルをローカルで実行でき、Claude CodeやCodexとの統合も提供。CodeAFもオープンモデル向けハーネスを謳っており、クラウドAPIに依存しないモデル活用の流れが継続している。（`ollama/ollama`、`Agent-Field/CodeAF`）
- **セキュリティと認証のセルフホスト基盤**: Trivyは脆弱性・SBOM・シークレット検出を網羅するスキャナー、gVisorはコンテナ向けサンドボックスカーネル、oauth2-proxyはOIDC対応の認証リバースプロキシ、Pocket IDはパスキー専用のOIDCプロバイダーと、防御・認証の各レイヤーを自前で構築するツールが揃ってランクインした。（`aquasecurity/trivy`、`google/gvisor`、`oauth2-proxy/oauth2-proxy`、`pocket-id/pocket-id`）
- **セルフホスト型のサーバー・開発インフラ**: Caddy（1,417スター）は自動HTTPS対応のWebサーバーとして引き続き最大級の支持を集め、GiteaはGitホスティングからCI/CDまで統合したセルフホスト開発プラットフォームを提供。3x-uiはマルチプロトコル対応のプロキシ管理パネルで440スターを獲得しており、自前インフラ運用の需要が幅広い分野で見られる。（`caddyserver/caddy`、`go-gitea/gitea`、`MHSanaei/3x-ui`）

### 補足的な観察

- 期間内スター数の上位はcaveman（1,941）、Caddy（1,417）、docker-agent（936）、Ollama（762）の順で、AI関連と定番インフラが上位を分け合う構図になっている
- 全16リポジトリの言語がGoで統一されており、microsoft/TypeScriptのように本来TypeScript製のプロジェクトもGoと分類されている点がデータ上の特異点として見られる
- MCP（Model Context Protocol）関連がdocker-agentのMCPサーバー対応やwhatsapp-mcpのように複数登場し、エージェント連携の標準規格として浸透しつつある
- テレメトリに関する注意書き（CodeAF、caveman、docker-agent）やセキュリティ警告（oauth2-proxyの旧版脆弱性、whatsapp-mcpのプロンプトインジェクションリスク）が複数のサマリーに含まれ、実運用上の留意点への言及が目立つ

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 16 |

## Repository一覧

### 1. [caddyserver/caddy](https://github.com/caddyserver/caddy)

> Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS

- Language: Go
- Stars: 77,642
- Forks: 5,107
- Stars in 1週間: 1,417
- Category: Webサーバー
- Keywords: `HTTPS` `TLS` `HTTP/3` `Go` `自動証明書` `拡張性`
- Summary source: README

#### README要約

- CaddyはデフォルトでTLSを使用する拡張可能なサーバープラットフォームで、HTTP/1.1、HTTP/2、HTTP/3をサポートするWebサーバーです。
- CaddyfileやJSONによる設定、JSON APIによる動的設定、ZeroSSLとLet's Encryptによる自動HTTPS、モジュラーアーキテクチャによる高い拡張性を備えています。
- 本番環境での実績があり、数十万のサイトにスケール可能で、外部依存なしでどこでも実行できるため、HTTPSサーバーや長時間実行されるGoアプリケーションのプラットフォームとして利用できます。
- GitHub Releasesからダウンロードするか、Go 1.26.0以降でソースからビルドでき、xcaddyツールでプラグインを追加したカスタムビルドも可能です。

---

### 2. [Gaurav-Gosain/tuios](https://github.com/Gaurav-Gosain/tuios)

> A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.

- Language: Go
- Stars: 5,077
- Forks: 232
- Stars in 1週間: 541
- Category: ターミナルマルチプレクサ
- Keywords: `Go` `ターミナル` `ウィンドウマネージャ` `タイリング` `コーディングエージェント` `セッション管理`
- Summary source: README

#### README要約

- Go製のモダンなターミナルマルチプレクサ兼ウィンドウマネージャで、既存ターミナル内で動作する。
- Vim風モーダル操作、BSPタイリング、9つのワークスペース、コマンドパレット、kittyグラフィックス対応を備える。
- コーディングエージェントの状態表示やInboxでの承認・質問管理、複数マシンのセッション操作を行う開発者向け。
- HomebrewやGo install等で導入可能。true color対応ターミナルが必須で、kitty/sixel対応端末（Ghostty、Kitty、WezTerm）を推奨。

---

### 3. [ys-ll/uniterm](https://github.com/ys-ll/uniterm)

> All-in-one terminal covering 30+ protocols — SSH, RDP, SFTP, databases, Kubernetes and more. With a built-in AI Agent that runs multi-turn shell commands autonomously.

- Language: Go
- Stars: 802
- Forks: 121
- Stars in 1週間: 169
- Category: ターミナル・リモート管理ツール
- Keywords: `SSH` `AIエージェント` `RDP` `Kubernetes` `データベースクライアント` `Go`
- Summary source: README

#### README要約

- SSH、RDP、SFTP、データベース、Kubernetesなど30以上のプロトコルを統合したオールインワンターミナル。
- 複数ターンのシェルコマンドを自律的に計画・実行するAIエージェントを内蔵し、ClaudeやGPTなどのAPIに対応する。
- リモートサーバー管理、ファイル転送、DB操作、コンテナ管理を一つのツールで行いたい開発者やインフラエンジニア向け。
- Windows/macOS/Linux/Android向けにGitHub Releases等からバイナリを配布。Windowsでは署名なしのためウイルス対策ソフトの誤検知に注意が必要。

---

### 4. [aquasecurity/trivy](https://github.com/aquasecurity/trivy)

> Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more

- Language: Go
- Stars: 38,313
- Forks: 748
- Stars in 1週間: 143
- Category: セキュリティスキャナー
- Keywords: `脆弱性スキャン` `SBOM` `コンテナセキュリティ` `Kubernetes` `IaC` `シークレット検出`
- Summary source: README

#### README要約

- Trivyはコンテナイメージ、ファイルシステム、Gitリポジトリ、VMイメージ、Kubernetesをスキャン対象とする包括的なセキュリティスキャナーです。
- OSパッケージや依存関係のSBOM、既知の脆弱性（CVE）、IaCの問題や設定ミス、機密情報やシークレット、ソフトウェアライセンスを検出できます。
- DevOpsエンジニアやセキュリティ担当者がCI/CDパイプラインや開発環境でセキュリティリスクを早期に発見するために使用します。
- brewやDocker、バイナリダウンロードで簡単に導入でき、GitHub ActionsやKubernetes operator、VS Codeプラグインなど豊富な統合が利用可能です。

---

### 5. [MHSanaei/3x-ui](https://github.com/MHSanaei/3x-ui)

> Supporting multi-protocol multi-user(Vmess, Vless, Trojan, ShadowSocks, Wireguard, Hysteria, Tunnel, Mixed, HTTP, Tun, MTProto، AmneziaWG)

- Language: Go
- Stars: 47,717
- Forks: 12,220
- Stars in 1週間: 440
- Category: プロキシ管理パネル
- Keywords: `Xray-core` `Webパネル` `プロキシ` `VPN` `マルチプロトコル` `Go`
- Summary source: README

#### README要約

- Xray-coreサーバーを管理するための高度なオープンソースWebコントロールパネルです。
- VLESS、VMess、Trojan、Shadowsocks、WireGuardなど多様なプロトコルに対応し、トラフィック統計やマルチノード管理が可能です。
- 単一のVPSから複数ノードのデプロイメントまで、プロキシやVPNサーバーの構築・監視を行うユーザー向けです。
- インストールスクリプトで簡単に導入できますが、個人利用のみを目的としており、違法な目的や本番環境での使用は推奨されていません。

---

### 6. [ollama/ollama](https://github.com/ollama/ollama)

> Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

- Language: Go
- Stars: 182,542
- Forks: 18,176
- Stars in 1週間: 762
- Category: ローカルLLM実行ツール
- Keywords: `Ollama` `ローカルLLM` `オープンモデル` `REST API` `CLI` `llama.cpp`
- Summary source: README

#### README要約

- Ollamaは、Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemmaなどのオープンモデルをローカル環境で簡単に実行できるツールです。
- CLIコマンドでモデルを起動・チャットできるほか、REST APIやPython/JavaScriptライブラリを通じてアプリケーションからモデルを操作できます。
- Claude CodeやCodex、Copilot CLIなどのコーディングツールや、OpenClawによるAIアシスタント連携など、開発者やAI活用者向けの豊富な統合を提供します。
- macOS、Windows、Linux、Dockerに対応し、インストールスクリプトや手動ダウンロードで導入可能です。llama.cppをバックエンドとして使用しています。

---

### 7. [oauth2-proxy/oauth2-proxy](https://github.com/oauth2-proxy/oauth2-proxy)

> A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.

- Language: Go
- Stars: 15,106
- Forks: 2,216
- Stars in 1週間: 64
- Category: 認証プロキシ
- Keywords: `OAuth2` `OIDC` `リバースプロキシ` `認証` `Go` `CNCF`
- Summary source: README

#### README要約

- OAuth2 / OIDC認証でWebアプリケーションを保護する、柔軟なオープンソースのリバースプロキシまたはミドルウェアです。
- Google、Microsoft Entra ID、GitHubなど多数のプロバイダに対応し、ユーザー名やグループなどの詳細情報をHTTPヘッダーとして上流アプリに転送できます。
- 既存のリバースプロキシやロードバランサーに認証機能を統合したい開発者や、複数のアプリケーションを安全に保護したいインフラ担当者に適しています。
- インストールは公式ドキュメントを参照し、本番環境では不安定なnightlyイメージを避け、v6.0.0より古いバージョンはセキュリティ脆弱性のため必ず最新版に更新してください。

---

### 8. [Agent-Field/CodeAF](https://github.com/Agent-Field/CodeAF)

> Open-Source Software factory for Open Models

- Language: Go
- Stars: 373
- Forks: 47
- Stars in 1週間: 123
- Category: AIコーディングエージェント
- Keywords: `オープンモデル` `コーディングハーネス` `マルチプロジェクト` `タスク自動化` `Go製CLI` `ヘッドレス実行`
- Summary source: README

#### README要約

- オープンモデル向けのコーディングハーネスで、複数プロジェクトの作業を1つのウィンドウに集約し、タスクの割り振り・進行確認・必要時の介入を可能にする「ソフトウェア工場」ツール。
- 会話からタスクを自動分割し、各タスクを独立したブランチで実行・検証・マージする仕組みを持ち、worker/planner/checkerの3役割でタスクごとに最適なモデルを自動選択する。
- 複数のAIエージェントを並行運用する開発者や、CI/cronからのヘッドレス実行、PRレビュー・Issue修正などの定型作業を自動化したいチームが対象。
- Go製の単一バイナリでcurlスクリプト一発でインストール可能。Apache 2.0ライセンスだが早期プレビュー版のため粗い部分があり、匿名テレメトリがデフォルト有効（CODEAF_TELEMETRY=offで無効化可）。

---

### 9. [go-gitea/gitea](https://github.com/go-gitea/gitea)

> Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD

- Language: Go
- Stars: 58,390
- Forks: 7,241
- Stars in 1週間: 133
- Category: 開発プラットフォーム
- Keywords: `Gitホスティング` `セルフホスト` `CI/CD` `コードレビュー` `パッケージレジストリ` `Go`
- Summary source: README

#### README要約

- Giteaは、Gitホスティングを中心としたセルフホスト型のオールインワンソフトウェア開発サービスです。
- コード管理、コードレビュー、課題追跡、プロジェクトカンバン、Wiki、チームコラボレーション、パッケージレジストリ、GitHub Actionsを再利用できるCI/CDを提供します。
- Goで書かれており、Linux、macOS、FreeBSD/OpenBSD、Windowsなど、Goが対応する多様なプラットフォームとアーキテクチャで動作します。
- 公式DockerイメージやGitea Cloudでのデプロイが可能で、ソースからのビルド手順やドキュメントも整備されています。

---

### 10. [docker/docker-agent](https://github.com/docker/docker-agent)

> AI Agent Builder and Runtime by Docker Engineering

- Language: Go
- Stars: 4,317
- Forks: 500
- Stars in 1週間: 936
- Category: AIエージェントランタイム
- Keywords: `AIエージェント` `Docker` `YAML` `MCP` `マルチエージェント` `RAG`
- Summary source: README

#### README要約

- Docker Engineering製のAIエージェントビルダー兼ランタイムで、宣言的なYAML設定でコードを書かずにAIエージェントを構築・実行・共有できるdocker CLIプラグイン。
- マルチエージェント連携、MCPサーバー対応の豊富なツール群、OpenAI/Anthropic/Gemini等の複数AIプロバイダー、RAG、OCIレジストリへのパッケージ共有などの機能を備える。
- 複雑な問題を解決するために専門エージェントのチームを作成したい開発者や、AIエージェントをYAMLで管理・共有したいユーザー向け。
- Docker Desktop 4.63以降にプリインストール済み、Homebrewやバイナリでも導入可能。クラウド利用時はAPIキーの設定が必要で、匿名の利用データを収集する点に注意。

---

### 11. [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

> 🪨 why use many token when few token do trick. Viral skill + proxy for coding agents that cuts 65% of tokens by talking like a caveman.

- Language: Go
- Stars: 110,776
- Forks: 6,416
- Stars in 1週間: 1,941
- Category: AIエージェント向けトークン削減ツール
- Keywords: `トークン削減` `コーディングエージェント` `プロキシ` `Claude Code` `圧縮` `LLMコスト削減`
- Summary source: README

#### README要約

- コーディングエージェントの入出力トークンを削減するツールで、プロキシとスキルの2つの仕組みで構成される。
- プロキシはログ・CSV・YAML・JSON・テスト出力を98.5〜99.1%圧縮しセッション全体の入力トークンを33.2%削減、スキルは簡潔な出力スタイルで応答トークンを削減する。
- Claude Code、Codex、Gemini、Aiderなど30以上のコーディングエージェントのユーザーが対象で、コードやコマンドは原文のまま保持される。
- npmで@caveman-ai/cliをインストールしNode.js 22.13以上が必要。CLIはデフォルトで使用統計を送信するがcaveman telemetry offで無効化可能。

---

### 12. [google/gvisor](https://github.com/google/gvisor)

> Application Kernel for Containers

- Language: Go
- Stars: 19,615
- Forks: 2,038
- Stars in 1週間: 147
- Category: コンテナセキュリティ
- Keywords: `コンテナ` `サンドボックス` `分離` `セキュリティ` `OCIランタイム` `ユーザースペースカーネル`
- Summary source: README

#### README要約

- gVisorはコンテナ向けのアプリケーションカーネルで、実行中のアプリケーションとホストOSの間に強力な分離層を提供する。
- Go言語で書かれたユーザースペースカーネルとしてLinuxライクなインターフェースを実装し、OCIランタイムrunscを通じてDockerやKubernetesと統合される。
- 信頼できないコードや悪意のある可能性のあるコードを実行する際に、VMのセキュリティ上の利点と通常のユーザースペースアプリケーションの低リソース消費・高速起動を両立させたいユーザー向け。
- ビルドにはLinux 5.6以降とDocker 17.09.0以降が必要で、x86_64とARM64アーキテクチャをサポートし、Bazelまたはmakeを使用してビルドする。

---

### 13. [microsoft/TypeScript](https://github.com/microsoft/TypeScript)

> TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

- Language: Go
- Stars: 111,370
- Forks: 16,170
- Stars in 1週間: 134
- Category: プログラミング言語
- Keywords: `TypeScript` `JavaScript` `型付け` `コンパイラ` `Microsoft` `オープンソース`
- Summary source: README

#### README要約

- TypeScriptはJavaScriptにオプションの型を追加した、アプリケーション規模のJavaScript向け言語です。
- 任意のブラウザ・ホスト・OSで動作する大規模JavaScriptアプリケーションを支援するツールを提供し、可読性の高い標準準拠のJavaScriptにコンパイルします。
- 大規模なJavaScriptアプリケーションを開発する開発者が対象で、playgroundで試したり、コミュニティページやDiscordで交流できます。
- npm install -D typescriptで安定版を、typescript@nextでナイトリービルドを導入でき、ドキュメントやロードマップも公開されています。

---

### 14. [slavakurilyak/awesome-ai-agents](https://github.com/slavakurilyak/awesome-ai-agents)

> Awesome list of 300+ agentic AI resources

- Language: Go
- Stars: 2,416
- Forks: 622
- Stars in 1週間: 129
- Category: AIエージェントリスト
- Keywords: `AIエージェント` `Awesomeリスト` `オープンソース` `キュレーション` `開発フレームワーク` `長期メモリ`
- Summary source: README

#### README要約

- Slava Kurilyakがキュレーションする、300以上のエージェント型AIプロジェクトを追跡するAwesomeリスト。
- AIエージェント、長期メモリ、開発フレームワークなどのカテゴリ別に整理され、各プロジェクトの提出者・メンテナー・リポジトリ所有者を記録している。
- AIエージェントの開発者や研究者が、公開リポジトリを持つプロジェクトを探索・比較する際に利用する。
- 掲載にはGitHub・GitLab.com・Codeberg上の公開リポジトリが必須で、ライセンスは問わないが、ホスト型製品のみのプロジェクトは対象外。

---

### 15. [pocket-id/pocket-id](https://github.com/pocket-id/pocket-id)

> The most user-friendly OpenID Connect Certified™ and OAuth 2.0 provider that lets users sign in to your applications with passkeys.

- Language: Go
- Stars: 9,502
- Forks: 320
- Stars in 1週間: 124
- Category: 認証プロバイダー
- Keywords: `OpenID Connect` `OAuth 2.0` `パスキー` `セルフホスト` `Docker` `Go`
- Summary source: README

#### README要約

- Pocket IDは、パスキー認証のみをサポートする使いやすいOpenID Connect Certified™およびOAuth 2.0プロバイダーです。
- パスワード不要のパスキー認証に特化し、Yubikeyなどの物理キーでセルフホストサービスに安全かつ簡単にサインインできます。
- KeycloakやORY Hydraのような複雑なプロバイダーよりも、シンプルなユースケース向けのセルフホスト認証基盤を求めるユーザーに適しています。
- Dockerを使ったセットアップが最も簡単で推奨されており、詳細は公式ドキュメントを参照してください。

---

### 16. [lharries/whatsapp-mcp](https://github.com/lharries/whatsapp-mcp)

> WhatsApp MCP server

- Language: Go
- Stars: 6,449
- Forks: 1,372
- Stars in 1週間: 57
- Category: MCPサーバー
- Keywords: `WhatsApp` `MCP` `Claude` `Go` `SQLite` `メッセージ送信`
- Summary source: README

#### README要約

- WhatsAppの個人アカウントに接続し、メッセージの検索・閲覧・送信をLLM経由で行えるMCPサーバー。
- Go製ブリッジがwhatsmeow経由でWhatsApp Web APIに接続し、履歴をSQLiteに保存、Python製MCPサーバーがツールを提供する。
- Claude DesktopやCursorから連絡先検索、チャット一覧、メッセージ送信、画像・動画・音声・ファイル送受信を行いたいユーザー向け。
- Go・Python・UVが必須で初回はQR認証が必要。音声変換にはFFmpegが任意で必要。プロンプトインジェクションによる情報漏洩リスクに注意。

---
