<template>
  <div class="iconBox">
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
      <div class="itemName">
        {{ item.name }}
      </div>
    </div>
  </div>
  <textarea
    style="opacity: 0;"
    id="inputCopy"
  />
</template>

<script setup>
import { Toast } from '../../../index'
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
.iconBox {
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
    .itemName {
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
