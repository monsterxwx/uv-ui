import uvTabBar from './src/tab-bar.vue'

uvTabBar.install = app => {
  app.component(uvTabBar.name, uvTabBar)
}

export default uvTabBar
