<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('radio')
})

</script>

## 基本使用

通过 `v-model` 进行双向绑定,通过 `label` 指定显示内容，也可以通过默认插槽进行自定义

```html
<uv-radio v-model="test1" label="数据1"/>
```

## 自定义形状

通过 `shape` 设置，可选值为 `square` 、 `round`

 ```html
<uv-radio
  v-model="test2"
  label="test2"
  shape="square"
/>
 ```

## 禁用状态

通过 `disabled` 设置

 ```html
<uv-radio
  v-model="test2"
  disabled
  label="单选框"
/>
 ```

## 自定义选中背景色

通过 `checkedColor` 设置

 ```html
<uv-radio
  v-model="test2"
  checked-color="red"
>
  单选框
</uv-radio>
 ``` 

## 文本位置

通过 `labelPosition` 设置，可选值为 `left` 、 `right`，默认 `right`

 ```html
<uv-radio
  v-model="test2"
  label="单选框"
  shape="square"
  label-position="left"
/>
 ``` 

## 是否两边排布

通过 `spaceBetween` 开启

 ```html
<uv-radio
  v-model="test3"
  label="单选框"
  space-between
  label-position="left"
/>
 ```
## 单选组

通过 `uv-radio-group` 组件包裹,通过 `v-model` 绑定字符串类型数据

 ```html
<uv-radio-group v-model="checkStr">
  <uv-radio
    label="test1"
  />
  <uv-radio
    label="test2"
  />
  <uv-radio
    label="test3"
  />
  <uv-radio
    label="test4"
  />
  <uv-radio
    label="test41"
  />
  <uv-radio
    label="test42"
  />
  <uv-radio
    label="test43"
  />
</uv-radio-group>
 ``` 


## radio props

| 属性          |              含义              |  类型   |  默认值 |
| ------------- | :----------------------------: | :-----: | ------: |
| modelValue    |          双向绑定的值          | Boolean |   false |
| shape         | 选项形状，可选'round','square' | String  | 'round' |
| label         |             标签名             | String  |       - |
| disabled      |            是否禁用            | Boolean |   false |
| checkedColor  |           选择的颜色           | String  |       - |
| labelPosition | 标签名位置，可选'left','right' | String  | 'right' |
| spaceBetween  |          是否两边排布          | Boolean |   false |

## radio-group props

| 属性         |                 含义                 |       类型       |    默认值 |
| ------------ | :----------------------------------: | :--------------: | --------: |
| modelValue   |             双向绑定的值             |      Array       |        [] |
| max          |             最大选中个数             |      Number      |         - |
| direction    | 排布规则，可选'column'纵向,'row'横向 |      String      |     'row' |
| iconSize     |               图标大小               | [Number, String] |        18 |
| checkedColor |            选中的背景颜色            |      String      | '#1989fa' |
| shape        |    选项形状，可选'round','square'    |      String      |   'round' |

## radio events

| 事件名称 |    含义    |     参数 |
| -------- | :--------: | -------: |
| change   | 选项改变时 | 当前的值 |

## radio-group events

| 事件名称 |    含义    |         参数 |
| -------- | :--------: | -----------: |
| change   | 选项改变时 | 当前选择的值 |

## radio css变量

```css
    --uv-radio-icon-border: 1px solid #c8c9cc;
    --uv-radio-icon-active-border: 1px solid #1989fa;
    --uv-radio-icon-active-bg-color: #1989fa;
    --uv-radio-icon-disabled-border: 1px solid #c8c9cc;
    --uv-radio-icon-disabled-bg-color: #ebedf0;
    --uv-radio-text-margin: 8px;
    --uv-radio-text-size: 14px;
    --uv-radio-space-between-padding: 0 10px;
```

## radio-group css变量

```css
    --uv-radio-group-gap: 10px;
```