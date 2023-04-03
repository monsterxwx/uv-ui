### 使用

#### 1.全量使用 `main.js`中导入

```
import uvUI from 'uv-ui'
import 'uv-ui/dist/es/style.css'

app.use(uvUI)
```

#### 2.按需引入 在`main.js`中导入样式文件

```
import 'uv-ui/dist/es/style.css'
```

需要用到组件的地方引入对应组件即可

```vue
<template>
  <div>
    <uvButton type="primary">切换</uvButton>
  </div>
</template>

<script setup>
import { uvButton } from "uv-ui";
</script>
```
