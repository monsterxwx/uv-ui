import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/calendar.vue')
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('@/views/tab.vue')
    },
    {
      path: '/slider',
      name: 'slider',
      component: () => import('@/views/slider.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('@/views/swiper.vue')
    },
    {
      path: '/signature',
      name: 'signature',
      component: () => import('@/views/signature.vue')
    },
    {
      path: '/waterMark',
      name: 'waterMark',
      component: () => import('@/views/waterMark.vue')
    }
  ]
})

export default router
