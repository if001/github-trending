+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/08/29'
date = 2026-08-29T23:01:40.886Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月29日 23:01:40
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> TypeScript製のAIエージェント関連ツールとオープンソース代替ソフトが台頭し、ローカルファースト・セルフホスト型の実用的な開発者ツールが注目を集めている

- AIエージェント関連のリポジトリが複数ランクインしており、コーディングエージェント、エージェントワークスペース、LLM APIゲートウェイなど多様な形態が見られる
- 既存の商用サービス（CapCut、Jira、Notebook LM等）のオープンソース代替を目指すプロジェクトが複数存在する
- TypeScriptが圧倒的に多くのリポジトリで採用されており、エコシステムの中心言語となっている
- セルフホスト可能なツールやローカルファーストの設計を採用するプロジェクトが目立ち、データ管理とプライバシーへの配慮がうかがえる
- 開発者向けの実用的なツール（プレゼンテーション、プロジェクト管理、コード解析など）が幅広くカバーされている

### 主なテーマ

- **AIエージェントとコーディング支援**: AIエージェントを活用した開発支援ツールが複数ランクイン。apache/makaはローカルファーストのエージェントワークスペース、can1357/oh-my-piはIDE統合コーディングエージェント、letta-ai/letta-codeはステートフルなエージェントフレームワークを提供。1weiho/open-slideはエージェント向けスライドフレームワーク、abhigyanpatwari/GitNexusはAIエージェントにコードベースの文脈を提供する。（`apache/maka`、`can1357/oh-my-pi`、`letta-ai/letta-code`、`1weiho/open-slide`、`abhigyanpatwari/GitNexus`）
- **商用サービスのオープンソース代替**: 既存の人気商用サービスの代替を目指すプロジェクトが複数存在。OpenCut-app/OpenCutはCapCut代替の動画編集ソフト、makeplane/planeはJira/Linear等の代替プロジェクト管理ツール、lfnovo/open-notebookはNotebook LMのオープンソース実装。これらはセルフホスト可能で、データ管理の自由度を重視している。（`OpenCut-app/OpenCut`、`makeplane/plane`、`lfnovo/open-notebook`）
- **LLMインフラストラクチャとAPI管理**: LLMの利用を効率化するインフラ系ツールが登場。tashfeenahmed/freellmapiは34の無料LLMプロバイダーを単一APIに集約し、スマートルーティングと自動フェイルオーバーを提供。n8n-io/n8nはAIワークフロー構築プラットフォームとして、1500以上の連携を備えている。（`tashfeenahmed/freellmapi`、`n8n-io/n8n`）
- **開発者向けコンテンツ作成ツール**: 開発者のプレゼンテーションやドキュメント作成を支援するツールが複数存在。slidevjs/slidevはMarkdownベースのスライド作成ツール、1weiho/open-slideはエージェント連携のスライドフレームワーク、withastro/astroはコンテンツ駆動型ウェブサイト構築フレームワークを提供している。（`slidevjs/slidev`、`1weiho/open-slide`、`withastro/astro`）
- **セルフホスト型データ管理**: 個人データを自分のインフラで管理するツールが注目されている。bookorbit/bookorbitは電子書籍ライブラリと読書進捗の同期、lfnovo/open-notebookはリサーチノートのセルフホスト、caelestia-dots/caelestiaはLinuxデスクトップ環境のカスタマイズを提供。プライバシーとデータ主権を重視する傾向がうかがえる。（`bookorbit/bookorbit`、`lfnovo/open-notebook`、`caelestia-dots/caelestia`）

### 補足的な観察

- 言語分布ではTypeScriptが16リポジトリ中15以上を占め、圧倒的な存在感を示している
- スター獲得数の上位はOpenCut-app/OpenCut（2499）、tashfeenahmed/freellmapi（2162）、can1357/oh-my-pi（1938）、apache/maka（1918）で、AI関連とオープンソース代替が牽引している
- cursor/plugins（1594）やmakeplane/plane（1696）など、既存エコシステムの拡張やエンタープライズ向けツールも安定した人気を維持している
- DefinitelyTyped/DefinitelyTyped（39）やslidevjs/slidev（168）など、成熟したプロジェクトは新規スター獲得が緩やかだが、継続的にランクインしている

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 16 |

