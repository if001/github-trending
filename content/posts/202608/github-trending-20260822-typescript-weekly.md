+++
title = 'GitHub Trending 1週間レポート (typescript) - 2026/08/22'
date = 2026-08-22T21:23:04.752Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'typescript']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月22日 21:23:04
- Language: typescript
- Date range: 1週間
- 対象リポジトリ数: 8
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/typescript?since=weekly)

## 今回のTrendingの傾向

> TypeScript製のAIコーディングエージェント関連ツールとローカルファーストなデスクトップアプリがトレンドを牽引している

- AIコーディングエージェント関連のリポジトリが5件（cursor/plugins、eneskirca/nodeterm、CodebuffAI/freebuff、apache/maka）と全体の半数を占め、開発ワークフローへのAI統合が強い関心を集めている
- 全8リポジトリがTypeScriptで記述されており、言語分布が完全にTypeScriptに集中している
- ローカルファーストやプライバシー重視を謳うツール（apache/maka、lightningpixel/modly、amruthpillai/reactive-resume）が複数ランクインし、データの自己管理への意識が見られる
- 最もスターを獲得したのはcordiverse/cordis（3614スター）で、新しいプログラミングパラダイムを提唱するメタフレームワークへの注目度の高さがうかがえる
- Electronやデスクトップアプリとして提供されるツールが多く、ブラウザだけでなくローカル環境での実行を重視する傾向がある

### 主なテーマ

- **AIコーディングエージェントのエコシステム拡大**: CodebuffAI/freebuff（1123スター）はAPIキー不要の無料コーディングエージェント、eneskirca/nodeterm（427スター）はAIエージェントのセッションを視覚的に管理するターミナルツール、cursor/plugins（1582スター）はCursorエディタの公式プラグイン集、apache/maka（648スター）はAIエージェントのワークスペースと、AIコーディングエージェントを使う・管理する・拡張するためのツールが4件ランクインしている。（`CodebuffAI/freebuff`、`eneskirca/nodeterm`、`cursor/plugins`、`apache/maka`）
- **ローカルファースト・プライバシー重視のツール**: apache/makaはローカルファーストのAIエージェントワークスペースを明示し、lightningpixel/modly（1379スター）はローカルGPU上で完結する3Dモデル生成、amruthpillai/reactive-resume（1124スター）はセルフホスト可能でプライバシー重視の履歴書ビルダーであり、クラウドに依存しない設計を売りにするツールが複数存在する。（`apache/maka`、`lightningpixel/modly`、`amruthpillai/reactive-resume`）
- **新しいプログラミングパラダイムの探求**: cordiverse/cordisは「時空間構成可能性」を掲げるメタフレームワークで、関連論文も公開されており、3614スターと今期最大の獲得数を記録。理論的基盤を持つ新しいプログラミング手法への関心の高さが反映されている。（`cordiverse/cordis`）
- **デスクトップ生産性ツールの継続的な人気**: agalwood/Motrix（1863スター）はElectron製の多機能ダウンロードマネージャー、amruthpillai/reactive-resumeは履歴書作成ツール、lightningpixel/modlyは3Dモデル生成デスクトップアプリと、特定用途に特化したデスクトップアプリが安定した支持を得ている。（`agalwood/Motrix`、`amruthpillai/reactive-resume`、`lightningpixel/modly`）

### 補足的な観察

- 全8リポジトリがTypeScriptで記述されており、他言語のリポジトリは1件もランクインしていない
- スター獲得数のトップはcordiverse/cordisの3614で、2位のagalwood/Motrix（1863）に約1.9倍の差をつけている
- Apache Makaはインキュベーション中、cordisはAPIが不安定、Motrixはv2ベータ版と、注目を集めつつも開発段階が初期のプロジェクトが目立つ
- Electronを採用しているリポジトリがapache/makaとagalwood/Motrixの2件あり、クロスプラットフォームのデスクトップアプリ基盤として引き続き利用されている

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 8 |

