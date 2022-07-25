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
        name: 'button',
        meta: {
          name: 'button 按钮'
        },
        component: () => import('/packages/button/doc/doc.md')
      },
      {
        path: 'input',
        name: 'input',
        meta: {
          name: 'input 输入框'
        },
        component: () => import('/packages/input/doc/doc.md')
      }

    ]
  }
]
