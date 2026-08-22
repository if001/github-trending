+++
title = 'GitHub Trending 1週間レポート (python) - 2026/08/22'
date = 2026-08-22T21:24:28.771Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月22日 21:24:28
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェントの基盤整備とローカルLLM実行環境の最適化が並行して進み、Python製ツールがトレンドを席巻している

- AIエージェント向けのコンテキスト管理・メモリ基盤（OpenViking、semantica）や、エージェント構築フレームワーク（microsoft/agent-framework）が上位にランクインし、エージェントの実運用を支えるインフラへの関心が高い
- Apple SiliconやRTX 3090などのコンシューマー向けハードウェアでLLMを高速実行するツール（omlx、MTPLX、club-3090、unsloth）が複数登場し、ローカル推論の最適化が活発
- AIを活用したセキュリティツールが充実しており、攻撃側のペネトレーションテスト自動化（strix）と防御側のレッドチーミング基盤（AI-Infra-Guard）の両方が注目されている
- MoneyPrinterTurboが1万スター超を獲得するなど、AIによるコンテンツ生成の自動化ワークフローへの需要も根強い
- リスト内の全18リポジトリがPython製であり、言語分布がPythonに完全に集中している

### 主なテーマ

- **AIエージェントのコンテキスト・メモリ基盤**: AIエージェントが長期記憶や知識を管理するためのインフラが複数ランクイン。OpenVikingはメモリ・RAG・スキルをviking://プロトコルで統一管理し、semanticaはナレッジグラフと決定論的推論で説明可能なAIを実現する。microsoft/agent-frameworkもマルチエージェントのオーケストレーションを提供しており、エージェントの実運用に必要な基盤レイヤーへの投資が進んでいる（`volcengine/OpenViking`、`semantica-agi/semantica`、`microsoft/agent-framework`）
- **ローカルLLM推論の高速化と最適化**: Apple Silicon向けにはomlxが連続バッチングとSSDキャッシュ、MTPLXがMTP投機的デコーディングで約2倍の高速化を実現。NVIDIA GPU向けにはclub-3090がRTX 3090/4090/5090でのサービングレシピを提供し、unslothはVRAMを70%削減したファインチューニングを謳う。コンシューマーハードウェアでのLLM実行を実用化する動きが顕著（`jundot/omlx`、`youssofal/MTPLX`、`noonghunna/club-3090`、`unslothai/unsloth`）
- **AI駆動のセキュリティテストと防御**: strixはAIエージェントが自律的にペネトレーションテストを実行しPoCで脆弱性を検証するツールで4624スターを獲得。対照的にTencent/AI-Infra-GuardはAIインフラ自体の脆弱性スキャンやJailbreak評価を行うレッドチーミング基盤。Anthropic-Cybersecurity-Skillsは817件のセキュリティスキルをAIエージェントに付与するライブラリであり、攻防両面でAIの活用が進んでいる（`usestrix/strix`、`Tencent/AI-Infra-Guard`、`mukul975/Anthropic-Cybersecurity-Skills`）
- **AIによるコンテンツ生成の自動化**: MoneyPrinterTurboはテーマ入力だけでスクリプト生成から動画合成、SNS投稿までを自動化し、期間中1万スター超を獲得。index-ttsはゼロショット音声クローンと多言語対応の音声合成を提供する。クリエイター向けの自動化ワークフローへの需要が高い（`harry0703/MoneyPrinterTurbo`、`index-tts/index-tts`）
- **低リソース環境でのLLMファインチューニング**: Soupはレイヤーストリーミングにより4GBのVRAMで8Bモデルの学習を可能にし、unslothもVRAM削減を謳う。cactus-compute/needleは14MBの小型モデルでエッジデバイス向けツール呼び出しを実現。限られたハードウェア資源でLLMをカスタマイズする手法への関心が集まっている（`MakazhanAlpamys/Soup`、`unslothai/unsloth`、`cactus-compute/needle`）

### 補足的な観察

