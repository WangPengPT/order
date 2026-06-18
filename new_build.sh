#!/bin/bash
# package, update used git
# server will auto update.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "$SCRIPT_DIR"

SRC_PATH="$SCRIPT_DIR/../orderDemo"
DST_PATH="$SCRIPT_DIR/dist"

rm -rf "$DST_PATH"

rsync -av --exclude='.DS_Store' "$SRC_PATH/server/" "$DST_PATH/"

cd "$SRC_PATH/../ordersystemmanager"
npm install
npm run build
mv ./dist/index.html ./dist/manager.html
rsync -av --delete --exclude='.DS_Store' ./dist/ "$DST_PATH/public/"

cd "$SRC_PATH/../ordersystemclient"
npm install
npm run build
rsync -av --delete --exclude='.DS_Store' ./dist/ "$DST_PATH/public/"

cd "$DST_PATH"
