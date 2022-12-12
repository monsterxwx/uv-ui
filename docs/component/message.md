<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('message')
  console.log('currentName',compStore.currentName)
})

</script>

```vue
<template>
  <div class="container">
    <uv-button @click="showMessage">
      点击显示
    </uv-button>
  </div>
</template>

<script setup>

import { Message } from '../../../index'
const showMessage = () => {
  Message({
    content: 'test'
  })
}
</script>

```

## props

| 属性         |     含义     |  类型   |   默认值 |
| ------------ | :----------: | :-----: | -------: |
| content         |  消息文字   | String  |  - |
| duration      | 持续时间 | Number  | 3000 |


## css变量

```css
  --uv-message-value-top: 30px;
  --uv-message-value-padding: 8px 10px;
  --uv-message-value-width: 70%;
  --uv-message-value-height: 40px;
  --uv-message-value-border-radius: 4px;
  --uv-message-value-bg-color: #ffffff;
  --uv-message-value-box-shadow: 0 4px 12px #00000026;
  --uv-message-animation-time: 0.5s;
  --uv-message-animation-remove-time: 0.6s;
```