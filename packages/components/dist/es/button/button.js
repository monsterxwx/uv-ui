import { computed as b, openBlock as o, createElementBlock as n, createElementVNode as c, normalizeClass as y, unref as l, normalizeStyle as m, createVNode as a, createCommentVNode as i, renderSlot as v } from "vue";
import u from "../icon/index.js";
import "./button.vue_vue_type_style_index_0_lang.js";
const g = ["disabled"], k = { class: "uv-button-content" }, z = {
  key: 0,
  class: "uv-button-content-icon-left"
}, S = {
  key: 1,
  class: "uv-button-content-loading"
}, C = {
  key: 2,
  class: "uv-button-content-icon-right"
}, h = {
  name: "UvButton"
}, E = /* @__PURE__ */ Object.assign(h, {
  props: {
    type: {
      type: String,
      default: "default"
    },
    bgColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    square: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
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
    iconPosition: {
      type: String,
      default: "left"
    }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const e = t, s = b(() => [
      "uv-button",
      e.type ? e.disabled ? "" : `uv-button-${e.type}` : "",
      e.disabled ? `uv-button-${e.type}-disabled` : "",
      e.round ? "uv-button-round" : "",
      e.square ? "uv-button-square" : "",
      e.size ? `uv-button-size-${e.size}` : "",
      e.block ? "uv-button-block" : ""
    ]), r = () => {
      d("click");
    };
    return (f, B) => (o(), n("div", null, [
      c("button", {
        class: y(l(s)),
        disabled: t.disabled,
        style: m({ backgroundColor: t.bgColor, color: t.color }),
        onClick: r
      }, [
        c("div", k, [
          t.icon && t.iconPosition === "left" ? (o(), n("div", z, [
            a(l(u), {
              name: t.icon,
              color: t.iconColor,
              size: t.iconSize
            }, null, 8, ["name", "color", "size"])
          ])) : i("", !0),
          t.loading ? (o(), n("div", S)) : i("", !0),
          v(f.$slots, "default"),
          t.icon && t.iconPosition === "right" ? (o(), n("div", C, [
            a(l(u), {
              name: t.icon,
              color: t.iconColor,
              size: t.iconSize
            }, null, 8, ["name", "color", "size"])
          ])) : i("", !0)
        ])
      ], 14, g)
    ]));
  }
});
export {
  E as default
};
