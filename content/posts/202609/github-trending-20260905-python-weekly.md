+++
title = 'GitHub Trending 1週間レポート (python) - 2026/09/05'
date = 2026-09-05T22:45:08.237Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月5日 22:45:08
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 19
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェントの機能拡張（スキル）と、ローカル・低コストでのLLM運用を実現するツール群がトレンドの中心となっています。

- Claude CodeやCursorなどのコーディングエージェント向けの「スキル（拡張機能）」を提供するリポジトリが多数ランクインし、エージェントのエコシステム化が進んでいます。
- 巨大なモデルを扱う一方で、64Mパラメータの超小型LLMや、4GBのGPUで8Bモデルを学習可能にするツールなど、リソース制約のある環境での開発を支援するプロジェクトが注目されています。
- 音声合成や動画編集、Webクローリングなど、特定のタスクを自動化・効率化するための実用的なAIツールが強い支持を集めています。
- 科学研究や学術論文作成、特許申請といった専門的な知的労働をAIで支援するためのフレームワークが複数登場しています。
- 言語モデルの検閲除去や、AIスキルのセキュリティスキャンなど、AIの安全性や制御に関する課題に対応するためのツールも現れています。

### 主なテーマ

- **AIエージェントのスキル拡張エコシステム**: Claude CodeやCursorといったAIコーディングエージェントの機能を拡張する「スキル」ライブラリが複数ランクインしています。科学研究支援のK-Dense-AI/scientific-agent-skills、学術論文作成のImbad0202/academic-research-skills、Webリサーチのmvanhorn/last30days-skillなど、特定領域のタスクをエージェントに実行させるためのプラグインが注目を集めており、エージェントをプラットフォームとした開発が活発化していることを示唆しています。（`K-Dense-AI/scientific-agent-skills`、`Imbad0202/academic-research-skills`、`mvanhorn/last30days-skill`、`handsomestWei/patent-disclosure-skill`）
- **低リソース環境でのLLM学習とファインチューニング**: 大規模な計算資源がなくてもLLMを扱えるようにするためのツールが人気を博しています。jingyaogong/minimindは約64Mパラメータのモデルをゼロから学習するフレームワークであり、MakazhanAlpamys/Soupはレイヤーストリーミング技術により4GBのノートPC GPUで8Bモデルのファインチューニングを可能にします。これらは、個人開発者や研究者が手軽にLLMの内部構造の理解やカスタマイズを進められるようにするものです。（`jingyaogong/minimind`、`MakazhanAlpamys/Soup`）
- **専門分野に特化したAI自動化ツール**: 汎用的なチャットボットではなく、特定の専門的タスクを自動化・高度化するツールが多数見られます。音声合成のdebpalash/VoiceStudio、動画編集のbrowser-use/video-use、スクリーンショットからのコード生成abi/screenshot-to-code、Webクローリングのunclecode/crawl4aiなど、クリエイティブや開発ワークフローの特定の工程をAIで効率化する実用的なプロジェクトが支持されています。（`debpalash/VoiceStudio`、`browser-use/video-use`、`abi/screenshot-to-code`、`unclecode/crawl4ai`、`ATH-MaaS/Pixelle-Video`）
- **AIモデルの安全性とセキュリティ**: AIモデルやエージェントの利用が広がるにつれ、その安全性を確保するためのツールが登場しています。NVIDIA/SkillSpectorはAIエージェントのスキルに含まれる脆弱性や悪意のあるパターンをスキャンするセキュリティツールです。一方、p-e-w/hereticは言語モデルの検閲（安全性アライメント）を自動で除去するツールであり、AIの挙動を制御しようとする相反するアプローチが同時に存在している状況がうかがえます。（`NVIDIA/SkillSpector`、`p-e-w/heretic`）

### 補足的な観察

