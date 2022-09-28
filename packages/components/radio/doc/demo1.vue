<template>
  <div>
    <div class="tip">
      <div>通过<span class="code">v-model</span> 进行双向绑定，Boolean类型</div>
      <div>通过<span class="code">label</span> 指定显示内容，也可以直接通过默认插槽进行个性化显示</div>
      <div>通过<span class="code">change</span>事件监听变化</div>
    </div>
    <uv-radio
      v-model="test1"
      label="数据1"
      @change="change"
    />
    <div class="title">
      自定义形状
    </div>
    <div class="tip">
      通过<span class="code">shape</span> 设置，可选值为<span class="code">square</span>,默认为<span class="code">round</span>
    </div>
    <uv-radio
      v-model="test2"
      label="test2"
      shape="square"
    />
    <div class="title">
      禁用状态
    </div>
    <div class="tip">
      通过<span class="code">disabled</span> 设置
    </div>
    <uv-radio
      v-model="test2"
      disabled
      label="单选框"
    />
    <div class="title">
      自定义选中背景色
    </div>
    <div class="tip">
      通过<span class="code">checkedColor</span> 设置
    </div>
    <uv-radio
      v-model="test2"
      checked-color="red"
    >
      单选框
    </uv-radio>
    <div class="title">
      文本位置
    </div>
    <div class="tip">
      通过<span class="code">labelPosition</span> 设置<span class="code">left</span>or<span class="code">right</span>,默认<span class="code">right</span>
    </div>
    <uv-radio
      v-model="test2"
      label="单选框"
      shape="square"
      label-position="left"
    />
    <div class="title">
      是否两边排布
    </div>
    <div class="tip">
      通过<span class="code">spaceBetween</span> 开启
    </div>
    <uv-radio
      v-model="test3"
      label="单选框"
      space-between
      label-position="left"
    />
    <div class="title">
      单选组
    </div>
    <div class="tip">
      <div>通过<span class="code">uv-radio-group</span> 组件包裹,当前绑定值：{{ checkStr }}</div>
    </div>
    <uv-radio-group
      v-model="checkStr"
    >
      <uv-radio
        label="test1"
      />
      <uv-radio
        label="test2"
      />
      <uv-radio
        label="test3"
      />
      <uv-radio
        label="test4"
      />
      <uv-radio
        label="test41"
      />
      <uv-radio
        label="test42"
      />
      <uv-radio
        label="test43"
      />
    </uv-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const test1 = ref(false)
const test2 = ref(true)
const test3 = ref(false)
const checkStr = ref('test1')
const change = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>

</style>
