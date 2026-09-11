+++
title = 'GitHub Trending 1週間レポート (go) - 2026/09/11'
date = 2026-09-11T23:00:34.542Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月11日 23:00:34
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のAIインフラ・エージェント周辺ツールがランキングを席巻し、LLMゲートウェイ、ローカル推論、コーディングエージェント支援が主要な関心事となっている。

- 一覧の16件すべてがGo言語製で、言語分布が完全にGoに集中している。
- LLMゲートウェイ・ルーティング系（new-api、bifrost、semantic-router）が複数ランクインし、マルチモデル運用の基盤整備への関心がうかがえる。
- Claude Codeなどのコーディングエージェントを対象としたツール（gentle-ai、engram、caveman）が3件登場し、エージェントの設定・メモリ・コスト最適化という周辺領域が注目されている。
- ローカル推論系（ollama、LocalAI）とRAG/ナレッジ基盤（WeKnora）が上位に位置し、セルフホスト・プライバシー重視のAI運用が支持されている。
- AI以外ではセキュリティ（pentagi、katana）、ネットワーク（netbird、Xray-core）、ファイル管理（filebrowser、rclone）といった実用インフラツールが並ぶ。

### 主なテーマ

- **LLMゲートウェイ・モデルルーティング**: 複数のLLMプロバイダーをOpenAI互換などの統一APIで集約・配信するゲートウェイが3件ランクイン。new-apiは課金・権限管理を備え、bifrostはLiteLLM比50倍の高速性を謳い、semantic-routerはMixture-of-Modelsのルーティング層を提供する。マルチモデル運用の標準化・効率化への需要が背景にある。（`QuantumNous/new-api`、`maximhq/bifrost`、`vllm-project/semantic-router`）
- **コーディングエージェントの拡張・最適化**: Claude CodeやCursor等の既存エージェントを対象に、設定管理（gentle-ai）、永続メモリ（engram）、トークン削減（caveman）を提供するツールが揃って登場。特にcavemanは期間中1,891スターと一覧最大の伸びで、エージェント利用コストへの関心の高さを示している。（`Gentleman-Programming/gentle-ai`、`Gentleman-Programming/engram`、`JuliusBrussee/caveman`）
- **ローカル・セルフホスト型AI基盤**: ollama（650スター）とLocalAI（216スター）はGPU不要やオープンモデル対応を特徴とするローカル推論環境、WeKnora（815スター）はドキュメントをRAG・エージェント・Wiki化する知識基盤であり、いずれもプライベート環境でのAI運用を志向したプロジェクト。（`ollama/ollama`、`mudler/LocalAI`、`Tencent/WeKnora`）
- **セキュリティ・ネットワークインフラ**: AI自律ペンテストのpentagi、クローリング基盤のkatana、WireGuardベースのnetbird、プロキシ基盤のXray-coreがランクインし、セキュリティ診断やセキュア通信の実用ツールが安定した支持を集めている。（`vxcontrol/pentagi`、`projectdiscovery/katana`、`netbirdio/netbird`、`XTLS/Xray-core`）
- **ファイル・データ管理ユーティリティ**: Webファイルマネージャーのfilebrowser（246スター）とクラウドストレージ同期のrclone（178スター）が入り、セルフホストでのファイル共有・マルチクラウド同期という定番ニーズが継続している。（`gtsteffaniak/filebrowser`、`rclone/rclone`）

### 補足的な観察

- 期間中スター数のトップはcavemanの1,891で、2位のWeKnora（815）を大きく引き離しており、トークンコスト削減という手軽な効果が話題を集めたと考えられる。
- 言語分布は16件中16件がGoで、AI系・インフラ系を問わずGoがCLI・ゲートウェイ・エージェント基盤の実装言語として一貫して選ばれている。
- googleapis/google-api-go-clientは5スターと最小で、メンテナンスモードの告知が伸びの鈍さに影響している可能性がある。
- Gentleman-Programmingはgentle-aiとengramの2件を同時にランクインさせており、同一作者のエージェント支援エコシステムがまとめて注目されている。

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 16 |

## Repository一覧

