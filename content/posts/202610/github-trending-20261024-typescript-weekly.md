+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/10/24'
date = 2026-10-24T22:57:17.456Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月24日 22:57:17
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントの管理・拡張・運用基盤がTypeScript製を中心に集中し、エージェントを実務で使いこなすための周辺ツールが台頭している

- 一覧の大半がTypeScript製で、AIエージェント関連の実行基盤・管理画面・プラグイン・プロキシが多数を占める
- Claude Code、Codex、Cursor、OpenCodeなど複数のコーディングエージェントを束ねるハーネスやコントロールパネルが複数登場している
- 単体のエージェントだけでなく、並列実行、リモート操作、コンテキスト圧縮、無料LLMルーティングなど運用面の課題を解決するツールが目立つ
- AIエージェント向けの出力を前提にした動画生成やGenerative UIなど、エージェント連携を意識したアプリケーション基盤も見られる
- リバースエンジニアリング、IPTV、動画編集、命理学データセットなど非AI寄りの題材もあるが、全体の中心はエージェント活用基盤にある

### 主なテーマ

- **マルチエージェント運用・管理基盤**: ruvnet/ruflo、stablyai/orca、pingdotgg/t3code、makecindy/cindy はいずれも複数のAIコーディングエージェントを協調・並列・一元管理する方向性を示しており、単一エージェント利用から複数エージェント運用への移行がうかがえる。（`ruvnet/ruflo`、`stablyai/orca`、`pingdotgg/t3code`、`makecindy/cindy`）
- **コーディングエージェント本体と拡張エコシステム**: anomalyco/opencode はオープンソースのコーディングエージェント本体、cursor/plugins はCursor向け公式プラグイン群、ranxianglei/billion-context はエージェントとモデルAPIの間に入るコンテキスト圧縮プロキシであり、エージェント本体とその拡張層の両方が注目されている。（`anomalyco/opencode`、`cursor/plugins`、`ranxianglei/billion-context`）
- **エージェント前提の生成・解析ツール**: morluto/rea はAIエージェント経由でアプリやバイナリを解析するツール、heygen-com/hyperframes はエージェントがHTMLから動画を生成するためのフレームワーク、thesysdev/openui はLLM出力をUIとして描画する基盤で、エージェントが実作業を行うための専用ツール化が進んでいる。（`morluto/rea`、`heygen-com/hyperframes`、`thesysdev/openui`）
- **LLM利用コストと接続性の最適化**: tashfeenahmed/freellmapi は多数の無料LLMエンドポイントをOpenAI互換APIに集約し、ranxianglei/billion-context はトークン削減と長期セッション維持を狙うプロキシで、エージェント利用拡大に伴うコスト・コンテキスト制約への対応が見られる。（`tashfeenahmed/freellmapi`、`ranxianglei/billion-context`）
- **メディア・データ系の独立系プロジェクト**: LibreSpark/LibreTV、iptv-org/iptv、mifi/lossless-cut、Renhuai123/ziwei-doushu はAIエージェント基盤とは直接関係しないが、動画視聴、ロスレス編集、命理学データセットという実用的・データ集約的な題材で一定の注目を集めている。（`LibreSpark/LibreTV`、`iptv-org/iptv`、`mifi/lossless-cut`、`Renhuai123/ziwei-doushu`）

### 補足的な観察

- 言語分布は入力一覧内ではすべてTypeScriptで、今回のトレンドは明確にTypeScript中心である
- starsDuringPeriodではmorluto/reaが88243と突出しており、他のAIエージェント関連リポジトリを大きく上回っている
- stablyai/orca、anomalyco/opencode、heygen-com/hyperframes、tashfeenahmed/freellmapi など中規模の伸びを示すリポジトリが複数あり、特定領域に人気が分散している
- iptv-org/iptv や mifi/lossless-cut のような既存実用ツール系もランクインしており、新規AIプロジェクトだけでなく継続利用型ツールにも需要がある

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 16 |

