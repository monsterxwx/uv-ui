import uvSteps from './src/steps.vue'

uvSteps.install = app => {
  app.component(uvSteps.name, uvSteps)
}

export default uvSteps
