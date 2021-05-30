---
title: 说说
date: 2021-05-29 22:00:14
top_img: transparent
---

<div id='speak-bber'></speak>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber@1.4.2/ispeak-bber.min.js" charset="utf-8" ></script>
<script>
ispeakBber
    .init({
      el: '#speak-bber',
      name: 'Tianli 🦄', // 显示的昵称
      envId: 'bber-2gzv4kve539818ce', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 12, // 每次加载的条数，默认为5
      avatar: 'https://img1.tianli0.top/logo.png',
      fromcolor:'rgb(245, 150, 170)'
    })
    .then(function() {
      console.log('ispeak 加载完成')
    })
</script>