## Repository一覧

### 1. [apache/maka](https://github.com/apache/maka)

> Apache Maka (Incubating) is a local-first AI agent workspace. Model messages, tool calls, tool results, permission decisions, and termination events are recorded as an append-only log.

- Language: TypeScript
- Stars: 4,036
- Forks: 374
- Stars in 1週間: 1,918
- Category: AIエージェントワークスペース
- Keywords: `ローカルファースト` `AIエージェント` `追記専用ログ` `サンドボックス` `TypeScript` `Apache Incubating`
- Summary source: README

#### README要約

- Apache Maka (Incubating)は、ローカルファーストで実用的なAIエージェントワークスペースです。
- モデルメッセージやツール呼び出しを追記専用ログとして記録し、サンドボックス境界内でツールを実行します。
- デスクトップ、TUI/CLI、評価の3つのインターフェースを提供し、開発者やAIエージェント利用者を対象としています。
- 現在はmacOS Apple Silicon向けの早期公開版で、データ形式やCLIコマンドは変更される可能性があります。

---

### 2. [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)

> 7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.

- Language: TypeScript
- Stars: 22,193
- Forks: 3,105
- Stars in 1週間: 2,162
- Category: LLM APIゲートウェイ
- Keywords: `OpenAI互換API` `無料LLMプロバイダー集約` `スマートルーティング` `自動フェイルオーバー` `TypeScript` `セルフホスト`
- Summary source: README

#### README要約

- 34の無料LLMプロバイダーと635の無料モデルエンドポイントを、単一のOpenAI互換/v1 APIの背後に集約するルーター。
- スマートルーティング、レート制限時の自動フェイルオーバー、暗号化されたキー保存、キーごとの使用量追跡を備え、署名付きフィードでモデルカタログを自動更新する。
- Claude CodeやCodex CLIなどのコーディングエージェントやOpenAI互換クライアントから利用でき、個人の実験・学習用途を対象としている。
- デスクトップアプリ、Android、Dockerでのセルフホストが可能。本番利用は非推奨で、各プロバイダーの利用規約遵守はユーザー責任。ライセンスはMIT。

---

### 3. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 6,162
- Forks: 488
- Stars in 1週間: 1,594
- Category: 開発ツール
- Keywords: `Cursor` `プラグイン` `マーケットプレイス` `TypeScript` `エディタ拡張` `SaaS連携`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール・フレームワーク・SaaS製品向けの多様なプラグインを提供するマーケットプレイスリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェストで管理される。スキル、ルール、MCPサーバー定義などを含む。
- Cursorエディタの機能を拡張したい開発者や、GitHub・Googleサービス・Slackなどの外部ツールと連携したいユーザー向け。
- TypeScriptで記述され、MITライセンスで提供される。各プラグインは個別にインストール可能で、マーケットプレイスから選択して利用する。

---

### 4. [bookorbit/bookorbit](https://github.com/bookorbit/bookorbit)

> BookOrbit: Your Reading Space

- Language: TypeScript
- Stars: 3,620
- Forks: 214
- Stars in 1週間: 806
- Category: 電子書籍管理
- Keywords: `セルフホスト` `電子書籍` `読書同期` `KOReader` `Kobo` `ライブラリ管理`
- Summary source: README

#### README要約

- 電子書籍、PDF、オーディオブック、コミックを管理するセルフホスト型のライブラリ・読書プラットフォームです。
- Webリーダー、Kobo、KOReader間で読書進捗やハイライトを双方向同期し、14のメタデータプロバイダーや統計機能を備えています。
- 複数デバイスで読書を中断・再開したいユーザーや、自分のインフラで蔵書を管理したいユーザーに適しています。
- Docker Composeで導入可能で、AGPLv3ライセンスのもと公開されています。

