# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://gitee.com/lym0518-blog/lym0518-blog.git master:gh-pages

cd -