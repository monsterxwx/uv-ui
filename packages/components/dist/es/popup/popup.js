import { computed as h, openBlock as n, createElementBlock as a, createVNode as c, unref as s, Transition as g, withCtx as C, withDirectives as k, createElementVNode as l, normalizeClass as V, normalizeStyle as B, createCommentVNode as u, renderSlot as S, withModifiers as i, toDisplayString as d, vShow as b } from "vue";
import w from "../icon/index.js";
import N from "../overlay/index.js";
import "./popup.vue_vue_type_style_index_0_lang.js";
const E = { class: "uv-popup" }, O = { class: "uv-popup-content" }, x = {
  key: 0,
  class: "uv-popup-content-close"
}, z = { class: "uv-popup-content-item" }, $ = {
  key: 1,
  class: "uv-popup-content-button"
}, D = ["onClick"], P = ["onClick"], U = {
  name: "UvPopup"
}, A = /* @__PURE__ */ Object.assign(U, {
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "bottom"
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    round: {
      type: Boolean,
      default: !1
    },
    padding: {
      type: Boolean,
      default: !0
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    clickOverlayClose: {
      type: Boolean,
      default: !0
    },
    height: {
      type: String,
      default: "auto"
    },
    action: {
      type: Boolean,
      default: !1
    },
    close: {
      type: Boolean,
      default: !1
    },
    leftName: {
      type: String,
      default: "\u53D6\u6D88"
    },
    rightName: {
      type: String,
      default: "\u786E\u5B9A"
    }
  },
  emits: ["update:modelValue", "cancle", "confim", "close"],
  setup(e, { emit: o }) {
    const t = e, p = h(() => [
      "uv-popup-wrap",
      t.position ? `uv-popup-${t.position}` : "",
      t.round ? `uv-popup-${t.position}-round` : ""
    ]), r = () => {
      t.clickOverlayClose && o("update:modelValue", !1);
    }, f = () => {
      o("cancle"), o("update:modelValue", !1);
    }, v = () => {
      o("confim");
    }, m = () => {
      o("close"), o("update:modelValue", !1);
    };
    return (y, j) => (n(), a("div", E, [
      c(s(N), {
        overlay: e.overlay,
        show: e.modelValue,
        onClick: r
      }, null, 8, ["overlay", "show"]),
      c(g, {
        name: "uv-popup-slide-" + e.position
      }, {
        default: C(() => [
          k(l("div", {
            class: V(s(p)),
            style: B({ height: e.height, backgroundColor: e.bgColor, padding: e.padding ? "10px" : "none" })
          }, [
            l("div", O, [
              e.close ? (n(), a("div", x, [
                c(s(w), {
                  onClick: m,
                  name: "close",
                  size: "24",
                  color: "#c8c9cc"
                })
              ])) : u("", !0),
              l("div", z, [
                S(y.$slots, "default")
              ]),
              e.action ? (n(), a("div", $, [
                l("div", {
                  class: "uv-popup-content-button-cancle",
                  onClick: i(f, ["stop"])
                }, d(e.leftName), 9, D),
                l("div", {
                  class: "uv-popup-content-button-confim",
                  onClick: i(v, ["stop"])
                }, d(e.rightName), 9, P)
              ])) : u("", !0)
            ])
          ], 6), [
            [b, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
});
export {
  A as default
};
