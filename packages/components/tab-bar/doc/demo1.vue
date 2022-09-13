<template>
  <div>
    <uv-tab-bar
      :fixed="false"
      v-model="active"
      active-bg-color="#ebebeb"
      @change="change"
    >
      <uv-tab-bar-item
        v-for="item in list"
        :key="item.name"
        :icon-size="item.iconSize"
        :icon-name="item.iconName"
        :text="item.name"
      />
    </uv-tab-bar>
    <div class="title">
      自定义颜色
    </div>
    <div class="tip">
      通过<span class="code">activeColor</span> 设置
    </div>
    <uv-tab-bar
      :fixed="false"
      active-color="green"
      v-model="active1"
    >
      <uv-tab-bar-item
        v-for="item in list"
        :key="item.name"
        :icon-size="item.iconSize"
        :icon-name="item.iconName"
        :text="item.name"
      />
    </uv-tab-bar>
    <div class="title">
      uv-tab-bar-item插槽
    </div>
    <div class="tip">
      <div>通过插槽名为<span class="code">icon</span> 自定义图标</div>
      <div>通过插槽名为<span class="code">text</span> 自定义文字效果</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
const active1 = ref(0)
const list = [
  {
    name: '标签1',
    iconSize: '24',
    iconName: 'home'
  }, {
    name: '标签2',
    iconSize: '24',
    iconName: 'search'
  }, {
    name: '标签3',
    iconSize: '24',
    iconName: 'user'
  }, {
    name: '标签4',
    iconSize: '24',
    iconName: 'setting'
  }
]
const change = (idx) => {
  console.log('点击了', idx)
}
</script>

<style lang="scss" scoped>

</style>
