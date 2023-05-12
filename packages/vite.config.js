import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  build: {
    target: 'modules',
    // 压缩
    minify: true,
    rollupOptions: {
      // 忽略打包vue文件
      external: ['vue'],
      input: ['components/index.js'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          // 配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          dir: 'lib',
          preserveModulesRoot: 'src'
        }
      ]
    },
    lib: {
      entry: './index.js',
      formats: ['es', 'cjs']
    }
  },
  plugins: [
    vue()
  ]
})
