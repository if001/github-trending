+++
title = 'GitHub Trending 1週間レポート (python) - 2026/10/11'
date = 2026-10-11T00:10:09.998Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'python']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月11日 0:10:09
- Language: python
- Date range: 1週間
- 対象リポジトリ数: 12
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/python?since=weekly)

## 今回のTrendingの傾向

> AIエージェントの能力を拡張するツール群がトレンドを席巻し、CAD・動画制作・Webアクセスなど専門領域への応用が加速している

- AIエージェントに特化したツールが上位を独占し、Panniantong/Agent-Reach（6,056スター）やcalesthio/OpenMontage（3,502スター）などが大きな注目を集めている
- エージェントの能力拡張が多様化しており、CAD生成（earthtojake/text-to-cad）、動画制作（OpenMontage）、Webアクセス（Agent-Reach）、SRE（Tracer-Cloud/opensre）など専門領域への展開が進んでいる
- 基盤モデル系プロジェクトも複数ランクインしており、金融時系列予測のKronosや3D再構成のLingBot-Mapなど、特定ドメインに特化したモデルが登場している
- 全12件中11件がPythonで実装されており、AIエージェント・機械学習エコシステムにおけるPythonの支配的な地位が確認できる
- Anthropic公式のknowledge-work-plugins（2,644スター）がランクインし、AI企業がプラグインエコシステムの整備を本格化させている動きが見られる

### 主なテーマ

- **AIエージェント能力拡張ツール**: AIエージェントに新たな能力を付与するツールが最も多くランクイン。Agent-ReachはWebアクセス、text-to-cadはCAD生成、OpenMontageは動画制作、opensreはSRE機能を追加し、いずれもClaude CodeやCursorなどの主要エージェントとの連携を前提としている（`Panniantong/Agent-Reach`、`earthtojake/text-to-cad`、`calesthio/OpenMontage`、`Tracer-Cloud/opensre`）
- **ドメイン特化型基盤モデル**: 特定領域に最適化された基盤モデルが登場。Kronosは金融市場のローソク足データに特化し世界45以上の取引所データで学習、LingBot-Mapはストリーミング3D再構成に特化しECCV 2026ベストペーパー候補とされている（`shiyu-coder/Kronos`、`Robbyant/lingbot-map`）
- **AI学習・教育リソース**: AIエンジニアリングを体系的に学ぶためのカリキュラムが3,656スターを獲得。523のレッスンと20のフェーズで構成され、複数言語での実装を通じて実践的なスキル習得を目指す（`rohitg00/ai-engineering-from-scratch`）
- **LLMカスタマイズ・制御**: 言語モデルの動作を変更・制御するツールが注目を集めている。hereticは検閲除去を自動化し、MiroFishはマルチエージェントシミュレーションで予測を行うなど、LLMの挙動を用途に合わせて調整する需要が高い（`p-e-w/heretic`、`666ghj/MiroFish`）
- **エンタープライズ向けAIプラグイン**: Anthropic公式のプラグイン集がランクインし、営業・法務・財務など11種類の職種別プラグインを提供。企業でのAI活用を促進するためのエコシステム整備が進んでいる（`anthropics/knowledge-work-plugins`）

### 補足的な観察

- スター数の分布は大きく偏っており、1位のAgent-Reach（6,056スター）と最下位のOpenCore-Legacy-Patcher（187スター）では約32倍の差がある
- 言語分布はPythonが12件中11件（約92%）を占め、AI・機械学習分野での圧倒的な優位性を示している
- Claude Code、Cursor、Codexなど複数のAIエージェントプラットフォームへの対応を明示するプロジェクトが多く、マルチプラットフォーム対応が標準化しつつある
- OSINTツール（GhostTrack）やレガシーシステム支援（OpenCore-Legacy-Patcher）など、AI以外のニッチな需要に応えるプロジェクトもランクインしている

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 12 |

## Repository一覧

### 1. [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)

> Give your agent CAD superpowers.

