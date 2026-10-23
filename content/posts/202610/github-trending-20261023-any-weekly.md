+++
title = 'GitHub Trending 1週間レポート (All) - 2026/10/23'
date = 2026-10-23T23:45:27.684Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月23日 23:45:27
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 15
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェントを中心に、プラグイン・スキル・メモリ・オーケストレーションなど周辺基盤の整備が一気に進んでいる。

- Claude Code、Codex、Cursorなどのコーディングエージェントを前提にしたリポジトリが多数を占める。
- 単体のエージェント本体だけでなく、プラグイン、スキル、長期メモリ、複数エージェント管理、CLI化といった周辺レイヤーへの関心が強い。
- TypeScript製のツールが多く、エージェント実行基盤や開発者向けツールの実装言語として目立つ。
- ローカル実行・セルフホスト・オープンソースをうたうプロジェクトが複数あり、プライバシーやベンダー非依存の需要がうかがえる。
- リバースエンジニアリング、音声、動画、科学研究など、汎用コーディング以外の専門領域にもエージェント適用が広がっている。

### 主なテーマ

- **コーディングエージェント本体と実行環境**: anomalyco/opencode、stablyai/orca、elie222/rakazo、ruvnet/ruflo は、いずれもAIエージェントの実行・管理・拡張を主題にしており、単一エージェントよりも運用基盤としての価値を重視している。（`anomalyco/opencode`、`stablyai/orca`、`elie222/rakazo`、`ruvnet/ruflo`）
- **プラグインとスキルのエコシステム化**: anthropics/claude-plugins-official、cursor/plugins、android/skills、K-Dense-AI/scientific-agent-skills は、公式ディレクトリや標準化されたスキル形式を通じて、エージェント機能を外部拡張する流れを示している。（`anthropics/claude-plugins-official`、`cursor/plugins`、`android/skills`、`K-Dense-AI/scientific-agent-skills`）
- **エージェント間連携と長期メモリ**: akitaonrails/ai-memory は異なるエージェント間の引き継ぎと長期メモリを扱い、HKUDS/CLI-Anything は任意ソフトウェアをエージェントから操作可能にするなど、複数ツール・複数エージェントをまたぐ連携が注目されている。（`akitaonrails/ai-memory`、`HKUDS/CLI-Anything`）
- **専門領域へのエージェント適用**: morluto/rea と NationalSecurityAgency/ghidra はリバースエンジニアリング、debpalash/VoiceStudio は音声処理、heygen-com/hyperframes は動画生成、Comfy-Org/ComfyUI は生成AI制作基盤であり、エージェントや自動化の対象が専門作業へ広がっている。（`morluto/rea`、`NationalSecurityAgency/ghidra`、`debpalash/VoiceStudio`、`heygen-com/hyperframes`、`Comfy-Org/ComfyUI`）

### 補足的な観察

- 言語分布ではTypeScriptが最も多く、Pythonがそれに続く。Rust、Kotlin、Javaもあるが中心ではない。
- starsDuringPeriodでは morluto/rea が突出して高く、次いで debpalash/VoiceStudio、stablyai/orca、anomalyco/opencode が上位にある。
- Claude Code、Codex、Cursor、MCP、SKILL.md など、特定ベンダーや共通規格への言及が多く、相互運用性を意識した設計が目立つ。
- ローカル実行やセルフホストを明示するリポジトリが複数あり、クラウド依存を避けたい需要も一定数存在する。

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 7 |
| Python | 5 |
| Java | 1 |
| Kotlin | 1 |
| Rust | 1 |

## Repository一覧

### 1. [morluto/rea](https://github.com/morluto/rea)

> Reverse engineer anything with agents, from app behavior down to native binaries.

- Language: TypeScript
- Stars: 373,065
- Forks: 93,330
- Stars in 1週間: 106,341
- Category: リバースエンジニアリングツール
- Keywords: `リバースエンジニアリング` `MCP` `バイナリ解析` `AIエージェント` `TypeScript` `CLI`
- Summary source: README

#### README要約

- REAは、エージェント経由でアプリの挙動からネイティブバイナリまでをリバースエンジニアリングするためのMCPサーバーおよびCLIツールです。
- ネイティブバイナリ、JavaScript/Electronアプリ、.NETアセンブリ、Webサイトなどを解析し、証拠と制限事項を含む結果を返します。
- ソースコードなしで他アプリの機能の仕組みを調査し、説明や自プロジェクトへの実装を行いたい開発者や研究者を対象としています。
- npx rea-agents setupで導入でき、Node.js 22以降が必要です。ネイティブ解析にはHopper、Ghidra、IDAのいずれかが必要で、商用ツールは正規ライセンスが必須です。

