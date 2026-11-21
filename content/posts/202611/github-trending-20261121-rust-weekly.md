+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/11/21'
date = 2026-11-21T02:00:42.093Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月21日 2:00:42
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 7
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製ツールが全7件を占め、AIエージェント向けインフラと軽量ネイティブクライアントの2方向で注目が集まっている。

- 一覧の7件すべてがRust製で、CLI・デスクトップアプリ・ストレージ・データベースと用途は多岐にわたる。
- AIエージェント関連のプロジェクトが3件（agent-browser、buzz、omnigraph）あり、ブラウザ操作・協働・永続メモリとレイヤーが異なる。
- 非公式の軽量ネイティブクライアント（WhatsAppのzapfast、DiscordのSerein）が並び、いずれもegui採用で利用規約リスクを明記している。
- 最もスターを集めたのはagent-browserの2491で、次いでairgorahの1491、omnigraphの964の順。
- S3互換ストレージのrustfsとオブジェクトストレージネイティブなomnigraphなど、ストレージ・データ基盤系も存在感がある。

### 主なテーマ

- **AIエージェント向け基盤ツール**: agent-browserはAIエージェントがシェルからブラウザを操作するCLIで2491スターと最多。buzzは人間とAIエージェントがNostrリレー上で協働するワークスペース、omnigraphは長時間稼働エージェントが型付きワールドモデルを共有するためのグラフDBで964スター。操作・通信・記憶とエージェントの各層を支えるツールが揃っている。（`vercel-labs/agent-browser`、`block/buzz`、`ModernRelay/omnigraph`）
- **軽量ネイティブな非公式チャットクライアント**: zapfastはRustとegui製の非公式WhatsAppクライアント、Sereinは同じくRustとegui（wgpu併用）製の非公式Discordクライアント。両者ともブラウザエンジンを持たない軽量・低メモリ設計とプライバシー機能を売りにしつつ、利用規約違反・アカウント停止リスクを明記している点が共通する。（`crmne/zapfast`、`ViceVerse-cz/Serein`）
- **ストレージ・データ基盤**: rustfsはS3互換でMinIOやCephとの移行・共存を謳う分散オブジェクトストレージ、omnigraphはS3互換ストレージ上にLance形式でデータを保存するオブジェクトストレージネイティブなグラフDB。どちらもオブジェクトストレージを基盤に据えたデータレイヤー系プロジェクト。（`rustfs/rustfs`、`ModernRelay/omnigraph`）
- **セキュリティ監査ツール**: airgorahはWiFiトラフィックのキャプチャやパスワードクラック、deauthentication攻撃などを備えたWiFiセキュリティ監査ソフトで1491スターと2番目の人気。RustとGTK4で開発され、ネットワーク所有者が自身の環境をテストする用途を想定している。（`martin-olivier/airgorah`）

### 補足的な観察

- 言語分布は7件中7件がRustで、今回の一覧は完全にRust一色という偏った構成になっている。
- スター数の上位はagent-browser（2491）、airgorah（1491）、omnigraph（964）で、下位のrustfs（297）やSerein（306）と大きな差がある。
- zapfastとSereinはともにeguiを採用し、非公式クライアントとして規約リスクを明示するなど、技術選定と注意喚起の姿勢が似ている。
- omnigraphはエージェント向けとストレージ基盤の両方の性質を持ち、テーマ横断的な位置づけのプロジェクトと言える。

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 7 |

## Repository一覧

### 1. [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)

> Browser automation CLI for AI agents

- Language: Rust
- Stars: 53,085
- Forks: 3,711
- Stars in 1週間: 2,491
- Category: ブラウザ自動化CLI
- Keywords: `AIエージェント` `ブラウザ自動化` `Rust` `CLI` `Chrome DevTools Protocol` `アクセシビリティツリー`
- Summary source: README

#### README要約

- AIエージェントがシェルからブラウザを操作できるRust製CLIツール。
- ページをアクセシビリティツリーとして読み取り、要素にrefを付与してコマンドで操作する。
- バックグラウンドデーモンがChrome DevTools Protocol経由でブラウザを制御し、コマンド間でブラウザを開いたまま維持する。
- npm、Homebrew、npxで導入可能。初回はagent-browser installでChrome for Testingをダウンロードする必要がある。

---

### 2. [block/buzz](https://github.com/block/buzz)

> A hive mind communication platform

- Language: Rust
- Stars: 37,632
- Forks: 4,963
- Stars in 1週間: 436
- Category: 開発者向けコラボレーションプラットフォーム
- Keywords: `Nostr` `AIエージェント` `セルフホスト` `Rust` `リアルタイム通信` `Git統合`
- Summary source: README

#### README要約

- Buzzは人間とAIエージェントが同じルームで協働する、セルフホスト可能なワークスペースです。
- Nostrリレー上に構築され、メッセージ・ワークフロー・Gitイベントなどすべてが署名付きイベントとして一つのログに記録されます。
- 開発チームやAIエージェントを活用するプロジェクト向けで、チャット・コードレビュー・CI・検索を統合した環境を提供します。
- DockerとHermit（またはRust 1.88+等）が必要で、デスクトップアプリは別リポジトリ、モバイル版はFlutterで開発中です。

---

### 3. [ModernRelay/omnigraph](https://github.com/ModernRelay/omnigraph)

> Object-storage native graph database with branching and typed ontology

