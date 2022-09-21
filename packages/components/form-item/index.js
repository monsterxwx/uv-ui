import uvFormItem from './src/form-item.vue'

uvFormItem.install = app => {
  app.component(uvFormItem.name, uvFormItem)
}

export default uvFormItem
