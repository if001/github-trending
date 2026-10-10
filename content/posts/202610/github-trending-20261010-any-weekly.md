+++
title = 'GitHub Trending 1週間レポート (All) - 2026/10/10'
date = 2026-10-10T00:30:05.285Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月10日 0:30:05
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 11
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントの運用・拡張ツールがランキングを席巻し、PS5移植ツールが最大のスター獲得という異色の組み合わせ

- 11件中7件がAIエージェント関連（スキル集、メモリ、オーケストレーション、リモート制御、Webアクセス、CAD連携、動画生成）で、Claude CodeやCodexなどを対象としたツールが集中している
- 最多スターはboykopovar/AnyPS5の15,539で、PS5実行ファイルをLinux/Windowsへ移植する低レイヤーツールが突出した注目を集めた
- 言語分布はTypeScriptが6件と過半数を占め、Python 2件、C++/C/Shell/JavaScriptが各1件
- セルフホスト・プライバシー重視のツール（openGym、openrig）も複数登場し、データ所有権への関心がうかがえる

### 主なテーマ

- **AIエージェントのスキル・能力拡張**: Claude CodeやCodexなどのエージェントに実践的な開発スキルや外部能力を追加するツールが複数ランクイン。mattpocock/skills（8,156スター）はTDDやバグ診断のスキル集、Panniantong/Agent-Reach（7,084スター）はSNS・Webアクセスを付与するCLI、earthtojake/text-to-cad（2,125スター）はCAD生成能力を追加する。（`mattpocock/skills`、`Panniantong/Agent-Reach`、`earthtojake/text-to-cad`）
- **AIエージェントの運用・管理基盤**: 複数エージェントのチーム化・永続メモリ・リモート制御を提供する運用レイヤーのツールが台頭。mvschwarz/openrig（2,338スター）はYAML定義のマルチエージェントチーム管理、thedotmack/claude-mem（3,850スター）はセッション横断のコンテキスト永続化、pingdotgg/t3code（2,379スター）はモバイル/Webからのエージェント一元管理を提供する。（`mvschwarz/openrig`、`thedotmack/claude-mem`、`pingdotgg/t3code`）
- **エージェント駆動のコンテンツ生成**: heygen-com/hyperframes（4,003スター）はHTMLからMP4動画を決定論的にレンダリングし、Claude CodeやCursor向けに21個のスキルを備えるなど、エージェント経由の動画・モーショングラフィックス制作という新しい用途が登場した。（`heygen-com/hyperframes`）
- **低レイヤー・ネイティブ開発ツール**: boykopovar/AnyPS5（15,539スター）はPS5実行ファイルをリリンクでLinux/Windowsに移植し、EpicGames/raddebugger（654スター）は独自デバッグ情報形式RDIと高速リンカを備えたWindows向けネイティブデバッガで、C++/Cによる基盤系ツールが注目を集めた。（`boykopovar/AnyPS5`、`EpicGames/raddebugger`）
- **セルフホスト・プライバシー重視のアプリ**: DuarteSantos8/openGym（6,749スター）はDocker Composeで導入できるセルフホスト型フィットネストラッカーで、パスキー認証や他アプリからのインポートを備え、データを自分のサーバーで管理したい層の支持を得た。（`DuarteSantos8/openGym`）

### 補足的な観察

- スター数の上位2件（AnyPS5 15,539、mattpocock/skills 8,156）は用途が全く異なり、低レイヤー移植とAIスキル集という二極の関心が共存している
- TypeScript製6件のうち5件がAIエージェント関連で、エージェント周辺エコシステムの実装言語としてTypeScriptが標準的な選択になっている
- cursor/plugins（1,125スター）のように、エディタ公式のプラグインマーケットプレイス自体がトレンド入りしており、エージェント拡張の配布基盤整備も進んでいる
- EpicGames/raddebuggerは654スターと最少ながらEpic Games公式という出自でランクインしており、スター数以外の要因も注目度に影響している

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 5 |
| Python | 2 |
| C | 1 |
| C++ | 1 |
| JavaScript | 1 |
| Shell | 1 |

## Repository一覧

### 1. [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5)

> Tool for automatic PS5 executables porting to Linux and Windows

- Language: C++
- Stars: 22,303
- Forks: 1,817
- Stars in 1週間: 15,539
- Category: 実行ファイル移植ツール
- Keywords: `PS5` `Linux` `Windows` `C++` `リリンカー` `SPIR-V`
- Summary source: README

#### README要約

- PS5の実行ファイルをLinuxおよびWindowsへ自動移植するためのツールです。
- 実行ファイルを対象OSのネイティブ形式へ変換するリリンカーと、動的リンクに適したシステムprxライブラリ実装を含み、エミュレーションや別ランタイムプロセスを使いません。
- 相互運用、研究、保存、互換性確保を目的とする開発者や利用者向けで、対応ゲーム一覧や入出力設定ドキュメントが用意されています。
- 未対応または予期しない状態ではstd::runtime_errorを投げて終了し、利用するバイナリの取得と使用は適用法およびライセンス条件に従う必要があります。

