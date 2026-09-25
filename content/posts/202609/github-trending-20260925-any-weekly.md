+++
title = 'GitHub Trending 1週間レポート (All) - 2026/09/25'
date = 2026-09-25T23:50:35.509Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月25日 23:50:35
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 21
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントの実運用化が進み、スキル・メモリ・オーケストレーション・監査といった周辺基盤の整備がトレンドの中心となっている。

- Claude Codeをはじめとするコーディングエージェント本体だけでなく、それを拡張するスキル集（addyosmani/agent-skills、affaan-m/ECC）やテンプレート（davila7/claude-code-templates）が多数ランクインしている。
- 複数エージェントの並列実行・組織管理を行うオーケストレーションツール（stablyai/orca、paperclipai/paperclip）が高いスター数を獲得している。
- セキュリティ監査（cloudflare/security-audit-skill）やコードレビュー（alibaba/open-code-review）など、エージェントを品質保証プロセスに組み込むツールが上位に位置している。
- エージェントの長期記憶（vectorize-io/hindsight）やナレッジ基盤（Tencent/WeKnora）など、コンテキスト管理の仕組みへの関心が見られる。
- Anthropic公式の金融向けエージェント（anthropics/financial-services）やナレッジワークプラグイン（anthropics/knowledge-work-plugins）など、特定業務領域への適用事例も登場している。

### 主なテーマ

- **コーディングエージェントの拡張エコシステム**: Claude Codeなどのエージェントにスキル・コマンド・メモリ・セキュリティスキャンを追加するツールが複数ランクイン。addyosmani/agent-skillsは25個のスキルと9つのスラッシュコマンドを提供し、affaan-m/ECCは68のエージェントと292のスキルを備えるなど、エージェントの振る舞いを体系化する動きが顕著。davila7/claude-code-templatesやHKUDS/CLI-Anythingも同様の拡張志向を持つ。（`addyosmani/agent-skills`、`affaan-m/ECC`、`davila7/claude-code-templates`、`HKUDS/CLI-Anything`、`anthropics/claude-code`）
- **エージェントによる品質保証・セキュリティ**: cloudflare/security-audit-skillは6フェーズの多段階監査を自動化し11,000超のスターを獲得、alibaba/open-code-reviewは決定論的パイプラインとLLMのハイブリッドで行レベルレビューを実現し約6,900スターと、エージェントをセキュリティ監査・コードレビューに適用するツールが上位を占めている。（`cloudflare/security-audit-skill`、`alibaba/open-code-review`）
- **マルチエージェントのオーケストレーションと管理**: stablyai/orcaはgit worktreeによる並列エージェント実行環境を提供し約6,500スター、paperclipai/paperclipは組織図・予算・ガバナンスを備えたエージェント管理アプリとして約2,300スターを獲得。superdesigndev/tregは3,000以上のツールエンドポイントを統合するレジストリで、複数エージェントの運用基盤への需要がうかがえる。（`stablyai/orca`、`paperclipai/paperclip`、`superdesigndev/treg`、`cline/cline`）
- **エージェントの記憶・ナレッジ基盤**: vectorize-io/hindsightはLongMemEvalベンチマークで最高性能を謳うエージェントメモリシステム、Tencent/WeKnoraはRAG・エージェント・Wikiの3モードを統合するナレッジ基盤、Fission-AI/OpenSpecは仕様駆動開発のための仕様レイヤーを提供し、エージェントに持続的なコンテキストを与える仕組みが注目されている。（`vectorize-io/hindsight`、`Tencent/WeKnora`、`Fission-AI/OpenSpec`、`TencentCloud/Octop`）
- **業務特化型エージェントと学習教材**: anthropics/financial-servicesは投資銀行や株式リサーチ等の金融ワークフロー向けエージェント群、anthropics/knowledge-work-pluginsは営業・法務・財務など11種の職種別プラグインを提供。bojieli/ai-agent-bookはAIエージェントの設計原理と工程実践を解説するオープンソース書籍で約2,500スターを集めており、実務適用と学習の両面で関心が高い。（`anthropics/financial-services`、`anthropics/knowledge-work-plugins`、`bojieli/ai-agent-book`）

### 補足的な観察

