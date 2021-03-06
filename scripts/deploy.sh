#!/bin/bash

# Abort when error occurs
set -e

# Push changes to github
git checkout master
git add .
git commit -m "feat: update repo"
git push

# Log when success
echo -e 'Push to GitHub done!'

# Close shell
read -s -n1 -p "按任意键退出 ... "
exit 0;
