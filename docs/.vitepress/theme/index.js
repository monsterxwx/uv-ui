import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import { createPinia } from 'pinia'
import UvUI from '../../iframe/UvUI.vue'

const store = createPinia()

export default {
  ...DefaultTheme,
  Layout:UvUI,
  enhanceApp({ app }) {
    app.use(store)
  },
}