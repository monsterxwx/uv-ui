import { ref as C, reactive as p, onMounted as B, computed as f, openBlock as a, createElementBlock as s, normalizeClass as h, unref as i, renderSlot as b, createTextVNode as k, toDisplayString as m, createCommentVNode as d, createElementVNode as V, normalizeStyle as $, createBlock as z } from "vue";
import w from "../icon/index.js";
import { useParent as N } from "../packages/hooks/useContext.js";
import "./checkbox.vue_vue_type_style_index_0_lang.js";
const E = {
  key: 0,
  class: "uv-check-box-left"
}, I = {
  key: 1,
  class: "uv-check-box-right"
}, R = {
  name: "UvCheckbox"
}, T = /* @__PURE__ */ Object.assign(R, {
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "round"
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    checkedColor: {
      type: String
    },
    labelPosition: {
      type: String,
      default: "right"
    },
    spaceBetween: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(c, { emit: n }) {
    const l = c, u = C(null), t = p({
      $el: u,
      label: l.label,
      isSelect: !1
    }), { props: e, updateItem: S, index: v } = N("checkbox-group", t);
    B(() => {
      e && e.modelValue.find((o) => o === t.label) && (t.isSelect = !0);
    });
    const x = f(() => [
      l.disabled ? "uv-check-box-disabled" : "",
      l.spaceBetween ? "uv-check-box-space-between" : ""
    ]), g = f(() => ({
      border: t.isSelect ? `1px solid ${l.checkedColor || (e == null ? void 0 : e.checkedColor)}` : "",
      backgroundColor: t.isSelect ? `${l.checkedColor || (e == null ? void 0 : e.checkedColor)}` : "",
      width: `${(e == null ? void 0 : e.iconSize) || 18}px`,
      height: `${(e == null ? void 0 : e.iconSize) || 18}px`
    })), y = () => {
      l.disabled || (e && e.modelValue ? S(v.value) : (t.isSelect = !t.isSelect, n("update:modelValue", !l.modelValue), n("change", l.label)));
    };
    return (o, U) => {
      var r;
      return a(), s("div", {
        class: h(["uv-check-box", i(x)]),
        ref_key: "checkboxRef",
        ref: u,
        onClick: y
      }, [
        c.labelPosition === "left" ? (a(), s("div", E, [
          b(o.$slots, "default", {}, () => [
            k(m(c.label), 1)
          ])
        ])) : d("", !0),
        V("div", {
          class: h(["uv-check-box-icon", [
            (((r = i(e)) == null ? void 0 : r.shape) || l.shape) === "round" ? "round" : "",
            t.isSelect ? "active" : ""
          ]]),
          style: $(i(g))
        }, [
          t.isSelect ? (a(), z(i(w), {
            key: 0,
            name: "select",
            color: c.disabled ? "#c8c9cc" : "#fff",
            size: "18"
          }, null, 8, ["color"])) : d("", !0)
        ], 6),
        c.labelPosition === "right" ? (a(), s("div", I, [
          b(o.$slots, "default", {}, () => [
            k(m(c.label), 1)
          ])
        ])) : d("", !0)
      ], 2);
    };
  }
});
export {
  T as default
};
