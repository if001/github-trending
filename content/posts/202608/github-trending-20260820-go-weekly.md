+++
title = 'GitHub Trending 1週間レポート (go) - 2026/08/20'
date = 2026-08-20T05:50:09.295Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'go']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月20日 5:50:09
- Language: go
- Date range: 1週間
- 対象リポジトリ数: 25
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/go?since=weekly)

## 今回のTrendingの傾向

> Go言語製のツールが独占する中、AIコーディングエージェントの管理・オーケストレーション基盤とセルフホスト可能な開発者向けインフラツールが強い関心を集めている。

- 一覧の全25件がGo言語製であり、CLIツールや単一バイナリで配布される軽量なセルフホスト型ツールが主流となっている。
- multica-ai/multica（1317スター）やcompozy/compozy、kdlbs/kandevなど、Claude CodeやCodexなどのAIコーディングエージェントを複数管理・オーケストレーションするプラットフォームが複数ランクインした。
- infiniflow/ragflowが1515スターで最大の増加を記録し、RAGエンジンやollama/ollamaなどLLM関連の基盤ソフトウェアへの注目も継続している。
- gitleaks/gitleaksやaquasecurity/trivyといったセキュリティスキャン系ツールが堅調で、CI/CDパイプラインへの組み込みを意識した説明が多い。
- krillinai/KrillinAIやputyy/res-downloader、fish2018/pansouなど、中国語圏のプラットフォーム（抖音、Bilibili、网盘など）に対応したツールが複数見られる。

### 主なテーマ

- **AIコーディングエージェントのオーケストレーション**: Claude Code、Codex、Cursorなど複数のAIエージェントCLIをチームメイトのようにIssueにアサインしたり、カンバンやデーモンで一元管理したりする基盤が複数登場した。multica-ai/multicaは1317スターを獲得し、23種類のエージェントCLI制御や監査証跡を備える。compozy/compozyは「AIエージェント向けOS」を標榜し、kdlbs/kandevはカンバン形式でエージェントワークフローを管理する。（`multica-ai/multica`、`compozy/compozy`、`kdlbs/kandev`、`Gitlawb/zero`）
- **LLM・RAG基盤とローカル実行**: infiniflow/ragflowが期間中1515スターで最大の増加を示し、深い文書理解とエージェント機能を融合したRAGエンジンとして注目された。ollama/ollamaは849スターで、Kimi-K2.6やGLM-5.2など最新のオープンモデルをローカルで手軽に実行できるツールとして引き続き人気が高い。（`infiniflow/ragflow`、`ollama/ollama`）
- **セキュリティとシークレット検出**: gitleaks/gitleaksはGitリポジトリからAPIキーなどのシークレットを検出するツールで197スター、aquasecurity/trivyはコンテナやKubernetes、IaCの脆弱性・誤設定・SBOMをスキャンする包括的スキャナで147スターを記録。いずれもCI/CDやpre-commitフックへの統合を前提としたDevSecOps系のツールである。（`gitleaks/gitleaks`、`aquasecurity/trivy`）
- **セルフホスト型の運用・DevOpsツール**: Docker Composeや単一バイナリで導入できる運用管理系ツールが多数ランクインした。harness/harnessはコードホスティングからCI/CDまで統合した開発プラットフォーム、semaphoreui/semaphoreはAnsible/TerraformのWeb UI、henrygd/beszelは軽量サーバー監視、ongridio/ongridはSlackから操作するAIOpsエージェント、oseghalep/cloud-cost-optimization-hubはマルチクラウドのコスト可視化を提供する。（`harness/harness`、`semaphoreui/semaphore`、`henrygd/beszel`、`ongridio/ongrid`、`oseghalep/cloud-cost-optimization-hub`、`knadh/listmonk`）
- **ターミナル・CLI生産性ツール**: jesseduffield/lazygit（262スター）やcli/cli（136スター）、nektos/act（100スター）など、GitやGitHub操作をターミナルで効率化する定番CLIツールが安定した支持を集めた。rorkai/App-Store-Connect-CLIはApp Store Connect APIをスクリプト化可能にし、モバイル開発のリリース自動化に対応する。（`jesseduffield/lazygit`、`cli/cli`、`nektos/act`、`rorkai/App-Store-Connect-CLI`）

