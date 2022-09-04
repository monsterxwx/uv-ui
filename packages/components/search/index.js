import uvSearch from './src/search.vue'

uvSearch.install = app => {
  app.component(uvSearch.name, uvSearch)
}

export default uvSearch
