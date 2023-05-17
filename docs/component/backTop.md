<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('back-top')
})

</script>

## 基本使用

```html
<uvBackTop />
```

## 自定义内容

```html
<uvBackTop>
  O_O
</uvBackTop>
```

## 瞬间滚动

```html
<uvBackTop immediate />
```

## props

| 属性      |               含义               |  类型   | 默认值 |
| --------- | :------------------------------: | :-----: | -----: |
| immediate |        是否瞬间滚动到顶部        | Boolean |  false |
| offset    | 滚动高度达到此参数值时才显示组件 | Number  |    200 |

## events

| 事件名称 |   含义   | 参数 |
| -------- | :------: | ---: |
| click    | 点击事件 |    - |

## css变量

```css
  --uv-back-top-bg-color: #1989fa;
  --uv-back-top-border-radius: 50%;
  --uv-back-top-transition-time: 0.3s;
  --uv-back-top-width: 40px;
  --uv-back-top-height: 40px;
  --uv-back-top-z-index: 100;
  --uv-back-top-position-right: 30px;
  --uv-back-top-position-bottom: 40px;
  --uv-back-top-transform: scale(0);
```
