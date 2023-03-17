import { ref as p, reactive as b, onMounted as f, openBlock as g, createElementBlock as y, normalizeStyle as S, unref as t, createElementVNode as l, renderSlot as m, createVNode as x, mergeProps as A, createTextVNode as k, toDisplayString as B } from "vue";
import { useParent as C } from "../packages/hooks/useContext.js";
import I from "../icon/index.js";
import "./tab-bar-item.vue_vue_type_style_index_0_lang.js";
const N = { class: "uv-tab-bar-item-icon" }, z = { class: "uv-tab-bar-item-text" }, P = {
  name: "UvTabBarItem"
}, j = /* @__PURE__ */ Object.assign(P, {
  props: {
    iconSize: {
      type: [Number, String]
    },
    iconName: {
      type: String
    },
    iconProps: {
      type: Object
    },
    text: {
      type: String
    }
  },
  setup(o) {
    const r = p(null), e = b({
      $el: r,
      isActive: !1
    }), { props: i, acitveItemUpdate: v, index: c } = C("tab-bar", e);
    f(() => {
      i && i.modelValue === c.value && (e.isActive = !0);
    });
    const { activeColor: a, inactiveColor: n, activeBgColor: u } = i, d = () => {
      e.isActive || (e.isActive = !0), v(c.value);
    };
    return (s, _) => (g(), y("div", {
      class: "uv-tab-bar-item",
      ref_key: "tabBarItemRef",
      ref: r,
      style: S({ color: e.isActive ? t(a) : t(n), backgroundColor: e.isActive ? t(u) : "" }),
      onClick: d
    }, [
      l("div", N, [
        m(s.$slots, "icon", {}, () => [
          x(t(I), A({
            size: o.iconSize,
            name: o.iconName,
            color: e.isActive ? t(a) : t(n)
          }, o.iconProps), null, 16, ["size", "name", "color"])
        ])
      ]),
      l("div", z, [
        m(s.$slots, "text", {}, () => [
          k(B(o.text), 1)
        ])
      ])
    ], 4));
  }
});
export {
  j as default
};
