<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('collapse')
})

</script>

## 基本使用


```html
<uv-collapse v-model="test">
  <uv-collapse-item
    v-for="item in 3"
    :title="'标题'+item"
    :name="item+''"
    :key="item"
  >
    内容
  </uv-collapse-item>
</uv-collapse>
```

##  手风琴模式

通过 `accordion` 开启

 ```html
<uv-collapse accordion v-model="test">
  <uv-collapse-item
    v-for="item in 3"
    :title="'标题'+item"
    :name="item+''"
    :key="item"
  >
    内容
  </uv-collapse-item>
</uv-collapse>
 ```

 ## 禁用状态

 通过对子组件 `disabled` 属性开启

 ```html
<uv-collapse v-model="test2">
  <uv-collapse-item title="标题1" name="1">
    内容
  </uv-collapse-item>
  <uv-collapse-item title="标题2" name="2">
    内容
  </uv-collapse-item>
  <uv-collapse-item title="标题3" name="3" disabled>
    内容
  </uv-collapse-item>
</uv-collapse>
 ```

 ## 插槽

 插槽名称 `title` 可以自定义标题 插槽名称 `right` 可以自定义标题右边内容 默认插槽自定义内容

 ```html
<uv-collapse v-model="test3">
  <uv-collapse-item name="1">
    <template #title>
      自定义title
    </template>
    <template #right>
      自定义right
    </template>
    我是内容
  </uv-collapse-item>
  <uv-collapse-item name="2">
    <template #title>
      自定义title
    </template>
    <template #right>
      自定义right
    </template>
    我是内容
  </uv-collapse-item>
</uv-collapse>
 ```


 ## props

| 属性       |          含义          |          类型           | 默认值 |
| ---------- | :--------------------: | :---------------------: | -----: |
| accordion  |     是否手风琴模式     |         Boolean         |  false |
| modelValue | 双向绑定的当前展开的值 | [Array, String, Number] |      - |


## collapse item css变量

```css
  --uv-collapse-item-border-bottom: 1px solid #f5f6f7;
  --uv-collapse-item-font-size: 14px;
  --uv-collapse-item-title-padding: 10px 0;
  --uv-collapse-item-content-padding: 12px 0;
  --uv-collapse-item-bottom-line-border-bottom: 1px solid #f5f6f7;
  --uv-collapse-item-transition-time: 0.3s;
```