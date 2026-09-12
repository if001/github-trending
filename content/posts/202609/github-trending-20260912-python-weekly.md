+++
title = 'GitHub Trending 1週間レポート (python) - 2026/09/12'
date = 2026-09-12T22:55:25.813Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月12日 22:55:25
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 20
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェント用の「スキル」パッケージと実践的なAIツールがGitHub Trendingを席巻し、開発者は再利用可能なエージェント機能の構築と共有に注力している

- Claude CodeやCodexなどのコーディングエージェント向けの「スキル」やプラグインが多数ランクインし、エージェント機能のパッケージ化と共有が活発化している
- AI生成テキストの品質改善ツール（人間らしい文章への変換、AI特有表現の除去）が複数登場し、AI出力の実用化に向けた関心が高い
- 音声合成、音楽生成、3Dモデリング、CAD/CAMなど、マルチモーダルなAI応用ツールが充実し、専門分野でのAI活用が進んでいる
- ブラウザ自動化、広告運用、学術研究、取引システムなど、実務に直結するAIエージェントアプリケーションが注目を集めている
- AIエンジニアリング学習用のカリキュラムやプロジェクト集が複数ランクインし、実践的なAIスキル習得への需要が高い

### 主なテーマ

- **AIエージェントスキル・プラグインエコシステム**: Claude Code、Codex、ChatGPTなどのコーディングエージェント向けの再利用可能なスキルやプラグインが多数ランクイン。ADHD対応の出力最適化、AI文章の人間化、学術研究支援、広告運用、CAD/CAM操作など多様な用途のスキルがパッケージ化され、npxやCLIで簡単にインストール可能な形で提供されている。（`ayghri/i-have-adhd`、`openai/skills`、`blader/humanizer`、`petergyang/no-ai-slop`、`Imbad0202/academic-research-skills`、`earthtojake/text-to-cad`、`AgriciDaniel/claude-ads`、`jordan-gibbs/hyperresearch`）
- **AI生成コンテンツの品質改善**: AI生成テキストを人間らしく自然な文章に変換したり、AI特有の陳腐な表現パターンを除去するツールが複数登場。Markdownベースのスキルとして動作し、25や20以上のパターンを検出・修正するなど、AI出力の実用化に向けた品質向上への関心が高い。（`blader/humanizer`、`petergyang/no-ai-slop`）
- **マルチモーダルAI応用ツール**: 音声合成（646言語対応のローカルTTS）、音楽生成（シンボリックプランニングとゼロショットカバー）、3Dモデリング（Blender連携）、CAD/CAM（自然言語からCADモデル生成）など、テキスト以外のモダリティを扱うAIツールが充実。専門分野でのAI活用が進んでいる。（`debpalash/VoiceStudio`、`multimodal-art-projection/YuE`、`ahujasid/blender-mcp`、`earthtojake/text-to-cad`）
- **実務向けAIエージェントアプリケーション**: ブラウザ自動化、自律取引システム、広告運用、学術研究支援など、実務に直結するAIエージェントアプリケーションが注目を集めている。マルチエージェントアーキテクチャや複数プラットフォーム対応など、本番運用を意識した設計が特徴。（`browser-use/browser-use`、`The-Swarm-Corporation/AutoHedge`、`AgriciDaniel/claude-ads`、`jordan-gibbs/hyperresearch`、`NousResearch/hermes-agent`）
- **AIエンジニアリング教育・学習リソース**: 523レッスンの無料カリキュラム、64MパラメータLLMのゼロからの学習、実践的なAIプロジェクト集など、AIエンジニアリングを基礎から学ぶためのリソースが複数ランクイン。実践的なコードとドキュメントを含み、初学者から実務者まで幅広く対象としている。（`rohitg00/ai-engineering-from-scratch`、`jingyaogong/minimind`、`Sumanth077/Hands-On-AI-Engineering`）

### 補足的な観察

- 言語分布は全20リポジトリ中19件がPythonで、AIエージェント関連ツールの開発言語としてPythonが圧倒的に優位
- 最もスターを獲得したのはayghri/i-have-adhd（13,164スター）で、ADHDフレンドリーなコーディングエージェント出力というニッチだが実用的な課題解決が大きな支持を集めた
- microsoft/markitdown（4,650スター）やdebpalash/VoiceStudio（5,465スター）など、既存の大手企業や実績あるプロジェクトも引き続き人気が高い
- openai/skillsは非推奨となりOpenAI Pluginsリポジトリへの移行が案内されており、AIエージェントスキルの標準化とエコシステムの変化が進行中であることが示唆される

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 20 |

