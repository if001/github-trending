+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/10/31'
date = 2026-10-31T00:23:45.538Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月31日 0:23:45
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製のAIエージェント基盤と開発者ツールがトレンドを席巻し、特にコーディングエージェントの制御・メモリ・セキュリティに関するプロジェクトが注目を集めている。

- AIエージェント関連のプロジェクトが全体の約半数を占め、コーディングエージェントの補助ツールやランタイム、メモリ管理などが多数ランクインしている。
- Rust言語が圧倒的に多く、高性能かつ安全なシステムプログラミング言語としてAI基盤やデスクトップアプリ開発で採用が進んでいる。
- オープンソースかつセルフホスト可能なツールが人気で、データプライバシーやベンダーロックイン回避を重視する傾向が見られる。
- MCP（Model Context Protocol）対応やマルチプロバイダー対応など、異なるAIツール間の相互運用性を重視した設計が目立つ。

### 主なテーマ

- **AIコーディングエージェント支援**: Claude CodeやCursorなどのコーディングエージェントをより効果的に使うためのツールが複数ランクイン。デザイン品質の担保、長期メモリによるコンテキスト引き継ぎ、コスト管理など、エージェントの実用化を支える周辺ツールが充実している。（`pbakaus/impeccable`、`akitaonrails/ai-memory`、`Nasiko-Labs/nasiko`）
- **AIエージェントランタイムとセキュリティ**: 自律型AIエージェントを安全に実行するための基盤が注目されている。サンドボックスによるアクセス制御、ポリシー管理、プロキシによるガバナンスなど、エージェントの動作を制御・監視する仕組みが求められている。（`NVIDIA/OpenShell`、`agentgateway/agentgateway`、`aaif-goose/goose`）
- **AI検索とローカル推論**: AIエージェント向けの検索エンジンやオンデバイス推論エンジンが登場。ローカル環境でのデータ処理を重視し、プライバシー保護と低レイテンシを実現するツールが支持されている。（`xerj-org/xerj`、`trymirai/uzu`）
- **オープンソースのSaaS代替**: Loom、TeamViewer、メールサーバーなど、既存の商用サービスに代わるオープンソースかつセルフホスト可能なツールが人気。データ主権とコスト削減を求める動きが反映されている。（`CapSoftware/Cap`、`rustdesk/rustdesk`、`stalwartlabs/stalwart`、`macro-inc/macro`）
- **AIネイティブなデザイン・開発ツール**: AIを活用したデザインツールや、GPUコンピューティング、ロボット制御など、先進的な技術領域でのRust採用が進んでいる。（`ZSeven-W/openpencil`、`NVIDIA/cuda-rust`、`pollen-robotics/microduck`）

### 補足的な観察

- 全18リポジトリ中、言語がすべてRustとなっており、Rustエコシステムの勢いが顕著。
- starsDuringPeriodのトップはpbakaus/impeccable（11,323）で、AI生成UIの品質問題への関心の高さがうかがえる。
- NVIDIAが2プロジェクト（cuda-rust、OpenShell）を公開しており、大手企業のオープンソースへの注力が見られる。
- MCP（Model Context Protocol）対応を謳うプロジェクトが4件あり、AIツール間の標準化プロトコルとして定着しつつある。

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 18 |

## Repository一覧

### 1. [pbakaus/impeccable](https://github.com/pbakaus/impeccable)

> The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships.

- Language: Rust
- Stars: 97,043
- Forks: 5,714
- Stars in 1週間: 11,323
- Category: デザイン支援ツール
- Keywords: `デザイン語彙` `AIスロップ検出` `コーディングエージェント` `UIレビュー` `デザインフック` `Rust`
- Summary source: README

#### README要約

- コーディングエージェント向けのデザイン語彙ツールで、AI生成UIのありがちな「スロップ」を出荷前に防ぐ。
- bolderやpolishなど24のコマンドでデザインを指示し、critiqueとauditでレビュー、62の決定論的ルールで問題を検出する。
- Claude Code、Cursor、Codex CLIなど多数のコーディングツール利用者が対象で、既存UIの改善に特に強い。
- npx impeccable installで導入し、/impeccable initで初期化。ライブモードはローカル専用で本番CSPを弱めないこと。

---

### 2. [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)

> Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors

