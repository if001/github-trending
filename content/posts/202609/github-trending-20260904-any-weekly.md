+++
title = 'GitHub Trending 1週間レポート (All) - 2026/09/04'
date = 2026-09-04T22:47:33.476Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月4日 22:47:33
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 20
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIエージェント向けスキル・MCP連携ツールと、ローカル実行を重視した開発者ツールが上位を占めている

- AIエージェント関連のツールが多数ランクインしており、特にAgent SkillsやMCPサーバー経由の連携をうたうプロジェクトが目立つ
- tt-a1i/archifyが24,227スターで突出しており、エージェント生成物の可視化・検証への関心の高さがうかがえる
- ローカル実行・セルフホスト・プライバシー重視を明示するツール（VoiceStudio、OpenWhispr、open-seo、openclaudeなど）が複数登場している
- LLMの学習・ファインチューニングを個人GPUで行うための低コスト化ツール（minimind、Soup）が支持を集めている
- TypeScriptとPythonが言語分布の中心で、エージェント系はTypeScript、モデル・音声系はPythonが多い傾向がある

### 主なテーマ

- **AIエージェントのスキル・MCPエコシステム**: Agent Skills標準やMCPサーバー経由でエージェントの能力を拡張するプロジェクトが複数ランクイン。scientific-agent-skillsは165の検証済みスキル、archifyはエージェントスキルとして図の生成を提供し、awesome-mcp-serversやchrome-devtools-mcp、open-seoはMCP連携を特徴としている。（`tt-a1i/archify`、`K-Dense-AI/scientific-agent-skills`、`punkpeye/awesome-mcp-servers`、`ChromeDevTools/chrome-devtools-mcp`、`every-app/open-seo`、`handsomestWei/patent-disclosure-skill`）
- **ローカル実行・プライバシー重視のツール**: 完全ローカル動作やセルフホスティングを明示するツールが目立つ。VoiceStudioは完全ローカルのElevenLabs代替、OpenWhisprはローカルモデルによるオフライン文字起こし、open-seoはセルフホスト可能なSEOツール、openclaudeはOllamaなどローカルモデルに対応するCLI。（`debpalash/VoiceStudio`、`OpenWhispr/openwhispr`、`every-app/open-seo`、`Gitlawb/openclaude`）
- **個人GPUでのLLM学習・改造**: minimindは64MパラメータのLLMを2時間でゼロから学習でき、Soupは4GBのノートPC GPUで8BモデルのQLoRA学習を可能にするなど、低コストでのLLM学習・ファインチューニングツールが支持されている。hereticは既存モデルの検閲除去を自動化する。（`jingyaogong/minimind`、`MakazhanAlpamys/Soup`、`p-e-w/heretic`）
- **マルチエージェントによる体験生成**: OpenMAICはマルチエージェントオーケストレーションでスライドやクイズ、AI教師との対話を含む教室体験を生成し、gods-eye-viewは音声制御AIエージェントを備えたリアルタイム地理空間可視化を提供するなど、エージェントを組み込んだ没入型アプリケーションが登場している。（`THU-MAIC/OpenMAIC`、`bilawalsidhu/gods-eye-view`）
- **成熟した基盤ライブラリ・CLIツール**: zodやfmt、ipatool、timesfmのような特定領域で確立されたライブラリ・CLIが継続的にスターを獲得しており、エージェント関連以外の定番ツールにも安定した需要がある。（`colinhacks/zod`、`fmtlib/fmt`、`majd/ipatool`、`google-research/timesfm`）

### 補足的な観察

- スター数の分布はtt-a1i/archifyの24,227が突出し、次いでgods-eye-viewの10,485とOpenMAICの10,023が続く一方、zodの277やopenwhisprの642など長期的に蓄積されたリポジトリも混在している
- 言語分布はTypeScriptとPythonが各6件前後で最多を占め、JavaScriptが3件、Swift・Go・C++が各1件で、エージェント連携系はTypeScript、モデル・音声処理系はPythonに集中している
- MCP（Model Context Protocol）への言及がawesome-mcp-servers、chrome-devtools-mcp、open-seo、VoiceStudio、openclaudeの5件に見られ、エージェント連携の事実上の標準として定着しつつあることがうかがえる
- Apple関連のツール（vphone-cli、ipatool）が2件ランクインしており、iOS仮想化やApp Storeパッケージ取得というニッチな需要にも関心が集まっている

