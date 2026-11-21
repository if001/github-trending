+++
title = 'GitHub Trending 1週間レポート (All) - 2026/11/21'
date = 2026-11-21T01:59:01.679Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月21日 1:59:01
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 13
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> コーディングエージェント向けのスキル・MCPツールがランキングを席巻し、AIエージェントとの協働を前提とした開発基盤の整備が急速に進んでいる。

- 13件中9件以上がAIエージェント関連のツールやスキルであり、エージェント活用がトレンドの中心にある
- Claude Code、Cursor、Codexなど複数のコーディングエージェントに対応する「Agent Skills」形式のスキルが複数登場している
- GoogleChrome、ChromeDevTools、Meta、Alibabaなど大手企業発のエージェント対応ツールが上位に並ぶ
- 言語分布はTypeScriptが7件と圧倒的で、Pythonが3件、Go・Ruby・Objective-Cが各1件
- 最もスターを集めたのはdream-num/univerの7539で、AIエージェント連携を謳うOffice SDKである

### 主なテーマ

- **コーディングエージェント向けスキル・拡張エコシステム**: Agent Skillsオープン標準やMCPを通じて、Claude Code・Cursor・Codexなどのコーディングエージェントに機能を追加するスキルが多数ランクイン。Googleのstitch-skillsはデザイン自動化、last30days-skillはマルチプラットフォーム調査、claude-trading-skillsは投資ワークフロー、ffmpeg-skillはローカル動画編集と、用途は多岐にわたる。（`google-labs-code/stitch-skills`、`mvanhorn/last30days-skill`、`tradermonty/claude-trading-skills`、`kajisho5/ffmpeg-skill`）
- **エージェントのコード品質・レビュー支援**: AIエージェントが生成するコードの品質管理を支援するツールが台頭。GoogleChromeのmodern-web-guidance-srcは最新のWebベストプラクティスをエージェントに組み込み、Alibabaのopen-code-reviewはLLMと決定論的パイプラインのハイブリッドで行レベルのレビューを実現。backnotprop/plannotatorは人間がエージェントの作業をレビュー・注釈するワークスペースを提供する。（`GoogleChrome/modern-web-guidance-src`、`alibaba/open-code-review`、`backnotprop/plannotator`）
- **エージェントとアプリケーションをつなぐ基盤・プロトコル**: エージェントを実際のアプリケーションやブラウザに接続する基盤レイヤーが整備されつつある。ag-uiはエージェントとフロントエンド間の通信を標準化するイベントベースのプロトコル、chrome-devtools-mcpはエージェントがChromeブラウザを制御・検査するためのMCPサーバーを提供する。（`ag-ui-protocol/ag-ui`、`ChromeDevTools/chrome-devtools-mcp`）
- **AIエージェント対応を謳うプロダクト・デザイン基盤**: 人間とAIエージェントの双方が同じツールで構築できることを前提にしたプロダクトが登場。Metaのastryxは「agent ready」を掲げるデザインシステム、dream-num/univerは人とAIエージェントの両方にOffice機能を提供するSDKで、期間中最多の7539スターを獲得している。（`meta/astryx`、`dream-num/univer`）

### 補足的な観察

- 言語分布はTypeScriptが7件で過半数を占め、エージェント関連ツールの実装言語としてTypeScriptが主流になりつつある
- スター獲得数の上位はuniver（7539）、modern-web-guidance-src（5224）、open-code-review（4457）、astryx（4131）で、いずれも企業発またはエージェント対応を明示したプロジェクト
- AIと無関係なリポジトリはHermesEnabler（Apple Watch改造、582スター）とwe-promise/sure（個人資産管理、2476スター）のみで、スター数も下位に位置する
- Google関連（google-labs-code、GoogleChrome、ChromeDevTools）とMeta、Alibabaの大手企業発リポジトリが計5件あり、エージェント基盤への企業の本格参入がうかがえる

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 7 |
| Python | 3 |
| Go | 1 |
| Objective-C | 1 |
| Ruby | 1 |

## Repository一覧

### 1. [backnotprop/plannotator](https://github.com/backnotprop/plannotator)

> The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click.

- Language: TypeScript
- Stars: 13,911
- Forks: 1,390
- Stars in 1週間: 3,555
- Category: AI開発支援ツール
- Keywords: `AIエージェント` `コードレビュー` `プラン注釈` `フィードバック` `ローカルツール` `開発生産性`
- Summary source: README

#### README要約

