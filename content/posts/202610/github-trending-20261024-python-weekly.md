+++
title = 'GitHub Trending 1週間レポート (python) - 2026/10/24'
date = 2026-10-24T22:58:17.167Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月24日 22:58:17
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> Claude Codeを中心としたAIエージェントのプラグイン・スキル整備と、ローカル実行可能な生成AIツール（音声・動画・画像）への関心が顕著な期間となっている。

- Anthropic公式のプラグインディレクトリやナレッジワーク向けプラグイン集が上位を占め、Claude Code/Coworkのエコシステム拡張が進んでいる。
- 音声クローン（VoiceStudio）や動画復元（jasna）、AI動画編集（supoclip）など、ローカルまたはセルフホストで動作する生成AIツールが高い支持を集めている。
- vLLMやSGLangなどのLLM推論エンジン、ComfyUIなどの画像生成基盤が引き続き安定した人気を維持している。
- コードベースをナレッジグラフ化するgraphifyや、ソフトウェアをエージェント対応にするCLI-Anythingなど、AIコーディング支援の周辺ツールが台頭している。

### 主なテーマ

- **Claude Codeエコシステムの拡張**: Anthropic公式のプラグインディレクトリ（claude-plugins-official）やナレッジワーク向けプラグイン集（knowledge-work-plugins）、マルチハーネス対応のマーケットプレイス（wshobson/agents）、学習ガイド（claude-howto）など、Claude Codeを中心としたプラグイン・スキル・テンプレートの整備が活発である。（`anthropics/claude-plugins-official`、`anthropics/knowledge-work-plugins`、`wshobson/agents`、`luongnv89/claude-howto`）
- **ローカル・セルフホスト型生成AIツール**: 完全ローカルで動作する音声クローンツール（VoiceStudio）、GPUで動作する動画復元ツール（jasna）、セルフホスト可能なAI動画クリッピングツール（supoclip）など、クラウドサービスに依存しない生成AIツールが注目を集めている。（`debpalash/VoiceStudio`、`Kruk2/jasna`、`FujiwaraChoki/supoclip`）
- **AIコーディング支援・エージェント基盤**: コードベースをナレッジグラフ化してAIアシスタントでクエリ可能にするgraphify、既存ソフトウェアをエージェント操作可能なCLIに変換するCLI-Anything、自律型営業エージェント（harvey）など、AIエージェントの能力を拡張する基盤ツールが台頭している。（`Graphify-Labs/graphify`、`HKUDS/CLI-Anything`、`ethanplusai/harvey`）
- **LLM推論・生成AI基盤**: 高スループットなLLM推論エンジン（vLLM）、マルチモーダル対応の推論フレームワーク（SGLang）、ノードグラフベースの画像生成エンジン（ComfyUI）など、生成AIモデルの実行基盤となるオープンソースプロジェクトが安定した人気を維持している。（`vllm-project/vllm`、`sgl-project/sglang`、`Comfy-Org/ComfyUI`）

### 補足的な観察

- Pythonが全16リポジトリ中15件を占め、AI/ML分野での同言語の支配的な地位が継続している。
- VoiceStudioが12,526スターと圧倒的な1位を獲得し、音声クローン・ローカル実行への需要の高さを示している。
- Anthropic公式リポジトリが2件ランクインし、同社のエコシステム戦略が開発者コミュニティに受け入れられていることがうかがえる。
- FastAPIやSGLangなどの既存の成熟したプロジェクトと、graphifyやCLI-Anythingなどの新興ツールが混在し、基盤技術と応用ツールの両方が注目されている。

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 16 |

## Repository一覧

### 1. [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

> Official, Anthropic-managed directory of high quality Claude Code Plugins.

- Language: Python
- Stars: 44,342
- Forks: 4,653
- Stars in 1週間: 4,250
- Category: プラグインディレクトリ
- Keywords: `Claude Code` `プラグイン` `MCP` `スキル` `マーケットプレイス` `Anthropic`
- Summary source: README

#### README要約

