+++
title = 'GitHub Trending 1週間レポート (go) - 2026/09/18'
date = 2026-09-18T23:05:43.445Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月18日 23:05:43
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 20
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> AIエージェント関連ツールがトレンドを席巻し、コードレビュー・メモリ・サンドボックス・トークン削減など多様な側面から開発ワークフローを支援する動きが顕著

- AIコーディングエージェントを支援するツールが多数ランクインし、エージェントの実用化が進んでいる
- コードレビュー、永続メモリ、サンドボックス、トークン削減など、AIエージェントの課題を解決する周辺ツールが充実
- Go言語が全20リポジトリ中19件を占め、クラウドネイティブ・インフラ領域での優位性を示している
- AlibabaやTencentなど中国大手テック企業からのオープンソース貢献が目立つ
- Kubernetesエコシステム関連のプロジェクトが複数ランクインし、コンテナ基盤の成熟が続いている

### 主なテーマ

- **AIコーディングエージェント支援ツール**: AIコーディングエージェントの実運用を支えるツールが複数ランクイン。alibaba/open-code-reviewは11,489スターを獲得し、コードレビューをLLMエージェントで自動化。Gentleman-Programming/engramはエージェントに永続メモリを提供し、JuliusBrussee/cavemanはトークン消費を65%削減する。これらは既存エージェント（Claude Code、Cursor、Codex等）と連携し、実用化フェーズに入ったことを示している。（`alibaba/open-code-review`、`Gentleman-Programming/engram`、`Gentleman-Programming/gentle-ai`、`JuliusBrussee/caveman`）
- **AIエージェント実行環境・サンドボックス**: AIエージェントを安全に実行するためのサンドボックス基盤が注目されている。TencentCloud/CubeSandboxは60ms未満の高速起動とE2B互換を実現し、kubernetes-sigs/agent-sandboxはKubernetes上でステートフルなエージェントランタイムを管理。e2b-dev/runtimeはFirecracker microVMを使った実行基盤を提供し、エージェントの隔離実行が重要課題となっていることを示す。（`TencentCloud/CubeSandbox`、`kubernetes-sigs/agent-sandbox`、`e2b-dev/runtime`）
- **LLM知識管理・RAGプラットフォーム**: 企業向けのLLM知識管理基盤が登場。Tencent/WeKnoraは3,982スターを獲得し、文書をRAG・自律推論エージェント・自己維持Wikiに変換する。Feishu/GitLab/Notion等との連携や20以上のLLMプロバイダー対応など、エンタープライズ要件を意識した設計が特徴。（`Tencent/WeKnora`）
- **セキュリティ・ペネトレーションテスト自動化**: AIを活用したセキュリティテストの自動化が進展。vxcontrol/pentagiは2,046スターを獲得し、20以上のセキュリティツールを統合した自動ペネトレーションテスト環境を提供。trufflesecurity/trufflehogは800種類以上のシークレットを検出・検証し、認証情報漏洩リスクの調査を支援する。（`vxcontrol/pentagi`、`trufflesecurity/trufflehog`）
- **Kubernetes・クラウドネイティブ基盤**: Kubernetesエコシステムの成熟したプロジェクトが複数ランクイン。cilium/ciliumはeBPFベースのネットワーキング・セキュリティを提供し、argoproj/argo-cdはGitOps継続的デリバリーを実現。kserve/kserveはKubernetes上でのAI推論を標準化し、moby/mobyはコンテナ基盤の中核として継続的に開発されている。（`cilium/cilium`、`argoproj/argo-cd`、`kserve/kserve`、`moby/moby`）

### 補足的な観察

- 言語分布はGo言語が19/20件（95%）と圧倒的で、クラウドネイティブ・インフラ・AIツール領域でのGo言語の優位性が明確
- スター獲得数のトップはalibaba/open-code-reviewの11,489で、AIコードレビューへの関心の高さを反映。2位はTencent/WeKnoraの3,982、3位はvxcontrol/pentagiの2,046
- Alibaba、Tencent、TencentCloudからのリポジトリが3件ランクインし、中国テック企業のオープンソース貢献が活発
- AIエージェント関連を謳うリポジトリが少なくとも8件あり、カテゴリとして確立しつつある

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 20 |

## Repository一覧

