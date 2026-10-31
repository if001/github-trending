+++
title = 'GitHub Trending 1週間レポート (All) - 2026/10/31'
date = 2026-10-31T00:22:42.640Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月31日 0:22:42
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 13
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> コーディングエージェント向けの「スキル／ハーネス」系ツールがトレンドを席巻し、AI生成物の品質管理と専門ワークフロー化が進んでいる

- 一覧の大半がClaude CodeやCodex、Cursorなどのコーディングエージェントを拡張するスキル・プラグイン・ハーネスであり、エージェント活用の周辺ツールが注目を集めている
- セキュリティ監査、SEO、デザイン品質など、特定領域の専門知識をエージェントに付与する垂直特化型スキルが複数ランクインしている
- cloudflare/security-audit-skillが12,838スター、pbakaus/impeccableが11,323スターと、1万スター超えが2件あり、品質検証系ツールへの関心の高さがうかがえる
- Anthropic公式のanthropics/skillsとanthropics/knowledge-work-pluginsが揃ってランクインしており、スキルエコシステムの公式整備とコミュニティの盛り上がりが並行している
- AI生成物の粗悪さ（AIスロップ）を検出・修正するツールが複数登場しており、生成量の増加に伴う品質管理需要が顕在化している

### 主なテーマ

- **エージェントスキル・ハーネス基盤**: コーディングエージェントの動作を拡張・制御する基盤ツールが多数ランクイン。obra/superpowersはTDDやサブエージェント駆動の開発方法論を提供し、affaan-m/ECCは71の専門エージェントと314のスキルを備え、ruvnet/rufloはスワーム協調やメモリ機能を提供する。pingdotgg/t3codeはモバイルやデスクトップから複数エージェントを一元操作するコントロールサーフェスで、エージェント運用の基盤整備が進んでいる。（`obra/superpowers`、`affaan-m/ECC`、`ruvnet/ruflo`、`pingdotgg/t3code`）
- **AI生成物の品質・デザイン検証**: AIが生成したUIやコードの品質を担保するツールが複数登場。pbakaus/impeccableは62の決定論的ルールでAIスロップを出荷前に検出し、Leonxlnx/taste-skillは実ブラウザチェックと自己修正でデザインの感性を付与する。jakubkrehel/skillsはタイポグラフィやアクセシビリティなど14種のレビュースキルを提供し、multica-ai/andrej-karpathy-skillsはKarpathyの観察に基づくCLAUDE.mdでコーディングの落とし穴を防ぐ。（`pbakaus/impeccable`、`Leonxlnx/taste-skill`、`jakubkrehel/skills`、`multica-ai/andrej-karpathy-skills`）
- **専門領域特化型スキル**: セキュリティやSEOといった専門領域の知識をエージェントに付与する垂直特化型ツールが高いスターを獲得。cloudflare/security-audit-skillは6フェーズの多段階監査と敵対的検証で機械可読な発見事項を生成し12,838スター、AgriciDaniel/claude-seoは26のサブスキルと19のサブエージェントで技術SEOからGEO/AEOまで網羅し4,478スターを集めている。（`cloudflare/security-audit-skill`、`AgriciDaniel/claude-seo`）
- **公式スキルエコシステムの整備**: Anthropic公式のリポジトリが2件ランクインし、スキル仕様の標準化と配布基盤の整備が進んでいる。anthropics/skillsはSKILL.md形式のスキル作成パターンと実例を提供し、anthropics/knowledge-work-pluginsは営業・法務・財務など11種類の職種別プラグインをマークダウンとJSONのみで構成し、ナレッジワークへの適用を広げている。（`anthropics/skills`、`anthropics/knowledge-work-plugins`）
- **マルチエージェントによる専門シミュレーション**: TauricResearch/TradingAgentsは、ファンダメンタルズ・センチメント・ニュース・テクニカルの各アナリストが並列分析し、強気・弱気リサーチャーの討論を経て取引判断を下す、実際のトレーディング企業の組織構造を模倣したフレームワークで5,490スターを獲得。コーディング以外の領域でもマルチエージェントの役割分担パターンが注目されている。（`TauricResearch/TradingAgents`）

### 補足的な観察

