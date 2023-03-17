import { inject as S, ref as i, onMounted as x, openBlock as C, createElementBlock as V, normalizeStyle as n, createElementVNode as u, normalizeClass as N, withModifiers as k, renderSlot as z } from "vue";
import { useTouch as T } from "../packages/hooks/useTouch.js";
import "./slider.vue_vue_type_style_index_0_lang.js";
const B = ["onTouchmove"], R = {
  name: "UvSlider"
}, E = /* @__PURE__ */ Object.assign(R, {
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    inactiveColor: {
      type: String,
      default: "#ebedf0"
    },
    activeColor: {
      type: String,
      default: "#1989fa"
    },
    barHeight: {
      type: [String, Number],
      default: 3
    },
    buttonSize: {
      type: [String, Number],
      default: 24
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  emits: ["update:modelValue", "change", "drag-start"],
  setup(e, { emit: o }) {
    const t = e, r = T(), { props: f, validateBlurOrChange: m } = S("form-item", {}), d = i(null), h = i(null), s = i("");
    x(() => {
      s.value = d.value.offsetWidth;
    });
    function v(l) {
      r.start(l), o("drag-start", l);
    }
    function b(l) {
      if (t.disabled)
        return;
      r.move(l);
      const { deltaX: c, startX: p } = r, y = Number(p.value + c.value);
      let a = parseInt(y / s.value * 100);
      a < t.min ? a = t.min : a > t.max && (a = t.max), o("update:modelValue", a);
    }
    function g() {
      o("change", t.modelValue), f && m("change");
    }
    return (l, c) => (C(), V("div", {
      class: "uv-slider",
      style: n({ backgroundColor: e.inactiveColor, height: e.barHeight + "px" }),
      ref_key: "sliderRef",
      ref: d
    }, [
      u("div", {
        style: n({ width: `${e.modelValue}%`, backgroundColor: e.activeColor, height: e.barHeight + "px" }),
        class: N(["uv-slider-value", e.disabled ? "uv-slider-value-disabled" : ""])
      }, [
        u("div", {
          class: "uv-slider-circle",
          ref_key: "sliderValueRef",
          ref: h,
          onTouchstart: v,
          onTouchmove: k(b, ["stop"]),
          onTouchend: g
        }, [
          z(l.$slots, "button", {}, () => [
            u("div", {
              class: "uv-slider-circle-content",
              style: n({ width: e.buttonSize + "px", height: e.buttonSize + "px" })
            }, null, 4)
          ])
        ], 40, B)
      ], 6)
    ], 4));
  }
});
export {
  E as default
};
