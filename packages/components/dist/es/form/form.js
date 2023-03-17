import { provide as d, openBlock as i, createElementBlock as c, createVNode as n, unref as f, withCtx as u, renderSlot as p, nextTick as m } from "vue";
import v from "../cell-group/index.js";
const F = { class: "uv-form" }, h = {
  name: "UvForm"
}, P = /* @__PURE__ */ Object.assign(h, {
  props: {
    model: Object,
    rules: {
      type: Object
    },
    labelPosition: {
      type: String,
      default: "left"
    },
    labelWidth: {
      type: Number
    },
    card: {
      type: Boolean,
      default: !1
    },
    gap: {
      type: Boolean,
      default: !1
    }
  },
  setup(a, { expose: o }) {
    const r = a, t = [];
    return d("form", { props: r, fields: t, addField: (e) => {
      t.push(e);
    }, removeField: (e) => {
      t.splice(t.indexOf(e), 1);
    } }), o({
      validate: () => new Promise((e, s) => {
        m(() => {
          t.map((l) => l.validate()).every((l) => l === !0) ? e(!0) : s(!1);
        });
      }),
      resetFields: () => {
        !r.model || t.forEach((e) => e.resetField());
      },
      clearValidate: () => {
        t.forEach((e) => e.clearValidate());
      }
    }), (e, s) => (i(), c("div", F, [
      n(f(v), {
        card: a.card,
        gap: a.gap
      }, {
        default: u(() => [
          p(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["card", "gap"])
    ]));
  }
});
export {
  P as default
};
