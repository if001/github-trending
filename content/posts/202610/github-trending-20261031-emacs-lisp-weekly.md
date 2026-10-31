+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/10/31'
date = 2026-10-31T23:58:51.657Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月31日 23:58:51
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 10
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacs Lisp製リポジトリがランキングを独占し、AIエージェント連携やターミナル機能など現代的な拡張が注目を集めている

- 一覧の全10件がEmacs Lispで記述されており、Emacsエコシステムへの関心の高さが際立っている
- xenodium/agent-shellやkarthink/gptelなど、LLMやAIエージェントをEmacsから利用するための拡張が複数ランクインしている
- dakra/ghostelが65スターで最大の伸びを示し、libghosttyベースの高性能ターミナルエミュレータへの需要がうかがえる
- doomemacs/coreやsyl20bnr/spacemacsといった設定フレームワーク/ディストリビューションが並び、Emacs環境構築への継続的な関心が見られる
- google-coral/coralnpuのように言語表記はEmacs LispながらエッジAI向けハードウェアIPという異色のプロジェクトも含まれている

### 主なテーマ

- **EmacsでのAI・LLM活用**: xenodium/agent-shellはACP経由でClaude AgentやCodex、Gemini CLIなど24種類のAIエージェントと連携し35スターを獲得、karthink/gptelはMCP連携やマルチモーダル対応のLLMクライアントとしてランクインしており、Emacs上でのAIコーディング支援への関心が高い（`xenodium/agent-shell`、`karthink/gptel`）
- **Emacs設定フレームワークとディストリビューション**: doomemacs/coreが34スター、syl20bnr/spacemacsが7スターでランクインし、evil-modeによるVimエミュレーションやモジュール式の設定管理など、再現性と使いやすさを重視した環境構築基盤が支持されている（`doomemacs/core`、`syl20bnr/spacemacs`）
- **Emacsの開発環境機能強化**: dakra/ghostelが65スターで最大の伸びを示し、Kittyプロトコルやシェル統合を備えた高速ターミナルを実現。magit/magitのGit統合やemacs-lsp/lsp-modeのLSP対応と合わせて、Emacs内で開発作業を完結させる基盤が注目されている（`dakra/ghostel`、`magit/magit`、`emacs-lsp/lsp-mode`）
- **コーディング規約とエディタ本体**: google/styleguideが62スターを獲得し、多言語対応のスタイルガイドやエディタ設定ファイルへの需要を示している。emacs-mirror/emacsはGNU Emacs本体のミラーとしてランクインしており、基盤となるエディタ自体への関心も継続している（`google/styleguide`、`emacs-mirror/emacs`）
- **エッジAI向けハードウェア**: google-coral/coralnpuは32スターを獲得し、RISC-VベースのML推論アクセラレータIPとしてウェアラブル機器向け超低消費電力SoCを対象とするなど、ソフトウェア中心の一覧の中で異色のハードウェアプロジェクトとして注目を集めている（`google-coral/coralnpu`）

### 補足的な観察

- 言語分布は全10件ともEmacs Lispで完全に単一言語のランキングとなっている
- スター獲得数の上位はdakra/ghostel（65）、google/styleguide（62）、xenodium/agent-shell（35）、doomemacs/core（34）の順で、ターミナルと規約、AI連携が伸びている
- magit/magit（9）やemacs-lsp/lsp-mode（3）など成熟した定番パッケージは伸びが小さい一方、新興のAI・ターミナル系プロジェクトが大きく伸びる構図が見られる
- google-coral/coralnpuのように言語分類と実際の内容（ハードウェアIP）が一致しないリポジトリが含まれており、分類上の注意点となっている

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 10 |

## Repository一覧

### 1. [google/styleguide](https://github.com/google/styleguide)

> Style guides for Google-originated open-source projects

- Language: Emacs Lisp
- Stars: 39,782
- Forks: 12,924
- Stars in 1週間: 62
- Category: コーディング規約
- Keywords: `スタイルガイド` `Google` `コーディング規約` `多言語対応` `エディタ設定` `ライセンス`
- Summary source: README

#### README要約

