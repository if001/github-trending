+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/10/11'
date = 2026-10-11T00:08:56.028Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月11日 0:08:56
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 17
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> AIエージェントの実用化・運用基盤を支えるツール群が台頭し、TypeScriptが圧倒的な主流言語となっている

- AIエージェントのセッション管理・コンテキスト圧縮・オーケストレーションなど、実運用を支える基盤ツールが多数ランクインしている
- Claude Code、Codex、Cursorなど複数のAIコーディングエージェントを統合的に扱うツールが目立つ
- 動画生成・編集・ダウンロードなどメディア処理系のオープンソースツールも複数登場している
- TypeScriptが17件中15件以上を占め、言語分布が極めて偏っている
- 無料LLMプロバイダの集約やローカルファーストのエージェントなど、コスト・プライバシー意識の高いプロジェクトが散見される

### 主なテーマ

- **AIエージェントのコンテキスト・メモリ管理**: セッションをまたいだ記憶の永続化やコンテキスト圧縮によるトークン削減を実現するツールが複数ランクイン。claude-memは4035スター、billion-contextは259スターを獲得しており、長期セッションや小さなコンテキストウィンドウでの運用課題に対応する需要が高い。（`thedotmack/claude-mem`、`ranxianglei/billion-context`）
- **マルチエージェントのオーケストレーション・統合管理**: 複数のAIコーディングエージェントをチームとして管理するopenrig（2068スター）、モバイルやデスクトップからエージェントを制御するt3code（2367スター）、Cloudflare Workers上でエージェントワークスペースを構築するcloudflare-os（862スター）など、エージェントの統合運用基盤が注目されている。（`mvschwarz/openrig`、`pingdotgg/t3code`、`cloudflare/cloudflare-os`）
- **AI駆動のテスト・ブラウザ自動化**: 自然言語でE2Eテストを記述しAIエージェントが操作するtester-army/e2eが6564スターで最高値を記録。nanobrowserはChrome拡張としてマルチエージェントによるウェブ自動化を提供し、AIを活用した操作自動化への関心の高さがうかがえる。（`tester-army/e2e`、`nanobrowser/nanobrowser`）
- **動画・メディア処理ツール**: HTMLから動画を生成するhyperframes（4081スター）、オープンソースのCapCut代替OpenCut（2074スター）、ターミナルから動画をダウンロードするyoinks（1940スター）がランクインし、動画関連のオープンソースツールが複数登場している。（`heygen-com/hyperframes`、`OpenCut-app/OpenCut`、`pablostanley/yoinks`）
- **LLMコスト削減・ローカルファーストの取り組み**: 34の無料LLMプロバイダを単一APIに集約するfreellmapi（2591スター）、llama.cppでローカルモデルを動かすatomic-agent（606スター）など、API費用の抑制やプライバシー保護を意識したプロジェクトが存在感を示している。（`tashfeenahmed/freellmapi`、`AtomicBot-ai/atomic-agent`）

### 補足的な観察

- 言語分布はTypeScriptが17件中15件以上を占め、Goが1件（FounderOS）のみで、TypeScriptの支配的なシェアが際立っている
- スター獲得数のトップはtester-army/e2eの6564で、次いでhyperframesの4081、claude-memの4035と続く
- Claude Code、Codex、Cursor、Gemini CLIなど複数のAIエージェントへの対応を明示するリポジトリが多く、マルチエージェント対応が事実上の標準要件になりつつある
- FounderOS（77スター）やbillion-context（259スター）など、スター数は少ないがニッチな課題に特化したプロジェクトもランクインしている

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 16 |
| Go | 1 |

## Repository一覧

### 1. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)

> Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More

- Language: TypeScript
- Stars: 99,239
- Forks: 8,692
- Stars in 1週間: 4,035
- Category: AIエージェントメモリ
- Keywords: `Claude Code` `永続メモリ` `コンテキスト圧縮` `セッション継続` `MCP` `TypeScript`
- Summary source: README

#### README要約

