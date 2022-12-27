<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('steps')
})

</script>

## 基本使用

通过 `v-model` 绑定活跃的 `index`

```html
<uv-steps v-model="active" @change="changeAc">
    <uv-steps-item>检查单信息</uv-steps-item>
    <uv-steps-item>整改信息</uv-steps-item>
    <uv-steps-item>复查信息</uv-steps-item>
    <uv-steps-item>处罚决定</uv-steps-item>
</uv-steps>
```

##  配置项

禁止点击，通过修改活跃值改变状态,将 `isAbleClick`  设置为false

修改活跃时颜色，通过 `activeColor` 设置。修改不活跃时颜色，通过 `inactiveColor` 设置


 ```html
<uv-steps
  :is-able-click="false"
  v-model="active1"
>
  <uv-steps-item>检查单信息</uv-steps-item>
  <uv-steps-item>整改信息</uv-steps-item>
  <uv-steps-item>复查信息</uv-steps-item>
  <uv-steps-item>处罚决定</uv-steps-item>
</uv-steps>
 ```

 ## 自定义图标

 通过插槽 `icon` 设置

 ```html
<uv-steps v-model="active2">
  <uv-steps-item title="检查单信息">
    <template #icon>
      <uv-icon
        size="16"
        :color="active2>=0?'#0078d4':'#666'"
        name="arrow-right"
      />
    </template>
  </uv-steps-item>
  <uv-steps-item title="整改信息">
    <template #icon>
      <uv-icon
        size="16"
        name="success"
        :color="active2>=1?'#0078d4':'#666'"
      />
    </template>
  </uv-steps-item>
  <uv-steps-item title="复查信息">
    <template #icon>
      <uv-icon
        size="16"
        name="love-fill"
        :color="active2>=2?'#0078d4':'#666'"
      />
    </template>
  </uv-steps-item>
  <uv-steps-item title="处罚决定">
    <template #icon>
      <uv-icon
        size="16"
        name="star-fill"
        :color="active2>=3?'#0078d4':'#666'"
      />
    </template>
  </uv-steps-item>
</uv-steps>
 ```


 ## steps props

| 属性          |      含义       |  类型   |    默认值 |
| ------------- | :-------------: | :-----: | --------: |
| modelValue    | 当前活跃的index | Number  |         0 |
| isAbleClick   |   是否可点击    | Boolean |      true |
| activeColor   |   活跃时颜色    | String  | '#0078d4' |
| inactiveColor |  不活跃时颜色   | String  | '#999999' |



 ## steps-item props

| 属性  |   含义   |  类型  | 默认值 |
| ----- | :------: | :----: | -----: |
| title | 子项名称 | String |      - |

## steps events

| 事件名称 |      含义       |        参数 |
| -------- | :-------------: | ----------: |
| change   | 活跃index改变时 | 当前的index |

## steps css变量

```css
  --uv-steps-padding: 10px;
  --uv-steps-bg-color: #ffffff;
```

## steps-items css变量

```css
  --uv-steps-item-font-size: 12px;
  --uv-steps-item-transition-time: 0.3s;
  --uv-steps-item-icon-default-size: 9px;
  --uv-steps-item-icon-default-border-size: 2px;
  --uv-steps-item-text-padding-top: 20px;
  --uv-steps-item-line-bg-color: #ebedf0;
  --uv-steps-item-line-height: 1px;
```