---

### 2. [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

> Official, Anthropic-managed directory of high quality Claude Code Plugins.

- Language: Python
- Stars: 44,114
- Forks: 4,639
- Stars in 1週間: 5,649
- Category: プラグインマーケットプレイス
- Keywords: `Claude Code` `プラグイン` `Anthropic公式` `マーケットプレイス` `MCP` `拡張機能`
- Summary source: README

#### README要約

- Anthropicが管理する、Claude Code向けの高品質なプラグインを集めた公式ディレクトリです。
- Anthropic開発の内部プラグインと、パートナーやコミュニティによる外部プラグインで構成され、標準化されたプラグイン構造を採用しています。
- Claude Codeのユーザーが `/plugin install` コマンドやDiscover機能を通じてプラグインを導入し、機能を拡張するために利用します。
- プラグインの動作や安全性はAnthropicが保証しないため、インストール前に各プラグインの提供元を信頼できるか確認する必要があります。

---

### 3. [ruvnet/ruflo](https://github.com/ruvnet/ruflo)

> 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated

- Language: TypeScript
- Stars: 78,775
- Forks: 9,250
- Stars in 1週間: 3,708
- Category: AIエージェント基盤
- Keywords: `エージェントハーネス` `マルチエージェント` `Claude Code` `Codex` `MCP` `ワークフロー自動化`
- Summary source: README

#### README要約

- Claude CodeやCodexなどのAIコーディングツールを拡張するエージェントメタハーネスです。
- 100以上の専門エージェント、協調スワーム、自己学習メモリ、マシン間連携、セキュリティガードレールを提供します。
- 複雑なタスクを自動化したい開発者や、複数のAIエージェントを連携させてワークフローを構築したいチームに適しています。
- Claude Code 2.1.287以降が必要で、プラグインとしてインストールするか、npxコマンドでMCPサーバーとして起動します。

---

### 4. [android/skills](https://github.com/android/skills)

- Language: Kotlin
- Stars: 9,413
- Forks: 605
- Stars in 1週間: 1,384
- Category: AIエージェント用スキル集
- Keywords: `Android` `AIエージェント` `LLM` `SKILL.md` `開発支援` `ベストプラクティス`
- Summary source: README

#### README要約

- Android開発のベストプラクティスに沿ったタスクをAIエージェントが実行できるよう支援する、AI最適化されたモジュール型指示書とリソースのリポジトリです。
- オープン標準のagent skills形式（SKILL.md）に従い、技術仕様を提供してLLMを専門ドメインやワークフローに基づかせます。
- 評価でLLMの性能が低いと判明したユースケースやワークフローに焦点を当て、基本的なJetpack Composeなど既に得意な領域は優先しません。
- Android CLIやClaude Code、Codexのプラグインとしてインストールでき、タスクに応じてエージェントが自動的にスキルを有効化します。

---

### 5. [anomalyco/opencode](https://github.com/anomalyco/opencode)

> The open source coding agent.

- Language: TypeScript
- Stars: 220,613
- Forks: 29,503
- Stars in 1週間: 6,750
- Category: AIコーディングエージェント
- Keywords: `オープンソース` `AIエージェント` `CLI` `TypeScript` `デスクトップアプリ` `コード探索`
- Summary source: README

#### README要約

- OpenCodeはオープンソースのAIコーディングエージェントで、ターミナルやデスクトップアプリとして利用できる。
- Tabキーで切り替え可能な2つの組み込みエージェント（フルアクセスのbuildと読み取り専用のplan）を備え、複雑な検索や多段階タスク用のgeneralサブエージェントも内蔵する。
- コードベースの探索や変更計画、開発作業を行いたい開発者向けで、planエージェントは不慣れなコードベースの調査に適している。
- curlインストールスクリプト、npm、Homebrew、pacman、mise、Nixなどで導入でき、0.1.xより古いバージョンは事前に削除する必要がある。

---

### 6. [stablyai/orca](https://github.com/stablyai/orca)

> Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.

- Language: TypeScript
- Stars: 103,830
- Forks: 6,557
- Stars in 1週間: 9,401
- Category: AI開発環境
- Keywords: `AIエージェント` `オーケストレーション` `git worktree` `並列実行` `マルチプラットフォーム` `オープンソース`
- Summary source: README

