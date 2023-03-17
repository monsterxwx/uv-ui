import { ref as p, watch as d, openBlock as c, createBlock as h, unref as k, mergeProps as y, withCtx as v, createElementVNode as u, createElementBlock as s, Fragment as g, renderList as w, normalizeClass as C, normalizeStyle as V, toDisplayString as i, createCommentVNode as b } from "vue";
import N from "../popup/index.js";
import "./action-sheet.vue_vue_type_style_index_0_lang.js";
const S = { class: "uv-action-sheet" }, x = ["onClick"], B = {
  name: "UvActionSheet"
}, E = /* @__PURE__ */ Object.assign(B, {
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String
    },
    list: {
      type: Array
    },
    keyName: {
      type: String,
      default: "name"
    },
    cancelText: {
      type: String
    }
  },
  emits: ["update:show", "update:modelValue", "change", "close"],
  setup(a, { emit: t }) {
    const n = a, o = p(!1);
    d(() => n.show, (e) => {
      o.value = e;
    }), d(() => o.value, (e) => {
      t("update:show", e);
    });
    const f = (e) => {
      e.disabled || (t("change", e), t("update:modelValue", e[n.keyName]), t("update:show", !1));
    }, m = () => {
      t("close"), t("update:show", !1);
    };
    return (e, r) => (c(), h(k(N), y({
      modelValue: o.value,
      "onUpdate:modelValue": r[0] || (r[0] = (l) => o.value = l),
      padding: !1,
      "bg-color": "#f7f8fa",
      round: ""
    }, e.$attrs), {
      default: v(() => [
        u("div", S, [
          (c(!0), s(g, null, w(a.list, (l) => (c(), s("div", {
            key: l[a.keyName],
            class: C(["uv-action-sheet-item", l.disabled ? "" : "able-click"]),
            onClick: (P) => f(l)
          }, [
            u("div", {
              style: V({ color: l.disabled ? "#c8c9cc" : l.color ? l.color : "#323233" })
            }, i(l[a.keyName]), 5)
          ], 10, x))), 128)),
          a.cancelText ? (c(), s("div", {
            key: 0,
            onClick: m,
            class: "uv-action-sheet-item cancle-item able-click"
          }, i(a.cancelText), 1)) : b("", !0)
        ])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
});
export {
  E as default
};
