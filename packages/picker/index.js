import uvPicker from './index.vue'

uvPicker.install = app => {
  app.component(uvPicker.name, uvPicker)
}

export default uvPicker
