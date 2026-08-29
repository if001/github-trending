+++
title = 'GitHub Trending 1週間レポート (All) - 2026/08/29'
date = 2026-08-29T03:05:58.521Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月29日 3:05:58
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 19
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> Claude CodeやCodexなどのコーディングエージェントを軸に、プラグイン・スキル・無料API集約・ローカル実行基盤が多数ランクインし、AIエージェントのエコシステム化が顕著な一覧となっている。

- openai/codex（9,109スター）を筆頭に、Claude Code・Codex・Cursorなどのコーディングエージェント関連リポジトリが一覧の大半を占めている
- anthropics/claude-plugins-community、anthropics/claude-plugins-official、cursor/plugins、VoltAgent/awesome-agent-skillsなど、エージェントを拡張するプラグイン・スキルの流通基盤が複数登場している
- tashfeenahmed/freellmapiやAlishahryar1/free-claude-codeのように、無料LLMプロバイダを集約してコーディングエージェントを安価に動かすツールが注目を集めている
- apache/maka、tinyhumansai/openhuman、AprilNEA/OpenLogiなど「ローカルファースト」を掲げるプロジェクトが複数あり、データを手元に置く設計への関心がうかがえる
- AI以外ではbasecamp/omarchy（5,942スター）やbookorbit/bookorbitなど、開発環境やセルフホスト系ツールも一定の支持を得ている

### 主なテーマ

- **コーディングエージェントの拡張エコシステム（プラグイン・スキル）**: anthropics/claude-plugins-community（2,207スター）とanthropics/claude-plugins-official（1,281スター）はClaude Code向けプラグインのマーケットプレイス、cursor/plugins（1,594スター）はCursor公式プラグイン集、VoltAgent/awesome-agent-skills（2,372スター）はClaude Code・Codex・Gemini CLI・Cursor横断の1,000以上のスキル集であり、エージェント本体だけでなく拡張機能の流通基盤が複数同時にランクインしている。（`anthropics/claude-plugins-community`、`anthropics/claude-plugins-official`、`cursor/plugins`、`VoltAgent/awesome-agent-skills`）
- **ターミナル・ローカルで動くAIエージェント基盤**: openai/codex（9,109スター）はターミナルで動作するOpenAIのコーディングエージェント、apache/maka（1,918スター）は追記専用ログでエージェント実行を記録するローカルファーストのワークスペース、chaitanyagiri/munder-difflin（1,853スター）はClaude CodeやCodexのCLIをラップして複数エージェントを並行稼働させるハーネスであり、ローカル環境でエージェントを動かし・管理する基盤が複数登場している。（`openai/codex`、`apache/maka`、`chaitanyagiri/munder-difflin`、`tinyhumansai/openhuman`）
- **無料LLMの集約とコスト削減**: tashfeenahmed/freellmapi（2,162スター）は34の無料LLMプロバイダ・635エンドポイントを単一のOpenAI互換APIに集約し、Alishahryar1/free-claude-code（4,769スター）は50のToS準拠プロバイダ経由で月13億トークン以上の無料枠をClaude CodeやCodexから使えるようにするなど、コーディングエージェントの利用コストを下げるツールが目立つ。（`tashfeenahmed/freellmapi`、`Alishahryar1/free-claude-code`）
- **プロンプト資産とAI活用の実践知識**: freestylefly/awesome-gpt-image-2は12,877スターで一覧最大の伸びを記録し、GPT-Image2向けの530以上の逆解析ケースと20以上のテンプレートを提供する。rohitg00/ai-engineering-from-scratch（3,263スター）は511レッスンのAIエンジニアリングカリキュラム、MadsLorentzen/ai-job-search（4,828スター）はClaude Code上で求職活動を自動化するフレームワークであり、AIを実務に活かす知識・資産への需要がうかがえる。（`freestylefly/awesome-gpt-image-2`、`rohitg00/ai-engineering-from-scratch`、`MadsLorentzen/ai-job-search`）
- **ローカルファースト・セルフホストのツール**: AprilNEA/OpenLogi（4,825スター）はアカウント不要・テレメトリなしのLogitech Options+代替、bookorbit/bookorbit（806スター）はセルフホスト型の電子書籍管理プラットフォーム、basecamp/omarchy（5,942スター）はDHHによるオピニオネイテッドなLinuxディストリビューションであり、AI以外でも自分の環境を自分で管理するツールが支持されている。（`AprilNEA/OpenLogi`、`bookorbit/bookorbit`、`basecamp/omarchy`）

