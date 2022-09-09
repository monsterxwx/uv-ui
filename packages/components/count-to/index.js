import uvCountTo from './src/count-to.vue'

uvCountTo.install = app => {
  app.component(uvCountTo.name, uvCountTo)
}

export default uvCountTo
