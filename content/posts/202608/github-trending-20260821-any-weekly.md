+++
title = 'GitHub Trending 1週間レポート (All) - 2026/08/21'
date = 2026-08-21T21:23:00.682Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月21日 21:23:00
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェント向けの周辺ツール（図表生成・メモリ・コンテキスト管理）と、ローカル・エッジでのAI実行基盤が強く注目されている

- Claude CodeやCodexなどのコーディングエージェントを補助するツールが複数ランクインしており、図表生成スキル（cathrynlavery/diagram-design）が11,000超のスターで突出している
- エージェントの長期メモリやコンテキスト管理を担う基盤（volcengine/OpenViking、akitaonrails/ai-memory、semantica-agi/semantica）が並び、エージェントの実運用化に向けた周辺インフラへの関心がうかがえる
- ローカル・エッジ実行のAIツールが充実しており、14MBの小型モデル（cactus-compute/needle）、Apple Silicon向け推論サーバー（jundot/omlx）、ローカル学習UI（unslothai/unsloth）などが登場している
- AI以外では、DHH氏のLinuxディストリビューション（basecamp/omarchy）や無料APIリスト（public-apis/public-apis）といった定番・話題系プロジェクトも高いスターを獲得している
- 言語分布はPythonが最多だが、Rust製ツールが5件と多く、パフォーマンス重視のユーティリティ領域での採用が目立つ

### 主なテーマ

- **コーディングエージェントの拡張エコシステム**: Claude Code・Codex・Cursor等を対象としたツールが複数登場している。diagram-designは38種の図表生成スキルで11,325スターと今期最大の伸びを示し、ai-memoryはエージェント間の長期メモリと引き継ぎを、freebuffは無料のコーディングエージェント自体を提供する。エージェント本体よりも周辺の使い勝手を高めるツールへの需要が強い（`cathrynlavery/diagram-design`、`akitaonrails/ai-memory`、`CodebuffAI/freebuff`）
- **エージェント向けメモリ・コンテキスト基盤**: OpenVikingはメモリ・RAG・スキルを仮想ファイルシステムで統一するコンテキストDB、semanticaはプロベナンス付きナレッジグラフで監査可能な意思決定基盤を提供する。いずれもエージェントが扱うコンテキストの永続化・構造化・説明可能性を担うインフラ層のプロジェクトであり、実運用を意識した設計が共通している（`volcengine/OpenViking`、`semantica-agi/semantica`）
- **ローカル・エッジでのAI実行**: needleは14MB・45Mパラメータでツール呼び出しに特化した超小型モデル、omlxはApple Silicon向け推論サーバー、unslothはローカルでのLLM学習・実行UI、llmfitは自ハードウェアで動くモデル選定ツール、modlyはローカルGPUでの3Dモデル生成アプリと、クラウドに依存しないAI実行環境を整えるプロジェクトが5件集まっている（`cactus-compute/needle`、`jundot/omlx`、`unslothai/unsloth`、`AlexsJones/llmfit`、`lightningpixel/modly`）
- **LLMの運用・ルーティング基盤**: NVIDIAのSwitchyardはOpenAI/Anthropic API互換を保ちながら複数モデル・プロバイダーへトラフィックを振り分けるRust製プロキシで、コスト最適化やベンチマークを狙う。modular/modularのMAX推論サーバーもOpenAI互換エンドポイントを備え、モデル選択の柔軟性を重視する層のプロジェクトが形成されている（`NVIDIA-NeMo/Switchyard`、`modular/modular`）
- **AIコンテンツ生成と実用ツール**: MoneyPrinterTurboはテーマ入力からショート動画を自動生成するツールで9,712スターと高い伸びを示し、AI生成コンテンツへの実用的な関心の高さを反映している。一方でholehe（OSINT）、OpenLogi（Logitechデバイス管理）、omarchy（Linuxディストリ）、public-apis（APIリスト）、macro（統合ワークスペース）など非AI系の実用ツールも並び、関心が多様化している（`harry0703/MoneyPrinterTurbo`、`megadose/holehe`、`AprilNEA/OpenLogi`、`basecamp/omarchy`、`public-apis/public-apis`、`macro-inc/macro`）

