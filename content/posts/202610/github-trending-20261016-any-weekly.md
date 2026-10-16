+++
title = 'GitHub Trending 1週間レポート (All) - 2026/10/16'
date = 2026-10-16T23:15:28.950Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'any']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月16日 23:15:28
- Language: Any
- Date range: 1週間
- 対象リポジトリ数: 11
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending?since=weekly)

## 今回のTrendingの傾向

> AIコーディングエージェント向けのスキル・プラグイン・コンテキスト最適化ツールが台頭し、リバースエンジニアリングや実行ファイル変換などの低レイヤ解析ツールも並走する構図が見られる。

- morluto/reaが約23.9万スターで突出しており、MCPサーバー経由でバイナリ解析をエージェントに委譲する需要の大きさを示している
- AIエージェント向けスキル・プラグイン系が5件（diagram-design、skills、text-to-cad、claude-plugins-official、hyperframes）を占め、エージェントの能力拡張が主要テーマになっている
- コンテキストウィンドウ最適化を謳うツールが2件（context-mode、billion-context）登場し、長時間セッションでのコンテキスト喪失対策が関心を集めている
- リバースエンジニアリング・実行ファイル変換系が3件（rea、ghidra、AnyPS5）あり、エージェント駆動解析と従来型SREツールが共存している
- 言語分布はTypeScriptが4件で最多、Pythonが2件、Rust・C++・Java・Shell・HTMLが各1件と分散している

### 主なテーマ

- **AIエージェント向けスキル・プラグイン**: diagram-design（45種類の図をHTML+SVGで生成）、mattpocock/skills（TDDや要件すり合わせの実務スキル集）、text-to-cad（テキストから3Dモデル生成）、hyperframes（HTMLから動画レンダリング）がいずれもClaude Code・Codex・Cursor・Gemini CLI等の複数エージェントに対応するスキル/プラグインとして提供されており、Anthropic公式のclaude-plugins-officialというマーケットプレイス型ディレクトリも登場している。エージェントの能力を外部スキルで拡張するエコシステムの形成がうかがえる。（`cathrynlavery/diagram-design`、`mattpocock/skills`、`earthtojake/text-to-cad`、`heygen-com/hyperframes`、`anthropics/claude-plugins-official`）
- **コンテキストウィンドウ最適化**: mksglu/context-modeはツール出力をサンドボックス化して最大98%削減しSQLite+FTS5でセッションを永続化、ranxianglei/billion-contextはエージェントとモデルAPI間に挟まる圧縮プロキシで5倍のトークン削減と数か月規模の長期セッションを謳う。ともにTypeScript製で、長時間コーディング作業でのコンテキスト枯渇という共通課題に異なるアプローチで対処している。（`mksglu/context-mode`、`ranxianglei/billion-context`）
- **リバースエンジニアリング・実行ファイル解析**: morluto/reaはMCPサーバーとしてエージェント経由でネイティブバイナリやElectronアプリを解析し、約23.9万スターで期間内トップ。NSA公式のGhidra（Java製SREフレームワーク）もランクインしており、reaが外部ツールとしてGhidraやIDAを必要とする点から、従来型SRE基盤とエージェント駆動の新しい解析フローが補完関係にある。（`morluto/rea`、`NationalSecurityAgency/ghidra`）
- **実行ファイル・コンテンツの変換・生成**: boykopovar/AnyPS5はPS5実行ファイルをエミュレーションなしでLinux/Windowsネイティブ形式にリリンクするC++製ツールで約2.5万スター。storytold/artcraftはRust製のAI画像・動画生成IDEで約2.2万スター。いずれも既存フォーマットや生成物を別環境・別表現へ変換するツールであり、プラットフォーム間の壁を越える需要を反映している。（`boykopovar/AnyPS5`、`storytold/artcraft`）

### 補足的な観察

