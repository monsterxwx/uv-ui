import { openBlock as a, createBlock as o, Transition as r, withCtx as l, withDirectives as n, createElementVNode as s, normalizeStyle as d, renderSlot as c, vShow as i } from "vue";
import "./overlay.vue_vue_type_style_index_0_lang.js";
const u = {
  name: "UvOverlay"
}, m = /* @__PURE__ */ Object.assign(u, {
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    zIndex: {
      type: String,
      default: "1"
    },
    overlay: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (t, f) => (a(), o(r, { name: "overlay" }, {
      default: l(() => [
        n(s("div", {
          class: "uv-overlay",
          style: d({ zIndex: e.zIndex, background: e.overlay ? "rgba(0,0,0,.7)" : "transparent" })
        }, [
          c(t.$slots, "default")
        ], 4), [
          [i, e.show]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  m as default
};
