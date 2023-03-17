import { computed as B, inject as h, ref as P, reactive as S, toRefs as T, onMounted as F, onBeforeMount as V, provide as $, openBlock as j, createBlock as C, unref as u, mergeProps as I, withCtx as m, renderSlot as g, nextTick as O } from "vue";
import { getProp as v } from "../packages/utils/index.js";
import D from "../cell/index.js";
import "./form-item.vue_vue_type_style_index_0_lang.js";
import b from "../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js";
const x = {
  name: "UvFormItem"
}, H = /* @__PURE__ */ Object.assign(x, {
  props: {
    label: {
      type: String
    },
    labelPosition: {
      type: String
    },
    arrow: {
      type: Boolean,
      default: !1
    },
    arrowDirection: {
      type: String
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    prop: {
      type: String
    },
    required: {
      type: Boolean
    }
  },
  setup(a) {
    const e = a;
    let c;
    const M = B(() => {
      const o = l == null ? void 0 : l.model;
      if (!(!o || !e.prop))
        return v(o, e.prop).value;
    }), { props: l, addField: q, removeField: w } = h("form"), { labelWidth: y, rules: s } = l, f = P(null), R = () => !!(!e.prop || !s[e.prop] || s[e.prop].map((i) => {
      let n = "";
      return i.required === !0 && (l.model[e.prop] ? (r.errorMsg = null, n = !0) : (r.errorMsg = i.message, n = !1)), i.trigger && (n = d(i.trigger)), n;
    }).every((i) => i === !0)), d = (o) => {
      if (!e.prop || !s[e.prop]) {
        e.prop ? s[e.prop] || console.error("\u672A\u4F20\u5165\u8BE5\u5C5E\u6027\u7684rule\u89C4\u5219") : console.error("\u8BF7\u4F20\u5165form-item\u4E2D\u4F20\u5165prop\u5C5E\u6027");
        return;
      }
      const t = s[e.prop].find((i) => i.trigger === o);
      if (t) {
        if (t.required)
          return l.model[e.prop] ? (r.errorMsg = null, !0) : (r.errorMsg = t.message, !1);
        if (t.validator) {
          const i = l.model[e.prop];
          return t.validator(i) ? (r.errorMsg = null, !0) : (r.errorMsg = t.message, !1);
        }
      } else
        return r.errorMsg = null, !0;
    }, k = async () => {
      const o = l == null ? void 0 : l.model;
      if (!o || !e.prop)
        return;
      const t = v(o, e.prop);
      t.value = b(c), await O(), p();
    }, p = () => {
      r.errorMsg = null;
    }, r = S({
      ...T(e),
      $el: f,
      isRequired: !1,
      errorMsg: null,
      clearValidate: p,
      validate: R,
      resetField: k
    });
    return F(() => {
      s && s[e.prop] && s[e.prop].find((t) => t.required === !0) && (r.isRequired = !0), c = b(M.value), q(r);
    }), V(() => {
      w(r);
    }), $("form-item", { props: e, validateBlurOrChange: d }), (o, t) => (j(), C(u(D), I({
      class: "uv-form-item",
      ref_key: "formItemRef",
      ref: f
    }, o.$attrs, {
      arrow: a.arrow,
      "arrow-direction": a.arrowDirection,
      title: a.label,
      "label-width": u(y),
      "label-position": a.labelPosition || u(l).labelPosition,
      clickable: a.clickable,
      required: a.required || r.isRequired,
      tips: !!r.errorMsg,
      "error-msg": r.errorMsg
    }), {
      title: m(() => [
        g(o.$slots, "label")
      ]),
      value: m(() => [
        g(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["arrow", "arrow-direction", "title", "label-width", "label-position", "clickable", "required", "tips", "error-msg"]));
  }
});
export {
  H as default
};
