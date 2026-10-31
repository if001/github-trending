+++
title = 'GitHub Trending 1週間レポート (go) - 2026/10/31'
date = 2026-10-31T00:23:15.640Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月31日 0:23:15
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 19
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のAIエージェント基盤とセルフホスト型インフラツールがトレンドを席巻

- AIエージェント関連が全体の約半数を占め、コーディング支援・ワークフロー自動化・マルチエージェント管理など多様な実装が進行
- セルフホスト可能なAIゲートウェイやAPIプロキシが高い関心を集め、企業・チームでのLLM運用基盤の整備が加速
- Go言語が全19件中18件を占める圧倒的な優位性を示し、インフラ・DevOps領域での採用が継続
- ローカルLLM実行環境やRAGエンジンなど、プライバシーとカスタマイズ性を重視したツールが台頭

### 主なテーマ

- **AIエージェントとコーディング自動化**: 大規模プロジェクト対応のコーディングエージェント、GitHub Actions連携のワークフロー自動化、人間とAIの協働プラットフォームなど、開発現場でのAI活用を具体化するツールが集中。Claude CodeやCodexなど既存エージェントCLIを統合管理する仕組みも登場している。（`plandex-ai/plandex`、`github/gh-aw`、`multica-ai/multica`、`samber/cc-skills-golang`）
- **セルフホスト型AIゲートウェイとAPIプロキシ**: 複数のLLMプロバイダーを統合管理するゲートウェイや、CLIツールをOpenAI互換APIとしてラップするプロキシが高いスター数を獲得。企業でのモデルアクセス制御、コスト管理、マルチアカウント運用の需要を反映している。（`QuantumNous/new-api`、`router-for-me/CLIProxyAPI`）
- **ローカルLLMとRAG基盤**: プライバシーを保ちながらオープンモデルを実行するツールや、非構造化データからの知識抽出を行うRAGエンジンが注目を集める。エージェント機能との融合や、多様なデータソースへの対応が進んでいる。（`ollama/ollama`、`infiniflow/ragflow`）
- **Go言語製インフラ・運用ツール**: ログ集約、時系列データベース、コンテナオーケストレーション、VPNなど、クラウドネイティブな運用基盤を支えるGo製ツールが安定した人気を維持。単一バイナリでの提供やKubernetes連携など、運用効率を重視した設計が特徴。（`grafana/loki`、`VictoriaMetrics/VictoriaMetrics`、`hashicorp/nomad`、`docker/compose`、`tailscale/tailscale`、`cloudflare/cloudflared`）
- **開発者向けユーティリティとセキュリティ**: ターミナル上で動作する高機能エディタ、セルフホスト型WAF、デスクトップアプリ開発フレームワーク、求人検索エンジンなど、開発者の生産性とセキュリティを向上させる周辺ツールも着実に支持を集めている。（`eugenioenko/ttt`、`chaitin/SafeLine`、`wailsapp/wails`、`strelov1/freehire`）

### 補足的な観察

- 言語分布はGoが18件、残り1件もGo関連のスキル集であり、Goエコシステムの圧倒的な優位が顕著
- スター獲得数ではrouter-for-me/CLIProxyAPI（1,031）とollama/ollama（1,092）がトップを争い、AIゲートウェイとローカルLLMへの関心の高さを示唆
- カテゴリ別ではAI関連が10件以上を占め、従来のインフラツール（ログ・監視・オーケストレーション）と融合する傾向が見られる
- セルフホスト可能なツールが全体の約7割を占め、データ主権とカスタマイズ性を重視する動きが継続

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 19 |

## Repository一覧

### 1. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)

> RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs

- Language: Go
- Stars: 93,222
- Forks: 11,186
- Stars in 1週間: 508
- Category: RAGエンジン
- Keywords: `RAG` `LLM` `エージェント` `文書理解` `チャンキング` `オープンソース`
- Summary source: README

#### README要約