### 補足的な観察

- スター伸びの上位はfreestylefly/awesome-gpt-image-2（12,877）、tt-a1i/archify（11,099）、openai/codex（9,109）の順で、プロンプト資産・図可視化スキル・エージェント本体と関心が分散している
- 言語分布はPython（5件）とTypeScript（4件）が多く、Rust（openai/codex、AprilNEA/OpenLogi、tinyhumansai/openhumanの3件）もエージェントやデバイス制御など性能重視の領域で採用されている
- tt-a1i/archifyはCursor・Claude Code・Codex CLI・OpenCodeなど複数エージェントから利用される図生成スキルで、特定ツールに依存しないスキルの横断利用という傾向を裏付けている
- modular/modular（875スター、Mojo言語）やPostHog/posthog（1,270スター）のようなAI開発基盤・分析基盤もランクインしており、エージェント周辺だけでなくインフラ層への関心も存在する

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 6 |
| TypeScript | 4 |
| JavaScript | 3 |
| Rust | 3 |
| Mojo | 1 |
| Shell | 1 |
| 不明 | 1 |

## Repository一覧

### 1. [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community)

> Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.

- Language: Python
- Stars: 2,600
- Forks: 214
- Stars in 1週間: 2,207
- Category: プラグインマーケットプレイス
- Keywords: `Claude Code` `Claude Cowork` `プラグイン` `マーケットプレイス` `コミュニティ` `読み取り専用`
- Summary source: README

#### README要約

- Claude CoworkおよびClaude Code向けのコミュニティ製プラグインを集めたマーケットプレイスの読み取り専用ミラーです。
- marketplace.jsonに掲載されるプラグイン一覧はAnthropicの内部レビューパイプラインから毎晩同期され、自動セキュリティスキャンを通過したもののみが配布承認されます。
- Claude Coworkではclaude.com/pluginsから、Claude CodeではCLIコマンドでマーケットプレイスを追加してプラグインをインストールできます。
- プラグインの提出は専用フォーム経由でのみ受け付け、このリポジトリへの直接のプルリクエストは自動的にクローズされます。

---

### 2. [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2)

> Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，530+ 个案例逆向工程，20+ 套工业级模板，并提炼出Skills，持续更新中

- Language: JavaScript
- Stars: 24,332
- Forks: 2,403
- Stars in 1週間: 12,877
- Category: AIプロンプトエンジニアリング
- Keywords: `GPT-Image2` `プロンプトエンジニアリング` `画像生成` `テンプレート` `自動化` `Prompt as Code`
- Summary source: README

#### README要約

- GPT-Image2向けのプロンプトエンジンとテンプレートライブラリで、500以上の逆解析済みケースと20以上の産業用テンプレートを提供する。
- プロンプトを構造化されたプロトコルに変換し、主題・照明・素材・レイアウトなどを組み合わせ可能な部品に分割して管理する。
- AI画像生成の自動化ワークフローやエージェントシステムの開発者、および安定した画像生成を必要とするクリエイター向け。
- MITライセンスで公開されており、GitHubリポジトリからクローンしてドキュメント内のテンプレートとケースを参照して使用する。

---

### 3. [basecamp/omarchy](https://github.com/basecamp/omarchy)

> Beautiful, Modern & Opinionated Linux

- Language: Shell
- Stars: 33,632
- Forks: 3,481
- Stars in 1週間: 5,942
- Category: Linuxディストリビューション
- Keywords: `Linux` `DHH` `オピニオネイテッド` `デスクトップ環境` `開発環境` `MITライセンス`
- Summary source: README

#### README要約

- DHHによる美しくモダンでオピニオネイテッドなLinuxディストリビューション。
- テーマ、ホットキー、統合クリップボード、スクリーンショット、Omarchy CLIなどの機能をマニュアルで体系的に解説している。
- MacやWindowsからの移行ユーザーを含む開発者向けに、Neovim、AIツール、ブラウザ、ゲーミングなどの環境を提供する。
- マニュアルはmanual/ディレクトリが正本でlearn.omacom.ioにもミラーされ、MITライセンスで公開されている。

