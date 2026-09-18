+++
title = 'GitHub Trending 1週間レポート (All) - 2026/09/18'
date = 2026-09-18T23:02:01.302Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月18日 23:02:01
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 21
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントを実運用レベルに引き上げるための周辺ツール（スキル・ハーネス・並列実行基盤）がトレンドの中心となっている。

- Claude CodeやCodexなどのコーディングエージェントに、計画・テスト・レビューなどの体系化された開発プロセスを組み込む「スキル」や「ハーネス」系リポジトリが多数ランクインしている。
- 複数のAIエージェントをgit worktreeやtmuxで並列実行・管理するオーケストレーションツール（Orca、firstmate、worktrunk）が台頭している。
- AI生成文章の「AIっぽさ」を除去するスキル（humanizer、no-ai-slop）や、ADHDフレンドリーな出力制御など、エージェントの出力品質を調整するツールが注目を集めている。
- Alibabaのopen-code-reviewやTencentのWeKnoraなど、中国系大手企業発の実用的なAIツールが高いスター数を獲得している。
- エージェント向けツール以外では、3D地理空間可視化（gods-eye-view）やHTMLからの動画生成（hyperframes）など、ユニークな可視化・生成系プロジェクトも上位に入っている。

### 主なテーマ

- **エージェントへの開発プロセス組み込み（スキル・ハーネス）**: AIコーディングエージェントにTDDや品質ゲート、計画→実装→レビューといったシニアエンジニアのワークフローを適用させるツールが複数ランクイン。ECCは68のエージェントと292のスキルを備え、addyosmani/agent-skillsは9つのスラッシュコマンドで開発ライフサイクル全体をカバーし、obra/superpowersは開発方法論フレームワークとして機能する。（`affaan-m/ECC`、`addyosmani/agent-skills`、`obra/superpowers`、`anthropics/knowledge-work-plugins`）
- **マルチエージェントの並列実行とGit worktree管理**: 複数のAIエージェントを同時に動かし、成果を比較・マージするための基盤ツールが台頭。stablyai/orcaはデスクトップ・モバイル対応のADE、max-sixty/worktrunkはRust製のworktree管理CLI、kunchenguid/firstmateはtmuxとworktreeで自律エージェントのクルーを率いる。（`stablyai/orca`、`max-sixty/worktrunk`、`kunchenguid/firstmate`）
- **エージェント出力の品質・コンテキスト最適化**: AIエージェントの出力やコンテキスト使用を人間にとって扱いやすくするツール群。blader/humanizerとpetergyang/no-ai-slopはAI特有の表現パターンを除去し、ayghri/i-have-adhdは結論ファーストのADHDフレンドリーな出力を実現し、mksglu/context-modeはツール出力を最大98%削減してコンテキストウィンドウを最適化する。（`blader/humanizer`、`petergyang/no-ai-slop`、`ayghri/i-have-adhd`、`mksglu/context-mode`）
- **エージェントの能力拡張（コードレビュー・外部アクセス・知識基盤）**: エージェントに新たな能力を付与する実用ツール。alibaba/open-code-reviewは決定論的パイプラインとLLMのハイブリッドで行レベルのコードレビューを行い、Panniantong/Agent-ReachはAPI料金なしで主要SNS・プラットフォームへのアクセスを可能にし、Tencent/WeKnoraは文書をRAG・自律推論エージェント・Wikiに変換する。（`alibaba/open-code-review`、`Panniantong/Agent-Reach`、`Tencent/WeKnora`、`microsoft/markitdown`）

### 補足的な観察

- 言語分布はTypeScriptとPythonが多数を占めるが、Go（open-code-review、WeKnora）やRust（worktrunk）製のツールも上位に入り、性能重視のCLI基盤ではシステム言語が採用されている。
- 期間スター数ではbilawalsidhu/gods-eye-view（14,460）とalibaba/open-code-review（11,489）が突出しており、エージェント関連以外のユニークな可視化プロジェクトも強い関心を集めている。
- anthropics/claude-code本体（1,294）よりも、その周辺のスキル・ハーネス・オーケストレーションツールの方が高いスター数を獲得しており、エコシステムの拡張レイヤーに注目が集まっている。
- home-assistant/core（285）のようなAIと直接関係ない定番プロジェクトもランクインしているが、全体としてはAIエージェント関連がランキングの大半を占めている。

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 7 |
| TypeScript | 5 |
| JavaScript | 4 |
| Go | 2 |
| Shell | 2 |
| Rust | 1 |

