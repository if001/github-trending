+++
title = 'GitHub Trending 1週間レポート (All) - 2026/11/07'
date = 2026-11-07T00:37:49.390Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月7日 0:37:49
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 18
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> Claude Code等のコーディングエージェントを『育てる・制御する・量産する』ための周辺ツール（メモリ・スキル・管理基盤）がトレンドの中心となり、AI開発の実用化フェーズへの移行が鮮明になった。

- Claude Code、Codex、CursorなどのAIコーディングエージェント向けの拡張ツール（スキル、メモリ、管理ツール）がランキングを席巻し、単なるコード生成からエージェントの運用管理への関心が高まっている
- AI生成物の品質向上、特に『AIっぽさ』を排除するデザインスキルやレビューツールが複数ランクインし、実用段階での品質管理ニーズが顕在化している
- 複数のAIエージェントを並列実行・管理するためのインフラ（Git worktree管理、コントロールサーフェス、マルチエージェントチャット）が注目を集めている
- Anthropic公式のAgent SkillsやKarpathyの観察に基づくCLAUDE.mdなど、エージェントの振る舞いを規定する『設定・スキルファイル』の標準化が進んでいる
- ゲーム開発や動画制作など、特定ドメインに特化したエージェントワークフロー（スタジオ階層、制作パイプライン）が登場し、汎用ツールから垂直統合ソリューションへの展開が見られる

### 主なテーマ

- **AIエージェントの記憶とコンテキスト管理**: セッションをまたいだ永続メモリ（claude-mem）や、Git worktreeを用いた並列エージェント管理（worktrunk）など、AIエージェントの状態管理とコンテキスト維持に関するツールが高い関心を集めている。特にclaude-memは8,726スターを獲得し、エージェントの『記憶』に対する需要の高さを示している。（`thedotmack/claude-mem`、`max-sixty/worktrunk`）
- **AI生成物の品質管理とデザインスキル**: AI生成コードやUIの『スロップ（粗悪な出力）』を防ぐためのツールが複数ランクイン。hallmark（6,900スター）やimpeccable（8,172スター）はAI生成っぽさを排除するデザインスキルを提供し、Anthropic公式のskills（3,159スター）やKarpathyの観察に基づくCLAUDE.md（3,671スター）など、エージェントの振る舞いを規定する標準的なスキルセットへの関心が高い。（`Nutlope/hallmark`、`pbakaus/impeccable`、`anthropics/skills`、`jakubkrehel/skills`、`multica-ai/andrej-karpathy-skills`）
- **マルチエージェント管理とリモート制御**: 複数のAIエージェント（Claude Code、Codex、Grok等）を一元管理するプラットフォームが注目されている。t3code（16,782スター）はモバイル・デスクトップからのリモート操作を実現し、OpenMausBot（6,395スター）やOpenBot（1,808スター）はローカルファーストでエージェント同士の連携を可能にする。（`pingdotgg/t3code`、`milind-soni/OpenMausBot`、`nightly-labs/openbot`）
- **ドメイン特化型エージェントワークフロー**: 汎用的なコーディング支援から、特定領域のワークフローをエージェント化する動きが顕著。ゲーム開発スタジオを模したClaude-Code-Game-Studios（6,018スター）や、動画制作パイプラインを統括するOpenMontage（4,405スター）など、業界特化型の複雑なワークフローが登場している。（`Donchitos/Claude-Code-Game-Studios`、`calesthio/OpenMontage`）
- **開発手法のフレームワーク化と自動化**: TDDや設計プロセスをエージェントに組み込むsuperpowers（4,577スター）や、PRレビューを自動化するpr-agent（1,523スター）など、ソフトウェア開発の方法論をAIエージェントに適用するためのフレームワークが整備されつつある。（`obra/superpowers`、`The-PR-Agent/pr-agent`）

### 補足的な観察

- 言語分布ではTypeScript（5件）とPython（5件）が並び、Shell（2件）やRust（2件）などのシステム言語も混在。Markdownのみのリポジトリ（multica-ai/andrej-karpathy-skills）もランクインし、コードよりも設定・指示ファイルの重要性が増している
- スター数のトップはpingdotgg/t3code（16,782スター）で、AIエージェントのリモート管理というインフラ需要の高さを示唆。次いでthedotmack/claude-mem（8,726スター）、D4Vinci/Scrapling（8,372スター）が続く
- Claude Code関連のツールが全体の約7割を占め、エコシステムの中心がClaude Codeに置かれていることが明確。一方でCodex、Cursor、Grokなど複数プロバイダー対応を謳うツールも多く、マルチプロバイダー対応が標準になりつつある
- AIエージェント関連が主流の中、Hyprland（Waylandコンポジタ、1,413スター）やKronos（金融時系列予測、2,984スター）、Scrapling（Webスクレイピング、8,372スター）など、非エージェント系のニッチな技術も根強い人気を維持している

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 6 |
| TypeScript | 4 |
| Rust | 2 |
| Shell | 2 |
| C++ | 1 |
| CSS | 1 |
| Markdown | 1 |
| 不明 | 1 |