- Language: Python
- Stars: 18,989
- Forks: 1,872
- Stars in 1週間: 2,369
- Category: AIエージェントCADプラグイン
- Keywords: `CAD生成` `3Dモデリング` `AIエージェント` `製造チェック` `STEP/STL` `エンジニアリング`
- Summary source: README

#### README要約

- AIエージェントにCAD機能を追加するプラグインで、テキスト指示から3Dモデルを生成する。
- STEP、GLB、STL、3MF形式でのモデル生成、製造可能性チェック、エンジニアリング図面作成、3Dプリント・板金・CNC加工サービス連携を提供。
- Claude Code、Codex、Cursor、Gemini、Grokなど主要なAIエージェントユーザーが対象で、設計・製造ワークフローを自動化したい開発者やエンジニア向け。
- uv経由でインストールし、各エージェントアプリ用のプラグインまたはスキルを導入。初回起動時にランタイムをダウンロードするためネットワーク接続が必要。

---

### 2. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)

> Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.

- Language: Python
- Stars: 95,479
- Forks: 8,355
- Stars in 1週間: 6,056
- Category: AIエージェントツール
- Keywords: `AIエージェント` `CLI` `Webスクレイピング` `マルチプラットフォーム` `オープンソース` `Python`
- Summary source: README

#### README要約

- AIエージェントにインターネットアクセス能力を付与するCLIツール。Twitter、Reddit、YouTube、GitHub、Bilibili、小紅書などの主要プラットフォームの読み取りと検索をAPI料金なしで実現する。
- 各プラットフォームに最適なバックエンドツール（yt-dlp、Jina Reader、gh CLI等）を自動選定・インストールし、`agent-reach doctor`コマンドで接続状態を診断。複数のバックエンドを優先順位付きで管理し、障害時は自動的に代替手段に切り替える。
- Claude Code、OpenClaw、Cursor、WindsurfなどのAIエージェントユーザー向け。Web検索、SNS調査、動画字幕取得、RSS購読など、エージェントの情報収集タスクを支援する。
- Python 3.10以上が必要。インストールはエージェントに指示文を送るだけで完了。Cookieはローカル保存のみで外部送信なし。サーバー環境ではプロキシ（月$1程度）が必要な場合がある。

---

### 3. [p-e-w/heretic](https://github.com/p-e-w/heretic)

> Fully automatic censorship removal for language models

- Language: Python
- Stars: 34,498
- Forks: 3,862
- Stars in 1週間: 1,495
- Category: 言語モデル検閲除去ツール
- Keywords: `abliteration` `検閲除去` `Optuna` `方向性アブレーション` `LLM` `自動最適化`
- Summary source: README

#### README要約

- Hereticは、Transformerベースの言語モデルから検閲（安全性アライメント）を自動的に除去するツールです。
- 方向性アブレーション（abliteration）とOptunaによるTPEベースのパラメータ最適化を組み合わせ、拒否応答の最小化と元モデルからのKLダイバージェンス最小化を同時に実現します。
- コマンドライン操作の知識があれば誰でも利用可能で、密モデル・マルチモーダルモデル・MoEアーキテクチャなど幅広いモデルに対応しています。
- Python 3.10以上とPyTorch 2.2以上が必要で、pip install -U heretic-llmでインストール後、hereticコマンドにモデル名を指定するだけで実行できます。

---

### 4. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)

> World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.

- Language: Python
- Stars: 66,162
- Forks: 8,424
- Stars in 1週間: 3,502
- Category: AI動画制作システム
- Keywords: `動画制作` `AIエージェント` `オープンソース` `Python` `AGPLv3` `自動編集`
- Summary source: README

#### README要約

- AIコーディングアシスタントを本格的な動画制作スタジオに変える、オープンソースのエージェント型動画制作システム。
- 12の制作パイプラインと100以上のツールを備え、リサーチ、脚本、素材生成、編集、最終合成までをエージェントが統括する。
- Claude CodeやCursorなどのAIアシスタントを使い、自然言語の指示だけで映像作品を作りたいクリエイターや開発者向け。
- Python製でライセンスはAGPLv3。YouTube等の参照動画から制作計画を立てる機能もあり、ツールはBaseTool継承で追加可能。

