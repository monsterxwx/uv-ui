import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' // 引入jsx
import Markdown from 'vite-plugin-md'
import { resolve } from 'path'

// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': '/src/',
      '@components': '/src/components/',
      '@assets': '/src/assets/',
      '@views': '/src/views/'
    }
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: resolve(__dirname, './packages/index.js'),
      name: 'uv-ui',
      fileName: 'uv-ui',
      formats: ['es', 'cjs', 'umd']
    }
  },
  plugins: [
    vue({
      include: [/\.md$/, /\.vue$/]
    }),
    Markdown(),
    vueJsx({
    // 配置选项
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use './src/assets/styles/styles.scss' as *;"
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
