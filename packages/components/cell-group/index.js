import uvCellGroup from './src/cell-group.vue'

uvCellGroup.install = app => {
  app.component(uvCellGroup.name, uvCellGroup)
}

export default uvCellGroup
