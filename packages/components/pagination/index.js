import uvPagination from './src/pagination.vue'

uvPagination.install = app => {
  app.component(uvPagination.name, uvPagination)
}

export default uvPagination
