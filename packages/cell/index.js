import uvCell from './index.vue'

uvCell.install = app => {
  app.component(uvCell.name, uvCell)
}

export default uvCell
