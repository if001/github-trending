+++
title = 'GitHub Trending 1週間レポート (All) - 2026/09/11'
date = 2026-09-11T22:59:43.634Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月11日 22:59:43
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 23
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェント向けの「スキル／プラグイン」がトレンドを席巻し、出力改善・コンテキスト最適化・図解生成などエージェントの振る舞いを制御する拡張エコシステムが急成長している。

- 一覧の大半がClaude CodeやCodexなどのAIコーディングエージェント向けスキル・プラグイン・MCPサーバーであり、エージェント拡張が今期の中核テーマとなっている。
- mattpocock/skills（12,356スター）、tt-a1i/archify（11,958スター）、DietrichGebert/ponytail（11,638スター）、ayghri/i-have-adhd（10,215スター）など、エージェントの出力品質や振る舞いを改善するスキル系リポジトリが1万スター超えを記録している。
- OpenAI公式がpluginsとskills（非推奨化済み）の2リポジトリでランクインしており、スキルからプラグインへの移行というエコシステムの変化がうかがえる。
- 図解生成（archify、diagram-design）や動画レンダリング（hyperframes）など、エージェントに視覚的アウトプットを生成させるツールが複数登場している。
- AIエージェント関連以外では、fmtlib/fmt（C++）、bilawalsidhu/gods-eye-view（3D可視化）、Tencent/WeKnora（RAG）などが少数派としてランクインしている。

### 主なテーマ

- **エージェントの出力・振る舞い制御スキル**: AIコーディングエージェントの出力を簡潔にしたり、過剰なコード生成を抑制したりするスキルが高いスターを獲得している。ayghri/i-have-adhdはADHDフレンドリーな出力形式を強制し10,215スター、DietrichGebert/ponytailは「最も怠惰なシニア開発者」の思考でコード最小化を図り11,638スター、blader/humanizerはAI生成文の人間化で5,224スターを集めた。（`ayghri/i-have-adhd`、`DietrichGebert/ponytail`、`blader/humanizer`）
- **実務向けスキル集・エージェントハーネス**: TDDやデバッグなど実践的な開発ワークフローをスキル化したmattpocock/skillsが12,356スターで最高値を記録。affaan-m/ECCは68エージェント・291スキルを統合するハーネス最適化システムで9,257スター、ruvnet/rufloはマルチエージェント連携ハーネスとして1,694スターを獲得し、エージェントの開発プロセス全体を体系化する動きが見られる。（`mattpocock/skills`、`affaan-m/ECC`、`ruvnet/ruflo`、`humanlayer/skills`）
- **エージェントによる視覚アウトプット生成**: tt-a1i/archifyはアーキテクチャ図を自己完結型HTMLで生成し11,958スター、cathrynlavery/diagram-designは38種のエディトリアル図表をHTML+SVGで出力し7,329スター、heygen-com/hyperframesはHTMLからMP4動画をレンダリングし4,896スターと、エージェントに図解や動画を作らせるツールが複数ランクインした。（`tt-a1i/archify`、`cathrynlavery/diagram-design`、`heygen-com/hyperframes`）
- **コンテキスト・メモリ最適化とプラットフォーム連携**: mksglu/context-modeはツール出力を98%削減しセッションを永続化するMCPサーバーで1,619スター、ChromeDevTools/chrome-devtools-mcpは公式のブラウザ制御MCPで791スター、every-app/open-seoはMCP経由でSEOデータをエージェントに提供する。エージェントのコンテキスト管理と外部ツール接続の基盤整備が進んでいる。（`mksglu/context-mode`、`ChromeDevTools/chrome-devtools-mcp`、`every-app/open-seo`、`microsoft/markitdown`）
- **公式プラグイン・スキルエコシステムの整備**: OpenAI公式のopenai/plugins（1,018スター）がCodexプラグインのサンプル集として登場する一方、openai/skills（1,490スター）は非推奨化されpluginsへの移行が案内されている。coreyhaineslavery/marketingskillsやjakubkrehel/skillsなどサードパーティのスキル集も登場し、エコシステムの標準化と多様化が同時に進行している。（`openai/plugins`、`openai/skills`、`coreyhaines31/marketingskills`、`jakubkrehel/skills`）

