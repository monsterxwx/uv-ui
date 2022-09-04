import uvInput from './src/input.vue'

uvInput.install = app => {
  app.component(uvInput.name, uvInput)
}

export default uvInput