- Anthropicが管理するClaude Code向けプラグインの公式ディレクトリです。
- 社内開発の/pluginsと第三者提供の/external_pluginsに分かれ、plugin.jsonやMCP設定、コマンド、エージェント、スキルを標準構造で収録します。
- Claude Codeで利用可能な高品質プラグインを探して導入したいユーザーと、審査基準を満たしてプラグインを提出したい開発者が対象です。
- Claude Codeの/plugin installまたはDiscoverから導入でき、プラグイン名は不変で、利用前に各プラグインの信頼性を確認する必要があります。

---

### 2. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)

> Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork

- Language: Python
- Stars: 32,608
- Forks: 3,602
- Stars in 1週間: 2,625
- Category: AIプラグイン集
- Keywords: `Claude Cowork` `Claude Code` `プラグイン` `ナレッジワーク` `MCP` `業務自動化`
- Summary source: README

#### README要約

- Claude CoworkおよびClaude Code向けに、職種・チーム・企業ごとの専門家としてClaudeを機能させるプラグイン集です。
- 各プラグインはスキル、コネクタ、スラッシュコマンド、サブエージェントをまとめ、営業、法務、財務、データ分析など11種類が公開されています。
- ナレッジワーカーや企業チームが、自社のツール、用語、業務プロセスに合わせてClaudeの振る舞いをカスタマイズする用途を想定しています。
- Coworkからインストールするか、Claude Codeでマーケットプレイスを追加して導入でき、構成はMarkdownとJSON中心でコードやビルド工程は不要です。

---

### 3. [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)

> The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.

- Language: Python
- Stars: 142,620
- Forks: 16,819
- Stars in 1週間: 4,531
- Category: AI生成ワークフロー
- Keywords: `ComfyUI` `ノードグラフ` `拡散モデル` `ローカル推論` `ワークフロー` `API`
- Summary source: README

#### README要約

- ComfyUIは、画像・動画・3D・音声などの生成をノードグラフで制御できるモジュール式のAIコンテンツ制作エンジンです。
- 非同期キュー、部分再実行、VRAM/RAM管理、モデルオフロード、量子化モデル対応によりローカル実行を重視しています。
- 視覚制作のプロや開発者向けに、ワークフロー保存、App Mode、API連携、カスタムノード拡張を提供します。
- Windows・Linux・macOSで動作し、デスクトップ版・手動導入・クラウド版があり、オフライン実行や外部モデルパス設定にも対応します。

---

### 4. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

> Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.

- Language: Python
- Stars: 134,420
- Forks: 12,836
- Stars in 1週間: 6,875
- Category: ナレッジグラフ
- Keywords: `ナレッジグラフ` `AST解析` `tree-sitter` `AIコーディングアシスタント` `ローカルファースト` `コード解析`
- Summary source: README

#### README要約

- コードベースやドキュメント、SQLスキーマ、設定ファイル、PDFなどをクエリ可能なナレッジグラフに変換するツール。
- tree-sitterによるローカルAST解析でLLM不要の決定論的グラフを生成し、全エッジにEXTRACTED/INFERREDの根拠タグを付与する。
- Claude Code、Cursor、Codex、Gemini CLIなどのAIコーディングアシスタントで/graphifyスキルとして利用する開発者向け。
- Python 3.10+とuv（またはpipx）が必要で、uv tool install graphifyy後にgraphify installでアシスタントに登録する。

---

### 5. [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)

> "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/

- Language: Python
- Stars: 56,846
- Forks: 5,094
- Stars in 1週間: 3,303
- Category: AIエージェント開発ツール
- Keywords: `AIエージェント` `CLI自動生成` `Agent-Native` `ソフトウェア自動化` `Claude Code` `ハーネス`
- Summary source: README

#### README要約

