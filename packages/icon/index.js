import uvIcon from './index.vue'

uvIcon.install = app => {
  app.component(uvIcon.name, uvIcon)
}

export default uvIcon
