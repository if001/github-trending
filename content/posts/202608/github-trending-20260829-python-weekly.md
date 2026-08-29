+++
title = 'GitHub Trending 1週間レポート (python) - 2026/08/29'
date = 2026-08-29T23:03:04.891Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月29日 23:03:04
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 20
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> Claude Codeを中心としたAIエージェントのエコシステム拡張が顕著で、プラグイン、スキル、専門ツールが多様化している

- Claude Code関連のリポジトリが多数を占め、プラグインマーケットプレイスやスキル集、専門ツールが充実している
- AIエージェントの応用範囲が求職支援、動画制作、ゲーム開発、科学研究など多岐にわたっている
- ローカル実行やセルフホストを重視したプライバシー配慮型のツールが目立つ
- LLM推論の最適化やコンテキスト管理など、基盤技術の改善プロジェクトも含まれている

### 主なテーマ

- **Claude Codeエコシステムの拡張**: Anthropic公式およびコミュニティによるプラグインディレクトリが整備され、SEO、知識管理、求職支援などの専門スキルがClaude Code上で動作する形で提供されている（`anthropics/claude-plugins-community`、`anthropics/claude-plugins-official`、`AgriciDaniel/claude-seo`、`AgriciDaniel/claude-obsidian`、`MadsLorentzen/ai-job-search`）
- **AIエージェントによる専門作業の自動化**: 動画制作、ゲーム開発、科学研究など、これまで専門性が高かった領域でAIエージェントがワークフロー全体を統括するツールが登場している（`calesthio/OpenMontage`、`htdt/godogen`、`K-Dense-AI/scientific-agent-skills`、`harry0703/MoneyPrinterTurbo`）
- **ローカル・セルフホスト型ツールの台頭**: 個人情報やプライバシーを重視し、ローカル環境やセルフホストで動作する資産管理、知識管理、LLM推論サーバーなどが複数ランクインしている（`securo-finance/securo`、`jundot/omlx`、`AgriciDaniel/claude-obsidian`、`shy3130/tick-stock-panel`）
- **LLM推論とコンテキスト管理の最適化**: KVキャッシュの階層化管理やコンテキストデータベースなど、LLMの推論効率とメモリ管理を改善する基盤技術が開発されている（`LMCache/LMCache`、`volcengine/OpenViking`、`jundot/omlx`）
- **マルチプロバイダ対応とコスト削減**: 複数のAIプロバイダや無料トークンを活用し、フォールバック機能やトークン削減により、コスト効率と可用性を高めるツールが注目されている（`Alishahryar1/free-claude-code`、`abi/screenshot-to-code`）

### 補足的な観察

- 20件中19件がPythonで実装されており、AIエージェント関連開発でのPythonの優位が明確
- Claude Code関連のリポジトリが少なくとも8件含まれ、同プラットフォームを中心としたエコシステムの形成が進んでいる
- starsDuringPeriodの上位はai-job-search(4828)、free-claude-code(4769)、OpenMontage(4661)、MoneyPrinterTurbo(4537)、public-apis(4626)で、実用性と即効性のあるツールが支持されている
- 中国語圏のプロジェクト(tick-stock-panel、MoneyPrinterTurbo)が含まれ、グローバルな開発動向を反映している

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 20 |

## Repository一覧

### 1. [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community)

> Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.

- Language: Python
- Stars: 2,717
- Forks: 227
- Stars in 1週間: 2,207
- Category: プラグインマーケットプレイス
- Keywords: `Claude Code` `Claude Cowork` `プラグイン` `マーケットプレイス` `コミュニティ` `読み取り専用ミラー`
- Summary source: README

#### README要約

- Claude CoworkおよびClaude Code向けのコミュニティ製プラグインを集めたマーケットプレイスの読み取り専用ミラーです。
- marketplace.jsonに掲載されたプラグイン一覧がAnthropicの内部レビューパイプラインから毎晩同期され、自動セキュリティスキャンを通過したもののみが配布承認されます。
- Claude Coworkではclaude.com/pluginsから、Claude Codeではmarketplace addとplugin installコマンドでプラグインを導入できます。
- プラグインの提出はclau.de/plugin-directory-submission経由で行い、このリポジトリへの直接のプルリクエストは自動的にクローズされます。

