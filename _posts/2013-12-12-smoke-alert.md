---
date: 2017-07-29 13:24:49
layout: post
title: Jquery
#简介
subtitle: 初识jquery
#搜索关键字
description: jQuery是一款优秀的JavaScript库，从命名可以看出jQuery最主要的用途是用来做查询
image: https://res.cloudinary.com/dm7h7e8xj/image/upload/v1559824021/theme12_e0vxlr.jpg
optimized_image: https://res.cloudinary.com/dm7h7e8xj/image/upload/c_scale,w_380/v1559824021/theme12_e0vxlr.jpg
subtitle: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
category: 'blog'
tags:
    - jquery
    - 笔记
author: thiagorossener
---

### jQuery是什么？

- jQuery是一款优秀的JavaScript库，从命名可以看出jQuery最主要的用途是用来做查询（jQuery=js+Query）.
- 在jQuery官方Logo下方还有一个副标题（write less, do more）, 体现了jQuery除了查询以外,还能让我们对HTML文档遍历和操作、事件处理、动画以及Ajax变得更加简单
- 体验jQuery
- 原生JS设置背景（先不要求看懂代码，先看看谁更爽）

```
<script>

// 查询

    var div = document.getElementsByTagName("div");

    var one = document.getElementsByClassName("one");

    var two = document.getElementById("two");

// 操作css

    div[0].style.backgroundColor = "red";

    one[0].style.backgroundColor = "yellow";

    two.style.backgroundColor = "blue";

</script>
```

- 使用jQuery设置背景

```
<script>

  $(document).ready(function () {

// 查询，操作CSS一步到位

      $("div").eq(0).css('background', 'red');

      $(".one").eq(0).css('background', 'yellow');

      $("#two").css('background', 'blue');

  });

</script>
```

### 为什么要使用jQuery？

强大选择器: 方便快速查找DOM元素



- ​    	如上面实例所展示一样，通过jQuery查找DOM元素要比原生js快捷很多
-    	jQuery允许开发者使用CSS1-CSS3几乎所有的选择器,以及jQuery独创的选择器

链式调用: 可以通过.不断调用jQuery对象的方法



- 如上面实例所展示一样，jQuery可以通过.（点）.不断调用jQuery对象的方法，而原生JavaScript则不一定
``` 
    <script>
    
        // 1.原生JavaScript
    
        var div = document.getElementsByTagName("div");
    
        // 报错,必须分开写
    
        div[0].style.backgroundColor = "red".width = 200+"px";
    
    //    div[0].style.width = 200+"px";
    
    // 2.jQuery
    $(document).ready(function () {
    // 不报错,后面还可以接着继续写
        $("div").eq(1).css('background', 'yellow').css('width', '200px');
    }); 
    </script>
```    
- 隐式遍历(迭代): 一次操作多个元素
``` 
     <script>
         // 1.原生JavaScript
        var div = document.getElementsByTagName("div");
     //    div.style.backgroundColor = "red";// 无效
         for(var i = 0; i<div.length; i++){
             div[i].style.backgroundColor = "red";
        }
``` 
    // 2.jQuery
    $(document).ready(function () {
        // 隐式遍历(迭代)找到的所有div
        $("div").css('background', 'yellow');
    });
    </script>
- 读写合一: 读数据/写数据使用是一个函数

```
<script>
    $(document).ready(function () {
        // 读取数据
        var $tx = $("div").eq(0).text();
        alert($tx);
        // 写入数据
        $("div").eq(0).text("新的数据");
    });
</script>
```

- 事件处理
- DOM操作(C增U改D删)
- 样式操作
- 动画
- 丰富的插件支持
- 浏览器兼容(前端开发者痛点)

1.x：兼容ie678，但相对其它版本文件较大，官方只做BUG维护，功能不再新增，最终版本：1.12.4 (2016年5月20日).

2.x：不兼容ie678，相对1.x文件较小，官方只做BUG维护，功能不再新增，最终版本：2.2.4 (2016年5月20日)

3.x：不兼容ie678，只支持最新的浏览器，很多老的jQuery插件不支持这个版本，相对1.x文件较小，提供不包含Ajax/动画API版本。

应该选择几点几版本jQuery?

- ​	查看百度网页源码使用1.x
- ​	查看腾讯网页源码使用1.x
- ​	查看京东网页源码使用1.x
- ​	综上所述学习1.x,选择1.x

应该使用开发板还是生产版?

开发板: 所有代码没有经过压缩,体积更大(200-300KB)
生产版:所有代码经过压缩,提及更小(30-40KB)
初学者为了更好的理解jQuery编码时使用开发板,项目上线时为了提升访问速度使用生产版
... ...
如何使用jQuery？
下载jQuery库
下载地址: http://code.jquery.com/
引入下载的jQuery库

```
<head>
    <meta charset="UTF-8">
    <title>01-初识jQuery</title>
    <script src="code/js/jquery-1.12.4.js"></script>
</head>
```

编写jQuery代码

```
<script>
    $(document).ready(function () {
      // 所有jQuery代码写在这里面
         alert("hello LNJ");
    });
</script>
```
