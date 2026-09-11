+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/09/11'
date = 2026-09-11T23:01:43.667Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月11日 23:01:43
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 19
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが一覧を独占し、AI開発支援（トークン削減・アカウント管理・LLM適合性チェック）と実用デスクトップアプリの2軸でスターを集めている。

- 一覧の19件すべてがRust製であり、言語分布が完全にRustに偏っている
- AI関連の開発者ツールが強く、トークン削減のrtk-ai/rtk（1,520スター）とLLM適合性チェッカーのAlexsJones/llmfit（1,144スター）が上位を占める
- AI IDEのアカウント管理・切り替えツールが複数登場し、jlcodes99/cockpit-tools（493スター）とlbjlaq/Antigravity-Manager（288スター）が類似機能で競合している
- CAD・PCB設計・画面録画・文法チェックなど実務向けデスクトップアプリが幅広く並び、単なるライブラリより完成品ツールが目立つ
- Claude CodeやCursorなどのAIコーディングツール利用者を対象とした周辺ツールの台頭が顕著である

### 主なテーマ

- **AIコーディング支援の効率化・運用管理**: LLMのトークン消費を60-90%削減するrtk-ai/rtkが1,520スターで最多を獲得し、複数AI IDEアカウントの切替・クォータ監視を行うjlcodes99/cockpit-tools（493スター）とlbjlaq/Antigravity-Manager（288スター）が並ぶ。Claude CodeやCursor等の利用者を対象とした周辺ツールが強い支持を集めている。（`rtk-ai/rtk`、`jlcodes99/cockpit-tools`、`lbjlaq/Antigravity-Manager`）
- **ローカルLLM環境の整備**: AlexsJones/llmfit（1,144スター）はCPU/GPU/VRAMを自動検出して量子化形式を考慮したモデル適合性をスコアリングし、ローカルLLM選定の需要の大きさを示す。lencx/ChatGPT（62スター）もChatGPTデスクトップアプリとしてAIツールのローカル利用に関連する。（`AlexsJones/llmfit`、`lencx/ChatGPT`）
- **Rust製デスクトップアプリ・GUI基盤**: longbridge/gpui-kit（486スター）がGPUIベースのUIコンポーネント群を提供し、eythaann/Seelen-UI（122スター）がWindows向けデスクトップ環境を実現。CapSoftware/Cap（480スター）はLoom代替の画面録画、tonhowtf/omniget（378スター）はyt-dlp駆動のダウンローダーと、完成度の高いアプリが揃う。（`longbridge/gpui-kit`、`eythaann/Seelen-UI`、`CapSoftware/Cap`、`tonhowtf/omniget`）
- **専門分野へのAI・Rust適用（CAD・PCB・文法チェック）**: HakanSeven12/OpenCADStudio（405スター）がDWG/DXF対応のCAD、mixelpixx/Konnect（221スター）がMCP経由でClaudeにPCB設計させるKiCADプラグイン、Automattic/harper（330スター）がオフライン文法チェッカーと、専門領域の実務ツールがRustで構築されている。（`HakanSeven12/OpenCADStudio`、`mixelpixx/Konnect`、`Automattic/harper`）
- **CLI・開発環境の生産性ツール**: ajeetdsouza/zoxide（228スター）のスマートcd、cachix/devenv（153スター）のNixベース開発環境、googleworkspace/cli（210スター）のWorkspace操作CLIなど、開発者の日常作業を改善するCLIツールが安定した支持を得ている。（`ajeetdsouza/zoxide`、`cachix/devenv`、`googleworkspace/cli`）

### 補足的な観察

- スター数の上位2件（rtk-ai/rtk: 1,520、AlexsJones/llmfit: 1,144）はいずれもLLM関連ツールで、3位以下と大きな差をつけている
- 全19件がRustと表記されており、Tauri（lbjlaq/Antigravity-Manager、tonhowtf/omniget）やGPUI（longbridge/gpui-kit）などRustのGUIエコシステムの活用が複数見られる
- jlcodes99/cockpit-toolsとlbjlaq/Antigravity-ManagerはAI IDEアカウント管理で機能が重複しており、同一ニッチ内での競合が起きている
- 中国語圏向けツール（huanfeng/WindInputの五筆IME、jlcodes99/cockpit-toolsやlbjlaq/Antigravity-Managerの中国語併記）が複数含まれ、中国語話者の開発者コミュニティの存在感がうかがえる

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 19 |

