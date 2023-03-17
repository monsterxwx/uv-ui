import { inject as x, ref as y, watch as c, resolveComponent as N, openBlock as z, createElementBlock as C, createElementVNode as d, normalizeClass as m, normalizeStyle as s, withModifiers as o, createVNode as r } from "vue";
import { formatNumber as k } from "../packages/utils/index.js";
import "./stepper.vue_vue_type_style_index_0_lang.js";
const B = { class: "uv-stepper" }, V = ["onClick"], w = ["disabled", "value"], I = ["onClick"], S = {
  name: "UvStepper"
}, W = /* @__PURE__ */ Object.assign(S, {
  props: {
    modelValue: {
      type: Number
    },
    max: {
      type: Number
    },
    min: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 1
    },
    integer: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    disableInput: {
      type: Boolean,
      default: !1
    },
    inputWidth: {
      type: String,
      default: "28px"
    },
    size: {
      type: Number,
      default: 28
    }
  },
  emits: ["update:modelValue", "add", "sub", "change"],
  setup(l, { emit: u }) {
    const t = l, { props: v, validateBlurOrChange: p } = x("form-item", {}), e = y(t.modelValue || 1);
    c(() => t.modelValue, (a) => {
      e.value = a;
    }), c(e, (a) => {
      u("update:modelValue", a), u("change", a), v && p("change");
    });
    function f() {
      t.min && e.value <= t.min || t.disabled || (e.value = e.value - t.step, u("add", e.value));
    }
    function b() {
      t.max && e.value >= t.max || t.disabled || (e.value = Number(e.value + t.step), u("add", e.value));
    }
    function h(a) {
      const { value: n } = a.target, i = k(String(n), !t.integer);
      console.log(i), a.target.value = i, e.value = Number(i);
    }
    function g(a) {
      t.min && e.value <= t.min ? (a.target.value = t.min, e.value = Number(t.min)) : t.max && e.value >= t.max && (a.target.value = t.max, e.value = Number(t.max));
    }
    return (a, n) => {
      const i = N("uv-icon");
      return z(), C("div", B, [
        d("div", {
          class: m(["uv-stepper-minus", l.min === e.value || l.disabled ? "uv-stepper-disabled" : ""]),
          style: s({ width: l.size + "px", height: l.size + "px" }),
          onClick: o(f, ["stop"])
        }, [
          r(i, {
            class: "uv-stepper-icon",
            size: "20",
            name: "minus",
            color: l.min === e.value || l.disabled ? "#c8c9cc" : "#323233"
          }, null, 8, ["color"])
        ], 14, V),
        d("div", {
          onClick: n[0] || (n[0] = o(() => {
          }, ["stop"])),
          class: "uv-stepper-input",
          style: s({ width: l.inputWidth, height: l.size + "px" })
        }, [
          d("input", {
            style: s({ color: l.disabled ? "#d0c9cc" : "#323233" }),
            disabled: l.disableInput || l.disabled,
            onInput: h,
            onBlur: g,
            value: e.value
          }, null, 44, w)
        ], 4),
        d("div", {
          class: m(["uv-stepper-add", l.max === e.value || l.disabled ? "uv-stepper-disabled" : ""]),
          style: s({ width: l.size + "px", height: l.size + "px" }),
          onClick: o(b, ["stop"])
        }, [
          r(i, {
            class: "uv-stepper-icon",
            size: "20",
            name: "add",
            color: l.max === e.value || l.disabled ? "#c8c9cc" : "#323233"
          }, null, 8, ["color"])
        ], 14, I)
      ]);
    };
  }
});
export {
  W as default
};