- スター獲得数の上位はpublic-apis（10990）、MoneyPrinterTurbo（10470）、strix（4624）の順で、汎用的なリソースリストとAI自動化ツールが突出している
- 言語分布は全18リポジトリがPythonで占められており、AI/LLM関連ツールの実装言語としてPythonの支配的な地位が確認できる
- Apple Silicon（macOS）向けツールがomlx、MTPLX、unslothの3件登場し、NVIDIA GPU向けのclub-3090と合わせて、クラウドではなくローカルハードウェアでのLLM実行環境の整備が進んでいる
- セキュリティ関連リポジトリがstrix、AI-Infra-Guard、Anthropic-Cybersecurity-Skills、holehe、Scraplingの5件と多く、AI時代の攻防両面のセキュリティへの関心の高さがうかがえる

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 18 |

## Repository一覧

### 1. [volcengine/OpenViking](https://github.com/volcengine/OpenViking)

> Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.

- Language: Python
- Stars: 32,019
- Forks: 2,445
- Stars in 1週間: 3,033
- Category: AIエージェント基盤
- Keywords: `コンテキストデータベース` `AIエージェント` `長期メモリ` `RAG` `階層検索` `viking://`
- Summary source: README

#### README要約

- OpenVikingはAIエージェント向けのオープンソースコンテキストデータベースで、メモリ・リソース・スキルをviking://プロトコルの仮想ファイルシステムとして統一管理する。
- コンテンツをL0(要約)/L1(概要)/L2(詳細)の3層に処理してオンデマンドで読み込み、ディレクトリ再帰検索と検索軌跡の可視化によりデバッグ可能な検索を実現する。
- Claude Code、Codex、Cursor、LangChain等のエージェントと統合でき、セッション終了後にユーザー嗜好やエージェント経験を長期メモリへ自動抽出する。
- Python 3.10以上が必要でpip install openvikingで導入可能。メインプロジェクトはAGPLv3ライセンスで、初期段階のプロジェクトである点に注意。

---

### 2. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)

> 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.

- Language: Python
- Stars: 114,613
- Forks: 17,395
- Stars in 1週間: 10,470
- Category: AI動画生成ツール
- Keywords: `AI動画生成` `ショート動画` `自動化ワークフロー` `Python` `マルチモーダル` `動画合成`
- Summary source: README

#### README要約

- テーマやキーワードを入力するだけで、AIが動画スクリプト生成から素材選定、字幕、BGM付与までを自動化し、高画質なショート動画を合成するツール。
- WebUI、API、CLI、AIエージェントの4方式で利用可能。複数のLLMやTTSサービスに対応し、縦横両方のHDサイズや一括生成、素材の自動取得・AI生成、SNSへの自動投稿機能を備える。
- 手軽に量産したい動画クリエイターや、自動化ワークフローを組み込みたい開発者に適している。
- Python製でffmpegなどの環境設定が必要。各種AIサービスのAPIキー設定が求められ、初心者にはやや導入のハードルがある。

---

### 3. [public-apis/public-apis](https://github.com/public-apis/public-apis)

> A collective list of free APIs

- Language: Python
- Stars: 468,578
- Forks: 51,695
- Stars in 1週間: 10,990
- Category: APIリスト
- Keywords: `公開API` `無料` `ディレクトリ` `開発者向け` `キュレーション` `REST`
- Summary source: README

#### README要約

- 無料で利用できる公開APIを集めた、コミュニティによって手動でキュレーションされたリストです。
- 動物、天気、金融、開発など多岐にわたるドメインのAPIをカテゴリ別に整理し、認証方法やHTTPS対応などの情報を提供します。
- 自分のプロダクトやプロジェクトで利用するAPIを探している開発者を対象としています。
- READMEの冒頭はスポンサーであるAPILayerの製品紹介が中心ですが、リスト本体はMITライセンスで公開されています。

---

### 4. [jundot/omlx](https://github.com/jundot/omlx)

> LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar

- Language: Python
- Stars: 20,334
- Forks: 1,720
- Stars in 1週間: 1,536
- Category: LLM推論サーバー
- Keywords: `Apple Silicon` `MLX` `連続バッチング` `KVキャッシュ` `OpenAI互換API` `macOSアプリ`
- Summary source: README

