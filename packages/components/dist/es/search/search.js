import { computed as b, openBlock as r, createElementBlock as u, normalizeStyle as n, createElementVNode as o, normalizeClass as p, unref as c, createVNode as d, createCommentVNode as y } from "vue";
import s from "../icon/index.js";
import "./search.vue_vue_type_style_index_0_lang.js";
const C = { class: "uv-search-content-input" }, B = ["value", "disabled", "placeholder"], V = {
  name: "UvSearch"
}, x = /* @__PURE__ */ Object.assign(V, {
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165"
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    searchBgColor: {
      type: String,
      default: "#f7f8fa"
    }
  },
  emits: ["update:modelValue", "clear", "focus", "blur"],
  setup(e, { emit: l }) {
    const i = e, f = b(() => [
      i.round ? "uv-search-content-round" : ""
    ]);
    function h() {
      l("update:modelValue", ""), l("clear");
    }
    function g(a) {
      const { value: t } = a.target;
      l("update:modelValue", t);
    }
    function m() {
      l("focus");
    }
    function v(a) {
      const { value: t } = a.target;
      l("blur", t);
    }
    return (a, t) => (r(), u("div", {
      class: "uv-search",
      style: n({ backgroundColor: e.bgColor })
    }, [
      o("div", {
        class: p(["uv-search-content", c(f)]),
        style: n({ backgroundColor: e.searchBgColor })
      }, [
        o("div", null, [
          d(c(s), {
            name: "search",
            size: "22",
            color: "#99a0ac"
          })
        ]),
        o("div", C, [
          o("input", {
            value: e.modelValue,
            style: n({ textAlign: e.inputAlign, backgroundColor: e.searchBgColor }),
            disabled: e.disabled,
            onInput: g,
            onFocus: m,
            onBlur: v,
            placeholder: e.placeholder
          }, null, 44, B)
        ]),
        e.clearable && e.modelValue ? (r(), u("div", {
          key: 0,
          onClick: h,
          class: "uv-search-content-close"
        }, [
          d(c(s), {
            name: "error",
            size: "22",
            color: "#99a0ac"
          })
        ])) : y("", !0)
      ], 6)
    ], 4));
  }
});
export {
  x as default
};
