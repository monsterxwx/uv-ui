<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('side-bar')
})

</script>

## 基本使用

通过 `v-model` 绑定活跃的 `index` ，通过 `list` 传入需要显示的子项列表

```html
<uv-side-bar v-model="activeIndex" :list="list">
  <div v-show="activeIndex===0">1</div>
  <div v-show="activeIndex===1">2</div>
  <div v-show="activeIndex===2">3</div>
  <div v-show="activeIndex===3">4</div>
  <div v-show="activeIndex===4">5</div>
</uv-side-bar>
```

##  配置左侧线属性

通过 `lineWidth` 设置线宽度,通过 `lineColor` 设置线颜色

 ```html
<uv-side-bar lineWidth='10px' lineColor='green' v-model="activeIndex" :list="list">
  <div v-show="activeIndex===0">1</div>
  <div v-show="activeIndex===1">2</div>
</uv-side-bar>
 ```


 ## props

| 属性       |        含义         |  类型  |    默认值 |
| ---------- | :-----------------: | :----: | --------: |
| modelValue | 双向绑定的活跃index | Number |         0 |
| lineWidth  |      线条宽度       | String |     '4px' |
| lineColor  |      线条颜色       | String | '#1989fa' |
| list       |     渲染的列表      | Array  |         - |



## css变量

```css
  --uv-side-bar-left-width: 120px;
  --uv-side-bar-left-bg-color: #f7f8fa;
  --uv-side-bar-item-line-border-radius: 4px;
  --uv-side-bar-left-cotent-item-padding: 14px 12px;
  --uv-side-bar-left-cotent-item-font-size: 14px;
  --uv-side-bar-left-cotent-item-color: #323233;
  --uv-side-bar-left-cotent-item-active-bg-color: #ffffff;
  --uv-side-bar-left-cotent-item-active-font-weight: 700;
  --uv-side-bar-right-bg-color: #ffffff;
```