+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/08/20'
date = 2026-08-20T05:50:52.383Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月20日 5:50:52
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが圧倒的な存在感を示し、AIエージェント関連とローカルファースト設計が二大トレンドとして浮上している

- 全16リポジトリがすべてRustで構築されており、言語分布が完全にRustに集中している
- AIエージェント向けのインフラ・ツール（ブラウザ自動化、ファイル検索、LLMルーティング、サンドボックスなど）が多数ランクインしている
- ローカルファースト・プライバシー重視の設計思想を持つツール（OpenLogi、koharu、microsandboxなど）が目立つ
- 最もスターを獲得したのは統合ワークスペースのmacro（2557スター）で、AIメモリによる横断的な情報連携を特徴とする
- LLMのローカル実行やマルチプロバイダー対応を支援するツール（llmfit、Switchyard）が高い関心を集めている

### 主なテーマ

- **AIエージェント向けインフラ・ツール**: AIエージェントの実行環境や連携を支えるツールが複数ランクイン。microsandboxはエージェントのコードを安全に実行するmicroVMランタイム、agent-browserはエージェント向けブラウザ自動化CLI、fffはエージェント向けファイル検索SDK、BAMLはエージェント専用プログラミング言語、SwitchyardはLLMトラフィックのルーティングプロキシであり、エージェントエコシステムの基盤整備が進んでいる。（`superradcompany/microsandbox`、`vercel-labs/agent-browser`、`dmtrKovalenko/fff`、`BoundaryML/baml`、`NVIDIA-NeMo/Switchyard`）
- **ローカルファースト・プライバシー重視ツール**: OpenLogiはアカウント不要・テレメトリーなしのLogitech設定ツール、koharuはローカルGGUF推論でプライバシーを保つ漫画翻訳ツール、microsandboxはローカルファーストのmicroVMランタイムであり、クラウド依存を避けローカル環境で完結する設計が支持を集めている。（`AprilNEA/OpenLogi`、`mayocream/koharu`、`superradcompany/microsandbox`）
- **ローカルLLM実行・最適化**: llmfitはハードウェアに適合するLLMモデルを検出・推奨するツールで1545スターを獲得。Switchyardは複数プロバイダー間のLLMルーティングを行い1220スター。ローカルやオープンソースモデルの実用化を支援するツールへの関心が高い。（`AlexsJones/llmfit`、`NVIDIA-NeMo/Switchyard`）
- **Rust製デスクトップアプリ・GUI基盤**: ZedエディタのGPUIフレームワークを活用したgpui-component（60以上のUIコンポーネント）、AIネイティブデザインツールのopenpencil、統合ワークスペースのmacroなど、Rustでリッチなデスクトップアプリケーションを構築する動きが活発である。（`longbridge/gpui-component`、`ZSeven-W/openpencil`、`macro-inc/macro`、`zed-industries/zed`）
- **高性能インフラ・専門ツール**: nautilus_traderは本番運用グレードの取引エンジン、vectorは高性能オブザーバビリティパイプライン、unionはゼロ知識ブリッジプロトコル、rayhunterはIMSIキャッチャー検出ツールであり、Rustの性能と安全性を活かした専門分野向けインフラが着実に支持されている。（`nautechsystems/nautilus_trader`、`vectordotdev/vector`、`unionlabs/union`、`EFForg/rayhunter`）

### 補足的な観察

- 言語分布は全16リポジトリ中16件がRustであり、他言語は一切含まれていない異例の集中度となっている
- スター数の上位はmacro（2557）、llmfit（1545）、OpenLogi（1492）、Switchyard（1220）の順で、AI関連とローカルツールが上位を占めている
- NVIDIAやVercel、EFFなどの組織が運営するリポジトリと個人開発のリポジトリが混在しており、企業・コミュニティ双方からRustプロジェクトが台頭している
- 複数のリポジトリがMCP（Model Context Protocol）サーバーに対応しており、AIエージェントとの標準的な連携プロトコルの採用が広がっている

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 16 |

## Repository一覧

### 1. [macro-inc/macro](https://github.com/macro-inc/macro)

> Macro is a unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM — @-linked together with shared AI memory.

- Language: Rust
- Stars: 3,800
- Forks: 368
- Stars in 1週間: 2,557
- Category: 統合ワークスペース
- Keywords: `統合ワークスペース` `メール` `チャット` `タスク管理` `AIエージェント` `CRM`
- Summary source: README

