---
title: 你也可以拥有自己的随机图片api
date: 2021-02-16 11:43:20
updated: 2021-02-16 11:43:20
tags: 
 - api
 - 教程
cover: https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/web/bwt/1613378482723.png
---
> 如果你经常访问我的主页面你会发现，每次刷新，背景图都不一样。这是因为我使用了随即图片的api，那么网络上那么多随机图片的api，但是觉得质量不够怎么办呢？十几行代码轻松解决问题。

# 我的api

api链接:https://img.api.tianli0.top

**服务器预计将在3月迁移**

> 所有图片都会在图库更新:

{% galleryGroup '动漫壁纸' '很漂亮的二刺螈壁纸啦' '/gallery/wallpaper.html' https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/web/123%20%2826%29.png %}
{% galleryGroup '2233专区' '收藏的2233高清壁纸' '/gallery/2233.html' https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/web/bwt/1613378591933.jpg %}



**效果展示:**

![api效果（刷新可换图片）](https://img.api.tianli0.top)

# 自建api

## 1.配置要求

1. 带php的服务器
2. 支持php语言的编辑器
3. 会`CTRL+C` `CTRL+V`

## 2.正式开始

1. 新建文件`index.php`，用编辑器打开输入以下代码

   ```php
   <?php
   $filename = "img.txt";
   if(!file_exists($filename)){
       die('文件不存在');
   }
    
   //从文本获取链接
   $pics = [];
   $fs = fopen($filename, "r");
   while(!feof($fs)){
       $line=trim(fgets($fs));
       if($line!=''){
           array_push($pics, $line);
       }
   }
    
   //从数组随机获取链接
   $pic = $pics[array_rand($pics)];
    
   //返回指定格式
   $type=$_GET['type'];
   switch($type){
    
   //JSON返回
   case 'json':
       header('Content-type:text/json');
       die(json_encode(['pic'=>$pic]));
    
   default:
       die(header("Location: $pic"));
   }
    
   ?>
   ```

2. 新建文件`img.txt`并输入你的图片链接，例如

   ```
   https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/web/bwt/1613378482723.png
   https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/web/bwt/1613378487460.png
   https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/web/bwt/1613378492085.png
   https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/web/bwt/1613378494541.png
   https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/web/bwt/1613378497358.png
   #注意，要一行一行的输入链接
   ```

3. 放入服务器网站目录即可运行

4. 通过爬虫爬取，因为我不会py，这里就放一个老哥的教程链接啦https://blog.lyh6.top/post/xiaojiejiebizhi/

代码解释：读取当前目录`img.txt`文件里的链接数据，并随机重定向到一个链接

> 本教程参照了网络上其他大佬的教程，但是由于历史悠久，原教程链接找不到了。

------

# 优秀随机图片api推荐



> 岁月小筑 [https://img.xjh.me](https://img.xjh.me/)

[![。](https://img.xjh.me/random_img.php?return=302&type=bg&ctype=acg)](https://img.xjh.me/random_img.php?return=302&type=bg&ctype=acg)

> 保罗API https://api.paugram.com/help/wallpaper

[![。](https://api.paugram.com/wallpaper/?source=sina&category=jp)](https://api.paugram.com/wallpaper/?source=sina&category=jp)

> 搏天API https://api.btstu.cn/doc/sjbz.php

[![。](https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images)](https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images)

> 墨天逸 [http://api.mtyqx.cn](http://api.mtyqx.cn/)

[![。](http://api.mtyqx.cn/tapi/random.php)](http://api.mtyqx.cn/tapi/random.php)

> 暗鸭api https://img.r10086.com/ 多种api任君挑选



![](https://api.r10086.com/%E5%8A%A8%E6%BC%AB%E7%BB%BC%E5%90%882.php)