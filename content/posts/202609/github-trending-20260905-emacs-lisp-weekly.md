+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/09/05'
date = 2026-09-05T22:43:59.355Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月5日 22:43:59
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 16
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> EmacsエコシステムがAI統合とモダンな開発体験の強化で活気づいている

- AI/LLM統合パッケージが複数ランクインし、Emacs上でのAI活用が進展
- Doom EmacsやSpacemacsなどの設定フレームワークが引き続き注目を集める
- LSP、Gitクライアント、ターミナルエミュレータなど開発環境の基盤ツールが充実
- UI/UX改善ライブラリ（アイコン、ポップアップ、メニュー）が複数登場
- Google Coral NPUなど、Emacs以外のプロジェクトも混在

### 主なテーマ

- **AI/LLM統合**: Emacs上でLLMエージェントやチャットクライアントを利用するためのパッケージが複数ランクイン。agent-shellはACP対応で複数のAIエージェントと統一的に対話可能、gptelはシンプルで拡張可能なLLMクライアントとして注目を集めている。（`xenodium/agent-shell`、`karthink/gptel`）
- **Emacs設定フレームワーク**: Doom EmacsとSpacemacsという2大設定フレームワークがランクイン。両者とも高速性、再現性、Vimキーバインド対応を重視し、カスタマイズ可能なEmacs環境を求めるユーザーに支持されている。（`doomemacs/core`、`syl20bnr/spacemacs`）
- **開発環境基盤ツール**: LSPクライアント、Gitクライアント、ターミナルエミュレータなど、Emacs上での開発体験を向上させる基盤ツールが充実。lsp-modeは言語サーバープロトコル対応、MagitはGit porcelain、ghostelは高機能ターミナルを提供。（`emacs-lsp/lsp-mode`、`magit/magit`、`dakra/ghostel`）
- **UI/UX改善ライブラリ**: Emacsのユーザーインターフェースを改善するライブラリが複数登場。transientはMagitで使われるメニューUI、posframeはポップアップ表示、nerd-icons.elはアイコン表示を実現し、視覚的な使いやすさを向上させる。（`magit/transient`、`tumashu/posframe`、`rainstormstudio/nerd-icons.el`）
- **Vimエミュレーション**: EvilはEmacs上でVimの主要機能をエミュレートする拡張可能なレイヤーとして11スターを獲得。Doom EmacsやSpacemacsもevil-modeを統合しており、Vim出身者のEmacs移行を支援するエコシステムが成熟している。（`emacs-evil/evil`）

### 補足的な観察

- 言語分布はほぼ全てEmacs Lispだが、google-coral/coralnpuのみ異なるカテゴリ（AIアクセラレータIP）で混在
- スター獲得数はagent-shellが34で最多、次いでdoomemacs/coreが26、emacs-mirror/emacsが18
- MELPA関連のパッケージが多数ランクインし、Emacsパッケージエコシステムの中心としての役割を果たしている
- Emacs 28以降を要求するパッケージが増加し、モダンなEmacs環境への移行が進んでいる

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 16 |

## Repository一覧

### 1. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,655
- Forks: 3,152
- Stars in 1週間: 26
- Category: Emacs設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、GNU Emacs向けの設定フレームワークで、起動・実行時の高速性と再現性のあるパッケージ管理を重視している。
- straight.elベースの宣言的パッケージ管理、約150のオプションモジュール、evil-modeによるVimエミュレーション、LSP統合、多くの言語・ツール対応を備える。
- Vim出身者やEmacs上級者など、自分好みにカスタマイズ可能な高速なEmacs環境を求めるユーザーに適している。
- 導入はgit clone後にdoom installを実行するだけだが、Emacs 27.1〜31.1、Git、ripgrepが必要で、不安定版Emacsは避けるべきとされている。

---

### 2. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> A native Emacs buffer to interact with LLM agents powered by ACP

- Language: Emacs Lisp
- Stars: 1,831
- Forks: 229
- Stars in 1週間: 34
- Category: Emacs向けAIエージェントクライアント
- Keywords: `Emacs` `ACP` `LLMエージェント` `Claude` `Codex` `MELPA`
- Summary source: README

#### README要約

