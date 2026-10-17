+++
title = 'GitHub Trending 1週間レポート (python) - 2026/10/17'
date = 2026-10-17T22:57:14.938Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月17日 22:57:14
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 11
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> Claude Codeを中心としたAIエージェントの拡張・運用ツールがトレンドを席巻し、プラグイン、スキル、監査、外部デバイス連携までエコシステム全体が急速に拡大している。

- Claude Code関連のリポジトリが11件中6件以上を占め、プラグインディレクトリ、無料プロキシ、求職支援、CAD連携、スマホ操作など多岐にわたる
- AIエージェントに特定領域の能力を付与する「スキル/プラグイン」型の拡張が複数登場し、科学研究・CAD・求職など垂直領域への適用が進んでいる
- 音声関連ツールが2件ランクインしており、VoiceStudioは14,708スターと期間内最多を記録、ローカル実行型のElevenLabs代替として強い関心を集めている
- エージェントの信頼性確保に関する関心も高く、監査ツールiFixAiが6,913スターを獲得している
- 言語は全11件がPythonで、AIエージェント関連ツールの実装言語としてPythonが支配的である

### 主なテーマ

- **Claude Codeエコシステムの拡張**: Anthropic公式のプラグインディレクトリ(2,328スター)に加え、無料プロキシ(4,078スター)、求職支援(2,752スター)、スマホ操作(522スター)など、Claude Codeを基盤とした多様なツールがランクイン。エージェントをハブとした開発ワークフローの構築が進んでいる。（`anthropics/claude-plugins-official`、`Alishahryar1/free-claude-code`、`MadsLorentzen/ai-job-search`、`ShawnPana/phone-harness`）
- **AIエージェントへの垂直領域スキル付与**: 科学研究向けスキルライブラリ(3,170スター)やCAD連携プラグイン(2,286スター)など、汎用エージェントに専門領域の能力を追加するツールが注目されている。Agent Skills標準への準拠など、相互運用性を意識した設計も見られる。（`K-Dense-AI/scientific-agent-skills`、`earthtojake/text-to-cad`）
- **ローカル実行型音声AI**: VoiceStudioが14,708スターで期間内最多を記録し、ElevenLabs代替としての完全ローカル音声ツールへの需要が顕在化。KittenTTSもCPU動作の軽量TTSとして413スターを獲得し、クラウド不要の音声合成への関心がうかがえる。（`debpalash/VoiceStudio`、`KittenML/KittenTTS`）
- **エージェントの信頼性・運用基盤**: エージェントの動作監査ツールiFixAiが6,913スター、エージェントワークロード向け推論エンジンTokenSpeedが464スターを獲得。エージェントの実運用に向けた品質保証とインフラ整備の両面で関心が高まっている。（`ifixai-ai/iFixAi`、`lightseekorg/tokenspeed`）

### 補足的な観察

- スター数の分布はVoiceStudioの14,708が突出しており、2位のiFixAi(6,913)の2倍以上で、ローカル音声ツールへの関心の高さが際立っている
- 全11件がPythonで実装されており、他言語のリポジトリは1件もランクインしていない
- Microsoft公式のTRELLIS.2(357スター)が3D生成モデルとしてランクインしており、テキスト/画像からの3Dアセット生成への関心も存在する
- AGPL-3.0ライセンスのツールが2件(free-claude-code、VoiceStudio)含まれており、オープンソースでもコピーレフト型ライセンスの採用が目立つ

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 11 |

## Repository一覧

### 1. [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

> Official, Anthropic-managed directory of high quality Claude Code Plugins.

- Language: Python
- Stars: 41,678
- Forks: 4,461
- Stars in 1週間: 2,328
- Category: プラグインディレクトリ
- Keywords: `Claude Code` `プラグイン` `マーケットプレイス` `Anthropic公式` `MCP` `スキル`
- Summary source: README

#### README要約

- Anthropicが管理するClaude Code向け高品質プラグインの公式ディレクトリです。
- Anthropic開発の内部プラグインと、パートナーやコミュニティによる外部プラグインを収録し、標準的なプラグイン構造を定義しています。
- Claude Codeユーザーがプラグインを発見・インストールするためのマーケットプレイスとして利用できます。
- Claude Codeの/plugin installコマンドでインストール可能ですが、プラグインの内容はAnthropicが保証しないため、利用前に信頼性を確認する必要があります。

---

### 2. [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)

> Use Claude Code, Codex, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)

- Language: Python
- Stars: 61,262
- Forks: 9,596
- Stars in 1週間: 4,078
- Category: AIコーディングプロキシ
- Keywords: `Claude Code` `無料トークン` `マルチプロバイダ` `コーディングエージェント` `フォールバック` `AGPL-3.0`
- Summary source: README

#### README要約

