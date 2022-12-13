<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('water-waves')
})

</script>

## 基本使用

通过 `size` 设置球大小,通过 `progress` 设置进度

```html
<uv-water-waves :progress="progress" size="250px"/>
```

## 内容插槽

通过 `color` 设置字体颜色

 ```html
<uv-water-waves :progress="progress1" color="#bfa">
  <div>{{ progress1 }}</div>
</uv-water-waves>
 ```


 ## props

| 属性     |    含义    |  类型  |  默认值 |
| -------- | :--------: | :----: | ------: |
| size     | 水波球大小 | String | '200px' |
| progress |    进度    | Number |       0 |
| color    |  文字颜色  | String |  '#fff' |


## css变量

```css
  --uv-water-wave1-color: #a0edff;
  --uv-water-wave2-color: rgb(40 187 255 / 50%);
  --uv-water-wave3-color: #2084cc;
```