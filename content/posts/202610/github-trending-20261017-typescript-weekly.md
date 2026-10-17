+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/10/17'
date = 2026-10-17T22:56:29.600Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月17日 22:56:29
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 17
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントのコンテキスト管理・メモリ永続化ツールが集中し、TypeScript製のエージェント周辺インフラがトレンドの中心

- 一覧の17件中すべてがTypeScript製で、言語分布が完全にTypeScriptに偏っている
- context-mode、billion-context、claude-mem、obsidian-mind、TencentDB-Agent-Memoryなど、エージェントのコンテキスト圧縮・永続メモリ系ツールが多数を占める
- Claude Code、Codex、Gemini CLI、Cursorなど複数のコーディングエージェントを横断対応するMCPサーバーやプラグイン形式のツールが目立つ
- hyperframes、remotion、OpenCut、OpenCreatorなど動画生成・編集系プロジェクトも複数ランクインしている
- 最もスターを集めたのはmorluto/rea（約24.9万）で、AIエージェント経由のリバースエンジニアリングという異色の用途が突出している

### 主なテーマ

- **エージェントのコンテキスト最適化・圧縮**: context-modeはツール出力をサンドボックス化して最大98%削減し17プラットフォームに対応、billion-contextはプロキシ型でトークン5分の1削減と数十億トークン規模の長期セッションを目指すなど、コンテキストウィンドウの制約を解消するツールが複数登場している（`mksglu/context-mode`、`ranxianglei/billion-context`）
- **エージェント向け永続メモリ**: claude-memはセッションをまたいだ記憶の圧縮・注入、obsidian-mindはObsidianボルトによる自己組織化メモリ、TencentDB-Agent-Memoryはチームレベルのメモリハブとして4種のメモリアセットを管理するなど、エージェントに長期記憶を持たせる試みが3件並んだ（`thedotmack/claude-mem`、`breferrari/obsidian-mind`、`TencentCloud/TencentDB-Agent-Memory`）
- **エージェント拡張エコシステム（スキル・プラグイン）**: vercel-labs/skillsは80種類のコーディングエージェント向けスキル管理CLI、cursor/pluginsはCursor公式プラグイン集、dsh-workbuddy-connectはDeepSeek Harnessへのモデル接続プラグインと、エージェントの機能を外部から拡張する仕組みが複数見られる（`vercel-labs/skills`、`cursor/plugins`、`corrinehu/dsh-workbuddy-connect`）
- **プログラマティック動画生成・AIクリエイターツール**: hyperframesはHTMLからMP4をレンダリングしエージェント利用を明示、remotionはReactによる動画生成、OpenCutはオープンソースのCapCut代替、OpenCreatorはCodex CLIをエンジンとする動画翻訳・生成ワークスペースと、動画系プロジェクトが4件ランクインしている（`heygen-com/hyperframes`、`remotion-dev/remotion`、`OpenCut-app/OpenCut`、`krillinai/OpenCreator`）
- **LLMアクセス集約とセルフホストエージェント**: freellmapiは34の無料LLMプロバイダーと635エンドポイントを単一のOpenAI互換APIに集約し、rakazoは自分のモデルとサンドボックスを選べるセルフホスト型AIアシスタントで、LLM利用の入口を自前で管理する方向性がうかがえる（`tashfeenahmed/freellmapi`、`elie222/rakazo`）

### 補足的な観察

- morluto/reaの約24.9万スターは2位のhyperframes（約5.6千）を大きく引き離しており、リバースエンジニアリング×AIエージェントという組み合わせへの注目が突出している
- 全17件がTypeScriptで、Electron製デスクトップアプリ（Motrix、folia-major、rakazoなど）も含まれ、言語の一極集中が顕著
- Claude Code、Codex、Gemini CLI、Cursorなど特定エージェント名が多くのリポジトリの説明に登場し、マルチエージェント対応が事実上の標準要件になりつつある
- MCPサーバー形式のツール（rea、context-mode、obsidian-mind、OpenCutの予定機能など）が複数あり、MCPがエージェント連携の共通基盤として定着している様子が読み取れる

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 17 |

## Repository一覧

### 1. [morluto/rea](https://github.com/morluto/rea)

> Reverse engineer anything with agents, from app behavior down to native binaries.

