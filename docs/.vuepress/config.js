const { config } = require('vuepress-theme-hope');

module.exports = config({
  base: '/mp-scss/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '@modyqyw/mp-scss',
      description:
        '一个基于 Flexbox 的小程序 SCSS 库，用于快速实现自定义设计。如有问题请尝试强制刷新。',
    },
  },
  themeConfig: {
    // 主题配置 https://vuepress-theme-hope.github.io/zh/config/theme/
    author: 'ModyQyW <wurui7@mail3.sysu.edu.cn>',
    nav: [
      { text: '指南', link: '/guide/' },
      {
        text: '内容',
        items: [
          {
            text: '重置 reset',
            prefix: '/reset/',
            items: [{ text: '重置总览 reset', link: '' }],
          },
          {
            text: '通用类 classes',
            prefix: '/classes/',
            items: [
              { text: '通用类总览 classes', link: 'index' },
              { text: '定位类 positioning', link: 'positioning' },
              { text: '盒模型类 box-model', link: 'box-model' },
              { text: '排版类 typography', link: 'typography' },
              { text: '视觉类 visual', link: 'visual' },
              { text: '杂项类 misc', link: 'misc' },
            ],
          },
          {
            text: '布局类 layout',
            prefix: '/layout/',
            items: [
              { text: '布局类总览 layout', link: 'index' },
              { text: '页面布局类 page', link: 'page' },
              { text: '栅格系统类 grid', link: '/layout/grid' },
            ],
          },
          {
            text: '组件类 components',
            prefix: '/components/',
            items: [
              { text: '组件类总览 components', link: 'index' },
              { text: '徽标类 badge', link: 'badge' },
              { text: '按钮类 button', link: 'button' },
              { text: '卡片类 card', link: 'card' },
              { text: '分割线类 divider', link: 'divider' },
              { text: '图标类 icon', link: 'icon' },
              { text: '输入框类 input', link: 'input' },
              { text: '加载器类 loader', link: 'loader' },
              { text: '遮罩类 overlay', link: 'overlay' },
            ],
          },
        ],
      },
      { text: '进阶', link: '/advance/' },
      { text: '改动日志', link: '/changelog/' },
      { text: '赞赏', link: '/donation/' },
      { text: 'Gitee', link: 'https://gitee.com/ModyQyW/mp-scss#readme' },
      { text: 'Github', link: 'https://github.com/ModyQyW/mp-scss#readme' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: ['', 'getting-started', 'implement'],
        },
      ],
      '/classes/': [
        '',
        'positioning',
        'box-model',
        'typography',
        'visual',
        'misc',
      ],
      '/layout/': ['', 'page', 'grid'],
      '/components/': [
        '',
        'badge',
        'button',
        'card',
        'divider',
        'icon',
        'input',
        'loader',
        'overlay',
      ],
      '/': [''],
    },
    hostname: 'https://modyqyw.top',
    sidebarDepth: 4,
    editLinks: false,
    blog: false,
    pageInfo: false,
    mdEnhance: {
      lineNumbers: true,
    },
    comment: false,
    copyright: false,
    pwa: {
      favicon: '/favicon.ico',
    },
    feed: false,
  },
  plugins: [
    [
      'helper-live2d',
      {
        live2d: {
          model: 'wanko',
          display: {
            position: 'right',
            width: 135,
            height: 300,
            hOffset: 65,
            vOffset: 0,
          },
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3, 4] },
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  evergreen: true,
});
