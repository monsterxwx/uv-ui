import { createRouter, createWebHashHistory } from 'vue-router'
import routerPages from './routerPage/pages'

const router = createRouter({
  routes: [...routerPages],
  history: createWebHashHistory()
})

export default router