- 言語分布はPythonが最多（8件）で、TypeScript（5件）、JavaScript（3件）、Go（2件）、Rust（1件）が続く。AIエージェント関連はPythonとTypeScriptに二分される傾向がある。
- スター数上位はcloudflare/security-audit-skill（11,262）、alibaba/open-code-review（6,920）、stablyai/orca（6,547）、affaan-m/ECC（6,193）で、いずれもエージェントの品質保証・運用管理に関わるツールである。
- Anthropic公式リポジトリが3件（claude-code、financial-services、knowledge-work-plugins）、Tencent関連が2件（WeKnora、Octop）ランクインし、大手企業の公式プロジェクトの存在感が目立つ。
- pytorch/pytorchやodoo/odoo、cloudflare/quicheといったAIエージェントと直接関係ない定番プロジェクトもランクインしているが、スター数は165〜741とエージェント関連に比べて控えめである。

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 10 |
| TypeScript | 5 |
| JavaScript | 3 |
| Go | 2 |
| Rust | 1 |

## Repository一覧

### 1. [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)

> A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings

- Language: JavaScript
- Stars: 21,642
- Forks: 1,246
- Stars in 1週間: 11,262
- Category: セキュリティ監査ツール
- Keywords: `セキュリティ監査` `脆弱性検出` `コーディングエージェント` `多段階検証` `自動化` `Cloudflare`
- Summary source: README

#### README要約

- コーディングエージェントをセキュリティ監査人に変えるスキルで、多段階の監査プロセスを自動化します。
- 偵察、カバレッジ主導のハンティング、候補検証、構造化出力、独立検証、レポート生成の6フェーズで構成されます。
- セキュリティ監査を自動化したい開発者や、コードベースの脆弱性を体系的に発見したいチーム向けです。
- Node.jsとツール使用・並列サブエージェント対応のコーディングエージェントが必要で、サンドボックス環境での実行が推奨されます。

---

### 2. [anthropics/financial-services](https://github.com/anthropics/financial-services)

- Language: Python
- Stars: 37,549
- Forks: 5,432
- Stars in 1週間: 2,382
- Category: 金融AIエージェント
- Keywords: `Claude` `金融サービス` `エージェント` `MCP` `投資銀行` `株式リサーチ`
- Summary source: README

#### README要約

- 金融サービス業務向けのClaudeエージェント、スキル、データコネクタを提供するリファレンスリポジトリ。
- 投資銀行、株式リサーチ、プライベートエクイティ、ウェルスマネジメントなどの業務ワークフローに対応したエージェントを収録。
- Claude CoworkプラグインまたはClaude Managed Agents API経由でデプロイ可能で、同じシステムプロンプトとスキルを共有。
- すべての出力は人間の専門家によるレビューが前提で、投資助言や取引実行は行わない設計。

---

### 3. [anthropics/claude-code](https://github.com/anthropics/claude-code)

> Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.

- Language: TypeScript
- Stars: 148,097
- Forks: 24,575
- Stars in 1週間: 2,384
- Category: AIコーディングツール
- Keywords: `Claude Code` `エージェント` `ターミナル` `自然言語` `Git` `プラグイン`
- Summary source: README

#### README要約

- Claude Codeはターミナル上で動作し、コードベースを理解して自然言語コマンドでコーディングを支援するエージェント型ツールです。
- 定型タスクの実行、複雑なコードの説明、Gitワークフローの処理を行い、ターミナル・IDE・GitHub上で利用可能です。
- 開発者が日常のコーディング作業を効率化するために使用し、プラグインで機能を拡張できます。
- MacOS/LinuxではcurlまたはHomebrew、WindowsではirmまたはWinGetでインストールし、npm経由のインストールは非推奨となっています。

---

### 4. [alibaba/open-code-review](https://github.com/alibaba/open-code-review)

> Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

- Language: Go
- Stars: 41,322
- Forks: 2,970
- Stars in 1週間: 6,920
- Category: AIコードレビューツール
- Keywords: `コードレビュー` `LLMエージェント` `CLI` `Git diff` `CI/CD連携` `Alibaba`
- Summary source: README

#### README要約

- Alibaba発のAIコードレビューCLIツールで、Git diffを解析しLLMエージェント経由で行レベルの精密なレビューコメントを生成する。
- 決定論的パイプラインとLLMエージェントのハイブリッド構成で、ファイル選定・バンドル・ルールマッチングを工学的に保証しつつ動的な文脈取得を行う。
- 大規模変更セットのレビュー精度を重視する開発者やチーム、CI/CDパイプラインへの組み込み、Claude CodeやCodex等のコーディングエージェントとの連携に適する。
- npmでグローバルインストール後、LLMプロバイダとモデルの設定が必要。Git 2.41以上が前提で、Apache-2.0ライセンス。

