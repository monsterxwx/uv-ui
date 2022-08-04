import uvNumInput from './index.vue'

uvNumInput.install = app => {
  app.component(uvNumInput.name, uvNumInput)
}

export default uvNumInput