### 言語分布

| Language | Repositories |
|---|---:|
| Python | 8 |
| TypeScript | 5 |
| JavaScript | 3 |
| C++ | 1 |
| Go | 1 |
| Swift | 1 |
| 不明 | 1 |

## Repository一覧

### 1. [tt-a1i/archify](https://github.com/tt-a1i/archify)

> Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.

- Language: JavaScript
- Stars: 47,994
- Forks: 3,098
- Stars in 1週間: 24,227
- Category: アーキテクチャ可視化ツール
- Keywords: `アーキテクチャ図` `JSON IR` `HTML/SVG` `AIエージェント` `システムマップ` `差分レビュー`
- Summary source: README

#### README要約

- コードベースやシステム記述をチャット内でインタラクティブなシステムマップに変換するNode.js製レンダリング・検証システム。
- エージェントが生成した型付きJSON IRを決定論的にHTML/SVGへコンパイルし、5種類の図、テーマ、モーション、PNG/SVG/WebM/シェアカード出力を提供する。
- Cursor、Claude Code、Codex CLI、OpenCodeなどのエージェント利用者が、アーキテクチャの可視化、変更差分レビュー、経路トレースに使う。
- npx skills addで導入でき、リポジトリ不要で記述から開始可能。Mermaid自動解析や汎用自動レイアウト、ホスト型共有、WYSIWYG編集は現行スコープ外。

---

### 2. [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)

> Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click

- Language: TypeScript
- Stars: 31,475
- Forks: 5,182
- Stars in 1週間: 10,023
- Category: AI教育プラットフォーム
- Keywords: `マルチエージェント` `インタラクティブ教室` `AI学習` `コース生成` `TypeScript` `MITライセンス`
- Summary source: README

#### README要約

- OpenMAICは、トピックやドキュメントからインタラクティブな教室体験を生成するオープンソースのAIプラットフォームです。
- マルチエージェントオーケストレーションにより、スライド、クイズ、シミュレーション、PBLを生成し、AI教師やAIクラスメートがリアルタイムで対話します。
- 教育者や学習者向けに、ワンクリックでのレッスン生成、ホワイトボード、TTS、.pptxや.htmlへのエクスポート機能を提供します。
- Vercelでのデプロイが可能で、LLMプロバイダーのAPIキー設定が必要です。ライセンスはMITですが、一部のバンドルパッケージは異なるライセンスが適用されます。

---

### 3. [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)

> A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.

- Language: JavaScript
- Stars: 17,479
- Forks: 3,524
- Stars in 1週間: 10,485
- Category: 地理空間可視化
- Keywords: `3D地球儀` `リアルタイム追跡` `OSINT` `音声制御` `Cesium` `オープンソース`
- Summary source: README

#### README要約

- 公開データを使ったブラウザ上のスパイ衛星シミュレーターで、実写級3D地球儀上にリアルタイムの空間情報を表示する。
- 航空機・船舶・衛星・地震・交通・公開カメラをライブ表示し、音声制御AIエージェントやコックピット視点、センサー風GLSLエフェクトを備える。
- OSINT愛好家や開発者が世界の動きを可視化・追跡し、拡張するためのオープンソース基盤として提供される。
- Pinokioでワンクリック導入、またはnpm install && npm run devで起動。APIキーは後からアプリ内で追加可能だが、安全上重要な用途には使用不可。

---

### 4. [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

> runs anywhere. uses anything

- Language: TypeScript
- Stars: 32,560
- Forks: 9,046
- Stars in 1週間: 1,389
- Category: コーディングエージェントCLI
- Keywords: `CLI` `マルチプロバイダー` `Ollama` `OpenAI互換` `MCP` `TypeScript`
- Summary source: README

#### README要約

- クラウドおよびローカルの複数モデルプロバイダーに対応したオープンソースのコーディングエージェントCLIです。
- OpenAI互換API、Gemini、GitHub Models、Ollamaなどを切り替えつつ、プロンプト、ツール、エージェント、MCP、スラッシュコマンド、ストリーミング出力を単一のターミナルワークフローで利用できます。
- プロバイダー固有のツールを使い分けたくない開発者や、ローカルモデルとクラウドAPIを横断してコーディング作業を行いたいユーザー向けです。
- Node.js 22以上が必要で、npmでグローバルインストール後に/providerコマンドでプロバイダー設定を行います。Anthropicとは無関係の独立したコミュニティプロジェクトです。

