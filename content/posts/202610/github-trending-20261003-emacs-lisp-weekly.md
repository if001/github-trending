+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/10/03'
date = 2026-10-03T23:34:31.025Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月3日 23:34:31
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 7
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> EmacsエコシステムがAI統合と開発効率化の両面で活発化し、LLMクライアントやエージェント連携が注目を集めている

- Emacs Lisp製のリポジトリが全7件を占め、Emacsエコシステムへの関心が一貫して高い
- LLMクライアント（gptel）やACP対応エージェントシェル（agent-shell）など、AI統合ツールが複数ランクイン
- Doom Emacsやlsp-mode、Magitなど、開発環境の基盤となる定番ツールも継続的に支持されている
- Google Coral NPUのようにEmacs Lisp以外の言語を含むリポジトリも登場し、エッジAIへの関心の広がりを示唆

### 主なテーマ

- **Emacs向けAI統合ツールの台頭**: karthink/gptel（7スター）とxenodium/agent-shell（26スター）がランクインし、Emacs上でLLMやAIエージェントを直接利用するニーズが高まっている。gptelはマルチモーダル対応やMCP統合を提供し、agent-shellはACPプロトコル経由でClaudeやGemini CLIなど複数のエージェントを統一的に扱える点が特徴。（`karthink/gptel`、`xenodium/agent-shell`）
- **Emacs設定フレームワークとパッケージ管理の成熟**: doomemacs/core（22スター）が高速起動とモジュール式設計で支持され、melpa/melpa（3スター）がパッケージリポジトリの基盤として機能している。これらはEmacsのカスタマイズ性と拡張性を支えるインフラとして、コミュニティの中核を形成している。（`doomemacs/core`、`melpa/melpa`）
- **開発効率化を支える定番Emacsツール**: emacs-lsp/lsp-mode（3スター）とmagit/magit（6スター）がランクインし、LSPによるIDE機能とGit操作のEmacs統合が依然として重要視されている。これらは言語サーバープロトコルやバージョン管理をEmacs内で完結させることで、開発者の生産性を向上させる。（`emacs-lsp/lsp-mode`、`magit/magit`）
- **エッジAIとハードウェアアクセラレータへの関心**: google-coral/coralnpu（8スター）がEmacs Lisp以外の言語（RISC-Vベースのハードウェア記述）でランクインし、エネルギー効率の高いエッジAI推論への注目が示されている。ウェアラブルデバイス向けNPU設計というニッチな領域ながら、オープンソースハードウェアとしての注目度がうかがえる。（`google-coral/coralnpu`）

### 補足的な観察

- 言語分布はEmacs Lispが6件、RISC-V関連が1件で、Emacsエコシステムが圧倒的に dominant
- スター獲得数はagent-shell（26）とdoomemacs/core（22）が突出しており、AI統合と設定フレームワークへの関心の高さが数値に表れている
- MELPA関連のリポジトリ（melpa/melpa、agent-shell、gptel）が複数含まれ、パッケージ配布基盤としてのMELPAの重要性が再確認される
- google-coral/coralnpuは言語欄がEmacs Lispとなっているが、実際はハードウェア記述言語（SystemVerilog等）が主体と推測され、分類の特殊性が見られる

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 7 |

## Repository一覧

### 1. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,720
- Forks: 3,144
- Stars in 1週間: 22
- Category: Emacs設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、起動・実行速度を重視したGNU Emacs向けの設定フレームワークです。
- straight.elベースの宣言的パッケージ管理、モジュール構造、evil-modeによるVimエミュレーション、LSP統合などを提供します。
- Vim経験者やEmacs愛好家など、自分好みにカスタマイズ可能な高速な設定基盤を求めるユーザーに適しています。
- GNU Emacs 27.1〜31.1、Git 2.23以上、ripgrep 11.0以上が必要で、git clone後にdoom installで導入します。

---

### 2. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,543
- Forks: 440
- Stars in 1週間: 7
- Category: Emacs拡張機能
- Keywords: `Emacs` `LLMクライアント` `AIチャット` `マルチモーダル` `MCP` `ツール使用`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルで拡張可能なLLMチャットクライアントで、複数のモデルとバックエンドをサポートします。
- 任意のバッファからLLMと対話でき、ツール使用、MCP統合、マルチモーダル入力、推論コンテンツの処理などの機能を備えています。
- Emacsユーザーがコーディング、文章作成、リサーチなどの作業中にAIアシスタンスをシームレスに利用するのに適しています。
- M-x package-installでインストール可能ですが、Transient 0.7.8以上が必要で、Curlが利用可能な場合はそれを使用し、なければ組み込みのurl-retrieveにフォールバックします。