- CLI-Anythingは、あらゆるソフトウェアをAIエージェントが操作可能な「Agent-Native」なCLIに変換するためのツールです。
- ソフトウェアのコードベースを解析してCLIハーネスを自動生成し、Claude Codeなどのエージェントから操作できるようにします。
- AIエージェントを活用して既存ソフトウェアを自動化したい開発者や、CAD・3D・ドキュメント作成などの専門ツールをエージェント経由で利用したいユーザーが対象です。
- 生成されたCLIは一度の実行で完全に網羅されない場合があり、本番品質にするには/refineコマンドによる反復的な改善が必要になることがあります。

---

### 6. [vllm-project/vllm](https://github.com/vllm-project/vllm)

> A high-throughput and memory-efficient inference and serving engine for LLMs

- Language: Python
- Stars: 95,340
- Forks: 23,900
- Stars in 1週間: 1,363
- Category: LLM推論エンジン
- Keywords: `LLM` `推論` `サービング` `PagedAttention` `高スループット` `オープンソース`
- Summary source: README

#### README要約

- vLLMは、大規模言語モデル（LLM）の推論とサービングを高速かつ容易に行うためのオープンソースライブラリです。
- PagedAttentionによる効率的なメモリ管理、連続バッチング、量子化、最適化されたカーネルなどにより、高いスループットを実現します。
- Hugging Faceの200以上のモデルアーキテクチャをサポートし、OpenAI互換APIサーバーや分散推論機能を提供するため、研究者や開発者の本番利用に適しています。
- uvやpipでインストール可能で、NVIDIA/AMD/Intel GPUや各種CPU、TPUなど多様なハードウェアに対応しています。

---

### 7. [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

> VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.

- Language: Python
- Stars: 84,898
- Forks: 9,398
- Stars in 1週間: 12,526
- Category: 音声合成・クローンツール
- Keywords: `音声クローン` `ローカル実行` `オープンソース` `ElevenLabs代替` `動画ダビング` `音声合成`
- Summary source: README

#### README要約

- VoiceStudioは、完全ローカルで動作するオープンソースのElevenLabs代替ツールです。
- 音声クローン、音声デザイン、動画ダビング、音声入力、文字起こし、オーディオブック作成を646言語で提供します。
- ローカルAPIやMCPを通じてエージェントと連携し、音声ワークフローを自動化したい開発者やクリエイター向けです。
- macOS、Linux、Windowsに対応し、curlやPowerShellで簡単にインストールできます。GPUがなくてもCPUで動作します。

---

### 8. [fastapi/fastapi](https://github.com/fastapi/fastapi)

> FastAPI framework, high performance, easy to learn, fast to code, ready for production

- Language: Python
- Stars: 104,094
- Forks: 10,116
- Stars in 1週間: 1,013
- Category: Webフレームワーク
- Keywords: `Python` `API` `Webフレームワーク` `OpenAPI` `Pydantic` `Starlette`
- Summary source: README

#### README要約

- FastAPIは、Pythonの型ヒントを基盤とした、API構築のためのモダンで高速なWebフレームワークです。
- StarletteとPydanticを活用し、OpenAPIとJSON Schemaに準拠した自動インタラクティブドキュメントを生成します。
- 高いパフォーマンスと開発速度を求めるPython開発者や、本番環境向けの堅牢なAPIを構築するチームに適しています。
- uvやpipで`fastapi[standard]`をインストールして利用を開始します。MITライセンスで提供されています。

---

### 9. [wshobson/agents](https://github.com/wshobson/agents)

> Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi

- Language: Python
- Stars: 41,641
- Forks: 4,413
- Stars in 1週間: 732
- Category: AIコーディングツール拡張
- Keywords: `マルチハーネス` `プラグインマーケットプレイス` `Claude Code` `エージェント` `スキル` `アダプター生成`
- Summary source: README

#### README要約

- Claude Code、Codex CLI、Cursor、OpenCode、Antigravity CLI、GitHub Copilot、Pi向けのプラグイン・エージェント・スキル・コマンドを提供するマルチハーネス対応マーケットプレイス。
- 94個のプラグイン（202エージェント、185スキル、105コマンド）を収録し、単一のMarkdownソースから各ハーネス用の形式を生成するアダプター方式を採用。
- Python/JavaScript開発、コードレビュー、テスト、インフラ、セキュリティなどの作業をAIコーディングツール上で効率化したい開発者が対象。
- Claude CodeやCodex CLIはマーケットプレイス登録で導入可能。OpenCode等はクローン後にmake installコマンドを実行。Python 3.12以降とuvが必要。

