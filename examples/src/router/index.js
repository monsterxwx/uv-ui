import { createRouter, createWebHashHistory } from 'vue-router'
import routerList from './routerList'
const router = createRouter({
  history: createWebHashHistory(),
  routes: routerList
})

export default router
