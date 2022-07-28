---
title: 从零开始的Hexo博客搭建
date: 2021-05-04 07:51:58
updated: 2021-05-04 07:51:58
tags: 教程
cover: https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/hexo/hexo.png
---

> 前言：哪个男孩不想拥有自己的网站呢？
>
> hexo简介：Hexo 是一个基于[nodejs](http://www.oschina.net/p/nodejs) 的静态博客网站生成器，作者是来自台湾的 [Tommy Chen](http://mailto:tommy351@gmail.com/)重点是不需要配置服务器，基本上都能白嫖
>
> 基本要求：初中英语

# 1.环境配置

所需环境：

- [x] 1.nodejs14
- [x] 2.git
- [x] 3.Hexo cli
- [x] 4.markdown编辑器

## 1.1.Git工具配置

> Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
>
> Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
>
> Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

windows：到git官网上下载,[Download git](https://gitforwindows.org/),下载安装。

linux：对linux来说实在是太简单了，因为最早的git就是在linux上编写的，只需要一行代码

以Centos为例

```shell
yum install git
```

安装好后，用`git --version` 来查看一下版本

### 拓展内容 Git小乌龟的安装及使用

> Git小乌龟是Windows平台的一款Git管理工具，适用于不怎么喜欢使用命令行的人

请参考链接 [Git小乌龟的安装及使用 - 简书 (jianshu.com)](https://www.jianshu.com/p/33108325fc87)

## 1.2.Nodejs的安装

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。
>
> Hexo基于Nodejs进行编写

Linux：

```shell
yum install nodejs
yum install npm
```

Windows:

[nodejs](https://nodejs.org/en/download/)选择LTS版本下载安装

安装完成后需要检查是否安装成功

Windows：

桌面右键 `Git bash here` 

```shell
npm -v 
node -v
```

查看是否安装成功

**可忽略**国内环境大家都懂 你可以使用npm换源防止后面报错 

注：因为淘宝源更新不及时 后面许多依赖同样会导致报错 推荐使用官方源搭配Magic网络使用

```sh
//查看源
npm config get registry
//更换源
npm config set registry https://registry.npmjs.org
//淘宝源
npm config set registry https://registry.npm.taobao.org
```



## 1.3.安装hexo

输入以下命令

```sh
npm install -g hexo-cli
```

依然需要查看是否安装成功

```sh
hexo -v
```

新建一个文件夹并初始化hexo

```sh
mikdir Blog && cd Blog//新建叫Blog的文件夹，如果你是Window直接新建文件夹并在文件夹里右键打开即可
hexo init
```

注意：若此时hexo init报错请使用Magic进行上网

新建完成后，指定文件夹目录下有：

- node_modules: 依赖包
- public：存放生成的页面
- scaffolds：生成文章的一些模板
- source：用来存放你的文章
- themes：主题
- _config.yml: 博客的配置文件

接下来就可以使用了 本地查看Hexo命令

```sh
hexo s
```

在浏览器输入localhost:4000就可以看到你生成的博客了

## 1.4.Markdown编辑器配置

这里推荐Typora[Typora — a markdown editor, markdown reader.](https://www.typora.io/)

# 2.账户配置

##  2.1.Github配置

1. 首先你需要一个Github账户

2. 新建一个仓库 推荐私人仓

3. 在菜单里搜索Git Bash，设置user.name和user.email配置信息：

   ```bash
   git config --global user.name "你的GitHub用户名"
   git config --global user.email "你的GitHub注册邮箱"
   ```

   生成ssh密钥文件：

   ```bash
   ssh-keygen -t rsa -C "你的GitHub注册邮箱"
   ```

   然后直接三个回车即可，默认不需要设置密码
   然后找到生成的.ssh的文件夹中的id_rsa.pub密钥，将内容全部复制

   ![img](https://pic4.zhimg.com/v2-d1e47103ec1aa8675f68688c5d63bd27_r.jpg)

   打开[GitHub_Settings_keys](https://github.com/settings/keys) 页面，新建new SSH Key

   

   ![img](https://pic1.zhimg.com/v2-72a3f22c080e99343c3cc4aabce10e3c_r.jpg)

   Title为标题，任意填即可，将刚刚复制的id_rsa.pub内容粘贴进去，最后点击Add SSH key。
   在Git Bash中检测GitHub公钥设置是否成功，输入 ssh git@github.com ：

   

   ![img](https://pic3.zhimg.com/v2-da481ffa686410becd4186c656b4ebd6_r.jpg)

   如上则说明成功。这里之所以设置GitHub密钥原因是，通过非对称加密的公钥与私钥来完成加密，公钥放置在GitHub上，私钥放置在自己的电脑里。GitHub要求每次推送代码都是合法用户，所以每次推送都需要输入账号密码验证推送用户是否是合法用户，为了省去每次输入密码的步骤，采用了ssh，当你推送的时候，git就会匹配你的私钥跟GitHub上面的公钥是否是配对的，若是匹配就认为你是合法用户，则允许推送。这样可以保证每次的推送都是正确合法的。

4. 桌面执行命令

   ```
   git clone "刚才新建的仓库有一个Clone 复制里面的链接 粘贴到这里"
   ```
   
   将里面的.git(隐藏)复制到刚才新建的hexo博客里面

## 2.2.Vercel配置

1、先对刚才的源代码进行一次提交1、添加文件到版本库缓存区



```git
git add .
```

2、添加文件到版本库



```bash
git commit -m "备注信息"
```

3、请忽略



```csharp
git remote add origin 远程库地址
```

4、push到远程仓库



```sh
git push -u origin main(推送到的分支名称)
```

1. 新建一个[Vercel](https://vercel.com)账户
2. 点击New Project 
3. Add Github account 
4. ![](https://img1.tianli0.top/hexo/vercel.png)一直愉快的下一步
5. 博客部署成功 以后上传会自动部署 若需要绑定自定义域名在Settings里面绑定即可

# 3.Hexo的使用

现在来介绍常用的Hexo 命令

npm install hexo -g #安装Hexo
npm update hexo -g #升级
hexo init #初始化博客

命令简写

```sh
hexo n "我的博客" == hexo new "我的博客" #新建文章
hexo g == hexo generate #生成
hexo s == hexo server #启动服务预览
hexo d == hexo deploy #部署 若使用我的教程 请忽略

hexo server #Hexo会监视文件变动并自动更新，无须重启服务器
hexo server -s #静态模式
hexo server -p 5000 #更改端口
hexo server -i 192.168.1.1 #自定义 IP
hexo clean #清除缓存，若是网页正常情况下可以忽略这条命令
```

刚刚的三个命令依次是新建一篇博客文章、生成网页、在本地预览的操作。

最后修改confi.yml里面的内容 

## 3.2主题的使用

我的主题为[Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)

请参考里面的文档进行配置 开发者已经写的很详细了，这里不再赘述

------

# 我的魔改

**注意：因为随机动漫壁纸的API源站受到攻击，目前已关闭访问，因次现在访问我的博客是蓝底无图（可能过两天恢复）**

网站因备案即将闭站

我的魔改均来自[小冰](https://zfe.space/)以及[AKI](https://akilar.top/)（不是酷安的那个）

![](https://img1.tianli0.top/hexo/1%20%282%29.jpg)

你可以参考他们的博客或直接使用我的开源仓库[TIANLI0/BF-OK: 基于butterfly的魔改版本hexo博客源码 (github.com)](https://github.com/TIANLI0/BF-OK)

clone到本地并修改`butterfly_config.yml`

进入目录安装依赖

```sh
npm install
```

参考上文及[Butterfly - A Simple and Card UI Design theme for Hexo](https://butterfly.js.org/)

注意 首页轮播图在`BF-OK\source\_data\slider.yml`


我的博客即将同步至腾讯云+社区，邀请大家一同入驻：https://cloud.tencent.com/developer/support-plan?invite_code=3pbd856b2uqsk
