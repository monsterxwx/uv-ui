import uvPopup from './src/popup.vue'

uvPopup.install = app => {
  app.component(uvPopup.name, uvPopup)
}

export default uvPopup