### 補足的な観察

- スター数の上位2件はdiagram-design（11,325）とpublic-apis（11,259）で、AIスキルと定番キュレーションリストが並ぶ構成。MoneyPrinterTurbo（9,712）が続き、AIコンテンツ生成の人気も根強い
- 言語分布はPythonが7件で最多、Rustが5件で次いでおり、Rustは推論プロキシ・メモリ管理・デバイス制御など性能重視のツールに集中している
- Claude CodeやCodexへの言及がdiagram-design、OpenViking、ai-memory、omlx、Switchyardの5件に及び、コーディングエージェントが事実上の共通プラットフォームとして意識されている
- プレアルファ（Switchyard）や開発中（OpenLogi）と明記されたプロジェクトもランクインしており、早期段階の実験的ツールへのスターが集まりやすい傾向がある

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 8 |
| Rust | 5 |
| TypeScript | 2 |
| HTML | 1 |
| Mojo | 1 |
| Shell | 1 |

## Repository一覧

### 1. [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)

> 38 editorial diagram types for Claude Code, Codex, and Pi. Self-contained HTML + SVG. No shadows. No Mermaid slop.

- Language: HTML
- Stars: 24,940
- Forks: 1,518
- Stars in 1週間: 11,325
- Category: AIコーディングツール用図表生成スキル
- Keywords: `Claude Code` `Codex` `図表生成` `HTML+SVG` `エディトリアルデザイン` `プラグイン`
- Summary source: README

#### README要約

- Claude Code、Codex、Factory Droid、Pi向けに39種類のエディトリアル品質の図表を生成するスキル。
- 自己完結型のHTML+SVGで出力され、ビルド不要・JavaScript不要で、ミニマルライト/ダーク/フルエディトリアルの3バリアントを提供。
- Webサイトを読み取りブランドに合わせた図表を作成でき、draw.ioやMermaidソースの再描画にも対応する。
- プラグインマーケットプレイスからインストール可能で、静的HTMLがデフォルト、オプションでアクセシブルなモーションも利用できる。

---

### 2. [volcengine/OpenViking](https://github.com/volcengine/OpenViking)

> Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.

- Language: Python
- Stars: 31,616
- Forks: 2,424
- Stars in 1週間: 2,444
- Category: AIエージェント基盤
- Keywords: `コンテキストデータベース` `AIエージェント` `RAG` `長期メモリ` `仮想ファイルシステム` `階層的検索`
- Summary source: README

#### README要約

- OpenVikingはAIエージェント向けのオープンソースコンテキストデータベースで、メモリ・リソース・スキルをviking://プロトコルの仮想ファイルシステムとして統一管理する。
- コンテンツをL0（要約）・L1（概要）・L2（詳細）の3層に処理してオンデマンドで読み込み、ディレクトリ再帰検索と検索軌跡の可視化によりトークン削減とデバッグを実現する。
- Claude Code、Codex、Cursor、LangChain等のエージェントと連携し、セッション終了後にユーザー嗜好やエージェント経験を長期メモリとして自動抽出する開発者向けツール。
- Python 3.10以上が必要でpip install openvikingで導入でき、Volcengine/OpenAI/Ollama等のプロバイダーを対話的に設定する。メインプロジェクトはAGPLv3ライセンス。

---

### 3. [basecamp/omarchy](https://github.com/basecamp/omarchy)

> Beautiful, Modern & Opinionated Linux

- Language: Shell
- Stars: 27,428
- Forks: 2,809
- Stars in 1週間: 2,395
- Category: Linuxディストリビューション
- Keywords: `Linux` `デスクトップ環境` `オピニオネイテッド` `DHH` `テーマ` `MITライセンス`
- Summary source: README

#### README要約

