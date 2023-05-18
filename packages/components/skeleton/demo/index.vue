<template>
  <div style="overflow: auto;width: 100%;height: 100%;background-color: #ffffff;">
    <demoBlock title="基本使用">
      <uvSkeleton :row="3" />
    </demoBlock>
    <demoBlock title="显示标题">
      <uvSkeleton title :row="3" />
    </demoBlock>
    <demoBlock title="圆角">
      <uvSkeleton title round :row="3" />
    </demoBlock>
    <demoBlock title="显示头像">
      <uvSkeleton avatar title :row="3" />
    </demoBlock>
    <demoBlock title="正方形头像">
      <uvSkeleton
        avatar
        title
        avatar-shape="square"
        :row="3"
      />
    </demoBlock>
    <demoBlock title="内容设置不同宽度">
      <uvSkeleton title :row="4" :row-width="['100%','90%','70%','80%']" />
    </demoBlock>
    <demoBlock title="显示子组件">
      <uvSwitch style="margin-bottom: 10px;" v-model="isLoading" />
      <uvSkeleton
        :loading="!isLoading"
        avatar
        title
        :row="3"
      >
        <div style="display: flex;">
          <div style="margin-right: 10px;">
            <uv-icon
              size="30"
              name="help"
            />
          </div>
          <div style="flex: 1 0;">
            <div style="margin-bottom: 12px;font-size: 18px;font-weight: 700;">
              关于 uv-ui
            </div>
            <div style="line-height: 1.5;">
              uv-ui 是一套轻量、可定制的移动端 Vue 组件库，提供了丰富的组件，帮助开发者快速搭建移动应用。
            </div>
          </div>
        </div>
      </uvSkeleton>
    </demoBlock>
    <demoBlock title="自定义展示内容">
      <uvSkeleton>
        <template #template>
          <div :style="{ display: 'flex', width: '100%' }">
            <uv-skeleton-image />
            <div :style="{ flex: 1, marginLeft: '16px' }">
              <uv-skeleton-paragraph row-width="60%" />
              <uv-skeleton-paragraph />
              <uv-skeleton-paragraph />
              <uv-skeleton-paragraph />
            </div>
          </div>
        </template>
      </uvSkeleton>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSkeleton, uvSkeletonImage, uvSkeletonParagraph, uvSwitch, uvIcon } from 'uv-ui'
import { ref } from 'vue'

const isLoading = ref(false)
</script>

<style lang="scss" scoped>

</style>