---

### 2. [mvschwarz/openrig](https://github.com/mvschwarz/openrig)

> Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.

- Language: TypeScript
- Stars: 6,448
- Forks: 473
- Stars in 1週間: 2,338
- Category: AIエージェントオーケストレーション
- Keywords: `マルチエージェント` `Claude Code` `Codex` `YAML定義` `tmux` `セルフホスト`
- Summary source: README

#### README要約

- Claude CodeやCodexなどのAIコーディングエージェントをYAMLで定義し、1コマンドで起動できる永続的なエージェントチーム管理システム。
- リードエージェントが専門エージェントを横断調整し、役割・共有コンテキスト・担当作業を持つチームとして成果物や判断事項をユーザーに届ける。
- 複数のAIエージェントを組織化して継続的な開発作業を行いたい開発者や、AIエージェントのチーム運用を試したいユーザー向け。
- Node.js 22/24とtmuxが必要でmacOS/Linux対応（WindowsはWSL2経由）。セットアップ時にプロバイダのフックやワークスペース信頼設定が変更されるため事前確認とバックアップが推奨される。

---

### 3. [mattpocock/skills](https://github.com/mattpocock/skills)

> Skills for Real Engineers. Straight from my .agents directory.

- Language: Shell
- Stars: 282,671
- Forks: 23,682
- Stars in 1週間: 8,156
- Category: AIエージェント用スキル集
- Keywords: `AIコーディングエージェント` `Claude Code` `TDD` `要件定義` `アーキテクチャ改善` `開発ワークフロー`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの実践的なスキル集で、vibe codingではなく本物のエンジニアリングを支援する。
- 要件のすり合わせを行う/grill-me、TDDループの/tdd、バグ診断の/diagnosing-bugs、アーキテクチャ改善の/improve-codebase-architectureなどのスキルを提供する。
- Claude Code、Codex、GitHub Copilot、Gemini CLIなどのエージェントを使う開発者が、日々の開発ワークフローに組み込んで利用する。
- 各エージェント用のプラグインコマンドかnpx skillsで導入し、リポジトリごとに/setup-matt-pocock-skillsを一度実行する必要がある。

---

### 4. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 59,791
- Forks: 5,336
- Stars in 1週間: 4,003
- Category: 動画レンダリングフレームワーク
- Keywords: `HTML to Video` `MP4レンダリング` `AIエージェント` `Puppeteer` `FFmpeg` `TypeScript`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLI、AIコーディングエージェント用スキル、ホスト型オーサリングワークフローのレンダリングコアとして利用でき、PuppeteerとFFmpegによるキャプチャエンジンを備える。
- Claude Code、Codex、Cursor、Gemini CLIなどのエージェント向けに21個のスキルを提供し、動画・デッキ・モーショングラフィックス制作を支援する。
- Node.js 22以上が必要で、npmパッケージとして配布。開発用にクローンする場合はGit LFSのインストールが推奨される。ライセンスはApache 2.0。

---

### 5. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 10,582
- Forks: 1,001
- Stars in 1週間: 1,125
- Category: 開発ツール
- Keywords: `Cursor` `プラグイン` `マーケットプレイス` `TypeScript` `エディタ拡張` `SaaS連携`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール・フレームワーク・SaaS製品向けの多数のプラグインを収録したマーケットプレイスリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェストで管理される。
- 開発者やチームがCursorエディタの機能を拡張し、GitHub・Google Workspace・Salesforceなど外部サービスと連携する用途に対応。
- ルートの`marketplace.json`に全プラグインがリストされ、各プラグインはskills・rules・MCPサーバー定義などを含む構成。

---

### 6. [EpicGames/raddebugger](https://github.com/EpicGames/raddebugger)

> A native, user-mode, multi-process, graphical debugger.

- Language: C
- Stars: 8,263
- Forks: 394
- Stars in 1週間: 654
- Category: デバッガ
- Keywords: `デバッガ` `Windows` `x64` `PDB` `RDI` `リンカ`
- Summary source: README

#### README要約

- RAD Debuggerは、Epic Gamesが開発したネイティブでユーザーモードのマルチプロセス対応グラフィカルデバッガです。
- 独自のデバッグ情報形式RDIを採用し、PDBをオンデマンドで変換して利用するほか、高速なRAD Linkerも含まれます。
- 現在はWindows x64環境でのローカルデバッグに特化しており、大規模プロジェクトのコンパイル・デバッグサイクル高速化を目指す開発者向けです。
- アルファ版のため問題報告が推奨され、ビルドにはMSVCまたはClangとWindows SDKが必要で、Linux版は開発中です。

---

### 7. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)

> Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More

- Language: TypeScript
- Stars: 98,987
- Forks: 8,670
- Stars in 1週間: 3,850
- Category: AIエージェントメモリ
- Keywords: `永続メモリ` `コンテキスト圧縮` `Claude Code` `セッション管理` `TypeScript` `MCP`
- Summary source: README