- 言語分布はPythonが4件、JavaScriptが3件、TypeScriptが2件、Rust・Shell・Markdownが各1件、言語不明が1件で、スキル定義がマークダウンベースのため実装言語は多様に分散している
- スター数上位2件（cloudflare/security-audit-skillの12,838、pbakaus/impeccableの11,323）はいずれもAI生成物の検証・品質担保に関するツールで、生成そのものより品質管理への関心が強い傾向が読み取れる
- Claude Codeへの言及が一覧の大半のリポジトリに見られ、スキルエコシステムの中心プラットフォームとしての位置づけが際立っている
- multica-ai/andrej-karpathy-skillsのように単一のCLAUDE.mdファイルのみで4,178スターを集める事例があり、軽量な設定ファイル形式のスキルでも大きな注目を得られることが示されている

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 4 |
| JavaScript | 3 |
| TypeScript | 2 |
| Markdown | 1 |
| Rust | 1 |
| Shell | 1 |
| 不明 | 1 |

## Repository一覧

### 1. [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)

> A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings

- Language: JavaScript
- Stars: 54,119
- Forks: 3,496
- Stars in 1週間: 12,838
- Category: セキュリティ監査スキル
- Keywords: `セキュリティ監査` `コーディングエージェント` `脆弱性検出` `多段階検証` `機械可読レポート` `Cloudflare`
- Summary source: README

#### README要約

- コーディングエージェントをセキュリティ監査人に変えるスキルで、多段階の監査プロセスを通じて機械可読な検証済みの発見事項を生成します。
- 偵察、カバレッジ主導のハンティング、候補検証、構造化出力、独立記録検証、ターゲット中立レポートの6フェーズで構成され、発見者と検証者を分離する敵対的検証を採用しています。
- コードベースのセキュリティ監査や脆弱性発見を行いたい開発者やセキュリティ研究者向けで、繰り返し実行によりカバレッジが向上する設計です。
- Skills CLIでインストール可能で、ツール使用と並列サブエージェントをサポートするコーディングエージェント、Node.js、および外部ネットワークを無効化するOS強制サンドボックスが必要です。

---

### 2. [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)

> Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.

- Language: Python
- Stars: 24,511
- Forks: 3,260
- Stars in 1週間: 4,478
- Category: SEO自動化ツール
- Keywords: `Claude Code` `SEO監査` `AI検索最適化` `E-E-A-T` `スキーマ` `並列エージェント`
- Summary source: README

#### README要約

- Claude Code向けの無料オープンソースSEOプラグインで、サイトを10〜15分で包括的に監査し優先度付きの改善計画を提示する。
- 26のサブスキルと19の専門エージェントが並列動作し、技術SEO、E-E-A-T、スキーマ、AI検索(GEO)、ローカル・EC SEOなどをカバーする。
- SEO代理店、社内SEOチーム、フリーランスコンサルタント向けで、監査・コンテンツ・スキーマ・被リンクなど30のコマンドを提供する。
- MITライセンスでローカル実行のためデータは手元に残る。/seo setupでPythonランタイムとChromiumを構築し、拡張機能で外部データ連携も可能。

---

### 3. [pbakaus/impeccable](https://github.com/pbakaus/impeccable)

> The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships.

- Language: Rust
- Stars: 97,042
- Forks: 5,714
- Stars in 1週間: 11,323
- Category: デザインツール
- Keywords: `デザイン語彙` `AIスロップ検出` `コーディングエージェント` `UIレビュー` `デザインフック` `Rust`
- Summary source: README

#### README要約

- コーディングエージェント向けのデザイン語彙ツールで、AI生成UIのありがちな「スロップ」を出荷前に検出・改善する。
- bolderやpolishなど24のコマンドでデザインを指示し、critiqueとauditでレビュー、62の決定論的ルールでLLM不要の検出を行う。
- Claude Code、Cursor、Codex CLIなど多数のコーディングツール利用者が対象で、既存UIの反復改善に強い。
- npx impeccable installで導入し、/impeccable initで初期化。ライブモードはローカルのみで使用し、本番CSPを弱めないこと。

---

### 4. [obra/superpowers](https://github.com/obra/superpowers)

> An agentic skills framework & software development methodology that works.

- Language: Shell
- Stars: 309,419
- Forks: 27,524
- Stars in 1週間: 5,474
- Category: AI開発ツール
- Keywords: `コーディングエージェント` `開発方法論` `TDD` `サブエージェント` `プラグイン` `スキル`
- Summary source: README

#### README要約

- コーディングエージェント向けのソフトウェア開発方法論で、組み合わせ可能なスキル群と初期指示の上に構築されている。
- 仕様の引き出し、設計承認、実装計画の作成、サブエージェント駆動開発、TDDなどのワークフローを自動的にトリガーする。
- Claude Code、Cursor、Gemini CLI、GitHub Copilot CLIなど多数のコーディングエージェント環境に対応している。
- 各環境ごとにプラグインとして個別にインストールする必要があり、ライセンスはMIT Licenseである。

---

### 5. [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)

> TradingAgents: Multi-Agents LLM Financial Trading Framework

