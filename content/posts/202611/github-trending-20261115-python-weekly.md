+++
title = 'GitHub Trending 1週間レポート (python) - 2026/11/15'
date = 2026-11-15T00:51:41.996Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月15日 0:51:41
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 17
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェント向けスキル・拡張エコシステムが急拡大し、OSINT・金融・セキュリティなど実用特化ツールがPython中心に台頭している

- Anthropic・NVIDIA・Googleなど大手がAIエージェント用スキルやプラグインを公開し、エージェント拡張の標準化が進んでいる
- Claude Code向けスキルが金融・セキュリティ・動画解析など多領域に広がり、サードパーティ製エコシステムが活発化している
- OSINT調査ツール（sherlock、maigret）が高いスター数を獲得し、ユーザー名横断検索への関心が強い
- AIエージェントスキルの普及に伴い、SkillSpectorのようなスキル自体のセキュリティスキャナーが登場している
- 一覧の全リポジトリがPython製で、言語分布が完全にPythonに集中している

### 主なテーマ

- **AIエージェントスキル・拡張エコシステム**: anthropics/skills（6,220スター）を筆頭に、NVIDIA/skills、google/elephant-goldfish-model、davila7/claude-code-templatesなど、Claude CodeやCodexなどのコーディングエージェントに機能を追加するスキル・プラグイン・カタログが多数ランクイン。SKILL.md形式の標準化や1,980以上のコンポーネントを提供するレジストリなど、エコシステムの基盤整備が進んでいる。（`anthropics/skills`、`NVIDIA/skills`、`google/elephant-goldfish-model`、`davila7/claude-code-templates`、`anthropics/claude-quickstarts`）
- **金融・トレーディング自動化**: ZhuLinsen/daily_stock_analysis（4,526スター）がLLMによる多市場株式分析とGitHub Actionsでのゼロコスト定時実行を提供し、tradermonty/claude-trading-skillsがClaude Skillsベースのトレーディングワークフローを提供するなど、個人投資家向けのAI金融ツールが複数登場している。（`ZhuLinsen/daily_stock_analysis`、`tradermonty/claude-trading-skills`）
- **OSINT・調査ツール**: sherlock-project/sherlockが12,401スターで一覧最多を記録し、soxoj/maigretも約5,900サイト対応のドシエ収集機能で900スターを獲得。ユーザー名からSNSアカウントを横断検索するOSINTツールへの強い関心がうかがえる。（`sherlock-project/sherlock`、`soxoj/maigret`）
- **AIエージェントのセキュリティ**: スキルエコシステムの拡大に伴い、NVIDIA/SkillSpectorがスキルインストール前の脆弱性・プロンプトインジェクション検出を提供し、elementalsouls/Claude-BugHunterがバグハンティング向けスキルバンドルを提供するなど、エージェント関連のセキュリティツールが台頭している。（`NVIDIA/SkillSpector`、`elementalsouls/Claude-BugHunter`）
- **AIによるコンテンツ生成・マルチモーダル処理**: harry0703/MoneyPrinterTurbo（3,061スター）がテーマからのショート動画自動生成、jamiepine/voiceboxがローカル動作の音声クローン・TTS、bradautomates/claude-videoが動画のフレーム抽出・文字起こしによるエージェントへの視覚情報提供を行うなど、動画・音声を扱うAIツールが複数ランクインしている。（`harry0703/MoneyPrinterTurbo`、`jamiepine/voicebox`、`bradautomates/claude-video`）

### 補足的な観察

- スター数1位はsherlock-project/sherlockの12,401で、2位のanthropics/skills（6,220）に約2倍の差をつけており、OSINTツールへの関心の高さが際立つ
- 一覧17件すべての言語がPythonで、他言語のリポジトリは存在しない
- Anthropic公式が2件（skills、claude-quickstarts）、NVIDIA公式が3件（auto-ontology、SkillSpector、skills）ランクインし、大手企業の公式リポジトリが計5件を占める
- homeassistant-ai/ha-mcpやNVIDIA/auto-ontologyなどMCP（Model Context Protocol）関連が複数含まれ、エージェント連携プロトコルの採用が広がっている

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 17 |

## Repository一覧

### 1. [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock)

> Hunt down social media accounts by username across social networks

- Language: Python
- Stars: 111,786
- Forks: 12,933
- Stars in 1週間: 12,401
- Category: OSINT調査ツール
- Keywords: `ユーザー名検索` `SNS横断` `OSINT` `CLI` `Python` `アカウント調査`
- Summary source: README

