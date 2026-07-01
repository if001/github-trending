#!/usr/bin/env bash
set -euo pipefail

pnpm run trending -- \
  --language any \
  --date-range week

pnpm run trending \
    --language go \
    --date-range week

pnpm run trending \
    --language rust \
    --date-range week