## Repository一覧

### 1. [morluto/rea](https://github.com/morluto/rea)

> Reverse engineer anything with agents, from app behavior down to native binaries.

- Language: TypeScript
- Stars: 378,468
- Forks: 94,542
- Stars in 1週間: 88,243
- Category: リバースエンジニアリングツール
- Keywords: `リバースエンジニアリング` `MCP` `AIエージェント` `バイナリ解析` `Electron` `CLI`
- Summary source: README

#### README要約

- REAは、AIエージェント経由でアプリやバイナリをリバースエンジニアリングするためのMCPサーバーおよびCLIツールです。
- ネイティブバイナリ、JavaScript/Electronアプリ、.NETアセンブリ、Webサイトなどを解析し、証拠付きの結果を返します。
- ソースコードなしで他アプリの機能の仕組みを調べ、自プロジェクト向けの実装を作成したい開発者や研究者向けです。
- npx rea-agents setupで導入でき、Node.js 22以降が必要。ネイティブ解析にはHopper、Ghidra、IDAのいずれかが必要です。

---

### 2. [ruvnet/ruflo](https://github.com/ruvnet/ruflo)

> 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated

- Language: TypeScript
- Stars: 79,032
- Forks: 9,283
- Stars in 1週間: 3,349
- Category: AIエージェント基盤
- Keywords: `マルチエージェント` `Claude Code` `Codex` `MCP` `スワーム協調` `自己学習メモリ`
- Summary source: README

#### README要約

- Claude CodeやCodexなどのAIコーディングツールを拡張するエージェントメタハーネスで、複数のAIエージェントを協調させる実行基盤を提供する。
- 100以上の専門エージェント、スワーム協調、自己学習メモリ、マシン間フェデレーション通信、セキュリティガードレールなどを備え、MCPサーバーやプラグインとして動作する。
- Claude CodeやCodexなどを使う開発者が、複雑なタスクの自動化やマルチエージェントワークフローの構築に利用することを想定している。
- Claude Code 2.1.287以降が必要で、プラグインまたはnpxコマンドで導入する。Modsはアカウント権限で動作するため、インストール前にコードの確認が推奨される。

---

### 3. [stablyai/orca](https://github.com/stablyai/orca)

> Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.

- Language: TypeScript
- Stars: 104,924
- Forks: 6,626
- Stars in 1週間: 9,545
- Category: AIエージェント管理ツール
- Keywords: `AIエージェント` `並列実行` `git worktree` `マルチプラットフォーム` `オープンソース` `CLI`
- Summary source: README

#### README要約

- Orcaは複数のAIコーディングエージェントを一元管理するオーケストレーションツールです。
- 各エージェントを独立したgit worktreeで並列実行し、結果を比較・マージできます。
- デスクトップ・モバイル・リモート環境で動作し、自分のサブスクリプションで任意のCLIエージェントを実行可能です。
- MITライセンスのオープンソースで、macOS/Windows/Linux向けにダウンロード提供されています。

---

### 4. [anomalyco/opencode](https://github.com/anomalyco/opencode)

> The open source coding agent.

- Language: TypeScript
- Stars: 221,073
- Forks: 29,560
- Stars in 1週間: 6,765
- Category: AIコーディングエージェント
- Keywords: `オープンソース` `AI` `コーディングエージェント` `CLI` `TypeScript` `デスクトップアプリ`
- Summary source: README

#### README要約

- OpenCodeはオープンソースのAIコーディングエージェントです。
- buildとplanの2つの内蔵エージェントをTabキーで切り替えられ、planは読み取り専用で分析やコード探索に適しています。
- 開発作業や不慣れなコードベースの調査、変更計画の立案を行う開発者向けです。
- npm、Homebrew、インストールスクリプトなどで導入でき、0.1.xより古い版は事前に削除するよう案内されています。

---

