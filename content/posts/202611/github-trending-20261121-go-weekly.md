+++
title = 'GitHub Trending 1週間レポート (go) - 2026/11/21'
date = 2026-11-21T01:59:58.222Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月21日 1:59:58
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 14
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のAIエージェント基盤と開発支援ツールがトレンドを席巻し、特にコードレビュー自動化とセキュアな実行環境への関心が集中している

- AIコードレビューやコーディングエージェント関連のリポジトリが上位を占め、alibaba/open-code-reviewとTencent/LoopForgeが4,000スター超を獲得
- AIエージェントの安全な実行基盤として、サンドボックス技術（gVisor、microVM、Docker）を提供するプロジェクトが複数ランクイン
- Kubernetes上でのAIエージェント運用を支援するツールが注目され、宣言的管理やGitOpsとの親和性が重視されている
- 従来型のインフラツール（Docker管理、Gitホスティング、セキュリティスキャン）も根強い人気を維持
- 全リポジトリがGo言語で実装されており、CLIツールやシステム基盤開発でのGoの優位性が際立つ

### 主なテーマ

- **AIコードレビューと開発ワークフロー自動化**: LLMエージェントを活用したコードレビューの自動化と、複数のコーディングエージェントを統合した開発ワークフローの構築が注目されている。alibaba/open-code-reviewは4,457スターを獲得し、決定論的パイプラインとLLMのハイブリッド構成で精密なレビューを実現。Tencent/LoopForgeは4,599スターで、複数のAI CLIを統合し人の承認ゲート付きでPR自動化を提供する。（`alibaba/open-code-review`、`Tencent/LoopForge`、`runkids/skillshare`）
- **AIエージェントのセキュアな実行基盤**: AIエージェントを安全に実行するためのサンドボックス環境とランタイム基盤が複数登場。agent-substrate/substrateはKubernetes上でゼロトラストサンドボックスを提供し1,425スター、opensandbox-group/OpenSandboxはDocker/Kubernetes対応の隔離環境を提供。gVisorやmicroVMによる分離、認証情報管理、ネットワーク制御などのセキュリティ機能が重視されている。（`agent-substrate/substrate`、`opensandbox-group/OpenSandbox`、`kagent-dev/kagent`）
- **コンテナとKubernetesエコシステムの成熟**: Docker管理ツールやKubernetesセキュリティなど、コンテナ基盤の運用・管理ツールが安定した人気を維持。getarcaneapp/arcaneは1,868スターでモダンなDocker管理UIを提供し、docker/composeは公式ツールとして継続的に支持されている。kubescape/kubescapeとaquasecurity/trivyはセキュリティスキャン分野で実績を持つ。（`getarcaneapp/arcane`、`docker/compose`、`kubescape/kubescape`、`aquasecurity/trivy`）
- **セルフホスト型インフラサービス**: Gitホスティングやメールサーバーなど、自社インフラで運用可能なオープンソースサービスが継続的に評価されている。gogs/gogsは軽量なGitホスティング、Billionmail/BillionMailはメールマーケティング基盤を提供し、いずれも低スペック環境での動作やコスト削減を訴求している。（`gogs/gogs`、`Billionmail/BillionMail`）
- **AI開発支援の最適化ツール**: コーディングエージェントのトークン消費削減や設定管理など、AI開発の実用性を高める周辺ツールが登場。JuliusBrussee/cavemanは2,236スターでトークン削減プロキシを提供し、runkids/skillshareは複数AI CLIツール間でのスキル同期を実現する。（`JuliusBrussee/caveman`、`runkids/skillshare`）

### 補足的な観察

- スター獲得数の上位2件（alibaba/open-code-review: 4,457、Tencent/LoopForge: 4,599）がいずれもAIコードレビュー・ワークフロー自動化分野で、AI開発支援への関心の高さを反映
- 全14リポジトリがGo言語で実装されており、CLIツール、システム基盤、ネットワークサービスなど幅広い用途でGoが採用されている
- Kubernetes関連プロジェクトが5件（substrate、OpenSandbox、kagent、kubescape、Trivy）あり、コンテナオーケストレーション基盤としてのKubernetesの重要性が継続
- 従来型ツール（cli/cli、gogs/gogs、docker/compose）も一定のスターを獲得し、新規AIツールと既存インフラツールが共存する状況

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 14 |

## Repository一覧

### 1. [alibaba/open-code-review](https://github.com/alibaba/open-code-review)

> Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

- Language: Go
- Stars: 54,799
- Forks: 4,523
- Stars in 1週間: 4,457
- Category: AIコードレビューツール
- Keywords: `コードレビュー` `LLMエージェント` `CLI` `Git diff` `CI/CD統合` `静的解析`
- Summary source: README

#### README要約

