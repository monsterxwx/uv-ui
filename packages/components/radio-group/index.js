import uvRadioGroup from './src/radio-group.vue'

uvRadioGroup.install = app => {
  app.component(uvRadioGroup.name, uvRadioGroup)
}

export default uvRadioGroup