### 補足的な観察

- 言語分布はTypeScriptとJavaScriptが多数を占め、Python、Shell、Markdown、HTML、C++、Goが続く。スキル系はMarkdownやShellでも実装されており、必ずしもプログラミング言語に依存しない形式が普及している。
- スター数上位4件（mattpocock/skills、tt-a1i/archify、DietrichGebert/ponytail、ayghri/i-have-adhd）がすべて1万スター超えで、いずれもエージェント向けスキル・プラグインという点で傾向が鮮明である。
- Claude Codeへの言及が最も多く、Codex、Cursor、Gemini CLI、OpenCodeなど複数ハーネスへの対応を謳うリポジトリが目立ち、マルチプラットフォーム対応が標準になりつつある。
- AIエージェント関連以外では、fmtlib/fmt（C++フォーマット、920スター）、bilawalsidhu/gods-eye-view（3D地球儀、6,051スター）、Tencent/WeKnora（Go製RAG、815スター）、THU-MAIC/OpenMAIC（AI教育、4,174スター）などが散見されるが、全体の主流ではない。

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 7 |
| JavaScript | 6 |
| Python | 5 |
| C++ | 1 |
| Go | 1 |
| HTML | 1 |
| Markdown | 1 |
| Shell | 1 |

## Repository一覧

### 1. [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)

> A skill to stop your coding agent from burying the answer. ADHD-friendly output.

- Language: Python
- Stars: 41,637
- Forks: 2,360
- Stars in 1週間: 10,215
- Category: AIエージェント拡張
- Keywords: `ADHD` `コーディングエージェント` `Claude Code` `プロンプト改善` `出力最適化` `スキル`
- Summary source: README

#### README要約

- コーディングエージェントの出力をADHDフレンドリーに変えるスキル/プラグイン。
- 回答を先頭に出し、手順を番号付きで示し、余計な前置きや締めを排除する10のルールを適用する。
- Claude Codeなどのコーディングアシスタントを使う開発者で、簡潔で行動指向の出力を求める人向け。
- GitHubリポジトリからインストールし、SKILL.mdを編集してカスタマイズ可能。MITライセンス。

---

### 2. [affaan-m/ECC](https://github.com/affaan-m/ECC)

> The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.

- Language: JavaScript
- Stars: 256,497
- Forks: 38,379
- Stars in 1週間: 9,257
- Category: AI開発ツール
- Keywords: `AIエージェント` `Claude Code` `スキル` `メモリ` `セキュリティスキャン` `開発ワークフロー`
- Summary source: README

#### README要約

- ECCはClaude CodeなどのAIコーディングエージェントに、計画→テスト→実装→レビュー→検証→記憶→改善の一貫した開発プロセスを組み込むエージェントハーネス最適化システム。
- 68のエージェント、291のスキル、94のコマンド、フック、メモリ、継続学習、AgentShieldセキュリティスキャンを提供し、Claude Codeを中心にCodex、Cursor、OpenCodeなど複数ハーネスに対応する。
- AIエージェントを使って開発するエンジニアやチームが、プロンプトごとにプロセスを再構築せず、再利用可能なスキルとワークフローで開発品質を高める用途に向く。
- 導入はnpx ecc-universal@2.2.1 setupのガイド付きセットアップが推奨で、Node.js 18以上が必要。Claudeプラグイン利用にはGitとClaude Code 2.1以上が必要で、公式チャネル以外からのインストールは避けるよう警告されている。

---

### 3. [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)

> Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.

- Language: JavaScript
- Stars: 135,799
- Forks: 7,274
- Stars in 1週間: 11,638
- Category: AIコーディング支援ツール
- Keywords: `AIエージェント` `コード最小化` `YAGNI` `Claude Code` `プラグイン` `過剰設計防止`
- Summary source: README

