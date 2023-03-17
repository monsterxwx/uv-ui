import { ref as r, watch as g, onMounted as L, openBlock as u, createElementBlock as v, createElementVNode as f, normalizeClass as h, normalizeStyle as y, Fragment as S, renderList as N, toDisplayString as x } from "vue";
import { scrollLeftTo as I } from "../packages/utils/index.js";
import "./tab.vue_vue_type_style_index_0_lang.js";
const B = { class: "uv-tab-wrap" }, R = ["onClick"], w = {
  name: "UvTab"
}, z = /* @__PURE__ */ Object.assign(w, {
  props: {
    acitveIndex: {
      type: Number,
      default: 0
    },
    bgColor: {
      type: String
    },
    color: {
      type: String
    },
    activeColor: {
      type: String
    },
    scroll: {
      type: Boolean,
      default: !1
    },
    lineHeight: {
      type: String
    },
    lineColor: {
      type: String
    },
    list: {
      type: Array
    },
    keyName: {
      type: String
    },
    shrink: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change"],
  setup(e, { emit: k }) {
    const m = e, s = r(null), i = r(null), c = r(null), n = r(0);
    g(() => m.acitveIndex, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), g(n, (t) => {
      const { offsetWidth: l, offsetLeft: a } = c.value[t];
      if (b(l, a), m.scroll) {
        const o = s.value, d = a - (o.offsetWidth - l) / 2;
        I(o, d);
      }
    });
    const C = (t) => {
      k("change", t), n.value = t;
    };
    L(() => {
      T();
    });
    const T = () => {
      c.value = s.value.querySelectorAll(".uv-tab-item");
      const { offsetWidth: t, offsetLeft: l } = c.value[n.value];
      setTimeout(() => {
        i.value.style.transition = "transform 0.3s";
      }, 300), b(t, l);
    }, b = (t, l) => {
      i.value.style.width = `${t}px`, i.value.style.transform = `translateX(${l}px)`;
    };
    return (t, l) => (u(), v("div", B, [
      f("div", {
        class: h(["uv-tab", [e.scroll ? "uv-tab-scroll" : "", e.shrink ? "uv-tab-shrink" : ""]]),
        style: y({ backgroundColor: e.bgColor }),
        ref_key: "uvTabRef",
        ref: s
      }, [
        f("div", {
          ref_key: "uvTabLineRef",
          ref: i,
          class: "uv-tab-line",
          style: y({ height: e.lineHeight, backgroundColor: e.lineColor })
        }, null, 4),
        (u(!0), v(S, null, N(e.list, (a, o) => (u(), v("div", {
          class: h(["uv-tab-item", n.value === o ? "uv-tab-acitve-item" : ""]),
          onClick: (d) => C(o),
          style: y({ color: n.value === o ? e.activeColor : e.color }),
          key: e.keyName ? a[e.keyName] : a
        }, [
          f("div", null, x(e.keyName ? a[e.keyName] : a), 1)
        ], 14, R))), 128))
      ], 6)
    ]));
  }
});
export {
  z as default
};
