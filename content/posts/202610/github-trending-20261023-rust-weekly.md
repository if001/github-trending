+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/10/23'
date = 2026-10-23T23:46:58.390Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月23日 23:46:58
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 15
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが全15件を独占し、AIエージェント向けインフラ（メモリ・検索・連携）がトレンドの中心となっている

- 全15リポジトリがRustで記述されており、言語分布が完全にRustに集中している
- AIエージェント関連ツールが8件（ai-memory、xerj、Konnect、OpenBitFun、Codync、uzu、omnigraph、googleworkspace/cli）と過半数を占める
- 単一バイナリ・ローカルファースト・オンデバイス動作を重視する設計が複数のプロジェクトで共通している
- MCP（Model Context Protocol）対応がxerj、Konnect、OpenBitFunなど複数のツールで見られ、エージェント連携の標準として定着しつつある
- AI以外にもCAD、PCB設計、ロボット制御、ゲーム機CFWなど専門分野向けのRust製ツールが幅広くランクインしている

### 主なテーマ

- **AIエージェントのメモリ・検索基盤**: AIコーディングエージェントが長期的に情報を保持・検索するためのインフラが注目されている。ai-memoryはエージェント間のタスク引き継ぎをMarkdown wikiで実現し3322スター、xerjはBM25・ベクトル・ハイブリッド検索をElasticsearch互換APIで提供し8064スターと今期最多、omnigraphはGitスタイルのブランチング付きグラフDBをエージェントの共有ワールドモデルとして提供する。（`akitaonrails/ai-memory`、`xerj-org/xerj`、`ModernRelay/omnigraph`）
- **AIエージェントのリモート操作・統合ワークスペース**: 複数のAIエージェントを統合し、デスクトップやモバイルからリモート操作するツールが台頭している。OpenBitFunは4つのエージェントハーネスモードとMini Apps機能を持つワークスペース、Codyncは40以上のエージェントをiPhoneやデスクトップからメッセージング形式で操作可能にする。（`GCWing/OpenBitFun`、`leepokai/Codync`）
- **MCP経由の専門ツール・サービス連携**: MCPプロトコルを介してAIエージェントが専門ソフトウェアや外部サービスを直接操作する動きが広がっている。KonnectはKiCAD 10のPCB設計を217ツールでAI操作可能にし、googleworkspace/cliはGoogle Workspace全APIをAIエージェントスキル付きCLIとして提供する。（`mixelpixx/Konnect`、`googleworkspace/cli`）
- **Rust製の高性能開発基盤・ランタイム**: JavaScript/TypeScriptエコシステム向けのRust製高速ツールが継続して支持されている。BunはオールインワンのJSランタイム、oxcはパーサー・リンター・フォーマッタを含む高性能ツール群で、RolldownやNuxtなどが採用している。（`oven-sh/bun`、`oxc-project/oxc`）
- **専門分野向けRust製アプリケーション**: AI以外の領域でもRust製の専門ツールが複数ランクインしている。OpenCADStudioはDWG/DXF対応のCADソフト、microduckは強化学習ポリシーで動く二足歩行ロボット制御、airgorahはWiFiセキュリティ監査、uzuはオンデバイスAI推論エンジン、impactorはiOSサイドローディング、slotはゲーム機CFWと多岐にわたる。（`HakanSeven12/OpenCADStudio`、`pollen-robotics/microduck`、`martin-olivier/airgorah`、`trymirai/uzu`、`claration/impactor`、`BrandonKowalski/slot`）

### 補足的な観察

- スター数のトップはxerj-org/xerjの8064で、次いでakitaonrails/ai-memoryの3322であり、AIエージェント向け検索・メモリ基盤への関心の高さが数値に表れている
- 言語分布は全15件中15件がRustであり、他言語のリポジトリは1件もランクインしていない
- 「単一Rustバイナリ」を謳うプロジェクトがxerj、Konnect、ai-memoryなど複数あり、配布・導入の手軽さを重視する傾向が共通している
- ローカルファースト・オンデバイス・ゼロLLM呼び出しなど、クラウドに依存しない設計を明示するプロジェクトが目立つ

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 15 |