- DHHによる美しくモダンでオピニオネイテッドなLinuxディストリビューション。
- テーマ、ホットキー、統合クリップボード、スクリーンショット、Omarchy CLIなどの機能をマニュアルで体系的に解説している。
- MacやWindowsからの移行ユーザーを含むデスクトップLinux利用者向けで、開発ツールやGUI/TUIアプリの設定も網羅。
- マニュアルはmanual/ディレクトリが正本でlearn.omacom.ioにもミラーされ、MITライセンスで公開されている。

---

### 4. [cactus-compute/needle](https://github.com/cactus-compute/needle)

> 14MB foundation model for tiny devices; phones, wearables, smart home, and robots.

- Language: Python
- Stars: 8,308
- Forks: 534
- Stars in 1週間: 3,409
- Category: 小型言語モデル
- Keywords: `ツール呼び出し` `エッジデバイス` `LoRA` `量子化` `構造化抽出` `Python`
- Summary source: README

#### README要約

- Needle 2は、ツール呼び出し・デバイス操作・構造化抽出に特化した45Mパラメータのオープンな小型モデルで、14MBの単一バイナリとして動作する。
- CQ2ビット量子化とSimple Attention Networkアーキテクチャを採用し、約28MBのRAMで動作、バイトレベル文法による出力制約や信頼度スコア付き応答を備える。
- Pythonパッケージとして提供され、関数デコレータでツールを定義するだけで利用でき、LoRAファインチューニングやPydanticモデルによる型付き抽出も可能。
- pip install cactus-needleで導入でき、エンジンはHugging Faceから自動取得される。オフライン環境向けセットアップやGPU/Metal対応のファインチューニングもサポート。

---

### 5. [semantica-agi/semantica](https://github.com/semantica-agi/semantica)

> Graph-Native Infrastructure for Context and Accountable AI Systems

- Language: Python
- Stars: 10,051
- Forks: 1,073
- Stars in 1週間: 3,674
- Category: AIナレッジグラフ基盤
- Keywords: `ナレッジグラフ` `プロベナンス` `決定論的推論` `AIガバナンス` `監査証跡` `コンテキストグラフ`
- Summary source: README

#### README要約

- エンタープライズデータからコンテキストグラフとナレッジグラフを構築し、AIシステムに説明可能で監査可能な意思決定基盤を提供するオープンソースのPythonインフラ。
- W3C PROV-O由来のプロベナンス、SHACL制約、Rete/Datalog/SPARQLによる決定論的推論、競合検出、RDF/LPG両対応のポリグロットグラフストレージを備える。
- 金融・医療・政府など規制産業のAI/MLプラットフォームチーム、コンプライアンス担当者、Databricks/Snowflake上のデータ基盤チームを対象とする。
- pip install semanticaで導入可能。LLM内部の推論は説明対象外で、モデル外部のコンテキスト・決定・実行トレイルの説明に特化している点に注意。

---

### 6. [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)

> Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.

- Language: Rust
- Stars: 2,044
- Forks: 183
- Stars in 1週間: 932
- Category: LLMプロキシ
- Keywords: `LLMルーティング` `Rust` `OpenAI API` `Anthropic API` `プロトコル変換` `Prometheusメトリクス`
- Summary source: README

#### README要約

- SwitchyardはLLMトラフィックを複数のモデルやプロバイダーに振り分けるRust製プロキシ兼ライブラリです。
- OpenAI Chat/ResponsesとAnthropic Messages形式を相互変換し、ランダム・LLM分類・ステージルーターなどのルーティング方式を提供します。
- Claude CodeやCodexなどのコーディングエージェントをオープンソースモデルに接続したい開発者や、A/Bベンチマーク・コスト最適化を行うユーザー向けです。
- cargo installで導入可能ですが、プレアルファの実験的ソフトウェアであり本番利用は非推奨、APIは今後大きく変わる予定です。

---

### 7. [modular/modular](https://github.com/modular/modular)

> The Modular Platform (includes MAX & Mojo)