## Repository一覧

### 1. [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)

> A skill to stop your coding agent from burying the answer. ADHD-friendly output.

- Language: Python
- Stars: 43,386
- Forks: 2,467
- Stars in 1週間: 13,164
- Category: 開発者ツール
- Keywords: `ADHD` `コーディングエージェント` `Claude Code` `プロンプト` `出力最適化` `プラグイン`
- Summary source: README

#### README要約

- コーディングエージェントの出力をADHDフレンドリーに変えるスキル/プラグイン。
- 回答を先頭に出し、手順を番号付きで示し、余計な前置きや締めを排除する10のルールを適用する。
- Claude Codeなどのコーディングアシスタントを使う開発者で、簡潔で行動指向の出力を求める人向け。
- CLIプロンプトに貼り付けるかINSTALL.mdを参照して導入。カスタマイズはフォークしてSKILL.mdを編集する。

---

### 2. [openai/skills](https://github.com/openai/skills)

> Skills Catalog for Codex

- Language: Python
- Stars: 27,009
- Forks: 1,806
- Stars in 1週間: 1,532
- Category: AIエージェントスキルカタログ
- Keywords: `Codex` `Agent Skills` `非推奨` `プラグイン` `スキルインストーラー` `OpenAI`
- Summary source: README

#### README要約

- このリポジトリは非推奨となり、現在のCodexスキルとプラグインの例はOpenAI Pluginsリポジトリを参照する必要がある。
- AIエージェントが特定のタスクを実行するために発見・使用できる指示、スクリプト、リソースのフォルダであるAgent Skillsをカタログ化している。
- チームや個人が繰り返し可能な方法で特定のタスクを完了するために使用できる機能をパッケージ化することを目的としている。
- システムスキルは自動インストールされ、キュレート済みや実験的スキルはCodex内の$skill-installerコマンドでインストール可能。

---

### 3. [blader/humanizer](https://github.com/blader/humanizer)

> Agent skill that removes signs of AI-generated writing from text

- Language: Python
- Stars: 47,310
- Forks: 3,850
- Stars in 1週間: 4,649
- Category: AI文章改善ツール
- Keywords: `AI文章検出` `文章リライト` `エージェントスキル` `Claude` `Markdown` `自然言語処理`
- Summary source: README

#### README要約

- AIが生成したような文章を、内容を変えずに人間が書いたような自然な文章に書き換えるエージェントスキル。
- Markdownベースのスキルとして動作し、25のパターン（AI特有の表現、リズム、誇張、フォーマットなど）を検出して修正する。
- Claude CodeやClaude DesktopなどのAIエージェントユーザーが、AI生成テキストをより自然な人間らしい文章に変換したい場合に使用する。
- Skills CLI（npx skills add）またはClaude Codeのプラグインとしてインストール可能。事実を捏造せず、不足している情報は質問する設計。

---

### 4. [microsoft/markitdown](https://github.com/microsoft/markitdown)

> Python tool for converting files and office documents to Markdown.

- Language: Python
- Stars: 183,216
- Forks: 13,470
- Stars in 1週間: 4,650
- Category: ドキュメント変換ツール
- Keywords: `Markdown変換` `PDF` `Office文書` `LLM` `Python` `CLI`
- Summary source: README

#### README要約

- Microsoft製の軽量Pythonユーティリティで、PDF・Office文書・画像・音声などをMarkdownに変換する。
- 見出し・リスト・表・リンクなどの文書構造を保持し、CLIとPython APIの両方で利用できる。
- LLMやテキスト分析パイプライン向けの前処理ツールとして設計されており、人間向けの高忠実度変換には最適でない場合がある。
- Python 3.10以上が必要で、pipでインストール可能。信頼できない入力はサニタイズし、必要最小限のconvert関数を使うことが推奨される。

---

### 5. [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)

> A library of agent skills for CAD, CAE and CAM

- Language: Python
- Stars: 15,446
- Forks: 1,594
- Stars in 1週間: 1,071
- Category: CAD/CAMエージェントスキルライブラリ
- Keywords: `CAD` `CAE` `CAM` `エージェントスキル` `URDF` `3Dプリント`
- Summary source: README