- Language: Rust
- Stars: 3,153
- Forks: 343
- Stars in 1週間: 964
- Category: グラフデータベース
- Keywords: `グラフデータベース` `オブジェクトストレージ` `ブランチング` `型付きオントロジー` `マルチモーダル検索` `Rust`
- Summary source: README

#### README要約

- オブジェクトストレージネイティブなグラフデータベースで、ブランチングと型付きオントロジーを備え、長時間稼働するエージェントが型付きワールドモデルを共有してコンテキストの取得・更新・調整を行うワークロード向けに設計されている。
- グラフ探索・ベクトルANN・全文検索をReciprocal Rank Fusionで統合したマルチモーダル検索、Git風ブランチと三方マージ、cluster.yamlによるTerraform風の宣言的構成、Cedarポリシーによるサーバーサイド強制を提供する。
- エージェントメモリ、社内ナレッジグラフ、コンテキストグラフ、開発グラフ、R&D/MLデータレイヤーなど、複数エージェントが読み書きする永続的なグラフ状態を必要とする開発者・チームが対象。
- Rust製でMITライセンス。インストールスクリプトまたはHomebrewで導入でき、ローカルディスクまたはS3互換ストレージ上にオープンなLance形式でデータを保存する。Omnigraph Cloudはプライベートプレビュー中。

---

### 4. [martin-olivier/airgorah](https://github.com/martin-olivier/airgorah)

> A WiFi security auditing software

- Language: Rust
- Stars: 6,741
- Forks: 1,103
- Stars in 1週間: 1,491
- Category: セキュリティ監査ツール
- Keywords: `WiFi` `セキュリティ` `Rust` `GTK4` `ペネトレーションテスト` `ネットワーク監査`
- Summary source: README

#### README要約

- AirgorahはWiFiセキュリティ監査ソフトウェアで、近くのWiFiトラフィックのキャプチャやアクセスポイントのパスワードクラックが可能です。
- クライアント発見、deauthentication攻撃、ハンドシェイクとPMKIDのキャプチャ機能を備え、RustとGTK4で開発されています。
- ネットワーク所有者が自身のネットワークの脆弱性をテスト・発見するためのツールです。
- Linux専用で、モニターモードとパケットインジェクション対応の無線カードが必要です。polkit経由で権限昇格します。

---

### 5. [crmne/zapfast](https://github.com/crmne/zapfast)

> ZapFast: a fast, native WhatsApp client in Rust and egui

- Language: Rust
- Stars: 4,826
- Forks: 493
- Stars in 1週間: 464
- Category: デスクトップアプリ
- Keywords: `WhatsApp` `Rust` `egui` `ネイティブクライアント` `軽量` `マルチプラットフォーム`
- Summary source: README

#### README要約

- Rustとeguiで書かれた軽量な非公式WhatsAppデスクトップクライアントで、Linux・macOS・Windowsに対応する。
- ブラウザエンジンを持たず、whatsapp-rust経由でスマホと連携し、メッセージ送受信・メディア再生・暗号化履歴保存・複数アカウント切替などを提供する。
- デスクトップで高速かつ低メモリにWhatsAppを使いたいユーザー向けで、多言語UIやテーマ、プライバシー保護機能も備える。
- HomebrewやAUR、ダウンロードページから導入可能だが、非公式クライアントのためWhatsAppの利用規約違反・アカウント停止のリスクがある。

---

### 6. [rustfs/rustfs](https://github.com/rustfs/rustfs)

> RustFS is an open-source, S3-compatible high-performance object storage system supporting migration and coexistence with other S3-compatible platforms such as MinIO and Ceph.

- Language: Rust
- Stars: 36,330
- Forks: 1,688
- Stars in 1週間: 297
- Category: オブジェクトストレージ
- Keywords: `Rust` `S3互換` `分散ストレージ` `オブジェクトストレージ` `データレイク` `Apache 2.0`
- Summary source: README

#### README要約

- RustFSはRustで構築された高性能な分散オブジェクトストレージシステムです。
- S3 API互換性を持ち、MinIOやCephなどの他のS3互換プラットフォームとの移行・共存をサポートします。
- データレイク、AI、ビッグデータワークロードに最適化されており、分散アーキテクチャでスケーラブルかつ耐障害性の高い設計です。
- Apache 2.0ライセンスで提供され、商用利用も可能です。DockerイメージやK8s Helmチャートでの導入がサポートされています。

---

### 7. [ViceVerse-cz/Serein](https://github.com/ViceVerse-cz/Serein)

> Tiny, Performant & 100% Native client for Discord made in Rust

- Language: Rust
- Stars: 1,643
- Forks: 161
- Stars in 1週間: 306
- Category: Discordクライアント
- Keywords: `Rust` `Discord` `ネイティブアプリ` `egui` `wgpu` `非公式`
- Summary source: README

#### README要約

- Rust製の軽量ネイティブDiscordデスクトップクライアントで、eguiとwgpuを採用している。
- macOS、Linux、Windows向けにFlatpak、パッケージリポジトリ、インストーラーなど多様な配布形式を提供する。
- 既存のDiscordアカウントで利用するユーザー向けで、ゼロテレメトリやサニタリーログアウトなどのプライバシー機能を備える。
- 非公式クライアントのためDiscordの利用規約違反となるリスクがあり、アカウント停止の可能性を理解した上で使用する必要がある。

---
