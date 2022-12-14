<template>
  <div
    class="uv-table"
  >
    <div class="uv-table-header-wrapper">
      <div class="uv-table-tr">
        <div
          class="uv-table-th"
          :style="{width:item.width,flex:item.width?'':1}"
          v-for="(item,index) in columns"
          :key="item.prop || index"
        >
          <template v-if="item.titleSlot">
            <slot
              :name="item.titleSlot"
              :data="item"
            />
          </template>
          <span v-else> {{ item.title }}</span>
        </div>
      </div>
    </div>
    <div
      class="uv-table-body-wrapper"
    >
      <div
        class="uv-table-tr"
        v-for="(item,indextr) in data"
        :key="indextr"
      >
        <div
          class="uv-table-td"
          :style="{width:chil.width,flex:chil.width?'':1}"
          v-for="(chil,idx) in columns"
          :key="chil.prop || idx"
        >
          <slot
            :name="chil.prop"
            :data="item[chil.prop]"
          >
            {{ item[chil.prop] || '' }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import './index.scss'
// import { onMounted, ref } from 'vue'
defineProps({
  data: {
    type: Array,
    default: () => ([])
  },
  columns: {
    type: Array,
    default: () => ([])
  }
})

</script>
<script>
export default {
  name: 'UvTable'
}
</script>