### 5. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 13,908
- Forks: 1,384
- Stars in 1週間: 1,946
- Category: 開発者ツール
- Keywords: `Cursor` `プラグイン` `マーケットプレイス` `エージェント` `MCP` `SaaS連携`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール・フレームワーク・SaaS製品向けの多数のプラグインを提供するマーケットプレイスリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェスト、スキル、ルール、MCP設定などを含む構成。
- Cursorエディタの機能を拡張したい開発者や、GitHub・Google Workspace・Salesforceなど外部サービスと連携したいユーザー向け。
- ルートの`marketplace.json`で全プラグインを管理し、各プラグインは独自のREADME・CHANGELOG・LICENSEを持つ。ライセンスはMIT。

---

### 6. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 71,461
- Forks: 6,455
- Stars in 1週間: 5,553
- Category: 動画生成フレームワーク
- Keywords: `HTML to Video` `MP4レンダリング` `AIエージェント` `TypeScript` `CLI` `アニメーション`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして動作する。
- Claude Code、Codex、Cursorなどのコーディングエージェントを使う開発者や、動画制作を自動化したいチームが対象。
- Node.js 22以上とFFmpegが必要で、npx hyperframes initでプロジェクトを作成しpreviewとrenderコマンドで動作確認できる。

---

### 7. [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

- Language: TypeScript
- Stars: 29,851
- Forks: 8,018
- Stars in 1週間: 1,733
- Category: AI開発ツール
- Keywords: `AIエージェント` `コントロールパネル` `Claude Code` `Codex` `リモート開発` `オープンソース`
- Summary source: README

#### README要約

- T3 Codeは、マシン上のAIエージェントを制御するための「エージェントハーネス・コントロールサーフェス」です。
- iOS/Androidモバイルアプリ、Webアプリ、Electron製デスクトップアプリから、Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravityなどのエージェントを操作できます。
- 複数のAIコーディングエージェントを一元的に管理し、リモートからもアクセスしたい開発者を対象としています。
- 利用には少なくとも1つのプロバイダーのCLIインストールと認証が必要で、プロジェクトは初期段階のためバグが含まれる可能性があります。

---

### 8. [elie222/rakazo](https://github.com/elie222/rakazo)

> Open-source Grok Bot alternative. Choose your own model and sandbox.

- Language: TypeScript
- Stars: 5,594
- Forks: 989
- Stars in 1週間: 1,094
- Category: AIエージェント
- Keywords: `オープンソース` `セルフホスト` `AIアシスタント` `永続的ボット` `Grok Bot代替` `TypeScript`
- Summary source: README

#### README要約

- Rakazoは、自分のマシンで実行できるオープンソースのセルフホスト型AIアシスタントです。
- 独自の会話、メモリ、ルーチンを持つ永続的なボットを作成でき、音声モードやブラウザ、ターミナルへのアクセスが可能です。
- Grok Botなどの代替として、自分のモデルとサンドボックスプロバイダーを選んで使いたいユーザーに適しています。
- Docker EngineとComposeプラグインが必要で、提供されるインストーラースクリプトで簡単にセットアップできます。

---

### 9. [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu)

> 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据

- Language: TypeScript
- Stars: 7,253
- Forks: 1,479
- Stars in 1週間: 2,100
- Category: 命理学・データセット
- Keywords: `紫微斗数` `排盤エンジン` `倪海厦` `天紀` `データセット` `TypeScript`
- Summary source: README

#### README要約

- 倪海厦《天紀》体系に基づく紫微斗数のオープンソース排盤エンジンおよびデータセットプロジェクト。
- 完全な排盤アルゴリズム、四化システム、格局知識ベース、古籍原文データを含み、67.5万枚の命盤×13次元の解読データセットv4.0を公開。
- 命理学研究者、AI開発者、データサイエンティスト向けで、モデル微調整、RAG検索ソース、A/Bテスト基盤などに活用可能。
- コードはMITライセンス、データはCC BY 4.0で商用利用可能だが、倪師原話はCC BY-NC-SA 4.0で非商用に限定される。

