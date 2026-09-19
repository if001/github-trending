+++
title = 'GitHub Trending 1週間レポート (python) - 2026/09/19'
date = 2026-09-19T22:44:56.314Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月19日 22:44:56
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 17
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェント向けのスキル・プラグインがトレンドを席巻し、特にClaude関連の拡張機能と文章品質向上ツールが集中して注目を集めている

- 17件中9件がAIエージェント関連のスキル、プラグイン、または拡張機能であり、エージェントエコシステムの拡大が顕著
- Claudeに特化したスキル・プラグインが5件（knowledge-work-plugins、i-have-adhd、humanizer、Claude-Red、no-ai-slop）と最多で、Claudeエコシステムの活発さが際立つ
- AI生成文章の品質向上・検出回避ツールが3件（humanizer、no-ai-slop、i-have-adhd）ランクインし、AI出力の人間化・最適化への関心が高い
- 音声・音楽・動画などのマルチメディア生成AIツールが3件（VoiceStudio、YuE、OpenMontage）登場し、創作分野でのAI活用が進展
- セキュリティ関連が2件（Claude-Red、SkillSpector）あり、攻撃的セキュリティとスキルスキャナーという対照的なアプローチが共存

### 主なテーマ

- **Claudeエージェント向けスキル・プラグイン**: Claude CodeやClaude Cowork向けのスキル・プラグインが5件ランクイン。職種別プラグイン集（knowledge-work-plugins）、出力最適化（i-have-adhd）、文章人間化（humanizer）、攻撃的セキュリティ（Claude-Red）、AIスロップ除去（no-ai-slop）と多様な用途で、Claudeエコシステムの拡張が活発（`anthropics/knowledge-work-plugins`、`ayghri/i-have-adhd`、`blader/humanizer`、`SnailSploit/Claude-Red`、`petergyang/no-ai-slop`）
- **AI生成文章の品質向上・検出回避**: AI生成テキストの人間化（humanizer、3,118スター）、AIスロップ除去（no-ai-slop、2,189スター）、ADHDフレンドリーな出力（i-have-adhd、7,869スター）が高い注目を集め、AI出力の品質と自然さへの需要が顕在化（`blader/humanizer`、`petergyang/no-ai-slop`、`ayghri/i-have-adhd`）
- **マルチメディア生成AI**: 音声クローン（VoiceStudio、10,449スターで最高）、音楽生成（YuE、2,940スター）、動画制作（OpenMontage、2,863スター）の3分野でローカル実行・オープンソースのツールが登場し、創作活動でのAI活用が多角化（`debpalash/VoiceStudio`、`multimodal-art-projection/YuE`、`calesthio/OpenMontage`）
- **AIエージェントの機能拡張・統合**: インターネットアクセス付与（Agent-Reach、3,766スター）、長期メモリとワークフロー（oh-my-hermes、1,109スター）、ファイル変換（markitdown、2,841スター）など、エージェントの能力を拡張するツールが充実（`Panniantong/Agent-Reach`、`rlaope/oh-my-hermes`、`microsoft/markitdown`）
- **セキュリティとリスク管理**: 攻撃的セキュリティスキル集（Claude-Red、2,995スター）とAIスキルの脆弱性スキャナー（SkillSpector、814スター）が共存し、AIエージェントのセキュリティリスクへの意識が攻撃・防御両面で高まっている（`SnailSploit/Claude-Red`、`NVIDIA/SkillSpector`）

### 補足的な観察

- 言語分布は全17件がPythonで、AIエージェント関連ツールの実装言語としてPythonが事実上の標準となっている
- スター数の最高はVoiceStudio（10,449スター）で、ローカル実行可能な音声クローンへの需要が突出している
- AIエージェント関連が全体の53%（9/17件）を占め、従来のライブラリやフレームワークよりもエージェント拡張が注目されている
- オープンソースの学習リソース（ai-agent-book、2,727スター）やキュレーションリスト（open-source-games、1,281スター）もランクインし、知識共有への関心も継続

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 17 |

## Repository一覧

### 1. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)

> Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork

- Language: Python
- Stars: 25,110
- Forks: 2,992
- Stars in 1週間: 776
- Category: AIプラグイン集
- Keywords: `Claude Cowork` `プラグイン` `ナレッジワーク` `MCP` `スラッシュコマンド` `職種別`
- Summary source: README

