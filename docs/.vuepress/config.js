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
        text: '首页',
        link: '/',
      },
      {
        text: '介绍',
        link: '/introduction/',
      },
      {
        text: '原则',
        link: '/principle/',
      },
      {
        text: '工具',
        link: '/utils/',
      },
      {
        text: '变量',
        items: [
          {
            text: '总览',
            link: '/variables/index',
          },
          {
            text: '初始 initial',
            link: '/variables/initial',
          },
          {
            text: '衍生 derived',
            link: '/variables/derived',
          },
          {
            text: '元素 elements',
            link: '/variables/elements',
          },
          {
            text: '布局 layout',
            link: '/variables/layout',
          },
          {
            text: '组件 components',
            link: '/variables/components',
          },
        ],
      },
      {
        text: '重置',
        link: '/reset/',
      },
      {
        text: '通用',
        items: [
          {
            text: '总览',
            link: '/classes/index',
          },
          {
            text: '定位 positioning',
            link: '/classes/positioning',
          },
          {
            text: '盒模型 box-model',
            link: '/classes/box-model',
          },
          {
            text: '排版 typography',
            link: '/classes/typography',
          },
          {
            text: '视觉 visual',
            link: '/classes/visual',
          },
          {
            text: '杂项 misc',
            link: '/classes/misc',
          },
        ],
      },
      {
        text: '元素',
        items: [
          {
            text: '总览',
            link: '/elements/index',
          },
          {
            text: '按钮 button',
            link: '/elements/button',
          },
          {
            text: '输入框 input',
            link: '/elements/input',
          },
        ],
      },
      {
        text: '布局',
        items: [
          {
            text: '总览',
            link: '/layout/index',
          },
          {
            text: '页面 page',
            link: '/layout/page',
          },
          {
            text: '栅格 grid',
            link: '/layout/grid',
          },
        ],
      },
      {
        text: '组件',
        items: [
          {
            text: '总览',
            link: '/components/index',
          },
          {
            text: '徽标 badge',
            link: '/components/badge',
          },
          {
            text: '卡片 card',
            link: '/components/card',
          },
          {
            text: '分割线 divider',
            link: '/components/divider',
          },
          {
            text: '图标 icon',
            link: '/components/icon',
          },
          {
            text: '遮罩 overlay',
            link: '/components/overlay',
          },
        ],
      },
      {
        text: '最佳实践',
        link: '/best-practices/',
      },
    ],
    sidebar: {
      '/variables/': ['', 'initial', 'derived', 'elements', 'layout', 'components'],
      '/elements/': ['', 'button', 'input'],
      '/classes/': ['', 'positioning', 'box-model', 'typography', 'visual', 'misc'],
      '/layout/': ['', 'page', 'grid'],
      '/components/': ['', 'badge', 'card', 'divider', 'icon', 'overlay'],
      '/': 'auto',
    },
    sidebarDepth: 4,
    lastUpdated: 'Last Updated',
    repo: 'MillCloud/mp-scss',
    repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '编辑此页面',
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
    'vuepress-plugin-code-copy',
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
