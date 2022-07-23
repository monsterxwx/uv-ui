import uvButton from './index.vue'

uvButton.install = app => {
  app.component(uvButton.name, uvButton)
}

export default uvButton
