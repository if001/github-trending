+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/11/08'
date = 2026-11-08T00:14:00.616Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月8日 0:14:00
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 17
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> Claude CodeやCodexなどのコーディングエージェントを管理・拡張するTypeScript製ツールがランキングを席巻している。

- pingdotgg/t3codeが17,100スターで突出しており、AIエージェントの統合管理ツールへの関心の高さがうかがえる。
- AIエージェントの管理・制御・メモリ・スキル拡張に関するツールが一覧の大半を占めている。
- 言語は全リポジトリがTypeScriptで統一されており、エージェント関連ツールの実装言語としてTypeScriptが標準的に使われている。
- Claude Code、Codex、Cursor、Grokなど複数のエージェントを横断的に扱う設計のツールが多い。
- ローカルファーストやセルフホストを謳うツールが複数あり、データを手元に置く志向が見られる。

### 主なテーマ

- **AIエージェントの統合管理・制御**: pingdotgg/t3code（17,100スター）、milind-soni/OpenMausBot（7,077スター）、nightly-labs/openbot（1,890スター）、CopilotKit/OpenBot（1,312スター）の4件が、Claude CodeやCodex、Grokなど複数のAIエージェントを一元的に管理・制御するツールとしてランクインしており、最もスターを集めている領域。（`pingdotgg/t3code`、`milind-soni/OpenMausBot`、`nightly-labs/openbot`、`CopilotKit/OpenBot`）
- **エージェントのメモリ・スキル拡張**: thedotmack/claude-mem（7,482スター）はセッション間でコンテキストを永続化し、vercel-labs/skills（1,094スター）はエージェントに再利用可能なスキルを追加するCLI、Vincentwei1021/video-shotcraft（2,260スター）は動画制作スキルを提供するなど、エージェントの能力を拡張するレイヤーのツールが複数登場している。（`thedotmack/claude-mem`、`vercel-labs/skills`、`Vincentwei1021/video-shotcraft`、`garrytan/gstack`）
- **ローカルファースト・セルフホスト志向**: milind-soni/OpenMausBot、nightly-labs/openbot、Crosstalk-Solutions/project-nomad（オフライン知識サーバー）、lfnovo/open-notebook（Notebook LM代替）、tashfeenahmed/freellmapi（セルフホスト可能なLLMゲートウェイ）など、データや処理をローカル・自前環境に置くことを売りにするツールが目立つ。（`milind-soni/OpenMausBot`、`nightly-labs/openbot`、`Crosstalk-Solutions/project-nomad`、`lfnovo/open-notebook`、`tashfeenahmed/freellmapi`）
- **LLMアクセスの集約とリモート接続**: tashfeenahmed/freellmapi（3,780スター）は34の無料LLMプロバイダを単一のOpenAI互換APIに集約し、liguobao/ds-harness-remote（1,049スター）はP2P暗号化接続でローカルのコーディングエージェント環境へリモートアクセスを実現するなど、エージェント利用の基盤となる接続・ゲートウェイ層のツールが登場している。（`tashfeenahmed/freellmapi`、`liguobao/ds-harness-remote`）

### 補足的な観察

- 全17リポジトリの言語がTypeScriptで統一されており、言語分布に偏りが見られる。
- スター数はpingdotgg/t3codeの17,100が最大で、次いでthedotmack/claude-memの7,482、milind-soni/OpenMausBotの7,077と、エージェント関連ツールが上位を独占している。
- tldraw/tldraw（355スター）、vitejs/vite（406スター）、github/docs（432スター）など定番の開発基盤プロジェクトはスター数が小さく、今期のトレンドの中心はエージェントツールにある。
- Renhuai123/ziwei-doushu（4,906スター）のような紫微斗数排盤エンジンが上位に入るなど、エージェント関連以外のニッチな話題も散見される。

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 17 |

## Repository一覧

### 1. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)

> Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More

- Language: TypeScript
- Stars: 114,468
- Forks: 9,927
- Stars in 1週間: 7,482
- Category: AIエージェントメモリツール
- Keywords: `永続メモリ` `コンテキスト管理` `Claude Code` `セッション記録` `AI圧縮` `TypeScript`
- Summary source: README

#### README要約