- Language: TypeScript
- Stars: 307,042
- Forks: 77,678
- Stars in 1週間: 248,962
- Category: リバースエンジニアリングツール
- Keywords: `リバースエンジニアリング` `MCP` `AIエージェント` `バイナリ解析` `Electron` `CLI`
- Summary source: README

#### README要約

- REAは、AIエージェント経由でアプリやバイナリをリバースエンジニアリングするためのMCPサーバーおよびCLIツールです。
- ネイティブバイナリ、JavaScript/Electronアプリ、.NETアセンブリ、Webサイトなどを解析し、証拠と制限事項付きの結果を返します。
- ソースコードなしで他アプリの機能の仕組みを調べ、自分のプロジェクト向けに実装を作りたい開発者や研究者向けです。
- npx rea-agents setupで導入でき、Node.js 22以降が必要。ネイティブ解析にはHopper/Ghidra/IDA等の正規ライセンスが必要です。

---

### 2. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 65,954
- Forks: 5,954
- Stars in 1週間: 5,601
- Category: 動画レンダリングフレームワーク
- Keywords: `HTML to Video` `AIエージェント` `MP4レンダリング` `TypeScript` `CLI` `オープンソース`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして動作する。
- Claude Code、Codex、Cursor、Gemini CLIなどのAIエージェントユーザーが、動画、デッキ、モーショングラフィックスを作成する際に使用する。
- Node.js 22以上が必要で、開発用にクローンする場合はGit LFSのインストールが必要。ライセンスはApache 2.0。

---

### 3. [mksglu/context-mode](https://github.com/mksglu/context-mode)

> Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.

- Language: TypeScript
- Stars: 30,504
- Forks: 2,210
- Stars in 1週間: 4,207
- Category: AI開発支援ツール
- Keywords: `コンテキスト最適化` `MCPサーバー` `セッション永続化` `FTS5検索` `コーディングエージェント`
- Summary source: README

#### README要約

- AIコーディングエージェントのコンテキストウィンドウ消費を最適化するMCPサーバー。
- ツール出力をサンドボックス化して最大98%削減し、セッション情報をSQLiteとFTS5/BM25検索で永続化する。
- Claude CodeやGemini CLIなど17プラットフォームのエージェント利用者が、長時間作業でのコンテキスト喪失を防ぐ用途に向く。
- Claude Codeではプラグインコマンドで自動導入でき、他環境では設定ファイルやグローバルインストールが必要。

---

### 4. [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)

> A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need

- Language: TypeScript
- Stars: 1,711
- Forks: 137
- Stars in 1週間: 779
- Category: コンテキスト圧縮プロキシ
- Keywords: `コンテキスト圧縮` `プロキシ` `acp-kernel` `トークン削減` `長期セッション` `コーディングエージェント`
- Summary source: README

#### README要約

- エージェントとモデルAPIの間に挟まるプロキシ型のコンテキスト圧縮プラグインで、長時間のコーディングセッションを単一コンテキストウィンドウで維持する。
- acp-kernelによる圧縮を適用し、compress/decompress/search_context/acp_statusの4ツールをモデル自身に呼ばせて、増分的・可逆的・プレフィックスキャッシュに優しい要約を行う。
- Claude Code、Codex、OpenCode、Aiderなど多数のコーディングエージェント利用者向けで、トークン5分の1削減や数十億トークン規模の数ヶ月単位セッションを目指す用途に適する。
- npmでグローバルインストールしエージェントのベースURLをプロキシに向けて使う。早期段階で実モデル統合テストはこれから、MITライセンスに帰属表示の追加条件あり。

---

### 5. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 12,277
- Forks: 1,193
- Stars in 1週間: 1,327
- Category: 開発ツール拡張
- Keywords: `Cursor` `プラグイン` `TypeScript` `マーケットプレイス` `SaaS連携` `エージェント`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール、フレームワーク、SaaS製品向けの多様なプラグインを提供するリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェストで管理されるマルチプラグイン構造。
- 開発者やチームがCursorエディタの機能を拡張し、GitHub、Googleサービス、Salesforceなどの外部ツールと連携する際に使用。
- MITライセンスで提供され、ルートの`marketplace.json`が全プラグインをリスト化し、各プラグインはskills、rules、MCPサーバー定義を含む。

---

### 6. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)

> Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More

