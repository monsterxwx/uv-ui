import uvDivider from './src/divider.vue'

uvDivider.install = app => {
  app.component(uvDivider.name, uvDivider)
}

export default uvDivider
