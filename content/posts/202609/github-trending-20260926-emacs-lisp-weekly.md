+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/09/26'
date = 2026-09-26T23:25:09.735Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月26日 23:25:09
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 6
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacsエコシステムにおいて、AIエージェント統合と開発環境の近代化が同時に進行している

- AI関連ツールが注目を集めており、LLMクライアントやエージェントシェルがランキング上位に位置する
- 従来の開発支援ツール（LSP、ターミナル、パッケージ管理）も並行して支持を得ている
- Emacs Lisp言語が全リポジトリで使用され、Emacsコミュニティ内での活発な開発がうかがえる
- ACPやMCPなどの新しいプロトコルへの対応が進み、外部AIサービスとの連携が強化されている

### 主なテーマ

- **AIエージェント・LLM統合**: Claude、Codex、Gemini CLIなどの外部AIエージェントやLLMサービスとEmacsを連携させるツールが注目されている。ACP（Agent Client Protocol）やMCPなどの新規プロトコルへの対応が進み、統一的なインターフェースでAI支援を受けられる環境が整備されている。（`xenodium/agent-shell`、`karthink/gptel`）
- **開発環境基盤の強化**: LSPによるIDE機能、高機能ターミナルエミュレータ、設定フレームワークなど、Emacsを現代的な開発環境として使うための基盤ツールが支持されている。言語サーバープロトコル対応や高速なターミナル統合により、開発体験の向上が図られている。（`emacs-lsp/lsp-mode`、`dakra/ghostel`、`doomemacs/core`）
- **パッケージエコシステム**: Emacs最大のパッケージリポジトリであるMELPAがランクインしており、パッケージ管理基盤への関心が示されている。自動ビルドシステムとレシピベースの管理により、Emacs Lispパッケージの配布とインストールが支えられている。（`melpa/melpa`）

### 補足的な観察

- 全6リポジトリがEmacs Lispで記述されており、単一言語コミュニティ内でのトレンドである
- starsDuringPeriodの範囲は0〜34と比較的小規模で、ニッチな技術領域の動向を反映している
- xenodium/agent-shellが34スターで最も注目されており、AIエージェント統合への関心の高さがうかがえる
- emacs-lsp/lsp-modeは0スターだが、既に成熟したプロジェクトとして継続的に利用されている可能性がある

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 6 |

## Repository一覧

### 1. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> A native Emacs buffer to interact with LLM agents powered by ACP

- Language: Emacs Lisp
- Stars: 1,900
- Forks: 240
- Stars in 1週間: 34
- Category: Emacs向けAIエージェントクライアント
- Keywords: `Emacs` `ACP` `LLMエージェント` `Claude` `Codex` `acp.el`
- Summary source: README

#### README要約

- ACP（Agent Client Protocol）対応のLLMエージェントと対話するためのEmacsネイティブシェル。
- acp.elを介してACPで通信し、Claude Agent、Codex、Gemini CLI、Gooseなど多数のエージェントを統一インターフェースで操作できる。
- Emacs上でAIコーディングエージェントを使いたい開発者向けで、サイドバーや通知、セッション管理などの拡張パッケージ群も用意されている。
- MELPAからインストール可能で、利用には各エージェントのACPアダプタ（例: claude-agent-acpをnpmでグローバルインストール）など外部依存のセットアップが必要。

---

### 2. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,539
- Forks: 435
- Stars in 1週間: 6
- Category: Emacs向けLLMクライアント
- Keywords: `Emacs` `LLM` `チャットクライアント` `MCP` `マルチモーダル` `拡張性`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルで拡張可能なLLMチャットクライアント。
- 複数のLLMバックエンドやモデルに対応し、ツール使用やMCP連携、マルチモーダル入力も可能。
- Emacsユーザーが任意のバッファからLLMと対話し、チャット保存やプロンプト編集を行う用途に適する。
- package-installなどで導入でき、Curlがあれば利用し、なければ内蔵のurl-retrieveで動作する。

---

### 3. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,707
- Forks: 3,144
- Stars in 1週間: 21
- Category: エディタ設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、GNU Emacs向けの設定フレームワークで、起動・実行時の高速性と再現性のあるパッケージ管理を重視している。
- straight.elベースの宣言的パッケージ管理、モジュール式の設定構造、evil-modeによるVimエミュレーション、LSP統合、多数の言語・ツール対応などを備える。
- Vim出身者やEmacs上級者、自分の設定の基盤や学習リソースを求めるEmacs愛好家を対象としている。
- Emacs 27.1〜31.1、Git、ripgrepが必須で、git clone後にbin/doom installで導入し、doom doctorで依存関係を確認できる。

---

### 4. [melpa/melpa](https://github.com/melpa/melpa)

> Recipes and build machinery for the biggest Emacs package repo

- Language: Emacs Lisp
- Stars: 2,972
- Forks: 2,819
- Stars in 1週間: 2
- Category: パッケージリポジトリ
- Keywords: `Emacs` `パッケージ管理` `package.el` `レシピ` `自動ビルド` `Emacs Lisp`
- Summary source: README

#### README要約

- MELPAはpackage.el互換のEmacs Lispパッケージを集めた大規模なパッケージアーカイブであり、サーバー上で自動ビルドされる。
- シンプルなレシピファイルでパッケージを定義し、GitやMercurialなどのリポジトリからソースを取得して一日に複数回更新される。
- Emacs 24.1以降のユーザーがpackage-archivesにMELPAを追加してパッケージを閲覧・インストールするのに利用する。
- init.elにリポジトリURLを追加するだけで導入可能だが、最新版のMELPAと安定版のMELPA Stableの違いに注意が必要。

---

### 5. [dakra/ghostel](https://github.com/dakra/ghostel)

> Terminal emulator powered by libghostty

- Language: Emacs Lisp
- Stars: 969
- Forks: 60
- Stars in 1週間: 14
- Category: ターミナルエミュレータ
- Keywords: `Emacs` `libghostty` `ターミナル` `シェル統合` `Kittyプロトコル` `MELPA`
- Summary source: README

#### README要約

- Ghostelは、Ghostty端末のVTエンジンであるlibghostty-vtを基盤としたEmacs用ターミナルエミュレータです。
- 同期出力、トゥルーカラー、Kittyキーボード・グラフィックスプロトコル、ハイパーリンク、デスクトップ通知などをサポートします。
- Emacs上で高機能なターミナル環境を求めるユーザー向けで、bash、zsh、fish、nushellのシェル統合が標準で動作します。
- Emacs 28.1以降と動的モジュールサポートが必要で、MELPAからインストール可能、初回使用時にネイティブモジュールが自動ダウンロードされます。

---

### 6. [emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode)

> Emacs client/library for the Language Server Protocol

- Language: Emacs Lisp
- Stars: 5,123
- Forks: 983
- Stars in 1週間: 0
- Category: Emacs LSPクライアント
- Keywords: `Emacs` `LSP` `Language Server Protocol` `IDE` `コード補完` `開発環境`
- Summary source: README

#### README要約

- Emacs向けのLanguage Server Protocol（LSP）クライアント/ライブラリで、IDEのような開発体験を提供する。
- LSP v3.14の全機能をサポートし、非同期呼び出し、リアルタイム診断、コード補完、ナビゲーション、フォーマットなどを提供する。
- company、flycheck、projectileなどの人気Emacsパッケージと統合し、多くの言語サーバーに対応している。
- 追加パッケージがあれば自動的にアップグレードされ、すぐに使える設定が可能。詳細は公式ドキュメントを参照。

---
