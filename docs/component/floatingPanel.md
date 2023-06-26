<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('floating-panel')
})

</script>

## 基本使用

```html
<uvFloatingPanel>
  <div v-for="item in 100" :key="item" style="margin: 0 auto 10px;padding: 10px;width: 95%;border-radius: 4px;color: #333333;background-color: #eeeeee;">
    {{ item }}
  </div>
</uvFloatingPanel>
```

## 内容区可拖拽

```html
<uvFloatingPanel content-draggable>
  <div>
    我是内容
  </div>
</uvFloatingPanel>
```


 ## props

| 属性             |       含义       |  类型   | 默认值 |
| ---------------- | :--------------: | :-----: | -----: |
| height           |  默认显示的高度  | Number  |    100 |
| maxHeight        |   最大展开高度   | Number  |    384 |
| duration         |   动画持续时间   | Number  |    0.2 |
| contentDraggable | 允许拖拽内容容器 | Boolean |  false |

## events

| 事件名称     |    含义    |             参数 |
| ------------ | :--------: | ---------------: |
| heightChange | 高度改变时 | 当前的高度height |

## css变量

```css
  --uv-floating-panel-border-radius: 16px 16px 0 0;
  --uv-floating-panel-default-height: 100px;
  --uv-floating-panel-header-height: 30px;
  --uv-floating-panel-z-index: 999;
  --uv-floating-panel-bg-color: #ffffff;
  --uv-floating-panel-header-bar-bg-color: #c8c9cc;
  --uv-floating-panel-header-bar-width: 20px;
  --uv-floating-panel-header-bar-height: 3px;
  --uv-floating-panel-header-border-radius: 4px;
```