---

### 5. [affaan-m/ECC](https://github.com/affaan-m/ECC)

> The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.

- Language: JavaScript
- Stars: 267,485
- Forks: 39,955
- Stars in 1週間: 6,193
- Category: AI開発ツール
- Keywords: `AIエージェント` `Claude Code` `開発ワークフロー` `スキルシステム` `AgentShield` `MITライセンス`
- Summary source: README

#### README要約

- Claude CodeなどのAIコーディングエージェントに、計画→テスト→実装→レビュー→検証→記憶→改善という体系的な開発プロセスを導入するエージェントハーネス最適化システム。
- 68のエージェント、292のスキル、94のコマンド、フック、メモリ、継続学習、AgentShieldセキュリティスキャンを提供し、Claude Code、Codex、Cursor、OpenCodeなど複数のハーネスに対応する。
- AIエージェントを使った開発で、一貫したワークフロー、自己レビュー、知識の永続化を求める開発者やチームが対象。
- Node.js 18以上が必要で、npx ecc-universal@2.2.2 setupで導入可能。公式チャネル以外からのインストールはマルウェアの危険があると警告されている。

---

### 6. [Tencent/WeKnora](https://github.com/Tencent/WeKnora)

> Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

- Language: Go
- Stars: 30,071
- Forks: 4,035
- Stars in 1週間: 3,749
- Category: LLMナレッジ基盤
- Keywords: `RAG` `エージェント` `ナレッジベース` `Docker` `Go` `MITライセンス`
- Summary source: README

#### README要約

- Tencent製のオープンソースLLMナレッジフレームワークで、企業文書の理解・意味検索・推論を行う。
- RAG検索、マルチステップタスクのエージェント、知識整理Wikiの3モードが同一ナレッジベース上で動作する。
- Feishu/Confluence/Notion等からの自動同期、PDF/Word/Excel等10以上の形式対応、WeCom/Slack等のIM連携を備える。
- Docker ComposeやKubernetesで自環境にデプロイ可能。本番利用時は公開ネットワークへの直接公開を避けることが強く推奨される。

---

### 7. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

> Production-grade engineering skills for AI coding agents.

- Language: JavaScript
- Stars: 99,072
- Forks: 10,403
- Stars in 1週間: 3,345
- Category: AIエージェント用開発スキル集
- Keywords: `AIコーディングエージェント` `スラッシュコマンド` `開発ライフサイクル` `品質ゲート` `TDD` `Claude Code`
- Summary source: README

#### README要約

- AIコーディングエージェント向けに、シニアエンジニアのワークフロー・品質ゲート・ベストプラクティスをパッケージ化した25個のスキル集。
- 開発ライフサイクル全体をカバーする9つのスラッシュコマンド（/spec、/plan、/build、/test、/review、/shipなど）を提供し、作業内容に応じてスキルが自動起動する。
- Claude Code、Cursor、Codex、Copilot、Gemini CLIなど70以上のAIエージェントを利用する開発者が、プロトタイプ品質ではなく本番品質のコードを一貫して生成するために使用する。
- npx skills add addyosmani/agent-skills で一括インストール可能。個別スキルのみインストールすると共有チェックリストの参照が欠落する既知の制約がある。ライセンスはMIT。

---

### 8. [stablyai/orca](https://github.com/stablyai/orca)

> Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.

- Language: TypeScript
- Stars: 78,286
- Forks: 5,121
- Stars in 1週間: 6,547
- Category: AI開発環境
- Keywords: `AIエージェント` `並列実行` `Git Worktree` `開発環境` `オーケストレーション` `TypeScript`
- Summary source: README

#### README要約

- Orcaは複数のAIコーディングエージェントを並列で管理・実行するためのオーケストレーションツール（ADE）です。
- 各エージェントを独立したgit worktreeで並行実行し、結果の比較・マージ、ターミナル分割、SSH経由のリモート実行などが可能です。
- Claude CodeやCodexなど任意のCLIエージェントを自分のサブスクリプションで使いたい開発者や、モバイルから監視したいユーザー向けです。
- デスクトップ（macOS/Windows/Linux）とモバイル（iOS/Android）に対応し、MITライセンスのオープンソースとして提供されています。

---

### 9. [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)

> Hindsight: Agent Memory That Learns

