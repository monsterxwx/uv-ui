import { ref as a, onMounted as b, openBlock as r, createElementBlock as u, createElementVNode as o, normalizeStyle as h, Fragment as g, renderList as k, normalizeClass as _, toDisplayString as C, renderSlot as S } from "vue";
import "./side-bar.vue_vue_type_style_index_0_lang.js";
const V = { class: "uv-side-bar" }, L = { class: "uv-side-bar-left" }, R = ["onClick"], $ = { class: "uv-side-bar-right" }, B = {
  name: "UvSideBar"
}, A = /* @__PURE__ */ Object.assign(B, {
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    lineWidth: {
      type: String,
      default: "4px"
    },
    lineColor: {
      type: String,
      default: "#1989fa"
    },
    list: {
      type: Array
    }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: m }) {
    const v = l, y = (e) => {
      m("update:modelValue", e);
      const { offsetHeight: t, offsetTop: s } = i.value[e];
      d(t, s);
    }, c = a(null), i = a(null), n = a(null), d = (e, t) => {
      n.value.style.height = `${e / 2}px`, n.value.style.transform = `translateY(${t + e / 4}px)`;
    };
    b(() => {
      p();
    });
    const p = () => {
      i.value = c.value.querySelectorAll(".uv-side-bar-left-cotent-item");
      const { offsetHeight: e, offsetTop: t } = i.value[v.modelValue];
      setTimeout(() => {
        n.value.style.transition = "transform 0.3s";
      }, 300), d(e, t);
    };
    return (e, t) => (r(), u("div", V, [
      o("div", L, [
        o("div", {
          class: "uv-side-bar-left-cotent",
          ref_key: "contentRef",
          ref: c
        }, [
          o("div", {
            ref_key: "lineRef",
            ref: n,
            class: "uv-side-bar-item-line",
            style: h({ width: l.lineWidth, backgroundColor: l.lineColor })
          }, null, 4),
          (r(!0), u(g, null, k(l.list, (s, f) => (r(), u("div", {
            onClick: (T) => y(f),
            class: _(["uv-side-bar-left-cotent-item", l.modelValue === f ? "uv-side-bar-left-cotent-item-active" : ""]),
            key: s
          }, C(s), 11, R))), 128))
        ], 512)
      ]),
      o("div", $, [
        S(e.$slots, "default")
      ])
    ]));
  }
});
export {
  A as default
};
