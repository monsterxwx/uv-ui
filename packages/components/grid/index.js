import uvGrid from './src/grid.vue'

uvGrid.install = app => {
  app.component(uvGrid.name, uvGrid)
}

export default uvGrid
