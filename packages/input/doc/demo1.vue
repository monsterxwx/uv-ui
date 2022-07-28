<template>
  <div class="container">
    <uv-cell-group card>
      <uv-input
        label="文本1"
        v-model="value"
      />
    </uv-cell-group>
    <div class="title">
      是否显示边框
    </div>
    <div class="tip">
      通过 <span class="code">border</span>设置开启边框
    </div>
    <uv-cell-group card>
      <uv-input
        label="文本2"
        border
        v-model="value1"
      />
    </uv-cell-group>
    <div class="title">
      禁用输入框
    </div>
    <div class="tip">
      通过 <span class="code">readonly</span>设置只读，通过 <span class="code">disabled</span>设置禁止填写
    </div>
    <uv-cell-group card>
      <uv-input
        readonly
        label="文本2"
        v-model="value2"
      />
      <uv-input
        label="文本2"
        disabled
        v-model="value1"
      />
    </uv-cell-group>
    <div class="title">
      是否显示关闭按钮
    </div>
    <div class="tip">
      通过 <span class="code">clearable</span>设置
    </div>
    <uv-cell-group card>
      <uv-input
        label="文本2"
        clearable
        v-model="value1"
      />
    </uv-cell-group>
    <div class="title">
      是否开启错误提示
    </div>
    <div class="tip">
      通过 <span class="code">errorMsg</span>设置错误提示，开启后label左边自动显示*号表示必填
    </div>
    <uv-cell-group card>
      <uv-input
        label="文本1"
        v-model="value11"
        error-msg="请输入必要值"
      />
      <uv-input
        label="文本1"
        v-model="value1"
      />
    </uv-cell-group>
    <div class="title">
      格式化
    </div>
    <div class="tip">
      通过 <span class="code">formatter</span>传入格式化函数，通过<span class="code">formatTrigger</span>修改在何时格式化，可选值为<span class="code">change</span>在输入框改变时，<span class="code">blur</span>在失去焦点时
    </div>
    <uv-cell-group card>
      <uv-input
        label="文本1"
        :formatter="formatterF"
        format-trigger="change"
        v-model="value3"
      />
      <uv-input
        label="文本2"
        :formatter="formatterF"
        format-trigger="blur"
        v-model="value4"
      />
    </uv-cell-group>
    <div class="title">
      类型
    </div>
    <div class="tip">
      通过 <span class="code">type</span>设置，有<span class="code">password</span><span class="code">number</span>
    </div>
    <uv-cell-group card>
      <uv-input
        label="密码"
        type="password"
        v-model="value5"
      />
      <uv-input
        type="number"
        label="数字"
        v-model="value5"
      />
    </uv-cell-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
const value1 = ref('')
const value11 = ref('')
const value2 = ref('只能看，不能填哦')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')

const formatterF = (test) => {
  return `$ ${test}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

</script>

<style lang="scss" scoped>

</style>