### 1. [alibaba/open-code-review](https://github.com/alibaba/open-code-review)

> Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

- Language: Go
- Stars: 36,612
- Forks: 2,607
- Stars in 1週間: 11,489
- Category: AIコードレビューツール
- Keywords: `コードレビュー` `LLMエージェント` `CLI` `Git差分` `CI/CD連携` `Alibaba`
- Summary source: README

#### README要約

- Alibaba発のAIコードレビューCLIツールで、Git差分をLLMエージェントに送り、行レベルの精度で構造化されたレビューコメントを生成する。
- 決定論的パイプラインとLLMエージェントのハイブリッド構成で、ファイル選定・バンドル化・ルールマッチングを工学的に制御し、ocr scanによる全ファイル監査も可能。
- コードレビューの精度と効率を求める開発者やチーム向けで、Claude Code、Codex、CursorなどのコーディングエージェントやCI/CDとの連携に対応する。
- npmでグローバルインストールし、Git 2.41以上とLLMプロバイダのAPIキー設定が必要。Apache-2.0ライセンスで、汎用エージェントよりRecallは低いがPrecisionを優先した設計。

---

### 2. [Tencent/WeKnora](https://github.com/Tencent/WeKnora)

> Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

- Language: Go
- Stars: 26,940
- Forks: 3,629
- Stars in 1週間: 3,982
- Category: LLM知識管理プラットフォーム
- Keywords: `RAG` `エージェント` `Wiki` `文書理解` `マルチモーダル` `エンタープライズ`
- Summary source: README

#### README要約

- Tencent製のオープンソースLLM知識フレームワークで、文書をクエリ可能なRAG・自律推論エージェント・自己維持Wikiに変換する。
- RAG Quick Q&A、ReAct Agent（MCPツール・サンドボックス・Web検索連携）、Wikiモード（知識グラフ・履歴管理）の3つの中核機能を持つ。
- エンタープライズ向けで、Feishu/GitLab/Notion等からの自動同期、10+文書形式対応、WeCom/Slack/Telegram等のIM連携、20+ LLMプロバイダー対応。
- Go製でDocker/ローカル開発環境を提供。本番環境では内部ネットワーク配置とファイアウォール設定を強く推奨。MITライセンス。

---

### 3. [junegunn/fzf](https://github.com/junegunn/fzf)

> 🌸 A command-line fuzzy finder

- Language: Go
- Stars: 83,118
- Forks: 3,118
- Stars in 1週間: 199
- Category: CLIツール
- Keywords: `ファジーファインダー` `コマンドライン` `ターミナル` `Go` `シェル統合` `インタラクティブ`
- Summary source: README

#### README要約

- fzfは汎用のコマンドラインファジーファインダーであり、インタラクティブなターミナルツールキットです。
- ファイル選択、コマンド履歴の閲覧、データプレビュー、ファジーマッチングによるナビゲーションなどを高速に処理し、数百万件のアイテムをミリ秒単位で扱えます。
- シェルスクリプトをリッチなターミナルアプリケーションに変えるためのビルディングブロックを提供し、Bash、Zsh、Fish、Nushell、Vim、Neovimとの統合が含まれています。
- 単一バイナリとして配布され、Homebrew、各種Linuxパッケージマネージャー、Windowsパッケージマネージャー、git、バイナリリリースからインストール可能です。

---

### 4. [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)

> Fully autonomous AI Agents system capable of performing complex penetration testing tasks

- Language: Go
- Stars: 24,710
- Forks: 3,177
- Stars in 1週間: 2,046
- Category: セキュリティテスト自動化ツール
- Keywords: `ペネトレーションテスト` `AIエージェント` `Docker` `自動化` `セキュリティ` `LLM`
- Summary source: README

#### README要約

- PentAGIは、AIを活用した自動ペネトレーションテスト（侵入テスト）ツールです。
- Docker環境で隔離された安全な実行環境を提供し、20以上の専門的なセキュリティツールを内蔵しています。
- 情報セキュリティの専門家、研究者、愛好家を対象としており、柔軟で強力なペネトレーションテストソリューションを提供します。
- Docker Composeを使用した簡単なデプロイが可能で、10以上のLLMプロバイダーに対応しています。

---