- AIコーディングエージェント向けのローカル・ブラウザベースのレビューツールで、プランやコードの注釈・フィードバックをエージェントに直接送信できる。
- プラグインやフックを通じてエージェントと連携し、ドキュメントや差分のレビュー、HTMLアーティファクトへの注釈、ガイド付きレビューなどを提供する。
- Claude Code、Codex、Copilot CLIなど複数のAIエージェントを利用する開発者やチームが、エージェントの作業を効率的にレビュー・管理するのに適している。
- インストーラーでバイナリとエージェント設定を自動構成でき、Windows/macOS/Linuxに対応。データはローカルに保存され、共有機能は暗号化と7日間の有効期限付き。

---

### 2. [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)

> A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor.

- Language: TypeScript
- Stars: 11,052
- Forks: 1,409
- Stars in 1週間: 2,152
- Category: AIエージェントスキル
- Keywords: `Google Stitch` `Agent Skills` `MCP` `デザイン自動化` `コード生成` `TypeScript`
- Summary source: README

#### README要約

- Google Stitch向けのエージェントスキルとプラグインのコレクションで、Agent Skillsオープン標準に準拠している。
- デザイン生成・コード変換・ユーティリティの3つのプラグイン群を提供し、Stitch MCPサーバー経由でデザイン作業を自動化する。
- Codex、Claude Code、Cursor、Gemini CLIなどのコーディングエージェントユーザーが、UIデザインの生成やReact/React Nativeコンポーネントへの変換に利用する。
- 利用にはStitch MCPサーバーの設定が必須で、スキル間に依存関係があるため選択的インストール時は必要な依存関係をすべて含める必要がある。

---

### 3. [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)

> Keep your coding agent up to date with the latest web best practices

- Language: TypeScript
- Stars: 9,541
- Forks: 770
- Stars in 1週間: 5,224
- Category: 開発者ツール
- Keywords: `コーディングエージェント` `Webプラットフォーム` `ベストプラクティス` `CLI` `ブラウザ互換性` `レガシーパターン検出`
- Summary source: README

#### README要約

- コーディングエージェントに最新のWebプラットフォームの専門知識・ベストプラクティス・ブラウザ互換性データを組み込むスキルセット「Modern Web Guidance」のソースリポジトリ。
- CLI経由でガイドの検索・取得やコードベースのレガシーパターンスキャンを行い、エージェントのコンテキストに専門家監修のガイドラインを提供する。
- レガシーなコード生成を避けてモダンなブラウザAPI・パフォーマンス・アクセシビリティを活用したい開発者やコーディングエージェント利用者が対象。
- npx modern-web-guidance@latest install でインストールでき、Node.js 22以降が必要。匿名の利用統計が収集されるが DISABLE_TELEMETRY=1 でオプトアウト可能。

---

### 4. [alibaba/open-code-review](https://github.com/alibaba/open-code-review)

> Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

- Language: Go
- Stars: 54,797
- Forks: 4,523
- Stars in 1週間: 4,457
- Category: AIコードレビューツール
- Keywords: `コードレビュー` `LLMエージェント` `CLI` `Git diff` `CI/CD統合` `Alibaba`
- Summary source: README

#### README要約

- Alibaba発のAIコードレビューCLIツールで、Git diffを解析しLLMエージェント経由で行レベルの精密なレビューコメントを生成する。
- 決定論的パイプラインとLLMエージェントのハイブリッド構成で、ファイル選別・バンドル化・ルールマッチングを工学的に保証し、NPEやSQLインジェクション等の多言語ルールを内蔵。
- コードレビューの精度と効率を求める開発者やチーム向けで、Claude CodeやCursor等のエージェント連携、CI/CD統合、大規模コードベースの監査に対応。
- Git 2.41以上が必須で、npmまたはnpxで導入。ネイティブモードはOCR用モデルプロバイダー設定が必要だが、既存エージェントの認証を使う委譲モードも選択可能。

---

### 5. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)

> AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary

- Language: Python
- Stars: 71,465
- Forks: 6,336
- Stars in 1週間: 3,788
- Category: AIリサーチツール
- Keywords: `AIエージェント` `マルチプラットフォーム検索` `Reddit` `X` `Polymarket` `Claude Code`
- Summary source: README

#### README要約

