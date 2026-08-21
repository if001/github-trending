+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/08/21'
date = 2026-08-21T21:25:16.326Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月21日 21:25:16
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが圧倒的な存在感を示し、AIエージェント基盤とローカルファーストな開発者ツールがトレンドを牽引している

- 一覧の全18リポジトリがRustで記述されており、言語分布が完全にRust一色となっている
- LLMルーティング、エージェントメモリ、ハードウェア適合性判定、ベクトル検索などAI関連の基盤ツールが多数を占める
- OpenLogiやkoharu、microsandboxなど「ローカルファースト」を明示するツールが複数登場し、クラウド不要・テレメトリなしの設計が支持されている
- AIコーディングエージェント間の連携（ai-memory）やエージェント向けファイル検索（fff）、エージェント実行用サンドボックス（microsandbox）など、エージェントの実用化を支える周辺基盤が充実している
- ZedエディタやGPUIコンポーネントなど、Rust製デスクトップアプリのエコシステム自体も成長している

### 主なテーマ

- **AIエージェント・LLM基盤**: LLMトラフィックのルーティング（Switchyard）、エージェント間の長期メモリ共有（ai-memory）、ハードウェアに適したモデル選定（llmfit）、エージェント向けファイル検索SDK（fff）、エージェント実行用microVMサンドボックス（microsandbox）など、AIエージェントの実運用を支えるインフラ系ツールが多数ランクインしている。（`NVIDIA-NeMo/Switchyard`、`akitaonrails/ai-memory`、`AlexsJones/llmfit`、`dmtrKovalenko/fff`、`superradcompany/microsandbox`）
- **ローカルファーストなデスクトップ・デバイスツール**: Logitech Options+の代替でアカウント不要・テレメトリなしを謳うOpenLogiが期間中2,674スターと一覧最大を記録し、ローカル推論で動く漫画翻訳ツールkoharuも登場。クラウド依存を排したツールへの支持がうかがえる。（`AprilNEA/OpenLogi`、`mayocream/koharu`）
- **AIネイティブなアプリケーション**: 共有AIメモリで統合されたワークスペースMacro、プロンプトからUIを生成するデザインツールOpenPencil、汎用エージェントのBitFunなど、AIを中核機能として組み込んだエンドユーザー向けアプリが複数登場している。（`macro-inc/macro`、`ZSeven-W/openpencil`、`GCWing/BitFun`）
- **Rust製開発環境・UIエコシステム**: Zedエディタ本体に加え、ZedのGPUIフレームワーク上に構築されたUIコンポーネント集gpui-componentや、ターミナルIDEのfreshなど、Rustによる開発者向け環境の層が厚くなっている。（`zed-industries/zed`、`longbridge/gpui-component`、`sinelaw/fresh`）
- **高性能データ・検索基盤**: TurboQuantベースのベクトルインデックスturbovec、決定論的イベント駆動のトレーディングエンジンnautilus_trader、オブザーバビリティパイプラインのVectorなど、性能と信頼性を重視したデータ処理基盤がRustで構築されている。（`RyanCodrai/turbovec`、`nautechsystems/nautilus_trader`、`vectordotdev/vector`）

### 補足的な観察

- 期間中スター数の上位はOpenLogi（2,674）、ai-memory（1,952）、llmfit（1,842）、Macro（1,456）の順で、AI基盤とローカルツールが上位を分け合う構図になっている
- 言語分布は全18件がRustであり、他言語のリポジトリは一件も含まれていない
- NVIDIAのNeMoプロジェクトからSwitchyardが登場するなど、大企業・研究組織発のプロジェクトと個人開発のツールが混在している
- EFFのIMSIキャッチャー検出ツールrayhunterやゼロ知識ブリッジのUnionなど、セキュリティ・プライバシー系のニッチなプロジェクトもランクインしている

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 18 |

## Repository一覧

### 1. [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)

> Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.

- Language: Rust
- Stars: 2,044
- Forks: 183
- Stars in 1週間: 932
- Category: LLMプロキシ
- Keywords: `LLMルーティング` `API変換` `Rust` `OpenAI互換` `Anthropic互換` `マルチプロバイダー`
- Summary source: README

#### README要約

- SwitchyardはLLMトラフィックを複数のモデルやプロバイダー間でルーティングするRust製のプロキシおよびライブラリです。
- OpenAIとAnthropicのAPI形式を相互変換し、ランダムルーティングやLLM分類器などのルーティングアルゴリズムを提供します。
- Claude CodeやCodexなどのコーディングエージェントをオープンソースモデルに接続したい開発者や、A/Bベンチマーク、コスト最適化を行うユーザーに適しています。
- pre-alpha段階の実験的ソフトウェアであり、APIやアルゴリズムは大幅に変更される可能性があるため、本番環境での使用は推奨されていません。