- ランキング上位のリポジトリはすべてPythonで開発されており、AI/機械学習分野におけるPythonの支配的な地位が改めて確認できます。
- 期間中のスター獲得数では、AIエージェントのスキルライブラリであるK-Dense-AI/scientific-agent-skillsが6898と最も多く、次いで音声合成ツールのdebpalash/VoiceStudioが5150と、実用的なツールが大きな関心を集めています。
- Google Researchの時系列予測モデルgoogle-research/timesfmや、3Blue1Brownのアニメーションエンジン3b1b/manimなど、著名な研究機関やクリエイターによるプロジェクトも根強い人気を持っています。
- ロボティクス分野では、強化学習による二足歩行ロボットの制御（pollen-robotics/microduck_rl）がランクインしており、ソフトウェアだけでなく物理世界とのインタラクションを目指すAI開発も進んでいます。

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 19 |

## Repository一覧

### 1. [google-research/timesfm](https://github.com/google-research/timesfm)

> TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.

- Language: Python
- Stars: 31,292
- Forks: 2,991
- Stars in 1週間: 2,653
- Category: 時系列予測モデル
- Keywords: `時系列予測` `ファンデーションモデル` `Google Research` `多変量予測` `ゼロショット` `PyTorch`
- Summary source: README

#### README要約

- Google Researchが開発した時系列予測向けの事前学習済みファンデーションモデルTimesFMのオープン版リポジトリ。
- 最新のTimesFM 3.0は多変量予測と共変量（過去のみ・過去未来両方）をネイティブ対応し、ゼロショット予測で主要ベンチマーク3種で1位を獲得。
- 時系列予測を行う研究者や開発者向けで、PyPIインストールやHugging Faceのチェックポイント、LoRAによるファインチューニング例を提供。
- ソースコードはApache-2.0だが、3.0の事前学習済み重みは非商用・非本番利用に限定される別ライセンスなので商用利用は不可。

---

### 2. [jingyaogong/minimind](https://github.com/jingyaogong/minimind)

> 🧠 Train a 64M-parameter LLM from scratch in just 2h!

- Language: Python
- Stars: 58,770
- Forks: 7,634
- Stars in 1週間: 3,390
- Category: LLM学習フレームワーク
- Keywords: `MiniMind` `LLM` `MoE` `SFT` `RLHF` `PyTorch`
- Summary source: README

#### README要約

- MiniMindは、約64Mパラメータの超小型言語モデルをゼロから学習できるオープンソースプロジェクトです。
- DenseとMoEのモデル構造、Tokenizer学習、Pretrain、SFT、LoRA、DPO、PPO/GRPO/CISPO、Tool Use、Agentic RL、蒸留までの学習コードを提供します。
- LLMの内部実装を理解したい初学者や実践者向けで、PyTorch原生実装を通じて学習・再現・拡張する用途に適しています。
- Apache 2.0で公開され、READMEでは単一NVIDIA 3090でのSFT 1 epochを約2時間、GPU租用コスト約3元と説明しています。

---

### 3. [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)

> Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.

- Language: Python
- Stars: 42,933
- Forks: 3,925
- Stars in 1週間: 6,898
- Category: AIエージェントスキルライブラリ
- Keywords: `AIエージェント` `科学研究` `スキルライブラリ` `Agent Skills標準` `創薬` `バイオインフォマティクス`
- Summary source: README

#### README要約

- AIエージェントを科学者に変える、オープンなAgent Skills標準に対応した科学・研究スキルの包括的コレクション。
- 163の実用的なスキルと100以上の科学データベースを提供し、生物学、化学、医学、創薬などの複雑なワークフローを実行可能にする。
- Cursor、Claude Code、CodexなどのAIコーディングエージェントを、研究アシスタントとして活用したい科学者やエンジニアが対象。
- MITライセンスで提供されるが、各スキルには個別のライセンスが適用される場合があるため、使用前に確認が必要。

---

### 4. [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill)

> 中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。

- Language: Python
- Stars: 7,468
- Forks: 821
- Stars in 1週間: 1,975
- Category: 特許文書作成支援
- Keywords: `特許交底書` `中国特許` `審査対応` `Obsidian連携` `特許検索` `AIスキル`
- Summary source: README

#### README要約

- 中国特許の出願準備を支援するAIスキルセットで、発明・実用新案・意匠の交底書作成から審査対応までをカバーする。
- 特許ポイントの発掘、交底書のテンプレート別作成、既存交底書の出願書類への変換、公開特許の平易な解釈、審査方針の政策ブリーフィング、審査意見への回答支援を提供する。
- 特許出願を検討する研究者・開発者や、公開特許を理解したい技術者、審査対応を行う代理人などを対象とし、Obsidianとの連携で個人特許知識ベースの構築も可能。
- Python製でMITライセンス。詳細なインストール手順はINSTALL.mdを参照し、Obsidian環境のセットアップが必要な場合がある。