#### README要約

- Apple Silicon向けに最適化されたLLM推論サーバーで、macOSのメニューバーから管理できる。
- 連続バッチングとRAM/SSDの2層KVキャッシュにより、会話の過去コンテキストを再利用可能にする。
- テキストLLM、VLM、OCR、埋め込み、リランカーを同一サーバーで提供し、Claude Codeなどのツール連携を想定している。
- macOS 15.0以降、Python 3.11〜3.13、Apple Siliconが必要で、DMG・Homebrew・ソースからインストールできる。

---

### 5. [semantica-agi/semantica](https://github.com/semantica-agi/semantica)

> Graph-Native Infrastructure for Context and Accountable AI Systems

- Language: Python
- Stars: 10,251
- Forks: 1,102
- Stars in 1週間: 2,755
- Category: AIインフラストラクチャ
- Keywords: `ナレッジグラフ` `意思決定インテリジェンス` `説明可能AI` `データ来歴` `オントロジー管理` `規制対応`
- Summary source: README

#### README要約

- エンタープライズデータを取り込み、コンテキストグラフとナレッジグラフを構築して、意思決定の完全な来歴を持つ説明可能なAIシステムを実現するインフラ。
- 決定論的推論（Forward chaining、Rete、Datalog、SPARQL）、W3C PROV-Oによる来歴管理、SHACL制約、競合検出、Databricks/Snowflake連携などを提供。
- 規制産業（金融、医療、法務、政府、防衛）のAI/MLプラットフォームチーム、データエンジニア、コンプライアンス・監査チームを対象とする。
- pip install semanticaで導入可能。LLM不要でグラフ構築・推論・来歴管理が動作し、既存のLLMやベクトルストアを置き換えずに補完する設計。

---

### 6. [unslothai/unsloth](https://github.com/unslothai/unsloth)

> Local UI to run and train LLMs and diffusion models, including Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4, FLUX and more.

- Language: Python
- Stars: 74,393
- Forks: 6,730
- Stars in 1週間: 2,987
- Category: ローカルAIモデル実行・学習プラットフォーム
- Keywords: `LLM` `ファインチューニング` `ローカル実行` `拡散モデル` `LoRA` `デスクトップアプリ`
- Summary source: README

#### README要約

- Unslothは、LLMや拡散モデルなどをローカル環境で実行・学習・デプロイできるデスクトップアプリです。
- LoRAやQLoRA、強化学習などの学習手法に対応し、2倍高速かつVRAMを70%削減したファインチューニングを精度低下なしで実現します。
- CPU、Apple、NVIDIA、AMD、Intelなど幅広いハードウェアをサポートし、Claude CodeやCodexなどのエージェントと連携してローカルモデルを活用できます。
- Windows、macOS、Linux向けのネイティブアプリまたはインストールスクリプトで導入でき、コアはApache 2.0、一部UIコンポーネントはAGPL-3.0のデュアルライセンスです。

---

### 7. [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard)

> A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.

- Language: Python
- Stars: 5,459
- Forks: 516
- Stars in 1週間: 745
- Category: AIセキュリティ・レッドチーミング
- Keywords: `AIセキュリティ` `レッドチーミング` `脆弱性スキャン` `MCP` `Jailbreak評価` `Tencent`
- Summary source: README

#### README要約

- Tencent朱雀ラボが開発したAIレッドチーミングプラットフォームで、AIセキュリティリスクの自己診断を包括的に支援する。
- ClawScan、Agent Scan、AIインフラ脆弱性スキャン、MCPサーバー＆Agent Skillsスキャン、Jailbreak評価などの機能を統合している。
- AIエージェントやMCPサーバー、LLMを利用する企業や個人のセキュリティ担当者、研究者が対象で、CI/CDパイプラインへの組み込みも可能。
- Dockerで簡単にデプロイできるが、認証機構がないため公開ネットワークへの配置は不可。Apache License 2.0で提供される。

---

### 8. [cactus-compute/needle](https://github.com/cactus-compute/needle)

> 14MB foundation model for tiny devices; phones, wearables, smart home, and robots.