### 1. [Tencent/WeKnora](https://github.com/Tencent/WeKnora)

> Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

- Language: Go
- Stars: 22,328
- Forks: 3,210
- Stars in 1週間: 815
- Category: LLMナレッジプラットフォーム
- Keywords: `RAG` `LLM` `ナレッジベース` `エージェント` `Wiki` `Go`
- Summary source: README

#### README要約

- WeKnoraは、生のドキュメントをクエリ可能なRAG、自律推論エージェント、自己維持型Wikiに変換するオープンソースのLLM知識プラットフォームです。
- RAGベースのQ&A、複雑なタスクを処理するReActエージェント、ドキュメントを相互リンクされたMarkdown知識ベースに蒸留するWikiモードの3つのコア機能を提供します。
- エンタープライズグレードのドキュメント理解、セマンティック検索、自律推論を必要とするユーザーや、社内ドキュメントを知識資産として活用したい組織を対象としています。
- Go言語で開発され、Dockerによるセルフホストが可能です。本番環境では、情報漏洩を防ぐため、パブリックネットワークではなく内部/プライベートネットワーク環境にデプロイすることが強く推奨されています。

---

### 2. [ollama/ollama](https://github.com/ollama/ollama)

> Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

- Language: Go
- Stars: 180,696
- Forks: 17,817
- Stars in 1週間: 650
- Category: ローカルLLM実行環境
- Keywords: `Ollama` `ローカルLLM` `REST API` `CLI` `llama.cpp` `オープンモデル`
- Summary source: README

#### README要約

- Ollamaは、Kimi-K2.6、GLM-5.2、DeepSeek、Qwen、Gemmaなどのオープンモデルをローカル環境で簡単に実行・管理できるツールです。
- CLIコマンドやREST API、Python/JavaScriptライブラリを通じてモデルを操作でき、llama.cppをバックエンドとして利用します。
- Claude CodeやOpenClawなどのコーディングエージェントやAIアシスタントと連携し、開発者やローカルLLM活用者を対象としています。
- macOS、Windows、Linux、Dockerでインストール可能で、公式サイトやパッケージマネージャーから導入できます。

---

### 3. [QuantumNous/new-api](https://github.com/QuantumNous/new-api)

> A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management.

- Language: Go
- Stars: 47,925
- Forks: 11,459
- Stars in 1週間: 677
- Category: LLMゲートウェイ
- Keywords: `LLMゲートウェイ` `OpenAI互換` `Claude互換` `Gemini互換` `課金・利用量管理` `Docker`
- Summary source: README

#### README要約

- 複数のLLMをOpenAI/Claude/Gemini互換形式に変換して集約・配信する、Go製の次世代AIゲートウェイおよび資産管理システム。
- チャネルの重み付けルーティング、失敗時の自動リトライ、ユーザー単位のレート制限、権限管理、利用量ダッシュボード、課金・キャッシュ課金統計などを備える。
- 個人や企業が複数モデルを一元管理し、組織レベルの認証・コスト計算・プライベートデプロイを行う用途を想定している。
- Docker ComposeまたはDockerで導入でき、AGPLv3（追加条項あり）で公開。公開サービスや再販では法令・上游規約遵守や届出等の義務に注意が必要。

---

### 4. [Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai)

> Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Spec-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.

- Language: Go
- Stars: 6,666
- Forks: 738
- Stars in 1週間: 424
- Category: AI開発ツール設定
- Keywords: `AIコーディングエージェント` `永続メモリ` `Spec-Driven Development` `MCPサーバー` `マルチエージェント対応` `Go製CLI`
- Summary source: README

#### README要約

- Gentle-AIは、既存のAIコーディングエージェント（Claude Code、Cursor、OpenCode、Codexなど）を設定済みのエンジニアリング環境に変えるエコシステムコンフィギュレーターです。
- 永続メモリ（Engram）、Spec-Driven Development（SDD）、キュレーション済みスキル、MCPサーバー、ペルソナ、オプションのレビュー機能などのコンポーネントを選択して導入できます。
- AIエージェントを日常的に使用する開発者や、異なるランタイム間で一貫した動作を求めるチーム、エージェントの作業を検証したいユーザーが対象です。
- Node.js 18+、Git 2.38+、対象エージェントの事前インストールが必要で、Gentle-AI自体はエージェントをインストールせず既存のものを設定します。WindowsではGo 1.25.10+によるソースインストールが必須です。