- Language: Mojo
- Stars: 28,659
- Forks: 3,052
- Stars in 1週間: 744
- Category: AI開発プラットフォーム
- Keywords: `Modular Platform` `MAX Framework` `Mojo言語` `AI開発` `推論サーバー` `オープンソース`
- Summary source: README

#### README要約

- Modular Platformは、AI開発とデプロイメントのための統合プラットフォームであり、MAX FrameworkとMojo言語を含むオープンソースコンポーネントをホストしている。
- Mojoコンパイラ、Mojo標準ライブラリ、MAXアクセラレータライブラリ、OpenAI互換エンドポイントを持つMAX推論サーバー、PythonベースのMAXモデルパイプラインなどの主要コンポーネントで構成される。
- AIモデルの開発・デプロイを行う開発者や、Mojo言語やMAXフレームワークに貢献したいエンジニアを対象としている。
- MAXの利用と配布はModular Community Licenseの下でライセンスされ、サードパーティソフトウェアのライセンス確認はユーザー自身の責任となる。

---

### 8. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)

> 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.

- Language: Python
- Stars: 113,800
- Forks: 17,265
- Stars in 1週間: 9,712
- Category: AI動画生成ツール
- Keywords: `AI動画生成` `ショート動画` `自動化ワークフロー` `Python` `TTS` `字幕生成`
- Summary source: README

#### README要約

- テーマやキーワードを入力するだけで、AIが動画スクリプト生成から素材選定、字幕、BGM合成までを自動化し、高画質なショート動画を生成するツールです。
- AI Agent、WebUI、API、CLIの4つの利用形態を備え、縦型9:16と横型16:9のHDサイズ、複数動画の一括生成、多言語スクリプト、Edge TTSやAzure Speechなど複数の音声合成に対応しています。
- 素材はローカルファイルのほかPexels、Pixabay、Coverrから取得でき、WaveSpeed AIによるAI生成素材や、TikTok、Instagram、YouTube Shortsへの自動投稿機能も利用できます。
- Python製で、利用には各種LLMやTTSのAPIキー設定が必要です。ffmpegが見つからない場合は手動でパスを設定し、Whisperモデルのダウンロードに失敗した場合は手動取得が必要になることがあります。

---

### 9. [public-apis/public-apis](https://github.com/public-apis/public-apis)

> A collective list of free APIs

- Language: Python
- Stars: 467,922
- Forks: 51,626
- Stars in 1週間: 11,259
- Category: APIリスト
- Keywords: `公開API` `無料API` `キュレーションリスト` `開発者向け` `カテゴリ別` `MITライセンス`
- Summary source: README

#### README要約

- 多様な分野の無料公開APIを集めた、コミュニティ主導でキュレーションされたリストです。
- 動物、金融、天気、機械学習など多数のカテゴリ別にAPIを整理し、認証方式やHTTPS対応などの情報を表形式で提供します。
- 自分のプロダクトに組み込むAPIを探している開発者や、無料で利用できるデータソースを探す人に適しています。
- README冒頭にはスポンサーであるAPILayerの宣伝が含まれており、リスト本体はMITライセンスで公開されています。

---

### 10. [megadose/holehe](https://github.com/megadose/holehe)

> holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.

- Language: Python
- Stars: 13,913
- Forks: 1,809
- Stars in 1週間: 1,632
- Category: OSINTツール
- Keywords: `OSINT` `メールアドレス調査` `アカウント検索` `Python` `セキュリティ` `調査ツール`
- Summary source: README

#### README要約

- メールアドレスが120以上のサイトでアカウント登録されているかを確認するOSINTツール。
- パスワード忘れ機能を利用して情報を取得し、対象のメールアドレスに通知を送らない設計。
- セキュリティ研究者や調査員がメールアドレスからアカウント存在を調査する用途に使用。
- Python 3で動作し、pip・GitHub・Dockerでインストール可能。教育目的のみでGPLv3ライセンス。

---

### 11. [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi)

> ⚡️A native, local-first alternative to Logitech Options+, written in Rust 🦀 — remap buttons, DPI, and SmartShift over HID++. No account, no telemetry.