### 補足的な観察

- スター増加数の上位はinfiniflow/ragflow（1515）、multica-ai/multica（1317）、ollama/ollama（849）、avelino/awesome-go（740）の順で、AI関連とGoエコシステムのキュレーションリストが突出している。
- 言語分布は全25件中すべてがGoであり、単一バイナリ配布やクロスプラットフォーム対応、Docker Composeでのセルフホストを訴求する説明が共通して多い。
- krillinai/KrillinAI、putyy/res-downloader、fish2018/pansouは中国語の説明文を含み、抖音・Bilibili・小红书・网盘など中国圏プラットフォーム向けの機能を持つ点が特徴的である。
- aldinokemal/go-whatsapp-web-multideviceやGitlawb/zeroなど、MCP（Model Context Protocol）への対応を明記するリポジトリが複数あり、AIエージェント連携のためのプロトコル対応がツールの売りの一つになっている。

### 言語分布

| Language | Repositories |
|---|---:|
| Go | 25 |

## Repository一覧

### 1. [gitleaks/gitleaks](https://github.com/gitleaks/gitleaks)

> Find secrets with Gitleaks 🔑

- Language: Go
- Stars: 28,845
- Forks: 2,201
- Stars in 1週間: 197
- Category: セキュリティツール
- Keywords: `シークレット検出` `Gitスキャン` `セキュリティ` `正規表現` `pre-commit` `CI/CD`
- Summary source: README

#### README要約

- GitleaksはGitリポジトリ、ファイル、標準入力からパスワード、APIキー、トークンなどのシークレットを検出するツールです。
- 正規表現ベースの検出エンジンを使用し、git、dir、stdinの3つのスキャンモードを提供します。
- 開発者やセキュリティチームがコードリポジトリのシークレット漏洩を防ぐために使用します。
- Homebrew、Docker、Goからインストール可能で、pre-commitフックやGitHub Actionとしても利用できます。

---

### 2. [Gitlawb/zero](https://github.com/Gitlawb/zero)

> The coding agent that answers to you, your model, your machine, your rules.

- Language: Go
- Stars: 1,592
- Forks: 168
- Stars in 1週間: 349
- Category: AIコーディングエージェント
- Keywords: `ターミナル` `コーディングエージェント` `マルチプロバイダー` `サンドボックス` `TUI` `MCP`
- Summary source: README

#### README要約

- Zeroはローカルターミナルで動作するAIコーディングエージェントで、リポジトリの検査、ファイル編集、コマンド実行などを行える。
- OpenAIやAnthropic、Ollamaなど多様なモデルプロバイダーに対応し、権限・サンドボックスポリシーでファイル書き込みやシェル実行を制御できる。
- 対話型TUIとスクリプト可能なzero execの両方を備え、CI連携やローカルセッションの保存・再開を求める開発者向け。
- npm、インストールスクリプト、Go 1.26.5以上でのソースビルドで導入でき、初回はセットアップウィザードでプロバイダーとモデルを設定する。

---

### 3. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)

> RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs

- Language: Go
- Stars: 88,873
- Forks: 10,433
- Stars in 1週間: 1,515
- Category: RAGエンジン
- Keywords: `RAG` `検索拡張生成` `LLM` `エージェント` `文書理解` `オープンソース`
- Summary source: README

#### README要約

- RAGFlowは、最先端のRAGとエージェント機能を融合させ、LLM向けの優れたコンテキスト層を作るオープンソースの検索拡張生成エンジンです。
- 複雑な形式の非構造化データからの深い文書理解に基づく知識抽出、テンプレートベースのチャンキング、引用の可視化によるハルシネーション低減などの機能を備えています。
- 個人から大企業まであらゆる規模の開発者や企業が、複雑なデータを本番対応のAIシステムに変換する用途に適しています。
- Docker Composeでセルフホスト可能ですが、CPU 4コア以上、RAM 16GB以上、ディスク50GB以上が必要で、Dockerイメージはx86プラットフォームのみ提供されます。