---

### 2. [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)

> The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep interviews. Fork it and own it.

- Language: Python
- Stars: 38,077
- Forks: 12,912
- Stars in 1週間: 4,828
- Category: AI求職支援ツール
- Keywords: `Claude Code` `求職自動化` `CV生成` `カバーレター` `面接準備` `LaTeX`
- Summary source: README

#### README要約

- Claude Code上で動作するAI求職支援フレームワークで、求人評価からCV作成、面接準備までをローカル環境で実行する。
- /setupでプロフィールを構築し、/scrapeで求人検索、/applyで適合度評価とLaTeX製CV・カバーレター生成、/interviewで面接対策を行う。
- デンマークの求人ポータルに対応するが、コアワークフローは言語・国を問わず利用可能で、他の求人サイトにも適用できる設計。
- Claude Code CLI、Python 3.10+、Bun、LaTeX環境が必要。個人情報を扱うため、フォークではなくプライベートリポジトリでの運用を推奨。

---

### 3. [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

> Official, Anthropic-managed directory of high quality Claude Code Plugins.

- Language: Python
- Stars: 35,386
- Forks: 3,957
- Stars in 1週間: 1,281
- Category: プラグインディレクトリ
- Keywords: `Claude Code` `プラグイン` `Anthropic公式` `マーケットプレイス` `MCP` `スキル`
- Summary source: README

#### README要約

- Anthropicが管理するClaude Code向け高品質プラグインの公式ディレクトリです。
- Anthropic開発の内部プラグインと、審査を通過したサードパーティ製外部プラグインを収録し、標準化された構造で管理されています。
- Claude Codeユーザーが/plugin installコマンドやDiscover画面からプラグインを導入する際に利用します。
- プラグインの動作や安全性はAnthropicが保証しないため、インストール前に各プラグインの信頼性を確認する必要があります。

---

### 4. [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)

> Learn it. Build it. Ship it for others.

- Language: Python
- Stars: 50,955
- Forks: 8,820
- Stars in 1週間: 3,263
- Category: AI学習カリキュラム
- Keywords: `AIエンジニアリング` `カリキュラム` `LLM` `エージェント` `MCP` `オープンソース`
- Summary source: README

#### README要約

- AIエンジニアリングを基礎から実践まで学べる無料・オープンソース（MITライセンス）のカリキュラムです。
- 511のレッスンと20のフェーズで構成され、Python、TypeScript、Rust、Juliaを使い、プロンプト、スキル、エージェント、MCPサーバーなど再利用可能な成果物を各レッスンで作成します。
- AIツールを職業的に使いこなしたい学習者や、LLMアプリ、エージェント、MCP、Agent Skillsを構築したい開発者が対象で、目的別の学習ルートが用意されています。
- GitHubからクローンしてpython3でレッスンを実行するか、npx skills addでAIチューターを導入でき、Node.jsやnpxがない場合はWebサイトで学習可能です。

---

### 5. [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)

> Use Claude Code, Codex, Pi, and OpenCode and more for free (1.3B+ free tokens) from your terminal, app, IDE, or phone like OpenClaw (voice supported + ToS friendly)

- Language: Python
- Stars: 51,407
- Forks: 8,280
- Stars in 1週間: 4,769
- Category: AIコーディングエージェントプロキシ
- Keywords: `Claude Code` `無料トークン` `マルチプロバイダ` `コーディングエージェント` `音声入力` `フォールバック`
- Summary source: README

#### README要約

- Claude Code、Codex、Pi、OpenCodeなど10種類のコーディングエージェントを、50のToS準拠プロバイダ経由で無料・有料・ローカルモデルから利用できるPython製ツール。
- 月間13億以上の無料トークンを提供し、プロバイダ障害時の自動フォールバック、最大90%のトークン削減、音声入力によるコード生成などの機能を備える。
- ターミナル、デスクトップ、VS Code、JetBrains、Discord、Telegramなど多様な環境でAIコーディングエージェントを使いたい開発者向け。
- curlまたはPowerShellのインストールスクリプトで導入し、Admin UIからAPIキーとモデルを設定して使用する。無料枠の可用性は各プロバイダに依存する。