- Language: Python
- Stars: 29,766
- Forks: 3,144
- Stars in 1週間: 3,363
- Category: AIエージェントメモリシステム
- Keywords: `エージェントメモリ` `長期記憶` `RAG代替` `LLM統合` `ベンチマーク最高性能` `マルチプラットフォーム`
- Summary source: README

#### README要約

- Hindsightは、時間とともに学習するエージェントを構築するためのエージェントメモリシステムです。
- 会話履歴の想起だけでなく、RAGやナレッジグラフの欠点を解消し、LongMemEvalベンチマークで最高性能を達成しています。
- AIエージェント開発者やFortune 500企業、AIスタートアップを対象とし、長期記憶タスクに最適です。
- Docker、pip、Kubernetes、マネージドクラウドで導入可能で、25以上のLLMプロバイダーに対応しています。

---

### 10. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)

> Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork

- Language: Python
- Stars: 25,620
- Forks: 3,032
- Stars in 1週間: 1,118
- Category: AIプラグイン集
- Keywords: `Claude Cowork` `プラグイン` `ナレッジワーク` `MCP` `スラッシュコマンド` `カスタマイズ`
- Summary source: README

#### README要約

- Claudeを特定の職種・チーム・企業の専門家に変えるプラグイン集で、Claude Cowork向けに構築されClaude Codeとも互換性がある。
- 各プラグインはスキル、コネクタ、スラッシュコマンド、サブエージェントをバンドルし、マークダウンとJSONのみのファイルベース構成でコードやビルド不要。
- 営業、カスタマーサポート、プロダクト管理、マーケティング、法務、財務、データ分析など11種のプラグインが公開されており、ナレッジワーカーが対象。
- CoworkのプラグインページまたはClaude CodeのCLIコマンドでインストールでき、.mcp.jsonやスキルファイルを編集して自社のツールやワークフローに合わせてカスタマイズ可能。

---

### 11. [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)

> CLI tool for configuring and monitoring Claude Code

- Language: Python
- Stars: 31,828
- Forks: 3,619
- Stars in 1週間: 965
- Category: 開発者ツール
- Keywords: `Claude Code` `CLI` `テンプレート` `MCP` `監視` `設定管理`
- Summary source: README

#### README要約

- AnthropicのClaude Code向けに、エージェント・コマンド・設定・フック・MCP・テンプレートをまとめて提供するCLIツールです。
- npxで対話的または個別指定で導入でき、Analytics、Conversation Monitor、Health Check、Plugin Dashboardなどの開発支援機能も含みます。
- Claude Codeを使う開発者が、開発ワークフローの拡張、監視、診断、外部サービス連携を手早く整える用途に向いています。
- 導入はnpx claude-code-templates@latestから始められ、MITライセンスです。一部収録物には元のライセンスと帰属が保持されています。

---

### 12. [paperclipai/paperclip](https://github.com/paperclipai/paperclip)

> The open-source app everyone uses to manage agents at work

- Language: TypeScript
- Stars: 84,866
- Forks: 15,228
- Stars in 1週間: 2,321
- Category: AIエージェント管理
- Keywords: `AIエージェント` `オーケストレーション` `組織管理` `コスト管理` `ガバナンス` `オープンソース`
- Summary source: README

#### README要約

- Paperclipは、AIエージェントのチームを組織化して業務を管理するオープンソースのオーケストレーションアプリです。
- Node.jsサーバーとReact UIで構成され、目標設定、組織図、予算管理、ガバナンス、コスト追跡をダッシュボードで一元管理できます。
- 複数のAIエージェント（OpenClaw、Claude Code、Codex、Cursorなど）を統括し、自律的な業務遂行を監視したいチームや開発者向けです。
- MITライセンスで提供され、テレメトリはデフォルトで有効ですが環境変数や設定で無効化可能です。

---

### 13. [pytorch/pytorch](https://github.com/pytorch/pytorch)

> Tensors and Dynamic neural networks in Python with strong GPU acceleration

- Language: Python
- Stars: 103,325
- Forks: 30,444
- Stars in 1週間: 228
- Category: 深層学習フレームワーク
- Keywords: `テンソル計算` `GPU加速` `自動微分` `動的ニューラルネットワーク` `Python` `TorchScript`
- Summary source: README

#### README要約

