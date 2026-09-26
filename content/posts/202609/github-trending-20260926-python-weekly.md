+++
title = 'GitHub Trending 1週間レポート (python) - 2026/09/26'
date = 2026-09-26T23:25:59.957Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月26日 23:25:59
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェントの実用化・基盤整備が進み、Claude関連ツールや学習リソースがPython中心に強い支持を集めている

- AIエージェント関連のリポジトリが全体の大半を占め、メモリシステム、SDK、ツールレジストリ、CLI生成など多様なレイヤーで展開されている
- AnthropicのClaudeエコシステム（financial-services、knowledge-work-plugins、claude-code-templates）が複数ランクインし、実務適用が進んでいる
- Pythonが全16リポジトリ中15件を占める圧倒的な言語分布となっている
- 学習リソース系（train-llm-from-scratch、ai-engineering-from-scratch、ai-agent-book）が高いスター数を獲得し、AI人材育成への関心の高さがうかがえる
- エージェントのメモリ、ツール接続、マルチエージェント対応など「本番運用」を意識した基盤技術が注目されている

### 主なテーマ

- **AIエージェント基盤・ランタイム**: エージェントのメモリ管理、SDK、ツールプロキシ、CLI生成など、エージェントを実運用するための基盤技術が複数登場。vectorize-io/hindsightは4,869スターで最高を記録し、エージェントの長期記憶への関心の高さを示している。（`vectorize-io/hindsight`、`strands-agents/harness-sdk`、`superdesigndev/treg`、`HKUDS/CLI-Anything`、`TencentCloud/Octop`）
- **Claudeエコシステム・プラグイン**: Anthropic公式の金融向けエージェント（2,623スター）やナレッジワークプラグイン（889スター）、コミュニティ製のClaude Code設定集（1,041スター）がランクイン。MCPを共通基盤として、特定業務への適用が進んでいる。（`anthropics/financial-services`、`anthropics/knowledge-work-plugins`、`davila7/claude-code-templates`）
- **AI学習・教育リソース**: LLMのゼロからの構築チュートリアル（1,376スター）、523レッスンのカリキュラム（2,923スター）、AI Agent書籍（2,485スター）がいずれも高いスター数を獲得。実践的なハンズオン形式の教材への需要が大きい。（`FareedKhan-dev/train-llm-from-scratch`、`rohitg00/ai-engineering-from-scratch`、`bojieli/ai-agent-book`）
- **LLMインフラ・モデル最適化**: 100以上のLLM APIを統一するゲートウェイ（568スター）、NVIDIAのモデル圧縮ライブラリ（758スター）、深層学習フレームワーク本体（255スター）がランクイン。推論コスト削減とマルチプロバイダー対応が課題意識として共有されている。（`BerriAI/litellm`、`NVIDIA/Model-Optimizer`、`pytorch/pytorch`）
- **セキュリティ・クリエイターツール**: モバイルフォレンジックのMVT（1,737スター）とAI動画クリップ生成のautoclip（1,544スター）が、エージェント以外の領域で着実な支持を獲得。スパイウェア検出とコンテンツ制作自動化という異なるニーズが共存している。（`mvt-project/mvt`、`zhouxiaoka/autoclip`）

### 補足的な観察

- 言語分布はPythonが16件中15件（約94%）を占め、AIエージェント開発におけるPythonの支配的な地位が明確
- スター数トップはvectorize-io/hindsightの4,869で、エージェントメモリという特定課題への解決策が最大の関心を集めた
- MCP（Model Context Protocol）が少なくとも6リポジトリでキーワード・機能として言及されており、エージェント間連携のデファクト標準として定着しつつある
- Anthropic公式リポジトリが2件ランクインしており、ベンダー主導のオープンソース展開がトレンドを牽引している

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 16 |

## Repository一覧

### 1. [anthropics/financial-services](https://github.com/anthropics/financial-services)

- Language: Python
- Stars: 37,695
- Forks: 5,444
- Stars in 1週間: 2,623
- Category: 金融AIエージェント
- Keywords: `Claude` `金融サービス` `投資銀行` `株式リサーチ` `MCP` `エージェント`
- Summary source: README

#### README要約

