+++
title = 'GitHub Trending 1週間レポート (python) - 2026/11/08'
date = 2026-11-08T00:15:19.112Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月8日 0:15:19
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェント向けスキル・ツール群が席巻し、Claude Code等のコーディングアシスタントを中心としたエコシステム拡張が顕著なPython一色のランキング

- 全18リポジトリがPythonで構成され、言語分布が完全にPythonに集中している
- Claude Code、Cursor、Codex、Gemini CLIなどのAIコーディングアシスタント向け「Agent Skills」関連が8件以上を占め、エージェント機能拡張が最大のトレンドとなっている
- AnthropicとGoogleが公式スキルリポジトリを公開し、プラットフォーム提供者自身がエージェント拡張エコシステムを主導している
- 動画生成・SEO・営業自動化・コードレビューなど、特定業務ドメインに特化した実用的なAIツールが多数ランクインしている
- NVIDIA/auto-ontologyが9044スターでトップ、D4Vinci/Scraplingが8712スターで続き、基盤技術と実用ツールの両方が高い関心を集めている

### 主なテーマ

- **AIエージェントスキル・プラグイン**: Claude CodeやCursor等のAIコーディングアシスタントに機能を追加する「Agent Skills」形式のリポジトリが急増。Anthropic公式のanthropics/skills（2796スター）とGoogle公式のgoogle/skills（1477スター）に加え、blader/humanizer（3067スター）、guillaumemeyer/watermarks-remover（877スター）、AgriciDaniel/claude-seo（2375スター）、scenario-labs/skills（2151スター）など、文章校正・透かし除去・SEO・コンテンツ生成など多様な用途のスキルが登場。SKILL.mdベースの自己完結型フォルダ構成が標準化されつつある。（`anthropics/skills`、`google/skills`、`blader/humanizer`、`guillaumemeyer/watermarks-remover`、`AgriciDaniel/claude-seo`、`scenario-labs/skills`）
- **AI動画・コンテンツ生成**: 動画制作を自動化・支援するツールが複数ランクイン。calesthio/OpenMontage（4369スター）は12の制作パイプラインと100以上のツールでAIアシスタントを動画制作スタジオ化し、harry0703/MoneyPrinterTurbo（3987スター）はテーマ入力だけでショート動画を自動生成。scenario-labs/skillsも画像・動画・3Dアセット生成を扱い、クリエイティブ制作のAI化が進んでいる。（`calesthio/OpenMontage`、`harry0703/MoneyPrinterTurbo`、`scenario-labs/skills`）
- **開発プロセス・コード品質支援**: AIを活用した開発ワークフロー改善ツールが台頭。github/spec-kit（4280スター）は仕様駆動開発（SDD）をAIエージェントに提供し、The-PR-Agent/pr-agent（1576スター）はPRレビューを自動化。Graphify-Labs/graphify（4147スター）はコードベースをナレッジグラフ化してAIアシスタントのコンテキスト理解を向上させる。（`github/spec-kit`、`The-PR-Agent/pr-agent`、`Graphify-Labs/graphify`）
- **ドメイン特化型AI基盤・フレームワーク**: 特定領域に特化した基盤技術が高い注目を集める。NVIDIA/auto-ontology（9044スター、期間内トップ）はエンタープライズメタデータからセマンティック推論レイヤーを構築し、shiyu-coder/Kronos（2937スター）は金融市場のK線データに特化した基盤モデル。D4Vinci/Scrapling（8712スター）はWebスクレイピングを包括的にカバーするフレームワークとして支持されている。（`NVIDIA/auto-ontology`、`shiyu-coder/Kronos`、`D4Vinci/Scrapling`）
- **業務自動化・実用ツール**: 営業・学習など実務領域の自動化ツールも存在感を示す。ethanplusai/sellbird（1129スター）はClaude/ChatGPT上で動く営業アウトリーチ自動化、HKUDS/DeepTutor（3873スター）はRAGベースのパーソナライズド学習支援。従来型の基盤ツールpython-poetry/poetry（237スター）とpandas-dev/pandas（417スター）も継続的にスターを獲得している。（`ethanplusai/sellbird`、`HKUDS/DeepTutor`、`python-poetry/poetry`、`pandas-dev/pandas`）