---

### 5. [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)

> An Open Source implementation of Notebook LM with more flexibility and features

- Language: TypeScript
- Stars: 37,907
- Forks: 4,387
- Stars in 1週間: 629
- Category: AIリサーチノート
- Keywords: `Notebook LM代替` `セルフホスト` `マルチモーダル` `ポッドキャスト生成` `Docker` `プライバシー`
- Summary source: README

#### README要約

- Google Notebook LMのオープンソース代替で、プライバシー重視のセルフホスト型リサーチツール。
- 18以上のAIプロバイダー対応、PDF・動画・音声などのマルチモーダル整理、全文・ベクトル検索、複数話者ポッドキャスト生成、REST APIを備える。
- 自分のデータを管理したい研究者や開発者、ローカルAIでコストを抑えたいユーザー向け。
- Docker Composeで手軽に導入可能だが、暗号化キーの設定とAIプロバイダーのAPIキー登録が必要。

---

### 6. [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)

> ⌥ Coding agent with the IDE wired in

- Language: TypeScript
- Stars: 28,294
- Forks: 2,825
- Stars in 1週間: 1,938
- Category: コーディングエージェント
- Keywords: `コーディングエージェント` `IDE統合` `LSP` `DAP` `TypeScript` `Rust`
- Summary source: README

#### README要約

- IDE機能を統合したコーディングエージェントで、60以上のプロバイダーと31の組み込みツールを備えたオープンソースツールです。
- LSPやDAPを活用したコード編集・デバッグ、サブエージェントによる並列処理、リアルタイムコラボレーション機能を提供します。
- ターミナルでの開発作業を効率化したい開発者向けで、コードレビューやWeb検索、PDF読解など多様なタスクに対応します。
- macOS・Linux・Windowsに対応し、curlやHomebrew、Bun、Nixなどでインストール可能です。MITライセンスで提供されています。

---

### 7. [slidevjs/slidev](https://github.com/slidevjs/slidev)

> Presentation Slides for Developers

- Language: TypeScript
- Stars: 48,336
- Forks: 2,166
- Stars in 1週間: 168
- Category: プレゼンテーションツール
- Keywords: `Markdown` `スライド作成` `Vue` `Vite` `コードハイライト` `開発者向け`
- Summary source: README

#### README要約

- Markdownベースで開発者向けのプレゼンテーションスライドを作成するツール
- コードハイライト、ライブコーディング、Vueコンポーネント埋め込み、テーマ共有、LaTeX数式、Mermaid図表、描画注釈、録画機能を搭載
- 技術プレゼンを行う開発者や、コード中心のスライドを効率的に作成したいエンジニア向け
- Node.js 20.12.0以上が必要で、npm init slidevコマンドでプロジェクトを初期化できる

---

### 8. [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

> The repository for high quality TypeScript type definitions.

- Language: TypeScript
- Stars: 51,418
- Forks: 30,385
- Stars in 1週間: 39
- Category: 型定義リポジトリ
- Keywords: `TypeScript` `型定義` `@types` `npm` `宣言ファイル` `pnpm`
- Summary source: README

#### README要約

- 高品質なTypeScript型定義を集めたリポジトリで、npmの@typesパッケージとして公開される型宣言ファイルを管理している。
- pnpmモノレポ構成で、各パッケージの型定義はtypesディレクトリに配置され、CIで型チェックとリントが実行されnpmへ自動公開される。
- TypeScript開発者がnpm install @types/パッケージ名で型定義を導入し、JavaScriptライブラリを型安全に利用する際に使用する。
- 貢献するには実際に自分のプロジェクトで使用する型定義のみPRを送り、テストを追加してpnpm testで検証する必要がある。

---

### 9. [letta-ai/letta-code](https://github.com/letta-ai/letta-code)

> Stateful agents that are like people, with memory, identity, and the ability to learn and adapt

