<template>
  <div class="uv-empty">
    <slot name="image">
      <div class="uv-empty-image" :style="{width:imageSize+'px',height:imageSize+'px'}">
        <svg v-if="image==='default'" viewBox="0 0 160 160">
          <defs>
            <linearGradient
              x1="50%"
              x2="50%"
              y2="100%"
              :id="getId(5)"
            >
              <stop stop-color="#F2F3F5" offset="0" />
              <stop stop-color="#DCDEE0" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="95%"
              y1="48%"
              x2="5.5%"
              y2="51%"
              :id="getId(6)"
            >
              <stop stop-color="#EAEDF1" offset="0" />
              <stop stop-color="#DCDEE0" offset="100%" />
            </linearGradient>
            <linearGradient
              y1="45%"
              x2="100%"
              y2="54%"
              :id="getId(7)"
            >
              <stop stop-color="#EAEDF1" offset="0" />
              <stop stop-color="#DCDEE0" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(36 50)" fill="none">
            <g transform="translate(8)">
              <rect
                fill="#EBEDF0"
                opacity=".6"
                x="38"
                y="13"
                width="36"
                height="53"
                rx="2"
              />
              <rect
                :fill="getUrlById(5)"
                width="64"
                height="66"
                rx="2"
              />
              <rect
                fill="#FFF"
                x="6"
                y="6"
                width="52"
                height="55"
                rx="1"
              />
              <g transform="translate(15 17)" :fill="getUrlById(6)">
                <rect width="34" height="6" rx="1" />
                <path d="M0 14h34v6H0z" />
                <rect
                  y="28"
                  width="34"
                  height="6"
                  rx="1"
                />
              </g>
            </g>
            <rect
              :fill="getUrlById(7)"
              y="61"
              width="88"
              height="28"
              rx="1"
            />
            <rect
              fill="#F7F8FA"
              x="29"
              y="72"
              width="30"
              height="6"
              rx="1"
            />
          </g>
        </svg>
        <img v-else :src="image" alt="">
      </div>
    </slot>
    <slot>
      <div class="uv-empty-label">
        {{ label }}
      </div>
    </slot>
  </div>
</template>

<script setup>
import { useId } from '../../hooks'
defineProps({
  image: {
    type: String,
    default: 'default'
  },
  imageSize: {
    type: [String, Number],
    default: '160'
  },
  label: {
    type: String,
    default: ''
  }
})

const baseId = useId()
const getId = (num) => `${baseId}-${num}`
const getUrlById = (num) => `url(#${getId(num)})`

</script>
<script>
export default {
  name: 'UvEmpty'
}
</script>

<style lang="scss">
:root {
  --uv-empty-label-margin-top: 16px;
  --uv-empty-label-font-size: 14px;
  --uv-empty-label-color: #969799;
}
.uv-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .uv-empty-image {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .uv-empty-label {
    margin-top: var(--uv-empty-label-margin-top);
    font-size: var(--uv-empty-label-font-size);
    color: var(--uv-empty-label-color);
  }
}

</style>