---

### 2. [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi)

> ⚡️A native, local-first alternative to Logitech Options+, written in Rust 🦀 — remap buttons, DPI, and SmartShift over HID++. No account, no telemetry.

- Language: Rust
- Stars: 12,784
- Forks: 347
- Stars in 1週間: 2,674
- Category: デバイス設定ツール
- Keywords: `Rust` `HID++` `Logitech` `ローカルファースト` `オープンソース` `クロスプラットフォーム`
- Summary source: README

#### README要約

- Rust製のLogitech Options+代替ツールで、HID++とUVC経由でマウス・キーボード・Webカメラを制御する。
- ボタンリマップ、DPI調整、SmartShift、アプリ別プロファイル、LitraライトやUVCカメラ設定などをGUIとCLIで操作できる。
- macOS・Linux・Windowsで動作し、クラウド不要のローカルファースト設計を求めるLogitechデバイスユーザー向け。
- 開発中で不安定なため、Logi Options+を終了してから使用し、TOML設定ファイルで管理する必要がある。

---

### 3. [macro-inc/macro](https://github.com/macro-inc/macro)

> Macro is a unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM — @-linked together with shared AI memory.

- Language: Rust
- Stars: 3,936
- Forks: 374
- Stars in 1週間: 1,456
- Category: 統合ワークスペース
- Keywords: `統合ワークスペース` `チームコラボレーション` `共有AIメモリ` `双方向リンク` `Rust` `オープンソース`
- Summary source: README

#### README要約

- Macroはメール、チャット、ドキュメント、タスク、エージェント、通話、CRMを統合したチーム向けオールインワンワークスペースです。
- 各機能はモジュール化された「ブロック」として構成され、双方向グラフで相互リンクされ、共有AIメモリと統合検索を提供します。
- 小規模企業や大企業内のチームが「オペレーティングシステム」として利用することを想定し、ツール間の切り替えを不要にします。
- AGPLv3の完全オープンソースで、セルフホスト可能です。RustとSolidJSで構築され、ローカル実行手順とコントリビューションガイドが用意されています。

---

### 4. [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)

> Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors

- Language: Rust
- Stars: 3,926
- Forks: 295
- Stars in 1週間: 1,952
- Category: AIエージェントメモリ基盤
- Keywords: `長期メモリ` `コーディングエージェント` `MCP` `ライフサイクルフック` `マークダウンwiki` `Rust`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの長期メモリツールで、Claude CodeからCodexなど別エージェントへの切り替え時にアーキテクチャや失敗した試みを再説明せず作業を継続できる。
- ライフサイクルフックでサニタイズ済みの観測データを自動収集し、git管理のプレーンマークダウンwikiとして保存。ベクトルDB不要でgrepやObsidianで閲覧可能。
- Claude Code、Codex、Cursor、Gemini CLIなど多数のエージェントに対応し、MCP設定とライフサイクルフックで統合。`ai-memory run`でクロスハーネスのワークストリーム再開も可能。
- Rust製でMITライセンス。Linux/macOSが主対象でWindowsはWSL2経由または実験的ネイティブ対応。DockerイメージやArchパッケージも提供される。

---

### 5. [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)

> Hundreds of models & providers. One command to find what runs on your hardware.

- Language: Rust
- Stars: 33,436
- Forks: 2,077
- Stars in 1週間: 1,842
- Category: LLMハードウェア適合性判定ツール
- Keywords: `LLM` `ハードウェア検出` `Rust` `TUI` `モデルスコアリング` `ベンチマーク`
- Summary source: README

#### README要約

- システムのRAM、CPU、GPUに基づいて最適なLLMモデルを判定するターミナルツール。
- ハードウェアを検出し、品質・速度・適合性・コンテキストの4軸でモデルをスコアリングする。
- ローカルLLMを実行したいユーザー向けで、Ollama、llama.cpp、MLXなどのランタイムをサポート。
- Homebrew、Scoop、Docker、ソースからのビルドなど複数のインストール方法が用意されている。

---

### 6. [mayocream/koharu](https://github.com/mayocream/koharu)

> ML-powered manga translator, written in Rust.

- Language: Rust
- Stars: 5,341
- Forks: 351
- Stars in 1週間: 251
- Category: 漫画翻訳ツール
- Keywords: `Rust` `漫画翻訳` `OCR` `インペインティング` `LLM` `ローカル推論`
- Summary source: README