- RAGFlowは、最先端のRAGとエージェント機能を融合させ、LLM向けのコンテキスト層を構築するオープンソースの検索拡張生成（RAG）エンジンです。
- 複雑な非構造化データからの深い文書理解に基づく知識抽出、テンプレートベースのチャンキング、多段階のエージェンティック検索、引用の可視化などを提供します。
- 個人から大規模企業までを対象とし、Word、PDF、Excel、Webページなど多様なデータソースを扱う本番向けAIシステムの構築に適しています。
- Dockerまたはソースからの起動で導入でき、Docker利用時は4コアCPU・16GBメモリ・50GBディスクが推奨され、ソース起動にはGoが必要です。

---

### 2. [slavakurilyak/awesome-ai-agents](https://github.com/slavakurilyak/awesome-ai-agents)

> Awesome list of 300+ agentic AI resources

- Language: Go
- Stars: 2,796
- Forks: 726
- Stars in 1週間: 182
- Category: Awesomeリスト
- Keywords: `AIエージェント` `キュレーションリスト` `オープンソース` `開発フレームワーク` `長期メモリ` `プロジェクト追跡`
- Summary source: README

#### README要約

- Slava Kurilyakがキュレーションする、300以上のエージェント型AIプロジェクトを追跡するAwesomeリストです。
- AIエージェント、長期メモリ、開発フレームワークなどのカテゴリ別に整理され、各プロジェクトの提出者やメンテナー情報も記載されています。
- AIエージェントの開発者や研究者が、公開リポジトリを持つプロジェクトを探索・比較する際に利用します。
- 掲載にはGitHub、GitLab.com、Codeberg上の公開リポジトリが必要で、リポジトリを持たないホスト型製品は掲載されません。

---

### 3. [multica-ai/multica](https://github.com/multica-ai/multica)

> Make humans and AI agents work as one team — open-source and self-hostable.

- Language: Go
- Stars: 54,390
- Forks: 7,165
- Stars in 1週間: 760
- Category: AIエージェント管理プラットフォーム
- Keywords: `AIコーディングエージェント` `セルフホスト` `Issue管理` `マルチエージェント` `Go` `ワークスペース`
- Summary source: README

#### README要約

- Multicaは、AIコーディングエージェントをチームメイトのようにIssueにアサインして作業を任せられる、ソース公開のワークスペースです。
- Claude CodeやCodexなど既存のエージェントCLIを自前のマシン上で駆動し、進捗報告・実行ログ・レビューゲート・コスト分析をIssue単位で一元管理します。
- 複数のAIエージェントと人間のチームを同じボードで協働させたい開発チーム向けで、Squad編成やSlack等のチャット連携、定期実行のAutopilotも備えます。
- クラウド版・デスクトップ版のほかDocker ComposeやHelmでセルフホスト可能ですが、実行マシンに対応エージェントCLIのインストールと認証が前提で、ライセンスはApache 2.0ベースの独自条件付きです。

---

### 4. [QuantumNous/new-api](https://github.com/QuantumNous/new-api)

> Open-source AI gateway. Self-hosted LLM gateway with OpenAI-, Claude- and Gemini-compatible APIs, model routing, access control, usage tracking and cost accounting.

- Language: Go
- Stars: 51,059
- Forks: 12,374
- Stars in 1週間: 535
- Category: AIゲートウェイ
- Keywords: `AIゲートウェイ` `セルフホスト` `LLM` `モデルルーティング` `アクセス制御` `コスト管理`
- Summary source: README

#### README要約

- アプリケーション、エージェント、チーム向けのセルフホスト型AIゲートウェイです。
- OpenAI、Anthropic、Gemini互換APIの提供、モデルルーティング、アクセス制御、使用量追跡、コスト管理を一元化します。
- チームでのモデルアクセス共有、プロバイダー切り替えの簡素化、プライベートなマルチモデルサービスの運用に適しています。
- DockerまたはDocker Composeで導入可能で、SQLite、MySQL、PostgreSQL、Redisなどのストレージオプションをサポートします。

---

### 5. [plandex-ai/plandex](https://github.com/plandex-ai/plandex)

> Open source AI coding agent. Designed for large projects and real world tasks.

