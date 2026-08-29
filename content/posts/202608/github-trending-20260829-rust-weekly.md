+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/08/29'
date = 2026-08-29T03:07:37.485Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月29日 3:07:37
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製のAIエージェント関連ツールとローカルファーストな開発者ツールがGitHub Trendingを席巻している。

- 一覧の16件すべてがRust製であり、Rustがトレンドの中心言語となっている。
- openai/codexが9,109スターで突出しており、AIコーディングエージェントへの関心の高さがうかがえる。
- AIエージェントのメモリ管理・スキル管理・オーケストレーションなど、エージェント周辺の基盤ツールが複数ランクインしている。
- OpenLogiやvaultwardenなど、ローカルファースト・セルフホスト・プライバシー重視を掲げるツールが目立つ。
- oxcやgitoxide、gpui-componentなど、Rustによる高性能な開発基盤・ライブラリも存在感を示している。

### 主なテーマ

- **AIコーディングエージェントとその周辺ツール**: openai/codexが9,109スターでトップに立ち、エージェントのスキル管理（skills-manager）、長期メモリ（ai-memory）、バックエンドのローカル実装（cursor-byok）など、コーディングエージェントを支える周辺ツールが複数ランクインしており、エージェント活用のエコシステム全体への関心が高い。（`openai/codex`、`xingkongliang/skills-manager`、`akitaonrails/ai-memory`、`leookun/cursor-byok`）
- **ローカルファースト・プライバシー重視のツール**: AprilNEA/OpenLogiはアカウント不要・テレメトリなしを明示し4,825スターを獲得、tinyhumansai/openhumanはローカルファーストのパーソナルAIを謳い、vaultwardenはセルフホスト型パスワード管理として定番の人気を維持しており、データをローカルで管理する志向が強い。（`AprilNEA/OpenLogi`、`tinyhumansai/openhuman`、`dani-garcia/vaultwarden`）
- **AIエージェント向けメモリ・検索基盤**: akitaonrails/ai-memory、ruvnet/RuVector、lancedb/lancedbの3件が、エージェントの長期記憶やベクトル検索を担う基盤としてランクインしており、エージェントに持続的な記憶を持たせる技術への注目が集まっている。（`akitaonrails/ai-memory`、`ruvnet/RuVector`、`lancedb/lancedb`）
- **Rustによる高性能開発基盤・言語ツール**: oxc-project/oxc（JS/TSツール群）、GitoxideLabs/gitoxide（pure Rust Git実装）、gleam-lang/gleam（型安全言語）、longbridge/gpui-component（GUIコンポーネント）など、Rustで書かれた開発者向け基盤ソフトウェアが複数入りしており、Rustの基盤技術としての採用が進んでいる。（`oxc-project/oxc`、`GitoxideLabs/gitoxide`、`gleam-lang/gleam`、`longbridge/gpui-component`）
- **ローカルLLM実行・モデル選定支援**: AlexsJones/llmfitはハードウェアに基づき実行可能なLLMを判定するツールで1,063スターを獲得、cursor-byokは独自APIキーで任意のモデルプロバイダーを利用するゲートウェイであり、ローカルや自前の環境でLLMを動かすニーズの高まりがうかがえる。（`AlexsJones/llmfit`、`leookun/cursor-byok`）

### 補足的な観察

- スター獲得数はopenai/codexの9,109が突出しており、2位のOpenLogi（4,825）と3位のopenhuman（2,353）以降は大きく減少し、下位は100スター未満のリポジトリもある。
- 言語分布は全16件がRustで統一されており、他言語のリポジトリが一件も含まれていない点が特異である。
- nautechsystems/nautilus_traderのようにRustをコアとしつつPythonを制御プレーンとして併用する構成など、Rustと他言語のハイブリッド構成も見られる。
- AI関連カテゴリ（コーディングエージェント、メモリ管理、ベクトルDB、チャットソフト等）が全体の半数以上を占め、AIがトレンドの主軸となっている。

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 16 |

## Repository一覧

### 1. [openai/codex](https://github.com/openai/codex)

