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
  }
]
