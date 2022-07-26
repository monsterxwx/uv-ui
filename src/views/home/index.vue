<template>
  <div class="container">
    <headerBlock />

    <div class="content">
      <div class="left-menu">
        <li
          v-for="(item,index) in menuList[2].children"
          :key="index"
          :class="{active:activeIndex===index}"
          @click="switchMenu(item,index)"
        >
          {{ item.meta.name }}
        </li>
      </div>
      <div class="router-view">
        <router-view />
      </div>
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
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .content {
    display: flex;
    width: 100%;
    height: calc(100vh - 64px);
    .left-menu {
      overflow-y: auto;
      padding: 10px;
      width: 200px;
      height: auto;
      border-right: 1px solid #f0f0f0;
      li {
        padding: 0 10px;
        font-size: 13px;
        border-radius: 8px;
        list-style: none;
        line-height: 40px;
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
      li.active {
        font-weight: 700;
        color: #0e80eb;
        background: #ecf5ff;
      }
    }
    .router-view {
      overflow-y: auto;

      // padding: 0 15px;

      // flex: 1;
      width: 360px;
      height: auto;
      border: 1px solid #f7f8fa;
      background-color: #f6f7f9;
    }
  }
}
</style>