- Language: Go
- Stars: 15,862
- Forks: 1,185
- Stars in 1週間: 93
- Category: AIコーディングエージェント
- Keywords: `AIエージェント` `ターミナル` `大規模プロジェクト` `Go` `差分レビュー` `マルチモデル`
- Summary source: README

#### README要約

- Plandexは大規模プロジェクトや実務タスク向けに設計された、ターミナルベースのオープンソースAIコーディングエージェントです。
- 最大2Mトークンのコンテキストやtree-sitterによるプロジェクトマップで大規模コードを扱い、差分レビューサンドボックスで変更を安全に管理します。
- 複数ファイルにまたがる機能開発を自動化したい開発者向けで、完全自律モードから細かい制御まで設定可能です。
- curlによるワンラインインストールが可能で、WindowsはWSL経由のみ対応、Plandex Cloudは新規受付を終了しています。

---

### 6. [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)

> Wrap Antigravity, ChatGPT Codex, Claude Code, Grok Build, Muse Code, Devin as an OpenAI/Gemini/Claude/Codex compatible API service, allowing you to enjoy the free Gemini Series, GPT Series, Grok Series, Claude model through API

- Language: Go
- Stars: 57,044
- Forks: 8,728
- Stars in 1週間: 1,031
- Category: APIプロキシ
- Keywords: `CLIProxyAPI` `APIプロキシ` `OpenAI互換` `Claude` `Gemini` `マルチアカウント`
- Summary source: README

#### README要約

- CLIProxyAPIは、Antigravity、ChatGPT Codex、Claude Code、Grok Build、Muse Code、DevinなどのCLIツールをOpenAI/Gemini/Claude/Codex互換のAPIサービスとしてラップするプロキシサーバーです。
- 複数のCLIアカウントをローカルで管理し、OAuth認証やAPIキーを通じて各プロバイダーのモデル（GPT-6、Claude Fable 5.1、Gemini 4 Argon、Grok 4.7など）にアクセス可能にします。
- OpenAI、Gemini、Claude互換のクライアントやSDKを使用する開発者が、無料のGeminiシリーズ、GPTシリーズ、Grokシリーズ、ClaudeモデルをAPI経由で利用する際に適しています。
- Go言語で実装されており、デスクトップクライアントのEasyCLIProxyAPIも提供されています。MITライセンスで公開されています。

---

### 7. [grafana/loki](https://github.com/grafana/loki)

> Like Prometheus, but for logs.

- Language: Go
- Stars: 29,095
- Forks: 4,165
- Stars in 1週間: 56
- Category: ログ管理・監視
- Keywords: `ログ集約` `Prometheus` `Grafana` `Kubernetes` `マルチテナント` `ラベルベース索引`
- Summary source: README

#### README要約

- LokiはPrometheusに着想を得た、水平スケーラブルで高可用性を備えたマルチテナント型ログ集約システムです。
- ログ本文の全文インデックスを行わず、各ログストリームのラベルのみを索引化し、圧縮した非構造化ログを保存することで低コストかつ運用を簡素化しています。
- Prometheusと同じラベルでメトリクスとログをシームレスに切り替えられ、KubernetesのPodログ収集やGrafana(v6.0以降)での可視化に適しています。
- ログ収集にはAlloyを使用し(Promtailは機能完成済み)、Grafanaでクエリ・表示を行います。シングルバイナリで依存関係なく動作させることも可能です。

---

### 8. [wailsapp/wails](https://github.com/wailsapp/wails)

> Create beautiful applications using Go

- Language: Go
- Stars: 36,851
- Forks: 1,916
- Stars in 1週間: 192
- Category: デスクトップアプリ開発フレームワーク
- Keywords: `Go` `デスクトップアプリ` `WebView` `フロントエンド` `CLI` `マルチプラットフォーム`
- Summary source: README

#### README要約

