<template>
  <div>
    <demoBlock title="基本使用">
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
    </demoBlock>
    <demoBlock title="自定义颜色">
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
    </demoBlock>
    <demoBlock title="tab-bar-item插槽">
      <uv-tab-bar :fixed="false" active-color="green" v-model="active1">
        <uv-tab-bar-item v-for="item in 3" :key="item">
          <template #icon>
            icon
          </template>
          <template #text>
            text
          </template>
        </uv-tab-bar-item>
      </uv-tab-bar>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvTabBar, uvTabBarItem } from 'uv-ui'
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
    iconName: 'modular'
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