---

### 5. [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

> VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.

- Language: Python
- Stars: 18,923
- Forks: 2,431
- Stars in 1週間: 5,150
- Category: 音声合成・TTS
- Keywords: `音声クローン` `TTS` `ローカル実行` `オープンソース` `多言語対応` `動画ダビング`
- Summary source: README

#### README要約

- VoiceStudioは、音声クローン、音声デザイン、動画ダビング、ディクテーション、文字起こし、オーディオブック作成をローカル環境で行えるオープンソースの音声合成アプリケーションです。
- 16種類のTTSエンジンと11種類のASRエンジンを搭載し、646言語のカタログに対応。CUDA、Apple Silicon MPS/MLX、ROCm、CPUなどのハードウェアで動作します。
- macOS、Windows、Linux、Dockerに対応し、デスクトップアプリ、ローカルREST/SSE/WebSocket API、OpenAI互換API、MCPサーバーとして利用できます。
- アカウントやAPIキー、サブスクリプション不要でローカルワークフローを利用可能。初回起動時にPython環境とデフォルトモデルが自動セットアップされます。

---

### 6. [p-e-w/heretic](https://github.com/p-e-w/heretic)

> Fully automatic censorship removal for language models

- Language: Python
- Stars: 30,588
- Forks: 3,381
- Stars in 1週間: 2,065
- Category: 言語モデル検閲除去ツール
- Keywords: `abliteration` `言語モデル` `検閲除去` `Optuna` `自動最適化` `Python`
- Summary source: README

#### README要約

- Hereticは、Transformerベースの言語モデルから検閲（安全性アライメント）を自動的に除去するツールです。
- 方向性アブレーション（abliteration）とOptunaによるTPEベースのパラメータ最適化を組み合わせ、拒否応答の最小化と元モデルからのKLダイバージェンスの最小化を同時に実現します。
- コマンドライン操作ができるユーザーであれば誰でも利用可能で、密モデル・マルチモーダルモデル・MoEアーキテクチャなど幅広いモデルに対応しています。
- Python 3.10以上とPyTorch 2.2以上が必要で、pipでインストール後にモデル名を指定するだけで実行でき、VRAM削減のための量子化オプションも利用可能です。

---

### 7. [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code)

> Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)

- Language: Python
- Stars: 77,889
- Forks: 9,472
- Stars in 1週間: 2,372
- Category: AIコード生成ツール
- Keywords: `スクリーンショット` `コード変換` `AI` `HTML/Tailwind` `React/Vue` `プロトタイピング`
- Summary source: README

#### README要約

- スクリーンショット、モックアップ、Figmaデザイン、画面録画をAIでクリーンなコードに変換するツール。
- HTML/Tailwind、React、Vue、Bootstrap、Ionicなど複数のスタックに対応し、Gemini、GPT、ClaudeなどのAIモデルを使用。
- ローカル実行またはホスト版アプリで利用可能で、開発者やデザイナーがプロトタイプを迅速に作成するのに適している。
- ローカル実行にはAPIキー（OpenAI、Anthropic、Geminiのいずれか）とバックエンド/フロントエンドのセットアップが必要。

---

### 8. [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup)

> Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU.

- Language: Python
- Stars: 5,407
- Forks: 809
- Stars in 1週間: 1,808
- Category: LLMファインチューニングCLI
- Keywords: `LLM` `ファインチューニング` `レイヤーストリーミング` `QLoRA` `YAML設定` `低VRAM学習`
- Summary source: README

#### README要約

- Soupは1つのYAML設定と1コマンドでLLMのファインチューニングとポストトレーニングを行えるPython製CLIツール。
- レイヤーストリーミングにより凍結ベースモデルをVRAM外に保持しデコーダ層を1層ずつGPUへ供給することで、4GBのノートPC GPUで8Bモデルを学習可能にする（オプトインのBETA機能）。
- SSH不要・バッチサイズやGPU検出・量子化の自動処理を特徴とし、QLoRAによるローカル学習を求める開発者やチームを対象とする。
- pipxやuvでsoup-cliを導入し学習には[train]エクストラが必要。Python 3.10〜3.12のみ対応で、torch>=2.5.0とtrl>=0.29の組み合わせに既知の制限がある。

