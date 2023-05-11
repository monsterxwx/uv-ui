<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('water-mark')
})

</script>

## 文字水印

通过 `content` 属性来设置水印的文字。

```html
<uvWaterMark content="uv-ui" />
```

## 图片水印

通过 `image` 属性来设置水印图片，并使用 `opacity` 来调整水印的整体透明度。

```html
<uvWaterMark image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png" />
```

## 自定义间隔

通过 `gap-x` 和 `gap-y` 属性来控制多个重复水印之间的间隔。

```html
<uvWaterMark image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png" :gap-x="30" :gap-y="10" />
```

## 自定义倾斜角度

通过 `rotate` 属性来控制水印的倾斜角度，默认值为`-22`。

```html
<uvWaterMark image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png" :rotate="22" />
```

## 是否全屏显示

通过 `full`开启
```html
<uvWaterMark image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png" full />
```


## 插槽
通过默认插槽可以替换文字内容


 ## props

| 属性      |                           含义                            |  类型   |    默认值 |
| --------- | :-------------------------------------------------------: | :-----: | --------: |
| width     |                         水印宽度                          | Number  |       100 |
| height    |                         水印高度                          | Number  |       100 |
| content   |                      文字水印的内容                       | String  |         - |
| textColor |                      文字水印的颜色                       | String  | '#dcdee0' |
| rotate    |                         倾斜角度                          | Number  |       -22 |
| image     | 图片水印的内容，如果与 content 同时传入，优先使用图片水印 | String  |         - |
| full      |                       是否全屏显示                        | Boolean |     false |
| opacity   |                          透明度                           | Number  |       0.3 |
| gapX      |                    水印之间的水平间隔                     | Number  |         0 |
| gapY      |                    水印之间的垂直间隔                     | Number  |         0 |




## css变量

```css
    --uv-water-mark-z-index: 100;
```