- 金融サービス業界向けのClaudeエージェント、スキル、データコネクタを提供するリポジトリ。投資銀行、株式リサーチ、プライベートエクイティ、ウェルスマネジメントのワークフローに対応。
- Claude CoworkプラグインまたはClaude Managed Agents API経由でデプロイ可能。ピッチ資料作成、市場調査、決算レビュー、モデル構築、GL照合、KYCスクリーニングなどの専門エージェントを収録。
- 金融アナリスト、投資銀行担当者、ファンド管理者、運用担当者向け。MCPサーバー経由でDaloopa、Morningstar、S&P Global、FactSet、Moody'sなどの金融データプロバイダーと連携。
- 投資助言ではなく、専門家によるレビュー前提のドラフト作成ツール。Apache License 2.0。MarkdownとYAMLベースで、ビルドステップ不要。

---

### 2. [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)

> Hindsight: Agent Memory That Learns

- Language: Python
- Stars: 32,117
- Forks: 3,566
- Stars in 1週間: 4,869
- Category: AIエージェントメモリシステム
- Keywords: `エージェントメモリ` `LLM` `RAG` `長期記憶` `Python` `機械学習`
- Summary source: README

#### README要約

- Hindsightは、時間とともに学習するスマートなエージェントを構築するためのエージェントメモリシステムです。
- RAGやナレッジグラフの欠点を解消し、LongMemEvalベンチマークで最先端の性能を達成しています。
- LLM Wrapperを使用して既存のエージェントに2行のコードでメモリを追加でき、25以上のLLMプロバイダーをサポートしています。
- Docker、pip、Kubernetes、またはマネージドクラウドサービスを通じて導入可能で、PostgreSQLまたはOracle AI Databaseをストレージとして使用します。

---

### 3. [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)

> CLI tool for configuring and monitoring Claude Code

- Language: Python
- Stars: 31,921
- Forks: 3,632
- Stars in 1週間: 1,041
- Category: 開発者ツール
- Keywords: `Claude Code` `テンプレート` `AIエージェント` `MCP` `CLI` `開発ワークフロー`
- Summary source: README

#### README要約

- AnthropicのClaude Code向けに、AIエージェント、カスタムコマンド、設定、フック、外部連携（MCP）、プロジェクトテンプレートをまとめて提供する設定集です。
- npx claude-code-templates@latest で対話的または個別指定により各コンポーネントを導入でき、100以上のテンプレートをWeb上で閲覧・選択できます。
- Claude Codeを使う開発者が、開発ワークフローの強化、テスト生成、コードレビュー、GitHub・PostgreSQL等の外部サービス連携を行う用途に向いています。
- 導入はnpx経由で行い、--analytics、--chats、--health-check、--plugins などの補助ツールも利用できます。ライセンスはMITです。

---

### 4. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)

> Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork

- Language: Python
- Stars: 25,682
- Forks: 3,037
- Stars in 1週間: 889
- Category: AIプラグイン集
- Keywords: `Claude Cowork` `プラグイン` `ナレッジワーク` `MCP` `スラッシュコマンド` `カスタマイズ`
- Summary source: README

#### README要約

- Claude CoworkおよびClaude Code向けに、職種・チーム・企業ごとの専門家としてClaudeを機能させるオープンソースのプラグイン集。
- 各プラグインはスキル、コネクタ、スラッシュコマンド、サブエージェントをマークダウンとJSONのみで構成し、営業・法務・財務・データ分析など11種類が提供される。
- 営業、カスタマーサポート、プロダクト管理、マーケティング、法務、財務、データ分析、バイオ研究などのナレッジワーカーが対象で、自社のツールや用語、プロセスに合わせてカスタマイズして利用する。
- Coworkではclaude.com/pluginsから、Claude Codeではmarketplace addコマンドでインストールでき、.mcp.jsonの編集でコネクタを自社環境に差し替える必要がある。

---

### 5. [pytorch/pytorch](https://github.com/pytorch/pytorch)

> Tensors and Dynamic neural networks in Python with strong GPU acceleration

- Language: Python
- Stars: 103,375
- Forks: 30,598
- Stars in 1週間: 255
- Category: 深層学習フレームワーク
- Keywords: `テンソル計算` `GPU加速` `自動微分` `動的ニューラルネットワーク` `Python` `TorchScript`
- Summary source: README

