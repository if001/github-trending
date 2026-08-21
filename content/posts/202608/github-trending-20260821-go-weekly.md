+++
title = 'GitHub Trending 1週間レポート (go) - 2026/08/21'
date = 2026-08-21T21:24:13.898Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月21日 21:24:13
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 25
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のAIエージェント管理・連携基盤がランキング上位を占め、セキュリティスキャナや開発者ツールも堅調な支持を集めている。

- AIエージェント関連のリポジトリが全体の約半数を占め、特にClaude CodeやCodexなど複数のエージェントCLIを統合管理するプラットフォームが目立つ
- multica-ai/multica（1308スター）とinfiniflow/ragflow（1134スター）が1000スター超えで上位を形成し、AIエージェント管理とRAG基盤への関心の高さを示している
- aquasecurity/trivy、gitleaks/gitleaks、Ed1s0nZ/CyberStrikeAIなどセキュリティ関連ツールが複数ランクインし、脆弱性検出やシークレット管理への需要が継続している
- ollama/ollama（831スター）やGitlawb/zero（361スター）などローカル実行・マルチプロバイダー対応のツールが支持され、AI利用のローカル化傾向がうかがえる
- 全25件中すべてがGo言語で記述されており、CLIツールやバックエンド基盤の構築言語としてGoの採用が際立っている

### 主なテーマ

- **AIエージェントの統合管理・オーケストレーション**: Claude Code、Codex、Cursorなど複数のAIコーディングエージェントCLIをチームのように統合管理するプラットフォームが複数登場した。multica-ai/multicaは1308スターで最高値を記録し、compozy/compozyはACP互換エージェントの一元管理OSを謳う。Mininglamp-OSS/octo-serverもAIエージェントのオーケストレーションをバックエンドで担い、人間とAIの協働ワークプレイスを支える。（`multica-ai/multica`、`compozy/compozy`、`Mininglamp-OSS/octo-server`）
- **ローカルLLM実行とAIコーディングエージェント**: ollama/ollamaはKimi-K2.6やDeepSeekなどのオープンモデルをローカルで実行できるツールとして831スターを獲得。Gitlawb/zeroはOllamaを含む複数プロバイダー対応のターミナル型コーディングエージェントで、zzet/gortexはAIエージェント向けにコードをグラフ化してトークン使用量を最大50倍削減するコードインテリジェンスエンジンを提供する。（`ollama/ollama`、`Gitlawb/zero`、`zzet/gortex`）
- **セキュリティスキャンとシークレット検出**: aquasecurity/trivyはコンテナやKubernetesの脆弱性・SBOM・設定ミスを包括的にスキャンし、gitleaks/gitleaksはGitリポジトリ内のシークレット漏洩を検出する。Ed1s0nZ/CyberStrikeAIはAIネイティブなペネトレーションテスト基盤として100以上のセキュリティツールを統合しており、防御と攻撃の両面のセキュリティツールが並存している。（`aquasecurity/trivy`、`gitleaks/gitleaks`、`Ed1s0nZ/CyberStrikeAI`）
- **RAG・コンテキスト基盤とAI活用の自動化**: infiniflow/ragflowは深い文書理解に基づくRAGエンジンとして1134スターを集め、LLMのコンテキスト層を強化する。krillinai/KrillinAIはLLMを活用した動画翻訳・吹き替えの全パイプラインを提供し、ongridio/ongridはSlack等のチャットからインフラの根本原因分析と修正を行うAIOpsエージェントとして、AIを特定業務の自動化に適用する事例が見られる。（`infiniflow/ragflow`、`krillinai/KrillinAI`、`ongridio/ongrid`）
- **開発者向けCLI・DevOpsツール**: jesseduffield/lazygit（252スター）やmikefarah/yq、nektos/actなど定番のCLIツールが安定した支持を維持。rorkai/App-Store-Connect-CLIはApp Store Connect APIの自動化を、entireio/cliはAIエージェントのセッションをGitコミットと紐付けて記録する新しいタイプのツールを提供し、開発ワークフローの効率化が多角的に進んでいる。（`jesseduffield/lazygit`、`nektos/act`、`rorkai/App-Store-Connect-CLI`、`entireio/cli`、`mikefarah/yq`）