- Language: Rust
- Stars: 12,784
- Forks: 347
- Stars in 1週間: 2,674
- Category: デバイス管理ツール
- Keywords: `Logitech` `HID++` `Rust` `ボタンリマップ` `ローカルファースト` `オープンソース`
- Summary source: README

#### README要約

- Rust製のLogitech Options+代替アプリで、マウス・キーボード・WebカメラをHID++/UVC経由で制御する。
- ボタンリマップ、DPI調整、SmartShift、アプリ別プロファイル、Litra照明やUVCカメラ設定などをGUIとCLIで操作できる。
- アカウント不要・テレメトリなしのローカルファースト設計で、macOS/Linux/Windows上でLogitechデバイスを細かく管理したいユーザー向け。
- 活発に開発中で不安定な可能性があり、利用前にLogi Options+を終了する必要がある。macOS 13以降、Linux、Windowsに対応。

---

### 12. [lightningpixel/modly](https://github.com/lightningpixel/modly)

> Desktop app to generate 3D models from images or prompt using local AI — runs entirely on your GPU

- Language: TypeScript
- Stars: 7,120
- Forks: 678
- Stars in 1週間: 1,855
- Category: AI 3Dモデル生成デスクトップアプリ
- Keywords: `image-to-3D` `ローカルAI` `GPU` `Electron` `拡張機能` `ワークフロー`
- Summary source: README

#### README要約

- 画像やプロンプトから3Dモデルを生成する、ローカルGPU上で動作するオープンソースのデスクトップアプリ。
- Hunyuan3DやTripoSGなどのAIモデルを拡張機能としてGitHubからインストールでき、ワークフローでノードを接続してメッシュ生成を実行する。
- 3DモデリングやAI生成をローカル環境で行いたい開発者・クリエイター向けで、CLIによる自動化やエージェント連携も可能。
- Windows/Linux/Apple Silicon macOS対応で、npmとPython環境のセットアップが必要。MITライセンスで、フォーク時は原作者クレジット表示が必須。

---

### 13. [macro-inc/macro](https://github.com/macro-inc/macro)

> Macro is a unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM — @-linked together with shared AI memory.

- Language: Rust
- Stars: 3,936
- Forks: 374
- Stars in 1週間: 1,456
- Category: 統合ワークスペース
- Keywords: `統合ワークスペース` `AIエージェント` `CRM` `Rust` `オープンソース` `セルフホスト`
- Summary source: README

#### README要約

- Macroはメール、チャット、ドキュメント、タスク、AIエージェント、通話、CRMを単一の高速インターフェースに統合したチーム向けオールインワンワークスペースです。
- 各機能はモジュラーな「ブロック」として構成され、双方向グラフで相互リンクされ、チーム全体で共有されるAIメモリを持ち、CRDTによるリアルタイム共同編集を実現しています。
- スタートアップや小規模チーム、大企業内のチームが「オペレーティングシステム」として利用することを想定しており、ツール間の分断を解消します。
- AGPLv3の完全なオープンソースでセルフホストが可能ですが、ローカル実行には別途ドキュメントの手順に従う必要があります。

---

### 14. [unslothai/unsloth](https://github.com/unslothai/unsloth)

> Local UI to run and train LLMs and diffusion models, including Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4, FLUX and more.

- Language: Python
- Stars: 74,247
- Forks: 6,712
- Stars in 1週間: 3,300
- Category: AI開発ツール
- Keywords: `LLM` `ファインチューニング` `ローカル実行` `デスクトップアプリ` `拡散モデル` `Python`
- Summary source: README

#### README要約

- Unslothは、LLMや拡散モデルなどをローカル環境で実行・学習・デプロイするためのデスクトップアプリおよびツール群です。
- Tauriベースのデスクトップアプリ、Web UIのUnsloth Studio、コードベースのUnsloth Coreの3つの利用形態を提供します。
- LoRAやQLoRA、強化学習などのファインチューニングを高速かつ省メモリで行い、GGUFなどの形式でエクスポートできます。
- Windows、macOS、Linuxに対応し、CPUやNVIDIA、AMD、Intelなど多様なハードウェアで動作します。

