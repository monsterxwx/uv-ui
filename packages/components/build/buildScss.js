import cpy from 'cpy'
import { resolve  } from 'path'
import { promises as fs } from "fs"
import sass from "sass"
import glob from "fast-glob"

const sourceDir = resolve(__dirname, '../src')
//lib文件
const targetLib = resolve(__dirname, '../dist/lib')
//es文件
const targetEs = resolve(__dirname, '../dist/es')

const buildScss = async () => {
    await cpy(`${sourceDir}/**/*.scss`, targetLib)
    await cpy(`${sourceDir}/**/*.scss`, targetEs)

     //获取打包后.scss文件目录(lib和es一样)
     const scssFiles = await glob("**/*.scss", { cwd: sourceDir, onlyFiles: true })

     for(let path in scssFiles) {
        const filePath =resolve(__dirname,'../dist/es/'+scssFiles[path])
        //拿到css后缀path
        const cssPath =scssFiles[path].replace('.scss','.css')
        //将scss转成css
         sass.render({
            file:filePath,     
        }, (err,result)=>{
            // 将css写入对应目录
             fs.writeFile(resolve(targetLib,cssPath),result.css)
             fs.writeFile(resolve(targetEs,cssPath),result.css)
             
             // 删除scss文件,包括es和lib
             fs.rm(resolve(targetLib,scssFiles[path]))
             fs.rm(resolve(targetEs,scssFiles[path]))
        })
     }
}
buildScss()