> Lightweight coding agent that runs in your terminal

- Language: Rust
- Stars: 119,587
- Forks: 18,261
- Stars in 1週間: 9,109
- Category: AIコーディングエージェント
- Keywords: `Codex CLI` `OpenAI` `ターミナル` `コーディングエージェント` `Rust` `ChatGPT連携`
- Summary source: README

#### README要約

- OpenAI製のコーディングエージェント「Codex CLI」で、ローカル環境のターミナル上で動作する。
- ターミナルでの対話的なコード生成・編集を支援し、VS CodeなどのIDE拡張やデスクトップアプリ、クラウド版とも連携する。
- ChatGPTのPlus/Pro/Business等のプラン利用者やAPIキーでの認証を希望する開発者が対象。
- curlやnpm、Homebrewでインストール可能で、Apache-2.0ライセンスで提供される。

---

### 2. [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi)

> ⚡️A native, local-first alternative to Logitech Options+, written in Rust 🦀 — remap buttons, DPI, and SmartShift over HID++. No account, no telemetry.

- Language: Rust
- Stars: 17,428
- Forks: 499
- Stars in 1週間: 4,825
- Category: デバイス設定ツール
- Keywords: `Rust` `Logitech` `HID++` `ローカルファースト` `ボタンリマップ` `オープンソース`
- Summary source: README

#### README要約

- Rust製のLogitech Options+代替アプリで、マウス・キーボード・WebカメラをHID++/UVC経由で制御する。
- ボタンリマップ、DPI調整、SmartShift、アプリ別プロファイル、TOML設定、CLI/GUIを備える。
- アカウント不要・テレメトリなしを求めるmacOS/Linux/WindowsのLogitechデバイスユーザー向け。
- 開発中で不安定。Logi Options+を先に終了する必要があり、OSごとにインストール手順が異なる。

---

### 3. [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

> Your Personal AI super intelligence. A brain that builds a local-first memory of your life, a fantastic orchestrator of agent fleets and workflows, and a deep researcher.

- Language: Rust
- Stars: 38,741
- Forks: 3,803
- Stars in 1週間: 2,353
- Category: AIエージェント
- Keywords: `ローカルファースト` `メモリ管理` `エージェントオーケストレーション` `OAuth連携` `プライバシー重視` `Rust`
- Summary source: README

#### README要約

- OpenHumanは、ローカルファーストで動作するパーソナルAIスーパーインテリジェンスで、記憶・オーケストレーション・深いリサーチを統合したツールです。
- Memory TreeとObsidian Wikiでデータを圧縮してSQLiteに保存し、100以上のOAuth連携や5,000以上のMCPサーバー、90,000以上のスキルと連携します。
- 個人ユーザーが自分のデータをローカルで管理しながら、GmailやNotion、GitHubなどと連携してAIエージェントを活用する用途に適しています。
- 早期ベータ版で開発中のため粗い部分があり、インストールは公式サイトやGitHub Releasesから行い、Rust 1.93.0やNode.js 24+などの環境が必要です。

---

### 4. [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader)

> Production-grade Rust-native trading engine with deterministic event-driven architecture

- Language: Rust
- Stars: 28,034
- Forks: 3,621
- Stars in 1週間: 1,100
- Category: 取引システム
- Keywords: `Rust` `Python` `イベント駆動` `バックテスト` `マルチベニュー` `決定論的`
- Summary source: README

#### README要約

- NautilusTraderは、マルチアセット・マルチベニュー取引システム向けのオープンソースの本番運用可能なRustネイティブエンジンです。
- リサーチ、決定論的シミュレーション、ライブ実行を単一のイベント駆動アーキテクチャでカバーし、Pythonが戦略ロジックや設定の制御プレーンとして機能します。
- 暗号資産取引所（CEX/DEX）、FX、株式、先物、オプション、ベッティング取引所など、REST APIやWebSocketフィードを持つあらゆるベニューにモジュラーアダプターで接続可能です。
- Rust 1.98.0およびPython 3.12-3.14が必要で、Linux、macOS、Windowsで動作し、Dockerでのデプロイも可能です。

