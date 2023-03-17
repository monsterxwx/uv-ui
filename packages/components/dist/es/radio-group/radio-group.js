import { watch as u, openBlock as d, createElementBlock as s, normalizeStyle as p, renderSlot as f } from "vue";
import { useChildren as m } from "../packages/hooks/useContext.js";
import "./radio-group.vue_vue_type_style_index_0_lang.js";
const g = {
  name: "UvRadioGroup"
}, V = /* @__PURE__ */ Object.assign(g, {
  props: {
    modelValue: {
      type: String
    },
    direction: {
      type: String,
      default: "row"
    },
    iconSize: {
      type: [Number, String],
      default: 18
    },
    checkedColor: {
      type: String,
      default: "#1989fa"
    },
    shape: {
      type: String,
      default: "round"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(r, { emit: a }) {
    const n = r;
    u(() => n.modelValue, (e) => {
      const t = l.findIndex((o) => o.label === e);
      l.forEach((o, i) => {
        i === t ? o.isSelect = !0 : o.isSelect = !1;
      });
    });
    const c = (e) => {
      const t = l[e].label;
      a("change", t), a("update:modelValue", t);
    }, { fields: l } = m("radio-group", { props: n, updateItem: c });
    return (e, t) => (d(), s("div", {
      class: "uv-radio-group",
      style: p({ flexDirection: r.direction === "column" ? "column" : "row" })
    }, [
      f(e.$slots, "default")
    ], 4));
  }
});
export {
  V as default
};
