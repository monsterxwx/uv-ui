import { ref as C, onMounted as g, openBlock as a, createBlock as b, unref as k, withCtx as m, createElementVNode as l, createVNode as h, Transition as w, withDirectives as S, toDisplayString as i, createElementBlock as u, normalizeClass as s, normalizeStyle as v, createCommentVNode as r, vShow as D } from "vue";
import O from "../overlay/index.js";
import "./dialog.vue_vue_type_style_index_0_lang.js";
const x = { class: "uv-dialog-wrapper" }, T = { class: "uv-dialog" }, N = { class: "uv-dialog-title" }, V = { class: "uv-dialog-content" }, z = {
  key: 0,
  class: "uv-dialog-bottom-button"
}, E = {
  name: "ShowDialog"
}, M = /* @__PURE__ */ Object.assign(E, {
  props: {
    title: {
      type: String
    },
    message: {
      type: String,
      default: ""
    },
    showConfirmButton: {
      type: Boolean,
      default: !0
    },
    confirmButtonText: {
      type: String,
      default: "\u786E\u8BA4"
    },
    confirmButtonColor: {
      type: String,
      default: "#1989fa"
    },
    confirmButtonDisabled: {
      type: Boolean,
      default: !1
    },
    showCancleButton: {
      type: Boolean,
      default: !1
    },
    cancleButtonText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    cancleButtonColor: {
      type: String,
      default: "#000000"
    },
    cancelButtonDisabled: {
      type: Boolean,
      default: !1
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    },
    submitCallback: {
      type: Function
    },
    cancelCallback: {
      type: Function
    }
  },
  emits: ["cancle", "confim"],
  setup(t, { emit: d }) {
    const c = t, e = C(!1);
    g(() => {
      e.value = !0;
    });
    const B = () => {
      c.closeOnClickOverlay && setTimeout(() => {
        e.value = !1;
      }, 0);
    }, f = (o) => c.confirmButtonDisabled && o === "confim" || c.cancelButtonDisabled && o === "cancle" ? !1 : (o === "confim" && d("confim"), o === "cancle" && d("cancle"), setTimeout(() => {
      e.value = !1;
    }, 0), !0);
    return (o, n) => (a(), b(k(O), {
      show: e.value,
      overlay: t.overlay,
      onClick: B
    }, {
      default: m(() => [
        l("div", x, [
          h(w, { name: "dialog" }, {
            default: m(() => [
              S(l("div", T, [
                l("div", N, i(t.title), 1),
                l("div", V, i(t.message), 1),
                t.showConfirmButton || t.showCancleButton ? (a(), u("div", z, [
                  l("div", {
                    class: s(t.showConfirmButton && !t.showCancleButton ? "only-confim" : "confim-and-cancle")
                  }, [
                    t.showCancleButton ? (a(), u("div", {
                      key: 0,
                      style: v({ color: t.cancleButtonColor }),
                      onClick: n[0] || (n[0] = (y) => t.cancelCallback(f)),
                      class: s(["uv-dialog-cancle", t.cancelButtonDisabled ? "uv-dialog-button-undisabled" : ""])
                    }, i(t.cancleButtonText), 7)) : r("", !0),
                    t.showConfirmButton ? (a(), u("div", {
                      key: 1,
                      onClick: n[1] || (n[1] = (y) => t.submitCallback(f)),
                      style: v({ color: t.confirmButtonColor }),
                      class: s(["uv-dialog-confim", t.confirmButtonDisabled ? "uv-dialog-button-undisabled" : ""])
                    }, i(t.confirmButtonText), 7)) : r("", !0)
                  ], 2)
                ])) : r("", !0)
              ], 512), [
                [D, e.value]
              ])
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["show", "overlay"]));
  }
});
export {
  M as default
};