## Repository一覧

### 1. [rtk-ai/rtk](https://github.com/rtk-ai/rtk)

> CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies

- Language: Rust
- Stars: 79,995
- Forks: 5,064
- Stars in 1週間: 1,520
- Category: AI開発支援CLIツール
- Keywords: `CLIプロキシ` `トークン削減` `Rust` `LLMコンテキスト最適化` `シェルフック` `出力圧縮`
- Summary source: README

#### README要約

- シェルコマンドの出力をLLMのコンテキストに届く前にフィルタリング・圧縮するCLIプロキシで、bash出力を最大90%削減する。
- 単一のRustバイナリで依存ゼロ、100以上のコマンドに対応し、フィルタリング・グループ化・切り詰め・重複排除の4戦略をコマンド種別ごとに適用する。
- Claude Code、Gemini CLI、Codex、CursorなどのAIコーディングツール利用者が対象で、rtk initでフックを設定するとコマンドが自動的にrtk経由に書き換えられる。
- Homebrew、winget、Cargo、インストールスクリプト等で導入可能。削減率はbash出力ベースで請求額の削減とは異なり、トークン数はbytes/4の推定値である点に注意。

---

### 2. [HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)

> A CAD application built with Rust — 2D/3D drawing, DWG/DXF support, and GPU-accelerated rendering

- Language: Rust
- Stars: 1,574
- Forks: 160
- Stars in 1週間: 405
- Category: CADアプリケーション
- Keywords: `Rust` `CAD` `DWG/DXF` `3Dモデリング` `GPUレンダリング` `オープンソース`
- Summary source: README

#### README要約

- Rust製のオープンソースCADアプリケーションで、デスクトップとWebの両方で動作する2D製図・3Dモデリングツールです。
- DWG/DXFのネイティブ読み書き、精密2D製図、ソリッドモデリング、wgpuによるGPUレンダリング、プラグインやJSON APIによる自動化を備えます。
- 技術図面・レイアウト・ソリッドモデリングを行う設計者やエンジニア向けで、Windows/Linux/macOS(Apple Silicon)版とブラウザ版があります。
- GPL-3.0ライセンスで活発に開発中のため、重要な図面はバックアップを取ることが推奨されています。

---

### 3. [eythaann/Seelen-UI](https://github.com/eythaann/Seelen-UI)

> The Fully Customizable Desktop Environment for Windows 10/11.

- Language: Rust
- Stars: 17,785
- Forks: 596
- Stars in 1週間: 122
- Category: デスクトップ環境
- Keywords: `Windows` `デスクトップ環境` `カスタマイズ` `タイリングウィンドウマネージャー` `テーマエンジン` `Rust`
- Summary source: README

#### README要約

- Windows 10/11向けの完全カスタマイズ可能なデスクトップ環境で、タスクバーやドック、ウィンドウマネージャーなどを置き換える。
- CSS/JSONベースのテーマエンジン、タイリングウィンドウマネージャー、デスクトップウィジェット、Rofi風アプリランチャーなどを搭載。
- ミニマルな環境からパワーユーザー向け環境まで構築でき、70以上の言語に対応し、Svelte/TypeScriptでカスタムウィジェットも開発可能。
- Microsoft Store、Winget、GitHub Releasesからインストール可能。WebViewランタイムとMicrosoft Edgeが必要で、Windows 10ではsetup.exeに同梱される。

---

### 4. [longbridge/gpui-kit](https://github.com/longbridge/gpui-kit)

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

- Language: Rust
- Stars: 14,293
- Forks: 870
- Stars in 1週間: 486
- Category: GUIフレームワーク
- Keywords: `Rust` `GPUI` `デスクトップアプリ` `UIコンポーネント` `クロスプラットフォーム` `Apache-2.0`
- Summary source: README

#### README要約

- RustとGPUIで高性能なクロスプラットフォームデスクトップアプリを構築するためのUIフレームワーク。
- 60以上のUIコンポーネント、データテーブル、コードエディタ、ドックレイアウトなどを3層アーキテクチャで提供する。
- 商用アプリLongbridge Proで実績があり、独自デザインシステム構築やJavaScript拡張にも対応する。
- Cargoでgpui-kitクレートを追加して利用し、Apache-2.0ライセンスでmacOS・Windows・Linuxに対応する。

