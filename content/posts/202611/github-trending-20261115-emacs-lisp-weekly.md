+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/11/15'
date = 2026-11-15T00:50:37.775Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年11月15日 0:50:37
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 6
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacs Lisp製リポジトリがランキングを独占し、エディタ基盤からAI連携までEmacsエコシステムの多様な層が注目を集めている

- 一覧の6件すべてがEmacs Lispを言語としており、Emacs関連プロジェクトがトレンドを完全に占有している
- エディタ本体（emacs-mirror/emacs）や設定フレームワーク（doomemacs/core）といった基盤層から、ターミナルエミュレータ（dakra/ghostel）やAIエージェント連携（xenodium/agent-shell）といった拡張層まで幅広い
- AI関連では、エディタ内でAIエージェントを使うagent-shellと、エッジAI向けハードウェアIPのgoogle-coral/coralnpuという異なるアプローチが並存している
- Google関連が2件（google/styleguide、google-coral/coralnpu）入っており、大企業発のオープンソースも一定の存在感を示している

### 主なテーマ

- **Emacsエコシステムの基盤・フレームワーク**: GNU Emacs本体のミラー（emacs-mirror/emacs）と、高速起動や宣言的パッケージ管理を重視した設定フレームワークDoom Emacs（doomemacs/core）がランクインしており、Emacsの中核基盤への関心が根強いことを示している（`emacs-mirror/emacs`、`doomemacs/core`）
- **Emacs内での開発環境強化**: libghosttyベースの高機能ターミナルエミュレータghostel（dakra/ghostel）と、ACP経由でClaudeやCodexなど24種のAIエージェントをEmacs内で操作できるagent-shell（xenodium/agent-shell）が登場し、Emacsを離れずに開発作業を完結させる流れがうかがえる（`dakra/ghostel`、`xenodium/agent-shell`）
- **Google発のオープンソースプロジェクト**: コーディング規約集のgoogle/styleguideと、RISC-VベースのエッジAI向け機械学習アクセラレータIPのgoogle-coral/coralnpuがランクインしており、ドキュメント系からハードウェアIPまでGoogleの公開資産が注目を集めている（`google/styleguide`、`google-coral/coralnpu`）

### 補足的な観察

- 言語分布はEmacs Lispが6件中6件（100%）で、単一言語による完全な独占という珍しい構成になっている
- 期間中のスター獲得数はdakra/ghostelの36が最多で、emacs-mirror/emacsの11が最少。いずれも数十件規模で、大規模なバイラルヒットというよりニッチなコミュニティ内での注目と見られる
- google-coral/coralnpuはハードウェアアクセラレータIPでありながら言語がEmacs Lispと分類されており、リポジトリ内のEmacs関連ファイルが言語判定に影響している可能性がある

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 6 |

## Repository一覧

### 1. [google/styleguide](https://github.com/google/styleguide)

> Style guides for Google-originated open-source projects

- Language: Emacs Lisp
- Stars: 39,825
- Forks: 12,923
- Stars in 1週間: 26
- Category: スタイルガイド
- Keywords: `Google` `コーディング規約` `スタイルガイド` `多言語対応` `オープンソース` `ライセンス`
- Summary source: README

#### README要約

- Google発のオープンソースプロジェクト向けに、コードの一貫した書き方を定めたスタイルガイド集を提供するリポジトリ。
- C++、Java、Python、Go、JavaScriptなど多数の言語別ガイドへのリンクを集約し、エディタ設定ファイルやコミットメッセージの指針も紹介している。
- Google由来のプロジェクトを修正する開発者が、適用されるスタイルガイドを確認するために参照することを想定している。
- 外部からの貢献は受け付けておらず、変更は社内ガイドが先に更新されてから反映される。ドキュメントはCC-By 3.0、コードサンプルはApache 2.0でライセンスされる。

---

### 2. [dakra/ghostel](https://github.com/dakra/ghostel)

> Terminal emulator powered by libghostty

- Language: Emacs Lisp
- Stars: 1,155
- Forks: 78
- Stars in 1週間: 36
- Category: ターミナルエミュレータ
- Keywords: `Emacs` `libghostty` `ターミナル` `シェル統合` `Kittyプロトコル` `MELPA`
- Summary source: README

#### README要約

