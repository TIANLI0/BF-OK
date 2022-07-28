---
title: 说说
date: 2021-05-29 22:00:14
top_img: transparent
comments: false
aside: false
---

<div id='speak'></speak>
<!-- 使用markdown渲染 -->
<script type="text/javascript" src="https://cdn1.tianli0.top/npm/nanshen/js/blog/bb/ispeak-bber.min.js" charset="utf-8" ></script>
<!-- 不使用markdown渲染 -->
<script type="text/javascript" src="https://cdn1.tianli0.top/npm/ispeak-bber/ispeak-bber.min.js" charset="utf-8" ></script>
<!-- 解析微信表情（参考：https://github.com/buddys/qq-wechat-emotion-parser） -->
<script src="https://cdn1.tianli0.top/gh/buddys/qq-wechat-emotion-parser@master/dist/qq-wechat-emotion-parser.min.js"></script>
<script>
ispeakBber
    .init({
      el: '#speak', // 容器选择器
      name: 'Tianli 🦄', // 显示的昵称
      envId: 'bber-2gzv4kve539818ce', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 10, // 每次加载的条数，默认为5
      avatar: 'https://img1.tianli0.top/logo.png', // 头像地址
      fromColor:'rgb(245, 150, 170)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
      loadingImg: 'https://img1.tianli0.top/loading.gif', // 自定义loading的图片，示例值为默认值
      dbName:'talks' // 数据的名称，默认talks，避免有人的命名不是这个，所以加入此配置字段。
    })
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('哔哔 加载完成 by Tianli')
    })
</script>