- Language: TypeScript
- Stars: 3,150
- Forks: 380
- Stars in 1週間: 67
- Category: AIエージェントフレームワーク
- Keywords: `ステートフルエージェント` `メモリ` `自己改善` `CLI` `マルチエージェント` `TypeScript`
- Summary source: README

#### README要約

- Letta Codeは、記憶・自己同一性・経験を持ち、ツールというより人間のように振る舞うステートフルなエージェントを作成するためのハーネスです。
- エージェントは自身のメモリ、スキル、プロンプト、さらにはハーネス自体を書き換えることで、長期的に学習・進化します。
- CLI、デスクトップアプリ、ブラウザ、SlackやTelegramなどのメッセージング連携を通じて対話でき、常時稼働するプロアクティブなエージェントの構築にも利用できます。
- npmでグローバルインストールして`letta`コマンドで起動し、`/connect`でLLM APIキーを設定します。リモート環境やシークレット機能の利用にはLettaへのサインインが必要です。

---

### 10. [caelestia-dots/caelestia](https://github.com/caelestia-dots/caelestia)

> A fluid, morphing interface to your Linux desktop

- Language: TypeScript
- Stars: 4,159
- Forks: 360
- Stars in 1週間: 112
- Category: デスクトップ環境設定
- Keywords: `dotfiles` `Hyprland` `Linux` `デスクトップカスタマイズ` `CLI` `Lua`
- Summary source: README

#### README要約

- Caelestiaは、Linuxデスクトップ向けの流動的で変形するインターフェースを提供するdotfilesリポジトリです。
- Hyprland設定をLuaで管理し、CLIツールによるインストールとアップデート、豊富なキーバインドカスタマイズ機能を備えています。
- Arch Linuxユーザーを主な対象とし、AURからCLIをインストールして使用する想定です。
- ログインマネージャーは含まれていないため別途インストールが必要で、設定ファイルは~/.config/caelestia/内で管理します。

---

### 11. [1weiho/open-slide](https://github.com/1weiho/open-slide)

> A slide framework built for agents.

- Language: TypeScript
- Stars: 7,293
- Forks: 518
- Stars in 1週間: 709
- Category: スライド作成フレームワーク
- Keywords: `エージェント` `React` `スライド` `TypeScript` `プレゼンテーション` `静的エクスポート`
- Summary source: README

#### README要約

- コーディングエージェント向けのスライドフレームワークで、自然言語でデッキを記述するとエージェントがReactコードを生成する。
- 1920×1080の固定キャンバスに任意のReactコンポーネントを描画し、ホットリロード、ナビゲーション、プレゼンモードを提供する。
- Claude Code、Codex、Cursorなどのエージェントと連携し、ブラウザ内インスペクターでコメントを付けて修正を依頼できる。
- npx @open-slide/cli initで導入でき、静的HTMLやPDFへのエクスポート、Vercelなどへのデプロイに対応する。

---

### 12. [withastro/astro](https://github.com/withastro/astro)

> The web framework for content-driven websites. ⭐️ Star to support our work!

- Language: TypeScript
- Stars: 62,159
- Forks: 3,751
- Stars in 1週間: 226
- Category: ウェブフレームワーク
- Keywords: `Astro` `静的サイト生成` `コンテンツ駆動` `TypeScript` `マルチフレームワーク` `インテグレーション`
- Summary source: README

#### README要約

- Astroはコンテンツ駆動型ウェブサイト向けのモダンなウェブサイト構築ツールです。
- 強力な開発者体験と軽量な出力を両立させ、React、Vue、SvelteなどのUIフレームワークやMDX、サイトマップなどの公式インテグレーションを提供します。
- コンテンツ中心のサイトを構築したい開発者や、複数のフレームワークを組み合わせて使いたいチームに適しています。
- npm create astro@latestで新規プロジェクトを作成するか、npm install astroで既存プロジェクトに手動インストールできます。

---

### 13. [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus)

> GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a git repository (Github, Gitlab, Azure, Local) or ZIP file, and get an interactive knowledge graph with a built in Graph RAG Agent. Perfect for code exploration