### 5. [p1neappleXpress/OpenFlux](https://github.com/p1neappleXpress/OpenFlux)

> Network stack research tool. TCP tunnel with pluggable transports.

- Language: Go
- Stars: 1,722
- Forks: 135
- Stars in 1週間: 888
- Category: ネットワークツール
- Keywords: `TCPトンネル` `プラガブルトランスポート` `ネットワークスタック` `Go` `gVisor` `zstd`
- Summary source: README

#### README要約

- OpenFluxは、プラガブルなトランスポートを備えたTCPトンネルを提供するネットワークスタック研究ツールです。
- バッチ処理とzstd圧縮コーデック、L3 raw forwardとL4 gVisorプロキシの2つの出口ノードバックエンドを搭載しています。
- ネットワーク技術の研究者や開発者が、多様なプラットフォーム（macOS、Linux、Windows、Android、iOS）で利用できます。
- ソースコードからビルドする必要があり、L3モードではLinuxとroot権限が必要です。ライセンスはGPLv3以降です。

---

### 6. [cilium/cilium](https://github.com/cilium/cilium)

> eBPF-based Networking, Security, and Observability

- Language: Go
- Stars: 25,347
- Forks: 4,082
- Stars in 1週間: 339
- Category: ネットワーク・セキュリティ
- Keywords: `eBPF` `Kubernetes` `CNI` `ネットワークポリシー` `ロードバランシング` `サービスメッシュ`
- Summary source: README

#### README要約

- CiliumはeBPFベースのデータプレーンを持つKubernetes向けネットワーキング・可観測性・セキュリティソリューションです。
- L3-L7のネットワークポリシー、分散ロードバランシング、クラスタメッシュ、サービスメッシュなどの機能を提供します。
- Kubernetesクラスタの運用者や、マルチクラスタ・ハイブリッド環境でのセキュアな接続を必要とするユーザーが対象です。
- AMD64とAArch64アーキテクチャ向けにイメージが配布され、開発版イメージは本番利用不可のため安定版の利用が推奨されます。

---

### 7. [coder/coder](https://github.com/coder/coder)

> Secure environments for developers and their agents

- Language: Go
- Stars: 15,265
- Forks: 1,503
- Stars in 1週間: 435
- Category: 開発環境プラットフォーム
- Keywords: `セルフホスト` `クラウド開発環境` `AIエージェント` `Terraform` `リモート開発` `Go`
- Summary source: README

#### README要約

- Coderは、クラウド開発環境とAIコーディングエージェントのためのセルフホスト型プラットフォームです。
- Terraformでワークスペースを定義し、Wireguardトンネルで接続、アイドル時は自動停止してコストを削減します。
- 開発者の迅速なオンボーディングや、自社インフラ上でのAIエージェントへのコーディング作業の委任に適しています。
- インストールスクリプトで手軽に開始でき、本番環境ではPostgreSQL 13以降と外部アクセスURLの設定が推奨されます。

---

### 8. [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)

> Instant, Concurrent, Secure & Lightweight Sandbox for AI Agents.

- Language: Go
- Stars: 12,588
- Forks: 1,133
- Stars in 1週間: 638
- Category: AIエージェント向けサンドボックス
- Keywords: `AIエージェント` `サンドボックス` `RustVMM` `KVM` `E2B互換` `高速起動`
- Summary source: README

#### README要約

- RustVMMとKVM上に構築された、AIエージェント向けの高性能で安全なサンドボックスサービス。
- 60ms未満の起動、5MB未満のメモリオーバーヘッド、ハードウェア分離、E2B SDK互換を特徴とする。
- 安全なコード実行環境を必要とするAIエージェント開発者やプラットフォーム運用者を対象とする。
- シングルノードからKubernetesクラスタまでデプロイ可能で、Apache License 2.0で提供される。

---

### 9. [navidrome/navidrome](https://github.com/navidrome/navidrome)

> 🎧 Your Personal Streaming Service

- Language: Go
- Stars: 23,652
- Forks: 1,710
- Stars in 1週間: 213
- Category: 音楽ストリーミングサーバー
- Keywords: `音楽ストリーミング` `セルフホスト` `Subsonic互換` `マルチプラットフォーム` `トランスコーディング` `オープンソース`
- Summary source: README