- スター数の分布はmorluto/rea（約23.9万）が圧倒的で、2位のAnyPS5（約2.5万）と約10倍の差があり、上位への集中度が高い
- TypeScript製がrea・hyperframes・context-mode・billion-contextの4件を占め、エージェント関連ツールの実装言語として優位に見える
- Claude Code、Codex、Cursor、Gemini CLIなど複数エージェントへの対応を明記するリポジトリが多く、特定ツール依存を避けるマルチプラットフォーム戦略が一般的になっている
- billion-context（659スター）のようにスター数は小さいがニッチな課題（コンテキスト圧縮）を扱う新規プロジェクトもランクインしており、テーマの広がりがうかがえる

### 言語分布

| Language | Repositories |
|---|---:|
| TypeScript | 4 |
| Python | 2 |
| C++ | 1 |
| HTML | 1 |
| Java | 1 |
| Rust | 1 |
| Shell | 1 |

## Repository一覧

### 1. [morluto/rea](https://github.com/morluto/rea)

> Reverse engineer anything with agents, from app behavior down to native binaries.

- Language: TypeScript
- Stars: 290,465
- Forks: 73,063
- Stars in 1週間: 239,477
- Category: リバースエンジニアリングツール
- Keywords: `MCP` `リバースエンジニアリング` `バイナリ解析` `エージェント` `静的解析` `TypeScript`
- Summary source: README

#### README要約

- REAは、バイナリ、アプリケーション、ランタイム動作を横断してリバースエンジニアリングを行うためのMCPサーバーです。
- エージェント経由でネイティブバイナリ、JavaScript/Electronアプリ、.NETアセンブリ、Webサイトなどを解析し、証拠と制限を含む結果を返します。
- ソースコードなしでアプリの機能を調査し、動作を説明したり、類似機能を実装したりする開発者や研究者向けです。
- Node.js 22.x以降とnpmが必要で、npx rea-agents setupでセットアップします。ネイティブ解析にはHopper、Ghidra、IDAなどの外部ツールが必要です。

---

### 2. [storytold/artcraft](https://github.com/storytold/artcraft)

> ArtCraft is an intentional crafting engine for artists, designers, and filmmakers

- Language: Rust
- Stars: 30,562
- Forks: 4,856
- Stars in 1週間: 22,319
- Category: AI画像・動画生成ツール
- Keywords: `AI生成` `IDE` `画像生成` `動画生成` `3D合成` `Rust`
- Summary source: README

#### README要約

- ArtCraftは、AIによる画像・動画生成のための統合開発環境（IDE）です。
- 2D/3Dでのシーン構成、キャラクターのポージング、画像合成などの視覚的ツールを提供します。
- アーティスト、デザイナー、映像制作者が、精密で再現性の高いAI生成を行うことを目的としています。
- Windows/macOS向けの安定版、GitHubでの最新ビルド、ソースからのビルド（Linux含む）が可能です。

---

### 3. [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5)

> Tool for automatic PS5 executables porting to Linux and Windows

- Language: C++
- Stars: 39,876
- Forks: 3,563
- Stars in 1週間: 25,174
- Category: 実行ファイル変換ツール
- Keywords: `PS5` `Linux` `Windows` `実行ファイル移植` `リリンカー` `SPIR-V`
- Summary source: README

#### README要約

- PS5の実行ファイルをLinuxおよびWindowsへ自動的に移植するためのツールです。
- 実行ファイルをターゲットOSのネイティブ形式に変換するリリンカーと、動的リンクに適したシステムPRXライブラリの実装を含み、エミュレーションや別ランタイムプロセスは使用しません。
- PS5のソフトウェアをPC環境で動作させたい開発者や、相互運用性・研究・保存目的のユーザー向けです。
- Webコンバーター版ではファイルはデバイス上に保持され、GPLv2ライセンスで提供され、著作権で保護されたソフトウェアやキーは含まれていません。

---

### 4. [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)

> Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, and Pi. 44 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop.

- Language: HTML
- Stars: 56,416
- Forks: 3,577
- Stars in 1週間: 10,237
- Category: AIエージェント用図作成スキル
- Keywords: `HTML+SVG図生成` `エージェントスキル` `Claude Code` `ブランド連携` `45種類の図` `Mermaid代替`
- Summary source: README