- Language: Rust
- Stars: 14,607
- Forks: 1,050
- Stars in 1週間: 1,669
- Category: AIエージェントメモリ
- Keywords: `長期メモリ` `エージェント間ハンドオフ` `Markdownウィキ` `ゼロLLM` `Rust` `MCP`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの長期メモリソリューションで、Claude CodeからCodexなど異なるベンダーのエージェント間でコンテキストを引き継ぎ可能にする。
- ライフサイクルフックで作業を自動記録し、gitバックアップのMarkdownウィキとして保存。ゼロLLMコールで動作し、全文検索・エンティティ・リンク検索が可能。
- 複数のエージェントツールを切り替えて使う開発者や、チーム・複数マシン間で知識を共有したいユーザー向け。
- Rust製の単一バイナリとして提供され、自分のサーバーでホスト可能。20以上のエージェントハーネスをサポートし、MITライセンスで公開されている。

---

### 3. [agentgateway/agentgateway](https://github.com/agentgateway/agentgateway)

> Next Generation Agentic Proxy for AI Agents and MCP servers

- Language: Rust
- Stars: 5,810
- Forks: 1,028
- Stars in 1週間: 291
- Category: AIプロキシ
- Keywords: `AIエージェント` `MCP` `A2A` `LLMゲートウェイ` `プロキシ` `Rust`
- Summary source: README

#### README要約

- Agentgatewayは、MCPとA2Aプロトコル上に構築されたオープンソースのAIネイティブプロキシです。
- LLMゲートウェイ、MCPゲートウェイ、A2Aゲートウェイ、推論ルーティング、ガードレール、セキュリティと可観測性の機能を提供します。
- エージェント間、エージェントとLLM、エージェントとツール間の通信にセキュリティ、可観測性、ガバナンスを追加する必要がある開発者やプラットフォームチームを対象としています。
- スタンドアロンまたはKubernetes環境にデプロイでき、フラットYAML設定または組み込みコントローラーとGateway APIを使用して管理します。

---

### 4. [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck)

> A Tiny biped duck robot 🦆

- Language: Rust
- Stars: 13,169
- Forks: 1,639
- Stars in 1週間: 2,800
- Category: ロボット制御
- Keywords: `二足歩行ロボット` `強化学習` `Rust` `PPO` `MuJoCo` `ONNX`
- Summary source: README

#### README要約

- 強化学習ポリシーで動く小型二足歩行ロボット「Microduck」の制御ソフトウェア（頭脳）リポジトリです。
- Rockchip RK3566上で複数のデーモンが動作し、50Hzの制御ループで15個のサーボをニューラルポリシーから駆動します。
- 歩行・転がり・物を拾う・転倒からの復帰などの動作が可能で、ゲームパッドやBluetooth経由で操作できます。
- Rust製でフレームワーク不使用、ポリシーは別リポジトリmicroduck_rlでMuJoCoとPPOにより訓練されONNX経由で読み込まれます。

---

### 5. [macro-inc/macro](https://github.com/macro-inc/macro)

> Macro is a unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM — @-linked together with shared AI memory.

- Language: Rust
- Stars: 5,870
- Forks: 537
- Stars in 1週間: 892
- Category: 統合ワークスペース
- Keywords: `オールインワン` `チームコラボレーション` `AIエージェント` `Rust` `AGPLv3` `セルフホスト`
- Summary source: README

#### README要約

- Macroは、メール、チャット、ドキュメント、タスク、AIエージェント、CRMを単一の高速インターフェースに統合したオールインワンのチーム向けワークスペースです。
- 双方向グラフによる@リンクで全データを横断検索・参照可能にし、チームレベルの共有メモリを持つAIエージェントが各種操作を代行します。
- ツールの切り替えをなくしたいスタートアップや小規模チーム、および大企業内の部門を対象とし、SolidJSとRustで構築されています。
- AGPLv3の完全なオープンソースとして提供され、セルフホストが可能です。SOC 2 Type II認証を取得し、モデルプロバイダーでのデータ保持はゼロです。

---

### 6. [xerj-org/xerj](https://github.com/xerj-org/xerj)

> AI search engine and MCP server for bots and agents. One Rust binary indexes code, docs, logs, JSONL/CSV and PDFs for BM25 full-text, vector and hybrid search, code search without grep, agent memory and RAG. Elasticsearch-compatible API; Corpus Hub serves hundreds of reference memory corpora.

- Language: Rust
- Stars: 17,735
- Forks: 1,372
- Stars in 1週間: 4,227
- Category: AI検索エンジン
- Keywords: `Rust` `MCPサーバー` `全文検索` `ベクトル検索` `RAG` `Elasticsearch互換`
- Summary source: README

#### README要約