#### README要約

- AIエージェントに「最も怠惰なシニア開発者」の思考を注入し、過剰なコード生成を抑制するプラグイン。
- 7段階の「はしご」ルールで、既存コード・標準ライブラリ・ネイティブ機能を優先し、最小限のコードのみを書くよう強制する。
- Claude Code、Codex、GitHub Copilot CLI、OpenCode、Gemini CLIなどのAIコーディングツール利用者が対象。
- 各種プラグインコマンドで導入可能。Claude Code/Codex版はNode.jsのライフサイクルフックを使用するため、nodeがPATHに必要。

---

### 4. [humanlayer/skills](https://github.com/humanlayer/skills)

- Language: TypeScript
- Stars: 3,768
- Forks: 110
- Stars in 1週間: 2,609
- Category: Claude Codeスキル集
- Keywords: `Claude Code` `スキル` `HumanLayer` `エージェントワークフロー` `CLAUDE.md` `React`
- Summary source: README

#### README要約

- HumanLayerが提供するClaude Code用スキル集のリポジトリ。
- CLAUDE.md改善、React prop型の絞り込み、エージェントループ構築、制御ループ設計、図解説明の5スキルを収録。
- Claude Codeを使う開発者がプロジェクトの指示遵守やコード品質、エージェントワークフロー構築に活用する。
- npx skills add humanlayer/skills --skill SKILLNAME で導入し、プロジェクト内でスラッシュコマンドとして実行する。

---

### 5. [openai/plugins](https://github.com/openai/plugins)

> OpenAI Plugins

- Language: JavaScript
- Stars: 6,441
- Forks: 848
- Stars in 1週間: 1,018
- Category: プラグインサンプル集
- Keywords: `Codex` `プラグイン` `OpenAI` `マニフェスト` `マーケットプレイス` `開発ツール`
- Summary source: README

#### README要約

- OpenAIのCodexプラグインのキュレーションされたサンプル集を提供するリポジトリです。
- 各プラグインはplugins/<name>/ディレクトリに配置され、必須の.codex-plugin/plugin.jsonマニフェストとオプションのskills/、.app.json、.mcp.jsonなどの補助ファイルを含みます。
- Figma、Notion、iOS/macOS/Webアプリ開発、Expo、Netlifyなどの実用的なプラグイン例を通じて、開発者がCodexプラグインの構造と実装方法を学ぶのに役立ちます。
- デフォルトのマーケットプレイスは.agents/plugins/marketplace.jsonにあり、APIキーログインユーザー向けに別途api_marketplace.jsonが用意されています。

---

### 6. [tt-a1i/archify](https://github.com/tt-a1i/archify)

> Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.

- Language: JavaScript
- Stars: 58,505
- Forks: 3,815
- Stars in 1週間: 11,958
- Category: 開発者ツール
- Keywords: `アーキテクチャ図` `AIエージェント` `システム可視化` `JSON IR` `インタラクティブ` `ダイアグラム生成`
- Summary source: README

#### README要約

- コードベースやシステム記述から、チャット内で直接インタラクティブなシステムマップを生成するNode.js製レンダリング・検証システム。
- エージェントが型付きJSON IRを生成し、Archifyがそれを決定論的にHTML/SVGへコンパイルする。5種類の図タイプ、4つのプリセット、ダーク/ライトテーマを備える。
- Cursor、Claude Code、Codex CLI、OpenCodeなどのAIコーディングエージェントユーザーが、アーキテクチャの可視化や変更レビューに利用する。
- npx skills addコマンドでインストール可能。リポジトリ不要でシステム記述から開始でき、自己完結型HTMLに加えPNG/SVG/WebM形式でエクスポートできる。

---

### 7. [mksglu/context-mode](https://github.com/mksglu/context-mode)

> Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.

- Language: TypeScript
- Stars: 22,193
- Forks: 1,600
- Stars in 1週間: 1,619
- Category: AI開発ツール
- Keywords: `MCP` `コンテキスト最適化` `Claude Code` `セッション管理` `TypeScript` `FTS5`
- Summary source: README