#### README要約

- NavidromeはオープンソースのWebベース音楽コレクションサーバー兼ストリーマーで、個人のSpotifyのようにブラウザやモバイルデバイスから音楽を聴ける。
- 大規模な音楽コレクションの管理、ほぼ全ての音声フォーマットのストリーミング、メタデータ活用、マルチユーザー対応、低リソース動作、自動ライブラリ監視、歌詞表示、テーマ変更可能なWeb UI、Subsonic/Madsonic/Airsonicクライアント互換、オンザフライ・トランスコーディング（Opus対応）などの機能を備える。
- 自分の音楽コレクションをストリーミングしたい個人ユーザー、大規模ライブラリを持つ音楽愛好家、セルフホスト環境を求めるユーザーに適している。
- macOS/Linux/Windows対応でDockerイメージやRaspberry Pi用バイナリも提供されるが、masterブランチは不安定なため安定版リリースの使用が推奨される。

---

### 10. [argoproj/argo-cd](https://github.com/argoproj/argo-cd)

> Declarative Continuous Deployment for Kubernetes

- Language: Go
- Stars: 24,187
- Forks: 7,855
- Stars in 1週間: 64
- Category: GitOps CDツール
- Keywords: `Kubernetes` `GitOps` `継続的デリバリー` `宣言的設定` `自動デプロイ` `Go`
- Summary source: README

#### README要約

- Kubernetes向けの宣言的GitOps継続的デリバリーツール。
- アプリケーション定義や設定、環境を宣言的にバージョン管理し、デプロイとライフサイクル管理を自動化する。
- 監査可能で分かりやすい運用を求めるKubernetes利用者やGitOps実践者向け。
- 詳細は公式ドキュメントとライブデモを参照し、導入前に運用方針と権限設計を確認する。

---

### 11. [Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram)

> Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.

- Language: Go
- Stars: 6,707
- Forks: 694
- Stars in 1週間: 189
- Category: AIエージェント向けメモリツール
- Keywords: `永続メモリ` `MCP` `SQLite` `FTS5` `Go` `コーディングエージェント`
- Summary source: README

#### README要約

- AIコーディングエージェントに永続メモリを提供する、エージェント非依存の単一Goバイナリツール。
- SQLite + FTS5全文検索を基盤に、CLI・HTTP API・MCPサーバー・対話型TUIの4つのインターフェースを提供する。
- Claude Code、OpenCode、Gemini CLI、Codex、VS Code (Copilot)、CursorなどMCP互換エージェントのユーザーが、セッションをまたいで知識を保存・検索・引き継ぐために使用する。
- Node.jsやPython、Dockerは不要で、GitHub ReleasesまたはHomebrewからインストールし、各エージェント用のセットアップコマンドを実行して利用を開始する。

---

### 12. [Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai)

> Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.

- Language: Go
- Stars: 6,997
- Forks: 765
- Stars in 1週間: 386
- Category: AI開発環境ツール
- Keywords: `AIコーディングエージェント` `永続メモリ` `ODD` `SDD` `RDDレビュー` `Go`
- Summary source: README

#### README要約

- Gentle-AIは、Claude Code、Cursor、OpenCode、Codex、Piなど既存のAIコーディングエージェントに永続メモリ・ワークフロー・証跡を与える決定論的な開発環境ツール。
- Engramによるプロジェクトコンテキストの蓄積、ODD/SDDによる開発フロー、オプトインのRDDレビュー、スキルライブラリやMCPサーバなどを提供し、状態をファイルで管理するため再現性が高い。
- AIエージェントを日常開発に使う開発者やチームが、エージェントを乗り換えることなく共有ワークフローと品質基準を導入する用途に向く。
- Homebrew・curl・go installで導入でき、エージェント自体はインストールせず既存設定を変更前にバックアップする。MITライセンスだが名称・ロゴは商標で、WindowsはGo 1.25.10以上が必要。

---

### 13. [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

> 🪨 why use many token when few token do trick. Viral skill + proxy for coding agents that cuts 65% of tokens by talking like a caveman.

- Language: Go
- Stars: 106,593
- Forks: 6,177
- Stars in 1週間: 1,734
- Category: AIコーディングエージェント向けトークン削減ツール
- Keywords: `トークン削減` `コーディングエージェント` `プロキシ` `スキル` `Go` `LLMコスト削減`
- Summary source: README

