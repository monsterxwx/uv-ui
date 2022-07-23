<template>
  <div class="container">
    <div class="left-menu">
      <li
        v-for="(item,index) in menuList[0].children"
        :key="index"
        :class="{active:activeIndex===index}"
        @click="switchMenu(item,index)"
      >
        {{ item.name }}
      </li>
    </div>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import menuList from '@/router/routerPage/pages.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref(0)
const switchMenu = (item, index) => {
  router.push({
    name: item.name
  })
  activeIndex.value = index
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  .left-menu {
    overflow-y: auto;
    width: 200px;
    height: auto;
    border-right: 1px solid #f0f0f0;
    li {
      padding: 0 10px;
      list-style: none;
      line-height: 40px;
      cursor: pointer;
    }
    li.active {
      border-right: 4px solid #0e80eb;
      color: #0e80eb;
      background: rgb(14 128 235 / 10%);
    }
  }
  .router-view {
    overflow-y: auto;
    padding: 0 15px;
    height: auto;
    flex: 1;
  }
}
</style>