- Google発のオープンソースプロジェクト向けに、コードの一貫したスタイルを定めたスタイルガイド集を公開するリポジトリです。
- C++、Java、Python、Go、JavaScriptなど多数の言語別ガイドへのリンクに加え、コミットメッセージの指針やEmacs/Vim/Eclipse向け設定ファイルを提供します。
- Google発プロジェクトを修正する開発者や、コーディング規約の参考資料を求める開発者が対象で、内部ガイドの複製として公開されています。
- 外部からの貢献は受け付けずプルリクエストは原則クローズされ、ドキュメントはCC-By 3.0、コードサンプルはApache 2.0でライセンスされています。

---

### 2. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,792
- Forks: 3,144
- Stars in 1週間: 34
- Category: エディタ設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、GNU Emacs向けの設定フレームワークで、起動・実行時のパフォーマンスと再現性を重視した設計が特徴です。
- straight.elベースの宣言的パッケージ管理、約150のオプションモジュール、evil-modeによるVimエミュレーション、LSP統合などを提供します。
- Vim出身者や自分の設定の基盤を求めるEmacsユーザー、モダンなエディタ風の見た目と合理的なデフォルトを求める愛好家が対象です。
- Emacs 27.1〜31.1、Git、ripgrepが必須で、git clone後にbin/doom installを実行し、doom doctorで不足依存を確認します。

---

### 3. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> Brings your favorite AI agents to Emacs, keeping you at home: familiar buffers and bindings, no terminal emulation. Powered by ACP.

- Language: Emacs Lisp
- Stars: 2,021
- Forks: 257
- Stars in 1週間: 35
- Category: Emacs拡張
- Keywords: `Emacs` `AIエージェント` `ACP` `Claude` `LLM` `コーディング支援`
- Summary source: README

#### README要約

- Emacs上でお気に入りのAIエージェントを利用できるようにするパッケージで、ターミナルエミュレーションなしで使い慣れたバッファとキーバインドを維持します。
- ACP（Agent Client Protocol）を介して24種類のAIエージェントと連携し、Claude Agent、Codex、Gemini CLI、GitHub Copilotなど主要なエージェントに対応しています。
- EmacsユーザーでAIコーディングエージェントを活用したい開発者が対象で、サイドバー、ブックマーク、通知、セッション管理など豊富な拡張パッケージが利用可能です。
- MELPAからインストール可能で、各エージェントの外部依存関係（Claude Agent SDKなど）のセットアップが必要です。問題報告はエージェント側かagent-shell側かを切り分けて行います。

---

### 4. [dakra/ghostel](https://github.com/dakra/ghostel)

> Terminal emulator powered by libghostty

- Language: Emacs Lisp
- Stars: 1,086
- Forks: 73
- Stars in 1週間: 65
- Category: ターミナルエミュレータ
- Keywords: `Emacs` `libghostty` `ターミナル` `シェル統合` `Kittyプロトコル` `MELPA`
- Summary source: README

#### README要約

- libghostty-vtを基盤としたEmacs用ターミナルエミュレータで、高速・堅牢・正確な動作を目指している。
- 同期出力、トゥルーカラー、Kittyキーボード/グラフィックスプロトコル、ハイパーリンク、デスクトップ通知、進捗レポートなどをサポートする。
- bash、zsh、fish、nushellのシェル統合がデフォルトで動作し、eshell、compile、comint、consult、evilなどの拡張機能も利用できる。
- Emacs 28.1以降と動的モジュールサポートが必要で、MELPAからインストール可能。初回使用時にプリビルトネイティブモジュールのダウンロードを提案する。

---

### 5. [syl20bnr/spacemacs](https://github.com/syl20bnr/spacemacs)

> A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

- Language: Emacs Lisp
- Stars: 24,547
- Forks: 4,823
- Stars in 1週間: 7
- Category: エディタ設定・ディストリビューション
- Keywords: `Emacs` `Vim` `キーバインド` `設定レイヤー` `エルゴノミクス` `Emacs Lisp`
- Summary source: README

#### README要約

