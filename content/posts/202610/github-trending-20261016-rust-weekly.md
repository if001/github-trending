+++
title = 'GitHub Trending 1週間レポート (rust) - 2026/10/16'
date = 2026-10-16T23:16:53.919Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'rust']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月16日 23:16:53
- Language: rust
- Date range: 1週間
- 対象リポジトリ数: 7
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/rust?since=weekly)

## 今回のTrendingの傾向

> Rust製の実用的なAI・クリエイティブツールがトレンドを席巻し、特にAI生成環境とエージェント向けインフラが突出した人気を獲得している

- 全7リポジトリがRustで開発されており、システムプログラミング言語としてのRustがAI時代のアプリケーション開発で主流となっている
- AI関連ツールが5件を占め、画像・動画生成IDE、推論エンジン、エージェント用ブラウザ、漫画翻訳など実用的な応用が中心となっている
- ArtCraftが22,319スター、Moliが5,261スターと、AIクリエイティブツールとエージェントインフラが他を大きく引き離す人気を集めている
- ローカル実行・プライバシー重視の設計が顕著で、オンデバイス推論やローカルファーストのツールが複数登場している
- クリエイティブ系ツール（CAD、漫画翻訳、画像生成）が3件あり、専門分野でのAI活用が進んでいる

### 主なテーマ

- **AIクリエイティブ・コンテンツ制作**: ArtCraft（22,319スター）が画像・動画生成の統合開発環境として圧倒的な人気を集め、Koharu（557スター）がML漫画翻訳を提供するなど、AIを活用したコンテンツ制作ツールが注目されている。これらはプロンプトの視覚的構築やOCR・インペインティングの自動化など、クリエイターの実務に直結する機能を備えている。（`storytold/artcraft`、`koharu-rs/koharu`）
- **AIエージェント・推論インフラ**: Moli（5,261スター）がAIエージェント向けヘッドレスブラウザとして高い人気を獲得し、uzu（527スター）がオンデバイス推論エンジンを提供している。これらはAIモデルを実際のアプリケーションに組み込むための基盤技術であり、ゼロレイテンシやプライバシー保護を重視した設計が特徴的である。（`lexmount/moli`、`trymirai/uzu`）
- **セキュリティ・サンドボックス**: MicrosoftのMXC（1,267スター）が、信頼できないコードやAIモデル出力を安全に実行するためのポリシー駆動型サンドボックスシステムを提供している。AI生成コードの実行環境として、OSネイティブのプロセスサンドボックスからVMまで複数の隔離レベルを統一的に扱える点が評価されている。（`microsoft/mxc`）
- **専門分野向けデスクトップアプリケーション**: OpenCADStudio（546スター）が2D/3D CADアプリケーションを、Koharu（557スター）が漫画翻訳ツールを提供するなど、特定の専門領域に特化したデスクトップアプリケーションがRustで開発されている。これらはGPU加速やローカル推論を活用し、実務で使える性能を目指している。（`HakanSeven12/OpenCADStudio`、`koharu-rs/koharu`）
- **GPU互換性・低レベル最適化**: ZLUDA（148スター）が非NVIDIA GPU上でCUDAを動作させるドロップイン置換ライブラリを提供し、GPU環境の選択肢を広げている。AIワークロードの増加に伴い、ハードウェア依存を減らす技術への関心が高まっている。（`vosen/ZLUDA`）

### 補足的な観察

- 言語分布は全7件がRustで占められており、パフォーマンスとメモリ安全性が求められるAI・システムツール開発でRustが標準的な選択肢となっている
- スター数の分布はArtCraft（22,319）とMoli（5,261）が突出しており、AI生成ツールとエージェントインフラへの需要の高さが数値に表れている
- Microsoftが1件（mxc）を提供している以外は個人・小規模チームのプロジェクトが中心で、オープンソースコミュニティ主導のイノベーションが活発である
- ライセンスはMIT、Apache-2.0、GPL-3.0など多様だが、実用的なツールが多く、商用利用を意識した設計のプロジェクトが目立つ

