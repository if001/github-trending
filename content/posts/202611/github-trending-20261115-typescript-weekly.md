+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/11/15'
date = 2026-11-15T00:50:08.481Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月15日 0:50:08
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 15
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントの管理・連携・拡張ツールがTypeScript製を中心に席巻し、Meta製デザインシステムが最大のスターを獲得した

- 一覧の15件中ほぼ全てがTypeScript製で、AIエージェント関連ツールが大半を占める
- Claude CodeやCodexなどのコーディングエージェントを制御・レビュー・拡張する周辺ツールが多数ランクイン
- Grok Botのオープンソース代替を謳うプロジェクトが2件同時に登場し、自前モデルでのボット運用への関心がうかがえる
- 最もスターを集めたのはAIツールではなくMetaのデザインシステムastryxで、AIエージェント対応を謳う点が特徴
- セルフホスト・ローカルファーストを強調するプロジェクトが多く、データ管理の自己所有志向が見られる

### 主なテーマ

- **コーディングエージェントの制御・レビュー基盤**: Claude CodeやCodexなど複数のコーディングエージェントを一元管理・制御するツールが複数ランクイン。pingdotgg/t3codeは9,668スターを獲得し、デスクトップ・Web・スマホから同一スレッドにアクセス可能。backnotprop/plannotatorはエージェントの計画やコードへの注釈・レビュー・フィードバック送信をローカルで行える。（`pingdotgg/t3code`、`backnotprop/plannotator`）
- **Grok Bot代替のセルフホストAIボット**: Grok Botのオープンソース代替を明示するプロジェクトが2件登場。milind-soni/OpenMausBotは6,413スターでローカルファースト設計と500以上のアプリ連携を謳い、elie222/rakazoはDockerサンドボックス上で独自モデルとキーによる永続的AIチームメイトを提供する。（`milind-soni/OpenMausBot`、`elie222/rakazo`）
- **エージェント向けコンテキスト・メモリ・知識基盤**: エージェントの能力を拡張する基盤レイヤーが複数登場。ranxianglei/billion-contextは2,942スターで、100Kコンテキストで数十億トークン規模の長期セッションを実現する圧縮プラグイン。garrytan/gbrainはMCP経由で接続する出典付き永続メモリ層、GoogleChrome/modern-web-guidance-srcは4,363スターで最新Webベストプラクティスをエージェントのコンテキストに注入する。（`ranxianglei/billion-context`、`garrytan/gbrain`、`GoogleChrome/modern-web-guidance-src`）
- **チーム向け自律AIエージェントプラットフォーム**: チームのチャットやワークフローに自律的に働くAIエージェントを組み込むプラットフォームが台頭。lobehub/lobehubは指示を待たずタスクを見つけて引き受ける「スーパーエージェント」を謳い、CopilotKit/OpenBotは1,900スターで各Botに専用コンピュータを与え、承認・監査機能を備えたエンタープライズ向け設計。（`lobehub/lobehub`、`CopilotKit/OpenBot`）
- **AI連携を前提とした開発者向け実用ツール**: AIエージェント対応を売りにする実用ツールが散見される。meta/astryxは13,660スターで最大の注目を集め、人間とAIエージェントが同じツールで開発できるデザインシステムを提供。openai/codex-securityは2,176スターで脆弱性の発見・修正を自動化し、every-app/open-seoはMCPサーバー経由でAIエージェントと連携するSEOツール。（`meta/astryx`、`openai/codex-security`、`every-app/open-seo`）

### 補足的な観察

- 言語分布は15件全てがTypeScriptで、他言語のプロジェクトは確認できない
- スター獲得数の上位はmeta/astryx（13,660）、pingdotgg/t3code（9,668）、milind-soni/OpenMausBot（6,413）の順
- AI関連でないプロジェクトはimmich-app/immich（写真管理）とvuejs/core（フレームワーク）程度で、vuejs/coreは211スターと控えめ
- QwenLM/qwen-codeのようにOpenAI・Anthropic・Gemini・ローカルモデルなど複数プロトコル対応を謳うなど、マルチモデル対応が共通傾向として見られる

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 15 |