#### README要約

- PyTorchはGPU加速対応のテンソル計算と動的ニューラルネットワークを提供するPythonパッケージです。
- テープベースの自動微分システムにより柔軟なネットワーク構築が可能で、NumPyやSciPyなどのPythonライブラリと自然に連携できます。
- NumPyの代替としてGPUの性能を活用したいユーザーや、柔軟性と速度を求める深層学習研究者を主な対象としています。
- Condaやpipでバイナリをインストール可能で、ソースからビルドする場合はPython 3.10以降とC++20対応コンパイラが必要です。

---

### 6. [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)

> "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/

- Language: Python
- Stars: 50,637
- Forks: 4,631
- Stars in 1週間: 972
- Category: AIエージェント用CLI生成ツール
- Keywords: `AIエージェント` `CLI生成` `Agent-Native` `CLI-Hub` `SKILL.md` `Python`
- Summary source: README

#### README要約

- あらゆるソフトウェアをAIエージェントから操作可能にする「Agent-Native」化を目指すPython製プロジェクト。
- ソフトウェア向けのCLIハーネスとSKILL.mdを生成し、CLI-Hubでコミュニティ製CLIの閲覧・インストール・管理ができる。
- Pi、OpenClaw、nanobot、Cursor、Claude CodeなどのエージェントからCAD、3D、GIS、動画編集など多様なソフトを操作したい開発者・エージェント利用者向け。
- pip install cli-anything-hubで導入可能だが、1回の生成では網羅しきれず/refineによる反復改善が必要な場合がある。ライセンスはApache 2.0。

---

### 7. [TencentCloud/Octop](https://github.com/TencentCloud/Octop)

> A smarter, self-hosted AI assistant — multi-user, multi-agent.

- Language: Python
- Stars: 5,107
- Forks: 605
- Stars in 1週間: 1,149
- Category: セルフホストAIアシスタント
- Keywords: `セルフホスト` `マルチエージェント` `マルチユーザー` `Python` `FastAPI` `RAG`
- Summary source: README

#### README要約

- TencentCloudが開発したオープンソースのセルフホスト型AIアシスタントで、マルチユーザー・マルチエージェントに対応する。
- Webダッシュボード、CLI、Feishu/DingTalk/QQ/Telegram/WeComなどのIM連携、cron自動化を単一プロセスで提供し、RAGナレッジベースやACPによるIDE連携も備える。
- 個人の秘書的利用、家族での共有、小規模チームでのタスク連携、開発者のコーディング支援やWeb自動化などの用途を想定している。
- Python 3.12以上が必要で、データは~/.octop/配下にローカル保存され、SQLite(デフォルト)またはPostgreSQLを利用する。MITライセンス。

---

### 8. [superdesigndev/treg](https://github.com/superdesigndev/treg)

> OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn

- Language: Python
- Stars: 3,492
- Forks: 285
- Stars in 1週間: 1,687
- Category: AIエージェント用ツールレジストリ/プロキシ
- Keywords: `エージェントツール` `APIプロキシ` `従量課金` `認証情報管理` `MCP` `セルフホスト`
- Summary source: README

#### README要約

- Tregは「OpenRouter for Tools」を掲げるツールレジストリで、エージェントが1つのベースURLと1つのトークンで3,000以上のエンドポイント（60以上のプロバイダー）にアクセスできるようにする。
- カタログツールはtregのキーまたは検証済み公開ルート経由で提供され、従量課金（1セントから）でプロバイダーへのサインアップ不要。チーム独自のAPIキー、OAuth接続、CLI、SKILL.mdも登録・共有可能で、認証情報はサーバーサイドで注入される。
- エージェント開発者やチームが、SEO、バックリンク、ソーシャル、エンリッチメント、広告、スクレイピング、画像・動画生成などのツールを、高額なサブスクリプションなしに利用する場面を想定している。
- CLIはcurlでインストールし、GitHubログインまたはトークンで認証。Claude CodeプラグインやClaude.aiコネクタとしても導入可能。セルフホストも可能で、ライセンスはApache 2.0（追加条件あり）。

