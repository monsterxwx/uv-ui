"use strict";const e=require("vue"),b=require("../packages/utils/index.js");require("./tab.vue_vue_type_style_index_0_lang.js");const k={class:"uv-tab-wrap"},g=["onClick"],h={name:"UvTab"},C=Object.assign(h,{props:{acitveIndex:{type:Number,default:0},bgColor:{type:String},color:{type:String},activeColor:{type:String},scroll:{type:Boolean,default:!1},lineHeight:{type:String},lineColor:{type:String},list:{type:Array},keyName:{type:String},shrink:{type:Boolean,default:!1}},emits:["change"],setup(t,{emit:y}){const u=t,i=e.ref(null),s=e.ref(null),c=e.ref(null),o=e.ref(0);e.watch(()=>u.acitveIndex,l=>{o.value=l},{immediate:!0}),e.watch(o,l=>{const{offsetWidth:a,offsetLeft:n}=c.value[l];if(v(a,n),u.scroll){const r=i.value,f=n-(r.offsetWidth-a)/2;b.scrollLeftTo(r,f)}});const m=l=>{y("change",l),o.value=l};e.onMounted(()=>{d()});const d=()=>{c.value=i.value.querySelectorAll(".uv-tab-item");const{offsetWidth:l,offsetLeft:a}=c.value[o.value];setTimeout(()=>{s.value.style.transition="transform 0.3s"},300),v(l,a)},v=(l,a)=>{s.value.style.width=`${l}px`,s.value.style.transform=`translateX(${a}px)`};return(l,a)=>(e.openBlock(),e.createElementBlock("div",k,[e.createElementVNode("div",{class:e.normalizeClass(["uv-tab",[t.scroll?"uv-tab-scroll":"",t.shrink?"uv-tab-shrink":""]]),style:e.normalizeStyle({backgroundColor:t.bgColor}),ref_key:"uvTabRef",ref:i},[e.createElementVNode("div",{ref_key:"uvTabLineRef",ref:s,class:"uv-tab-line",style:e.normalizeStyle({height:t.lineHeight,backgroundColor:t.lineColor})},null,4),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.list,(n,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["uv-tab-item",o.value===r?"uv-tab-acitve-item":""]),onClick:f=>m(r),style:e.normalizeStyle({color:o.value===r?t.activeColor:t.color}),key:t.keyName?n[t.keyName]:n},[e.createElementVNode("div",null,e.toDisplayString(t.keyName?n[t.keyName]:n),1)],14,g))),128))],6)]))}});module.exports=C;