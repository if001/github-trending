+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/09/25'
date = 2026-09-25T23:52:23.073Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月25日 23:52:23
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 21
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製のAIエージェント管理ツールとインフラ基盤がトレンドを席巻

- AIコーディングエージェントの管理・制御ツールが急増し、複数のAIツールを統合管理するコントロールプレーンが注目を集めている
- Rust言語が圧倒的な存在感を示し、ネットワークプロトコルからデータベース、開発ツールまで幅広い領域で採用されている
- オブジェクトストレージやグラフデータベースなど、クラウドネイティブなインフラ基盤の実装が活発化している
- プライバシー重視のオフライン動作ツールやセルフホスト可能なソリューションへの需要が高まっている
- 既存ツールの代替やクロスプラットフォーム対応を重視した実用的なプロジェクトが多くランクインしている

### 主なテーマ

- **AIエージェント統合管理基盤**: Claude Code、Codex、Cursorなど複数のAIコーディングエージェントを一元管理するコントロールプレーンやGUIツールが多数ランクイン。APIプロバイダー切り替え、セッション管理、MCP統合などの機能を提供し、開発者が複数のAIツールを効率的に運用できる環境を実現している。（`farion1231/cc-switch`、`Nasiko-Labs/nasiko`、`zeronsh/zeron`、`yynxxxxx/Codex-X`、`lbjlaq/Antigravity-Manager`）
- **AIエージェント開発環境の拡張**: AIエージェントに実際の開発環境へのアクセスを提供したり、長期メモリやワークフロー管理を支援するツールが登場。エージェント間のタスク引き継ぎやGit worktreeを使った並列実行など、AI支援開発の実用性を高める基盤が整備されている。（`yyjeqhc/webcodex`、`akitaonrails/ai-memory`、`max-sixty/worktrunk`）
- **Rust製クラウドインフラ基盤**: オブジェクトストレージ、グラフデータベース、QUICプロトコル実装など、クラウドネイティブなインフラをRustで構築するプロジェクトが注目されている。S3互換性や分散アーキテクチャを備え、高性能とスケーラビリティを両立している。（`hydra-db/hydradb`、`rustfs/rustfs`、`cloudflare/quiche`）
- **プライバシー重視のローカルツール**: オフライン動作やセルフホスト可能なツールが複数ランクイン。文法チェッカー、画面録画、プロキシクライアントなど、ユーザーデータを外部に送信せずプライバシーを保護しながら実用的な機能を提供している。（`Automattic/harper`、`CapSoftware/Cap`、`clash-verge-rev/clash-verge-rev`）
- **Rustエコシステムの成熟**: Rust言語自体、非同期ランタイム、リンカ、coreutils再実装、GUIフレームワークなど、言語周辺の基盤ツールが充実。システムプログラミングからアプリケーション開発まで、Rustの適用範囲が拡大している。（`rust-lang/rust`、`tokio-rs/tokio`、`rui314/mold`、`uutils/coreutils`、`longbridge/gpui-kit`）

### 補足的な観察

- 21件中20件がRust製で、Rust言語がトレンドを支配している
- 最もスターを獲得したのはfarion1231/cc-switch（3168スター）で、AIツール管理への関心の高さを示している
- Tauri 2を採用したデスクトップアプリが複数あり、RustベースのクロスプラットフォームGUI開発が定着しつつある
- ネットワーク、ストレージ、開発ツール、学習支援など多様なカテゴリからランクインしており、Rustの汎用性が証明されている

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 21 |

## Repository一覧

### 1. [cloudflare/quiche](https://github.com/cloudflare/quiche)

> 🥧 Savoury implementation of the QUIC transport protocol and HTTP/3

- Language: Rust
- Stars: 12,609
- Forks: 1,148
- Stars in 1週間: 741
- Category: ネットワークプロトコルライブラリ
- Keywords: `QUIC` `HTTP/3` `Rust` `Cloudflare` `トランスポートプロトコル` `IETF標準`
- Summary source: README

#### README要約

- IETF標準のQUICトランスポートプロトコルとHTTP/3を実装したRust製ライブラリです。
- QUICパケット処理と接続状態管理の低レベルAPIを提供し、I/Oとイベントループはアプリケーション側が実装します。
- Cloudflareのエッジネットワーク、AndroidのDNSリゾルバ、curlなどでHTTP/3対応に利用されています。
- サンプルアプリケーションは本番環境での使用を意図しておらず、性能・セキュリティ・信頼性の保証はありません。