## Repository一覧

### 1. [alibaba/open-code-review](https://github.com/alibaba/open-code-review)

> Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

- Language: Go
- Stars: 36,612
- Forks: 2,607
- Stars in 1週間: 11,489
- Category: AIコードレビューツール
- Keywords: `コードレビュー` `LLMエージェント` `CLI` `Git差分` `静的解析` `CI/CD統合`
- Summary source: README

#### README要約

- Alibaba発のAIコードレビューCLIツールで、Git差分をLLMエージェントに送信し、行レベルの精度で構造化されたレビューコメントを生成する。
- 決定論的パイプラインとLLMエージェントのハイブリッド構成で、ファイル選定・バンドル化・ルールマッチングを工学的に保証し、NPE・スレッドセーフティ・XSS・SQLインジェクション等の多言語ルールセットを内蔵。
- 大規模な変更セットでも安定したレビューを必要とする開発者やチーム向けで、CI/CD統合やClaude Code・Codex・Cursor等のコーディングエージェント連携に対応。
- npmでグローバルインストール後、Git 2.41以上とLLMプロバイダー（OpenAI・Anthropic互換）の設定が必要。ocr reviewで差分レビュー、ocr scanでファイル全体の監査が可能。

---

### 2. [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)

> A skill to stop your coding agent from burying the answer. ADHD-friendly output.

- Language: Python
- Stars: 48,008
- Forks: 2,797
- Stars in 1週間: 10,800
- Category: AIエージェント用スキル
- Keywords: `ADHD` `コーディングエージェント` `プロンプト` `スキル` `Claude` `生産性`
- Summary source: README

#### README要約

- コーディングエージェントの出力をADHDフレンドリーにするスキル/プラグイン。
- 結論を先に提示し、手順を番号付きで示す10個のルールで応答を制御する。
- ADHDの診断の有無に関わらず、簡潔で実践的なAIの回答を求める開発者向け。
- CLIプロンプト経由でインストール可能で、SKILL.mdを編集してカスタマイズできる。

---

### 3. [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)

> A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.

- Language: JavaScript
- Stars: 37,791
- Forks: 7,612
- Stars in 1週間: 14,460
- Category: 3D地理空間可視化
- Keywords: `3D地球儀` `リアルタイムデータ` `衛星シミュレーター` `オープンソース` `音声操作` `Cesium`
- Summary source: README

#### README要約

- ブラウザ上で動作するスパイ衛星シミュレーターで、公開データを用いたリアルタイムの空間情報をフォトリアリスティックな3D地球儀上に可視化する。
- 航空機・船舶・衛星・地震・交通・公開カメラなどのライブデータを重ね合わせ、コックピット視点、音声操作、センサー風エフェクト、3Dモデル表示などを備える。
- 世界中の動きを探索したい一般ユーザーや開発者向けで、ローカル実行可能なオープンソースとして提供され、レイヤーの追加や拡張が可能。
- APIキーなしで開始でき、PinokioまたはNode.js環境で導入。フォトリアリスティック3DにはCesium ionトークン等が必要。データは遅延・誤りの可能性があり、安全上重要な用途には使用不可。

---

### 4. [affaan-m/ECC](https://github.com/affaan-m/ECC)

> The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.

- Language: JavaScript
- Stars: 262,016
- Forks: 39,205
- Stars in 1週間: 5,607
- Category: AIエージェント開発支援ツール
- Keywords: `AIコーディングエージェント` `Claude Code` `エージェントハーネス` `スキル` `AgentShield` `ワークフロー自動化`
- Summary source: README

#### README要約