#### README要約

- AIコーディングエージェントのコンテキストウィンドウ消費を最適化するMCPサーバー。
- ツール出力をサンドボックス化して最大98%削減し、セッション履歴をSQLiteとFTS5/BM25検索で永続化する。
- Claude CodeやGemini CLIなど17プラットフォームに対応し、フックとMCPツールでルーティングを強制する。
- Claude Codeではプラグインコマンドで導入可能。ライセンスはElastic License 2.0で、ホステッドサービスとしての提供は禁止されている。

---

### 8. [mattpocock/skills](https://github.com/mattpocock/skills)

> Skills for Real Engineers. Straight from my .agents directory.

- Language: Shell
- Stars: 259,754
- Forks: 21,900
- Stars in 1週間: 12,356
- Category: AIエージェント用スキル集
- Keywords: `Claude Code` `Codex` `エージェントスキル` `TDD` `grill-me` `プロンプトワークフロー`
- Summary source: README

#### README要約

- Matt Pocock氏が日々の実務で使うAIコーディングエージェント向けスキル集で、バイブコーディングではなく実践的なエンジニアリングを支援する。
- 要件のすり合わせを行うgrill系スキル、TDDやデバッグ、アーキテクチャ改善などのスキルを小さく組み合わせ可能な形で提供し、任意のモデルで動作する。
- Claude CodeやCodexなどのコーディングエージェントを使う開発者が、エージェントとの認識ずれや冗長さ、品質問題を解決するために利用する。
- Claude Codeプラグインかnpx skills addで導入し、リポジトリごとに/setup-matt-pocock-skillsを一度実行する必要がある。両方の方法で入れるとスキルが重複する点に注意。

---

### 9. [blader/humanizer](https://github.com/blader/humanizer)

> Agent skill that removes signs of AI-generated writing from text

- Language: Python
- Stars: 46,912
- Forks: 3,830
- Stars in 1週間: 5,224
- Category: AI文章校正ツール
- Keywords: `AI文章検出` `リライト` `エージェントスキル` `Markdown` `Claude Code` `自然言語処理`
- Summary source: README

#### README要約

- AIが生成したような文章を、内容を変えずに人間が書いたように書き換えるエージェントスキル。
- 25のパターンでAI特有の表現を検出し、事実を捏造せずにリライトを行う。
- AI生成テキストを自然な文章に修正したいライターや開発者向け。
- Skills CLIやClaude Codeプラグインで導入可能で、Markdownベースのため様々なエージェントで動作する。

---

### 10. [openai/skills](https://github.com/openai/skills)

> Skills Catalog for Codex

- Language: Python
- Stars: 26,915
- Forks: 1,803
- Stars in 1週間: 1,490
- Category: AIエージェントツール
- Keywords: `Codex` `Agent Skills` `AIエージェント` `非推奨` `プラグイン` `スキルカタログ`
- Summary source: README

#### README要約

- AIエージェントが特定のタスクを実行するために利用できる指示、スクリプト、リソースをまとめたフォルダ形式のスキルをカタログ化したリポジトリです。
- システムスキルは自動インストールされ、キュレーション済みや実験的なスキルはCodex内の$skill-installerコマンドで追加できます。
- Codexを利用する開発者やチームが、繰り返し可能な方法で特定のタスクを完了させるための機能拡張として利用します。
- このリポジトリは非推奨となっており、現在はOpenAI Pluginsリポジトリの利用が推奨されています。スキルインストール後はCodexの再起動が必要です。

---

### 11. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 49,008
- Forks: 4,484
- Stars in 1週間: 4,896
- Category: 動画レンダリングフレームワーク
- Keywords: `HTML to Video` `MP4レンダリング` `AIエージェント` `TypeScript` `CLI` `アニメーション`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして動作する。
- Claude Code、Cursor、Gemini CLI、Codexなどのコーディングエージェントを使う開発者や、動画・デッキ・モーショングラフィックを作成したいユーザー向け。
- Node.js 22以上が必要で、npmパッケージとして提供され、Apache 2.0ライセンスで公開されている。