---

### 5. [jlcodes99/cockpit-tools](https://github.com/jlcodes99/cockpit-tools)

> 🚀 通用 AI IDE 账号管理工具：支持 Antigravity / Codex / GitHub Copilot / Windsurf / Kiro / Cursor / Gemini-cli / CodeBuddy，多账号切换、配额监控、自动唤醒与多开实例管理。 🚀 Universal AI IDE account manager for Antigravity / Codex / GitHub Copilot / Windsurf / Kiro / Cursor / Gemini-cli / CodeBuddy, with multi-account switching, quota monitoring, wake-up automation, and multi-insta

- Language: Rust
- Stars: 17,507
- Forks: 1,554
- Stars in 1週間: 493
- Category: 開発者ツール
- Keywords: `AI IDE` `アカウント管理` `マルチアカウント` `クォータ監視` `Rust` `デスクトップアプリ`
- Summary source: README

#### README要約

- Antigravity、Codex、GitHub Copilot、Windsurf、Kiro、Cursorなど16種類のAI IDE/CLIツールのアカウントを一元管理するRust製デスクトップツール。
- ワンクリックでの複数アカウント切り替え、リアルタイムのクォータ監視、自動ウェイクアップタスク、同一アプリの複数インスタンス並行実行（マルチインスタンス）をサポートする。
- 複数のAI IDEアカウントを使い分ける開発者や、クォータを効率的に管理したいユーザー向けで、macOS/Windows/Linuxに対応し18言語をサポートする。
- ローカルにデータを保存する設計で、Grok CLIのトークンは平文保存される点に注意が必要。CC BY-NC-SA 4.0ライセンスのため商用利用には別途許可が必要。

---

### 6. [mixelpixx/Konnect](https://github.com/mixelpixx/Konnect)

> AI-assisted PCB design for KiCAD 10. Native KiCAD plugin — a single Rust binary exposing 217 schematic, layout, routing, placement, design-review, and manufacturing tools to Claude, or the LLM of your choosing

- Language: Rust
- Stars: 624
- Forks: 85
- Stars in 1週間: 221
- Category: AI支援PCB設計ツール
- Keywords: `KiCAD` `MCP` `PCB設計` `Rust` `Claude` `AIアシスタント`
- Summary source: README

#### README要約

- KiCAD 10向けのネイティブプラグインで、ClaudeなどのAIアシスタントがMCP経由で回路図とPCBを直接設計できるようにする単一Rustバイナリ。
- 回路図キャプチャ、PCBレイアウト・配線、ERC/DRC、デザインレビュー、JLCPCB部品検索、製造エクスポートなど226ツールを21のオンデマンドツールセットとして提供する。
- AI支援でPCB設計を行いたいエンジニアやKiCADユーザー向けで、リファレンス回路テンプレートやライブビューアも備える。
- KiCAD Plugin Managerからインストール可能だがベータ版であり、ライセンスはAGPL-3.0（商用ライセンスもあり）で、ソースビルドにはprotocとcmakeが必要。

---

### 7. [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)

> Hundreds of models & providers. One command to find what runs on your hardware.

- Language: Rust
- Stars: 36,079
- Forks: 2,282
- Stars in 1週間: 1,144
- Category: LLMハードウェア適合性チェッカー
- Keywords: `LLM` `ハードウェア検出` `量子化` `Rust` `TUI` `モデル推奨`
- Summary source: README

#### README要約

- 自分のハードウェアで快適に動作するオープンソースLLMを見つけるためのRust製ターミナルツール。
- CPU、RAM、GPU、VRAMを自動検出し、GGUF/AWQ/GPTQ/EXL2などの量子化形式を考慮してメモリ使用量と速度を推定・スコアリングする。
- ローカルLLMを動かしたいユーザーが、Ollamaやllama.cppなどのランタイム向けに最適なモデルを選ぶのに適している。
- Homebrew、Scoop、Docker、uvなどでインストール可能で、TUI・CLI・REST API・Webダッシュボードの各インターフェースを提供する。

