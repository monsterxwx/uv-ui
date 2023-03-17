import { computed as r, openBlock as d, createElementBlock as m, normalizeClass as a, normalizeStyle as v, unref as f, createElementVNode as p } from "vue";
import "./switch.vue_vue_type_style_index_0_lang.js";
const h = {
  name: "UvSwitch"
}, V = /* @__PURE__ */ Object.assign(h, {
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    size: {
      type: [String, Number]
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const t = e;
    function c() {
      t.disabled || i("update:modelValue", !t.modelValue);
    }
    const n = r(() => {
      const { size: l, activeColor: o, inactiveColor: s, modelValue: u } = t;
      return {
        fontSize: l + "px",
        backgroundColor: u ? o : s
      };
    });
    return (l, o) => (d(), m("div", {
      class: a(["uv-switch", [e.modelValue ? "uv-switch-on" : "", e.disabled ? "uv-switch-disabled" : ""]]),
      style: v(f(n)),
      onClick: c
    }, [
      p("div", {
        class: a(["uv-switch-circle", e.modelValue ? " uv-switch-circle-on" : ""])
      }, null, 2)
    ], 6));
  }
});
export {
  V as default
};
