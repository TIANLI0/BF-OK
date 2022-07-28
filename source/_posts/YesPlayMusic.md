---
title: YesPlayMusic部署教程
date: 2021-03-13 19:43:59
updated: 2021-03-13 19:43:59
tags:
 - 教程
cover: https://img1.tianli0.top/music/music.png
---

> YesPlayMusic 一款简洁美观的第三方网易云音乐

<br />

<p align="center">
  <a href="https://music.tianli0.top" target="blank">
    <img src="https://music.tianli0.top\img\icons/icon.ico" alt="Logo" width="156" height="156">
  </a>
  <h2 align="center" style="font-weight: 600">YesPlayMusic</h2>

  <p align="center">
    高颜值的第三方网易云播放器
    <br />
    <a href="https://music.tianli0.top" target="blank"><strong>🌎 访问DEMO</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#%EF%B8%8F-安装" target="blank"><strong>📦️ 下载安装包</strong></a>
    <br />
    <br />
  </p>

# 官方介绍

## ✨ 特性

- ✅ 使用 Vue.js 全家桶开发
- 🔴 网易云账号登录
- 📺 支持 MV 播放
- 📃 支持歌词显示
- 📻 支持私人 FM
- 🚫🤝 无任何社交功能
- 🌎️ 海外用户可直接播放（需要登录网易云账号）
- 🔐 支持 [UnblockNeteaseMusic](https://github.com/nondanee/UnblockNeteaseMusic)，自动使用 QQ/酷狗/酷我音源替换变灰歌曲链接 （网页版不支持）
- ⏭️ 支持 MediaSession API，可以使用系统快捷键操作上一首下一首
- ✔️ 每日自动签到（手机端和电脑端同时签到）
- 🌚 Light/Dark Mode 自动切换
- 👆 支持 Touch Bar
- 🖥️ 支持 PWA，可在 Chrome/Edge 里点击地址栏右边的 ➕ 安装到电脑
- 🙉 支持显示歌曲和专辑的 Explicit 标志

## 📦️ 安装

Electron 版本由 [@hawtim](https://github.com/hawtim) 和 [@qier222](https://github.com/qier222) 适配并维护，支持 macOS、Windows、Linux。

访问本项目的 [Releases](https://github.com/qier222/YesPlayMusic/releases) 页面下载安装包，或者访问 [镜像下载站 (大陆访问更快)](https://dl.qier222.com/YesPlayMusic/) 下载。

macOS 用户也可以通过 `brew install --cask yesplaymusic` 来安装。

## ⚙️ 部署至 Vercel

除了下载安装包使用，你还可以将本项目部署到 Vercel 或你的服务器上。下面是部署到 Vercel 的方法

1. 部署网易云 API，详情参见 [Binaryify/NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/#/?id=%e5%ae%89%e8%a3%85) 。你也可以将 API 部署到 Vercel。

2. 点击本仓库右上角的 Fork，复制本仓库到你的 GitHub 账号。

3. 打开 [Vercel.com](https://vercel.com)，使用 GitHub 登录。

4. 点击 Import Git Repository 并选择你刚刚复制的仓库并点击 Import。

5. 点击 PERSONAL ACCOUNT 旁边的 Select。

6. 点击 Environment Variables，填写 Name 为 `VUE_APP_NETEASE_API_URL`，Value 为你刚刚部署的网易云 API 地址，点击 Add。最后点击底部的 Deploy 就可以部署到 Vercel 了。

# 服务器部署[NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/#/?id=neteasecloudmusicapi)方法

> 环境要求：
>
> 宝塔面板 
>
> 安全组放行相应端口 
>
> pm2管理器

## 安装pm2管理器![](https://img1.tianli0.top/music/pm2.png)

## 打开终端cd进入所需要目录clone API源代码

鉴于github速度过慢，这里提供coding镜像

```
git clone https://e.coding.net/tianli0/music/NeteaseCloudMusicApi.git
```

## 进入源代码根目录执行

```
npm install 
```

## 打开pm2管理器

![](https://img1.tianli0.top/music/pm2.png)

输入项目所在根目录

启动文件名称为app.js

点击添加

## 点击映射

![](https://img1.tianli0.top/music/1.png)

添加所需要域名



至此API应该部署完成了，大家懒得部署的也可以访问我的[API](https://music.api.tianli0.top)

# YesPlayMusic部署

## ⚙️ 部署至 Vercel

除了下载安装包使用，你还可以将本项目部署到 Vercel 或你的服务器上。下面是部署到 Vercel 的方法

1. 部署网易云 API，详情参见 [Binaryify/NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/#/?id=安装) 。你也可以将 API 部署到 Vercel。
2. 点击本仓库右上角的 Fork，复制本仓库到你的 GitHub 账号。
3. 打开 [Vercel.com](https://vercel.com/)，使用 GitHub 登录。
4. 点击 Import Git Repository 并选择你刚刚复制的仓库并点击 Import。
5. 点击 PERSONAL ACCOUNT 旁边的 Select。
6. 点击 Environment Variables，填写 Name 为 `VUE_APP_NETEASE_API_URL`，Value 为你刚刚部署的网易云 API 地址，点击 Add。最后点击底部的 Deploy 就可以部署到 Vercel 了。

## 👷‍♂️ 打包客户端

如果在 Release 页面没有找到适合你的设备的安装包的话，你可以根据下面的步骤来打包自己的客户端。

1. 打包 Electron 需要用到 Node.js 和 Yarn。可前往 [Node.js 官网](https://nodejs.org/zh-cn/) 下载安装包。安装 Node.js 后可在终端里执行 `npm install -g yarn` 来安装 Yarn。
2. 使用 `git clone https://github.com/qier222/YesPlayMusic.git` 克隆本仓库到本地。
3. 使用 `yarn install` 安装项目依赖。
4. 复制 `/.env.example` 文件为 `/.env` 。
5. 选择下列表格的命令来打包适合的你的安装包，打包出来的文件在 `/dist_electron` 目录下。了解更多信息可访问 [electron-builder 文档](https://www.electron.build/cli)

| 命令                                       | 说明                      |
| ------------------------------------------ | ------------------------- |
| `yarn electron:build --windows nsis:ia32`  | Windows 32 位             |
| `yarn electron:build --windows nsis:arm64` | Windows ARM               |
| `yarn electron:build --linux deb:armv7l`   | Debian armv7l（树莓派等） |
| `yarn electron:build --macos dir:arm64`    | macOS ARM                 |

## 生成静态文件

1. 进入clone的YesPlayMusic源代码https://github.com/qier222/YesPlayMusic

2. 修改文件.env.example 将其重命名为.env

3. 修改 VUE_APP_NETEASE_API_URL = 后的数据为你刚才部署的 API 的地址

4. VUE_APP_ELECTRON_API_URL = 后的数据填写 /

5. 运行

   ```
   yarn build
   ```

   生成的最终静态文件在`dist`目录

# 非服务器部署[NeteaseCloud

# [MusicApi](https://neteasecloudmusicapi.vercel.app/#/?id=neteasecloudmusicapi)方法

## [Vercel 部署](https://neteasecloudmusicapi.vercel.app/#/?id=vercel-部署)

v4.0.8 加入了 Vercel 配置文件,可以直接在 Vercel 下部署了,不需要自己的服务器

### [操作方法](https://neteasecloudmusicapi.vercel.app/#/?id=操作方法)

1. fork 此项目
2. 在 Vercel 官网点击 `New Project`
3. 点击 `Import Git Repository` 并选择你 fork 的此项目并点击`import`
4. 点击 `PERSONAL ACCOUNT` 的 `select`
5. 直接点`Continue`
6. `PROJECT NAME`自己填,`FRAMEWORK PRESET` 选 `Other` 然后直接点 `Deploy` 接着等部署完成即可