## Repository一覧

### 1. [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)

> Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors

- Language: Rust
- Stars: 13,034
- Forks: 909
- Stars in 1週間: 3,322
- Category: AIエージェントメモリ管理ツール
- Keywords: `長期メモリ` `エージェント間引き継ぎ` `Markdown wiki` `Rust` `ライフサイクルフック` `ゼロLLM`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの長期メモリソリューションで、Claude CodeからCodexなど異なるエージェント間でのタスク引き継ぎを可能にする。
- gitバックアップのMarkdown wikiを信頼できる情報源とし、ライフサイクルフックで自動的に作業を記録・統合し、検索や引き継ぎを行う。
- 複数のエージェント、マシン、チーム間でメモリを共有したい開発者やチームが対象で、20以上のエージェントハーネスをサポートする。
- 単一の自己完結型バイナリとして提供され、デフォルトではLLM呼び出しなしで動作し、サーバーは自分でホストする必要がある。

---

### 2. [xerj-org/xerj](https://github.com/xerj-org/xerj)

> Local-first search engine and MCP server for AI agents. One Rust binary indexes code, docs, logs, JSONL/CSV and PDFs for BM25 full-text, vector and hybrid search, code search without grep, agent memory and RAG. Elasticsearch-compatible API; Corpus Hub serves hundreds of reference memory corpora.

- Language: Rust
- Stars: 14,195
- Forks: 976
- Stars in 1週間: 8,064
- Category: AIエージェント向け検索エンジン
- Keywords: `ローカルファースト` `MCPサーバー` `BM25` `ベクトル検索` `Elasticsearch互換` `Rust`
- Summary source: README

#### README要約

- AIエージェント向けのローカルファースト検索エンジン兼MCPサーバーで、単一のRustバイナリとして動作する。
- コード、ドキュメント、ログ、JSONL/CSV、PDFを自動的にインデックス化し、BM25全文検索、ベクトル検索、ハイブリッド検索をElasticsearch互換APIで提供する。
- Claude CodeやCursorなどのMCPクライアントと連携し、エージェントがファイルを個別に読む代わりに必要なコード箇所を直接取得できるようにする。
- curl経由のインストールスクリプトで導入可能だが、--insecureフラグはTLSと認証を無効化するため、開発マシン上の単一ユーザー利用に限定される。

---

### 3. [oven-sh/bun](https://github.com/oven-sh/bun)

> Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one

- Language: Rust
- Stars: 96,361
- Forks: 5,116
- Stars in 1週間: 191
- Category: JavaScriptランタイム
- Keywords: `Bun` `JavaScript` `TypeScript` `Node.js互換` `Rust` `オールインワン`
- Summary source: README

#### README要約

- BunはJavaScriptとTypeScriptアプリ向けのオールインワンツールキットで、単一の実行ファイルとして提供される。
- Rustで書かれJavaScriptCoreを採用した高速ランタイムを中核に、テストランナー、スクリプトランナー、Node.js互換パッケージマネージャーを統合している。
- Node.jsのドロップイン代替として設計され、既存のNode.jsプロジェクトでほぼ変更なく利用でき、起動時間とメモリ使用量を大幅に削減する。
- Linux、macOS、Windowsをサポートし、curlスクリプト、npm、Homebrew、Dockerなどでインストール可能。Linuxではカーネル5.6以上が推奨される。

---

### 4. [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect)

> AI-assisted PCB design for KiCAD 10. Native KiCAD plugin — a single Rust binary exposing 217 schematic, layout, routing, placement, design-review, and manufacturing tools to Claude, or the LLM of your choosing

- Language: Rust
- Stars: 1,383
- Forks: 165
- Stars in 1週間: 378
- Category: AI支援PCB設計ツール
- Keywords: `KiCAD` `MCP` `Rust` `PCB設計` `AIアシスタント` `Claude`
- Summary source: README

#### README要約

