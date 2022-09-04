import uvButton from './src/button.vue'

uvButton.install = app => {
  app.component(uvButton.name, uvButton)
}

export default uvButton
