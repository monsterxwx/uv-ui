import { reactive as x, ref as l, onMounted as I, computed as g, openBlock as _, createElementBlock as y, createElementVNode as S, normalizeStyle as T, unref as X, renderSlot as k } from "vue";
import { useChildren as N } from "../packages/hooks/useContext.js";
import { useTouch as R } from "../packages/hooks/useTouch.js";
import "./swipe.vue_vue_type_style_index_0_lang.js";
const b = {
  name: "UvSwipe"
}, W = /* @__PURE__ */ Object.assign(b, {
  props: {
    autoplay: {
      type: [Number, String]
    },
    initialSwipe: {
      type: [Number, String],
      default: 0
    },
    loop: {
      type: Boolean,
      default: !0
    }
  },
  setup(d) {
    const f = d, e = x({
      duration: 0,
      activeIndex: 0,
      width: 0,
      moving: !1
    }), u = l(null), v = l(null), { childrenNum: a, fields: n } = N("swipe", { props: f });
    I(() => {
      e.width = u.value.offsetWidth;
    });
    const s = g(() => a.value * e.width), r = R(), o = l(0);
    let c = null;
    function m(t) {
      e.duration = 0.3, r.start(t), c = o.value;
    }
    function p(t) {
      r.move(t);
      const { deltaX: i } = r;
      e.moving || (i.value < 0 && e.activeIndex === a.value - 1 ? n[0].transform = s.value : i.value > 0 && e.activeIndex === 0 && (n[n.length - 1].transform = -s.value)), e.moving = !0, o.value = c + i.value;
    }
    function h(t) {
      e.moving = !1;
      const { deltaX: i } = r;
      -i.value > e.width / 8 ? e.activeIndex++ : i.value > e.width / 8 && e.activeIndex--, o.value = -e.width * e.activeIndex;
    }
    function w() {
      e.activeIndex < 0 ? (e.duration = 0, o.value = -e.width * (a.value - 1), n[n.length - 1].transform = 0, e.activeIndex = a.value - 1) : e.activeIndex > a.value - 1 ? (e.duration = 0, e.activeIndex = 0, o.value = 0, n[0].transform = 0) : n.forEach((t) => {
        t.transform = 0;
      });
    }
    return (t, i) => (_(), y("div", {
      class: "uv-swipe",
      ref_key: "swiperRef",
      ref: u
    }, [
      S("div", {
        onTouchstart: m,
        onTouchmove: p,
        onTouchend: h,
        onTransitionend: w,
        ref_key: "swipeListRef",
        ref: v,
        class: "uv-swipe-list",
        style: T({ width: `${X(s)}px`, transform: `translateX(${o.value}px)`, transitionDuration: e.duration + "s" })
      }, [
        k(t.$slots, "default")
      ], 36)
    ], 512));
  }
});
export {
  W as default
};
