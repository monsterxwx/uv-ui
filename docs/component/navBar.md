<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('nav-bar')
})

</script>

## 返回上级

通过 `leftArrow` 开启返回按钮

```html
<uv-nav-bar title="标题" left-title="返回" left-arrow/>
```

##  右侧插槽


 ```html
<uv-nav-bar title="标题" left-title="返回" left-arrow>
  <template #right>
    <uv-icon size="18" name="search" color="#419dfb" />
  </template>
</uv-nav-bar>
 ```

##  fixed定位

通过 `fixed` 开启,通过 `placeholder` 生成等高占位元素
 ```html
<uv-nav-bar fixed placeholder  />
 ```

 ## props

| 属性        |           含义           |      类型       |    默认值 |
| ----------- | :----------------------: | :-------------: | --------: |
| title       |         标题名字         |     String      |         - |
| bgColor     |         背景颜色         |     String      |    '#fff' |
| leftTitle   |         左边文字         |     String      |         - |
| leftColor   |       左边文字颜色       |     String      | '#419dfb' |
| rightTitle  |         右边文字         |     String      |         - |
| leftArrow   |     是否开启左边箭头     |     Boolean     |     false |
| arrowProps  | 箭头配置，跟icon配置相同 |     Object      |         - |
| border      |      是否显示上边框      |     Boolean     |      true |
| zIndex      |           层级           | [Number,String] |         1 |
| fixed       |    是否开启fixed定位     |     Boolean     |     false |
| placeholder |   是否生成等高占位元素   |     Boolean     |     false |

## events

| 事件名称 |   含义   |            参数 |
| -------- | :------: | --------------: |
| click-left   | 点击左侧 | - |
| click-right   | 点击右侧 | - |

## css变量

```css
  --uv-nav-bar-height: 46px;
  --uv-nav-bar-center-max-width: 60%;
  --uv-nav-bar-center-font-size: 16px;
  --uv-nav-bar-center-font-weight: 700;
  --uv-nav-bar-center-color: #323233;
  --uv-nav-bar-left-right-padding: 0 16px;
  --uv-nav-bar-left-right-font-size: 14px;
  --uv-nav-bar-left-text-padding-left: 5px;
```