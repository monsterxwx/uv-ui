<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('grid')
})

</script>

## 点击反馈

通过 `clickable` 设置

```html
<uv-grid clickable>
  <uv-grid-item
    v-for="item in 8"
    :key="item"
    :text="'文字'+item"
    icon-name="modular"
  />
</uv-grid>
```

##  自定义列数

通过 `columnNum` 设置

 ```html
<uv-grid column-num="3">
  <uv-grid-item
    v-for="item in 9"
    :key="item"
    :text="'文字'+item"
    icon-name="modular"
  />
</uv-grid>
 ```

## 格子间距

通过 `gutter` 设置

 ```html
<uv-grid gutter="10">
  <uv-grid-item
    v-for="item in 8"
    :key="item"
    :text="'文字'+item"
    icon-name="modular"
  />
</uv-grid>
 ```

## 内容横排

通过 `direction` 设置，默认为 `column`，可设置为 `row` ,通过传入 `reverse` 可以将文字和图标反转

 ```html
<uv-grid direction="row" reverse>
  <uv-grid-item
    v-for="item in 8"
    :key="item"
    :text="'文字'+item"
    icon-name="modular"
    @click="handleClick(item)"
  />
</uv-grid>
 ```

## grid props

| 属性      |       含义       |      类型       |   默认值 |
| --------- | :--------------: | :-------------: | -------: |
| clickable | 是否开启点击反馈 |     Boolean     |    false |
| border    |   时刻开启边框   |     Boolean     |     true |
| gutter    |     子项间隔     | [String,Number] |        0 |
| columnNum |     每行个数     | [String,Number] |        4 |
| direction |     排布方式     |     String      | 'column' |
| reverse   |     是否反转     |     Boolean     |    false |
| bgColor   |     背景颜色     |     String      |   '#fff' |
| color     |     文字颜色     |     String      |        - |



## grid-items props

| 属性      |   含义   |      类型       | 默认值 |
| --------- | :------: | :-------------: | -----: |
| iconSize  | 图标大小 | [String,Number] |     28 |
| iconName  | 图标名称 |     String      |      - |
| iconColor | 图标颜色 |     String      |      - |
| iconProps | 图标配置 |     Object      |      - |
| text      | 文字名称 |     String      |      - |

## grid-item events

| 事件名称 |   含义   | 参数 |
| -------- | :------: | ---: |
| click    | 子项点击 |    - |

## grid-item css变量

```css
  --uv-grid-item-content-padding: 16px 8px;
  --uv-grid-item-content-active-bg-color: #f2f3f5;
  --uv-grid-item-content-text-white-space: nowrap;
  --uv-grid-item-content-text-font-size: 12px;
  --uv-grid-item-content-text-color: #323233;
  --uv-grid-item-content-text-margin: 8px;
  --uv-grid-item-border: 1px solid #f7f8f9;
```