### 補足的な観察

- 期間内スター数のトップ3はNVIDIA/auto-ontology（9044）、D4Vinci/Scrapling（8712）、calesthio/OpenMontage（4369）で、基盤フレームワークと実用ツールが混在している
- 言語分布は全18リポジトリがPythonで、他言語が一切ランクインしていない完全なPython独占状態
- Claude Codeへの言及がanthropics/skills、blader/humanizer、AgriciDaniel/claude-seo、Graphify-Labs/graphify、guillaumemeyer/watermarks-removerなど多数に及び、Claude Codeがエージェントスキルの主要プラットフォームとして機能している
- 大企業公式リポジトリ（Anthropic、Google、GitHub、NVIDIA）が4件ランクインし、エージェントエコシステムへの本格参入が伺える

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 18 |

## Repository一覧

### 1. [anthropics/skills](https://github.com/anthropics/skills)

> Public repository for Agent Skills

- Language: Python
- Stars: 188,776
- Forks: 22,250
- Stars in 1週間: 2,796
- Category: AIエージェント拡張
- Keywords: `Claude` `Agent Skills` `SKILL.md` `Anthropic` `プラグイン` `Apache 2.0`
- Summary source: README

#### README要約

- Anthropicが公開するClaude向けAgent Skillsの実装リポジトリで、指示・スクリプト・リソースをまとめたフォルダをClaudeが動的に読み込み専門タスクの性能を向上させる仕組みを提供する。
- 各スキルはSKILL.mdにYAML frontmatter（nameとdescription）と指示文を記述した自己完結型フォルダで構成され、クリエイティブ、開発、エンタープライズ、ドキュメント作成など多様な例を収録する。
- Claude Code、Claude.ai、Claude APIで利用でき、開発者はこれらの例を参考に独自スキルを作成したり、docx/pdf/pptx/xlsxの本番利用スキルを参照できる。
- 多くのスキルはApache 2.0でオープンソース提供されるが、デモ・教育目的のため実際のClaudeの動作と異なる場合があり、重要なタスクでは自身の環境で十分にテストする必要がある。

---

### 2. [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)

> 🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev

- Language: Python
- Stars: 99,319
- Forks: 10,397
- Stars in 1週間: 8,712
- Category: Webスクレイピングフレームワーク
- Keywords: `Python` `Webスクレイピング` `クローラー` `ステルスブラウザ` `MCPサーバー` `プロキシローテーション`
- Summary source: README

#### README要約

- Scraplingは、単一リクエストから大規模クロールまで対応するPython製Webスクレイピングフレームワークです。
- 高速HTTPリクエスト、ステルスブラウザ、JavaScriptレンダリング、CSS/XPath解析、並行スパイダー、プロキシローテーション、JSON/CSV等へのエクスポート機能を備えています。
- 静的ページ取得からサイト全体のクロールまで、Pythonコード・CLI・AIエージェント（MCPサーバー経由）のいずれからでも利用できます。
- pip install scraplingで導入可能で、ブラウザ機能にはscrapling installが必要です。教育・研究目的の提供で、利用時は法規制やサイトの利用規約遵守が求められます。

---

### 3. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)

> World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.

- Language: Python
- Stars: 78,271
- Forks: 10,424
- Stars in 1週間: 4,369
- Category: AI動画制作システム
- Keywords: `動画制作` `AIエージェント` `オープンソース` `Python` `パイプライン` `AGPLv3`
- Summary source: README

#### README要約