## Repository一覧

### 1. [meta/astryx](https://github.com/meta/astryx)

> An open source design system that's fully customizable and agent ready

- Language: TypeScript
- Stars: 28,153
- Forks: 2,194
- Stars in 1週間: 13,660
- Category: デザインシステム
- Keywords: `React` `TypeScript` `StyleX` `UIコンポーネント` `テーマ` `AIエージェント対応`
- Summary source: README

#### README要約

- Metaが8年かけて社内で育てたオープンソースのデザインシステムで、React 19+とStyleXを基盤とし、現在ベータ版として公開されている。
- 150以上のアクセシブルなコンポーネント、ブランドレベルのテーマ設定、ダークモード、テンプレート、CLIを一体のシステムとして提供する。
- 人間とAIエージェントの両方が同じツールとドキュメントで開発できるよう設計されており、デザイナーやエンジニアがプロダクトUIを構築する用途に向く。
- 導入はnpmなどで@astryxdesign/coreとテーマをインストールし、CSSインポートとテーマプロバイダーを設定するだけで、ビルドプラグインは不要。

---

### 2. [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)

> Open-source Grok Bot alternative with a virtual machine that bots can use

- Language: TypeScript
- Stars: 22,776
- Forks: 3,168
- Stars in 1週間: 6,413
- Category: AIエージェント管理ツール
- Keywords: `オープンソース` `Grok Bot代替` `ローカルファースト` `マルチエージェント` `チャットアプリ` `Claude`
- Summary source: README

#### README要約

- Grok Botのオープンソース代替として、チャットアプリ内で複数のAIボットを管理できるツール。
- ClaudeやCodexなどのCLIをローカルで実行し、各ボットに独自のモデル・クラウドデスクトップ・接続アプリを割り当て可能。
- ローカルファースト設計で、データは~/.openmausbotに保存され、500以上のアプリと連携できる。
- macOS・Windows・Ubuntu向けに署名済みインストーラーが提供され、Apache 2.0ライセンスで公開されている。

---

### 3. [backnotprop/plannotator](https://github.com/backnotprop/plannotator)

> The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click.

- Language: TypeScript
- Stars: 11,128
- Forks: 923
- Stars in 1週間: 818
- Category: AI開発支援ツール
- Keywords: `AIエージェント` `コードレビュー` `アノテーション` `TypeScript` `開発生産性` `ローカル実行`
- Summary source: README

#### README要約

- Plannotatorは、Claude CodeやCodexなどのAIコーディングエージェントと連携し、計画やコードのレビューを行うローカル・ブラウザベースのツールです。
- エージェントが提案した計画やHTML成果物に注釈を付け、Gitの差分やPRをレビューして、フィードバックをワンクリックでエージェントに送り返すことができます。
- 複数のAIエージェントを活用する開発者や、エージェントの作業内容を効率的に確認・修正したいチームに適しています。
- プラグインやフックを通じてエージェントに直接接続し、ローカル環境で動作するためプライバシーに配慮されています。

---

### 4. [openai/codex-security](https://github.com/openai/codex-security)

> OpenAI's Codex Security CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities. npm: https://www.npmjs.com/package/@openai/codex-security

- Language: TypeScript
- Stars: 13,544
- Forks: 1,054
- Stars in 1週間: 2,176
- Category: セキュリティスキャンツール
- Keywords: `脆弱性スキャン` `CLI` `TypeScript SDK` `CI/CD` `GitHub Actions` `SARIF`
- Summary source: README

#### README要約

- OpenAIのCodex Securityは、コード内の脆弱性を発見・調査・修正するためのCLIおよびTypeScript SDKです。
- リポジトリやGit差分のスキャン、検証、パッチ生成、SECURITY.md作成、脅威モデルの保存、SARIF/JSON/CSVエクスポートなどの機能を提供します。
- 開発者やセキュリティチームがローカル、CI、GitHub Actions、コンテナ環境で自動化されたセキュリティスキャンを実行する用途を想定しています。
- 導入にはNode.js 22.13.0以上または24.x/26.xとPython 3.10以上が必要で、npmでCLIをインストールしログインして利用します。