---

### 8. [lencx/ChatGPT](https://github.com/lencx/ChatGPT)

> ❄️ ChatGPT Desktop Application (Mac, Windows and Linux)

- Language: Rust
- Stars: 54,514
- Forks: 6,142
- Stars in 1週間: 62
- Category: デスクトップアプリ
- Keywords: `ChatGPT` `デスクトップ` `Rust` `クロスプラットフォーム` `Noi`
- Summary source: README

#### README要約

- ChatGPTのデスクトップアプリケーションで、Mac、Windows、Linuxに対応しています。
- Rustで開発されており、後継プロジェクトのNoiがより強力なAIラッパーとして提案されています。
- OpenAI公式アプリのmacOS版がリリースされ、Windows版も後日公開予定であることが案内されています。
- 旧バージョンv1.1.0は別ブランチからダウンロード可能で、バージョン2.0の差別化機能が検討されています。

---

### 9. [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide)

> A smarter cd command. Supports all major shells.

- Language: Rust
- Stars: 39,406
- Forks: 898
- Stars in 1週間: 228
- Category: CLIツール
- Keywords: `cd` `ディレクトリ移動` `シェル` `Rust` `生産性`
- Summary source: README

#### README要約

- zoxideはzやautojumpに触発された、より賢いcdコマンドです。
- よく使うディレクトリを記憶し、数回のキー入力でジャンプできるようにします。
- すべての主要なシェルで動作し、CLIユーザーが効率的にディレクトリ移動する用途に適しています。
- インストールは各OSのパッケージマネージャやスクリプトで行い、シェル設定ファイルに初期化コードを追加して使用します。

---

### 10. [tonhowtf/omniget](https://github.com/tonhowtf/omniget)

> Download Udemy and Hotmart courses, YouTube videos, music and books — 1,800+ sites, no terminal. Free open-source desktop app for Windows, macOS and Linux, with a built-in course player, PDF/EPUB reader and music library. Powered by yt-dlp. Your files stay on your computer.

- Language: Rust
- Stars: 10,123
- Forks: 864
- Stars in 1週間: 378
- Category: メディアダウンローダー
- Keywords: `yt-dlp` `動画ダウンロード` `Udemy` `デスクトップアプリ` `Tauri` `GPL-3.0`
- Summary source: README

#### README要約

- UdemyやHotmartのコース、YouTube、Instagramなど1,800以上のサイトから動画・音楽・書籍をダウンロードできる無料のオープンソースデスクトップアプリです。
- yt-dlpをエンジンとして搭載し、ターミナル不要でリンクを貼るだけでダウンロード可能。コースプレイヤー、PDF/EPUBリーダー、音楽ライブラリ、文字起こしなど108のツールを内蔵しています。
- 購入したコースをローカルに保存したいユーザーや、複数サイトのダウンロードツールを一つにまとめたいユーザーに適しています。Windows、macOS、Linuxに対応しています。
- Releasesページから各OS向けインストーラーを入手可能。初回起動時にOSの警告が表示されますが、README記載の手順で回避できます。GPL-3.0ライセンスで、ファイルはローカルに保存されます。

---

### 11. [Automattic/harper](https://github.com/Automattic/harper)

> Offline, privacy-first grammar checker. Fast, open-source, Rust-powered

- Language: Rust
- Stars: 15,291
- Forks: 625
- Stars in 1週間: 330
- Category: 文法チェッカー
- Keywords: `文法チェック` `オフライン` `プライバシー` `Rust` `高速` `オープンソース`
- Summary source: README

#### README要約

- Harperはプライバシー重視のオフライン英語文法チェッカーで、Rustで構築されたオープンソースツールです。
- ドキュメントのリントを数ミリ秒で実行し、LanguageToolの1/50未満のメモリ使用量で動作します。
- Grammarlyの代替を求める開発者やライター向けで、VS Code、Neovim、Obsidianなどのエディタと統合可能です。
- WebAssembly経由でブラウザでも利用でき、現在は英語のみサポートしていますが他言語への拡張が可能です。

---

### 12. [lbjlaq/Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager)

> Professional Antigravity Account Manager & Switcher. One-click seamless account switching for Antigravity Tools. Built with Tauri v2 + React (Rust).专业的 Antigravity 账号管理与切换工具。为 Antigravity 提供一键无缝账号切换功能。