- Language: TypeScript
- Stars: 46,388
- Forks: 5,115
- Stars in 1週間: 762
- Category: コード解析・AI開発支援ツール
- Keywords: `ナレッジグラフ` `MCP` `コード解析` `AIエージェント` `Tree-sitter` `Graph RAG`
- Summary source: README

#### README要約

- GitNexusはコードベースを依存関係・呼び出しチェーン・実行フロー含むナレッジグラフに変換するコードインテリジェンスエンジン。
- CLI+MCPでAIエージェント（Cursor、Claude Code等）にアーキテクチャ全体の文脈を提供し、Web UIではブラウザ上でグラフ探索とAIチャットが可能。
- AIコーディングツール利用者が依存関係の見落としや破壊的変更を防ぐ用途に適し、ローカル実行でプライバシーも確保される。
- npx gitnexus analyzeとsetupで導入可能だが、npm 11ではpnpm推奨、C++ツールチェーン不要化の環境変数も用意されている。

---

### 14. [n8n-io/n8n](https://github.com/n8n-io/n8n)

> Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.

- Language: TypeScript
- Stars: 202,805
- Forks: 60,459
- Stars in 1週間: 1,351
- Category: ワークフロー自動化
- Keywords: `ワークフロー自動化` `AIエージェント` `セルフホスト` `フェアコード` `TypeScript` `連携`
- Summary source: README

#### README要約

- n8nはAIエージェントとワークフローを構築・デプロイするためのフェアコードな自動化プラットフォームです。
- ビジュアルキャンバスとJavaScript/Python等のカスタムコードを組み合わせ、1500以上の連携や9000以上のテンプレートを利用できます。
- AIワークフローのプロトタイプから本番運用までを対象とし、セルフホストまたはクラウドで企業利用にも対応します。
- Dockerによる簡単な導入が可能で、Sustainable Use LicenseおよびEnterprise Licenseの下で提供されます。

---

### 15. [makeplane/plane](https://github.com/makeplane/plane)

> 🔥🔥🔥 Open-source Jira, Linear, Monday, and ClickUp alternative. Plane is a modern project management platform to manage tasks, sprints, docs, and triage.

- Language: TypeScript
- Stars: 58,522
- Forks: 5,568
- Stars in 1週間: 1,696
- Category: プロジェクト管理ツール
- Keywords: `オープンソース` `プロジェクト管理` `課題追跡` `スプリント` `セルフホスト` `TypeScript`
- Summary source: README

#### README要約

- Planeは、課題追跡、サイクル（スプリント）運用、プロダクトロードマップ管理を行うオープンソースのプロジェクト管理ツールです。
- 作業項目、サイクル、モジュール、カスタムビュー、AI機能付きページ、リアルタイム分析などの機能を備えています。
- Jira、Linear、Monday、ClickUpの代替として、タスクやスプリント、ドキュメントを管理したいチームを対象としています。
- Plane Cloudへの無料登録か、Docker・Kubernetesによるセルフホストで導入でき、ライセンスはGNU AGPL v3.0です。

---

### 16. [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut)

> The open-source CapCut alternative

- Language: TypeScript
- Stars: 87,894
- Forks: 8,666
- Stars in 1週間: 2,499
- Category: 動画編集ソフト
- Keywords: `オープンソース` `動画編集` `CapCut代替` `TypeScript` `Rust` `MIT`
- Summary source: README

#### README要約

- Web・デスクトップ・モバイル向けの無料オープンソース動画エディタで、CapCutの代替を目指すプロジェクト。
- 現在ゼロから書き直し中で、Editor API、プラグイン優先アーキテクチャ、Rustコアによる単一コードベース化、MCPサーバ、ヘッドレスモード、スクリプトタブを予定。
- 現時点で実用するなら旧版のopencut-classicかopencut.appを使う想定で、新版はnew.opencut.appで準備中。
- 開発にはprotoとmoonを使い、web:devはlocalhost:5173、api:devはlocalhost:8787で起動。外部コントリビューションはまだ受け付けていない。

---
