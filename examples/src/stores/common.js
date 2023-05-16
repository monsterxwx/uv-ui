import { defineStore } from 'pinia'
import routerList from '@/router/routerList'

export const useCommonStore = defineStore({
  id: 'common',
  state: () => {
    return {
      menuList: routerList.filter(item => !item.meta.noShow),
      currentTitle: 'UV-UI'
    }
  },
  actions: {

  }
})