- Language: Rust
- Stars: 31,239
- Forks: 3,355
- Stars in 1週間: 288
- Category: AIアカウント管理・APIプロキシ
- Keywords: `Antigravity` `アカウント切替` `APIプロキシ` `プロトコル変換` `Tauri` `Rust`
- Summary source: README

#### README要約

- 開発者やAI愛好家向けのデスクトップアプリで、複数AIアカウントの管理・プロトコル変換・リクエスト振り分けを行うローカルAI中継ゲートウェイです。
- Google/AnthropicのWebセッションをOpenAI/Anthropic/Gemini形式のAPIに変換し、OAuth認証、複数アカウントの自動切替、429/401時の自動リトライ、モデルルーティング、Imagen 3対応を備えます。
- Claude Code CLIや各種AIクライアントから統一的に利用したい開発者、複数アカウントのクォータを監視・切り替えたいユーザー向けです。
- Tauri v2 + React (Rust)製で、インストールスクリプト、Homebrew、Dockerで導入可能。CC BY-NC-SA 4.0で商用利用は禁止、データはローカルSQLiteに暗号化保存されます。

---

### 13. [CapSoftware/Cap](https://github.com/CapSoftware/Cap)

> Open source Loom alternative. Beautiful, shareable screen recordings.

- Language: Rust
- Stars: 22,116
- Forks: 1,899
- Stars in 1週間: 480
- Category: 画面録画・動画共有
- Keywords: `オープンソース` `Loom代替` `画面録画` `セルフホスト` `Rust` `非同期コラボレーション`
- Summary source: README

#### README要約

- CapはLoomのオープンソース代替で、美しく共有可能な画面録画を提供するツールです。
- 画面・カメラ・マイクを録画し、即時共有リンクやローカル編集（背景・ズーム・トリミング・字幕）が可能です。
- 製品デモ、バグ報告、オンボーディング、チュートリアルなど、非同期コラボレーションを必要とするチームや個人向けです。
- macOS/Windowsアプリをダウンロードするか、Docker Composeでセルフホスト可能。S3互換ストレージや独自ドメインにも対応しています。

---

### 14. [ccxt/ccxt](https://github.com/ccxt/ccxt)

> A unified trading API with more than 100 crypto exchanges and prediction markets in JavaScript / TypeScript / Python / C# / PHP / Go / Java / Rust

- Language: Rust
- Stars: 43,954
- Forks: 8,834
- Stars in 1週間: 114
- Category: 暗号通貨取引APIライブラリ
- Keywords: `暗号通貨` `取引所API` `統一API` `アルゴリズム取引` `WebSocket` `マルチ言語`
- Summary source: README

#### README要約

- 世界中の暗号通貨取引所や予測市場に接続し、取引や市場データ取得を行うための統一APIライブラリです。
- 100以上の取引所に対応し、RESTとWebSocketの公開・非公開APIを実装し、取引所横断の分析やアービトラージ向けにデータを正規化できます。
- 開発者、技術力のあるトレーダー、データサイエンティスト、金融アナリストが、アルゴリズム取引、バックテスト、ボット開発などに利用します。
- Node 18+、Python 3、PHP 8.1+、Go 1.20+、Java 21+、ブラウザなどで動作し、MITライセンスの無料オープンソースソフトウェアです。

---

### 15. [cachix/devenv](https://github.com/cachix/devenv)

> Fast, Declarative, Reproducible, and Composable Developer Environments using Nix

- Language: Rust
- Stars: 7,636
- Forks: 564
- Stars in 1週間: 153
- Category: 開発環境管理ツール
- Keywords: `Nix` `開発環境` `宣言的` `再現可能` `プロセス管理` `コンテナ`
- Summary source: README

#### README要約

- Nixを使った高速・宣言的・再現可能・合成可能な開発環境ツール。
- 50以上の言語、10万以上のパッケージ、40以上のサービスをサポートし、Rust製プロセスマネージャやタスク実行機能を持つ。
- 開発者がプロジェクトごとに一貫した環境を簡単に構築・共有する用途に適する。
- devenv initで設定ファイルを生成し、devenv shellで環境を有効化する。Nixの知識が必要。

