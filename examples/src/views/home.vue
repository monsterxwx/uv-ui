<template>
  <div
    class="menu"
    ref="scrollRef"
  >
    <template
      v-for="(item,index) in menuStore.menuList"
      :key="item.name || index"
    >
      <div
        class="sort"
        v-if="item.meta.title"
        @click.stop
      >
        {{ item.meta.title }}
      </div>
      <li
        class="menu-item"
        v-else
        @click="switchMenu(item,index)"
      >
        <div> {{ item.meta.name }}</div>
        <div>
          <uv-icon
            size="14"
            color="#bac6d4"
            name="arrow-right"
          />
        </div>
      </li>
    </template>
  </div>
</template>

<script setup>
import { uvIcon } from 'uv-ui'
import { ref, onActivated, nextTick } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { useCommonStore } from '@/stores/common.js'

const menuStore = useCommonStore()
const router = useRouter()

const switchMenu = (item) => {
  router.push({
    name: item.name
  })
}
const scrollRef = ref(null)
const scrollTop = ref(0)
onActivated(() => {
  nextTick(() => {
    scrollRef.value.scrollTop = scrollTop.value
  })
})
onBeforeRouteLeave((to, from, next) => {
  scrollTop.value = scrollRef.value.scrollTop
  next()
})
</script>

<style lang="scss" scoped>
.menu {
  overflow: auto;
  height: 100%;
  li {
    list-style: none;
  }
  .sort {
    margin: 24px 0 8px 20px;
    font-size: 14px;
    color: #969799;
  }
  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 14px 12px;
    padding: 0 14px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 99px;
    color: #34495e;
    background-color: #ffffff;
    &:active {
      background-color: #eeeeee;
    }
  }
}
</style>