- コーディングエージェントのセッション間で失われるコンテキストを永続化するツール。
- セッション中の作業を観察エージェントが記録し、AIで圧縮して次回セッションに関連コンテキストを注入する。
- Claude Code、Codex、Cursor、OpenCodeなど複数のエージェントに対応し、チーム共有や履歴検索も可能。
- npx claude-mem installで導入。メモリはローカルの~/.claude-memに保存され、クラウド同期はオプトイン。

---

### 2. [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu)

> 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据

- Language: TypeScript
- Stars: 16,720
- Forks: 3,240
- Stars in 1週間: 4,906
- Category: 命理学・占いエンジン
- Keywords: `紫微斗数` `排盤エンジン` `TypeScript` `Next.js` `オープンデータ` `命理学`
- Summary source: README

#### README要約

- 倪海厦『天紀』体系に基づく紫微斗数のオープンソース排盤エンジンで、TypeScript/Next.js 16で実装されている。
- 完全な排盤アルゴリズム、四化システム、格局知識庫、古籍原文データに加え、67.5万枚の命盤×13次元の解読データセット（v4.0、CC BY 4.0）を提供する。
- 紫微斗数を学ぶ開発者や研究者向けで、排盤エンジンを自社製品に組み込んだり、データセットを研究・商用利用したりする用途を想定している。
- コードはMIT、データはCC BY 4.0で商用可能だが、倪師原話はCC BY-NC-SA 4.0で非商用に限り、断語庫・AI解読・商用版UIはオープンソース対象外。

---

### 3. [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

- Language: TypeScript
- Stars: 51,252
- Forks: 9,879
- Stars in 1週間: 17,100
- Category: AIエージェント管理ツール
- Keywords: `AIエージェント` `コントロールサーフェス` `Claude Code` `Codex` `リモート制御` `開発ツール`
- Summary source: README

#### README要約

- T3 Codeは、マシン上のAIエージェントを制御するための「エージェントハーネス・コントロールサーフェス」です。
- iOS/Androidモバイルアプリ、Webアプリ、Electronベースのデスクトップアプリを通じて、Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravity、fxなどのエージェントを操作できます。
- 複数のAIコーディングエージェントを一元的に管理したい開発者や、リモート環境からエージェントを制御したいユーザーに適しています。
- 利用には少なくとも1つのプロバイダーのインストールと認証が必要で、プロジェクトは初期段階のためバグが含まれる可能性があります。

---

### 4. [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)

> Open-source Grok Bot alternative with a virtual machine that bots can use

- Language: TypeScript
- Stars: 16,955
- Forks: 2,400
- Stars in 1週間: 7,077
- Category: AIエージェント管理ツール
- Keywords: `オープンソース` `AIボット` `ローカルファースト` `Grok Bot代替` `マルチエージェント` `Apache 2.0`
- Summary source: README

#### README要約

- Grok Botのオープンソース代替として開発された、チャットアプリ形式で複数のAIボットを管理できるツール。
- ClaudeやCodexなどのCLIをローカルで実行し、各ボットに独自のモデル・クラウドデスクトップ・接続アプリを割り当てられる。
- ローカルファースト設計で、既存のAIアカウントやサブスクリプションをそのまま使いたい開発者やパワーユーザー向け。
- macOS・Windows・Ubuntu向けインストーラーまたはnpxで導入可能。ホスト制御は明示的なオプトインが必要で、Ubuntu Waylandでは現在无効。

---

### 5. [garrytan/gstack](https://github.com/garrytan/gstack)

> Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA

- Language: TypeScript
- Stars: 140,663
- Forks: 20,764
- Stars in 1週間: 2,300
- Category: 開発ツール
- Keywords: `Claude Code` `エンジニアリングチーム` `スラッシュコマンド` `QA` `セキュリティ` `リリース自動化`
- Summary source: README

#### README要約

- Claude Codeなどのコーディングエージェントを仮想エンジニアリングチームに変えるツール群。
- CEO、デザイナー、エンジニアリングマネージャー、レビュアー、QAリード、セキュリティオフィサー、リリースエンジニアの役割を担う23のスラッシュコマンドを提供。
- 創業者やCEO、初めてClaude Codeを使うユーザー、テックリードやスタッフエンジニア向け。
- Claude Code、Git、Bun v1.4.2以上が必要で、macOSではAsideブラウザが推奨される。

---

