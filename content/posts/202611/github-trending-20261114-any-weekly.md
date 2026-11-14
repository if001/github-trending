+++
title = 'GitHub Trending 1週間レポート (All) - 2026/11/14'
date = 2026-11-14T01:17:58.442Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月14日 1:17:58
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 15
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェント向けの「スキル」集と、ブラウザ・デスクトップを操作するエージェント基盤ツールがトレンドを席巻している。

- Anthropic公式のanthropics/skillsを筆頭に、mattpocock/skills、addyosmani/agent-skills、cloudflare/security-audit-skillなど、AIエージェントに特定の作業手順を教え込む「スキル」形式のリポジトリが4件ランクインし、大きな注目を集めている。
- vercel-labs/agent-browserとvercel-labs/agent-desktopのように、AIエージェントがブラウザやデスクトップアプリをアクセシビリティツリー経由で操作するためのCLI基盤がRust製で登場し、合計で約1万スターを獲得している。
- 1位はOSINTツールのsherlock-project/sherlock（13,364スター）で、AI関連が多数を占める中で異色の存在となっている。
- 言語分布はPythonが最多の7件で、TypeScript・Rust・JavaScript・Shell・C++が続き、エージェント実行基盤にはRustが選ばれる傾向が見られる。

### 主なテーマ

- **AIエージェント用スキル・プラグイン**: SKILL.md形式でエージェントに専門タスクの手順を与える仕組みが急拡大しており、Anthropic公式のanthropics/skills（6,169スター）に加え、実務ワークフロー重視のmattpocock/skills（7,599スター）、本番品質のaddyosmani/agent-skills、セキュリティ監査に特化したcloudflare/security-audit-skill（8,829スター）、設計レビュー支援のgoogle/elephant-goldfish-modelと、計5件がランクインしている。（`anthropics/skills`、`mattpocock/skills`、`addyosmani/agent-skills`、`cloudflare/security-audit-skill`、`google/elephant-goldfish-model`）
- **エージェントの環境操作基盤**: AIエージェントが実際の環境を操作するための基盤ツールが台頭しており、vercel-labs/agent-browserはブラウザを、vercel-labs/agent-desktopはデスクトップアプリを、ともにアクセシビリティツリー経由で操作するRust製CLIとして提供されている。milind-soni/OpenMausBotもボット用の仮想マシン環境を提供し、エージェントの実行基盤への関心の高さを示している。（`vercel-labs/agent-browser`、`vercel-labs/agent-desktop`、`milind-soni/OpenMausBot`）
- **LLM活用の実用アプリケーション**: LLMを特定ドメインに適用する実用ツールも人気で、ZhuLinsen/daily_stock_analysisは多市場の株式分析と自動通知をGitHub Actionsでゼロコスト運用でき、NVIDIA/auto-ontologyはオントロジー層でエージェントのデータ分析の信頼性を高める。anthropics/claude-quickstartsは金融分析やブラウザ自動化などの実装パターン集を提供している。（`ZhuLinsen/daily_stock_analysis`、`NVIDIA/auto-ontology`、`anthropics/claude-quickstarts`）
- **OSINT・調査ツール**: sherlock-project/sherlockが13,364スターで期間内トップを記録しており、400以上のソーシャルネットワークを横断してユーザー名からアカウントを検索するOSINTツールへの根強い需要が示された。AI関連が並ぶ中で最大のスター数を獲得している点が特徴的である。（`sherlock-project/sherlock`）

### 補足的な観察

- スター数の上位はsherlock-project/sherlock（13,364）、cloudflare/security-audit-skill（8,829）、milind-soni/OpenMausBot（7,763）、mattpocock/skills（7,599）の順で、スキル系リポジトリが上位に複数入っている。
- 言語別ではPythonが7件と最多だが、vercel-labsの2件とzed-industries/zedがRust製で、パフォーマンス重視のエージェント基盤やエディタにRustが採用されている。
- Anthropic関連がanthropics/skillsとanthropics/claude-quickstartsの2件、Vercel Labs関連がagent-browserとagent-desktopの2件と、同一組織の複数ランクインが目立つ。
- AIエージェント関連以外では、物理シミュレーションのgoogle-deepmind/mujoco（C++）とコードエディタのzed-industries/zed（Rust）がランクインしており、基盤系ソフトウェアへの安定した関心もうかがえる。

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 6 |
| Rust | 3 |
| JavaScript | 2 |
| TypeScript | 2 |
| C++ | 1 |
| Shell | 1 |