---

### 9. [mvt-project/mvt](https://github.com/mvt-project/mvt)

> MVT (Mobile Verification Toolkit) helps with conducting forensics of mobile devices in order to find signs of a potential compromise.

- Language: Python
- Stars: 14,864
- Forks: 1,397
- Stars in 1週間: 1,737
- Category: セキュリティ・フォレンジック
- Keywords: `モバイルフォレンジック` `スパイウェア検出` `IOC` `Android` `iOS` `Amnesty International`
- Summary source: README

#### README要約

- MVTはAndroidおよびiOSデバイスの侵害痕跡を収集・分析するフォレンジックツールキットです。
- 公開されているIOC（侵害指標）を用いて既知のスパイウェアキャンペーンによる感染痕跡をスキャンし、mvt-iosとmvt-androidコマンドで各プラットフォームのデータを解析します。
- デジタルフォレンジックの知識を持つ技術者や調査員を対象としており、市民社会やマイノリティへの高度なスパイウェア攻撃の調査を支援します。
- pip3またはuvでインストール可能ですが、エンドユーザー向けの自己診断ツールではなく、公開IOCのみではデバイスがクリーンであるとは判断できません。

---

### 10. [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)

> A straightforward method for training your LLM, from downloading data to generating text.

- Language: Python
- Stars: 11,225
- Forks: 1,564
- Stars in 1週間: 1,376
- Category: LLM学習チュートリアル
- Keywords: `Transformer` `PyTorch` `事前学習` `SFT` `PPO` `GRPO`
- Summary source: README

#### README要約

- PyTorchのみでTransformerをゼロから実装し、単一GPUで数百万〜数十億パラメータのLLMを学習できるチュートリアルリポジトリ。
- データ準備・事前学習・SFT・報酬モデル・PPO/DPO/GRPO・評価・チャットまで、trl/peft/transformersを使わず全工程を手書きで網羅。
- 学生・開発者・研究者を対象とし、各コードに解説と期待出力を付記。Streamlit製の操作パネルやMkDocsのドキュメントサイトも提供。
- pip install -e .で導入。GPU必須で13MモデルはColab/Kaggleの無料T4で動くが、大規模モデルはA100等が必要。メモリ削減フラグあり。

---

### 11. [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)

> AutoClip : AI-powered video clipping and highlight generation · 一款智能高光提取与剪辑的二创工具

- Language: Python
- Stars: 8,959
- Forks: 1,648
- Stars in 1週間: 1,544
- Category: AI動画クリップ生成
- Keywords: `動画編集` `ハイライト抽出` `AIクリップ` `自動字幕` `ショート動画` `オープンソース`
- Summary source: README

#### README要約

- AIで長尺動画からハイライトを自動抽出し、共有向けの短いクリップや合集を生成するオープンソースの二創ツールです。
- 字幕や音声転写を基にAIが話題のタイムラインや精彩度スコアを算出し、タイトル付きのクリップを自動生成します。
- インタビュー、ポッドキャスト、講義、ライブ配信のアーカイブなど、会話中心の動画を扱うクリエイターや編集者に適しています。
- デスクトップアプリ、Docker、CLIの3形態で利用可能で、ローカルモデル（Ollamaなど）または各種クラウドAPIキーが必要です。

---

### 12. [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk)

> Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.

- Language: Python
- Stars: 8,459
- Forks: 1,264
- Stars in 1週間: 1,070
- Category: AIエージェントSDK
- Keywords: `AIエージェント` `Python` `TypeScript` `MCP` `マルチエージェント` `モデルアグノスティック`
- Summary source: README

#### README要約

- PythonとTypeScriptでAIエージェントを構築・実行するためのオープンソースSDK。
- エージェントループ、ツール、MCP、マルチエージェント、メモリ、ガードレール、トレーシングなどを内蔵する。
- 独自のエージェントループを書く代わりに、本番運用に必要な制御機能を備えた基盤を求める開発者向け。
- create_harness()ですぐ始められ、Python 3.10+またはNode.js 22+が必要。Apache License 2.0。

---

### 13. [BerriAI/litellm](https://github.com/BerriAI/litellm)