---

### 5. [google-research/timesfm](https://github.com/google-research/timesfm)

> TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.

- Language: Python
- Stars: 31,025
- Forks: 2,956
- Stars in 1週間: 2,324
- Category: 時系列予測モデル
- Keywords: `時系列予測` `基盤モデル` `Google Research` `多変量予測` `共変量対応` `PyTorch`
- Summary source: README

#### README要約

- Google Researchが開発した事前学習済み時系列基盤モデルで、時系列予測を行うためのオープンソースライブラリ。
- TimesFM 3.0は多変量・単変量予測、過去のみ/過去未来の共変量をネイティブ対応し、主要ベンチマークで高い性能を発揮。
- 時系列予測を行う研究者や開発者向けで、BigQuery MLやGoogle SheetsなどGoogle製品でも利用可能。
- pip install timesfm[torch]で導入可能だが、3.0の事前学習済み重みは非商用・非本番利用に限定されるライセンスに注意。

---

### 6. [jingyaogong/minimind](https://github.com/jingyaogong/minimind)

> 🧠 Train a 64M-parameter LLM from scratch in just 2h!

- Language: Python
- Stars: 58,518
- Forks: 7,603
- Stars in 1週間: 3,122
- Category: LLM学習フレームワーク
- Keywords: `小型言語モデル` `ゼロから学習` `PyTorch` `MoE` `RLHF` `LLM入門`
- Summary source: README

#### README要約

- 約64Mパラメータの超小型言語モデルMiniMindをゼロから学習できるオープンソースプロジェクト。
- MoE、データ洗浄、事前学習、SFT、LoRA、RLHF（DPO）、RLAIF（PPO/GRPO/CISPO）、Tool Use、蒸留まで全工程のコードをPyTorch原生実装で提供。
- LLMの内部仕組みを学びたい初学者や、個人GPUで学習・再現実験を行いたい開発者・研究者向けのチュートリアルとしても機能する。
- Apache 2.0ライセンスで公開。単一NVIDIA 3090でSFTが約2時間、GPUレンタル費約3元とされるが、実際の環境構築とデータ準備は別途必要。

---

### 7. [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)

> Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.

- Language: Python
- Stars: 42,622
- Forks: 3,899
- Stars in 1週間: 7,370
- Category: AIエージェント用科学スキルライブラリ
- Keywords: `Agent Skills` `科学研究` `バイオインフォマティクス` `創薬` `科学データベース` `AIエージェント`
- Summary source: README

#### README要約

- AIエージェントを科学者に変える、オープンなAgent Skills標準に対応した科学・研究スキルの包括的なコレクション。
- がんゲノミクス、創薬、臨床研究などをカバーする163の検証済みスキルと、PubChemやChEMBLなど78以上の科学データベースへの決定論的アクセスを提供する。
- Cursor、Claude Code、Codexなど対応クライアントを使う生物・化学・医学分野の研究者が、複雑な多段階の科学ワークフローを実行する用途に向く。
- MITライセンスだが各スキルに個別ライセンスがあり、医療・規制関連は診断や認証の決定規則ではなく資格あるレビュー向けの補助に限定される。

---

### 8. [Lakr233/vphone-cli](https://github.com/Lakr233/vphone-cli)

- Language: Swift
- Stars: 10,484
- Forks: 1,349
- Stars in 1週間: 2,137
- Category: 仮想化ツール
- Keywords: `iPhone仮想化` `Virtualization.framework` `Swift` `CLI` `ジェイルブレイク` `macOS`
- Summary source: README

#### README要約

- AppleのVirtualization.frameworkとPCC研究用VM基盤を使い、仮想iPhoneを起動するCLIツール。
- IPSWのダウンロード・パッチ適用・DFU復元・CFWインストール・初回起動までを一括で自動化し、5段階のセキュリティバイパスバリアントを選択できる。
- iOSの研究・開発者や、SSH/VNC接続、ホスト制御ソケット経由のAI駆動E2Eテスト自動化を行うユーザー向け。
- Apple Silicon・macOS 15以降・Xcodeが必須で、SIP/AMFIの緩和が必要。Homebrewでインストール可能。