- Claude CodeなどのAIエージェント向けに、セッションをまたいだ永続的なコンテキスト記憶を提供するメモリ圧縮システム。
- ツール使用の観察を自動キャプチャし、AIで意味的な要約を生成して将来のセッションに注入する。SQLite+FTS5やChromaによるハイブリッド検索、Webビューア、プライバシータグを備える。
- Claude Code、OpenCode、OpenClaw、Codex、Gemini、Copilotなど複数のエージェント/IDEを使う開発者が、プロジェクト知識の継続性を維持する用途に向く。
- npx claude-mem install またはプラグインコマンドで導入する。npmグローバルインストールはSDKのみでフック登録されない点に注意。ホスト型CMEM Proは30日無料トライアル後、Anthropicプランへフォールバックする。ライセンスはApache-2.0。

---

### 2. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 60,354
- Forks: 5,390
- Stars in 1週間: 4,081
- Category: 動画生成フレームワーク
- Keywords: `HTML to Video` `AIエージェント` `MP4レンダリング` `TypeScript` `CLI` `オープンソース`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして機能する。
- Claude Code、Codex、Cursor、Gemini CLIなどのAIエージェントを使って動画、デッキ、モーショングラフィックスを作成する開発者やチーム向け。
- Node.js 22以上が必要で、開発用にクローンする場合はGit LFSのインストールが必要。ライセンスはApache 2.0。

---

### 3. [mvschwarz/openrig](https://github.com/mvschwarz/openrig)

> Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.

- Language: TypeScript
- Stars: 6,732
- Forks: 498
- Stars in 1週間: 2,068
- Category: AIエージェントオーケストレーション
- Keywords: `マルチエージェント` `Claude Code` `Codex` `YAML定義` `tmux` `セルフホスト`
- Summary source: README

#### README要約

- Claude CodeやCodexなどのAIコーディングエージェントを、YAMLで定義したチームとして一元管理し、1コマンドで起動できるオープンソースのエージェントネットワーク構築ツール。
- リードエージェントが専門エージェントを横断調整し、役割・共有コンテキスト・担当作業を持つ永続的なチームを提供。TUIダッシュボードやtmuxベースのターミナル統合を備える。
- 複数のAIエージェントを1つのリポジトリやプロダクト開発で協調させたい開発者向け。starter/workshop/factoryなどのプリセットチームが用意されている。
- Node.js 22/24とtmuxが必要でmacOS/Linux対応（WindowsはWSL2経由）。セットアップ時にプロバイダのフックやワークスペース信頼設定が変更されるため、事前確認とバックアップが推奨される。

---

### 4. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 10,755
- Forks: 1,026
- Stars in 1週間: 1,110
- Category: 開発ツール
- Keywords: `Cursor` `プラグイン` `マーケットプレイス` `エディタ拡張` `SaaS連携` `TypeScript`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール・フレームワーク・SaaS製品向けの多様なプラグインを提供するマーケットプレイスリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェストで管理される。スキル、ルール、MCPサーバー定義などを含む。
- Cursorエディタの機能を拡張したい開発者や、GitHub・Google Workspace・Salesforceなどの外部サービスと連携したいユーザー向け。
- ルートの`marketplace.json`で全プラグインを一覧管理。MITライセンスで提供され、TypeScriptが主要言語として使用されている。

---

### 5. [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

- Language: TypeScript
- Stars: 26,813
- Forks: 7,030
- Stars in 1週間: 2,367
- Category: 開発者ツール
- Keywords: `AIエージェント` `Claude Code` `Codex` `リモート開発` `Electron` `TypeScript`
- Summary source: README

#### README要約

- T3 Codeは、マシン上のAIエージェントを制御するための「エージェントハーネス・コントロールサーフェス」です。
- Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravityなどの既存サブスクリプションと連携し、iOS/Androidアプリ、Webアプリ、Electronベースのデスクトップアプリから操作できます。
- エージェントを活用した開発体験を求める開発者を対象としており、リモートアクセスやバックグラウンドサービスとしての実行にも対応しています。
- 利用前に少なくとも1つのプロバイダー（Codex、Claude、Cursorなど）をインストールして認証する必要があり、プロジェクトは初期段階のためバグが含まれる可能性があります。

---

### 6. [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)

> A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need

