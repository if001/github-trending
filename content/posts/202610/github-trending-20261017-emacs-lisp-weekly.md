+++
title = 'GitHub Trending 1週間レポート (emacs-lisp) - 2026/10/17'
date = 2026-10-17T22:56:38.063Z
draft = false
categories = ['GitHub Trending']
tags = ['github', 'trending', 'weekly', 'emacs-lisp']
+++

# GitHub Trending レポート

- 取得日時: 2026年10月17日 22:56:38
- Language: emacs-lisp
- Date range: 1週間
- 対象リポジトリ数: 1
- 要約モデル: `kimi-k3`
- 取得元: [GitHub Trending](https://github.com/trending/emacs-lisp?since=weekly)

## 今回のTrendingの傾向

> Emacs上でAIエージェントを統合するツールが注目を集めている

- Emacs Lisp製のAIエージェント統合パッケージがランクインしている
- ACP（Agent Client Protocol）を介して複数のAIエージェントと通信する設計が特徴
- ターミナルエミュレーションを排除し、Emacsネイティブの操作体験を重視している

### 主なテーマ

- **エディタへのAIエージェント統合**: xenodium/agent-shellは、ClaudeやCodex、Geminiなど23種類のAIエージェントをACP経由でEmacsから直接利用できるパッケージであり、エディタ内でAIエージェントを活用する需要の高まりを示している。（`xenodium/agent-shell`）

### 補足的な観察

- 対象リポジトリは1件のみで、言語はEmacs Lispというニッチな領域である
- 期間中のスター獲得数は20と小規模だが、特定の開発者コミュニティからの関心を集めている
- MELPAからインストール可能であり、Emacsパッケージエコシステムへの親和性が高い

### 言語分布

| Language | Repositories |
|---|---:|
| Emacs Lisp | 1 |

## Repository一覧

### 1. [xenodium/agent-shell](https://github.com/xenodium/agent-shell)

> Brings your favorite AI agents to Emacs, keeping you at home: familiar buffers and bindings, no terminal emulation. Powered by ACP.

- Language: Emacs Lisp
- Stars: 1,962
- Forks: 261
- Stars in 1週間: 20
- Category: Emacs拡張
- Keywords: `Emacs` `AIエージェント` `ACP` `Claude` `Codex` `MELPA`
- Summary source: README

#### README要約

- Emacs上でAIエージェントを動作させるためのシェル環境を提供するパッケージ。
- ACP（Agent Client Protocol）を介してClaude、Codex、Geminiなど23種類のエージェントと通信する。
- ターミナルエミュレーションを使わず、Emacsのバッファとキーバインドで操作したいユーザー向け。
- MELPAからインストール可能で、外部依存として各エージェントのACP実装が必要。

---
