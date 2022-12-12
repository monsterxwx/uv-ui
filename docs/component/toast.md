<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('toast')
  console.log('currentName',compStore.currentName)
})

</script>

## 不同状态

通过 `type` 设置不同状态，包括 `success` `error` `loading` 三种状态

```vue
<template>
    <uv-button
      type="primary"
      @click="openToast1('success')"
    >
      成功状态
    </uv-button>
    <uv-button
      type="primary"
      @click="openToast1('error')"
    >
      失败状态
    </uv-button>
    <uv-button
      type="primary"
      @click="openToast1('loading')"
    >
      等待状态
    </uv-button>
</template>

<script setup>
const openToast1 = (e) => {
  Toast({
    message: e + '状态',
    type: e
  })
}
</script>
```

## 其他配置

通过传入 `duration` 为0后则需要手动销毁， 调用 `clear` 函数进行销毁。
通过传入 `bgColor` 可以修改背景颜色，通过传入 `color` 可以修改字体颜色

```vue
<template>
    <uv-button
      type="primary"
      @click="openToast2"
    >
      6s后调用clear关闭
    </uv-button>
</template>

<script setup>
const openToast2 = () => {
  const toast = Toast({
    message: '等待6s',
    type: 'loading',
    duration: 0
  })
  setTimeout(() => {
    toast.clear()
  }, 6000)
}
</script>
```

## props

| 属性         |     含义     |  类型   |   默认值 |
| ------------ | :----------: | :-----: | -------: |
| message         |  提示文字   | String  |  - |
| duration      | 持续时间 | Number  | 1600 |
| bgColor        |   背景颜色   | String  |  '#4a4a4b' |
| color         |   文字颜色   | String | '#fff' |
| type        |  提示类型  | String  |   - |


## css变量

```css
  --uv-toast-value-padding: 8px 10px;
  --uv-toast-value-max-width: 150px;
  --uv-toast-value-border-radius: 4px;
  --uv-toast-message-font-size: 13px;
  --uv-toast-message-min-width: 70px;
```