---

### 6. [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)

> Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.

- Language: Python
- Stars: 37,906
- Forks: 3,570
- Stars in 1週間: 2,195
- Category: AIエージェントスキル
- Keywords: `AI Scientist` `Agent Skills` `科学ワークフロー` `バイオインフォマティクス` `創薬` `Python`
- Summary source: README

#### README要約

- オープンなAgent Skills標準に対応したAIエージェント向けの、163の科学・研究スキル集。
- 100以上の科学データベースアクセス、70以上のPythonパッケージのワークフロー、9つの科学連携スキルを含む。
- 生物、化学、医学、創薬などの分野で、複雑な多段階の科学ワークフローを実行する研究者を支援する。
- Cursor、Claude Code、Codexなどで動作し、MITライセンスだが個々のスキルには独自のライセンスがある。

---

### 7. [PostHog/posthog](https://github.com/PostHog/posthog)

> 🦔 PostHog is the leading platform for building self-driving products. Our developer tools – AI observability, analytics, session replay, flags, experiments, error tracking, logs, and more – capture all the context agents need to diagnose problems, uncover opportunities, and ship fixes. Steer it all from Slack, web, desktop, or the MCP.

- Language: Python
- Stars: 39,469
- Forks: 3,311
- Stars in 1週間: 1,270
- Category: プロダクト分析・開発者ツール
- Keywords: `プロダクト分析` `セッションリプレイ` `フィーチャーフラグ` `AIオブザーバビリティ` `エラー追跡` `オープンソース`
- Summary source: README

#### README要約

- PostHogは、プロダクトデータを活用して問題の診断や改善を自動化する「self-driving products」構築のためのオープンソースプラットフォームです。
- プロダクト分析、Web分析、セッションリプレイ、フィーチャーフラグ、実験、エラー追跡、ログ、AIオブザーバビリティなどの開発者ツールを統合し、SlackやWeb、デスクトップ、MCPから操作できます。
- プロダクト開発者やエンジニアが、ユーザー行動の理解、エラーの監視、機能の安全なロールアウト、LLMアプリのトレースなどを行う用途に適しています。
- PostHog Cloud（US/EU）の無料枠で手軽に開始でき、Dockerによるセルフホストも可能ですが、オープンソース版は月約10万イベントまでが目安でサポートや保証はありません。

---

### 8. [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel)

> TSP自托管、零运维的 A 股「选股 + 监控 + 回测」量化工作台 | 基于 TickFlow 数据源 | LLM能力驱使策略定制+个股分析+复盘 | 自由接入第三方数据源与个性化扩展数据 | 个人开源 ,非第三方官方项目

- Language: Python
- Stars: 3,950
- Forks: 926
- Stars in 1週間: 546
- Category: 量化取引ワークベンチ
- Keywords: `A株` `量化取引` `バックテスト` `FastAPI` `Polars` `自ホスト`
- Summary source: README

#### README要約

- A株向けの自ホスト型・ゼロ運用の「スクリーニング＋監視＋バックテスト」量化ワークベンチ。
- 18種の内蔵戦略とPolarsによる高速スキャン、vectorbtバックテスト、4種類の監視ルール、AIによる戦略生成・個別株分析・市場レビュー機能を搭載。
- 個人投資家や量化愛好家を対象とし、TickFlowデータソースを基盤にプラグインでサードパーティデータソースを自由に拡張可能。
- Python 3.11以上とNode 20以上が必要で、Dockerまたは開発モードで起動。学習・研究専用で商用利用は禁止。

---

### 9. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)

> World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.

- Language: Python
- Stars: 54,032
- Forks: 6,710
- Stars in 1週間: 4,661
- Category: AI動画制作システム
- Keywords: `エージェント` `動画制作` `パイプライン` `AIコーディングアシスタント` `オープンソース` `Python`
- Summary source: README

#### README要約

