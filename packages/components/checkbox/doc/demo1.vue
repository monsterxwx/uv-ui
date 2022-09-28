<template>
  <div>
    <div class="tip">
      <div>通过<span class="code">v-model</span> 进行双向绑定，Boolean类型</div>
      <div>通过<span class="code">label</span> 指定显示内容，也可以直接通过默认插槽进行个性化显示</div>
      <div>通过<span class="code">change</span>事件监听变化</div>
    </div>
    <uv-checkbox
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
    <uv-checkbox
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
    <uv-checkbox
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
    <uv-checkbox
      v-model="test3"
      label="单选框"
      space-between
      label-position="left"
    />
    <div class="title">
      多选组
    </div>
    <div class="tip">
      <div>通过<span class="code">uv-checkbox-group</span> 组件包裹</div>
      <div>通过<span class="code"> v-model</span> 绑定数组类型数据</div>
    </div>
    <uv-checkbox-group
      v-model="checkArr"
    >
      <uv-checkbox
        label="test1"
      />
      <uv-checkbox
        label="test2"
      />
      <uv-checkbox
        label="test3"
      />
      <uv-checkbox
        label="test4"
      />
      <uv-checkbox
        label="test41"
      />
      <uv-checkbox
        label="test42"
      />
      <uv-checkbox
        label="test43"
      />
    </uv-checkbox-group>
    <div class="title">
      限制最大选择数量
    </div>
    <div class="tip">
      通过<span class="code">max</span>属性设置
    </div>
    <uv-checkbox-group
      v-model="checkArr1"
      :max="2"
    >
      <uv-checkbox
        label="test1"
      />
      <uv-checkbox
        label="test2"
      />
      <uv-checkbox
        label="test3"
      />
      <uv-checkbox
        label="test4"
      />
    </uv-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const test1 = ref(false)
const test2 = ref(true)
const test3 = ref(false)
const checkArr = ref([])
const checkArr1 = ref(['test1'])
const change = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>

</style>