#### README要約

- AIエージェント向けのスキルで、自然言語の指示からブランドに合った図を1つの自己完結型HTML+SVGファイルとして生成する。
- 45種類の図タイプに対応し、エージェントが4pxグリッド上に配置してCIチェックを行い、影なしのエディトリアルなスタイルで描画する。
- Claude Code、Codex、GitHub Copilot、Cursor、Factory Droid、PiなどのAIコーディングツール利用者が、アーキテクチャ図やシーケンス図などを作成する用途を想定。
- npx skills addコマンドや各ツールのプラグインマーケットプレイスからインストールでき、サイトのURLを指定すると配色やフォントを取り込んでブランドに合わせられる。

---

### 5. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

> Write HTML. Render video. Built for agents.

- Language: TypeScript
- Stars: 65,291
- Forks: 5,883
- Stars in 1週間: 5,318
- Category: 動画生成フレームワーク
- Keywords: `HTML to Video` `MP4レンダリング` `AIエージェント` `TypeScript` `Puppeteer` `FFmpeg`
- Summary source: README

#### README要約

- HTML、CSS、メディア、シーク可能なアニメーションを決定論的なMP4動画に変換するオープンソースフレームワーク。
- CLIでのローカル利用、AIコーディングエージェント向けスキル、ホスト型オーサリングワークフローのレンダリングコアとして動作する。
- Claude Code、Codex、Cursor、Gemini CLIなどのコーディングエージェントを使う開発者や、プログラマブルに動画を生成したいチームが対象。
- Node.js 22以上が必要で、npmパッケージまたはエージェントプラグインとして導入。開発用クローンにはGit LFSが必要。Apache 2.0ライセンス。

---

### 6. [mattpocock/skills](https://github.com/mattpocock/skills)

> Skills for Real Engineers. Straight from my .agents directory.

- Language: Shell
- Stars: 294,054
- Forks: 24,651
- Stars in 1週間: 12,147
- Category: AIエージェント用スキル集
- Keywords: `AIコーディングエージェント` `Claude Code` `TDD` `要件すり合わせ` `アーキテクチャ改善` `Shell`
- Summary source: README

#### README要約

- Matt Pocock氏が日々の実務で使うAIコーディングエージェント向けスキル集で、vibe codingではなく実践的なエンジニアリングを支援する。
- 小さく組み合わせ可能なスキル群で、要件のすり合わせ（grill-me）、TDD、バグ診断、アーキテクチャ改善などを任意のモデルで利用できる。
- Claude Code、Codex、GitHub Copilot、Gemini CLIなどのエージェントを使う開発者が、仕様の齟齬や冗長さ、品質低下を防ぐ用途に向く。
- プラグインまたはnpx skillsでインストールし、リポジトリごとに/setup-matt-pocock-skillsを一度実行して課題トラッカー等を設定する。

---

### 7. [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra)

> Ghidra is a software reverse engineering (SRE) framework

- Language: Java
- Stars: 89,589
- Forks: 10,016
- Stars in 1週間: 6,614
- Category: リバースエンジニアリングツール
- Keywords: `Ghidra` `リバースエンジニアリング` `逆コンパイル` `NSA` `マルウェア解析` `Java`
- Summary source: README

#### README要約

- NSA研究局が開発・保守するソフトウェアリバースエンジニアリング（SRE）フレームワークです。
- 逆アセンブル、アセンブル、逆コンパイル、グラフ化、スクリプト機能を備え、多様なプロセッサ命令セットと実行形式をサポートします。
- Windows、macOS、Linux上でコンパイル済みコードを分析するSREアナリストやセキュリティ研究者向けで、JavaやPythonで拡張開発も可能です。
- インストールにはJDK 25（64ビット）が必要で、既知のセキュリティ脆弱性があるため事前にセキュリティアドバイザリの確認が推奨されます。

---