---

### 4. [openai/codex](https://github.com/openai/codex)

> Lightweight coding agent that runs in your terminal

- Language: Rust
- Stars: 119,587
- Forks: 18,261
- Stars in 1週間: 9,109
- Category: AIコーディングエージェント
- Keywords: `OpenAI` `Codex CLI` `ターミナル` `コーディングエージェント` `Rust` `ChatGPT連携`
- Summary source: README

#### README要約

- OpenAIが提供する、ローカル環境のターミナルで動作するコーディングエージェント「Codex CLI」です。
- ターミナル上でAIによるコーディング支援を行い、VS CodeなどのIDE拡張やデスクトップアプリ版とも連携可能です。
- ChatGPTの各種プラン（Plus, Pro, Business等）のユーザーがアカウント連携して利用する開発者向けツールです。
- Mac/Linux/Windows向けのインストールスクリプトやnpm、Homebrewで導入でき、APIキーでの利用には別途設定が必要です。

---

### 5. [tt-a1i/archify](https://github.com/tt-a1i/archify)

> Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.

- Language: JavaScript
- Stars: 27,798
- Forks: 1,759
- Stars in 1週間: 11,099
- Category: 開発者ツール
- Keywords: `アーキテクチャ図` `AIエージェントスキル` `JSON IR` `HTML/SVGレンダリング` `差分レビュー` `Node.js`
- Summary source: README

#### README要約

- コードベースやシステム記述をチャット内でインタラクティブなシステムマップに変換するNode.js製レンダリング・検証システム。
- エージェントが生成した型付きJSON IRを決定論的にHTML/SVGへコンパイルし、5種の図タイプ、テーマ、モーション、PNG/SVG/WebM/シェアカード出力を提供する。
- Cursor、Claude Code、Codex CLI、OpenCodeなどのエージェント利用者が、アーキテクチャの可視化、変更差分レビュー、経路トレースに用いる。
- npx skills addで導入可能。Mermaid自動解析や汎用自動レイアウト、ホスト型共有、WYSIWYG編集は現行スコープ外。ライセンスはMIT。

---

### 6. [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi)

> ⚡️A native, local-first alternative to Logitech Options+, written in Rust 🦀 — remap buttons, DPI, and SmartShift over HID++. No account, no telemetry.

- Language: Rust
- Stars: 17,428
- Forks: 499
- Stars in 1週間: 4,825
- Category: デバイス管理ツール
- Keywords: `Rust` `Logitech` `HID++` `ボタンリマップ` `ローカルファースト` `クロスプラットフォーム`
- Summary source: README

#### README要約

- Rust製のLogitech Options+代替アプリで、マウス・キーボード・WebカメラをHID++/UVC経由で制御する。
- ボタンリマップ、DPI調整、SmartShift、アプリ別プロファイル、Litra照明やUVCカメラ設定などをGUI/CLIとTOML設定で管理できる。
- アカウント不要・テレメトリなしを求めるLogitechデバイスユーザー向けで、macOS/Linux/Windowsに対応する。
- 開発中で不安定なため、利用前にLogi Options+を終了し、OS別のインストール手順と要件を確認する必要がある。

---

### 7. [apache/maka](https://github.com/apache/maka)

> Apache Maka (Incubating) is a local-first AI agent workspace. Model messages, tool calls, tool results, permission decisions, and termination events are recorded as an append-only log.

- Language: TypeScript
- Stars: 3,913
- Forks: 364
- Stars in 1週間: 1,918
- Category: AIエージェントワークスペース
- Keywords: `ローカルファースト` `AIエージェント` `サンドボックス` `追記専用ログ` `TypeScript` `Apache Incubator`
- Summary source: README

#### README要約

