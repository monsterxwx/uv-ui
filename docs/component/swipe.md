<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('swipe')
})

</script>

## 基本使用

```html
<uv-swipe :autoplay="3000">
  <uv-swipe-item>
    <div class="test color1">
      1
    </div>
  </uv-swipe-item>
  <uv-swipe-item>
    <div class="test color2">
      2
    </div>
  </uv-swipe-item>
  <uv-swipe-item>
    <div class="test color3">
      3
    </div>
  </uv-swipe-item>
</uv-swipe>
```

## 关闭自动轮播

```html
<uv-swipe>
  <uv-swipe-item>
    <div class="test color1">
      1
    </div>
  </uv-swipe-item>
  <uv-swipe-item>
    <div class="test color2">
      2
    </div>
  </uv-swipe-item>
  <uv-swipe-item>
    <div class="test color3">
      3
    </div>
  </uv-swipe-item>
</uv-swipe>
```

## props

| 属性     |     含义     |  类型  | 默认值 |
| -------- | :----------: | :----: | -----: |
| autoplay | 是否自动播放 | Number |    0 |
| duration | 动画时间 | Number |    500 |

## events

| 事件名称 |    含义    |        参数 |
| -------- | :--------: | ----------: |
| change   | 轮播改变时 | 当前的index |

## css变量

```css
```
