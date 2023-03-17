import u from "../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get.js";
import d from "../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.js";
const x = (e, t, i) => ({
  get value() {
    return u(e, t, i);
  },
  set value(n) {
    d(e, t, n);
  }
}), f = (e, t, i) => {
  const n = e.indexOf(t);
  return n === -1 ? e : t === "-" && n !== 0 ? e.slice(0, n) : e.slice(0, n + 1) + e.slice(n).replace(i, "");
}, A = (e, t = !0, i = !0) => {
  t ? e = f(e, ".", /\./g) : e = e.split(".")[0], i ? e = f(e, "-", /-/g) : e = e.replace(/-/, "");
  const n = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(n, "");
}, F = (e) => (e.install = (t) => {
  t.component(e.name, e);
}, e);
let a = 0;
const l = "webkit moz ms o".split(" ");
let r, o;
const w = typeof window > "u";
if (w)
  r = function() {
  }, o = function() {
  };
else {
  r = window.requestAnimationFrame, o = window.cancelAnimationFrame;
  let e;
  for (let t = 0; t < l.length && !(r && o); t++)
    e = l[t], r = r || window[e + "RequestAnimationFrame"], o = o || window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
  (!r || !o) && (r = function(t) {
    const i = new Date().getTime(), n = Math.max(0, 16 - (i - a)), s = window.setTimeout(() => {
      t(i + n);
    }, n);
    return a = i + n, s;
  }, o = function(t) {
    window.clearTimeout(t);
  });
}
const T = (e, t, i = 0.3) => {
  let n = 0;
  const s = e.scrollLeft, c = i === 0 ? 1 : Math.round(i * 1e3 / 16);
  function m() {
    e.scrollLeft += (t - s) / c, ++n < c && w && r(m);
  }
  m();
};
export {
  o as cancelAnimationFrame,
  A as formatNumber,
  x as getProp,
  r as requestAnimationFrame,
  T as scrollLeftTo,
  f as trimExtraChar,
  F as withInstall
};