- Apache MakaはローカルファーストのAIエージェントワークスペースで、プロジェクトの検査やツール実行をサンドボックス境界内で行う。
- モデルメッセージやツール呼び出し、結果、終了イベントを追記専用ログとして記録し、クラッシュ復旧や中断ターンの再開に対応する。
- デスクトップ、TUI/CLI、評価の3つのインターフェースを提供し、すべてRuntime Host経由でエージェントを実行する。
- 現在はApache Incubatorでインキュベーション中で、macOS Apple Silicon向けの早期公開版であり、データ形式やCLIコマンドは変更される可能性がある。

---

### 8. [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)

> 7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.

- Language: TypeScript
- Stars: 21,670
- Forks: 3,067
- Stars in 1週間: 2,162
- Category: LLM APIゲートウェイ
- Keywords: `OpenAI互換API` `無料LLMプロバイダー集約` `スマートルーティング` `自動フェイルオーバー` `TypeScript` `セルフホスト`
- Summary source: README

#### README要約

- 34の無料LLMプロバイダーと635の無料モデルエンドポイントを、単一のOpenAI互換/v1 APIの背後に集約するルーター。
- スマートルーティング、レート制限時の自動フェイルオーバー、暗号化されたキー保存、キーごとの使用量追跡を備え、署名付きフィードでモデルカタログを自動更新する。
- Claude CodeやCodex CLIなどのコーディングエージェントやOpenAI互換クライアントから利用する、個人の実験・学習用途のユーザー向け。
- デスクトップアプリ、Docker、npxセットアップコマンドで導入可能。本番利用は非推奨で、各プロバイダーの利用規約遵守はユーザーの責任。ライセンスはMIT。

---

### 9. [modular/modular](https://github.com/modular/modular)

> The Modular Platform (includes MAX & Mojo)

- Language: Mojo
- Stars: 29,308
- Forks: 3,120
- Stars in 1週間: 875
- Category: AI開発プラットフォーム
- Keywords: `Modular Platform` `MAX Framework` `Mojo Language` `AI開発` `推論サーバー` `オープンソース`
- Summary source: README

#### README要約

- Modular Platformは、AI開発とデプロイメントのための統合プラットフォームのオープンソースコンポーネントをホストするリポジトリです。
- MAX FrameworkとMojo Languageを含み、Mojoコンパイラ、標準ライブラリ、MAXアクセラレータライブラリ、OpenAI互換エンドポイントを持つ推論サーバーなどで構成されています。
- AIモデルの開発・デプロイを行う開発者や、Mojo言語とMAXフレームワークを使用するエンジニアが対象です。
- Apache License v2.0 with LLVM Exceptionsでライセンスされ、MAXの使用にはModular Community Licenseが適用されます。Mojoコンパイラへのコントリビューションは現時点では受け付けていません。

---

### 10. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 5,981
- Forks: 478
- Stars in 1週間: 1,594
- Category: 開発ツール
- Keywords: `Cursor` `プラグイン` `TypeScript` `マーケットプレイス` `開発者ツール` `SaaS連携`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール・フレームワーク・SaaS製品向けのプラグインを提供するリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェストで管理される。
- 開発者やチームがCursorエディタの機能を拡張し、様々な外部サービスやツールと連携する際に使用する。
- マーケットプレイス形式で構成され、ルートの`marketplace.json`が全プラグインをリスト化している。

---

### 11. [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)

> The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep interviews. Fork it and own it.

- Language: Python
- Stars: 37,771
- Forks: 12,785
- Stars in 1週間: 4,828
- Category: AI求職支援ツール
- Keywords: `Claude Code` `求職活動` `CV作成` `カバーレター` `面接準備` `オープンソース`
- Summary source: README

#### README要約

- Claude Code上で動作する、ローカルマシンで完結するAI求職活動フレームワーク。
- プロフィール設定、求人検索・適合度評価、CVとカバーレターの作成、面接準備までをコマンドベースのワークフローで自動化する。
- 求職中のエンジニアや転職希望者が、自分の経歴情報を登録して応募書類作成や面接対策に活用する用途を想定している。
- Claude Code CLI、Python 3.10以上、Bun、LaTeX環境が必要で、フォークは公開リポジトリになるため個人情報を扱う場合はプライベートリポジトリの使用が推奨されている。

---

### 12. [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)

