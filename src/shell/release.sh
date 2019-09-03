#! /bin/bash

set -e

echo "Enter release version:"

read version

read -p "Releasing $VERSION - are you sure (y/n)" -n 1 -r

echo #

if [[ $REPLY =~ ^[Yy]$ ]]

then
  echo "Releasing $VERSION ..."

  VERSION=$VERSION

  git add -A
  git commit -m "[chore]:release $VERSION"
  npm version $VERSION --messge "[chore]:release $VERSION"

  git push

fi