- Language: TypeScript
- Stars: 776
- Forks: 74
- Stars in 1週間: 259
- Category: AIコーディング支援ツール
- Keywords: `コンテキスト圧縮` `プロキシ` `Claude Code` `トークン削減` `長期セッション` `TypeScript`
- Summary source: README

#### README要約

- AIコーディングエージェントとモデルAPIの間に挟まるコンテキスト圧縮プロキシで、長時間セッションでもコンテキストウィンドウ超過を防ぐ。
- acp-kernelによる増分・可逆・プレフィックスキャッシュフレンドリーな圧縮を行い、compress/decompress/search_context/acp_statusの4ツールをモデル自身が呼び出す。
- Claude Code、Codex、OpenCode、Gemini CLI、aiderなど多数のエージェントに対応し、数日〜数か月規模の長期コーディングセッションを使う開発者向け。
- npmでグローバルインストールしエージェントのベースURLをプロキシに向ける。早期段階で実モデル統合テストはこれから。MITライセンスに表示義務の追加条項あり。

---

### 7. [tester-army/e2e](https://github.com/tester-army/e2e)

> Next generation e2e testing framework for web and mobile apps.

- Language: TypeScript
- Stars: 8,720
- Forks: 422
- Stars in 1週間: 6,564
- Category: E2Eテストフレームワーク
- Keywords: `E2Eテスト` `AIエージェント` `自然言語テスト` `Playwright` `モバイルテスト` `TypeScript`
- Summary source: README

#### README要約

- Webおよびモバイルアプリ向けのエンドツーエンドテストフレームワークで、自然言語で目標を記述するとAIエージェントがアプリを操作してテストを実行する。
- エージェントの操作は記録され、次回実行時はアプリが変更されるまでモデル呼び出しなしでリプレイされ、ロケーターとアサーションで結果を検証できる。
- Web（Playwright経由のChromium/Firefox/WebKit）とモバイル（iOS/Androidシミュレーター）に対応し、Vite、Next.js、Expo、Flutterなど多様なスタックのサンプルが用意されている。
- npx e2e initで初期設定を行い、モデルは自前のサブスクリプション・APIキー・ローカルモデルを利用可能。1.0に向けて活発に開発中で、APIや設定はマイナーリリース間で変更される可能性がある。

---

### 8. [pablostanley/yoinks](https://github.com/pablostanley/yoinks)

> yoink any video from your terminal. no shady ads.

- Language: TypeScript
- Stars: 5,689
- Forks: 480
- Stars in 1週間: 1,940
- Category: 動画ダウンロードCLI
- Keywords: `動画ダウンロード` `CLI` `yt-dlp` `ターミナル` `TypeScript` `Ink`
- Summary source: README

#### README要約

- ターミナルからYouTube、X/Twitter、Instagram、TikTokなど1,800以上のサイトの動画をダウンロードできるCLIツール。
- yt-dlpを内部で利用し、URLを貼るだけで解像度や音声のみのMP3を選択可能。Ink製のフルスクリーンUIでマウス操作にも対応する。
- 広告や偽のダウンロードボタンがなく、個人的なアーカイブ用途を想定したユーザー向けのツール。
- Node 18以上が必要で、npm install -g yoinksまたはnpx yoinksで導入可能。yt-dlpとffmpegは自動で取得される。

---

### 9. [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut)

> The open-source CapCut alternative

- Language: TypeScript
- Stars: 93,487
- Forks: 9,178
- Stars in 1週間: 2,074
- Category: 動画編集ソフト
- Keywords: `オープンソース` `動画編集` `CapCut代替` `Rust` `クロスプラットフォーム` `MITライセンス`
- Summary source: README

#### README要約

- Web、デスクトップ、モバイル向けの無料オープンソース動画エディタ。
- 現在Rustコアによる全面的な書き直しが進行中で、Editor API、プラグインアーキテクチャ、MCPサーバー、ヘッドレスモードなどを予定。
- 動画編集者や開発者向けで、現行版はopencut-classicリポジトリおよびopencut.appで利用可能。
- 開発にはprotoとmoonが必要で、アーキテクチャ設計中のため現時点では外部コントリビューションは受け付けていない。

---

### 10. [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os)

