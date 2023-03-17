import { openBlock as l, createElementBlock as i, normalizeStyle as a, createElementVNode as t, normalizeClass as d, renderSlot as n, createVNode as c, unref as f, createCommentVNode as r, createTextVNode as s, toDisplayString as u, Transition as y, withCtx as g } from "vue";
import v from "../icon/index.js";
import "./cell.vue_vue_type_style_index_0_lang.js";
const m = {
  key: 0,
  style: { "margin-right": "5px" }
}, b = { class: "uv-cell-content-value-wrap" }, h = { class: "uv-cell-content-value" }, S = {
  key: 0,
  class: "uv-cell-arrow"
}, w = {
  key: 0,
  class: "uv-cell-tips"
}, k = {
  name: "UvCell"
}, p = /* @__PURE__ */ Object.assign(k, {
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number, Boolean],
      default: ""
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    size: {
      type: [String, Number],
      default: "14"
    },
    icon: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    iconSize: {
      type: Number,
      default: 16
    },
    arrow: {
      type: Boolean,
      default: !1
    },
    arrowDirection: {
      type: String,
      default: "right"
    },
    tips: {
      type: Boolean,
      default: !1
    },
    errorMsg: {
      type: String
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    labelWidth: {
      type: Number
    },
    labelPosition: {
      type: String,
      default: "left"
    },
    required: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (o, z) => (l(), i("div", {
      class: "uv-cell",
      style: a({ backgroundColor: e.bgColor, fontSize: e.size + "px" })
    }, [
      t("div", {
        class: d(["uv-cell-content", [e.clickable ? "uv-cell-clickable" : "", e.labelPosition === "top" ? "uv-cell-content-top" : "", e.labelPosition === "right" ? "uv-cell-content-right" : ""]])
      }, [
        t("div", {
          class: d(["uv-cell-content-title", e.required ? "uv-cell-content-title-required" : ""]),
          style: a({ width: e.labelWidth + "px" })
        }, [
          n(o.$slots, "title", {}, () => [
            e.icon !== "" ? (l(), i("span", m, [
              c(f(v), {
                name: e.icon,
                color: e.iconColor,
                size: e.iconSize
              }, null, 8, ["name", "color", "size"])
            ])) : r("", !0),
            s(" " + u(e.title), 1)
          ])
        ], 6),
        t("div", b, [
          t("div", h, [
            t("div", {
              class: "uv-cell-content-value-slot",
              style: a({ paddingRight: e.arrow ? "20px" : "" })
            }, [
              n(o.$slots, "value", {}, () => [
                s(u(e.value), 1)
              ])
            ], 4),
            e.arrow ? (l(), i("span", S, [
              c(f(v), {
                name: "arrow-" + e.arrowDirection,
                color: "#9699a6"
              }, null, 8, ["name"])
            ])) : r("", !0)
          ]),
          c(y, { name: "cell-tips" }, {
            default: g(() => [
              e.tips ? (l(), i("div", w, [
                n(o.$slots, "tips", {}, () => [
                  s(u(e.errorMsg), 1)
                ])
              ])) : r("", !0)
            ]),
            _: 3
          })
        ])
      ], 2)
    ], 4));
  }
});
export {
  p as default
};
