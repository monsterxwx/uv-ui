import { inject as g, computed as v, openBlock as y, createElementBlock as w, createElementVNode as t, normalizeClass as n, unref as l, renderSlot as a, createTextVNode as C, toDisplayString as _, createVNode as d, Transition as b, withCtx as S, withDirectives as E, vShow as k } from "vue";
import A from "../icon/index.js";
import "./collapse-item.vue_vue_type_style_index_0_lang.js";
const x = { class: "uv-collapse-item" }, I = { class: "collapse-item-right" }, L = { class: "collapse-item-content-wrapper" }, N = { class: "collapse-item-content" }, B = {
  name: "UvCollapseItem"
}, j = /* @__PURE__ */ Object.assign(B, {
  props: {
    title: {
      type: String
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(o) {
    const s = o, c = g("collapse"), i = v(() => c.activeNames.value.indexOf(s.name) > -1), h = () => {
      s.disabled || c.handleItemClick(s.name);
    }, m = (e) => {
      e.style.height = "auto";
      const r = window.getComputedStyle(e).height;
      e.style.height = "0px", e.offsetHeight, e.style.height = r;
    }, p = (e) => {
      e.style.height = null;
    }, u = (e) => {
      e.style.height = window.getComputedStyle(e).height, e.offsetHeight, e.style.height = "0px";
    }, f = (e) => {
      e.style.height = null;
    };
    return (e, r) => (y(), w("div", x, [
      t("div", {
        class: n(["collapse-item-title", l(i) ? "collapse-item-bottom-line" : ""]),
        onClick: h
      }, [
        t("div", {
          class: n(o.disabled ? "collapse-item-title-disabled" : "")
        }, [
          a(e.$slots, "title", {}, () => [
            C(_(o.title), 1)
          ])
        ], 2),
        t("div", I, [
          t("div", null, [
            a(e.$slots, "right")
          ]),
          t("div", {
            class: n(["collapse-item-arrow", l(i) ? "collapse" : ""])
          }, [
            d(l(A), {
              size: "16",
              color: o.disabled ? "#c8c9cc" : "#969799",
              name: "arrow-down"
            }, null, 8, ["color"])
          ], 2)
        ])
      ], 2),
      d(b, {
        name: "collapse",
        onEnter: m,
        onAfterEnter: p,
        onLeave: u,
        onAfterLeave: f
      }, {
        default: S(() => [
          E(t("div", L, [
            t("div", N, [
              a(e.$slots, "default")
            ])
          ], 512), [
            [k, l(i)]
          ])
        ]),
        _: 3
      })
    ]));
  }
});
export {
  j as default
};