## Repository一覧

### 1. [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock)

> Hunt down social media accounts by username across social networks

- Language: Python
- Stars: 111,148
- Forks: 12,861
- Stars in 1週間: 13,364
- Category: OSINT・調査ツール
- Keywords: `ユーザー名検索` `ソーシャルメディア` `OSINT` `CLI` `Python` `アカウント調査`
- Summary source: README

#### README要約

- ユーザー名を指定して400以上のソーシャルネットワーク上のアカウントを横断検索するPython製CLIツール。
- 複数ユーザー名の一括検索、サイト指定、プロキシ経由のリクエスト、結果のtxt/CSV/xlsx出力などに対応する。
- SNS上のアカウント存在確認やユーザー名調査を行いたいユーザー向けのツール。
- pipx・pip・uv・Dockerなどで導入可能。ParrotOSとUbuntu 24.04のサードパーティ製パッケージは壊れているため非推奨。

---

### 2. [anthropics/skills](https://github.com/anthropics/skills)

> Public repository for Agent Skills

- Language: Python
- Stars: 194,149
- Forks: 22,833
- Stars in 1週間: 6,169
- Category: AIエージェント拡張
- Keywords: `Claude` `Agent Skills` `SKILL.md` `Anthropic` `ドキュメント生成` `プラグイン`
- Summary source: README

#### README要約

- Anthropicが公開するClaude向けAgent Skillsの公式リポジトリで、指示・スクリプト・リソースをまとめたスキルを動的に読み込み専門タスクの性能を向上させる。
- 各スキルはSKILL.mdにYAML frontmatter（nameとdescription）と指示文を記述した自己完結型フォルダで構成され、仕様書とテンプレートも提供される。
- Claude Code・Claude.ai・APIのユーザーが対象で、ドキュメント作成（docx/pdf/pptx/xlsx）や開発・企業ワークフローなどの例を参照し独自スキルを作成できる。
- 多くはApache 2.0のオープンソースだがデモ・教育目的の提供であり、重要なタスクで利用する前に自環境での十分なテストが必要。

---

### 3. [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)

> Open-source Grok Bot alternative with a virtual machine that bots can use

- Language: TypeScript
- Stars: 22,199
- Forks: 3,077
- Stars in 1週間: 7,763
- Category: AIエージェント管理ツール
- Keywords: `オープンソース` `AIボット` `ローカルファースト` `マルチエージェント` `チャットアプリ` `Grok Bot代替`
- Summary source: README

#### README要約

- OpenMausBotは、Grok BotにインスパイアされたオープンソースのAIボットチャットアプリで、複数のAIエージェントを連絡先のように管理できます。
- 各ボットはClaudeやCodexなどのCLIで動作し、独自のモデル・クラウドコンピュータ・接続アプリを持ち、ローカルファーストで動作します。
- AIエージェントを自分のマシンで安全に運用したい開発者やパワーユーザー向けで、承認機能により危険な操作を事前に制御できます。
- macOS・Windows・Ubuntuに対応し、既存のAIサブスクリプションをそのまま利用可能。Apache 2.0ライセンスで、xAI等との提携はありません。

---

### 4. [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)

> Browser automation CLI for AI agents

- Language: Rust
- Stars: 50,738
- Forks: 3,526
- Stars in 1週間: 4,360
- Category: ブラウザ自動化CLI
- Keywords: `AIエージェント` `ブラウザ自動化` `Rust` `CLI` `Chrome DevTools Protocol` `アクセシビリティツリー`
- Summary source: README

#### README要約

