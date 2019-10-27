# Lerna 管理多依赖项目

### bootstrap

``` bash
$ lerna bootstrap --hoist
```

将通用的包安装在全局根目录下。

该操作会自动为每个 module 执行 `npm install` 和 `npm link` 操作。

## commands

常用命令

``` bash
# init 创建一个 lerna 管理的项目或将现有项目升级
$ lerna init

# create 创建一个被管理的 package
$ lerna create

# list 列出当前所有被管理的 package
$ lerna list

# changed 列出发生了修改的包
$ lerna changed

# run 在所有有要执行该命令的包内执行命令
$ lerna run build  --stream --ignore docs

# publish 将包发布至 npm 和 GitHub
$ lerna publish
# 其中包含了 lerna version 后者不常用
# lerna publish from-package 可发布已确定好版本的包 

# clean 删除所有模块下的依赖文件
$ lerna clean
# 可搭配 yarn workspaces run clean 来执行所有workspaces的clean script

# changelog need [lerna-changelog](https://github.com/lerna/lerna-changelog)
$ lerna changelog 
```



### add

给模块安装依赖。

``` bash
$ lerna add lodash packages/a packages/b 为a, b添加lodash依赖，会同时改变它们的package.json

$ leara add lodash packages/a --dev 安装开发依赖

$ leana add lodash packages/re-* 通配符匹配

$ lerna add a --scope=b 给b模块安装lodash依赖
```



### link

将本地包链接起来，可以直接引用。

### Import

导入已有的模块

## 模式

1. Fixed/Locked mode 默认模式，某个模块更新，则全部模块都升级版本，版本号管理在根目录中的 `lerna.json` 文件中。
2. Independent mode 独立模式，增量更新，只发布发生了变动的依赖。

独立模式可通过以下命令进入:

``` bash
$ lerna  init --independent
```

## 参考文档

- [如何利用lerna来管理模块](https://blog.csdn.net/scq000123/article/details/87949042)