---

### 9. [fmtlib/fmt](https://github.com/fmtlib/fmt)

> A modern formatting library

- Language: C++
- Stars: 25,455
- Forks: 3,035
- Stars in 1週間: 993
- Category: C++書式設定ライブラリ
- Keywords: `C++` `フォーマット` `std::format` `型安全` `高速` `ヘッダオンリー`
- Summary source: README

#### README要約

- C言語のstdioやC++のiostreamsに代わる、高速で安全なオープンソースの書式設定ライブラリ。
- Python風の書式文字列構文、位置引数、C++20 std::formatおよびC++23 std::printの実装、Dragonboxによる高速浮動小数点フォーマットを提供。
- 型安全性やコンパイル時の書式チェックを求めるC++開発者向けで、文字列・日時・コンテナ・色付き出力など多様な用途に対応。
- 外部依存なしのMITライセンスで、最小構成は3ファイル、FMT_HEADER_ONLYマクロでヘッダオンリー構成も可能。

---

### 10. [every-app/open-seo](https://github.com/every-app/open-seo)

> Open source alternative to Semrush and Ahrefs

- Language: TypeScript
- Stars: 17,008
- Forks: 2,115
- Stars in 1週間: 2,941
- Category: SEOツール
- Keywords: `SEO` `オープンソース` `MCP` `AIエージェント` `セルフホスティング` `DataForSEO`
- Summary source: README

#### README要約

- OpenSEOはSemrushやAhrefsのオープンソース代替となるSEOツールで、従量課金制で自分で管理できる。
- キーワード調査、ランクトラッキング、競合分析、バックリンク、サイト監査などのSEOワークフローを提供し、MCPサーバー経由でAIエージェントと連携できる。
- Claude Code、OpenClaw、HermesなどのAIエージェントと接続してSEOデータを活用したいユーザーや、高価なSEOツールの代替を求めるユーザー向け。
- セルフホスティングにはDockerまたはCloudflareを使用し、DataForSEO APIキーが必要。ホスト版は月額10ドルで利用可能。

---

### 11. [p-e-w/heretic](https://github.com/p-e-w/heretic)

> Fully automatic censorship removal for language models

- Language: Python
- Stars: 30,446
- Forks: 3,368
- Stars in 1週間: 2,146
- Category: 言語モデル検閲除去ツール
- Keywords: `abliteration` `言語モデル` `検閲除去` `Optuna` `方向性アブレーション` `自動最適化`
- Summary source: README

#### README要約

- Transformerベースの言語モデルから検閲（安全性アライメント）を自動的に除去するツール
- 方向性アブレーション（abliteration）とOptunaベースのTPEパラメータ最適化を組み合わせ、拒否応答の最小化と元モデルからのKLダイバージェンス最小化を同時に実現
- コマンドライン操作ができるユーザーなら誰でも使用可能で、トランスフォーマーの内部構造に関する専門知識は不要
- Python 3.10+とPyTorch 2.2+が必要で、pip install -U heretic-llmでインストール可能。RTX 3090でQwen3-4Bの処理に約20-30分かかる

---

### 12. [colinhacks/zod](https://github.com/colinhacks/zod)

> TypeScript-first schema validation with static type inference

- Language: TypeScript
- Stars: 43,834
- Forks: 2,175
- Stars in 1週間: 277
- Category: バリデーションライブラリ
- Keywords: `TypeScript` `スキーマ検証` `型推論` `バリデーション` `型安全性` `npm`
- Summary source: README

#### README要約

- TypeScriptファーストのスキーマバリデーションライブラリで、静的型推論により検証済みデータの型安全性を確保する。
- スキーマを定義して.parse()でデータを検証し、z.infer<>で型を抽出可能。ゼロ依存・2KBの軽量コアで、AOTコンパイルによる高速化にも対応。
- Node.jsとモダンブラウザで動作し、TypeScriptとプレーンJSの両方をサポート。信頼できない入力データの検証が必要な開発者向け。
- npm install zodで導入。非同期API使用時は.parseAsync()が必要で、エラー処理はZodErrorまたは.safeParse()で行う。