- Language: TypeScript
- Stars: 101,409
- Forks: 8,891
- Stars in 1週間: 2,442
- Category: AIエージェントメモリ
- Keywords: `永続メモリ` `コンテキスト圧縮` `Claude Code` `セッション管理` `MCP` `TypeScript`
- Summary source: README

#### README要約

- Claude CodeなどのAIエージェントにセッションをまたいだ永続メモリを提供するメモリ圧縮システム。
- ツール使用の観察を自動記録し、AIで意味的な要約を生成して将来のセッションに関連コンテキストを注入する。
- Claude Code、OpenCode、OpenClaw、T3 Codeなど複数のエージェント環境で、プロジェクト知識の継続性を維持したい開発者向け。
- npx claude-mem install またはプラグインコマンドで導入。npmグローバルインストールはSDKのみでフック登録されない点に注意。

---

### 7. [vercel-labs/skills](https://github.com/vercel-labs/skills)

> The open agent skills tool - npx skills

- Language: TypeScript
- Stars: 35,368
- Forks: 3,016
- Stars in 1週間: 1,731
- Category: 開発者ツール
- Keywords: `CLI` `エージェントスキル` `npx` `Claude Code` `Codex` `TypeScript`
- Summary source: README

#### README要約

- オープンなエージェントスキルエコシステム向けのCLIツールで、npx skillsで実行できる。
- GitHub/GitLab/Azure Reposやローカルパス等からスキルをインストールし、シンボリンクまたはコピーで各エージェントに配置する。
- OpenCode、Claude Code、Codex、Cursorなど80種類のコーディングエージェントを対象とし、スキルの検索・更新・削除も可能。
- npxで即座に利用でき、プライベートリポジトリは既存のGit認証やGitHub CLI認証をそのまま使用する。

---

### 8. [chthollyphile/folia-major](https://github.com/chthollyphile/folia-major)

> 专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器

- Language: TypeScript
- Stars: 7,618
- Forks: 785
- Stars in 1週間: 2,990
- Category: 音楽プレイヤー
- Keywords: `歌詞アニメーション` `音楽プレイヤー` `Navidrome` `Electron` `PWA` `AIテーマ`
- Summary source: README

#### README要約

- Foliaは全画面没入型の歌詞アニメーションを核としたオンライン音楽プレイヤーです。
- 网易云・酷狗・QQ音楽・Navidrome・ローカル音楽に対応し、AI生成テーマや複数の歌詞アニメーションを備えます。
- デスクトップ版（Windows/macOS/Linux）とWeb版があり、モバイルではPWAとして利用できます。
- VercelやDockerでデプロイ可能で、AGPL-3.0ライセンスのもと個人学習・非営利利用に限定されています。

---

### 9. [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)

> 7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.

- Language: TypeScript
- Stars: 36,616
- Forks: 4,954
- Stars in 1週間: 3,767
- Category: LLM APIゲートウェイ
- Keywords: `OpenAI互換API` `無料LLMプロバイダー集約` `スマートルーティング` `自動フェイルオーバー` `TypeScript` `セルフホスト`
- Summary source: README

#### README要約

- 34の無料LLMプロバイダーと635の無料モデルエンドポイントを、単一のOpenAI互換/v1 APIの背後に集約するルーター。
- スマートルーティング、レート制限時の自動フェイルオーバー、キーの暗号化保存、キーごとの使用量追跡を備え、署名付きフィードでモデルカタログを自動更新する。
- Claude CodeやCodex CLIなどのコーディングエージェントやOpenAI互換クライアントから、個人的な実験・学習用途で無料枠を横断利用したいユーザー向け。
- デスクトップアプリやDockerで導入可能だが、本番利用は非推奨で各プロバイダーの利用規約遵守はユーザー責任。ライブカタログの即時更新は年19ドルのプレミアム版。

---

### 10. [corrinehu/dsh-workbuddy-connect](https://github.com/corrinehu/dsh-workbuddy-connect)

> 将 WorkBuddy 桌面 App 包含的模型自动接入 DeepSeek Harness，零配置使用。Bring the models in the WorkBuddy desktop app into DeepSeek Harness with zero configuration.

- Language: TypeScript
- Stars: 1,198
- Forks: 117
- Stars in 1週間: 833
- Category: AIツール連携プラグイン
- Keywords: `DeepSeek Harness` `WorkBuddy` `プラグイン` `モデル連携` `TypeScript` `ゼロ設定`
- Summary source: README

