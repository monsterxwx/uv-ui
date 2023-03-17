import { openBlock as t, createElementBlock as a, normalizeClass as d, renderSlot as l } from "vue";
import "./divider.vue_vue_type_style_index_0_lang.js";
const r = {
  name: "UvDivider"
}, u = /* @__PURE__ */ Object.assign(r, {
  props: {
    hairline: {
      type: Boolean,
      default: !1
    },
    dashed: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String
    }
  },
  setup(e) {
    return (i, n) => (t(), a("div", {
      class: d(["uv-divider", [e.hairline ? "uv-divider-hairline" : "", e.dashed ? "uv-divider-dashed" : "", e.position === "left" ? "uv-divider-left" : "", e.position === "right" ? "uv-divider-right" : ""]])
    }, [
      l(i.$slots, "default")
    ], 2));
  }
});
export {
  u as default
};
