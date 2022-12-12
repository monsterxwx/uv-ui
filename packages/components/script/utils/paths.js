
const { resolve } = require('path') 

// const componentPath = resolve(__dirname, '../../')
const componentPath = '../../'

const pkgPath = resolve(__dirname, '../../../')

//组件库根目录 和pkg根目录
exports.default =  {componentPath,pkgPath}
