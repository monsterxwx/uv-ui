<template>
  <div>
    <demoBlock title="基本使用">
      <uv-checkbox
        v-model="test1"
        label="数据1"
        @change="change"
      />
    </demoBlock>
    <demoBlock title="自定义形状">
      <uv-checkbox
        v-model="test2"
        label="test2"
        shape="square"
      />
    </demoBlock>
    <demoBlock title="禁用状态">
      <uv-checkbox
        v-model="test2"
        disabled
        label="单选框"
      />
    </demoBlock>
    <demoBlock title="自定义选中背景色">
      <uv-checkbox
        v-model="test2"
        checked-color="red"
      >
        单选框
      </uv-checkbox>
    </demoBlock>
    <demoBlock title="文本位置">
      <uv-checkbox
        v-model="test2"
        label="单选框"
        shape="square"
        label-position="left"
      />
    </demoBlock>
    <demoBlock title="是否两边排布">
      <uv-checkbox
        v-model="test3"
        label="单选框"
        space-between
        label-position="left"
      />
    </demoBlock>
    <demoBlock title="多选组">
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
    </demoBlock>
    <demoBlock title="限制最大选择数量">
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
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCheckbox, uvCheckboxGroup } from 'uv-ui'
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