---

### 2. [yyjeqhc/webcodex](https://github.com/yyjeqhc/webcodex)

> Give cloud AI agents a real development environment on your own machines.

- Language: Rust
- Stars: 1,873
- Forks: 236
- Stars in 1週間: 775
- Category: AI開発環境ブリッジ
- Keywords: `MCP` `AIエージェント` `ChatGPT` `Claude` `セルフホスト` `Rust`
- Summary source: README

#### README要約

- ChatGPTやClaudeなどのMCPクライアントに、自分のマシン上の実際の開発環境へのアクセスを提供するツールです。
- リポジトリの閲覧・編集、Git操作、テストやコマンド実行、長時間ジョブの監視などをAIエージェント経由で行えます。
- コードをホスト側に移さず、自分の環境のままAIコーディングエージェントを使いたい開発者が対象です。
- npxでの一時共有やDesktop/CLIのインストールで導入でき、Node.js 18以上が必要でApache-2.0ライセンスです。

---

### 3. [hydra-db/hydradb](https://github.com/hydra-db/hydradb)

> HydraDB - fast graph database on object storage

- Language: Rust
- Stars: 7,059
- Forks: 2,655
- Stars in 1週間: 2,513
- Category: グラフデータベース
- Keywords: `Rust` `グラフDB` `オブジェクトストレージ` `OpenCypher` `分散アーキテクチャ` `S3互換`
- Summary source: README

#### README要約

- HydraDBはRust製のオブジェクトストアネイティブな分散グラフデータベースです。
- S3互換ストレージを永続層とし、OpenCypherクエリ、GraphBLASトラバーサル、Bolt接続、HTTPS APIを提供します。
- データノードとインデクサーが独立してスケールし、Neo4jドライバやHTTP API経由で利用するアプリケーション開発者が対象です。
- Dockerイメージまたはソースからビルドして導入でき、Rust 1.91以上とlibcypher-parser、SuiteSparse GraphBLASが必要です。

---

### 4. [rustfs/rustfs](https://github.com/rustfs/rustfs)

> RustFS is an open-source, S3-compatible high-performance object storage system supporting migration and coexistence with other S3-compatible platforms such as MinIO and Ceph.

- Language: Rust
- Stars: 33,908
- Forks: 1,521
- Stars in 1週間: 1,093
- Category: オブジェクトストレージ
- Keywords: `Rust` `S3互換` `分散ストレージ` `オブジェクトストレージ` `データレイク` `Apache 2.0`
- Summary source: README

#### README要約

- RustFSはRustで構築された高性能な分散オブジェクトストレージシステムです。
- S3 API互換性を持ち、バージョニング、暗号化、分散モード、データレイクサポートなどの機能を提供します。
- データレイク、AI、ビッグデータワークロードに最適化されており、MinIOやCephなどのS3互換プラットフォームとの移行・共存をサポートします。
- Apache 2.0ライセンスの下でリリースされており、AGPLの制限を回避しています。

---

### 5. [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)

> Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors

- Language: Rust
- Stars: 8,424
- Forks: 568
- Stars in 1週間: 1,243
- Category: AIエージェントメモリ管理ツール
- Keywords: `長期メモリ` `エージェント間引き継ぎ` `Markdownウィキ` `git-backed` `ゼロLLM` `Rust`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの長期メモリソリューションで、Claude CodeからCodexなど異なるエージェント間でのタスク引き継ぎを可能にする
- ライフサイクルフックで作業を自動記録し、gitバックアップされたMarkdownウィキとして保存。検索・引き継ぎは型付きプロトコルで管理され、デフォルトでLLM不要
- 複数のエージェントやマシンをまたいで作業する開発者、チームでの知識共有を必要とするプロジェクト向け
- Rust製の単一バイナリとして動作し、20以上のエージェントをサポート。WindowsはWSL2経由で対応、ネイティブWindowsは実験的

---

### 6. [ankitects/anki](https://github.com/ankitects/anki)

> Anki is a smart spaced repetition flashcard program

