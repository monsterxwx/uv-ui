import uvActionSheet from './index.vue'

uvActionSheet.install = app => {
  app.component(uvActionSheet.name, uvActionSheet)
}

export default uvActionSheet