---

### 13. [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill)

> 中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。

- Language: Python
- Stars: 7,365
- Forks: 813
- Stars in 1週間: 1,846
- Category: 特許出願支援ツール
- Keywords: `特許交底書` `中国特許` `Obsidian連携` `審査応答` `特許解読` `出願支援`
- Summary source: README

#### README要約

- 中国特許の出願支援スキルで、発明・実用新型・意匠の交底書作成、特許の平易な解読、政策動向の把握、審査応答の補助を行う。
- プロジェクト資料から特許ポイントを抽出し、テンプレートに基づく交底書をMarkdown/Wordで生成。図面作成、新規性調査、Obsidian連携による知識グラフ化も可能。
- 特許出願を検討する開発者や研究者、特許文献を理解したい技術者、審査応答が必要な出願人を対象とする。
- Python製で、Obsidianとの連携が推奨される。中国語がデフォルト言語で、CNIPAデータベースへのアクセスやCADファイルの解析はオプション扱い。

---

### 14. [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

> VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.

- Language: Python
- Stars: 17,861
- Forks: 2,345
- Stars in 1週間: 3,902
- Category: 音声合成・TTS
- Keywords: `音声クローン` `TTS` `ローカル実行` `動画ダビング` `文字起こし` `オープンソース`
- Summary source: README

#### README要約

- VoiceStudioは、自分のハードウェア上で音声クローン、音声デザイン、動画ダビング、ディクテーション、文字起こし、オーディオブック作成を行えるオープンソースの完全ローカル音声制作ツールです。
- 16種類のTTSエンジンと11種類のASRエンジンを搭載し、646言語のカタログに対応。CUDA、Apple Silicon MPS/MLX、ROCm、CPUでの処理をサポートし、デスクトップアプリ、ローカルAPI、MCPサーバーとして動作します。
- 音声制作者、動画クリエイター、ナレーション制作者など、プライバシーを重視しながら高品質な音声合成・編集を行いたいユーザーに適しています。アカウントやAPIキー、サブスクリプションは不要です。
- macOS 13.3+（Apple Silicon）、Windows 10/11 x64、Linux x86_64（glibc 2.39+）に対応。AGPL-3.0ライセンスで提供され、ベータ版のため安定作業には最新リリース版の使用が推奨されます。

---

### 15. [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

> A collection of MCP servers.

- Language: 不明
- Stars: 94,146
- Forks: 15,646
- Stars in 1週間: 1,130
- Category: MCPサーバーリスト
- Keywords: `MCP` `Model Context Protocol` `AIモデル` `サーバー実装` `キュレーションリスト` `API統合`
- Summary source: README

#### README要約

- Model Context Protocol（MCP）サーバーのキュレーションリストで、AIモデルがローカルやリモートのリソースと安全に連携するための実装を集めている。
- ファイルアクセス、データベース接続、API統合などの機能を持つ本番環境対応および実験的なMCPサーバーをカテゴリ別に整理している。
- MCPクライアントやチュートリアル、コミュニティ情報も提供し、開発者がAI機能を拡張する際の参照資料として利用できる。
- 各サーバーは言語やスコープ、OSの凡例で識別され、Webベースのディレクトリとも同期されている。

---

### 16. [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code)

> Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)

- Language: Python
- Stars: 77,676
- Forks: 9,452
- Stars in 1週間: 2,412
- Category: AIコード生成ツール
- Keywords: `スクリーンショット` `AI` `コード変換` `HTML` `React` `Tailwind`
- Summary source: README

#### README要約

- スクリーンショット、モックアップ、Figmaデザイン、画面録画をAIを使ってクリーンで機能的なコードに変換するツールです。
- HTML/Tailwind、React、Vue、Bootstrap、Ionicなど複数のスタックをサポートし、Gemini、GPT、ClaudeなどのAIモデルを使用してコードを生成します。
- ローカルでのカスタマイズやセルフホストを希望する開発者、または公式ホスト版で手軽に試したいユーザー向けです。
- ローカル実行にはOpenAI、Anthropic、GeminiのいずれかのAPIキーが必要で、最高品質のためにはGeminiとReplicateのキーが強く推奨されます。

---

### 17. [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

> Chrome DevTools for coding agents