- Language: Rust
- Stars: 31,543
- Forks: 3,269
- Stars in 1週間: 590
- Category: 学習支援ソフトウェア
- Keywords: `Anki` `間隔反復` `フラッシュカード` `Rust` `オープンソース` `学習`
- Summary source: README

#### README要約

- Ankiは間隔反復学習を支援するフラッシュカードプログラムのソースコードを含むリポジトリです。
- コンピュータ版Ankiのソースコードが管理されており、貢献ガイドラインや開発ドキュメントが提供されています。
- Ankiに貢献したい開発者や、開発ビルドを試したいユーザーが対象です。
- ビルドせずに開発版を試す場合はAnki betasを参照し、ライセンスはLICENSEファイルを確認してください。

---

### 7. [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)

> Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows

- Language: Rust
- Stars: 8,412
- Forks: 297
- Stars in 1週間: 501
- Category: Gitワークフローツール
- Keywords: `git worktree` `CLI` `AIエージェント` `並列開発` `Rust` `ワークフロー自動化`
- Summary source: README

#### README要約

- WorktrunkはGit worktreeを管理するCLIツールで、AIエージェントの並列実行を目的として設計されている。
- ブランチ名でworktreeを操作でき、作成・切替・削除・一覧表示のほか、フックによる自動化やLLMコミットメッセージ生成、copy-on-writeビルドキャッシュ共有などの機能を持つ。
- Claude CodeやCodexなどのAIエージェントを複数並行で動かす開発者や、多数のworktreeを効率的に管理したいGitユーザーが対象。
- Homebrew・Cargo・Winget・pacman・Conda等でインストール可能で、ディレクトリ移動を有効にするにはシェル統合の設定（wt config shell install）が必要。

---

### 8. [Automattic/harper](https://github.com/Automattic/harper)

> Offline, privacy-first grammar checker. Fast, open-source, Rust-powered

- Language: Rust
- Stars: 15,925
- Forks: 680
- Stars in 1週間: 449
- Category: 文法チェッカー
- Keywords: `文法チェック` `プライバシー` `オフライン` `Rust` `高速` `オープンソース`
- Summary source: README

#### README要約

- Harperはプライバシー重視のオフライン英語文法チェッカーで、Rustで開発されたオープンソースツールです。
- 高速な動作（ミリ秒単位）と低メモリ消費（LanguageToolの1/50以下）を実現し、WebAssembly対応でブラウザでも動作します。
- プライバシーを重視するユーザーや、GrammarlyやLanguageToolの代替を求める開発者・ライター向けで、VS Code、Neovim、Emacsなど主要エディタに対応しています。
- 現在は英語のみサポート。コアは拡張可能な設計で、他言語対応のコントリビューションを歓迎しています。

---

### 9. [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev)

> A modern GUI client based on Tauri, designed to run in Windows, macOS and Linux for tailored proxy experience

- Language: Rust
- Stars: 147,307
- Forks: 10,581
- Stars in 1週間: 2,121
- Category: プロキシGUIクライアント
- Keywords: `Clash Meta` `mihomo` `Tauri` `Rust` `システムプロキシ` `TUNモード`
- Summary source: README

#### README要約

- Clash Vergeの後継プロジェクトで、Tauri 2ベースのClash Meta（mihomo）GUIクライアントです。
- システムプロキシ、TUNモード、プロファイル管理と強化（Merge/Script）、ノードとルールの可視化編集、WebDAVバックアップを備えています。
- Windows、macOS、Linuxでカスタマイズ可能なプロキシ環境を求めるユーザー向けで、テーマやCSS InjectionによるUI調整も可能です。
- GitHubのReleaseページから各OS向けインストーラーを取得でき、Stable版は日常利用向け、AutoBuild版はテスト向けで不具合の可能性があります。

---

### 10. [rust-lang/rust](https://github.com/rust-lang/rust)

> Empowering everyone to build reliable and efficient software.

- Language: Rust
- Stars: 119,179
- Forks: 16,723
- Stars in 1週間: 291
- Category: プログラミング言語
- Keywords: `Rust` `コンパイラ` `メモリ安全性` `Cargo` `オープンソース` `システムプログラミング`
- Summary source: README

#### README要約

