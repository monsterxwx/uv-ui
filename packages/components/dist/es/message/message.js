import { openBlock as t, createElementBlock as s, createElementVNode as o, toDisplayString as a } from "vue";
import "./message.vue_vue_type_style_index_0_lang.js";
const n = {
  class: "uv-message",
  style: { top: "30px" }
}, c = { class: "uv-message-value" }, r = {
  name: "UvMessage"
}, _ = /* @__PURE__ */ Object.assign(r, {
  props: {
    content: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    }
  },
  setup(e) {
    return (l, i) => (t(), s("div", n, [
      o("div", c, a(e.content), 1)
    ]));
  }
});
export {
  _ as default
};
