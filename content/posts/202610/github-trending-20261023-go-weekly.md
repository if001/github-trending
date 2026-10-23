+++
title = 'GitHub Trending 1週間レポート (go) - 2026/10/23'
date = 2026-10-23T23:46:16.745Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月23日 23:46:16
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 22
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のAIエージェント基盤とローカルLLM実行環境がトレンドを牽引し、開発自動化とセキュリティツールが活況を呈している

- AIエージェントのメモリ管理、オーケストレーション、開発自動化を担う基盤ツールが多数ランクイン
- OllamaやLocalAIなどローカルLLM実行環境が高いスター数を獲得し、プライバシー重視のAI活用が進展
- ペネトレーションテストやシークレット検出などセキュリティ関連ツールが複数登場
- Kubernetes、Terraform、etcdなどクラウドネイティブ・インフラ管理の定番プロジェクトが継続的に支持
- 全22リポジトリがGo言語製で、エコシステムの成熟度と実用性の高さを示している

### 主なテーマ

- **AIエージェント基盤とメモリ管理**: AIコーディングエージェントのセッション履歴や知識を蓄積・再利用するメモリレイヤーや、複数エージェントを協調させるオーケストレーションプラットフォームが注目されている。agent-beaconは838スター、engramは310スターを獲得し、MCPプロトコル経由で複数のAIツールと連携する点が共通している。（`Asymptote-Labs/agent-beacon`、`Gentleman-Programming/engram`、`GoogleCloudPlatform/scion`、`github/github-mcp-server`）
- **ローカルLLM実行環境**: プライバシーを保ちながらオープンモデルをローカルで実行するツールが高い支持を得ている。Ollamaは1419スターで最高位、LocalAIは343スターで、GPUなしでも動作しOpenAI互換APIを提供する点が特徴。（`ollama/ollama`、`mudler/LocalAI`）
- **セキュリティとペネトレーションテスト**: 自律型AIエージェントによるペネトレーションテストツールPentAGIが1667スターで最高スター数を記録。シークレット検出のGitleaks、資産マッピングのScopeSentryなど、セキュリティ診断を自動化するツールが複数ランクインしている。（`vxcontrol/pentagi`、`gitleaks/gitleaks`、`Autumn-27/ScopeSentry`）
- **開発自動化とワークフロー**: AIエージェントを活用した開発プロセスの自動化が進展。SuperPlaneは406スターで、バックログ課題をプルリクエストに変換する自動化ファクトリーを提供。opencode2apiはAPIゲートウェイとして複数のAIプロバイダーを統合する。（`superplanehq/superplane`、`jasonxu114514/opencode2api`、`zhoushoujianwork/easyeda-agent`）
- **クラウドネイティブとインフラ管理**: Kubernetes、Terraform、etcd、Helmなど、分散システムとインフラ管理の定番プロジェクトが継続的に支持されている。Giteaはセルフホスト型Gitホスティングとして150スターを獲得し、オールインワンの開発環境を提供する。（`etcd-io/etcd`、`helm/helm`、`hashicorp/terraform`、`moby/moby`、`go-gitea/gitea`）

### 補足的な観察

- 全22リポジトリがGo言語製で、言語の統一性が際立っている
- 最高スター数はvxcontrol/pentagiの1667、次いでollama/ollamaの1419、Asymptote-Labs/agent-beaconの838
- MCP(Model Context Protocol)対応ツールが4件登場し、AIエージェント連携の標準化が進んでいる
- セルフホスト・ローカルファーストを謳うプロジェクトが多数あり、プライバシーとデータ主権への関心が反映されている

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 22 |

## Repository一覧

### 1. [ollama/ollama](https://github.com/ollama/ollama)

> Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

- Language: Go
- Stars: 184,486
- Forks: 18,503
- Stars in 1週間: 1,419
- Category: ローカルLLM実行ツール
- Keywords: `Ollama` `ローカルLLM` `REST API` `llama.cpp` `オープンモデル` `Go`
- Summary source: README

