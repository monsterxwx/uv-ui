"use strict";const e=require("vue"),o=require("../icon/index.js");require("./search.vue_vue_type_style_index_0_lang.js");const f={class:"uv-search-content-input"},h=["value","disabled","placeholder"],v={name:"UvSearch"},g=Object.assign(v,{props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"\u8BF7\u8F93\u5165"},clearable:{type:Boolean,default:!1},round:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},inputAlign:{type:String,default:"left"},bgColor:{type:String,default:"#fff"},searchBgColor:{type:String,default:"#f7f8fa"}},emits:["update:modelValue","clear","focus","blur"],setup(l,{emit:a}){const c=l,r=e.computed(()=>[c.round?"uv-search-content-round":""]);function u(){a("update:modelValue",""),a("clear")}function d(t){const{value:n}=t.target;a("update:modelValue",n)}function s(){a("focus")}function i(t){const{value:n}=t.target;a("blur",n)}return(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:"uv-search",style:e.normalizeStyle({backgroundColor:l.bgColor})},[e.createElementVNode("div",{class:e.normalizeClass(["uv-search-content",e.unref(r)]),style:e.normalizeStyle({backgroundColor:l.searchBgColor})},[e.createElementVNode("div",null,[e.createVNode(e.unref(o),{name:"search",size:"22",color:"#99a0ac"})]),e.createElementVNode("div",f,[e.createElementVNode("input",{value:l.modelValue,style:e.normalizeStyle({textAlign:l.inputAlign,backgroundColor:l.searchBgColor}),disabled:l.disabled,onInput:d,onFocus:s,onBlur:i,placeholder:l.placeholder},null,44,h)]),l.clearable&&l.modelValue?(e.openBlock(),e.createElementBlock("div",{key:0,onClick:u,class:"uv-search-content-close"},[e.createVNode(e.unref(o),{name:"error",size:"22",color:"#99a0ac"})])):e.createCommentVNode("",!0)],6)],4))}});module.exports=g;