- ECCはClaude CodeなどのAIコーディングエージェントに、計画→テスト→実装→レビュー→検証→記憶→改善という体系化されたエンジニアリングプロセスを組み込むオープンソースのエージェントハーネス最適化システムです。
- 68のエージェント、292のスキル、94のコマンド、フック、ルール、メモリ、継続学習、AgentShieldセキュリティスキャンを含み、Claude Codeで最も完全に動作し、Codex、Cursor、OpenCode、Geminiなど複数ハーネスにアダプターを提供します。
- AIエージェントを使った開発で、一貫したワークフロー、自己レビュー、再利用可能なスキル化を求める開発者やチームを対象としています。
- Node.js 18以上が必要で、Claude Codeプラグイン導入にはGitとClaude Code 2.1以上が必要です。npx ecc-universal@2.2.1 setupで導入でき、公式チャネル以外からのインストールは警告されています。

---

### 5. [Tencent/WeKnora](https://github.com/Tencent/WeKnora)

> Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

- Language: Go
- Stars: 26,940
- Forks: 3,628
- Stars in 1週間: 3,982
- Category: LLM知識管理プラットフォーム
- Keywords: `RAG` `ReActエージェント` `自動Wiki` `マルチモーダル文書解析` `エンタープライズRBAC` `セルフホスト`
- Summary source: README

#### README要約

- Tencent製のオープンソースLLM知識フレームワークで、文書をRAG・自律推論エージェント・自動Wiki化できる知識基盤に変換する。
- RAGによる高速Q&A、MCPツールやサンドボックスを統合するReActエージェント、文書を相互リンク付きMarkdown知識ベースへ蒸留するWikiモードの3機能が中核。
- 企業の文書理解・セマンティック検索・複雑なマルチステップタスク処理を必要とする開発者や組織向けで、WeComやSlack等のIM経由でもQ&Aを提供可能。
- Go製でDockerによるセルフホストが可能だが、本番環境では公開インターネットへの直接公開を避け、内部ネットワークでの運用が強く推奨されている。

---

### 6. [anthropics/claude-code](https://github.com/anthropics/claude-code)

> Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.

- Language: TypeScript
- Stars: 146,267
- Forks: 23,781
- Stars in 1週間: 1,294
- Category: AIコーディングツール
- Keywords: `Claude Code` `エージェント` `ターミナル` `自然言語` `Git` `プラグイン`
- Summary source: README

#### README要約

- Claude Codeはターミナルで動作し、コードベースを理解して自然言語コマンドでコーディングを支援するエージェント型ツールである。
- 定型作業の実行、複雑なコードの説明、Gitワークフローの処理を行い、ターミナル・IDE・GitHub上で@claudeタグ付けにより利用できる。
- 開発者がプロジェクトディレクトリでclaudeコマンドを実行して使用し、プラグインによるカスタムコマンドやエージェントで機能拡張が可能である。
- npm経由のインストールは非推奨となり、curl・Homebrew・WinGetなどの推奨方法でインストールする。利用データは収集されるが、モデル学習には使用しない方針が明記されている。

---

### 7. [mksglu/context-mode](https://github.com/mksglu/context-mode)

> Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.

- Language: TypeScript
- Stars: 23,533
- Forks: 1,695
- Stars in 1週間: 1,482
- Category: AI開発ツール
- Keywords: `MCP` `コンテキスト最適化` `AIエージェント` `TypeScript` `SQLite` `Claude Code`
- Summary source: README

#### README要約

- AIコーディングエージェントのコンテキストウィンドウを最適化するMCPサーバー。
- ツール出力をサンドボックス化して最大98%削減し、SQLite+FTS5でセッション記憶を永続化する。
- Claude CodeやGemini CLIなど17プラットフォームのAIエージェント利用者向け。
- npmやプラグインで導入可能。ライセンスはElastic License 2.0で、ホスト型サービス提供は禁止。

---

### 8. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

> Production-grade engineering skills for AI coding agents.

- Language: JavaScript
- Stars: 96,375
- Forks: 10,186
- Stars in 1週間: 2,560
- Category: AIエージェント用開発スキル集
- Keywords: `AIコーディングエージェント` `スラッシュコマンド` `開発ライフサイクル` `品質ゲート` `TDD` `Claude Code`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの本番品質エンジニアリングスキル集で、シニアエンジニアのワークフローや品質ゲートをエージェントに一貫して適用させる。
- 開発ライフサイクルに対応した9つのスラッシュコマンド（/spec、/plan、/build、/test、/review、/shipなど）と25のスキルで構成され、作業内容に応じて自動起動もする。
- Claude Code、Cursor、Codex、Copilot、Gemini CLIなど70以上のエージェントを使う開発者が、仕様定義から出荷までの各工程で利用できる。
- npx skills add addyosmani/agent-skillsで一括インストール可能。個別スキルのみの場合は共有チェックリストのreferences/が含まれない点に注意。MITライセンス。

