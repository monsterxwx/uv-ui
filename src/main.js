import { createApp } from 'vue'
import App from './App.vue'
import uvUI from '../packages/index'
// import uvUI from 'uv-ui'
// import 'uv-ui/dist/style.css'
import router from './router'
import store from './store'
import 'normalize.css'

import headerBlock from '@/components/header-block'
import preview from '@/components/preview'

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

// 全局注册组件
app.component('HeaderBlock', headerBlock)
app.component('Preview', preview)

app.use(uvUI)

app.use(router).use(store).mount('#app')