---

### 5. [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)

> Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors

- Language: Rust
- Stars: 5,086
- Forks: 353
- Stars in 1週間: 1,223
- Category: AIエージェントメモリ管理
- Keywords: `長期メモリ` `AIコーディングエージェント` `MCP` `セッション引き継ぎ` `Rust` `マルチエージェント対応`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの長期メモリツールで、セッション終了後もコンテキストを保持し、異なるエージェント間での引き継ぎを可能にする。
- サニタイズされたライフサイクル観測から共有永続wikiを構築し、セッション終了時に要約を生成して次のエージェントへ引き継ぐ。
- Claude Code、Codex、Cursor、Gemini CLIなど多数のエージェントに対応し、MCP設定とライフサイクルフックで統合される。
- Rust製でMITライセンス。Linux/macOS/Windows(WSL2)をサポートし、Dockerイメージやネイティブバイナリで導入可能。

---

### 6. [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager)

> A lightweight desktop app to manage, sync, and organize AI agent skills across 50+ coding tools — Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.

- Language: Rust
- Stars: 4,185
- Forks: 360
- Stars in 1週間: 271
- Category: 開発者ツール
- Keywords: `AIエージェント` `スキル管理` `Claude Code` `マルチデバイス同期` `Rust` `Tauri`
- Summary source: README

#### README要約

- Claude Code、Codex、Cursorなど50以上のコーディングツール間でAIエージェントスキルを一元管理する軽量デスクトップアプリ。
- Gitリポジトリやローカルフォルダ、マーケットプレイスからスキルをインストールし、プリセットやタグで整理して各ツールへシンボリックリンクまたはコピーで同期できる。
- 複数のAIコーディングツールを併用する開発者が、グローバル・プロジェクト単位でスキルを管理し、GitHub経由で複数デバイス間のバックアップと同期を行う用途に適する。
- Rust製のTauriアプリで、macOSとWindowsはアプリ内更新に対応。v1.29.0以降はApple公証済みだが、それ以前のバージョンではGatekeeperの警告が出る場合がある。

---

### 7. [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)

> Hundreds of models & providers. One command to find what runs on your hardware.

- Language: Rust
- Stars: 34,463
- Forks: 2,155
- Stars in 1週間: 1,063
- Category: LLMハードウェア適合性判定ツール
- Keywords: `LLM` `ハードウェア検出` `Rust` `TUI` `モデル選定` `ベンチマーク`
- Summary source: README

#### README要約

- システムのRAM、CPU、GPUに基づいて、実行可能なLLMモデルを判定するターミナルツール。
- ハードウェアを検出し、品質・速度・適合性・コンテキストの4次元でモデルをスコアリングし、対話型TUIまたはCLIで結果を表示する。
- ローカルLLMを実行したいユーザーが、自分のマシンで実際に動作するモデルを選定する際に使用する。
- Rust製で、Homebrew、Scoop、uv、Dockerなどからインストール可能。Ollama、llama.cpp、MLXなどのランタイムプロバイダーに対応。

---

### 8. [dani-garcia/vaultwarden](https://github.com/dani-garcia/vaultwarden)

> Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs

- Language: Rust
- Stars: 66,436
- Forks: 3,161
- Stars in 1週間: 698
- Category: パスワード管理サーバー
- Keywords: `Bitwarden互換` `Rust` `セルフホスト` `パスワード管理` `Docker` `オープンソース`
- Summary source: README

#### README要約

- Rustで書かれた非公式のBitwarden互換サーバー実装で、公式Bitwardenクライアントと連携できるセルフホスト向けパスワード管理サーバー。
- 個人Vault、Send、添付ファイル、組織機能、多要素認証、緊急アクセスなどBitwarden Client APIのほぼ完全な実装を提供。
- 公式のリソース集約型サービスが適さない環境でのセルフホスト利用を想定し、個人・家族・小規模組織を対象としている。
- コンテナイメージでの導入が推奨され、HTTPS有効化とリバースプロキシ設定が必要。データ損失に備えた定期バックアップが強く推奨される。

