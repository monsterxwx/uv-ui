import uvSelect from './src/select.vue'

uvSelect.install = app => {
  app.component(uvSelect.name, uvSelect)
}

export default uvSelect