#### README要約

- text-to-cadは、CAD、CAE、CAM分野のエージェントスキルを集めたPythonライブラリです。
- 自然言語や画像からCADモデルを生成・編集し、STEP、STL、3MF、GLB形式で出力できるほか、URDF、SRDF、SDF、DXF、G-codeなどの生成や検査、スライス、部品調達、3Dプリント実行まで幅広いワークフローを提供します。
- ローカルプロジェクトファイルからCADやロボット記述ファイルを扱うエージェントや開発者、設計者、製造業者、ロボットエンジニアを対象としています。
- npx skills add earthtojake/text-to-cadでインストールでき、Codex、Claude Code、Grok Buildのプラグインとしても利用可能です。更新時は同じaddコマンドを使用し、不要なスキルはremoveで削除します。

---

### 6. [petergyang/no-ai-slop](https://github.com/petergyang/no-ai-slop)

> Removes 20+ patterns of AI slop from any piece of writing.

- Language: Python
- Stars: 8,648
- Forks: 648
- Stars in 1週間: 1,255
- Category: AI文章編集スキル
- Keywords: `AIスロップ除去` `文章編集` `ChatGPTプラグイン` `Claude Code` `文体保持` `MITライセンス`
- Summary source: README

#### README要約

- 文章から20種類以上のAI特有の陳腐な表現パターンを除去し、個人の文体を保つAIスキル。
- 二項対比や前置きフレーズ、曖昧な根拠などのパターンを検出・修正し、変更箇所を一覧表示する。
- ChatGPTやClaude Codeなどのコーディングエージェントを使うライターや編集者向け。
- npxコマンドまたはエージェントへの指示文でグローバルインストールでき、MITライセンスで公開。

---

### 7. [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills)

> Academic Research Skills for Claude Code: research → write → review → revise → finalize

- Language: Python
- Stars: 47,770
- Forks: 3,725
- Stars in 1週間: 1,434
- Category: 学術研究支援ツール
- Keywords: `Claude Code` `学術研究` `論文執筆` `引用管理` `査読支援` `人間協働`
- Summary source: README

#### README要約

- Claude Code向けの学術研究スキル群で、調査から執筆、査読、改訂、最終化までの全工程を支援する。
- 参照収集、引用整形、データ検証、論理整合性チェックなどの作業を自動化し、人間の研究者が本質的な思考に集中できるよう支援する。
- 学術論文を執筆する研究者や学生を対象とし、AIによる完全自動化ではなく人間主導の協働を前提としている。
- Claude Code CLIやVS Code、JetBrains環境でプラグインとして導入可能で、v3.7.0以降が推奨される。

---

### 8. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

> The agent that grows with you

- Language: Python
- Stars: 244,891
- Forks: 50,813
- Stars in 1週間: 3,481
- Category: AIエージェント
- Keywords: `自己改善型AI` `マルチプラットフォーム` `スキル学習` `オープンソース` `Nous Research` `サーバーレス対応`
- Summary source: README

#### README要約

- Nous Researchが開発した自己改善型AIエージェントで、経験からスキルを作成し、使用しながら改善し、セッションをまたいでユーザー理解を深める学習ループを内蔵している。
- Telegram、Discord、Slack、WhatsApp、Signal、CLIからアクセス可能で、複数のLLMプロバイダーに対応し、7つのターミナルバックエンド（ローカル、Docker、SSH、サーバーレス等）で動作する。
- 個人のVPSからGPUクラスタまで幅広い環境で利用でき、定期実行の自動化、並列サブエージェント生成、研究用のトラジェクトリ生成など、開発者や研究者向けの高度な用途に対応する。
- curlまたはPowerShellのワンライナーでインストール可能で、MITライセンスの下で提供され、Windows、macOS、Linux、WSL2、Termuxをサポートしている。

---

### 9. [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)

> Learn it. Build it. Ship it for others.

- Language: Python
- Stars: 54,362
- Forks: 9,491
- Stars in 1週間: 1,918
- Category: 教育カリキュラム
- Keywords: `AIエンジニアリング` `機械学習` `LLM` `エージェント` `MCP` `実践学習`
- Summary source: README

#### README要約

