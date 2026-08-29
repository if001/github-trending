+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/08/29'
date = 2026-08-29T23:02:19.092Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月29日 23:02:19
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacs Lisp製のリポジトリのみで構成され、AIエージェント連携やターミナル機能などの新興ツールと、Doom EmacsやMagitなどの定番基盤が共存する傾向が見られる。

- 一覧の全16件がEmacs Lispで書かれたEmacs関連プロジェクトであり、単一言語・単一エコシステムのランキングになっている
- xenodium/agent-shell（38スター）やdakra/ghostel（26スター）など、比較的新しい機能を提供するパッケージが期間内スター数の上位を占めた
- doomemacs/core（35スター）やsyl20bnr/spacemacs（5スター）など、設定フレームワーク・ディストリビューション系も一定の支持を集めている
- magit/magit、emacs-evil/evil、magnars/dash.elなどの老舗の基盤ライブラリはスター数こそ少ないが、引き続きランキングに顔を出している
- LLMクライアント系がagent-shellとkarthink/gptelの2件登場し、Emacs内でのAI活用への関心の高さがうかがえる

### 主なテーマ

- **Emacs内AIエージェント・LLM連携**: xenodium/agent-shellはACP（Agent Client Protocol）経由でClaude Agent、Codex、Gemini CLIなど多数のエージェントと接続でき38スターを獲得、karthink/gptelもMCP統合やマルチモーダル対応のLLMクライアントとして11スターを集めており、Emacs内でのAI活用が注目テーマとなっている。（`xenodium/agent-shell`、`karthink/gptel`）
- **設定フレームワークとディストリビューション**: doomemacs/coreが35スターで上位に入り、公式モジュールライブラリのdoomemacs/modulesや、EmacsとVimの融合を掲げるsyl20bnr/spacemacsもランクイン。再現性やモジュール式構成を重視した設定基盤への需要が継続している。（`doomemacs/core`、`doomemacs/modules`、`syl20bnr/spacemacs`）
- **Vimエミュレーションと操作性の融合**: Emacs上でVimの主要機能をエミュレートするemacs-evil/evilがランクインし、doomemacs/coreやsyl20bnr/spacemacsもevil-modeによるVimエミュレーションを中核機能として採用しており、Vim出身者を取り込む流れが複数プロジェクトに共通している。（`emacs-evil/evil`、`doomemacs/core`、`syl20bnr/spacemacs`）
- **ターミナル・開発環境の強化**: dakra/ghostelはlibghostty-vt基盤の高機能ターミナルエミュレータとして26スターを獲得し、magit/magitによるGit操作統合と合わせて、Emacs内で開発作業を完結させるための環境強化が進んでいる。（`dakra/ghostel`、`magit/magit`）
- **基盤ライブラリとパッケージエコシステム**: melpa/melpaがパッケージ配布基盤として存在し、magnars/dash.el、magit/transient、rainstormstudio/nerd-icons.elなど他パッケージから依存されるライブラリ群が複数ランクイン。エコシステムを支える下層レイヤーが安定的に維持されている。（`melpa/melpa`、`magnars/dash.el`、`magit/transient`、`rainstormstudio/nerd-icons.el`）

### 補足的な観察

- 期間内スター数の上位はagent-shell（38）、doomemacs/core（35）、ghostel（26）で、いずれも比較的新しいプロジェクトまたは活発な開発が続くプロジェクトである
- 言語分布は全16件中16件がEmacs Lispであり、他言語のプロジェクトは一切含まれていない
- melpa/melpaとmagnars/dash.elは期間内スター数が0でありながらランクインしており、エコシステムの基盤としての存在感が継続している
- GNU Emacs本体のミラーであるemacs-mirror/emacsが7スターでランクインしており、バージョン32.0.50の開発が進行中であることが示されている

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 16 |

## Repository一覧

### 1. [emacs-mirror/emacs](https://github.com/emacs-mirror/emacs)

> Mirror of GNU Emacs

- Language: Emacs Lisp
- Stars: 5,172
- Forks: 1,399
- Stars in 1週間: 7
- Category: テキストエディタ
- Keywords: `GNU Emacs` `Emacs Lisp` `テキストエディタ` `拡張可能` `GPL` `ビルド`
- Summary source: README

#### README要約

- GNU Emacsバージョン32.0.50のソースツリーであり、拡張可能でカスタマイズ可能な自己文書化リアルタイムディスプレイエディタです。
- C言語によるコア（Lispインタプリタ、再表示コード）とEmacs Lispによる大部分の機能で構成され、configureスクリプトとmakeでビルドします。
- Emacsユーザー、開発者、貢献者を対象とし、テキスト編集、カスタマイズ、拡張機能の開発に利用されます。
- INSTALLファイルに従ってビルドし、バグはM-x report-emacs-bugで報告します。GPLv3以降のライセンスで配布されています。

