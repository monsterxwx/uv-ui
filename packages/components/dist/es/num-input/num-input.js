import { ref as i, watch as d, computed as y, openBlock as r, createElementBlock as c, createVNode as _, unref as p, withCtx as x, createElementVNode as a, Fragment as V, renderList as k, toDisplayString as w } from "vue";
import A from "../popup/index.js";
import "./num-input.vue_vue_type_style_index_0_lang.js";
const C = { class: "uv-num-input" }, N = { class: "uv-num-content" }, j = { class: "uv-num-content-left" }, b = ["onClick"], B = {
  name: "UvNumInput"
}, P = /* @__PURE__ */ Object.assign(B, {
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    maxlength: {
      type: Number,
      default: -1
    },
    extraKey: {
      type: String
    },
    diyArr: {
      type: Array
    }
  },
  emits: ["update:show", "update:modelValue", "change"],
  setup(m, { emit: u }) {
    const n = m, s = i(!1);
    d(() => n.show, (e) => {
      s.value = e;
    }), d(() => s.value, (e) => {
      u("update:show", e);
    });
    const v = y(() => {
      const e = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0", "."];
      return n.extraKey ? (e.splice(e.length - 1, 1), e.push(n.extraKey), e) : n.diyArr ? n.diyArr : e;
    });
    function f() {
      u("update:show", !1);
    }
    const t = i([]);
    function h(e) {
      if (u("change", e), n.maxlength === -1) {
        t.value.push(e);
        const o = t.value.join("");
        u("update:modelValue", o);
      } else if (t.value.length < n.maxlength) {
        t.value.push(e);
        const o = t.value.join("");
        u("update:modelValue", o);
      }
    }
    function g() {
      if (t.value.length > 0) {
        t.value.pop();
        const e = t.value.join("");
        u("update:modelValue", e);
      }
    }
    return (e, o) => (r(), c("div", C, [
      _(p(A), {
        modelValue: s.value,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => s.value = l),
        overlay: !1,
        "bg-color": "#f2f3f5"
      }, {
        default: x(() => [
          a("div", N, [
            a("div", j, [
              (r(!0), c(V, null, k(p(v), (l) => (r(), c("div", {
                class: "uv-num-content-left-item",
                onClick: (K) => h(l),
                key: l
              }, w(l), 9, b))), 128))
            ]),
            a("div", { class: "uv-num-content-right" }, [
              a("div", {
                onClick: g,
                class: "uv-num-content-right-item"
              }, " x "),
              a("div", {
                onClick: f,
                class: "uv-num-content-right-item uv-num-input-confim"
              }, " \u5B8C\u6210 ")
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
export {
  P as default
};
