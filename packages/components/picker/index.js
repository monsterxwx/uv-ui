import uvPicker from './src/picker.vue'

uvPicker.install = app => {
  app.component(uvPicker.name, uvPicker)
}

export default uvPicker
