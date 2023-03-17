import { computed as h, openBlock as a, createElementBlock as u, createElementVNode as d, normalizeClass as c, renderSlot as v, createTextVNode as m, toDisplayString as s, createBlock as g, unref as r, Fragment as f, renderList as y, createCommentVNode as S } from "vue";
import V from "../icon/index.js";
import "./pagination.vue_vue_type_style_index_0_lang.js";
const T = { class: "uv-pagination" }, N = { key: 0 }, z = { class: "uv-pagination-content" }, w = ["onClick"], B = { key: 0 }, $ = {
  name: "UvPagination"
}, D = /* @__PURE__ */ Object.assign($, {
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    modelValue: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    prevText: {
      type: String
    },
    nextText: {
      type: String
    },
    disabledColor: {
      type: String,
      default: "#bbbec4"
    },
    defaultColor: {
      type: String,
      default: "#606266"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: o }) {
    const l = t, n = h(() => Math.ceil(l.total / l.pageSize)), x = (e) => l.modelValue <= 3 && e <= 5 ? !0 : l.modelValue > 3 && l.modelValue + 2 < n.value ? Math.abs(l.modelValue - e) <= 2 : l.modelValue + 2 >= n.value ? e + 4 >= n.value : !1, k = (e) => {
      o("update:modelValue", e), o("change", e);
    }, p = () => {
      let e = 0;
      l.modelValue >= 2 && (e = l.modelValue - 1, o("update:modelValue", e), o("change", e));
    }, C = () => {
      let e = 0;
      l.modelValue < n.value && (e = Number(l.modelValue + 1), o("update:modelValue", e), o("change", e));
    };
    return (e, b) => (a(), u("div", T, [
      d("div", {
        onClick: p,
        class: c([
          t.prevText ? "uv-pagination-prev-text" : "uv-pagination-prev",
          t.modelValue === 1 ? "uv-pagination-prev-disabled" : ""
        ])
      }, [
        t.prevText ? (a(), u("div", N, [
          v(e.$slots, "prev", {}, () => [
            m(s(t.prevText), 1)
          ])
        ])) : (a(), g(r(V), {
          key: 1,
          color: t.modelValue === 1 ? t.disabledColor : t.defaultColor,
          size: "14",
          name: "arrow-left"
        }, null, 8, ["color"]))
      ], 2),
      d("div", z, [
        (a(!0), u(f, null, y(r(n), (i) => (a(), u(f, { key: i }, [
          x(i) ? (a(), u("div", {
            key: 0,
            onClick: (E) => k(i),
            class: c([t.modelValue === i ? "uv-pagination-content-item-active" : "", "uv-pagination-content-item"])
          }, s(i), 11, w)) : S("", !0)
        ], 64))), 128))
      ]),
      d("div", {
        onClick: C,
        class: c([
          t.nextText ? "uv-pagination-next-text" : "uv-pagination-next",
          t.modelValue === r(n) ? "uv-pagination-next-disabled" : ""
        ])
      }, [
        t.nextText ? (a(), u("div", B, [
          v(e.$slots, "next", {}, () => [
            m(s(t.nextText), 1)
          ])
        ])) : (a(), g(r(V), {
          key: 1,
          size: "14",
          color: t.modelValue === r(n) ? t.disabledColor : t.defaultColor,
          name: "arrow-right"
        }, null, 8, ["color"]))
      ], 2)
    ]));
  }
});
export {
  D as default
};
