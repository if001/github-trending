+++
title = 'GitHub Trending 1週間レポート (python) - 2026/10/31'
date = 2026-10-31T23:59:22.170Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月31日 23:59:22
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 11
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェント向けスキル・プラグインと専門特化型AIツールがGitHub Trendingを席巻

- Claude CodeやMCPなどのAIエージェント向けスキル・プラグインが多数ランクインし、エージェントエコシステムの拡張が顕著
- SEO、金融取引、音声生成、教育など特定領域に特化したAIツールが高いスター数を獲得
- Anthropic公式のスキル・プラグインリポジトリが2件ランクインし、Claudeエコシステムの拡大が伺える
- セキュリティスキャナやナレッジグラフなど、AIエージェントの安全性と機能性を高めるツールも注目を集めている
- Pythonが全11件中10件を占め、AIツール開発の主流言語としての地位を維持

### 主なテーマ

- **AIエージェントスキル・プラグイン**: Claude CodeやMCP向けのスキル・プラグインが5件ランクイン。Anthropic公式のanthropics/skillsとanthropics/knowledge-work-plugins、AWS公式のaws/agent-toolkit-for-aws、画像生成のhiggsfield-ai/skills、SEOのAgriciDaniel/claude-seoが含まれ、AIエージェントの機能拡張が活発化している。（`anthropics/skills`、`anthropics/knowledge-work-plugins`、`aws/agent-toolkit-for-aws`、`higgsfield-ai/skills`、`AgriciDaniel/claude-seo`）
- **専門領域特化型AIツール**: 金融取引のTauricResearch/TradingAgents、音声生成のdebpalash/VoiceStudio、教育のHKUDS/DeepTutorなど、特定ドメインに特化したAIツールが高いスター数を獲得。VoiceStudioは12,910スター、DeepTutorは9,440スターと特に人気が高い。（`TauricResearch/TradingAgents`、`debpalash/VoiceStudio`、`HKUDS/DeepTutor`）
- **AIエージェントセキュリティ・解析**: NVIDIA/SkillSpectorはAIエージェントスキルの脆弱性をスキャンするセキュリティツールで2,468スター、Graphify-Labs/graphifyはコードベースをナレッジグラフ化するツールで5,823スターを獲得。AIエージェントの安全性と解析能力向上への関心が高まっている。（`NVIDIA/SkillSpector`、`Graphify-Labs/graphify`）
- **マルチプラットフォームAIチャットボット**: AstrBotDevs/AstrBotは複数のIMプラットフォームと連携するオールインワンAIチャットボットフレームワークで2,133スター。1000以上のプラグインとマルチモーダル対応により、個人から企業まで幅広い用途に対応している。（`AstrBotDevs/AstrBot`）

### 補足的な観察

- 言語分布はPythonが10件、言語不明が1件（higgsfield-ai/skills）で、Pythonが圧倒的多数を占める
- スター数のトップ3はdebpalash/VoiceStudio（12,910）、HKUDS/DeepTutor（9,440）、Graphify-Labs/graphify（5,823）で、いずれも専門特化型ツール
- Anthropic公式リポジトリが2件ランクインし、Claudeエコシステムの拡大とコミュニティの活性化が伺える
- AWSやNVIDIAなど大手テクノロジー企業もAIエージェント関連ツールを公開し、エンタープライズ領域での採用が進んでいる

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 11 |

## Repository一覧

### 1. [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)

> Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.

- Language: Python
- Stars: 25,028
- Forks: 3,313
- Stars in 1週間: 4,478
- Category: SEOツール
- Keywords: `Claude Code` `SEO監査` `GEO` `E-E-A-T` `構造化データ` `プラグイン`
- Summary source: README

#### README要約

- Claude Code向けの無料オープンソースSEOプラグインで、サイトを10〜15分で監査し優先度順の改善計画を提示する。
- 26のサブスキルと19の専門エージェントが並列で動作し、技術SEO、E-E-A-T、構造化データ、AI検索(GEO)、ローカル・EC対策などを網羅する。
- SEO代理店、社内SEOチーム、フリーランスコンサルタントを対象とし、/seoコマンドで監査・計画・スキーマ生成・バックリンク分析など30のコマンドを提供する。
- MITライセンスで無料、Claude Codeプランで利用可能。/seo setupでPythonランタイムとChromiumを構築し、ライブデータ用の拡張機能は別途セットアップが必要。

---

### 2. [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)

> TradingAgents: Multi-Agents LLM Financial Trading Framework

- Language: Python
- Stars: 119,047
- Forks: 22,765
- Stars in 1週間: 5,490
- Category: 金融取引AIフレームワーク
- Keywords: `マルチエージェント` `LLM` `金融取引` `バックテスト` `Python` `オープンソース`
- Summary source: README

#### README要約

