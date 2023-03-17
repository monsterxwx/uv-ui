import { inject as w, ref as z, watch as j, nextTick as H, computed as A, openBlock as u, createElementBlock as r, normalizeStyle as i, createElementVNode as I, createBlock as O, unref as b, createCommentVNode as v, renderSlot as F, toDisplayString as x } from "vue";
import L from "../icon/index.js";
import "./input.vue_vue_type_style_index_0_lang.js";
const N = { class: "uv-input" }, T = ["disabled", "type", "value", "placeholder", "readonly"], C = ["disabled", "value", "placeholder", "readonly"], E = {
  key: 0,
  class: "uv-input-word-limit"
}, K = {
  name: "UvInput"
}, D = /* @__PURE__ */ Object.assign(K, {
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    border: {
      type: Boolean,
      default: !1
    },
    formatter: {
      type: Function
    },
    formatTrigger: {
      type: String,
      default: "change"
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    autosize: {
      type: [Boolean, Object],
      default: !1
    },
    maxlength: {
      type: Number
    },
    showWordLimit: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "keydown"],
  setup(t, { emit: o }) {
    const a = t, { props: c, validateBlurOrChange: s } = w("form-item", {}), V = () => {
      o("update:modelValue", "");
    }, n = z(null);
    j(() => a.modelValue, (l) => {
      a.maxlength && f(l), a.autosize && a.type === "textarea" && H(() => {
        if (typeof a.autosize == "boolean")
          n.value.style.height = n.value.scrollHeight + "px";
        else if (Object.prototype.toString.call(a.autosize) === "[object Object]") {
          const { maxHeight: e } = a.autosize;
          n.value.style.height = n.value.scrollHeight < e ? n.value.scrollHeight + "px" : e + "px";
        }
      });
    });
    const d = A(() => Array.from(a.modelValue).length), B = () => {
      var l;
      return String((l = a.modelValue) != null ? l : "");
    }, k = (l, e) => (console.log(e), [...l].slice(0, e).join("")), S = (l) => {
      const { maxlength: e } = a;
      if (e && d.value > e) {
        const p = B();
        return p && d.value === +e ? p : k(l, +e);
      }
      return l;
    }, f = (l) => {
      let e = l;
      e = S(e), a.formatter && a.formatTrigger === "change" && (e = a.formatter(e)), o("update:modelValue", e);
    }, g = (l) => {
      const { value: e } = l.target;
      f(e), o("change", e), c && s("change");
    }, h = (l) => {
      if (a.formatter && a.formatTrigger === "blur") {
        let { value: e } = l.target;
        e = a.formatter(e), o("update:modelValue", e);
      }
      o("blur"), c && s("blur");
    }, y = () => {
      o("focus");
    }, m = (l) => {
      o("keydown", l);
    };
    return (l, e) => (u(), r("div", {
      class: "uv-input-wrap",
      style: i({ border: t.border ? "1px solid #eeeeee" : "" })
    }, [
      I("div", N, [
        t.type !== "textarea" ? (u(), r("input", {
          key: 0,
          style: i({ textAlign: t.inputAlign }),
          disabled: t.disabled,
          type: t.type,
          value: t.modelValue,
          placeholder: t.placeholder,
          readonly: t.readonly,
          onInput: g,
          onBlur: h,
          onFocus: y,
          onKeydown: m
        }, null, 44, T)) : (u(), r("textarea", {
          key: 1,
          ref_key: "textareaRef",
          ref: n,
          style: i({
            textAlign: t.inputAlign,
            height: t.autosize && t.autosize.minHeight ? t.autosize.minHeight + "px" : "60px"
          }),
          disabled: t.disabled,
          value: t.modelValue,
          placeholder: t.placeholder,
          readonly: t.readonly,
          autoHeight: !0,
          onInput: g,
          onBlur: h,
          onFocus: y,
          onKeydown: m
        }, null, 44, C)),
        t.modelValue && t.clearable ? (u(), O(b(L), {
          key: 2,
          onClick: V,
          name: "error",
          color: "#96b3d7",
          size: "22"
        })) : v("", !0),
        F(l.$slots, "right")
      ]),
      t.showWordLimit && t.maxlength ? (u(), r("div", E, x(b(d)) + " / " + x(t.maxlength), 1)) : v("", !0)
    ], 4));
  }
});
export {
  D as default
};