- コミュニティ主導のEmacsディストリビューションで、人間工学・記憶しやすさ・一貫性に重点を置いた洗練された設定環境を提供する。
- スペースキーまたはAlt-mでアクセスできるニーモニックなキーバインド、設定レイヤーで整理された数百のパッケージ、美しいGUI、充実したドキュメントを備える。
- EmacsとVimの両方のユーザーが自然に使え、編集スタイルを混在・切り替えられるため、ペアプログラミングにも適している。
- Emacs 28.2以上、Git、GNU Tarが必要で、git cloneで~/.emacs.dにインストールできる。現在ベータ版であり、XEmacsはサポートされない。

---

### 6. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,250
- Forks: 882
- Stars in 1週間: 9
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `バージョン管理` `Emacs Lisp` `ポーセリン` `MELPA`
- Summary source: README

#### README要約

- Emacs内で動作するGitのインターフェース（Git Porcelain）を提供するEmacsパッケージです。
- 経験豊富なGitユーザーが日常的なバージョン管理タスクのほぼ全てをEmacs内から直接実行できるよう設計されています。
- Emacsを使用するGitユーザーが対象で、他のGitクライアントとは異なる操作性を持ち、視覚的なウォークスルーや動画で学習できます。
- MELPAやNonGNU ELPAからインストール可能で、質問はDiscussionsを利用し、寄付による支援が推奨されています。

---

### 7. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,131
- Forks: 984
- Stars in 1週間: 3
- Category: Emacs拡張
- Keywords: `Emacs` `LSP` `Language Server Protocol` `IDE` `コード補完` `Emacs Lisp`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol（LSP）クライアント/ライブラリで、IDEのような開発体験を提供する。
- LSP v3.14の全機能をサポートし、非同期処理、リアルタイム診断、補完、コードアクション、ナビゲーションなどを提供する。
- company、flycheck、projectileなどの人気Emacsパッケージと統合し、多くの言語サーバーに対応している。
- 追加パッケージがあれば自動的に機能が拡張され、フル機能のIDEから最小限の構成まで柔軟に選択できる。

---

### 8. [emacs-mirror/emacs](https://github.com/emacs-mirror/emacs)

> Mirror of GNU Emacs

- Language: Emacs Lisp
- Stars: 5,242
- Forks: 1,420
- Stars in 1週間: 7
- Category: テキストエディタ
- Keywords: `GNU Emacs` `Emacs Lisp` `テキストエディタ` `拡張可能` `GPL` `クロスプラットフォーム`
- Summary source: README

#### README要約

- GNU Emacsバージョン32.0.50のソースツリーであり、拡張可能でカスタマイズ可能な自己文書化リアルタイムディスプレイエディタです。
- C言語によるコア（src）とEmacs Lispによる機能（lisp）で構成され、configureスクリプトとmakeによるビルドシステムを採用しています。
- Emacsユーザー、開発者、およびGNU/Linux、macOS、Windows、Androidなど各種プラットフォーム向けのビルド担当者を対象としています。
- ビルドにはINSTALLファイルを参照し、Gitからのビルド時はautogen.shとAutoconfが必要です。バグ報告はM-x report-emacs-bugで行います。

---

### 9. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,655
- Forks: 364
- Stars in 1週間: 32
- Category: ハードウェアアクセラレータ
- Keywords: `NPU` `RISC-V` `ML推論` `エッジAI` `SoC` `オープンソースIP`
- Summary source: README

#### README要約

- Coral NPUは、Google Researchが設計したML推論向けのオープンソースハードウェアアクセラレータIPです。
- 32ビットRISC-V ISAを基盤に、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作します。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブル機器向け超低消費電力SoCへの統合を対象としています。
- ビルドにはBazel 8.6.0とPython 3.9〜3.13が必要で、CocotbやUVMによる検証環境とシミュレータが用意されています。

---

### 10. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,557
- Forks: 448
- Stars in 1週間: 5
- Category: Emacs用LLMクライアント
- Keywords: `Emacs` `LLM` `チャットクライアント` `MCP` `マルチモーダル` `拡張可能`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルで拡張可能なLLMチャットクライアント。
- 複数のモデルやバックエンドに対応し、ツール使用やMCP連携、マルチモーダル入力も可能。
- Emacsユーザーが任意のバッファから手軽にLLMと対話したい場合に適している。
- Curlがあれば利用し、なければ内蔵のurl-retrieveで動作するため外部依存なしでも使える。

---
