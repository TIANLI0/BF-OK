---
title: 升学堂json获取
date: 2021-01-28 17:47:39
tags: 
 - 教程
cover: https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/sxt/1.jpg
---
> 引入：鉴于绵阳市教研所不对成绩排名等信息完全公开，这个时候就需要一定的技术手段来解决。此文章就是对获取这些数据的教程。

> 1.首先确保你有足够的技术和理解能力来折腾

> 2.请勿用于非法用途

----
# 准备工作
## APP安装及环境配置
### 升学堂学生端的安装
本文不做赘述
### 抓包软件安装及环境配置
本教程使用[Httpcanary](https://www.lanzoui.com/iderqgx2u9a)(点击即刻下载）
1. 下载并安装
2. 进入主界面->从左向右滑->进入设置页
3. ![如图](https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/sxt/2.jpg)进入SSL证书设置，导入证书
4. 接下来跟着系统提示走就行了
----
# 实例
## 抓包引入
抓包介绍：抓包（packet capture）就是将网络传输发送与接收的数据包进行截获、重发、编辑、转存等操作，也用来检查网络安全。抓包也经常被用来进行数据截取等
更多资料可以查看👉🏻[百度百科](https://baike.baidu.com/item/%E6%8A%93%E5%8C%85/9929103)
## 正式开始
### 抓包设置
1. 把抓包目标应用设置为升学堂学生端
![s](https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/sxt/2.jpg)
上面配置SSL证书那个设置界面，自己找
2. 回到HttpCanary主界面，右下角有个飞机按钮，点一下
3. 打卡升学堂成绩详情页面
4. 返回到httpCanary
5. 再点一下小飞机在搜索界面搜索`http://portal.sxw.cn/sxt-h5/api/gateway/analysis/AnalysisMobileStudentApi_findScoreList`
6. 打开![,](https://tuchuang-1258604854.cos.ap-chengdu.myqcloud.com/sxt/3.jpg)如图所示内容再点一下就是此次成绩的json文件了
7. 含义解释:

`classRank :班级排名
schoolRank :学校排名
rank:考试有效排名人数
countyRank :  总排名
gainScore :  分数`
其他请自行翻译

# 结语
有什么问题可以在评论区问我
不会搞的不要瞎搞
评论区邮箱只需要填写QQ
转载请注明链接
本文的APP来源于网络
（HXD们多看一下，这个站点缺流量）
