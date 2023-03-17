import { reactive as x, computed as D, watch as y, onMounted as A, onUnmounted as N, openBlock as T, createElementBlock as h, normalizeStyle as k, toDisplayString as B } from "vue";
import { cancelAnimationFrame as p, requestAnimationFrame as f } from "../packages/utils/index.js";
const v = {
  name: "UvCountTo"
}, P = /* @__PURE__ */ Object.assign(v, {
  props: {
    start: {
      type: Number,
      required: !1,
      default: 0
    },
    end: {
      type: Number,
      required: !1,
      default: 0
    },
    duration: {
      type: Number,
      required: !1,
      default: 5e3
    },
    autoPlay: {
      type: Boolean,
      required: !1,
      default: !0
    },
    decimals: {
      type: Number,
      required: !1,
      default: 0,
      validator(r) {
        return r >= 0;
      }
    },
    decimal: {
      type: String,
      required: !1,
      default: "."
    },
    separator: {
      type: String,
      required: !1,
      default: ","
    },
    prefix: {
      type: String,
      required: !1,
      default: ""
    },
    suffix: {
      type: String,
      required: !1,
      default: ""
    },
    useEasing: {
      type: Boolean,
      required: !1,
      default: !0
    },
    easingFn: {
      type: Function,
      default(r, i, n, e) {
        return n * (-Math.pow(2, -10 * r / e) + 1) * 1024 / 1023 + i;
      }
    },
    fontSize: {
      type: String
    },
    bold: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String
    }
  },
  emits: ["onMountedcallback", "callback"],
  setup(r, { expose: i, emit: n }) {
    const e = r, S = (a) => !isNaN(parseFloat(a)), s = (a) => {
      a = a.toFixed(e.default), a += "";
      const l = a.split(".");
      let o = l[0];
      const q = l.length > 1 ? e.decimal + l[1] : "", m = /(\d+)(\d{3})/;
      if (e.separator && !S(e.separator))
        for (; m.test(o); )
          o = o.replace(m, "$1" + e.separator + "$2");
      return e.prefix + o + q + e.suffix;
    }, t = x({
      localStart: e.start,
      displayValue: s(e.start),
      printVal: null,
      paused: !1,
      localDuration: e.duration,
      startTime: null,
      timestamp: null,
      remaining: null,
      rAF: null
    }), u = D(() => e.start > e.end), c = () => {
      t.localStart = e.start, t.startTime = null, t.localDuration = e.duration, t.paused = !1, t.rAF = f(d);
    };
    y(() => e.start, () => {
      e.autoPlay && c();
    }), y(() => e.end, () => {
      e.autoPlay && c();
    }), A(() => {
      e.autoPlay && c(), n("onMountedcallback");
    });
    const g = () => {
      p(t.rAF);
    }, V = () => {
      t.startTime = null, t.localDuration = +t.remaining, t.localStart = +t.printVal, f(d);
    }, F = () => {
      t.paused ? (V(), t.paused = !1) : (g(), t.paused = !0);
    }, b = () => {
      t.startTime = null, p(t.rAF), t.displayValue = s(e.start);
    }, d = (a) => {
      t.startTime || (t.startTime = a), t.timestamp = a;
      const l = a - t.startTime;
      t.remaining = t.localDuration - l, e.useEasing ? u.value ? t.printVal = t.localStart - e.easingFn(l, 0, t.localStart - e.end, t.localDuration) : t.printVal = e.easingFn(l, t.localStart, e.end - t.localStart, t.localDuration) : u.value ? t.printVal = t.localStart - (t.localStart - e.end) * (l / t.localDuration) : t.printVal = t.localStart + (e.end - t.localStart) * (l / t.localDuration), u.value ? t.printVal = t.printVal < e.end ? e.end : t.printVal : t.printVal = t.printVal > e.end ? e.end : t.printVal, t.displayValue = s(t.printVal), l < t.localDuration ? t.rAF = f(d) : n("callback");
    };
    return N(() => {
      p(t.rAF);
    }), i({
      pauseResume: F,
      reset: b
    }), (a, l) => (T(), h("span", {
      class: "uv-count-to",
      style: k({
        fontSize: r.fontSize,
        fontWeight: r.bold ? "700" : "500",
        color: r.color
      })
    }, B(t.displayValue), 5));
  }
});
export {
  P as default
};
