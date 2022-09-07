import uvNavBar from './src/nav-bar.vue'

uvNavBar.install = app => {
  app.component(uvNavBar.name, uvNavBar)
}

export default uvNavBar
