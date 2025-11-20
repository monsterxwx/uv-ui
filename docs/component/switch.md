<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('switch')
})

</script>

## 基本使用

```html
<uv-switch v-model="test" />
```

## 禁用状态

通过 `disabled` 开启

```html
<uv-switch v-model="test" disabled />
```

## 自定义尺寸

通过 `size` 设置

```html
<uv-switch v-model="test" :size="num" />
```

## 自定义活跃状态背景色和默认背景色

通过 `activeColor` 和 `inactiveColor` 设置

```html
<uv-switch v-model="test" active-color="#ee0a24" inactive-color="#88c1fa" />
```

## props

| 属性          |       含义       |       类型       | 默认值 |
| ------------- | :--------------: | :--------------: | -----: |
| modelValue    | 双向绑定的布尔值 |     Boolean      |  false |
| disabled      |     是否禁用     |     Boolean      |  false |
| activeColor   |  活跃的背景颜色  |      String      |      - |
| inactiveColor | 不活跃的背景颜色 |      String      |      - |
| size          |       大小       | [String, Number] |      - |

## events

无

## css 变量

```css
--uv-switch-width: calc(1.8em + 4px);
--uv-switch-height: calc(1em + 4px);
--uv-switch-background: #e2e3e7;
--uv-switch-on-background: #1989fa;
--uv-switch-transition-time: 0.3s;
--uv-switch-size: 26px;
--uv-switch-box-shadow: 0 3px 1px 0 rgb(0 0 0 / 5%);
--uv-switch-circle-size: 1em;
--uv-switch-circle-background: #ffffff;
```