---

### 2. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,630
- Forks: 3,154
- Stars in 1週間: 35
- Category: エディタ設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `Emacs Lisp`
- Summary source: README

#### README要約

- Doom Emacsは、起動・実行速度と再現性を重視したGNU Emacs向けの設定フレームワークです。
- straight.elベースの宣言的パッケージ管理、モジュール式構成、evil-modeによるVimエミュレーション、LSP統合などを提供します。
- Vim出身者やEmacs上級者を主な対象とし、自分の設定の基盤としても学習用リソースとしても利用できます。
- 導入にはEmacs 27.1〜31.1、Git 2.23以上、ripgrep 11.0以上が必要で、git clone後にdoom installを実行します。

---

### 3. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> A native Emacs buffer to interact with LLM agents powered by ACP

- Language: Emacs Lisp
- Stars: 1,796
- Forks: 224
- Stars in 1週間: 38
- Category: Emacs向けAIエージェントクライアント
- Keywords: `Emacs` `ACP` `LLMエージェント` `Claude` `Codex` `Gemini CLI`
- Summary source: README

#### README要約

- Emacs上でACP（Agent Client Protocol）対応のLLMエージェントと対話できるネイティブシェルバッファを提供するパッケージ。
- acp.elを介してACP通信を行い、Claude Agent、Codex、Gemini CLI、Goose、Grok Build、Cursorなど多数のエージェントと接続できる。
- Emacsユーザーがエディタ内でAIコーディングエージェントを利用したい場合に適し、サイドバー、通知、セッション管理などの拡張パッケージも豊富。
- MELPAからインストール可能で、利用には各エージェントのACPアダプタ（例: claude-agent-acp）を別途npm等でインストールしPATHに配置する必要がある。

---

### 4. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,507
- Forks: 425
- Stars in 1週間: 11
- Category: Emacs拡張機能
- Keywords: `Emacs` `LLM` `チャットクライアント` `AI` `マルチモーダル` `MCP`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルで拡張可能なLLMチャットクライアントです。
- 複数のLLMバックエンドとモデルをサポートし、任意のバッファから対話できます。
- ツール使用、MCP統合、マルチモーダル入力、推論コンテンツの処理などの高度な機能を提供します。
- package-installでインストール可能で、Curlが利用可能な場合はそれを使用し、なければurl-retrieveにフォールバックします。

---

### 5. [emacs-evil/evil](https://github.com/emacs-evil/evil)

> The extensible vi layer for Emacs.

- Language: Emacs Lisp
- Stars: 3,845
- Forks: 306
- Stars in 1週間: 5
- Category: Emacs拡張
- Keywords: `Emacs` `Vimエミュレーション` `viレイヤー` `Emacs Lisp` `拡張可能` `エディタ`
- Summary source: README

#### README要約

- EvilはEmacs上でVimの主要機能をエミュレートする拡張可能なviレイヤーです。
- カスタム拡張を記述するための機能を提供し、undo操作や変更箇所への移動などを外部パッケージと連携して実現します。
- EmacsでVimの操作性を求めるユーザーや、viライクな編集環境をカスタマイズしたい開発者に適しています。
- Emacs 24.1以降が必要で、package.el経由でのインストールが推奨され、C-rなど一部機能には追加パッケージが必要です。

---

### 6. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,213
- Forks: 878
- Stars in 1週間: 6
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `バージョン管理` `porcelain` `Emacs Lisp` `インターフェース`
- Summary source: README

#### README要約

- MagitはEmacsパッケージとして実装されたGitバージョン管理システムのインターフェースです。
- 完全なGit porcelainを目指しており、経験豊富なGitユーザーでも日常のバージョン管理タスクのほぼ全てをEmacs内から直接実行できます。
- EmacsユーザーがGit操作を効率的に行うためのツールで、他のGitクライアントとは大きく異なるアプローチを採用しています。
- MELPA、NonGNU ELPAなどからインストール可能で、ビジュアルウォークスルーやマニュアルなどの学習リソースが提供されています。

---

### 7. [melpa/melpa](https://github.com/melpa/melpa)

> Recipes and build machinery for the biggest Emacs package repo

- Language: Emacs Lisp
- Stars: 2,965
- Forks: 2,805
- Stars in 1週間: 0
- Category: パッケージリポジトリ
- Keywords: `Emacs` `Emacs Lisp` `package.el` `レシピ` `自動ビルド` `MELPA Stable`
- Summary source: README

#### README要約