#### README要約

- Claudeを特定の職種・チーム・企業の専門家に変えるプラグイン集で、Claude Cowork向けに構築されClaude Codeとも互換性がある。
- 各プラグインはスキル、コネクタ、スラッシュコマンド、サブエージェントをバンドルし、マークダウンとJSONのみのファイルベース構成でコードやビルド不要。
- 営業、カスタマーサポート、プロダクト管理、マーケティング、法務、財務、データ分析など11の職種別プラグインをオープンソースとして提供。
- claude.com/pluginsからインストール可能で、.mcp.jsonの編集やスキルファイルへの企業固有のコンテキスト追加によるカスタマイズが推奨されている。

---

### 2. [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)

> A skill to stop your coding agent from burying the answer. ADHD-friendly output.

- Language: Python
- Stars: 48,662
- Forks: 2,829
- Stars in 1週間: 7,869
- Category: AIアシスタント拡張
- Keywords: `ADHD` `コーディングエージェント` `出力最適化` `スキル` `Claude` `プロンプト`
- Summary source: README

#### README要約

- コーディングエージェントの出力をADHDフレンドリーに変えるスキルで、答えを埋もれさせず行動を最初に提示する。
- 10個のルールで出力を制御し、次のアクションを先頭に、複数ステップは番号付き、前置きや締めの言葉を排除する。
- ADHDの診断の有無に関わらず、簡潔で実行可能な回答を求める開発者やコーディングアシスタント利用者が対象。
- CLIプロンプトにコマンドを貼り付けてインストールし、カスタマイズする場合はSKILL.mdを編集してフォーク版に差し替える。

---

### 3. [blader/humanizer](https://github.com/blader/humanizer)

> Agent skill that removes signs of AI-generated writing from text

- Language: Python
- Stars: 50,236
- Forks: 4,056
- Stars in 1週間: 3,118
- Category: AI文章校正ツール
- Keywords: `AI文章検出` `リライト` `エージェントスキル` `Claude Code` `自然言語処理` `文章校正`
- Summary source: README

#### README要約

- AIが生成したような文章を、内容を変えずに人間が書いたように書き換えるエージェントスキル。
- 25のパターンでAI特有の表現を検出し、事実を捏造せずにリライトを行う。
- AI文章の自然化を求めるライターや開発者向けで、Claude Codeなどのスキル対応エージェントで利用可能。
- Skills CLIやClaudeプラグインで導入でき、音声マッチング用のサンプル文章も指定できる。

---

### 4. [home-assistant/core](https://github.com/home-assistant/core)

> 🏡 Open source home automation that puts local control and privacy first.

- Language: Python
- Stars: 90,813
- Forks: 38,709
- Stars in 1週間: 357
- Category: ホームオートメーション
- Keywords: `ホームオートメーション` `ローカル制御` `プライバシー` `オープンソース` `Raspberry Pi` `モジュラー設計`
- Summary source: README

#### README要約

- ローカル制御とプライバシーを重視したオープンソースのホームオートメーションシステムです。
- モジュラー方式で構築されており、他のデバイスやアクションのサポートを容易に実装できます。
- Raspberry Piやローカルサーバーでの実行に最適で、世界中のDIY愛好家コミュニティによって支えられています。
- 公式サイトでデモ、インストール手順、チュートリアル、ドキュメントが提供されています。

---

### 5. [microsoft/markitdown](https://github.com/microsoft/markitdown)

> Python tool for converting files and office documents to Markdown.

- Language: Python
- Stars: 185,648
- Forks: 13,671
- Stars in 1週間: 2,841
- Category: ファイル変換ツール
- Keywords: `Markdown変換` `Python` `LLM` `Office文書` `PDF` `テキスト分析`
- Summary source: README

#### README要約

- Microsoft製の軽量Pythonユーティリティで、様々なファイルをMarkdownに変換し、LLMやテキスト分析パイプラインで利用可能にする。
- PDF、Office文書、画像、音声、HTMLなど多様な形式をサポートし、見出しや表などの文書構造を保持して変換する。
- LLMやテキスト分析ツールの開発者向けで、人間向けの高精度変換よりも機械可読なMarkdown生成を重視している。
- Python 3.10以上が必要で、pipでインストール可能。信頼できない環境では入力をサニタイズし、必要最小限のconvert関数を使用する必要がある。