- Language: Python
- Stars: 8,568
- Forks: 556
- Stars in 1週間: 2,985
- Category: 小型言語モデル・ツール呼び出しフレームワーク
- Keywords: `ツール呼び出し` `エッジデバイス` `2bit量子化` `LoRAファインチューニング` `構造化抽出` `Python`
- Summary source: README

#### README要約

- Needle 2は、ツール呼び出し・デバイス操作・構造化抽出に特化したオープンな45Mパラメータの小型モデルで、単一14MBバイナリとして動作する。
- CQ2ビット量子化と独自エンジンにより約28MBのRAMで推論でき、スキーマからコンパイルされるバイトレベル文法で出力をJSONに制約し、信頼度スコアやツール検索ヘッドも備える。
- Pythonパッケージとして提供され、関数デコレータやPydanticモデルでツール定義・抽出ができ、LoRAファインチューニングと.cact形式へのエクスポートをサポートする。
- pip install cactus-needleで導入でき、エンジンはHugging Faceから一度取得されキャッシュされる。オフライン環境向け手順やGPU/Metal向け追加インストールも用意されている。

---

### 9. [noonghunna/club-3090](https://github.com/noonghunna/club-3090)

> Community recipes for serving LLMs on RTX 3090/4090/5090 CUDA gpus. Multi-engine (vLLM, llama.cpp, ik_llama) and model-agnostic. Currently shipping Qwen3.6-27B Qwen3.6 35B Gemma 4 26B Gemma 4 31B configs for 1× and 2× cards.

- Language: Python
- Stars: 2,061
- Forks: 128
- Stars in 1週間: 102
- Category: LLM推論環境構築
- Keywords: `RTX 3090` `vLLM` `llama.cpp` `ローカルLLM` `Docker Compose` `Qwen3.6`
- Summary source: README

#### README要約

- RTX 3090/4090/5090 GPUでLLMをローカル提供するためのコミュニティ製レシピ集です。
- vLLM、llama.cpp、ik_llamaの複数エンジンに対応し、Docker Compose設定とOpenAI互換APIを提供します。
- 1枚または2枚のGPUでホームラボや開発バックエンドとしてLLMを運用したいユーザー向けです。
- Linux/macOS前提で、WindowsはWSL2が必要です。セットアップスクリプトとTUIツールc3で導入できます。

---

### 10. [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)

> 817 structured cybersecurity skills for AI agents · Mapped to 6 frameworks: MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF & MITRE F3 (Fight Fraud) · agentskills.io standard · Works with Claude Code, GitHub Copilot, Codex CLI, Cursor, Gemini CLI & 20+ platforms · 29 security domains · Apache 2.0

- Language: Python
- Stars: 30,651
- Forks: 3,646
- Stars in 1週間: 2,794
- Category: サイバーセキュリティAIスキルライブラリ
- Keywords: `AIエージェント` `MITRE ATT&CK` `NIST CSF` `agentskills.io` `脅威ハンティング` `Apache-2.0`
- Summary source: README

#### README要約

- AIエージェント向けの817件の構造化サイバーセキュリティスキルを収録したオープンソースライブラリ。
- agentskills.io標準に準拠し、MITRE ATT&CKやNIST CSF 2.0など6つのフレームワークにマッピングされている。
- セキュリティアナリストや開発者がAIエージェントに専門的な調査・防御・攻撃演習の知識を与える用途を想定。
- npxまたはgit cloneで導入可能。攻撃的・デュアルユース技術を含むため、許可された環境でのみ使用する必要がある。

---

### 11. [megadose/holehe](https://github.com/megadose/holehe)

> holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.

- Language: Python
- Stars: 13,989
- Forks: 1,818
- Stars in 1週間: 1,300
- Category: OSINTツール
- Keywords: `OSINT` `メールアドレス調査` `アカウント存在確認` `Python` `CLI` `パスワードリカバリ`
- Summary source: README

#### README要約

