import uvSlider from './src/slider.vue'

uvSlider.install = app => {
  app.component(uvSlider.name, uvSlider)
}

export default uvSlider
