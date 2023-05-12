import { defineStore } from 'pinia'
import routerList from '@/router/routerList'

const useCommonStore = defineStore({
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
export default useCommonStore
