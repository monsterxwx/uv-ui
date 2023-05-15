<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('tab-bar')
})

</script>

## 自定义颜色

通过 `activeColor` 设置

```html
<uv-tab-bar active-color="green" v-model="active1">
  <uv-tab-bar-item
    v-for="item in list"
    :key="item.name"
    :icon-size="item.iconSize"
    :icon-name="item.iconName"
    :text="item.name"
  />
</uv-tab-bar>
```

##  tab-bar-item插槽

通过插槽名为 `icon` 自定义图标,通过插槽名为 `text` 自定义文字效果

 ```html
<uv-tab-bar :fixed="false" active-color="green" v-model="active1">
  <uv-tab-bar-item v-for="item in 3" :key="item">
    <template #icon>
      icon
    </template>
    <template #text>
      text
    </template>
  </uv-tab-bar-item>
</uv-tab-bar>
 ```

 ## tab-bar props

| 属性          |         含义          |       类型       |    默认值 |
| ------------- | :-------------------: | :--------------: | --------: |
| modelValue    | 双向绑定当前子项index | [Number, String] |         - |
| zIndex        |         层级          | [Number, String] |       999 |
| bgColor       |       背景颜色        |      String      |    '#fff' |
| activeColor   |    活跃时文字颜色     |      String      |  #1989fa' |
| activeBgColor |    活跃时背景颜色     |      String      |         - |
| inactiveColor |   不活跃时文字颜色    |      String      | '#7d7e80' |
| border        |     是否显示边框      |     Boolean      |      true |
| borderColor   |       边框颜色        |      String      |    '#eee' |
| fixed         |   是否开启fixed定位   |     Boolean      |      true |
| placeholder   | 是否生成等高占位元素  |     Boolean      |     false |

## tab-bar events

| 事件名称 |    含义    | 参数 |
| -------- | :--------: | ---: |
| change   | 子项改变时 |    - |

## tab-bar css变量

```css
--uv-tab-bar-height: 50px;
```

 ## tab-bar-item props

| 属性      |   含义   |      类型       | 默认值 |
| --------- | :------: | :-------------: | -----: |
| iconSize  | 图标大小 | [String,Number] |      - |
| iconName  | 图标名称 |     String      |      - |
| iconProps | 图标配置 |     Object      |      - |
| text      | 文字名称 |     String      |      - |


## tab-bar css变量

```css
  --uv-tab-bar-item-font-size: 12px;
  --uv-tab-bar-item-text-margin-top: 5px;
```