### 補足的な観察

- 全25件のリポジトリがGo言語で記述されており、言語分布が完全にGoに集中している
- スター数の上位3件はmultica-ai/multica（1308）、infiniflow/ragflow（1134）、ollama/ollama（831）で、いずれもAI関連の基盤ツールである
- avelino/awesome-go（802スター）がキュレーションリストとして高いスター数を維持しており、Goエコシステム自体への関心の高さを反映している
- MHSanaei/3x-ui（491スター）やputyy/res-downloader（254スター）など中国語圏のプラットフォーム向けツールが複数ランクインし、地域特有のニーズに応えるツールも支持を集めている

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 25 |

## Repository一覧

### 1. [compozy/compozy](https://github.com/compozy/compozy)

> An operating system for AI agents. Plug in the agent CLIs you already use (Claude Code, Codex, Gemini CLI, Cursor) and they become a team: they split the work, hand tasks to each other, run automated on jobs and loops, and share one project memory. You steer everything from the browser.

- Language: Go
- Stars: 2,638
- Forks: 164
- Stars in 1週間: 97
- Category: AIエージェント管理基盤
- Keywords: `AIエージェント` `オーケストレーション` `自動化` `デーモン` `ACP` `拡張機能`
- Summary source: README

#### README要約

- CompozyOSは、Claude Code、OpenClaw、HermesなどのACP互換エージェントCLIを統合し、AIエージェントの作成・自動化・監督を一元管理するオペレーティングシステムです。
- セッション、Loop、メモリ、承認、権限をコアオブジェクトとして持ち、cron、webhook、トリガーによる自動実行と、Web、CLI、HTTP/SSE、MCPなど複数のインターフェースからの監視を可能にします。
- 開発者やテクニカルオペレーター向けに設計されており、ターミナルを閉じても作業が継続するデーモン所有の状態管理と、拡張機能によるカスタマイズ性を提供します。
- v0.3はベータ版で、v0.2.15は非推奨となりました。インストールは検証済みインストーラー、npm、Go、ソースビルドから可能ですが、v0.2からの移行には移行ガイドの参照が必要です。

---

### 2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)

> RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs

- Language: Go
- Stars: 88,991
- Forks: 10,455
- Stars in 1週間: 1,134
- Category: RAGエンジン
- Keywords: `RAG` `検索拡張生成` `LLM` `エージェント` `文書理解` `オープンソース`
- Summary source: README

#### README要約

- RAGFlowは、最先端のRAGとエージェント機能を融合させ、LLM向けの優れたコンテキスト層を作るオープンソースの検索拡張生成エンジンです。
- 複雑な形式の非構造化データからの深い文書理解に基づく知識抽出、テンプレートベースのチャンキング、引用の可視化によるハルシネーション低減などの機能を備えています。
- Word、Excel、画像、スキャン文書、Webページなど多様なデータソースに対応し、個人から大企業まであらゆる規模の開発者が本番環境向けAIシステムを構築する用途に適しています。
- Docker Composeでセルフホスト可能ですが、CPU 4コア以上、RAM 16GB以上、ディスク50GB以上が必要で、Dockerイメージはx86プラットフォーム向けのみ提供されています。

---

### 3. [ollama/ollama](https://github.com/ollama/ollama)

> Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

- Language: Go
- Stars: 179,124
- Forks: 17,507
- Stars in 1週間: 831
- Category: ローカルLLM実行ツール
- Keywords: `Ollama` `ローカルLLM` `REST API` `llama.cpp` `オープンモデル` `CLI`
- Summary source: README

#### README要約

- Ollamaは、Kimi-K2.6、GLM-5.2、DeepSeek、Qwen、Gemmaなどのオープンモデルをローカル環境で簡単に実行できるツールです。
- CLI、REST API、Python/JavaScriptライブラリを提供し、llama.cppをバックエンドとしてモデルの実行と管理を行います。
- Claude CodeやOpenClawなどのコーディングエージェントやAIアシスタントと連携したい開発者や、ローカルでLLMを活用したいユーザー向けです。
- macOS、Windows、Linux、Dockerに対応し、インストールスクリプトまたは手動ダウンロードで導入でき、豊富なコミュニティ統合が利用可能です。