- メールアドレスがTwitterやInstagramなど120以上のサイトでアカウント登録に使われているかを確認するOSINTツール。
- 各サイトのパスワード再設定機能などを利用して登録有無を判定し、対象のメールアドレスに通知を送らずに調査できる。
- セキュリティ調査やアカウント存在確認を行いたいユーザー向けで、CLIやPythonアプリへの組み込みに対応する。
- pip・GitHub・Dockerで導入可能でPython 3が必要。教育目的のみを想定し、レート制限時はIP変更が案内されている。

---

### 12. [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup)

> Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU.

- Language: Python
- Stars: 2,753
- Forks: 409
- Stars in 1週間: 1,434
- Category: LLMファインチューニングCLI
- Keywords: `LLM` `ファインチューニング` `QLoRA` `レイヤーストリーミング` `YAML設定` `低VRAM学習`
- Summary source: README

#### README要約

- SoupはYAML設定1つとコマンド1つでLLMのファインチューニングとポストトレーニングを行うPython製CLIツール。
- レイヤーストリーミングにより凍結ベースモデルをVRAM外に保持しデコーダ層を逐次GPUへ供給、QLoRA・4bit量子化・バッチサイズやGPU検出の自動化に対応。
- クラウド不要でローカルGPU上で学習したい開発者や、SSHやインフラ設定の手間を省きたいチームが対象で、DPOやORPOなどの選好学習も利用可能。
- pip install "soup-cli[train]"で導入しsoup initとsoup trainで開始、Python 3.10〜3.12のみ対応、レイヤーストリーミングはオプトインのBETA機能。

---

### 13. [youssofal/MTPLX](https://github.com/youssofal/MTPLX)

> 3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.

- Language: Python
- Stars: 1,568
- Forks: 114
- Stars in 1週間: 369
- Category: LLM推論加速ツール
- Keywords: `MLX` `Apple Silicon` `MTP` `投機的デコーディング` `Qwen` `ローカルLLM`
- Summary source: README

#### README要約

- Apple Silicon上でローカルLLMを約2倍高速に実行するネイティブMacアプリとCLIツール。
- Qwen 3.5/3.6/3.8などのモデルに内蔵されたMTPヘッドを活用し、外部ドラフターモデルなしで複数トークンを予測・検証する。
- コーディングやチャット用途のユーザー向けで、OpenAI/Anthropic互換APIサーバーとしても動作し、Claude CodeやOpen WebUIなどと連携可能。
- Apple Silicon (M1以降) とmacOS 14+が必要。16GBメモリで4B/9Bモデル、32GB以上でQwen 3.8 27B推奨。DMGまたはbrew/pipでインストール可能。

---

### 14. [index-tts/index-tts](https://github.com/index-tts/index-tts)

> An Industrial-Level Controllable and Efficient Zero-Shot Text-To-Speech System

- Language: Python
- Stars: 23,351
- Forks: 2,813
- Stars in 1週間: 430
- Category: 音声合成
- Keywords: `TTS` `ゼロショット` `音声クローン` `多言語対応` `感情制御` `Python`
- Summary source: README

#### README要約

- IndexTTSは、1つの参照音声クリップから声をクローンするゼロショット音声合成（TTS）システムです。
- 最新版IndexTTS-2.5は中国語・英語・日本語・スペイン語・アラビア語に対応し、感情制御、話速制御、発音制御（拼音/CMU音素/日本語仮名）を備え、IndexTTS-2より高速に推論できます。
- 音声合成の研究開発者や、多言語対応の高品質な音声生成を必要とするプロダクト開発者に適しています。
- 導入にはuvによる依存関係管理が必須で、モデルはHuggingFaceまたはModelScopeからダウンロードします。GPU環境ではCUDA Toolkit 12.8以上が推奨されます。

---

### 15. [usestrix/strix](https://github.com/usestrix/strix)

> Open-source AI penetration testing tool to find and fix your app’s vulnerabilities.

- Language: Python
- Stars: 57,046
- Forks: 6,156
- Stars in 1週間: 4,624
- Category: セキュリティテスト
- Keywords: `ペネトレーションテスト` `AIエージェント` `脆弱性スキャン` `セキュリティ自動化` `PoC検証` `CI/CD統合`
- Summary source: README

#### README要約