- Emacs上でACP（Agent Client Protocol）対応のLLMエージェントと対話するためのネイティブシェルバッファを提供するパッケージ。
- acp.elを介してACP通信を行い、Claude Agent、Codex、Gemini CLI、Goose、Grok Buildなど多数のエージェントを統一的に操作できる。
- Emacsユーザーがエディタ内でAIコーディングエージェントを利用したい場合に適し、サイドバーや通知など拡張パッケージ群も用意されている。
- MELPAからインストール可能で、利用には各エージェントのACP対応CLI（例: claude-agent-acp）を別途インストールしPATHに配置する必要がある。

---

### 3. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,516
- Forks: 428
- Stars in 1週間: 11
- Category: Emacs LLMクライアント
- Keywords: `Emacs` `LLM` `チャットクライアント` `マルチモーダル` `MCP` `拡張可能`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルで拡張可能なLLMチャットクライアントで、複数のモデルとバックエンドをサポートしています。
- ツール使用、MCP統合、マルチモーダル入力、推論コンテンツのサポート、チャットの保存と再開、プロンプトやレスポンスの編集が可能です。
- Emacsユーザーが任意のバッファ、シェル、ミニバッファからLLMと対話し、ワークフローをカスタマイズする用途に適しています。
- Transient 0.7.8以上が必要で、Curlが利用可能な場合はそれを使用し、利用不可の場合は組み込みのurl-retrieveにフォールバックします。

---

### 4. [emacs-mirror/emacs](https://github.com/emacs-mirror/emacs)

> Mirror of GNU Emacs

- Language: Emacs Lisp
- Stars: 5,187
- Forks: 1,401
- Stars in 1週間: 18
- Category: テキストエディタ
- Keywords: `GNU Emacs` `Emacs Lisp` `テキストエディタ` `拡張可能` `GPLv3` `クロスプラットフォーム`
- Summary source: README

#### README要約

- GNU Emacsバージョン32.0.50のソースツリーであり、拡張可能でカスタマイズ可能な自己文書化リアルタイムディスプレイエディタです。
- C言語によるコア（src）とEmacs Lispによる機能（lisp）で構成され、configureスクリプトとmakeによるビルドシステムを採用しています。
- テキスト編集を行うユーザーのほか、Emacs Lispで拡張開発を行う開発者や、GNU/Linux・Windows・macOS・Androidなど多様なプラットフォームでの利用者を対象としています。
- ビルドにはINSTALLファイルを参照し、Gitからのビルドではautogen.shとAutoconf・GNU m4が必要です。バグ報告はM-x report-emacs-bugまたはメーリングリストへ送信してください。

---

### 5. [magit/transient](https://github.com/magit/transient)

> Transient commands

- Language: Emacs Lisp
- Stars: 886
- Forks: 74
- Stars in 1週間: 0
- Category: Emacsライブラリ
- Keywords: `Emacs Lisp` `Magit` `メニューUI` `キーボード駆動` `コマンドオプション` `MELPA`
- Summary source: README

#### README要約

- Magitで使われているキーボード駆動のメニューUIを実装するためのEmacs Lispライブラリ。
- 引数の状態表示、モーダルなキーバインド管理、コンテキストに応じたUI、履歴・永続化、CLI引数のレンダリングなどを提供する。
- Magit以外のパッケージでも同様のメニューを実装できるよう、独立したパッケージとして配布されている。
- GNU ELPAやMELPAからインストール可能で、複雑なオプションを持つコマンドのUI構築に適している。

---

### 6. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,544
- Forks: 328
- Stars in 1週間: 16
- Category: AIアクセラレータIP
- Keywords: `NPU` `RISC-V` `ML推論` `エッジAI` `オープンソースIP` `ウェアラブル`
- Summary source: README

#### README要約

- Coral NPUは、Google Researchが設計した超低消費電力SoC向けのオープンソースML推論アクセラレータIPです。
- 32ビットRISC-V ISAをベースに、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作します。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブルデバイスを対象としたエッジAI用途に適しています。
- 利用にはBazel 7.4.1、Python 3.9〜3.12、SRecordが必要で、Quick Startの手順でシミュレータ上の動作確認が可能です。

---

### 7. [rainstormstudio/nerd-icons.el](https://github.com/rainstormstudio/nerd-icons.el)

- Language: Emacs Lisp
- Stars: 328
- Forks: 48
- Stars in 1週間: 2
- Category: Emacs拡張ライブラリ
- Keywords: `Emacs` `Nerd Font` `アイコン` `GUI` `ターミナル` `MELPA`
- Summary source: README

#### README要約

