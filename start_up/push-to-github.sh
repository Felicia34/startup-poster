#!/bin/bash
# 1. 打开 https://github.com/settings/tokens 生成新 Token（勾选 repo）
# 2. 把下面 YOUR_TOKEN_HERE 换成你的新 Token，保存后执行: bash push-to-github.sh
cd "$(dirname "$0")"
git push https://Felicia34:YOUR_TOKEN_HERE@github.com/Felicia34/startup-poster.git main