#### README要約

- Macroはメール、チャット、ドキュメント、タスク、エージェント、通話、CRMを統合したチーム向けオールインワンワークスペースです。
- すべての要素が@リンクで双方向グラフとして接続され、共有AIメモリを持つエージェントが横断的に検索・操作できます。
- 小規模企業や大企業内のチームが「オペレーティングシステム」として利用することを想定し、SolidJSとRustで構築されています。
- AGPLv3の完全オープンソースで、セルフホスト可能です。ローカル実行はdocs/RUNNING_LOCALLY.mdを参照してください。

---

### 2. [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)

> Hundreds of models & providers. One command to find what runs on your hardware.

- Language: Rust
- Stars: 33,116
- Forks: 2,053
- Stars in 1週間: 1,545
- Category: LLMハードウェア適合性チェッカー
- Keywords: `LLM` `ハードウェア検出` `モデル推奨` `TUI` `Rust` `ベンチマーク`
- Summary source: README

#### README要約

- システムのRAM、CPU、GPUを検出し、ハードウェアで実際に快適に動作するLLMモデルを提案するRust製ターミナルツール。
- メモリ適合性、推定速度、品質、コンテキストの4軸でモデルをスコアリングし、対話型TUIとCLIモードを提供。マルチGPU、MoEアーキテクチャ、動的量子化選択をサポート。
- ローカルLLMを実行したい開発者やユーザー向けで、Ollama、llama.cpp、MLX、Docker Model Runner、LM Studioなどのランタイムプロバイダーに対応。
- Homebrew、Scoop、uv、Docker、ソースからのビルドなど複数の方法でインストール可能。実測ベンチマーク結果をプロジェクトに還元する仕組みもある。

---

### 3. [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox)

> 🧱 easy fast local-first microVM runtime and library

- Language: Rust
- Stars: 7,798
- Forks: 410
- Stars in 1週間: 460
- Category: コンテナ・仮想化
- Keywords: `microVM` `サンドボックス` `OCI互換` `Rust` `ローカルファースト` `ハードウェア分離`
- Summary source: README

#### README要約

- 信頼できないワークロード（AIエージェント、ユーザーコード、プラグインなど）を高速でローカルなmicroVM内で実行するランタイムおよびライブラリ。
- ハードウェアレベルの分離、OCI互換のコンテナイメージ実行、Dockerライクなワークフロー、100ミリ秒未満の起動速度を特徴とする。
- AIエージェント開発者、CI/CDパイプライン、プラグインシステム構築者など、サンドボックス環境でコードを安全に実行したいユーザー向け。
- Rust、Python、TypeScript、GoのSDKまたはCLI（msb）で導入可能。macOS（Apple Silicon）、Linux（KVM）、Windows（WHP）に対応。ベータ版のため破壊的変更に注意。

---

### 4. [mayocream/koharu](https://github.com/mayocream/koharu)

> ML-powered manga translator, written in Rust.

- Language: Rust
- Stars: 5,325
- Forks: 347
- Stars in 1週間: 252
- Category: 漫画翻訳ツール
- Keywords: `漫画翻訳` `Rust` `OCR` `インペインティング` `ローカルLLM` `GPU加速`
- Summary source: README

#### README要約

- Rust製のローカルファーストなML漫画翻訳ツールで、物体検出・OCR・インペインティング・LLMを組み合わせて翻訳作業を自動化する。
- テキスト領域・吹き出しの検出、マルチモーダルOCR、生成インペインティング、ローカルGGUF推論やクラウドLLM/機械翻訳プロバイダーによる翻訳、WebGPUキャンバスでの編集、PSD出力などを備える。
- 漫画の翻訳・植字・クリーンアップを行う翻訳者や編集者向けで、画像・アーカイブ・PDFのプロジェクト管理や校正、縦書きCJK・右から左のテキストレイアウトに対応する。
- Windows/macOS/Linux向けリリース版やwinget・Homebrewで導入可能。CUDA/ROCm/Metal/VulkanのGPU加速に対応し、ビジョンモデルとLLMはローカル実行でプライバシーを保つ。MIT/Apache-2.0のデュアルライセンス。

---

### 5. [BoundaryML/baml](https://github.com/BoundaryML/baml)

> The programming language for agents

