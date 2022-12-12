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
            { text: 'Button 按钮', link: '/component/button' },
            { text: 'Cell 单元格', link: '/component/cell' },
            { text: 'Icon 图标', link: '/component/icon' },
            { text: 'Popup 弹出层', link: '/component/popup' },
            { text: 'Toast 轻提示', link: '/component/toast' },
            { text: 'Message 消息提示框', link: '/component/message' },
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/component/input' },
            { text: 'Select 选择器', link: '/component/select' },
            { text: 'Checkbox 多选框', link: '/component/checkbox' },
            { text: 'Radio 单选框', link: '/component/radio' },
            { text: 'NumInput 数字键盘', link: '/component/numInput' },
            { text: 'Picker 选择器', link: '/component/picker' },
            { text: 'Form 表单', link: '/component/form' },
            { text: 'Search 搜索框', link: '/component/search' },
            { text: 'Slider 滑块', link: '/component/slider' },
            { text: 'Switch 开关', link: '/component/switch' },
            { text: 'Stepper 步进器', link: '/component/stepper' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'ActionSheet 动作面板', link: '/component/actionSheet' },
            { text: 'Overlay 遮罩层', link: '/component/overlay' },
            { text: 'Dialog 弹出框', link: '/component/dialog' },
            { text: 'SwipeCell 滑动单元格', link: '/component/swipeCell' },
            { text: 'Rate 评分', link: '/component/rate' },
            { text: 'Divider 分割线', link: '/component/divider' },
          ]
        },
        {
          text: '展示组件',
          items: [
            { text: 'Collapse 折叠面板', link: '/component/collapse' },
            { text: 'NoticeBar 通知栏', link: '/component/noticeBar' },
            { text: 'Popover 气泡弹出框', link: '/component/popover' },
            { text: 'Swipe 轮播', link: '/component/swipe' },
            { text: 'WaterWaves 水波球', link: '/component/waterWaves' },
            { text: 'CountTo 数字滚动', link: '/component/countTo' },
            { text: 'Steps 步骤条', link: '/component/steps' },
            { text: 'Table 表格', link: '/component/table' },
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'Tab 标签页', link: '/component/tab' },
            { text: 'Grid 宫格', link: '/component/grid' },
            { text: 'NavBar 导航栏', link: '/component/navBar' },
            { text: 'TabBar 标签栏', link: '/component/tabBar' },
            { text: 'SideBar 侧边导航', link: '/component/sideBar' },
            { text: 'Pagination 分页', link: '/component/pagination' }
          ]
        },
      ]
    }
  }
}