- TradingAgentsは、実際のトレーディング企業のダイナミクスを模倣したマルチエージェントLLM金融取引フレームワークです。
- ファンダメンタルズ、センチメント、ニュース、テクニカルの各アナリスト、強気・弱気リサーチャー、トレーダー、リスク管理チーム、ポートフォリオマネージャーが協調して市場を評価し、動的な議論を通じて最適な戦略を特定します。
- 複数のLLMプロバイダー（OpenAI、Gemini、Claude、Grokなど）に対応し、バックテスト、ポートフォリオ認識実行、SEC EDGARファンダメンタルズ、FREDマクロデータなどをサポートする研究用途のフレームワークです。
- Python 3.11以降が必要で、pipまたはDockerでインストール可能です。研究目的のため設計されており、金融・投資・取引アドバイスを意図したものではありません。

---

### 3. [anthropics/skills](https://github.com/anthropics/skills)

> Public repository for Agent Skills

- Language: Python
- Stars: 185,873
- Forks: 21,942
- Stars in 1週間: 1,888
- Category: AIエージェント拡張
- Keywords: `Claude` `Agent Skills` `SKILL.md` `Anthropic` `プラグイン` `ドキュメント生成`
- Summary source: README

#### README要約

- Anthropicが公開するClaude向けAgent Skillsの公式リポジトリで、指示・スクリプト・リソースをまとめたスキルをClaudeが動的に読み込み、専門タスクの実行を改善する。
- 各スキルはSKILL.md（YAML frontmatterと指示文）を含む自己完結型フォルダで構成され、クリエイティブ、開発、エンタープライズ、ドキュメント作成などの例を収録する。
- Claude Code、Claude.ai、Claude APIのユーザーが対象で、スキルの利用・自作の参考や、docx/pdf/pptx/xlsxのドキュメントスキルの実装参照に使える。
- Claude Codeではプラグインマーケットプレイス経由でインストール可能。多くはApache 2.0だがドキュメントスキルはソース公開のみで、デモ・教育目的のため本番利用前に十分なテストが必要。

---

### 4. [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot)

> AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨

- Language: Python
- Stars: 45,326
- Forks: 3,322
- Stars in 1週間: 2,133
- Category: AIチャットボットフレームワーク
- Keywords: `AIエージェント` `チャットボット` `LLM` `IM連携` `プラグイン` `Python`
- Summary source: README

#### README要約

- AstrBotは、主要なインスタントメッセージングアプリと連携するオープンソースのオールインワンAIエージェントチャットボットプラットフォームです。
- LLM会話、マルチモーダル、MCP、ナレッジベース、ペルソナ設定、1000以上のプラグイン、安全なコード実行のためのAgent Sandboxなどを備えています。
- 個人のAIコンパニオン、カスタマーサービス、自動化アシスタント、社内ナレッジベースなどを構築したい個人、開発者、チームを対象としています。
- Python 3.12以上が必要で、uv、Docker、デスクトップアプリなど複数の方法でデプロイできます。

---

### 5. [higgsfield-ai/skills](https://github.com/higgsfield-ai/skills)

- Language: Python
- Stars: 1,832
- Forks: 335
- Stars in 1週間: 462
- Category: AIエージェントスキル
- Keywords: `Higgsfield AI` `画像生成` `動画生成` `Claude Code` `ブランドシステム` `Marketing Studio`
- Summary source: README

#### README要約

- Higgsfield AIの画像・動画生成およびブランドシステム構築のためのAIエージェントスキル集。
- Claude CodeやCursorなどのコーディングエージェント向けに、30以上のモデルによる画像・動画・音声生成、Marketing Studio、Virality Predictorなどの機能を提供する。
- ブランド広告、プロダクト撮影、ウェブサイト構築、YouTubeサムネイル作成などを行いたい開発者やクリエイター向け。
- npx、GitHub CLI、Claude Codeマーケットプレイス、またはセットアップスクリプトで導入でき、Higgsfield CLIのインストールと認証が必要。

---

### 6. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)

> Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.

- Language: Python
- Stars: 23,698
- Forks: 2,048
- Stars in 1週間: 2,468
- Category: セキュリティスキャナ
- Keywords: `AIエージェントスキル` `静的解析` `プロンプトインジェクション` `サプライチェーンリスク` `SARIF` `LLM解析`
- Summary source: README

#### README要約

- AIエージェントスキル（Claude Code、Codex CLI、Gemini CLI等）をインストール前にスキャンし、脆弱性や悪意のあるパターン、セキュリティリスクを検出するPython製セキュリティスキャナ。
- 17カテゴリ71種の脆弱性パターンを高速な静的解析とオプションのLLM意味評価の2段階で解析し、OSV.devへのライブCVE照会や0〜100のリスクスコアリング、SARIF/JSON等のレポート出力を備える。
- エージェントスキルを安全に導入したい開発者やCI/CDパイプライン向けで、Gitリポジトリ、URL、zip、ディレクトリなど多様な入力形式や再帰・バッチスキャンに対応する。
- uvやpip、Dockerで導入可能。LLM解析にはAPIキーが必要で、--no-llmでローカル静的解析のみに限定できるが、サプライチェーンチェックは依存関係情報をOSV.devへ送信する点に注意。