---

### 4. [ollama/ollama](https://github.com/ollama/ollama)

> Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

- Language: Go
- Stars: 179,003
- Forks: 17,483
- Stars in 1週間: 849
- Category: ローカルLLM実行ツール
- Keywords: `Ollama` `ローカルLLM` `REST API` `llama.cpp` `CLI` `オープンモデル`
- Summary source: README

#### README要約

- Ollamaは、Kimi-K2.6、GLM-5.2、DeepSeek、Qwen、Gemmaなどのオープンモデルをローカル環境で手軽に実行できるツールです。
- CLIやREST API、Python/JavaScriptライブラリを通じてモデルの実行・管理ができ、llama.cppをバックエンドとして利用します。
- Claude CodeやOpenClawなどのコーディングエージェントやAIアシスタントと連携したい開発者や、ローカルでLLMを活用したいユーザー向けです。
- macOS、Windows、Linux、Dockerに対応し、インストールスクリプトや手動ダウンロードで導入でき、豊富なコミュニティ連携ツールも利用可能です。

---

### 5. [krillinai/KrillinAI](https://github.com/krillinai/KrillinAI)

> AI video translation & dubbing tool for humans and AI Agents, powered by LLMs. Full pipeline: download, transcribe, translate, TTS dub, reformat, cover generation. 100+ languages, optimized for YouTube, TikTok, Bilibili, Douyin, and more.AI视频翻译配音工具，面向人类与AI Agent，100+语言全链路，CLI分阶段调用，适配抖音、小红书、哔哩哔哩、视频号、TikTok、YouTube

- Language: Go
- Stars: 11,215
- Forks: 1,070
- Stars in 1週間: 229
- Category: 動画翻訳・吹き替えツール
- Keywords: `動画翻訳` `TTS吹き替え` `Whisper` `LLM` `CLI` `AIエージェント`
- Summary source: README

#### README要約

- KrillinAIは、人間とAIエージェントの両方に対応した動画翻訳・吹き替えツールです。
- 動画ダウンロード、音声認識、字幕翻訳、TTS吹き替え、縦横変換、カバー生成までの全パイプラインをカバーし、CLIで各段階を独立実行できます。
- Bilibili、YouTube、TikTok、Douyinなど主要プラットフォーム向けのコンテンツローカライズを行うクリエイターや自動化ワークフローに適しています。
- Windows/Linux/macOSに対応し、デスクトップ版・サーバー版・CLIモードを提供。macOSでは署名の関係で手動での信頼設定が必要です。

---

### 6. [putyy/res-downloader](https://github.com/putyy/res-downloader)

> 视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!

- Language: Go
- Stars: 19,340
- Forks: 2,405
- Stars in 1週間: 247
- Category: ダウンロードツール
- Keywords: `リソースダウンロード` `プロキシキャプチャ` `動画ダウンロード` `m3u8` `クロスプラットフォーム` `Wails`
- Summary source: README

#### README要約

- GoとWailsで構築されたクロスプラットフォーム対応のリソースダウンロードツールです。
- プロキシによるネットワークパケットキャプチャで動画、音声、画像、m3u8、ライブストリームなどを検出し、微信视频号、抖音、快手、小红书、QQ音楽など多様なプラットフォームに対応しています。
- 一般ユーザー向けに設計され、シンプルな操作でネットワークリソースを簡単にダウンロードできます。
- インストール時に証明書のインストールとネットワークアクセスを許可する必要があり、学習・研究目的のみで商用利用は禁止されています。

---

### 7. [rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI)

> Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more. JSON-first, no interactive prompts

- Language: Go
- Stars: 6,005
- Forks: 527
- Stars in 1週間: 233
- Category: 開発者ツール
- Keywords: `App Store Connect` `CLI` `自動化` `CI/CD` `TestFlight` `Go`
- Summary source: README

#### README要約

