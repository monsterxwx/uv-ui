import { createApp } from 'vue'
import App from './App.vue'
import uvUI from '../packages/index'
// import uvUI from 'uv-ui'
// import '../node_modules/uv-ui/dist/style.css'
import router from './router'
import 'normalize.css'

// 代码高亮
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'

const app = createApp(App)

app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

app.use(uvUI)

app.use(router).mount('#app')