#### README要約

- ユーザー名を指定して400以上のSNS・ソーシャルネットワーク上のアカウント存在を横断検索するPython製CLIツール。
- 複数ユーザー名の一括検索、サイト指定、プロキシ経由、タイムアウト設定、結果のtxt/CSV/XLSX出力などに対応する。
- OSINT調査やアカウント調査を行うユーザーが、コマンドラインから手軽にユーザー名の所在を確認する用途に向く。
- pipx・pip・uv・Dockerなどで導入でき、ParrotOSやUbuntu 24.04のサードパーティ製パッケージは壊れている可能性があるため注意が必要。

---

### 2. [anthropics/skills](https://github.com/anthropics/skills)

> Public repository for Agent Skills

- Language: Python
- Stars: 194,632
- Forks: 22,901
- Stars in 1週間: 6,220
- Category: AIエージェント拡張
- Keywords: `Agent Skills` `Claude` `SKILL.md` `Anthropic` `プラグイン` `Apache 2.0`
- Summary source: README

#### README要約

- Anthropicが公開するClaude向けAgent Skillsの公式リポジトリで、指示・スクリプト・リソースをまとめたフォルダ形式のスキルを収録している。
- 各スキルはSKILL.mdにYAMLフロントマターと指示を記述した自己完結型フォルダで構成され、Claudeが動的に読み込んで専門タスクを実行する。
- ドキュメント作成（docx/pdf/pptx/xlsx）、開発、デザイン、企業ワークフローなどの実例を通じて、開発者が独自スキルを作成する際の参考となる。
- Claude CodeのプラグインマーケットプレイスやAPI経由で導入可能だが、デモ・教育目的のため本番利用前に十分なテストが必要。

---

### 3. [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model)

> Open-source plugin for designing and reviewing software with agents

- Language: Python
- Stars: 19,200
- Forks: 1,424
- Stars in 1週間: 5,539
- Category: AI開発支援ツール
- Keywords: `AIアシスタント` `設計レビュー` `仕様書作成` `プラグイン` `コードドリフト` `マルチエージェント`
- Summary source: README

#### README要約

- AIアシスタント向けのオープンソースプラグインで、ソフトウェアの設計とレビューを支援する。
- Elephantがプロジェクトの文脈を保持して仕様書を起草し、Goldfishレビュアーが以前の会話なしでドラフトを検証して暗黙の前提や盲点を洗い出す。
- コーディングエージェントを使う開発者が対象で、ブレインストーム、仕様書作成、レビュー、ドリフト検出などのスキルを個別に利用できる。
- ChatGPT、Claude Code、Codex CLI、Antigravityなどに対応し、レビューには新規サブエージェント作成機能が必要で、テストや人間の判断の代替ではない。

---

### 4. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)

> LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source market data, real-time news, decision dashboard, automated notifications, and cost-free scheduled runs.

- Language: Python
- Stars: 72,261
- Forks: 57,476
- Stars in 1週間: 4,526
- Category: 株式分析自動化ツール
- Keywords: `LLM` `株式分析` `自動通知` `GitHub Actions` `多市場対応` `決策ダッシュボード`
- Summary source: README

#### README要約

- AI大モデルを活用し、A株・香港株・米国株・日本株・韓国株・台湾株などの自選株を毎日自動分析するシステム。
- 複数の無料・有料データソースから行情・ニュース・公告を集約し、LLMがスコア・売買ポイント・リスク警報を含む「決策ダッシュボード」を生成する。
- GitHub ActionsやDockerでゼロコスト定時実行でき、企業微信・飛書・Telegram・Discord・Slack・メールへ自動推送する。
- Web/デスクトップ工作台で手動分析・回測・持倉管理が可能。無料データソースは上流制限の影響を受けるため、長期利用にはトークン型データソースの設定が推奨される。

---

### 5. [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts)

> A collection of projects designed to help developers quickly get started with building deployable applications using the Claude API

- Language: Python
- Stars: 20,982
- Forks: 3,497
- Stars in 1週間: 1,794
- Category: APIクイックスタート集
- Keywords: `Claude API` `クイックスタート` `Computer Use` `Managed Agents` `ブラウザ自動化` `Python`
- Summary source: README

#### README要約

