<template>
  <div>
    <demoBlock title="基本使用">
      <uv-button
        type="primary"
        @click="openToast"
      >
        打开toast
      </uv-button>
    </demoBlock>
    <demoBlock title="不同状态">
      <div class="flex">
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
      </div>
    </demoBlock>
    <demoBlock title="其他配置">
      <uv-button
        type="primary"
        @click="openToast2"
      >
        6s后调用clear关闭
      </uv-button>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { Toast, uvButton } from 'uv-ui'

const openToast = () => {
  Toast({
    message: 'toast提醒'
  })
}
const openToast1 = (e) => {
  Toast({
    message: e + '状态',
    type: e
  })
}
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

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
