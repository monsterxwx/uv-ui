import uvRate from './src/rate.vue'

uvRate.install = app => {
  app.component(uvRate.name, uvRate)
}

export default uvRate
