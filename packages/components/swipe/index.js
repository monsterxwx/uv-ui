import uvSwipe from './src/swipe.vue'

uvSwipe.install = app => {
  app.component(uvSwipe.name, uvSwipe)
}

export default uvSwipe