- AIコーディングアシスタントを本格的な動画制作スタジオに変える、オープンソースのエージェント型動画制作システム。
- 12の制作パイプラインと100以上のツールを備え、リサーチ・脚本・素材生成・編集・最終合成までをエージェントが統括する。
- Claude CodeやCursorなどのAIアシスタント利用者や、低コストで映像作品を作りたいクリエイター・開発者が対象。
- Python製でAGPLv3ライセンス。Backlotボードで制作状況を可視化し、レンダー前に素材を承認するゲート機能もある。

---

### 4. [github/spec-kit](https://github.com/github/spec-kit)

> 💫 Toolkit to help you get started with SDD or any other process!

- Language: Python
- Stars: 148,419
- Forks: 13,335
- Stars in 1週間: 4,280
- Category: 開発支援ツール
- Keywords: `仕様駆動開発` `AIコーディングエージェント` `SDD` `バグ修正` `テンプレート` `拡張機能`
- Summary source: README

#### README要約

- AIコーディングエージェントに構造化されたプロセス、再利用可能なテンプレート、文書化された成果を提供するオープンソースツールキット。
- 仕様駆動開発（SDD）を中核に、バグ修正やアイデア評価の拡張機能を必要に応じてインストールして利用できる。
- 新機能開発、バグの診断・修正、アイデアの投資判断など、開発プロセスを体系化したい開発者やチームが対象。
- Python 3.11以上とuv、対応AIコーディングエージェントが必要で、uv tool install specify-cliでインストールして使用する。

---

### 5. [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent)

> 🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.

- Language: Python
- Stars: 15,447
- Forks: 2,139
- Stars in 1週間: 1,576
- Category: AIコードレビューツール
- Keywords: `コードレビュー` `AI` `GitHub Actions` `CLI` `オープンソース` `LLM`
- Summary source: README

#### README要約

- PR-Agentは、Qodoからコミュニティに移管されたオープンソースのAIコードレビューエージェントです。
- PRへのコメントやCLIから/review、/improve、/describe、/askなどのツールを実行し、単一のLLM呼び出しで動作します。
- GitHub、GitLab、Bitbucket、Azure DevOps、Giteaに対応し、LiteLLM経由でOpenAI、Claude、Geminiなど多様なAIモデルを利用できます。
- GitHub Actions、CLI、Docker、セルフホストで導入可能ですが、Docker Hubの名前空間がpragent/pr-agentへ移行した点に注意が必要です。

---

### 6. [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)

> Kronos: A Foundation Model for the Language of Financial Markets

- Language: Python
- Stars: 47,243
- Forks: 7,810
- Stars in 1週間: 2,937
- Category: 金融時系列予測モデル
- Keywords: `基盤モデル` `ローソク足` `K線` `時系列予測` `Transformer` `ファインチューニング`
- Summary source: README

#### README要約

- Kronosは金融市場のローソク足（K線）データに特化した、世界45以上の取引所のデータで学習された初のオープンソース基盤モデルです。
- 専用トークナイザーがOHLCVデータを階層的な離散トークンに量子化し、自己回帰Transformerがそれを学習する2段階フレームワークを採用しています。
- KronosPredictorクラスを通じて価格予測やバッチ予測が可能で、Qlibを使ったファインチューニングやバックテストのパイプラインも提供されています。
- Python 3.10以上でpipにより依存関係をインストールして利用し、モデルはHugging Face Hubから取得できます。ライセンスはMITです。

---

### 7. [blader/humanizer](https://github.com/blader/humanizer)

> Agent skill that removes signs of AI-generated writing from text

- Language: Python
- Stars: 65,989
- Forks: 5,214
- Stars in 1週間: 3,067
- Category: AI文章校正ツール
- Keywords: `AI文章検出` `文章リライト` `Claude Code` `エージェントスキル` `Wikipedia` `自然言語処理`
- Summary source: README

#### README要約

