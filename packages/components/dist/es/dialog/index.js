import l from "./dialog.js";
import { createVNode as s, render as c } from "vue";
const t = (o) => {
  const e = document.createElement("div");
  return document.body.appendChild(e), new Promise((a, i) => {
    const r = s(l, { ...o, submitCallback: (n) => {
      n("confim") && (setTimeout(() => {
        c(null, e), document.body.removeChild(e);
      }, 300), a());
    }, cancelCallback: (n) => {
      n("cancle") && (setTimeout(() => {
        c(null, e), document.body.removeChild(e);
      }, 300), i(new Error("cancle")));
    } });
    c(r, e);
  });
};
t.install = (o) => {
  o.component(l.name, t);
};
export {
  t as default
};
