import { openBlock as r, createElementBlock as l, normalizeStyle as o, renderSlot as a } from "vue";
import { useChildren as n } from "../packages/hooks/useContext.js";
import "./grid.vue_vue_type_style_index_0_lang.js";
const u = {
  name: "UvGrid"
}, c = /* @__PURE__ */ Object.assign(u, {
  props: {
    clickable: {
      type: Boolean,
      default: !1
    },
    border: {
      type: Boolean,
      default: !0
    },
    gutter: {
      type: [String, Number],
      default: 0
    },
    columnNum: {
      type: [String, Number],
      default: 4
    },
    direction: {
      type: String,
      default: "column"
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    color: {
      type: String
    }
  },
  setup(e) {
    return n("grid", { props: e }), (t, f) => (r(), l("div", {
      class: "uv-grid",
      style: o({ paddingLeft: e.gutter + "px" }),
      ref: "uvGridRef"
    }, [
      a(t.$slots, "default")
    ], 4));
  }
});
export {
  c as default
};