---

### 4. [krillinai/KrillinAI](https://github.com/krillinai/KrillinAI)

> AI video translation & dubbing tool for humans and AI Agents, powered by LLMs. Full pipeline: download, transcribe, translate, TTS dub, reformat, cover generation. 100+ languages, optimized for YouTube, TikTok, Bilibili, Douyin, and more.AI视频翻译配音工具，面向人类与AI Agent，100+语言全链路，CLI分阶段调用，适配抖音、小红书、哔哩哔哩、视频号、TikTok、YouTube

- Language: Go
- Stars: 11,249
- Forks: 1,074
- Stars in 1週間: 229
- Category: AI動画翻訳・吹き替えツール
- Keywords: `動画翻訳` `TTS吹き替え` `LLM` `CLI` `AIエージェント` `ローカライズ`
- Summary source: README

#### README要約

- KrillinAIは、人間とAIエージェントの両方を対象とした、LLMを活用した動画翻訳・吹き替えツールです。
- 動画ダウンロード、音声認識、字幕翻訳、TTS吹き替え、縦横変換、カバー生成までの全パイプラインをカバーし、CLIで各段階を独立実行できます。
- YouTube、TikTok、Bilibili、Douyinなど主要プラットフォーム向けのコンテンツローカライズを行うクリエイターや、自動化ワークフローを構築するAIエージェントに適しています。
- Windows、Linux、macOSに対応し、デスクトップ版とサーバー版があります。macOSでは署名の問題で手動での信頼設定が必要です。

---

### 5. [putyy/res-downloader](https://github.com/putyy/res-downloader)

> 视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!

- Language: Go
- Stars: 19,384
- Forks: 2,410
- Stars in 1週間: 254
- Category: ダウンロードツール
- Keywords: `リソースダウンロード` `プロキシキャプチャ` `m3u8` `動画ダウンロード` `クロスプラットフォーム` `Wails`
- Summary source: README

#### README要約

- GoとWailsで構築されたクロスプラットフォーム対応のネットワークリソースダウンロードツール
- プロキシ方式でネットワークパケットをキャプチャし、動画・音声・画像・m3u8・ライブストリームなどを検出してダウンロード可能
- 微信视频号、小程序、抖音、快手、小红书、酷狗音楽、QQ音楽などのプラットフォームからリソースを取得したい一般ユーザー向け
- インストール時に証明書のインストールとネットワークアクセスを許可し、ソフトウェア内でプロキシ（127.0.0.1:8899）を起動して使用する

---

### 6. [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI)

> Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more

- Language: Go
- Stars: 6,025
- Forks: 530
- Stars in 1週間: 215
- Category: 開発者ツール
- Keywords: `App Store Connect` `CLI` `TestFlight` `CI/CD` `自動化` `Go`
- Summary source: README

#### README要約

- App Store Connect APIを操作する高速でスクリプト化可能なCLIツール。
- TestFlight、ビルド、提出、署名、分析、スクリーンショット、サブスクリプションなどを自動化できる。
- iOS/macOS/tvOS/visionOSのリリース作業をターミナル、IDE、CI/CDパイプラインから実行したい開発者向け。
- Homebrewやインストールスクリプトで導入し、App Store ConnectのAPIキーで認証する。MITライセンスの非公式ツール。

---

### 7. [aquasecurity/trivy](https://github.com/aquasecurity/trivy)

> Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more

- Language: Go
- Stars: 37,546
- Forks: 619
- Stars in 1週間: 162
- Category: セキュリティスキャナ
- Keywords: `脆弱性スキャン` `SBOM` `コンテナセキュリティ` `Kubernetes` `IaC` `シークレット検出`
- Summary source: README

#### README要約

