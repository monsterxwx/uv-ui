import uvCheckboxGroup from './src/checkbox-group.vue'

uvCheckboxGroup.install = app => {
  app.component(uvCheckboxGroup.name, uvCheckboxGroup)
}

export default uvCheckboxGroup
