<template>
  <div>
    <uv-button
      type="primary"
      @click="openToast"
    >
      打开toast
    </uv-button>
    <div class="title">
      不同状态
    </div>
    <div class="tip">
      通过 <span class="code">type</span>  设置不同状态，包括<span class="code">success</span>、<span class="code">error</span>、<span class="code">loading</span>三种状态
    </div>
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
    <div class="title">
      其他配置
    </div>
    <div class="tip">
      通过传入 <span class="code">duration</span> 为0后则需要手动销毁， 调用 <span class="code">clear</span> 函数进行销毁。
      <div>
        通过传入 <span class="code">bgColor</span>可以修改背景颜色，通过传入 <span class="code">color</span>可以修改字体颜色
      </div>
    </div>
    <uv-button
      type="primary"
      @click="openToast2"
    >
      6s后调用clear关闭
    </uv-button>
  </div>
</template>

<script setup>
import { Toast } from '../../index'

const openToast = () => {
  Toast({
    message: 'toast提醒'
  })
}
const openToast1 = (e) => {
  Toast({
    message: '状态',
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

</style>
