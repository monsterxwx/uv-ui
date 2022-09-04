import uvStepper from './src/stepper.vue'

uvStepper.install = app => {
  app.component(uvStepper.name, uvStepper)
}

export default uvStepper
