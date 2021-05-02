---
title: 基于github的图床搭建
date: 2021-04-25 08:19:45
tags: 
 - 教程
 - 图床
cover: https://img1.tianli0.top/img2_cover.jpeg
---

> 基于github和jsdelivr的图床搭建
>
> 这个开源项目是在看小嘉的blog时看到的，在此感谢小嘉与开发者

{% btn https://git.code.tencent.com/yyhy/ImgBed,开源地址,far fa-image,orange larger %}  {% btn https://img2.tianli0.top,示例地址,far fa-image,orange larger %}





![](https://img1.tianli0.top/img2_cover.jpeg)



# 开始搭建

## 环境准备：带php的服务器，Nginx或Apache等运行环境

## 开始

1. 打开SSH连接到你的服务器，cd进入你需要的目录

2. 输入

   ```sh
   git clone https://git.code.tencent.com/yyhy/ImgBed.git
   ```

3. 打开宝塔面板新建一个站点，设置运行目录为/Public
4. 然后配置伪静态，Apache无需配置，nginx伪静态规则在程序根目录有个nginx.txt，复制规则配置即可
5. 之后给所有目录777权限，然后配置/App/Database.php内的mysql数据库信息，还有用户名密码（后台用）,最后导入mysql数据库即可（根目录的install.sql），如果安装后出现异常问题，请配置/App/Config.php中的debug为true
6. 默认后台用户名为admin密码为123456
7. 默认管理路径为`你的图床网址/admin`
8. 然后配置好github即可



# 图床api说明

APi接口文档

> 说明：使用此接口你可以自行开发系统对接我们的图床系统！

> 拉取API服务器配置

请求URL:`https://img2.tianli0.top/api/upload_config`
请求方式:`GET`
响应格式:`JSON`
响应说明:

```json
code 状态码，为1时正常其余都是错误
msg 返回信息描述
allowtype 允许上传的格式
max_upload 最大上传大小(单位:kb)
max_uploads 最多上传数量(用作API时基本没有实际意义)
```

响应示例:

```json
{
    "code":1,
    "msg":"拉取成功！",
    "allowtype":["jpg","png","gif","jpeg","JPG","PNG","GIF","JPEG"],
    "max_upload":10240,
    "max_uploads":"10"
}
```

> 上传文件

请求URL:`https://img2.tianli0.top/api/upload/(可选:token,在用户中心获取)`
PS:带上Token即为以你用户身份上传的图片
请求方式:`POST`
请求参数:`fileupload(FILE)`
响应格式:`JSON`
响应说明:

```json
success 状态码，为true时正常其余都是错误
error 上传失败时返回信息描述
url 上传成功时返回的图片链接
```

响应示例:

```json
{
    "success":true,
    "url":"https://img2.tianli0.top/api/img/12"
}
```

> 拉取探索

请求URL:`https://img2.tianli0.top/api/output/第几页(留空为第一页)`
请求方式:`GET`
响应格式:`JSON`
响应说明:

```json
code 状态码，为1时正常其余都是错误
msg 返回信息描述
count 当前服务器图片总数
page 当前分页处于第几页
pages 共有多少页
data 数据
data->url 图片链接
data->addtime 上传时间戳
data->ip 上传IP(打码处理)
```

响应示例:

```json
{
    "code":1,
    "data":[
        {"url":"https://img2.tianli0.top/api/img/3732","ip":"118.113.***.107","addtime":1591297120},
        ...
        {"url":"https://img2.tianli0.top/api/img/3731","ip":"14.112.***.219","addtime":1591248873}
    ],
    "count":3719,
    "page":"1",
    "pages":74
}
```