---

### 3. [melpa/melpa](https://github.com/melpa/melpa)

> Recipes and build machinery for the biggest Emacs package repo

- Language: Emacs Lisp
- Stars: 2,974
- Forks: 2,825
- Stars in 1週間: 3
- Category: パッケージリポジトリ
- Keywords: `Emacs` `package.el` `パッケージ管理` `レシピ` `自動ビルド` `Emacs Lisp`
- Summary source: README

#### README要約

- MELPAはpackage.el互換のEmacs Lispパッケージを集めた大規模なパッケージリポジトリである。
- サーバー上でレシピに基づき上流ソースから自動ビルドされ、1日を通じて定期的に更新される。
- Emacs 24.1以降のユーザーがpackage-archivesに追加して利用し、開発者はレシピをプルリクエストで投稿できる。
- init.elにリポジトリURLを設定して有効化し、最新版のほかタグ付き安定版を提供するMELPA Stableも選択可能。

---

### 4. [google-coral/coralnpu](https://github.com/google-coral/coralnpu)

> A machine learning accelerator core designed for energy-efficient AI at the edge.

- Language: Emacs Lisp
- Stars: 2,585
- Forks: 340
- Stars in 1週間: 8
- Category: AIアクセラレータ
- Keywords: `NPU` `RISC-V` `機械学習推論` `エッジAI` `オープンソース` `ウェアラブル`
- Summary source: README

#### README要約

- Coral NPUは、Google Researchが設計したオープンソースの機械学習推論用ハードウェアアクセラレータIPです。
- 32ビットRISC-Vアーキテクチャを基盤とし、行列・ベクトル（SIMD）・スカラーの3つのプロセッサコンポーネントが連携して動作します。
- ヒアラブル、ARグラス、スマートウォッチなどのウェアラブルデバイス向け超低電力SoCへの統合を対象としています。
- Bazel 8.6.0とPython 3.9-3.13が必要で、CocotbやUVMによる検証環境が用意されています。

---

### 5. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> A native Emacs buffer to interact with LLM agents powered by ACP

- Language: Emacs Lisp
- Stars: 1,921
- Forks: 241
- Stars in 1週間: 26
- Category: Emacs向けLLMエージェントクライアント
- Keywords: `Emacs` `ACP` `LLMエージェント` `Claude` `acp.el` `MELPA`
- Summary source: README

#### README要約

- ACP（Agent Client Protocol）対応のLLMエージェントと対話するためのネイティブEmacsシェル。
- acp.elを介してACPで通信し、Claude Agent、Codex、Gemini CLI、Gooseなど多数のエージェントを統一的に利用できる。
- Emacs上でAIコーディングエージェントを使いたい開発者向けで、サイドバーや通知など豊富な拡張パッケージ群も存在する。
- MELPAからインストール可能だが、各エージェント用のACPアダプタ（例: claude-agent-acp）を別途npm等でインストールする必要がある。

---

### 6. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,124
- Forks: 983
- Stars in 1週間: 3
- Category: Emacs向けLSPクライアント
- Keywords: `Emacs` `Language Server Protocol` `LSP` `IDE` `コード補完` `Emacs Lisp`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol (LSP) v3.14クライアントで、IDEのような開発体験を提供する。
- 非同期呼び出し、リアルタイム診断、コード補完、ナビゲーション、フォーマットなどをcompanyやflycheck等の人気パッケージと連携して実現する。
- 複数言語でIDE機能を使いたいEmacsユーザー向けで、フル機能のIDEからミニマルな構成まで柔軟に選択できる。
- 追加パッケージがあれば自動でアップグレードし設定不要で動作するが、company-lspはサポート終了、flymakeはEmacs 26以降が必要。

---

### 7. [magit/magit](https://github.com/magit/magit)

> It's Magit! A Git Porcelain inside Emacs.

- Language: Emacs Lisp
- Stars: 7,236
- Forks: 883
- Stars in 1週間: 6
- Category: Gitクライアント
- Keywords: `Emacs` `Git` `バージョン管理` `porcelain` `Emacs Lisp` `インターフェース`
- Summary source: README

#### README要約

- MagitはEmacsパッケージとして実装されたGitバージョン管理システムのインターフェースです。
- 完全なGit porcelainを目指しており、経験豊富なGitユーザーでも日常のバージョン管理作業のほぼ全てをEmacs内から直接実行できます。
- EmacsユーザーがGit操作を効率的に行うためのツールで、他のGitクライアントとは大きく異なるアプローチを採用しています。
- MELPA、NonGNU ELPAなどからインストール可能で、初心者向けの視覚的なウォークスルーやビデオ紹介などの学習リソースが提供されています。

---
