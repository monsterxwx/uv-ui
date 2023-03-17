import s from "./toast.js";
import { createVNode as i, render as d } from "vue";
const l = {
  duration: 1600
}, m = (o) => {
  const t = document.createElement("div"), n = { ...l, ...o }, r = i(s, n);
  d(r, t), document.body.appendChild(t);
  const a = () => {
    var c;
    const e = r.el;
    if (e.querySelector(".uv-toast-value")) {
      (c = e.querySelector(".uv-toast-value")) == null || c.classList.add("remove");
      const u = setTimeout(() => {
        d(null, t), document.body.removeChild(t), clearTimeout(u);
      }, 500);
    }
  };
  if (n.duration) {
    const e = setTimeout(() => {
      a(), clearTimeout(e);
    }, n.duration);
  }
  return {
    clear: a
  };
};
m.install = (o) => {
  o.component(s.name, m);
};
export {
  m as default
};