---

### 5. [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

> An open-source AI coding agent that lives in your terminal.

- Language: TypeScript
- Stars: 30,347
- Forks: 3,500
- Stars in 1週間: 1,173
- Category: AIコーディングエージェント
- Keywords: `AIエージェント` `ターミナル` `マルチプロトコル` `オープンソース` `Qwen` `MCP`
- Summary source: README

#### README要約

- ターミナル、エディタ、デスクトップ、ブラウザ、チャットで動作するオープンソースのAIコーディングエージェントです。
- Auto-Memory、Skills、SubAgents、MCPなどのエージェント機能を標準搭載し、OpenAI、Anthropic、Gemini、Qwenなど複数のAPIプロトコルやローカルモデル（Ollama/vLLM）をサポートします。
- 開発者がプロジェクトのコード理解、編集、テストなどをAI支援で行うためのツールで、CLI、デスクトップアプリ、IDEプラグイン、Web UIなど多様なインターフェースを提供します。
- curlスクリプト、npm（Node.js 22+）、Homebrewでインストール可能で、Qwenアカウント（Plus/Proサブスクリプション）またはAPIキーによる認証が必要です。

---

### 6. [lobehub/lobehub](https://github.com/lobehub/lobehub)

> 🤯 LobeHub - Super-Agents on Your Team. Add super-agents to the chats your team already uses.They take on work by themselves and get better every week.

- Language: TypeScript
- Stars: 85,530
- Forks: 16,317
- Stars in 1週間: 1,258
- Category: AIエージェントプラットフォーム
- Keywords: `スーパーエージェント` `チームチャット連携` `マルチエージェント` `MCPサーバー` `セルフホスト` `TypeScript`
- Summary source: README

#### README要約

- LobeHubは、チームが既に使っているチャットに自律的に作業をこなす「スーパーエージェント」を追加するためのプラットフォームです。
- 任意のIMアプリやモデルと連携し、複数タスクの並列実行や、指示を待たずに適したタスクを自ら見つけて引き受ける仕組みを備えています。
- チームのチャットにAIエージェントを「新入社員」のように迎え入れ、使うほど専門性を高めて業務を任せたい開発チームや組織を対象としています。
- LobeHub Cloudの利用またはDocker Compose（推奨）やワンクリックデプロイによるセルフホストが可能で、現在も活発に開発中のためフィードバックが歓迎されています。

---

### 7. [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)

> Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.

- Language: TypeScript
- Stars: 12,276
- Forks: 1,514
- Stars in 1週間: 1,900
- Category: AIエージェントプラットフォーム
- Keywords: `AIコワーカー` `AG-UI` `セルフホスト` `エンタープライズ` `Kubernetes` `マルチモーダル`
- Summary source: README

#### README要約

- OpenBotは、AIコワーカー向けのモジュラーでセルフホスト可能なワークスペースで、各Botがブラウザ、ファイル、ツールを持つ専用コンピュータを利用できる。
- AG-UI経由で任意のエージェントを接続でき、OpenAI、Claude、Geminiなどのモデルを選択可能。アクションは事前に承認され、実行後に記録される。
- エンタープライズ向けに設計され、会社のサインイン、ツール権限、承認、監査機能を備え、チームでの利用を想定している。
- Mac/Windows向けデスクトップアプリまたはKubernetesでデプロイ可能。MITライセンスだが、CopilotKit Intelligenceは別途ライセンスが必要。

---

### 8. [immich-app/immich](https://github.com/immich-app/immich)

> High performance self-hosted photo and video management solution.

- Language: TypeScript
- Stars: 119,208
- Forks: 7,605
- Stars in 1週間: 760
- Category: 写真・動画管理
- Keywords: `セルフホスト` `写真管理` `動画管理` `バックアップ` `顔認識` `TypeScript`
- Summary source: README