- Trivyはコンテナイメージやファイルシステム、Gitリポジトリ、Kubernetesなどを対象とした包括的なセキュリティスキャナです。
- OSパッケージや依存関係のSBOM、既知の脆弱性（CVE）、IaCの設定ミス、機密情報やシークレット、ソフトウェアライセンスを検出できます。
- セキュリティエンジニアや開発者が、コンテナやクラウド環境のセキュリティリスクをスキャン・管理するために使用します。
- HomebrewやDocker、バイナリダウンロードなど複数の方法でインストール可能で、GitHub ActionsやKubernetes operatorなどとの統合も提供されています。

---

### 8. [multica-ai/multica](https://github.com/multica-ai/multica)

> Assign issues to Claude Code, Codex, Cursor, and 17 more coding agents like teammates — open-source and self-hostable.

- Language: Go
- Stars: 47,213
- Forks: 6,043
- Stars in 1週間: 1,308
- Category: AIエージェント管理プラットフォーム
- Keywords: `AIコーディングエージェント` `セルフホスト` `Issue管理` `マルチエージェント` `Go` `オープンソース`
- Summary source: README

#### README要約

- AIコーディングエージェントをチームメイトのようにIssueにアサインして作業を任せられる、オープンソースのワークスペース。
- 23種類のエージェントCLI（Claude Code、Codex、Cursor等）を自前のマシン上で駆動し、進捗報告・実行ログ・レビューゲートを一元管理する。
- 複数のAIエージェントを運用する開発チーム向けで、GitHub/GitLab等のGitホストやSlack等のチャットツールと連携して利用する。
- セルフホストはDocker ComposeまたはHelmで可能。前提として実行マシンに対応エージェントCLIのインストールと認証が必要。

---

### 9. [gitleaks/gitleaks](https://github.com/gitleaks/gitleaks)

> Find secrets with Gitleaks 🔑

- Language: Go
- Stars: 28,891
- Forks: 2,204
- Stars in 1週間: 180
- Category: セキュリティスキャナー
- Keywords: `シークレット検出` `Git` `セキュリティ` `CI/CD` `pre-commit` `Go`
- Summary source: README

#### README要約

- GitleaksはGitリポジトリやファイル、stdinからパスワードやAPIキー、トークンなどのシークレットを検出するツールです。
- git、dir、stdinの3つのスキャンモードを備え、正規表現ベースの検出エンジンでコード内の機密情報を洗い出します。
- 開発者やセキュリティ担当者がCI/CDパイプラインやpre-commitフックに組み込み、シークレットの漏洩を未然に防ぐ用途に適しています。
- Homebrew、Docker、Goからインストール可能で、GitHub Actionやpre-commitフックとしても導入できます。現在は機能追加を停止し、セキュリティパッチのみの提供となっています。

---

### 10. [avelino/awesome-go](https://github.com/avelino/awesome-go)

> A curated list of awesome Go frameworks, libraries and software

- Language: Go
- Stars: 181,851
- Forks: 13,506
- Stars in 1週間: 802
- Category: キュレーションリスト
- Keywords: `Go` `awesome` `ライブラリ` `フレームワーク` `キュレーション` `オープンソース`
- Summary source: README

#### README要約

- Go言語のフレームワーク、ライブラリ、ソフトウェアを厳選してまとめたキュレーションリスト。
- AI、データベース、Webフレームワーク、テストなど多数のカテゴリ別に整理され、各項目にリンクと説明が付く。
- Go開発者が目的に応じたライブラリやツールを探す際の参照用リポジトリとして利用される。
- 貢献はCONTRIBUTING.mdのガイドラインに従い、メンテナンスされていないプロジェクトはPRで修正を求められる。

---

### 11. [aldinokemal/go-whatsapp-web-multidevice](https://github.com/aldinokemal/go-whatsapp-web-multidevice)

> GOWA - WhatsApp REST API with support for UI, Multi Account, Webhooks, and MCP, and Chatwoot. Built with Golang for efficient memory use.

- Language: Go
- Stars: 4,665
- Forks: 1,107
- Stars in 1週間: 126
- Category: WhatsApp API
- Keywords: `WhatsApp` `REST API` `Golang` `マルチデバイス` `Webhook` `MCP`
- Summary source: README