#### README要約

- Ollamaは、Kimi、GLM、DeepSeek、Qwen、Gemmaなどのオープンモデルをローカルまたはクラウドでプライバシーを保ちながら実行するためのツールです。
- llama.cppをバックエンドとしてモデルを実行・管理するREST APIを提供し、PythonやJavaScriptの公式ライブラリからも利用できます。
- Claude CodeやCodexなどのコーディングエージェントとの連携や、OpenClawによるAIアシスタント化など、開発者やAIアプリ構築者を対象としています。
- macOS、Windows、Linux、Docker向けのインストーラーが用意され、ollama runコマンドで手軽にモデルを起動してチャットできます。

---

### 2. [gitleaks/gitleaks](https://github.com/gitleaks/gitleaks)

> Find secrets with Gitleaks 🔑

- Language: Go
- Stars: 30,274
- Forks: 2,315
- Stars in 1週間: 278
- Category: セキュリティスキャナー
- Keywords: `シークレット検出` `Git` `セキュリティ` `正規表現` `pre-commit` `CI/CD`
- Summary source: README

#### README要約

- Gitleaksは、Gitリポジトリ、ファイル、標準入力からパスワード、APIキー、トークンなどのシークレットを検出するツールです。
- 正規表現ベースの検出エンジンを使用し、git、dir、stdinの3つのスキャンモードを提供します。
- 開発者やセキュリティチームが、コードリポジトリにハードコードされた機密情報を発見するために使用します。
- Homebrew、Docker、Goからインストール可能で、pre-commitフックやGitHub Actionとしても利用できます。

---

### 3. [mudler/LocalAI](https://github.com/mudler/LocalAI)

> LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.

- Language: Go
- Stars: 49,893
- Forks: 4,539
- Stars in 1週間: 343
- Category: ローカルAI推論エンジン
- Keywords: `オープンソース` `OpenAI互換API` `ローカル推論` `マルチモーダル` `GPU不要` `プライバシー`
- Summary source: README

#### README要約

- LocalAIは、LLM・画像・音声・動画などのモデルをGPUなしでも含む任意のハードウェアで実行できるオープンソースAIエンジンです。
- llama.cppやwhisper.cppなどのバックエンドを必要時にオンデマンドで取得し、OpenAI・Anthropic・ElevenLabs互換APIを提供します。
- プライバシーを重視し、自社インフラ内でAIを運用したい開発者や組織、マルチユーザー環境での利用に適しています。
- DockerやmacOS向けDMGで導入可能ですが、macOS版は署名されていないためインストール後にquarantine属性の削除が必要です。

---

### 4. [etcd-io/etcd](https://github.com/etcd-io/etcd)

> Distributed reliable key-value store for the most critical data of a distributed system

- Language: Go
- Stars: 52,425
- Forks: 10,550
- Stars in 1週間: 89
- Category: 分散キーバリューストア
- Keywords: `etcd` `分散システム` `Raft` `キーバリューストア` `Kubernetes` `Go`
- Summary source: README

#### README要約

- 分散システムの最重要データ向けに設計された、分散型の高信頼キーバリューストアです。
- Raftコンセンサスアルゴリズムで高可用な複製ログを管理し、gRPC API・自動TLS・秒間1万件の書き込み性能を特徴とします。
- Kubernetesなどと組み合わせて本番環境で広く利用されており、厳密な堅牢性テストで信頼性が確保されています。
- OSX/Linux/Windows/Docker向けのビルド済みバイナリで導入可能ですが、mainブランチは不安定な場合があるため安定版はリリースページを参照してください。

---

### 5. [Asymptote-Labs/agent-beacon](https://github.com/Asymptote-Labs/agent-beacon)

> The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu

- Language: Go
- Stars: 2,704
- Forks: 245
- Stars in 1週間: 838
- Category: AIエージェントメモリ基盤
- Keywords: `AIエージェント` `メモリレイヤー` `セッション履歴` `クロスハーネス` `MCP` `ローカルファースト`
- Summary source: README

#### README要約

- Claude Code、Cursor、Codexなど20以上のハーネスを横断してAIコーディングエージェントのセッション履歴を収集し、再利用可能な知識に変換するオープンソースのメモリレイヤー。
- セッション履歴から有用なワークフロー、修正、デバッグパターンを抽出・レビューし、MCPやAgent Skills経由で将来のエージェントが参照できる共有メモリとして蓄積する。
- 複数のAIコーディングツールを使う開発者向けで、セッション終了時に失われる知識をツール横断で蓄積・複利化させたい用途に適する。
- Go製でMITライセンス。Homebrew、Linuxパッケージ、Windows MSIで導入可能。ローカルファースト設計で、クラウド転送は明示的なオプトインでありローカルモードも選択できる。

---

### 6. [jasonxu114514/opencode2api](https://github.com/jasonxu114514/opencode2api)

> A Go-based OpenCode Zen / Zen Go API proxy with OpenAI & Anthropic API compatibility, key/proxy pooling, automatic routing, and WebUI.

- Language: Go
- Stars: 1,250
- Forks: 219
- Stars in 1週間: 420
- Category: APIゲートウェイ
- Keywords: `OpenCode Zen` `APIプロキシ` `OpenAI互換` `Anthropic互換` `キープール` `WebUI`
- Summary source: README

#### README要約

- OpenCode Zen / Zen Go向けのGo製APIゲートウェイで、Chat Completions、Responses、Anthropic Messagesの3つのエンドポイントを提供し、プロトコル間の変換を行う。
- Zen/Goのキープール、プロキシプール、自動ルーティング、リトライ、セッションアフィニティを備え、WebUIによる設定編集・Playground・診断・統計・ログ閲覧が可能。
- OpenAI/Anthropic互換API経由でOpenCode Zen/Goのモデルを利用したい開発者や、複数キー・プロキシの管理とフォールバックを必要とするユーザー向け。
- Go 1.24以上でビルドするかGitHub ReleasesのバイナリまたはDockerイメージを使用し、config.jsonでローカルAPIキーとWebUIパスワードを設定して起動する。

---

### 7. [gin-gonic/gin](https://github.com/gin-gonic/gin)

> Gin is a high-performance HTTP web framework written in Go. It provides a Martini-like API but with significantly better performance—up to 40 times faster—thanks to httprouter. Gin is designed for building REST APIs, web applications, and microservices.

- Language: Go
- Stars: 89,423
- Forks: 8,768
- Stars in 1週間: 106
- Category: Webフレームワーク
- Keywords: `Go` `HTTP` `高性能` `REST API` `マイクロサービス` `ミドルウェア`
- Summary source: README

#### README要約

- GinはGo言語で書かれた高性能なHTTP Webフレームワークで、MartiniライクなAPIを提供しながらhttprouterにより最大40倍の高速性を実現しています。
- ゼロアロケーションルーター、ミドルウェアサポート、JSONバリデーション、ルートグルーピング、エラー管理、クラッシュ防止機能などを備えています。
- REST API、Webアプリケーション、マイクロサービスの構築に適しており、高スループットや高速レスポンスが求められる開発者向けです。
- Go 1.26以上が必要で、Goモジュールでインポートするだけで導入可能。豊富なドキュメントとコミュニティミドルウェアが利用できます。

---

### 8. [superplanehq/superplane](https://github.com/superplanehq/superplane)

> Open source factory for one-shot engineering

- Language: Go
- Stars: 8,180
- Forks: 668
- Stars in 1週間: 406
- Category: 開発自動化プラットフォーム
- Keywords: `AIエージェント` `ワークフロー自動化` `プルリクエスト生成` `CI/CD統合` `オープンソース` `Apache 2.0`
- Summary source: README