- Claude APIを使ったデプロイ可能なアプリケーション構築を素早く始めるためのプロジェクト集です。
- カスタマーサポート、金融データ分析、Computer Use、ブラウザ自動化、自律コーディング、Managed Agents連携など多数の実践的クイックスタートを収録しています。
- Claude APIでアプリを構築したい開発者が、各プロジェクトを基盤としてカスタマイズしながら学ぶ用途に適しています。
- 利用にはClaude APIキーが必要で、リポジトリをクローン後、各クイックスタートのREADMEに従い依存関係をインストールしてAPIキーを環境変数に設定します。

---

### 6. [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)

> Configure and automate Home Assistant with Claude, ChatGPT, and other AI assistants.

- Language: Python
- Stars: 7,832
- Forks: 476
- Stars in 1週間: 2,348
- Category: MCPサーバー
- Keywords: `Home Assistant` `MCP` `AIアシスタント` `Claude` `ChatGPT` `ホームオートメーション`
- Summary source: README

#### README要約

- ClaudeやChatGPTなどのAIアシスタントからHome Assistantを設定・自動化するためのMCPサーバー。
- HACSやMarketplaceからインストールするインテグレーションとしてin-processで動作し、アドオン、Docker、PyPI/uvxなど複数の導入方法を提供する。
- Home AssistantユーザーがAIクライアントに接続URLを貼るだけで、自然言語によるホームオートメーション管理を行える。
- Home Assistant 2026.8.0以降が必要で、管理者アクセストークンの設定が求められる。stdioトランスポートには既知の接続問題があるためHTTPモードが推奨される。

---

### 7. [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)

> Auto Ontology is a Python framework for building semantic, graph-based reasoning layers over data. It enables deterministic query generation, better context retrieval, and more explainable AI for LLM and agent workflows.

- Language: Python
- Stars: 12,846
- Forks: 1,077
- Stars in 1週間: 3,178
- Category: AI/データ基盤フレームワーク
- Keywords: `オントロジー` `NL-to-SQL` `セマンティックレイヤー` `LLMエージェント` `ナレッジグラフ` `NVIDIA NIM`
- Summary source: README

#### README要約

- NVIDIA Auto Ontologyは、エンタープライズメタデータからセマンティックなオントロジー層を構築し、AIエージェントに信頼できるコンテキストを提供するPythonフレームワークです。
- 自然言語クエリのSQL変換、セマンティックカタログ、認証・RBAC、Web UI、MCP/CLI/API経由でのコンテキスト公開などの機能を備えています。
- LLMやエージェントワークフローで正確なデータ分析や説明可能なAIを実現したい開発者・データエンジニアを対象としています。
- Docker ComposeまたはHelmでデプロイ可能で、NVIDIA NIMエンドポイントとAPIキーが必要です。Apache License 2.0で提供されます。

---

### 8. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)

> 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.

- Language: Python
- Stars: 143,587
- Forks: 23,005
- Stars in 1週間: 3,061
- Category: AI動画生成ツール
- Keywords: `AI` `ショート動画` `自動生成` `Python` `Whisper` `ffmpeg`
- Summary source: README

#### README要約

- テーマやキーワードを入力するだけで、AIが自動で高画質なショート動画を生成するツールです。
- 動画スクリプトの自動生成、素材のマッチング、字幕生成、BGMの追加、動画合成までを一貫して行います。
- WebUIとAPIの両方を提供しており、コンテンツクリエイターや開発者が効率的に動画制作を行えます。
- Python製で、ffmpegやWhisperモデル（字幕生成用）などの依存関係の設定が必要です。

---

### 9. [soxoj/maigret](https://github.com/soxoj/maigret)

> 🕵️‍♂️ Collect a dossier on a person by username from 6K websites

- Language: Python
- Stars: 40,683
- Forks: 3,286
- Stars in 1週間: 900
- Category: OSINT調査ツール
- Keywords: `OSINT` `ユーザー名検索` `アカウント調査` `Python` `再帰検索` `レポート生成`
- Summary source: README

#### README要約

- ユーザー名だけから約5,900サイトのアカウントを調査し、人物のドシエを収集するPython製OSINTツール。
- プロフィールページやサイトAPIから情報を抽出し、発見したユーザー名で再帰検索、タグ絞り込み、Tor/I2P対応、HTML/PDFレポートやWeb UI、AI分析モードを備える。
- OSINT調査やソーシャルメディア分析を行うユーザー向けで、Pythonライブラリとして組み込み利用も可能。
- pipやDocker、Windows実行ファイルなどで導入でき、教育・合法目的のみの利用が免責条件とされている。

