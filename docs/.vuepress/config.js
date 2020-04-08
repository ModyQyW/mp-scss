module.exports = {
  base: '/mp-scss/',
  title: "@modyqyw/mp-scss",
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#65b687'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/favicon.ico'
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/favicon.ico',
      color: '#000000'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/favicon.ico'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '准备',
        link: '/preparation/'
      },
      {
        text: '变量',
        link: '/variables/'
      },
      {
        text: '重置样式',
        link: '/normalize/'
      },
      {
        text: '组件样式',
        link: '/components/'
      },
      {
        text: '类样式',
        link: '/classes/'
      },
      {
        text: '主站',
        link: 'https://modyqyw.github.io'
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 3,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    repo: 'ModyQyW/mp-scss',
    repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '编辑此页面'
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "新内容可用。",
          buttonText: "刷新"
        }
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://modyqyw.top'
      }
    ],
    [
      'helper-live2d',
      {
        live2d: {
          model: 'wanko',
          display: {
            position: "right",
            width: 135,
            height: 300,
            hOffset: 65,
            vOffset: 0
          }
        }
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github-v4',
        owner: 'ModyQyW',
        repo: 'mp-scss',
        clientId: 'ee62eae699b0c63fb4c2',
        clientSecret: '68b0ceecccc462ce8bdd73c2c02e261cb355506e',
        baseURL: 'https://github.com'
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  evergreen: true
}