#### README要約

- Rust製のローカルファーストなML漫画翻訳ツールで、物体検出・OCR・インペインティング・LLMを組み合わせて翻訳作業を自動化する。
- テキスト領域や吹き出しの検出、マルチモーダルOCR、生成インペインティング、ローカルGGUF推論やクラウドLLMによる翻訳、WebGPUキャンバスでの編集、PSD出力などを備える。
- 漫画の翻訳・植字・校正を行う翻訳者や編集者向けで、ラスター画像・アーカイブ・PDFのプロジェクト管理や多言語組版に対応する。
- Windows/macOS/Linux向けビルドをリリースページやwinget、Homebrewから導入でき、CUDA・ROCm・Metal・VulkanのGPU加速に対応し、開発にはRust 1.97.1以降やBunなどが必要。

---

### 7. [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil)

> The world's first open-source AI-native vector design tool and the first to feature concurrent Agent Teams. Design-as-Code. Turn prompts into UI directly on the live canvas. A modern alternative to Pencil.

- Language: Rust
- Stars: 5,535
- Forks: 489
- Stars in 1週間: 635
- Category: AIデザインツール
- Keywords: `AIネイティブ` `ベクターデザイン` `Design-as-Code` `MCP` `Rust` `コードエクスポート`
- Summary source: README

#### README要約

- OpenPencilは、オープンソースのAIネイティブなベクターデザインツールで、自然言語のプロンプトからUIをライブキャンバス上に直接生成できる。
- 複数のAIエージェントが並行して作業するConcurrent Agent Teams、MCPサーバー、マルチモデル対応、Design-as-CodeによるJSON形式の.opファイル、React/Tailwind等へのコードエクスポート機能を備える。
- UIデザイナーや開発者がAIを活用してデザインを効率化する用途に適しており、WebアプリとmacOS/Windows/Linuxのデスクトップアプリとして動作する。
- Homebrew、Scoop、GitHub Releases、Nixなどからインストール可能で、Rust製の単一バイナリとして提供される。ライセンスはMIT。

---

### 8. [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader)

> Production-grade Rust-native trading engine with deterministic event-driven architecture

- Language: Rust
- Stars: 27,043
- Forks: 3,505
- Stars in 1週間: 1,253
- Category: トレーディングエンジン
- Keywords: `Rust` `Python` `イベント駆動` `バックテスト` `マルチアセット` `決定論的`
- Summary source: README

#### README要約

- NautilusTraderは、マルチアセット・マルチベニュー取引システム向けのオープンソースの本番運用可能なRustネイティブエンジンです。
- 決定論的イベント駆動アーキテクチャを採用し、リサーチからライブ実行まで同一の実行セマンティクスと時間モデルで動作します。
- Pythonを制御プレーンとして戦略ロジックや設定に使用し、Rustコアで高速性と安全性を実現。バックテストとライブでコード変更不要です。
- モジュラーアダプターによりREST APIやWebSocketフィードを統合可能で、暗号資産取引所、伝統的市場、ベッティング取引所などに対応しています。

---

### 9. [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox)

> 🧱 easy fast local-first microVM runtime and library

- Language: Rust
- Stars: 7,850
- Forks: 413
- Stars in 1週間: 425
- Category: サンドボックス・ランタイム
- Keywords: `microVM` `サンドボックス` `OCI互換` `Rust` `AIエージェント` `ローカルファースト`
- Summary source: README

#### README要約

- AIエージェントやユーザーコードなどの信頼できないワークロードを、高速なローカルmicroVM内で安全に実行するランタイム兼ライブラリです。
- ハードウェアレベルの分離、OCIイメージ互換、100ms未満の起動速度、デーモン不要の組み込み実行、VMに侵入しないシークレット管理などを特徴とします。
- Rust、Python、TypeScript、GoなどのSDKやCLIを通じて、開発者がアプリケーション内から直接サンドボックスを生成・制御する用途に適しています。
- macOS（Apple Silicon）、Linux（KVM有効）、Windows（WHP有効）で動作しますが、ベータ版のため破壊的変更や機能不足の可能性に注意が必要です。

---

### 10. [longbridge/gpui-component](https://github.com/longbridge/gpui-component)

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

- Language: Rust
- Stars: 13,306
- Forks: 798
- Stars in 1週間: 613
- Category: GUIフレームワーク
- Keywords: `Rust` `GPUI` `UIコンポーネント` `クロスプラットフォーム` `デスクトップアプリ` `Apache-2.0`
- Summary source: README