- KiCAD 10向けのネイティブプラグインで、ClaudeなどのAIアシスタントがMCP経由で回路図・PCB設計を直接操作できるようにする単一Rustバイナリ。
- 回路図キャプチャ、PCBレイアウト・配線、ERC/DRC、デザインレビュー、JLCPCB部品検索、製造エクスポートなど228のツールを21のオンデマンドツールセットとして提供する。
- AIを活用してPCB設計を効率化したいエンジニアや、KiCAD 10でClaudeなどのLLMと連携したワークフローを構築したいユーザーが対象。
- KiCAD Plugin Managerからインストール可能で、ベータ版のため実運用での検証とフィードバックが求められている。ライセンスはAGPL-3.0および商用ライセンス。

---

### 5. [GCWing/OpenBitFun](https://github.com/GCWing/OpenBitFun)

> OpenBitFun combines a high-performance agent runtime written in Rust with a polished desktop application. It pairs the depth of a Code Agent with open, general-purpose capabilities for work beyond software development.

- Language: Rust
- Stars: 3,101
- Forks: 278
- Stars in 1週間: 639
- Category: AIエージェントワークスペース
- Keywords: `Rust` `エージェントランタイム` `デスクトップアプリ` `リモート操作` `Mini Apps` `MCP`
- Summary source: README

#### README要約

- Rust製の高性能エージェントランタイムと洗練されたデスクトップアプリを組み合わせた、オープンソースのエージェントワークスペースです。
- 4つのエージェントハーネスモード（Minimal/Standard/Ultimate/Creative）を備え、タスクの計画・コンテキスト管理・ツール呼び出し・複数エージェントの連携を行います。
- ソフトウェア開発に限らず汎用的な作業を行いたいユーザー向けで、スマホやブラウザからのリモート操作、Mini Appsの作成、MCP・Skills・Hooksによる拡張が可能です。
- デスクトップ版は公式サイトから入手でき、ソースからの実行にはNode.js 22.12+・pnpm 10.15.0・Rustツールチェーンが必要です。なお1.0.0は旧0.2.x系とデータ互換性がありません。

---

### 6. [leepokai/Codync](https://github.com/leepokai/Codync)

> The open-source Grok Bot alternative: message Claude Code, Codex, Cursor, Gemini and 40+ AI agents as bots on your own computer, from iPhone, Mac, Windows, Linux or terminal. Free. Also a Muse and Dots alternative. Built in Rust.

- Language: Rust
- Stars: 761
- Forks: 94
- Stars in 1週間: 308
- Category: 開発者ツール
- Keywords: `オープンソース` `コーディングエージェント` `リモート操作` `Rust` `マルチプラットフォーム`
- Summary source: README

#### README要約

- Codyncは、PC上のコーディングエージェントをメッセージ可能なボットに変えるオープンソースツールです。
- Claude CodeやCodexなど40以上のエージェントを統合し、iPhoneやデスクトップから操作できます。
- リモート画面共有や音声通話、プッシュ通知などの機能を備え、チームでの利用に適しています。
- Rust製のホストが各クライアントと通信し、無料で利用可能ですが、Windows版は一部機能が未対応です。

---

### 7. [trymirai/uzu](https://github.com/trymirai/uzu)

> A high-performance inference engine for AI models

- Language: Rust
- Stars: 2,557
- Forks: 146
- Stars in 1週間: 198
- Category: AI推論エンジン
- Keywords: `オンデバイスAI` `推論エンジン` `Rust` `マルチ言語バインディング` `OpenAI互換API` `Apple統一メモリ`
- Summary source: README

#### README要約

- AIモデルをアプリ内で直接実行するための高性能推論エンジンで、ゼロレイテンシ・完全なデータプライバシー・推論コスト不要を謳う。
- シンプルな高レベルAPI、統一されたモデル設定、正確性を検証可能なトレース可能な計算、Appleデバイスの統一メモリ活用を特徴とする。
- Rust・Python・Swift・TypeScriptのバインディングを提供し、モバイル・デスクトップアプリ開発者がオンデバイスAIを組み込む用途に向く。
- 独自モデル形式を採用しlalamoで変換可能。CLIモードやOpenAI互換HTTPサーバーとしても動作し、MITライセンスで提供される。

---

### 8. [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck)

> A Tiny biped duck robot 🦆