#### README要約

- SuperPlaneは、確度の高いバックログ課題を検証済みのレビュー可能なプルリクエストに変換するオープンソースの自動化ファクトリーです。
- コーディングエージェント、ソース管理、CI、レビュー、承認、フィードバックを一つの可視化されたシステムで調整し、ワークフローレベルのガードレールを適用します。
- AIエージェントが処理可能な定型作業を自動化し、曖昧な作業や人間の判断が必要な決定はチームに残すことで、エンジニアが判断を要する業務に集中できるようにします。
- Apache 2.0ライセンスで提供され、クラウドまたはオンプレミスで実行可能です。Dockerベースの開発環境で、GitHub、GitLab、各種AIエージェントなど多くのツールと統合できます。

---

### 9. [helm/helm](https://github.com/helm/helm)

> The Kubernetes Package Manager

- Language: Go
- Stars: 30,363
- Forks: 7,855
- Stars in 1週間: 36
- Category: Kubernetesパッケージマネージャー
- Keywords: `Kubernetes` `パッケージ管理` `Chart` `Go` `デプロイ` `テンプレート`
- Summary source: README

#### README要約

- Helmは、事前設定されたKubernetesリソースのパッケージであるChartを管理するツールです。
- テンプレートをレンダリングしてKubernetes APIと通信し、アプリケーションのインストールやリリース管理を効率化します。
- Kubernetes上でソフトウェアを配布・利用したい開発者や、CI/CD環境でマニフェストを管理したい運用者に適しています。
- Releasesページからバイナリを取得するか、Homebrew等のパッケージマネージャーでインストールしてPATHに追加します。

---

### 10. [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)

> Fully autonomous AI Agents system capable of performing complex penetration testing tasks

- Language: Go
- Stars: 32,173
- Forks: 4,990
- Stars in 1週間: 1,667
- Category: セキュリティAIエージェント
- Keywords: `ペネトレーションテスト` `自律型AIエージェント` `Dockerサンドボックス` `マルチLLM対応` `セルフホスト` `Go`
- Summary source: README

#### README要約

- PentAGIは、複雑なペネトレーションテストを自律的に実行するオープンソースのマルチエージェントAIシステムです。
- Dockerサンドボックス内でnmapやMetasploitなど20以上のツールをAIエージェントが計画・実行し、結果をレポートとして出力します。
- セキュリティエンジニアやペネトレーションテスター、レッドチームが自社インフラ上で認可されたテストを行う用途を想定しています。
- Docker Composeによるインストーラーで導入可能で、10以上のLLMプロバイダーやOllama経由のローカルモデルに対応しています。

---

### 11. [go-gitea/gitea](https://github.com/go-gitea/gitea)

> Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD

- Language: Go
- Stars: 58,662
- Forks: 7,304
- Stars in 1週間: 150
- Category: セルフホストGitホスティング
- Keywords: `Gitホスティング` `セルフホスト` `CI/CD` `コードレビュー` `Go` `オールインワン`
- Summary source: README

#### README要約

- Giteaは、セルフホスト型のオールインワンソフトウェア開発サービスを最も簡単かつ迅速に構築することを目指したプロジェクトです。
- Gitホスティング、コードレビュー、Issue管理、プロジェクトカンバン、Wiki、チームコラボレーション、パッケージレジストリ、GitHub Actionsを再利用できるCI/CDを提供します。
- Go言語で書かれており、Linux、macOS、Windows、FreeBSD/OpenBSDなど、x86、amd64、ARM、RISC-V 64、PowerPCを含む幅広いプラットフォームで動作します。
- 公式DockerイメージやGitea Cloudでのデプロイが可能で、デモサイトやドキュメントも用意されており、MITライセンスで公開されています。

---

### 12. [Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram)

> Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.

