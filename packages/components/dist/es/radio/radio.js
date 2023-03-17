import { ref as C, reactive as V, onMounted as B, computed as f, openBlock as a, createElementBlock as c, normalizeClass as m, unref as i, renderSlot as h, createTextVNode as b, toDisplayString as S, createCommentVNode as d, createElementVNode as $, normalizeStyle as x, createBlock as z } from "vue";
import w from "../icon/index.js";
import { useParent as R } from "../packages/hooks/useContext.js";
import "./radio.vue_vue_type_style_index_0_lang.js";
const N = {
  key: 0,
  class: "uv-radio-left"
}, E = {
  key: 1,
  class: "uv-radio-right"
}, I = {
  name: "UvRadio"
}, T = /* @__PURE__ */ Object.assign(I, {
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
  setup(o, { emit: s }) {
    const l = o, n = C(null), t = V({
      $el: n,
      label: l.label,
      isSelect: !1
    }), { props: e, updateItem: v, index: g } = R("radio-group", t);
    B(() => {
      e && e.modelValue === t.label && (t.isSelect = !0);
    });
    const y = f(() => [
      l.disabled ? "uv-radio-disabled" : "",
      l.spaceBetween ? "uv-radio-space-between" : ""
    ]), k = f(() => ({
      border: t.isSelect ? `1px solid ${l.checkedColor || (e == null ? void 0 : e.checkedColor)}` : "",
      backgroundColor: t.isSelect ? `${l.checkedColor || (e == null ? void 0 : e.checkedColor)}` : "",
      width: `${(e == null ? void 0 : e.iconSize) || 18}px`,
      height: `${(e == null ? void 0 : e.iconSize) || 18}px`
    })), p = () => {
      l.disabled || (e && e.modelValue ? v(g.value) : (t.isSelect = !t.isSelect, s("update:modelValue", !l.modelValue), s("change", l.label)));
    };
    return (r, U) => {
      var u;
      return a(), c("div", {
        class: m(["uv-radio", i(y)]),
        ref_key: "radioRef",
        ref: n,
        onClick: p
      }, [
        o.labelPosition === "left" ? (a(), c("div", N, [
          h(r.$slots, "default", {}, () => [
            b(S(o.label), 1)
          ])
        ])) : d("", !0),
        $("div", {
          class: m(["uv-radio-icon", [
            (((u = i(e)) == null ? void 0 : u.shape) || l.shape) === "round" ? "round" : "",
            t.isSelect ? "active" : ""
          ]]),
          style: x(i(k))
        }, [
          t.isSelect ? (a(), z(i(w), {
            key: 0,
            name: "select",
            color: o.disabled ? "#c8c9cc" : "#fff",
            size: "18"
          }, null, 8, ["color"])) : d("", !0)
        ], 6),
        o.labelPosition === "right" ? (a(), c("div", E, [
          h(r.$slots, "default", {}, () => [
            b(S(o.label), 1)
          ])
        ])) : d("", !0)
      ], 2);
    };
  }
});
export {
  T as default
};