- Language: Rust
- Stars: 9,042
- Forks: 484
- Stars in 1週間: 120
- Category: プログラミング言語
- Keywords: `BAML` `エージェント` `型システム` `Rust` `並行処理` `LLM`
- Summary source: README

#### README要約

- BAMLはエージェント向けのプログラミング言語で、TypeScriptに似た構文を持ちながら、エージェントがミスを減らすための機能を備えている。
- Rustのような型システムを持ち、ランタイムでも型が保持され、型付きエラーの静的解析、ファイルシステムベースのモジュール管理、グリーンスレッドによる並行処理、組み込みテスト/評価フレームワークを提供する。
- エージェント開発者を対象とし、スタンドアロン実行やTypeScript、Python、Go、C#、Javaなどからの段階的な導入が可能である。
- Homebrewでインストール後、baml initで初期化でき、VS Code向けのIDE拡張も用意されている。

---

### 6. [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)

> Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.

- Language: Rust
- Stars: 1,923
- Forks: 176
- Stars in 1週間: 1,220
- Category: LLMプロキシ・ルーター
- Keywords: `LLMルーティング` `プロトコル変換` `OpenAI互換` `Anthropic互換` `Rust` `マルチプロバイダー`
- Summary source: README

#### README要約

- Switchyardは、LLMトラフィックを複数のモデルやプロバイダー間でルーティングするRust製のプロキシおよびライブラリです。
- OpenAI Chat、Anthropic Messages、OpenAI Responses形式間のプロトコル変換を行い、クライアントはネイティブAPIのままvLLM、NVIDIA NIM、Ollamaなどのバックエンドを利用できます。
- Claude CodeやCodexなどのコーディングエージェントをオープンソースモデルに接続したい開発者や、A/Bベンチマーク、コスト最適化、カスタムルーティングアルゴリズムの実装を必要とするユーザーに適しています。
- プレアルファ版の実験的ソフトウェアであり、本番環境での使用は推奨されません。uvツール、Cargo、またはRustライブラリとして導入可能です。

---

### 7. [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader)

> Production-grade Rust-native trading engine with deterministic event-driven architecture

- Language: Rust
- Stars: 26,536
- Forks: 3,427
- Stars in 1週間: 879
- Category: トレーディングエンジン
- Keywords: `Rust` `イベント駆動` `バックテスト` `マルチベニュー` `Python` `決定論的`
- Summary source: README

#### README要約

- NautilusTraderは、マルチアセット・マルチベニュー取引システム向けのオープンソースの本番運用グレードRustネイティブエンジンです。
- 決定論的イベント駆動アーキテクチャにより、リサーチ、シミュレーション、ライブ実行を単一システムで実現し、Pythonを戦略ロジックと設定の制御プレーンとして使用します。
- 暗号通貨取引所、伝統的市場（FX、株式、先物、オプション）、ベッティング取引所など、REST APIやWebSocketフィードを持つあらゆるベニューにモジュラーアダプターで対応します。
- Linux、macOS、Windowsで動作し、Dockerでデプロイ可能。Rustツールチェーンなしでプレビルドwheelをインストールでき、MSRVは最新安定版Rustと同等です。

---

### 8. [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff)

> The fastest and the most accurate file search SDK for AI agents, Neovim, Rust, C, Python, Bun and NodeJS

- Language: Rust
- Stars: 10,103
- Forks: 420
- Stars in 1週間: 157
- Category: ファイル検索SDK
- Keywords: `ファイル検索` `Rust` `MCPサーバー` `Neovim` `ファジー検索` `フリーケンシー`
- Summary source: README

#### README要約

- 人間とAIエージェント向けの高速ファイル検索ツールキットで、Rust製コアをNeovim、MCPサーバー、Node.js、Bun、C FFIなどから利用できる。
- タイポ耐性のあるパス・コンテンツ検索、フリーケンシー（頻度＋最近性）ランキング、バックグラウンドウォッチャー、軽量なインメモリコンテンツインデックスを備え、gitステータス付与やファジー検索への自動フォールバックも行う。
- opencodeやnushellなどのプロジェクトで採用されており、Claude CodeやCodexなどのMCP対応クライアント、piエージェント拡張、NeovimプラグインとしてAIエージェントやエディタのファイル検索を高速化する用途に向く。
- MCPサーバーはワンラインインストールスクリプトやHomebrewで導入でき、Neovimプラグインはlazy.nvim等でビルド時にバイナリを取得する。大規模リポジトリでは数百MBのメモリを消費する場合があり、単発のgrepにはripgrepが適しているとされている。

