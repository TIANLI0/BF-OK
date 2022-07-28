---
title: 使用gulp-replace实现全局替换jsd cdn加速链接（包括插件）
date: 2022-01-26 19:50:08
updated: 2022-01-26 19:50:08
tags: 教程
cover: https://img1.tianli0.top/jsd/jsd2.png
---
> 自从jsd官方的ICP被吊销以后，国内的大部分网站速度越来越慢，本文提供一个简单的可行性办法
>
> 使用前您最好先了解gulp[使用 gulp 压缩博客静态资源 | Akilar の糖果屋](https://akilar.top/posts/49b73b87/)
>
> 您可以参考闰土的[欲善其事，必利其器 - 论如何善用ServiceWorker || 陈YFの博客(￣▽￣)" (cyfan.top)](https://blog.cyfan.top/p/c0af86bb.html)
>
> 也可用我的一键替换

# 安装gulp及gulp-replace

hexo根目录运行

```
npm install gulp-cli -g
npm install gulp -D
npm install --save-dev gulp-replace
```

# 根目录创建文件gulpfile.js

填写以下内容

```javascript
const gulp = require('gulp');  //如果之前有gulp相关插件，请删除此行代码
const replace = require('gulp-replace');
gulp.task('templates', async() => {
  gulp.src('public/**/*.*')
    .pipe(replace('这里填写jsd官方域名', '您需要使用的cdn地址'))
    .pipe(gulp.dest('public/')),  { overwrite: true };
});
gulp.task("default", gulp.parallel('templates'));
```

根目录运行

```
gulp
```

即可替换成功（会全局替换所有文件的jsd链接）

GITHUB ACTIONS参考文件

```yaml
name: 自动部署
# 当有改动推送到master分支时，启动Action
on:
  push:
    branches:
      - main
      #2020年10月后github新建仓库默认分支改为main，注意更改
  release:
    types:
      - published

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: 检查分支
      uses: actions/checkout@v2
      with:
        ref: main

    - name: 安装 Node
      uses: actions/setup-node@v1
      with:
        node-version: "14.x"

    - name: 安装 Hexo
      run: |
        export TZ='Asia/Shanghai'
        npm install hexo-cli -g

  
    - name: 安装依赖
      if: steps.cache.outputs.cache-hit != 'true'
      run: |
        npm install gulp-cli -g #全局安装gulp
        npm install --save
        npm i gulp-replace --save

    - name: 生成静态文件
      run: |
        hexo clean
        hexo generate
        gulp


    - name: 部署
      run: |
        sudo su root
        git config --global user.name "您的github名"
        git config --global user.email "您的邮箱
      
```

# 以下是参考文档

## 使用

**简单的字符串替换**

```
var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('bar', 'foo'))
    .pipe(gulp.dest('build/'));
});
```

**简单的正则表达式替换**

```
var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    // See https://mdn.io/string.replace#Specifying_a_string_as_a_parameter
    .pipe(replace(/foo(.{3})/g, '$1foo'))
    .pipe(gulp.dest('build/'));
});
```

**字符串替换为函数回调**

```
var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('foo', function(match) {
      //替换“foo”的实例为“oof”
      return match.reverse();
    }))
    .pipe(gulp.dest('build/'));
});
```

**正则表达式替换为函数回调**

```
var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace(/foo(.{3})/g, function(match, p1, offset, string) {
      // 用barbaz替换foobaz并记录大量信息
      // See https://mdn.io/string.replace#Specifying_a_function_as_a_parameter
      console.log('Found ' + match + ' with param ' + p1 + ' at ' + offset + ' inside of ' + string);
      return 'bar' + p1;
    }))
    .pipe(gulp.dest('build/'));
});
```

**带文件对象的函数回调**

```
var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('filename', function() {
       //替代对象的“文件名”的实例为“file.txt的” 
      // this.file也可用于正则表达式替换
      //参见https://github.com/gulpjs/有关可用属性的详细信息乙烯＃实例的属性
      return this.file.relative;
    }))
    .pipe(gulp.dest('build/'));
});
```

**API**

`gulp-replace`可以用字符串或正则表达式调用。

```
replace(string, replacement[, options])
```

- `string`
  类型： `String`
  要搜索的字符串。
- `replacement`
  类型：`String`或`Function`
  替换字符串或函数。如果`replacement`是函数，则每次匹配都会调用一次，并将传递要替换的字符串。
  `this.file`的值将等于正在处理的文件的[vinyl instance](https://github.com/gulpjs/vinyl#instance-properties)实例。

```
replace(regex, replacement[, options])
```

- `regex`
  类型： `RegExp`
  要搜索的正则表达式模式。
- `replacement`
  类型：`String`或`Function`
  替换字符串或函数。有关特殊替换字符串模式和替换函数参数的详细信息
  `this.file`的值将等于正在处理的文件的[vinyl instance](https://github.com/gulpjs/vinyl#instance-properties)实例。

`gulp-replace`的`options`
`options`是可选的第三个参数。

- `options`
  类型： `Object`
- `options.skipBinary`
  类型：`boolean`
  默认值：`true`
  跳过二进制文件。默认情况下，此选项为`true`。如果要替换二进制文件中的内容，则必须将其显式设置为`false`
