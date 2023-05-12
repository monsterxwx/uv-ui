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
<style lang="scss">
.uv-table {
  display: flex;
  overflow-x: auto;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .uv-table-header-wrapper {
    width: 100%;
  }
  .uv-table-body-wrapper {
    width: 100%;
  }
  .uv-table-tr {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    .uv-table-th,
    .uv-table-td {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      padding: 10px 0;
      font-size: 14px;
      border-right: 1px solid #ebeef5;
      border-bottom: 1px solid #ebeef5;
      background-color: #ffffff;
      &:last-child {
        border-right: none;
      }
    }
    .uv-table-th {
      font-weight: 700;
      color: #7f7f7f;
    }
    .uv-table-td {
      color: #333333;
    }
  }
}
</style>