---

### 9. [longbridge/gpui-component](https://github.com/longbridge/gpui-component)

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

- Language: Rust
- Stars: 13,263
- Forks: 793
- Stars in 1週間: 685
- Category: GUIコンポーネントライブラリ
- Keywords: `Rust` `GPUI` `UIコンポーネント` `クロスプラットフォーム` `デスクトップアプリ` `shadcn/ui`
- Summary source: README

#### README要約

- GPUIを使ってクロスプラットフォームのデスクトップアプリを構築するためのRust製UIコンポーネントライブラリ。
- 60以上のコンポーネント、テーマ機能、Dockレイアウト、仮想化Table/List、Markdown/HTML描画、チャート、LSP対応コードエディタ、Tree Sitterによるシンタックスハイライトを提供。
- Rustでモダンなデスクトップアプリを作る開発者向けで、完成度の高いスタイル付きコンポーネントをすぐ使いたい場合に適する。
- gpuiとgpui_platformはZedのGitリポジトリ、gpui-componentは本リポジトリのGit依存として追加し、使用前にgpui_component::init(cx)の呼び出しが必要。

---

### 10. [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil)

> The world's first open-source AI-native vector design tool and the first to feature concurrent Agent Teams. Design-as-Code. Turn prompts into UI directly on the live canvas. A modern alternative to Pencil.

- Language: Rust
- Stars: 5,442
- Forks: 481
- Stars in 1週間: 610
- Category: AIデザインツール
- Keywords: `AIネイティブ` `ベクターデザイン` `Design-as-Code` `MCP` `Rust` `マルチモデル`
- Summary source: README

#### README要約

- OpenPencilは、オープンソースのAIネイティブなベクターデザインツールで、自然言語のプロンプトからUIをライブキャンバス上に直接生成できる。
- 複数のAIエージェントが並行して作業するConcurrent Agent Teams、Design-as-CodeによるJSON形式の.opファイル、MCPサーバー、マルチモデル対応などを特徴とする。
- デザイナーや開発者がAIを活用してUIデザインを効率的に作成・編集し、React+TailwindやHTML+CSSなど複数プラットフォームへコードエクスポートする用途に適している。
- Rust製でWebアプリとmacOS/Windows/Linuxのネイティブデスクトップアプリとして動作し、Homebrew、Scoop、GitHub Releasesなどからインストール可能。MITライセンス。

---

### 11. [zed-industries/zed](https://github.com/zed-industries/zed)

> Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.

- Language: Rust
- Stars: 88,908
- Forks: 10,139
- Stars in 1週間: 511
- Category: コードエディタ
- Keywords: `Rust` `マルチプレイヤー` `高性能` `オープンソース` `クロスプラットフォーム` `GPL-3.0`
- Summary source: README

#### README要約

- ZedはAtomとTree-sitterの開発者による高性能なマルチプレイヤーコードエディタです。
- Rustで開発され、macOS、Linux、Windowsで利用可能で、直接ダウンロードまたはパッケージマネージャーからインストールできます。
- コードエディタを必要とする開発者向けで、リアルタイムコラボレーション機能を備えています。
- GPL-3.0-or-laterライセンスで公開され、Web版は未対応です。貢献方法はCONTRIBUTING.mdを参照してください。

---

### 12. [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi)

> ⚡️A native, local-first alternative to Logitech Options+, written in Rust 🦀 — remap buttons, DPI, and SmartShift over HID++. No account, no telemetry.

- Language: Rust
- Stars: 10,715
- Forks: 300
- Stars in 1週間: 1,492
- Category: デバイス設定ツール
- Keywords: `Logitech` `HID++` `Rust` `ボタンリマップ` `DPI` `ローカルファースト`
- Summary source: README

#### README要約

- Rust製のLogitech Options+代替ツールで、アカウント不要・テレメトリーなしのローカルファースト設計。
- HID++プロトコル経由でボタンリマップ、DPI調整、SmartShift制御を行い、GUI・CLI・バックグラウンドエージェントの3構成。
- macOS、Linux、Windowsに対応し、Logitechデバイスを公式ソフトなしでカスタマイズしたいユーザー向け。
- 開発中のため不安定な可能性があり、Logi Options+と同時起動は不可。TOMLファイルで設定管理。