- App Store Connect APIをターミナルやCI/CDから操作するための、高速でスクリプト化可能なCLIツールです。
- TestFlight、ビルド、提出、署名、分析、スクリーンショット、サブスクリプションなどのワークフローを自動化できます。
- iOS、macOS、tvOS、visionOSのリリース作業を自動化したい開発者や、CI/CDパイプラインに組み込みたいチームが対象です。
- Homebrewやインストールスクリプトで導入でき、App Store ConnectのAPIキーによる認証が必要です。MITライセンスの非公式ツールです。

---

### 8. [multica-ai/multica](https://github.com/multica-ai/multica)

> Assign issues to Claude Code, Codex, Cursor, and 17 more coding agents like teammates — open-source and self-hostable.

- Language: Go
- Stars: 46,937
- Forks: 5,998
- Stars in 1週間: 1,317
- Category: AIエージェント管理プラットフォーム
- Keywords: `AIコーディングエージェント` `セルフホスト` `Issue管理` `マルチエージェント` `Go` `オープンソース`
- Summary source: README

#### README要約

- AIコーディングエージェントをチームメイトのようにIssueにアサインして作業を任せられる、オープンソースでセルフホスト可能なワークスペース。
- Claude Code、Codex、Cursorなど23種類のエージェントCLIを制御し、進捗報告・レビュー依頼・実行ログ・トークン使用量の記録をIssueと紐付けて管理する。
- 複数のAIエージェントを並行運用したい開発チーム向けで、GitHub/GitLab/Gitea/Forgejo連携、Slack等のチャット連携、権限管理や監査証跡も備える。
- Web版かデスクトップ版で開始でき、実行マシンに対応エージェントCLIのインストールと認証が必須。セルフホストはDocker ComposeまたはHelmで、ライセンスはApache 2.0ベースに追加条件あり。

---

### 9. [knadh/listmonk](https://github.com/knadh/listmonk)

> High performance, self-hosted, newsletter and mailing list manager with a modern dashboard. Single binary app.

- Language: Go
- Stars: 23,007
- Forks: 2,540
- Stars in 1週間: 262
- Category: メールマーケティング
- Keywords: `セルフホスト` `ニュースレター` `メーリングリスト` `PostgreSQL` `Docker` `オープンソース`
- Summary source: README

#### README要約

- listmonkは、セルフホスト型のニュースレターおよびメーリングリスト管理ツールです。
- 高速で機能が豊富であり、単一のバイナリファイルにパッケージ化されています。データストアにはPostgreSQLデータベースを使用します。
- Dockerまたはバイナリファイルを使用してインストールでき、ニュースレターやメーリングリストの管理を必要とするユーザーに適しています。
- AGPLv3ライセンスの下で提供されるフリーでオープンソースのソフトウェアです。バックエンドはGo、フロントエンドはVueとBuefyで構築されています。

---

### 10. [aldinokemal/go-whatsapp-web-multidevice](https://github.com/aldinokemal/go-whatsapp-web-multidevice)

> GOWA - WhatsApp REST API with support for UI, Multi Account, Webhooks, and MCP, and Chatwoot. Built with Golang for efficient memory use.

- Language: Go
- Stars: 4,653
- Forks: 1,106
- Stars in 1週間: 129
- Category: WhatsApp API
- Keywords: `WhatsApp` `REST API` `Go` `マルチデバイス` `Webhook` `MCP`
- Summary source: README

#### README要約

- Go言語で構築された非公式のWhatsApp REST APIサーバーで、効率的なメモリ使用を特徴とする。
- マルチアカウント対応、Webhook、MCP（Model Context Protocol）サーバー、Chatwoot連携、メッセージ送信、ステッカー送信、自動返信などの機能を提供する。
- WhatsApp自動化を必要とする開発者や、n8nなどのワークフローツールと連携させたいユーザー向け。
- ARM/AMDアーキテクチャをサポートし、Docker HubやGitHub Container Registryから入手可能。v9ではMCPとREST APIが統合され、UIは別リポジトリに移行した。

---

### 11. [aquasecurity/trivy](https://github.com/aquasecurity/trivy)

> Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more

