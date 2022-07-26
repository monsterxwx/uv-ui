import uvPopup from './index.vue'

uvPopup.install = app => {
  app.component(uvPopup.name, uvPopup)
}

export default uvPopup
