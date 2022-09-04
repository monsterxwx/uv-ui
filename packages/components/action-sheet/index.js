import uvActionSheet from './src/action-sheet.vue'

uvActionSheet.install = app => {
  app.component(uvActionSheet.name, uvActionSheet)
}

export default uvActionSheet