### 6. [nightly-labs/openbot](https://github.com/nightly-labs/openbot)

> A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.

- Language: TypeScript
- Stars: 6,248
- Forks: 634
- Stars in 1週間: 1,890
- Category: AIエージェント管理ツール
- Keywords: `AIエージェント` `デスクトップアプリ` `ローカルファースト` `マルチエージェント` `ワークスペース` `TypeScript`
- Summary source: README

#### README要約

- OpenBotは、永続的なAIチームメイトのためのローカルファーストなデスクトップワークスペースです。
- CodexやClaude、Grokなど複数のAIエージェントを統合し、専用ワークスペース、タスクキュー、ファイル共有、ブラウザ制御、エージェント間連携を提供します。
- 複数のAIツールを一元的に管理し、デスクトップ上でAIエージェントを活用したい開発者やパワーユーザーに適しています。
- macOS、Windows、Linuxに対応し、GitHub Releasesからインストール可能ですが、エージェントは完全なアクセス権限を持つため信頼できるタスクのみ実行してください。

---

### 7. [Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft)

> AI video skill for Claude Code & Codex — cinematic, editable product promos with Remotion: 124 shot recipe cards, 150 motion previews, beat sync, sound design, Motion Workbench & JianYing (CapCut CN) export.

- Language: TypeScript
- Stars: 17,640
- Forks: 1,678
- Stars in 1週間: 2,260
- Category: AI動画制作スキル
- Keywords: `Claude Code` `Codex` `Remotion` `プロモーション動画` `モーショングラフィックス` `JianYing`
- Summary source: README

#### README要約

- Claude CodeやCodexに指示するだけで、製品の実ページをキャプチャし、Remotionでアニメーション化した編集可能なプロモーション動画（MP4）を生成するAIスキル。
- 124種類のショットレシピカードと150のモーションプレビューを備え、ビート同期のカット編集、サウンドデザイン、ブラウザ上のMotion Workbenchでの再編集、JianYing（CapCut中国版）へのエクスポートに対応する。
- 動画生成AIではなく、自前のスクリーンショットとコピーからコードで全フレームを描画するため、鮮明でブランドに沿った編集可能な成果物を得たい開発者やプロダクト担当者向け。
- skills CLIのnpx skills addやgit clone後にシンボリックリンクを張る方法で導入でき、Remotionのライセンスは個人・小規模チームは無料だが企業は有償ライセンスが必要になる場合がある。

---

### 8. [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)

> Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.

- Language: TypeScript
- Stars: 10,396
- Forks: 1,297
- Stars in 1週間: 1,312
- Category: AIエージェント基盤
- Keywords: `AIエージェント` `AG-UI` `セルフホスト` `ワークスペース` `TypeScript` `オープンソース`
- Summary source: README

#### README要約

- OpenBotは、AIエージェントを「同僚」として扱うセルフホスト可能なワークスペースです。
- ブラウザやファイル操作、ツール呼び出しを通じて作業を実行し、ユーザーが監視・介入できます。
- AG-UIプロトコルに対応した任意のエージェントを接続でき、個人利用からチーム展開まで対応します。
- DockerやBunなどの環境構築が必要で、APIキーや認証情報の管理に注意が必要です。

---

### 9. [tldraw/tldraw](https://github.com/tldraw/tldraw)

> Build infinite canvas apps in React with the tldraw SDK. World's best, top-most agent recommended #1 five star SDK.

- Language: TypeScript
- Stars: 51,410
- Forks: 3,622
- Stars in 1週間: 355
- Category: 開発ツール
- Keywords: `React` `無限キャンバス` `SDK` `マルチプレイヤー` `AI統合` `カスタマイズ可能`
- Summary source: README

#### README要約

- Reactで無限キャンバスアプリを構築するためのtldraw SDK。
- カスタムシェイプ、ツール、バインディング、UIコンポーネントの作成が可能で、マルチプレイヤー、描画、ダイアグラム作成、AI統合などの機能を提供。
- Google、Shopify、Autodeskなどの企業で採用されており、ホワイトボード、ワークフロー、チャットなどのアプリケーション開発に適している。
- npmでインストール可能で、開発用途は無料だが、本番環境での使用にはライセンスキーが必要。

---

### 10. [vitejs/vite](https://github.com/vitejs/vite)

