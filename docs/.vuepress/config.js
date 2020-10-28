module.exports = {
  base: '/mp-scss/',
  title: '@modyqyw/mp-scss',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/favicon.ico`,
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#65b687',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/favicon.ico',
        color: '#000000',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-Hans',
    },
  },
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '重置',
        link: '/reset/',
      },
      {
        text: '内容',
        items: [
          {
            text: '通用类 classes',
            items: [
              {
                text: '通用类总览 classes',
                link: '/classes/index',
              },
              {
                text: '定位类 positioning',
                link: '/classes/positioning',
              },
              {
                text: '盒模型类 box-model',
                link: '/classes/box-model',
              },
              {
                text: '排版类 typography',
                link: '/classes/typography',
              },
              {
                text: '视觉类 visual',
                link: '/classes/visual',
              },
              {
                text: '杂项类 misc',
                link: '/classes/misc',
              },
            ],
          },
          {
            text: '布局类 layout',
            items: [
              {
                text: '布局类总览 layout',
                link: '/layout/index',
              },
              {
                text: '页面布局类 page',
                link: '/layout/page',
              },
              {
                text: '栅格系统类 grid',
                link: '/layout/grid',
              },
            ],
          },
          {
            text: '组件类 components',
            items: [
              {
                text: '组件类总览 components',
                link: '/components/index',
              },
              {
                text: '徽标类 badge',
                link: '/components/badge',
              },
              {
                text: '按钮类 button',
                link: '/components/button',
              },
              {
                text: '卡片类 card',
                link: '/components/card',
              },
              {
                text: '分割线类 divider',
                link: '/components/divider',
              },
              {
                text: '图标类 icon',
                link: '/components/icon',
              },
              {
                text: '输入框类 input',
                link: '/components/input',
              },
              {
                text: '遮罩类 overlay',
                link: '/components/overlay',
              },
            ],
          },
        ],
      },
      {
        text: '进阶',
        link: '/best-practices/',
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/millcloud/mp-scss#readme'
      },
      {
        text: 'Github',
        link: 'https://github.com/MillCloud/mp-scss#readme'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: ['', 'getting-started'],
        },
        {
          title: '原则',
          collapsable: false,
          children: ['design', 'implement'],
        },
      ],
      '/classes/': ['', 'positioning', 'box-model', 'typography', 'visual', 'misc'],
      '/layout/': ['', 'page', 'grid'],
      '/components/': ['', 'badge', 'button', 'card', 'divider', 'icon', 'input', 'overlay'],
      '/': 'auto',
    },
    sidebarDepth: 4,
    lastUpdated: 'Last Updated',
    repo: 'MillCloud/mp-scss',
    repoLabel: '查看源码',
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          hour12: false,
        },
      },
    ],
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '新内容可用。',
          buttonText: '刷新',
        },
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://millcloud.github.io',
      },
    ],
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
};