> The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging [Bedrock, Azure, OpenAI, Anthropic, OpenAI, VertexAI, vLLM, Nvidia NIM]

- Language: Python
- Stars: 59,672
- Forks: 11,802
- Stars in 1週間: 568
- Category: AIゲートウェイ
- Keywords: `LLM統一API` `OpenAI互換` `コスト追跡` `負荷分散` `ガードレール` `セルフホスト`
- Summary source: README

#### README要約

- LiteLLMは100以上のLLMプロバイダーをOpenAI形式で統一呼び出しできるオープンソースのAI Gatewayです。
- Python SDKとプロキシサーバーの2形態で提供され、仮想キー、コスト追跡、ガードレール、負荷分散、管理ダッシュボードを備えます。
- 複数LLMを横断利用する開発者や、チーム・組織でLLMアクセスを一元管理したいエンタープライズ用途に適しています。
- uvやpipでインストール可能で、DockerやAWS/GCPへのデプロイも用意されていますが、一部機能は商用ライセンスのEnterprise版対象です。

---

### 14. [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)

> Learn it. Build it. Ship it for others.

- Language: Python
- Stars: 58,340
- Forks: 10,118
- Stars in 1週間: 2,923
- Category: AI学習カリキュラム
- Keywords: `AIエンジニアリング` `カリキュラム` `LLM` `エージェント` `MCP` `オープンソース`
- Summary source: README

#### README要約

- AIエンジニアリングをゼロから学ぶための無料・オープンソース（MIT）のカリキュラムで、523レッスン・20フェーズ・約342時間の学習内容を提供する。
- Python、TypeScript、Rust、Juliaを使い、各レッスンでプロンプト・スキル・エージェント・MCPサーバーなど再利用可能な成果物を実際に手を動かして構築する。
- 初学者から実務レベルを目指す学習者が対象で、LLMアプリ開発、エージェント構築、MCP、Claude認定試験対策など目的別の学習パスが用意されている。
- git cloneしてpython3でレッスンコードを実行するだけで開始でき、npx skills addでコーディングエージェントにAIチューター機能を追加することも可能。

---

### 15. [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)

> 《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF 与按章配套代码

- Language: Python
- Stars: 51,171
- Forks: 5,747
- Stars in 1週間: 2,485
- Category: AI Agent書籍・教材
- Keywords: `AI Agent` `LLM` `オープンソース書籍` `Python` `実験コード` `PDF/EPUB`
- Summary source: README

#### README要約

- 李博杰著『深入理解 AI Agent：设计原理与工程实践』のオープンソース公式リポジトリで、書籍全文・PDF/EPUB・章別コードを公開している。
- 「Agent = LLM + コンテキスト + ツール」を軸に全10章で原理から実践までを解説し、109個の実験コードと15言語対応の本文を収録する。
- AI Agentの設計・開発を学ぶエンジニアや研究者向けで、PDF/EPUBのダウンロードやオンライン閲覧、章ごとの実験実行が可能。
- 実験はPython 3.11–3.13対応でuvまたはpipで依存を導入し、APIキー設定が必要。ライセンスはApache License 2.0。

---

### 16. [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)

> A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.

- Language: Python
- Stars: 4,734
- Forks: 667
- Stars in 1週間: 758
- Category: モデル最適化ライブラリ
- Keywords: `量子化` `蒸留` `プルーニング` `NAS` `投機的デコーディング` `推論最適化`
- Summary source: README

#### README要約

- NVIDIA Model Optimizerは、量子化・蒸留・プルーニング・NAS・投機的デコーディング・スパース化などの最先端モデル最適化技術を統合したPythonライブラリです。
- Hugging Face、PyTorch、ONNXモデルを入力として受け付け、Python APIで最適化技術を組み合わせて量子化チェックポイントをエクスポートできます。
- LLMやVLMの推論速度を最適化したい開発者や研究者向けで、TensorRT-LLM、TensorRT、vLLM、SGLangなどのデプロイメントフレームワークとシームレスに統合されています。
- オープンソースで提供され、Megatron-BridgeやMegatron-LMとの統合により訓練が必要な最適化技術もサポート。pre-1.0のため非推奨機能は1リリースの移行期間後に削除されます。

---