- AIコーディングアシスタントを本格的な動画制作スタジオに変える、オープンソースのエージェント型動画制作システム。
- 12の制作パイプラインと100以上のツールを備え、リサーチ・脚本・素材生成・編集・最終合成までをエージェントが統括する。
- Claude CodeやCursorなどのAIアシスタントを使う開発者・クリエイターが、自然言語の指示や参照動画から映像作品を制作できる。
- Python製でAGPLv3ライセンス。ツール追加はBaseTool継承で自動登録、パイプラインはYAMLで定義し、APIキー不要の契約テストも用意。

---

### 10. [jundot/omlx](https://github.com/jundot/omlx)

> LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar

- Language: Python
- Stars: 20,957
- Forks: 1,779
- Stars in 1週間: 697
- Category: LLM推論サーバー
- Keywords: `Apple Silicon` `連続バッチング` `階層型KVキャッシュ` `メニューバー管理` `OpenAI互換API` `MLX`
- Summary source: README

#### README要約

- Apple Silicon Mac向けに最適化されたLLM推論サーバーで、macOSのメニューバーから直接管理できます。
- 連続バッチングと、RAM（ホット）およびSSD（コールド）の階層型KVキャッシュを備え、サーバー再起動後も過去のコンテキストを再利用可能です。
- テキストLLM、VLM、OCR、埋め込み、リランカーを同一サーバーで提供し、Claude Codeなどのコーディングツールとの連携を重視するユーザー向けです。
- macOS 15.0以降、Python 3.11–3.13、Apple Siliconが必要で、DMGアプリ、Homebrew、ソースからのインストールに対応しています。

---

### 11. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)

> 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.

- Language: Python
- Stars: 118,475
- Forks: 18,088
- Stars in 1週間: 4,537
- Category: AI動画生成
- Keywords: `AI` `ショート動画` `自動生成` `LLM` `TTS` `Python`
- Summary source: README

#### README要約

- テーマやキーワードを入力するだけで、AIが動画スクリプト生成から素材選定、字幕・BGM付与までを自動化し、高画質なショート動画を合成するツール。
- WebUI・API・CLI・AIエージェントの4方式を備え、複数のLLMやTTS、Pexels等の素材ソース、AI生成素材、TikTok/Instagram/YouTube Shortsへの自動投稿に対応。
- 手軽に量産したいクリエイターや、縦横のHDサイズ・バッチ生成・多言語スクリプト・カスタム素材を使いたい開発者・運用者向け。
- Python製でffmpegや各種APIキー設定が必要。Seedance等のAI素材生成は有料タスクの確認が求められ、環境によってはffmpegパスやファイル数制限の調整が必要。

---

### 12. [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code)

> Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)

- Language: Python
- Stars: 76,018
- Forks: 9,260
- Stars in 1週間: 1,663
- Category: AIコード生成ツール
- Keywords: `スクリーンショット` `コード変換` `AI` `HTML` `React` `Tailwind`
- Summary source: README

#### README要約

- スクリーンショット、モックアップ、Figmaデザイン、画面録画をAIでクリーンなコードに変換するツール。
- HTML/Tailwind、React、Vue、Bootstrap、Ionicなど複数のスタックに対応し、Gemini、GPT、ClaudeなどのAIモデルを使用。
- ローカル実行またはホスト版アプリで利用可能で、カスタマイズやセルフホストを希望する開発者向け。
- 実行にはOpenAI、Anthropic、GeminiのいずれかのAPIキーが必須で、最高品質にはGeminiとReplicateのキーが強く推奨される。

---

### 13. [pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat)

> Open Source framework for voice agents, multimodal apps, and realtime AI. Maintained by Daily and the community.

- Language: Python
- Stars: 14,949
- Forks: 2,582
- Stars in 1週間: 495
- Category: AI音声エージェントフレームワーク
- Keywords: `音声エージェント` `リアルタイムAI` `マルチモーダル` `Python` `マルチエージェント` `WebRTC`
- Summary source: README

#### README要約

