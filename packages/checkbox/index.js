import uvCheckbox from './index.vue'

uvCheckbox.install = app => {
  app.component(uvCheckbox.name, uvCheckbox)
}

export default uvCheckbox
