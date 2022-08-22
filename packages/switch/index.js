import uvSwitch from './index.vue'

uvSwitch.install = app => {
  app.component(uvSwitch.name, uvSwitch)
}

export default uvSwitch
