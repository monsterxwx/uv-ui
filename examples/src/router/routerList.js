export default [
  {
    path: '/',
    meta: {
      noShow: true
    },
    redirect: '/uv-ui'
  },
  {
    path: '/uv-ui',
    name: 'uv-ui',
    meta: {
      noShow: true,
      keepAlive: true
    },
    component: () => import('../views/home.vue')
  },
  {
    path: '',
    meta: {
      title: '基础组件'
    }
  },
  {
    path: '/button',
    name: 'button',
    meta: {
      name: 'Button 按钮'
    },
    component: () => import('../../../packages/components/button/demo/index.vue')
  },
  {
    path: '/cell',
    name: 'cell',
    meta: {
      name: 'Cell 单元格'
    },
    component: () => import('../../../packages/components/cell/demo/index.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    meta: {
      name: 'Icon 图标'
    },
    component: () => import('../../../packages/components/icon/demo/index.vue')
  },
  {
    path: '/popup',
    name: 'popup',
    meta: {
      name: 'Popup 弹出层'
    },
    component: () => import('../../../packages/components/popup/demo/index.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    meta: {
      name: 'Toast 轻提示'
    },
    component: () => import('../../../packages/components/toast/demo/index.vue')
  },
  {
    path: '/message',
    name: 'message',
    meta: {
      name: 'Message 消息提示框'
    },
    component: () => import('../../../packages/components/message/demo/index.vue')
  },
  {
    path: '',
    meta: {
      title: '表单组件'
    }
  },
  {
    path: '/input',
    name: 'input',
    meta: {
      name: 'Input 输入框'
    },
    component: () => import('../../../packages/components/input/demo/index.vue')
  },
  {
    path: '/select',
    name: 'select',
    meta: {
      name: 'Select 选择器'
    },
    component: () => import('../../../packages/components/select/demo/index.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    meta: {
      name: 'Checkbox 多选框'
    },
    component: () => import('../../../packages/components/checkbox/demo/index.vue')
  },
  {
    path: '/radio',
    name: 'radio',
    meta: {
      name: 'Radio 单选框'
    },
    component: () => import('../../../packages/components/radio/demo/index.vue')
  },
  {
    path: '/num-input',
    name: 'num-input',
    meta: {
      name: 'NumInput 数字键盘'
    },
    component: () => import('../../../packages/components/num-input/demo/index.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    meta: {
      name: 'Picker 选择器'
    },
    component: () => import('../../../packages/components/picker/demo/index.vue')
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      name: 'Form 表单'
    },
    component: () => import('../../../packages/components/form/demo/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      name: 'Search 搜索框'
    },
    component: () => import('../../../packages/components/search/demo/index.vue')
  },
  {
    path: '/slider',
    name: 'slider',
    meta: {
      name: 'Slider 滑块'
    },
    component: () => import('../../../packages/components/slider/demo/index.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    meta: {
      name: 'Switch 开关'
    },
    component: () => import('../../../packages/components/switch/demo/index.vue')
  },
  {
    path: '/stepper',
    name: 'stepper',
    meta: {
      name: 'Stepper 步进器'
    },
    component: () => import('../../../packages/components/stepper/demo/index.vue')
  },
  {
    path: '/signature',
    name: 'signature',
    meta: {
      name: 'Signature 签名'
    },
    component: () => import('../../../packages/components/signature/demo/index.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    meta: {
      name: 'Calendar 日历'
    },
    component: () => import('../../../packages/components/calendar/demo/index.vue')
  },
  {
    path: '',
    meta: {
      title: '反馈组件'
    }
  },
  {
    path: '/action-sheet',
    name: 'action-sheet',
    meta: {
      name: 'ActionSheet 动作面板'
    },
    component: () => import('../../../packages/components/action-sheet/demo/index.vue')
  },
  {
    path: '/overlay',
    name: 'overlay',
    meta: {
      name: 'Overlay 遮罩层'
    },
    component: () => import('../../../packages/components/overlay/demo/index.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    meta: {
      name: 'Dialog 弹出框'
    },
    component: () => import('../../../packages/components/dialog/demo/index.vue')
  },
  {
    path: '/swipe-cell',
    name: 'swipe-cell',
    meta: {
      name: 'SwipeCell 滑动单元格'
    },
    component: () => import('../../../packages/components/swipe-cell/demo/index.vue')
  },
  {
    path: '/rate',
    name: 'rate',
    meta: {
      name: 'Rate 评分'
    },
    component: () => import('../../../packages/components/rate/demo/index.vue')
  },
  {
    path: '/divider',
    name: 'divider',
    meta: {
      name: 'Divider 分割线'
    },
    component: () => import('../../../packages/components/divider/demo/index.vue')
  },
  {
    path: '',
    meta: {
      title: '展示组件'
    }
  },
  {
    path: '/collapse',
    name: 'collapse',
    meta: {
      name: 'Collapse 折叠面板'
    },
    component: () => import('../../../packages/components/collapse/demo/index.vue')
  },
  {
    path: '/notice-bar',
    name: 'notice-bar',
    meta: {
      name: 'NoticeBar 通知栏'
    },
    component: () => import('../../../packages/components/notice-bar/demo/index.vue')
  },
  {
    path: '/popover',
    name: 'popover',
    meta: {
      name: 'Popover 气泡弹出框'
    },
    component: () => import('../../../packages/components/popover/demo/index.vue')
  },
  {
    path: '/swipe',
    name: 'swipe',
    meta: {
      name: 'Swipe 轮播'
    },
    component: () => import('../../../packages/components/swipe/demo/index.vue')
  },
  {
    path: '/water-waves',
    name: 'water-waves',
    meta: {
      name: 'WaterWaves 水波球'
    },
    component: () => import('../../../packages/components/water-waves/demo/index.vue')
  },
  {
    path: '/count-to',
    name: 'count-to',
    meta: {
      name: 'CountTo 数字滚动'
    },
    component: () => import('../../../packages/components/count-to/demo/index.vue')
  },
  {
    path: '/steps',
    name: 'steps',
    meta: {
      name: 'Steps 步骤条'
    },
    component: () => import('../../../packages/components/steps/demo/index.vue')
  },
  {
    path: '/table',
    name: 'table',
    meta: {
      name: 'Table 表格'
    },
    component: () => import('../../../packages/components/table/demo/index.vue')
  },
  {
    path: '/water-mark',
    name: 'water-mark',
    meta: {
      name: 'WaterMark 水印'
    },
    component: () => import('../../../packages/components/water-mark/demo/index.vue')
  },
  {
    path: '/text-ellipsis',
    name: 'text-ellipsis',
    meta: {
      name: 'TextEllipsis 文本省略'
    },
    component: () => import('../../../packages/components/text-ellipsis/demo/index.vue')
  },
  {
    path: '',
    meta: {
      title: '导航组件'
    }
  },
  {
    path: '/tab',
    name: 'tab',
    meta: {
      name: 'Tab 标签页'
    },
    component: () => import('../../../packages/components/tab/demo/index.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    meta: {
      name: 'Grid 宫格'
    },
    component: () => import('../../../packages/components/grid/demo/index.vue')
  },
  {
    path: '/nav-bar',
    name: 'nav-bar',
    meta: {
      name: 'NavBar 导航栏'
    },
    component: () => import('../../../packages/components/nav-bar/demo/index.vue')
  },
  {
    path: '/tab-bar',
    name: 'tab-bar',
    meta: {
      name: 'TabBar 标签栏'
    },
    component: () => import('../../../packages/components/tab-bar/demo/index.vue')
  },
  {
    path: '/side-bar',
    name: 'side-bar',
    meta: {
      name: 'SideBar 侧边导航'
    },
    component: () => import('../../../packages/components/side-bar/demo/index.vue')
  },
  {
    path: '/pagination',
    name: 'pagination',
    meta: {
      name: 'Pagination 分页'
    },
    component: () => import('../../../packages/components/pagination/demo/index.vue')
  },
  {
    path: '/back-top',
    name: 'back-top',
    meta: {
      name: 'BackTop 回到顶部'
    },
    component: () => import('../../../packages/components/back-top/demo/index.vue')
  }
]
