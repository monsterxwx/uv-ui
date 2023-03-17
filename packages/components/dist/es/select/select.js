import { ref as r, openBlock as o, createElementBlock as s, Fragment as g, createVNode as h, unref as b, createElementVNode as i, normalizeClass as f, toDisplayString as y, withModifiers as w, createCommentVNode as _, Transition as z, withCtx as A, withDirectives as R, renderList as D, normalizeStyle as E, renderSlot as L, vShow as O } from "vue";
import P from "../overlay/index.js";
import x from "../icon/index.js";
import "./select.vue_vue_type_style_index_0_lang.js";
const U = {
  key: 0,
  class: "uv-select-multiple"
}, $ = {
  key: 0,
  class: "uv-select-multiple-item"
}, j = { class: "uv-select-multiple-item-text" }, F = {
  key: 1,
  class: "uv-select-multiple-placeholder"
}, H = {
  key: 2,
  class: "uv-select-multiple-item"
}, M = {
  key: 1,
  class: "uv-select-input"
}, T = ["value", "placeholder", "disabled"], q = /* @__PURE__ */ i("div", { class: "uv-select-box-arrow" }, null, -1), G = {
  key: 0,
  class: "uv-select-box-content"
}, J = ["onClick"], K = {
  key: 1,
  class: "uv-select-box-content-empty"
}, Q = /* @__PURE__ */ i("div", { class: "uv-select-box-content-empty-default" }, " \u65E0\u6570\u636E ", -1), W = {
  name: "UvSelect"
}, te = /* @__PURE__ */ Object.assign(W, {
  props: {
    modelValue: {
      type: [String, Array, Number]
    },
    placeholder: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    list: {
      type: Array
    },
    keyName: {
      type: String
    },
    itemBgColor: {
      type: String
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: v }) {
    const c = e, a = r(!1), p = r(null), m = r("bottom");
    function C() {
      (p.value ? p.value.getBoundingClientRect().top : 0) > screen.availHeight / 2 ? m.value = "top" : m.value = "bottom";
    }
    const S = () => {
      C(), c.filterable && (d.value = c.list), a.value = !a.value;
    }, N = () => {
      a.value = !1;
    }, d = r(c.list), V = (n) => {
      const { value: u } = n.target;
      v("update:modelValue", u), d.value = c.list.filter((l) => l[c.keyName].includes(u));
    }, t = r([]), B = (n) => {
      const u = n[c.keyName];
      if (c.multiple) {
        const l = t.value.findIndex((k) => k === u);
        console.log(l), l > -1 ? t.value.splice(l, 1) : t.value.push(u), v("update:modelValue", t.value), v("change", t.value);
      } else
        v("update:modelValue", u), v("change", n), a.value = !1;
    }, I = () => {
      t.value.splice(0, 1);
    };
    return (n, u) => (o(), s(g, null, [
      h(b(P), {
        show: a.value,
        overlay: !1,
        onClick: N
      }, null, 8, ["show"]),
      i("div", {
        ref_key: "selectRef",
        ref: p,
        class: f(["uv-select", a.value ? "uv-select-active" : ""]),
        onClick: S
      }, [
        e.multiple ? (o(), s("div", U, [
          t.value.length > 0 ? (o(), s("div", $, [
            i("div", j, y(t.value[0]), 1),
            h(b(x), {
              size: "16",
              name: "error",
              color: "#f56c6c",
              onClick: w(I, ["stop"])
            }, null, 8, ["onClick"])
          ])) : (o(), s("div", F, y(e.placeholder), 1)),
          t.value.length > 1 ? (o(), s("div", H, " +" + y(t.value.length - 1), 1)) : _("", !0)
        ])) : (o(), s("div", M, [
          i("input", {
            value: e.modelValue,
            placeholder: e.placeholder,
            onInput: V,
            disabled: !e.filterable
          }, null, 40, T)
        ])),
        i("div", {
          class: f(["uv-select-arrow", a.value ? "uv-select-arrow-up" : ""])
        }, [
          h(b(x), {
            size: "16",
            name: "arrow-up-bold",
            color: "#aaadb4"
          })
        ], 2),
        h(z, {
          name: m.value === "bottom" ? "select-bottom" : "select-top"
        }, {
          default: A(() => [
            R(i("div", {
              class: f(["uv-select-box", m.value === "bottom" ? "uv-select-box-show-bottom" : "uv-select-box-show-top"])
            }, [
              q,
              d.value && d.value.length > 0 ? (o(), s("div", G, [
                (o(!0), s(g, null, D(d.value, (l, k) => (o(), s("div", {
                  class: f(["uv-select-box-item", e.multiple ? e.modelValue.includes(l[e.keyName]) ? "uv-select-box-item-select" : "" : l[e.keyName] === e.modelValue ? "uv-select-box-item-select" : ""]),
                  style: E({ backgroundColor: e.itemBgColor }),
                  key: e.keyName ? l[e.keyName] : k,
                  onClick: w((X) => B(l), ["stop"])
                }, y(l[e.keyName]), 15, J))), 128))
              ])) : (o(), s("div", K, [
                L(n.$slots, "empty", {}, () => [
                  Q
                ])
              ]))
            ], 2), [
              [O, a.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ], 2)
    ], 64));
  }
});
export {
  te as default
};
