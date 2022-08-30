import uvCollapse from './index.vue'

uvCollapse.install = app => {
  app.component(uvCollapse.name, uvCollapse)
}

export default uvCollapse
