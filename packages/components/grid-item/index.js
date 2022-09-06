import uvGridItem from './src/grid-item.vue'

uvGridItem.install = app => {
  app.component(uvGridItem.name, uvGridItem)
}

export default uvGridItem