---

### 9. [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)

> 🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawler & Scraper. Don't be shy, join here: https://discord.gg/jP8KfhDhyN

- Language: Python
- Stars: 81,578
- Forks: 8,414
- Stars in 1週間: 1,681
- Category: Webクローラー・スクレイパー
- Keywords: `Webクローリング` `スクレイピング` `LLM` `Markdown生成` `RAG` `Python`
- Summary source: README

#### README要約

- Crawl4AIは、WebページをLLMで扱いやすいクリーンなMarkdownに変換するオープンソースのWebクローラー兼スクレイパーです。
- 非同期ブラウザプール、キャッシュ、セッション管理、プロキシ対応、LLM駆動の構造化データ抽出、CSS/XPath抽出、ディープクロールなどの機能を備えています。
- RAG、AIエージェント、データパイプライン向けのデータ収集を行う開発者や、大規模なWeb抽出を自前で運用したいチームを対象としています。
- pipでインストール後、crawl4ai-setupとcrawl4ai-doctorでセットアップと検証を行い、ブラウザ問題時はPlaywrightでChromiumを手動導入します。

---

### 10. [browser-use/video-use](https://github.com/browser-use/video-use)

> Edit videos with coding agents

- Language: Python
- Stars: 24,149
- Forks: 2,938
- Stars in 1週間: 2,489
- Category: 動画編集自動化
- Keywords: `動画編集` `Claude Code` `AIエージェント` `自動編集` `ffmpeg` `文字起こし`
- Summary source: README

#### README要約

- Claude Codeなどのコーディングエージェントと対話して動画を編集するオープンソースツール。
- 音声文字起こしとオンデマンドの視覚情報を使い、フィラー削除・カラー調整・字幕焼き込みなどを自動化する。
- トーキングヘッドやチュートリアルなど様々な動画コンテンツを編集したいユーザー向け。
- ffmpegとElevenLabs APIキーが必要で、エージェントのスキルとして登録して利用する。

---

### 11. [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills)

> Academic Research Skills for Claude Code: research → write → review → revise → finalize

- Language: Python
- Stars: 46,420
- Forks: 3,647
- Stars in 1週間: 2,241
- Category: 学術研究支援ツール
- Keywords: `Claude Code` `学術論文` `引用検証` `ヒューマン・イン・ザ・ループ` `査読支援` `プラグイン`
- Summary source: README

#### README要約

- Claude Code向けの学術研究スキル集で、調査から執筆、査読、改訂、最終化までの論文作成パイプライン全体をカバーする。
- 参考文献の検索・検証、引用フォーマット、データ確認、論理整合性チェックなどを担い、完全自動化ではなく人間が主導するヒューマン・イン・ザ・ループ設計を採用している。
- 論文を執筆する研究者や学生が、AIに論文を書かせるのではなく、問題設定や解釈などの知的作業に集中するための補助ツールとして使う。
- Claude Code v3.7.0以降でプラグインコマンドによりインストール可能。コア機能はプロンプト駆動でPython不要だが、一部のオプション機能には実Python環境が必要。

---

### 12. [3b1b/manim](https://github.com/3b1b/manim)

> Animation engine for explanatory math videos

- Language: Python
- Stars: 93,176
- Forks: 7,659
- Stars in 1週間: 911
- Category: アニメーションエンジン
- Keywords: `数学動画` `アニメーション` `Python` `ManimGL` `3Blue1Brown` `プログラマブル`
- Summary source: README

#### README要約

- Manimは、説明的な数学動画を作成するために設計された、正確なプログラマティックアニメーションエンジンです。
- Pythonコードでアニメーションを記述し、CLIからシーンをレンダリング・プレビュー・ファイル出力でき、custom_config.ymlで出力先や画質などを設定できます。
- 3Blue1Brownの動画制作用に開発されたもので、数学・教育コンテンツの制作者やプログラマブルにアニメーションを作りたいユーザーが対象です。
- Python 3.10以上とFFmpeg、OpenGLが必要で、pip install manimglでインストールします。コミュニティ版（manim）とは別物なので混同に注意が必要です。

