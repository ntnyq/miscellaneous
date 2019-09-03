# Lerna 管理多依赖项目

## Bootstrap

``` bash
$ lerna bootstrap --hoist
```

将通用的包安装在全局根目录下。

该操作会自动为每个 module 执行 `npm install` 和 `npm link` 操作。

## Add

给模块安装依赖。

``` bash
$ lerna add lodash packages/a packages/b 为a, b添加lodash依赖，会同时改变它们的package.json

$ leara add lodash packages/a --dev 安装开发依赖

$ leana add lodash packages/re-* 通配符匹配

$ lerna add a --scope=b 给b模块安装lodash依赖
```

## Create

新增一个由lerna管理的依赖。

## Clean

删除所有模块下的依赖文件。

## Changed

列出当前所有从上次提交发生了文件变动的代码。

## Link

将本地包链接起来，可以直接引用。

## Import

导入已有的模块

## List

列出项目中所有的模块。

## Run

在每个包含该脚本的模块中运行该脚本

## Publish

发布版本

## Changelog

需要安装 [lerna-changelog](https://github.com/lerna/lerna-changelog)

## 模式

1. Fixed/Locked mode 默认模式，某个模块更新，则全部模块都升级版本，版本号管理在根目录中的 `lerna.json` 文件中。
2. Independent mode 独立模式，增量更新，只发布发生了变动的依赖。

独立模式可通过以下命令进入:

``` bash
$ lerna  init --independent
```

## 参考文档

- [如何利用lerna来管理模块](https://blog.csdn.net/scq000123/article/details/87949042)