#### README要約

- Orcaは複数のAIコーディングエージェントを一元管理するオーケストレーションツールです。
- 各エージェントを独立したgit worktreeで並列実行し、結果を比較・マージできます。
- デスクトップ・モバイル・リモート環境で動作し、Claude CodeやCodexなど任意のCLIエージェントに対応します。
- MITライセンスのオープンソースで、macOS/Windows/Linux向けにダウンロードまたはパッケージマネージャーから導入可能です。

---

### 7. [cursor/plugins](https://github.com/cursor/plugins)

> Cursor plugin specification and official plugins

- Language: TypeScript
- Stars: 13,780
- Forks: 1,361
- Stars in 1週間: 2,046
- Category: 開発ツール
- Keywords: `Cursor` `プラグイン` `マーケットプレイス` `エディタ拡張` `SaaS連携` `TypeScript`
- Summary source: README

#### README要約

- Cursor公式のプラグイン集で、開発ツール・フレームワーク・SaaS製品向けの多数のプラグインを収録したマーケットプレイスリポジトリ。
- 各プラグインは独立したディレクトリに配置され、`.cursor-plugin/plugin.json`マニフェスト、スキル、ルール、MCP設定などを含む構成。
- Cursorエディタの機能を拡張したい開発者や、GitHub・Google系・Salesforceなど外部サービスと連携させたいユーザー向け。
- ルートの`marketplace.json`が全プラグインを管理しており、ライセンスはMIT。各プラグインは個別にインストールして利用する。

---

### 8. [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)

> Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors

- Language: Rust
- Stars: 13,034
- Forks: 909
- Stars in 1週間: 3,322
- Category: AIエージェントメモリ
- Keywords: `長期メモリ` `エージェント間連携` `Markdown wiki` `Rust` `MCP` `セッション引き継ぎ`
- Summary source: README

#### README要約

- AIコーディングエージェント向けの長期メモリソリューションで、Claude CodeからCodexなど異なるエージェント間でのタスク引き継ぎを可能にする。
- ライフサイクルフックで作業を自動記録し、git-backedなMarkdown wikiを真実の源として、検索・要約・ハンドオフを提供する。
- 複数のエージェント、マシン、チーム間でメモリを共有したい開発者や、セッションをまたいでコンテキストを維持したいユーザー向け。
- 単一の自己完結型バイナリとして提供され、デフォルトではLLM呼び出しなしで動作し、サーバーは自分でホストする必要がある。

---

### 9. [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)

> "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/

- Language: Python
- Stars: 56,590
- Forks: 5,079
- Stars in 1週間: 3,275
- Category: AIエージェントツール
- Keywords: `AIエージェント` `CLI生成` `Agent-Native` `CLI-Hub` `SKILL.md` `自動化`
- Summary source: README

#### README要約

- あらゆるソフトウェアをAIエージェントから操作可能にする「Agent-Native」化を目指すPython製プロジェクト。
- ソフトウェア向けのCLIハーネスとSKILL.mdを生成し、Claude Code等のエージェントから利用可能にする。
- CAD、3D、GIS、動画編集など18種のデモを収録し、CLI-Hubでコミュニティ製CLIをインストールできる。
- pipでcli-anything-hubを導入可能。1回の生成では網羅しきれず/refineによる反復改善が必要な場合がある。

---

### 10. [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)

> The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.

- Language: Python
- Stars: 142,340
- Forks: 16,784
- Stars in 1週間: 4,375
- Category: AI画像・動画生成GUI
- Keywords: `拡散モデル` `ノードグラフ` `ローカル推論` `ワークフロー` `Stable Diffusion` `カスタムノード`
- Summary source: README

#### README要約

- ComfyUIは、画像・動画・3D・音声などを生成できる、モジュール式ノードグラフ型のAIコンテンツ制作エンジンです。
- 拡散モデル向けに最適化されたローカル推論エンジンで、非同期ウェイトストリーミングにより4GB VRAM+8GB RAMでも大規模モデルを動作可能です。
- 全パラメータを制御したいビジュアル制作のプロフェッショナル向けで、API連携やApp Modeにより本番パイプラインへの統合も可能です。
- Windows/macOS/Linuxに対応し、デスクトップアプリ・手動インストール・公式クラウドで利用でき、完全オフライン動作も選択できます。

---

### 11. [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)

> VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.

