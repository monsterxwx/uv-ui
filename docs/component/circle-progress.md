<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('circle-progress')
})

</script>

## 基本使用

通过 `current-rate` 传入当前的值 , 通过 `text` 显示中间的内容

```html
<uvCircleProgress text="30%" :current-rate="30" />
```

## 修改颜色

通过 `color` 修改轨道颜色

```html
<uvCircleProgress color="#07c160" :current-rate="30" />
```

## 修改轨道颜色

通过 `layer-color` 修改轨道颜色

```html
<uvCircleProgress color="#07c160" layer-color="#3fecff" :current-rate="30" />
```

## 渐变色

通过传入对象形式显示渐变色

```vue
<uvCircleProgress :current-rate="30" :color="gradientColor" />

<script setup>
const gradientColor = {
  '0%': '#3fecff',
  '100%': '#6149f6'
}
</script>
```

## 逆时针

通过 `clockwise` 设置为 `false`

```html
<uvCircleProgress :clockwise="false" :current-rate="30" />
```

## 修改宽度

通过 `stroke-width` 设置

```html
<uvCircleProgress :stroke-width="60" :current-rate="30" />
```

## 修改大小

通过 `size` 设置

```html
<uvCircleProgress text="120px" size="120" :current-rate="30" />
```

## 起始位置

通过 `start-position` 设置 ，可选 `left` `right` `bottom`

```html
<uvCircleProgress text="左边" start-position="left" :current-rate="70" />
<uvCircleProgress text="右边" start-position="right" :current-rate="70" />
<uvCircleProgress text="底部" start-position="bottom" :current-rate="70" />
```

## 进度条端点形状

通过 `stroke-linecap` 设置 , 可选 `butt` `square` `round`

```html
<uvCircleProgress text="默认" stroke-linecap="butt" :current-rate="70" />
<uvCircleProgress text="正方形" stroke-linecap="square" :current-rate="70" />
<uvCircleProgress text="圆型" stroke-linecap="round" :current-rate="70" />
```


## 自定义内容

通过默认插槽修改中心内容

```html
<div class="rate-num">
  {{ minute }}:{{ second }}
</div>
<div class="diy-bg" @click="startD">
  <uvCircleProgress
    v-model:current-rate="currentRate"
    :rate="rate"
    :speed="80"
    layer-color="none"
    color="#1ba082"
  >
    <div class="diy-content">
      <uvIcon name="notice" size="32" color="#fff" />
      <div>录音中</div>
    </div>
  </uvCircleProgress>
</div>
```

## props

| 属性                 |                    含义                    |       类型       |    默认值 |
| -------------------- | :----------------------------------------: | :--------------: | --------: |
| v-model:current-rate |                  当前进度                  |      Number      |         - |
| rate                 |                  目标进度                  | [Number, String] |       100 |
| size                 |          圆环直径，默认单位为 px           | [Number, String] |         - |
| color                |   进度条颜色，传入对象格式可以定义渐变色   | [Object, String] | '#1989fa' |
| stroke-width         |                 进度条宽度                 | [Number, String] |        40 |
| stroke-linecap       |   进度条端点的形状，可选值为 square butt   |      String      |   'round' |
| layer-color          |                  轨道颜色                  |      String      |         - |
| fill                 |                  填充颜色                  |      String      |    'none' |
| speed                |         动画速度（单位为 rate/s）          | [Number, String] |         0 |
| text                 |                    文字                    |      String      |         - |
| clockwise            |               是否顺时针增加               |     Boolean      |      true |
| start-position       | 进度起始位置，可选值为 left、right、bottom |      String      |     'top' |

## slots

| 名称    |    含义    | 参数 |
| ------- | :--------: | ---: |
| default | 自定义文字 |    - |

## css变量

```css
  --uv-circle-progress-size: 100px;
  --uv-circle-progress-layer-color: #ffffff;
  --uv-circle-progress-hover-color: #1989fa;
  --uv-circle-progress-svg-z-index: 1;
  --uv-circle-progress-text-font-size: 14px;
  --uv-circle-progress-text-font-weight: 700;
  --uv-circle-progress-text-color: #323233;
```