---

### 5. [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map)

> [ECCV 2026 Best Paper Award Candidate] LingBot-Map: Geometric Context Transformer for Streaming 3D Reconstruction

- Language: Python
- Stars: 17,955
- Forks: 1,967
- Stars in 1週間: 725
- Category: 3D再構成
- Keywords: `3D再構成` `ストリーミング推論` `Transformer` `KVキャッシュ` `ECCV 2026` `基盤モデル`
- Summary source: README

#### README要約

- LingBot-Mapは、ストリーミング3D再構成のためのフィードフォワード型3D基盤モデルです。
- Geometric Context Transformerにより座標グラウンディング、密な幾何学的手がかり、長距離ドリフト補正を単一のストリーミングフレームワーク内で統合します。
- ページングされたKVキャッシュアテンションを備えたフィードフォワードアーキテクチャにより、518×378解像度で約20 FPSの安定した推論を実現し、10,000フレームを超える長いシーケンスに対応します。
- conda環境とPyTorch 2.8.0（CUDA 12.8）が必要で、FlashInferのインストールが推奨されます。Apache License 2.0で公開されています。

---

### 6. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)

> Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork

- Language: Python
- Stars: 28,814
- Forks: 3,277
- Stars in 1週間: 2,644
- Category: AIプラグイン集
- Keywords: `Claude Cowork` `プラグイン` `ナレッジワーク` `MCP` `スキル` `カスタマイズ`
- Summary source: README

#### README要約

- Claudeを特定の職種・チーム・企業の専門家に変えるプラグイン集で、Claude Cowork向けに構築されClaude Codeとも互換性がある。
- 各プラグインはスキル、コネクタ、スラッシュコマンド、サブエージェントをバンドルし、マークダウンとJSONのみのファイルベース構成でコードやビルド不要。
- 営業、カスタマーサポート、プロダクト管理、マーケティング、法務、財務、データ分析など11種類の職種別プラグインをオープンソースで提供。
- claude.com/pluginsからインストール可能で、.mcp.jsonの編集やスキルファイルへの企業固有の用語・プロセス追加によりカスタマイズできる。

---

### 7. [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)

> Build your own AI SRE agents. The open source toolkit for the AI era.

- Language: Python
- Stars: 11,741
- Forks: 1,721
- Stars in 1週間: 387
- Category: AI SREエージェントフレームワーク
- Keywords: `AI SRE` `インシデント対応` `オブザーバビリティ` `本番環境` `エージェント` `オープンソース`
- Summary source: README

#### README要約

- OpenSREは、本番環境のインシデント対応を行うAI SREエージェントを構築するためのオープンソースフレームワークです。
- ログ、メトリクス、トレース、デプロイ情報を横断的に分析し、ツール呼び出しループで仮説を検証して、証拠に基づいた回答を生成します。
- SREチームやインフラ運用者が、既存の60以上のツールと連携させて、自社インフラ上でインシデント調査や対応を自動化する用途を想定しています。
- パブリックアルファ版のためAPIや統合が変更される可能性があり、macOS/Linux/Windowsに対応したインストーラーで導入できます。

---

### 8. [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)

> Learn AI Engineering! Learn it. Build it. Ship it for others.

- Language: Python
- Stars: 66,769
- Forks: 11,695
- Stars in 1週間: 3,656
- Category: AIエンジニアリング学習カリキュラム
- Keywords: `AIエンジニアリング` `機械学習` `LLM` `エージェント` `検索パイプライン` `オープンソース`
- Summary source: README

#### README要約

- AIエンジニアリングをスクラッチから学ぶための無料・オープンソース（MITライセンス）のカリキュラム。
- モデル内部、検索パイプライン、エージェントランタイムを実装し、テストや評価を通じて学ぶ523のレッスンと20のフェーズで構成。
- Python、TypeScript、Rust、Juliaを使用し、Webサイト、コーディングエージェント、またはローカル環境で学習可能。
- Python 3.10+、Node.js 22.18+、Rustなどの環境が必要で、プロジェクトにはローカルグレーダーによる検証が含まれる。

