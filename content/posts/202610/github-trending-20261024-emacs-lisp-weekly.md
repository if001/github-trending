+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/10/24'
date = 2026-10-24T22:57:37.450Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月24日 22:57:37
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 6
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> EmacsエコシステムにおけるAI統合とコアツールの継続的な進化

- AIエージェント統合（agent-shell）が最も高い注目を集め、Emacsを最新のAI開発ワークフローの中心に据える動きが活発化している
- LSP、Gitクライアント、エディタディストリビューションといった基盤ツールが安定した支持を維持している
- Google Coral NPUのようなハードウェアプロジェクトがEmacs Lispで記述され、エッジAIと組み込み開発の交差点が生まれている
- GNU Emacs本体の開発も継続しており、成熟したエコシステムが新規技術（AI、LSP）を取り込みながら発展している

### 主なテーマ

- **AIエージェント統合**: Emacs内で直接AIコーディングエージェントを利用するためのインフラストラクチャが注目を集めている。agent-shellはACP（Agent Client Protocol）を介してClaude、Codex、Gemini CLIなど23種類のエージェントと連携し、ターミナルエミュレーションなしに馴染みのバッファで操作可能。期間中31スターを獲得し、リスト内で最も高い成長を示している。（`xenodium/agent-shell`）
- **開発環境基盤（LSP・Git）**: 現代的なIDE機能とバージョン管理をEmacsに提供する成熟した基盤ツールが安定した支持を維持。lsp-modeはLanguage Server Protocolの完全な実装を提供し、MagitはGit porcelainとしてEmacs内での完全なバージョン管理を実現する。（`emacs-lsp/lsp-mode`、`magit/magit`）
- **エディタディストリビューションとコア**: SpacemacsはEmacsとVimの長所を組み合わせた人気のディストリビューションとして継続的に支持されており、GNU Emacs本体（バージョン32.0.50）のミラーも活発に維持されている。エディタのコアと設定フレームワークの両方が進化を続けている。（`syl20bnr/spacemacs`、`emacs-mirror/emacs`）
- **エッジAIハードウェア**: Google Coral NPUは、RISC-Vベースの機械学習アクセラレータIPをEmacs Lispで記述するという異色のプロジェクト。ウェアラブルデバイス向け超低電力SoCを対象とし、BazelやCocotbによる検証環境を備え、期間中21スターを獲得している。（`google-coral/coralnpu`）

### 補足的な観察

- 言語分布は全6リポジトリ中5つがEmacs Lispで、残り1つ（coralnpu）もハードウェア記述にEmacs Lispを使用しており、Emacs Lispが支配的
- スター獲得数はagent-shell（31）が突出しており、次いでcoralnpu（21）、emacs（15）の順で、AI関連プロジェクトへの関心の高さがうかがえる
- 成熟した定番プロジェクト（Magit、Spacemacs、lsp-mode）は安定した支持を維持しつつも、新規のAI統合プロジェクトが成長を牽引している

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 6 |

## Repository一覧

### 1. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> Brings your favorite AI agents to Emacs, keeping you at home: familiar buffers and bindings, no terminal emulation. Powered by ACP.

- Language: Emacs Lisp
- Stars: 1,990
- Forks: 251
- Stars in 1週間: 31
- Category: Emacs AIエージェント統合
- Keywords: `Emacs` `ACP` `AIエージェント` `Claude` `MELPA` `Emacs Lisp`
- Summary source: README

#### README要約

- お気に入りのAIエージェントをEmacs内で利用できるようにするパッケージで、ターミナルエミュレーションなしに馴染みのバッファとキーバインドで操作できる。
- ACP（Agent Client Protocol）を基盤とし、Claude Agent、Codex、Gemini CLI、Gooseなど23種類のエージェントおよびACP対応の任意のエージェントと連携する。
- Emacs上でAIコーディングエージェントを活用したい開発者を対象とし、サイドバー、通知、コードレビュー、セッション管理など多数の拡張パッケージが提供されている。
- MELPAからインストール可能で、利用には各エージェントの外部依存（例：Claude Agent SDK）のセットアップが必要。不具合報告時はACPトラフィックの取得が推奨される。

---

