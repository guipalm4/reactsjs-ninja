#!/bin/sh
git checkout dev
git add .
git commit -m %1
git push
