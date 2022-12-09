## 不同类型

设置`type`类型修改按钮状态,可选值有`primary` `success` `primary` `error` `info`  `warning`

```html
  <uv-button>默认按钮</uv-button>
  <uv-button type="primary">主要按钮</uv-button>
  <uv-button type="success">成功按钮</uv-button>
  <uv-button type="error">失败按钮</uv-button>
  <uv-button type="info"> 信息按钮</uv-button>
  <uv-button type="warning">警告按钮</uv-button>
```

## 禁用状态

 设置`disabled`为`true`将按钮该为禁用状态

 ```html
  <uv-button disabled>默认按钮</uv-button>
  <uv-button disabled type="primary">主要按钮</uv-button>
  <uv-button disabled type="success">成功按钮</uv-button>
  <uv-button disabled type="error">失败按钮</uv-button>
  <uv-button disabled type="info"> 信息按钮</uv-button>
  <uv-button disabled type="warning">警告按钮</uv-button>
```

## 加载状态

通过`loading`设置加载状态

 ```html
  <uv-button loading type="success">加载中</uv-button>
```

## 使用图标

通过`icon`选择图标,通过`icon-color`修改图标颜色,通过`icon-size`修改图标大小, 通过`icon-position`修改图标左右位置，可选值为`left` `right`

```html
  <uv-button
    icon="add"
    icon-color="#f56c6c"
    :icon-size="18"
    type="success"
  >
    添加
  </uv-button>
  <uv-button
    icon="add"
    icon-position="right"
    type="success"
  >
    添加
  </uv-button>
```

## 背景颜色和字体颜色

通过`bgColor`设置背景色，通过`color`修改文字颜色

```html
  <uv-button
    bg-color="#f79055"
    color="#fff"
  >
    自定义按钮
  </uv-button>
```

## 按钮类型

通过`square` 设置方形按钮，通过`round`设置圆形按钮

```html
  <uv-button
    square
    type="success"
  >
    方形按钮
  </uv-button>
  <uv-button
    round
    type="success"
  >
    圆角按钮
  </uv-button>
```

## 按钮尺寸

通过属性`size`设置,`normal`为默认,`small` 为小型,`mini`为迷你

```html
  <uv-button
    size="normal"
    type="success"
  >
    普通按钮
  </uv-button>
  <uv-button
    size="small"
    type="success"
  >
    小型按钮
  </uv-button>
  <uv-button
    size="mini"
    type="success"
  >
    迷你按钮
  </uv-button>
```

##  块级元素

通过`block`设置为块级按钮

```html
  <uv-button
    block
    type="success"
  >
    块级按钮
  </uv-button>
```

## props

| 属性         |     含义     |  类型   |   默认值 |
| ------------ | :----------: | :-----: | -------: |
| type         |   按钮类型   | String  |  default |
| bgColor      | 按钮背景颜色 | String  |        - |
| color        |   文字颜色   | String  |        - |
| disabled     |   是否禁用   | Boolean |    false |
| round        | 是否圆角按钮 | Boolean |    false |
| square       | 是否方型按钮 | Boolean |    false |
| size         |   按钮大小   | String  | 'normal' |
| block        |  是否为块级  | Boolean |    false |
| loading      |   加载状态   | Boolean |    false |
| icon         |   icon图标   | String  |        - |
| iconColor    |   图标颜色   | String  |        - |
| iconSize     |   图标大小   | Number  |       16 |
| iconPosition |   图标位置   | String  |   'left' |

## events

| 事件名称 |   含义   | 参数 |
| -------- | :------: | ---: |
| click    | 点击事件 |    - |

## css变量

```css
--uv-button-primary: #409eff;
--uv-button-success: #67c23a;
--uv-button-warning: #e6a23c;
--uv-button-error: #f56c6c;
--uv-button-info: #909399;
--uv-button-text: #303133;
--uv-button-border-radius: 4px;
--uv-button-font-size: 13px;
--uv-button-default-border: 1px solid #d9d9d9;
--uv-button-default-color: #333333;
--uv-button-default-hover-color: #0e80eb;
--uv-button-default-bg-color: #ffffff;
--uv-button-default-hover-bg-color: #ecf5ff;
--uv-button-loading-size: 15px;
--uv-button-size-mini-padding: 2px;
--uv-button-size-small-padding: 5px;
--uv-button-size-normal-padding: 10px;
```

<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('button')
  console.log('currentName',compStore.currentName)
})

</script>