- Reddit、X、YouTube、HN、Polymarketなど複数プラットフォームを横断検索し、直近30日の話題をAIエージェントが要約するスキル。
- 各ソースを並列検索し、アップボートやいいね、取引額など実際のエンゲージメントでスコアリングしてAIが1つのブリーフに統合する。
- 会議前の人物調査、営業前の企業リサーチ、旅行計画、開発前の課題把握など、最新の生の声を知りたいユーザー向け。
- Claude Codeやnpx経由でインストール可能。Reddit等は無設定で動作し、XやYouTube等はセットアップウィザードで有効化。MITライセンスでデータはローカル処理。

---

### 6. [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

> Chrome DevTools for coding agents

- Language: TypeScript
- Stars: 58,547
- Forks: 4,885
- Stars in 1週間: 3,306
- Category: 開発者ツール
- Keywords: `Chrome DevTools` `MCP` `ブラウザ自動化` `デバッグ` `パフォーマンス分析` `Puppeteer`
- Summary source: README

#### README要約

- コーディングエージェントがChromeブラウザを制御・検査するためのMCPサーバーおよびCLIツール
- パフォーマンストレースの記録、ネットワーク解析、スクリーンショット撮影、Puppeteerによる自動化を提供
- Claude、Cursor、CopilotなどのAIコーディングアシスタントを利用する開発者向け
- Node.js LTSとChrome安定版が必要で、ブラウザ内容がMCPクライアントに公開される点に注意

---

### 7. [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills)

> Claude Code skills for equity investors and traders — market analysis, technical charting, economic calendars, screeners, and trading strategy development.

- Language: Python
- Stars: 7,441
- Forks: 1,470
- Stars in 1週間: 3,471
- Category: トレーディングワークフローツールキット
- Keywords: `Claude Skills` `トレーディング` `リスク管理` `スイングトレード` `個人投資家` `ワークフロー`
- Summary source: README

#### README要約

- 時間の限られた個人投資家向けの、Claude Skillsベースのトレーディングワークフローツールキット。
- 市場レビュー、リスク管理、トレード計画、ジャーナリング、継続的改善を構造化するスキル群とワークフローマニフェストを提供する。
- 長期投資・ETF・配当株を中核とし、規律あるスイングトレードを衛星戦略とする投資家が対象で、売買判断のAIへの委託は目的としない。
- Claude WebアプリまたはClaude Codeにスキルを導入して使用し、APIキー不要のスターターパスもあるが、金融助言やシグナルサービスではなく教育・研究目的のMITライセンス提供。

---

### 8. [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)

> AG-UI: the Agent-User Interaction Protocol. Bring Agents into Frontend Applications.

- Language: TypeScript
- Stars: 20,824
- Forks: 2,125
- Stars in 1週間: 3,621
- Category: AIエージェント通信プロトコル
- Keywords: `AIエージェント` `イベントストリーム` `プロトコル` `フロントエンド統合` `TypeScript` `標準化`
- Summary source: README

#### README要約

- AG-UIは、AIエージェントとユーザー向けアプリケーションを接続する方法を標準化する、オープンで軽量なイベントベースのプロトコルです。
- エージェントが型付けされたイベントを発行し、クライアントがそれをレンダリングする双方向イベントストリームを通じて、フレームワークに依存しない通信を実現します。
- Webアプリ、モバイルアプリ、ターミナル、SlackなどのフロントエンドでAIエージェントを利用したい開発者や、LangChain、CrewAI、Mastraなどのエージェントフレームワークを使用している開発者が対象です。
- npx create-ag-ui-app@latestで新規アプリを作成でき、OpenAI APIキーの設定が必要です。TypeScript、Python、.NETのSDKが提供され、MITライセンスで公開されています。

---

### 9. [meta/astryx](https://github.com/meta/astryx)

> An open source design system that's fully customizable and agent ready

- Language: TypeScript
- Stars: 31,358
- Forks: 2,457
- Stars in 1週間: 4,131
- Category: デザインシステム
- Keywords: `デザインシステム` `React` `TypeScript` `StyleX` `UIコンポーネント` `AIエージェント対応`
- Summary source: README

#### README要約

- Metaが8年間社内で育てたオープンソースのデザインシステムで、人間とAIエージェントの両方が同じツールで構築できるよう設計されている。
- 150以上のアクセシブルなコンポーネント、ブランドレベルのテーマ、ダークモード、テンプレート、CLIを一体で提供し、React 19+とStyleX上に構築されている。
- ビルドプラグイン不要でCSSをインポートするだけで使え、TailwindやCSS Modules等で上書き可能。テーマはCSSカスタムプロパティの上書きで、swizzleによるコンポーネントのソース取り出しもできる。
- 現在ベータ版。導入にはReact 19以上が必要で、@astryxdesign/coreとテーマをインストール後、CLIのinitコマンドでセットアップする。ライセンスはMIT。

