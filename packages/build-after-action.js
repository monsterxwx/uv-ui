const fs = require('fs')
const path = require('path')

const packageJsonPath = path.join(__dirname, 'package.json')
const packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath))

// 配置组件调试时的主文件地址
packageJsonData.main = 'components/index.js'
packageJsonData.module = 'components/index.js'

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, 2))
