<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('swipe-cell')
})

</script>

## 基本使用

```html
<uv-swipe-cell @cancle="cancleHandle" />
```

##  左右操作按钮

通过 `left` 开启左侧选项，通过 `right` 开启右侧选项，右侧默认开启

 ```html
<uv-swipe-cell left />
 ```

## 自定义插槽

左右插槽通过插槽名 `left` 和 `right` 设置, 内容插槽为默认

 ```html
<uv-swipe-cell>
  <template #right>
    <div class="deleteBtn">
      删除
    </div>
  </template>
</uv-swipe-cell>

<uv-swipe-cell>
  <div class="content">
    <div class="iamge">
      <uv-icon
        size="40"
        name="electronics"
      />
    </div>
    <div class="desc">
      <div>
        <div>商品标题</div>
        <div class="desc-tips">
          描述信息
        </div>
      </div>
      <div class="price">
        ￥20.99
      </div>
    </div>
  </div>
</uv-swipe-cell>
 ```

 ## props

| 属性          |         含义         |  类型   |    默认值 |
| ------------- | :------------------: | :-----: | --------: |
| left          |    开启左边操作栏    | Boolean |     false |
| right         |    开启右边操作栏    | Boolean |      true |
| selectText    |    左侧操作栏名字    | String  |    '选择' |
| selectBgColor |  左侧操作栏背景颜色  | String  | '#1989fa' |
| cancleText    |  右侧取消按钮的名字  | String  |    '删除' |
| cancleBgColor | 右侧取消按钮背景颜色 | String  | '#ee0a24' |
| confimText    |  右侧确定按钮的名字  | String  |    '确定' |
| confimBgColor | 右侧确定按钮背景颜色 | String  | '#1989fa' |
| title         |         标题         | String  |    '标题' |
| content       |         内容         | String  |    '内容' |

## events

| 事件名称 |        含义        | 参数 |
| -------- | :----------------: | ---: |
| cancle   | 右侧取消按钮点击时 |    - |
| confim   | 右侧确定按钮点击时 |    - |
| select   |   左侧按钮点击时   |    - |

## css变量

```css
    --uv-swipe-cell-content-bg-color: #ffffff;
    --uv-swipe-cell-left-right-content-common-color: #ffffff;
    --uv-swipe-cell-left-right-content-common-width: 60px;
    --uv-swipe-cell-left-right-content-common-font-size: 14px;
```