## Repository一覧

### 1. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)

> Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More

- Language: TypeScript
- Stars: 114,020
- Forks: 9,892
- Stars in 1週間: 8,726
- Category: AIエージェントメモリ
- Keywords: `永続メモリ` `コンテキスト圧縮` `Claude Code` `セッション管理` `MCP` `TypeScript`
- Summary source: README

#### README要約

- Claude CodeなどのAIエージェント向けに、セッションをまたいでコンテキストを永続化するメモリ圧縮システム。
- ツール使用の観察を自動記録し、AIで意味的に要約・圧縮して将来のセッションに関連コンテキストを注入する。
- Claude Code、OpenClaw、Codex、Gemini、Copilot、OpenCodeなど複数のエージェント環境で継続的な知識を維持したい開発者向け。
- npx claude-mem installまたはプラグインコマンドで導入。npmのグローバルインストールはSDKのみでフック登録されない点に注意。

---

### 2. [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios)

> Turn Claude Code into a full game dev studio — 49 AI agents, 72 workflow skills, and a complete coordination system mirroring real studio hierarchy.

- Language: Shell
- Stars: 36,121
- Forks: 4,756
- Stars in 1週間: 6,018
- Category: AI開発ツール
- Keywords: `Claude Code` `ゲーム開発` `AIエージェント` `ワークフロー自動化` `スタジオ階層` `テンプレート`
- Summary source: README

#### README要約

- Claude Codeの単一セッションを、実際のスタジオ階層を模したフルゲーム開発スタジオへと変換するテンプレート。
- 49の専門AIエージェント、74のワークフロースキル（スラッシュコマンド）、15の自動検証フック、14のコーディング規則で構成される。
- 個人開発者がAIと共にゲームを作る際に、設計レビューやQA、進行管理の構造を導入したい場合に適している。
- Git、Claude Code、Python 3、Bashが前提条件で、プロジェクトのルートフォルダで起動する必要がある。

---

### 3. [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

- Language: TypeScript
- Stars: 49,802
- Forks: 9,748
- Stars in 1週間: 16,782
- Category: AIエージェント管理ツール
- Keywords: `AIエージェント` `コントロールサーフェス` `Claude Code` `Codex` `リモート操作` `開発ツール`
- Summary source: README

#### README要約

- T3 Codeは、マシン上のAIエージェントを制御するための「エージェントハーネス・コントロールサーフェス」です。
- iOS/Androidモバイルアプリ、Webアプリ、Electronベースのデスクトップアプリから、Claude Code、Codex、Cursor、Grok Build、OpenCode、Antigravity、fxなどのエージェントを操作できます。
- 複数のAIコーディングエージェントを一元的に管理したい開発者や、リモート環境からエージェントを操作したいユーザーに適しています。
- 利用には各プロバイダーのCLIインストールと認証が必要で、プロジェクトは初期段階のためバグが含まれる可能性があります。

---

### 4. [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)

> Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows

- Language: Rust
- Stars: 11,801
- Forks: 453
- Stars in 1週間: 2,184
- Category: GitワークフローCLI
- Keywords: `git worktree` `AIエージェント` `並列開発` `CLI` `hooks` `Rust`
- Summary source: README

#### README要約

- WorktrunkはGit worktreeを管理するCLIツールで、AIエージェントの並列実行を目的に設計されている。
- ブランチ名でworktreeを操作でき、switch・list・merge・removeなどのコマンドで作成・切替・掃除を簡素化する。
- 複数のAIエージェントや並行変更を扱う開発者向けに、hooks、LLMコミット文生成、ビルドキャッシュ共有などを提供する。
- HomebrewやCargoなどで導入でき、シェル統合のため wt config shell install の実行が案内されている。

---

### 5. [Nutlope/hallmark](https://github.com/Nutlope/hallmark)

> Anti-AI-slop design skill for Claude Code, Cursor, and Codex.

- Language: CSS
- Stars: 49,624
- Forks: 2,632
- Stars in 1週間: 6,900
- Category: AIデザインツール
- Keywords: `Claude Code` `デザインスキル` `AI生成` `Webデザイン` `リント` `テーマ`
- Summary source: README

