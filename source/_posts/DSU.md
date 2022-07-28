---
title: 浅谈安卓系统上的DSU loader
date: 2022-07-04 18:15:08
updated: 2022-07-04 18:15:08
tags:
 - 杂谈
cover: https://img1.tianli0.top/IMG_20220704_181618.png
---
# 什么是DSU loader?

1. `dsu loader`即 `动态系统更新`可以在使用动态分区的安卓设备上，不影响原来系统的同时安装一个副系统，用于体验最新的原生安卓系统(AOSP)（**博主评：相比传统刷机模式，dsu通过刷入系统到副分区的做法，显然更能降低手机刷机风险，毕竟能在系统崩溃后自动重启到主分区，不过刷入的都是[GSI](https://blog.csdn.net/weixin_39839478/article/details/111232514 "什么是GSI？")，驱动什么的都没有做适配，更别说国内高度定制化rom，能不能启动都是问题，而且就酷安的相关求助帖来看bug很多，也有变砖的，*所以我并不推荐尝试DSU***）
2. 动态系统更新 (DSU) 是 Android 10 中引入的一项系统功能，可执行以下操作：
   a. 将新的 GSI（或其他 Android 系统映像）下载到您的设备上。
   b. 创建新的动态分区。
   c. 将下载的 GSI 加载到新的分区。
   d. 在设备上将 GSI 作为副操作系统启动。
   e. 通常情况下你的安卓手机有a/b分区才能启用此功能.
3. 想要尝试DSU请确保以下信息
   您是多年刷机老司机，精通卡刷线刷TWRP
   系统安卓版本号在安卓11以上
   手机支持a/b动态分区 可通过[Treble Check](https://play.google.com/store/apps/details?id=com.kevintresuelo.treble)检测
   推荐解锁[**BootLoader**](https://baike.baidu.com/item/Bootloader/8733520),因为导致手机变砖不可预测
4. **（免责声明：以上看不懂就别刷了，手机变砖我不管）**

# 如何使用dsu loader?

> 以国内color os 为例 系统版本为安卓12

1. 打开手机开发者选项（防小白就不放图和操作了）
2. 找到DSU Loader
3. then Select DSU package（国内厂商的系统一般有两个可选，有GMS字符代表有谷歌基础服务套件的版本）
4. 选择好版本后静待手机下载，下载完成后会提示重启
5. 烧香（祈祷手机没事）
6. A.准备售后或者自己刷机 B.成功启动，bug巨多
7. 推荐一个相关的开源项目[DSU Sideloader](https://github.com/VegaBobo/DSU-Sideloader)


> 相关资料引用自[Android 开发者  |  Android Developers (google.cn)](https://developer.android.google.cn/?hl=zh-cn)
