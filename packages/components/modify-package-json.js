const fs = require('fs')
const path = require('path')

const packageJsonPath = path.join(__dirname, 'package.json')
const packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath))

packageJsonData.main = 'dist/es/index.js'
packageJsonData.module = 'dist/es/index.js'
packageJsonData.style = 'dist/es/style.css'

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, 2))