- Ghostelは、Ghostty端末のVTエンジンであるlibghostty-vtを基盤としたEmacs用ターミナルエミュレータです。
- 同期出力、トゥルーカラー、Kittyキーボード・グラフィックスプロトコル、ハイパーリンク、デスクトップ通知、進捗レポートなどをサポートします。
- bash、zsh、fish、nushellのシェル統合（ディレクトリ追跡、プロンプトナビゲーション）が標準で動作し、eshell、compile、comint、orgなどとの連携拡張も同梱されています。
- Emacs 28.1以降で動的モジュールサポートが必要で、MELPAからインストール可能。初回使用時にプリビルトのネイティブモジュールのダウンロードを提案します。

---

### 3. [emacs-mirror/emacs](https://github.com/emacs-mirror/emacs)

> Mirror of GNU Emacs

- Language: Emacs Lisp
- Stars: 5,251
- Forks: 1,425
- Stars in 1週間: 11
- Category: テキストエディタ
- Keywords: `Emacs` `テキストエディタ` `Emacs Lisp` `拡張可能` `カスタマイズ` `GNU`
- Summary source: README

#### README要約

- GNU Emacsの公式ミラーリポジトリで、拡張可能でカスタマイズ可能な自己文書化リアルタイムディスプレイエディタのソースコードを提供する。
- C言語によるコア（Lispインタプリタ、再描画、基本編集機能）とEmacs Lispによる大部分の機能で構成され、Autoconfベースのビルドシステムを持つ。
- Emacsユーザー、開発者、貢献者を対象とし、テキスト編集、カスタマイズ、拡張機能開発、国際化対応など多様な用途に使用される。
- ビルドにはINSTALLファイルを参照し、configureスクリプトで環境に適応させる。非Posix環境では追加ツールが必要で、バグ報告はM-x report-emacs-bugで行う。

---

### 4. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,824
- Forks: 3,138
- Stars in 1週間: 25
- Category: Emacs設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、GNU Emacs向けの設定フレームワークで、起動・実行時の高速性と再現性のあるパッケージ管理を重視して設計されている。
- straight.elベースの宣言的パッケージ管理CLI、約150のオプションモジュール、evil-modeによるVimエミュレーション、LSP統合、多くの言語・ツール対応を備える。
- モダンなエディタの機能を求めるVimユーザーや、自分の設定の基盤として使いたいEmacs愛好家が主な対象。
- Emacs 27.1〜31.1、Git、ripgrepが必須で、git clone後にbin/doom installを実行して導入し、doom doctorで不足依存を確認できる。

---

### 5. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,693
- Forks: 375
- Stars in 1週間: 16
- Category: AIアクセラレータ
- Keywords: `NPU` `RISC-V` `機械学習推論` `エッジAI` `オープンソースIP` `ウェアラブル`
- Summary source: README

#### README要約

- Coral NPUはGoogle Researchが設計したオープンソースの機械学習推論用ハードウェアアクセラレータIPである。
- 32ビットRISC-V ISAを基盤とし、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作する。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブル機器向け超低電力SoCへの統合を対象としている。
- Bazel 8.6.0とPython 3.9〜3.13が必要で、CocotbやUVMによる検証環境とシミュレータでの実行手順が提供されている。

---

### 6. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> Brings your favorite AI agents to Emacs, keeping you at home: familiar buffers and bindings, no terminal emulation. Powered by ACP.

- Language: Emacs Lisp
- Stars: 2,056
- Forks: 263
- Stars in 1週間: 16
- Category: Emacs拡張
- Keywords: `Emacs` `AIエージェント` `ACP` `Claude` `Codex` `Emacs Lisp`
- Summary source: README

#### README要約

- agent-shellは、お気に入りのAIエージェントをEmacs内で利用できるようにするEmacs Lisp製パッケージです。
- ACP（Agent Client Protocol）を介してClaude Agent、Codex、Gemini CLIなど24種類のエージェントと通信し、ターミナルエミュレーションなしで使い慣れたバッファとキーバインドで操作できます。
- EmacsユーザーがAIコーディングエージェントをエディタ内で快適に利用したい場合に適しており、サイドバーや通知などの拡張パッケージも豊富です。
- MELPAからインストール可能で、利用には各エージェントの外部依存（Claude Agent SDKなど）のセットアップが必要です。

---
