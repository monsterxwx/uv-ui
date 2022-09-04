import uvCollapse from './src/collapse.vue'

uvCollapse.install = app => {
  app.component(uvCollapse.name, uvCollapse)
}

export default uvCollapse