---

### 10. [pookjw/HermesEnabler](https://github.com/pookjw/HermesEnabler)

> Enable Hermès Watch Faces on any Apple Watch devices

- Language: Objective-C
- Stars: 2,305
- Forks: 192
- Stars in 1週間: 582
- Category: Apple Watch改造ツール
- Keywords: `Apple Watch` `Hermès` `watchOS` `Sideloadly` `MobileGestalt` `脱獄不要`
- Summary source: README

#### README要約

- 任意のApple WatchでHermèsのウォッチフェイスを有効化するツール。
- iPhone経由でWatchアプリをインストールし、MobileGestaltを書き換える仕組み。
- watchOS 27.0〜27.3 beta 1を搭載したApple Watchユーザー向け。
- SideloadlyやXcodeで導入可能だが、watchOS 26は非対応で自己責任での使用が前提。

---

### 11. [we-promise/sure](https://github.com/we-promise/sure)

> The personal finance app for everyone (by everyone)

- Language: Ruby
- Stars: 16,916
- Forks: 1,484
- Stars in 1週間: 2,476
- Category: 個人向け資産管理アプリ
- Keywords: `個人向け資産管理` `オープンソース` `セルフホスト` `Ruby` `Docker` `コミュニティ主導`
- Summary source: README

#### README要約

- Sureは、開発が中止されたMaybe Financeプロジェクトをコミュニティが引き継いだ、オープンソースの個人向け資産管理アプリです。
- ブラウザ、macOSデスクトップアプリ、モバイルアプリ、APIクライアント、LLMエージェントなど、多様な方法でアクセスできる仕組みを備えています。
- 自分でサーバーを立てて無料で利用したいユーザーや、プロジェクトに貢献したい開発者を対象としています。
- Dockerを使ってセルフホストが可能です。開発にはRuby、PostgreSQL、Redisが必要で、ライセンスはAGPLv3です。

---

### 12. [dream-num/univer](https://github.com/dream-num/univer)

> Build your own AI office with Univer Office SDK. Bring editing, calculation, collaboration, and file processing into your product for people and AI agents. Built on an extensible open-source core.

- Language: TypeScript
- Stars: 30,954
- Forks: 2,825
- Stars in 1週間: 7,539
- Category: Office SDK
- Keywords: `Office SDK` `スプレッドシート` `ドキュメント編集` `プラグイン` `AIエージェント連携` `Apache-2.0`
- Summary source: README

#### README要約

- Univerは自社製品内にOfficeアプリケーションを構築するためのOffice SDKであり、スプレッドシートやドキュメントなどの編集・計算・共同作業・ファイル処理を提供する。
- Web SDKのコアアーキテクチャとエンジン（コンテンツモデル、プラグイン管理、コマンドシステム、数式・レンダリングエンジン、Facade API、Sheets/Docs編集）をApache-2.0で提供する。
- 自社アプリやAIエージェントにOffice機能を組み込みたい開発者向けで、プラグインやプリセットで機能を組み合わせ、ヘッドレス処理にも対応する。
- Server SDKや商用Web SDKプラグイン、商用AI SDK拡張は別途配布・ライセンスされるため、利用範囲とライセンス形態の確認が必要。

---

### 13. [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill)

> Local video editor for coding agents: 42 FFmpeg tools with a machine-readable contract and an MCP server, for Claude Code, Cursor and Codex. Cut, captions, reframe, loudness, platform exports. No cloud, no API keys.

- Language: Python
- Stars: 8,875
- Forks: 812
- Stars in 1週間: 3,268
- Category: 動画編集ツール
- Keywords: `FFmpeg` `MCP` `AIエージェント` `動画編集` `ローカル処理` `Python`
- Summary source: README

#### README要約

- コーディングエージェントにローカル動画編集機能を提供するAgent Skillで、Claude Code、Cursor、CodexなどのMCPクライアントがFFmpegを使って映像を編集できる。
- カット、結合、無音除去、アスペクト比調整、キャプション、HDR変換、音声処理、ラウドネス調整など42種類のツールを搭載し、機械可読な契約とMCPサーバーで提供される。
- AIエージェントを使った動画編集の自動化を求める開発者や、クラウドにアップロードせずローカルで映像処理を行いたいユーザー向け。
- ffmpegとpython3がPATHにあれば動作し、npx ffmpeg-skillでセットアップ可能。APIキー不要でオフライン動作し、MITライセンスで提供される。

---