- PyTorchは、GPUによる高速化を備えたテンソル計算と動的ニューラルネットワークを提供するPythonパッケージです。
- テープベースの自動微分システムを採用し、ネットワークの挙動を柔軟に変更可能で、NumPyやSciPyなどの既存Pythonライブラリと自然に連携できます。
- GPUを活用したいNumPyユーザーや、柔軟性と速度を求める深層学習研究者を主な対象としています。
- Condaやpipでバイナリをインストール可能で、ソースからビルドする場合はPython 3.10以降とC++20対応コンパイラが必要です。

---

### 14. [TencentCloud/Octop](https://github.com/TencentCloud/Octop)

> A smarter, self-hosted AI assistant — multi-user, multi-agent.

- Language: Python
- Stars: 4,961
- Forks: 585
- Stars in 1週間: 1,608
- Category: セルフホストAIアシスタント
- Keywords: `セルフホスト` `マルチエージェント` `マルチユーザー` `IM連携` `RAG` `Python`
- Summary source: README

#### README要約

- OctopはTencentCloudが公開するオープンソースのセルフホスト型AIアシスタントで、マルチユーザー・マルチエージェント構成を特徴とする。
- Webダッシュボード、CLI、Feishu/DingTalk/QQ/Telegram/WeComなどのIM連携、cron自動化を単一プロセスで提供し、RAGナレッジベースやACP経由のIDE連携も備える。
- 個人の秘書的利用、家族での共有、小規模チームでのタスク連携、開発者のコーディング支援やブラウザ自動化などの用途を想定している。
- Python 3.12以上が必要で、データは~/.octop/配下にローカル保存され、JWT認証やツール承認、PII編集などのセキュリティ機能を内蔵する。MITライセンス。

---

### 15. [cloudflare/quiche](https://github.com/cloudflare/quiche)

> 🥧 Savoury implementation of the QUIC transport protocol and HTTP/3

- Language: Rust
- Stars: 12,609
- Forks: 1,148
- Stars in 1週間: 741
- Category: ネットワークプロトコルライブラリ
- Keywords: `QUIC` `HTTP/3` `Rust` `Cloudflare` `トランスポートプロトコル` `IETF`
- Summary source: README

#### README要約

- IETF標準に準拠したQUICトランスポートプロトコルおよびHTTP/3のRust実装です。
- QUICパケット処理と接続状態管理のための低レベルAPIを提供し、I/Oとイベントループはアプリケーション側が実装します。
- Cloudflareのエッジネットワーク、AndroidのDNSリゾルバ、curlなどでHTTP/3サポートに利用されています。
- Android/iOS向けビルドやDockerイメージをサポートしますが、付属のサンプルアプリは本番環境での使用を想定していません。

---

### 16. [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)

> Spec-driven development (SDD) for AI coding assistants.

- Language: TypeScript
- Stars: 70,366
- Forks: 4,819
- Stars in 1週間: 1,415
- Category: AI開発支援ツール
- Keywords: `仕様駆動開発` `AIコーディングアシスタント` `スラッシュコマンド` `TypeScript` `CLI` `オープンソース`
- Summary source: README

#### README要約

- AIコーディングアシスタント向けの仕様駆動開発（SDD）フレームワークで、コードを書く前に人間とAIが仕様に合意できる軽量な仕様レイヤーを提供する。
- 変更ごとにproposal・specs・design・tasksをまとめたフォルダを生成し、/opsx:exploreや/opsx:proposeなどのスラッシュコマンドで探索・提案・実装・アーカイブまでを管理する。
- 個人開発からチーム開発まで対応し、30以上のAIアシスタントと連携可能。チーム向けには複数リポジトリ横断で仕様を共有できるStores（ベータ版）も提供する。
- Node.js 20.19.0以上が必要で、npmまたはHomebrewでグローバルインストール後、プロジェクト内でopenspec initを実行して初期化する。

---

### 17. [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)

> "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/

- Language: Python
- Stars: 50,541
- Forks: 4,627
- Stars in 1週間: 964
- Category: AIエージェント用CLI生成ツール
- Keywords: `Agent-Native` `CLIハーネス生成` `CLI-Hub` `SKILL.md` `Claude Code` `Apache 2.0`
- Summary source: README

#### README要約

- あらゆるソフトウェアをAIエージェントから操作可能にする「Agent-Native」化を目指すPython製プロジェクト。
- ソフトウェア向けのCLIハーネスとSKILL.mdを生成し、CLI-Hub経由でコミュニティ製CLIを閲覧・インストール・管理できる。
- Claude CodeやCursorなどのエージェント環境でCAD、3D、GIS、ノート、動画編集など多様なアプリを自動操作したい開発者・コントリビューター向け。
- pip install cli-anything-hubとcli-hub installで導入可能だが、1回の生成では網羅しきれず/refineによる反復改善が必要な場合がある。ライセンスはApache 2.0。