- AIが生成した文章を、内容を変えずに人間が書いたような自然な表現に書き換えるエージェントスキル。
- Wikipediaの「Signs of AI writing」に基づく26のパターンを検出し、強い順に修正。事実関係は保持し、不明な点は推測せず質問する。
- Claude Code、Codex、Claude.ai、Gemini CLI、GitHub Copilotなど、スキル対応のAIエージェントユーザー向け。
- Claude Code 2.1.142以降が必要。AI検出器を回避する目的ではなく、人間の読者向けの編集ツール。

---

### 8. [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)

> DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.

- Language: Python
- Stars: 56,365
- Forks: 6,885
- Stars in 1週間: 3,873
- Category: AI学習支援
- Keywords: `パーソナライズド学習` `RAG` `チュータリング` `知識ベース` `デスクトップアプリ` `Python`
- Summary source: README

#### README要約

- DeepTutorは、HKUDSが開発する生涯パーソナライズドチュータリングのためのオープンソースアプリケーションです。
- RAGパイプラインやドキュメント索引、ナレーション付き動画レッスン、クイズ、Ankiエクスポート、知識ベース連携などの学習支援機能を備えています。
- 個人学習者が自分の資料やフォルダを使って学習ワークスペースを構築し、対話型の個別指導を受ける用途を想定しています。
- macOS（Apple Silicon/Intel）とWindows向けのデスクトップ版がリリースページから入手可能で、Apache License 2.0で公開されています。

---

### 9. [guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover)

> A privacy-first app that strips AI watermarks from content you own.

- Language: Python
- Stars: 26,608
- Forks: 3,030
- Stars in 1週間: 877
- Category: AI透かし除去ツール
- Keywords: `AI透かし除去` `C2PA` `SynthID` `エージェントスキル` `プライバシー` `Python`
- Summary source: README

#### README要約

- 所有するコンテンツから複数ベンダーのAI由来マークを除去する、プライバシー重視のエージェントスキルとPython標準ライブラリ製HTTPサービスです。
- 不可視Unicodeや統計的テキスト透かし、C2PA/EXIF/XMP等のファイルメタデータを3層で処理し、画像・文書・音声・動画など多形式に対応します。
- Claude CodeやCodex、Cursor等のエージェントホスト利用者が、自分のテキストやファイルの衛生管理に使う想定です。
- スキルはHTTP経由でサービスを呼ぶため、事前にサービス起動とURL設定が必要で、チャット本文の透かし除去はベストエフォートです。

---

### 10. [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)

> Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.

- Language: Python
- Stars: 27,257
- Forks: 3,539
- Stars in 1週間: 2,375
- Category: SEOツール
- Keywords: `Claude Code` `SEO監査` `AI検索最適化` `GEO` `E-E-A-T` `プラグイン`
- Summary source: README

#### README要約

- Claude Code向けの無料オープンソースSEOプラグインで、Webサイトの包括的なSEO監査を10〜15分で実行し、優先度順のアクションプランを提示する。
- 26のサブスキルと19の専門エージェントで構成され、技術SEO、E-E-A-T、スキーマ、AI検索（GEO）、ローカル・EC SEOなどを最大17エージェントが並列で分析する。
- SEO代理店、社内SEOチーム、フリーランスコンサルタントを対象とし、Markdown・PDF・JSON形式のレポートをローカル環境で生成できる。
- MITライセンスで提供され、Claude Code上で「/seo」コマンドで利用開始。ライブデータ取得には9つのオプション拡張機能が用意されている。

---

### 11. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)

> 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.

- Language: Python
- Stars: 140,747
- Forks: 22,457
- Stars in 1週間: 3,987
- Category: AI動画生成ツール
- Keywords: `AI` `ショート動画` `自動生成` `Python` `WebUI` `API`
- Summary source: README

#### README要約

- テーマやキーワードを入力するだけで、AIが自動で高画質なショート動画を生成するツールです。
- 動画スクリプトの自動生成、素材のマッチング、字幕作成、BGMの合成までを一貫して行います。
- 動画制作の自動化を目指す開発者や、手軽にコンテンツを作成したいユーザーに適しています。
- Python製でWebUIとAPIを備え、別途ffmpegやWhisperモデルなどの設定が必要な場合があります。