---

### 6. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)

> Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.

- Language: Python
- Stars: 83,441
- Forks: 7,312
- Stars in 1週間: 3,766
- Category: AIエージェントツール
- Keywords: `AIエージェント` `CLI` `マルチプラットフォーム` `Webスクレイピング` `API不要` `オープンソース`
- Summary source: README

#### README要約

- AIエージェントにインターネットアクセス能力を付与するCLIツールで、Twitter、Reddit、YouTube、GitHub、Bilibili、小紅書などの読み取り・検索をAPI料金なしで実現する。
- 各プラットフォームに「優先＋代替」の複数バックエンドを持ち、agent-reach doctorコマンドで疎通診断と修復方法を提示する能力層として動作する。
- Claude Code、OpenClaw、Cursor、Windsurfなどコマンド実行可能なあらゆるAIエージェントが対象で、インストールはAgentに一文を送るだけで完了する。
- Python 3.10以上が必要で、Cookieはローカル保存のみ、サーバーデプロイ時のみプロキシ（月$1程度）が必要、OpenClawユーザーは事前にexec権限の有効化が必要。

---

### 7. [huggingface/transformers](https://github.com/huggingface/transformers)

> 🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and training.

- Language: Python
- Stars: 166,386
- Forks: 34,629
- Stars in 1週間: 1,297
- Category: 機械学習フレームワーク
- Keywords: `Transformers` `Hugging Face` `事前学習モデル` `マルチモーダル` `PyTorch` `推論`
- Summary source: README

#### README要約

- テキスト、視覚、音声、マルチモーダルモデルの推論と学習のための最先端機械学習モデル定義フレームワークです。
- モデル定義を一元化し、PyTorch/JAX/TF2.0などの主要な学習フレームワークやvLLMなどの推論エンジンとの互換性を確保します。
- 研究者、エンジニア、開発者が100万以上の事前学習済みチェックポイントを低い参入障壁で利用し、計算コストを削減できます。
- Python 3.10以上とPyTorch 2.5以上が必要で、pipまたはuvでインストール可能です。ソースからのインストールは最新機能を利用できますが安定性に注意が必要です。

---

### 8. [petergyang/no-ai-slop](https://github.com/petergyang/no-ai-slop)

> Removes 20+ patterns of AI slop from any piece of writing.

- Language: Python
- Stars: 10,674
- Forks: 738
- Stars in 1週間: 2,189
- Category: AI文章編集スキル
- Keywords: `AIスロップ除去` `文章編集` `ChatGPTプラグイン` `Claude Code` `文体保持` `MITライセンス`
- Summary source: README

#### README要約

- 文章から20種類以上のAI特有の陳腐な表現パターン（AIスロップ）を除去し、個人の文体を保つためのスキルです。
- 二項対比や前置きフレーズ、曖昧な根拠などのパターンを検出・修正し、能動態や具体性などの基本もチェックします。
- ChatGPTやClaude Code、Codexなどのコーディングエージェントを使うライターや開発者が、文章編集やスロップ検出に利用します。
- エージェントへの指示文貼り付けかnpxコマンドでグローバルにインストールでき、ChatGPTプラグインとしても提供され、ライセンスはMITです。

---

### 9. [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)

> 《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF 与按章配套代码

- Language: Python
- Stars: 48,669
- Forks: 5,451
- Stars in 1週間: 2,727
- Category: 技術書籍・学習リソース
- Keywords: `AI Agent` `LLM` `オープンソース書籍` `Python` `RAG` `マルチエージェント`
- Summary source: README

#### README要約

- 李博杰の著書『深入理解 AI Agent：設計原理とエンジニアリング実践』のオープンソース公式リポジトリで、書籍全文、コンパイル済みPDF、章別の付属コードを提供する。
- 「Agent = LLM + コンテキスト + ツール」という核心公式を軸に全10章で原理から実践までを解説し、109の付属実験と15言語対応のPDF/EPUBを収録する。
- AI Agentの設計と開発を学ぶエンジニアや研究者を対象とし、オンライン閲覧やオフラインでの学習、実際に手を動かしての実験に利用できる。
- 実験の実行にはPython 3.11〜3.13が必要で、uvまたはpipで章ごとに依存関係をインストールし、APIキーは.envファイル等で設定する。