- Language: Go
- Stars: 7,574
- Forks: 791
- Stars in 1週間: 310
- Category: AIエージェントメモリ
- Keywords: `永続メモリ` `MCP` `SQLite` `FTS5` `Go` `エージェント非依存`
- Summary source: README

#### README要約

- AIコーディングエージェントに永続メモリを提供する、エージェント非依存の単一Goバイナリ製ツール。
- SQLite+FTS5全文検索を備え、CLI・HTTP API・MCPサーバー・TUIの4つのインターフェースで利用できる。
- Claude Code、OpenCode、Gemini CLI、Codex、VS Codeなど14種以上のMCP互換エージェントに対応する。
- HomebrewまたはGitHub Releasesからインストール可能で、Node.jsやDockerなどの依存関係は不要。

---

### 13. [github/github-mcp-server](https://github.com/github/github-mcp-server)

> GitHub's official MCP Server

- Language: Go
- Stars: 33,895
- Forks: 5,222
- Stars in 1週間: 246
- Category: AI開発ツール
- Keywords: `MCP` `GitHub` `AI連携` `Go` `リポジトリ管理` `CI/CD`
- Summary source: README

#### README要約

- GitHub公式のMCPサーバーで、AIツールをGitHubプラットフォームに直接接続し、自然言語でリポジトリやコードの操作を可能にする。
- リポジトリ管理、Issue・PRの自動化、CI/CDワークフローの監視、コード分析、チームコラボレーションなどの機能を提供する。
- AIエージェントやチャットボットをGitHubに連携させたい開発者を対象とし、VS Code、Claude Desktop、CursorなどのMCPホストで利用できる。
- GitHubホストのリモート版かDockerコンテナで動くローカル版を選択でき、OAuthまたはPATで認証する。Goモジュールはv2パスを使用。

---

### 14. [PatchMon/PatchMon](https://github.com/PatchMon/PatchMon)

> Linux Patch Management & Automation Platform

- Language: Go
- Stars: 3,487
- Forks: 197
- Stars in 1週間: 57
- Category: パッチ管理・サーバー監視
- Keywords: `Linux` `パッチ管理` `エージェント` `Docker` `コンプライアンス` `Go`
- Summary source: README

#### README要約

- Linuxフリート向けのエンタープライズ級パッチ・サーバー管理プラットフォームで、FreeBSDとWindowsのエージェントもサポートする。
- アウトバウンド専用の軽量エージェントがサーバーと通信し、ドライラン検証、承認ワークフロー、スケジュール実行、リアルタイムのパッチ配信を実現する。
- 運用チームが複数環境のパッケージ健全性、コンプライアンス状況、システム状態を一元監視する用途に適している。
- Dockerによるセルフホストが推奨され、AGPL v3ライセンスで提供される。最小スペックは2 vCPU、2GB RAM、15GBディスク。

---

### 15. [hashicorp/terraform](https://github.com/hashicorp/terraform)

> Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.

- Language: Go
- Stars: 50,096
- Forks: 10,598
- Stars in 1週間: 186
- Category: インフラストラクチャ管理
- Keywords: `Infrastructure as Code` `IaC` `インフラ自動化` `宣言的設定` `クラウド管理` `DevOps`
- Summary source: README

#### README要約

- Terraformはインフラストラクチャを安全かつ効率的に構築・変更・バージョン管理するためのツールです。
- Infrastructure as Codeによる宣言的な構成管理、実行計画の事前確認、リソースグラフによる並列処理、変更自動化の機能を提供します。
- 既存の主要サービスプロバイダーや社内カスタムソリューションを管理するインフラエンジニアやDevOpsチームを対象としています。
- Go言語で開発され、Business Source License 1.1の下で提供され、プロバイダーはプラグインとして実装されます。

---

### 16. [moby/moby](https://github.com/moby/moby)

> The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems

- Language: Go
- Stars: 72,201
- Forks: 19,192
- Stars in 1週間: 56
- Category: コンテナ基盤
- Keywords: `コンテナ` `Docker` `モジュラー` `オープンソース` `Go` `ツールキット`
- Summary source: README

#### README要約

- Dockerが作成したオープンソースプロジェクトで、ソフトウェアのコンテナ化を実現・加速させるためのツールキットコンポーネントを提供する。
- コンテナビルドツール、レジストリ、オーケストレーションツール、ランタイムなどのモジュール式コンポーネントを組み合わせてカスタムコンテナシステムを構築できる。
- コンテナベースのシステムを修正、実験、構築したいエンジニア、インテグレーター、愛好家を対象としており、商用サポートを求めるユーザー向けではない。
- Docker v29以降、Goモジュールはgithub.com/moby/moby/clientとgithub.com/moby/moby/apiに移行し、ルートモジュールはライブラリとしてのインポートを意図していない。

---

### 17. [GoogleCloudPlatform/scion](https://github.com/GoogleCloudPlatform/scion)

- Language: Go
- Stars: 2,021
- Forks: 296
- Stars in 1週間: 131
- Category: AIエージェント基盤
- Keywords: `AIエージェント` `オーケストレーション` `マルチエージェント` `コンテナ` `Go` `開発自動化`
- Summary source: README

#### README要約

- Scionは、AIエージェントのチームと人間が協働するためのオープンソースのオーケストレーションプラットフォームです。
- Claude CodeやCodexなどのハーネスをコンテナ上で独立プロセスとして実行し、タスクの委任、メッセージング、Git worktreeによるワークスペース共有を可能にします。
- ソフトウェア開発や調査など複雑なプロジェクトで、複数のエージェントに役割を与えて並行作業させたい開発者やチームを対象としています。
- Homebrewまたはソースからインストールし、DockerやKubernetes等のランタイムを利用しますが、pre-1.0のためAPIや設定は変更される可能性があります。

---

### 18. [golang/go](https://github.com/golang/go)

> The Go programming language

- Language: Go
- Stars: 139,505
- Forks: 22,189
- Stars in 1週間: 500
- Category: プログラミング言語
- Keywords: `Go` `オープンソース` `プログラミング言語` `BSDライセンス` `公式バイナリ` `コントリビューション`
- Summary source: README

#### README要約

- Goはシンプルで信頼性が高く効率的なソフトウェアを構築しやすくするオープンソースのプログラミング言語です。
- 公式リポジトリはgo.googlesource.comにあり、GitHubはミラーで、ソースはBSDスタイルライセンスで配布されています。
- 言語そのものやツールチェインを利用・開発したいプログラマやコントリビューターが主な対象です。
- 導入は公式サイトのバイナリ配布かソースからのインストール手順に従い、質問先とIssue trackerの用途分けに注意が必要です。

---

### 19. [pearl-research-labs/pearl](https://github.com/pearl-research-labs/pearl)

> Monorepo for the Pearl network 🐚

- Language: Go
- Stars: 389
- Forks: 94
- Stars in 1週間: 23
- Category: ブロックチェーン
- Keywords: `L1ブロックチェーン` `Proof-of-Useful-Work` `Go` `vLLMマイナー` `ZK証明` `SPVクライアント`
- Summary source: README

#### README要約

- PearlはProof-of-Useful-Workプロトコルに基づくL1ブロックチェーンで、マイニングが任意の行列乗算の副産物として行われる。
- フルノードpearld、HDウォレットOyster、SPVライトクライアント、ZK証明システム、vLLMマイナーなどを含むモノレポ構成。
- ブロックチェーンノード運用者やGPUマイナー、開発者を対象とし、ウォレット作成からノード起動、vLLMマイナーまでの一連のセットアップを提供。
- Go 1.26以上、Rust、Cコンパイラ、Python 3.12、CUDAツールキットなどが前提で、prebuiltバイナリはmacOS/Linux/Windows向けにインストール可能。