---

### 10. [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)

> A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.

- Language: Python
- Stars: 44,510
- Forks: 5,488
- Stars in 1週間: 2,012
- Category: 学習ガイド
- Keywords: `Claude Code` `チュートリアル` `テンプレート` `エージェント` `MCP` `学習パス`
- Summary source: README

#### README要約

- Claude Codeを基礎から高度なエージェント運用まで学べる、視覚的で例題重視のガイドです。
- 10のチュートリアルモジュール、Mermaid図解、コピペ可能なテンプレート（スラッシュコマンド、CLAUDE.md、フック、MCP設定、サブエージェント等）を提供します。
- 初心者から上級者まで段階的に学習でき、自己評価クイズで自分のレベルに合ったロードマップを見つけられます。
- git cloneで取得し、テンプレートを自分のプロジェクトにコピーするだけで15分で始められます。MITライセンスで無料です。

---

### 11. [Kruk2/jasna](https://github.com/Kruk2/jasna)

> Video restoration tool

- Language: Python
- Stars: 3,583
- Forks: 274
- Stars in 1週間: 1,469
- Category: 動画復元ツール
- Keywords: `モザイク除去` `動画復元` `GPU処理` `BasicVSR++` `LTX` `Python`
- Summary source: README

#### README要約

- Jasnaは動画や画像内のモザイクを検出して復元する、GPU上で動作する無料のツールです。
- 高速なBasicVSR++（無料）と高詳細だが低速なLTX（サポーター向け、NVIDIAのみ）の2つの復元モデルを搭載し、GUIアプリとコマンドラインの両方で利用できます。
- モザイク除去を行いたい一般ユーザーやクリエイター向けで、セグメントエディタでの部分指定、VR180動画や静止画の処理、リアルタイムプレビューなどに対応します。
- NVIDIA GTX 16シリーズ/RTX 20シリーズ以降（AMD RX 7000/9000は実験的）が必要で、初回実行時はGPU向けモデル準備に15〜60分かかり、パスに非英語文字を含まないローカルフォルダへの展開が必須です。

---

### 12. [ethanplusai/harvey](https://github.com/ethanplusai/harvey)

> Autonomous AI sales agent powered by Claude Code or Codex. Finds prospects, writes cold emails, sends campaigns, handles replies, books meetings. No API keys needed — runs on your Claude or Codex subscriptions.

- Language: Python
- Stars: 2,446
- Forks: 507
- Stars in 1週間: 1,283
- Category: AI営業自動化ツール
- Keywords: `自律型エージェント` `コールドメール` `Claude Code` `Codex` `営業自動化` `サブスクリプション`
- Summary source: README

#### README要約

- Claude CodeまたはCodexのサブスクリプション上で動作する自律型AI営業エージェント。
- 見込み客の発掘、パーソナライズされたコールドメールの作成・送信、返信対応、商談設定までを自動でループ実行する。
- APIキー不要で既存のClaude Pro/MaxまたはChatGPTプランを利用し、追加のモデルAPI料金が発生しない設計。
- Python 3.11以上とメールボックスが必要で、送信前の承認フローや法的配慮も組み込まれている。

---

### 13. [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)

> Kronos: A Foundation Model for the Language of Financial Markets

- Language: Python
- Stars: 43,570
- Forks: 7,193
- Stars in 1週間: 2,653
- Category: 金融時系列予測モデル
- Keywords: `基盤モデル` `K線予測` `Transformer` `クオンツ分析` `オープンソース` `Hugging Face`
- Summary source: README

#### README要約

