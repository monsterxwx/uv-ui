import { ref as s, computed as d, openBlock as h, createElementBlock as m, createElementVNode as t, normalizeStyle as u, unref as M, renderSlot as g, toDisplayString as c, createCommentVNode as w } from "vue";
import { useTouch as W } from "../packages/hooks/useTouch.js";
import "./swipe-cell.vue_vue_type_style_index_0_lang.js";
const $ = { class: "uv-swipe-cell" }, H = { class: "left-content" }, L = { class: "uv-swipe-cell-content" }, E = { class: "uv-swipe-cell-content-default" }, N = { class: "right-content" }, O = {
  name: "UvSwipeCell"
}, z = /* @__PURE__ */ Object.assign(O, {
  props: {
    left: {
      type: Boolean,
      default: !1
    },
    right: {
      type: Boolean,
      default: !0
    },
    selectText: {
      type: String,
      default: "\u9009\u62E9"
    },
    selectBgColor: {
      type: String,
      default: "#1989fa"
    },
    cancleText: {
      type: String,
      default: "\u5220\u9664"
    },
    cancleBgColor: {
      type: String,
      default: "#ee0a24"
    },
    confimText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    confimBgColor: {
      type: String,
      default: "#1989fa"
    },
    title: {
      type: String,
      default: "\u6807\u9898"
    },
    content: {
      type: String,
      default: "\u5185\u5BB9"
    }
  },
  emits: ["cancle", "confim", "select"],
  setup(e, { emit: r }) {
    const p = e, a = s(!1), f = s(null), v = s(null), y = d(() => f.value ? f.value.clientWidth : 0), C = d(() => v.value ? v.value.clientWidth : 0), o = s(0), i = W();
    function S(n) {
      i.start(n);
    }
    function k(n) {
      const { deltaX: l } = i;
      if (i.move(n), l.value < 0) {
        if (p.right || a.value) {
          if (o.value === -C.value)
            return;
          o.value = Math.abs(l.value) < 50 ? l.value : -C.value;
        }
      } else if (l.value > 0 && (p.left || a.value)) {
        if (o.value === y.value)
          return;
        o.value = Math.abs(l.value) < 50 ? l.value : y.value;
      }
      Math.abs(o.value) > 0 ? a.value = !0 : a.value = !1;
    }
    function B(n) {
      const { deltaX: l } = i;
      Math.abs(l.value) < 50 && (o.value = 0);
    }
    function T() {
      r("cancle");
    }
    function b() {
      r("confim");
    }
    function x() {
      r("select");
    }
    const R = d(() => ({
      transform: `translate3d(${o.value}px, 0, 0)`
    }));
    return (n, l) => (h(), m("div", $, [
      t("div", {
        class: "uv-swipe-cell-wrapper",
        onTouchstart: S,
        onTouchmove: k,
        onTouchend: B,
        style: u(M(R))
      }, [
        e.left ? (h(), m("div", {
          key: 0,
          class: "uv-swipe-cell-left uv-swipe-cell-position",
          ref_key: "swipeCellLeftRef",
          ref: f
        }, [
          g(n.$slots, "left", {}, () => [
            t("div", H, [
              t("div", {
                class: "left-content-item-common",
                style: u({ backgroundColor: e.selectBgColor }),
                onClick: x
              }, c(e.selectText), 5)
            ])
          ])
        ], 512)) : w("", !0),
        t("div", L, [
          g(n.$slots, "default", {}, () => [
            t("div", E, [
              t("div", null, c(e.title), 1),
              t("div", null, c(e.content), 1)
            ])
          ])
        ]),
        e.right ? (h(), m("div", {
          key: 1,
          class: "uv-swipe-cell-right uv-swipe-cell-position",
          ref_key: "swipeCellRightRef",
          ref: v
        }, [
          g(n.$slots, "right", {}, () => [
            t("div", N, [
              t("div", {
                class: "right-content-item-common",
                style: u({ backgroundColor: e.cancleBgColor }),
                onClick: T
              }, c(e.cancleText), 5),
              t("div", {
                class: "right-content-item-common",
                style: u({ backgroundColor: e.confimBgColor }),
                onClick: b
              }, c(e.confimText), 5)
            ])
          ])
        ], 512)) : w("", !0)
      ], 36)
    ]));
  }
});
export {
  z as default
};