---

### 9. [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)

> Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows

- Language: Rust
- Stars: 8,012
- Forks: 274
- Stars in 1週間: 1,060
- Category: Git worktree管理CLI
- Keywords: `git worktree` `AIエージェント` `並列ワークフロー` `CLI` `Rust` `フック自動化`
- Summary source: README

#### README要約

- WorktrunkはGit worktree管理のためのCLIツールで、AIエージェントの並列実行を目的として設計されている。
- ブランチ名でworktreeを操作でき、作成・切替・削除・一覧表示のコアコマンドに加え、フック、LLMコミットメッセージ生成、マージ自動化などの機能を備える。
- Claude CodeやCodexなどのAIエージェントを複数並行で管理する開発者や、多数の並列変更を扱うGitユーザーが対象。
- Homebrew、Cargo、Winget、pacman、Condaなどでインストール可能で、シェル統合のセットアップが必要。Windowsではコマンド名の競合に注意が必要。

---

### 10. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)

> Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork

- Language: Python
- Stars: 24,863
- Forks: 2,969
- Stars in 1週間: 488
- Category: AIプラグイン集
- Keywords: `Claude Cowork` `Claude Code` `プラグイン` `ナレッジワーク` `MCP` `カスタマイズ`
- Summary source: README

#### README要約

- Claude CoworkおよびClaude Code向けに、Claudeを特定の職務の専門家として機能させるオープンソースのプラグイン集です。
- スキル、コネクタ、スラッシュコマンド、サブエージェントを職務ごとにバンドルし、営業や法務、財務など11種類のプラグインを提供します。
- ナレッジワーカーや各職能チームが、自社のツールや用語、プロセスに合わせてカスタマイズして利用することを想定しています。
- CoworkのプラグインページやClaude Codeのコマンドでインストールでき、構成はMarkdownとJSONのみでビルド不要です。

---

### 11. [openai/plugins](https://github.com/openai/plugins)

> OpenAI Plugins

- Language: JavaScript
- Stars: 6,972
- Forks: 902
- Stars in 1週間: 564
- Category: 開発ツール
- Keywords: `Codex` `プラグイン` `OpenAI` `開発ワークフロー` `マーケットプレイス` `拡張機能`
- Summary source: README

#### README要約

- OpenAIのCodexプラグイン例を集めたキュレーション済みリポジトリです。
- 各プラグインはplugins/<name>/配下に配置され、必須の.codex-plugin/plugin.jsonマニフェストと、skills/、.app.json、.mcp.json、agents/、commands/、hooks.json、assets/などのオプション要素を含みます。
- Figma、Notion、iOS/macOS/Webアプリ開発、Expo、Netlify、Remotion、Google Slidesなど、様々な開発ワークフロー向けのプラグインを提供します。
- デフォルトマーケットプレイスは.agents/plugins/marketplace.jsonにあり、APIキーログインユーザー向けには別途api_marketplace.jsonが用意されています。

---

### 12. [blader/humanizer](https://github.com/blader/humanizer)

> Agent skill that removes signs of AI-generated writing from text

- Language: Python
- Stars: 49,923
- Forks: 4,031
- Stars in 1週間: 3,235
- Category: AI文章改善ツール
- Keywords: `AI文章検出` `文章書き換え` `エージェントスキル` `Claude` `自然言語処理` `Markdown`
- Summary source: README

#### README要約

- AIが生成したような文章を、内容を変えずに人間が書いたように書き換えるエージェントスキルです。
- 25のパターンでAI特有の表現を検出し、事実を捏造せず、不足情報は質問してから書き換えを行います。
- Claude CodeやClaude DesktopなどのAIエージェントユーザーが、文章の自然さを向上させたい場合に使用します。
- Skills CLIやClaudeプラグインでインストール可能で、Markdown形式のため様々なエージェントで動作します。

---

### 13. [kunchenguid/firstmate](https://github.com/kunchenguid/firstmate)

