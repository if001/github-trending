+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/10/11'
date = 2026-10-11T00:09:30.685Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月11日 0:09:30
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 8
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacs Lispのみで構成された一覧で、AIエージェント連携やターミナル強化などEmacs環境の拡張が目立つ

- 全8件すべてがEmacs Lispで、Emacs関連プロジェクトが中心となっている
- AIエージェント連携（agent-shell）やターミナルエミュレータ（ghostel）など、Emacs内での作業環境を強化する新しいツールが登場している
- Doom EmacsやSpacemacsといった設定フレームワーク・ディストリビューションが引き続き支持されている
- Google CoralのNPUプロジェクトが言語分類上Emacs Lispとして混入しており、一覧の中で異質な存在となっている

### 主なテーマ

- **Emacs内AIエージェント連携**: agent-shellはACP（Agent Client Protocol）経由でClaude Agent、Codex、Gemini CLI、Gooseなど複数のLLMエージェントとEmacsバッファから対話できるパッケージで、期間中18スターを獲得。Emacs内でAIコーディングエージェントを活用する需要の表れと見られる。（`xenodium/agent-shell`）
- **Emacs設定フレームワーク・ディストリビューション**: doomemacs/coreが28スターで一覧中最も多く、evil-modeによるVimエミュレーションやLSP統合、約150のモジュールを備える。syl20bnr/spacemacsも5スターを獲得しており、VimとEmacsの操作を融合させた設定環境への関心が継続している。（`doomemacs/core`、`syl20bnr/spacemacs`）
- **Emacs内ターミナル・開発環境の強化**: ghostelはlibghosttyベースのターミナルエミュレータでKittyグラフィックスやシェル統合をサポートし16スターを獲得。lsp-modeはLSPクライアントとしてIDE的な開発体験を提供し、magitはGit porcelainとして定番の地位を維持している。（`dakra/ghostel`、`emacs-lsp/lsp-mode`、`magit/magit`）
- **エッジAI向けハードウェア**: google-coral/coralnpuはRISC-VベースのオープンソースML推論アクセラレータIPで、ウェアラブル向け超低消費電力SoCを対象とし9スターを獲得。言語分類はEmacs Lispだが内容はハードウェアプロジェクトであり、一覧の中で異色の存在。（`google-coral/coralnpu`）

### 補足的な観察

- スター獲得数の上位はdoomemacs/core（28）、xenodium/agent-shell（18）、dakra/ghostel（16）の順で、いずれもEmacs環境の拡張・強化に関わるプロジェクト
- 言語分布は全8件ともEmacs Lispだが、coralnpuは実態がハードウェアIPであり分類上のノイズと考えられる
- emacs-mirror/emacs（GNU Emacs本体のミラー、6スター）やmagit（5スター）など成熟した定番プロジェクトも安定的にスターを集めている
- ACP対応エージェントやlibghosttyなど外部プロトコル・ライブラリと連携する新規プロジェクトが台頭している

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 8 |

## Repository一覧

### 1. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> A native Emacs buffer to interact with LLM agents powered by ACP

- Language: Emacs Lisp
- Stars: 1,937
- Forks: 246
- Stars in 1週間: 18
- Category: Emacs向けAIエージェントクライアント
- Keywords: `Emacs` `ACP` `LLMエージェント` `Claude` `Emacs Lisp` `MELPA`
- Summary source: README

#### README要約

- Emacs上でACP（Agent Client Protocol）対応のLLMエージェントと対話するためのネイティブシェルバッファを提供するパッケージ。
- acp.elを介してACP通信を行い、Claude Agent、Codex、Gemini CLI、Gooseなど多数のACP対応エージェントと接続できる。
- Emacs内でAIコーディングエージェントを活用したい開発者向けで、サイドバー、通知、セッション管理などの拡張パッケージ群も用意されている。
- MELPAからインストール可能で、利用には各エージェントのACPアダプタ（例: claude-agent-acpをnpmでグローバルインストール）など外部依存のセットアップが必要。

---

### 2. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,240
- Forks: 881
- Stars in 1週間: 5
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `porcelain` `バージョン管理` `Emacs Lisp` `インターフェース`
- Summary source: README

#### README要約

- MagitはEmacsパッケージとして実装されたGitバージョン管理システムのインターフェースです。
- 完全なGit porcelainを目指しており、経験豊富なGitユーザーでも日常のバージョン管理作業のほぼ全てをEmacs内から直接実行できます。
- EmacsユーザーがGitクライアントとして利用するもので、他のGitインターフェースとは大きく異なる操作性を持ちます。
- MELPAやNonGNU ELPAからインストール可能で、初心者向けの視覚的なウォークスルーや動画、マニュアルが用意されています。

---

### 3. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,591
- Forks: 344
- Stars in 1週間: 9
- Category: ハードウェアアクセラレータ
- Keywords: `NPU` `RISC-V` `ML推論` `エッジAI` `オープンソースIP` `ウェアラブル`
- Summary source: README

#### README要約

