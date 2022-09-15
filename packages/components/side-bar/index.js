import uvSideBar from './src/side-bar.vue'

uvSideBar.install = app => {
  app.component(uvSideBar.name, uvSideBar)
}

export default uvSideBar