---

### 13. [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)

> Browser automation CLI for AI agents

- Language: Rust
- Stars: 40,972
- Forks: 2,726
- Stars in 1週間: 492
- Category: ブラウザ自動化CLI
- Keywords: `ブラウザ自動化` `AIエージェント` `Rust` `CLI` `Chrome for Testing` `CDP`
- Summary source: README

#### README要約

- AIエージェント向けのブラウザ自動化CLIで、Rust製の高速ネイティブバイナリとして提供される。
- アクセシビリティツリーのスナップショットとref指定の操作、セマンティックロケータ、スクリーンショット、PDF出力、JavaScript実行などをコマンドで行える。
- AIエージェントやスクリプトからブラウザを操作したい開発者向けで、ローカルChromeに加えKernelやAWS Bedrock AgentCoreのクラウドブラウザセッションにも接続できる。
- npm、Homebrew、Cargoなどでインストールし、初回はagent-browser installでChrome for Testingを取得する。ソースビルドにはNode.js 24+、pnpm 11+、Rustが必要。

---

### 14. [unionlabs/union](https://github.com/unionlabs/union)

> The trust-minimized, zero-knowledge bridging protocol, designed for censorship resistance, extremely high security, and usage in decentralized finance.

- Language: Rust
- Stars: 73,851
- Forks: 3,888
- Stars in 1週間: 37
- Category: ブロックチェーン相互運用性プロトコル
- Keywords: `ゼロ知識証明` `ブリッジ` `IBC` `Cosmos` `EVM` `分散型ガバナンス`
- Summary source: README

#### README要約

- Unionは、一般的なメッセージパッシング、資産転送、NFT、DeFiのための高効率ゼロ知識インフラストラクチャレイヤーです。
- コンセンサス検証に基づき、信頼できる第三者、オラクル、マルチシグ、MPCへの依存なしに動作し、IBCを実装してCosmosチェーンとEVMチェーンを接続します。
- 分散型ガバナンスによってプロトコルの進化が制御され、ユーザー、バリデーター、オペレーターの優先順位が一致するように設計されています。
- Nixを使用して任意のコンポーネントを再現可能にビルドでき、開発シェルに入ることで全依存関係を利用できます。

---

### 15. [EFForg/rayhunter](https://github.com/EFForg/rayhunter)

> Rust tool to detect cell site simulators on an orbic mobile hotspot

- Language: Rust
- Stars: 5,595
- Forks: 465
- Stars in 1週間: 106
- Category: セキュリティ検出ツール
- Keywords: `IMSIキャッチャー` `基地局シミュレーター` `Orbic RC400L` `Rust` `EFF` `モバイルセキュリティ`
- Summary source: README

#### README要約

- IMSIキャッチャー（携帯基地局シミュレーター、スティングレイとも呼ばれる）を検出するためのオープンソースツール。
- 安価なモバイルホットスポットOrbic RC400L向けに設計され、コミュニティの協力により他の一部デバイスにも対応している。
- 技術スキルに関わらず誰でも簡単にインストール・利用でき、誤検知を最小限に抑えることを目指している。
- 利用は自己責任であり、米国外では各国の法的リスクを弁護士に相談することが推奨されている。

---

### 16. [vectordotdev/vector](https://github.com/vectordotdev/vector)

> A high-performance observability data pipeline.

- Language: Rust
- Stars: 22,411
- Forks: 2,259
- Stars in 1週間: 87
- Category: オブザーバビリティ
- Keywords: `データパイプライン` `ログ収集` `メトリクス` `Rust` `エージェント` `ベンダーニュートラル`
- Summary source: README

#### README要約

- Vectorは、ログやメトリクスなどの監視データを収集・変換・転送する、Rust製の高性能なオープンソースのデータパイプラインです。
- エージェントまたはアグリゲーターとしてデプロイでき、データの収集、変換、任意のベンダーへのルーティングを一元的に行います。
- 監視コストの削減、ベンダー移行の円滑化、データ品質の向上を目指すSREやプラットフォームエンジニアなどのチームを対象としています。
- 公式サイトのクイックスタートガイドに従うことで導入を開始でき、コンテナイメージなども提供されています。

---
