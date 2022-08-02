<template>
  <div>
    <uv-checkbox
      v-model="test1"
      name="test1"
      @change="change"
    >
      单选框
    </uv-checkbox>
    <div class="title">
      自定义形状
    </div>
    <div class="tip">
      通过<span class="code">shape</span> 设置，可选值为<span class="code">square</span>,默认为<span class="code">round</span>
    </div>
    <uv-checkbox
      v-model="test2"
      name="test2"
      shape="square"
    >
      单选框
    </uv-checkbox>
    <div class="title">
      禁用状态
    </div>
    <div class="tip">
      通过<span class="code">disabled</span> 设置
    </div>
    <uv-checkbox
      v-model="test2"
      disabled
      name="单选框"
    >
      单选框
    </uv-checkbox>
    <div class="title">
      自定义选中背景色
    </div>
    <div class="tip">
      通过<span class="code">checkedColor</span> 设置
    </div>
    <uv-checkbox
      v-model="test2"

      checked-color="red"
    >
      单选框
    </uv-checkbox>
    <div class="title">
      文本位置
    </div>
    <div class="tip">
      通过<span class="code">labelPosition</span> 设置<span class="code">left</span>or<span class="code">right</span>,默认<span class="code">right</span>
    </div>
    <uv-checkbox
      v-model="test2"
      shape="square"
      label-position="left"
    >
      单选框
    </uv-checkbox>
    <div class="title">
      是否两边排布
    </div>
    <div class="tip">
      通过<span class="code">spaceBetween</span> 开启
    </div>
    <uv-checkbox
      v-model="test3"
      space-between
      label-position="left"
    >
      单选框
    </uv-checkbox>
    <!-- <div class="title">
      多选组
    </div>
    <div class="tip">
      通过<span class="code">uv-checkbox-group</span> 组件包裹
    </div>
    <uv-checkbox-group v-model="checkArr">
      <uv-checkbox
        name="test1"
      >
        单选框
      </uv-checkbox>
      <uv-checkbox
        name="test2"
      >
        单选框
      </uv-checkbox>
    </uv-checkbox-group>
    {{ checkArr }} -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const test1 = ref(false)
const test2 = ref(true)
const test3 = ref(false)
// const checkArr = ref(['test1'])
const change = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>

</style>