---

### 13. [khoj-ai/khoj](https://github.com/khoj-ai/khoj)

> Your AI second brain. Self-hostable. Get answers from the web or your docs. Build custom agents, schedule automations, do deep research. Turn any online or local LLM into your personal, autonomous AI (gpt, claude, gemini, llama, qwen, mistral). Get started - free.

- Language: Python
- Stars: 37,139
- Forks: 2,459
- Stars in 1週間: 340
- Category: AIアシスタント
- Keywords: `セルフホスト` `LLM` `セマンティック検索` `カスタムエージェント` `オープンソース` `RAG`
- Summary source: README

#### README要約

- Khojは自己ホスト可能なオープンソースの個人向けAIアプリで、ユーザーの能力を拡張する「第二の脳」として機能する。
- ローカルまたはオンラインのLLM（llama3、qwen、gpt、claude、gemini等）とチャットでき、インターネットやPDF、Markdown、Notion、Wordなどのドキュメントから回答を取得できる。
- ブラウザ、Obsidian、Emacs、デスクトップ、スマホ、Whatsappからアクセス可能で、カスタムエージェント作成、リサーチ自動化、セマンティック検索、画像生成などの機能を持つ。
- 自分のコンピュータでプライベートに実行するか、クラウドアプリ（app.khoj.dev）でセットアップ不要ですぐに試すことができ、エンタープライズ向けにはクラウド、オンプレミス、ハイブリッドの選択肢がある。

---

### 14. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)

> Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.

- Language: Python
- Stars: 16,289
- Forks: 1,381
- Stars in 1週間: 1,064
- Category: セキュリティスキャナ
- Keywords: `AIエージェントスキル` `静的解析` `プロンプトインジェクション` `サプライチェーンリスク` `SARIF` `LLM解析`
- Summary source: README

#### README要約

- AIエージェントスキル（Claude Code、Codex CLI、Gemini CLIなど）をインストール前にスキャンし、脆弱性や悪意のあるパターン、セキュリティリスクを検出するPython製セキュリティスキャナ。
- 17カテゴリ71種の脆弱性パターン（プロンプトインジェクション、データ流出、権限昇格、サプライチェーンなど）を静的解析し、オプションでLLMによる意味解析やOSV.devによるCVE照合も行う。
- Gitリポジトリ、URL、zip、ディレクトリ、単一ファイルを入力でき、ターミナル/JSON/Markdown/SARIF形式のレポートと0〜100のリスクスコアを出力する。
- uvやpip、Dockerで導入可能。LLM解析にはAPIキーが必要で、--no-llmでローカルのみの静的解析に限定できる。Apache License 2.0。

---

### 15. [ATH-MaaS/Pixelle-Video](https://github.com/ATH-MaaS/Pixelle-Video)

> 🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video Engine

- Language: Python
- Stars: 27,807
- Forks: 4,060
- Stars in 1週間: 363
- Category: AI動画生成ツール
- Keywords: `AI動画生成` `ショート動画` `自動化` `TTS` `ComfyUI` `Python`
- Summary source: README

#### README要約

- テーマを1つ入力するだけで、AIがショート動画を全自動生成するPython製エンジンです。
- 文案作成、AI画像・動画生成、音声合成、BGM追加、動画合成までを一貫して自動化し、ComfyUIやRunningHub、各種APIモデルと連携します。
- 動画編集経験がないユーザーや、SNS向け短尺動画を効率よく量産したいクリエイター・運用者に適しています。
- Windows向け一括パッケージかソースから導入でき、初回はLLMや画像生成サービスのAPIキー設定が必要です。

---

### 16. [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl)

> RL training environments for Microduck (mjlab)

- Language: Python
- Stars: 1,770
- Forks: 356
- Stars in 1週間: 1,287
- Category: 強化学習・ロボティクス
- Keywords: `強化学習` `二足歩行ロボット` `MuJoCo` `sim2real` `PPO` `ONNX`
- Summary source: README

#### README要約