#### README要約

- 高性能なセルフホスト型の写真・動画管理ソリューションです。
- モバイルとWebでのアップロード、自動バックアップ、重複防止、顔認識、メタデータ検索などの機能を備えています。
- 自分のサーバーで写真や動画を管理したい個人ユーザーや、プライバシーを重視するユーザーに適しています。
- AGPLv3ライセンスで提供され、3-2-1バックアップ戦略の実施が推奨されています。

---

### 9. [every-app/open-seo](https://github.com/every-app/open-seo)

> Open source alternative to Semrush and Ahrefs

- Language: TypeScript
- Stars: 27,727
- Forks: 3,882
- Stars in 1週間: 992
- Category: SEOツール
- Keywords: `SEO` `オープンソース` `MCP` `AIエージェント` `セルフホスト` `DataForSEO`
- Summary source: README

#### README要約

- OpenSEOはSemrushやAhrefsのオープンソース代替となるSEOツールで、従量課金制で自分のデータをコントロールできる。
- キーワード調査、ランクトラッキング、競合分析、バックリンク、サイト監査などの主要SEOワークフローを提供し、MCPサーバー経由でAIエージェントと連携する。
- 高価なSEOツールの代替を求めるユーザーや、Claude CodeなどのAIエージェントと連携してSEO作業を行いたい開発者・マーケター向け。
- セルフホストにはDockerまたはCloudflareへのデプロイが可能で、利用にはDataForSEO APIキーが必要。ホスト版は月額10ドル。

---

### 10. [elie222/rakazo](https://github.com/elie222/rakazo)

> Open-source Grok Bot alternative. Choose your own model and sandbox.

- Language: TypeScript
- Stars: 8,421
- Forks: 1,525
- Stars in 1週間: 966
- Category: AIエージェント基盤
- Keywords: `セルフホスト` `AIエージェント` `Grok Bot代替` `サンドボックス` `Docker` `MCP連携`
- Summary source: README

#### README要約

- Grok Botのオープンソース・セルフホスト代替で、独自のメモリ・ルーチン・アプリ・コンピュータを持つ永続的なAIチームメイトを提供する。
- Dockerやクラウド、自前マシン上のサンドボックスで動作し、グループチャット、委任とサブエージェント、音声チャット、任意モデルの利用、数千のアプリ連携やMCPに対応する。
- Web・デスクトップ・iPhone・Androidから同一サーバーにアクセスでき、自分のモデルとキーでAIボットを運用したい個人やチームが対象。
- Docker EngineとComposeプラグインが必要で、公開イメージ用インストーラーかソースチェックアウト（Node.js 24.15.0以降の24.x系または26+、pnpm 12）で導入する。

---

### 11. [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)

> A context-compression plugin for month-long single sessions (billions of tokens) and small context windows (a 100K context is enough), billion-context is all you need .

- Language: TypeScript
- Stars: 7,421
- Forks: 610
- Stars in 1週間: 2,942
- Category: コンテキスト圧縮プラグイン
- Keywords: `コンテキスト圧縮` `コーディングエージェント` `長期セッション` `トークン削減` `プロキシ` `TypeScript`
- Summary source: README

#### README要約

- エージェントとモデルAPIの間に介在し、会話コンテキストを圧縮するTypeScript製プラグイン。
- モデル自身がcompress/decompress/search_context/acp_statusの4ツールを呼び出し、増分・可逆・プレフィックスキャッシュフレンドリーな階層的要約を行う。
- Claude Code、Codex、OpenCode、Gemini CLIなど多数のコーディングエージェント利用者が、100Kコンテキストで数十億トークン規模の長期セッションを運用する用途向け。
- npmでグローバルインストール可能だが早期段階で実モデル統合テストは今後の課題。MITライセンスに帰属表示の追加条項あり。

---

### 12. [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)

> Keep your coding agent up to date with the latest web best practices