> Agent workspace built on Cloudflare Workers for creating documents, building apps, and running agents with your company’s context and systems.

- Language: TypeScript
- Stars: 11,335
- Forks: 1,352
- Stars in 1週間: 862
- Category: AIワークスペース基盤
- Keywords: `Cloudflare Workers` `AIエージェント` `サンドボックス` `Gatekeepers` `Gadgets` `TypeScript`
- Summary source: README

#### README要約

- Cloudflare Workers上に構築されたAI生産性環境で、社内のコンテキストを持つエージェントが文書作成やアプリ構築を支援する「企業向けOS」です。
- エージェントチャットUI、サンドボックス化されたアプリ開発環境（Gadgets）、およびGatekeepersと呼ばれるセキュリティフレームワークを提供します。
- 自社専用のカスタマイズ可能なAIワークスペースを求める企業や、安全にエージェントを活用したい組織を対象としています。
- pnpmでローカル実行可能ですが、現在は早期アクセス段階であり、外部からのコード貢献は原則として受け付けていません。

---

### 11. [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)

> 7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.

- Language: TypeScript
- Stars: 32,933
- Forks: 4,554
- Stars in 1週間: 2,591
- Category: LLM APIゲートウェイ
- Keywords: `OpenAI互換API` `無料LLMプロバイダ集約` `スマートルーティング` `自動フェイルオーバー` `TypeScript` `セルフホスト`
- Summary source: README

#### README要約

- 34の無料LLMプロバイダと635の無料モデルエンドポイントを、単一のOpenAI互換/v1 APIの背後に集約するルーター。
- スマートルーティング、レート制限時の自動フェイルオーバー、キーの暗号化保存、キーごとの使用量追跡で無料枠内の運用を支援する。
- Claude CodeやCodex CLIなどのコーディングエージェントやOpenAI互換クライアントから利用でき、個人の実験・学習用途を想定している。
- デスクトップアプリやDockerで導入可能。本番利用は非推奨で、各プロバイダの利用規約遵守はユーザー責任。ライセンスはMIT。

---

### 12. [DmNote-App/DmNote](https://github.com/DmNote-App/DmNote)

> Make it yours. A customizable key viewer for DJMAX RESPECT V and any game.

- Language: TypeScript
- Stars: 2,901
- Forks: 107
- Stars in 1週間: 1,071
- Category: キービューアー
- Keywords: `キービューアー` `DJMAX RESPECT V` `オーバーレイ` `OBS連携` `カスタムCSS` `Tauri`
- Summary source: README

#### README要約

- DJMAX RESPECT V向けに作られたカスタマイズ可能なキービューアーで、他のゲームでも利用できる。
- リアルタイム入力表示、キーマッピング、ノート効果、キーカウンター、KPS統計、カスタムCSSやプラグインによる装飾、OBSブラウザソース対応のオーバーレイ機能を備える。
- ストリーミングやプレイ動画でキー入力を表示したいユーザー向けで、OBSモードを使えばゲームフレームへの負荷を抑えられる。
- Windows 10/11とmacOSに対応し、ダウンロードして解凍するだけで使えるが、macOSでは別途権限設定が必要で、信頼できないプラグインは読み込まないよう警告されている。

---

### 13. [AtomicBot-ai/atomic-agent](https://github.com/AtomicBot-ai/atomic-agent)

> Atomic Agent is a local-first AI agent. Runs open-weight models on your own machine via llama.cpp.

- Language: TypeScript
- Stars: 3,229
- Forks: 265
- Stars in 1週間: 606
- Category: AIエージェント
- Keywords: `ローカルファースト` `AIエージェント` `llama.cpp` `オープンソース` `TypeScript` `TurboQuant`
- Summary source: README

#### README要約

- Atomic Agentは、ローカルファーストで動作するオープンソースのAIエージェントです。
- ブラウザ操作、ファイル編集、承認済みコマンドの実行を行い、セッションをまたいでコンテキストを記憶します。
- ローカルモデルとクラウドモデルの両方に対応し、Fusionモードでは計画と実行を分担させることが可能です。
- llama.cppを基盤とし、コンシューマーハードウェア上で小型の量子化モデルを実用的に動かすことを目指しています。

---

