import uvNumInput from './src/num-input.vue'

uvNumInput.install = app => {
  app.component(uvNumInput.name, uvNumInput)
}

export default uvNumInput
