+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/09/19'
date = 2026-09-19T22:44:03.889Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月19日 22:44:03
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 8
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacs Lisp製リポジトリが一覧を独占し、AI連携ツールと老舗の設定フレームワーク・基盤パッケージが同居する構図が見られる。

- 一覧の8件すべてがEmacs Lispで記述されており、Emacsエコシステムへの関心の集中がうかがえる。
- xenodium/agent-shellやkarthink/gptelなど、LLMやAIエージェントをEmacsから利用するツールが複数ランクインしている。
- doomemacs/core（26スター）やsyl20bnr/spacemacsといった設定フレームワーク系が依然として支持を集めている。
- google-coral/coralnpuは言語表記こそEmacs Lispだが、実態はエッジAI向けNPUハードウェアIPという異色の存在である。
- emacs-lsp/lsp-modeやmagit/magitなど、開発基盤を支える定番パッケージも堅調にスターを獲得している。

### 主なテーマ

- **Emacs内でのAI・LLM活用**: xenodium/agent-shellはACP経由でClaude AgentやCodex、Gemini CLIなど多数のエージェントと連携でき、karthink/gptelはMCP連携やマルチモーダル入力に対応するLLMクライアント。Emacsを離れずにAI支援を受けたい需要の高まりがうかがえる。（`xenodium/agent-shell`、`karthink/gptel`）
- **Emacs設定フレームワークの継続的人気**: doomemacs/coreが期間中26スターで一覧最多を記録し、straight.elによる宣言的パッケージ管理やevil-modeによるVimエミュレーションを提供。syl20bnr/spacemacsもVimとEmacsの融合を掲げており、両者ともVimからの移行層を意識した設計が共通している。（`doomemacs/core`、`syl20bnr/spacemacs`）
- **開発基盤を支える定番パッケージ**: emacs-lsp/lsp-modeはLSP v3.14の全機能をサポートするIDE基盤、magit/magitはEmacs内でGit操作を完結させるporcelainとして、いずれも長く使われる基盤ツールが安定的にスターを集めている。（`emacs-lsp/lsp-mode`、`magit/magit`）
- **エッジAI向けハードウェアのオープンソース化**: google-coral/coralnpuはGoogle Research設計のオープンソースML推論アクセラレータIPで、RISC-Vベースの3プロセッサ構成によりウェアラブル向け超低消費電力SoCを対象とする。言語表記はEmacs Lispだが内容はハードウェアIPという異色のランクインである。（`google-coral/coralnpu`）

### 補足的な観察

- 期間中スター数はdoomemacs/coreの26が最多で、google-coral/coralnpuの20、xenodium/agent-shellの19が続く。
- emacs-lsp/lsp-modeとsyl20bnr/spacemacsは各1スターにとどまり、老舗プロジェクトでも伸びには差がある。
- 言語分布はEmacs Lisp一色だが、coralnpuのように実態と表記が一致しないケースが含まれており、言語メタデータの解釈には注意が必要である。
- emacs-mirror/emacs（11スター）のランクインは、本体ソースへの関心がミラーリポジトリ経由で表れていることを示唆している。

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 8 |

## Repository一覧

### 1. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,688
- Forks: 3,145
- Stars in 1週間: 26
- Category: Emacs設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、GNU Emacs向けの設定フレームワークで、高速な起動と実行時パフォーマンスを重視し、バニラEmacsに近い構成を目指しています。
- straight.elによる宣言的パッケージ管理、約150のオプションモジュール、evil-modeによるVimエミュレーション、LSP統合、多くの言語やツールのサポートを提供します。
- Emacsのパッケージ管理に安定性と再現性を求めるユーザーや、Vimから移行したいユーザー、自分の設定の基盤やEmacs学習の素材を求める愛好家が対象です。
- GNU Emacs 27.1〜31.1、Git 2.23以上、ripgrep 11.0以上が必須で、git clone後にdoom installを実行して導入します。doom doctorで不足依存を確認できます。

---

### 2. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> A native Emacs buffer to interact with LLM agents powered by ACP

- Language: Emacs Lisp
- Stars: 1,865
- Forks: 235
- Stars in 1週間: 19
- Category: Emacs向けAIエージェントクライアント
- Keywords: `Emacs` `ACP` `LLMエージェント` `Claude` `Codex` `Gemini CLI`
- Summary source: README

#### README要約

- Emacs上でACP（Agent Client Protocol）対応のLLMエージェントと対話するためのネイティブシェルバッファを提供するパッケージ。
- acp.elを介してACP通信を行い、Claude Agent、Codex、Gemini CLI、Goose、Grok Build、Cursorなど多数のエージェントと連携できる。
- Emacs内でAIコーディングエージェントを活用したい開発者向けで、サイドバー、通知、セッション管理など豊富な拡張パッケージ群が存在する。
- MELPAからインストール可能で、利用には各エージェントのACPアダプタ（例：claude-agent-acp）をnpmでグローバルインストールしPATHに通す必要がある。

---

