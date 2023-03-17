import d from "./message.js";
import { createVNode as i, render as a } from "vue";
const l = {
  duration: 3e3
}, m = (o) => {
  const e = document.createElement("div"), n = { ...l, ...o }, r = i(d, n);
  a(r, e), document.body.appendChild(e);
  const s = () => {
    var c;
    const t = r.el;
    if (t.querySelector(".uv-message-value")) {
      (c = t.querySelector(".uv-message-value")) == null || c.classList.add("remove");
      const u = setTimeout(() => {
        a(null, e), document.body.removeChild(e), clearTimeout(u);
      }, 500);
    }
  };
  if (n.duration) {
    const t = setTimeout(() => {
      s(), clearTimeout(t);
    }, n.duration);
  }
  return {
    close: s
  };
};
m.install = (o) => {
  o.component(d.name, m);
};
export {
  m as default
};