#### README要約

- ログイン済みのWorkBuddy/WorkBuddy AIデスクトップアプリのモデルをDeepSeek Harness（DSH）にゼロ設定で接続するTypeScript製プラグイン。
- 国内版と国際版のモデルグループを分けて表示し、各アプリのログイン状態・残高をそのまま利用。画像入力、推論レベル検出、残高表示、モデル表示切替などに対応。
- DSHユーザーでWorkBuddyデスクトップアプリを利用中の個人利用者が対象。Web/Desktop/TUIの各インターフェースで使用可能。
- DSHコアバージョンとプラグインバージョンの厳密な一致が必須。npmからのインストールが推奨され、Desktop版はApp管理のためCLIでの直接操作に注意が必要。

---

### 11. [breferrari/obsidian-mind](https://github.com/breferrari/obsidian-mind)

> A self-organizing Obsidian vault that gives AI coding agents persistent memory.

- Language: TypeScript
- Stars: 5,364
- Forks: 620
- Stars in 1週間: 372
- Category: AIエージェント用Obsidianボルトテンプレート
- Keywords: `Obsidian` `Claude Code` `永続メモリ` `QMD` `セマンティック検索` `MCP`
- Summary source: README

#### README要約

- AIコーディングエージェントに永続的な記憶を与える、自己組織化するObsidianボルトテンプレート。
- Claude Codeを完全サポートし、Codex CLI・Gemini CLI向けのフックも備え、会話からノート・リンク・索引・決定記録・成果記録を自動生成する。
- エンジニアやマネージャーが日々の作業・1on1・インシデント対応をエージェントに話すだけで、知識が蓄積・再利用される用途を想定。
- ShardMind経由またはgit cloneで導入し、Obsidian 1.12+・Node 22+が必要。QMDによるローカル意味検索は任意だが推奨される。

---

### 12. [remotion-dev/remotion](https://github.com/remotion-dev/remotion)

> 🎥 Make videos programmatically with React

- Language: TypeScript
- Stars: 64,765
- Forks: 5,131
- Stars in 1週間: 1,869
- Category: 動画生成ライブラリ
- Keywords: `React` `動画生成` `プログラマティック` `TypeScript` `バッチレンダリング` `エージェント`
- Summary source: README

#### README要約

- Reactコードをソースオブトゥルースとして、プログラマティックに動画を作成するためのツール群です。
- コーディングエージェントによる生成、ドラッグ＆ドロップでの編集、データ連携によるコード管理など、複数のワークフローを切り替え可能です。
- 動画のバッチレンダリング、デザインシステムの構築、動画編集アプリケーションの開発を行う開発者や組織を対象としています。
- Node.js環境でnpx create-video@latestを実行して開始しますが、特殊なライセンスのため企業利用時は確認が必要です。

---

### 13. [agalwood/Motrix](https://github.com/agalwood/Motrix)

> A full-featured download manager.

- Language: TypeScript
- Stars: 56,971
- Forks: 5,099
- Stars in 1週間: 730
- Category: ダウンロードマネージャー
- Keywords: `ダウンロード管理` `BitTorrent` `Electron` `TypeScript` `クロスプラットフォーム` `オープンソース`
- Summary source: README

#### README要約

- MotrixはHTTP、FTP、BitTorrent、マグネットリンクなどに対応したモダンでフル機能のデスクトップダウンロードマネージャーです。
- Electron、React、TypeScriptで構築され、ダウンロードコアはUIから独立しており、ブラウザ拡張やCLIツールとはMDXPプロトコル（JSON-RPC 2.0ベース）で通信します。
- デスクトップアプリ（macOS/Windows/Linux）とヘッドレスサーバー（Node.js/Docker）の2つの形態で動作し、NASやホームサーバーでの利用にも対応しています。
- 現在v2はベータ版のため、既存データのバックアップを取ってからテストし、本番環境では安定版の利用を検討してください。

---

### 14. [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)

> TencentDB Agent Memory is a team-level memory hub for AI Agents — turning conversations, docs, and code into four reusable memory assets (Chat Memory, Skill, LLM-Wiki, Code-Graph) that are governed, shared, and equipped across agents and frameworks.

