+++
title = 'GitHub Trending 1週間レポート (All) - 2026/08/20'
date = 2026-08-20T05:49:03.868Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月20日 5:49:03
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 15
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIエージェント向けのコンテキスト・メモリ基盤と、ローカルで動く小型モデル・推論ツールが台頭し、開発者が自分の環境でAIを制御する流れが強まっている。

- AIエージェントのコンテキスト管理・メモリ・ナレッジグラフを担う基盤系リポジトリ（semantica、OpenViking）が上位に並んだ
- ローカル実行・ローカル学習を前提にしたツール（unsloth、omlx、llmfit、needle）が複数ランクインし、オンデバイスAIへの関心がうかがえる
- Claude CodeやCodexなどのコーディングエージェントと連携するツール（diagram-design、freebuff、OpenViking）が目立つ
- AIによるコンテンツ自動生成系（MoneyPrinterTurboの動画生成、modlyの3Dモデル生成、diagram-designのダイアグラム生成）も高いスターを獲得している
- 言語分布はPythonが最多で、RustやTypeScript製のツールも複数入っている

### 主なテーマ

- **AIエージェントのコンテキスト・メモリ基盤**: semanticaはナレッジグラフとW3C PROV-O由来の監査証跡で意思決定の来歴を記録し、OpenVikingはメモリ・RAG・スキルをviking://プロトコルで統一管理するコンテキストデータベース。いずれもLLMやエージェントの下位に置くインフラ層をうたっており、エージェントの文脈管理への需要が高い。（`semantica-agi/semantica`、`volcengine/OpenViking`）
- **ローカル・オンデバイスAIの実行と学習**: unslothはLLMや拡散モデルのローカル実行・ファインチューニング用デスクトップアプリ、omlxはApple Silicon向け推論サーバー、llmfitはハードウェアに適したモデルを検出するCLI、needleは14MBで動く小型モデルと、自分のハードウェアでAIを動かすツールが4件ランクインしている。（`unslothai/unsloth`、`jundot/omlx`、`AlexsJones/llmfit`、`cactus-compute/needle`）
- **コーディングエージェントとの連携・拡張**: diagram-designはClaude CodeやCodex向けのダイアグラム生成スキルとしてプラグインインストールに対応し、freebuffは無料のAIコーディングエージェントそのものを提供。OpenVikingもClaude CodeやCursorとの統合をうたっており、コーディングエージェントのエコシステムを対象にしたツールが目立つ。（`cathrynlavery/diagram-design`、`CodebuffAI/freebuff`、`volcengine/OpenViking`）
- **AIによるコンテンツ自動生成**: MoneyPrinterTurboはテーマからショート動画を自動生成し7380スターを獲得、modlyは画像やプロンプトからローカルGPUで3Dモデルを生成、diagram-designは38種類のエディトリアルダイアグラムを生成するなど、AIで制作物を自動生成するツールが複数上位に入っている。（`harry0703/MoneyPrinterTurbo`、`lightningpixel/modly`、`cathrynlavery/diagram-design`）

### 補足的な観察

- スター数のトップはdiagram-designの14397で、次いでpublic-apisの10183、MoneyPrinterTurboの7380と、AI以外の定番リスト系も根強い人気がある
- 15件中7件がPython製で最多、Rust製が3件（macro、llmfit、microsandbox）、TypeScript製が2件（modly、freebuff）と続く
- microsandboxは460スターと最少ながら、AIエージェントのコードを安全に実行するmicroVMランタイムとして、エージェント基盤のセキュリティ面を補完する存在になっている
- holehe（OSINT）やomarchy（Linuxディストリビューション）などAIと直接関係ないツールもランクインしており、関心がAI一色ではない

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 8 |
| Rust | 3 |
| TypeScript | 2 |
| HTML | 1 |
| Shell | 1 |

## Repository一覧

### 1. [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)

> 38 editorial diagram types for Claude Code, Codex, and Pi. Self-contained HTML + SVG. No shadows. No Mermaid slop.