- Language: Python
- Stars: 118,704
- Forks: 22,696
- Stars in 1週間: 5,490
- Category: 金融取引AIフレームワーク
- Keywords: `マルチエージェント` `LLM` `金融取引` `アルゴリズム取引` `Python` `リスク管理`
- Summary source: README

#### README要約

- TradingAgentsは、実際のトレーディング企業の組織構造を模倣したマルチエージェントLLM金融取引フレームワークです。
- ファンダメンタルズ、センチメント、ニュース、テクニカルの各アナリストが並列で分析し、強気・弱気リサーチャーの討論を経てトレーダーとリスク管理チームが最終的な取引判断を下します。
- 金融取引戦略の研究開発者や、LLMを活用したマルチエージェントシステムの挙動を検証したい研究者を対象としています。
- Python 3.11以上が必要で、pipまたはDockerで導入可能です。研究目的のフレームワークであり、投資助言を意図したものではありません。

---

### 6. [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)

> A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls.

- Language: 不明
- Stars: 226,856
- Forks: 22,650
- Stars in 1週間: 4,178
- Category: AIコーディング支援
- Keywords: `Claude Code` `CLAUDE.md` `Andrej Karpathy` `LLM` `コーディングガイドライン` `Cursor`
- Summary source: README

#### README要約

- Andrej KarpathyのLLMコーディングの落とし穴に関する観察に基づき、Claude Codeの動作を改善する単一のCLAUDE.mdファイルを提供するプロジェクト。
- 「コーディング前に考える」「シンプルさ優先」「外科的変更」「目標駆動実行」の4原則で、誤った仮定・過剰な複雑化・無関係な編集を防ぐ。
- Claude CodeやCursorを使う開発者が、AIエージェントによるコード生成の品質を向上させたい場合に利用する。
- Claude Codeプラグインとしてインストールするか、curlでCLAUDE.mdをダウンロードしてプロジェクトに追加する。軽微なタスクでは完全な厳密さは不要との注意書きあり。

---

### 7. [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

> Agent skills that give coding agents taste: art direction, reference images and a browser check instead of generic AI pages

- Language: JavaScript
- Stars: 106,335
- Forks: 7,192
- Stars in 1週間: 4,712
- Category: AIエージェントスキル
- Keywords: `Agent Skill` `デザイン` `アートディレクション` `Claude Code` `Codex` `フロントエンド`
- Summary source: README

#### README要約

- コーディングエージェントに「デザインの感性」を与えるAgent Skillで、ありきたりなランディングページではなく、アートディレクションのあるWebサイトやアプリ画面を設計させる。
- 247の厳選サイトの研究に基づく6ステップのビルドを実行し、20の方向性から3つを提示、オープンアーカイブの実写真をクレジット付きで使用し、実ブラウザで3幅チェックと最大3ラウンドの自己修正を行う。
- Claude CodeやCodexなどのコーディングエージェント利用者が対象で、ランディングページに加えv2.1以降はダッシュボードや管理画面などのアプリ画面構築にも対応する。
- npx skillsコマンドまたは各種プラグインでインストールでき、Node 22以上とChrome/Edge/Chromiumが必要。APIキー不要だが画像検索にはネットワーク接続が必要で、1ビルドに約30〜45分と数十万トークンを要する。

---

### 8. [jakubkrehel/skills](https://github.com/jakubkrehel/skills)

> A collection of agent skills that help you build great interfaces.

- Language: Markdown
- Stars: 9,370
- Forks: 357
- Stars in 1週間: 1,107
- Category: 開発者ツール
- Keywords: `UIデザイン` `アクセシビリティ` `タイポグラフィ` `カラーシステム` `Claude Code` `エージェントスキル`
- Summary source: README

#### README要約

- 優れたインターフェース構築を支援するエージェントスキルのコレクション。
- UI、タイポグラフィ、カラー、アクセシビリティ、レイアウト、ライティングなどをレビュー・改善する14種類のスキルを提供。
- デザインエンジニアやフロントエンド開発者が、UIの品質向上やデザイン実装、レビューに活用できる。
- npx skills add コマンドまたはClaude Codeプラグインとしてインストール可能。

---

### 9. [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

- Language: TypeScript
- Stars: 32,730
- Forks: 8,654
- Stars in 1週間: 2,775
- Category: AI開発ツール
- Keywords: `AIエージェント` `コントロールサーフェス` `Claude Code` `Codex` `リモート開発` `TypeScript`
- Summary source: README

#### README要約

