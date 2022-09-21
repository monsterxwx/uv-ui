import uvForm from './src/form.vue'

uvForm.install = app => {
  app.component(uvForm.name, uvForm)
}

export default uvForm
