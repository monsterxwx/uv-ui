// const { spawn } = require('child_process')
// const { series } = require('gulp')
// const { componentPath } = require('../utils/paths')

// const run = async (command) => {
//   //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
//   const [cmd, ...args] = command.split(' ')
//   return new Promise((resolve, reject) => {
//     const app = spawn(cmd, args, {
//       cwd: componentPath, //执行命令的路径
//       stdio: 'inherit', //输出共享给父进程
//       shell: true,
//     })
//     //执行完毕关闭并resolve
//     app.on('close', resolve)
//   })
// }

// exports.default = series(async () => run(`rm -rf ${componentPath}/dist`))
const { series, parallel } = require('gulp') 
const { buildStyle, buildComponent } = require('./index') 


exports.default= series(
    parallel(
        // async () => buildStyle(),
        async () => buildComponent()
    )
)