+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/09/12'
date = 2026-09-12T22:54:21.985Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年9月12日 22:54:21
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 5
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacsエコシステムにおいて、AI/LLM統合と設定フレームワークが注目を集めている

- Emacs Lispで書かれたリポジトリが全5件を占め、Emacs関連プロジェクトがトレンドの中心となっている
- LLMクライアントやAIエージェント連携など、AI機能をEmacsに統合するプロジェクトが複数ランクインしている
- Doom EmacsやSpacemacsといった成熟した設定フレームワークが継続的な支持を得ている
- パッケージ管理基盤であるMELPAもランクインし、エコシステムの基盤技術への関心も示されている

### 主なテーマ

- **EmacsへのAI/LLM統合**: karthink/gptelは複数バックエンド対応のLLMクライアント、xenodium/agent-shellはACP経由でClaudeやCodexなどのAIエージェントと連携するシェルを提供しており、Emacs内でAIを活用する動きが活発化している（`karthink/gptel`、`xenodium/agent-shell`）
- **Emacs設定フレームワーク**: doomemacs/coreは高速性と再現性を重視したフレームワーク、syl20bnr/spacemacsはEmacsとVimの長所を融合したディストリビューションとして、それぞれ異なるアプローチでEmacsのカスタマイズ性を高めている（`doomemacs/core`、`syl20bnr/spacemacs`）
- **パッケージ管理基盤**: melpa/melpaはEmacs Lispパッケージの大規模リポジトリとして、自動ビルドとレシピベースの管理を提供し、Emacsエコシステムの基盤を支えている（`melpa/melpa`）

### 補足的な観察

- 言語分布はEmacs Lispが100%を占め、特定言語コミュニティ内でのトレンドであることが明確である
- starsDuringPeriodの最高はdoomemacs/coreの31で、AI関連の新興プロジェクトよりも確立されたフレームワークが上位に位置している
- AI関連プロジェクト(gptel: 12, agent-shell: 21)は中位に位置し、新規技術への関心の高まりを示唆している

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 5 |

## Repository一覧

### 1. [doomemacs/core](https://github.com/doomemacs/core)

> An Emacs framework for the stubborn martian hacker

- Language: Emacs Lisp
- Stars: 22,676
- Forks: 3,147
- Stars in 1週間: 31
- Category: Emacs設定フレームワーク
- Keywords: `Emacs` `設定フレームワーク` `evil-mode` `straight.el` `LSP` `モジュール式`
- Summary source: README

#### README要約

- Doom Emacsは、GNU Emacs向けの設定フレームワークで、起動・実行時の高速性と再現性のあるパッケージ管理を重視している。
- straight.elベースの宣言的パッケージ管理、約150のオプションモジュール、evil-modeによるVimエミュレーション、LSP統合、ポップアップ管理などを備える。
- Vim出身者や自分好みにカスタマイズしたいEmacs愛好家を対象とし、自分の設定の基盤や学習用リソースとしても利用できる。
- 導入はgit clone後にbin/doom installを実行し、Emacs 27.1〜31.1、Git、ripgrepが必要。doom doctorで依存関係を確認できる。

---

### 2. [karthink/gptel](https://github.com/karthink/gptel)

> A simple, extensible LLM client for Emacs

- Language: Emacs Lisp
- Stars: 3,524
- Forks: 431
- Stars in 1週間: 12
- Category: Emacs用LLMクライアント
- Keywords: `Emacs` `LLM` `チャットクライアント` `拡張可能` `マルチモーダル` `MCP`
- Summary source: README

#### README要約

- Emacs上で動作するシンプルで拡張可能なLLMチャットクライアント。
- 複数のモデルやバックエンドに対応し、任意のバッファでLLMと対話可能。
- ツール使用やMCP統合、マルチモーダル入力、推論コンテンツのサポートを提供。
- Curlが利用可能な場合はそれを使用し、なければ内蔵のurl-retrieveで動作。

---

### 3. [syl20bnr/spacemacs](https://github.com/syl20bnr/spacemacs)

> A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

- Language: Emacs Lisp
- Stars: 24,563
- Forks: 4,833
- Stars in 1週間: 7
- Category: テキストエディタ設定
- Keywords: `Emacs` `Vim` `ディストリビューション` `キーバインド` `設定レイヤー` `Emacs Lisp`
- Summary source: README

#### README要約

- コミュニティ主導のEmacsディストリビューションで、人間工学・記憶法・一貫性に焦点を当てた洗練されたセットアップを提供する。
- スペースキーでアクセスできるニーモニックなキーバインド、美しいGUI、設定レイヤーで整理された数百のパッケージを備える。
- EmacsとVimの両方のユーザーが自然に使え、編集スタイルを混在・切替できるためペアプログラミングにも適している。
- Emacs 28.2以上、Git、GNU Tarが必須で、~/.emacs.dにgit cloneして起動するだけで導入できる。現在ベータ版。

---

### 4. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> A native Emacs buffer to interact with LLM agents powered by ACP

- Language: Emacs Lisp
- Stars: 1,850
- Forks: 232
- Stars in 1週間: 21
- Category: Emacs拡張
- Keywords: `Emacs` `LLM` `ACP` `AIエージェント` `シェル`
- Summary source: README

#### README要約

- Emacs上でLLMエージェントと対話するためのネイティブシェルバッファを提供するパッケージ。
- ACP（Agent Client Protocol）を介してClaude、Codex、Gemini CLIなど複数のエージェントと通信する。
- Emacsユーザーがエディタ内でAIコーディングエージェントを利用したい場合に適する。
- MELPAからインストール可能で、利用には各エージェントのACP対応CLIを別途インストールする必要がある。

---

### 5. [melpa/melpa](https://github.com/melpa/melpa)

> Recipes and build machinery for the biggest Emacs package repo

- Language: Emacs Lisp
- Stars: 2,967
- Forks: 2,811
- Stars in 1週間: 4
- Category: パッケージリポジトリ
- Keywords: `Emacs` `package.el` `パッケージ管理` `レシピ` `自動ビルド` `Emacs Lisp`
- Summary source: README

#### README要約

- MELPAはpackage.el互換のEmacs Lispパッケージを集めた大規模なパッケージリポジトリである。
- シンプルなレシピを基に上流のソースコードからサーバー上で自動ビルドし、一日を通して定期的にパッケージを更新する。
- Emacs 24.1以降のユーザーがpackage-archivesにMELPAを追加してパッケージを閲覧・インストールする用途に使われる。
- 利用にはinit.elへの設定追加とpackage-refresh-contentsの実行が必要で、最新版のMELPAとタグ版のMELPA Stableの2種類が提供される。

---
