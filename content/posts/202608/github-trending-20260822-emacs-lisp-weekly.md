+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/08/22'
date = 2026-08-22T21:23:30.293Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年8月22日 21:23:30
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 7
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> EmacsエコシステムにおけるAI統合と開発ツールの進化が顕著な傾向

- Emacs Lispが言語分布の大部分を占め、Emacs関連プロジェクトがランキングを席巻している
- LLMクライアントやAIエージェントなど、Emacs上でのAI活用ツールが複数登場している
- GitクライアントやLSPクライアントなど、開発者向けの生産性向上ツールが引き続き注目されている
- Google Coral NPUのようなハードウェアプロジェクトもEmacs Lispで記述され、エッジAIの多様性を示している

### 主なテーマ

- **Emacs向けAI統合ツール**: LLMクライアントやAIエージェントシェルなど、Emacs上でAIを活用するためのツールが複数ランクインしており、EmacsユーザーがシームレスにAI機能を利用できる環境が整いつつあることを示している。（`karthink/gptel`、`xenodium/agent-shell`）
- **Emacsコアとパッケージエコシステム**: GNU Emacs本体やMELPAパッケージリポジトリがランクインしており、Emacsの基盤となるコアとパッケージ管理システムが依然として活発に開発・利用されていることを反映している。（`emacs-mirror/emacs`、`melpa/melpa`）
- **開発者向け生産性ツール**: GitクライアントのMagitやLSPクライアントのlsp-modeなど、Emacs上での開発作業を効率化するツールが注目されており、Emacsが現代的な開発環境として機能していることを示している。（`magit/magit`、`emacs-lsp/lsp-mode`）
- **エッジAIハードウェア**: Google Coral NPUがEmacs Lispで記述されたプロジェクトとしてランクインしており、エネルギー効率の高いエッジAIアクセラレータの設計にEmacs Lispが活用されている点が注目される。（`google-coral/coralnpu`）

### 補足的な観察

- 言語分布ではEmacs Lispが全7リポジトリ中6件を占め、圧倒的な優位性を示している
- starsDuringPeriodではxenodium/agent-shellが26で最も高く、AIエージェント関連の注目度が高い
- Emacs関連プロジェクトがランキングの大部分を占め、特定のエコシステムに集中した傾向が見られる
- Google Coral NPUのようなハードウェアプロジェクトがEmacs Lispで記述されている点は、言語の多様な用途を示唆している

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 7 |

## Repository一覧

### 1. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,495
- Forks: 425
- Stars in 1週間: 19
- Category: Emacs向けLLMクライアント
- Keywords: `Emacs` `LLM` `チャットクライアント` `マルチモーダル` `MCP` `拡張可能`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルかつ拡張可能なLLMチャットクライアントで、複数のモデルやバックエンドに対応している。
- 任意のバッファからLLMと対話でき、応答はMarkdownやOrg形式で挿入され、ツール使用やMCP連携、マルチモーダル入力もサポートする。
- Emacsユーザーがコーディング、文章作成、リファクタリングなどの作業中にシームレスにLLMを活用する用途に適している。
- インストールはMELPAやNonGNU ELPAから可能で、Transient 0.7.8以上が必要。Curlが利用可能な場合はそれを使用し、なければ組み込みのurl-retrieveで動作する。

---

### 2. [emacs-mirror/emacs](https://github.com/emacs-mirror/emacs)

> Mirror of GNU Emacs

- Language: Emacs Lisp
- Stars: 5,169
- Forks: 1,397
- Stars in 1週間: 21
- Category: テキストエディタ
- Keywords: `GNU Emacs` `Emacs Lisp` `テキストエディタ` `拡張可能` `カスタマイズ可能` `GPL`
- Summary source: README

#### README要約

- GNU Emacsバージョン32.0.50のソースツリーで、拡張可能でカスタマイズ可能な自己文書化リアルタイムディスプレイエディタです。
- C言語によるコア（src）とEmacs Lispによる機能実装（lisp）で構成され、多言語入力メソッド（leim）や各種ユーティリティ、ドキュメントを含みます。
- Emacsユーザー、開発者、貢献者を対象とし、テキスト編集、カスタマイズ、プログラミング、国際化対応などの用途に利用されます。
- ビルドにはINSTALLファイルを参照し、configureスクリプトとmakeを使用します。非Posix環境では追加ツールが必要で、バグ報告はM-x report-emacs-bugまたはメーリングリストへ送信します。