- Strixは、アプリケーションの脆弱性を発見・修正するオープンソースのAIペネトレーションテストツールです。
- 自律型AIエージェントが実際のハッカーのようにコードを動的に実行し、実証可能なPoCを通じて脆弱性を検証します。
- 開発者やセキュリティチーム向けに、手動ペンテストの負担や静的解析ツールの誤検知を削減した高速で正確なセキュリティテストを提供します。
- DockerとLLM APIキーが必要で、curlによるインストール後、CLIコマンドでスキャンを実行できます。

---

### 16. [microsoft/agent-framework](https://github.com/microsoft/agent-framework)

> A framework for building, orchestrating and deploying AI agents and multi-agent workflows with support for Python and .NET.

- Language: Python
- Stars: 13,052
- Forks: 2,214
- Stars in 1週間: 235
- Category: AIエージェントフレームワーク
- Keywords: `AIエージェント` `マルチエージェント` `ワークフロー` `Python` `.NET` `オーケストレーション`
- Summary source: README

#### README要約

- Microsoft Agent Frameworkは、.NETとPythonで本番運用可能なAIエージェントおよびマルチエージェントワークフローを構築するためのオープンなマルチ言語フレームワークです。
- グラフベースのオーケストレーション（逐次・並行・ハンドオフ・グループ協調）、ミドルウェア、OpenTelemetryによる可観測性、YAMLによる宣言的エージェント定義などを提供します。
- プロトタイプから本番運用へ移行するチームを対象とし、Microsoft Foundry、Azure OpenAI、OpenAI、GitHub Copilot SDKなど複数のLLMプロバイダーに対応しています。
- Pythonはpip install agent-framework、.NETはdotnet add package Microsoft.Agents.AIで導入でき、Go SDKは別リポジトリで提供されます。

---

### 17. [shy3130/tickflow-stock-panel](https://github.com/shy3130/tickflow-stock-panel)

> TSP自托管、零运维的 A 股「选股 + 监控 + 回测」量化工作台 | 基于 TickFlow 数据源 | LLM能力驱使策略定制+个股分析+复盘 | 自由接入第三方数据源与个性化扩展数据 | 个人开源 ,非TickFlow官方项目

- Language: Python
- Stars: 3,455
- Forks: 812
- Stars in 1週間: 595
- Category: 株式量化分析ツール
- Keywords: `A株` `量化取引` `バックテスト` `FastAPI` `Polars` `セルフホスト`
- Summary source: README

#### README要約

- TickFlowデータソースを基盤とした、セルフホスト型のA株向け「スクリーニング＋監視＋バックテスト」量化ワークベンチ。
- 18種類の内蔵戦略とPolarsによる高速スキャン、vectorbtベースのバックテスト（T+1・手数料・スリッページ対応）、4種類のリアルタイム監視ルールを提供。
- 個人投資家や量化愛好家を対象とし、AIによる戦略生成・個別株分析・市場レビュー機能を備え、第三者データソースの拡張も可能。
- Python 3.11以上とNode 20以上が必要で、Dockerまたは開発モードで導入。学習・研究目的のみで商用利用は禁止されており、投資助言ソフトではない。

---

### 18. [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)

> 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!

- Language: Python
- Stars: 75,856
- Forks: 7,580
- Stars in 1週間: 1,786
- Category: Webスクレイピング
- Keywords: `Python` `Webスクレイピング` `適応型パーサー` `ボット対策回避` `スパイダー` `プロキシローテーション`
- Summary source: README

#### README要約

- 単一リクエストから大規模クロールまで対応する、適応型のPython製Webスクレイピングフレームワークです。
- サイト構造の変化を学習して要素を自動再配置するパーサー、Cloudflare Turnstile等のボット対策を回避するフェッチャー、並列・マルチセッション対応のスパイダー機能を備えます。
- プロキシローテーションや一時停止・再開機能を持つため、安定した大規模データ収集を行いたい開発者やスクレイパーに適しています。
- pipやDockerで導入可能ですが、利用は教育・研究目的に限定され、対象サイトの利用規約やrobots.txtの遵守が必須です。

---