- EmacsでNerd Fontアイコンを簡単に利用するためのライブラリで、all-the-iconsの代替として開発された。
- GUIとターミナルの両方で動作し、ファイル・拡張子・モード・URLなどのカテゴリ別にアイコンを取得する関数を提供する。
- Emacsユーザーがバッファやモードライン、ファイルマネージャーなどで視覚的なアイコン表示を実現する際に使用する。
- システムにNerd Fontをインストールし、GUIではnerd-icons-font-familyを設定、ターミナルでは端末のフォントを変更する必要がある。

---

### 8. [jrblevin/markdown-mode](https://github.com/jrblevin/markdown-mode)

> Emacs Markdown Mode

- Language: Emacs Lisp
- Stars: 1,048
- Forks: 185
- Stars in 1週間: 3
- Category: Emacs拡張
- Keywords: `Emacs` `Markdown` `メジャーモード` `Emacs Lisp` `gfm-mode` `MELPA`
- Summary source: README

#### README要約

- EmacsでMarkdown形式テキストを編集するためのメジャーモード。
- リンクや画像の挿入・編集、アウトライン移動、外部MarkdownプロセッサによるHTMLプレビューやエクスポートなどの機能を提供する。
- Markdown文書をEmacsで作成・編集するユーザー向けで、GitHub Flavored Markdown用のgfm-modeも含む。
- MELPA Stableからpackage.elでインストールするのが推奨で、プレビュー等には別途Markdownプロセッサのインストールとmarkdown-commandの設定が必要。

---

### 9. [emacs-evil/evil](https://github.com/emacs-evil/evil)

> The extensible vi layer for Emacs.

- Language: Emacs Lisp
- Stars: 3,854
- Forks: 307
- Stars in 1週間: 11
- Category: エディタ拡張
- Keywords: `Emacs` `Vim` `viエミュレーション` `モーダル編集` `Emacs Lisp` `拡張性`
- Summary source: README

#### README要約

- EvilはEmacs上でVimの主要な機能をエミュレートする拡張可能なviレイヤーです。
- カスタム拡張を記述するための機能を提供し、undo-treeやgoto-chgなどの外部パッケージと連携してVimの操作性を再現します。
- EmacsでVimのキーバインドやモーダル編集を使いたいユーザーを対象としています。
- Emacs 24.1以降が必要で、package.el経由でのインストールが推奨されています。

---

### 10. [tumashu/posframe](https://github.com/tumashu/posframe)

> Pop a posframe (just a child-frame) at point, posframe is a **GNU ELPA** package!

- Language: Emacs Lisp
- Stars: 537
- Forks: 64
- Stars in 1週間: 0
- Category: Emacs拡張
- Keywords: `Emacs Lisp` `posframe` `child-frame` `ポップアップ` `GNU ELPA` `CJK対応`
- Summary source: README

#### README要約

- ポイント位置に子フレーム（posframe）をポップアップ表示するGNU ELPAパッケージ。
- ルートウィンドウのバッファに接続された子フレームを生成し、表示・非表示・削除などの操作関数を提供する。
- Emacs上でポップアップUIを実装したいユーザー向けで、日常利用に十分な速度とCJK言語との相性の良さが利点。
- macOSではEmacs 26.0.91以上、GTK3ビルドのGNOME環境ではEmacs 27以降が必要。

---

### 11. [melpa/melpa](https://github.com/melpa/melpa)

> Recipes and build machinery for the biggest Emacs package repo

- Language: Emacs Lisp
- Stars: 2,966
- Forks: 2,807
- Stars in 1週間: 2
- Category: パッケージ管理システム
- Keywords: `Emacs` `パッケージ管理` `package.el` `自動ビルド` `レシピ` `リポジトリ`
- Summary source: README

#### README要約

- MELPAはpackage.el互換のEmacs Lispパッケージを集めた大規模なパッケージアーカイブであり、サーバー上で自動ビルドされる。
- シンプルなレシピファイルでパッケージを指定し、GitやMercurialなどのリポジトリからソースコードを取得して自動的にパッケージを構築する。
- Emacs 24.1以降のユーザーが対象で、package-archivesにMELPAを追加することでパッケージの閲覧・インストールが可能になる。
- init.elに設定を追加し、M-x package-list-packagesで利用開始。安定版が必要な場合はMELPA Stableも選択できるが、通常は開発版のMELPAが推奨される。

---