- Language: HTML
- Stars: 23,619
- Forks: 1,449
- Stars in 1週間: 14,397
- Category: ダイアグラム生成ツール
- Keywords: `ダイアグラム` `HTML+SVG` `Claude Code` `エディトリアルデザイン` `38種類` `自己完結型`
- Summary source: README

#### README要約

- Claude Code、Codex、Factory Droid、Pi向けに38種類のエディトリアル品質のダイアグラムを生成するスキル。
- 自己完結型のHTML+SVGで出力され、ビルド不要・JavaScript不要で、minimal light、minimal dark、full-editorialの3つの静的バリアントを提供する。
- アーキテクチャ図、フローチャート、シーケンス図、ER図、ガントチャートなどを必要とする開発者やデザイナーが、ブランドに合った高品質な図を素早く作成する用途に適している。
- Claude Codeでは/plugin marketplace addと/plugin installコマンドで、Codexではcodex plugin marketplace addとcodex plugin addコマンドでインストール可能。draw.ioやMermaidソースの再描画にも対応している。

---

### 2. [cactus-compute/needle](https://github.com/cactus-compute/needle)

> 14MB foundation model for tiny devices; phones, wearables, smart home, and robots.

- Language: Python
- Stars: 7,886
- Forks: 511
- Stars in 1週間: 3,838
- Category: 小型言語モデル
- Keywords: `ツール呼び出し` `エッジデバイス` `LoRAファインチューニング` `構造化抽出` `2ビット量子化` `Python`
- Summary source: README

#### README要約

- Needle 2はツール呼び出し・デバイス操作・構造化抽出向けの45Mパラメータのオープンな小型モデルで、単一14MBバイナリとして動作する。
- CQ2ビット量子化と独自エンジンにより約28MBのRAMで動作し、バイトレベル文法による出力制約、信頼度スコア、ツール検索、256トークンのスライディングウィンドウを備える。
- Pythonパッケージとして推論・LoRAファインチューニング・エクスポートを提供し、関数デコレータやPydanticモデルでツール定義や抽出ができる。
- pip install cactus-needleで導入でき、エンジンはHugging Faceから一度取得されキャッシュされる。オフライン環境向け設定やGPU/Metalでの学習用エクストラも用意されている。

---

### 3. [semantica-agi/semantica](https://github.com/semantica-agi/semantica)

> Graph-Native Infrastructure for Context and Accountable AI Systems

- Language: Python
- Stars: 9,622
- Forks: 1,015
- Stars in 1週間: 4,005
- Category: AIナレッジグラフ基盤
- Keywords: `ナレッジグラフ` `意思決定プロベナンス` `決定論的推論` `AIガバナンス` `W3C PROV-O` `監査証跡`
- Summary source: README

#### README要約

- LLMやエージェントの下位に置く決定論的インフラ層で、企業データを取り込みContext Graphとナレッジグラフを構築し、意思決定の完全な来歴を記録するOSS。
- W3C PROV-O由来の監査証跡、SHACL制約、Forward chaining/Rete/Datalog/SPARQLによる説明可能な推論、競合検出、RDF/LPG両対応のポリグロットグラフストレージを提供する。
- 金融・医療・政府など規制業界のAI/MLプラットフォームチーム、コンプライアンス担当者、Databricks/Snowflake上のデータをガバナンス付きKG化したいデータ基盤チームが対象。
- pip install semanticaで導入可能で、LLM内部の推論過程は説明対象外であり、モデル外部のコンテキスト・決定・実行経路の説明に特化している点に注意。

---

### 4. [megadose/holehe](https://github.com/megadose/holehe)

> holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.

- Language: Python
- Stars: 13,762
- Forks: 1,798
- Stars in 1週間: 1,704
- Category: OSINTツール
- Keywords: `OSINT` `メールアドレス` `アカウント調査` `Python` `CLI` `パスワード回復`
- Summary source: README

#### README要約

