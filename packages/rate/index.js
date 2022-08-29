import uvRate from './index.vue'

uvRate.install = app => {
  app.component(uvRate.name, uvRate)
}

export default uvRate