#### README要約

- Go言語で構築された非公式のWhatsApp REST APIサーバーで、効率的なメモリ使用を特徴とする。
- マルチアカウント対応、Webhook、MCP（Model Context Protocol）サーバー、Chatwoot連携、メッセージ送信やステッカー送信などの機能を提供する。
- 開発者やAIエージェントとの統合を求めるユーザー向けで、n8nパッケージやWebダッシュボード（別リポジトリ）も利用可能。
- RESTモードは`./whatsapp rest`で起動し、ARM/AMDアーキテクチャをサポート。非公式ツールのため公式WhatsApp APIの使用が推奨される。

---

### 12. [ongridio/ongrid](https://github.com/ongridio/ongrid)

> An ops AI Agent that understands your infrastructure, finds the root cause, and fixes it — right from Slack, Telegram, Lark or DingTalk.

- Language: Go
- Stars: 775
- Forks: 178
- Stars in 1週間: 122
- Category: 運用自動化AIエージェント
- Keywords: `AIOps` `根本原因分析` `Slack連携` `セルフホスト` `Kubernetes` `オブザーバビリティ`
- Summary source: README

#### README要約

- インフラを理解し、根本原因を特定して修正まで行う運用向けAIエージェント。Slack、Telegram、Lark、DingTalkなどのチャットから直接利用できる。
- コーディネーターがSRE・ネットワーク・DB等の専門サブエージェントに指示を出し、アラート時の自動調査、トポロジーとメトリクス/ログ/トレースの相関による根本原因分析、リモート実行を行う。
- 自社インフラの監視・インシデント対応を自動化したいSREや運用チーム向け。Kubernetesクラスタ管理やネットワーク機器管理、ナレッジ検索にも対応する。
- install.sh一発でセルフホスト可能（Ubuntu 22.04+/Debian 12+/RHEL 9対応）。Edgeが外向きに接続するためインバウンドポート不要。ライセンスはAGPLv3。

---

### 13. [Gitlawb/zero](https://github.com/Gitlawb/zero)

> The coding agent that answers to you, your model, your machine, your rules.

- Language: Go
- Stars: 1,603
- Forks: 170
- Stars in 1週間: 361
- Category: AIコーディングエージェント
- Keywords: `ターミナル` `コーディングエージェント` `マルチプロバイダー` `サンドボックス` `TUI` `Go`
- Summary source: README

#### README要約

- Zeroはローカルターミナルで動作するAIコーディングエージェントで、リポジトリの検査、ファイル編集、コマンド実行などを行える。
- OpenAIやAnthropic、Ollamaなど複数のモデルプロバイダーに対応し、権限・サンドボックスポリシーでファイル書き込みやシェルコマンドを制御できる。
- 対話型TUIとスクリプト可能なheadless execモードを備え、CI連携やセッションのローカル保存・再開が可能な開発者向けツール。
- npm、インストールスクリプト、またはGo 1.26.6以上でのソースビルドで導入でき、MITライセンスで公開されている。

---

### 14. [Ed1s0nZ/CyberStrikeAI](https://github.com/Ed1s0nZ/CyberStrikeAI)

> The system of action for AI-native cybersecurity—where intent becomes governed execution, evidence becomes operational memory, and every operation improves the next.

- Language: Go
- Stars: 5,895
- Forks: 944
- Stars in 1週間: 148
- Category: セキュリティテストプラットフォーム
- Keywords: `AIエージェント` `ペネトレーションテスト` `MCP` `攻撃チェーン` `脆弱性管理` `Go`
- Summary source: README

#### README要約

- CyberStrikeAIは、AIネイティブなサイバーセキュリティのための実行システムであり、計画・実行・人的監督・証拠・リプレイを監査可能なワークスペースで統合する。
- Einoベースのエージェント、MCP対応ツール、RAG知識ベース、ビジュアルワークフロー、攻撃チェーンモデリングを組み合わせ、100以上のセキュリティツールをYAMLレシピで提供する。
- セキュリティ研究者、ペネトレーションテスター、IT専門家を対象とし、明示的な許可の下でのセキュリティ評価と脆弱性調査を支援する。
- Go 1.25以上とPython 3.10以上が必要で、run.shスクリプトによるワンコマンドデプロイが可能。WebShellやC2などの高リスク機能は、所有または明示的にテスト許可されたシステムでのみ使用すること。