---

### 18. [superdesigndev/treg](https://github.com/superdesigndev/treg)

> OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn

- Language: Python
- Stars: 3,387
- Forks: 278
- Stars in 1週間: 1,406
- Category: AIエージェントツールレジストリ
- Keywords: `AIエージェント` `ツールレジストリ` `API統合` `従量課金` `認証情報管理` `MCP`
- Summary source: README

#### README要約

- Tregは、AIエージェント向けのツールレジストリで、OpenRouterのように1つのベースURLとトークンで3,000以上のエンドポイント（60以上のプロバイダー）にアクセスできるサービスです。
- SEO、ソーシャルメディア、企業情報収集、広告、スクレイピング、画像・動画生成などのツールを従量課金制（1回あたり1セントから）で提供し、プロバイダーへの個別登録は不要です。
- チーム独自のAPIキー、スキル、CLIも登録・共有可能で、認証情報はサーバー側で管理され、エージェントは認証情報を保持せずにツールを利用できます。
- CLIインストール（curl経由）またはClaude Codeプラグインとして導入でき、セルフホストも可能です。独自キーが優先され、その場合は課金されません。

---

### 19. [cline/cline](https://github.com/cline/cline)

> Autonomous coding agent as an SDK, IDE extension, or CLI assistant.

- Language: TypeScript
- Stars: 69,321
- Forks: 7,517
- Stars in 1週間: 855
- Category: AIコーディングエージェント
- Keywords: `自律型エージェント` `VS Code拡張` `CLI` `マルチエージェント` `MCP` `TypeScript`
- Summary source: README

#### README要約

- Clineは、IDE、ターミナル、デスクトップで動作するオープンソースの自律型コーディングエージェントです。
- ファイルの作成・編集、コマンド実行、Webブラウジングなどを人間の承認を得ながら行い、PlanモードとActモードを切り替えて計画と実行を管理します。
- VS Code拡張機能、JetBrainsプラグイン、CLI、デスクトップアプリ、SDKとして提供され、複数のAIプロバイダーやモデルに対応しています。
- npmでインストール可能で、MCPサーバーやプラグインで拡張でき、マルチエージェントチームやスケジュール実行、SlackやTelegramなどのメッセージングプラットフォームとの連携もサポートします。

---

### 20. [odoo/odoo](https://github.com/odoo/odoo)

> Odoo. Open Source Apps To Grow Your Business.

- Language: Python
- Stars: 54,649
- Forks: 33,837
- Stars in 1週間: 165
- Category: オープンソースERP
- Keywords: `Odoo` `ERP` `CRM` `会計` `在庫管理` `Python`
- Summary source: README

#### README要約

- OdooはWebベースのオープンソースビジネスアプリ群です。
- CRM、Webサイト構築、eコマース、在庫管理、プロジェクト管理、会計、POS、人事、マーケティング、製造などのアプリを含みます。
- 各アプリは単体でも利用でき、複数を組み合わせると統合されたオープンソースERPとして使えます。
- 標準インストールは公式ドキュメントのセットアップ手順に従い、学習にはeLearningや開発者向けチュートリアルが案内されています。

---

### 21. [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)

> 《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF 与按章配套代码

- Language: Python
- Stars: 50,995
- Forks: 5,718
- Stars in 1週間: 2,481
- Category: AIエージェント書籍・教材
- Keywords: `AIエージェント` `LLM` `オープンソース書籍` `実験コード` `コンテキストエンジニアリング` `多言語対応`
- Summary source: README

#### README要約

- 李博杰著『深入理解 AI Agent：设计原理与工程实践』のオープンソース公式リポジトリで、書籍全文・PDF/EPUB・章別コードを公開している。
- 「Agent = LLM + コンテキスト + ツール」を軸に全10章で原理から実践までを解説し、109個の実験コードと15言語の翻訳版を収録する。
- AIエージェントの設計・開発を学ぶエンジニアや研究者向けで、基礎から本番運用までの実践的な学習教材として利用できる。
- 実験にはPython 3.11–3.13とuvまたはpipでの依存インストールが必要で、モデル呼び出し実験では各プロバイダのAPIキー設定が求められる。

---
