import t from "./button/index.js";
import { default as Jo } from "./button/index.js";
import e from "./input/index.js";
import { default as Lo } from "./input/index.js";
import m from "./icon/index.js";
import { default as Xo } from "./icon/index.js";
import u from "./cell/index.js";
import { default as Zo } from "./cell/index.js";
import a from "./cell-group/index.js";
import { default as $o } from "./cell-group/index.js";
import f from "./overlay/index.js";
import { default as rr } from "./overlay/index.js";
import p from "./popup/index.js";
import { default as er } from "./popup/index.js";
import v from "./toast/index.js";
import { default as ur } from "./toast/index.js";
import i from "./message/index.js";
import { default as fr } from "./message/index.js";
import l from "./checkbox/index.js";
import { default as vr } from "./checkbox/index.js";
import s from "./checkbox-group/index.js";
import { default as lr } from "./checkbox-group/index.js";
import d from "./radio/index.js";
import { default as dr } from "./radio/index.js";
import x from "./radio-group/index.js";
import { default as Sr } from "./radio-group/index.js";
import S from "./num-input/index.js";
import { default as nr } from "./num-input/index.js";
import c from "./picker/index.js";
import { default as Cr } from "./picker/index.js";
import n from "./switch/index.js";
import { default as hr } from "./switch/index.js";
import I from "./search/index.js";
import { default as Tr } from "./search/index.js";
import C from "./slider/index.js";
import { default as wr } from "./slider/index.js";
import b from "./stepper/index.js";
import { default as Pr } from "./stepper/index.js";
import h from "./action-sheet/index.js";
import { default as kr } from "./action-sheet/index.js";
import B from "./dialog/index.js";
import { default as Dr } from "./dialog/index.js";
import T from "./swipe-cell/index.js";
import { default as Wr } from "./swipe-cell/index.js";
import G from "./rate/index.js";
import { default as yr } from "./rate/index.js";
import w from "./collapse/index.js";
import { default as Mr } from "./collapse/index.js";
import N from "./collapse-item/index.js";
import { default as Ur } from "./collapse-item/index.js";
import P from "./divider/index.js";
import { default as jr } from "./divider/index.js";
import g from "./popover/index.js";
import { default as zr } from "./popover/index.js";
import k from "./water-waves/index.js";
import { default as Jr } from "./water-waves/index.js";
import R from "./tab/index.js";
import { default as Lr } from "./tab/index.js";
import D from "./swipe/index.js";
import { default as Xr } from "./swipe/index.js";
import F from "./swipe-item/index.js";
import { default as Zr } from "./swipe-item/index.js";
import W from "./grid/index.js";
import { default as $r } from "./grid/index.js";
import V from "./grid-item/index.js";
import { default as rt } from "./grid-item/index.js";
import y from "./notice-bar/index.js";
import { default as et } from "./notice-bar/index.js";
import A from "./nav-bar/index.js";
import { default as ut } from "./nav-bar/index.js";
import M from "./tab-bar/index.js";
import { default as ft } from "./tab-bar/index.js";
import O from "./tab-bar-item/index.js";
import { default as vt } from "./tab-bar-item/index.js";
import U from "./count-to/index.js";
import { default as lt } from "./count-to/index.js";
import E from "./select/index.js";
import { default as dt } from "./select/index.js";
import j from "./side-bar/index.js";
import { default as St } from "./side-bar/index.js";
import q from "./pagination/index.js";
import { default as nt } from "./pagination/index.js";
import z from "./steps/index.js";
import { default as Ct } from "./steps/index.js";
import H from "./steps-item/index.js";
import { default as ht } from "./steps-item/index.js";
import J from "./form/index.js";
import { default as Tt } from "./form/index.js";
import K from "./form-item/index.js";
import { default as wt } from "./form-item/index.js";
import L from "./table/index.js";
import { default as Pt } from "./table/index.js";
const Q = [
  t,
  e,
  m,
  u,
  a,
  f,
  p,
  v,
  i,
  l,
  s,
  d,
  x,
  S,
  c,
  n,
  I,
  C,
  b,
  h,
  B,
  T,
  G,
  w,
  N,
  P,
  g,
  k,
  R,
  D,
  F,
  W,
  V,
  y,
  A,
  M,
  O,
  U,
  E,
  j,
  q,
  z,
  H,
  J,
  K,
  L
], qo = (r) => {
  Q.forEach((o) => {
    r.component(o.name, o);
  });
};
export {
  fr as Message,
  ur as Toast,
  qo as default,
  Dr as showDialog,
  kr as uvActionSheet,
  Jo as uvButton,
  Zo as uvCell,
  $o as uvCellGroup,
  vr as uvCheckbox,
  lr as uvCheckboxGroup,
  Mr as uvCollapse,
  Ur as uvCollapseItem,
  lt as uvCountTo,
  jr as uvDivider,
  Tt as uvForm,
  wt as uvFormItem,
  $r as uvGrid,
  rt as uvGridItem,
  Xo as uvIcon,
  Lo as uvInput,
  ut as uvNavBar,
  et as uvNoticeBar,
  nr as uvNumInput,
  rr as uvOverlay,
  nt as uvPagination,
  Cr as uvPicker,
  zr as uvPopover,
  er as uvPopup,
  dr as uvRadio,
  Sr as uvRadioGroup,
  yr as uvRate,
  Tr as uvSearch,
  dt as uvSelect,
  St as uvSideBar,
  wr as uvSlider,
  Pr as uvStepper,
  Ct as uvSteps,
  ht as uvStepsItem,
  Xr as uvSwipe,
  Wr as uvSwipeCell,
  Zr as uvSwipeItem,
  hr as uvSwitch,
  Lr as uvTab,
  ft as uvTabBar,
  vt as uvTabBarItem,
  Pt as uvTable,
  Jr as uvWaterWaves
};
