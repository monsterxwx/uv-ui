const fs = require('fs')
const fsE = require('fs-extra')
const path = require('path')

const packageJsonPath = path.join(__dirname, 'package.json')
const packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath))
const esPath = path.join(__dirname, 'es')
const libPath = path.join(__dirname, 'lib')

// 配置组件调试时的主文件地址
packageJsonData.main = 'components/index.js'
packageJsonData.module = 'components/index.js'

// 删除打包后的es和lib文件
fsE.removeSync(esPath)
fsE.removeSync(libPath)

// 将更新日志移动到docs中
const sourcePath = path.join(__dirname, 'CHANGELOG.md')
const targetPath = path.join(__dirname, '../docs/guide/CHANGELOG.md')

fs.renameSync(sourcePath, targetPath)

// 修改package.json信息
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, 2))