> Your Personal AI super intelligence. A brain that builds a local-first memory of your life, a fantastic orchestrator of agent fleets and workflows, and a deep researcher.

- Language: Rust
- Stars: 38,740
- Forks: 3,803
- Stars in 1週間: 2,353
- Category: AIアシスタント
- Keywords: `ローカルファースト` `エージェントオーケストレーション` `メモリ管理` `Rust` `プライバシー重視` `オープンソース`
- Summary source: README

#### README要約

- OpenHumanは、ローカルファーストで動作するパーソナルAIスーパーインテリジェンスです。
- 永続的なローカルメモリ、エージェントのオーケストレーション、ディープリサーチの3つの機能を統合しています。
- Gmail、Notion、GitHub、Slackなど100以上のOAuth連携と5,000以上のMCPサーバーに対応し、個人のデータを統合します。
- 早期ベータ版であり、インストーラーまたはGitHub Releasesからダウンロードして利用できます。

---

### 13. [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

> Official, Anthropic-managed directory of high quality Claude Code Plugins.

- Language: Python
- Stars: 35,064
- Forks: 3,937
- Stars in 1週間: 1,281
- Category: プラグインディレクトリ
- Keywords: `Claude Code` `プラグイン` `マーケットプレイス` `Anthropic公式` `MCP` `スキル`
- Summary source: README

#### README要約

- Anthropicが管理するClaude Code向け高品質プラグインの公式ディレクトリです。
- Anthropic開発の内部プラグインと、パートナーやコミュニティの外部プラグインを収録し、標準化された構造で管理されています。
- Claude Codeユーザーがプラグインをインストールして機能を拡張するためのマーケットプレイスとして利用できます。
- Claude Codeの/plugin installコマンドでインストール可能ですが、プラグインの内容はAnthropicが保証しないため、利用前に信頼性を確認する必要があります。

---

### 14. [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

> A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more.

- Language: 不明
- Stars: 33,077
- Forks: 3,488
- Stars in 1週間: 2,372
- Category: AIエージェントスキル集
- Keywords: `Agent Skills` `Claude Code` `AI開発` `キュレーション` `公式スキル` `開発ツール`
- Summary source: README

#### README要約

- 公式開発チームとコミュニティによる実際に使われているAgent Skillsを集めたキュレーションコレクション。
- Anthropic、Google、Vercel、Stripeなど主要企業の公式スキルを含み、Claude Code、Codex、Gemini CLI、Cursorなど複数のAIツールと互換性がある。
- AIエージェント開発者やエンジニアが、ドキュメント作成、テスト、デザインなどの実用的なスキルをプロジェクトに活用する際に使用する。
- セキュリティ監査は行われていないため、本番環境で使用する前に各スキルの内容を確認する必要がある。

---

### 15. [PostHog/posthog](https://github.com/PostHog/posthog)

> 🦔 PostHog is the leading platform for building self-driving products. Our developer tools – AI observability, analytics, session replay, flags, experiments, error tracking, logs, and more – capture all the context agents need to diagnose problems, uncover opportunities, and ship fixes. Steer it all from Slack, web, desktop, or the MCP.

- Language: Python
- Stars: 39,433
- Forks: 3,308
- Stars in 1週間: 1,270
- Category: プロダクト分析プラットフォーム
- Keywords: `オープンソース` `プロダクトアナリティクス` `セッションリプレイ` `フィーチャーフラグ` `A/Bテスト` `エラートラッキング`
- Summary source: README

#### README要約

- PostHogは、プロダクト開発に必要なツールを統合したオープンソースのプラットフォームです。
- プロダクト分析、セッションリプレイ、フィーチャーフラグ、A/Bテスト、エラートラッキングなどの機能を提供します。
- 開発者やプロダクトチームがユーザー行動の分析や機能の安全なリリース、問題の診断を行うために利用します。
- PostHog Cloudの利用が推奨されており、Dockerを用いたセルフホスティングも可能ですが、オープンソース版のデプロイにはサポートや保証は提供されません。

---

### 16. [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)

> Learn it. Build it. Ship it for others.

- Language: Python
- Stars: 50,649
- Forks: 8,782
- Stars in 1週間: 3,263
- Category: AI学習カリキュラム
- Keywords: `AIエンジニアリング` `カリキュラム` `LLM` `エージェント` `MCP` `MITライセンス`
- Summary source: README

