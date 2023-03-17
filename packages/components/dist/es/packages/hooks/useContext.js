import { ref as r, provide as l, inject as s, onMounted as u, onBeforeUnmount as t } from "vue";
function a(i, d = {}) {
  const e = [], n = r(0);
  return l(i, { addField: (o) => {
    e.push(o), n.value++;
  }, removeField: (o) => {
    e.splice(e.indexOf(o), 1), n.value--;
  }, fields: e, childrenNum: n, ...d }), {
    fields: e,
    childrenNum: n
  };
}
function m(i, d) {
  const e = s(i, {}), n = r(null);
  return u(() => {
    e.props && (e.addField(d), n.value = e.fields.indexOf(d));
  }), t(() => {
    e.props && e.removeField(d);
  }), {
    ...e,
    index: n
  };
}
export {
  a as useChildren,
  m as useParent
};