---

### 3. [melpa/melpa](https://github.com/melpa/melpa)

> Recipes and build machinery for the biggest Emacs package repo

- Language: Emacs Lisp
- Stars: 2,965
- Forks: 2,801
- Stars in 1週間: 1
- Category: パッケージリポジトリ
- Keywords: `Emacs` `package.el` `レシピ` `自動ビルド` `MELPA Stable` `パッケージ管理`
- Summary source: README

#### README要約

- MELPAはpackage.el互換のEmacs Lispパッケージを集めた大規模リポジトリで、レシピとビルド機構を提供する。
- シンプルなレシピに基づきサーバー側で上流ソースから自動ビルドし、1日に複数回パッケージを更新する。
- Emacs 24.1以降のユーザーがpackage-archivesにMELPAを追加してパッケージを閲覧・インストールする用途に向く。
- 利用にはpackage.elの設定が必要で、安定版は別アーカイブのMELPA Stableとして提供されるがメンテナは非推奨としている。

---

### 4. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> A native Emacs buffer to interact with LLM agents powered by ACP

- Language: Emacs Lisp
- Stars: 1,760
- Forks: 220
- Stars in 1週間: 26
- Category: Emacs向けAIエージェントクライアント
- Keywords: `Emacs` `ACP` `LLMエージェント` `Claude` `Codex` `Gemini CLI`
- Summary source: README

#### README要約

- ACP（Agent Client Protocol）対応のLLMエージェントと対話するためのEmacsネイティブシェル。
- acp.elを介してACP通信を行い、Claude Agent、Codex、Gemini CLI、Goose、Grok Buildなど多数のエージェントと接続できる。
- Emacs上でAIコーディングエージェントを統一的に操作したいユーザー向けで、サイドバーや通知など拡張パッケージも豊富。
- MELPAからインストール可能だが、各エージェント用のACPアダプタを別途npm等でインストールしPATHに配置する必要がある。

---

### 5. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,209
- Forks: 878
- Stars in 1週間: 10
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `porcelain` `バージョン管理` `Emacs Lisp` `インターフェース`
- Summary source: README

#### README要約

- MagitはEmacsパッケージとして実装されたGitバージョン管理システムのインターフェースです。
- 完全なGit porcelainを目指しており、経験豊富なGitユーザーでも日常のバージョン管理タスクのほぼ全てをEmacs内から直接実行できます。
- EmacsユーザーでGitを使う開発者が対象で、他のGitクライアントとは異なる操作性を持ち、キー操作で様々なアクションを実行できます。
- 初心者向けの視覚的なウォークスルーやビデオ紹介が用意されており、MELPAやNonGNU ELPAからインストール可能です。

---

### 6. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,115
- Forks: 978
- Stars in 1週間: 5
- Category: Emacs LSPクライアント
- Keywords: `Emacs` `LSP` `Language Server Protocol` `IDE` `コード補完` `Emacs Lisp`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol（LSP）クライアント/ライブラリで、複数言語に対応する。
- LSP v3.14の全機能をサポートし、非同期呼び出し、診断、補完、コードアクション、ナビゲーションなどを提供する。
- IDE的な開発体験を求めるEmacsユーザー向けで、companyやflycheckなどの人気パッケージと連携可能。
- 追加パッケージがあれば自動でアップグレードし、フル機能IDEから最小限の構成まで柔軟に選択できる。

---

### 7. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,519
- Forks: 323
- Stars in 1週間: 12
- Category: AIアクセラレータIP
- Keywords: `NPU` `RISC-V` `ML推論` `エッジAI` `オープンソース` `SoC`
- Summary source: README

#### README要約

- Coral NPUは、Google Researchが設計したオープンソースのML推論用ハードウェアアクセラレータIPです。
- 32ビットRISC-V ISAをベースに、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作します。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブルデバイス向け超低電力SoCへの統合を対象としています。
- 利用にはBazel 7.4.1、Python 3.9〜3.12、SRecordが必要で、Bazelコマンドでテストやシミュレータ上でのバイナリ実行が可能です。

---