> Talk to one agent. Ship with a crew.

- Language: Shell
- Stars: 6,548
- Forks: 1,993
- Stars in 1週間: 890
- Category: マルチエージェント開発オーケストレーション
- Keywords: `マルチエージェント` `git worktree` `tmux` `Claude Code` `並列開発` `エージェントディストロ`
- Summary source: README

#### README要約

- 単一のエージェント（first mate）と対話するだけで、複数の自律エージェントのクルーを率いて並列開発作業を進められる「エージェント・ディストロ」。
- 各タスクを独立したgit worktreeとtmux等の可視セッションで実行し、first mateが監督・調整してPRや調査レポートとして成果を引き渡す。
- 複数リポジトリの修正・調査・計画を並行して進めたい開発者が、Claude CodeやGrok、Piなどの対応ハーネス上で船長として指示を出す用途に向く。
- インストールはリポジトリのクローンのみで、Git・GitHub CLIと対応ハーネスが必要。macOS/Linux対応で、状態はディスクに保存され再起動にも強い。

---

### 14. [microsoft/markitdown](https://github.com/microsoft/markitdown)

> Python tool for converting files and office documents to Markdown.

- Language: Python
- Stars: 185,415
- Forks: 13,645
- Stars in 1週間: 2,814
- Category: ドキュメント変換ツール
- Keywords: `Markdown変換` `LLM` `Python` `Office文書` `PDF` `テキスト分析`
- Summary source: README

#### README要約

- Microsoft製の軽量Pythonユーティリティで、様々なファイルをMarkdownに変換し、LLMやテキスト分析パイプラインでの利用を目的としています。
- PDF、Office文書、画像、音声、HTMLなど多様な形式をサポートし、見出しや表などの文書構造を保持したMarkdownを生成します。
- LLMを活用したテキスト分析やデータ処理を行う開発者や研究者向けで、コマンドラインやPython APIから利用可能です。
- Python 3.10以上が必要で、pipでインストール可能ですが、信頼できない入力の処理時はセキュリティ上の注意が必要です。

---

### 15. [home-assistant/core](https://github.com/home-assistant/core)

> 🏡 Open source home automation that puts local control and privacy first.

- Language: Python
- Stars: 90,730
- Forks: 38,701
- Stars in 1週間: 285
- Category: ホームオートメーション
- Keywords: `オープンソース` `ローカル制御` `プライバシー` `Raspberry Pi` `モジュラー設計` `Python`
- Summary source: README

#### README要約

- ローカル制御とプライバシーを重視したオープンソースのホームオートメーションシステム。
- モジュラー設計により、他のデバイスやアクションへの対応を容易に実装できる。
- Raspberry Piやローカルサーバーでの動作に適しており、世界中のDIY愛好家コミュニティによって支えられている。
- 公式サイトでデモ、インストール手順、チュートリアル、ドキュメントが提供されている。

---

### 16. [stablyai/orca](https://github.com/stablyai/orca)

> Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.

- Language: TypeScript
- Stars: 71,906
- Forks: 4,698
- Stars in 1週間: 5,305
- Category: AI開発環境
- Keywords: `AIエージェント` `並列実行` `Git Worktree` `コーディング` `オーケストレーション` `開発ツール`
- Summary source: README

#### README要約

- Orcaは複数のAIコーディングエージェントを並列で管理・実行するためのオーケストレーションツール（ADE）です。
- 各エージェントを独立したgit worktreeで動作させ、結果の比較やマージ、モバイルアプリからの監視・操作が可能です。
- Claude CodeやCodexなど任意のCLIエージェントを自分のサブスクリプションで使いたい開発者や、タスクを並行して進めたいユーザー向けです。
- デスクトップ（macOS/Windows/Linux）およびモバイル（iOS/Android）で利用可能で、MITライセンスのオープンソースソフトウェアです。

---

### 17. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 51,367
- Forks: 4,677
- Stars in 1週間: 2,400
- Category: 動画生成フレームワーク
- Keywords: `HTML to Video` `MP4レンダリング` `AIエージェント` `TypeScript` `アニメーション` `CLI`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして機能する。
- Claude Code、Cursor、Gemini CLI、Codexなどのコーディングエージェントを使用する開発者や、プログラマティックに動画を生成したいユーザー向け。
- Node.js 22以上が必要で、npmパッケージとして提供され、Apache 2.0ライセンスで公開されている。