---

### 12. [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)

> 38 editorial diagram types for Claude Code, Codex, and Pi. Self-contained HTML + SVG. No shadows. No Mermaid slop.

- Language: HTML
- Stars: 38,455
- Forks: 2,437
- Stars in 1週間: 7,329
- Category: AIエージェント用図表生成スキル
- Keywords: `Claude Code` `図表生成` `HTML+SVG` `エディトリアルデザイン` `AIスキル` `セルフコンテインド`
- Summary source: README

#### README要約

- Claude Code、Codex、PiなどのAIエージェント向けに、39種類のエディトリアル品質の図表を生成するスキル。
- 自己完結型のHTML+SVGで出力され、ビルド不要・JavaScript不要でブラウザで直接開ける。
- Webサイトを読み取ってブランドに合わせたデザインを60秒で適用し、draw.ioやMermaid、Excalidrawのソースも再描画可能。
- Figma不要で、ミニマルライト・ミニマルダーク・フルエディトリアルの3つの静的バリアントを提供。オプションでアクセシブルなモーションも利用可能。

---

### 13. [fmtlib/fmt](https://github.com/fmtlib/fmt)

> A modern formatting library

- Language: C++
- Stars: 25,740
- Forks: 3,061
- Stars in 1週間: 920
- Category: C++フォーマットライブラリ
- Keywords: `C++` `フォーマット` `std::format` `型安全` `高速` `MITライセンス`
- Summary source: README

#### README要約

- C stdioやC++ iostreamsに代わる、高速で安全なオープンソースのフォーマットライブラリである。
- Python風の書式文字列、位置引数、C++20 std::format/C++23 std::printの実装、Dragonboxによる浮動小数点整形、ユーザー定義型の拡張に対応する。
- 型安全性とコンパイル時の書式チェックを求めるC++開発者の、文字列生成・出力・ログ・ファイル書き込みなどに適する。
- 外部依存なしのMITライセンスで、最小構成は3ファイル、FMT_HEADER_ONLYでヘッダオンリー化も可能である。

---

### 14. [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)

> A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.

- Language: JavaScript
- Stars: 26,976
- Forks: 5,517
- Stars in 1週間: 6,051
- Category: 3D地理空間可視化
- Keywords: `3D地球儀` `リアルタイムデータ` `衛星シミュレーター` `音声制御` `オープンソース` `Cesium`
- Summary source: README

#### README要約

- ブラウザ上で動作するスパイ衛星シミュレーターで、公開データを用いたリアルタイムの空間情報をフォトリアリスティックな3D地球儀に表示する。
- 航空機、船舶、衛星、地震、交通、公開カメラのライブデータを統合し、コックピット視点、音声制御、センサー風エフェクトなどを備える。
- 公開データを探索・可視化したいユーザーや、独自レイヤーを追加して拡張したい開発者を対象とする。
- APIキーなしで起動可能で、PinokioまたはNode.js環境でローカル実行できる。フォトリアリスティック3DにはCesium ionトークン等が必要。

---

### 15. [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

> Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.

- Language: JavaScript
- Stars: 49,623
- Forks: 7,547
- Stars in 1週間: 2,711
- Category: AIエージェント用マーケティングスキル集
- Keywords: `AIエージェント` `マーケティング` `CRO` `SEO` `コピーライティング` `Claude Code`
- Summary source: README

#### README要約

- Claude CodeやAIエージェント向けのマーケティングスキル集で、CRO・コピーライティング・SEO・分析・グロースエンジニアリングを支援する。
- スキルはMarkdownファイルで構成され、product-marketingを基盤に各スキルが相互参照しながらフレームワークやベストプラクティスを適用する。
- 技術系マーケターや創業者が、Claude Code・OpenAI Codex・Cursor・WindsurfなどAgent Skills仕様対応エージェントで利用する。
- MITライセンスで無料提供され、プロジェクトにスキルを追加するか /cro などのコマンドで直接呼び出して使う。

