<template>
  <div>
    <uv-button @click="openToast">
      打开toast
    </uv-button>
  </div>
</template>

<script setup>
import { Toast } from '../../index'

const openToast = () => {
  // Toast({
  //   message: 'test',
  //   duration: 0, //为0时需要手动销毁
  //   bgColor: '#000',
  //   type:'success',//提示类型
  //   color: '#fff'
  // })
  // Toast.clear() //调用销毁函数
  Toast({
    message: 'tefasdfst',
    duration: 0,
    type: 'loading'
  })
}
</script>

<style lang="scss" scoped>

</style>