- Language: TypeScript
- Stars: 50,928
- Forks: 3,572
- Stars in 1週間: 1,058
- Category: 開発者ツール
- Keywords: `MCP` `Chrome DevTools` `ブラウザ自動化` `Puppeteer` `パフォーマンス分析` `コーディングエージェント`
- Summary source: README

#### README要約

- コーディングエージェントがChromeブラウザを制御・検査できるようにするMCPサーバーです。
- パフォーマンストレースの記録、ネットワーク解析、スクリーンショット、Puppeteerによる自動化を提供します。
- Claude、Cursor、CopilotなどのAIコーディングアシスタントを使う開発者のデバッグや性能分析に適しています。
- Node.js LTSと安定版Chromeが必要で、npxで起動でき、ブラウザ内容がMCPクライアントに公開される点に注意が必要です。

---

### 18. [majd/ipatool](https://github.com/majd/ipatool)

> Command-line tool that allows searching and downloading app packages (known as ipa files) for iOS, iPadOS, tvOS, and visionOS from the App Store.

- Language: Go
- Stars: 10,860
- Forks: 909
- Stars in 1週間: 847
- Category: CLIツール
- Keywords: `App Store` `ipa` `CLI` `Go` `ダウンロード` `Apple ID`
- Summary source: README

#### README要約

- App StoreからiOS、iPadOS、tvOS、visionOS、macOSアプリを検索し、.ipaまたは.pkgパッケージをダウンロードするコマンドラインツールです。
- authコマンドでApple ID認証を行い、search、purchase、download、list-versionsなどのコマンドでアプリの検索、ライセンス取得、バージョン確認、ダウンロードを実行します。
- アプリパッケージをローカルに保存したい開発者や、JSON出力・非対話モードを活用して自動化環境でApp Store操作を行いたいユーザーに適しています。
- Windows、Linux、macOSに対応し、GitHub ReleasesまたはHomebrewでインストール可能です。利用にはApp Store用のApple IDが必要で、MITライセンスで公開されています。

---

### 19. [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup)

> Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU.

- Language: Python
- Stars: 5,282
- Forks: 788
- Stars in 1週間: 1,812
- Category: LLMファインチューニングCLI
- Keywords: `LLM` `ファインチューニング` `QLoRA` `レイヤーストリーミング` `YAML設定` `低VRAM学習`
- Summary source: README

#### README要約

- SoupはYAML設定1つとコマンド1つでLLMのファインチューニングとポストトレーニングを行えるPython製CLIツール。
- レイヤーストリーミングにより凍結ベースモデルをVRAM外に保持しデコーダ層を逐次GPUへ供給することで、4GBのノートPC GPUで8BモデルのQLoRA学習を可能にする（BETA・オプトイン）。
- SSH不要・バッチサイズやGPU検出・量子化の自動処理を特徴とし、インフラ構築に時間を取られたくない開発者やローカルGPUで学習したいチームを対象とする。
- pipでsoup-cli[train]をインストールしsoup initとsoup trainで開始できるが、Python 3.10〜3.12のみ対応で、torch 2.5.x固定環境はtrl>=0.29と非互換、レイヤーストリーミングはBETA扱いである点に注意。

---

### 20. [OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr)

> Voice-to-text dictation app with local (Nvidia Parakeet/Whisper) and cloud models (BYOK). Privacy-first and available cross-platform.

- Language: JavaScript
- Stars: 6,741
- Forks: 902
- Stars in 1週間: 642
- Category: 音声認識デスクトップアプリ
- Keywords: `音声テキスト変換` `プライバシー重視` `Whisper` `ローカルモデル` `Electron` `会議文字起こし`
- Summary source: README

#### README要約

- OpenWhisprは、WisprFlowやGranolaのオープンソースかつ無料の代替となる、プライバシー重視の音声テキスト変換デスクトップアプリです。
- ホットキーで任意のアプリに音声入力でき、WhisperやNVIDIA Parakeetなどのローカルモデルによるオフライン文字起こしとクラウド処理を選択可能です。
- AIエージェント連携、会議の文字起こしと話者識別、ノート管理などを求めるmacOS・Windows・Linuxユーザー向けです。
- 開発にはNode.js 24以上が必要で、Intel Macでは話者識別など一部機能が制限されます。ライセンスはMITです。

---
