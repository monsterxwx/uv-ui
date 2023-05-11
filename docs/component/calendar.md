<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('calendar')
})

</script>

## 基本使用

通过 `v-model` 绑定日期的值

```html
<uvCalendar v-model="dateData" />
```


 ## props

| 属性       |     含义     |  类型  | 默认值 |
| ---------- | :----------: | :----: | -----: |
| modelValue | 双向绑定的值 | Number |      0 |



## css变量

```css
  --uv-calendar-bg-color: #ffffff;
  --uv-calendar-header-shadow: 0 2px 10px rgb(125 126 128 / 16%);
```