---

### 15. [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)

> Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors

- Language: Rust
- Stars: 3,925
- Forks: 295
- Stars in 1週間: 1,952
- Category: AIエージェントメモリ管理
- Keywords: `長期メモリ` `エージェント間引き継ぎ` `MCP統合` `Markdown wiki` `ライフサイクルフック` `Rust`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの長期メモリツールで、セッション終了後もコンテキストを保持し、異なるエージェント間での引き継ぎを可能にする。
- ライフサイクルフックで観測データを自動収集し、プレーンなMarkdownのGitリポジトリに保存。ベクトルDB不要でgrep可能、Obsidianでも開ける。
- Claude Code、Codex、Cursor、Gemini CLIなど多数のエージェントに対応し、MCP設定とライフサイクルフックで統合。`ai-memory run`で透過的なワークストリーム再開も可能。
- Rust製でLinux/macOS/Windows(WSL2)をサポート。Dockerイメージやネイティブバイナリで導入可能。MITライセンス。

---

### 16. [jundot/omlx](https://github.com/jundot/omlx)

> LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar

- Language: Python
- Stars: 20,214
- Forks: 1,716
- Stars in 1週間: 1,388
- Category: LLM推論サーバー
- Keywords: `Apple Silicon` `連続バッチング` `KVキャッシュ` `OpenAI互換API` `メニューバーアプリ` `MLX`
- Summary source: README

#### README要約

- Apple Silicon向けに最適化されたLLM推論サーバーで、macOSのメニューバーから管理できる。
- 連続バッチングとRAM/SSDの2層KVキャッシュを備え、LLM・VLM・埋め込み・リランカーを同一サーバーで提供する。
- Claude CodeなどのOpenAI互換クライアントからの利用を想定し、モデルのピン留めやTTLなどの管理機能を管理者UIで操作できる。
- macOS 15.0以降・Python 3.11〜3.13・Apple Siliconが必要で、DMG・Homebrew・ソースからインストールできる。

---

### 17. [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)

> Hundreds of models & providers. One command to find what runs on your hardware.

- Language: Rust
- Stars: 33,435
- Forks: 2,077
- Stars in 1週間: 1,842
- Category: LLM管理ツール
- Keywords: `LLM` `ハードウェア検出` `モデル推奨` `Rust` `TUI` `ベンチマーク`
- Summary source: README

#### README要約

- システムのRAM、CPU、GPUに適したLLMモデルを見つけるためのターミナルツールです。
- ハードウェアを検出し、品質・速度・適合性・コンテキストの4つの次元で各モデルをスコアリングします。
- ローカルでLLMを実行したいユーザーが、自分のマシンで実際に快適に動作するモデルを選ぶのに役立ちます。
- Homebrew、Scoop、uv、Dockerなどでインストールでき、対話型TUIとクラシックなCLIモードの両方を備えています。

---

### 18. [CodebuffAI/freebuff](https://github.com/CodebuffAI/freebuff)

> The free coding agent

- Language: TypeScript
- Stars: 10,438
- Forks: 1,139
- Stars in 1週間: 1,133
- Category: AIコーディングエージェント
- Keywords: `無料` `マルチエージェント` `CLI` `TypeScript` `Codebuff` `オープンソース`
- Summary source: README

#### README要約

- Freebuffは、サブスクリプションやAPIキー不要で使える無料のAIコーディングエージェント群です。
- 専門エージェントがコードベースの文脈把握、計画、編集、ツール実行、レビューを分担し、複数のAIモデルを選択できます。
- ターミナル、デスクトップ、ブラウザ、GitHubリポジトリ向けに5つの製品形態を提供し、開発者のコーディングや調査を支援します。
- npmでグローバルインストールして即開始可能ですが、モデルには一時的な利用制限があり、広告による運営とデータ利用への同意が前提です。

---
