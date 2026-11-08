+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/11/08'
date = 2026-11-08T00:14:29.671Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月8日 0:14:29
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 11
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacs Lisp製プロジェクトが一覧を独占し、AI連携ツールとエディタ基盤の双方に注目が集まっている

- 一覧の11件すべてがEmacs Lispのプロジェクトで、Emacsエコシステム関連のリポジトリのみで構成されている
- gptel、agent-shell、ghostelなどAI・外部ツール連携系の新しいパッケージが登場している
- spacemacs、doomemacs/core、magit、lsp-modeなど定番の成熟プロジェクトも継続してスターを獲得している
- google-coral/coralnpuはエッジAI向けNPUという異色の存在だが、言語分類上はEmacs Lispとして集計されている
- 期間中スター数はgoogle/styleguideの39が最大で、ghostelの35、coralnpuの27が続く

### 主なテーマ

- **EmacsへのAI・LLM統合**: karthink/gptelはマルチモーダル対応のLLMクライアント、xenodium/agent-shellはACP基盤でClaudeやCodex、Gemini CLIなど24種類のエージェントと連携するなど、Emacs内でAIアシスタンスを利用するためのパッケージが複数ランクインしている。（`karthink/gptel`、`xenodium/agent-shell`）
- **エディタ基盤・設定フレームワーク**: syl20bnr/spacemacsとdoomemacs/coreはいずれもVimエミュレーションを備えたEmacsディストリビューション/フレームワークで、合わせて24スターを獲得。melpa/melpaはパッケージ配布基盤としてエコシステムの土台を支えている。（`syl20bnr/spacemacs`、`doomemacs/core`、`melpa/melpa`）
- **開発環境としてのEmacs強化**: magit/magitはGit porcelain、emacs-lsp/lsp-modeはLSP v3.14対応クライアント、clojure-emacs/ciderはClojure向けインタラクティブ開発環境、dakra/ghostelはlibghosttyベースの高機能ターミナルエミュレータであり、Emacs内で開発作業を完結させるためのツール群が並んでいる。（`magit/magit`、`emacs-lsp/lsp-mode`、`clojure-emacs/cider`、`dakra/ghostel`）
- **Google発のプロジェクト**: google/styleguideは多言語のコーディング規約集で期間中39スターと一覧最大、google-coral/coralnpuはRISC-VベースのエッジAI向けMLアクセラレータIPで27スターを獲得しており、Google関連プロジェクトが2件ランクインしている。（`google/styleguide`、`google-coral/coralnpu`）

### 補足的な観察

- 期間中スター数の上位はgoogle/styleguide(39)、dakra/ghostel(35)、google-coral/coralnpu(27)、xenodium/agent-shell(20)の順で、AI関連とGoogle関連が上位を占めている
- 言語分布はEmacs Lispが11件中11件(100%)だが、coralnpuのようなハードウェアIPやgoogle/styleguideのようなドキュメント中心のリポジトリもEmacs Lispに分類されており、言語ラベルと実態が一致しないケースが含まれる
- ciderやmelpaなど長年の定番プロジェクトは1〜3スターと伸びが小さい一方、ghostelやagent-shellといった比較的新しいパッケージが20〜35スターと大きく伸びている
- ghostelがEmacs 28.1以上、doomがEmacs 27.1〜31.1など、多くのプロジェクトで比較的新しいEmacsバージョンが前提とされている

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 11 |

## Repository一覧

### 1. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,679
- Forks: 372
- Stars in 1週間: 27
- Category: AIアクセラレータ
- Keywords: `NPU` `RISC-V` `機械学習` `エッジAI` `オープンソース` `SoC`
- Summary source: README

#### README要約

- Coral NPUはGoogle Researchが設計したオープンソースのML推論用ハードウェアアクセラレータIPです。
- 32ビットRISC-Vアーキテクチャを基盤とし、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作します。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブルデバイス向け超低電力SoCへの統合を対象としています。
- ビルドにはBazel 8.6.0とPython 3.9-3.13が必要で、CocotbやUVMによる検証環境が用意されています。

---

### 2. [syl20bnr/spacemacs](https://github.com/syl20bnr/spacemacs)

> A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

- Language: Emacs Lisp
- Stars: 24,550
- Forks: 4,819
- Stars in 1週間: 6
- Category: エディタ設定/ディストリビューション
- Keywords: `Emacs` `Vim` `キーバインド` `設定レイヤー` `Emacs Lisp` `エディタ`
- Summary source: README