---

### 15. [jesseduffield/lazygit](https://github.com/jesseduffield/lazygit)

> simple terminal UI for git commands

- Language: Go
- Stars: 81,538
- Forks: 3,003
- Stars in 1週間: 252
- Category: Gitツール
- Keywords: `Git` `TUI` `ターミナル` `CLI` `Go` `バージョン管理`
- Summary source: README

#### README要約

- lazygitはGitコマンドを操作するためのシンプルなターミナルUIツールです。
- Undo/Redo機能、カスタムコマンド、カスタムDiffレンダラー、Gitflowサポートなどの拡張機能を備えています。
- コマンドラインでのGit操作を効率化したい開発者や、視覚的なインターフェースでGitを扱いたいユーザーに適しています。
- 設定はdocs/Config.mdでカスタマイズ可能で、デバッグ時は--debugと--logsオプションを使用します。

---

### 16. [harness/harness](https://github.com/harness/harness)

> Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.

- Language: Go
- Stars: 38,069
- Forks: 3,356
- Stars in 1週間: 275
- Category: DevOpsプラットフォーム
- Keywords: `CI/CD` `コードホスティング` `Gitspaces` `アーティファクトレジストリ` `Drone` `Docker`
- Summary source: README

#### README要約

- Harness Open Sourceは、コードホスティング、CI/CDパイプライン、ホスト型開発環境（Gitspaces）、アーティファクトレジストリを統合したエンドツーエンドの開発プラットフォームです。
- Dockerコンテナで簡単にローカル実行でき、パイプラインはDockerコンテナ内で動作し、Docker Desktop、Rancher Desktop、Colimaなどの各種Dockerランタイムに対応しています。
- Droneの後継として開発されており、CIのみに特化したDroneに対し、ソースコード管理や開発環境などを追加した包括的なDevOpsプラットフォームを目指しています。
- Go 1.20以上とNode.jsが必要で、Dockerイメージでの実行時はデータ永続化のためバインドマウントまたは名前付きボリュームの使用が強く推奨されています。

---

### 17. [oseghalep/cloud-cost-optimization-hub](https://github.com/oseghalep/cloud-cost-optimization-hub)

> Cloud Cost Optimization Hub is an open-source, self-hosted platform that provides unified cost visibility and actionable recommendations across AWS, GCP, and Azure. Features include multi-cloud cost aggregation, rightsizing recommendations, idle resource detection, cost anomaly alerts, and an intuitive dashboard – all designed to help teams reduce.

- Language: Go
- Stars: 312
- Forks: 586
- Stars in 1週間: 65
- Category: クラウドコスト管理
- Keywords: `マルチクラウド` `コスト最適化` `AWS` `GCP` `Azure` `ダッシュボード`
- Summary source: README

#### README要約

- AWS、GCP、Azureのクラウドコストを一元可視化し、最適化を支援するオープンソースのセルフホスト型プラットフォーム。
- マルチクラウド対応アーキテクチャ、ユーザー認証、ダッシュボードUI、デモ用モックコストデータを備え、Go製バックエンドとNext.jsフロントエンドで構成される。
- クラウドコストの削減や管理を行いたい開発チームやインフラ担当者向けで、実際のAWS/GCP/Azure連携にも対応可能な設計。
- Docker Composeでワンコマンド起動でき、ローカル開発はmake upで開始。現在はv0.1でモックデータによるデモ段階。

---

### 18. [kubernetes-sigs/kueue](https://github.com/kubernetes-sigs/kueue)

> Kubernetes-native Job Queueing

- Language: Go
- Stars: 2,894
- Forks: 757
- Stars in 1週間: 72
- Category: Kubernetesジョブキューイング
- Keywords: `Kubernetes` `ジョブキューイング` `リソース管理` `バッチ処理` `マルチクラスタ` `Go`
- Summary source: README