### 12. [syl20bnr/spacemacs](https://github.com/syl20bnr/spacemacs)

> A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

- Language: Emacs Lisp
- Stars: 24,563
- Forks: 4,835
- Stars in 1週間: 8
- Category: エディタ設定・ディストリビューション
- Keywords: `Emacs` `Vim` `キーバインド` `設定レイヤー` `Emacs Lisp` `ペアプログラミング`
- Summary source: README

#### README要約

- Spacemacsは人間工学・記憶しやすさ・一貫性に重点を置いた、コミュニティ主導の洗練されたEmacsディストリビューションです。
- スペースキーで探索できる対話的なキーバインド一覧、ニーモニックなプレフィックス、設定レイヤーで整理された数百のパッケージを提供します。
- EmacsとVimの両方の編集スタイルを自然に使い分け・混在できるため、両エディタのユーザーやペアプログラミングに適しています。
- Emacs 28.2以上、Git、GNU Tarが必須で、~/.emacs.dにgit cloneして起動するだけで導入できますが、現在ベータ版です。

---

### 13. [dakra/ghostel](https://github.com/dakra/ghostel)

> Terminal emulator powered by libghostty

- Language: Emacs Lisp
- Stars: 923
- Forks: 58
- Stars in 1週間: 11
- Category: ターミナルエミュレータ
- Keywords: `Emacs` `ターミナル` `libghostty` `VTエンジン` `シェル統合` `MELPA`
- Summary source: README

#### README要約

- Ghostelは、GhosttyのVTエンジンであるlibghostty-vtを搭載したEmacs用ターミナルエミュレータです。
- 同期出力、トゥルーカラー、Kittyキーボード・グラフィックスプロトコル、ハイパーリンク、デスクトップ通知などをサポートします。
- Emacsで高機能なターミナルを使いたいユーザー向けで、bash、zsh、fish、nushellのシェル統合が標準で動作します。
- Emacs 28.1以降と動的モジュールサポートが必要で、MELPAからインストールでき、ネイティブモジュールは初回使用時に自動ダウンロードされます。

---

### 14. [rejeep/f.el](https://github.com/rejeep/f.el)

> Modern API for working with files and directories in Emacs

- Language: Emacs Lisp
- Stars: 709
- Forks: 73
- Stars in 1週間: 0
- Category: Emacs Lispライブラリ
- Keywords: `Emacs` `ファイル操作` `パス処理` `ディレクトリ走査` `MELPA`
- Summary source: README

#### README要約

- Emacsでファイルやディレクトリを扱うためのモダンなAPIを提供するEmacs Lispライブラリ。
- パス操作、ファイルI/O、作成・削除・コピーなどの破壊的操作、存在確認などの述語、サイズや時刻の取得、globやディレクトリ走査、サンドボックス内操作などの関数群を備える。
- Emacs Lispでファイル処理を書く開発者や、標準のファイル名関数より簡潔な記述を求めるユーザー向け。
- MELPAおよびMELPA Stableからpackage-installで導入でき、f.elをload-pathに置く方法も案内されている。

---

### 15. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,217
- Forks: 880
- Stars in 1週間: 7
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `porcelain` `バージョン管理` `Emacs Lisp` `インターフェース`
- Summary source: README

#### README要約

- MagitはEmacsパッケージとして実装されたGitバージョン管理システムのインターフェースです。
- 完全なGit porcelainを目指しており、経験豊富なGitユーザーでも日常のバージョン管理タスクのほぼ全てをEmacs内から直接実行できます。
- EmacsユーザーがGitクライアントとして利用するもので、他のGitクライアントとは大きく異なる操作性を持ちます。
- MELPAやNonGNU ELPAなどからインストール可能で、初心者向けの視覚的なウォークスルーや動画紹介が用意されています。

---

### 16. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,124
- Forks: 981
- Stars in 1週間: 8
- Category: 開発ツール
- Keywords: `Emacs` `LSP` `IDE` `コード補完` `言語サーバー` `開発環境`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol (LSP) クライアント/ライブラリで、IDEのような開発体験を提供します。
- LSP v3.14の全機能をサポートし、非同期処理、リアルタイム診断、コード補完、ナビゲーションなどを提供します。
- company、flycheck、projectileなどの人気Emacsパッケージと統合し、多様な言語サーバーに対応しています。
- 追加パッケージの有無に応じて自動的に設定が調整され、すぐに使い始めることができます。

---