- メールアドレスが120以上のサイトでアカウント登録に使われているかを確認するOSINTツール。
- パスワード忘れ機能などを利用してアカウントの存在を判定し、対象に通知せず、回復用メールや電話番号の一部を取得できる。
- 調査・セキュリティ用途のユーザーがCLIやPythonアプリに組み込んで利用する。
- pip・GitHub・Dockerで導入可能で、Python 3が必要。教育目的のみで、レート制限時はIP変更が案内されている。

---

### 5. [basecamp/omarchy](https://github.com/basecamp/omarchy)

> Beautiful, Modern & Opinionated Linux

- Language: Shell
- Stars: 26,833
- Forks: 2,741
- Stars in 1週間: 2,208
- Category: Linuxディストリビューション
- Keywords: `Linux` `DHH` `デスクトップ環境` `オピニオネーテッド` `Shell` `MITライセンス`
- Summary source: README

#### README要約

- DHHが手がける美しくモダンでオピニオネーテッドなLinuxディストリビューション。
- テーマ、ホットキー、統合クリップボード、スクリーンショット、Omarchy CLIなどの機能をマニュアルで体系的に解説している。
- MacやWindowsからの移行ユーザーを含む開発者向けに、NeovimやAIツール、開発環境、ゲーミングまで幅広い用途をカバーする。
- manual/ディレクトリが正規のドキュメントソースで、MITライセンスの下で公開されている。

---

### 6. [volcengine/OpenViking](https://github.com/volcengine/OpenViking)

> Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.

- Language: Python
- Stars: 30,453
- Forks: 2,354
- Stars in 1週間: 1,659
- Category: AIエージェント基盤
- Keywords: `コンテキストデータベース` `AIエージェント` `メモリ管理` `RAG` `階層的検索` `viking://`
- Summary source: README

#### README要約

- OpenVikingはAIエージェント向けのオープンソースコンテキストデータベースで、メモリ・リソース・スキルをviking://プロトコルの仮想ファイルシステムとして統一管理する。
- コンテンツをL0（要約）・L1（概要）・L2（詳細）の3層に処理してオンデマンドで読み込み、ディレクトリ再帰検索と観測可能な検索軌跡によりトークン削減とデバッグを実現する。
- Claude Code、Codex、Cursor、LangChain等のエージェント統合を提供し、セッション終了後にユーザー嗜好やエージェント経験を長期メモリへ自動抽出する。
- Python 3.10以上が必要でpip install openvikingで導入でき、initウィザードでVolcengine/OpenAI/Ollama等のプロバイダを設定する。メインプロジェクトはAGPLv3ライセンス。

---

### 7. [macro-inc/macro](https://github.com/macro-inc/macro)

> Macro is a unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM — @-linked together with shared AI memory.

- Language: Rust
- Stars: 3,800
- Forks: 368
- Stars in 1週間: 2,557
- Category: チームコラボレーション
- Keywords: `統合ワークスペース` `AIエージェント` `Rust` `オープンソース` `CRM` `リアルタイム共同編集`
- Summary source: README

#### README要約

- Macroは、メール、チャット、ドキュメント、タスク、AIエージェント、CRMを単一の高速インターフェースに統合したオールインワンのチーム向けワークスペースです。
- モジュール式の「ブロック」で構成され、全データが双方向グラフで@リンクされ、チームとAIエージェントが共有する統合メモリを通じてシームレスに連携します。
- スタートアップや小規模チーム、大企業内の部門が、分散したツールを統合する「オペレーティングシステム」として利用することを想定しています。
- AGPLv3の完全なオープンソースとして提供され、セルフホストが可能です。ローカル環境での実行手順はドキュメントに記載されています。

---

### 8. [unslothai/unsloth](https://github.com/unslothai/unsloth)

> Local UI to run and train LLMs and diffusion models, including Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4, FLUX and more.

- Language: Python
- Stars: 73,931
- Forks: 6,677
- Stars in 1週間: 3,338
- Category: ローカルAIモデル実行・学習ツール
- Keywords: `LLM` `ファインチューニング` `ローカル実行` `拡散モデル` `GGUF` `デスクトップアプリ`
- Summary source: README