#### README要約

- RustとGPUIで高性能なクロスプラットフォームデスクトップアプリを構築するための包括的なUIコンポーネントフレームワーク。
- 60以上のUIコンポーネント、仮想スクロール対応データテーブル、Tree-sitter/LSP対応コードエディタ、ドックレイアウトなどを提供する。
- 商用アプリLongbridge Proで実運用されており、完成されたUIをすぐ使いたい開発者やgpui-base上で独自デザインシステムを構築したい開発者が対象。
- gpuiとgpui_platformをZedのGitリポジトリから、gpui-componentをGitHubから依存追加し、gpui_component::initを呼んで使用する。ライセンスはApache-2.0。

---

### 11. [zed-industries/zed](https://github.com/zed-industries/zed)

> Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.

- Language: Rust
- Stars: 89,009
- Forks: 10,184
- Stars in 1週間: 484
- Category: コードエディタ
- Keywords: `Zed` `コードエディタ` `Rust` `マルチプレイヤー` `高性能` `オープンソース`
- Summary source: README

#### README要約

- ZedはAtomとTree-sitterの開発者による高性能なマルチプレイヤーコードエディタです。
- Rustで開発され、macOS、Linux、Windowsに対応し、直接ダウンロードまたはパッケージマネージャーからインストール可能です。
- 高速なコーディング体験を求める開発者や、共同編集機能を活用したいチームを対象としています。
- ソースコードは主にGPL-3.0-or-laterでライセンスされ、一部にApache-2.0コンポーネントが含まれます。Web版は未対応です。

---

### 12. [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec)

> A vector index built on TurboQuant, written in Rust with Python bindings

- Language: Rust
- Stars: 16,193
- Forks: 1,400
- Stars in 1週間: 1,110
- Category: ベクトルデータベース
- Keywords: `Rust` `Python` `TurboQuant` `ベクトル検索` `量子化` `RAG`
- Summary source: README

#### README要約

- TurboQuantアルゴリズムを基盤としたRust製ベクトルインデックスで、Pythonバインディングを提供する。
- 学習不要のオンラインインジェスト、SIMD最適化検索、増分保存、検索時フィルタリングを特徴とする。
- プライバシーやメモリ効率、低遅延が求められるRAGアプリケーションの開発者を対象とする。
- pipまたはcargoでインストール可能で、LangChainやLlamaIndexなどのフレームワーク統合も用意されている。

---

### 13. [EFForg/rayhunter](https://github.com/EFForg/rayhunter)

> Rust tool to detect cell site simulators on an orbic mobile hotspot

- Language: Rust
- Stars: 5,620
- Forks: 465
- Stars in 1週間: 118
- Category: セキュリティツール
- Keywords: `IMSIキャッチャー検出` `携帯基地局シミュレーター` `Orbic RC400L` `Rust` `モバイルセキュリティ` `EFF`
- Summary source: README

#### README要約

- RayhunterはIMSIキャッチャー（携帯基地局シミュレーター、スティングレイとも呼ばれる）を検出するオープンソースプロジェクトです。
- 低価格なモバイルホットスポットOrbic RC400L向けに設計され、コミュニティの協力により他の一部デバイスにも対応しています。
- 技術スキルに関わらず誰でも簡単にインストール・使用でき、誤検知を最小限に抑えるよう設計されています。
- 使用は自己責任であり、米国外では各国の法的リスクを弁護士に相談することが推奨されています。

---

### 14. [unionlabs/union](https://github.com/unionlabs/union)

> The trust-minimized, zero-knowledge bridging protocol, designed for censorship resistance, extremely high security, and usage in decentralized finance.

- Language: Rust
- Stars: 73,856
- Forks: 3,890
- Stars in 1週間: 30
- Category: ブロックチェーン相互運用性プロトコル
- Keywords: `ゼロ知識証明` `IBC` `クロスチェーンブリッジ` `Cosmos` `EVM` `Rust`
- Summary source: README

#### README要約

- Unionは、一般的なメッセージパッシング、資産転送、NFT、DeFiのための高効率ゼロ知識インフラストラクチャレイヤーです。
- コンセンサス検証に基づき、信頼できる第三者、オラクル、マルチシグ、MPCへの依存なしに動作し、IBCを実装してCosmosチェーンとEVMチェーン（Ethereum、Berachain、Arbitrumなど）を接続します。
- 分散型ガバナンスによってプロトコルの進化が制御され、ユーザー、バリデーター、オペレーターの優先事項と整合します。
- Nixを使用して再現可能なビルドが可能で、Linux環境が必要です（macOSユーザーはOrbStack経由でNixOS VMを推奨）。

