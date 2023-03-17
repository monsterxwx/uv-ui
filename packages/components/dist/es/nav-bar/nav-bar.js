import { openBlock as r, createElementBlock as c, normalizeClass as u, normalizeStyle as a, createCommentVNode as d, createElementVNode as t, renderSlot as o, createBlock as v, unref as b, mergeProps as g, toDisplayString as i, createTextVNode as y } from "vue";
import m from "../icon/index.js";
import "./nav-bar.vue_vue_type_style_index_0_lang.js";
const h = {
  key: 0,
  class: "uv-nav-bar-placeholder"
}, k = { class: "uv-nav-bar-center" }, C = {
  name: "UvNavBar"
}, w = /* @__PURE__ */ Object.assign(C, {
  props: {
    title: {
      type: String
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    leftTitle: {
      type: String
    },
    leftColor: {
      type: String,
      default: "#419dfb"
    },
    rightTitle: {
      type: String
    },
    leftArrow: {
      type: Boolean,
      default: !1
    },
    arrowProps: {
      type: Object
    },
    border: {
      type: Boolean,
      default: !0
    },
    zIndex: {
      type: [Number, String],
      default: 1
    },
    fixed: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click-left", "click-right"],
  setup(e, { emit: n }) {
    const f = () => {
      n("click-left");
    }, s = () => {
      n("click-right");
    };
    return (l, x) => (r(), c("div", {
      class: u(["uv-nav-bar", e.fixed ? "uv-nav-bar-fixed" : ""]),
      style: a({ border: e.border ? "1px solid #f7f8fa" : "", zIndex: e.zIndex })
    }, [
      e.placeholder && e.fixed ? (r(), c("div", h)) : d("", !0),
      t("div", {
        class: "uv-nav-bar-content",
        style: a({ backgroundColor: e.bgColor })
      }, [
        t("div", {
          class: "uv-nav-bar-left",
          onClick: f
        }, [
          o(l.$slots, "left", {}, () => [
            e.leftArrow ? (r(), v(b(m), g({
              key: 0,
              name: "arrow-left-bold",
              size: "18",
              color: e.leftColor
            }, e.arrowProps), null, 16, ["color"])) : d("", !0),
            t("div", {
              style: a({ color: e.leftColor }),
              class: "uv-nav-bar-left-text"
            }, i(e.leftTitle), 5)
          ])
        ]),
        t("div", k, [
          o(l.$slots, "title", {}, () => [
            y(i(e.title), 1)
          ])
        ]),
        t("div", {
          class: "uv-nav-bar-right",
          onClick: s
        }, [
          o(l.$slots, "right", {}, () => [
            t("div", null, i(e.rightTitle), 1)
          ])
        ])
      ], 4)
    ], 6));
  }
});
export {
  w as default
};