- Language: Rust
- Stars: 10,493
- Forks: 1,345
- Stars in 1週間: 847
- Category: ロボット制御ソフトウェア
- Keywords: `二足歩行ロボット` `強化学習` `Rust` `ONNX` `sim2real` `組み込み`
- Summary source: README

#### README要約

- 強化学習ポリシーで動く小型二足歩行ロボット「Microduck」の制御ソフトウェア群を提供するリポジトリ。
- Rockchip RK3566上で50Hzの制御ループを回し、15個のサーボをニューラルポリシーで駆動する複数のデーモンで構成される。
- 歩行・転がり・物を拾う・起き上がるなどの動作に対応し、ゲームパッドやBluetooth経由で操作できる。
- ポリシーは別リポジトリmicroduck_rlでMuJoCoとPPOにより学習され、ONNX形式でエクスポートされて本リポジトリで読み込まれる。

---

### 9. [googleworkspace/cli](https://github.com/googleworkspace/cli)

> Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills.

- Language: Rust
- Stars: 31,821
- Forks: 1,952
- Stars in 1週間: 275
- Category: CLIツール
- Keywords: `Google Workspace` `CLI` `API` `OAuth認証` `AIエージェント` `自動化`
- Summary source: README

#### README要約

- Google Workspaceの全API（Drive、Gmail、Calendar、Sheets、Docs、Chat、Adminなど）を単一のコマンドラインツールで操作できるCLIツール。
- Google Discovery Serviceから実行時にコマンドを動的生成し、構造化JSON出力、自動ページネーション、100以上のAIエージェントスキルを搭載。
- 人間の開発者とAIエージェントの両方を対象とし、curlコマンドの手書きを不要にし、LLMがWorkspaceを直接操作できる環境を提供。
- Node.js 18以上またはRustが必要で、Google CloudプロジェクトとOAuth認証の設定が必須。現在活発に開発中でv1.0に向けて破壊的変更の可能性あり。

---

### 10. [ModernRelay/omnigraph](https://github.com/ModernRelay/omnigraph)

> Object-storage native graph database with branching and typed ontology

- Language: Rust
- Stars: 1,708
- Forks: 239
- Stars in 1週間: 378
- Category: グラフデータベース
- Keywords: `グラフデータベース` `オブジェクトストレージ` `ブランチング` `型付きオントロジー` `マルチモーダル検索` `AIエージェント`
- Summary source: README

#### README要約

- Omnigraphは、オブジェクトストレージネイティブなグラフデータベースで、Gitスタイルのブランチングと型付きオントロジーを特徴とする。
- グラフ探索・ベクトルANN・全文検索を1つのランタイムで統合し、Cedarポリシーによるサーバーサイドのセキュリティ強制とLanceフォーマットでのオープンなデータ保存を実現する。
- 長時間実行されるAIエージェントが共有する型付きワールドモデルとして設計され、企業の知識統合やエージェントメモリ、開発グラフなどの用途に対応する。
- Rust製でMITライセンス。curlスクリプトまたはHomebrewでインストール可能。クラスターはYAMLで宣言的に管理し、S3互換ストレージ上で動作する。

---

### 11. [claration/impactor](https://github.com/claration/impactor)

> Cross-platform & feature rich iOS/iPadOS/tvOS sideloading application. Formerly known as PlumeImpactor.

- Language: Rust
- Stars: 3,579
- Forks: 252
- Stars in 1週間: 91
- Category: iOSサイドローディングツール
- Keywords: `iOS` `サイドロード` `Rust` `クロスプラットフォーム` `Apple ID署名` `オープンソース`
- Summary source: README

#### README要約

- Impactorは、iOS/iPadOS/tvOSデバイスにアプリをサイドロードするためのオープンソースのクロスプラットフォームアプリケーションです。
- Apple IDを使用してアプリに署名し、SideStoreやLiveContainerなどのインストールをサポートし、ElleKitによる高度なカスタマイズも可能です。
- iOSデバイスに非公式アプリをインストールしたいユーザーや、エミュレータ、カスタマイズツールを利用したい上級ユーザーに適しています。
- Linuxではusbmuxd、WindowsではiTunesが必要で、無料のApple Developerアカウントでは7日間の署名制限があります。

