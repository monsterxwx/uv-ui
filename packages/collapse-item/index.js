import uvCollapseItem from './index.vue'

uvCollapseItem.install = app => {
  app.component(uvCollapseItem.name, uvCollapseItem)
}

export default uvCollapseItem