- AIエージェントがシェルからブラウザを操作できるようにする、Rust製のブラウザ自動化CLIです。
- snapshotコマンドでページをアクセシビリティツリー形式のコンパクトなテキストとして取得し、各要素に付与されるref（@e1など）を使ってクリックや入力などの操作を実行します。
- AIエージェントやLLMベースのツールからブラウザを制御したい開発者を対象としており、バックグラウンドデーモンがChrome DevTools Protocol経由でブラウザを管理し、コマンド間でブラウザを開いたままにします。
- npm、Homebrew、npxでインストール可能で、初回はagent-browser installでChrome for Testingをダウンロードします。MCP対応やセッション永続化、複数ブラウザエンジンの選択にも対応しています。

---

### 5. [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model)

> Open-source plugin for designing and reviewing software with agents

- Language: Python
- Stars: 18,631
- Forks: 1,389
- Stars in 1週間: 5,560
- Category: AI開発支援ツール
- Keywords: `AIアシスタント` `設計レビュー` `仕様書作成` `プラグイン` `コーディングエージェント` `ドリフト検出`
- Summary source: README

#### README要約

- AIアシスタント向けのオープンソースプラグインで、ソフトウェアの設計とレビューを支援する。
- Elephantがプロジェクト文脈を保持して仕様書を起草し、文脈を持たないGoldfishレビュアーが新鮮な視点でドラフトを検査する。
- コーディングエージェント利用者が設計のブレインストーミング、仕様書作成、レビュー、ドリフト検出に使用する。
- ChatGPT、Claude Code、Codex CLI、Antigravity等にインストール可能で、レビューにはフレッシュなサブエージェント作成機能が必要。

---

### 6. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)

> LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source market data, real-time news, decision dashboard, automated notifications, and cost-free scheduled runs.

- Language: Python
- Stars: 71,614
- Forks: 57,288
- Stars in 1週間: 3,778
- Category: 株式分析自動化ツール
- Keywords: `LLM` `株式分析` `自動通知` `GitHub Actions` `多市場対応` `意思決定ダッシュボード`
- Summary source: README

#### README要約

- AI大モデルを活用したA株・香港株・米国株・日本株・韓国株・台湾株の自動分析システムで、毎日の意思決定ダッシュボードを生成する。
- 複数データソースからの行情・ニュース・公告を集約し、15種類の内蔵戦略によるAgent問股、Web/デスクトップワークベンチ、回測機能を提供する。
- 個人投資家やトレーダー向けに、GitHub ActionsやDockerを用いたゼロコストの定期実行と、WeChat・Telegram・Slack等への自動プッシュ通知を実現する。
- ForkしてSecretsを設定するだけでGitHub Actionsで5分でデプロイ可能だが、無料データソースは上流の制限や変動の影響を受けるため、安定運用には有料APIトークンの設定が推奨される。

---

### 7. [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)

> Auto Ontology is a Python framework for building semantic, graph-based reasoning layers over data. It enables deterministic query generation, better context retrieval, and more explainable AI for LLM and agent workflows.

- Language: Python
- Stars: 12,564
- Forks: 1,031
- Stars in 1週間: 4,108
- Category: AIエージェント基盤
- Keywords: `オントロジー` `NL-to-SQL` `MCP` `NVIDIA NIM` `セマンティックレイヤー` `エージェント`
- Summary source: README

#### README要約

- エンタープライズメタデータからセマンティックなオントロジー層を構築し、AIエージェントにデータの意味・所在・利用可否・由来を提供するオープンライブラリ。
- 自然言語クエリをSQLに変換して実行し、認証済み定義とリネージで検証、MCP/CLI/API経由で任意のエージェントハーネスにコンテキストを公開する。
- LLMやエージェントワークフローで信頼性の高いデータ分析を行いたい開発者・データ基盤チーム向け。
- Docker ComposeまたはHelmでデプロイ可能。NVIDIA NIMエンドポイントとAPIキーが必要。Apache 2.0ライセンスだが外部コントリビューションは現在未受付。

---

### 8. [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)

> Multi-Joint dynamics with Contact. A general purpose physics simulator.

