## icon 图标

### 图标列表（点击复制）


<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('icon')
  console.log('currentName',compStore.currentName)
})

</script>