- Alibaba発のAIコードレビューCLIツールで、Git diffを解析しLLMエージェント経由で行レベルの精密なレビューコメントを生成する。
- 決定論的パイプラインとLLMエージェントのハイブリッド構成で、ファイル選定・バンドル・ルールマッチングを工学的に制御し、NPE・スレッドセーフティ・XSS・SQLインジェクション等の多言語ルールセットを内蔵。
- Claude Code、Codex、Cursor、Kimi Code等のエージェントに対応し、CI/CD統合も可能。大規模変更セットやコードベース全体のスキャン監査に適する。
- 導入にはGit 2.41以上とocr CLIが必要。ネイティブモードはOCR用モデルプロバイダー設定が必要だが、デリゲーションモードなら既存エージェントの認証で利用可能。

---

### 2. [getarcaneapp/arcane](https://github.com/getarcaneapp/arcane)

> Modern Docker Management, Designed for Everyone

- Language: Go
- Stars: 10,197
- Forks: 577
- Stars in 1週間: 1,868
- Category: Docker管理ツール
- Keywords: `Docker` `コンテナ管理` `Go` `オープンソース` `Web UI` `v3`
- Summary source: README

#### README要約

- Arcaneは、誰でも使えるように設計されたモダンなDocker管理ツールです。
- Go言語で開発されており、現在mainブランチはv3バージョンとして開発が進められています。
- Docker環境の管理を必要とする開発者やシステム管理者を対象としています。
- セットアップ手順や設定詳細は公式ドキュメントサイト（getarcane.app）で確認でき、BSD-3-Clauseライセンスで提供されています。

---

### 3. [agent-substrate/substrate](https://github.com/agent-substrate/substrate)

> Agent Substrate: the core system

- Language: Go
- Stars: 8,030
- Forks: 879
- Stars in 1週間: 1,425
- Category: エージェント基盤・サンドボックスランタイム
- Keywords: `Kubernetes` `ゼロトラスト` `サンドボックス` `gVisor` `microVM` `SPIFFE`
- Summary source: README

#### README要約

- Kubernetes上で数百万のエージェントをゼロトラストサンドボックスで安全に実行するランタイム。
- gVisorやmicroVMによるVM級分離、SPIFFE証明書によるエージェント単位の暗号ID、サンドボックス外での認証情報注入、デフォルト拒否ネットワークを提供する。
- アイドル状態のアクターをスナップショットして退避し、少数のワーカープールに多重化することで10〜30倍のオーバーサブスクリプションを実現する。
- AIエージェント基盤の運用者やプラットフォーム開発者向けで、LangChainやMCP等のフレームワーク非依存、標準Kubernetes上で動作する。

---

### 4. [runkids/skillshare](https://github.com/runkids/skillshare)

> 📚 Sync skills, agents, MCP, plugins to all AI CLI tools with one command and simplify team sharing.

- Language: Go
- Stars: 3,259
- Forks: 385
- Stars in 1週間: 161
- Category: AI開発ツール管理
- Keywords: `AI CLI` `スキル同期` `MCP` `Claude Code` `チーム共有` `Go`
- Summary source: README

#### README要約

- スキル、エージェント、ルール、MCP接続、フックを一元管理し、Claude Code、Codex、Pi、OpenCodeなど複数のAI CLIツールへ同期するツール。
- 単一のソースディレクトリからシンボリンク（Windowsではジャンクションまたはコピー）で各ツールへ配布し、Gitでのバージョン管理やチーム共有、セキュリティ監査機能を備える。
- 複数のAIツールを使い分ける開発者や、プロジェクトのAI設定をチームで共有・オンボーディングしたいチームを対象とする。
- Go製の単一バイナリとしてCLIを提供し、macOS/Windows/Linux向けデスクトップアプリやHomebrew、Nix、GitHub Actionsでも導入可能。MITライセンス。

---

### 5. [Tencent/LoopForge](https://github.com/Tencent/LoopForge)

> Self-hosted workflows for coding-agent delivery. Orchestrate CodeBuddy, Codex and Claude Code with scripts and human approval gates. Includes Local workflows for coding assistants.

- Language: Go
- Stars: 5,288
- Forks: 724
- Stars in 1週間: 4,599
- Category: AI開発ワークフロー基盤
- Keywords: `コーディングエージェント` `SOP` `セルフホスト` `Dockerサンドボックス` `承認ゲート` `Go`
- Summary source: README

#### README要約

- チームがコーディングエージェントでソフトウェアを出荷するためのセルフホスト型ワークスペース。
- Main BotとのチャットかSOP実行の2経路で、Dockerサンドボックス・役割分担・人の承認ゲート付きでPRまで自動化する。
- CodeBuddy、Codex、Claude Codeなど10種のCLIを実行基盤とし、再現性のある開発フローを求めるチーム向け。
- MITライセンスで、DockerとPython 3が必要。./start.shで起動し、モデルAPIキーとGitHub連携は起動後に設定する。

