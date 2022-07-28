import uvCellGroup from './index.vue'

uvCellGroup.install = app => {
  app.component(uvCellGroup.name, uvCellGroup)
}

export default uvCellGroup
