// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '电脑',
    link: '/pc/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '操作系统',
        items: [
		  
          { text: 'windows', link: '/posts/14.html' },		 
          { text: 'linux', link: '/posts/27.html' }
		  
        ],
      },
      {
        text: '硬件',
        items: [
          { text: '《CPU》', link: '/note/javascript/' },
          { text: '《内存》', link: '/note/js/' },
          { text: '《主板》', link: '/note/es6/' },
          { text: '《硬盘》', link: '/note/vue/' },
          {
            text: '《电源》',
            link: '/note/typescript-axios/',
                  },
        ],
      },
    ],
  },
  {
    text: '手机',
    link: '/phone/',
    items: [
      
	  { text: '手机软件', link: '/pages/18.html' },
      { text: '手机系统', link: '/pages/18.html' },
    ],
  },
  {
    text: '网络技术',
    link: '/web/',
    items: [
      { text: '玩转矿渣', link: '/posts/20.html' },
      { text: 'GitHub相关', link: '/pages/4c778760be26d8b3/' },
      { text: '网络技巧', link: '/posts/13.html' },
      { text: '博客搭建', link: '/posts/2.html' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
      { text: '资源', link: '/pages/eee83a9211a70f9d/' },
      { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
