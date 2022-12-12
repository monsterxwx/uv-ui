module.exports = {
  title: 'UV-UI',
  themeConfig: {
    lastUpdated: true,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此⽹站',
    outline:false, // 大纲
    socialLinks: [
      { icon: 'github', link: 'https://github.com/monsterxwx/uv-ui' },
      { 
        icon: {
          svg: '<svg t="1670828084087" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1923" width="32" height="32"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1924"></path></svg>'
        },
        link: 'https://gitee.com/monsterwx/uv-ui' 
      }
    ],
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