- MELPAはpackage.el互換のEmacs Lispパッケージを集めた大規模なパッケージリポジトリです。
- シンプルなレシピをもとに上流のソースコードからサーバー側で自動ビルドし、1日の間隔で更新されます。
- Emacs 24.1以降のユーザーがpackage-archivesにMELPAを追加してパッケージを閲覧・インストールする用途に向いています。
- 利用にはinit.elへの設定追加とpackage-refresh-contentsの実行が必要で、安定版は別アーカイブのMELPA Stableとして提供されます。

---

### 8. [dakra/ghostel](https://github.com/dakra/ghostel)

> Terminal emulator powered by libghostty

- Language: Emacs Lisp
- Stars: 915
- Forks: 56
- Stars in 1週間: 26
- Category: Emacsターミナル
- Keywords: `Emacs` `terminal emulator` `libghostty-vt` `Kitty graphics` `shell integration` `MELPA`
- Summary source: README

#### README要約

- Ghostelは、Ghostty端末のVTエンジンであるlibghostty-vtを基盤とするEmacs用ターミナルエミュレータです。
- 同期出力、トゥルーカラー、Kittyキーボード・グラフィックスプロトコル、ハイパーリンク、デスクトップ通知などを備え、bash/zsh/fish/nushellのシェル統合が標準で動作します。
- Emacs上で高機能な端末を使いたいユーザー向けで、eshell連携、compile実行、comint置換、consultやevilとの拡張も提供されます。
- Emacs 28.1以上と動的モジュール対応が必要で、MELPAから導入でき、ネイティブモジュールは初回利用時に自動ダウンロードされます。

---

### 9. [magnars/dash.el](https://github.com/magnars/dash.el)

> A modern list library for Emacs

- Language: Emacs Lisp
- Stars: 1,745
- Forks: 138
- Stars in 1週間: 0
- Category: Emacs Lispライブラリ
- Keywords: `Emacs` `リスト操作` `関数型プログラミング` `Emacs Lisp` `ユーティリティ` `マクロ`
- Summary source: README

#### README要約

- Emacs向けのモダンなリスト操作ライブラリで、'cl'パッケージを必要とせずに動作します。
- マップ、フィルタ、リダクション、分割、集合演算など豊富な関数を提供し、関数名はすべてダッシュ（-）プレフィックスを使用します。
- Emacs Lispでリスト処理を行う開発者や、パッケージ開発者が依存ライブラリとして利用することを想定しています。
- GNU ELPAやMELPAからpackage-installで導入可能で、パッケージで使用する場合はPackage-Requiresヘッダーに(dash "2.20.0")を指定します。

---

### 10. [jrblevin/markdown-mode](https://github.com/jrblevin/markdown-mode)

> Emacs Markdown Mode

- Language: Emacs Lisp
- Stars: 1,045
- Forks: 186
- Stars in 1週間: 2
- Category: Emacs拡張
- Keywords: `Emacs` `Markdown` `メジャーモード` `MELPA` `GFM` `Emacs Lisp`
- Summary source: README

#### README要約

- EmacsでMarkdown形式のテキストを編集するためのメジャーモードで、最新安定版は2.8です。
- リンクや画像の挿入・編集、アウトライン移動などのキーバインドを提供し、外部MarkdownプロセッサでHTMLプレビューやエクスポートが可能です。
- EmacsでMarkdownやGitHub Flavored Markdownを編集するユーザー向けで、.mdなどのファイルに自動適用されます。
- MELPA Stableからpackage.elでインストールするのが推奨で、プレビュー等には外部プロセッサとmarkdown-commandの設定が必要です。

---

### 11. [doomemacs/modules](https://github.com/doomemacs/modules)

> Official module library for Doom Emacs

- Language: Emacs Lisp
- Stars: 55
- Forks: 36
- Stars in 1週間: 1
- Category: Emacs設定
- Keywords: `Doom Emacs` `Emacs Lisp` `モジュール` `スターターキット` `設定管理`
- Summary source: README

#### README要約

- Doom Emacsの公式モジュールライブラリであり、Emacs設定の基盤となるスターターキットです。
- 様々なプログラミング言語やツール、OSのサポートを事前設定し、パッケージの最適化や相互運用性の問題を修正します。
- Doom Emacsユーザーが、合理的なデフォルト設定を利用して効率的に環境を構築するために使用します。
- 現在はdoomemacs/coreのgitサブモジュールとして存在し、直接インストールは不要です。

---

### 12. [abo-abo/avy](https://github.com/abo-abo/avy)

> Jump to things in Emacs tree-style

