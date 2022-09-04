import uvIcon from './src/icon.vue'

uvIcon.install = app => {
  app.component(uvIcon.name, uvIcon)
}

export default uvIcon