- Language: Go
- Stars: 37,515
- Forks: 614
- Stars in 1週間: 147
- Category: セキュリティスキャナ
- Keywords: `脆弱性スキャン` `SBOM` `コンテナセキュリティ` `Kubernetes` `IaC` `シークレット検出`
- Summary source: README

#### README要約

- Trivyはコンテナイメージ、ファイルシステム、Gitリポジトリ、VMイメージ、Kubernetesをスキャンできる包括的なセキュリティスキャナです。
- OSパッケージや依存関係のSBOM、既知の脆弱性（CVE）、IaCの問題や誤設定、機密情報やシークレット、ソフトウェアライセンスを検出します。
- DevOpsエンジニアやセキュリティ担当者がCI/CDパイプラインやローカル環境でセキュリティチェックを行う用途に適しています。
- brewやDocker、バイナリダウンロードで導入可能で、GitHub ActionsやKubernetes operator、VS Code拡張など豊富な統合が用意されています。

---

### 12. [semaphoreui/semaphore](https://github.com/semaphoreui/semaphore)

> Modern UI and powerful API for Ansible, Terraform/OpenTofu/Terragrunt, PowerShell and other DevOps tools.

- Language: Go
- Stars: 14,037
- Forks: 1,292
- Stars in 1週間: 48
- Category: DevOps自動化ツール
- Keywords: `Ansible` `Terraform` `DevOps` `Web UI` `自動化` `Go`
- Summary source: README

#### README要約

- Ansible、Terraform/OpenTofu/Terragrunt、PowerShellなどのDevOpsツールを管理するためのモダンなWeb UIおよびAPIです。
- プレイブックやスクリプトの実行、タスクのスケジュール設定、失敗通知、アクセス制御などの機能を提供します。
- ターミナルからのデプロイが困難になったプロジェクトや、DevOpsツールの実行を一元管理したいチームに適しています。
- Docker、Snap、バイナリ、パッケージなど複数の方法でインストールでき、ライセンスはMITです。

---

### 13. [jesseduffield/lazygit](https://github.com/jesseduffield/lazygit)

> simple terminal UI for git commands

- Language: Go
- Stars: 81,477
- Forks: 2,996
- Stars in 1週間: 262
- Category: Gitクライアント
- Keywords: `Git` `TUI` `ターミナル` `Go` `Gitflow` `カスタムコマンド`
- Summary source: README

#### README要約

- lazygitはGitコマンドを操作するためのシンプルなターミナルUIツールです。
- Undo/Redo機能、カスタムコマンド、カスタムDiffレンダラー、Gitflowサポートなどの拡張機能を備えています。
- コマンドラインでのGit操作を効率化したい開発者や、視覚的なインターフェースでGitを管理したいユーザーに適しています。
- 設定はdocs/Config.mdでカスタマイズ可能で、Gitflow利用時はブランチビューでiキーを押してオプションを表示します。

---

### 14. [kubernetes-sigs/kueue](https://github.com/kubernetes-sigs/kueue)

> Kubernetes-native Job Queueing

- Language: Go
- Stars: 2,890
- Forks: 755
- Stars in 1週間: 93
- Category: ジョブスケジューリング
- Keywords: `Kubernetes` `ジョブキューイング` `リソース管理` `バッチ処理` `マルチクラスタ` `スケジューリング`
- Summary source: README

#### README要約

- KueueはKubernetes上でジョブのキューイングを管理するAPIとコントローラのセットであり、ジョブの開始と停止を制御する。
- 優先度ベースのキューイング、Fair Sharing、プリエンプション、マルチクラスタジョブディスパッチ、トポロジーアウェアスケジューリングなどの高度なリソース管理機能を提供する。
- BatchJob、Kubeflow、RayJob、JobSetなどの人気ジョブフレームワークと統合し、バッチワークロードとサービングワークロードの同時管理を必要とするユーザーに適している。
- Kubernetes 1.34以降で公式にサポートされ、kubectl applyでマニフェストを適用してインストールし、kueue-system名前空間でコントローラが実行される。

---