---

### 6. [opensandbox-group/OpenSandbox](https://github.com/opensandbox-group/OpenSandbox)

> Secure, Fast, and Extensible Sandbox runtime for AI agents.

- Language: Go
- Stars: 17,740
- Forks: 1,709
- Stars in 1週間: 457
- Category: AIエージェント基盤
- Keywords: `サンドボックス` `AIエージェント` `Kubernetes` `Docker` `MCP` `コード実行`
- Summary source: README

#### README要約

- AIエージェント向けに、コード実行・コマンド実行・ファイル操作・ブラウザ/デスクトップ操作のための隔離サンドボックス環境を提供するランタイム。
- Dockerでローカル実行でき、Kubernetesへは統一サンドボックスAPI経由でデプロイ可能。Fast Sandbox runtime、ネットワーク制御、Credential Vault、SDK/CLI/MCPを備える。
- コーディングエージェント、コード実行・データ分析、ブラウザ/デスクトップ自動化、エージェント評価などを安全に行いたい開発者や基盤運用者向け。
- ローカル実行にはDocker、例とローカルランタイムにはPython 3.10+が必要。本番イメージはdigest固定と署名/検証状況の確認が推奨される。

---

### 7. [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

> why use many token when few token do trick. Skill + local proxy for coding agents: shorter answers, smaller tool output, every original recoverable.

- Language: Go
- Stars: 121,799
- Forks: 7,104
- Stars in 1週間: 2,236
- Category: AI開発ツール
- Keywords: `トークン削減` `コーディングエージェント` `ローカルプロキシ` `CLI` `Go` `コスト削減`
- Summary source: README

#### README要約

- コーディングエージェントの応答とツール出力を圧縮し、トークン消費を削減するスキル＋ローカルプロキシツール。
- 短い応答スタイル（/caveman等）、ログやJSONの圧縮、モデル自動選択、スクリプト再利用など6つの機能を1コマンドで導入可能。
- Claude、Codex、Gemini CLIなど30以上のAIコーディングエージェントを使う開発者向け。
- npx @caveman-ai/cli@latestで導入。Node.js 22.13+が必要。CLIはデフォルトで使用統計を送信するが無効化可能。

---

### 8. [kagent-dev/kagent](https://github.com/kagent-dev/kagent)

> Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord

- Language: Go
- Stars: 4,472
- Forks: 936
- Stars in 1週間: 199
- Category: AIエージェント基盤
- Keywords: `Kubernetes` `AIエージェント` `MCP` `OpenTelemetry` `GitOps` `Apache 2.0`
- Summary source: README

#### README要約

- kagentはKubernetes上でAIエージェントを構築・デプロイ・管理するためのKubernetesネイティブなフレームワークである。
- エージェントやテンプレート、ハーネス、LLMプロバイダー、MCPツール、セッションなどをKubernetesカスタムリソースとして定義し、Controller、UI、CLI、Substrate、PostgreSQLなどのコンポーネントで実行・管理する。
- KubernetesのAPIやkubectl、GitOpsワークフローに親しむ開発者やプラットフォーム運用者が、宣言的にAIエージェントを運用したい用途に向いている。
- 導入にはKubernetes環境が前提となり、インストールガイドやアーキテクチャガイドに沿って設定する必要がある。ライセンスはApache 2.0で、プロジェクトは活発に開発中と記載されている。

---

### 9. [gogs/gogs](https://github.com/gogs/gogs)

> The painless way to host your own Git service

- Language: Go
- Stars: 47,961
- Forks: 5,080
- Stars in 1週間: 41
- Category: Gitホスティング
- Keywords: `セルフホスト` `Gitサービス` `Go言語` `軽量` `コードホスティング` `マルチプラットフォーム`
- Summary source: README

#### README要約

- Gogsは、シンプルで安定した拡張可能なセルフホストGitサービスを、最も簡単な方法で構築することを目指すプロジェクトです。
- Go言語で開発され、Linux、macOS、Windows、ARMベースシステムなど、Goがサポートする全プラットフォームで独立したバイナリとして動作します。
- コードホスティング、コード閲覧、コラボレーション、自動化、インターフェース、統合、セキュリティ、運用などの機能を提供します。
- Raspberry Piや月額5ドルのDigitalOcean Dropletなど、低スペック環境でも動作し、チームワークには2CPUコアと512MB RAMが基準となります。

---

### 10. [cli/cli](https://github.com/cli/cli)

> GitHub’s official command line tool

- Language: Go
- Stars: 47,109
- Forks: 9,433
- Stars in 1週間: 159
- Category: CLIツール
- Keywords: `GitHub` `CLI` `gh` `ターミナル` `プルリクエスト` `Issue`
- Summary source: README

#### README要約