## Repository一覧

### 1. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 4,634
- Forks: 380
- Stars in 1週間: 1,582
- Category: 開発ツール拡張
- Keywords: `Cursor` `プラグイン` `マーケットプレイス` `開発効率化` `エディタ拡張` `TypeScript`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール・フレームワーク・SaaS製品向けのプラグインを提供するマーケットプレイスリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェストで管理される。
- 開発者やチームがCursorエディタの機能を拡張し、CI、コードレビュー、ドキュメント作成、外部サービス連携などを効率化するために使用する。
- プラグインはスキル、ルール、MCPサーバー定義などで構成され、個別にインストールして利用する。

---

### 2. [cordiverse/cordis](https://github.com/cordiverse/cordis)

> Meta-Framework of Spatiotemporal Composability

- Language: TypeScript
- Stars: 7,096
- Forks: 410
- Stars in 1週間: 3,614
- Category: プログラミングフレームワーク
- Keywords: `メタフレームワーク` `時空間構成可能性` `TypeScript` `プログラミングパラダイム` `開発中`
- Summary source: README

#### README要約

- Cordisは時空間的な構成可能性を実現するメタフレームワークです。
- プログラミングパラダイムとしての理論的基盤を持ち、関連論文とドキュメントが公開されています。
- 新しいプログラミング手法に興味のある開発者や研究者を対象としています。
- 現在活発に開発中であり、APIは安定しておらず予告なく変更される可能性があります。

---

### 3. [eneskirca/nodeterm](https://github.com/eneskirca/nodeterm)

> Node-based terminal manager for AI coding agents — tmux-backed terminals and parallel agent sessions as draggable nodes on an infinite pan/zoom canvas. macOS, Linux, and a browser Server Edition.

- Language: TypeScript
- Stars: 1,039
- Forks: 112
- Stars in 1週間: 427
- Category: ターミナル管理ツール
- Keywords: `ターミナル` `AIエージェント` `tmux` `キャンバス` `カンバン` `Claude Code`
- Summary source: README

#### README要約

- ターミナルとAIコーディングエージェントを無限キャンバス上のドラッグ可能なノードとして管理するツール。
- tmuxベースの永続セッション、カンバンボード表示、音声入力、リモートアクセス機能を備える。
- Claude CodeなどのAIエージェントを使う開発者や、複数ターミナルを視覚的に整理したいユーザー向け。
- macOSとLinuxに対応し、ブラウザ版Server EditionやiOSコンパニオンアプリも提供。BUSL-1.1ライセンス。

---

### 4. [CodebuffAI/freebuff](https://github.com/CodebuffAI/freebuff)

> The free coding agent

- Language: TypeScript
- Stars: 10,534
- Forks: 1,152
- Stars in 1週間: 1,123
- Category: AIコーディングエージェント
- Keywords: `無料` `コーディングエージェント` `マルチエージェント` `CLI` `TypeScript` `Codebuff`
- Summary source: README

#### README要約

- Freebuffは、サブスクリプションやAPIキー不要で使える無料のAIコーディングエージェント製品群です。
- 専門エージェントがコードベースの文脈把握、計画、編集、ツール実行、レビューを分担し、複数のAIモデルを選択できます。
- ターミナル、デスクトップ、ブラウザ、GitHubリポジトリで動作し、コーディング、アプリ構築、リサーチを行う開発者向けです。
- CLIはnpmでグローバルインストールして起動でき、テキスト広告による運営やモデルごとのセッション制限、データ利用に関する注意があります。

---

### 5. [apache/maka](https://github.com/apache/maka)

> Apache Maka (Incubating) is a local-first AI agent workspace. Model messages, tool calls, tool results, permission decisions, and termination events are recorded as an append-only log.

- Language: TypeScript
- Stars: 2,167
- Forks: 253
- Stars in 1週間: 648
- Category: AIエージェント開発環境
- Keywords: `ローカルファースト` `AIエージェント` `TypeScript` `Electron` `サンドボックス` `実行ログ`
- Summary source: README

