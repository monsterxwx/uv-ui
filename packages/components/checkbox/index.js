import uvCheckbox from './src/checkbox.vue'

uvCheckbox.install = app => {
  app.component(uvCheckbox.name, uvCheckbox)
}

export default uvCheckbox