- AIエージェント向けのローカルファースト検索エンジンおよびMCPサーバーで、単一のRustバイナリとして動作する。
- コード、ドキュメント、ログ、JSONL/CSV、PDFをインデックス化し、BM25全文検索、ベクトル検索、ハイブリッド検索、コード検索、エージェントメモリをElasticsearch互換APIで提供する。
- Claude CodeやCursorなどのMCPクライアントと連携し、リファレンスコーディング、コードベースQ&A、RAG、セキュリティ監査、ログ分析などに利用できる。
- curlによるインストールスクリプトで導入可能だが、--insecureフラグはTLSと認証を無効化するため、開発マシン上の単一ユーザー利用に限定される。

---

### 7. [ruvnet/RuView](https://github.com/ruvnet/RuView)

> π RuView turns commodity WiFi signals into real-time spatial intelligence, vital sign monitoring, and presence detection — all without a single pixel of video.

- Language: Rust
- Stars: 101,764
- Forks: 13,217
- Stars in 1週間: 2,551
- Category: WiFiセンシング基盤
- Keywords: `WiFi CSI` `バイタル監視` `存在検知` `ESP32` `スマートホーム連携` `エッジAI`
- Summary source: README

#### README要約

- 市販のWiFi信号を用いて、カメラなしで人の存在検知・呼吸/心拍などのバイタル監視・動作追跡を行う空間インテリジェンス基盤です。
- 低価格なESP32センサーでCSI(Channel State Information)を取得し、壁越しや暗所でも在室人数、転倒、睡眠品質、環境変化などを推定します。
- スマートホーム利用者や見守り用途を想定し、Home Assistant、Apple Home、Google Home、Alexaなどと連携して部屋単位の状態や音声通知に利用できます。
- Rust製のベータソフトウェアで、ESP32-C3/初代ESP32は非対応、単一ノードでは空間分解能が限定的、ポーズ推定精度も制限がある点に注意が必要です。

---

### 8. [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil)

> The world's first open-source AI-native vector design tool and the first to feature concurrent Agent Teams. Design-as-Code. Turn prompts into UI directly on the live canvas. A modern alternative to Pencil.

- Language: Rust
- Stars: 6,982
- Forks: 605
- Stars in 1週間: 564
- Category: AIデザインツール
- Keywords: `AIネイティブ` `ベクターデザイン` `Design-as-Code` `Rust` `MCPサーバー` `UI生成`
- Summary source: README

#### README要約

- OpenPencilは、オープンソースのAIネイティブなベクターデザインツールです。
- 自然言語のプロンプトからUIをキャンバス上にリアルタイム生成し、複数のAIエージェントが並行してセクションごとにデザインを行います。
- デザインをコードとして扱う開発者や、AIを活用してUIデザインを効率化したいユーザーに適しています。
- Rust製で、WebアプリとmacOS/Windows/Linux向けネイティブデスクトップアプリとして動作し、HomebrewやScoopなどでインストール可能です。

---

### 9. [CapSoftware/Cap](https://github.com/CapSoftware/Cap)

> Open source Loom alternative. Beautiful, shareable screen recordings.

- Language: Rust
- Stars: 24,144
- Forks: 2,217
- Stars in 1週間: 568
- Category: 画面録画ツール
- Keywords: `画面録画` `オープンソース` `Loom代替` `セルフホスト` `Rust` `非同期コラボレーション`
- Summary source: README

#### README要約

- CapはオープンソースのLoom代替ツールで、美しく共有可能な画面録画を実現します。
- 画面・カメラ・マイクの録画、ローカル編集、即時共有リンク、コメント、文字起こし、分析機能を提供します。
- 製品デモ、バグ報告、オンボーディング、チュートリアル、非同期スタンドアップなどを効率化したいチームや個人が対象です。
- macOS、Windows、Linux向けデスクトップアプリをダウンロードするか、Docker Composeでセルフホスト可能です。

---

### 10. [stalwartlabs/stalwart](https://github.com/stalwartlabs/stalwart)

> All-in-one Mail & Collaboration server. Secure, scalable and fluent in every protocol (IMAP, JMAP, SMTP, CalDAV, CardDAV, WebDAV).

- Language: Rust
- Stars: 15,550
- Forks: 1,030
- Stars in 1週間: 286
- Category: メールサーバー
- Keywords: `メールサーバー` `Rust` `JMAP` `IMAP` `CalDAV` `スパムフィルタ`
- Summary source: README

#### README要約