- GitHub CLI（gh）は、GitHubの公式コマンドラインツールです。
- プルリクエストやIssueなどのGitHubの概念をターミナルに持ち込み、gitやコードと並行して操作できます。
- GitHub.com、GitHub Enterprise Cloud、およびサポートされているGitHub Enterprise Serverのユーザーが対象で、macOS、Windows、Linuxで利用可能です。
- Homebrew、WinGet、各種パッケージマネージャー、プリコンパイル済みバイナリ、ソースからのビルドなど、多様なインストール方法が提供されています。

---

### 11. [Billionmail/BillionMail](https://github.com/Billionmail/BillionMail)

> BillionMail gives you open-source MailServer, NewsLetter, Email Marketing — fully self-hosted, dev-friendly, and free from monthly fees. Join the discord: https://discord.gg/asfXzBUhZr

- Language: Go
- Stars: 16,439
- Forks: 1,835
- Stars in 1週間: 165
- Category: メールマーケティング
- Keywords: `オープンソース` `メールサーバー` `セルフホスト` `ニュースレター` `Go` `AGPLv3`
- Summary source: README

#### README要約

- BillionMailは、メールサーバー、ニュースレター、メールマーケティング機能を提供するオープンソースのセルフホスト型ソリューションです。
- 高度な分析、顧客管理、無制限のメール送信、カスタマイズ可能なテンプレート、RoundCubeによるWebメール機能を備えています。
- 自社サーバーでメールキャンペーンを完全に管理したい企業や個人、月額費用を避けたい開発者やマーケターに適しています。
- インストールはシェルスクリプトまたはDockerで行い、ドメイン接続とDNSレコードの検証が必要です。ライセンスはAGPLv3です。

---

### 12. [kubescape/kubescape](https://github.com/kubescape/kubescape)

> Kubescape is an open-source Kubernetes security platform for your IDE, CI/CD pipelines, and clusters. It includes risk analysis, security, compliance, and misconfiguration scanning, saving Kubernetes users and administrators precious time, effort, and resources.

- Language: Go
- Stars: 11,967
- Forks: 1,114
- Stars in 1週間: 91
- Category: Kubernetesセキュリティ
- Keywords: `Kubernetes` `セキュリティスキャン` `脆弱性管理` `コンプライアンス` `CNCF` `Go`
- Summary source: README

#### README要約

- Kubescapeは開発からランタイムまでKubernetes環境を包括的に保護するオープンソースのセキュリティプラットフォームです。
- NSA-CISAやMITRE ATT&CK、CISベンチマークに基づく誤設定スキャン、Grypeによるイメージ脆弱性検出、Copaceticによる自動パッチ適用、eBPFベースのランタイム監視などの機能を提供します。
- Kubernetesユーザーや管理者がIDE、CI/CDパイプライン、クラスタ上でリスク分析やコンプライアンス確認を行う用途に適しています。
- curlやHomebrew、Krewなどでインストール可能で、CLIコマンドやVS Code拡張を通じて利用できます。

---

### 13. [docker/compose](https://github.com/docker/compose)

> Define and run multi-container applications with Docker

- Language: Go
- Stars: 39,066
- Forks: 6,054
- Stars in 1週間: 694
- Category: コンテナオーケストレーションツール
- Keywords: `Docker` `マルチコンテナ` `compose.yaml` `Go` `CLIプラグイン` `コンテナ管理`
- Summary source: README

#### README要約

- Docker Composeは、Composeファイル形式で定義された複数コンテナからなるアプリケーションをDocker上で実行するためのツールです。
- compose.yamlにサービス構成を記述し、docker compose upコマンド一つでアプリ全体を起動・管理できます。
- 複数のコンテナを使うアプリケーションの開発者や、再現可能な環境を構築したいユーザーに適しています。
- Windows/macOSではDocker Desktopに同梱され、Linuxではリリースページからバイナリを取得してcli-pluginsに配置します。

---

### 14. [aquasecurity/trivy](https://github.com/aquasecurity/trivy)

> Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more

- Language: Go
- Stars: 39,581
- Forks: 915
- Stars in 1週間: 304
- Category: セキュリティスキャナー
- Keywords: `脆弱性スキャン` `SBOM` `Kubernetes` `コンテナセキュリティ` `IaC` `シークレット検出`
- Summary source: README

#### README要約

- TrivyはコンテナやKubernetes、コードリポジトリなどを対象にした包括的なセキュリティスキャナーです。
- 脆弱性（CVE）、IaCの設定ミス、機密情報やシークレット、ソフトウェアライセンス、SBOMを検出できます。
- コンテナイメージ、ファイルシステム、Gitリポジトリ、VMイメージ、Kubernetesクラスタをスキャン対象としてサポートします。
- brewやDocker、バイナリで導入可能で、GitHub ActionsやKubernetes operator、VS Code拡張などの統合も提供されます。

---
