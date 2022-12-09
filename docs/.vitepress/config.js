module.exports = {
  title: 'UV-UI',
  themeConfig: {
    lastUpdated: true,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此⽹站',
    repo: 'https://gitee.com/login',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Monster'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            { text: 'Icon', link: '/component/icon' },
            { text: 'Button', link: '/component/button' }
          ]
        }
      ]
    }
  }
}