---
date: 2019-08-23
layout: post
title: github远程库文件修改
subtitle: 在上传项目到github时,忘记忽略了某个文件夹target,就直接push上去了, 最后意识到了此问题,决定删除掉远程仓库中的target文件夹
image: https://zdnet1.cbsistatic.com/hub/i/2017/02/26/78ceb3e0-ab28-49de-a50e-b0fbde4e591c/4132d8c61c6fd3ed19044a64cc28a071/git-logo.jpg
optimized_image: https://www.edureka.co/blog/wp-content/uploads/2016/11/Git-Architechture-Git-Tutorial-Edureka-2.png
category: git版本控制系统
tags:
  - git
  - 工具
author: thiagorossener
---
在上传项目到github时,忘记忽略了某个文件夹target,就直接push上去了, 最后意识到了此问题,决定删除掉远程仓库中的target文件夹


在github上只能删除仓库,却无法删除文件夹或文件, 所以只能通过命令来解决

 

首先进入你的master文件夹下, Git Bash Here ,打开命令窗口

$ git --help                                      # 帮助命令 

$ git pull origin master                    # 将远程仓库里面的项目拉下来

$ dir                                                # 查看有哪些文件夹

$ git rm -r --cached target              # 删除target文件夹



$ git commit -m '删除了target'        # 提交,添加操作说明

![u9oXW9.png](https://s2.ax1x.com/2019/09/22/u9oXW9.png)

$ git push -u origin master               # 将本次更改更新到github项目上去

 ![u9TMTS.png](https://s2.ax1x.com/2019/09/22/u9TMTS.png)

操作完成.
