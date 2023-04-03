<template>
  <div>
    <uvCalendar />
    <!-- <uvButton
      type="primary"
      loading
      @click="open"
    >
      切换
    </uvButton>
    <uvPopup v-model="show" round>
      <div style="height: 300px;">
        111
      </div>
    </uvPopup>
    <uvInput v-model="test1" border clearable />
    <div class="iconBox">
      <div
        class="icon"
        v-for="item in iconArr"
        :key="item.name"
      >
        <uv-icon
          size="30"
          :name="item.name"
        />
        <div class="itemName">
          {{ item.name }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import iconArr from './iconName.js'
import { uvPopup, uvButton, uvInput, uvIcon, uvCalendar } from 'uv-ui'
import { ref } from 'vue'

const show = ref(false)
const test1 = ref('')
const open = () => {
  show.value = !show.value
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