---

### 10. [bradautomates/claude-video](https://github.com/bradautomates/claude-video)

> Give Claude the ability to watch any video. /watch downloads, extracts frames, transcribes, hands it all to Claude.

- Language: Python
- Stars: 20,824
- Forks: 2,212
- Stars in 1週間: 689
- Category: AIエージェント拡張ツール
- Keywords: `動画解析` `Claude Code` `フレーム抽出` `文字起こし` `タイムスタンプ` `AIエージェント`
- Summary source: README

#### README要約

- URLまたはローカル動画ファイルをタイムスタンプ付きフレームとトランスクリプトに変換し、AIエージェントに動画の視覚的証拠を提供するツール。
- Claude Code、Codex、その他のAgent Skillsホストにインストール可能で、ネイティブ字幕を優先的に使用し、オプションでローカルWhisperXやGroq/OpenAIによる文字起こしもサポートする。
- Claude Desktop、VS Code、ターミナルなど様々な環境でAIエージェントを使用する開発者やユーザーが、動画内容の分析や要約を行う際に利用する。
- Python 3.10以上、FFmpeg/ffprobe、最新のyt-dlpが必要で、YouTube動画にはJavaScriptランタイムも必要。Claude ChatやCoworkでは動作しない。

---

### 11. [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills)

> Claude Code skills for equity investors and traders — market analysis, technical charting, economic calendars, screeners, and trading strategy development.

- Language: Python
- Stars: 4,815
- Forks: 993
- Stars in 1週間: 878
- Category: トレーディングワークフローツールキット
- Keywords: `Claude Skills` `トレーディング` `リスク管理` `スイングトレード` `ワークフロー` `個人投資家`
- Summary source: README

#### README要約

- 時間の限られた個人投資家向けの、Claude Skillsベースのトレーディングワークフローツールキット。
- 市場レビュー、リスク管理、トレード計画、ジャーナリング、継続的改善を構造化するスキル群とワークフローマニフェストを提供する。
- 長期投資・ETF・配当株を中核とし、規律あるスイングトレードを衛星戦略とする投資家が対象。
- APIキー不要のスターターパスもあるが、一部スキルはFMP・FINVIZ Elite・AlpacaのAPIキーが必要。MITライセンスで、金融助言ではない。

---

### 12. [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)

> Open-source registry and CLI for Claude Code components: agents, commands, skills, hooks, MCPs, settings and mods

- Language: Python
- Stars: 33,636
- Forks: 3,969
- Stars in 1週間: 401
- Category: 開発者ツール
- Keywords: `Claude Code` `CLI` `コンポーネントカタログ` `スキル` `MCP` `npx`
- Summary source: README

#### README要約

- Claude Code用のコンポーネントを1コマンドでインストールできるオープンカタログとCLIツール。
- スキル、サブエージェント、スラッシュコマンド、フック、MCPサーバー、設定、modなど1,980以上のコンポーネントをaitmpl.comで検索・プレビュー・組み合わせてインストール可能。
- Claude Codeの設定を拡張したい開発者向けで、CLIが各ファイルを適切な場所に書き込み、既存設定を上書きせずマージする。
- npxでグローバルインストール不要で実行でき、--yesで確認プロンプトをスキップ可能。modはClaude Code 2.1.287以降、プラグインは2.1.288以降が必要。

---

### 13. [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent)

> 🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.

- Language: Python
- Stars: 16,182
- Forks: 2,203
- Stars in 1週間: 770
- Category: AIコードレビューツール
- Keywords: `AIコードレビュー` `オープンソース` `GitHub連携` `自動化` `PR-Agent` `LLM`
- Summary source: README

#### README要約

- PR-Agentは、AIを活用したオープンソースのコードレビューエージェントで、Qodoからコミュニティに移管されたプロジェクトです。
- GitHub、GitLab、Bitbucket、Azure DevOpsなどのプラットフォームと連携し、/review、/describe、/improveなどのコマンドで自動レビューやPR説明を生成します。
- 実際の開発チームを対象とし、単一のLLM呼び出しで高速かつ低コストに動作し、あらゆるサイズのPRを処理できます。
- GitHub Action、CLI、Dockerなどで導入可能で、OpenAI APIキーなどの設定が必要です。自己ホスト型のためデータプライバシーはユーザーとAIプロバイダー間で管理されます。

---

### 14. [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)

> A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices.