- Coral NPUはGoogle Researchが設計したオープンソースのML推論用ハードウェアアクセラレータIPです。
- 32ビットRISC-V ISAを基盤に、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作します。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブルデバイス向け超低消費電力SoCへの統合を対象としています。
- ビルドにはBazel 8.6.0とPython 3.9〜3.13が必要で、CocotbやUVMによる検証環境とシミュレータが提供されています。

---

### 4. [syl20bnr/spacemacs](https://github.com/syl20bnr/spacemacs)

> A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

- Language: Emacs Lisp
- Stars: 24,540
- Forks: 4,826
- Stars in 1週間: 5
- Category: エディタ設定・ディストリビューション
- Keywords: `Emacs` `Vim` `キーバインド` `設定レイヤー` `Evil` `エルゴノミクス`
- Summary source: README

#### README要約

- コミュニティ主導のEmacsディストリビューションで、人間工学・記憶しやすさ・一貫性に重点を置いた洗練された設定環境を提供する。
- スペースキーで対話的なキーバインド一覧を探索でき、ニーモニックなプレフィックス（SPC bでバッファ操作など）や設定レイヤーで整理された多数のパッケージを備える。
- EmacsとVimの両方のユーザーが自然に使え、編集スタイルを混在・切替できるためペアプログラミングにも適している。
- Emacs 28.2以上、Git、GNU Tarが必須で、既存設定がなければgit cloneで~/.emacs.dに導入可能。現在ベータ版でXEmacsは非対応。

---

### 5. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,125
- Forks: 981
- Stars in 1週間: 3
- Category: 開発ツール
- Keywords: `Emacs` `LSP` `Language Server Protocol` `IDE` `コード補完` `開発環境`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol（LSP）クライアント/ライブラリで、IDEのような開発体験を提供する。
- LSP v3.14の全機能をサポートし、非同期処理、リアルタイム診断、コード補完、ナビゲーションなどを提供する。
- company、flycheck、projectileなどの人気Emacsパッケージと統合し、多様な言語サーバーに対応する。
- 追加パッケージの有無に応じて自動的に設定が調整され、最小限の設定で動作する。

---

### 6. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,735
- Forks: 3,146
- Stars in 1週間: 28
- Category: Emacs設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、起動・実行速度を重視し、バニラEmacsに近い構成を目指したGNU Emacs向けの設定フレームワークです。
- straight.elベースの宣言的パッケージ管理、約150のオプションモジュール、evil-modeによるVimエミュレーション、LSP統合、多くの言語・ツール対応を備えます。
- Emacs経験者やVimユーザーで、再現性のある設定と高性能な環境を求める開発者を主な対象としています。
- 導入にはGNU Emacs 27.1〜31.1、Git 2.23以上、ripgrep 11.0以上が必要で、git clone後にdoom installを実行します。

---

### 7. [dakra/ghostel](https://github.com/dakra/ghostel)

> Terminal emulator powered by libghostty

- Language: Emacs Lisp
- Stars: 989
- Forks: 60
- Stars in 1週間: 16
- Category: Emacsターミナルエミュレータ
- Keywords: `Emacs` `ターミナル` `libghostty` `Kittyグラフィックス` `シェル統合` `MELPA`
- Summary source: README

#### README要約

- Ghostelは、Ghostty端末のVTエンジンであるlibghostty-vtを搭載したEmacs用ターミナルエミュレータです。
- 同期出力、トゥルーカラー、Kittyキーボード・グラフィックスプロトコル、ハイパーリンク、デスクトップ通知などをサポートし、bash/zsh/fish/nushellのシェル統合が標準で動作します。
- Emacs上で高機能なターミナルを使いたいユーザー向けで、eshell、compile、comint、Org、consult、evilとの連携拡張も提供されます。
- Emacs 28.1以上とダイナミックモジュール対応が必要で、MELPAからインストール可能、ネイティブモジュールは初回使用時に自動ダウンロードされます。

---

### 8. [emacs-mirror/emacs](https://github.com/emacs-mirror/emacs)

> Mirror of GNU Emacs

- Language: Emacs Lisp
- Stars: 5,218
- Forks: 1,409
- Stars in 1週間: 6
- Category: テキストエディタ
- Keywords: `GNU Emacs` `Emacs Lisp` `テキストエディタ` `拡張可能` `カスタマイズ可能` `GPLv3`
- Summary source: README

#### README要約

- GNU Emacsバージョン32.0.50のソースツリーを保持する、拡張可能でカスタマイズ可能な自己文書化リアルタイム表示エディタです。
- C言語によるコア（Lispインタプリタ、再表示コード）とEmacs Lispによる大部分の機能で構成され、多言語入力メソッドやAndroid対応も含みます。
- 高度なカスタマイズ性を求める開発者やパワーユーザー向けで、テキスト編集、プログラミング、メール処理など多岐にわたる用途に対応します。
- ビルドにはINSTALLファイルを参照し、configureスクリプトとmakeを使用します。非Posix環境では追加ツールが必要で、バグ報告はM-x report-emacs-bugで行います。

---
