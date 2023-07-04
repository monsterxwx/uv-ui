<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('slider-vertify')
})

</script>

## 基本使用

```html
<uvSliderVertify />
```

#

## props

| 属性            |                    含义                    |   类型   |                                默认值 |
| --------------- | :----------------------------------------: | :------: | ------------------------------------: |
| width           |                 canvas宽度                 |  Number  |                                   320 |
| height          |                 canvas高度                 |  Number  |                                   160 |
| visible         |                  是否可见                  | Boolean  |                                  true |
| refreshIcon     |                刷新icon地址                |  String  | 'http://cdn.dooring.cn/dr/icon12.png' |
| l               |                  滑块边长                  |  Number  |                                    42 |
| r               |                  滑块半径                  |  Number  |                                     9 |
| imgUrl          |                  图片地址                  |  String  |                                    '' |
| text            |                    文字                    |  String  |                                    '' |
| onDraw          | 拖拽滑块时的回调, 参数为当前滑块拖拽的距离 | Function |                             (l) => {} |
| onCustomVertify |            用户的自定义验证逻辑            | Function |          (VertifyType) => VertifyType |
| onBeforeRefresh |              重制刷新前的回调              | Function |                              () => {} |
| onSuccess       |                验证成功回调                | Function |                              () => {} |
| onFail          |                验证失败回调                | Function |                              () => {} |
| onRefresh       |                 刷新时回调                 | Function |                              () => {} |


## css变量

```css

```