### 8. [mksglu/context-mode](https://github.com/mksglu/context-mode)

> Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.

- Language: TypeScript
- Stars: 30,214
- Forks: 2,125
- Stars in 1週間: 4,038
- Category: AI開発ツール
- Keywords: `MCPサーバー` `コンテキスト最適化` `セッション永続化` `FTS5検索` `Claude Code` `TypeScript`
- Summary source: README

#### README要約

- AIコーディングエージェントのコンテキストウィンドウを最適化するMCPサーバー。
- ツール出力をサンドボックス化して最大98%削減し、セッション情報をSQLiteとFTS5/BM25検索で永続化する。
- Claude CodeやGemini CLIなど17プラットフォームのAIエージェント利用者が対象で、長時間のコーディング作業でのコンテキスト喪失を防ぐ用途に向く。
- Claude Codeではプラグインとして自動導入でき、他環境では設定ファイルへの記述が必要。ライセンスはElastic License 2.0で、ホスト型サービスとしての提供は禁止されている。

---

### 9. [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)

> A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need

- Language: TypeScript
- Stars: 1,537
- Forks: 121
- Stars in 1週間: 659
- Category: コンテキスト圧縮プロキシ
- Keywords: `コンテキスト圧縮` `AIコーディングエージェント` `プロキシ` `トークン削減` `長期セッション` `TypeScript`
- Summary source: README

#### README要約

- AIコーディングエージェントとモデルAPIの間に挟まるコンテキスト圧縮プロキシで、長時間セッションでもコンテキストウィンドウ超過を防ぐ。
- acp-kernelによる増分・可逆・プレフィックスキャッシュフレンドリーな圧縮を行い、compress/decompress/search_context/acp_statusの4ツールをモデル自身が呼び出す。
- Claude Code、Codex、OpenCode、Gemini CLIなど多数のエージェント利用者が対象で、数日〜数か月規模の長期コーディングセッションに適する。
- npmでグローバルインストールしエージェントのベースURLをプロキシに向けて使う。早期段階で実モデル統合テストは今後の課題、MITライセンスに帰属表示の追加条項あり。

---

### 10. [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

> Official, Anthropic-managed directory of high quality Claude Code Plugins.

- Language: Python
- Stars: 40,491
- Forks: 4,399
- Stars in 1週間: 2,217
- Category: プラグインディレクトリ
- Keywords: `Claude Code` `プラグイン` `マーケットプレイス` `Anthropic公式` `MCP` `スキル`
- Summary source: README

#### README要約

- Anthropicが管理するClaude Code向け高品質プラグインの公式ディレクトリです。
- Anthropic開発の内部プラグインと、パートナーやコミュニティの外部プラグインを収録し、標準的なプラグイン構造を定義しています。
- Claude Codeユーザーがプラグインを発見・インストールするためのマーケットプレイスとして利用できます。
- プラグインの信頼性はAnthropicが保証しないため、インストール前に各プラグインの内容を確認する必要があります。

---

### 11. [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)

> Give your agent CAD superpowers.

- Language: Python
- Stars: 20,977
- Forks: 2,073
- Stars in 1週間: 2,244
- Category: AIエージェント拡張
- Keywords: `CAD` `3Dモデリング` `AIエージェント` `プラグイン` `製造設計` `自動化`
- Summary source: README

#### README要約

- AIエージェントにCAD機能を追加するプラグインで、テキストから3Dモデルを生成します。
- STEP、GLB、STL、3MF形式でのモデル生成、製造可能性チェック、エンジニアリング図面作成、3Dプリント・板金・CNC加工サービスとの連携機能を提供します。
- Claude Code、Codex、Cursor、Gemini、Grokなどの主要なAIエージェントユーザーが対象で、設計・製造ワークフローを自動化したい開発者やエンジニアに適しています。
- uvを使ってインストールし、各エージェントアプリ用のプラグインまたはスキルとして導入します。デフォルトで使用統計とクラッシュレポートを送信しますが、オプトアウト可能です。

---
