const { src, dest } =require('gulp') 
const { componentPath } =require('../utils/paths') 
const scss =require('gulp-sass')(require('sass')); 
const autoprefixer =require('gulp-autoprefixer') 

const {run} =require('../utils/run') 

//处理样式
function buildStyle() {
    return src(`${componentPath}/**.scss`)
        .pipe(scss())
        .pipe(
            autoprefixer()
        )
        .pipe(dest(`${componentPath}/uv-ui/lib/src`))
        .pipe(dest(`${componentPath}/uv-ui/es/src`));
}

//打包组件
function  buildComponent (){
    run('pnpm run build', componentPath)
}
module.exports ={
  buildStyle,
  buildComponent
}