---

### 10. [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red)

> claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.

- Language: Python
- Stars: 6,316
- Forks: 814
- Stars in 1週間: 2,995
- Category: セキュリティツール
- Keywords: `攻撃的セキュリティ` `レッドチーム` `Claudeスキル` `ペネトレーションテスト` `脆弱性診断` `エクスプロイト開発`
- Summary source: README

#### README要約

- Claude Skillsシステム向けの攻撃的セキュリティスキル集で、SQLiからシェルコード、EDR回避、エクスプロイト開発まで幅広い攻撃手法をカバーする。
- 各スキルは構造化されたSKILL.mdファイルとして提供され、特定の攻撃対象領域に関する専門家レベルの方法論をClaudeに付与する仕組み。
- 認可されたレッドチーム活動、バグバウンティ、セキュリティ研究、CTF準備、オペレーター訓練などを対象としたセキュリティ専門家向けツール。
- git cloneでClaudeスキルディレクトリに配置するか、Claude CodeやClaude.aiのシステムプロンプトに手動で組み込んで使用する。

---

### 11. [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE)

> YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing.

- Language: Python
- Stars: 9,798
- Forks: 1,083
- Stars in 1週間: 2,940
- Category: 音楽生成AI
- Keywords: `音楽生成` `シンボリック計画` `ゼロショットカバー` `エージェント編集` `Mixture-of-Transformers` `Python`
- Summary source: README

#### README要約

- 歌詞とスタイルプロンプトからメロディとコードの計画を立て、ボーカルと伴奏付きの完全な楽曲を生成する音楽生成モデル。
- AR-NAR Mixture-of-Transformersバックボーンでスコアとセマンティックトークンを自己回帰的に予測し、フローマッチングで音響潜在変数を生成してVAEでステレオ音声にデコードする。
- ゼロショットカバー、エージェントによる対話的な楽曲編集、シンボリック計画によるホワイトボックスな音楽生成を必要とする開発者や音楽制作者向け。
- Linux・Python 3.12・BF16対応のNVIDIA GPU（24GB VRAM）が必要で、初回使用時にHugging Faceからモデルファイルがダウンロードされる。

---

### 12. [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

> VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.

- Language: Python
- Stars: 33,182
- Forks: 3,922
- Stars in 1週間: 10,449
- Category: 音声合成・クローンツール
- Keywords: `音声クローン` `ローカル実行` `オープンソース` `音声合成` `ダビング` `AGPL-3.0`
- Summary source: README

#### README要約

- VoiceStudioは、ローカル環境で動作するオープンソースの音声クローンおよびワークフローエンジンです。
- 音声クローン、音声デザイン、動画ダビング、ディクテーション、文字起こし、オーディオブック作成などの機能を提供します。
- ローカルAPIやMCPを通じてエージェントと連携でき、プライバシーを重視するユーザーや開発者に適しています。
- Electronが主要なデスクトップアプリであり、AGPL-3.0ライセンスで提供されます。モデルには独自のライセンスがあるため、商用利用前に確認が必要です。

---

### 13. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)

> Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.

- Language: Python
- Stars: 17,843
- Forks: 1,536
- Stars in 1週間: 814
- Category: セキュリティスキャナー
- Keywords: `AIエージェントスキル` `脆弱性検出` `プロンプトインジェクション` `静的解析` `LLM意味解析` `SARIF`
- Summary source: README

#### README要約

- AIエージェントスキル（Claude Code、Codex CLI、Gemini CLIなど）をインストール前にスキャンし、脆弱性や悪意のあるパターン、セキュリティリスクを検出するPython製セキュリティスキャナー。
- 17カテゴリ71種の脆弱性パターン（プロンプトインジェクション、データ流出、権限昇格、サプライチェーンなど）を静的解析とオプションのLLM意味解析の2段階で検査し、OSV.devによるCVE照合や0〜100のリスクスコアリング、SARIF/JSON/Markdown出力を提供する。
- エージェントスキルを導入する開発者やCI/CDパイプラインを対象とし、Gitリポジトリ、URL、zip、ディレクトリ、単一ファイルのスキャンやベースラインによる既知検出の抑制、バッチスキャンに対応する。
- uvやpip、Dockerで導入可能。LLM解析にはAPIキーが必要で、SC4チェックは依存関係情報をOSV.devへ送信する。静的解析のみのため動作時の振る舞いや画像・暗号化コンテンツは解析できず、非英語コンテンツの検出精度に限界がある。