---

### 5. [gtsteffaniak/filebrowser](https://github.com/gtsteffaniak/filebrowser)

> 📂 Web File Browser

- Language: Go
- Stars: 8,256
- Forks: 434
- Stars in 1週間: 246
- Category: ファイル管理ツール
- Keywords: `セルフホスト` `Webファイルマネージャー` `Go` `ファイル共有` `OIDC認証` `WebDAV`
- Summary source: README

#### README要約

- FileBrowser Quantumは、無料でセルフホスト可能なWebベースのファイルマネージャーです。
- 複数ソース管理、OIDC/LDAP/JWT/2FA認証、リアルタイム検索、WebDAV対応、詳細な共有設定などの高度な機能を備えています。
- 個人やチームがWebブラウザからファイルにアクセス・管理・共有する用途に適しています。
- config.yamlで簡単に設定でき、スタンドアロンバイナリとして動作しますが、シェルコマンド機能は削除されています。

---

### 6. [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)

> Fully autonomous AI Agents system capable of performing complex penetration testing tasks

- Language: Go
- Stars: 22,981
- Forks: 3,030
- Stars in 1週間: 423
- Category: セキュリティテスト自動化
- Keywords: `ペネトレーションテスト` `AIエージェント` `自動化` `Docker` `LLM` `セキュリティ`
- Summary source: README

#### README要約

- PentAGIは、AIを活用した自動ペネトレーションテストシステムで、セキュリティ専門家や研究者向けに設計されている。
- Dockerサンドボックス内で20以上のペンテストツールを実行し、複数のLLMプロバイダーと連携して自律的にテスト手順を決定・実行する。
- 情報セキュリティの専門家、研究者、愛好家が、柔軟で強力なペネトレーションテストを実施するために使用する。
- Docker Composeで簡単にデプロイでき、MITライセンスだが、VXControl Cloudサービスへのアクセスには別途ライセンスキーが必要。

---

### 7. [maximhq/bifrost](https://github.com/maximhq/bifrost)

> Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.

- Language: Go
- Stars: 7,986
- Forks: 1,199
- Stars in 1週間: 181
- Category: AIゲートウェイ
- Keywords: `AIゲートウェイ` `マルチプロバイダー` `OpenAI互換` `負荷分散` `フェイルオーバー` `Go`
- Summary source: README

#### README要約

- Bifrostは、OpenAI互換の単一APIで23以上のAIプロバイダーへのアクセスを統合する高性能AIゲートウェイです。
- 自動フェイルオーバー、負荷分散、セマンティックキャッシュ、ガバナンス機能を備え、5,000 RPSのベンチマークで11マイクロ秒のオーバーヘッドを実現しています。
- 本番環境でAIアプリケーションを運用する開発者や企業を対象とし、既存のOpenAI/Anthropic SDKからの移行も1行の変更で可能です。
- npxまたはDockerで即座に起動でき、Web UIでの設定が可能です。Apache 2.0ライセンスで提供され、エンタープライズ向けにはクラスタリングやガードレールなどの追加機能があります。

---

### 8. [vllm-project/semantic-router](https://github.com/vllm-project/semantic-router)

> A programmable Mixture-of-Models router for heterogeneous LLM inference

- Language: Go
- Stars: 5,740
- Forks: 936
- Stars in 1週間: 183
- Category: LLMルーティング
- Keywords: `Mixture-of-Models` `セマンティックルーティング` `LLM推論` `vLLM` `Go` `異種コンピュート`
- Summary source: README

#### README要約

- 異種LLMインフラ上でMixture-of-Modelsシステムを構築するためのプログラマブルなルーティングレイヤー。
- リクエストのシグナル、ユーザー設定、アプリケーションポリシーを評価し、各リクエストに適したモデルパスを選択または構成する。
- 品質、コスト、レイテンシ、プライバシー、安全性を改善したい開発者や、エッジ・プライベート・クラウドをまたぐ推論環境の運用者向け。
- インストールスクリプトやpip、uvで導入可能で、オンラインプレイグラウンドでも試せる。ルーティングロジックをアプリにハードコードせずに済む。

