<template>
  <div>
    {{ value }}
    <uv-cell-group card>
      <uv-cell title="基本使用">
        <template #value>
          <uv-stepper v-model="value" />
        </template>
      </uv-cell>
      <uv-cell title="限制输入范围(-1,5)">
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
const value = ref(1)
const value1 = ref(1)
</script>

<style lang="scss" scoped>

</style>
