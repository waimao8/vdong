---
title: hexo安装的使用教程
date: '2019/9/9 14:37:42'
tags: CSDN迁移
abbrlink: 6120080b
---
 [ ](http://creativecommons.org/licenses/by-sa/4.0/) 版权声明：本文为博主原创文章，遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。  本文链接：[https://blog.csdn.net/hao131416888/article/details/89063086](https://blog.csdn.net/hao131416888/article/details/89063086)   
    
  一、安装主题（next）  
 [https://theme-next.org/docs/getting-started/](https://theme-next.org/docs/getting-started/)  
 [https://www.haomwei.com/technology/maupassant-hexo.html](https://www.haomwei.com/technology/maupassant-hexo.html) （大道至简）  
 下载主题解压后放到themes目录  
 编辑主目录的_config.yml 查找language 设置 language: zh-CN  
 二、添加分类  
 1、创建“分类”选项  
 1.1 生成“分类”页并添加tpye属性  
 打开命令行，进入博客所在文件夹。执行命令

 
```
hexo new page categories

```
 成功后会提示：

 
```
INFO  Created: ~/Documents/blog/source/categories/index.md

```
 根据上面的路径，找到index.md这个文件，打开后默认内容是这样的：

 
```
---
title: 文章分类
date: 2019-04-07 0:30:00
---

```
 添加type: "categories"到内容中，添加后是这样的：

 
```
---
title: 文章分类
date: 2019-04-07 0:30:00
type: "categories"
---

```
 保存并关闭文件。

 三、给文章添加“categories”属性  
 打开需要添加分类的文章，为其添加categories属性。下方的categories: web前端表示添加这篇文章到“web前端”这个分类。注意：hexo一篇文章只能属于一个分类，也就是说如果在“- web前端”下方添加“-xxx”，hexo不会产生两个分类，而是把分类嵌套（即该文章属于 “- web前端”下的 “-xxx ”分类）。

 
```
---
title: jQuery对表单的操作及更多应用
date: 2019-04-07 0:31:22
categories: 
- web前端
---

```
 至此，成功给文章添加分类，点击首页的“分类”可以看到该分类下的所有文章。当然，只有添加了categories: xxx的文章才会被收录到首页的“分类”中。  
 四、创建“标签”选项  
 生成“标签”页并添加tpye属性  
 打开命令行，进入博客所在文件夹。执行命令

 
```
hexo new page tags

```
 找到 source/tags/index.md  
 添加type: "tags"到内容中，添加后是这样的

 
```
---
title: 文章分类
date: 2019-04-07 0:33:55
type: "tags"
---

```
 保存并关闭文件。  
 五、给文章添加标签和分类

 
```
title: title #文章標題
date: 2019-04-07 00:43:12 #文章生成時間
categories: "Hexo教程" #文章分類目錄 可以省略
tags: #文章標籤 可以省略
     - 标签1
     - 标签2
 description: #你對本頁的描述 可以省略

```
 六、添加菜单  
 编辑主题的_config.yml，查找menu，去掉 tags categories about 前面的#号就可以了  
 7、绑定域名  
 新增CNAME文件  
 位置：hexo/source/CNAME  
 CNAME文件不要后缀  
 文件中填写你要绑定的域名  
 这样hexo d后域名才不会失效

   
  