- AIエンジニアリングを基礎から学ぶための523レッスン・20フェーズからなる無料のオープンソースカリキュラム。
- Python、TypeScript、Rust、Juliaで実践的なコードを書き、プロンプト、スキル、エージェント、MCPサーバーなどの再利用可能な成果物を作成する。
- AIツールを使いたい学生やエンジニアを対象とし、数学基礎からLLMアプリケーション開発、エージェント構築まで段階的に学習できる。
- GitHubからクローンしてPython3でレッスンを実行し、Node.jsとnpxでAIチューターを追加可能。MITライセンスで自由に利用・改変できる。

---

### 10. [github/spec-kit](https://github.com/github/spec-kit)

> 💫 Toolkit to help you get started with Spec-Driven Development

- Language: Python
- Stars: 136,048
- Forks: 12,222
- Stars in 1週間: 2,468
- Category: 開発ツール
- Keywords: `仕様駆動開発` `AIコーディングエージェント` `Specify CLI` `スラッシュコマンド` `拡張機能` `MITライセンス`
- Summary source: README

#### README要約

- Spec Kitは、AIコーディングエージェントと共に仕様駆動開発（Spec-Driven Development）を実践するためのオープンソースツールキットです。
- Specify CLIでプロジェクトを初期化し、/speckit-constitution、/speckit-specify、/speckit-plan、/speckit-tasks、/speckit-implement、/speckit-convergeなどのスラッシュコマンドで仕様から実装までを段階的に進めます。
- 任意のAIコーディングエージェントを使う開発者や組織を対象とし、バグ修正用のassess→fix→testワークフローやアイデア評価用のintake→research→define→shape→decideワークフローなどの拡張機能も提供します。
- 導入にはuv（またはpipx）、Python 3.11以上、Gitが必要で、uv tool install specify-cliでインストール後、specify initでプロジェクトを初期化します。MITライセンスです。

---

### 11. [browser-use/browser-use](https://github.com/browser-use/browser-use)

> Agents that use the browser.

- Language: Python
- Stars: 114,373
- Forks: 12,567
- Stars in 1週間: 2,023
- Category: ブラウザ自動化AIエージェント
- Keywords: `ブラウザ自動化` `AIエージェント` `Python` `Webスクレイピング` `LLM` `MITライセンス`
- Summary source: README

#### README要約

- AIエージェントがブラウザを人間のように操作し、Webタスクを自動化するオープンソースライブラリ。
- フルホスト型クラウド、CLI、Pythonライブラリの3つの利用形態を提供し、ローカルまたはクラウドブラウザで動作する。
- 独自アプリケーションにブラウザ自動化を組み込みたい開発者や、既存のAIエージェントにブラウザ操作機能を追加したいユーザー向け。
- Python 3.11以上が必要で、uvでインストール可能。MITライセンスだが、モデル推論やクラウドブラウザの利用は別途課金される。

---

### 12. [The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge)

> Build your autonomous hedge fund in minutes. AutoHedge harnesses the power of swarm intelligence and AI agents to automate market analysis, risk management, and trade execution.

- Language: Python
- Stars: 6,028
- Forks: 870
- Stars in 1週間: 1,677
- Category: AI自動取引システム
- Keywords: `自律取引` `マルチエージェント` `スワームインテリジェンス` `リスク管理` `Solana` `暗号資産`
- Summary source: README

#### README要約

- AutoHedgeは、スワームインテリジェンスと専門AIエージェントを活用し、市場分析からリスク管理、取引執行までを自動化する自律型ヘッジファンドシステムです。
- Director、Quant、Risk Management、Executionの各専門エージェントが連携するマルチエージェントアーキテクチャを採用し、リアルタイム市場分析とリスクファースト設計による安全な取引を実現します。
- 機関投資家や個人トレーダー向けに設計され、現在はSolanaでの完全自律取引に対応しており、Coinbaseやその他の取引所への拡張が計画されています。
- pipでインストール可能で、Jupiter APIキー、OpenAI/Anthropic APIキー、ウォレット秘密鍵などの環境変数設定が必要です。MITライセンスで提供されています。

---

### 13. [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE)

> YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing.

- Language: Python
- Stars: 7,260
- Forks: 819
- Stars in 1週間: 596
- Category: 音楽生成AI
- Keywords: `音楽生成` `シンボリックプランニング` `ゼロショットカバー` `エージェント編集` `Mixture-of-Transformers` `VAE`
- Summary source: README

#### README要約

