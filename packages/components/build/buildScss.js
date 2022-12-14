import cpy from 'cpy'
import { resolve } from 'path'

const sourceDir = resolve(__dirname, '../src')
//lib文件
const targetLib = resolve(__dirname, '../dist/lib')
//es文件
const targetEs = resolve(__dirname, '../dist/es')

console.log(sourceDir);
console.log('targetLib',targetLib);
console.log('targetEs',targetEs);
const buildScss = async () => {
    await cpy(`${sourceDir}/**/*.scss`, targetLib)
    await cpy(`${sourceDir}/**/*.scss`, targetEs)
}
buildScss()