---

### 16. [googleworkspace/cli](https://github.com/googleworkspace/cli)

> Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills.

- Language: Rust
- Stars: 30,944
- Forks: 1,828
- Stars in 1週間: 210
- Category: CLIツール
- Keywords: `Google Workspace` `CLI` `API統合` `AIエージェント` `OAuth認証` `自動化`
- Summary source: README

#### README要約

- Google Workspaceの全API（Drive、Gmail、Calendar、Sheets、Chatなど）を単一のコマンドラインツールで操作できるCLIツール。
- Google Discovery Serviceから実行時にコマンドを動的生成し、構造化JSON出力、100以上のAIエージェントスキル、複数の認証方式を提供する。
- 人間の開発者とAIエージェントの両方を対象とし、REST APIの手動呼び出しを排除してWorkspace管理を自動化する用途に適している。
- Node.js 18以上またはRustが必要で、Google CloudプロジェクトとOAuth認証の設定が必須。現在活発に開発中でv1.0に向けて破壊的変更の可能性がある。

---

### 17. [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin)

> Empowering everyone to host fast and efficient Minecraft servers

- Language: Rust
- Stars: 11,201
- Forks: 800
- Stars in 1週間: 146
- Category: ゲームサーバー
- Keywords: `Minecraft` `Rust` `マルチスレッド` `サーバー` `プラグイン` `オープンソース`
- Summary source: README

#### README要約

- PumpkinはRustで完全に構築されたMinecraftサーバーで、高速・効率的かつカスタマイズ可能な体験を提供する。
- マルチスレッディングによる性能重視の設計で、Java EditionとBedrock Editionの両方をサポートし、Vanillaのゲームメカニクスに準拠している。
- Minecraftサーバーをホストしたいユーザーや、プラグイン開発の基盤を求める開発者を対象としている。
- 現在活発に開発中であり、設定はTOML形式で行い、Quick Startガイドに従って導入する。

---

### 18. [huanfeng/WindInput](https://github.com/huanfeng/WindInput)

> 清风输入法 | 轻量、快速、可定制的开源中文输入法，专为五笔和码表输入方案设计（Windows / macOS）

- Language: Rust
- Stars: 700
- Forks: 40
- Stars in 1週間: 127
- Category: 中国語入力メソッド（IME）
- Keywords: `五筆` `Rust` `IME` `Windows` `macOS` `オープンソース`
- Summary source: README

#### README要約

- 軽量・高速・カスタマイズ可能なオープンソースの中国語入力メソッドで、五筆およびコードテーブル入力方式向けに設計されている。
- 五筆86・五筆ピンイン混入力に加え全拼・双拼を提供し、スキームファイル駆動の柔軟な入力動作、GUI設定ツール、明暗テーマ自動切替を備える。
- Rust製コアエンジンを共有しWindows 10/11とmacOS 12+に対応、五筆ユーザーや低リソースで動くIMEを求める中国語入力ユーザー向け。
- 公式サイトからインストーラを入手可能で、Windows版は署名済みだがSmartScreenが初期に警告する場合があり、macOS版は未公証のためGatekeeperの許可が必要。

---

### 19. [visioncortex/vtracer](https://github.com/visioncortex/vtracer)

> Raster to Vector Graphics Converter

- Language: Rust
- Stars: 6,982
- Forks: 479
- Stars in 1週間: 145
- Category: 画像変換ツール
- Keywords: `ラスタからベクター` `SVG変換` `Rust` `画像トレース` `CLI` `クロスプラットフォーム`
- Summary source: README

#### README要約

- VTracerはラスタ画像（JPG/PNG）をベクターグラフィックス（SVG）に変換するオープンソースソフトウェアです。
- カラー画像処理パイプラインを備え、曲線トレース、ウォーターシェッドクラスタリング、適応的二値化、固定パレットなどの機能を提供します。
- 高解像度の歴史的設計図スキャンから低解像度ピクセルアートまで対応し、デザイナーや開発者がデスクトップアプリ、CLI、またはRust/Python/JSライブラリとして利用できます。
- cargo install vtracer-cliやpip/npmでインストール可能で、1.0系では位置引数や--simplifyオプションなどが追加されています。

---