### 2. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,130
- Forks: 984
- Stars in 1週間: 5
- Category: Emacs LSPクライアント
- Keywords: `Emacs` `LSP` `Language Server Protocol` `IDE` `コード補完` `非同期`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol（LSP）クライアント/ライブラリで、複数言語に対応する。
- LSP v3.14の全機能をサポートし、非同期呼び出し、診断、補完、ナビゲーションなどを提供する。
- IDE的な体験を求めるEmacsユーザー向けで、companyやflycheckなどの人気パッケージと連携可能。
- 追加パッケージがあれば自動的にアップグレードし、すぐに使える設定が可能。

---

### 3. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,624
- Forks: 357
- Stars in 1週間: 21
- Category: AIアクセラレータ
- Keywords: `NPU` `RISC-V` `機械学習推論` `エッジAI` `オープンソース` `ウェアラブル`
- Summary source: README

#### README要約

- Coral NPUは、Google Researchが設計したオープンソースの機械学習推論用ハードウェアアクセラレータIPです。
- 32ビットRISC-Vアーキテクチャを基盤とし、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作します。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブルデバイス向け超低電力SoCへの統合を対象としています。
- Bazel 8.6.0とPython 3.9-3.13が必要で、CocotbやUVMによる検証環境が用意されています。

---

### 4. [syl20bnr/spacemacs](https://github.com/syl20bnr/spacemacs)

> A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

- Language: Emacs Lisp
- Stars: 24,547
- Forks: 4,825
- Stars in 1週間: 5
- Category: テキストエディタ設定
- Keywords: `Emacs` `Vim` `エディタ` `設定` `キーバインド` `コミュニティ`
- Summary source: README

#### README要約

- Spacemacsは、人間工学、記憶法、一貫性に重点を置いた、洗練されたEmacsのセットアップです。
- スペースバーまたはAlt-mでアクセス可能なニーモニックキーバインド、美しいGUI、設定レイヤーで整理された多数のパッケージを提供します。
- EmacsとVimの両方のユーザーが自然に使用でき、2つの編集スタイルを混在させたり、ペアプログラミングで素早く切り替えたりするのに適しています。
- 導入にはEmacs 28.2以上、Git、GNU Tarが必要で、XEmacsはサポートされていません。現在ベータ版であり、貢献を歓迎しています。

---

### 5. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,243
- Forks: 882
- Stars in 1週間: 4
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `porcelain` `バージョン管理` `Emacs Lisp` `インターフェース`
- Summary source: README

#### README要約

- MagitはEmacsパッケージとして実装されたGitバージョン管理システムのインターフェースです。
- 完全なGit porcelainを目指しており、経験豊富なGitユーザーでも日常のバージョン管理タスクのほぼ全てをEmacs内から直接実行できます。
- EmacsユーザーがGitクライアントとして利用するもので、他のGitインターフェースとは大きく異なる操作性を持ちます。
- 初心者向けに視覚的なウォークスルー記事や動画が用意されており、MELPAやNonGNU ELPAなどからインストール可能です。

---

### 6. [emacs-mirror/emacs](https://github.com/emacs-mirror/emacs)

> Mirror of GNU Emacs

- Language: Emacs Lisp
- Stars: 5,235
- Forks: 1,418
- Stars in 1週間: 15
- Category: テキストエディタ
- Keywords: `GNU Emacs` `Emacs Lisp` `テキストエディタ` `拡張可能` `カスタマイズ可能` `GPL`
- Summary source: README

#### README要約

- GNU Emacsバージョン32.0.50のソースツリーを保持する、拡張可能でカスタマイズ可能な自己文書化リアルタイムディスプレイエディタです。
- C言語によるコア（src）とEmacs Lispによる機能（lisp）で構成され、configureスクリプトとMakefileによるビルドシステムを採用しています。
- Emacsユーザー、開発者、およびGNU Emacsに貢献したいプログラマーを対象とし、テキスト編集とカスタマイズに使用されます。
- ビルドにはINSTALLファイルを参照し、非Posixプラットフォームでは追加ツールが必要です。バグ報告はbug-gnu-emacs@gnu.orgまたはM-x report-emacs-bugで行います。

---
