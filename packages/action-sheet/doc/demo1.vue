<template>
  <div>
    <uv-button @click="show=true">
      打开动作面板
    </uv-button>
    <uv-action-sheet
      v-model:show="show"
      v-model="value"
      :list="list"
      :click-overlay-close="false"
    />
    {{ value }}
    <div class="title">
      选项状态
    </div>
    <div class="tip">
      通过<span class="code">color</span> <span class="code">disabled</span>可以设置子项的字体颜色和是否为禁用状态
    </div>
    <uv-button @click="show1=true">
      打开动作面板
    </uv-button>
    <uv-action-sheet
      v-model:show="show1"
      v-model="value1"
      :list="list1"
    />
    <div class="title">
      展示取消按钮
    </div>
    <div class="tip">
      通过<span class="code">cancelText</span>设置该属性后开启，并且设置取消按钮的名称
    </div>
    <uv-button @click="show2=true">
      打开动作面板
    </uv-button>
    <uv-action-sheet
      v-model:show="show2"
      v-model="value1"
      :list="list1"
      cancel-text="取消"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const value = ref('')
const value1 = ref('')
const list = ref([
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
])
const list1 = ref([
  { name: '着色选项', color: '#ee0a24' },
  { name: '禁用选项', disabled: true },
  { name: '正常选项' }
])
</script>

<style lang="scss" scoped>

</style>