---

### 12. [google/skills](https://github.com/google/skills)

> Agent Skills for Google products and technologies

- Language: Python
- Stars: 23,387
- Forks: 1,953
- Stars in 1週間: 1,477
- Category: エージェントスキル集
- Keywords: `Agent Skills` `Google Cloud` `npx` `GKE` `BigQuery` `Gemini`
- Summary source: README

#### README要約

- Google製品・技術（Google Cloudを含む）向けのAgent Skillsを集めたリポジトリです。
- npx skills add google/skillsでインストールし、対象スキル・エージェント・スコープ（プロジェクト/グローバル）を選択して設定します。
- Google Cloudの導入、AI/ML、インフラ、データベース、広告、アナリティクスなどの領域で、エージェントを活用する開発者・運用者向けです。
- npxが使えない環境ではNode.jsのインストールが必要で、更新はnpx skills updateで行い、不要スキルの削除も選択できます。

---

### 13. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

> Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.

- Language: Python
- Stars: 143,992
- Forks: 13,779
- Stars in 1週間: 4,147
- Category: ナレッジグラフ
- Keywords: `ナレッジグラフ` `AST解析` `tree-sitter` `AIコーディングアシスタント` `ローカルファースト` `コード解析`
- Summary source: README

#### README要約

- コードベースやドキュメント、SQLスキーマ、PDFなどをクエリ可能なナレッジグラフに変換するツール。
- tree-sitterによるローカルAST解析でLLM不要、全エッジにEXTRACTED/INFERREDの信頼タグを付与し、ベクトルストアを使わない。
- Claude Code、Cursor、Codex、Gemini CLIなどのAIコーディングアシスタント向けの/graphifyスキルとして提供される。
- Python 3.10+とuv（またはpipx）が必要で、uv tool install graphifyyでCLIをインストール後、graphify installでアシスタントに登録する。

---

### 14. [ethanplusai/sellbird](https://github.com/ethanplusai/sellbird)

> Sellbird (formerly Harvey): the open-source outreach platform that runs on your Claude or ChatGPT plan. Finds companies and decision makers, verifies emails, writes personal cold email, sends it and handles the replies.

- Language: Python
- Stars: 4,796
- Forks: 1,017
- Stars in 1週間: 1,129
- Category: 営業自動化ツール
- Keywords: `コールドメール` `営業自動化` `Claude` `ChatGPT` `オープンソース` `メール検証`
- Summary source: README

#### README要約

- Sellbird（旧Harvey）は、ClaudeまたはChatGPTのサブスクリプション上で動作するオープンソースのアウトリーチプラットフォームです。
- 企業の発見、意思決定者の特定、メールアドレスの検証、個別化されたコールドメールの作成・送信、返信対応までを一貫して自動化します。
- 営業担当者やマーケターが、自社製品に関心のある見込み客を見つけてアプローチする際に利用します。
- Python 3.11以上とClaude Pro/MaxまたはCodex対応のChatGPTプランが必要で、デフォルトでは送信前にユーザーの承認が必要です。

---

### 15. [python-poetry/poetry](https://github.com/python-poetry/poetry)

> Python packaging and dependency management made easy

- Language: Python
- Stars: 34,432
- Forks: 2,583
- Stars in 1週間: 237
- Category: パッケージ管理ツール
- Keywords: `Python` `依存関係管理` `pyproject.toml` `パッケージング` `ロックファイル` `仮想環境`
- Summary source: README

#### README要約

- Pythonプロジェクトの依存関係を宣言・管理・インストールするためのツールです。
- setup.pyやrequirements.txtなどをpyproject.tomlベースの形式に置き換え、依存グループやロック機能を提供します。
- パッケージ開発者やPythonプロジェクトの管理者が、環境の再現性を保ちながら依存関係を管理するのに適しています。
- 公式インストールスクリプトなど複数の方法で導入でき、詳細は公式ドキュメントを参照してください。