- GoとWeb技術を使ってデスクトップアプリケーションを構築するためのフレームワークです。
- GoコードとWebフロントエンドを単一バイナリにまとめ、プロジェクト作成・コンパイル・バンドルをCLIで支援します。
- Goプログラマーが既存アプリにHTML/JS/CSSのUIを追加したり、軽量なデスクトップアプリを作る用途に向いています。
- v2とv3があり、それぞれgo installで導入可能です。Electron代替としては要件次第とされています。

---

### 9. [chaitin/SafeLine](https://github.com/chaitin/SafeLine)

> SafeLine is a self-hosted WAF(Web Application Firewall) / reverse proxy to protect your web apps from attacks and exploits.

- Language: Go
- Stars: 23,123
- Forks: 1,587
- Stars in 1週間: 209
- Category: セキュリティ・WAF
- Keywords: `WAF` `リバースプロキシ` `Webセキュリティ` `セルフホスト` `Go` `ファイアウォール`
- Summary source: README

#### README要約

- SafeLineは、Webアプリケーションを攻撃やエクスプロイトから保護するセルフホスト型のWAF（Web Application Firewall）兼リバースプロキシです。
- SQLインジェクションやXSSなどのWeb攻撃のブロック、レート制限、ボット対策、HTML/JSコードの動的暗号化などの機能を備えています。
- Webアプリとインターネットの間にシールドを配置し、悪意のあるHTTP/Sトラフィックをフィルタリング・監視・ブロックしたい開発者や運用者に適しています。
- インストールは公式のInstall Guideに従って行いますが、中国本土のユーザーが国際版をインストールするとクラウドサービスに接続できない場合があるため注意が必要です。

---

### 10. [ollama/ollama](https://github.com/ollama/ollama)

> Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

- Language: Go
- Stars: 185,380
- Forks: 18,777
- Stars in 1週間: 1,092
- Category: ローカルLLM実行ツール
- Keywords: `Ollama` `ローカルLLM` `REST API` `llama.cpp` `CLI` `オープンモデル`
- Summary source: README

#### README要約

- Ollamaは、オープンなAIモデルをローカル環境やクラウドでプライバシーを保ちながら実行・管理するためのツールです。
- CLI、REST API、Python/JavaScriptライブラリを提供し、llama.cppをバックエンドとしてGemmaなどのモデルを手軽に起動できます。
- Claude CodeやOpenClawなどのコーディングエージェントやAIアシスタントと連携したい開発者や、ローカルでLLMを活用したいユーザー向けです。
- macOS、Windows、Linux、Dockerに対応しており、インストールスクリプトや手動ダウンロードで導入できます。

---

### 11. [tailscale/tailscale](https://github.com/tailscale/tailscale)

> The easiest, most secure way to use WireGuard and 2FA.

- Language: Go
- Stars: 38,374
- Forks: 3,395
- Stars in 1週間: 380
- Category: ネットワーク・VPN
- Keywords: `WireGuard` `VPN` `Go` `プライベートネットワーク` `tailscaled` `CLI`
- Summary source: README

#### README要約

- TailscaleはWireGuardを簡単に利用できるプライベートネットワークを構築するためのオープンソースソフトウェアです。
- このリポジトリにはtailscaledデーモンとtailscale CLIツールが含まれ、Linux、Windows、macOS、FreeBSD、OpenBSDで動作します。
- 個人や組織が安全なVPN環境を構築したい場合に利用され、モバイルアプリの基盤コードとしても使われています。
- ビルドには最新のGoが必要で、配布用パッケージ作成時はbuild_dist.shを使用してバージョン情報を埋め込む必要があります。

---

### 12. [github/gh-aw](https://github.com/github/gh-aw)

> GitHub Agentic Workflows

- Language: Go
- Stars: 5,534
- Forks: 609
- Stars in 1週間: 93
- Category: AI開発自動化ツール
- Keywords: `GitHub Actions` `AIエージェント` `ワークフロー自動化` `GitHub CLI拡張` `Markdown` `セキュア実行`
- Summary source: README

#### README要約