### 3. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,569
- Forks: 336
- Stars in 1週間: 20
- Category: AIアクセラレータ
- Keywords: `NPU` `RISC-V` `ML推論` `エッジAI` `オープンソースIP` `ウェアラブル`
- Summary source: README

#### README要約

- Coral NPUはGoogle Researchが設計したオープンソースのML推論用ハードウェアアクセラレータIPである。
- 32ビットRISC-V ISAを基盤に、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作する。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブルデバイス向け超低消費電力SoCへの統合を対象としている。
- ビルドにはBazel 8.6.0とPython 3.9〜3.13が必要で、CocotbやUVMによる検証環境が用意されている。

---

### 4. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,123
- Forks: 981
- Stars in 1週間: 1
- Category: 開発ツール
- Keywords: `Emacs` `LSP` `IDE` `言語サーバー` `コード補完` `開発環境`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol (LSP) クライアント/ライブラリで、IDEのような開発体験を提供する。
- LSP v3.14の全機能をサポートし、非同期呼び出し、リアルタイム診断、コード補完、ナビゲーションなどを提供する。
- Emacsユーザーで、複数言語での開発にIDE機能を求める人向け。companyやflycheckなどの人気パッケージと統合可能。
- 追加パッケージがあると自動的にアップグレードされ、すぐに使える設定が可能。詳細は公式ドキュメントを参照。

---

### 5. [syl20bnr/spacemacs](https://github.com/syl20bnr/spacemacs)

> A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

- Language: Emacs Lisp
- Stars: 24,559
- Forks: 4,831
- Stars in 1週間: 1
- Category: テキストエディタ設定
- Keywords: `Emacs` `Vim` `エディタ` `ディストリビューション` `キーバインド` `設定レイヤー`
- Summary source: README

#### README要約

- Spacemacsは、人間工学、記憶しやすさ、一貫性に重点を置いた、洗練されたEmacsのディストリビューションです。
- スペースキーでアクセスできるニーモニックなキーバインド、設定レイヤーによるパッケージ管理、美しいGUI、充実したドキュメントが特徴です。
- EmacsとVimの両方の編集スタイルを自然に使い分けたり混ぜたりできるため、両方のユーザーやペアプログラミングに適しています。
- Emacs 28.2以上、Git、GNU Tarが必要です。既存のEmacs設定がない場合はgit cloneで導入できますが、現在ベータ版です。

---

### 6. [emacs-mirror/emacs](https://github.com/emacs-mirror/emacs)

> Mirror of GNU Emacs

- Language: Emacs Lisp
- Stars: 5,203
- Forks: 1,404
- Stars in 1週間: 11
- Category: テキストエディタ
- Keywords: `GNU Emacs` `Emacs Lisp` `テキストエディタ` `オープンソース` `GPL` `カスタマイズ可能`
- Summary source: README

#### README要約

- GNU Emacsの公式ミラーリポジトリで、拡張可能でカスタマイズ可能な自己文書化リアルタイム表示エディタのソースコードを管理している。
- C言語によるコア（Lispインタプリタ、再表示コード）とEmacs Lispによる大部分の機能で構成され、Autoconfによるビルドシステムを採用している。
- Emacs開発者やコントリビューター、およびソースからビルドして利用するユーザー向けで、国際化入力メソッドや各種プラットフォーム（Android、Windows、macOS）にも対応している。
- ビルドにはINSTALLファイルを参照し、バグ報告はM-x report-emacs-bugまたはメーリングリストへ送信する。ライセンスはGPLv3以降である。

---

### 7. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,533
- Forks: 434
- Stars in 1週間: 9
- Category: Emacs LLMクライアント
- Keywords: `Emacs` `LLM` `AIチャット` `MCP` `マルチモーダル` `拡張可能`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルで拡張可能なLLMチャットクライアントで、複数のモデルやバックエンドに対応している。
- 任意のバッファやミニバッファからLLMと対話でき、応答はMarkdownやOrg形式で挿入され、ツール使用やMCP連携、マルチモーダル入力もサポートする。
- Emacsユーザーがコーディングや文章作成、リファクタリングなどの作業中に、エディタを離れずにLLMの支援を受ける用途に適している。
- M-x package-installでgptelをインストール可能だが、Transient 0.7.8以上が必要で、Curlが利用できない場合は組み込みのurl-retrieveにフォールバックする。

---

### 8. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,229
- Forks: 881
- Stars in 1週間: 6
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `バージョン管理` `porcelain` `Emacs Lisp` `インターフェース`
- Summary source: README

#### README要約

- MagitはEmacsパッケージとして実装されたGitバージョン管理システムのインターフェースです。
- 完全なGit porcelainを目指しており、経験豊富なGitユーザーでも日常のバージョン管理タスクのほぼ全てをEmacs内から直接実行できます。
- EmacsユーザーがGit操作を効率的に行うためのツールで、他のGitクライアントとは大きく異なるアプローチを採用しています。
- MELPA、NonGNU ELPAなどからインストール可能で、初心者向けの視覚的なウォークスルーやビデオ紹介が用意されています。

---