---

### 18. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)

> Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.

- Language: Python
- Stars: 83,110
- Forks: 7,278
- Stars in 1週間: 3,670
- Category: AIエージェントツール
- Keywords: `AIエージェント` `CLI` `マルチプラットフォーム` `Webスクレイピング` `API不要` `自動診断`
- Summary source: README

#### README要約

- AIエージェントにインターネットアクセス能力を付与するCLIツールで、Twitter、Reddit、YouTube、GitHub、Bilibili、小紅書などの主要プラットフォームの読み取りと検索をAPI料金なしで実現します。
- 各プラットフォームに最適なバックエンドツール（yt-dlp、Jina Reader、gh CLI等）を自動選定・インストールし、agent-reach doctorコマンドで診断、複数バックエンドのルーティングで障害時も自動切替を行います。
- Claude Code、OpenClaw、Cursor、Windsurfなどのコマンドライン実行可能なAIエージェントが対象で、Web検索、SNS調査、動画字幕取得、RSS購読などの用途に活用できます。
- インストールはAgentに指示文を送るだけで完了し、Cookieはローカル保存でプライバシーに配慮、基本機能は無料ですがサーバーデプロイ時のみプロキシ費用（月$1程度）が必要です。

---

### 19. [obra/superpowers](https://github.com/obra/superpowers)

> An agentic skills framework & software development methodology that works.

- Language: Shell
- Stars: 288,538
- Forks: 25,806
- Stars in 1週間: 3,821
- Category: 開発手法フレームワーク
- Keywords: `コーディングエージェント` `TDD` `サブエージェント` `スキルシステム` `開発ワークフロー` `プラグイン`
- Summary source: README

#### README要約

- コーディングエージェント向けのソフトウェア開発方法論で、組み合わせ可能なスキル群と初期指示の上に構築されている。
- ブレインストーミング、git worktree、計画作成、サブエージェント駆動開発、TDD、コードレビューなどのワークフローを自動的にトリガーする。
- Claude Code、Cursor、Gemini CLI、GitHub Copilot CLIなど複数のコーディングエージェント環境で利用できる。
- 各環境ごとに個別のインストールが必要で、プラグインマーケットプレイスやリポジトリから直接インストールする。

---

### 20. [petergyang/no-ai-slop](https://github.com/petergyang/no-ai-slop)

> Removes 20+ patterns of AI slop from any piece of writing.

- Language: Python
- Stars: 10,554
- Forks: 728
- Stars in 1週間: 2,256
- Category: AI文章校正ツール
- Keywords: `AIスロップ除去` `文章校正` `ChatGPTプラグイン` `Claude Code` `Python` `文体保持`
- Summary source: README

#### README要約

- 文章から20種類以上のAI特有の表現パターン（AIスロップ）を除去し、個人の文体を保つためのスキル。
- 二項対比や前置きフレーズなどの定型パターンを検出・修正し、能動態や具体的な表現への改善も行う。
- ChatGPT、Claude Code、Codexなどのコーディングエージェントを利用するライターや開発者向け。
- npxコマンドまたはエージェントへの指示でグローバルにインストール可能。MITライセンス。

---

### 21. [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat)

> Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active

- Language: TypeScript
- Stars: 44,328
- Forks: 9,110
- Stars in 1週間: 1,421
- Category: AIチャットクライアント
- Keywords: `ChatGPTクローン` `マルチモーダル` `AIエージェント` `セルフホスト` `TypeScript` `オープンソース`
- Summary source: README

#### README要約

- ChatGPT風のUIを持つオープンソースのセルフホスト型AIチャットアプリケーション。
- OpenAI、Anthropic、Googleなど複数のAIモデルに対応し、Agents、MCP、Code Interpreter、Web検索、画像生成などの機能を統合している。
- AIインフラを自ら管理したいユーザーや、マルチユーザー認証が必要なチーム・エンタープライズ用途に適している。
- RailwayやZeabur等のワンクリックデプロイに対応するが、更新前に破壊的変更について変更履歴の確認が推奨されている。

---