---

### 14. [bobeff/open-source-games](https://github.com/bobeff/open-source-games)

> A list of open source games.

- Language: Python
- Stars: 15,190
- Forks: 1,261
- Stars in 1週間: 1,281
- Category: ゲームリスト
- Keywords: `オープンソース` `ゲーム` `キュレーションリスト` `リメイク` `ソースコード` `ジャンル別`
- Summary source: README

#### README要約

- オープンソースのビデオゲームおよび商業ゲームのオープンソースリメイクを集めたキュレーションリストです。
- アクション、アドベンチャー、シティビルド、FPS、ストラテジーなど18のジャンル別に分類され、各作品に公式サイトとソースコードへのリンクが付いています。
- オープンソースのゲームを探しているプレイヤーや、ソースコードを学習・研究したい開発者に適しています。
- このリポジトリ自体はゲームのリスト集であり、各ゲームの利用にはリンク先の個別プロジェクトのライセンスや要件を確認する必要があります。

---

### 15. [rlaope/oh-my-hermes](https://github.com/rlaope/oh-my-hermes)

> All in one plugin for Hermes Agent ⚚ the coding intelligence, a long-term memory system and model optimized workflow packages

- Language: Python
- Stars: 2,797
- Forks: 208
- Stars in 1週間: 1,109
- Category: AIエージェント拡張
- Keywords: `Hermes Agent` `プラグイン` `ワークフロー` `長期メモリ` `コーディング` `AI`
- Summary source: README

#### README要約

- Hermes Agentに専門的な運用レイヤーを追加するオールインワンプラグイン。
- コーディングインテリジェンス、長期メモリシステム、最適化されたワークフローパッケージを提供する。
- Hermes Agentを利用する開発者や、AIエージェントのワークフローを強化したいユーザー向け。
- curlやHomebrew、npmなどでインストール可能で、セットアップにはomh setupコマンドが必要。

---

### 16. [jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader)

> A practical Douyin downloader for both single-item and profile batch downloads, with progress display, retries, SQLite deduplication, and browser fallback support. 抖音批量下载工具，去水印，支持视频、图集、合集、音乐(原声)。

- Language: Python
- Stars: 11,959
- Forks: 1,842
- Stars in 1週間: 1,969
- Category: ダウンローダーツール
- Keywords: `Douyin` `ダウンローダー` `Python` `バッチ処理` `SQLite` `ブラウザフォールバック`
- Summary source: README

#### README要約

- Douyin（抖音）の動画・画像ノート・コレクション・音楽・プロフィール一括ダウンロードに対応したPython製ダウンローダー。
- 進捗表示、リトライ、SQLiteによる履歴管理、ダウンロード整合性チェック、ブラウザフォールバック機能を備える。
- 個人のデータ管理や技術研究を目的としたユーザー向けで、CLIとデスクトップGUIアプリ（Douzy）の両方を提供する。
- Python 3.8以上が必要で、Cookieの取得とconfig.ymlの設定が必須。DouyinのBot対策によりCLIの一部機能が制限されている点に注意。

---

### 17. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)

> World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.

- Language: Python
- Stars: 60,154
- Forks: 7,609
- Stars in 1週間: 2,863
- Category: AI動画制作システム
- Keywords: `動画生成` `AIエージェント` `オープンソース` `自動化` `Remotion` `Python`
- Summary source: README

#### README要約

- AIコーディングアシスタントを本格的な動画制作スタジオに変える、オープンソースのエージェント型動画制作システム。
- 12の制作パイプラインと100以上のツールを備え、リサーチ、脚本、アセット生成、編集、最終合成までを自然言語の指示で自動化する。
- Claude CodeやCursorなどのAIアシスタントを使い、無料のストック映像や生成AIを組み合わせて本格的な動画を制作したいクリエイターや開発者向け。
- Python製でAGPLv3ライセンス。YouTube動画を参考に企画を立てる機能や、制作状況を可視化するローカルボード「Backlot」などを搭載。

---
