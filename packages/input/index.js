import uvInput from './index.vue'

uvInput.install = app => {
  app.component(uvInput.name, uvInput)
}

export default uvInput