---

### 16. [scenario-labs/skills](https://github.com/scenario-labs/skills)

> Get production-ready images, video, audio, and 3D from any AI agent: skills that pick the right model, price before spending, and keep characters and brands consistent through the Scenario MCP, plus expert teams that drive Blender, Maya, ZBrush, Unreal, and Unity.

- Language: Python
- Stars: 3,503
- Forks: 302
- Stars in 1週間: 2,151
- Category: AIエージェントスキル集
- Keywords: `Agent Skills` `Scenario MCP` `画像生成` `3Dアセット` `ゲーム開発` `DCCツール`
- Summary source: README

#### README要約

- AIコーディングエージェント（Claude Code、Cursor、Codex、Copilotなど70以上）に、Scenario MCPサーバー経由で画像・動画・音声・テクスチャ・3Dアセットなどの制作物生成を行わせるAgent Skills集。
- モデル選択や生成ループ、参照画像合成、ブランドキット、テキストオーバーレイなど多数のスキルを提供し、ZBrush・Blender・Maya・Unreal・Unity・Godot・Roblox Studioを操作するエキスパート系スキル群も含む。
- ゲーム・エンタメ・クリエイティブ分野の制作者や開発者が、AIエージェント経由でプロダクション品質のコンテンツを生成・編集する用途を想定している。
- npx skills addコマンドでインストールし、Scenario系スキルにはScenario MCPサーバーの接続（OAuthまたはAPIキー）が必要。エキスパート系は対応アプリのローカルインストールが前提で、レビュー済み状態に固定するピン留めも可能。

---

### 17. [pandas-dev/pandas](https://github.com/pandas-dev/pandas)

> Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more

- Language: Python
- Stars: 50,524
- Forks: 20,727
- Stars in 1週間: 417
- Category: データ分析ライブラリ
- Keywords: `Python` `DataFrame` `データ分析` `時系列` `データ加工` `BSD 3-Clause`
- Summary source: README

#### README要約

- pandasは、ラベル付きデータやリレーショナルデータを直感的に扱える、高速で柔軟なPython製データ分析ライブラリです。
- 欠損値処理、データ整列、group by、結合、再形成、階層ラベル付け、CSV/Excel/DB/HDF5入出力、時系列処理などを提供します。
- 実務のデータ分析やデータ加工を行うPythonユーザー向けで、SeriesやDataFrameを中心に集計・変換・整形に利用できます。
- PyPIのpipまたはconda-forgeのcondaで導入でき、依存関係はNumPyとpython-dateutil、Windows/Emscriptenではtzdataも必要です。

---

### 18. [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)

> Auto Ontology is a Python framework for building semantic, graph-based reasoning layers over data. It enables deterministic query generation, better context retrieval, and more explainable AI for LLM and agent workflows.

- Language: Python
- Stars: 9,779
- Forks: 794
- Stars in 1週間: 9,044
- Category: AI/データ基盤フレームワーク
- Keywords: `オントロジー` `ナレッジグラフ` `NL-to-SQL` `LLMエージェント` `セマンティックレイヤー` `NVIDIA NIM`
- Summary source: README

#### README要約

- NVIDIA Auto Ontologyは、エンタープライズメタデータからセマンティックなグラフベースの推論レイヤーを構築するPythonフレームワークです。
- 自然言語クエリをSQLに変換して実行し、認証・RBAC・Web UIを備え、MCP/CLI/API経由でエージェントにコンテキストを提供します。
- LLMやエージェントワークフローで、決定的なクエリ生成、より良いコンテキスト検索、説明可能なAIを必要とする開発者向けです。
- Docker ComposeまたはHelmでデプロイ可能で、NVIDIA NIMエンドポイントとAPIキーが必要です。Apache License 2.0で提供されます。

---