- 61のToS準拠プロバイダ経由で月1.3B以上の無料トークンを使い、Claude CodeやCodexなど11種のコーディングエージェントを動かすローカルプロキシ/管理ツール。
- Admin UIでプロバイダのAPIキーとモデルを一元管理し、障害時の自動フォールバック、RTK/Headroomによる最大90%のトークン削減、ブラウザ上のネイティブCodexセッションやWhisper音声入力を提供する。
- ターミナル・VS Code・JetBrains・Discord・Telegram・スマホなど複数環境で、無料/有料/サブスク/ローカルモデルを切り替えてコーディング作業をしたい開発者向け。
- curl/PowerShellのインストールスクリプトで導入しfcc-serverを起動、NVIDIA NIM等のキーをAdmin UIに登録して利用。Anthropic非公式の独立プロジェクトでAGPL-3.0ライセンス、無料枠は各プロバイダの規約に依存する。

---

### 3. [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)

> Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 250,000+ scientists worldwide. 177 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.

- Language: Python
- Stars: 52,208
- Forks: 4,622
- Stars in 1週間: 3,170
- Category: AIエージェントスキルライブラリ
- Keywords: `AIエージェント` `科学研究` `Agent Skills標準` `創薬` `バイオインフォマティクス` `オープンソース`
- Summary source: README

#### README要約

- AIエージェントを科学者に変える、177の検証済み科学スキルと100以上の科学データベースを提供するライブラリ。
- オープンなAgent Skills標準に準拠し、Cursor、Claude Code、Codex、Google Antigravityなどの互換ホストで動作する。
- 生物学、化学、医学、創薬、物理学、データ解析など幅広い分野の研究者やエンジニアが対象。
- MITライセンスだが、各スキルには個別のライセンスが指定されているため、使用前に各SKILL.mdのライセンス条項を確認する必要がある。

---

### 4. [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)

> The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep interviews. Fork it and own it.

- Language: Python
- Stars: 50,284
- Forks: 16,919
- Stars in 1週間: 2,752
- Category: AI求職支援ツール
- Keywords: `Claude Code` `求職自動化` `CV生成` `カバーレター` `面接準備` `LaTeX`
- Summary source: README

#### README要約

- Claude Code上で動作するAI求職支援フレームワークで、フォークして自分のプロフィールを設定し、ローカル環境で求職活動を実行できる。
- /setupでプロフィール作成、/scrapeで求人検索・適合度評価、/applyでCVとカバーレターをLaTeXで自動生成し、レビューエージェントが推敲する。
- 求職者が自分のキャリア情報を管理しながら、求人評価・応募書類作成・面接準備まで一貫して行いたい場合に適している。
- Claude Codeの有料サブスクリプションまたはAPIクレジット、Python 3.10以上、Bun、LaTeX環境が必要で、フォークは公開されるためプライベートリポジトリの使用が推奨される。

---

### 5. [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

> VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.

- Language: Python
- Stars: 73,213
- Forks: 8,009
- Stars in 1週間: 14,708
- Category: 音声合成・クローニングツール
- Keywords: `音声クローニング` `ローカル実行` `動画ダビング` `文字起こし` `オープンソース` `ElevenLabs代替`
- Summary source: README

#### README要約

- VoiceStudioは、音声クローニング、音声デザイン、動画ダビング、ディクテーション、文字起こし、オーディオブック作成を646言語で行えるオープンソースの完全ローカル音声ツールです。
- デフォルトでk2-fsa/OmniVoiceエンジンを搭載し、他のエンジンも選択可能。ローカルAPIとMCPでエージェント連携ができ、フローティングウィジェットでのディクテーションやバッチ処理にも対応します。
- 音声コンテンツ制作者、動画制作者、開発者向けで、NVIDIA GPU(CUDA)、Apple Silicon(Metal)、CPUのみの環境でも動作します。
- macOS/Linuxはcurlコマンド、WindowsはPowerShellでインストール可能。Electronアプリのみ提供され、AGPL-3.0ライセンスで、音声クローンは許可を得て使用する必要があります。

---

### 6. [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)

> Give your agent CAD superpowers.

- Language: Python
- Stars: 21,253
- Forks: 2,099
- Stars in 1週間: 2,286
- Category: AIエージェント拡張
- Keywords: `CAD` `3Dモデリング` `AIエージェント` `製造` `プラグイン` `STEP`
- Summary source: README

#### README要約

- AIエージェントにCAD機能を追加するプラグインで、テキストから3Dモデルを生成できる。
- STEP、GLB、STL、3MF形式でのモデル生成、製造可能性チェック、エンジニアリング図面作成、3Dプリント・板金・CNC加工サービスとの連携を提供。
- Claude Code、Codex、Cursor、Gemini、Grokなどの主要なAIエージェントで利用可能で、設計者やエンジニアの製造ワークフローを支援。
- uv経由でインストールし、各エージェントアプリ用のプラグインまたはスキルとして導入。初回起動時にネットワーク接続が必要。

---

### 7. [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi)