---

### 10. [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)

> 7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.

- Language: TypeScript
- Stars: 40,925
- Forks: 5,520
- Stars in 1週間: 4,077
- Category: LLM APIゲートウェイ
- Keywords: `OpenAI互換API` `無料LLMプロバイダー` `スマートルーティング` `自動フェイルオーバー` `TypeScript` `セルフホスト`
- Summary source: README

#### README要約

- 34の無料LLMプロバイダーと635の無料モデルエンドポイントを、単一のOpenAI互換/v1 APIの背後に集約するルーターです。
- スマートルーティング、レート制限時の自動フェイルオーバー、暗号化されたキー保存、キーごとの使用量追跡により無料枠内での運用を支援します。
- Claude CodeやCodex CLIなどのコーディングエージェントやOpenAI互換クライアントから、個人的な実験・学習用途で利用することを想定しています。
- macOS/WindowsアプリやDockerで導入可能ですが、本番利用は非推奨で、各プロバイダーの利用規約遵守はユーザー自身の責任です。

---

### 11. [thesysdev/openui](https://github.com/thesysdev/openui)

> The Open Standard for Generative UI

- Language: TypeScript
- Stars: 13,626
- Forks: 900
- Stars in 1週間: 2,099
- Category: Generative UIフレームワーク
- Keywords: `Generative UI` `OpenUI Lang` `ストリーミング` `LLM` `React` `TypeScript`
- Summary source: README

#### README要約

- OpenUIは、コンパクトでストリーミングファーストな言語を中心に構築された、フルスタックかつフレームワーク非依存のGenerative UIフレームワークです。
- コンポーネントライブラリからプロンプトを生成し、LLMの出力をOpenUI LangとしてストリーミングしながらReact・Vue・Svelte・Angular向けレンダラーで段階的に描画します。
- AIアシスタントやコパイロット、チャットUIなど、モデル生成UIを組み込みたい開発者が対象で、React向けには組み込みコンポーネントライブラリやチャットUIも提供されます。
- npx @openuidev/cli@latest createで雛形アプリを作成でき、ライセンスはMITです。OpenUI名を使う暗号資産・トークンは公式と無関係と明記されています。

---

### 12. [LibreSpark/LibreTV](https://github.com/LibreSpark/LibreTV)

> 一分钟搭建影视站，支持Docker等部署方式

- Language: TypeScript
- Stars: 21,611
- Forks: 29,995
- Stars in 1週間: 2,679
- Category: 動画ストリーミングプラットフォーム
- Keywords: `動画集約` `Next.js` `HLS再生` `IPTV` `Docker` `PWA`
- Summary source: README

#### README要約

- Next.js 15 + TypeScript + Tailwind CSSで構築された無料のオンライン動画集約検索・視聴プラットフォーム。
- 複数ソースのサーバーサイド並列検索、同名動画の集約、ArtPlayer + hls.jsによるHLS再生、ライブ/IPTV（M3U解析、EPG対応）、IndexedDBでの進捗同期などを提供。
- 自分の動画サイトを構築したいユーザー向けで、Docker、Docker Compose、スタンドアロンパッケージ、手動実行など複数のデプロイ方法をサポート。
- デプロイにはPASSWORD環境変数の設定が必須。公開サービスではHTTPSの使用を推奨。コンテンツは保存せず、サードパーティの公開インターフェースの集約と再生のみを提供。

---

### 13. [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)

> A context-compression plugin for month-long single sessions (billions of tokens) ,small context windows (a 100K context is enough) and token savings (5x fewer tokens) .上下文压缩插件，月级长会话会话， 兼顾小窗口(100k上下文足矣)省token(省5倍token) . billion-context is all you need

