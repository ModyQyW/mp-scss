#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@gitee.com:millcloud/mp-scss.git master:gh-pages
git push -f git@github.com:MillCloud/mp-scss.git master:gh-pages

cd -

# git add -A
# git commit -a -m 'docs: update'
# git push