- Rust製のオープンソースメール＆コラボレーションサーバーで、JMAP、IMAP4、POP3、SMTP、CalDAV、CardDAV、WebDAVをサポート。
- スパムフィルタ、全文検索、Sieveスクリプト、多様なストレージバックエンド、クラスタリングや高可用性など幅広い機能を備える。
- セキュアでスケーラブルなメール環境を自前で運用したい組織や、カレンダー・連絡先・ファイル共有を統合したいユーザー向け。
- AGPL-3.0と商用のStalwart Enterprise License v2のデュアルライセンスで、ACMEによるTLS証明書の自動取得など運用支援機能もある。

---

### 11. [xai-org/x-algorithm](https://github.com/xai-org/x-algorithm)

> Algorithm powering the For You feed on X

- Language: Rust
- Stars: 33,942
- Forks: 5,486
- Stars in 1週間: 187
- Category: レコメンドシステム
- Keywords: `For Youフィード` `トランスフォーマー` `ランキング` `Rust` `可視性フィルタリング` `Phoenix`
- Summary source: README

#### README要約

- Xの「For You」フィードに表示する投稿を決定するコアアルゴリズムのリポジトリ。
- フォロー中アカウントの投稿とML検索によるネットワーク外の投稿を組み合わせ、トランスフォーマーモデルで各アクションの確率を予測してスコアリング・ランキングする。
- Xのレコメンドシステムの仕組みを理解したい開発者や研究者向けに、ランキング・フィルタリング・透明性ツールのコードを公開している。
- Apache License 2.0で公開。Phoenixには学習コードと合成データ生成が含まれ概念実証の学習が可能だが、一部のビルド・デプロイ関連ファイルは含まれない場合がある。

---

### 12. [NVIDIA/cuda-rust](https://github.com/NVIDIA/cuda-rust)

> NVIDIA's CUDA platform for Rust. Host runtime crates plus Tile (cutile-rs) and SIMT (cuda-oxide) kernel programming models in idiomatic Rust.

- Language: Rust
- Stars: 3,909
- Forks: 351
- Stars in 1週間: 124
- Category: GPUコンピューティング基盤
- Keywords: `CUDA` `Rust` `GPUカーネル` `SIMT` `Tile` `NVIDIA`
- Summary source: README

#### README要約

- NVIDIAが提供するRust向けCUDAプラットフォームで、ホスト側のランタイムクレートとGPUカーネル記述用のデバイス側クレート・ツールを提供する。
- SIMTモデルのcuda-oxide（rustcコード生成バックエンド、Rust→PTXを事前コンパイル）とTileモデルのcutile-rs（proc-macro、テンソルをタイル単位で計算し初回起動時にJIT）の2つのカーネルプログラミングモデルを備える。
- CUDA C++に慣れた開発者にはSIMT、NumPy/PyTorch風のテンソル計算を書きたい開発者にはTileが適し、両モデルは同一ストリーム上で相互運用できる。
- cuda-bindings/cuda-core/cuda-asyncが共有ランタイムを提供するが、早期段階の研究プロジェクトでありバグ・不完全な機能・API破壊の可能性がある点に注意が必要。

---

### 13. [trymirai/uzu](https://github.com/trymirai/uzu)

> A high-performance inference engine for AI models

- Language: Rust
- Stars: 3,105
- Forks: 202
- Stars in 1週間: 534
- Category: AI推論エンジン
- Keywords: `ローカル推論` `Rust` `オンデバイスAI` `マルチ言語バインディング` `OpenAI互換API` `Apple最適化`
- Summary source: README

#### README要約

- AIモデルをアプリ内で直接実行するための高性能推論エンジンで、ゼロレイテンシ・完全なデータプライバシー・推論コスト不要を謳う。
- シンプルな高レベルAPI、統一モデル設定、正確性を検証可能なトレース可能な計算、Appleデバイスの統一メモリ活用を特徴とする。
- Rust・Python・Swift・TypeScriptのバインディングを提供し、モバイル・デスクトップアプリへのAI組み込みを対象とする。
- 独自モデル形式を使用しlalamoで変換可能。CLIモードやOpenAI互換HTTPサーバーとしても動作し、MITライセンスで提供される。

---

### 14. [nyakang/nyaterm](https://github.com/nyakang/nyaterm)

> A modern remote terminal workspace

- Language: Rust
- Stars: 2,172
- Forks: 203
- Stars in 1週間: 283
- Category: ターミナル・SSHクライアント
- Keywords: `SSH` `ターミナル` `Rust` `GPUI` `SFTP` `リモートデスクトップ`
- Summary source: README

#### README要約

