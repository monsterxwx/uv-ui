import { openBlock as a, createElementBlock as t, normalizeClass as o, normalizeStyle as r, renderSlot as s } from "vue";
import "./cell-group.vue_vue_type_style_index_0_lang.js";
const c = {
  name: "UvCellGroup"
}, d = /* @__PURE__ */ Object.assign(c, {
  props: {
    card: {
      type: Boolean,
      default: !1
    },
    gap: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (l, n) => (a(), t("div", {
      class: o(["uv-cell-group", e.card ? "uv-cell-group-card" : ""]),
      style: r({ width: e.gap ? "95%" : "100%" })
    }, [
      s(l.$slots, "default")
    ], 6));
  }
});
export {
  d as default
};
