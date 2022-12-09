import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    // outDir: 'es',
    //压缩
    minify: true,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['index.js'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          //配置打包根目录
          dir: 'build/es',
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'build/lib',
          preserveModulesRoot: 'src',
        },
      ],
    },
    lib: {
      entry: './index.js',
      name: 'uv'
    },
  },
  plugins: [vue()],
})
