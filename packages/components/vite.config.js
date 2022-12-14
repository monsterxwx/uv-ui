import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: true,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue', /\.scss/],
      input: ['src/index.js'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          //配置打包根目录
          dir: 'dist/es',
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist/lib',
          preserveModulesRoot: 'src',
        },
      ],
    },
    lib: {
      entry: './index.js',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    vue(),
    {
      name: 'style',
      generateBundle(config, bundle) {
        //获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)

        for (const key of keys) {
          const bundler = bundle[key]
          //rollup内置方法,将所有输出文件code中的.scss换成.css
          console.log('bundler',bundler.code)
          this.emitFile({
            type: 'asset',
            fileName: key, //文件名不变
            source: bundler.code.replace(/\.scss/g, '.css'),
          })
        }
      },
    },
  ],
})
