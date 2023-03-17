import { watch as b, ref as s, openBlock as d, createElementBlock as p, createElementVNode as a, renderSlot as m, createVNode as h, Transition as C, withCtx as V, withDirectives as N, normalizeClass as y, Fragment as O, renderList as B, toDisplayString as x, vShow as P, unref as R } from "vue";
import A from "../overlay/index.js";
import "./popover.vue_vue_type_style_index_0_lang.js";
const S = { class: "uv-popover-content" }, $ = ["onClick"], D = { class: "uv-popover-content-item-text" }, E = {
  name: "UvPopover"
}, F = /* @__PURE__ */ Object.assign(E, {
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    list: {
      type: Array
    },
    keyName: {
      type: String
    },
    closeOnClickAction: {
      type: Boolean,
      default: !0
    },
    closeOnClickOutside: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: r }) {
    const i = t;
    b(() => i.modelValue, (e) => {
      w();
    });
    const f = s(null), l = s(null), c = s("bottom"), u = s("left"), k = () => {
      i.closeOnClickOutside && r("update:modelValue", !1);
    }, w = () => {
      const { top: e, left: v, bottom: o, right: n } = f.value.children[0].getBoundingClientRect();
      v > screen.availWidth / 2 ? (u.value = "right", l.value.style.right = screen.availWidth - n + "px") : (u.value = "left", l.value.style.left = v + "px"), e > screen.availHeight / 2 ? (c.value = "top", l.value.style.bottom = Number(screen.availHeight - e + 10) + "px") : (c.value = "bottom", l.value.style.top = Number(o + 10) + "px");
    }, g = (e) => {
      e.disabled || (r("change", e), i.closeOnClickAction && r("update:modelValue", !1));
    };
    return (e, v) => (d(), p("div", null, [
      a("span", {
        style: { display: "inline-block" },
        ref_key: "contentRef",
        ref: f
      }, [
        m(e.$slots, "reference")
      ], 512),
      h(C, { name: "popover" }, {
        default: V(() => [
          N(a("div", {
            class: "uv-popover",
            ref_key: "popoverRef",
            ref: l,
            style: {}
          }, [
            a("div", {
              class: y([
                c.value === "bottom" ? "uv-popover-arrow-top" : "uv-popover-arrow-bottom",
                u.value === "left" ? "uv-popover-arrow-left" : "uv-popover-arrow-right"
              ])
            }, null, 2),
            a("div", S, [
              m(e.$slots, "default", {}, () => [
                (d(!0), p(O, null, B(t.list, (o, n) => (d(), p("div", {
                  class: y(["uv-popover-content-item", o.disabled ? "uv-popover-content-item-disabled" : ""]),
                  key: t.keyName ? o[t.keyName] : n,
                  onClick: (H) => g(o)
                }, [
                  a("div", D, x(t.keyName ? o[t.keyName] : n), 1)
                ], 10, $))), 128))
              ])
            ])
          ], 512), [
            [P, t.modelValue]
          ])
        ]),
        _: 3
      }),
      h(R(A), {
        show: t.modelValue,
        overlay: !1,
        onClick: k
      }, null, 8, ["show"])
    ]));
  }
});
export {
  F as default
};