- Kronosは金融市場のローソク足（K線）データに特化した、初のオープンソース基盤モデルです。
- 専用トークナイザーでOHLCVデータを離散トークン化し、自己回帰Transformerで学習する2段階フレームワークを採用しています。
- 金融時系列予測やクオンツ分析を行う研究者・開発者向けで、Hugging Faceから複数サイズのモデルが利用可能です。
- Python 3.10以上が必要で、Kronos-small/baseは最大コンテキスト長512に制限され、入力データ長に注意が必要です。

---

### 14. [sgl-project/sglang](https://github.com/sgl-project/sglang)

> SGLang is a high-performance serving framework for large language models and multimodal models.

- Language: Python
- Stars: 37,781
- Forks: 9,864
- Stars in 1週間: 511
- Category: LLM推論フレームワーク
- Keywords: `LLM推論` `マルチモーダル` `拡散モデル` `大規模サービング` `強化学習` `Python`
- Summary source: README

#### README要約

- SGLangは大規模言語モデル、視覚言語モデル、拡散モデル向けのオープンソース推論フレームワークである。
- エージェント的ワークロード、大規模サービング、強化学習ロールアウトに最適化され、画像・動画生成エンジンSGLang Diffusionを内蔵する。
- NVIDIA、AMD、Google TPU、Intel、Apple Silicon、Huawei Ascendなど幅広いハードウェアをサポートし、本番環境での利用を想定している。
- Dockerイメージまたはuv pipでインストール可能で、Apache 2.0ライセンスのもとLMSYSがホストしている。

---

### 15. [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro)

> Gradio WebUI for creators and developers, featuring key TTS (Edge-TTS, kokoro) and zero-shot Voice Cloning (E2 & F5-TTS, CosyVoice), with Whisper audio processing, YouTube download, Demucs vocal isolation, and multilingual translation.

- Language: Python
- Stars: 13,347
- Forks: 1,926
- Stars in 1週間: 339
- Category: AI音声処理・ダビングツール
- Keywords: `音声認識` `音声クローン` `TTS` `翻訳` `ダビング` `Gradio`
- Summary source: README

#### README要約

- 音声認識・翻訳・多言語ダビングを統合したAI搭載Webアプリケーション。
- Whisper系の音声認識、F5-TTS/E2-TTS/CosyVoiceによるゼロショット音声クローン、Edge-TTS/kokoroの多言語TTS、yt-dlpによるYouTube処理、Demucsによる音声分離、Deep-Translatorによる100以上の言語の翻訳を搭載。
- ポッドキャスター、開発者、クリエイター、研究者、多言語対応が必要な専門家を対象とし、ElevenLabsの代替として高度な音声ソリューションを提供。
- Windows+NVIDIA GPU環境で動作確認済み（Mac/Linuxは未検証）。インストーラーはuvに移行し、管理者権限不要でCUDA Toolkit等も不要。現在は開発が一時停止中だが、完全オープンソースかつ無料で利用可能。

---

### 16. [FujiwaraChoki/supoclip](https://github.com/FujiwaraChoki/supoclip)

> An open-source OpusClip alternative

- Language: Python
- Stars: 1,838
- Forks: 440
- Stars in 1週間: 339
- Category: AI動画編集ツール
- Keywords: `動画クリッピング` `AI自動編集` `縦型動画` `セルフホスト` `OpusClip代替` `オープンソース`
- Summary source: README

#### README要約

- 長尺動画からバイラル向きの瞬間を自動抽出し、縦型9:16クリップとしてレンダリングするオープンソースのAI動画クリッピングツール。
- LLMによるクリップ選定、バイラリティスコアリング、顔検出によるスマートクロップ、単語同期字幕、フックタイトル、B-roll挿入などの機能を備える。
- ポッドキャスト、トーク、配信VODなどをTikTok、Reels、Shorts向けに短編化したいクリエイターやマーケター向け。
- Docker Composeでセルフホスト可能（AGPL-3.0）。AssemblyAI APIキーとLLMプロバイダーキーが必要。ホスト版やiOSアプリも利用可能。

---
