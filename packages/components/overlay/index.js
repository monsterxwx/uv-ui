import uvOverlay from './src/overlay.vue'

uvOverlay.install = app => {
  app.component(uvOverlay.name, uvOverlay)
}

export default uvOverlay