#### README要約

- AIコーディングエージェントの出力を「原始人風」の簡潔な文体に変え、トークン消費を削減するツール。
- エージェントの発話を短くするスキル（ルールファイル）と、ログ・テスト出力・JSON・diffなどエージェントが読む入力を圧縮するローカルプロキシの2構成。
- Claude Code、Codex、Gemini、Cursorなど30以上のコーディングエージェント利用者が対象で、APIコスト削減が主な用途。
- スキルはnpx skills addで導入可能。プロキシはnpm CLIでインストールし、ライセンスはスキルがMIT、エンジン/プロキシ等のランタイムがBSL-1.1の分割ライセンス。

---

### 14. [ollama/ollama](https://github.com/ollama/ollama)

> Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

- Language: Go
- Stars: 181,227
- Forks: 17,925
- Stars in 1週間: 797
- Category: ローカルLLM実行環境
- Keywords: `ローカルLLM` `オープンモデル` `REST API` `CLI` `llama.cpp` `マルチプラットフォーム`
- Summary source: README

#### README要約

- Ollamaは、Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemmaなどのオープンモデルをローカル環境で簡単に実行できるツールです。
- CLI、REST API、Python/JavaScriptライブラリを提供し、llama.cppをバックエンドとしてモデルの実行と管理を行います。
- 開発者やAIアプリケーション構築者が、Claude Code、OpenClaw、Codexなどの既存ツールと連携してコーディングやチャット機能を実装するのに適しています。
- macOS、Windows、Linux、Dockerでインストール可能で、公式ライブラリや多数のコミュニティ統合が利用できます。

---

### 15. [kserve/kserve](https://github.com/kserve/kserve)

> Standardized Distributed Generative and Predictive AI Inference Platform for Scalable, Multi-Framework Deployment on Kubernetes

- Language: Go
- Stars: 5,964
- Forks: 1,687
- Stars in 1週間: 82
- Category: AI推論プラットフォーム
- Keywords: `Kubernetes` `LLMサービング` `マルチフレームワーク` `オートスケーリング` `CNCF` `Kubeflow`
- Summary source: README

#### README要約

- Kubernetes上で生成AIと予測AIの推論を統一的にデプロイ・運用するための標準化された分散推論プラットフォーム。
- vLLMやOpenAI互換プロトコルによるLLMサービング、GPU加速、モデルキャッシュ、KVキャッシュオフロード、リクエストベースのオートスケーリングなどを提供する。
- TensorFlowやPyTorchなど複数フレームワークのモデル運用、カナリアデプロイ、推論パイプライン、モデル説明性、監視機能を必要とするMLエンジニアやプラットフォーム運用者向け。
- 標準Kubernetes、Knativeによるサーバーレス、ModelMeshによる大規模高密度デプロイなど複数のインストール方式があり、Kubeflowのアドオンとしても利用可能。

---

### 16. [kubernetes-sigs/agent-sandbox](https://github.com/kubernetes-sigs/agent-sandbox)

> agent-sandbox enables easy management of isolated, stateful, singleton workloads, ideal for use cases like AI agent runtimes and reinforcement learning (RL).

- Language: Go
- Stars: 3,939
- Forks: 516
- Stars in 1週間: 207
- Category: Kubernetesオーケストレーション
- Keywords: `Kubernetes` `CRD` `Sandbox` `AIエージェント` `ステートフル` `コントローラー`
- Summary source: README

#### README要約

- Kubernetes上で分離されたステートフルなシングルトンワークロードを管理するためのCRDとコントローラーを提供するプロジェクトです。
- 安定したホスト名・ネットワーク識別子、永続ストレージ、ライフサイクル管理（作成・削除・一時停止・再開）を備え、SandboxTemplateやSandboxWarmPoolなどの拡張機能も提供します。
- AIエージェントランタイム、強化学習、開発環境、Jupyter Notebookなどの永続的な単一コンテナセッションを必要とするユーザーが対象です。
- kubectl applyでマニフェストを適用してインストールし、Go/Python SDKやSandbox Routerも利用可能です。低レベルのコンテナ分離はgVisorやKata ContainersなどのSandbox Runtimeに委任します。

