import { openBlock as u, createElementBlock as f, normalizeClass as i, normalizeStyle as c, renderSlot as s } from "vue";
import { useChildren as b } from "../packages/hooks/useContext.js";
import "./tab-bar.vue_vue_type_style_index_0_lang.js";
const m = {
  name: "UvTabBar"
}, C = /* @__PURE__ */ Object.assign(m, {
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    zIndex: {
      type: [Number, String],
      default: 999
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    activeColor: {
      type: String,
      default: "#1989fa"
    },
    activeBgColor: {
      type: String
    },
    inactiveColor: {
      type: String,
      default: "#7d7e80"
    },
    border: {
      type: Boolean,
      default: !0
    },
    borderColor: {
      type: String,
      default: "#eee"
    },
    fixed: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const r = e, l = (t) => {
      a("update:modelValue", t), a("change", t), d.forEach((o, n) => {
        n !== t && (o.isActive = !1);
      });
    }, { fields: d } = b("tab-bar", { props: r, acitveItemUpdate: l });
    return (t, o) => (u(), f("div", {
      class: i(["uv-tab-bar", e.fixed ? "uv-tab-bar-fixed" : ""]),
      style: c({
        zIndex: e.zIndex,
        backgroundColor: e.bgColor,
        borderTop: e.border ? `1px solid ${e.borderColor}` : ""
      })
    }, [
      s(t.$slots, "default")
    ], 6));
  }
});
export {
  C as default
};
