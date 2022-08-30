import uvDivider from './index.vue'

uvDivider.install = app => {
  app.component(uvDivider.name, uvDivider)
}

export default uvDivider