#### README要約

- Spacemacsはコミュニティ主導のEmacsディストリビューションで、人間工学・記憶しやすさ・一貫性に重点を置いた洗練されたセットアップを提供する。
- スペースキーでアクセスできるニーモニックなキーバインド、設定レイヤーで整理された数百のパッケージ、充実したドキュメントと美しいGUIを備える。
- EmacsとVimの両方の編集スタイルを自然に使い分け・混在できるため、両エディタのユーザーやペアプログラミングに適している。
- Emacs 28.2以上とGit、GNU Tarが必須で、リポジトリを~/.emacs.dにクローンして起動する。現在ベータ版であり、XEmacsは非対応。

---

### 3. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,802
- Forks: 3,140
- Stars in 1週間: 18
- Category: Emacs設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、GNU Emacs向けの設定フレームワークで、起動・実行時の高速性と再現性のあるパッケージ管理を重視している。
- straight.elベースの宣言的パッケージ管理CLI、約150のオプションモジュール、evil-modeによるVimエミュレーション、LSP統合、ポップアップ管理などを提供する。
- Vim経験者やEmacs愛好家、自分の設定の基盤や学習用リソースを求めるユーザーを対象とし、多くの言語やツールをサポートする。
- 導入はgit clone後にdoom installを実行し、Emacs 27.1〜31.1、Git、ripgrepが必要。doom doctorで不足依存を確認できる。

---

### 4. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,255
- Forks: 882
- Stars in 1週間: 6
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `バージョン管理` `Emacs Lisp` `porcelain` `エディタ統合`
- Summary source: README

#### README要約

- MagitはEmacsパッケージとして実装されたGitバージョン管理システムのインターフェースです。
- 完全なGit porcelainを目指しており、経験豊富なGitユーザーでも日常のバージョン管理作業のほぼすべてをEmacs内から直接実行できます。
- Emacsユーザーで、エディタ内でGit操作を完結させたい開発者に適しています。
- 初心者向けに視覚的なウォークスルーやビデオ紹介が用意されており、MELPAやNonGNU ELPAからインストール可能です。

---

### 5. [dakra/ghostel](https://github.com/dakra/ghostel)

> Terminal emulator powered by libghostty

- Language: Emacs Lisp
- Stars: 1,120
- Forks: 76
- Stars in 1週間: 35
- Category: Emacsターミナルエミュレータ
- Keywords: `Emacs` `ターミナルエミュレータ` `libghostty` `Ghostty` `シェル統合` `MELPA`
- Summary source: README

#### README要約

- Ghostelは、Ghostty端末のVTエンジンであるlibghostty-vtを基盤としたEmacs用ターミナルエミュレータです。
- 同期出力、トゥルーカラー、Kittyキーボード・グラフィックスプロトコル、ハイパーリンク、デスクトップ通知などの機能を備え、bash/zsh/fish/nushellのシェル統合が標準で動作します。
- Emacs上で高機能なターミナルを使いたいユーザー向けで、eshell・compile・comint・Org・consult・evilなどとの連携拡張も用意されています。
- Emacs 28.1以上で動的モジュール対応が必要で、MELPAからインストール可能、初回利用時にビルド済みネイティブモジュールのダウンロードを提案します。

---

### 6. [clojure-emacs/cider](https://github.com/clojure-emacs/cider)

> The Clojure Interactive Development Environment that Rocks for Emacs

- Language: Emacs Lisp
- Stars: 3,678
- Forks: 650
- Stars in 1週間: 1
- Category: Emacs向けClojure開発環境
- Keywords: `Clojure` `Emacs` `REPL` `nREPL` `インタラクティブ開発` `cider-mode`
- Summary source: README

#### README要約

- CIDERはEmacsを拡張し、ClojureおよびClojureScriptのインタラクティブな開発環境を提供するツールです。
- cider-modeを中心に、実行中のClojureプロセスとの対話を通じてコンパイル、コード補完、デバッグ、定義・ドキュメント参照、テスト実行などを実現します。
- Emacs上でClojure(Script)開発を行うユーザーが対象で、REPL駆動の開発ワークフローを強化する用途に適しています。
- package.el経由でNonGNU ELPAやMELPAからインストールでき、M-x cider-jack-inでnREPLサーバーを起動・接続して利用を開始します。

---

