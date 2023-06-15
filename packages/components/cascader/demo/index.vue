<template>
  <div>
    <demoBlock title="基本使用">
      <div> {{ currentData }}</div>
      <uvButton @click="open">
        打开
      </uvButton>
      <uvCascader
        ref="cascaderRef"
        :list="list"
        :popup-props="{title:'请选择数据'}"
        @finish="finish"
      />
    </demoBlock>
    <demoBlock title="异步加载">
      <uvButton @click="open1">
        打开
      </uvButton>
      <uvCascader
        ref="cascaderRef1"
        :list="list1"
        :popup-props="{title:'请选择数据'}"
        @change="change"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvButton, uvCascader, Toast } from 'uv-ui'
import { ref } from 'vue'

const cascaderRef = ref(null)
const cascaderRef1 = ref(null)

const open = () => {
  cascaderRef.value.open()
}

const open1 = () => {
  cascaderRef1.value.open()
}

const currentData = ref(null)
const finish = (e) => {
  console.log(e)
  currentData.value = e
}

const loadingFirst = ref(false)
const change = (e) => {
  if (loadingFirst.value) return
  console.log(e)
  const toast = Toast({
    message: '加载中',
    type: 'loading',
    duration: 0
  })
  setTimeout(() => {
    list1.value[0].children = [
      {
        value: '1-1',
        label: 'Level1-1'
      },
      {
        value: '1-2',
        label: 'Level1-2'
      },
      {
        value: '1-3',
        label: 'Level1-3'
      }
    ]

    toast.clear()
    loadingFirst.value = true
  }, 2000)
}

const list = [
  {
    value: '1',
    label: 'Level1',
    children: [
      {
        value: '1-1',
        label: 'Level1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level1-1-1'
          }
        ]
      },
      {
        value: '1-2',
        label: 'Level1-2'
      },
      {
        value: '1-3',
        label: 'Level1-3'
      }
    ]
  },
  {
    value: '2',
    label: 'Level2',
    children: [
      {
        value: '2-1',
        label: 'Level2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level2-1-1'
          }
        ]
      },
      {
        value: '2-2',
        label: 'Level2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level2-2-1'
          }
        ]
      }
    ]
  }
]
const list1 = ref([
  {
    value: '1',
    label: 'Level1',
    children: []
  }
])
</script>

<style lang="scss" scoped>

</style>