#### README要約

- Claude Code、Codex、Cursor、OpenCode向けのデザインスキルで、AI生成っぽく見えないWebページを作る。
- 50種類のテーマから3つを提案し、ページの目的に沿った構成を生成。実ブラウザで機械的な痕跡（見出し上の装飾、大文字ラベル等）をリントする。
- デザイン品質を重視する開発者や、AIツールでWebページを生成する際に独自性を保ちたいユーザー向け。
- npx skills add nutlope/hallmark -g でインストール。Node 18以降が必要で、ブラウザチェックにはpuppeteer-coreとChromeも必要。

---

### 6. [anthropics/skills](https://github.com/anthropics/skills)

> Public repository for Agent Skills

- Language: Python
- Stars: 188,172
- Forks: 22,197
- Stars in 1週間: 3,159
- Category: AIエージェント拡張
- Keywords: `Agent Skills` `Claude` `SKILL.md` `Anthropic` `ドキュメント生成` `Apache 2.0`
- Summary source: README

#### README要約

- Anthropicが公開するClaude向けAgent Skillsの公式リポジトリで、指示・スクリプト・リソースをまとめたフォルダ形式のスキルを収録している。
- 各スキルはSKILL.mdにYAMLフロントマターと指示を記述する自己完結型で、Claude Code・Claude.ai・APIから動的に読み込んで利用できる。
- ドキュメント作成（docx/pdf/pptx/xlsx）や開発・デザイン・エンタープライズ向けの実例を通じて、独自スキル作成を学びたい開発者やチームが対象。
- 多くはApache 2.0のオープンソースだがデモ・教育目的の提供であり、重要なタスクで使う前に自環境での十分なテストが必要。

---

### 7. [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)

> Open-source Grok Bot alternative with a virtual machine that bots can use

- Language: TypeScript
- Stars: 15,253
- Forks: 2,137
- Stars in 1週間: 6,395
- Category: AIエージェントプラットフォーム
- Keywords: `オープンソース` `AIボット` `ローカルファースト` `チャットアプリ` `Grok Bot代替` `マルチエージェント`
- Summary source: README

#### README要約

- OpenMausBotは、Grok BotにインスパイアされたオープンソースのAIボットチーム管理チャットアプリです。
- 各ボットはClaudeやCodexなどのローカルCLIエージェント上で動作し、独自のモデル、クラウドコンピュータ、接続アプリを持ちます。
- ローカルファースト設計で、データは`~/.openmausbot`に保存され、macOS、Windows、Ubuntu向けに提供されています。
- 導入はダウンロード可能なインストーラーから行い、ホスト制御は明示的なオプトインが必要で、Ubuntu Waylandでは現在無効です。

---

### 8. [pbakaus/impeccable](https://github.com/pbakaus/impeccable)

> The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships.

- Language: Rust
- Stars: 104,810
- Forks: 6,227
- Stars in 1週間: 8,172
- Category: AIデザインツール
- Keywords: `デザイン語彙` `AIスロップ検出` `コーディングエージェント` `UIレビュー` `デザインコマンド` `アクセシビリティ監査`
- Summary source: README

#### README要約

- コーディングエージェント向けのデザイン語彙ツールで、AI生成UIのありがちな「スロップ」を出荷前に検出・改善する。
- bolderやpolish等の24コマンドでデザインを指示し、critiqueとauditでレビュー、62の決定的ルールでLLM不要の検出を行う。
- Claude Code、Cursor、Codex CLI等20以上のコーディングツール利用者が対象で、既存UIの改善や新規ページ構築に使う。
- npx impeccable installで導入し、/impeccable initで初期化。ライブモードはローカル専用で本番環境への注入は禁止。

---

### 9. [obra/superpowers](https://github.com/obra/superpowers)

> An agentic skills framework & software development methodology that works.

- Language: Shell
- Stars: 313,607
- Forks: 27,897
- Stars in 1週間: 4,577
- Category: AI開発手法フレームワーク
- Keywords: `コーディングエージェント` `スキルフレームワーク` `TDD` `サブエージェント` `開発方法論` `プラグイン`
- Summary source: README

#### README要約

- コーディングエージェント向けのソフトウェア開発方法論で、組み合わせ可能なスキル群と初期指示の上に構築されている。
- 要件の聞き出し・設計承認・実装計画作成を経て、サブエージェント駆動開発でタスクを実行し、TDD・YAGNI・DRYを重視する。
- Claude Code、Codex、Cursor、Gemini CLIなど多数のコーディングエージェント利用者が対象で、各ハーネスごとにプラグインとして導入する。
- インストール方法はハーネスごとに異なり、複数利用時は個別導入が必要。ライセンスはMITで、オプションのテレメトリは環境変数で無効化できる。

