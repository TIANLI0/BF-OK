---
title: Hexo插件推荐—博文加密插件
date: 2021-03-26 23:24:23
tags: 
 - 教程
 - hexo插件
cover: https://img1.tianli0.top/h-e.png
---



> 在文章创作过程中你可能会有一些比较私密的文章，这对于动态php博客来说非常简单，可是对于hexo这样的静态博客来说太难了
>
> 偶然间我发现了[hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt)这款插件，可以加密博文，且有多种样式可选

`废话不多说，直接开始`

## 1.[hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt)安装

在根目录执行以下命令

```
npm install --save hexo-blog-encrypt
```

## 2.配置

### 2.1.Front matter配置方法

```markdown

---
title: Hello World
tags:
- 作为日记加密
date: 2016-03-30 21:12:21
password: mikemessi   #您的密码
abstract: 有东西被加密了, 请输入密码查看. #提示信息
message: 您好, 这里需要密码.  #密码框提示信息
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试. #密码错误提示信息
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容. #错误信息提示

---
```

### 2.2.针对Tag的加密

将以下代码复制到`_config.yml`

```yaml
# Security
encrypt: # hexo-blog-encrypt
  abstract: 有东西被加密了, 请输入密码查看.
  message: 您好, 这里需要密码.
  tags:
  - {name: tagName, password: 密码A}
  - {name: tagName, password: 密码B}
  wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
  wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
```

## 3.[Demo](https://tianli-blog.club/Test/)

## 4.插件[Github](https://github.com/D0n9X1n/hexo-blog-encrypt)

![https://img1.tianli0.top/h-g01.jpeg](https://img1.tianli0.top/h-g01.jpeg)