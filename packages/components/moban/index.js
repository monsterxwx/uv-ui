import uv from './src/index.vue'

uv.install = app => {
  app.component(uv.name, uv)
}

export default uv
