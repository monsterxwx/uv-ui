<template>
  <div>
    <demoBlock title="基本使用">
      <div class="icon-box">
        <div
          class="icon"
          v-for="item in iconArr"
          :key="item.name"
          @click="copyCode(item.name)"
        >
          <uv-icon
            size="30"
            :name="item.name"
          />
          <div class="item-name">
            {{ item.name }}
          </div>
        </div>
      </div>
      <textarea
        style="opacity: 0;"
        id="inputCopy"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvIcon, Toast } from 'uv-ui'
import iconArr from './iconName.js'

const copyCode = (name) => {
  const input = document.getElementById('inputCopy')
  input.value = `<uv-icon
        size="30"
        name="${name}"
      />`
  input.select()
  document.execCommand('copy')
  Toast({
    message: '代码复制成功',
    type: 'success'
  })
}
</script>

<style lang="scss" scoped>
.icon-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 31%;
    border-radius: 4px;
    background-color: #ffffff;
    flex-direction: column;
    .item-name {
      margin-top: 10px;
      font-size: 12px;
    }
    &:active {
      background-color: #eeeeee;
      opacity: 0.8;
    }
  }
}
</style>