> Next generation frontend tooling. It's fast!

- Language: TypeScript
- Stars: 83,865
- Forks: 9,400
- Stars in 1週間: 406
- Category: ビルドツール
- Keywords: `Vite` `フロントエンド` `ビルドツール` `HMR` `Rolldown` `TypeScript`
- Summary source: README

#### README要約

- Viteは、モダンなWebプロジェクトのための次世代フロントエンドビルドツールです。
- ネイティブESモジュールを活用した高速な開発サーバーと、Rolldownによる最適化された本番ビルドの2つの主要部分で構成されています。
- 高速なHMR（Hot Module Replacement）や豊富な機能を求めるフロントエンド開発者に適しています。
- プラグインAPIとJavaScript APIによる高い拡張性を持ち、完全な型サポートを提供します。

---

### 11. [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote)

> 基于 DeepSeek Harness 插件机制构建的远程访问方案，通过低延迟、端到端加密的 P2P 网络，支持使用 PC、移动端 和 Web 随时访问本地设备上的DSH 、CodeX、Cursor、Claude Code等工作区。 (Built on DeepSeek Harness plugins, this low-latency, end-to-end encrypted P2P solution lets PC, mobile, and web clients access local DSH, Codex, Cursor, and Claude Code workspaces.)

- Language: TypeScript
- Stars: 2,167
- Forks: 175
- Stars in 1週間: 1,049
- Category: リモート開発環境アクセス
- Keywords: `DeepSeek Harness` `P2P` `エンドツーエンド暗号化` `リモートアクセス` `TypeScript` `プラグイン`
- Summary source: README

#### README要約

- DeepSeek Harnessのプラグイン機構を使い、ローカル端末上のDSHやCodex、Cursor、Claude Code等のワークスペースへPC・モバイル・Webからリモートアクセスできるようにするツール。
- 低遅延でエンドツーエンド暗号化されたP2P接続を優先し、TURNリレーやServer Relayへフォールバックする仕組みで、公開ポートやグローバルIPは不要。
- 外出先から自分の開発環境にアクセスしたい開発者向けで、ワークスペース作成、モデル切替、リモートターミナル、ファイル閲覧などをネイティブUI経由で利用できる。
- 導入はDSHデスクトップのプラグイン管理からnpmパッケージds-harness-remote@0.6.3をインストールし、Android・iOS・Webクライアントも利用可能。アカウント登録には招待コードが必要で、セルフホスト用の最小サーバーも提供される。

---

### 12. [vercel-labs/skills](https://github.com/vercel-labs/skills)

> The open agent skills tool - npx skills

- Language: TypeScript
- Stars: 38,496
- Forks: 3,355
- Stars in 1週間: 1,094
- Category: AIエージェント用CLIツール
- Keywords: `エージェントスキル` `CLI` `Claude Code` `npx` `TypeScript` `スキル管理`
- Summary source: README

#### README要約

- オープンなエージェントスキルエコシステム向けのCLIツールで、コーディングエージェントにタスク実行方法を教える再利用可能な指示（スキル）を管理する。
- npx skills addでスキルをインストールし、find・list・update・removeなどのコマンドで検索・管理でき、OpenCode、Claude Code、Codex、Cursorなど75以上のエージェントに対応。
- コーディングエージェントを使う開発者が、コードレビューやライブラリ操作などのスキルをskills.shから発見・導入し、プロジェクト単位またはグローバルに利用する用途に向く。
- Node.js 22.20以降が必要で、MITライセンス。匿名の利用データを収集するため、無効化する場合はDISABLE_TELEMETRY=1またはDO_NOT_TRACK=1を設定する。

---

### 13. [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)

> ⌥ Coding agent with the IDE wired in. Built by Stencil Labs.

- Language: TypeScript
- Stars: 38,150
- Forks: 4,314
- Stars in 1週間: 869
- Category: コーディングエージェント
- Keywords: `IDE連携` `LSP` `DAP` `サブエージェント` `コラボレーション` `TypeScript`
- Summary source: README

#### README要約

