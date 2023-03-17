import { ref as i, watch as f, computed as d, openBlock as m, createElementBlock as p, normalizeStyle as h, renderSlot as S } from "vue";
import { useChildren as g } from "../packages/hooks/useContext.js";
import "./checkbox-group.vue_vue_type_style_index_0_lang.js";
const y = {
  name: "UvCheckboxGroup"
}, x = /* @__PURE__ */ Object.assign(y, {
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number
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
  setup(c, { emit: u }) {
    const o = c, r = i(!1);
    f(() => o.modelValue, (t) => {
      r.value && (l.forEach((e) => {
        e.isSelect = !1;
      }), t.forEach((e) => {
        l.forEach((a) => {
          a.label === e && (a.isSelect = !0);
        });
      })), r.value = !0;
    });
    const s = (t) => {
      if (o.max && n.value === o.max && !l[t].isSelect)
        return;
      r.value = !1, l[t].isSelect = !l[t].isSelect;
      const e = [];
      l.forEach((a) => {
        a.isSelect && e.push(a.label);
      }), u("change", e), u("update:modelValue", e);
    }, n = d(() => o.modelValue.length), { fields: l } = g("checkbox-group", { props: o, updateItem: s });
    return (t, e) => (m(), p("div", {
      class: "uv-checkbox-group",
      style: h({ flexDirection: c.direction === "column" ? "column" : "row" })
    }, [
      S(t.$slots, "default")
    ], 4));
  }
});
export {
  x as default
};
