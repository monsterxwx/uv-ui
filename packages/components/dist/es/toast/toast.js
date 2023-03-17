import { openBlock as t, createElementBlock as o, createElementVNode as a, normalizeStyle as r, createVNode as s, unref as c, createCommentVNode as l, toDisplayString as i } from "vue";
import n from "../icon/index.js";
import "./toast.vue_vue_type_style_index_0_lang.js";
const u = { class: "uv-toast" }, d = {
  key: 0,
  class: "uv-toast-value-icon"
}, m = {
  key: 1,
  class: "loading-icon"
}, y = { class: "uv-toast-message" }, f = {
  name: "Toast"
}, h = /* @__PURE__ */ Object.assign(f, {
  props: {
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 1600
    },
    bgColor: {
      type: String,
      default: "#4a4a4b"
    },
    color: {
      type: String,
      default: "#fff"
    },
    type: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (g, v) => (t(), o("div", u, [
      a("div", {
        class: "uv-toast-value",
        style: r({ backgroundColor: e.bgColor, color: e.color })
      }, [
        e.type === "success" || e.type === "error" ? (t(), o("div", d, [
          s(c(n), {
            name: e.type,
            size: "36",
            color: e.type === "success" ? "#07c160" : "#f56c6c"
          }, null, 8, ["name", "color"])
        ])) : l("", !0),
        e.type === "loading" ? (t(), o("div", m, [
          s(c(n), {
            name: "loading",
            size: "30",
            color: "#e6e6e6"
          })
        ])) : l("", !0),
        a("div", y, i(e.message), 1)
      ], 4)
    ]));
  }
});
export {
  h as default
};
