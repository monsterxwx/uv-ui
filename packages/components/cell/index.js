import uvCell from './src/cell.vue'

uvCell.install = app => {
  app.component(uvCell.name, uvCell)
}

export default uvCell
