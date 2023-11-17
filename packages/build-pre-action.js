const fs = require('fs')
const path = require('path')
const semver = require('semver')

const packageJsonPath = path.join(__dirname, 'package.json')
const packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath))

// 配置组件打包后的主文件地址
packageJsonData.main = 'lib/components/index.cjs'
packageJsonData.module = 'es/components/index.js'

// 增加版本号
packageJsonData.version = semver.inc(packageJsonData.version, 'patch')

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, 2))