---

### 7. [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws)

> Official, AWS-supported MCP servers, skills, and plugins to help AI agents build on AWS

- Language: Python
- Stars: 3,361
- Forks: 423
- Stars in 1週間: 412
- Category: AIエージェント開発ツール
- Keywords: `AWS` `MCP` `AIエージェント` `Claude Code` `プラグイン` `スキル`
- Summary source: README

#### README要約

- AIコーディングエージェントがAWS上でアプリケーションを構築・デプロイ・管理するのを支援するAWS公式ツールキット。
- AWS MCPサーバーによる300以上のAWSサービスへのアクセス、サンドボックス化されたスクリプト実行、リアルタイムドキュメント検索、エージェントスキルとプラグインを提供する。
- Claude Code、Codex、Cursor、Devin、Kiro、fxなどのコーディングエージェントを使う開発者が対象で、aws-core、aws-agents、aws-data-analyticsなど用途別プラグインを選択できる。
- AWS CLIのaws configure agent-toolkitコマンドや各エージェントのプラグイン機構で導入でき、uvのインストールとAWS認証情報の設定が必要（ドキュメント検索は認証不要）。

---

### 8. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)

> Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork

- Language: Python
- Stars: 34,193
- Forks: 3,768
- Stars in 1週間: 2,083
- Category: AIプラグイン集
- Keywords: `Claude Cowork` `プラグイン` `ナレッジワーク` `MCP` `スラッシュコマンド` `職種別ワークフロー`
- Summary source: README

#### README要約

- Claudeを特定の職種・チーム・企業の専門家に変えるプラグイン集で、Claude Cowork向けに構築されClaude Codeとも互換性がある。
- 各プラグインはスキル、コネクタ、スラッシュコマンド、サブエージェントをバンドルし、マークダウンとJSONのみのファイルベース構成でコードやビルド不要。
- 営業、カスタマーサポート、プロダクト管理、マーケティング、法務、財務、データ分析など11種類の職種別プラグインをナレッジワーカー向けに提供する。
- claude.com/pluginsまたはclaude plugin marketplace addコマンドで導入でき、.mcp.jsonやスキルファイルを編集して自社のツールやワークフローに合わせてカスタマイズ可能。

---

### 9. [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

> VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.

- Language: Python
- Stars: 96,832
- Forks: 10,737
- Stars in 1週間: 12,910
- Category: ローカルAI音声生成・編集ツール
- Keywords: `音声クローニング` `ローカルAI` `TTS` `動画ダビング` `文字起こし` `オープンソース`
- Summary source: README

#### README要約

- VoiceStudioは、デバイス上で完全ローカルに動作するオープンソースのAI音声スタジオです。
- 音声クローニング、音声デザイン、動画ダビング、ディクテーション、文字起こし、オーディオブック作成などを646言語で行えます。
- ローカルAPIやMCPによる自動化、バッチ処理にも対応し、プライバシーを重視するクリエイターや開発者に適しています。
- macOS、Windows、Linux、Docker、Android、iOS向けに提供され、GPUがなくてもCPUで動作しますが、ライセンスはAGPL-3.0です。

---

### 10. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

> Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.

- Language: Python
- Stars: 140,025
- Forks: 13,354
- Stars in 1週間: 5,823
- Category: ナレッジグラフ
- Keywords: `ナレッジグラフ` `AST解析` `tree-sitter` `AIコーディングアシスタント` `ローカルファースト` `コード解析`
- Summary source: README

#### README要約

- コードベースやドキュメント、SQLスキーマ、設定ファイル、PDFなどをクエリ可能なナレッジグラフに変換するツール。
- tree-sitterによるローカルAST解析で決定的にグラフを構築し、全エッジにEXTRACTED/INFERREDの根拠タグを付与、ベクトルストア不使用。
- Claude Code、Cursor、Codex、Gemini CLIなど20以上のAIコーディングアシスタント向けの/graphifyスキルとして提供。
- Python 3.10+とuv（またはpipx）が必要で、uv tool install graphifyyとgraphify installで導入後、/graphify .で実行。

---

### 11. [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)

> DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.

- Language: Python
- Stars: 52,781
- Forks: 6,461
- Stars in 1週間: 9,440
- Category: AI学習支援システム
- Keywords: `AIチューター` `個別最適化学習` `RAG` `Python` `オープンソース` `教育`
- Summary source: README

#### README要約

- DeepTutorは、生涯にわたる個別最適化学習を支援するAIチューターシステムです。
- RAGパイプラインやドキュメント索引機能を基盤とし、ナレーション付き動画レッスン、Ankiやカレンダーへのエクスポート、ブロックノートなど多様な学習支援機能を提供します。
- 個人の学習者から教育関係者まで幅広く利用でき、自分のペースで継続的に学習を進めたいユーザーに適しています。
- Python製でApache License 2.0の下で公開されており、公式サイトやGitHubリポジトリから導入方法や貢献ガイドを確認できます。

---