- MarkdownとYAML frontmatterでAI駆動のリポジトリ自動化を定義し、GitHub Actions経由でAIエージェントを安全に実行するGitHub CLI拡張です。
- gh aw compileコマンドでワークフローを検証・標準的なGitHub Actionsワークフローに変換し、GitHub CopilotやClaude Codeなど複数のAIエンジンをサポートします。
- Issueトリアージ、PRレビュー、CI失敗調査など、推論や解釈が必要なタスクを既存のCI/CDを補完する形で自動化したい開発者向けです。
- gh extension install github/gh-awで導入可能ですが、エージェントの実行はデフォルトで読み取り専用かつサンドボックス化されており、権限設定の慎重なレビューが必要です。

---

### 13. [strelov1/freehire](https://github.com/strelov1/freehire)

> freehire — the open-source search engine for job seekers

- Language: Go
- Stars: 3,387
- Forks: 349
- Stars in 1週間: 515
- Category: 求人検索エンジン
- Keywords: `求人検索` `オープンソース` `Go` `ATSクローラー` `セルフホスト` `MITライセンス`
- Summary source: README

#### README要約

- 企業の採用ページから直接収集したIT求人を検索できるオープンソースの求人検索エンジン。
- WorkdayやGreenhouseなど168のATSやTelegramチャンネルなど421ソースから求人を正規化・重複排除し、全文検索やファセット検索を提供する。
- 求職者向けに検索・応募管理・CV作成などの機能を備え、開発者は公開API、CLI、MCPサーバー経由でデータを利用できる。
- MITライセンスでセルフホスト可能。Docker Composeで起動でき、Go、PostgreSQL、Meilisearchなどで構成される。

---

### 14. [cloudflare/cloudflared](https://github.com/cloudflare/cloudflared)

> Cloudflare Tunnel client

- Language: Go
- Stars: 16,356
- Forks: 1,509
- Stars in 1週間: 141
- Category: ネットワークツール
- Keywords: `Cloudflare` `トンネル` `プロキシ` `Go` `セキュア接続` `CLI`
- Summary source: README

#### README要約

- Cloudflare Tunnelのコマンドラインクライアントで、Cloudflareネットワークからオリジンへのトラフィックをプロキシするトンネリングデーモンです。
- ファイアウォールに穴を開けることなく、Cloudflare経由でクライアントリクエストをオリジンに転送し、SSH/RDPなどのTCPトラフィックもサポートします。
- Webサーバーなどのオリジンを外部に公開せずにCloudflare経由でアクセス可能にしたいユーザー向けで、プライベートルーティングやレイヤー4通信にも対応します。
- macOS、Linux、Windows、Dockerでインストール可能で、使用前にCloudflareダッシュボードでウェブサイトの追加とネームサーバー設定が必要です。

---

### 15. [hashicorp/nomad](https://github.com/hashicorp/nomad)

> Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations.

- Language: Go
- Stars: 17,063
- Forks: 2,153
- Stars in 1週間: 42
- Category: ワークロードオーケストレーター
- Keywords: `コンテナオーケストレーション` `マルチクラウド` `GPU対応` `高可用性` `HashiCorp` `分散システム`
- Summary source: README

#### README要約

- Nomadはコンテナ、非コンテナアプリ、VMをオンプレミスやクラウド上でデプロイ・管理するシンプルで柔軟なワークロードオーケストレーターです。
- 単一バイナリで動作し、外部ストレージや調整サービスを必要とせず、リソース管理とスケジューリングを統合した自己完結型システムです。
- Docker、Podman、Java、QEMUなどのタスクドライバーに対応し、GPU/FPGA/TPUのデバイスプラグインやマルチリージョン・マルチクラウドのフェデレーションをサポートします。
- Terraform、Consul、Vaultとシームレスに統合し、10,000ノード以上の実運用実績があり、Linux、Windows、macOSで動作します。

---

### 16. [VictoriaMetrics/VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics)

> VictoriaMetrics: fast, cost-effective monitoring solution and time series database

- Language: Go
- Stars: 17,972
- Forks: 1,792
- Stars in 1週間: 76
- Category: 時系列データベース
- Keywords: `時系列データベース` `監視` `Prometheus` `MetricsQL` `スケーラブル` `Go`
- Summary source: README