- Language: Python
- Stars: 5,843
- Forks: 900
- Stars in 1週間: 342
- Category: セキュリティAIスキル
- Keywords: `Claude Code` `バグバウンティ` `レッドチーム` `ペネトレーションテスト` `脆弱性診断` `OSINT`
- Summary source: README

#### README要約

- Claude Code用のバグハンティング・外部レッドチーム向けスキルバンドルで、83スキル・15スラッシュコマンド・681の公開レポートパターンを収録。
- トピックに応じてスキルが自動読み込みされ、偵察・脆弱性クラス別検出・エンタープライズ攻撃チェーン・トリアージ/レポート作成までを4層で支援する。
- バグバウンティハンターや外部ペンテスト/レッドチーム担当者が対象で、Webアプリ・API・クラウド・M365/Okta/vCenter/VPN等の外部攻撃面をカバーする。
- プラグインまたはクローン+インストールスクリプトで導入可能。内部AD攻撃・C2・ポストエクスプロイト・回避技術は意図的に対象外で、許可されたテスト用途に限定される。

---

### 15. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)

> Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.

- Language: Python
- Stars: 26,058
- Forks: 2,314
- Stars in 1週間: 1,248
- Category: セキュリティスキャナー
- Keywords: `AIエージェント` `脆弱性検出` `静的解析` `プロンプトインジェクション` `セキュリティリスク` `MCP`
- Summary source: README

#### README要約

- AIエージェントスキル（Claude Code、Codex CLI、Gemini CLIなど）をインストール前にスキャンし、脆弱性や悪意のあるパターン、セキュリティリスクを検出するセキュリティスキャナー。
- 71種類の脆弱性パターンを17カテゴリで検出し、静的解析とオプションのLLM意味解析の2段階で分析。プロンプトインジェクション、データ流出、権限昇格、サプライチェーンリスクなどをカバー。
- Gitリポジトリ、URL、zipファイル、ディレクトリ、単一ファイルなど複数形式の入力に対応し、ターミナル、JSON、Markdown、SARIF形式でレポート出力。0-100のリスクスコアと重要度ラベルで評価。
- Pythonパッケージとしてuvまたはpipでインストール、またはDockerで実行可能。静的解析のみで動的実行は行わず、非英語コンテンツや画像ベースの攻撃、暗号化コードは検出できない制限あり。

---

### 16. [jamiepine/voicebox](https://github.com/jamiepine/voicebox)

> The open-source AI voice studio. Clone, dictate, create.

- Language: Python
- Stars: 60,646
- Forks: 7,625
- Stars in 1週間: 757
- Category: AI音声合成・音声認識ツール
- Keywords: `音声クローン` `TTS` `音声入力` `ローカル実行` `MCP` `オープンソース`
- Summary source: README

#### README要約

- ローカル環境で動作するオープンソースのAI音声スタジオで、音声のクローン、生成、音声入力を一つのアプリで行える。
- 8種類のTTSエンジンで23言語の音声生成が可能で、数秒の音声からのゼロショットクローンや50種類以上のプリセット音声に対応する。
- グローバルホットキーによる任意のアプリへの音声入力や、MCP対応AIエージェントへの音声出力を求める開発者やクリエイター向け。
- macOSとWindowsはバイナリ配布、Linuxはソースからビルドが必要で、MITライセンスのもとTauriとPythonで構築されている。

---

### 17. [NVIDIA/skills](https://github.com/NVIDIA/skills)

> Agent Skills for NVIDIA products — install into Claude Code, Codex, and other coding agents to run Physical AI, robotics, simulation, CUDA, and RAG workflows end to end.

- Language: Python
- Stars: 3,990
- Forks: 525
- Stars in 1週間: 98
- Category: AIエージェント拡張
- Keywords: `Agent Skills` `NVIDIA` `Claude Code` `CUDA` `ロボティクス` `RAG`
- Summary source: README

#### README要約

- NVIDIA公式のAgent Skillsカタログで、Claude CodeやCodexなどのコーディングエージェントにNVIDIA製品の最適な使い方を教える指示セットを提供する。
- Physical AI、ロボティクス、シミュレーション、CUDA-X、RAGなどのワークフローをカバーし、skills CLI経由でインストールして利用する。
- NVIDIA製品をAIエージェントから活用したい開発者や研究者向けで、BioNeMo、CUDA-Q、cuOptなど製品別のスキルが揃う。
- skills CLI v1.5.16以降が必要で、スキルは署名・評価データ付きで検証され、日次で自動同期される。

---
