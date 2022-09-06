import uvSwipeItem from './src/swipe-item.vue'

uvSwipeItem.install = app => {
  app.component(uvSwipeItem.name, uvSwipeItem)
}

export default uvSwipeItem