> Independent Auditing of AI Agents. Run by human or the agent itself, to answer the most crucial question in the AI Agent Economy. Is the agent doing what is supposed to do? With iFixAi you can have this answer in less than 120 seconds.

- Language: Python
- Stars: 29,131
- Forks: 1,593
- Stars in 1週間: 6,913
- Category: AIエージェント監査ツール
- Keywords: `AIエージェント` `監査` `レッドチーミング` `運用保証` `コンプライアンス` `Python`
- Summary source: README

#### README要約

- AIエージェントが業務KPIや組織構造に基づいて本来の仕事を遂行しているかを120秒以内で監査するPython製ツール。
- AIレッドチーミングと運用保証を組み合わせ、CLIウィザード・明示的フラグ・Claude Code/Codexプラグインの3つの実行方法を提供する。
- ビジネス、リスク、エンジニアリングチーム向けにOperational AssuranceとRegulatory Complianceの2つのレポートを生成する。
- pip install "ifixai[openai]"で導入し、ifixai setupで設定後にifixai runを実行する。APIキーは環境変数で管理される。

---

### 8. [KittenML/KittenTTS](https://github.com/KittenML/KittenTTS)

> Open-source State-of-the-art TTS model which runs on a CPU 😻

- Language: Python
- Stars: 16,126
- Forks: 959
- Stars in 1週間: 413
- Category: 音声合成
- Keywords: `TTS` `音声合成` `ボイスクローニング` `CPU動作` `オープンソース` `多言語対応`
- Summary source: README

#### README要約

- KittenTTSは、CPU上でリアルタイム動作するオープンソースのテキスト音声合成ライブラリです。
- 主力モデルKittenTTS 2は1.7Bパラメータの1-bit音声言語モデルで、5秒の音声からのボイスクローニングと感情制御が可能です。
- 47種類の内蔵音声と20言語をサポートし、GPU不要で動作するため、リソース制約のある環境での利用に適しています。
- pip install kittenmlで導入でき、Python 3.9以降と約6GBのRAMが必要です。商用サポートも提供されています。

---

### 9. [lightseekorg/tokenspeed](https://github.com/lightseekorg/tokenspeed)

> TokenSpeed is a speed-of-light LLM inference engine.

- Language: Python
- Stars: 2,689
- Forks: 359
- Stars in 1週間: 464
- Category: LLM推論エンジン
- Keywords: `LLM推論` `エージェントワークロード` `C++` `Python` `KVキャッシュ` `PyTorch`
- Summary source: README

#### README要約

- TokenSpeedは、エージェントワークロード向けに設計された高速LLM推論エンジンです。
- C++制御プレーンとPython実行プレーンを分離し、有限状態機械による安全なKVキャッシュ管理とプラグ可能なカーネルシステムを特徴とします。
- 本番環境でのエージェントワークロードに最適化されており、NVIDIAやAMDのハードウェアをサポートしています。
- PyTorchエコシステムに参加しており、非営利のLightSeek Foundationによって支援されています。

---

### 10. [microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2)

> Native and Compact Structured Latents for 3D Generation

- Language: Python
- Stars: 12,082
- Forks: 1,473
- Stars in 1週間: 357
- Category: 3D生成AIモデル
- Keywords: `3D生成` `O-Voxel` `PBRマテリアル` `疎ボクセル` `画像から3D` `MITライセンス`
- Summary source: README

#### README要約

- TRELLIS.2は、高忠実度な画像から3D生成を行う40億パラメータの大規模3D生成モデルです。
- O-Voxelと呼ばれる疎なボクセル構造を用い、複雑なトポロジーやPBRマテリアルを含む3Dアセットを効率的に生成します。
- 3Dコンテンツ制作者や研究者向けに、高速なメッシュ変換とフォトリアリスティックなレンダリングを提供します。
- Linux環境と24GB以上のNVIDIA GPUが必要で、CUDA Toolkit 12.4のインストールが推奨されています。

---

### 11. [ShawnPana/phone-harness](https://github.com/ShawnPana/phone-harness)

> let your agent control your phone

- Language: Python
- Stars: 3,768
- Forks: 393
- Stars in 1週間: 522
- Category: AIエージェント用スマホ操作ツール
- Keywords: `AIエージェント` `スマホ自動操作` `iPhone Mirroring` `adb` `OCR` `Claude Code`
- Summary source: README

#### README要約

- Claude CodeやCodexなどのAIエージェントから実際のスマートフォンを操作できるようにするPython製ツール。
- iPhoneはMacのiPhoneミラーリング経由、Androidはadb経由で接続し、画面のOCR認識・タップ・文字入力などを実行する。
- エージェントにスマホ操作をさせたい開発者向けで、アプリ操作や画面読み取りの自動化に利用できる。
- uvでインストールし、ペアリングやadb承認などの接続設定はユーザーが行う。脱獄やXcode、スマホ側へのインストールは不要。

---
