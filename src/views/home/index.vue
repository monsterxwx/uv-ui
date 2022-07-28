<template>
  <div class="container">
    <headerBlock />

    <div class="content">
      <transition>
        <div
          class="left-menu"
          v-show="!store.openMenu"
        >
          <template
            v-for="(item,index) in menuList[2].children"
            :key="index"
          >
            <div
              class="menuTitle"
              v-if="item.meta.title"
              @click.stop
            >
              {{ item.meta.title }}
            </div>
            <li
              :class="{active:activeIndex===index}"
              @click="switchMenu(item,index)"
            >
              {{ item.meta.name }}
            </li>
          </template>
        </div>
      </transition>
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
import useStore from '@/store/common'
const store = useStore()
const router = useRouter()
const activeIndex = ref(0)
const switchMenu = (item, index) => {
  router.push({
    name: item.name
  })
  activeIndex.value = index
  store.changeMenu()
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
      position: absolute;
      z-index: 999;
      overflow-y: auto;
      padding: 10px;
      width: 180px;
      height: 100%;
      border-right: 1px solid #f0f0f0;
      white-space: nowrap;
      background-color: #ffffff;
      .menuTitle {
        margin: 10px 0;
        padding: 0 10px;
        font-size: 15px;
        font-weight: 700;
        color: #455a64;
      }
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
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 10px;
      height: auto;
      border: 1px solid #f7f8fa;
      background-color: #f6f7f9;
      flex: 1;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s;
}
.v-enter-from,
.v-leave-to {
  transform: translate(-100%, 0);
}
</style>