---

### 12. [BrandonKowalski/slot](https://github.com/BrandonKowalski/slot)

> A bespoke, Game Boy-centric CFW for the RG SP.

- Language: Rust
- Stars: 244
- Forks: 68
- Stars in 1週間: 64
- Category: ゲーム機用カスタムファームウェア
- Keywords: `Anbernic` `ゲームボーイ` `CFW` `Rust` `エミュレータ` `RG SP`
- Summary source: README

#### README要約

- Anbernic RG SP向けのゲームボーイ専用カスタムフロントエンド（CFW）です。
- GBA、GBC、GBタイトルのみをサポートし、mGBAとgpSPを基盤としたRust製のシステムです。
- RG SPをはじめ、RG34XX、RG35XXSP、RG28XXなど複数のAnbernic製携帯ゲーム機で動作します。
- ROMファイルは解凍済みである必要があり、.zipや.7z形式は読み込めません。

---

### 13. [HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)

> A CAD application built with Rust — 2D/3D drawing, DWG/DXF support, and GPU-accelerated rendering

- Language: Rust
- Stars: 3,478
- Forks: 413
- Stars in 1週間: 367
- Category: CADソフトウェア
- Keywords: `Rust` `CAD` `DWG` `DXF` `3Dモデリング` `GPU`
- Summary source: README

#### README要約

- Rust製のオープンソースCADアプリケーションで、デスクトップとWebブラウザの両方で動作する2D製図・3Dモデリングツール。
- DWG/DXFファイルのネイティブ読み書き、精密な2D製図機能、カーネルベースの3Dソリッドモデリング、wgpuによるGPU加速レンダリングを搭載。
- 技術図面、レイアウト作業、ソリッドモデリングを行う設計者やエンジニア向けで、Windows/Linux/macOS(Apple Silicon)およびWeb版が利用可能。
- 活発に開発中のため重要な図面はバックアップを推奨。GPL-3.0ライセンスで、リリースページからインストーラーやAppImageをダウンロード可能。

---

### 14. [oxc-project/oxc](https://github.com/oxc-project/oxc)

> ⚓ A collection of high-performance JavaScript tools.

- Language: Rust
- Stars: 23,205
- Forks: 1,403
- Stars in 1週間: 130
- Category: JavaScriptツールチェーン
- Keywords: `Rust` `JavaScript` `TypeScript` `Linter` `Parser` `MIT`
- Summary source: README

#### README要約

- OxcはRustで書かれたJavaScript/TypeScript向け高性能ツール群で、VoidZeroの統一ツールチェーン構想の一部としてRolldownなどを支えている。
- パーサー、トランスフォーマー、ミニファイア、リゾルバーに加え、LinterのOxlintとフォーマッタのOxfmtを提供する。
- RolldownやNuxtがパースに、PreactやShopifyなどがlintに利用しており、JS/TSツールを構築する開発者や高速なlint/formatを求めるチームが対象。
- lintはnpx oxlint@latest、formatはnpx oxfmt@latestで即座に試せ、ライセンスはMITでサードパーティライセンスも別途明記されている。

---

### 15. [martin-olivier/airgorah](https://github.com/martin-olivier/airgorah)

> A WiFi security auditing software

- Language: Rust
- Stars: 4,742
- Forks: 795
- Stars in 1週間: 521
- Category: セキュリティ監査ツール
- Keywords: `WiFi` `セキュリティ監査` `Rust` `GTK4` `パケットキャプチャ` `パスワードクラック`
- Summary source: README

#### README要約

- AirgorahはWiFiセキュリティ監査ソフトウェアで、近隣のWiFiトラフィックをキャプチャし、アクセスポイントに接続されたクライアントを発見します。
- deauthentication攻撃の実行、ハンドシェイクとPMKIDのキャプチャ、アクセスポイントのパスワードクラックが可能です。
- Rustで書かれており、グラフィカル部分にはGTK4を使用しています。
- Linuxのみで動作し、モニターモードとパケットインジェクションをサポートするワイヤレスネットワークカードが必要です。

---