- Rustプログラミング言語の公式ソースコードリポジトリで、コンパイラ、標準ライブラリ、ドキュメントを含む。
- 高速でメモリ効率が高く、所有権モデルによるメモリ安全性とスレッド安全性をコンパイル時に保証する。
- 重要なサービスや組み込みデバイスの開発者向けで、Cargo、rustfmt、Clippyなどのツールを提供する。
- 公式サイトからのインストールを推奨し、ソースからのビルドは非推奨。MIT/Apache 2.0ライセンスで提供される。

---

### 11. [lbjlaq/Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager)

> Professional Antigravity Account Manager & Switcher. One-click seamless account switching for Antigravity Tools. Built with Tauri v2 + React (Rust).专业的 Antigravity 账号管理与切换工具。为 Antigravity 提供一键无缝账号切换功能。

- Language: Rust
- Stars: 31,748
- Forks: 3,421
- Stars in 1週間: 337
- Category: AIアカウント管理・APIプロキシ
- Keywords: `Antigravity` `Tauri v2` `Rust` `APIプロキシ` `モデルルーティング` `Docker`
- Summary source: README

#### README要約

- 開発者やAI愛好家向けに、複数のAIアカウント管理、プロトコル変換、リクエスト調整を統合したローカルAI中継デスクトップアプリです。
- WebセッションをOpenAI/Anthropic/Gemini形式のAPIに変換し、429/401時の自動リトライ、モデルルーティング、Imagen 3対応などを備えます。
- Claude Code CLIや各種AIクライアントから共通のAPI経由で複数アカウントを運用したいユーザーに向いています。
- Tauri v2 + React/Rust製で、インストールスクリプト、Homebrew、手動パッケージ、Dockerで導入でき、DockerではAPI_KEYやWEB_PASSWORDの設定に注意が必要です。

---

### 12. [rui314/mold](https://github.com/rui314/mold)

> mold 🦠: A Modern Linker in Rust 🦀

- Language: Rust
- Stars: 17,254
- Forks: 565
- Stars in 1週間: 218
- Category: 開発ツール
- Keywords: `リンカ` `高速ビルド` `Rust` `並列処理` `Unix` `ドロップイン置換`
- Summary source: README

#### README要約

- moldは既存のUnixリンカの高性能なドロップイン置換であり、ビルドの高速化を目的としたモダンなリンカです。
- ベンチマークではLLVM lldより最大4.9倍、wildより最大1.9倍高速で、広範な並列処理と効率的なデータ構造・アルゴリズムによって高速性を実現しています。
- C、C++、Rustなどのコンパイル言語を使う開発者や、大規模プロジェクトで頻繁にビルドを繰り返すユーザーに適しています。
- RustとCargoでビルドでき、ClangやGCCでは-fuse-ld=moldオプションで利用可能です。x86-64、ARM、RISC-Vなど多数のアーキテクチャをサポートしています。

---

### 13. [mesamirh/MovieBox-Tui](https://github.com/mesamirh/MovieBox-Tui)

> Terminal interface to find, download, and stream movies, TV shows, and live TV using local media players.

- Language: Rust
- Stars: 2,260
- Forks: 260
- Stars in 1週間: 225
- Category: メディアストリーミングTUI
- Keywords: `Rust` `TUI` `ストリーミング` `IPTV` `mpv` `ダウンローダー`
- Summary source: README

#### README要約

- ターミナル上で映画・TV番組・ライブTVを検索・ダウンロード・ストリーミング再生できるRust製TUIアプリ。
- 複数プロバイダやStremioアドオンからのストリーム取得、M3UプレイリストによるIPTV、画質選択、マルチセグメントダウンロード、自動字幕、ポスター表示などを備える。
- mpvやVLCなどのローカルメディアプレイヤーで再生したいCLI愛好者や、Termux経由のAndroidユーザーを主な対象とする。
- macOS/Linux/Windows/Androidに対応し、curl・Homebrew・Scoop・Cargoで導入可能。対応メディアプレイヤーの事前インストールが必須で、DASHストリームのダウンロードにはyt-dlpとffmpegが必要。

---

### 14. [uutils/coreutils](https://github.com/uutils/coreutils)

> Cross-platform Rust rewrite of the GNU coreutils