- 歌詞とスタイルプロンプトからメロディとコードの計画を立て、ボーカルと伴奏付きの完全な楽曲を生成する音楽生成モデル。
- AR–NAR Mixture-of-Transformersバックボーンでスコアとセマンティックトークンを自己回帰的に予測し、フローマッチングで音響潜在変数を生成、VAEでステレオ音声にデコードする。
- ゼロショットカバー、エージェントによる対話的編集、シンボリックプランニングによるホワイトボックスな音楽生成を必要とする開発者や音楽制作者向け。
- Linux・Python 3.12・BF16対応のNVIDIA GPU（24GB VRAM）が必要で、モデルはHugging Faceから初回使用時にダウンロードされる。

---

### 14. [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

> VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.

- Language: Python
- Stars: 24,250
- Forks: 2,974
- Stars in 1週間: 5,465
- Category: 音声合成・TTS
- Keywords: `音声クローン` `TTS` `動画ダビング` `ローカル実行` `オープンソース` `多言語対応`
- Summary source: README

#### README要約

- VoiceStudioは、音声クローン、音声デザイン、動画ダビング、ディクテーション、文字起こし、オーディオブック作成をローカル環境で行えるオープンソースの音声合成アプリです。
- 16種類のTTSエンジンと11種類のASRエンジンを搭載し、646言語のカタログに対応。macOS、Windows、Linux、Dockerで動作し、CUDAやApple Silicon MPS/MLXなどのGPUアクセラレーションをサポートします。
- 音声制作者、動画クリエイター、オーディオブック制作者など、プライバシーを重視しながら高品質な音声コンテンツを作成したいユーザーに適しています。
- アクティブベータ版のため、安定した作業には最新リリース版の使用が推奨されます。初回起動時にPython環境とデフォルトモデルがダウンロードされ、ローカルワークフローではアカウントやAPIキーは不要です。

---

### 15. [bikini/exploitarium](https://github.com/bikini/exploitarium)

> A single archive of public exploit PoCs and vulnerability research writeups. At the time I post these, none have been reported. Feel free to report them yourself and take credit for the CVE if handed out lulz. Please do not abuse these. I do this so to allure people into the field, and I've always found this is the most efficient way.

- Language: Python
- Stars: 5,097
- Forks: 1,311
- Stars in 1週間: 707
- Category: セキュリティ研究
- Keywords: `脆弱性` `PoC` `エクスプロイト` `セキュリティ研究` `オープンディスクロージャー` `Python`
- Summary source: README

#### README要約

- 公開済みの脆弱性PoCとリサーチ資料を集約したアーカイブリポジトリ。
- 各フォルダに独立したPoCや脆弱性研究が含まれ、元のREADMEとファイルが保持されている。
- セキュリティ研究者や学習者を対象とし、脆弱性研究の共有と教育を目的としている。
- 悪用は禁止されており、公開時点では未報告の脆弱性も含まれるため注意が必要。

---

### 16. [jordan-gibbs/hyperresearch](https://github.com/jordan-gibbs/hyperresearch)

> Agent-driven research knowledge base. Agents collect, search, and synthesize web research into a persistent, searchable wiki.

- Language: Python
- Stars: 3,018
- Forks: 285
- Stars in 1週間: 1,059
- Category: AI調査エージェント
- Keywords: `深い調査` `Claude Code` `引用検証` `学術検索` `知識ベース` `マルチエージェント`
- Summary source: README

#### README要約

- Claude Codeを深い調査エージェントに変えるツールで、1つのプロンプトから出典を完全に記録した監査済みレポートを生成する。
- 16段階のパイプラインで調査を実行し、引用検証、矛盾分析、4つの批判的レビュー、外科的編集のみ許可する修正機能を備える。
- 学術研究者やアナリスト向けで、250以上のソース収集、8つの学術DB統合検索、永続的な検索可能な知識ベースを提供する。
- Python 3.11以上とClaude Codeが必要で、pip install後にhyperresearch installで導入し、/hyperresearchコマンドで起動する。

---

### 17. [AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads)

> Claude-first paid-media operations skill for Claude Code across 12 ad platforms (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, Apple, Amazon, Reddit, Pinterest, Snapchat, X): source-grounded audits, deterministic scoring, versioned JSON reports, and capability-gated account changes.