### 言語分布

| Language | Repositories |
|---|---:|
| Rust | 7 |

## Repository一覧

### 1. [storytold/artcraft](https://github.com/storytold/artcraft)

> ArtCraft is an intentional crafting engine for artists, designers, and filmmakers

- Language: Rust
- Stars: 30,562
- Forks: 4,856
- Stars in 1週間: 22,319
- Category: AIクリエイティブツール
- Keywords: `AI画像生成` `AI動画生成` `IDE` `3Dシーン構築` `Rust` `クリエイティブ`
- Summary source: README

#### README要約

- ArtCraftは、AIによる画像・動画生成のための統合開発環境（IDE）です。
- 2D/3Dでのシーン構築、キャラクターのポージング、画像合成などを通じて、プロンプトを視覚的に「クラフト」できます。
- アーティスト、デザイナー、映画制作者など、生成結果を精密かつ再現性高く制御したいクリエイターを対象としています。
- Windows/macOS向けの安定版やGitHubの最新ビルドがあり、ソースからのビルド（Linux含む）も可能です。ライセンスはMITまたはApache-2.0です。

---

### 2. [trymirai/uzu](https://github.com/trymirai/uzu)

> A high-performance inference engine for AI models

- Language: Rust
- Stars: 2,370
- Forks: 141
- Stars in 1週間: 527
- Category: AI推論エンジン
- Keywords: `推論エンジン` `オンデバイスAI` `Rust` `マルチ言語バインディング` `OpenAI互換API` `MITライセンス`
- Summary source: README

#### README要約

- AIモデルをアプリ内で直接実行するための高性能推論エンジンで、ゼロレイテンシ・完全なデータプライバシー・推論コスト不要を謳う。
- シンプルな高レベルAPI、統一されたモデル設定、正確性を検証できるトレース可能な計算、Appleデバイスの統一メモリ活用などを特徴とする。
- Rust・Python・Swift・TypeScriptのバインディングを提供し、モバイルやデスクトップアプリへAIを組み込みたい開発者が対象。
- 独自モデル形式を採用しlalamoで変換可能。CLIモードやOpenAI互換HTTPサーバーとしても動作し、ライセンスはMIT。

---

### 3. [microsoft/mxc](https://github.com/microsoft/mxc)

> Policy-driven, layered isolation and containment

- Language: Rust
- Stars: 2,875
- Forks: 155
- Stars in 1週間: 1,267
- Category: セキュリティ・サンドボックス
- Keywords: `サンドボックス` `コード実行` `コンテインメント` `ポリシー駆動` `クロスプラットフォーム` `Rust`
- Summary source: README

#### README要約

- MXCは、信頼できないコード（モデル出力、プラグイン、ツール）をWindows、Linux、macOS上で安全に実行するためのサンドボックス化されたコード実行システムです。
- OSネイティブのプロセスサンドボックスから完全なVMまで、複数のコンテインメントバックエンドを統一モデルで提供し、ファイルシステム、ネットワーク、UIに対するポリシー駆動型の制御が可能です。
- Rust、.NET、Node向けのSDKを通じてアプリケーションに組み込み、コンテナのプロビジョニング、起動、実行、停止、削除といったライフサイクル操作を行う開発者を対象としています。
- パッケージマネージャー経由でSDKをインストールして利用します。監査モードはサンドボックスのセキュリティを無効化するため、信頼できないコードの実行には使用しないでください。

---

### 4. [koharu-rs/koharu](https://github.com/koharu-rs/koharu)

> ML-powered manga translator, written in Rust.

- Language: Rust
- Stars: 6,351
- Forks: 455
- Stars in 1週間: 557
- Category: 漫画翻訳ツール
- Keywords: `Rust` `漫画翻訳` `OCR` `インペインティング` `LLM` `ローカル推論`
- Summary source: README

