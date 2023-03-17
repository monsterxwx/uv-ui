import { computed as a, openBlock as i, createElementBlock as c, normalizeStyle as s, unref as o, createElementVNode as n, renderSlot as w, createStaticVNode as p } from "vue";
import "./water-waves.vue_vue_type_style_index_0_lang.js";
const g = /* @__PURE__ */ p('<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 600 140" class="waves-item"><path d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 600 140" class="waves-item"><path d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 600 140" class="waves-item"><path d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z"></path></svg>', 3), d = [
  g
], u = {
  name: "UvWaterWaves"
}, y = /* @__PURE__ */ Object.assign(u, {
  props: {
    size: {
      type: String,
      default: "200px"
    },
    progress: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  setup(r) {
    const t = r, l = a(() => ({
      width: t.size,
      height: t.size
    })), v = a(() => {
      let e = t.progress;
      return e === 0 ? e = -4 : e === 100 && (e = 115), {
        "--progress": `${e}%`
      };
    });
    return (e, m) => (i(), c("div", {
      class: "uv-water-waves",
      style: s(o(l))
    }, [
      n("div", {
        class: "uv-water-waves-inner",
        style: s(o(v))
      }, d, 4),
      n("div", {
        class: "uv-water-waves-content",
        style: s({ color: r.color })
      }, [
        w(e.$slots, "default")
      ], 4)
    ], 4));
  }
});
export {
  y as default
};
