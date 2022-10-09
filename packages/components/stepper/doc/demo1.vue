<template>
  <div>
    <uv-cell-group card>
      <uv-cell
        title="基本使用"
        :label-width="220"
      >
        <template #value>
          <uv-stepper
            :min="-5"
            v-model="value"
          />
        </template>
      </uv-cell>
      <uv-cell
        title="限制为整数"
        :label-width="220"
      >
        <template #value>
          <uv-stepper
            integer
            v-model="value11"
          />
        </template>
      </uv-cell>
      <uv-cell
        title="禁止输入框输入"
        :label-width="220"
      >
        <template #value>
          <uv-stepper
            disable-input
            v-model="value22"
          />
        </template>
      </uv-cell>
      <uv-cell
        :label-width="220"
        title="修改步长，每次+-3"
      >
        <template #value>
          <uv-stepper
            :step="3"
            v-model="value2"
          />
        </template>
      </uv-cell>
      <uv-cell
        :label-width="220"
        title="修改尺寸"
      >
        <template #value>
          <uv-stepper
            :size="34"
            input-width="40px"
            v-model="value2"
          />
        </template>
      </uv-cell>
      <uv-cell
        :label-width="220"
        title="限制输入范围(-1,5)"
      >
        <template #value>
          <uv-stepper
            :min="-1"
            :max="5"
            v-model="value1"
          />
        </template>
      </uv-cell>
    </uv-cell-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(2)
const value11 = ref(1)
const value1 = ref(1)
const value2 = ref(1)
const value22 = ref(1)
</script>

<style lang="scss" scoped>

</style>