---

### 9. [netbirdio/netbird](https://github.com/netbirdio/netbird)

> Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.

- Language: Go
- Stars: 29,129
- Forks: 1,670
- Stars in 1週間: 239
- Category: セキュアネットワーク
- Keywords: `WireGuard` `VPN` `P2P` `SSO` `MFA` `アクセス制御`
- Summary source: README

#### README要約

- NetBirdは、設定不要のピアツーピア型プライベートネットワークと集中型アクセス制御を組み合わせたプラットフォームです。
- WireGuardベースの暗号化トンネルでデバイスを自動接続し、SSO・MFA・グループ/ルールによるアクセス制御、監査ログ、ルーティング、DNS管理などを提供します。
- 組織や個人が安全なリモートアクセス環境を構築する用途に向き、Linux/macOS/Windows/モバイル/ルーター/コンテナなど多様な環境で利用できます。
- NetBird Cloudまたはセルフホストで導入でき、セルフホストには公開ドメイン・VM・Dockerが必要です。mainブランチは不安定な場合があるため、安定版はリリースを参照してください。

---

### 10. [projectdiscovery/katana](https://github.com/projectdiscovery/katana)

> A next-generation crawling and spidering framework.

- Language: Go
- Stars: 17,468
- Forks: 1,176
- Stars in 1週間: 79
- Category: Webクローラー
- Keywords: `クローリング` `スパイダリング` `Go` `ヘッドレスブラウザ` `セキュリティ` `自動化`
- Summary source: README

#### README要約

- projectdiscovery/katanaは、Go言語で開発された次世代のWebクローリングおよびスパイダリングフレームワークです。
- 標準モードとヘッドレスモードを備え、JavaScript解析、自動フォーム入力、スコープ制御、MLによるページ分類などの機能を提供します。
- セキュリティ研究者や開発者が、自動化パイプラインでWebサイトのエンドポイントやフォームを調査・収集する用途に適しています。
- Go 1.26以上が必要で、go installやDocker、プリコンパイル済みバイナリで導入でき、MITライセンスで配布されています。

---

### 11. [rclone/rclone](https://github.com/rclone/rclone)

> "rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files

- Language: Go
- Stars: 59,710
- Forks: 5,383
- Stars in 1週間: 178
- Category: クラウドストレージ同期ツール
- Keywords: `クラウドストレージ` `ファイル同期` `rsync` `コマンドライン` `暗号化` `マルチクラウド`
- Summary source: README

#### README要約

- Rcloneは「クラウドストレージ版rsync」と呼ばれる、異なるクラウドストレージ間でファイルやディレクトリを同期するコマンドラインプログラムです。
- MD5/SHA-1ハッシュによる整合性確認、タイムスタンプ保持、一方向/双方向同期、暗号化、圧縮、FUSEマウントなどの機能を備えています。
- Google Drive、S3、Dropbox、OneDriveなど多数のクラウドストレージやローカルファイルシステム間でデータを同期・管理したいユーザー向けです。
- 公式サイトからインストール可能で、MITライセンスのフリーソフトウェアとして提供されています。

---

### 12. [XTLS/Xray-core](https://github.com/XTLS/Xray-core)

> Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.

- Language: Go
- Stars: 41,539
- Forks: 5,874
- Stars in 1週間: 150
- Category: ネットワークプロキシツール
- Keywords: `XTLS` `VLESS` `REALITY` `プロキシ` `Go` `v2ray`
- Summary source: README

#### README要約

- Xray-coreはXTLSプロトコルに由来するProject Xの中核となるネットワークツールで、多様な用途向けのオープンなプロキシプラットフォームです。
- VLESS、XTLS、REALITY、XUDPなどのプロトコルをサポートし、v2fly-coreからフォークして多数の機能強化を重ねています。
- プロキシサーバーの構築者や開発者向けで、豊富なGUIクライアント、Webパネル、ワンクリックインストールスクリプトが利用できます。
- Go言語でビルド可能で、ライセンスはMPL 2.0、公式サイトやTelegramコミュニティでドキュメントとサポートが提供されています。

