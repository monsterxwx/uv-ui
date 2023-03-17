import { openBlock as e, createElementBlock as a, createElementVNode as o, Fragment as d, renderList as n, normalizeStyle as p, renderSlot as c, toDisplayString as i, createTextVNode as y } from "vue";
import "./table.vue_vue_type_style_index_0_lang.js";
const _ = { class: "uv-table" }, b = { class: "uv-table-header-wrapper" }, h = { class: "uv-table-tr" }, f = { key: 1 }, w = { class: "uv-table-body-wrapper" }, k = {
  name: "UvTable"
}, x = /* @__PURE__ */ Object.assign(k, {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  setup(r) {
    return (u, m) => (e(), a("div", _, [
      o("div", b, [
        o("div", h, [
          (e(!0), a(d, null, n(r.columns, (t, s) => (e(), a("div", {
            class: "uv-table-th",
            style: p({ width: t.width, flex: t.width ? "" : 1 }),
            key: t.prop || s
          }, [
            t.titleSlot ? c(u.$slots, t.titleSlot, {
              key: 0,
              data: t
            }) : (e(), a("span", f, i(t.title), 1))
          ], 4))), 128))
        ])
      ]),
      o("div", w, [
        (e(!0), a(d, null, n(r.data, (t, s) => (e(), a("div", {
          class: "uv-table-tr",
          key: s
        }, [
          (e(!0), a(d, null, n(r.columns, (l, v) => (e(), a("div", {
            class: "uv-table-td",
            style: p({ width: l.width, flex: l.width ? "" : 1 }),
            key: l.prop || v
          }, [
            c(u.$slots, l.prop, {
              data: t[l.prop]
            }, () => [
              y(i(t[l.prop] || ""), 1)
            ])
          ], 4))), 128))
        ]))), 128))
      ])
    ]));
  }
});
export {
  x as default
};
