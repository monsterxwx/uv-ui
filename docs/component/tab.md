<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('tab')
})

</script>

## 是否滚动

通过 `scroll` 开启

```html
<uv-tab :list="list2" scroll/>
```

##  修改下划线样式

通过 `lineHeight` 修改线条高度,通过 `lineColor` 修改线条颜色

 ```html
<uv-tab line-height="6px" line-color="#07c160" :list="list1"/>
 ```

##  收缩布局

通过 `shrink` 开启
 ```html
<uv-tab shrink :list="list1"/>
 ```

##  标签属性

通过 `color` 修改默认字体颜色,通过 `activeColor` 修改活跃时字体颜色,通过 `bgColor` 修改tab栏的背景颜色

 ```html
<uv-tab bg-color="#07c160" active-color="#fff" :list="list1"/>
 ```

 ## 初始化活跃子项,父组件改变子组件也会改变

通过 `acitveIndex` 进行绑定

 ```html 
<uv-tab :acitve-index="acitveIndex" :list="list1"/>
 ```

 ## props

| 属性        |               含义               |  类型   | 默认值 |
| ----------- | :------------------------------: | :-----: | -----: |
| acitveIndex |        当前活跃子项index         | Number  |      0 |
| bgColor     |             背景颜色             | String  |      - |
| color       |           默认子项颜色           | String  |      - |
| activeColor |          活跃子项的颜色          | String  |      - |
| scroll      | 是否可以滚动，很多子项时可以开启 | Boolean |  false |
| lineHeight  |             线条高度             | String  |      - |
| lineColor   |             线条颜色             | String  |      - |
| list        |             渲染列表             |  Array  |      - |
| shrink      |           是否收缩布局           | Boolean |  false |

## events

| 事件名称 |   含义   |            参数 |
| -------- | :------: | --------------: |
| change   | 改变子项 | 当前活跃的index |

## css变量

```css
  --uv-tab-bg-color: #ffffff;
  --uv-tab-font-size: 14px;
  --uv-tab-height: 44px;
  --uv-tab-padding: 0 12px;
  --uv-tab-line-bg-color: #1989fa;
  --uv-tab-line-height: 3px;
  --uv-tab-border-radius: 3px;
  --uv-tab-item-color: #646566;
  --uv-tab-acitve-item-color: #323233;
  --uv-tab-acitve-item-font-weight: 700;
  --uv-tab-item-margin: 10px;
```