#### README要約

- KueueはKubernetes上でジョブのキューイングを管理するAPIとコントローラのセットであり、ジョブの開始と停止を制御するジョブレベルマネージャーです。
- 優先度ベースのキューイング、リソースフレーバー管理、Fair Sharing、プリエンプション、マルチクラスタジョブディスパッチングなどの高度な機能を提供します。
- バッチジョブ、Kubeflowトレーニングジョブ、RayJob、JobSetなどのワークロードを管理するKubernetesクラスタ運用者やMLエンジニアを対象としています。
- Kubernetes 1.34以降でサポートされ、kubectl applyでマニフェストを適用してインストールし、APIバージョンはv1beta2で本番環境での採用実績があります。

---

### 19. [mikefarah/yq](https://github.com/mikefarah/yq)

> yq is a portable command-line YAML, JSON, XML, CSV, TOML, HCL and properties processor

- Language: Go
- Stars: 15,871
- Forks: 825
- Stars in 1週間: 44
- Category: CLIデータ処理ツール
- Keywords: `YAML` `JSON` `XML` `CLI` `Go` `jq構文`
- Summary source: README

#### README要約

- yqはGo製の軽量でポータブルなコマンドラインYAML/JSON/XML/CSV/TOML/HCL/propertiesプロセッサです。
- jqライクな構文で値の読み取り・更新・複数ファイルのマージ・フォーマット変換などを行い、マルチドキュメントYAMLやコメント操作にも対応します。
- 設定ファイルの編集やデータ変換を行う開発者・運用者向けで、GitHub Actionとしても利用できます。
- 依存のないバイナリをダウンロードするほか、Homebrewやsnap、Docker/Podman、go installなど多様な方法で導入できます。

---

### 20. [MHSanaei/3x-ui](https://github.com/MHSanaei/3x-ui)

> Xray panel supporting multi-protocol multi-user expire day & traffic & IP limit (Vmess, Vless, Trojan, ShadowSocks, Wireguard, Hysteria, Tunnel, Mixed, HTTP, Tun, MTProto)

- Language: Go
- Stars: 45,070
- Forks: 8,631
- Stars in 1週間: 491
- Category: プロキシ管理パネル
- Keywords: `Xray` `Webパネル` `プロキシ` `VPN` `マルチプロトコル` `トラフィック管理`
- Summary source: README

#### README要約

- Xray-coreサーバーを管理するためのオープンソースの多機能Webコントロールパネルです。
- VLESSやTrojanなど多様なプロトコルに対応し、クライアントごとの通信量制限や有効期限、IP制限などを管理できます。
- 単一のVPSから複数ノードのデプロイまで、プロキシやVPNサーバーの構築・監視を行うユーザーに適しています。
- インストールスクリプトで簡単に導入できますが、個人利用を目的としており、違法な目的や本番環境での使用は推奨されていません。

---

### 21. [golangci/golangci-lint](https://github.com/golangci/golangci-lint)

> Fast linters runner for Go

- Language: Go
- Stars: 19,288
- Forks: 1,618
- Stars in 1週間: 40
- Category: 静的解析ツール
- Keywords: `Go` `リンター` `静的解析` `CI/CD` `コード品質` `並列処理`
- Summary source: README

#### README要約

- golangci-lintは、Go言語のための高速なリンターランナーです。
- 複数のリンターを並列実行し、キャッシュを活用することで高速な解析を実現します。
- 100以上のリンターを内蔵し、YAML形式の設定ファイルや主要なIDEとの連携をサポートしています。
- ローカル環境やCI/CDシステムに導入して、Goコードの品質チェックを自動化する用途に適しています。

---

### 22. [Mininglamp-OSS/octo-server](https://github.com/Mininglamp-OSS/octo-server)

> 🐙 The Go backend powering OCTO — an open workplace built for humans × AI agents. REST & WebSocket APIs, Lobster (AI agent) orchestration, and WuKongIM real-time messaging control plane.