### 14. [reconurge/flowsint](https://github.com/reconurge/flowsint)

> A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.

- Language: TypeScript
- Stars: 9,612
- Forks: 1,182
- Stars in 1週間: 520
- Category: OSINT調査ツール
- Keywords: `OSINT` `グラフ探索` `サイバーセキュリティ` `エンリッチャー` `Docker` `調査支援`
- Summary source: README

#### README要約

- Flowsintは、倫理的な調査・透明性・検証を目的としたオープンソースのOSINTグラフ探索ツールである。
- 視覚的なグラフインターフェースと自動エンリッチャーにより、ドメイン・IP・メール・暗号資産などのエンティティ間の関係を探索できる。
- サイバーセキュリティ研究者、ジャーナリスト、法執行機関、脅威インテリジェンス担当者などの調査用途を対象としている。
- DockerとMake（WindowsはDocker DesktopとGit）で導入でき、データはローカルに保存されるが、ネットワーク公開時は.envのシークレット変更が必要である。

---

### 15. [Bennettxai/FounderOS](https://github.com/Bennettxai/FounderOS)

> An open-source, single-operator business command center: run a one-person operated company as AI-assisted departments (comms, funnel, social, finances, agents, and a knowledge graph) from one live dashboard.

- Language: Go
- Stars: 1,024
- Forks: 293
- Stars in 1週間: 77
- Category: ビジネス管理ダッシュボード
- Keywords: `一人会社` `AIエージェント` `コマンドセンター` `Go` `ナレッジグラフ` `オープンソース`
- Summary source: README

#### README要約

- 一人会社をAI支援の「部門」として運営するための、オープンソースのビジネスコマンドセンター。
- 統合受信トレイ、クライアントファネル、SNS成長、財務、ナレッジグラフ、AIエージェント群を一画面に集約する。
- フリーランサー、ソロプレナー、個人創業者など、事業全体を一人で回している人が対象。
- Go製バックエンドにPostgreSQLとRedisが必要で、外部への書き込みや定期実行は明示的に有効化するまで無効。

---

### 16. [nanobrowser/nanobrowser](https://github.com/nanobrowser/nanobrowser)

> Open-Source Chrome extension for AI-powered web automation. Run multi-agent workflows using your own LLM API key. Alternative to OpenAI Operator.

- Language: TypeScript
- Stars: 14,054
- Forks: 1,483
- Stars in 1週間: 173
- Category: AIブラウザ自動化拡張機能
- Keywords: `Chrome拡張機能` `AIエージェント` `ウェブ自動化` `マルチエージェント` `LLM` `オープンソース`
- Summary source: README

#### README要約

- ブラウザ上で動作するオープンソースのAIウェブ自動化ツールで、OpenAI Operatorの無料代替として機能します。
- 複数のAIエージェントが連携するマルチエージェントシステムを採用し、独自のLLM APIキーを使用して複雑なウェブワークフローを実行します。
- プライバシーを重視するユーザーや、サブスクリプション費用を抑えたい開発者向けに、ローカルブラウザ内での完結型自動化を提供します。
- Chrome Web Storeから無料でインストール可能で、OpenAI、Anthropic、Gemini、DeepSeekなど複数のLLMプロバイダーに対応しています。

---

### 17. [hicccc77/WeFlow](https://github.com/hicccc77/WeFlow)

> WeFlow - 一个本地的微信聊天记录导出和年度报告应用

- Language: TypeScript
- Stars: 14,929
- Forks: 616
- Stars in 1週間: 268
- Category: チャット履歴管理ツール
- Keywords: `WeChat` `チャット履歴` `エクスポート` `年次レポート` `ローカル` `HTTP API`
- Summary source: README

#### README要約

- WeFlowは完全ローカルで動作するリアルタイムのWeChatチャット履歴閲覧・分析・エクスポートツールです。
- チャット履歴の取得・エクスポートに加え、独自のデータや年次レポートを生成できます。
- チャット履歴を管理・分析したいユーザーや、HTTP API経由で外部システムと連携したい開発者向けです。
- Windows、macOS、Linuxに対応し、ソースからビルドする場合はnpm installとnpm run devで実行できます。

---
