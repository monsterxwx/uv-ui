export default [
  {
    path: '/',
    redirect: '/uv-ui'
  },
  {
    path: '/uv-ui',
    name: 'uv-ui',
    component: () => import('@views/index')
  },
  {
    path: '/components',
    name: 'home',
    component: () => import('@views/home'),
    children: [
      {
        path: '',
        meta: {
          title: '基础组件'
        }
      },
      {
        path: 'button',
        name: 'button',
        meta: {
          name: 'Button 按钮'
        },
        component: () => import('/packages/components/button/doc/doc.md')
      },

      {
        path: 'cell',
        name: 'cell',
        meta: {
          name: 'Cell 单元格'
        },
        component: () => import('/packages/components/cell/doc/doc.md')
      },
      {
        path: 'icon',
        name: 'icon',
        meta: {
          name: 'Icon 图标'
        },
        component: () => import('/packages/components/icon/doc/doc.md')
      },

      {
        path: 'popup',
        name: 'popup',
        meta: {
          name: 'Popup 弹出层'
        },
        component: () => import('/packages/components/popup/doc/doc.md')
      },
      {
        path: 'toast',
        name: 'toast',
        meta: {
          name: 'Toast 轻提示'
        },
        component: () => import('/packages/components/toast/doc/doc.md')
      },
      {
        path: 'message',
        name: 'message',
        meta: {
          name: 'Message 消息提示框'
        },
        component: () => import('/packages/components/message/doc/doc.md')
      },
      {
        path: '',
        meta: {
          title: '表单组件'
        }
      },
      {
        path: 'input',
        name: 'input',
        meta: {
          name: 'Input 输入框'
        },
        component: () => import('/packages/components/input/doc/doc.md')
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        meta: {
          name: 'Checkbox 复选框'
        },
        component: () => import('/packages/components/checkbox/doc/doc.md')
      },
      {
        path: 'num-input',
        name: 'num-input',
        meta: {
          name: 'NumInput 数字键盘'
        },
        component: () => import('/packages/components/num-input/doc/doc.md')
      },
      {
        path: 'picker',
        name: 'picker',
        meta: {
          name: 'Picker 选择器'
        },
        component: () => import('/packages/components/picker/doc/doc.md')
      },
      {
        path: 'search',
        name: 'search',
        meta: {
          name: 'Search 搜索框'
        },
        component: () => import('/packages/components/search/doc/doc.md')
      },
      {
        path: 'slider',
        name: 'slider',
        meta: {
          name: 'Slider 滑块'
        },
        component: () => import('/packages/components/slider/doc/doc.md')
      },
      {
        path: 'switch',
        name: 'switch',
        meta: {
          name: 'Switch 开关'
        },
        component: () => import('/packages/components/switch/doc/doc.md')
      },
      {
        path: 'stepper',
        name: 'stepper',
        meta: {
          name: 'Stepper 步进器'
        },
        component: () => import('/packages/components/stepper/doc/doc.md')
      },
      {
        path: '',
        meta: {
          title: '反馈组件'
        }
      },
      {
        path: 'action-sheet',
        name: 'action-sheet',
        meta: {
          name: 'ActionSheet 动作面板'
        },
        component: () => import('/packages/components/action-sheet/doc/doc.md')
      },
      {
        path: 'overlay',
        name: 'overlay',
        meta: {
          name: 'Overlay 遮罩层'
        },
        component: () => import('/packages/components/overlay/doc/doc.md')
      },
      {
        path: 'dialog',
        name: 'dialog',
        meta: {
          name: 'Dialog 弹出框'
        },
        component: () => import('/packages/components/dialog/doc/doc.md')
      },
      {
        path: 'swipe-cell',
        name: 'swipe-cell',
        meta: {
          name: 'SwipeCell 滑动单元格'
        },
        component: () => import('/packages/components/swipe-cell/doc/doc.md')
      },
      {
        path: 'rate',
        name: 'rate',
        meta: {
          name: 'Rate 评分'
        },
        component: () => import('/packages/components/rate/doc/doc.md')
      },

      {
        path: 'divider',
        name: 'divider',
        meta: {
          name: 'Divider 分割线'
        },
        component: () => import('/packages/components/divider/doc/doc.md')
      },
      {
        path: '',
        meta: {
          title: '展示组件'
        }
      },
      {
        path: 'collapse',
        name: 'collapse',
        meta: {
          name: 'Collapse 折叠面板'
        },
        component: () => import('/packages/components/collapse/doc/doc.md')
      },
      {
        path: 'notice-bar',
        name: 'notice-bar',
        meta: {
          name: 'NoticeBar 通知栏'
        },
        component: () => import('/packages/components/notice-bar/doc/doc.md')
      },
      {
        path: 'popover',
        name: 'popover',
        meta: {
          name: 'Popover 气泡弹出框'
        },
        component: () => import('/packages/components/popover/doc/doc.md')
      },
      {
        path: 'swipe',
        name: 'swipe',
        meta: {
          name: 'Swipe 轮播'
        },
        component: () => import('/packages/components/swipe/doc/doc.md')
      },
      {
        path: 'water-waves',
        name: 'water-waves',
        meta: {
          name: 'WaterWaves 水波球'
        },
        component: () => import('/packages/components/water-waves/doc/doc.md')
      },
      {
        path: 'count-to',
        name: 'count-to',
        meta: {
          name: 'CountTo 数字滚动'
        },
        component: () => import('/packages/components/count-to/doc/doc.md')
      },
      {
        path: '',
        meta: {
          title: '导航组件'
        }
      },
      {
        path: 'tab',
        name: 'tab',
        meta: {
          name: 'Tab 标签页'
        },
        component: () => import('/packages/components/tab/doc/doc.md')
      },
      {
        path: 'grid',
        name: 'grid',
        meta: {
          name: 'Grid 宫格'
        },
        component: () => import('/packages/components/grid/doc/doc.md')
      },
      {
        path: 'nav-bar',
        name: 'nav-bar',
        meta: {
          name: 'NavBar 导航栏'
        },
        component: () => import('/packages/components/nav-bar/doc/doc.md')
      },
      {
        path: 'tab-bar',
        name: 'tab-bar',
        meta: {
          name: 'TabBar 标签栏'
        },
        component: () => import('/packages/components/tab-bar/doc/doc.md')
      }
    ]
  }
]
