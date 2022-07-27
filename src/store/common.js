import { defineStore } from 'pinia'

const useCommonStore = defineStore({
  id: 'common', // id必填，且需要唯一
  state: () => {
    return {
      tabIndex: 0,
      openMenu: false
    }
  },
  actions: {
    updateIndex (index) {
      this.tabIndex = index
    },
    changeMenu () {
      this.openMenu = !this.openMenu
    }
  }
})
export default useCommonStore
