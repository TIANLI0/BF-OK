---
title: 无服务器部署php程序，以typecho为例
date: 2021-08-10 13:13:34
tags: 教程
cover: https://img1.tianli0.top/vercel/vercel.png
updated: 2021-08-10 13:13:34
---

> 引入：本教程适合无服务器搭建php服务的兄弟们
>
> 注：1.使用此教程的方法最好加上CDN加速，否则访问速度可以逼死你

环境配置：

- [x] 初中英语    
- [x]  能畅通访问github的网络环境
- [x] 懂得提问的智慧
- [x] 愿意折腾的双手

# 一.注册[Github](https://github.com/)及[Vercel](https://vercel.com/)账号，配置git环境

## 1.电脑环境配置请参考[Git工具配置](https://tianli-blog.club/2021/05/04/hexo/#1-1-Git工具配置)

## 2.账户配置

### 1.1.Github配置

1. 首先你需要一个Github账户

2. 新建一个仓库 推荐私人仓

3. 在菜单里搜索Git Bash，设置user.name和user.email配置信息：

   ```
   git config --global user.name "你的GitHub用户名"
   git config --global user.email "你的GitHub注册邮箱"
   ```

   生成ssh密钥文件：

   ```
   ssh-keygen -t rsa -C "你的GitHub注册邮箱"
   ```

   然后直接三个回车即可，默认不需要设置密码
   然后找到生成的.ssh的文件夹中的id_rsa.pub密钥，将内容全部复制

   [![img](https://pic4.zhimg.com/v2-d1e47103ec1aa8675f68688c5d63bd27_r.jpg)](https://pic4.zhimg.com/v2-d1e47103ec1aa8675f68688c5d63bd27_r.jpg)

   img

   

   打开[GitHub_Settings_keys](https://github.com/settings/keys) 页面，新建new SSH Key

   [![img](https://pic1.zhimg.com/v2-72a3f22c080e99343c3cc4aabce10e3c_r.jpg)](https://pic1.zhimg.com/v2-72a3f22c080e99343c3cc4aabce10e3c_r.jpg)

   

   

   Title为标题，任意填即可，将刚刚复制的id_rsa.pub内容粘贴进去，最后点击Add SSH key。
   在Git Bash中检测GitHub公钥设置是否成功，输入 ssh [git@github.com](mailto:git@github.com) ：

   [![img](https://pic3.zhimg.com/v2-da481ffa686410becd4186c656b4ebd6_r.jpg)](https://pic3.zhimg.com/v2-da481ffa686410becd4186c656b4ebd6_r.jpg)

   

   如上则说明成功。这里之所以设置GitHub密钥原因是，通过非对称加密的公钥与私钥来完成加密，公钥放置在GitHub上，私钥放置在自己的电脑里。GitHub要求每次推送代码都是合法用户，所以每次推送都需要输入账号密码验证推送用户是否是合法用户，为了省去每次输入密码的步骤，采用了ssh，当你推送的时候，git就会匹配你的私钥跟GitHub上面的公钥是否是配对的，若是匹配就认为你是合法用户，则允许推送。这样可以保证每次的推送都是正确合法的。

### 1.2.Vercel注册

  根据提示注册（不懂请在评论区留言）ps:其实是我懒

# 二.导入Git仓库（伪静态规则由“啊不都”编写）

1. 在Github控制面板 点击new

2. ![Git导入](https://img1.tianli0.top/vercel/git%E5%AF%BC%E5%85%A5.png)

3. 在`Your old repository’s clone URL`填入

   ```link
   https://github.com/TIANLI0/php-vercel
   ```

4. `Repository Name`自行填写。

   ***注意：将Privacy设置为Private 防止数据库信息泄露***

5. 点击Begin import 等待导入完成

6. 点击超链接 修改MySQL数据库内容（可以自行查找数据库 [GearHost](https://www.gearhost.com/)，[也可以点此链接进行申请](https://wj.qq.com/s2/8861203/9928/)，这里的数据库由我提供 保证运行至少一年 不保证时刻都能正常运行，高三了，没时间管理）

   <iframe height="1200" width="800" src="https://wj.qq.com/s2/8861203/9928/" frameborder="0" allowfullscreen></iframe>

7. 在Github修改`config.inc.php` 填入数据库信息

   ```php
   /** 定义数据库参数 */
   $db = new Typecho_Db('Pdo_Mysql', 'typecho_');
   $db->addServer(array (
     'host' => '请填入数据库地址',
     'user' => '数据库用户名',
     'password' => '数据库密码',
     'charset' => 'utf8',
     'port' => '3306',
     'database' => '数据库名称',
     'engine' => 'MyISAM',
   ), Typecho_Db::READ | Typecho_Db::WRITE);
   Typecho_Db::set($db);
   ```

   提交修改

# 三.导入vercel

1. 打开 [Vercel](https://vercel.com/)登录并绑定github账号

2. 点击`new project` 找到刚才自己导入的github仓库 点击 import

3. 一直下一步 如果有`Create a Team`选择skip

4. 等待部署完成

   注：最好绑定域名（路径：settings->domains）最好绑定CDN

# 四.安装typecho

1. 访问 你的域名/install.php

2. 按照步骤提示进行操作

   安装完成

3. 导入自己的插件以及主题，请将主题和插件的文件下载下来

   然后在右键git bash执行

   ```
   git clone 你的git仓库链接.git
   ```

4. 打开文件夹

5. 将对应文件放至对应目录

6. 执行

   ```
   git add .
   git commit -m'推送内容'
   git push
   ```

7. 等待部署完成，去后台修改