---

### 16. [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

> Chrome DevTools for coding agents

- Language: TypeScript
- Stars: 51,676
- Forks: 3,632
- Stars in 1週間: 791
- Category: 開発者ツール
- Keywords: `MCP` `Chrome DevTools` `ブラウザ自動化` `パフォーマンス分析` `Puppeteer` `AIエージェント`
- Summary source: README

#### README要約

- コーディングエージェントがChromeブラウザを制御・検査できるようにするMCPサーバー。
- パフォーマンストレースの記録、ネットワーク解析、スクリーンショット取得、Puppeteerによる自動化を提供する。
- Claude、Cursor、CopilotなどのAIコーディングアシスタントを利用する開発者向け。
- Node.js LTSとChrome安定版が必要で、npxで起動。ブラウザ内容がMCPクライアントに公開される点に注意。

---

### 17. [microsoft/markitdown](https://github.com/microsoft/markitdown)

> Python tool for converting files and office documents to Markdown.

- Language: Python
- Stars: 182,673
- Forks: 13,428
- Stars in 1週間: 4,579
- Category: ドキュメント変換ツール
- Keywords: `Markdown変換` `Python` `LLM` `Office文書` `CLI` `プラグイン`
- Summary source: README

#### README要約

- MarkItDownは、さまざまなファイルをMarkdownに変換する軽量なPythonユーティリティです。
- PDF、Office文書、画像、音声、HTMLなどを構造を保ちながらMarkdown化し、CLIやPython API、プラグインで利用できます。
- LLMやテキスト分析パイプライン向けの前処理ツールとして、ドキュメント変換を必要とする開発者に適しています。
- Python 3.10以上が必要で、pipでインストール可能ですが、信頼できない入力のサニタイズなどセキュリティ上の注意があります。

---

### 18. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

> The agent that grows with you

- Language: Python
- Stars: 244,589
- Forks: 50,696
- Stars in 1週間: 3,769
- Category: AIエージェント
- Keywords: `自己改善` `マルチプラットフォーム` `スキル学習` `LLMプロバイダー` `サーバーレス` `オープンソース`
- Summary source: README

#### README要約

- Nous Researchが開発した自己改善型AIエージェントで、経験からスキルを作成し、使用しながら改善し、セッションをまたいでユーザー理解を深める学習ループを内蔵している。
- TelegramやDiscordなど複数のメッセージングプラットフォームとCLIからアクセス可能で、FTS5セッション検索、Honchoユーザーモデリング、スケジュール自動化、サブエージェント並列処理を備える。
- 開発者やパワーユーザー向けで、$5のVPSからGPUクラスタ、サーバーレス環境まで幅広いインフラで動作し、Nous PortalやOpenRouterなど任意のLLMプロバイダーを選択できる。
- curlやPowerShellのワンライナーでインストール可能だが、Windowsではuv.exeがアンチウイルスに誤検知される場合があり、除外設定が必要になることがある。

---

### 19. [ruvnet/ruflo](https://github.com/ruvnet/ruflo)

> 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated

- Language: TypeScript
- Stars: 72,130
- Forks: 8,534
- Stars in 1週間: 1,694
- Category: AIエージェントオーケストレーション
- Keywords: `エージェントハーネス` `スウォーム連携` `自己学習メモリ` `MCPサーバー` `Claude Code` `プラグイン`
- Summary source: README

#### README要約

- Claude CodeやCodex向けのエージェントメタハーネスで、モデルにツール・メモリ・ループ・制御を与える実行レイヤー。
- 100以上の専門エージェント、スウォーム連携、自己学習メモリ、マシン間フェデレーション通信、セキュリティガードレールを提供する。
- Claude Code上で複数エージェントを協調させたい開発者や、自律ワークフロー・RAG・コスト管理を本番運用したいチーム向け。
- npx ruflo initで導入でき、軽量なプラグイン版とフル機能のCLI版の2経路がある。Windowsではnpx経路を使い、ライセンスはMIT。

