const fs = require('fs')
const path = require('path')

const packageJsonPath = path.join(__dirname, 'package.json')
const packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath))

packageJsonData.main = 'lib/packages/components/index.cjs'
packageJsonData.module = 'es/packages/components/index.js'

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, 2))