#### README要約

- AIエンジニアリングを基礎から実践まで学べる無料・オープンソース（MITライセンス）のカリキュラムです。
- 511のレッスンと20のフェーズで構成され、Python、TypeScript、Rust、Juliaを使い、各レッスンでプロンプトやエージェント、MCPサーバーなどの再利用可能な成果物を作成します。
- AIツールを職業として使いこなしたい学習者や、LLMアプリ、エージェント、MCP開発を学びたいエンジニアが対象で、GitHubまたは公式サイトで学習できます。
- git cloneしてpython3でレッスンコードを実行する形式で、npx skills addでAIチューターを導入するにはNode.jsとnpxが必要です。

---

### 17. [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)

> Use Claude Code, Codex, Pi, and OpenCode and more for free (1.3B+ free tokens) from your terminal, app, IDE, or phone like OpenClaw (voice supported + ToS friendly)

- Language: Python
- Stars: 51,212
- Forks: 8,247
- Stars in 1週間: 4,769
- Category: AIコーディングエージェントプロキシ
- Keywords: `Claude Code` `無料トークン` `マルチプロバイダ` `フォールバック` `音声入力` `ローカルプロキシ`
- Summary source: README

#### README要約

- Claude CodeやCodex、OpenCodeなど10種類のコーディングエージェントを、50のToS準拠プロバイダ経由で月1.3B以上の無料トークンを使って動かすツール。
- 検索可能なモデルカタログ、プロバイダ障害時の自動フォールバック、RTKによる端末出力トークン最大90%削減、Whisperによる音声入力などを備える。
- ターミナル、デスクトップ、VS Code、JetBrains、Discord、Telegramなどから利用したい開発者向け。
- curlやPowerShellのインストールスクリプトで導入し、Admin UIでAPIキーとモデルを設定する。無料枠は各プロバイダの条件に依存し変動する。

---

### 18. [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin)

> local multi-agent harness

- Language: JavaScript
- Stars: 5,231
- Forks: 630
- Stars in 1週間: 1,853
- Category: マルチエージェントハーネス
- Keywords: `マルチエージェント` `ターミナルCLI` `Electron` `ローカルLLM` `オーケストレーション` `オフィス可視化`
- Summary source: README

#### README要約

- 既存のターミナルコーディングCLIをラップして、自分の分身となるエージェント群をローカルマシン上で動かすマルチエージェントハーネスのデスクトップアプリ。
- Claude CodeやCodexなどのCLIをnode-ptyの実プロセスとして実行し、メモリ・メールボックス・ブラックボードを共有するハイブで連携させ、GODエージェントがタスクを振り分ける。
- 複数のAIエージェントを並行稼働させたい開発者向けで、Pixi.jsのオフィスフロア上でアバターとして作業状況を可視化し、承認ゲートや予算管理で統制できる。
- Electron・React・TypeScript製でMITライセンス。BYOKキーやOllama等のローカルLLMに対応し、公式ビルドは匿名テレメトリを送信するがオプトアウト可能。

---

### 19. [bookorbit/bookorbit](https://github.com/bookorbit/bookorbit)

> BookOrbit: Your Reading Space

- Language: TypeScript
- Stars: 3,528
- Forks: 212
- Stars in 1週間: 806
- Category: 電子書籍管理
- Keywords: `セルフホスト` `電子書籍` `読書管理` `Kobo同期` `KOReader` `メタデータ`
- Summary source: README

#### README要約

- 電子書籍、PDF、オーディオブック、コミックを管理するセルフホスト型のライブラリ＆読書プラットフォームです。
- Webリーダー、Kobo、KOReader間で読書進捗やハイライトを双方向同期し、14のメタデータプロバイダーや読書統計、実績機能を備えています。
- 複数ユーザー管理やOIDC/SSOに対応し、OPDSやSend-to-Kindleでの配信、HardcoverやReadwiseへの自動同期も可能です。
- Docker Composeで導入でき、.envファイルでデータベースパスワードやJWTシークレットなどの必須設定を行う必要があります。

---
