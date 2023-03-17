import { ref as r, watch as d, provide as i, openBlock as u, createElementBlock as p, renderSlot as m } from "vue";
import "./collapse.vue_vue_type_style_index_0_lang.js";
const f = { class: "uv-collapse" }, v = {
  name: "UvCollapse"
}, k = /* @__PURE__ */ Object.assign(v, {
  props: {
    accordion: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: [Array, String, Number],
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const o = s, l = r([].concat(o.modelValue));
    d(() => o.modelValue, (e) => {
      l.value = [].concat(e);
    });
    const t = (e) => {
      l.value = [].concat(e);
      const a = o.accordion ? e : l.value;
      n("update:modelValue", a);
    };
    return i("collapse", {
      activeNames: l,
      handleItemClick: (e) => {
        const a = l.value.slice(0), c = a.indexOf(e);
        o.accordion ? c > -1 ? t("") : t(e) : (c > -1 ? a.splice(c, 1) : a.push(e), t(a));
      }
    }), (e, a) => (u(), p("div", f, [
      m(e.$slots, "default")
    ]));
  }
});
export {
  k as default
};
