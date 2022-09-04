<template>
  <div>
    <uv-button
      type="primary"
      @click="openDialog"
    >
      打开dialog
    </uv-button>
    <div class="title">
      指定标题和内容
    </div>
    <div class="tip">
      通过 <span class="code">title</span>和<span class="code">message</span> 设置
    </div>
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

<style lang="scss" scoped>

</style>