- Language: TypeScript
- Stars: 29,507
- Forks: 2,916
- Stars in 1週間: 1,498
- Category: AIエージェントメモリ管理
- Keywords: `AIエージェント` `メモリハブ` `Chat Memory` `Skill` `CodeGraph` `チームコラボレーション`
- Summary source: README

#### README要約

- TencentDB Agent Memoryは、AIエージェント向けのチームレベルメモリハブで、会話・ドキュメント・コードを再利用可能な4つのメモリアセット（Chat Memory、Skill、LLM-Wiki、Code-Graph）に変換します。
- 会話やタスクからChat MemoryとSkillを自動抽出し、ドキュメントとコードをWikiとCodeGraphに変換して、一貫した管理・レビュー・ルーティングを行います。
- 複数のエージェントフレームワーク（Claude Code、Codex、DeepSeek Harnessなど）に対応し、チームメンバー間でメモリアセットを共有・装備できるため、新しいエージェントのコールドスタートを防ぎます。
- Docker Composeで3つのサービス（memory-core、memory-hub、proxy）を一括起動でき、MongoDBストレージバックエンドは実験的機能として提供されています。

---

### 15. [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut)

> The open-source CapCut alternative

- Language: TypeScript
- Stars: 95,100
- Forks: 9,371
- Stars in 1週間: 1,704
- Category: 動画編集ソフト
- Keywords: `オープンソース` `動画編集` `TypeScript` `Rust` `クロスプラットフォーム` `CapCut代替`
- Summary source: README

#### README要約

- Web、デスクトップ、モバイル向けの無料オープンソース動画エディタ。
- 現在Rustコアによる書き換え中で、プラグインアーキテクチャ、MCPサーバー、ヘッドレスモードなどを予定。
- 動画編集者や開発者向けで、従来版はopencut-app/opencut-classicで利用可能。
- 開発にはprotoとmoonが必要で、現在は外部コントリビューションを受け付けていない。

---

### 16. [krillinai/OpenCreator](https://github.com/krillinai/OpenCreator)

> Formerly KrillinAI, VideoTranslation and Dubbing Tool. Open-source AI workspace for creators, powered by Codex. Video downloading, video translation, create videos, images, voice, avatars, and edits with Agents in one place. Suitable for your Social Media like YouTube, TikTok, Instagram, etc.

- Language: TypeScript
- Stars: 13,624
- Forks: 1,489
- Stars in 1週間: 928
- Category: AIクリエイターワークスペース
- Keywords: `Codex CLI` `動画翻訳` `AIエージェント` `コンテンツ生成` `ローカル実行` `マルチモーダル`
- Summary source: README

#### README要約

- OpenCreator（旧称KrillinAI）は、Codex CLIを実行エンジンとするクリエイター向けオープンソースAIワークスペースです。
- 動画翻訳・ダウンロード、画像・動画生成、音声合成、記事作成などのビジュアルツールと、自然言語で指示できるAgent会話の2つの作業方式を提供します。
- 個人やチームがローカル環境で創作・開発作業を行う用途を想定し、YouTube、TikTok、InstagramなどのSNS向けコンテンツ制作に対応します。
- デスクトップアプリとして提供され、初回起動時にローカルのCodex設定をスキャンして既存のChatGPTサインインやAPIキーを再利用できます。

---

### 17. [elie222/rakazo](https://github.com/elie222/rakazo)

> Open-source Grok Bot alternative. Choose your own model and sandbox.

- Language: TypeScript
- Stars: 4,461
- Forks: 800
- Stars in 1週間: 784
- Category: AIエージェント
- Keywords: `セルフホスト` `AIアシスタント` `永続ボット` `サンドボックス` `TypeScript` `BYOモデル`
- Summary source: README

#### README要約

- Rakazoは、自分のマシンで動かせるオープンソースのセルフホスト型AIアシスタントで、永続的なAIチームメイトを提供する。
- 独自の会話・メモリ・ルーチンを持つ永続ボット、音声モード、ブラウザ/ターミナル/デスクトップアクセス、サブエージェントへの委譲などを備える。
- Grok Bot等の代替として、自分のモデルとサンドボックスプロバイダー(Docker、E2B、Daytona等)を選びたいユーザー向けで、Web・Electron・iOS・Androidで利用可能。
- Docker Composeで公開イメージから簡単にインストールでき、Node.js 22/24/26とpnpm 9でソースから開発も可能。ベータ版でApache License 2.0。

---
