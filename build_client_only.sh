#!/bin/bash
# package, update used git
# server will auto update.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "$SCRIPT_DIR"

DST_PATH="$SCRIPT_DIR/dist"

cd ../ordersystemclient
npm install
npm run build
rsync -av --delete ./dist/ "$DST_PATH/public/"

cd "$DST_PATH"
