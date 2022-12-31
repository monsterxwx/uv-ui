<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('search')
})

</script>

## 基本使用

```html
<uv-search placeholder="请输入内容" />
```

## 修改背景色

通过 `bgColor` 设置

```html
<uv-search bg-color="#4fc08d" />
```

## 修改搜索框的背景色

通过 `searchBgColor` 设置

```html
<uv-search bg-color="#f6f7f9" search-bg-color="#fff" />
```

## 搜索框圆角

通过 `round` 设置

```html
<uv-search round />
```

## 是否禁用

通过 `disabled` 设置

```html
<uv-search disabled />
```

## 搜索框内容对齐

通过 `inputAlign` 设置,默认为 `left`,可选 `center` `right`

```html
<uv-search input-align="center" />
```

## 显示可清除图标

通过 `clearable` 设置

```html
<uv-search v-model="value" clearable />
```

## props

| 属性          |                    含义                     |  类型   |    默认值 |
| ------------- | :-----------------------------------------: | :-----: | --------: |
| modelValue    |               双向绑定的内容                | String  |         - |
| placeholder   |                   默认值                    | String  |  '请输入' |
| clearable     |                 是否可清除                  | Boolean |     false |
| round         |                  是否圆角                   | Boolean |     false |
| disabled      |                  是否禁用                   | Boolean |     false |
| inputAlign    | 输入框文字位置，可选'left' 'center' 'right' | String  |    'left' |
| bgColor       |                  背景颜色                   | String  |    '#fff' |
| searchBgColor |              搜索框的背景颜色               | String  | '#f7f8fa' |

## events

| 事件名称 |      含义      |         参数 |
| -------- | :------------: | -----------: |
| clear    | 清除内容时触发 |            - |
| focus    |     聚焦时     |            - |
| blur     |   失去焦点时   | 当前绑定的值 |

## css 变量

```css
--uv-search-padding: 10px;
--uv-search-content-padding: 2px 10px;
--uv-search-content-border-radius: 4px;
--uv-search-input-placeholder-color: #d3c9d6;
--uv-search-input-padding: 8px;
--uv-search-input-font-size: 14px;
--uv-search-input-border-radius: 4px;
--uv-search-input-disabled-color: #d3c9d6;
--uv-search-content-round-border-radius: 40px;
```
