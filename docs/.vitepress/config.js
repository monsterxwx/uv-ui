export default {
  title: 'UV-UI',
  base: '/uv-ui/',
  outDir: './dist',
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local'
    },
    docsDir: 'docs',
    outline: false, // 大纲
    socialLinks: [
      { icon: 'github', link: 'https://github.com/monsterxwx/uv-ui' },
      {
        icon: {
          svg: '<svg t="1670828084087" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1923" width="32" height="32"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1924"></path></svg>'
        },
        link: 'https://gitee.com/monsterwx/uv-ui'
      }
    ],
    head: [
      [
        'link', { rel: 'icon', href: '/favicon.ico' }
      ]
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Monster'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/button', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' },
            { text: '更新日志', link: '/guide/CHANGELOG' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          collapsed: false,
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
          collapsed: false,
          items: [
            { text: 'Input 输入框', link: '/component/input' },
            { text: 'Select 选择器', link: '/component/select' },
            { text: 'Checkbox 多选框', link: '/component/checkbox' },
            { text: 'Radio 单选框', link: '/component/radio' },
            { text: 'NumInput 数字键盘', link: '/component/numInput' },
            { text: 'Picker 选择器', link: '/component/picker' },
            { text: 'DatetimePicker 日期时间选择器', link: '/component/datetimePicker' },
            { text: 'Form 表单', link: '/component/form' },
            { text: 'Search 搜索框', link: '/component/search' },
            { text: 'Slider 滑块', link: '/component/slider' },
            { text: 'Switch 开关', link: '/component/switch' },
            { text: 'Stepper 步进器', link: '/component/stepper' },
            { text: 'Signature 签名', link: '/component/signature' },
            { text: 'Calendar 日历', link: '/component/calendar' },
            { text: 'Cascader 级联选择', link: '/component/cascader' }
          ]
        },
        {
          text: '反馈组件',
          collapsed: false,
          items: [
            { text: 'ActionSheet 动作面板', link: '/component/actionSheet' },
            { text: 'Overlay 遮罩层', link: '/component/overlay' },
            { text: 'Dialog 弹出框', link: '/component/dialog' },
            { text: 'SwipeCell 滑动单元格', link: '/component/swipeCell' },
            { text: 'Rate 评分', link: '/component/rate' },
            { text: 'FloatingPanel 浮动面板', link: '/component/floatingPanel' }
          ]
        },
        {
          text: '展示组件',
          collapsed: false,
          items: [
            { text: 'Collapse 折叠面板', link: '/component/collapse' },
            { text: 'CountDown 倒计时', link: '/component/countDown' },
            { text: 'Divider 分割线', link: '/component/divider' },
            { text: 'Empty 空状态', link: '/component/empty' },
            { text: 'NoticeBar 通知栏', link: '/component/noticeBar' },
            { text: 'Popover 气泡弹出框', link: '/component/popover' },
            { text: 'Progress 进度条', link: '/component/progress' },
            { text: 'CircleProgress 环形进度条', link: '/component/circle-progress' },
            { text: 'Swipe 轮播', link: '/component/swipe' },
            { text: 'WaterWaves 水波球', link: '/component/waterWaves' },
            { text: 'CountTo 数字滚动', link: '/component/countTo' },
            { text: 'Skeleton 骨架屏', link: '/component/skeleton' },
            { text: 'Steps 步骤条', link: '/component/steps' },
            { text: 'Table 表格', link: '/component/table' },
            { text: 'Tag 标签', link: '/component/tag' },
            { text: 'TextEllipsis 文本省略', link: '/component/textEllipsis' },
            { text: 'WaterMark 水印', link: '/component/waterMark' },
            { text: 'SliderVertify 滑动验证', link: '/component/sliderVertify' },
          ]
        },
        {
          text: '导航组件',
          collapsed: false,
          items: [
            { text: 'Tab 标签页', link: '/component/tab' },
            { text: 'Grid 宫格', link: '/component/grid' },
            { text: 'NavBar 导航栏', link: '/component/navBar' },
            { text: 'TabBar 标签栏', link: '/component/tabBar' },
            { text: 'SideBar 侧边导航', link: '/component/sideBar' },
            { text: 'Pagination 分页', link: '/component/pagination' },
            { text: 'BackTop 回到顶部', link: '/component/backTop' }
          ]
        },
      ]
    }
  }
}