---

### 20. [ltaoo/wx_channels_download](https://github.com/ltaoo/wx_channels_download)

> 微信视频号下载器

- Language: Go
- Stars: 10,069
- Forks: 1,667
- Stars in 1週間: 232
- Category: 動画ダウンロードツール
- Keywords: `WeChat` `視頻号` `動画ダウンロード` `Go` `プロキシ` `Windows/macOS`
- Summary source: README

#### README要約

- 微信（WeChat）の動画チャンネル「視頻号」から動画をダウンロードするためのツールです。
- PC版微信にプロキシ経由でダウンロードボタンを追加し、再生中の動画を複数の画質から選択して保存できます。
- macOSとWindowsのユーザーが、視頻号の動画をローカルに保存したい場合に利用します。
- 管理者権限での実行と初回の証明書インストールが必要で、利用は自己責任とされています。

---

### 21. [zhoushoujianwork/easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent)

> 嘉立创EDA专业版(EasyEDA Pro)自动化：给 AI harness 装上画板的「手」—— 一套 typed 原理图/PCB 动作，CLI / Agent Skill / stdio MCP 三形态融合接入。承接嘉立创「不以卖板赚钱，以培养中国工程师为己任」 | EasyEDA Pro automation: the hands of your AI harness — typed schematic/PCB actions via CLI, Agent Skill and stdio MCP.

- Language: Go
- Stars: 800
- Forks: 99
- Stars in 1週間: 114
- Category: EDA自動化・AIエージェント
- Keywords: `EasyEDA Pro` `嘉立創EDA` `AIエージェント` `PCB設計` `MCP` `Go`
- Summary source: README

#### README要約

- EasyEDA Pro（嘉立创EDA専業版）をAIが直接操作するための自動化レイヤーで、データシート読解・原理図作成・PCBレイアウト・シルク整理・検査までを実行する。
- CLI/daemon、EasyEDA内で動くConnector拡張、AIクライアント向けAgent Skillの3構成で、公式eda.* API経由のtyped actionsにより書き込み前後の検証・回読・DRCを行う。
- 自然言語で回路要件を伝えるだけで、部品ライブラリ作成、部品標準化、配置・配線・ベタ・シルク調整、BOMや製造ファイル出力まで担うため、AIエージェントで基板設計を進めたいエンジニア向け。
- EasyEDA Pro V4（推奨V4.1.60以降）が必要で、外部連携の有効化とConnector導入が前提。高密度基板の全自動配線は外部Freerouting頼み、インピーダンス検証やundo非対応などの制約がある。

---

### 22. [Autumn-27/ScopeSentry](https://github.com/Autumn-27/ScopeSentry)

> ScopeSentry-Cyberspace mapping, subdomain enumeration, port scanning, sensitive information discovery, vulnerability scanning, distributed nodes

- Language: Go
- Stars: 2,113
- Forks: 470
- Stars in 1週間: 201
- Category: セキュリティスキャナー
- Keywords: `資産マッピング` `サブドメイン列挙` `脆弱性スキャン` `分散ノード` `プラグインシステム` `Docker`
- Summary source: README

#### README要約

- ScopeSentryは、サイバースペースの資産マッピング、サブドメイン列挙、脆弱性スキャンなどを行うセキュリティツールです。
- プラグインシステムを備え、ポートスキャン、ディレクトリスキャン、サブドメインテイクオーバー検出、クローラー、ページ監視など多様な機能を提供します。
- 複数の分散ノードを構築してスキャンタスクを自由に割り当てられるため、大規模な資産管理や迅速な脆弱性確認を行うセキュリティ担当者に適しています。
- 導入はDocker Composeで行い、MongoDBとRedisが必要です。ライセンスはAGPL-3.0ですが、商用利用には別途商用ライセンスが必要です。

---