### 15. [fatedier/frp](https://github.com/fatedier/frp)

> A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.

- Language: Go
- Stars: 108,887
- Forks: 15,186
- Stars in 1週間: 209
- Category: リバースプロキシ
- Keywords: `リバースプロキシ` `NAT越え` `Go` `TCP/UDP` `HTTP/HTTPS` `P2P`
- Summary source: README

#### README要約

- NATやファイアウォールの内側にあるローカルサーバーをインターネットに公開するための高速リバースプロキシです。
- TCP/UDPに加えHTTP/HTTPSをサポートし、ドメイン名経由で内部サービスへリクエストを転送でき、P2P接続モードも提供します。
- 公開IPを持つサーバーにfrps、LAN内のマシンにfrpcを配置し、SSHアクセスやWebサービス公開などに利用します。
- リリースページからバイナリを取得して設定ファイルで起動しますが、一部アンチウイルスがfrpcを誤検知するため除外設定が必要な場合があります。

---

### 16. [ongridio/ongrid](https://github.com/ongridio/ongrid)

> An ops AI Agent that understands your infrastructure, finds the root cause, and fixes it — right from Slack, Telegram, Lark or DingTalk.

- Language: Go
- Stars: 747
- Forks: 170
- Stars in 1週間: 101
- Category: 運用自動化AIエージェント
- Keywords: `AIOps` `根本原因分析` `Slack連携` `Kubernetes` `オブザーバビリティ` `セルフホスト`
- Summary source: README

#### README要約

- インフラを理解し、根本原因を特定して修正する運用AIエージェント。SlackやTelegramなどのチャットから直接操作できる。
- コーディネーターがSRE・ネットワーク・DB等の専門サブエージェントに指示を出し、アラート時の自動調査やトポロジー・メトリクス・ログ・トレースを相関させた根本原因分析（RCA）を行う。
- SREや運用担当者向け。Kubernetesライフサイクル管理、ネットワーク機器管理、ブラウザSSH、ワークフロー自動化などの機能を備える。
- install.sh一発でセルフホスト可能（Ubuntu 22.04+/Debian 12+/RHEL 9対応）。Edgeが外向きに接続するためインバウンドポート不要。ライセンスはAGPLv3。

---

### 17. [oseghalep/cloud-cost-optimization-hub](https://github.com/oseghalep/cloud-cost-optimization-hub)

> Cloud Cost Optimization Hub is an open-source, self-hosted platform that provides unified cost visibility and actionable recommendations across AWS, GCP, and Azure. Features include multi-cloud cost aggregation, rightsizing recommendations, idle resource detection, cost anomaly alerts, and an intuitive dashboard – all designed to help teams reduce.

- Language: Go
- Stars: 317
- Forks: 622
- Stars in 1週間: 139
- Category: クラウドコスト管理
- Keywords: `マルチクラウド` `コスト最適化` `AWS` `GCP` `Azure` `FinOps`
- Summary source: README

#### README要約

- AWS、GCP、Azureのクラウドコストを一元管理するオープンソースの自ホスト型プラットフォーム。
- マルチクラウド対応アーキテクチャ、ユーザー認証、ダッシュボードUIを備え、Go製バックエンドとNext.jsフロントエンドで構成される。
- クラウドコストの可視化と最適化を目指す開発チームやFinOps担当者向けのツール。
- Docker Composeで簡単に起動可能だが、現在はモックデータを使用しており、実際のクラウド連携は今後の実装となる。

---

### 18. [harness/harness](https://github.com/harness/harness)

> Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.

- Language: Go
- Stars: 38,037
- Forks: 3,350
- Stars in 1週間: 281
- Category: DevOpsプラットフォーム
- Keywords: `CI/CD` `コードホスティング` `Gitspaces` `アーティファクトレジストリ` `Go` `オープンソース`
- Summary source: README

#### README要約