---

### 17. [trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog)

> Find, verify, and analyze leaked credentials

- Language: Go
- Stars: 27,987
- Forks: 2,588
- Stars in 1週間: 236
- Category: シークレットスキャナー
- Keywords: `シークレット検出` `認証情報漏洩` `Gitスキャン` `検証` `Go` `セキュリティ`
- Summary source: README

#### README要約

- TruffleHogは、Gitやチャット、ログ、ファイルシステムなどから漏洩した認証情報（シークレット）を発見・分類・検証・分析するGo製ツールです。
- 800種類以上のシークレットを分類し、実際にログインして有効性を検証でき、主要な認証情報については権限やアクセス可能なリソースの詳細分析も可能です。
- セキュリティ担当者や開発者が、リポジトリ、S3、GitHub組織などをスキャンして漏洩リスクを調査・監視する用途に適しています。
- Homebrew、Docker、バイナリ、ソースからのビルドなどで導入でき、v3.0以降はAGPL 3ライセンスで、ライブラリAPIは開発中のため安定性の保証はありません。

---

### 18. [usememos/memos](https://github.com/usememos/memos)

> Open-source, self-hosted note-taking tool built for quick capture. Markdown-native, lightweight, and fully yours.

- Language: Go
- Stars: 63,158
- Forks: 4,768
- Stars in 1週間: 262
- Category: セルフホスト型ノートツール
- Keywords: `オープンソース` `セルフホスト` `Markdown` `ノート` `タイムライン` `プライバシー`
- Summary source: README

#### README要約

- Memosはオープンソースでセルフホスト型の短文思考記録ツールで、日次ノート、リンク、作業ログ、スニペットを時系列のMarkdownタイムラインに記録します。
- Markdownで素早く書き込み、メディアを添付し、タイトルやフォルダ、テンプレートを選ばずに保存でき、タイムライン、検索、タグ、ピンで整理します。
- プライバシーを重視するユーザーや、自分のインフラでデータを管理したい個人・チームに適しており、選択的にメモを公開することも可能です。
- Dockerで簡単に導入でき、ゼロテレメトリーとMITライセンスのソースコードで、ブラウザから直接保存できるWeb Clipperも提供されています。

---

### 19. [e2b-dev/runtime](https://github.com/e2b-dev/runtime)

> The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.

- Language: Go
- Stars: 1,579
- Forks: 436
- Stars in 1週間: 298
- Category: AIエージェント実行基盤
- Keywords: `Firecracker` `microVM` `サンドボックス` `スナップショット` `AIエージェント` `Go`
- Summary source: README

#### README要約

- E2B Runtimeは、AIエージェントクラウドE2Bの全スタックを支えるオープンソースのバックエンドランタイムです。
- Firecracker microVMをスナップショットから復元してサンドボックスを高速起動し、一時停止・再開・フォークやテンプレートビルドを制御します。
- エージェントを構築するチームや、自社クラウド内で安全にエージェントコードを実行したいプラットフォームチームを対象としています。
- Go製・Apache-2.0ライセンスで、E2B Cloudでの利用のほか、KVM対応Linux上のEmbedパッケージやエンタープライズ専用デプロイで動かせます。

---

### 20. [moby/moby](https://github.com/moby/moby)

> The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems

- Language: Go
- Stars: 72,108
- Forks: 19,233
- Stars in 1週間: 48
- Category: コンテナ基盤
- Keywords: `コンテナ` `Docker` `オープンソース` `モジュラー` `Go` `コンテナランタイム`
- Summary source: README

#### README要約

- Dockerが作成したオープンソースプロジェクトで、ソフトウェアのコンテナ化を実現・加速させるためのツールキットコンポーネントを提供する。
- コンテナビルドツール、レジストリ、オーケストレーションツール、ランタイムなどのコンポーネントを組み合わせてカスタムコンテナシステムを構築できる。
- コンテナベースのシステムを改造、実験、構築したいエンジニア、インテグレーター、愛好家を対象としており、商用サポートを求めるユーザー向けではない。
- Docker v29以降、github.com/docker/dockerは非推奨となり、github.com/moby/moby/clientとgithub.com/moby/moby/apiへの移行が必要。

---