- Language: Go
- Stars: 710
- Forks: 109
- Stars in 1週間: 146
- Category: バックエンドサーバー
- Keywords: `Go` `AIエージェント` `WebSocket` `リアルタイムメッセージング` `マイクロサービス` `オーケストレーション`
- Summary source: README

#### README要約

- OCTOプラットフォームの中核となるGo製バックエンドで、人間とAIエージェントのためのオープンワークプレイスを支える。
- RESTおよびWebSocket APIを提供し、OpenClawベースのAIエージェント「Lobster」のオーケストレーションとWuKongIMによるリアルタイムメッセージング制御を行う。
- Web、iOS、Android、管理コンソールなどのクライアントから利用され、タスク管理やAI要約などのマイクロサービスと連携する。
- Go言語でビルド可能で、MySQL互換データベースとWuKongIMインスタンスが必要。Docker Composeによる一括デプロイも提供されている。

---

### 23. [nektos/act](https://github.com/nektos/act)

> Run your GitHub Actions locally 🚀

- Language: Go
- Stars: 71,594
- Forks: 2,007
- Stars in 1週間: 110
- Category: CI/CDローカル実行ツール
- Keywords: `GitHub Actions` `ローカル実行` `Docker` `CI/CD` `ワークフロー` `Go`
- Summary source: README

#### README要約

- GitHub Actionsのワークフローをローカル環境で実行できるGo製CLIツールです。
- Docker APIを使ってワークフローで定義されたイメージを取得・ビルドし、依存関係に基づいて各アクションをコンテナ内で実行します。
- ワークフローの変更をコミット・プッシュせずに素早くテストしたい開発者や、Makefileの代替としてローカルタスクランナーを使いたい人に適しています。
- Dockerが必要で、環境変数やファイルシステムはGitHubのホストランナーに合わせて構成されます。ソースからビルドする場合はGo 1.20以上が必要です。

---

### 24. [entireio/cli](https://github.com/entireio/cli)

> 📜 Entire CLI hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside commits, creating a searchable record of how code was written in your repo.

- Language: Go
- Stars: 4,988
- Forks: 391
- Stars in 1週間: 51
- Category: 開発者ツール
- Keywords: `Git` `AIエージェント` `セッション記録` `チェックポイント` `CLI` `トレーサビリティ`
- Summary source: README

#### README要約

- GitワークフローにフックしてAIエージェントのセッションを記録するCLIツール。
- プロンプトや応答、変更ファイルなどのセッションデータをコミットと紐付けて別ブランチに保存し、検索やチェックポイントからの再開が可能。
- Claude CodeやCodexなどのAIエージェントを使う開発者が、コード変更の経緯把握や監査証跡の確保に利用する。
- Homebrew、Scoop、インストールスクリプト等で導入し、リポジトリでentire enableを実行してGitフックを設定する。

---

### 25. [zzet/gortex](https://github.com/zzet/gortex)

> High-performance code-intelligence engine for AI agents and IDE, supports 257 languages, multi repositories, based on graph, with access via CLI, MCP Server, and API. AI coding agents teammate - expose only needed information, cutting token usage up to 50x. 100% local. Discord: https://discord.gg/39MFHu3J5d

- Language: Go
- Stars: 1,427
- Forks: 129
- Stars in 1週間: 219
- Category: AI開発支援ツール
- Keywords: `コードインテリジェンス` `MCPサーバー` `ナレッジグラフ` `tree-sitter` `トークン削減` `マルチリポジトリ`
- Summary source: README

#### README要約

- AIエージェントやIDE向けの高性能コードインテリジェンスエンジンで、コードをグラフ化してCLI・MCPサーバー・Web UI経由で提供する。
- tree-sitterによる257言語の解析、複数リポジトリ横断の参照・呼び出しチェーン解決、最大50倍のトークン削減、セマンティック検索などを備える。
- Claude CodeやCursorなど19以上のAIコーディングエージェントに対応し、必要な情報だけをエージェントに渡してコンテキスト消費を抑えたい開発者向け。
- macOS/Linux/Windows向けの単一静的バイナリとしてインストール可能で、外部依存なし・100%ローカル動作、Go 1.26+とCGOがソースビルドに必要。

---