- Language: C++
- Stars: 17,874
- Forks: 2,188
- Stars in 1週間: 1,764
- Category: 物理シミュレーションエンジン
- Keywords: `物理エンジン` `ロボティクス` `シミュレーション` `C++` `Python` `Google DeepMind`
- Summary source: README

#### README要約

- MuJoCoはMulti-Joint dynamics with Contactの略で、関節構造と環境の相互作用を高速かつ正確にシミュレーションする汎用物理エンジンです。
- C APIを提供し、ランタイムは事前割り当てされた低レベルデータ構造で動作するよう最適化されており、XMLコンパイラ、インタラクティブな可視化機能、物理量計算ユーティリティを含みます。
- ロボティクス、バイオメカニクス、グラフィックス、アニメーション、機械学習などの研究開発者を対象としており、PythonバインディングやUnityプラグインも提供されています。
- Linux、Windows、macOS向けのプリビルトバイナリが推奨され、pip install mujocoでPython版を導入可能ですが、mainブランチの最新コミットは不安定な場合があります。

---

### 9. [mattpocock/skills](https://github.com/mattpocock/skills)

> Skills for Real Engineers. Straight from my .agents directory.

- Language: Shell
- Stars: 323,843
- Forks: 27,178
- Stars in 1週間: 7,599
- Category: AIコーディングエージェント用スキル集
- Keywords: `AIエージェント` `Claude Code` `TDD` `要件定義` `コード設計` `開発ワークフロー`
- Summary source: README

#### README要約

- Matt Pocock氏が日々の実務で使うAIコーディングエージェント向けスキル集で、vibe codingではなく本物のエンジニアリングを支援する。
- 要件を詰める/grill系、TDD、バグ診断、アーキテクチャ改善、PR作成などのスキルを小さく組み合わせ可能な形で提供する。
- Claude Code、Codex、GitHub Copilot、Gemini CLIなどのエージェントを使い、設計や品質を重視して開発したいエンジニアが対象。
- 各エージェント向けのプラグインやnpxコマンドで導入し、リポジトリごとに/setup-matt-pocock-skillsを一度実行して設定する。

---

### 10. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

> Production-grade engineering skills for AI coding agents.

- Language: JavaScript
- Stars: 117,154
- Forks: 12,250
- Stars in 1週間: 3,502
- Category: AI開発ツール
- Keywords: `AIエージェント` `開発ワークフロー` `スラッシュコマンド` `品質管理` `テスト駆動開発` `コードレビュー`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの本番レベルのエンジニアリングスキル集で、シニアエンジニアのワークフローや品質ゲートをエージェントが一貫して適用できるようにする。
- 開発ライフサイクルに対応した9つのスラッシュコマンド（/spec、/plan、/build、/test、/review、/shipなど）と25個のスキルを提供し、作業内容に応じて自動的に適切なスキルが起動する。
- Claude Code、Cursor、Codex、Copilot、Gemini CLIなど70以上のAIエージェントツールを利用する開発者やチームが対象で、仕様定義から出荷までの全工程を支援する。
- npx skills add addyosmani/agent-skills で全スキルを一括インストール可能。個別スキルのインストールでは共有チェックリストが利用できない制約があり、MITライセンスで提供される。

---

### 11. [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)

> A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings

- Language: JavaScript
- Stars: 71,939
- Forks: 4,793
- Stars in 1週間: 8,829
- Category: セキュリティ監査ツール
- Keywords: `セキュリティ監査` `脆弱性検出` `コーディングエージェント` `多段階検証` `機械可読レポート` `Cloudflare`
- Summary source: README

#### README要約

- コーディングエージェントをセキュリティ監査人に変えるスキルで、多段階の監査プロセスを自動化する。
- 偵察、カバレッジ主導のハンティング、候補検証、構造化出力、独立検証、レポート生成の6フェーズで構成される。
- セキュリティ監査を実施したい開発者や組織が、コードベースの脆弱性を体系的に発見・検証するために使用する。
- Skills CLIでインストール可能で、ツール使用と並列サブエージェントをサポートするコーディングエージェントとNode.jsが必要。

