import uvSwitch from './src/switch.vue'

uvSwitch.install = app => {
  app.component(uvSwitch.name, uvSwitch)
}

export default uvSwitch