### 7. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,563
- Forks: 452
- Stars in 1週間: 6
- Category: Emacs向けLLMクライアント
- Keywords: `Emacs` `LLM` `AI` `チャットクライアント` `拡張可能` `マルチモーダル`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルで拡張可能なLLMチャットクライアントで、複数のモデルとバックエンドをサポートしています。
- 任意のバッファからLLMと対話でき、ツール使用、MCP統合、マルチモーダル入力、推論コンテンツの処理などの機能を備えています。
- Emacsユーザーがコーディング、文書作成、リサーチなどの作業中にAIアシスタンスを必要とする場面で活用できます。
- Transient 0.7.8以上が必要で、Curlが利用可能な場合はそれを使用し、なければ組み込みのurl-retrieveにフォールバックします。

---

### 8. [google/styleguide](https://github.com/google/styleguide)

> Style guides for Google-originated open-source projects

- Language: Emacs Lisp
- Stars: 39,808
- Forks: 12,918
- Stars in 1週間: 39
- Category: コーディング規約・スタイルガイド
- Keywords: `スタイルガイド` `コーディング規約` `Google` `多言語対応` `エディタ設定` `ライセンス`
- Summary source: README

#### README要約

- Google発のオープンソースプロジェクト向けに、コードの一貫した書き方を定めたスタイルガイド集を提供するリポジトリ。
- C++、Java、Python、Go、JavaScriptなど多数の言語別ガイドへのリンクに加え、コミットメッセージの指針やEmacs・Vim・Eclipse向け設定ファイルを収録。
- Google発のプロジェクトを修正する開発者や、コーディング規約の参考資料を求める開発者が対象。
- 外部からの貢献は受け付けずプルリクエストは原則クローズ。ガイドはCC-By 3.0、コードサンプルはApache 2.0ライセンス。

---

### 9. [melpa/melpa](https://github.com/melpa/melpa)

> Recipes and build machinery for the biggest Emacs package repo

- Language: Emacs Lisp
- Stars: 2,985
- Forks: 2,843
- Stars in 1週間: 1
- Category: Emacsパッケージリポジトリ
- Keywords: `Emacs` `package.el` `パッケージ管理` `レシピ` `自動ビルド` `MELPA Stable`
- Summary source: README

#### README要約

- MELPAはpackage.el互換のEmacs Lispパッケージを集めた大規模なパッケージアーカイブである。
- シンプルなレシピをもとに上流のソースコードからサーバー上で自動ビルドし、1日の間隔で更新される。
- Emacs 24.1以降のユーザーがpackage-archivesにMELPAを追加してパッケージを閲覧・インストールする用途に向く。
- 利用にはinit.elへの設定追加とpackage-refresh-contentsの実行が必要で、タグ付き版向けのMELPA Stableも別途提供される。

---

### 10. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> Brings your favorite AI agents to Emacs, keeping you at home: familiar buffers and bindings, no terminal emulation. Powered by ACP.

- Language: Emacs Lisp
- Stars: 2,039
- Forks: 265
- Stars in 1週間: 20
- Category: Emacs拡張
- Keywords: `Emacs` `AIエージェント` `ACP` `Claude` `コーディング支援` `MELPA`
- Summary source: README

#### README要約

- Emacs上でお気に入りのAIエージェントを利用できるようにするパッケージで、ターミナルエミュレーションなしで使い慣れたバッファとキーバインドを維持します。
- ACP（Agent Client Protocol）を基盤とし、Claude Agent、Codex、Gemini CLIなど24種類のエージェントと連携可能です。
- EmacsユーザーがAIコーディングエージェントを快適に利用したい場合に適しており、豊富な拡張パッケージエコシステムも存在します。
- MELPAからインストール可能で、各エージェントの外部依存関係（Claude Agent SDKなど）のセットアップが必要です。

---

### 11. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,134
- Forks: 984
- Stars in 1週間: 3
- Category: Emacs LSPクライアント
- Keywords: `Emacs` `Language Server Protocol` `LSP` `IDE` `コード補完` `Emacs Lisp`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol（LSP）クライアント/ライブラリで、IDEのような開発体験を提供する。
- LSP v3.14の全機能をサポートし、非同期処理、リアルタイム診断、補完、コードアクション、ナビゲーションなどを備える。
- company、flycheck、projectileなどの人気Emacsパッケージと連携し、多様な言語でのコーディングを支援する。
- 追加パッケージがあれば自動で機能拡張され、公式サイトのインストールガイドやチュートリアルに従って導入する。

---