- Language: TypeScript
- Stars: 6,056
- Forks: 403
- Stars in 1週間: 4,363
- Category: 開発者ツール
- Keywords: `コーディングエージェント` `Webベストプラクティス` `モダンWebAPI` `CLI` `レガシーコード検出` `アクセシビリティ`
- Summary source: README

#### README要約

- コーディングエージェントに最新のWebプラットフォームの専門知識・ベストプラクティス・ブラウザ互換性データを組み込むためのスキル群「Modern Web Guidance」のソースリポジトリ。
- CLI経由でガイドの検索・取得やレガシーパターンのスキャンができ、トークン効率を重視した専門家監修のガイドラインをエージェントのコンテキストに直接提供する。
- レガシーなコード生成を避けてモダンなブラウザAPIを活用したい開発者やコーディングエージェント利用者が対象で、CSS・パフォーマンス・アクセシビリティ・組み込みAIなど250の機能をカバーする。
- npx modern-web-guidance@latest install でインストール可能。匿名の利用統計が収集されるが DISABLE_TELEMETRY=1 でオプトアウトでき、コードはApache 2.0、ガイド文書はCC-BY 4.0ライセンス。

---

### 13. [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

> The best way to control Claude Code, Codex and more from any computer or phone

- Language: TypeScript
- Stars: 60,602
- Forks: 10,912
- Stars in 1週間: 9,668
- Category: 開発者ツール
- Keywords: `オープンソース` `コーディングエージェント` `リモートアクセス` `マルチプラットフォーム` `Git統合` `MITライセンス`
- Summary source: README

#### README要約

- T3 Codeは、コーディングエージェントを制御するためのオープンソースのコントロールプレーンです。
- Claude CodeやCodexなど複数のエージェントを一元管理し、デスクトップ、Web、スマートフォンから同一のスレッドにアクセス可能です。
- 開発者が自分のマシンでエージェントを実行し、どこからでも次のステップを承認したり、Git操作を行ったりするのに適しています。
- MITライセンスで提供され、デスクトップアプリ、コマンドライン、モバイルアプリを通じてインストールして利用できます。

---

### 14. [garrytan/gbrain](https://github.com/garrytan/gbrain)

> Garry's Opinionated OpenClaw/Hermes Agent Brain

- Language: TypeScript
- Stars: 33,012
- Forks: 4,937
- Stars in 1週間: 1,351
- Category: AIエージェント向けメモリ基盤
- Keywords: `エージェントメモリ` `MCP` `知識グラフ` `セマンティック検索` `自己ホスト` `TypeScript`
- Summary source: README

#### README要約

- GBrainは、既存のAIエージェントに出典付きの永続メモリを与える自己ホスト型の記憶レイヤーです。
- キーワード検索に加え、セマンティック検索、引用付きの回答合成、型付き知識グラフ、バックグラウンドでの取り込み・統合デーモンを提供します。
- OpenClawやHermes等のエージェント利用者やチームを対象とし、MCP経由でClaude Code、Codex、ChatGPT、Cursorなどから接続できます。
- MITライセンスでBun製CLIをインストールして利用し、gbrain.ioの有料ホスティングは任意、共有アクセス時は権限と信頼境界のドキュメント確認が推奨されます。

---

### 15. [vuejs/core](https://github.com/vuejs/core)

> 🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.

- Language: TypeScript
- Stars: 55,026
- Forks: 9,338
- Stars in 1週間: 211
- Category: フロントエンドフレームワーク
- Keywords: `Vue.js` `JavaScript` `TypeScript` `UIフレームワーク` `プログレッシブ` `MITライセンス`
- Summary source: README

#### README要約

- Vue.jsはWeb上でUIを構築するための、段階的に導入可能なプログレッシブJavaScriptフレームワークです。
- 本リポジトリはVue.jsのコア実装であり、TypeScriptで開発され、npmパッケージ「vue」として公開されています。
- WebアプリケーションのUI開発を行う開発者が対象で、公式サイトvuejs.orgのドキュメントに従って利用を開始します。
- MITライセンスで提供され、質問は公式フォーラムやチャットへ、Issueはバグ報告と機能要望専用とされています。

---
