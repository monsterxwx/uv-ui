<template>
  <div
    class="container"
    style="padding: 0 10px;"
  >
    <uv-input
      v-model="value"
    />
    <div class="title">
      是否关闭边框
    </div>
    <div class="tip">
      通过 <span class="code">border</span>设置
    </div>
    <uv-input
      :border="false"
      v-model="value1"
    />
    <div class="title">
      禁用输入框
    </div>
    <div class="tip">
      通过 <span class="code">readonly</span>设置只读，通过 <span class="code">disabled</span>设置禁止填写
    </div>
    <uv-input
      readonly
      label="文本2"
      v-model="value2"
    />
    <div style="height: 10px;" />
    <uv-input
      disabled
      v-model="value1"
    />
    <div class="title">
      是否显示关闭按钮
    </div>
    <div class="tip">
      通过 <span class="code">clearable</span>设置
    </div>
    <uv-input
      clearable
      v-model="value1"
    />
    <div class="title">
      自定义右边内容
    </div>
    <div class="tip">
      通过插槽名称 <span class="code">right</span>设置
    </div>
    <uv-input
      v-model="value1"
    >
      <template #right>
        <div class="diy">
          m
        </div>
      </template>
    </uv-input>
    <div class="title">
      格式化
    </div>
    <div class="tip">
      通过 <span class="code">formatter</span>传入格式化函数，通过<span class="code">formatTrigger</span>修改在何时格式化，可选值为<span class="code">change</span>在输入框改变时，<span class="code">blur</span>在失去焦点时
    </div>
    <uv-input
      :formatter="formatterF"
      format-trigger="change"
      v-model="value3"
    />
    <div style="height: 10px;" />
    <uv-input
      :formatter="formatterF"
      format-trigger="blur"
      v-model="value4"
    />
    <div class="title">
      类型
    </div>
    <div class="tip">
      通过 <span class="code">type</span>设置
    </div>
    <div class="tip">
      <span class="code">password</span>
    </div>
    <uv-input
      type="password"
      v-model="value5"
    />
    <div class="tip">
      <span class="code">number</span>
    </div>
    <uv-input
      type="number"
      v-model="value5"
    />
    <div class="title">
      输入框内容对齐方式
    </div>
    <div class="tip">
      通过 <span class="code">inputAlign</span>设置
    </div>
    <div class="tip">
      <span class="code">center</span>
    </div>
    <uv-input
      input-align="center"
      v-model="value5"
    />
    <div class="tip">
      <span class="code">right</span>
    </div>
    <uv-input
      input-align="right"
      v-model="value5"
    />
    <div class="title">
      自动高度
    </div>
    <div class="tip">
      通过 <span class="code">autosize</span>设置，只对 textarea 有效，需将类型设置为<span class="code">textarea</span>,可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px
    </div>
    <uv-input
      type="textarea"
      autosize
      v-model="value6"
    />
    <div style="height: 10px;" />
    <uv-input
      type="textarea"
      :autosize="{maxHeight:100,minHeight:50}"
      v-model="value7"
    />
    <div class="title">
      显示字数统计
    </div>
    <div class="tip">
      通过 <span class="code">showWordLimit</span>设置，需要传入<span class="code">maxlength</span>属性设置最大字数限制
    </div>
    <uv-input
      type="textarea"
      show-word-limit
      :maxlength="90"
      autosize
      v-model="value8"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
const value1 = ref('')
const value2 = ref('只能看，不能填哦')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')

const formatterF = (test) => {
  return `$ ${test}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

</script>

<style lang="scss" scoped>
.diy {
  margin-left: 5px;
  width: 40px;
  height: 20px;
  border-radius: 4px;
  text-align: center;
  background-color: #eeeeee;
  line-height: 20px;
}
</style>