- Harness Open Sourceは、コードホスティング、CI/CDパイプライン、ホスト型開発環境（Gitspaces）、アーティファクトレジストリを統合したオープンソースの開発プラットフォームです。
- ソースコード管理、自動化されたDevOpsパイプライン、Gitspaces、アーティファクトレジストリの機能を備え、Dockerコンテナ内でパイプラインを実行します。
- エンドツーエンドのDevOpsプラットフォームを求める開発チームや、Droneからの移行を検討しているユーザーを対象としています。
- Dockerイメージを使った簡単なセットアップが可能で、データ永続化のためボリュームマウントが推奨され、Apache License 2.0で提供されています。

---

### 19. [fish2018/pansou](https://github.com/fish2018/pansou)

> PanSou是一款高性能的网盘资源搜索API服务，支持TG频道和插件搜索。系统设计以性能和可扩展性为核心，支持多频道多插件并发搜索、结果智能排序和网盘类型分类。docker集成前后端，一键启动，开箱即用。仅供学习研究，请勿以各种形式用于盈利目的。 https://t.me/s/webhtv

- Language: Go
- Stars: 14,279
- Forks: 3,440
- Stars in 1週間: 112
- Category: 検索APIサービス
- Keywords: `网盘検索` `Telegram` `プラグイン` `Docker` `Go` `並行検索`
- Summary source: README

#### README要約

- PanSouはGo製の高性能なクラウドドライブ（网盘）リソース検索APIサービスで、Telegramチャンネルとカスタムプラグインからの検索をサポートしています。
- 複数チャンネル・プラグインの並行検索、結果のスマートソート、网盘タイプ別分類、2層キャッシュ（メモリ＋ディスク）による高速化を実現しています。
- 百度・阿里云・夸克など多数の中国系网盘や磁力リンクに対応し、Dockerでフロントエンド統合版またはバックエンドAPI版をワンクリックでデプロイ可能です。
- 学習・研究目的のみの提供で営利利用は禁止。Docker Compose推奨、Go 1.18以上でソースからビルドも可能、オプションでJWT認証やSOCKS5プロキシを設定できます。

---

### 20. [cli/cli](https://github.com/cli/cli)

> GitHub’s official command line tool

- Language: Go
- Stars: 45,895
- Forks: 8,888
- Stars in 1週間: 136
- Category: CLIツール
- Keywords: `GitHub` `CLI` `gh` `プルリクエスト` `Issue` `ターミナル`
- Summary source: README

#### README要約

- GitHub公式のコマンドラインツールで、プルリクエストやIssueなどのGitHubの概念をターミナルで扱えるようにする。
- gitやコード作業の隣でGitHub操作を実行でき、GitHub.com、GitHub Enterprise Cloud、GitHub Enterprise Server 2.20+をサポートする。
- macOS、Windows、Linuxのユーザーが対象で、コーディングエージェントからghを操作するためのagent skillも提供される。
- Homebrew、WinGet、各種パッケージマネージャー、プリコンパイル済みバイナリ、ソースからのビルドなど複数の方法でインストール可能。

---

### 21. [compozy/compozy](https://github.com/compozy/compozy)

> An operating system for AI agents. Plug in the agent CLIs you already use (Claude Code, Codex, Gemini CLI, Cursor) and they become a team: they split the work, hand tasks to each other, run automated on jobs and loops, and share one project memory. You steer everything from the browser.

- Language: Go
- Stars: 2,629
- Forks: 162
- Stars in 1週間: 107
- Category: AIエージェント基盤
- Keywords: `AIエージェント` `オーケストレーション` `デーモン` `自動化` `Go` `ACP`
- Summary source: README

#### README要約

- CompozyOSは、既存のAIエージェントCLIをチームとして動かすための「AIエージェント向けOS」です。
- セッション・タスク・ループ・メモリ・承認などをデーモンが一元管理し、cronやWebhookで自動実行、ブラウザやCLIから監督できます。
- Claude CodeなどACP互換CLIを使う開発者や技術オペレーター向けに、継続的なエージェント作業の作成・自動化・監視を提供します。
- v0.3系はベータで、v0.2.15は非推奨のため、既存環境からは移行ガイドに従う必要があります。

---

### 22. [nektos/act](https://github.com/nektos/act)

