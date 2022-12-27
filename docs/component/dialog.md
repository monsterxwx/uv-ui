<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('dialog')
})

</script>

## 基本使用

通过 `title` 和 `message` 设置标题和内容

```vue
<template>
  <div>
    <uv-button
      type="primary"
      @click="openDialog"
    >
      打开dialog
    </uv-button>
  </div>
</template>

<script setup>
import { showDialog } from '../../../index'

const openDialog = () => {
  showDialog({
    title: 'Dialog',
    message: '代码是写出来给人看的，附带能在机器上运行。'
  })
}
</script>
```

 ## props

| 属性                  |         含义         |  类型   |    默认值 |
| --------------------- | :------------------: | :-----: | --------: |
| title                 |         标题         | String  |         - |
| message               |         内容         | String  |         - |
| showConfirmButton     |   是否显示确定按钮   | Boolean |      true |
| confirmButtonText     |   确定按钮文字名称   | String  |    '确认' |
| confirmButtonColor    |   确定按钮文字颜色   | String  | '#1989fa' |
| confirmButtonDisabled |   禁止确定按钮点击   | Boolean |     false |
| showCancleButton      |   是否显示取消按钮   | Boolean |     false |
| cancleButtonText      |   取消按钮文字名称   | String  |    '取消' |
| cancleButtonColor     |   取消按钮文字颜色   | String  | '#000000' |
| cancelButtonDisabled  |   禁止取消按钮点击   | Boolean |     false |
| overlay               | 是否显示遮罩背景颜色 | Boolean |      true |
| closeOnClickOverlay   | 是否可以点击遮罩关闭 | Boolean |     false |

## events

| 事件名称 |      含义      | 参数 |
| -------- | :------------: | ---: |
| cancle   | 点击取消按钮时 |    - |
| confim   | 点击确定按钮时 |    - |

## css变量

```css
  --uv-dialog-width: 90%;
  --uv-dialog-min-height: 100px;
  --uv-dialog-border-radius: 16px;
  --uv-dialog-bg-color: #ffffff;
  --uv-dialog-transition-time: 0.3s;
  --uv-dialog-title-padding: 15px 0 10px;
  --uv-dialog-title-text-align: center;
  --uv-dialog-title-color: #323233;
  --uv-dialog-content-padding: 8px 24px 26px;
  --uv-dialog-content-font-size: 14px;
  --uv-dialog-content-color: #646566;
  --uv-dialog-bottom-button-height: 48px;
  --uv-dialog-bottom-button-border-top: 1px solid #f7f8f9;
  --uv-dialog-bottom-button-center-line-color: #f7f8f9;
  --uv-dialog-confim-active-bg-color: #e6e6e6;
  --uv-dialog-cancle-bg-color: #e6e6e6;
  --uv-dialog-button-undisabled-color: #646566;
```