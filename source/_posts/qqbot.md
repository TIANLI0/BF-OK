---
title: 使用go-cqhttp搭建一个属于自己的机器人
date: 2021-06-08 14:07:05
tags:
 - 教程
 - bot
updated: 2021-06-20 13:08:05
cover: https://img1.tianli0.top/qqbot/cover.webp
---

> 不少朋友肯定都想希望QQ像"蓝色飞机"一样搞一个自己的万能bot，可是在之前腾讯把大把机器人都赶尽杀绝，不过github话说有许多不错的项目。今天的教程就教大家搭建一个自己的bot

# 1.环境准备

- [x] python3.8或以上

- [x] linux或者Windows服务器（本文以linux为例）

- [x] screen

- [x] docker

- [x] 一个会折腾的人

- [ ] 会百度的双手

  上述环境请自行百度安装

# 2.机器人搭建

## 2.1.CQ端介绍

这里的CQ端是指将qq消息加以处理的服务

CQ端有很多项目 ![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=Mrs4s&repo=go-cqhttp)[Mrs4s/go-cqhttp: cqhttp的golang实现，轻量、原生跨平台. (github.com)](https://github.com/Mrs4s/go-cqhttp)

这里推荐这个，相比[mirai](https://github.com/mamoe/mirai)部署简单

## 2.2CQ端搭建

1. cd进入对应目录并下载[Mrs4s/go-cqhttp: cqhttp的golang实现，轻量、原生跨平台. (github.com)](https://github.com/Mrs4s/go-cqhttp)

   ```sh
   wget https://github.com.cnpmjs.org/Mrs4s/go-cqhttp/releases/download/v1.0.0-beta4/go-cqhttp_linux_amd64.tar.gz
   ```

2. 解压

   ```sh
   tar -zxvf go-cqhttp_linux_amd64.tar.gz
   ```

3. 赋权

   ```sh
   chmod +x go-cqhttp
   ```

4. 首次执行

   ```sh
   ./go-cqhttp
   ```

5. 按照提示操作 让你选择运行方式的时候填入123

6. go-cqhttp创建`_config.yml`成功 自行将默认配置项修改为这个（按照注释提示操作）

   ```yaml
   # go-cqhttp 默认配置文件
   
   account: # 账号相关
     uin:  # QQ账号
     password: '' # 建议不填写
     encrypt: false  # 是否开启密码加密
     status: 0      # 在线状态 请参考 https://docs.go-cqhttp.org/guide/config.html#在线状态
     relogin: # 重连设置
       delay: 3   # 首次重连延迟, 单位秒
       interval: 3   # 重连间隔
       max-times: 0  # 最大重连次数, 0为无限制
   
     # 是否使用服务器下发的新地址进行重连
     # 注意, 此设置可能导致在海外服务器上连接情况更差
     use-sso-address: true
   
   heartbeat:
     # 心跳频率, 单位秒
     # -1 为关闭心跳
     interval: 5
   
   message:
     # 上报数据类型
     # 可选: string,array
     post-format: array
     # 是否忽略无效的CQ码, 如果为假将原样发送
     ignore-invalid-cqcode: false
     # 是否强制分片发送消息
     # 分片发送将会带来更快的速度
     # 但是兼容性会有些问题
     force-fragment: false
     # 是否将url分片发送
     fix-url: false
     # 下载图片等请求网络代理
     proxy-rewrite: ''
     # 是否上报自身消息
     report-self-message: false
     # 移除服务端的Reply附带的At
     remove-reply-at: false
     # 为Reply附加更多信息
     extra-reply-data: false
   
   output:
     # 日志等级 trace,debug,info,warn,error
     log-level: warn
     # 是否启用 DEBUG
     debug: false # 开启调试模式
   
   # 默认中间件锚点
   default-middlewares: &default
     # 访问密钥, 强烈推荐在公网的服务器设置
     access-token: ''
     # 事件过滤器文件目录
     filter: ''
     # API限速设置
     # 该设置为全局生效
     # 原 cqhttp 虽然启用了 rate_limit 后缀, 但是基本没插件适配
     # 目前该限速设置为令牌桶算法, 请参考:
     # https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin
     rate-limit:
       enabled: false # 是否启用限速
       frequency: 1  # 令牌回复频率, 单位秒
       bucket: 1     # 令牌桶大小
   
   database: # 数据库相关设置
     leveldb:
       # 是否启用内置leveldb数据库
       # 启用将会增加10-20MB的内存占用和一定的磁盘空间
       # 关闭将无法使用 撤回 回复 get_msg 等上下文相关功能
       enable: true
   
   # 连接服务列表
   servers:
     # 添加方式，同一连接方式可添加多个，具体配置说明请查看文档
     #- http: # http 通信
     #- ws:   # 正向 Websocket
     #- ws-reverse: # 反向 Websocket
     #- pprof: #性能分析服务器
     # HTTP 通信设置
     - http:
         # 服务端监听地址
         host: 127.0.0.1
         # 服务端监听端口
         port: 5700
         # 反向HTTP超时时间, 单位秒
         # 最小值为5，小于5将会忽略本项设置
         timeout: 5
         middlewares:
           <<: *default # 引用默认中间件
         # 反向HTTP POST地址列表
         post:
         #- url: '' # 地址
         #  secret: ''           # 密钥
         #- url: 127.0.0.1:5701 # 地址
         #  secret: ''          # 密钥
     # 正向WS设置
     - ws:
         # 正向WS服务器监听地址
         host: 127.0.0.1
         # 正向WS服务器监听端口
         port: 6700
         middlewares:
           <<: *default # 引用默认中间件
     # 反向WS设置 下面是ATRI的ws 不需要请注释掉
     - ws-reverse:
         # 反向WS Universal 地址
         # 注意 设置了此项地址后下面两项将会被忽略
         universal: ws://127.0.0.1:20000/cqhttp/ws
         # 反向WS API 地址
         api: ws://your_websocket_api.server
         # 反向WS Event 地址
         event: ws://your_websocket_event.server
         # 重连间隔 单位毫秒
         reconnect-interval: 3000
         middlewares:
           <<: *default # 引用默认中间件
     # 下面是RSS机器人的ws,不需要请注释掉
     - ws-reverse:
         # 是否禁用当前反向WS服务
         disabled: false
         # 反向WS Universal 地址
         # 注意 设置了此项地址后下面两项将会被忽略
         universal: ws://127.0.0.1:8181/cqhttp/ws/
   
   ```

7. 再次执行首次执行

   ```sh
   ./go-cqhttp
   ```

8. 看见终端输出正常 qq扫码登录
9. `ctrl`+`c`退出备用

## 2.3.服务端

服务端也就是你机器人的大脑。

这里有很多选择，本文将会介绍RSS机器人以及两个闲聊型机器人

### [2.3.1.ELFRSS](https://github.com/Quan666/ELF_RSS)

![RSS](https://github-readme-stats.vercel.app/api/pin/?username=Quan666&repo=ELF_RSS)

**ELF_RSS**

> 1. 容易使用的命令
> 2. 更规范的代码，方便移植到你自己的机器人
> 3. 使用全新的 [Nonebot2](https://v2.nonebot.dev/guide/) 框架

这是一个以 Python 编写的 QQ 机器人插件，用于订阅 RSS 并实时以 QQ消息推送。

**功能介绍**

- 发送QQ消息来动态增、删、查、改 RSS 订阅
- 订阅内容翻译（使用谷歌机翻，可设置为百度翻译）
- 短链接（自己的短链接服务, 可移除）
- 个性化订阅设置（更新频率、翻译、仅标题、仅图片等）
- 多平台支持
- 图片压缩后发送
- 种子下载并上传到群文件
- 消息支持根据链接、标题、图片去重
- 可设置只发送限定数量的图片，防止刷屏
- 可设置从正文中要移除的指定内容，支持正则

#### 2.3.1.1部署

1. 运行命令

   ```sh
   wget https://cdn.jsdelivr.net/gh/TIANLI0/ELF_RSS/install.sh
   sh install.sh
   ```

2. 不要选择配置go-cqhttp

3. 执行
   ```sh
   cd ELF_RSS && pip install nb-cli && pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
   ```
   
4. 在/ELF_RSS目录修改配置文件`.env`

   ```
   ENVIRONMENT=dev
   VERSION='v2.2.5'
   ```

5. 按照注释修改`.env.dev`（基本上只需要换个超级管理员和百度翻译）

   ```
   HOST=0.0.0.0  # 配置 NoneBot 监听的 IP/主机名
   PORT=8181  # 配置 NoneBot 监听的端口
   DEBUG=false  # 开启 debug 模式 **请勿在生产环境开启**
   SUPERUSERS=["507249007"]  # 配置 NoneBot 超级用户 # 管理员qq,支持多管理员，逗号分隔 注意，启动消息只发送给第一个管理员
   NICKNAME=["RSSBOT", "ATRI"]  # 配置机器人的昵称
   COMMAND_START=["","/"]  # 配置命令起始字符
   COMMAND_SEP=["."]  # 配置命令分割字符
   
   RSS_PROXY='127.0.0.1:7890'  # 代理地址
   RSSHUB='https://rss.tianli0.top'  # rsshub订阅地址
   RSSHUB_BACKUP=["https://rsshub.app"]  # 备用rsshub地址 填写示例 ["https://rsshub.app","https://rsshub.app"],务必使用双引号！！！
   DB_CACHE_EXPIRE=30  # 去重数据库的记录清理限定天数
   LIMIT=50  # 缓存rss条数
   
   # 图片压缩
   ZIP_SIZE=2048 # 非 GIF 图片压缩后的最大长宽值,单位 px
   GIF_ZIP_SIZE=6144 # GIF 图片压缩临界值,单位 KB
   
   BLOCKQUOTE=true    #是否显示转发的内容(主要是微博)，默认打开，如果关闭还有转发的信息的话，可以自行添加进屏蔽词(但是这整条消息就会没)
   BLACK_WORD=[]   #屏蔽词填写 支持正则,如 ["互动抽奖","微博抽奖平台"]( ,务必使用双引号！！！
   
   #使用百度翻译API 可选，填的话两个都要填，不填默认使用谷歌翻译(需墙外？)
   # Baidu Translate API
   BAIDU_ID=''
   BAIDU_KEY=''
   #百度翻译接口appid和secretKey，前往http://api.fanyi.baidu.com/获取
   #一般来说申请标准版免费就够了，想要好一点可以认证上高级版，有月限额，rss用也足够了
   
   # 解决pixiv.cat无法访问问题
   CLOSE_PIXIV_CAT=false  # 是否关闭使用 pixiv.cat，关闭后注意启动代理
   
   # 如果你是Linux部署的，请开启此项
   IS_LINUX=true
   
   # qbittorrent 相关设置(文件下载位置等更多设置请在qbittorrent软件中设置)
   IS_OPEN_AUTO_DOWN_TORRENT=false # 是否打开自动下载种子
   QB_WEB_URL='http://127.0.0.1:8081' #qbittorrent 客户端默认是关闭状态，请打开并设置端口号为 8081，同时勾选 “对本地主机上的客户端跳过身份验证”
   DOWN_STATUS_MSG_GROUP=[] # 下载进度消息提示群组 示例 [12345678] 注意：最好是将该群设置为免打扰
   DOWN_STATUS_MSG_DATE=10 # 下载进度检查及提示间隔时间，秒，不建议小于 10s
   
   # MYELF博客地址 https://myelf.club
   # 出现问题请在 GitHub 上提 issues
   # 项目地址 https://github.com/Quan666/ELF_RSS
   ```

6. 执行

   ```sh
   screen -R RSS
   ```

7. 执行

   ```sh
   nb run
   ```

8. 启动成功

### [2.3.2.ATRI搭建（博主基于kt开发了一个功能一样的版本，但是由于高三学业繁忙，暂不开源）](https://github.com/Kyomotoi/ATRI/)

**关于**

本项目名称、灵感均来自 [ANIPLEX](https://aniplex-exe.com/) 发行的 [ATRI-My Dear Moments-](https://atri-mdm.com/)

本项目中所使用的任何有关 ATRI 的图标、LOGO，解释权、著作权均归 [ANIPLEX](https://aniplex-exe.com/)。你可以[在此](https://aniplex-exe.com/guidelines/)查看相关内容

为QQ群中复现一个功能性机器人是本项目的目标

项目功能&指令： `全局启用 | /nsfw | 来杯红茶 | 重置红茶 | 涩图总量 | 休眠 | 解封群 | 来句笑话 | /help | 涩批一下 | setu设置 | 我要离婚 | /ping | 口臭 | 解封用户 | track | 申请列表 | 苏醒 | 不够涩 | 启用功能 | 广播 | /code | /roll | 以图搜番 | 一言 | 查老婆 | 关机 | 全局禁用 | 封禁用户 | /fakemsg | 抽老婆 | 以图搜图 | 添加涩图 | 封禁群 | /status | setu | 今天吃什么 | 获取log | 删除涩图 | 禁用功能 | /enc`
`没反应可能是没权限...或者为探测类型...不属于可直接触发命令...（会自动将bot检测到的setu发送给超级超级管理员：监测撤回信息并转发给管理员）`

![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=Kyomotoi&repo=ATRI)

1. 关掉当前SSH，再开一个。执行git clone

   ```sh
   git clone https://github.com.cnpmjs.org/Kyomotoi/ATRI.git
   ```

2. 新建镜像

   ```sh
   screen -R ATRI
   ```

3. 修改/ATRI目录的`config.yml`

   ```yaml
   BotSelfConfig:
     host: "127.0.0.1"
     port: 20000
     debug: false
     superusers: ["507249007","3345891696","3249257025"]#超级管理员
     nickname: ["ATRI", "Atri", "atri", "亚托莉", "アトリ"]
     command_start: ["", "/"]
     command_sep: ["."]
     session_expire_timeout: 60
   
   NetworkPost:
     host: "127.0.0.1"
     port: 5700
   
   AdminPage:  # 待定，无用
     host: "127.0.0.1"
     port: 20002
   
   NsfwCheck:  # 详细请查看文档以获取帮助
     enabled: true
     passing_rate: 85
     host: "127.0.0.1"
     port: 5000
   
   SauceNAO: #以图搜图api  https://saucenao.com/user.php?page=search-api
     key: ""
   
   Setu:  # https://api.lolicon.app/#/setu 色图API
     key: ""
   ```

4. 执行(配置nsfw检测)

   ```sh
   docker run -it -p 127.0.0.1:5000:5000/tcp --env PORT=5000 eugencepoi/nsfw_api:latest
   ```

5. 执行

   ```sh
   pip install -r requirements.txt && py main.py
   ```

6. 关掉当前SSH窗口

### [2.3.3.ZeroBot-Plugin](https://github.com/Yiwen-Chan/ZeroBot-Plugin)

#### 功能
- 聊天 `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/chat"`
    - [x] [BOT名字]
    - [x] [戳一戳BOT]
    - [x] 空调开
    - [x] 空调关
    - [x] 群温度
    - [x] 设置温度[正整数]
    
- 椛椛 `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/huahua"`
    - [x] 具体指令看代码
    
- ATRI `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/atri"`
    - [x] 具体指令看代码
    - 注：本插件基于 [ATRI](https://github.com/Kyomotoi/ATRI) ，为 Golang 移植版
    
- 群管 `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/manager"`
    - [x] 禁言[@xxx][分钟]
    - [x] 解除禁言[@xxx]
    - [x] 我要自闭 [分钟]
    - [x] 开启全员禁言
    - [x] 解除全员禁言
    - [x] 升为管理[@xxx]
    - [x] 取消管理[@xxx]
    - [x] 修改名片[@xxx][xxx]
    - [x] 修改头衔[@xxx][xxx]
    - [x] 申请头衔[xxx]
    - [x] 踢出群聊[@xxx]
    - [x] 退出群聊[群号]
    - [x] *入群欢迎
    - [x] *退群通知
    - [x] 在[月份]月[日期]日的[小时]点[分钟]分时(用[url])提醒大家[消息]
    - [x] 在[月份]月[每周or周几]的[小时]点[分钟]分时(用[url])提醒大家[消息]
    - [x] 取消在[月份]月[日期]日的[小时]点[分钟]分的提醒
    - [x] 取消在[月份]月[每周or周几]的[小时]点[分钟]分的提醒
    - [ ] 同意入群请求
    - [ ] 同意好友请求
    - [ ] 撤回[@xxx] [xxx]
    - [ ] 警告[@xxx]
    - [x] run[xxx]
    
- 涩图 `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/setutime"`
    - [x] 来份[涩图/二次元/风景/车万]
    - [x] 添加[涩图/二次元/风景/车万][P站图片ID]
    - [x] 删除[涩图/二次元/风景/车万][P站图片ID]
    - [x] >setu status
    - [x] >setu xml
    - [x] >setu pic
    
- 搜图 `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/picsearcher"`
    - [x] 以图搜图|搜索图片|以图识图[图片]
    - [x] 搜图[P站图片ID]
    
- 简易随机图片(调用url) `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/randimg"`
    - [x] 随机图片
    - [x] 设置随机图片网址[url]
    
- 点歌 `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/music"`
    - [x] 点歌[xxx]
    - [x] 网易点歌[xxx]
    - [x] 酷我点歌[xxx]
    - [x] 酷狗点歌[xxx]
    
- shindan `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/shindan"`
    - [x] 今天是什么少女[@xxx] 
    - [x] 异世界转生[@xxx] 
    - [x] 卖萌[@xxx] 
    
- GitHub仓库搜索 `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/github"`
    - [x] >github [xxx] 
    - [x] >github -p [xxx] 
    
- 在线代码运行 `import _ "github.com/Yiwen-Chan/ZeroBot-Plugin/runcode"`
    - [x] >runcode help
    - [x] >runcode [on/off]
    - [x] >runcode [language] [code block] 
    
    ![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=Yiwen-Chan&repo=ZeroBot-Plugin)

#### 部署

1. [TIANLI0/ZeroBot-Plugin: 基于 ZeroBot 的 OneBot 插件 (github.com)](https://github.com/TIANLI0/ZeroBot-Plugin)点击这里 Fork 修改`main.go`（没提供原作者的是因为已知最新版有bug无法编译）

2. 打开github action 等待编译成功 选择对应版本，去actions/job详情页下载 解压 并上传至服务器

3. 执行

   ```sh
   screen -R huahua
   ```

4. 解压 赋权并启动

   ```sh
   chmod +x ZeroBot-Plugin-linux ./ZeroBot-Plugin-linux
   ```

5. 启动成功，关闭当前SSH窗口

### ATRI-kotlin暂时不考虑开源

## 3.启动bot

1. 执行

   ```sh
   screen -R QQ
   ```

2. 运行程序

   ```sh
   ./go-cqhttp
   ```

3. 此时你的QQ应该会收到bot的消息![](https://img1.tianli0.top/qqbot/1623141666750.png)

4. 调试：输入对应的screen -R指令

## 4.结束

bot需要自己去摸索 强烈建议有能力的自己参考官方文档自己写

对于前端：请在github搜索koshi 这是基于Nodejs的框架









![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.10/12311680.png)
![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.9/184064205.png)![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.9/184064205.png)