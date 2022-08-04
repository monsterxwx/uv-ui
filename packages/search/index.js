import uvSearch from './index.vue'

uvSearch.install = app => {
  app.component(uvSearch.name, uvSearch)
}

export default uvSearch