---

### 12. [zed-industries/zed](https://github.com/zed-industries/zed)

> Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.

- Language: Rust
- Stars: 94,963
- Forks: 11,697
- Stars in 1週間: 2,117
- Category: コードエディタ
- Keywords: `Rust` `コードエディタ` `マルチプレイヤー` `高性能` `オープンソース` `GPL-3.0`
- Summary source: README

#### README要約

- ZedはAtomとTree-sitterの開発者による高性能なマルチプレイヤーコードエディタです。
- macOS、Linux、Windowsに対応し、直接ダウンロードまたはパッケージマネージャーからインストールできます。
- コードエディタを必要とする開発者や、共同編集機能を活用したいチームを対象としています。
- ソースコードは主にGPL-3.0-or-laterでライセンスされ、一部にApache-2.0のコンポーネントが含まれます。

---

### 13. [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts)

> A collection of projects designed to help developers quickly get started with building deployable applications using the Claude API

- Language: Python
- Stars: 20,872
- Forks: 3,490
- Stars in 1週間: 1,731
- Category: APIスターターキット
- Keywords: `Claude API` `クイックスタート` `AIエージェント` `Python` `ブラウザ自動化` `Anthropic`
- Summary source: README

#### README要約

- Claude APIを使ったデプロイ可能なアプリケーション構築を素早く始めるためのプロジェクト集です。
- カスタマーサポート、金融データ分析、コンピュータ操作、ブラウザ自動化、自律コーディングなど多数の実践的なクイックスタートを収録しています。
- Claude APIを使い始めたい開発者や、エージェント・自動化アプリの実装パターンを学びたいエンジニアを対象としています。
- 利用にはClaude APIキーが必要で、各プロジェクトのREADMEに従い依存関係のインストールと環境変数の設定を行います。

---

### 14. [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)

> Computer use CLI for AI agents

- Language: Rust
- Stars: 23,304
- Forks: 1,725
- Stars in 1週間: 5,408
- Category: AIエージェントツール
- Keywords: `AIエージェント` `デスクトップ自動化` `アクセシビリティ` `CLI` `MCP` `Rust`
- Summary source: README

#### README要約

- AIエージェントがmacOS、Windows、LinuxのデスクトップアプリをOSのアクセシビリティツリー経由で見て操作するためのCLIツールです。
- スクリーンショットやピクセルマッチングを使わず、アクセシビリティツリーをJSONとして返し、各要素にrefを付与してクリックや入力を行います。
- AIエージェントのループ内で使用され、CLIまたはCライブラリとして提供され、MCPサーバーとしても動作します。
- npm、Homebrew、GitHub Releasesからインストール可能で、macOS 13以降、Windows 10 1809以降、Ubuntu 24.04以降が必要です。

---

### 15. [lobehub/lobehub](https://github.com/lobehub/lobehub)

> 🤯 LobeHub - Super-Agents on Your Team. Add super-agents to the chats your team already uses.They take on work by themselves and get better every week.

- Language: TypeScript
- Stars: 85,401
- Forks: 16,293
- Stars in 1週間: 1,126
- Category: AIエージェントプラットフォーム
- Keywords: `AIエージェント` `マルチエージェント` `チャット連携` `MCPサーバー` `セルフホスト` `TypeScript`
- Summary source: README

#### README要約

- LobeHubは、チームが既に使っているチャットに自律的に作業をこなす「スーパーエージェント」を追加するオープンソースのAIエージェントプラットフォームです。
- 任意のIMアプリ・エージェント・モデルを一箇所に接続でき、複数タスクの並列実行や、指示なしで適したタスクを自律的に引き受ける仕組みを備えています。
- チームのチャットにエージェントを導入して作業を任せたいユーザーや開発者が対象で、マーケットプレイスからエージェント・MCPサーバー・スキルを追加・公開できます。
- LobeHub Cloudの利用か、Docker Compose（推奨）やワンクリックデプロイによるセルフホストが可能で、現在も活発に開発中のためフィードバックが歓迎されています。

---
