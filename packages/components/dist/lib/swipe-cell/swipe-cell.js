"use strict";const e=require("vue"),C=require("../packages/hooks/useTouch.js");require("./swipe-cell.vue_vue_type_style_index_0_lang.js");const k={class:"uv-swipe-cell"},w={class:"left-content"},B={class:"uv-swipe-cell-content"},E={class:"uv-swipe-cell-content-default"},N={class:"right-content"},T={name:"UvSwipeCell"},V=Object.assign(T,{props:{left:{type:Boolean,default:!1},right:{type:Boolean,default:!0},selectText:{type:String,default:"\u9009\u62E9"},selectBgColor:{type:String,default:"#1989fa"},cancleText:{type:String,default:"\u5220\u9664"},cancleBgColor:{type:String,default:"#ee0a24"},confimText:{type:String,default:"\u786E\u5B9A"},confimBgColor:{type:String,default:"#1989fa"},title:{type:String,default:"\u6807\u9898"},content:{type:String,default:"\u5185\u5BB9"}},emits:["cancle","confim","select"],setup(t,{emit:i}){const r=t,c=e.ref(!1),s=e.ref(null),u=e.ref(null),d=e.computed(()=>s.value?s.value.clientWidth:0),f=e.computed(()=>u.value?u.value.clientWidth:0),o=e.ref(0),a=C.useTouch();function v(n){a.start(n)}function m(n){const{deltaX:l}=a;if(a.move(n),l.value<0){if(r.right||c.value){if(o.value===-f.value)return;o.value=Math.abs(l.value)<50?l.value:-f.value}}else if(l.value>0&&(r.left||c.value)){if(o.value===d.value)return;o.value=Math.abs(l.value)<50?l.value:d.value}Math.abs(o.value)>0?c.value=!0:c.value=!1}function g(n){const{deltaX:l}=a;Math.abs(l.value)<50&&(o.value=0)}function h(){i("cancle")}function p(){i("confim")}function y(){i("select")}const S=e.computed(()=>({transform:`translate3d(${o.value}px, 0, 0)`}));return(n,l)=>(e.openBlock(),e.createElementBlock("div",k,[e.createElementVNode("div",{class:"uv-swipe-cell-wrapper",onTouchstart:v,onTouchmove:m,onTouchend:g,style:e.normalizeStyle(e.unref(S))},[t.left?(e.openBlock(),e.createElementBlock("div",{key:0,class:"uv-swipe-cell-left uv-swipe-cell-position",ref_key:"swipeCellLeftRef",ref:s},[e.renderSlot(n.$slots,"left",{},()=>[e.createElementVNode("div",w,[e.createElementVNode("div",{class:"left-content-item-common",style:e.normalizeStyle({backgroundColor:t.selectBgColor}),onClick:y},e.toDisplayString(t.selectText),5)])])],512)):e.createCommentVNode("",!0),e.createElementVNode("div",B,[e.renderSlot(n.$slots,"default",{},()=>[e.createElementVNode("div",E,[e.createElementVNode("div",null,e.toDisplayString(t.title),1),e.createElementVNode("div",null,e.toDisplayString(t.content),1)])])]),t.right?(e.openBlock(),e.createElementBlock("div",{key:1,class:"uv-swipe-cell-right uv-swipe-cell-position",ref_key:"swipeCellRightRef",ref:u},[e.renderSlot(n.$slots,"right",{},()=>[e.createElementVNode("div",N,[e.createElementVNode("div",{class:"right-content-item-common",style:e.normalizeStyle({backgroundColor:t.cancleBgColor}),onClick:h},e.toDisplayString(t.cancleText),5),e.createElementVNode("div",{class:"right-content-item-common",style:e.normalizeStyle({backgroundColor:t.confimBgColor}),onClick:p},e.toDisplayString(t.confimText),5)])])],512)):e.createCommentVNode("",!0)],36)]))}});module.exports=V;