#### README要約

- Apache MakaはローカルファーストのAIエージェントワークスペースで、プロジェクトの検査やツール実行を自分のマシン上で行う。
- モデルのメッセージ、ツール呼び出し、結果、終了イベントを追記専用ログとして記録し、クラッシュ復旧や中断ターンの再開を可能にする。
- デスクトップ（Electron+React）、TUI/CLI、評価（Eval）の3つのインターフェースを提供し、すべてRuntime Host経由でエージェントを実行する。
- 現在インキュベーション中でApacheリリースは未発行のためソースからビルドが必要。Node.js 22.19以上が必須で、デスクトップ版はApple Silicon Macのみ対応。

---

### 6. [lightningpixel/modly](https://github.com/lightningpixel/modly)

> Desktop app to generate 3D models from images or prompt using local AI — runs entirely on your GPU

- Language: TypeScript
- Stars: 7,158
- Forks: 679
- Stars in 1週間: 1,379
- Category: 3Dモデル生成ツール
- Keywords: `3Dモデル生成` `ローカルAI` `画像から3D` `デスクトップアプリ` `オープンソース` `GPU`
- Summary source: README

#### README要約

- Modlyは、ローカルのGPU上で動作するオープンソースAIを使い、画像やプロンプトから3Dモデルを生成するデスクトップアプリです。
- Windows、Linux、Apple Silicon搭載macOSに対応し、Hunyuan3DやTripoSGなどの拡張機能をGitHub経由でインストールしてモデルを追加できます。
- 3Dモデリングを行いたい開発者やクリエイター向けで、ワークフロー機能やCLIを通じた自動化もサポートされています。
- Releasesページからインストーラーを入手するか、リポジトリをクローンしてnpmとPython環境をセットアップして起動します。

---

### 7. [agalwood/Motrix](https://github.com/agalwood/Motrix)

> A full-featured download manager.

- Language: TypeScript
- Stars: 54,321
- Forks: 4,980
- Stars in 1週間: 1,863
- Category: ダウンロードマネージャー
- Keywords: `ダウンロード管理` `BitTorrent` `Electron` `TypeScript` `クロスプラットフォーム` `オープンソース`
- Summary source: README

#### README要約

- MotrixはHTTP、FTP、BitTorrent、マグネットリンクなどに対応したモダンでシンプルなデスクトップダウンロードマネージャーです。
- Electron、React、TypeScriptで構築され、ダウンロードコアはUIから独立しており、ブラウザ拡張やCLIツールはMDXPプロトコル（JSON-RPC 2.0ベース）で通信します。
- macOS、Windows、Linuxのデスクトップアプリとして動作するほか、Docker対応のヘッドレスサーバーとしてNASやホームサーバーでも利用できます。
- 現在v2はベータ版のため、既存データのバックアップを取り、v1データの移行は未検証であることに注意して別環境でテストすることが推奨されています。

---

### 8. [amruthpillai/reactive-resume](https://github.com/amruthpillai/reactive-resume)

> A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. Try it out today!

- Language: TypeScript
- Stars: 41,518
- Forks: 4,652
- Stars in 1週間: 1,124
- Category: 履歴書作成ツール
- Keywords: `オープンソース` `プライバシー重視` `セルフホスト` `PDFエクスポート` `TypeScript` `無料`
- Summary source: README

#### README要約

- プライバシーを重視した無料・オープンソースの履歴書ビルダーで、作成・更新・共有を簡単に行える。
- テンプレート選択、リアルタイムプレビュー、ドラッグ&ドロップでのセクション並び替え、PDF/JSON/DOCX形式でのエクスポートが可能。
- セルフホスト対応でデータの完全な所有権を持ち、トラッキングや広告なし。AI統合や多言語サポートなどの拡張機能も提供。
- Docker Composeで簡単にローカル環境を構築でき、MITライセンスの下で自由に利用・改変が可能。

---