> Run your GitHub Actions locally 🚀

- Language: Go
- Stars: 71,565
- Forks: 2,005
- Stars in 1週間: 100
- Category: CI/CDローカル実行ツール
- Keywords: `GitHub Actions` `ローカル実行` `Docker` `CI/CD` `Go` `タスクランナー`
- Summary source: README

#### README要約

- GitHub Actionsのワークフローをローカル環境で実行できるGo製CLIツール。
- Docker APIを利用してワークフローで定義されたイメージをpullまたはビルドし、依存関係に基づいて各アクションをコンテナ内で実行する。
- ワークフローの変更をコミット・プッシュせずに素早くテストしたい開発者や、Makefileの代替としてローカルタスクランナーを使いたいユーザー向け。
- 実行にはDockerが必要で、ソースからビルドする場合はGo 1.20以上が必要。環境変数やファイルシステムはGitHubのホストランナーに合わせて構成される。

---

### 23. [avelino/awesome-go](https://github.com/avelino/awesome-go)

> A curated list of awesome Go frameworks, libraries and software

- Language: Go
- Stars: 181,618
- Forks: 13,502
- Stars in 1週間: 740
- Category: キュレーションリスト
- Keywords: `Go` `Golang` `ライブラリ` `フレームワーク` `awesome` `MIT`
- Summary source: README

#### README要約

- Go言語のフレームワーク、ライブラリ、ソフトウェアを厳選してまとめたキュレーションリスト。
- AI、データベース、Webフレームワーク、テストなど多数のカテゴリ別にリンクと短い説明を整理している。
- Go開発者が目的別にライブラリやツール、学習リソースを探す用途に適している。
- 貢献時はCONTRIBUTING.mdのガイドラインを確認し、保守停止や不適切な項目はPRで改善する。ライセンスはMIT。

---

### 24. [henrygd/beszel](https://github.com/henrygd/beszel)

> Lightweight server monitoring with historical data, docker stats, and alerts.

- Language: Go
- Stars: 24,396
- Forks: 962
- Stars in 1週間: 193
- Category: サーバー監視
- Keywords: `軽量` `Docker統計` `アラート` `マルチユーザー` `OAuth` `自動バックアップ`
- Summary source: README

#### README要約

- BeszelはDocker統計、履歴データ、アラート機能を備えた軽量なサーバー監視プラットフォームです。
- PocketBaseベースのハブと各システムで動作するエージェントの2コンポーネント構成で、CPU、メモリ、ディスク、ネットワーク、GPUなど多様なメトリクスを収集します。
- 複数サーバーを管理する管理者や個人ユーザー向けで、マルチユーザー対応、OAuth/OIDC認証、自動バックアップ機能を提供します。
- 設定が簡単で数分で導入でき、MITライセンスで公開されています。

---

### 25. [kdlbs/kandev](https://github.com/kdlbs/kandev)

> AI Kanban & Development Environment. Orchestrate multiple agents, review changes, open PRs. Multi-provider, self-hostable, no telemetry.

- Language: Go
- Stars: 669
- Forks: 95
- Stars in 1週間: 74
- Category: AI開発環境
- Keywords: `AIエージェント` `カンバン` `マルチプロバイダー` `セルフホスト` `ワークフロー自動化` `Go`
- Summary source: README

#### README要約

- 複数のAIエージェントをオーケストレーションし、タスクの並列実行・変更レビュー・PR作成までを一元管理するAIカンバン＆開発環境。
- カンバンボードでのタスク管理、マルチステップのエージェントワークフロー、Git worktreeによるワークスペース分離、統合ターミナル・エディタ・Git変更パネルを備える。
- Claude CodeやCodex、GitHub Copilotなど多数のAIエージェントを組み合わせて使いたい開発者や、チームで一貫したAI開発プロセスを構築したいパワーユーザー向け。
- Homebrew・Scoop・NPXでインストール可能で、ローカル実行のほかDocker・SSH・クラウド上でのリモート実行にも対応。オープンソース（AGPL-3.0）でテレメトリなし、セルフホスト可能。

---