---

### 10. [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)

> DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.

- Language: Python
- Stars: 55,929
- Forks: 6,845
- Stars in 1週間: 4,588
- Category: AI学習支援ツール
- Keywords: `AIチューター` `RAG` `個別最適化学習` `デスクトップアプリ` `オープンソース` `Python`
- Summary source: README

#### README要約

- DeepTutorは、生涯にわたる個別最適化学習を提供するオープンソースのAIチューターアプリケーションです。
- RAG技術を基盤とし、ドキュメントのインデックス作成、ナレーション付き動画レッスン、Ankiやカレンダーへのエクスポート、多様なAIプロバイダーとの連携機能を備えています。
- 個人の学習者から研究者まで幅広いユーザーを対象とし、デスクトップ環境での利用を想定しています。
- macOSおよびWindows向けのインストーラーが提供されており、Apache License 2.0の下で公開されています。

---

### 11. [hyprwm/Hyprland](https://github.com/hyprwm/Hyprland)

> Hyprland is an independent, highly customizable, dynamic tiling Wayland compositor that doesn't sacrifice on its looks.

- Language: C++
- Stars: 40,446
- Forks: 2,167
- Stars in 1週間: 1,413
- Category: Waylandコンポジタ
- Keywords: `Wayland` `タイリング` `カスタマイズ` `アニメーション` `プラグイン` `C++`
- Summary source: README

#### README要約

- Hyprlandは、見た目を犠牲にしない100%独立した動的タイリングWaylandコンポジタです。
- グラデーション境界、ブラー、アニメーション、グロー、シャドウなどの視覚効果と、強力なプラグインサポート、ソケットベースIPC、カスタムベジェ/スプリングカーブによるアニメーションを提供します。
- 高度なカスタマイズ性を求めるLinuxユーザー、ゲーマー（ティアリングサポート）、開発者向けで、Dwindle、Master、MonocleなどのレイアウトやLuaによるカスタムレイアウトをサポートします。
- 設定は保存時に即座にリロードされ、wlrootsやlibwestonなどの既存ライブラリに依存せず、高速で活発な開発が行われています。

---

### 12. [jakubkrehel/skills](https://github.com/jakubkrehel/skills)

> A collection of agent skills that help you build great interfaces.

- Language: Markdown
- Stars: 11,291
- Forks: 437
- Stars in 1週間: 1,921
- Category: UI/UXデザインツール
- Keywords: `UIデザイン` `アクセシビリティ` `タイポグラフィ` `カラーシステム` `レイアウト` `エージェントスキル`
- Summary source: README

#### README要約

- 優れたインターフェース構築を支援するエージェントスキルのコレクション。
- UI、タイポグラフィ、カラー、アクセシビリティ、レイアウト、ライティングなどをレビュー・改善する複数のスキルを提供。
- デザイナーや開発者が、画面やコンポーネントの品質を向上させたい場合に活用できる。
- npxコマンドやClaude Codeプラグインとしてインストール可能。

---

### 13. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)

> World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.

- Language: Python
- Stars: 77,697
- Forks: 10,342
- Stars in 1週間: 4,405
- Category: AI動画制作システム
- Keywords: `動画制作` `AIエージェント` `パイプライン` `Remotion` `AGPLv3` `Python`
- Summary source: README

#### README要約

- AIコーディングアシスタントを本格的な動画制作スタジオに変える、オープンソースのエージェント型動画制作システム。
- 12の制作パイプラインと100以上のツールを備え、リサーチ・脚本・アセット生成・編集・最終合成までをエージェントが統括する。
- Claude CodeやCursorなどのAIアシスタント利用者が、自然言語の指示や参照動画から短編・予告編・ドキュメンタリー等を制作できる。
- Python製でAGPLv3ライセンス。Backlotボードで進行とコストを可視化し、ストーリーボード承認ゲートでレンダリング前に品質を確認できる。

---

### 14. [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent)

> 🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.

- Language: Python
- Stars: 15,302
- Forks: 2,129
- Stars in 1週間: 1,523
- Category: AIコードレビューツール
- Keywords: `AIコードレビュー` `PR自動化` `GitHub Actions` `LLM` `オープンソース` `CLI`
- Summary source: README

#### README要約

