#!/usr/bin/env bash
set -euo pipefail

pnpm run trending -- \
  --language typescript \
  --date-range week

pnpm run trending -- \
  --language emacs-lisp \
  --date-range week

pnpm run trending -- \
  --language python \
  --date-range week