- 約800g・25cmの二足歩行ロボットMicroduck向けの強化学習訓練環境で、mjlab（MuJoCo Warp）上にPPOで構築されている。
- BAMアクチュエータ物理、ドメインランダム化、バックラッシュシミュレーションを含む完全なsim2realレシピを実装し、50Hzで訓練したポリシーをONNXにエクスポートして実機にデプロイする。
- 歩行・起立・転倒回復・ボールキック・ローラースケート等の多様なタスクを提供し、ロボット研究者やRL開発者がsim2realの実験やポリシー共有に利用できる。
- CUDA GPUとuvが必須で、ARM環境では初回同期時にUV_HTTP_TIMEOUT=600の設定が必要。GPUなしの場合はHugging Face Jobsで実行可能。

---

### 17. [sngyai/Sequoia-X](https://github.com/sngyai/Sequoia-X)

> A股自动选股系统 — 多种技术形态自动扫描，收盘后自动运行并推送飞书

- Language: Python
- Stars: 6,726
- Forks: 1,358
- Stars in 1週間: 1,064
- Category: 株式自動選定システム
- Keywords: `A株` `量的取引` `テクニカル分析` `自動スクリーニング` `SQLite` `飛書通知`
- Summary source: README

#### README要約

- A株市場向けの量的選株システムで、毎日の取引終了後に自動で銘柄をスキャンし結果を飛書（Feishu）にプッシュ通知するPython製ツール。
- OOPアーキテクチャとベクトル化計算を採用し、baostockから後復権日足データを取得してローカルSQLiteに保存、6種類のテクニカル戦略（亀突破、移動平均+出来高急増、高値圏旗形、ストップ高後の押し目、上昇トレンド中のストップ安反発、RPS突破）を実行する。
- A株の個人投資家や量的取引愛好者が、取引終了後の自動スクリーニングと通知による効率的な銘柄発掘に活用できる。
- Python 3.10以上が必要で、初回は--backfillで約12分かけて全履歴データを取得し、日常運用はcrontab等で自動実行する。飛書Webhook URLの設定が必要。

---

### 18. [kaifcodec/user-scanner](https://github.com/kaifcodec/user-scanner)

> 🕵️‍♂️ (2-in-1) Email & Username OSINT suite for deep data extraction just from a single Email/Username. Analyzes 465+ actively maintained scan vectors (175+ email / 290+ username) for security research, investigations, and digital footprinting.

- Language: Python
- Stars: 4,679
- Forks: 473
- Stars in 1週間: 1,301
- Category: OSINT調査ツール
- Keywords: `OSINT` `メール調査` `ユーザー名検索` `デジタルフットプリント` `セキュリティ調査` `MCP連携`
- Summary source: README

#### README要約

- メールアドレスとユーザー名からデジタルフットプリントを調査する2-in-1のOSINTスイート。
- 465以上のスキャンベクトル（メール175+、ユーザー名290+）でアカウント登録確認やプロフィールのメタデータを抽出する。
- セキュリティ研究者や調査員が、クロススキャンによるピボット分析やHudson Rockの情報窃取マルウェア侵害ログ照合に利用できる。
- pipやNixでインストール可能で、MCPサーバー経由でAIエージェントと連携できるが、教育目的および許可された調査に限定される。

---

### 19. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)

> AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary

- Language: Python
- Stars: 61,322
- Forks: 5,357
- Stars in 1週間: 1,276
- Category: AIリサーチツール
- Keywords: `マルチプラットフォーム検索` `AIエージェント` `ソーシャルメディア分析` `トレンド調査` `情報収集自動化`
- Summary source: README

#### README要約

- AIエージェントがReddit、X、YouTube、HN、Polymarketなど複数のプラットフォームを横断検索し、過去30日間の情報を収集するスキル。
- 各ソースを並列検索し、エンゲージメント指標（アップボート、いいね、オッズなど）でスコアリングして、AIが根拠のある要約を生成する。
- 会議前の人物調査、トレンド発見、ツール比較、旅行計画など、最新の実際の議論や動向を把握したいユーザー向け。
- Claude Code、Codex、Cursorなど50以上のAgent Skillsホストに対応。Reddit、HN、Polymarket、GitHubは設定不要で即使用可能。

---