#### README要約

- Claude CodeなどのAIエージェント向けに、セッションをまたいでコンテキストを永続化するメモリ圧縮システム。
- ツール使用の観察を自動記録し、AIで意味的な要約を生成して将来のセッションに注入する。SQLiteとFTS5、Chromaによるハイブリッド検索を備える。
- Claude Code、OpenCode、OpenClaw、Codex、Gemini、Copilotなど複数のエージェント環境で、プロジェクトの知識の連続性を維持したい開発者向け。
- npx claude-mem installまたはプラグインコマンドで導入。npmグローバルインストールはSDKのみでフック登録されない点に注意。Apache-2.0ライセンス。

---

### 8. [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)

> Give your agent CAD superpowers.

- Language: Python
- Stars: 18,754
- Forks: 1,857
- Stars in 1週間: 2,125
- Category: AI開発ツール
- Keywords: `CAD` `3Dモデリング` `AIエージェント` `プラグイン` `製造設計` `Python`
- Summary source: README

#### README要約

- AIエージェントにCAD機能を追加するプラグインで、テキストから3Dモデルを生成できます。
- STEP、GLB、STL、3MF形式でのモデル生成、製造可能性チェック、エンジニアリング図面作成、3Dプリント・板金・CNC加工サービスとの連携を提供します。
- Claude Code、Codex、Cursor、Gemini、Grokなどの主要なAIエージェントで利用可能で、設計者やエンジニアのCAD作業を支援します。
- uvを使ってインストールし、各エージェントアプリ用のプラグインまたはスキルとして導入します。初回起動時にネットワーク接続が必要です。

---

### 9. [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

- Language: TypeScript
- Stars: 26,626
- Forks: 6,953
- Stars in 1週間: 2,379
- Category: AIエージェント管理ツール
- Keywords: `AIエージェント` `Claude Code` `Codex` `リモート制御` `TypeScript` `開発ツール`
- Summary source: README

#### README要約

- T3 Codeは、マシン上のAIエージェントを制御するための「エージェントハーネス・コントロールサーフェス」です。
- iOS/Androidモバイルアプリ、Webアプリ、Electronベースのデスクトップアプリから、Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravityなどのエージェントを操作できます。
- 複数のAIコーディングエージェントをリモートを含めて一元管理したい開発者を対象とし、オープンでフォーク可能な設計を重視しています。
- 利用前に少なくとも1つのプロバイダーのCLIをインストールして認証する必要があり、プロジェクトは初期段階のためバグが含まれる可能性があります。

---

### 10. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)

> Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.

- Language: Python
- Stars: 94,889
- Forks: 8,298
- Stars in 1週間: 7,084
- Category: AIエージェントツール
- Keywords: `AIエージェント` `CLI` `マルチプラットフォーム` `Webスクレイピング` `SNS連携` `オープンソース`
- Summary source: README

#### README要約

- AIエージェントにインターネットアクセス能力を付与するCLIツールで、Twitter、Reddit、YouTube、GitHub、Bilibili、小紅書などの主要プラットフォームの読み取りと検索を可能にします。
- 各プラットフォームに最適なバックエンドツール（yt-dlp、Jina Reader、gh CLIなど）を自動選択・インストールし、複数の候補から利用可能なものをルーティングする能力層として機能します。
- Claude Code、OpenClaw、Cursor、Windsurfなどのコマンドライン実行可能なAIエージェントユーザーが、Web情報収集やSNS調査を行う際に使用します。
- インストールはエージェントに1文を送るだけで完了し、Python 3.10以上が必要です。Cookieはローカル保存でプライバシーに配慮し、agent-reach doctorコマンドで各チャネルの状態を診断できます。

---

### 11. [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym)

> Self-hosted gym & body-weight tracker — plan routines, log workouts (supersets, warm-ups, cardio), see which muscles are trained, fatigued or detrained, import from FitNotes/Strong/Hevy, passkey login. Your data, your server.

- Language: JavaScript
- Stars: 8,665
- Forks: 1,079
- Stars in 1週間: 6,749
- Category: フィットネストラッカー
- Keywords: `セルフホスト` `ワークアウト記録` `パスキー認証` `Docker` `プライバシー重視` `オープンソース`
- Summary source: README

#### README要約

- 自分のサーバーで運用できるセルフホスト型のジム＆体重トラッカーで、データを完全に自分で管理できる。
- 5,600種類以上のエクササイズライブラリ、ガイド付きワークアウト、スーパーセットや有酸素運動の記録、筋肉の疲労・回復状況の可視化、FitNotes/Strong/Hevyからのインポート、パスキー認証などを搭載。
- プライバシーを重視し、サブスクリプションや広告なしで自分のトレーニングデータを管理したいユーザー向け。
- Docker Composeで簡単に導入可能。スマホからパスキーでアクセスするにはHTTPSドメインが必要。AGPL v3.0ライセンスで、エクササイズ画像は別ライセンス。

---