---

### 20. [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)

> Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click

- Language: TypeScript
- Stars: 35,877
- Forks: 5,695
- Stars in 1週間: 4,174
- Category: AI教育プラットフォーム
- Keywords: `マルチエージェント` `インタラクティブ教室` `AI学習` `コース生成` `TypeScript` `オープンソース`
- Summary source: README

#### README要約

- OpenMAICは、トピックやドキュメントからインタラクティブな教室体験を生成するオープンソースのAIプラットフォームです。
- マルチエージェントオーケストレーションにより、スライド、クイズ、シミュレーション、PBLを生成し、AI教師やAIクラスメートがリアルタイムで対話します。
- 教育者や学習者が、ワンクリックで没入型のマルチエージェント学習環境を構築し、資料からコースを作成する用途に適しています。
- Vercelでのデプロイが可能で、LLMプロバイダーのAPIキー設定が必要です。ライセンスはMITですが、一部のバンドルパッケージは異なるライセンスが適用されます。

---

### 21. [Tencent/WeKnora](https://github.com/Tencent/WeKnora)

> Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

- Language: Go
- Stars: 22,328
- Forks: 3,210
- Stars in 1週間: 815
- Category: LLMナレッジプラットフォーム
- Keywords: `RAG` `ReActエージェント` `自動Wiki` `文書理解` `マルチモーダル` `エンタープライズ`
- Summary source: README

#### README要約

- Tencent製のオープンソースLLMナレッジフレームワークで、文書をRAG・エージェント・自動Wiki化できる知識基盤に変換する。
- RAGによる高速Q&A、ReActエージェントによる複雑なタスク処理、Wikiモードでの自動知識ベース構築の3つの中核機能を持つ。
- 企業向けの文書理解・意味検索・自律推論を必要とするユーザーに適し、Feishu/GitLab/Notion等からのデータ同期や10+形式の文書解析に対応。
- Docker/E2B/CubeサンドボックスやマルチワークスペースRBACを備え、本番環境では内部ネットワークへのデプロイとファイアウォール設定が推奨される。

---

### 22. [jakubkrehel/skills](https://github.com/jakubkrehel/skills)

> A collection of agent skills that help you build a great interface.

- Language: Markdown
- Stars: 6,254
- Forks: 219
- Stars in 1週間: 1,103
- Category: デザイン支援ツール
- Keywords: `UI` `タイポグラフィ` `カラー` `アクセシビリティ` `レイアウト` `エージェントスキル`
- Summary source: README

#### README要約

- 優れたインターフェース構築を支援するエージェントスキルのコレクション。
- UI、タイポグラフィ、カラー、アクセシビリティ、レイアウト、プロダクトライティングなどの領域をカバーする複数のスキルを含む。
- インターフェースの品質向上を目指すデザイナーや開発者、デザインエンジニアリングに関心のあるユーザー向け。
- npx skills add jakubkrehel/skills コマンドでインストール可能。Claude Code プラグインとしても利用できる。

---

### 23. [every-app/open-seo](https://github.com/every-app/open-seo)

> Open source alternative to Semrush and Ahrefs

- Language: TypeScript
- Stars: 18,427
- Forks: 2,327
- Stars in 1週間: 1,679
- Category: SEOツール
- Keywords: `SEO` `オープンソース` `MCP` `AIエージェント` `セルフホスト` `DataForSEO`
- Summary source: README

#### README要約

- SemrushやAhrefsのオープンソース代替となる、従量課金型のセルフホスト可能なSEOツール。
- キーワード調査、ランクトラッキング、競合分析、バックリンク、サイト監査などのワークフローを備え、MCPサーバー経由でClaude CodeなどのAIエージェントと連携できる。
- 高価なSEOツールを避けたい個人やチーム、AIエージェントにSEOデータを使わせたい開発者向け。
- 利用にはDataForSEOのAPIキーが必要で、DockerまたはCloudflareでセルフホストでき、ホスト版は月額10ドル。

---