---

### 9. [666ghj/MiroFish](https://github.com/666ghj/MiroFish)

> A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物

- Language: Python
- Stars: 77,837
- Forks: 11,888
- Stars in 1週間: 2,071
- Category: AI予測エンジン
- Keywords: `マルチエージェント` `シミュレーション` `予測` `デジタルサンドボックス` `群知能`
- Summary source: README

#### README要約

- MiroFishは、マルチエージェント技術を活用した次世代AI予測エンジンです。
- 現実世界の種情報から高忠実度のデジタル世界を構築し、数千の知的エージェントが自由に相互作用して社会進化を行います。
- 政策立案者や個人ユーザーが、リスクなしで未来の軌跡を推論し、創造的なシナリオを探索するのに適しています。
- ソースコードまたはDockerでデプロイ可能で、LLM APIキーとZep Cloud設定が必要です。

---

### 10. [dortania/OpenCore-Legacy-Patcher](https://github.com/dortania/OpenCore-Legacy-Patcher)

> Experience macOS just like before

- Language: Python
- Stars: 18,546
- Forks: 2,029
- Stars in 1週間: 187
- Category: システムユーティリティ
- Keywords: `macOS` `Hackintosh` `OpenCore` `Legacy Mac` `Python` `システムパッチ`
- Summary source: README

#### README要約

- OpenCore Legacy Patcherは、Appleのサポートが終了した古いMacに最新のmacOSをインストールし、機能を解放するためのPythonベースのプロジェクトです。
- OpenCorePkgとLiluを基盤とし、macOS Big SurからSequoiaまでのOTAアップデート、WPA Wi-Fi、Metal/non-Metal GPUのグラフィックスアクセラレーションなどをサポートします。
- 2007年製以降のPenryn搭載Macを対象に、SidecarやAirPlayの解放、SIPやFileVault 2の維持など、本来サポートされない機能を有効化したいユーザー向けです。
- クリーンインストールとアップグレードのみサポートされ、他のパッチャーで変更されたシステムは使用できません。ファームウェアのパッチは不要ですが、サポートはコミュニティベースです。

---

### 11. [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)

> Kronos: A Foundation Model for the Language of Financial Markets

- Language: Python
- Stars: 40,463
- Forks: 6,744
- Stars in 1週間: 615
- Category: 金融時系列予測モデル
- Keywords: `基盤モデル` `ローソク足` `K線` `時系列予測` `Transformer` `クオンツ`
- Summary source: README

#### README要約

- Kronosは金融市場のローソク足（K線）データに特化した、世界45以上の取引所のデータで学習されたオープンソースの基盤モデルです。
- 専用トークナイザーでOHLCVデータを階層的な離散トークンに変換し、自己回帰Transformerで予測を行う2段階フレームワークを採用しています。
- 金融時系列予測を行う研究者やクオンツ開発者向けで、Hugging Faceからモデルを取得し、KronosPredictorクラスで簡単に予測やファインチューニングが可能です。
- Python 3.10以上が必要で、Kronos-small/baseはコンテキスト長512の制限があり、実運用ではポートフォリオ最適化やリスク管理の追加実装が推奨されます。

---

### 12. [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack)

> Useful tool to track location or mobile number

- Language: Python
- Stars: 18,095
- Forks: 2,476
- Stars in 1週間: 1,272
- Category: OSINTツール
- Keywords: `OSINT` `情報収集` `IPトラッカー` `電話番号検索` `ユーザー名検索` `Python`
- Summary source: README

#### README要約

- GhostTrackは、位置情報や電話番号を追跡するためのOSINT・情報収集ツールです。
- IPアドレス、電話番号、SNSのユーザー名から情報を検索する3つのメニュー機能を備えています。
- 情報収集や調査を行うユーザーが、ターゲットのデジタルフットプリントを分析する際に使用します。
- Python 3環境が必要で、pipで依存関係をインストールして実行します。IP追跡では外部ツールSeekerとの連携も可能です。

---
