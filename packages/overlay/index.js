import uvOverlay from './index.vue'

uvOverlay.install = app => {
  app.component(uvOverlay.name, uvOverlay)
}

export default uvOverlay
