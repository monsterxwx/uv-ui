<template>
  <div>
    <demoBlock title="基本使用">
      <uv-input
        v-model="value"
      />
    </demoBlock>
    <demoBlock title="是否开启边框">
      <uv-input
        border
        v-model="value1"
      />
    </demoBlock>
    <demoBlock title="禁用输入框">
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
    </demoBlock>
    <demoBlock title="是否显示关闭按钮">
      <uv-input
        clearable
        v-model="value1"
      />
    </demoBlock>
    <demoBlock title="自定义右边内容">
      <uv-input
        v-model="value1"
      >
        <template #right>
          <div class="diy">
            m
          </div>
        </template>
      </uv-input>
    </demoBlock>
    <demoBlock title="格式化">
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
    </demoBlock>
    <demoBlock title="类型">
      <uv-input
        type="password"
        v-model="value5"
      />
      <div style="height: 10px;" />
      <uv-input
        type="number"
        v-model="value5"
      />
    </demoBlock>
    <demoBlock title="输入框内容对齐方式">
      <uv-input
        input-align="center"
        v-model="value5"
      />
      <div style="height: 10px;" />
      <uv-input
        input-align="right"
        v-model="value5"
      />
    </demoBlock>
    <demoBlock title="自动高度">
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
    </demoBlock>
    <demoBlock title="显示字数统计">
      <uv-input
        type="textarea"
        show-word-limit
        :maxlength="90"
        autosize
        v-model="value8"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvInput } from 'uv-ui'
import { ref } from 'vue'
const value = ref('')
const value1 = ref('')
const value2 = ref('你干嘛，哎呦')
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 4px;
  color: #969799;
}
</style>
