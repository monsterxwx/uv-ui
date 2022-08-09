import uvStepper from './index.vue'

uvStepper.install = app => {
  app.component(uvStepper.name, uvStepper)
}

export default uvStepper
