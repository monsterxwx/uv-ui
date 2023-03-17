import { ref as s, reactive as o, openBlock as n, createElementBlock as a, normalizeStyle as l, renderSlot as m } from "vue";
import { useParent as c } from "../packages/hooks/useContext.js";
import "./swipe-item.vue_vue_type_style_index_0_lang.js";
const f = {
  name: "UvSwipeItem"
}, w = /* @__PURE__ */ Object.assign(f, {
  setup(i) {
    const e = s(null), t = o({
      $el: e,
      transform: 0
    });
    return c("swipe", t), (r, p) => (n(), a("div", {
      class: "uv-swipe-item",
      style: l({ transform: `translateX(${t.transform}px)` }),
      ref_key: "swipeItemRef",
      ref: e
    }, [
      m(r.$slots, "default")
    ], 4));
  }
});
export {
  w as default
};
