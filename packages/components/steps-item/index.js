import uvStepsItem from './src/steps-item.vue'

uvStepsItem.install = app => {
  app.component(uvStepsItem.name, uvStepsItem)
}

export default uvStepsItem