---

### 9. [GitoxideLabs/gitoxide](https://github.com/GitoxideLabs/gitoxide)

> An idiomatic, lean, fast & safe pure Rust implementation of Git

- Language: Rust
- Stars: 11,886
- Forks: 538
- Stars in 1週間: 90
- Category: Git実装ライブラリ
- Keywords: `Rust` `Git` `gix` `ライブラリ` `CLI` `pure Rust`
- Summary source: README

#### README要約

- gitoxideは、正確性とパフォーマンスを重視した、RustによるGitの実装です。
- Cargo依存関係としてAPIアクセスを提供するgixクレートと、開発用のgixおよびeinバイナリの2つの利用形態があります。
- clone、fetch、status、blame、オブジェクトやrefsの読み書きなどを実装済みで、pushやmerge、rebaseなどは計画中です。
- コマンドラインツールは不安定なためスクリプトでの利用は避け、各クレートの状態はcrate-status.mdで確認してください。

---

### 10. [oxc-project/oxc](https://github.com/oxc-project/oxc)

> ⚓ A collection of high-performance JavaScript tools.

- Language: Rust
- Stars: 22,543
- Forks: 1,245
- Stars in 1週間: 138
- Category: 開発ツール
- Keywords: `JavaScript` `TypeScript` `Rust` `高性能` `ツール群` `オープンソース`
- Summary source: README

#### README要約

- OxcはRustで書かれたJavaScriptおよびTypeScript向けの高性能ツール群です。
- パーサー、トランスフォーマー、ミニファイア、リゾルバー、リンター、フォーマッターなどの機能を提供します。
- RolldownやNuxtなどのプロジェクトで利用されており、次世代の高速な開発ツールを実現します。
- npxコマンドで簡単に導入でき、MITライセンスの下で公開されています。

---

### 11. [longbridge/gpui-component](https://github.com/longbridge/gpui-component)

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

- Language: Rust
- Stars: 13,585
- Forks: 822
- Stars in 1週間: 293
- Category: GUIフレームワーク
- Keywords: `Rust` `GPUI` `UIコンポーネント` `クロスプラットフォーム` `デスクトップアプリ` `Apache-2.0`
- Summary source: README

#### README要約

- RustとGPUIで高性能なクロスプラットフォームデスクトップアプリを構築するための総合UIコンポーネントフレームワーク。
- 60以上のUIコンポーネント、仮想スクロール対応データテーブル、Tree-sitter/LSP対応コードエディタ、ドックレイアウトなどを備え、スタイル済みのgpui-component層と無スタイルの基盤gpui-base層の2層構造を採用。
- 商用アプリLongbridge Proで実運用されており、完成されたUIで素早くアプリを作りたい開発者や、gpui-base上に独自デザインシステムを構築したい開発者が対象。
- gpuiとgpui_platformはZedリポジトリのgit依存としてCargo.tomlに追加し、gpui_component::initを呼んでから利用する。アイコンSVGは同梱されずLucide等を自前で用意する必要がある。ライセンスはApache-2.0。

---

### 12. [gleam-lang/gleam](https://github.com/gleam-lang/gleam)

> ⭐️ A friendly language for building type-safe, scalable systems!

- Language: Rust
- Stars: 21,834
- Forks: 1,009
- Stars in 1週間: 84
- Category: プログラミング言語
- Keywords: `Gleam` `型安全` `Rust` `スケーラブル` `関数型`
- Summary source: README

#### README要約

- Gleamは型安全でスケーラブルなシステムを構築するためのフレンドリーなプログラミング言語です。
- Rustで実装されており、型安全性を重視した設計が特徴です。
- スケーラブルなシステム開発を目指す開発者に適しています。
- 企業ではなくスポンサーによって支援されており、詳細は公式サイトで確認できます。

---

### 13. [ruvnet/RuVector](https://github.com/ruvnet/RuVector)

> RuVector is a High Performance, Real-Time, Self-Learning Ai, Vector GNN, Memory DB built in Rust.

