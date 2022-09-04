import uvCollapseItem from './src/collapse-item.vue'

uvCollapseItem.install = app => {
  app.component(uvCollapseItem.name, uvCollapseItem)
}

export default uvCollapseItem