- PR-Agentは、Qodoからコミュニティに移管されたオープンソースのAIコードレビューエージェントです。
- PRへのコメントやCLIから /review・/improve・/describe・/ask などのツールを実行し、単一のLLM呼び出しで高速かつ低コストに動作します。
- GitHub・GitLab・Bitbucket・Azure DevOps・Giteaに対応し、GitHub Actions・Docker・CLI・セルフホストなど多様な導入方法を持つ開発チーム向けです。
- pipまたはGitHub Actionで導入でき、OpenAI等のAPIキーが必要です。Docker Hubは0.34.2以降 pragent/pr-agent 名前空間に移行しています。

---

### 15. [nightly-labs/openbot](https://github.com/nightly-labs/openbot)

> A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.

- Language: TypeScript
- Stars: 6,053
- Forks: 620
- Stars in 1週間: 1,808
- Category: AIエージェントワークスペース
- Keywords: `AIエージェント` `ローカルファースト` `Codex` `Claude` `マルチエージェント` `デスクトップアプリ`
- Summary source: README

#### README要約

- OpenBotは、Codex、Claude、GrokなどのAIエージェントをローカルファーストのデスクトップ環境で永続的に動作させるワークスペースアプリです。
- 各エージェントに専用ワークスペースと会話を持たせ、タスクキュー、ファイル転送、埋め込みブラウザ、エージェント間メッセージングを1つのアプリで提供します。
- 複数のAIプロバイダーを切り替えて使いたい開発者や、AIエージェント同士を連携させたいユーザー向けのツールです。
- エージェントは完全アクセス権限で動作し確認なしにファイル操作やコマンド実行を行うため、信頼できるタスクのみ実行しバックアップを取る必要があります。

---

### 16. [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)

> 🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev

- Language: Python
- Stars: 98,841
- Forks: 10,352
- Stars in 1週間: 8,372
- Category: Webスクレイピングフレームワーク
- Keywords: `Python` `Webスクレイピング` `ステルスブラウザ` `プロキシローテーション` `MCPサーバー` `クローラー`
- Summary source: README

#### README要約

- Scraplingは、単一のHTTPリクエストから大規模クロールまでを1つのライブラリで扱えるPython製Webスクレイピングフレームワークです。
- 高速HTTPリクエスト、ステルスブラウザ、JavaScriptレンダリング、Cloudflare Turnstile対応、CSS/XPath/正規表現による解析、Markdown出力などを備えます。
- 並行スパイダー、プロキシローテーション、自動リトライ、一時停止/再開、JSON/JSONL/CSV/XMLエクスポートを提供し、AIエージェント向けMCPサーバーやCLIからも利用できます。
- pipでインストールでき、ブラウザフェッチャー利用時はscrapling installが必要です。教育・研究目的の提供で、利用時は法規制やサイトの利用規約・robots.txtの遵守が求められます。

---

### 17. [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)

> A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls.

- Language: 不明
- Stars: 230,288
- Forks: 22,915
- Stars in 1週間: 3,671
- Category: AIコーディング支援ガイドライン
- Keywords: `Claude Code` `CLAUDE.md` `Andrej Karpathy` `LLMコーディング` `プロンプトガイドライン` `Cursor`
- Summary source: README

#### README要約

- Andrej KarpathyのLLMコーディングの落とし穴に関する観察から導出された、Claude Codeの動作を改善する単一のCLAUDE.mdファイル。
- 「コーディング前に考える」「シンプルさ優先」「外科的変更」「目標駆動実行」の4原則で、誤った仮定・過剰な複雑化・無関係な編集を防ぐ。
- Claude CodeやCursorを使う開発者が、AIエージェントによる不要な変更や過剰設計を減らし、検証可能な成果を得るために利用する。
- Claude Codeプラグインとしてインストールするか、curlでCLAUDE.mdを取得・既存ファイルに追記する。些細なタスクでは完全な厳密さは不要との注意あり。

---

### 18. [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)

> Kronos: A Foundation Model for the Language of Financial Markets

- Language: Python
- Stars: 47,069
- Forks: 7,781
- Stars in 1週間: 2,984
- Category: 金融時系列予測モデル
- Keywords: `基盤モデル` `K線予測` `Transformer` `OHLCV` `ファインチューニング` `オープンソース`
- Summary source: README

#### README要約

- Kronosは金融市場のK線（ローソク足）データに特化した、初のオープンソース基盤モデルです。
- 専用トークナイザーでOHLCVデータを離散トークン化し、自己回帰Transformerで予測を行う2段階の仕組みを採用しています。
- 金融時系列予測を行う研究者やクオンツ開発者向けで、Hugging Faceからモデルを読み込み数行のコードで予測が可能です。
- Python 3.10以上でpipにより導入でき、Kronos-smallとbaseはコンテキスト長512の制限があるため入力長に注意が必要です。

---
