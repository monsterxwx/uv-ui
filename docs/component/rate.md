<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('rate')
})

</script>

## 基本使用

通过 `v-model` 绑定数量

```html
<uv-rate v-model="test" />
```

##  自定义图标

通过 `icon` 属性设置，图标在图标库中选择

 ```html
<uv-rate v-model="test1" icon="love-fill"/>
 ```

##  自定义样式

通过 `color` 属性设置选中时样式，通过 `voidColor` 属性设置未选中时样式
通过 `gutter` 属性设置每个图标的间隔，通过 `size` 属性设置大小

 ```html
<uv-rate v-model="test1" icon="love-fill" color="#ee0a24"/>
 ```

##  自定义数量

通过 `count` 设置

 ```html
<uv-rate v-model="test1" :count="10"/>
 ```

##  只读状态

通过 `readonly` 设置，只能看，不能修改

 ```html
<uv-rate v-model="test1" readonly :count="10"/>
 ```

## props

| 属性       |      含义      |       类型       |      默认值 |
| ---------- | :------------: | :--------------: | ----------: |
| count      |  评分的总数量  |      Number      |           5 |
| modelValue | 双向绑定的数量 |      Number      |           - |
| gutter     |      间隔      |      Number      |           2 |
| readonly   |    是否只读    |     Boolean      |       false |
| icon       |    图标名称    |      String      | 'star-fill' |
| size       |    图标大小    | [String, Number] |          22 |
| color      |    图标颜色    |      String      |   '#ffd21e' |
| voidColor  |  图标默认颜色  |      String      |   '#c8c9cc' |

## events

| 事件名称 |    含义    |       参数 |
| -------- | :--------: | ---------: |
| change   | 数量改变时 | 当前的子项 |