- Language: Rust
- Stars: 4,465
- Forks: 590
- Stars in 1週間: 25
- Category: AIエージェント向けメモリDB
- Keywords: `Rust` `ベクトル検索` `エージェントメモリ` `意味埋め込み` `グラフ` `フィードバック学習`
- Summary source: README

#### README要約

- RuVectorは、AIエージェントがセッションをまたいで記憶を保持するためのRust製メモリ基盤です。
- ローカルな意味埋め込み、永続ベクトル検索、グラフ関係、フィードバック学習、メモリライフサイクル管理を組み合わせています。
- CLIやNode.jsから利用でき、エージェントの意思決定に必要な記憶の保存・想起・適応を担う開発者向けです。
- DBサーバーやAPIキー不要で始められますが、初回の意味検索ではローカルモデルをダウンロードし、ストアごとに埋め込みモデルと次元を統一する必要があります。

---

### 14. [SlimeBoyOwO/LingChat](https://github.com/SlimeBoyOwO/LingChat)

> Immersive AI-driven Galgame chat with emotional expressions, desktop pet, scheduling, and interactive story modules. / 一款沉浸式 AI-Galgame 聊天软件，附带桌宠，日程，剧情功能

- Language: Rust
- Stars: 1,968
- Forks: 118
- Stars in 1週間: 261
- Category: AIチャットソフトウェア
- Keywords: `AI` `Galgame` `チャット` `デスクトップペット` `感情認識` `カスタマイズ`
- Summary source: README

#### README要約

- LingChatは、AIを活用した没入型のGalgame風チャットソフトウェアです。
- 永久記憶、感情認識、デスクトップペット、スケジュール管理、対話型ストーリーなどの機能を備えています。
- AIとの深い対話やキャラクターカスタマイズを楽しみたいユーザーに適しています。
- APIキーの設定が必要で、Windows Defenderによる誤検出に注意が必要です。

---

### 15. [leookun/cursor-byok](https://github.com/leookun/cursor-byok)

> cursor-byok is a local implementation of Cursor's backend. https://docs.leokun.cn/

- Language: Rust
- Stars: 2,576
- Forks: 405
- Stars in 1週間: 147
- Category: AI開発ツール
- Keywords: `Cursor` `ローカルゲートウェイ` `Rust` `LLM` `APIプロキシ` `オープンソース`
- Summary source: README

#### README要約

- cursor-byokは、Cursorのバックエンドをローカルで実装したオープンソースのモデルゲートウェイです。
- OpenAIやAnthropic互換のAPIを接続し、ツール呼び出しやMCPなどのCursor Agent機能を維持したままリクエストをルーティングします。
- 独自のAPIキーやエンドポイントを使用して、Cursor上で任意のモデルプロバイダーを利用したい開発者に適しています。
- GitHub Releasesから実行ファイルをダウンロードし、モデル設定を行ってサービスを開始することで導入できます。

---

### 16. [lancedb/lancedb](https://github.com/lancedb/lancedb)

> Developer-friendly OSS embedded retrieval library for multimodal AI. Search More; Manage Less.

- Language: Rust
- Stars: 11,309
- Forks: 1,032
- Stars in 1週間: 78
- Category: ベクトルデータベース
- Keywords: `ベクトル検索` `マルチモーダル` `AI/ML` `オープンソース` `Rust` `レイクハウス`
- Summary source: README

#### README要約

- LanceDBは、AI/MLアプリケーション向けのマルチモーダルデータプラットフォームであり、高速でスケーラブルなベクトル検索を提供するオープンソースのレイクハウスです。
- Lanceカラムナフォーマットを基盤とし、ベクトル類似検索、全文検索、SQLによるクエリをサポートし、テキスト、画像、動画などのマルチモーダルデータを効率的に保存・管理できます。
- AIワークロードの構築、トレーニング、分析を行う開発者や研究者を対象としており、Python、Node.js、Rust、REST APIなど多様なインターフェースで統合可能です。
- ローカル環境やクラウドで動作し、ベンダーロックインなしで利用できます。インストールはQuickstartドキュメントに従い、各言語のSDKを通じて導入します。

---
