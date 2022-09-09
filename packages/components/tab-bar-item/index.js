import uvTabBarItem from './src/tab-bar-item.vue'

uvTabBarItem.install = app => {
  app.component(uvTabBarItem.name, uvTabBarItem)
}

export default uvTabBarItem