#### README要約

- VictoriaMetricsは、高速でコスト効率が高く、スケーラブルな時系列データの監視・管理ソリューションです。
- Prometheusの長期ストレージやGrafanaでの代替として機能し、PromQLと高性能なMetricsQLの両方をサポートし、多様なプロトコルでのデータ取り込みが可能です。
- APM、Kubernetes、IoTセンサー、産業テレメトリ、金融データなど、大規模な時系列データを扱うあらゆる規模の企業やワークロードに適しています。
- 依存関係のない単一の小さなバイナリで提供され、シングルノード版とクラスタ版がApache License 2.0で利用可能で、エンタープライズ版では異常検知やダウンサンプリングなどの追加機能があります。

---

### 17. [eugenioenko/ttt](https://github.com/eugenioenko/ttt)

> TTT Editor (Terminal Text Tool): A real alternative to VS Code, Zed, and Sublime that runs in your terminal. A TUI that feels like GUI. Single binary, zero config.

- Language: Go
- Stars: 988
- Forks: 113
- Stars in 1週間: 207
- Category: ターミナルテキストエディタ
- Keywords: `TUIエディタ` `Go` `LSP` `Git統合` `ripgrep` `マルチカーソル`
- Summary source: README

#### README要約

- ターミナル上で動作するGUIライクなTUIテキストエディタで、VS Code・Zed・Sublimeの代替を目指す単一Goバイナリのツール。
- TextMateベースのシンタックスハイライト（124言語）、LSPによる補完・診断・フォーマット、マルチカーソル、コード折りたたみ、Git統合、ripgrep検索などを備える。
- ターミナル中心で開発したいプログラマ向けで、マルチフォルダワークスペースやPRレビュー、パイプ入力の閲覧などの用途に対応する。
- brew・scoop・AUR・nixpkgs・go install・インストールスクリプト等で導入可能。Gitとripgrepが前提依存で、ソースビルドは開発版のため不安定な場合がある。

---

### 18. [samber/cc-skills-golang](https://github.com/samber/cc-skills-golang)

> 🧑‍🎨 A collection of Golang agentic skills that works

- Language: Go
- Stars: 3,736
- Forks: 250
- Stars in 1週間: 141
- Category: AIコーディング支援スキル集
- Keywords: `Golang` `AIエージェント` `Claude Code` `コーディング規約` `テスト` `セキュリティ`
- Summary source: README

#### README要約

- 本番運用を意識したGolangプロジェクト向けのAIエージェントスキル集で、コーディングアシスタントにGo固有の専門知識をオンデマンドで読み込ませる。
- コード品質、アーキテクチャ、テスト、パフォーマンス、セキュリティなど30以上のスキルを提供し、相互参照するアトミックな単位として設計されている。
- Claude Code、Codex、Gemini、Copilot、Cursorなど複数のAIコーディングツールに対応し、Go開発者がAI支援でコード品質を向上させる用途に適する。
- skills CLIや各ツールのプラグイン機構でインストール可能だが、スキル間で規約を相互参照するため、一貫性のため全般スキルはまとめて導入が推奨される。

---

### 19. [docker/compose](https://github.com/docker/compose)

> Define and run multi-container applications with Docker

- Language: Go
- Stars: 38,530
- Forks: 5,890
- Stars in 1週間: 133
- Category: コンテナオーケストレーション
- Keywords: `Docker` `コンテナ` `compose.yaml` `マルチコンテナ` `Go` `CLI`
- Summary source: README

#### README要約

- Docker Composeは、Composeファイル形式で定義された複数コンテナからなるアプリケーションをDocker上で実行するためのツールです。
- compose.yamlにサービス構成を記述し、docker compose upコマンド一つでアプリケーション全体を起動・管理できます。
- 複数のコンテナを連携させた開発環境やテスト環境を構築したい開発者に適しています。
- Windows/macOSではDocker Desktopに同梱され、Linuxではリリースページからバイナリを取得してcli-pluginsに配置します。

---
