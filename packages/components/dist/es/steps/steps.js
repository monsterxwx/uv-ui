import { watch as r, openBlock as n, createElementBlock as u, createElementVNode as p, renderSlot as d } from "vue";
import { useChildren as f } from "../packages/hooks/useContext.js";
import "./steps.vue_vue_type_style_index_0_lang.js";
const m = { class: "uv-steps" }, v = { class: "uv-steps-content" }, _ = {
  name: "UvSteps"
}, C = /* @__PURE__ */ Object.assign(_, {
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    isAbleClick: {
      type: Boolean,
      default: !0
    },
    activeColor: {
      type: String,
      default: "#0078d4"
    },
    inactiveColor: {
      type: String,
      default: "#999999"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(c, { emit: l }) {
    const s = c;
    r(() => s.modelValue, (e) => {
      o(e), l("change", e);
    });
    const o = (e) => {
      s.isAbleClick && l("update:modelValue", e), i.forEach((t, a) => {
        a <= e ? t.isActive = !0 : t.isActive = !1, a < e ? t.lineActive = !0 : t.lineActive = !1;
      });
    }, { fields: i } = f("steps", { props: s, acitveItemUpdate: o });
    return (e, t) => (n(), u("div", m, [
      p("div", v, [
        d(e.$slots, "default")
      ])
    ]));
  }
});
export {
  C as default
};
