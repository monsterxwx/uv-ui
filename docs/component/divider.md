<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('divider')
})

</script>

## 基本使用

```html
<uv-divider>标题</uv-divider>
```

##  使用 0.5px 线

通过 `hairline` 设置

```html
<uv-divider hairline>标题</uv-divider>
```

##  开启虚线

通过 `dashed` 设置

 ```html
<uv-divider dashed>标题</uv-divider>
 ```

##  内容位置

通过 `position` 设置left或者right值

 ```html
<uv-divider position="left">标题</uv-divider>

<uv-divider position="right">标题</uv-divider>
 ```


## props

| 属性     |         含义          |  类型   | 默认值 |
| -------- | :-------------------: | :-----: | -----: |
| hairline |        0.5px线        | Boolean |  false |
| dashed   |         虚线          | Boolean |  false |
| position | 位置，left和right可选 | String  |      - |

## events
无

## css变量
```css
  --uv-divider-margin: 16px 0;
  --uv-divider-font-size: 14px;
  --uv-divider-border-color: #ebedf0;
  --uv-divider-color: #969799;
  --uv-divider-line-height: 1px;
  --uv-divider-content-distance: 10px;
  --uv-divider-left-line-max-width: 10%;
  --uv-divider-right-line-max-width: 10%;
```