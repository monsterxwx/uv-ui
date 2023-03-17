import { ref as h, reactive as W, onMounted as p, onBeforeUnmount as C, openBlock as n, createElementBlock as a, normalizeStyle as y, renderSlot as T, createVNode as I, unref as i, mergeProps as s, createCommentVNode as r, createElementVNode as b, normalizeClass as B, createTextVNode as N, toDisplayString as P, createBlock as g } from "vue";
import d from "../icon/index.js";
import "./notice-bar.vue_vue_type_style_index_0_lang.js";
const z = {
  key: 0,
  class: "uv-notice-bar-icon"
}, X = {
  key: 1,
  class: "uv-notice-bar-content-right"
}, R = {
  name: "UvNoticeBar"
}, O = /* @__PURE__ */ Object.assign(R, {
  props: {
    speed: {
      type: [String, Number],
      default: 60
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: !0
    },
    text: {
      type: String
    },
    color: {
      type: String,
      default: "#ed6a0c"
    },
    bgColor: {
      type: String,
      default: "#fffbe8"
    },
    showLeftIcon: {
      type: Boolean,
      default: !0
    },
    iconProps: {
      type: Object
    },
    mode: {
      type: String
    },
    rightIconProps: {
      type: Object
    }
  },
  emits: ["click", "close", "replay"],
  setup(t, { expose: k, emit: l }) {
    const o = t, u = h(null), f = h(null), e = W({
      contentWidth: 0,
      contentTextWidth: 0,
      translateX: 0,
      duration: 0,
      autoScrollTimer: null,
      firstIn: !0,
      ms: o.delay ? o.delay * 1e3 : 0
    });
    p(() => {
      e.contentWidth = u.value.offsetWidth, e.contentTextWidth = f.value.offsetWidth, c();
    });
    const v = () => {
      l("replay"), e.translateX = e.contentWidth, e.duration = 0, clearTimeout(e.autoScrollTimer), c();
    }, c = () => {
      !o.scrollable || e.contentTextWidth < e.contentWidth || (e.autoScrollTimer = setTimeout(() => {
        e.duration = e.firstIn ? e.contentTextWidth / +o.speed : (e.contentWidth + e.contentTextWidth) / +o.speed, e.translateX = -e.contentTextWidth, e.firstIn = !1;
      }, e.ms));
    }, x = () => {
      l("click");
    }, S = () => {
      l("close");
    };
    return C(() => {
      clearTimeout(e.autoScrollTimer);
    }), k({
      reset: c
    }), (m, V) => (n(), a("div", {
      class: "uv-notice-bar",
      style: y({ backgroundColor: t.bgColor }),
      onClick: x
    }, [
      t.showLeftIcon ? (n(), a("div", z, [
        T(m.$slots, "icon", {}, () => [
          I(i(d), s({
            size: "20",
            color: "#ed6a0c",
            name: "notice"
          }, t.iconProps), null, 16)
        ])
      ])) : r("", !0),
      b("div", {
        class: "uv-notice-bar-content",
        ref_key: "contentRef",
        ref: u
      }, [
        b("div", {
          class: B(["uv-notice-bar-content-text", t.scrollable ? "" : "ellipsis"]),
          style: y({
            color: t.color,
            transform: `translateX(${e.translateX}px)`,
            transitionDuration: e.duration + "s"
          }),
          ref_key: "contentTextRef",
          ref: f,
          onTransitionend: v
        }, [
          T(m.$slots, "default", {}, () => [
            N(P(t.text), 1)
          ])
        ], 38)
      ], 512),
      t.mode ? (n(), a("div", X, [
        t.mode === "close" ? (n(), g(i(d), s({
          key: 0,
          size: "18",
          name: "close",
          color: "#ed6a0c"
        }, t.rightIconProps, { onClick: S }), null, 16)) : r("", !0),
        t.mode === "link" ? (n(), g(i(d), s({
          key: 1,
          size: "18",
          name: "arrow-right",
          color: "#ed6a0c"
        }, t.rightIconProps), null, 16)) : r("", !0)
      ])) : r("", !0)
    ], 4));
  }
});
export {
  O as default
};