- IDEと連携したコーディングエージェントで、60以上のプロバイダーと31の組み込みツールを備えています。
- LSPやDAPを統合し、コード編集・デバッグ・サブエージェント管理・リアルタイムコラボレーションなどを提供します。
- 開発者がターミナル上で効率的にコーディング作業を行うためのツールで、複数モデル対応やWeb検索も可能です。
- macOS/Linux/Windowsに対応し、BunやHomebrew、Nixなどでインストールできます。MITライセンスで公開されています。

---

### 14. [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)

> 7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.

- Language: TypeScript
- Stars: 48,857
- Forks: 6,741
- Stars in 1週間: 3,780
- Category: LLM APIゲートウェイ
- Keywords: `OpenAI互換API` `無料LLMプロバイダ集約` `スマートルーティング` `自動フェイルオーバー` `セルフホスト` `TypeScript`
- Summary source: README

#### README要約

- 34の無料LLMプロバイダと635の無料モデルエンドポイントを、単一のOpenAI互換/v1 APIの背後に集約するルーター。
- スマートルーティング、レート制限時の自動フェイルオーバー、キーごとの使用量追跡、暗号化されたキー保存を備え、署名付きフィードでモデルカタログを自動更新する。
- Claude CodeやCodex CLIなどのコーディングエージェントやOpenAI互換クライアントから、無料枠を積み上げた推論を個人の実験・学習用途で利用するユーザー向け。
- macOS/WindowsアプリやDockerでセルフホスト可能。個人利用限定で本番利用は非推奨、各プロバイダの利用規約遵守はユーザー責任。ライセンスはMIT。

---

### 15. [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)

> Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.

- Language: TypeScript
- Stars: 42,575
- Forks: 4,363
- Stars in 1週間: 1,064
- Category: オフライン知識・教育サーバー
- Keywords: `オフライン` `知識サーバー` `教育` `Docker` `ローカルAI` `セルフホスト`
- Summary source: README

#### README要約

- Project NOMADは、インターネット接続なしで動作する自己完結型のオフラインファースト知識・教育サーバーです。
- Dockerで管理されたツール群を統合し、オフラインWikipedia、電子書籍、Khan Academyコース、地図、ローカルAIチャット（RAG対応）などを提供します。
- 災害時や通信環境のない場所で知識・教育リソースを必要とするユーザーや、プライバシーを重視する自宅サーバー利用者に適しています。
- Debian系OS（Ubuntu推奨）にターミナルからインストールし、最低5GBのディスクと4GB RAMが必要ですが、AI機能利用時はGPU搭載の高性能マシンが推奨されます。

---

### 16. [github/docs](https://github.com/github/docs)

> The open-source repo for docs.github.com

- Language: TypeScript
- Stars: 21,351
- Forks: 69,436
- Stars in 1週間: 432
- Category: ドキュメント
- Keywords: `GitHub` `ドキュメント` `オープンソース` `コントリビューション` `TypeScript` `CC BY 4.0`
- Summary source: README

#### README要約

- docs.github.comのオープンソースドキュメントリポジトリであり、社内外の誰でも貢献可能
- 公開用のgithub/docsと社内用のdocs-internalの2つのリポジトリが頻繁に同期される仕組み
- GitHubのドキュメントに貢献したい開発者やライター向けで、コンテンツファイル（.md）のみ外部からの変更を受け付ける
- インフラファイルやワークフローは外部変更不可で、ドキュメントはCC BY 4.0、コードはMITのデュアルライセンス

---

### 17. [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)

> An Open Source implementation of Notebook LM with more flexibility and features

- Language: TypeScript
- Stars: 41,737
- Forks: 4,798
- Stars in 1週間: 707
- Category: AIリサーチノート
- Keywords: `Notebook LM代替` `セルフホスト` `マルチモーダル` `ポッドキャスト生成` `ベクトル検索` `Docker`
- Summary source: README

#### README要約

- Google Notebook LMのオープンソースかつプライバシー重視の代替ツールで、自分のデータを完全に管理できます。
- 20以上のAIプロバイダー対応、PDFや動画などのマルチモーダル整理、全文・ベクトル検索、複数話者ポッドキャスト生成、REST APIを備えます。
- 機密性の高い研究を扱うユーザーや、AIプロバイダーを自由に選びたい開発者・研究者向けのセルフホスト型ツールです。
- Docker Composeで簡単に導入可能ですが、暗号化キーの設定と、共有ネットワークではポート公開やパスワード設定に注意が必要です。

---
