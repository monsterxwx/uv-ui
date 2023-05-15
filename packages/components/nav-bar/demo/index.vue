<template>
  <div>
    <demoBlock title="基本使用">
      <uv-nav-bar
        title="标题"
      />
    </demoBlock>
    <demoBlock title="返回上级">
      <uv-nav-bar
        title="标题"
        left-title="返回"
        left-arrow
      />
    </demoBlock>
    <demoBlock title="右侧插槽">
      <uv-nav-bar
        title="标题"
        left-title="返回"
        left-arrow
      >
        <template #right>
          <uv-icon
            size="18"
            name="search"
            color="#419dfb"
          />
        </template>
      </uv-nav-bar>
    </demoBlock>
    <demoBlock title="fixed定位">
      <div style="margin-bottom: 10px;">
        <uv-button @click="clickhandle">
          {{ isFixed?'关闭':'开启' }}
        </uv-button>
      </div>
      <uv-nav-bar
        title="标题"
        :fixed="isFixed"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvNavBar, uvIcon, uvButton } from 'uv-ui'
import { ref } from 'vue'

const isFixed = ref(false)
const clickhandle = () => {
  isFixed.value = !isFixed.value
}
</script>

<style lang="scss" scoped>

</style>