- Language: Rust
- Stars: 24,182
- Forks: 2,056
- Stars in 1週間: 82
- Category: システムユーティリティ
- Keywords: `Rust` `coreutils` `GNU互換` `クロスプラットフォーム` `コマンドラインツール` `MITライセンス`
- Summary source: README

#### README要約

- GNU coreutilsをRustで再実装したクロスプラットフォームなユーティリティ集です。
- GNUとの出力・終了コードの完全一致を目指し、UTF-8対応や分かりやすいエラー表示、BusyBox型マルチコールバイナリを提供します。
- Linux、macOS、BSD、Windows、WASIなど複数環境で同一のコマンドを使いたい開発者やパッケージャー向けです。
- CargoまたはGNU Makeでビルド・インストールでき、一部オプション未実装やGNUと異なる挙動がある点に注意が必要です。

---

### 15. [farion1231/cc-switch](https://github.com/farion1231/cc-switch)

> A cross-platform desktop All-in-One assistant for Claude Code, Codex, OpenCode, OpenClaw, Grok Build & Hermes Agent. Only official website: ccswitch.io

- Language: Rust
- Stars: 136,837
- Forks: 9,323
- Stars in 1週間: 3,168
- Category: 開発者ツール
- Keywords: `Claude Code` `API切り替え` `Tauri` `Rust` `MCP管理` `クロスプラットフォーム`
- Summary source: README

#### README要約

- Claude Code、Codex、Gemini CLI、Grok Build、OpenCode、OpenClaw、Hermes Agentなど複数のAIコーディングツール向けのオールインワン管理デスクトップアプリです。
- ワンクリックでAPIプロバイダーを切り替え、MCP・Skills・Promptsを一元管理でき、JSON/TOML/YAML設定ファイルの手動編集が不要になります。
- 複数のAIツールやプロバイダーを使い分ける開発者が、設定をGUIで簡単に切り替え・管理する用途に適しています。
- Tauri 2・Rust・React製のクロスプラットフォームアプリで、デスクトップ環境がない場合はコミュニティ製CLI版の利用が推奨されています。

---

### 16. [CapSoftware/Cap](https://github.com/CapSoftware/Cap)

> Open source Loom alternative. Beautiful, shareable screen recordings.

- Language: Rust
- Stars: 22,813
- Forks: 1,968
- Stars in 1週間: 399
- Category: 画面録画ツール
- Keywords: `オープンソース` `Loom代替` `画面録画` `セルフホスト` `Rust` `非同期コラボレーション`
- Summary source: README

#### README要約

- CapはオープンソースのLoom代替ツールで、美しく共有可能な画面録画を作成できる。
- Instant Modeで録画中にアップロードして即座に共有リンクを取得、Studio Modeでローカル録画後に背景・ズーム・トリミング・キャプションなどの編集が可能。
- 製品デモ、バグレポート、オンボーディング、チュートリアル、デザインレビューなど、非同期コミュニケーションが必要なチームや個人向け。
- macOSとWindowsのデスクトップアプリをダウンロードして使用開始でき、Docker Composeでセルフホストも可能。S3互換ストレージやカスタムドメインにも対応。

---

### 17. [tokio-rs/tokio](https://github.com/tokio-rs/tokio)

> A runtime for writing reliable asynchronous applications with Rust. Provides I/O, networking, scheduling, timers, ...

- Language: Rust
- Stars: 33,241
- Forks: 4,030
- Stars in 1週間: 62
- Category: 非同期ランタイム
- Keywords: `Rust` `非同期I/O` `タスクスケジューラ` `TCP/UDP` `イベント駆動` `MITライセンス`
- Summary source: README

#### README要約

- Tokioは、Rustで信頼性の高い非同期アプリケーションを構築するためのイベント駆動・ノンブロッキングI/Oランタイムです。
- マルチスレッドのワークスティーリング型タスクスケジューラ、OSのイベントキュー（epoll、kqueue、IOCPなど）を利用したリアクター、非同期TCP/UDPソケットを提供します。
- 高速性、Rustの所有権と型システムによる安全性、バックプレッシャーやキャンセル処理を備え、スケーラブルなネットワークアプリ開発に適しています。
- Cargo.tomlでtokioクレートのfullフィーチャーを有効にして導入します。MSRVは1.71で、LTSリリースの利用が推奨されています。

