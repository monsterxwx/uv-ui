import { openBlock as o, createElementBlock as a, normalizeStyle as u, Fragment as i, renderList as d, createBlock as f, unref as m } from "vue";
import s from "../icon/index.js";
import "./rate.vue_vue_type_style_index_0_lang.js";
const y = {
  name: "UvRate"
}, z = /* @__PURE__ */ Object.assign(y, {
  props: {
    modelValue: {
      type: Number
    },
    count: {
      type: Number,
      default: 5
    },
    gutter: {
      type: Number,
      default: 2
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: "star-fill"
    },
    size: {
      type: [String, Number],
      default: 22
    },
    color: {
      type: String,
      default: "#ffd21e"
    },
    voidColor: {
      type: String,
      default: "#c8c9cc"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const r = e, c = (t) => {
      r.readonly || (n("update:modelValue", t), n("change", t));
    };
    return (t, g) => (o(), a("div", {
      class: "uv-rate",
      style: u({ gap: e.gutter + "px" })
    }, [
      (o(!0), a(i, null, d(e.count, (l) => (o(), f(m(s), {
        key: l,
        onClick: (p) => c(l),
        size: e.size,
        name: e.icon,
        color: l <= e.modelValue ? e.color : e.voidColor
      }, null, 8, ["onClick", "size", "name", "color"]))), 128))
    ], 4));
  }
});
export {
  z as default
};
