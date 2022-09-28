import uvRadio from './src/radio.vue'

uvRadio.install = app => {
  app.component(uvRadio.name, uvRadio)
}

export default uvRadio
