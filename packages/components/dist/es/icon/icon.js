import { computed as o, openBlock as n, createElementBlock as r, normalizeStyle as l, unref as c, createElementVNode as u, normalizeClass as d, toDisplayString as m, createCommentVNode as p } from "vue";
import "./iconfont.js";
import "./icon.vue_vue_type_style_index_0_lang.js";
const f = { class: "uv-icon" }, g = ["xlink:href"], v = {
  name: "UvIcon"
}, k = /* @__PURE__ */ Object.assign(v, {
  props: {
    name: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: [String, Number],
      default: "14"
    },
    dot: {
      type: Boolean,
      default: !1
    },
    badge: {
      type: [String, Number]
    }
  },
  setup(t) {
    const e = t, s = o(() => `#uv-${e.name}`), i = o(() => ({
      color: e.color,
      fontSize: e.size + "px"
    })), a = o(() => ({
      "uv-icon-dot": e.dot && !e.badge
    }));
    return (y, _) => (n(), r("div", f, [
      (n(), r("svg", {
        class: "uv-icon-svg",
        style: l(c(i)),
        "aria-hidden": "true"
      }, [
        u("use", { "xlink:href": c(s) }, null, 8, g)
      ], 4)),
      t.dot ? (n(), r("div", {
        key: 0,
        class: d(["uv-icon-info", c(a)])
      }, m(t.badge), 3)) : p("", !0)
    ]));
  }
});
export {
  k as default
};
