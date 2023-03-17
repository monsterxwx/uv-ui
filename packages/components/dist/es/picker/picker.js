import { ref as m, watch as N, computed as $, openBlock as h, createBlock as x, unref as S, mergeProps as E, withCtx as I, createElementVNode as o, toDisplayString as d, renderSlot as M, normalizeStyle as w, createElementBlock as V, Fragment as O, renderList as R } from "vue";
import U from "../popup/index.js";
import "./picker.vue_vue_type_style_index_0_lang.js";
import j from "../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js";
const q = { class: "uv-picker" }, z = { class: "uv-picker-title" }, A = { class: "uv-picker-title-center" }, D = /* @__PURE__ */ o("div", { class: "uv-picker-content-wrapper" }, null, -1), F = {
  name: "UvPicker"
}, Q = /* @__PURE__ */ Object.assign(F, {
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    title: {
      type: String
    },
    leftName: {
      type: String,
      default: "\u53D6\u6D88"
    },
    rightName: {
      type: String,
      default: "\u786E\u5B9A"
    },
    list: {
      type: Array,
      required: !0
    },
    keyName: {
      type: String
    }
  },
  emits: ["update:show", "update:modelValue", "change", "cancle", "confim"],
  setup(u, { emit: i }) {
    const s = u, r = m(!1);
    N(() => s.show, (e) => {
      r.value = e;
    }), N(() => r.value, (e) => {
      i("update:show", e);
    });
    const l = m(null), b = $(() => typeof l.value == "number" ? {
      transform: `translate(-50%, ${l.value}px)`
    } : {
      transform: "translate(-50%, -18px)"
    }), t = m(0), p = ["gray", "#ccc", "#ddd", "#eee"], k = [0.96, 0.9, 0.88, 0.84];
    function B(e) {
      let a = "#000", n = 1;
      const c = p.length - 1;
      if (e > t.value) {
        const v = e - t.value > c ? c : e - t.value - 1;
        a = p[v], n = k[v];
      } else if (e < t.value) {
        const v = t.value - e > c ? c : t.value - e - 1;
        a = p[v], n = k[v];
      }
      return { color: a, transform: `scale(${n})` };
    }
    function g() {
      return s.keyName ? s.list[t.value][s.keyName] : s.list[t.value];
    }
    let y = null;
    function Y(e) {
      const a = l.value || -18;
      y = e.touches[0].clientY - a;
    }
    function H(e) {
      P(e);
    }
    function C() {
      setTimeout(() => {
        l.value = -t.value * 36 - 18;
      }, 100);
    }
    const f = m(null), P = j((e) => {
      l.value = e.touches[0].clientY - y, l.value > 36 ? l.value = 36 : l.value < -f.value.offsetHeight - 36 && (l.value = -f.value.offsetHeight - 36), t.value = Math.abs(Math.ceil(l.value / 36)), t.value <= 0 || l.value > 0 ? t.value = 0 : (t.value > s.list.length - 1 || l.value < -f.value.offsetHeight - 18) && (t.value = s.list.length - 1), i("change", g());
    });
    function T() {
      i("change"), r.value = !1;
    }
    function _() {
      i("confim"), i("update:modelValue", g()), r.value = !1;
    }
    return (e, a) => (h(), x(S(U), E({
      modelValue: r.value,
      "onUpdate:modelValue": a[0] || (a[0] = (n) => r.value = n),
      position: "bottom"
    }, e.$attrs), {
      default: I(() => [
        o("div", q, [
          o("div", z, [
            o("div", {
              class: "uv-picker-title-left",
              onClick: T
            }, d(u.leftName), 1),
            M(e.$slots, "title", {}, () => [
              o("div", A, d(u.title), 1)
            ]),
            o("div", {
              class: "uv-picker-title-right",
              onClick: _
            }, d(u.rightName), 1)
          ]),
          o("div", {
            class: "uv-picker-content",
            onTouchstart: Y,
            onTouchmove: H,
            onTouchend: C
          }, [
            D,
            o("ul", {
              class: "uv-picker-content-box",
              ref_key: "pickerBoxRef",
              ref: f,
              style: w(S(b))
            }, [
              (h(!0), V(O, null, R(u.list, (n, c) => (h(), V("li", {
                class: "uv-picker-content-item",
                key: u.keyName || c,
                style: w(B(Number(c)))
              }, d(n[u.keyName] || n), 5))), 128))
            ], 4)
          ], 32)
        ])
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
});
export {
  Q as default
};