- GPUIで構築されたRust製のモダンなネイティブリモートターミナルワークスペースです。
- SSH、Telnet、Serial、RDP、VNC、SFTP、AIアシスタント、暗号化同期などを単一のデスクトップクライアントに統合しています。
- 開発者、システム管理者、DevOpsエンジニアなど、サーバーとローカル環境を頻繁に行き来するユーザー向けです。
- Windows、macOS、Linuxに対応し、MITライセンスで提供され、cargo run -p nyaterm-app --bin nyatermでビルドできます。

---

### 15. [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell)

> OpenShell is the safe, private runtime for autonomous AI agents.

- Language: Rust
- Stars: 20,768
- Forks: 2,038
- Stars in 1週間: 2,352
- Category: AIエージェントランタイム
- Keywords: `AIエージェント` `サンドボックス` `セキュリティ` `ポリシー管理` `カーネル制御` `形式検証`
- Summary source: README

#### README要約

- OpenShellは、自律型AIエージェントのための安全でプライベートなランタイムです。
- カーネルレベルのサンドボックスでファイルアクセスやネットワーク接続を制御し、ポリシー変更は形式検証で事前チェックします。
- AIエージェントにファイル操作やAPI呼び出しを許可しつつ、データや認証情報への無制限アクセスを防ぎたいユーザー向けです。
- Linux、macOS（Apple Silicon）、WSL 2（実験的）が必要で、Docker、Podman、またはホスト仮想化環境で動作します。

---

### 16. [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko)

> The Open Runtime for AI Agents

- Language: Rust
- Stars: 10,782
- Forks: 2,694
- Stars in 1週間: 1,217
- Category: AIエージェント管理基盤
- Keywords: `AIエージェント` `LLMルーティング` `コスト管理` `Rust` `オープンランタイム` `開発者ツール`
- Summary source: README

#### README要約

- NasikoはAIコーディングエージェント向けのオープンランタイムで、実行中のエージェントを発見しコストを可視化する。
- Claude Code、Codex、OpenCode、Cursor CLIを非侵襲的に検出し、セッション報告とLLMルーティングをオプトインで提供する。
- 開発者が既存のハーネスワークフローを維持したまま、モデル選択とコスト管理を一元化したいチームに適している。
- Rust製CLIとDockerによるコントロールプレーンが必要で、レポートとルーティングにはアクティブなログインが求められる。

---

### 17. [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk)

> An open-source remote desktop application designed for self-hosting, as an alternative to TeamViewer.

- Language: Rust
- Stars: 127,624
- Forks: 20,187
- Stars in 1週間: 1,024
- Category: リモートデスクトップ
- Keywords: `Rust` `リモートデスクトップ` `セルフホスト` `TeamViewer代替` `オープンソース` `クロスプラットフォーム`
- Summary source: README

#### README要約

- RustDeskはRustで書かれたオープンソースのリモートデスクトップソフトウェアで、TeamViewerの代替としてセルフホスト可能です。
- 設定不要ですぐに動作し、公式のランデブー/リレーサーバーの利用、自前サーバーの構築、独自サーバーの実装が可能で、データを完全に管理できます。
- リモートサポートや遠隔操作を必要とする個人・組織向けで、Windows/Linux/macOSやモバイルに対応し、F-DroidやFlathubからも入手できます。
- リリース版バイナリやナイトリービルドをダウンロード可能で、ソースからビルドする場合はRust/C++環境とvcpkgによる依存ライブラリの導入が必要です。

---

### 18. [aaif-goose/goose](https://github.com/aaif-goose/goose)

> an open source, extensible AI agent that goes beyond code suggestions - install, execute, edit, and test with any LLM

- Language: Rust
- Stars: 55,980
- Forks: 6,504
- Stars in 1週間: 429
- Category: AIエージェント
- Keywords: `AIエージェント` `Rust` `CLI` `デスクトップアプリ` `MCP` `マルチプロバイダー`
- Summary source: README

#### README要約

- ローカルマシン上で動作する汎用AIエージェントで、コードだけでなく調査、執筆、自動化、データ分析など多様なタスクに対応する。
- macOS、Linux、Windows向けのネイティブデスクトップアプリ、ターミナルワークフロー用のCLI、組み込み用APIを提供し、Rustで構築されている。
- Anthropic、OpenAI、Google、Ollamaなど15以上のプロバイダーに対応し、Model Context Protocol経由で70以上の拡張機能と接続できる。
- デスクトップアプリは公式サイトからダウンロード可能で、CLIはcurlスクリプトでインストールできる。Apache 2.0ライセンスで公開されている。

---