#### README要約

- Rust製のローカルファーストなML漫画翻訳ツールで、物体検出・OCR・インペインティング・LLMを組み合わせて翻訳工程を自動化する。
- 検出・OCR・翻訳・インペインティングの選択的パイプライン、WebGPUキャンバス、多言語組版、PSD出力などを備え、ローカルGGUF推論とクラウドプロバイダの両方に対応する。
- 漫画翻訳者や編集者がラスタ画像・アーカイブ・PDFを扱い、プライバシーを保ちながら翻訳・校正・仕上げを行う用途を想定している。
- Windows/macOS/Linux向けビルドをリリースページやwinget/Homebrewで導入でき、CUDA/ROCm/Metal/Vulkan対応だがCPU推論は大幅に遅い。

---

### 5. [lexmount/moli](https://github.com/lexmount/moli)

> Best headless browser for AI agents. Lite, Fast, High-Compatibility. Built in Rust

- Language: Rust
- Stars: 19,003
- Forks: 549
- Stars in 1週間: 5,261
- Category: ヘッドレスブラウザ
- Keywords: `AIエージェント` `ヘッドレスブラウザ` `Rust` `CDP` `WebDriver` `オンデマンドレンダリング`
- Summary source: README

#### README要約

- MoliはAIエージェント向けの本番対応ヘッドレスブラウザで、オンデマンドのレイアウト・レンダリング設計により完全なブラウザランタイムと軽量なリソースフットプリントを両立している。
- CLI、CDP、WebDriver Classic、WebDriver BiDiを通じて利用でき、ページ取得・抽出、Web検索、ブラウザタスクの自動化をサポートする。
- AIエージェントやクローリング、検索パイプライン、評価環境、強化学習ワークロードなどのブラウザ自動化タスクを対象としている。
- Linux、macOS、Windowsに対応し、curlやPowerShellスクリプトでインストール可能。レイアウトやリソース取得などの高コスト操作は明示的なオプトインが必要。

---

### 6. [HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)

> A CAD application built with Rust — 2D/3D drawing, DWG/DXF support, and GPU-accelerated rendering

- Language: Rust
- Stars: 3,128
- Forks: 362
- Stars in 1週間: 546
- Category: CADアプリケーション
- Keywords: `Rust` `CAD` `DWG/DXF` `3Dモデリング` `GPUレンダリング` `オープンソース`
- Summary source: README

#### README要約

- Rust製のオープンソースCADアプリケーションで、デスクトップとWebの両方で動作する2D製図・3Dモデリングツール。
- DWG/DXFのネイティブ読み書き、精密2D製図、ACISカーネルベースの3Dソリッドモデリング、wgpuによるGPUレンダリングを備える。
- 技術図面・レイアウト・ソリッドモデリングを行う設計者やエンジニア向けで、プラグインやJSON自動化APIによる拡張も可能。
- Windows/Linux/macOS(Apple Silicon)向けパッケージやWebアプリとして提供。開発中のため重要な図面はバックアップ推奨。GPL-3.0ライセンス。

---

### 7. [vosen/ZLUDA](https://github.com/vosen/ZLUDA)

> CUDA on non-NVIDIA GPUs

- Language: Rust
- Stars: 15,090
- Forks: 956
- Stars in 1週間: 148
- Category: GPU互換レイヤー
- Keywords: `CUDA` `非NVIDIA GPU` `ドロップイン置換` `Rust` `GPU互換` `オープンソース`
- Summary source: README

#### README要約

- ZLUDAは非NVIDIA GPU上でCUDAを動作させるドロップイン置換ライブラリです。
- 未変更のCUDAアプリケーションを非NVIDIA GPUでネイティブに近い性能で実行できます。
- CUDAアプリケーションをNVIDIA以外のGPU環境で利用したい開発者やユーザー向けです。
- クイックスタートガイドやDiscordコミュニティが用意されており、ドキュメントサイトから導入手順を確認できます。

---