- Language: Python
- Stars: 9,219
- Forks: 1,366
- Stars in 1週間: 480
- Category: 広告運用自動化
- Keywords: `Claude Code` `有料広告` `監査` `マルチプラットフォーム` `スコアリング` `自動化`
- Summary source: README

#### README要約

- Claude Code向けの有料広告運用スキルで、12の広告プラットフォーム（Google、Meta、YouTube、LinkedIn、TikTok、Microsoft、Apple、Amazon、Reddit、Pinterest、Snapchat、X）に対応する。
- ソースに基づく監査、決定論的スコアリング、バージョン管理されたJSONレポートを提供し、デフォルトでは読み取り専用でアカウント変更は承認・検証・ロールバックのゲートを通過した場合のみ有効になる。
- 広告代理店、コンサルタント、社内パフォーマンスチームを対象とし、監査、キャンペーン計画、クリエイティブ作成、モニタリング、レポート生成などの用途に使用する。
- Claude Codeのプラグインとしてインストール可能で、Codex、Gemini、Cursorなどの互換ホストでも動作し、MITライセンスで公開されている。

---

### 18. [jingyaogong/minimind](https://github.com/jingyaogong/minimind)

> 🧠 Train a 64M-parameter LLM from scratch in just 2h!

- Language: Python
- Stars: 60,827
- Forks: 7,896
- Stars in 1週間: 2,290
- Category: LLM学習フレームワーク
- Keywords: `MiniMind` `LLM` `PyTorch` `MoE` `SFT` `RLHF`
- Summary source: README

#### README要約

- MiniMindは、約64Mパラメータの超小型言語モデルをゼロから学習できるオープンソースプロジェクトです。
- MoE、データ前処理、事前学習、SFT、LoRA、DPO、PPO/GRPO/CISPO、Tool Use、蒸留までの学習工程をPyTorchで実装しています。
- LLMの内部構造や学習手順を低コストで理解したい初学者、実務で小規模モデルを試したい開発者に向いています。
- Apache 2.0で公開され、単一GPU環境でも再現しやすい一方、READMEの「2時間」「3元」は特定条件でのSFT 1 epochの目安です。

---

### 19. [Sumanth077/Hands-On-AI-Engineering](https://github.com/Sumanth077/Hands-On-AI-Engineering)

> A curated collection of practical AI projects implementing OCR systems, RAG, AI agents, and other AI use cases.

- Language: Python
- Stars: 3,476
- Forks: 867
- Stars in 1週間: 280
- Category: AIプロジェクト集
- Keywords: `AIエージェント` `RAG` `OCR` `マルチモーダル` `実践的` `本番運用`
- Summary source: README

#### README要約

- 言語モデル、マルチモーダル、OCR、RAGパイプライン、AIエージェントなど、実践的で本番運用可能なAIプロジェクトを集めたコレクションです。
- 各プロジェクトは完全なコード、セットアップ手順、ドキュメントを含み、OpenAI、Anthropic、Google、オープンソースモデルなど複数のプロバイダーに対応しています。
- AIエンジニアリングを学びたい開発者や、実際のAIアプリケーションを構築したい実務者を対象としています。
- MITライセンスで提供され、各プロジェクトは独立したフォルダに配置され、requirements.txtまたはpyproject.tomlが含まれています。

---

### 20. [ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp)

> Community plugin to control Blender 3D with any LLM of your choice

- Language: Python
- Stars: 28,345
- Forks: 2,615
- Stars in 1週間: 1,411
- Category: 3DモデリングAI連携ツール
- Keywords: `Blender` `MCP` `LLM` `3Dモデリング` `Python` `AIアシスタント`
- Summary source: README

#### README要約

- Blenderを任意のLLMに接続し、AIによるプロンプト支援で3Dモデリング・シーン作成・操作を可能にするサードパーティ製MCP統合ツール。
- ソケットベースの双方向通信でオブジェクトの作成・変更・削除、マテリアル制御、シーン情報取得、Blender内での任意Pythonコード実行を実現する。
- Poly Haven、Sketchfab、Poly Pizzaのアセット取得やHyper3D Rodin・Hunyuan3DによるAI生成3Dモデルにも対応し、Claude DesktopやCursorなど複数のMCPクライアントから利用できる。
- 導入にはBlender 3.0以降・Python 3.10以降・uvが必要で、uvx経由でサーバーを起動しBlenderアドオンを有効化する。任意コード実行機能は危険を伴うため使用前に作業を保存すること。

---