- Language: TypeScript
- Stars: 2,613
- Forks: 222
- Stars in 1週間: 937
- Category: コンテキスト圧縮プロキシ
- Keywords: `コンテキスト圧縮` `AIコーディングエージェント` `プロキシ` `トークン削減` `長期セッション` `TypeScript`
- Summary source: README

#### README要約

- AIコーディングエージェントとモデルAPIの間に挟まり、会話コンテキストを圧縮するTypeScript製プロキシプラグイン。
- acp-kernelによる増分・可逆・プレフィックスキャッシュフレンドリーな圧縮を行い、compress/decompress/search_context/acp_statusの4ツールをモデルに注入する。
- Claude Code、Codex、OpenCode、Gemini CLIなど多数のエージェントに対応し、月単位の長期セッションやトークン削減を目指す開発者向け。
- npmでグローバルインストール可能だが、開発は初期段階で実モデル統合テストは今後の課題。MITライセンスに帰属表示の追加条項が付く。

---

### 14. [iptv-org/iptv](https://github.com/iptv-org/iptv)

> Collection of publicly available IPTV channels from all over the world

- Language: TypeScript
- Stars: 142,236
- Forks: 8,373
- Stars in 1週間: 1,077
- Category: メディア
- Keywords: `IPTV` `M3U` `プレイリスト` `ストリーミング` `EPG` `オープンデータ`
- Summary source: README

#### README要約

- 世界中の公開されているIPTVチャンネルを集めたコレクションです。
- M3Uプレイリスト形式で提供され、対応するビデオプレイヤーにリンクを貼るだけで視聴できます。
- IPTVを視聴したいユーザーや、公開チャンネルのデータを利用したい開発者向けです。
- リポジトリ自体は動画をホストせず、公開リンクのみを収録している点に注意が必要です。

---

### 15. [mifi/lossless-cut](https://github.com/mifi/lossless-cut)

> The swiss army knife of lossless video/audio editing

- Language: TypeScript
- Stars: 45,183
- Forks: 2,272
- Stars in 1週間: 526
- Category: 動画・音声編集ツール
- Keywords: `ロスレス編集` `FFmpeg` `動画カット` `リマックス` `クロスプラットフォーム` `TypeScript`
- Summary source: README

#### README要約

- LosslessCutは、動画・音声・字幕などのメディアファイルを再エンコードせずに高速かつロスレスで編集できる、クロスプラットフォーム対応のFFmpeg GUIツールです。
- FFmpegによるほぼ直接のデータコピーで、ロスレスなカット・トリミング、同一コーデックの結合、トラックの追加・削除・抽出、MKVからMP4へのリマックスなどを数秒で実行します。
- ビデオカメラ、GoPro、ドローンなどで撮影した大容量動画から必要な部分だけを抽出し、画質を落とさずに容量を節約したいユーザーに適しています。
- macOS、Windows、Linux向けにGitHubから無料でダウンロード可能で、ストア版は自動更新付きの有償サポート版です。なお、WindowsのAPPXとmacOSのPKGは動作しません。

---

### 16. [makecindy/cindy](https://github.com/makecindy/cindy)

> Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。

- Language: TypeScript
- Stars: 4,058
- Forks: 583
- Stars in 1週間: 577
- Category: AIエージェント
- Keywords: `AIエージェント` `オープンソース` `ローカル実行` `マルチハーネス` `デスクトップアプリ` `モバイルアプリ`
- Summary source: README

#### README要約

- Cindyは、ローカルマシン上で実際の作業を実行するオープンソースのAIエージェントクライアントです。
- Claude CodeやCodexなどのハーネスとモデルを自由に組み合わせ、タスク中の切り替えや並列実行が可能です。
- デスクトップ・モバイルアプリを通じて、ブラウザやスマートフォンを操作し、実際のファイルやアプリで作業を完了させます。
- Node.js 22.xとpnpm 10.xが必要で、公式クラウドサービスまたはローカルモデルで動作します。

---