---

### 18. [yynxxxxx/Codex-X](https://github.com/yynxxxxx/Codex-X)

> OpenAI Codex 桌面端/CLI 的可视化管理工具，具有Provider/API 切换、会话同步、提示词注入、Skills/MCP 管理、TOML 配置可视化的跨平台工具。

- Language: Rust
- Stars: 3,934
- Forks: 480
- Stars in 1週間: 657
- Category: 開発者ツール
- Keywords: `OpenAI Codex` `プロンプト管理` `API切替` `Tauri` `Rust` `クロスプラットフォーム`
- Summary source: README

#### README要約

- OpenAI Codex デスクトップ版/CLI向けのクロスプラットフォーム可視化管理ツール。
- プロンプト注入、Provider/API切替、セッション同期、Skills/MCP管理、TOML設定の可視化機能を提供。
- 複数のAPIプロバイダーやプロンプトテンプレートを使い分けるCodexユーザー向け。
- Tauri 2とRustで構築され、macOS/Windows/Linuxに対応。設定ファイルの自動バックアップ機能あり。

---

### 19. [Nasiko-Labs/nasiko](https://github.com/Nasiko-Labs/nasiko)

> Developer Control Plane for your AI Agents

- Language: Rust
- Stars: 8,904
- Forks: 1,941
- Stars in 1週間: 2,315
- Category: AIエージェント管理基盤
- Keywords: `A2Aプロトコル` `コントロールプレーン` `エージェントルーティング` `MCPゲートウェイ` `LLMルーター` `Rust`
- Summary source: README

#### README要約

- A2Aプロトコルを話すAIエージェントを単一コマンドでデプロイ・ルーティング・保護・監視するコントロールプレーン。
- TLS終端、認証、プロキシ、レート制限、ACL、トレーシングを単一プロセスで処理し、エージェントは公開されない。
- Python、Rust、Go、TypeScriptなど任意の言語でA2A対応エージェントを持ち込める開発者・運用者向け。
- Dockerのみで起動可能（Rust不要）、またはRust 1.85+とjustが必要な開発者セットアップも用意されている。

---

### 20. [zeronsh/zeron](https://github.com/zeronsh/zeron)

> A native control plane for Claude Code, Codex, Cursor, Devin and other coding agents.

- Language: Rust
- Stars: 2,232
- Forks: 213
- Stars in 1週間: 595
- Category: 開発者ツール
- Keywords: `コーディングエージェント` `コントロールプレーン` `ローカルファースト` `マルチデバイス同期` `Rust` `CLI`
- Summary source: README

#### README要約

- Claude Code、Codex、Cursor、Devinなどのコーディングエージェントをローカルで制御するネイティブコントロールプレーン。
- 各デバイス上で小さなエンジンが動作しセッションをそのデバイスに保存。デフォルトはローカルのみモードで、アカウントやネットワーク接続不要。オプションでマルチデバイス同期が可能。
- 複数デバイス間でエージェントを操作したい開発者向け。VPSなどの常時稼働マシンでエージェントを継続実行できる。
- Linuxではcurlインストーラーで導入可能。同期アカウントにサインインしたデバイスはリモートワークスペースのファイル読み書きが可能になるため、信頼できるデバイスのみサインインすること。

---

### 21. [longbridge/gpui-kit](https://github.com/longbridge/gpui-kit)

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

- Language: Rust
- Stars: 14,813
- Forks: 923
- Stars in 1週間: 286
- Category: Rust GUIフレームワーク
- Keywords: `Rust` `GPUI` `デスクトップアプリ` `UIコンポーネント` `クロスプラットフォーム` `WebAssembly`
- Summary source: README

#### README要約

- RustとGPUIで高性能なクロスプラットフォームデスクトップアプリを構築するためのUIフレームワーク。
- 75以上のコンポーネント、WebAssembly対応、AccessKitアクセシビリティ、UI統合テスト、JS拡張ランタイムを提供する。
- Longbridge Proで実運用されており、データテーブル、コードエディタ、ドックレイアウト等を備えた本番向けアプリ開発に適する。
- Cargoでgpui-kit = "0.6"を依存に追加し、gpui_kit::initで初期化して利用する。ライセンスはApache-2.0。

---
