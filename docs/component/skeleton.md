<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('skeleton')
})

</script>

## 基本使用

通过 `row` 设置需要显示的行数

```html
<uvSkeleton :row="3" />
```


## 显示标题

通过 `title` 显示标题

```html
<uvSkeleton title :row="3" />
```

## 圆角

通过 `round` 显示圆角

```html
<uvSkeleton title round :row="3" />
```

## 显示头像

通过 `avatar` 显示头像

```html
<uvSkeleton avatar title :row="3" />
```

## 正方形头像

通过 `avatar-shape` 设置为 `square`

```html
<uvSkeleton
  avatar
  title
  avatar-shape="square"
  :row="3"
/>
```

## 内容设置不同宽度

通过 `row-width` 传入数组设置对应行的宽度大小

```html
<uvSkeleton title :row="4" :row-width="['100%','90%','70%','80%']" />
```

## 显示子组件

通过 `loading` 控制，`true`时为骨架屏加载，`false` 为需要显示的内容

```html
<uvSkeleton
  :loading="!isLoading"
  avatar
  title
  :row="3"
>
  <div style="display: flex;">
    <div style="margin-right: 10px;">
      <uv-icon
        size="30"
        name="help"
      />
    </div>
    <div style="flex: 1 0;">
      <div style="margin-bottom: 12px;font-size: 18px;font-weight: 700;">
        关于 uv-ui
      </div>
      <div style="line-height: 1.5;">
        uv-ui 是一套轻量、可定制的移动端 Vue 组件库，提供了丰富的组件，帮助开发者快速搭建移动应用。
      </div>
    </div>
  </div>
</uvSkeleton>
```

## 自定义展示内容

`skeleton`组件中有以下几个子组件可供使用，分别为 `skeleton-image` 图片 `skeleton-paragraph` 文本字段 `skeleton-title` 文本头`skeleton-avatar` 头像

```html
<uvSkeleton>
  <template #template>
    <div :style="{ display: 'flex', width: '100%' }">
      <uv-skeleton-image />
      <div :style="{ flex: 1, marginLeft: '16px' }">
        <uv-skeleton-paragraph row-width="60%" />
        <uv-skeleton-paragraph />
        <uv-skeleton-paragraph />
        <uv-skeleton-paragraph />
      </div>
    </div>
  </template>
</uvSkeleton>
```

`skeleton-image` 

`props`:  `iconSize` icon大小 、 `iconColor` icon颜色

skeleton-image css变量：

```css
  --uv-skeleton-image-size: 96px;
  --uv-skeleton-image-bg-color: #f2f3f5;
```

`skeleton-avatar` 

`props`:  `avatarShape` 头像形状，可设置为`round`、`square`

skeleton-avatar css变量：

```css
  --uv-skeleton-avatar-size: 32px;
  --uv-skeleton-avatar-bg-color: #f2f3f5;
  --uv-skeleton-avatar-margin-right: 12px;
```

`skeleton-title` 

`props`:  `titleWidth` 标题宽度，默认40%、 `round` 是否为圆形

skeleton-title css变量：

```css
  --uv-skeleton-title-height: 16px;
  --uv-skeleton-title-bg-color: #f2f3f5;
  --uv-skeleton-title-margin-bottom: 12px;
```

`skeleton-paragraph` 

`props`:  `rowWidth` 字段宽度，默认100%，最后一个默认为60%、 `round` 是否为圆形

skeleton-paragraph css变量：

```css
  --uv-skeleton-paragraph-height: 16px;
  --uv-skeleton-paragraph-bg-color: #f2f3f5;
  --uv-skeleton-paragraph-margin-top: 12px;
```

 ## props

| 属性         |                    含义                     |          类型           | 默认值 |
| ------------ | :-----------------------------------------: | :---------------------: | -----: |
| row          |               段落占位图行数                |         Number          |      0 |
| row-width    | 段落占位图宽度，可传数组来设置每一行的宽度  | [Number, String, Array] |   100% |
| title        |             是否显示标题占位图              |         Boolean         |  false |
| avatar       |             是否显示头像占位图              |         Boolean         |  false |
| loading      | 是否显示骨架屏，传 false 时会展示子组件内容 |         Boolean         |   true |
| animate      |                是否开启动画                 |         Boolean         |   true |
| round        |       是否将标题和段落显示为圆角风格        |         Boolean         |  false |
| title-width  |               标题占位图宽度                |         String          |    40% |
| avatar-shape |       头像占位图形状，可选值为 square       |         String          |  round |

## 插槽

| 插槽名称 |    说明    |
| -------- | :--------: |
| default  | 骨架屏内容 |
| template | 自定义内容 |

## css变量

```css
  --uv-skeleton-duration: 1.2s;
  --uv-skeleton-border-radius: 999px;
  --uv-skeleton-blink-opacity: 0.6;
```