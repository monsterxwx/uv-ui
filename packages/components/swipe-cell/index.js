import uvSwipeCell from './src/swipe-cell.vue'

uvSwipeCell.install = app => {
  app.component(uvSwipeCell.name, uvSwipeCell)
}

export default uvSwipeCell