---

### 15. [GCWing/BitFun](https://github.com/GCWing/BitFun)

> BitFun combines a high-performance agent runtime written in Rust with a polished desktop application. It pairs the depth of a Code Agent with open, general-purpose capabilities for work beyond software development.

- Language: Rust
- Stars: 1,801
- Forks: 199
- Stars in 1週間: 101
- Category: AIエージェント
- Keywords: `AIエージェント` `デスクトップアプリ` `Rust` `コーディング` `オフィスワーク` `Mini Apps`
- Summary source: README

#### README要約

- BitFunは、Rust製の高性能エージェントランタイムと洗練されたデスクトップアプリケーションを組み合わせたAIエージェントです。
- タスクごとに専用のインターフェース（Mini Apps）を生成し、コーディング、ドキュメント作成、デスクトップ操作などを実行します。
- ソフトウェア開発者だけでなく、調査、執筆、プレゼンテーション作成などのオフィスワークにも対応します。
- macOS、Windows、Linux向けのビルドをダウンロードするか、ソースから実行できます。セルフホスト可能なデバイス同期サーバーも提供されます。

---

### 16. [sinelaw/fresh](https://github.com/sinelaw/fresh)

> Terminal based IDE & text editor: easy, powerful and fast

- Language: Rust
- Stars: 8,407
- Forks: 312
- Stars in 1週間: 117
- Category: テキストエディタ
- Keywords: `ターミナルエディタ` `Rust` `LSP対応` `ゼロ設定` `マルチカーソル` `IDE機能`
- Summary source: README

#### README要約

- Freshはゼロ設定で使えるモダンなターミナルテキストエディタで、VS CodeやSublime Textの直感的なUXをターミナルに持ち込む。
- 標準的なキーバインド、マウスサポート、コマンドパレット、LSP対応、マルチカーソル編集、TypeScriptプラグインによる拡張性などを備える。
- モードレスで学習コストが低く、大規模ファイルの高速処理を必要とする開発者や、ターミナル環境でIDEレベルの機能を求めるユーザー向け。
- curlによるインストールスクリプト、Homebrew、winget、各種パッケージマネージャーなど多様な導入方法があり、GPL-2.0ライセンスで提供される。

---

### 17. [vectordotdev/vector](https://github.com/vectordotdev/vector)

> A high-performance observability data pipeline.

- Language: Rust
- Stars: 22,428
- Forks: 2,262
- Stars in 1週間: 90
- Category: オブザーバビリティデータパイプライン
- Keywords: `Rust` `ログ収集` `メトリクス` `データ変換` `ベンダーニュートラル` `エージェント`
- Summary source: README

#### README要約

- Vectorは、ログやメトリクスなどのオブザーバビリティデータを収集・変換・転送する、Rust製の高性能なエンドツーエンドのデータパイプラインです。
- エージェントまたはアグリゲーターとしてデプロイでき、信頼性を重視した設計で、ベンダーニュートラルなデータルーティングと変換を提供します。
- オブザーバビリティコストの削減、ベンダー移行の円滑化、データ品質の向上を目指すスタートアップから大企業まで幅広いユーザーに適しています。
- オープンソースで提供され、クイックスタートガイドやコンテナイメージを通じて導入可能ですが、トレース機能は今後対応予定です。

---

### 18. [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff)

> The fastest and the most accurate file search SDK for AI agents, Neovim, Rust, C, Python, Bun and NodeJS

- Language: Rust
- Stars: 10,118
- Forks: 421
- Stars in 1週間: 174
- Category: ファイル検索SDK
- Keywords: `ファイル検索` `Rust` `MCPサーバー` `Neovim` `ファジー検索` `AIエージェント`
- Summary source: README

#### README要約

- 人間とAIエージェント向けの高速ファイル検索ツールキットで、Rust製コアを持つライブラリとして提供される。
- タイポ耐性のあるパス・コンテンツ検索、フリークエンシー（頻度＋最近性）ランキング、バックグラウンドウォッチャー、軽量インメモリインデックスを備える。
- MCPサーバー、Neovimプラグイン、Pi拡張、Node.js/Bun/C向けSDKとして提供され、AIエージェントやコードエディタでの繰り返し検索に適する。
- ワンラインインストールスクリプトやHomebrewで導入可能だが、大規模リポジトリでは数百MBのメモリを消費し、単発のgrepにはripgrepが適している。

---