---

### 13. [mudler/LocalAI](https://github.com/mudler/LocalAI)

> LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.

- Language: Go
- Stars: 49,056
- Forks: 4,439
- Stars in 1週間: 216
- Category: ローカルAI推論エンジン
- Keywords: `OpenAI互換API` `ローカルLLM` `マルチモーダル` `GPU不要` `プライバシー重視` `Docker`
- Summary source: README

#### README要約

- LocalAIは、LLM・画像・音声・動画などのモデルをGPUなしでも任意のハードウェア上で実行できるオープンソースのAIエンジンです。
- llama.cppやwhisper.cppなどのバックエンドを必要な時だけオンデマンドで取得する構成で、OpenAI・Anthropic・ElevenLabs互換のAPIを提供します。
- プライバシーを重視し自社インフラ内でAIを運用したい開発者や組織向けで、APIキー認証やユーザークォータ、自律エージェント機能も備えています。
- DockerコンテナやmacOS向けDMGで導入でき、モデルギャラリーやHuggingface、Ollamaレジストリからモデルを読み込めます。macOS版は署名されていないため隔離属性の削除が必要です。

---

### 14. [Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram)

> Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.

- Language: Go
- Stars: 6,531
- Forks: 681
- Stars in 1週間: 195
- Category: AIエージェント向けメモリシステム
- Keywords: `永続メモリ` `MCP` `SQLite` `FTS5` `Go` `エージェント非依存`
- Summary source: README

#### README要約

- AIコーディングエージェントに永続メモリを提供する、エージェント非依存の単一Goバイナリ。
- SQLite + FTS5全文検索を基盤に、CLI・HTTP API・MCPサーバー・TUIの4つのインターフェースを提供する。
- Claude Code、OpenCode、Gemini CLI、Codex、VS Code (Copilot)、CursorなどMCP互換エージェントのユーザー向け。
- Node.jsやPython、Dockerは不要で、GitHub ReleasesまたはHomebrewからインストールし、engram setupコマンドで各エージェントを設定する。

---

### 15. [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

> 🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman

- Language: Go
- Stars: 105,037
- Forks: 6,083
- Stars in 1週間: 1,891
- Category: AI開発ツール
- Keywords: `Claude Code` `トークン削減` `AIエージェント` `プロキシ` `コスト削減` `スキル`
- Summary source: README

#### README要約

- AIコーディングエージェントの出力を「原始人風」の簡潔な文体に変え、トークン消費を削減するClaude Codeスキルおよびプロキシツール。
- スキルはルールファイルとしてエージェントに組み込まれ出力トークンを平均65%削減、プロキシはエージェントとAIプロバイダ間で入力を圧縮し入力トークンを削減する。
- Claude Code、Codex、Gemini、Cursorなど30以上のエージェントに対応し、APIコストや応答の冗長さを抑えたい開発者向け。
- npx skills addコマンドやnpmグローバルインストールで導入可能。スキルはMIT、エンジン等はBSL-1.1ライセンスで、テレメトリはオプトアウト可能。

---

### 16. [googleapis/google-api-go-client](https://github.com/googleapis/google-api-go-client)

> Auto-generated Google APIs for Go.

- Language: Go
- Stars: 4,474
- Forks: 1,450
- Stars in 1週間: 5
- Category: APIクライアントライブラリ
- Keywords: `Go` `Google API` `自動生成` `OAuth2` `メンテナンスモード` `google.golang.org/api`
- Summary source: README

#### README要約

- Google Discovery ServiceのJSON定義から自動生成された、Google API向けのGo言語クライアントライブラリ集です。
- go getで各APIパッケージを取得し、NewServiceでサービスを生成してAPIを呼び出します。
- 認証はデフォルトでApplication Default Credentialsを使用し、JSONキーやoauth2.TokenSourceによる指定も可能です。
- メンテナンスモードのため新機能は追加されず、Google Cloud APIにはgoogle-cloud-goの利用が推奨されます。

---
