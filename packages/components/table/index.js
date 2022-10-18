import uvTable from './src/table.vue'

uvTable.install = app => {
  app.component(uvTable.name, uvTable)
}

export default uvTable