#### README要約

- Unslothは、LLMや拡散モデルなどをローカル環境で実行・学習・デプロイするためのデスクトップアプリおよび関連ツール群です。
- LLM、拡散、埋め込み、音声モデルの実行とファインチューニングに対応し、LoRAやQLoRA、RL、GGUFなどへのエクスポート、OpenAI互換APIでの提供、RAGやエージェント連携などの機能を備えています。
- ローカルでAIモデルを扱いたい開発者や研究者、Claude CodeやCodexなどのコーディングエージェントとローカルモデルを組み合わせて使いたいユーザーに適しています。
- Windows、macOS、Linux向けのデスクトップアプリ、Web UIのUnsloth Studio、コードベースのUnsloth Coreの3形態で提供され、CPUやNVIDIA、AMD、Intel、Appleなど多様なハードウェアをサポートしますが、一部機能はベータ版です。

---

### 9. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)

> 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.

- Language: Python
- Stars: 111,455
- Forks: 16,887
- Stars in 1週間: 7,380
- Category: AI動画生成ツール
- Keywords: `AI` `ショート動画` `自動生成` `Python` `TTS` `SNS投稿`
- Summary source: README

#### README要約

- テーマやキーワードを入力するだけで、AIが動画スクリプト生成から素材選定、字幕・BGM付与までを自動化し、高画質なショート動画を作成するツールです。
- WebUI、API、CLI、AIエージェントの4つの利用形態を備え、複数のLLMや音声合成サービスに対応し、縦横両方のHDサイズやバッチ生成、字幕スタイル調整などが可能です。
- SNS向けショート動画を効率よく量産したいクリエイターや、TikTok・Instagram・YouTube Shortsへの自動投稿を含めた動画制作ワークフローを構築したい開発者・運用者に適しています。
- Python製でffmpegの設定や各種APIキーの準備が必要な場合があり、環境によってはファイル数制限やモデルダウンロードなどの追加対応が求められる点に注意が必要です。

---

### 10. [lightningpixel/modly](https://github.com/lightningpixel/modly)

> Desktop app to generate 3D models from images or prompt using local AI — runs entirely on your GPU

- Language: TypeScript
- Stars: 6,940
- Forks: 666
- Stars in 1週間: 1,797
- Category: 3Dモデル生成ツール
- Keywords: `3Dモデル生成` `ローカルAI` `画像から3D` `デスクトップアプリ` `オープンソース` `GPU処理`
- Summary source: README

#### README要約

- 画像やプロンプトから3Dモデルを生成するローカルAI搭載のオープンソースデスクトップアプリ。
- GPU上で動作するAIモデルを使用し、拡張機能システムでHunyuan3DやTripoSGなど複数のモデルをサポート。
- 3Dモデリングやゲーム開発、3Dプリントなどの用途に適し、CLI経由でスクリプトからの自動化も可能。
- Windows、Linux、Apple Silicon macOSに対応し、Releasesページからインストーラーをダウンロード可能。

---

### 11. [public-apis/public-apis](https://github.com/public-apis/public-apis)

> A collective list of free APIs

- Language: Python
- Stars: 466,299
- Forks: 51,449
- Stars in 1週間: 10,183
- Category: APIリスト
- Keywords: `公開API` `無料API` `キュレーションリスト` `REST API` `開発者向け` `カテゴリ別`
- Summary source: README

#### README要約

- 無料で利用できる公開APIを集めた、コミュニティ主導のキュレーションリストです。
- 動物、天気、金融、開発など多数のカテゴリ別に整理され、各APIの認証方式、HTTPS対応、CORS対応を表形式で示しています。
- 自分のプロダクトに組み込むAPIを探す開発者や、API情報を調べたい人を対象としています。
- リストは手動で管理されており、貢献ガイドに従ってプルリクエストで追加・修正できます。ライセンスはMITです。

