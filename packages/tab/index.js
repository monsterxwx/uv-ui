import uvTab from './index.vue'

uvTab.install = app => {
  app.component(uvTab.name, uvTab)
}

export default uvTab
