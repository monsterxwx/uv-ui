import uvTab from './src/tab.vue'

uvTab.install = app => {
  app.component(uvTab.name, uvTab)
}

export default uvTab