---

### 12. [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)

> Hundreds of models & providers. One command to find what runs on your hardware.

- Language: Rust
- Stars: 33,114
- Forks: 2,052
- Stars in 1週間: 1,545
- Category: LLMハードウェア適合性チェッカー
- Keywords: `LLM` `ハードウェア検出` `モデル推奨` `Rust` `TUI` `ベンチマーク`
- Summary source: README

#### README要約

- システムのRAM、CPU、GPUに適したLLMモデルを見つけるためのターミナルツールです。
- ハードウェアを検出し、品質・速度・適合性・コンテキストの4つの次元で各モデルをスコアリングします。
- ローカルでLLMを実行したい開発者や、自分のマシンでどのモデルが動作するかを知りたいユーザー向けです。
- Homebrew、Scoop、Docker、ソースからのビルドなど複数の方法でインストール可能で、MITライセンスで提供されています。

---

### 13. [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox)

> 🧱 easy fast local-first microVM runtime and library

- Language: Rust
- Stars: 7,798
- Forks: 410
- Stars in 1週間: 460
- Category: セキュア実行環境
- Keywords: `microVM` `サンドボックス` `OCI互換` `Rust` `クロスプラットフォーム` `SDK`
- Summary source: README

#### README要約

- 信頼できないワークロード（AIエージェント、ユーザーコード、プラグインなど）を高速なローカルmicroVM内で実行するためのランタイムおよびライブラリ。
- ハードウェアレベルの分離、OCI互換イメージのサポート、Dockerライクなワークフロー、100ミリ秒未満の起動時間、およびRust/Python/TypeScript/Go向けの組み込み可能なSDKを提供。
- AIエージェント、CIジョブ、開発環境、スクレイパー、自動化など、セキュアな分離環境が必要な開発者やアプリケーションを対象としている。
- macOS（Apple Silicon）、Linux（KVM有効）、Windows（WHP有効）が必要で、ベータ版のため破壊的変更や機能不足の可能性がある。

---

### 14. [jundot/omlx](https://github.com/jundot/omlx)

> LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar

- Language: Python
- Stars: 19,897
- Forks: 1,696
- Stars in 1週間: 1,102
- Category: LLM推論サーバー
- Keywords: `Apple Silicon` `MLX` `連続バッチング` `KVキャッシュ` `OpenAI互換API` `macOSアプリ`
- Summary source: README

#### README要約

- Apple Silicon向けに最適化されたLLM推論サーバーで、macOSのメニューバーから直接管理できます。
- 連続バッチングとRAM/SSDの2層KVキャッシュを備え、LLM・VLM・埋め込み・リランカーを同一サーバーで提供します。
- Claude CodeなどのOpenAI互換クライアントからの利用や、複数Macへの分散推論、管理ダッシュボードでの監視に対応します。
- macOS 15以降・Python 3.11〜3.13・Apple Siliconが必要で、DMG・Homebrew・ソースからインストールできます。

---

### 15. [CodebuffAI/freebuff](https://github.com/CodebuffAI/freebuff)

> The free coding agent

- Language: TypeScript
- Stars: 10,136
- Forks: 1,124
- Stars in 1週間: 1,037
- Category: AIコーディングエージェント
- Keywords: `無料` `マルチエージェント` `CLI` `TypeScript` `Codebuff` `マルチモデル`
- Summary source: README

#### README要約

- Freebuffは、サブスクリプションやAPIキー不要で使える無料のAIコーディングエージェント製品群です。
- 専門エージェントがコードベースの文脈把握、計画、編集、ツール実行、レビューを分担し、複数のAIモデルを選択できます。
- ターミナル、デスクトップ、ブラウザ、GitHubリポジトリで動作し、開発者がコーディング、アプリ構築、調査に利用できます。
- npmでCLIをインストールして即開始可能ですが、無料提供はテキスト広告で支えられ、地域やモデルごとにセッション制限やデータ利用規約があります。

---