- T3 Codeは、マシン上のAIエージェントを制御するための「エージェントハーネス・コントロールサーフェス」です。
- iOS/Androidモバイルアプリ、Webアプリ、Electronベースのデスクトップアプリから、Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravityなどのエージェントを操作できます。
- 複数のAIコーディングエージェントをリモートを含めて一元管理したい開発者を対象としています。
- 利用前に対応するCLIのインストールと認証が必要で、プロジェクトは初期段階のためバグが含まれる可能性があります。

---

### 10. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)

> Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork

- Language: Python
- Stars: 34,036
- Forks: 3,749
- Stars in 1週間: 2,083
- Category: AIプラグイン集
- Keywords: `Claude Cowork` `プラグイン` `スラッシュコマンド` `MCP` `ナレッジワーク` `カスタマイズ`
- Summary source: README

#### README要約

- Claude CoworkおよびClaude Code向けに、Claudeを職種・チーム・企業の専門家に変えるオープンソースのプラグイン集。
- 各プラグインはスキル、コネクタ、スラッシュコマンド、サブエージェントをマークダウンとJSONのみで束ね、営業・法務・財務・データなど11種類を提供する。
- ナレッジワーカーがタスク管理、営業調査、契約レビュー、SQL分析などの職務をClaudeに一貫した手順で実行させる用途を想定している。
- claude.com/pluginsまたはclaude plugin marketplace addコマンドで導入でき、.mcp.jsonやスキルファイルを編集して自社のツールや用語に合わせてカスタマイズする。

---

### 11. [affaan-m/ECC](https://github.com/affaan-m/ECC)

> The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.

- Language: JavaScript
- Stars: 293,404
- Forks: 43,419
- Stars in 1週間: 6,506
- Category: AI開発ツール
- Keywords: `AIエージェント` `Claude Code` `開発ワークフロー` `スキルシステム` `セキュリティスキャン` `オープンソース`
- Summary source: README

#### README要約

- Claude CodeなどのAIコーディングエージェントに、計画→テスト→実装→レビュー→検証→記憶→改善という一貫した開発プロセスを組み込むオープンソースのエージェントハーネス拡張システム。
- 71の専門エージェント、314のスキル、98のコマンド、フック、メモリ、継続学習、AgentShieldセキュリティスキャンを提供し、Claude Code、Codex、Cursor、OpenCodeなど複数ハーネスに対応する。
- AIエージェントを使って開発するエンジニアやチームが、プロンプトごとに開発プロセスを再構築せず、再利用可能なスキルとワークフローとして一度インストールして活用することを想定している。
- Node.js 18以上が必要で、Claude CodeプラグインにはGitとClaude Code 2.1以上が必要。公式GitHubリポジトリ、npmパッケージ、GitHub Appなどの検証済みチャネルからのみインストールすること。

---

### 12. [anthropics/skills](https://github.com/anthropics/skills)

> Public repository for Agent Skills

- Language: Python
- Stars: 185,308
- Forks: 21,898
- Stars in 1週間: 1,888
- Category: AIエージェント拡張
- Keywords: `Claude` `Agent Skills` `SKILL.md` `Anthropic` `カスタムスキル` `Claude Code`
- Summary source: README

#### README要約

- Claudeが専門タスクの性能を向上させるために動的に読み込む、指示・スクリプト・リソースをまとめたフォルダ形式の「スキル」を集めたAnthropic公式リポジトリです。
- 各スキルはSKILL.mdにYAMLフロントマター（nameとdescription）と指示文を記述するだけで作成でき、ドキュメント作成・開発・企業ワークフローなどの実例が含まれます。
- Claude Code、Claude.ai、Claude APIで利用でき、独自スキルを作りたい開発者や、実装パターンを参考にしたいユーザーを対象としています。
- Claude Codeではプラグインマーケットプレイスとして登録してインストール可能ですが、デモ・教育目的のため重要なタスクで使う前に自環境での十分なテストが必要です。

---

### 13. [ruvnet/ruflo](https://github.com/ruvnet/ruflo)

> 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated

- Language: TypeScript
- Stars: 80,299
- Forks: 9,416
- Stars in 1週間: 1,723
- Category: AIエージェント基盤
- Keywords: `エージェントハーネス` `マルチエージェント` `Claude Code` `Codex` `MCP` `スワーム`
- Summary source: README

#### README要約

- Claude CodeやCodexなどのAIコーディングツールを拡張するエージェントメタハーネスです。
- 100以上の専門エージェント、協調スワーム、自己学習メモリ、マシン間連携、セキュリティガードレールを提供します。
- 複雑なタスクをAIエージェントチームに自律的に計画・実行・改善させたい開発者やチーム向けです。
- Claude Code 2.1.287以降が必要で、プラグインとしてインストールするか、npx経由でMCPサーバーとして起動します。

---
