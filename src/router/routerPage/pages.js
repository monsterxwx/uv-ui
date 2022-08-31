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
        component: () => import('/packages/button/doc/doc.md')
      },

      {
        path: 'cell',
        name: 'cell',
        meta: {
          name: 'Cell 单元格'
        },
        component: () => import('/packages/cell/doc/doc.md')
      },
      {
        path: 'icon',
        name: 'icon',
        meta: {
          name: 'Icon 图标'
        },
        component: () => import('/packages/icon/doc/doc.md')
      },

      {
        path: 'popup',
        name: 'popup',
        meta: {
          name: 'Popup 弹出层'
        },
        component: () => import('/packages/popup/doc/doc.md')
      },
      {
        path: 'toast',
        name: 'toast',
        meta: {
          name: 'Toast 轻提示'
        },
        component: () => import('/packages/toast/doc/doc.md')
      },
      {
        path: 'message',
        name: 'message',
        meta: {
          name: 'Message 消息提示框'
        },
        component: () => import('/packages/message/doc/doc.md')
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
        component: () => import('/packages/input/doc/doc.md')
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        meta: {
          name: 'Checkbox 复选框'
        },
        component: () => import('/packages/checkbox/doc/doc.md')
      },
      {
        path: 'num-input',
        name: 'num-input',
        meta: {
          name: 'NumInput 数字键盘'
        },
        component: () => import('/packages/num-input/doc/doc.md')
      },
      {
        path: 'picker',
        name: 'picker',
        meta: {
          name: 'Picker 选择器'
        },
        component: () => import('/packages/picker/doc/doc.md')
      },
      {
        path: 'search',
        name: 'search',
        meta: {
          name: 'Search 搜索框'
        },
        component: () => import('/packages/search/doc/doc.md')
      },
      {
        path: 'slider',
        name: 'slider',
        meta: {
          name: 'Slider 滑块'
        },
        component: () => import('/packages/slider/doc/doc.md')
      },
      {
        path: 'switch',
        name: 'switch',
        meta: {
          name: 'Switch 开关'
        },
        component: () => import('/packages/switch/doc/doc.md')
      },
      {
        path: 'stepper',
        name: 'stepper',
        meta: {
          name: 'Stepper 步进器'
        },
        component: () => import('/packages/stepper/doc/doc.md')
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
        component: () => import('/packages/action-sheet/doc/doc.md')
      },
      {
        path: 'overlay',
        name: 'overlay',
        meta: {
          name: 'Overlay 遮罩层'
        },
        component: () => import('/packages/overlay/doc/doc.md')
      },
      {
        path: 'dialog',
        name: 'dialog',
        meta: {
          name: 'Dialog 弹出框'
        },
        component: () => import('/packages/dialog/doc/doc.md')
      },
      {
        path: 'swipe-cell',
        name: 'swipe-cell',
        meta: {
          name: 'SwipeCell 滑动单元格'
        },
        component: () => import('/packages/swipe-cell/doc/doc.md')
      },
      {
        path: 'rate',
        name: 'rate',
        meta: {
          name: 'Rate 评分'
        },
        component: () => import('/packages/rate/doc/doc.md')
      },
      {
        path: 'collapse',
        name: 'collapse',
        meta: {
          name: 'Collapse 折叠面板'
        },
        component: () => import('/packages/collapse/doc/doc.md')
      },
      {
        path: 'divider',
        name: 'divider',
        meta: {
          name: 'Divider 分割线'
        },
        component: () => import('/packages/divider/doc/doc.md')
      },
      {
        path: 'popover',
        name: 'popover',
        meta: {
          name: 'Popover 气泡弹出框'
        },
        component: () => import('/packages/popover/doc/doc.md')
      }

    ]
  }
]
