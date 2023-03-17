import { ref as C, reactive as N, computed as c, openBlock as z, createElementBlock as $, normalizeClass as d, unref as n, normalizeStyle as u, createElementVNode as l, renderSlot as a, createVNode as P, mergeProps as h, createTextVNode as I, toDisplayString as L } from "vue";
import { useParent as B } from "../packages/hooks/useContext.js";
import E from "../icon/index.js";
import "./grid-item.vue_vue_type_style_index_0_lang.js";
const R = { class: "uv-grid-item-content-text" }, V = {
  name: "UvGridItem"
}, w = /* @__PURE__ */ Object.assign(V, {
  props: {
    iconSize: {
      type: [String, Number],
      default: 28
    },
    iconName: {
      type: String
    },
    iconColor: {
      type: String
    },
    iconProps: {
      type: Object
    },
    text: {
      type: String
    }
  },
  emits: ["click"],
  setup(o, { emit: g }) {
    const m = C(null), p = N({
      $el: m
    }), { props: r, childrenNum: v, index: f } = B("grid", p), y = c(() => {
      const { columnNum: e, gutter: t } = r, s = {
        flexBasis: `${100 / +e}%`
      };
      return t && (s.paddingRight = t + "px", v.value >= e && f.value >= e && (s.marginTop = t + "px")), s;
    }), S = c(() => {
      const { border: e, clickable: t } = r;
      return [
        e ? "uv-grid-item-border" : "",
        t ? "uv-grid-item-clickable" : ""
      ];
    }), k = c(() => {
      const { bgColor: e, color: t } = r;
      return {
        backgroundColor: e,
        color: t
      };
    }), b = c(() => {
      const { direction: e, reverse: t } = r;
      return [
        e === "column" ? "uv-grid-item-content-direction-column" : "uv-grid-item-content-direction-row",
        t ? `uv-grid-item-content-direction-${e}-reverse` : ""
      ];
    }), x = () => {
      g("click");
    };
    return (e, t) => (z(), $("div", {
      class: d(["uv-grid-item", n(S)]),
      ref_key: "gridItemRef",
      ref: m,
      style: u(n(y)),
      onClick: x
    }, [
      l("div", {
        class: d(["uv-grid-item-content", n(b)]),
        style: u(n(k))
      }, [
        a(e.$slots, "default", {}, () => [
          l("div", null, [
            a(e.$slots, "icon", {}, () => [
              P(n(E), h({
                size: o.iconSize,
                name: o.iconName,
                color: o.iconColor
              }, o.iconProps), null, 16, ["size", "name", "color"])
            ])
          ]),
          l("div", R, [
            a(e.$slots, "text", {}, () => [
              I(L(o.text), 1)
            ])
          ])
        ])
      ], 6)
    ], 6));
  }
});
export {
  w as default
};