- Pipecatは、リアルタイム音声およびマルチモーダル対話エージェントを構築するためのオープンソースPythonフレームワークです。
- 音声認識、音声合成、会話処理を統合し、モジュール式パイプラインで複雑な動作を構成でき、WebSocketやWebRTCによる超低遅延通信を実現します。
- 音声アシスタント、マルチエージェントシステム、AIコンパニオン、カスタマーサポートボットなどを開発する開発者や企業を対象としています。
- Python 3.11以上が必要で、`pipecat init quickstart`コマンドまたはクイックスタートガイドから開始でき、JavaScript、React、iOS、AndroidなどのクライアントSDKも提供されています。

---

### 14. [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian)

> Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own. AI note-taking, personal knowledge management (PKM), and an open-source Notion alternative. Based on Karpathy's LLM Wiki pattern.

- Language: Python
- Stars: 14,348
- Forks: 1,436
- Stars in 1週間: 3,207
- Category: AI知識管理ツール
- Keywords: `Obsidian` `Claude Code` `PKM` `Markdown` `ローカルファースト` `Agent Skills`
- Summary source: README

#### README要約

- Claude CodeとObsidian向けのローカルファーストな知識管理システムで、ソース資料をリンク付きのMarkdownノートに変換する。
- 15のスキルで構成され、ソースの取り込み、引用付き回答、リンク構築、リント、Canvas可視化などを一貫したトランザクションで実行する。
- PKMを実践する個人や研究者が、自分のファイルを所有しながらAI支援の知識ベースを構築する用途に適している。
- Python 3.11以上とObsidianが必要で、ネイティブWindowsではWSL経由の書き込みが必須。MITライセンスで提供される。

---

### 15. [public-apis/public-apis](https://github.com/public-apis/public-apis)

> A collective list of free APIs

- Language: Python
- Stars: 472,778
- Forks: 52,184
- Stars in 1週間: 4,626
- Category: APIリスト
- Keywords: `公開API` `無料API` `開発者向け` `APIカタログ` `コミュニティ主導` `REST API`
- Summary source: README

#### README要約

- 無料で利用できる公開APIを集めた、コミュニティによって手動でキュレーションされたリストです。
- 動物、天気、金融など多岐にわたるドメインのAPIをカテゴリ別に整理し、認証方法やHTTPS対応などの情報を提供します。
- 自分の製品やプロジェクトで利用するAPIを探している開発者が主な対象ユーザーです。
- リストの冒頭にはスポンサーであるAPILayerのAPI製品に関する情報が記載されています。

---

### 16. [securo-finance/securo](https://github.com/securo-finance/securo)

> Open-source personal finance manager. Self-hosted, privacy-first.

- Language: Python
- Stars: 2,607
- Forks: 328
- Stars in 1週間: 498
- Category: 個人向け資産管理
- Keywords: `セルフホスト` `プライバシー重視` `オープンソース` `資産管理` `銀行同期` `Docker`
- Summary source: README

#### README要約

- Securoは、自分のインフラ上で動作するオープンソースの個人向け資産管理ツールで、金融データを第三者に渡さずに管理できます。
- 複数口座管理、取引の検索・フィルタ・CSVエクスポート、OFX/QIF/CAMT/CSVインポート、自動分類ルール、定期取引、予算、目標貯蓄、資産評価、レポート機能を備えています。
- プライバシーを重視し、銀行同期（Pluggy、Enable Banking、SimpleFIN）や多通貨対応、複数ユーザー管理、二要素認証、OIDCログイン、オプションのセルフホストAIエージェントを求める個人や小規模グループ向けです。
- DockerまたはPodmanで簡単にセットアップでき、Linux/macOSはインストールスクリプト、WindowsはDocker Desktop経由で導入可能です。AGPL-3.0ライセンスのため、改変版をネットワークサービスとして提供する場合もソース公開が必要です。

---

### 17. [htdt/godogen](https://github.com/htdt/godogen)

> Autonomous game development for Godot, Bevy, and Babylon.js with Claude Code and Codex

- Language: Python
- Stars: 6,555
- Forks: 606
- Stars in 1週間: 953
- Category: AIゲーム開発自動化
- Keywords: `Godot` `Bevy` `Babylon.js` `Claude Code` `Codex` `自動ゲーム生成`
- Summary source: README

#### README要約

