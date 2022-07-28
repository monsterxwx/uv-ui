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
        path: 'overlay',
        name: 'overlay',
        meta: {
          name: 'Overlay 遮罩层'
        },
        component: () => import('/packages/overlay/doc/doc.md')
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
      }

    ]
  }
]