- Language: Python
- Stars: 83,291
- Forks: 9,186
- Stars in 1週間: 13,581
- Category: 音声合成・クローンツール
- Keywords: `音声クローン` `TTS` `動画ダビング` `文字起こし` `ローカル実行` `オープンソース`
- Summary source: README

#### README要約

- VoiceStudioは、音声クローン、音声デザイン、動画ダビング、ディクテーション、文字起こし、オーディオブック作成を646言語で行えるオープンソースの完全ローカル音声ツールです。
- デフォルトではk2-fsa/OmniVoiceをエンジンとして使用し、他のエンジンも選択可能で、ローカルAPIやMCPによるエージェント連携、レシピやウォッチフォルダによる自動化に対応しています。
- 音声制作者、動画クリエイター、ナレーション・オーディオブック制作者、ローカルでプライバシーを保ちながら音声処理を行いたいユーザーが対象です。
- macOS/Linux/Windowsにワンコマンドでインストール可能で、NVIDIA GPUやApple Siliconではアクセラレーションが利用でき、CPUのみでも動作しますが低速になります。ライセンスはAGPL-3.0です。

---

### 12. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 70,785
- Forks: 6,399
- Stars in 1週間: 5,669
- Category: 動画生成フレームワーク
- Keywords: `HTML to Video` `MP4レンダリング` `AIエージェント` `TypeScript` `CLI` `アニメーション`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして機能する。
- Claude Code、Codex、Cursorなどのコーディングエージェントを使用する開発者や、動画制作を自動化したいチームが対象。
- Node.js 22以上とFFmpegが必要で、Apache 2.0ライセンスで提供される。

---

### 13. [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)

> Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 250,000+ scientists worldwide. 177 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.

- Language: Python
- Stars: 54,208
- Forks: 4,782
- Stars in 1週間: 3,967
- Category: AIエージェントスキルライブラリ
- Keywords: `AIエージェント` `科学研究` `Agent Skills標準` `生物学` `化学` `創薬`
- Summary source: README

#### README要約

- AIエージェントを科学者に変える、177の検証済み科学スキルと100以上の科学データベースを提供するライブラリ。
- オープンなAgent Skills標準に準拠し、生物学、化学、医学、創薬などの分野で専門的なワークフローを実行可能にする。
- Cursor、Claude Code、Codexなどの互換性のあるAIエージェントを使用する科学者や研究者向け。
- MITライセンスで提供されるが、個々のスキルには独自のライセンスが適用される場合があるため、使用前に確認が必要。

---

### 14. [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra)

> Ghidra is a software reverse engineering (SRE) framework

- Language: Java
- Stars: 93,639
- Forks: 10,516
- Stars in 1週間: 4,892
- Category: リバースエンジニアリングツール
- Keywords: `Ghidra` `リバースエンジニアリング` `NSA` `逆コンパイル` `マルウェア解析` `Java`
- Summary source: README

#### README要約

- Ghidraは米国家安全保障局（NSA）が開発・保守するソフトウェアリバースエンジニアリング（SRE）フレームワークです。
- 逆アセンブル、逆コンパイル、グラフ化、スクリプト機能を備え、多様なプロセッサ命令セットと実行形式をサポートします。
- マルウェア解析や脆弱性調査を行うSREアナリスト向けで、JavaやPythonによる拡張開発も可能です。
- インストールにはJDK 25（64ビット）が必要で、既知の脆弱性があるためセキュリティアドバイザリの確認が推奨されます。

---

### 15. [elie222/rakazo](https://github.com/elie222/rakazo)

> Open-source Grok Bot alternative. Choose your own model and sandbox.

- Language: TypeScript
- Stars: 5,440
- Forks: 958
- Stars in 1週間: 1,166
- Category: AIエージェント
- Keywords: `オープンソース` `セルフホスト` `AIアシスタント` `Grok Bot代替` `TypeScript` `Docker`
- Summary source: README

#### README要約

- Rakazoは、自分のマシンで実行できるセルフホスト型のオープンソースAIエージェントおよびAIアシスタントです。
- 独自の会話、メモリ、ルーチンを持つ永続的なボットを作成でき、音声モードやブラウザ、ターミナル、ファイルアクセスなどの機能を備えています。
- Grok Botなどの代替として、自分のモデルやコンピュータプロバイダーを持ち込みたいユーザーや、完全なスタックをローカルで実行したいユーザーに適しています。
- Docker EngineとComposeプラグインが必要で、提供されているインストーラースクリプトを使用してセットアップを行います。ベータ版である点に注意が必要です。

---