- Claude CodeやCodexを使い、Godot、Bevy、Babylon.js向けにゲームを自律開発するジェネレーターのソースリポジトリ。
- ゲームの説明を与えるとエージェントが資産生成・エンジン実行・結果検証を行い、ライブまたは録画で成果を提示する。
- ゲームを自動生成させたい開発者や、AIエージェントによる開発を監視・介入しながら進めたいユーザー向け。
- publish.shでエンジンとホストエージェントを選んで公開し、各種ランタイム、APIキー、システムパッケージの準備が必要。

---

### 18. [volcengine/OpenViking](https://github.com/volcengine/OpenViking)

> Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.

- Language: Python
- Stars: 34,291
- Forks: 2,610
- Stars in 1週間: 2,335
- Category: AIエージェント基盤
- Keywords: `コンテキストデータベース` `エージェントメモリ` `RAG` `仮想ファイルシステム` `階層的コンテキスト` `Python`
- Summary source: README

#### README要約

- AIエージェント向けのオープンソースコンテキストデータベースで、メモリ・リソース・スキルをviking://プロトコルの仮想ファイルシステムとして統一管理する。
- コンテンツをL0(要約)・L1(概要)・L2(詳細)の3層に処理してオンデマンドで読み込み、ディレクトリ再帰検索と観測可能な検索軌跡によりトークン削減とデバッグを実現する。
- Claude Code、Codex、Cursor、LangChain等のエージェント開発者が、長期記憶やRAG、スキル管理をエージェントに組み込む用途に適する。
- Python 3.10以上が必要でpip install openvikingで導入し、openviking-server initで対話的に設定後にサーバを起動する。メインプロジェクトはAGPLv3ライセンス。

---

### 19. [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)

> Universal SEO skill for Claude Code. 25 sub-skills + 18 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, backlinks, local SEO, maps intelligence, semantic clustering, e-commerce SEO, international SEO, Google APIs, and PDF/Excel reporting. Optional DataForSEO, Firecrawl, and Banana extensions.

- Language: Python
- Stars: 15,785
- Forks: 2,314
- Stars in 1週間: 992
- Category: SEO自動化ツール
- Keywords: `Claude Code` `SEO監査` `並列エージェント` `GEO/AEO` `E-E-A-T` `スキーマ`
- Summary source: README

#### README要約

- Claude Code向けのオープンソースSEO分析プラグインで、サイト監査から優先順位付きアクションプランを自動生成する。
- 25のサブスキルと18の専門エージェントが並列実行され、技術SEO・E-E-A-T・スキーマ・GEO/AEO・ローカル・EC・国際SEOなどを網羅する。
- SEO代理店、社内SEO担当者、フリーランスコンサルタント向けで、週次自動監査や提案前の迅速なスコアリングに活用できる。
- Claude Code 1.0.33以降でプラグインインストール可能。MITライセンス。DataForSEO、Firecrawl、Ahrefsなどの拡張はオプション。

---

### 20. [LMCache/LMCache](https://github.com/LMCache/LMCache)

> LMCache: Supercharge Your LLM with the Fastest KV Cache Layer

- Language: Python
- Stars: 11,564
- Forks: 1,811
- Stars in 1週間: 257
- Category: LLM推論最適化
- Keywords: `KVキャッシュ` `LLM推論` `TTFT削減` `vLLM` `キャッシュ再利用` `PD分離`
- Summary source: README

#### README要約

- LMCacheはLLM推論向けのKVキャッシュ管理レイヤーで、KVキャッシュを永続化・再利用可能なリソースとして扱い、TTFT削減とスループット向上を実現する。
- エンジン独立のデーモンとして動作し、CPUメモリ・ローカルディスク・リモートストレージへの階層的オフロード、非プレフィックスKV再利用、PD分離、KV転送、観測性メトリクスを提供する。
- 長コンテキストのエージェントワークロード、マルチターン会話、RAGなど知識拡張ワークロードを運用するLLMサービングエンジニアやインフラ担当者が主な対象。
- pip install lmcacheで導入可能。vLLM等の主要サービングエンジンと連携し、Redis、S3互換ストレージ、NIXLなど複数バックエンドをサポートする。Apache License 2.0。

---
