<template>
  <div>
    <demoBlock title="基本使用">
      <uv-radio
        v-model="test1"
        label="数据1"
        @change="change"
      />
    </demoBlock>
    <demoBlock title="自定义形状">
      <uv-radio
        v-model="test2"
        label="test2"
        shape="square"
      />
    </demoBlock>
    <demoBlock title="禁用状态">
      <uv-radio
        v-model="test2"
        disabled
        label="单选框"
      />
    </demoBlock>
    <demoBlock title="自定义选中背景色">
      <uv-radio
        v-model="test2"
        checked-color="red"
      >
        单选框
      </uv-radio>
    </demoBlock>
    <demoBlock title="文本位置">
      <uv-radio
        v-model="test2"
        label="单选框"
        shape="square"
        label-position="left"
      />
    </demoBlock>
    <demoBlock title="是否两边排布">
      <uv-radio
        v-model="test3"
        label="单选框"
        space-between
        label-position="left"
      />
    </demoBlock>
    <demoBlock title="单选组">
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
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvRadio, uvRadioGroup } from 'uv-ui'
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
