import uvSlider from './index.vue'

uvSlider.install = app => {
  app.component(uvSlider.name, uvSlider)
}

export default uvSlider
