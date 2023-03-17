import { ref as d, reactive as f, onMounted as _, openBlock as k, createElementBlock as y, createElementVNode as s, renderSlot as u, normalizeStyle as o, unref as t, createTextVNode as A, toDisplayString as C } from "vue";
import { useParent as S } from "../packages/hooks/useContext.js";
import "./steps-item.vue_vue_type_style_index_0_lang.js";
const b = { class: "uv-steps-item-icon" }, g = {
  name: "UvStepsItem"
}, h = /* @__PURE__ */ Object.assign(g, {
  props: {
    title: {
      type: String
    }
  },
  setup(v) {
    const c = d(null), e = f({
      $el: c,
      isActive: !1,
      lineActive: !1
    }), { props: i, acitveItemUpdate: p, index: n } = S("steps", e);
    _(() => {
      i.modelValue === n.value && (e.isActive = !0);
    });
    const { activeColor: l, inactiveColor: r } = i, m = () => {
      i.isAbleClick && p(n.value);
    };
    return (a, x) => (k(), y("div", {
      class: "uv-steps-item",
      onClick: m,
      ref_key: "itemRef",
      ref: c
    }, [
      s("div", b, [
        u(a.$slots, "icon", {}, () => [
          s("div", {
            class: "uv-steps-item-icon-default",
            style: o({ borderColor: e.isActive ? t(l) : t(r) })
          }, null, 4)
        ])
      ]),
      s("div", {
        class: "uv-steps-item-text",
        style: o({ color: e.isActive ? t(l) : t(r) })
      }, [
        u(a.$slots, "default", {}, () => [
          A(C(v.title), 1)
        ])
      ], 4),
      s("div", {
        class: "uv-steps-item-line",
        style: o({ backgroundColor: e.lineActive ? t(l) : "" })
      }, null, 4)
    ], 512));
  }
});
export {
  h as default
};