- Language: Emacs Lisp
- Stars: 1,959
- Forks: 117
- Stars in 1週間: 2
- Category: Emacsナビゲーション
- Keywords: `Emacs` `ジャンプ` `カーソル移動` `決定木` `Org-mode` `キーバインド`
- Summary source: README

#### README要約

- avyは、表示されているテキストへ文字ベースの決定木を使ってジャンプするGNU Emacsパッケージです。
- 1文字・2文字・タイマー入力・行頭・単語先頭など複数のジャンプコマンドを提供し、候補をツリー形式で絞り込みます。
- Emacsユーザーが画面内の任意の位置へ素早くカーソルを移動するために使用し、Org-modeの見出し移動やリファイルにも対応します。
- global-set-keyでキーバインドを設定して導入し、カスタマイズはdefcustom wikiページを参照します。

---

### 13. [oantolin/embark](https://github.com/oantolin/embark)

> Emacs Mini-Buffer Actions Rooted in Keymaps

- Language: Emacs Lisp
- Stars: 1,220
- Forks: 69
- Stars in 1週間: 1
- Category: Emacs拡張
- Keywords: `ミニバッファ` `コンテキストアクション` `キーマップ` `補完` `カスタマイズ可能` `GNU ELPA`
- Summary source: README

#### README要約

- ポイント周辺のコンテキストに基づいてコマンドを選択できるEmacsパッケージ。
- embark-actコマンドをキーにバインドすると、ターゲットに関連するアクションのキーマップがプレフィックスキーとして機能する。
- ミニバッファ補完セッション中や通常バッファで、ファイル、バッファ、URL、シンボルなど100以上のターゲットタイプに対応。
- GNU ELPA、MELPAからインストール可能で、embark-keymap-alist変数でアクションを簡単にカスタマイズできる。

---

### 14. [rainstormstudio/nerd-icons.el](https://github.com/rainstormstudio/nerd-icons.el)

- Language: Emacs Lisp
- Stars: 327
- Forks: 48
- Stars in 1週間: 3
- Category: Emacsアイコンライブラリ
- Keywords: `Emacs Lisp` `Nerd Font` `アイコン` `MELPA` `GUI/ターミナル対応` `カスタマイズ`
- Summary source: README

#### README要約

- Emacs内でNerd Fontアイコンを簡単に利用するためのライブラリで、all-the-iconsの代替として開発されました。
- GUIとターミナルの両方で動作し、ファイル・拡張子・モード・URLなどのカテゴリ別にアイコンを取得する関数や、Font AwesomeやOcticonsなど複数のグリフセットに対応した挿入関数を提供します。
- Emacsユーザーがバッファやモードライン、diredなどの関連パッケージと組み合わせてアイコン表示をカスタマイズする用途に適しています。
- MELPAからpackage-installで導入でき、システムにNerd Fontのインストールが必要です。nerd-icons-install-fontsでSymbols Nerd Font Monoを自動インストールできますが、Windowsでは手動インストールが必要です。

---

### 15. [magit/transient](https://github.com/magit/transient)

> Transient commands

- Language: Emacs Lisp
- Stars: 886
- Forks: 73
- Stars in 1週間: 1
- Category: Emacs拡張ライブラリ
- Keywords: `Emacs Lisp` `Magit` `コマンドメニュー` `キーボード駆動` `UIライブラリ` `MELPA`
- Summary source: README

#### README要約

- Magitで使われているキーボード駆動のメニューを実装するためのEmacs Lispライブラリです。
- 引数の状態表示、モーダルなキーバインド管理、コンテキストに応じたUI、履歴と永続化などの機能を提供します。
- 複雑なオプションを持つコマンドを扱うEmacsパッケージ開発者や、対話的なコマンドを構成したいユーザーに適しています。
- MELPAやGNU ELPAからインストールでき、他のパッケージでも同様のメニューを実装するために利用できます。

---

### 16. [syl20bnr/spacemacs](https://github.com/syl20bnr/spacemacs)

> A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

- Language: Emacs Lisp
- Stars: 24,562
- Forks: 4,835
- Stars in 1週間: 5
- Category: テキストエディタ設定
- Keywords: `Emacs` `Vim` `エディタ` `キーバインド` `ペアプログラミング` `設定`
- Summary source: README

#### README要約

- Spacemacsは、人間工学、記憶術、一貫性に重点を置いた、洗練されたEmacsのセットアップです。
- スペースバーを押すだけで、厳選されたキーバインドの対話的なリストを探索でき、EmacsとVimの両方の編集スタイルを自然に使い分けることができます。
- EmacsとVimの両方のユーザー、特にペアプログラミングを行う開発者に最適です。
- Emacs 28.2以上、Git、GNU Tarが必要で、デフォルトフォントとしてSource Code Proのインストールが推奨されます。

---
