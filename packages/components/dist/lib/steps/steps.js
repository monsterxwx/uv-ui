"use strict";const s=require("vue"),i=require("../packages/hooks/useContext.js");require("./steps.vue_vue_type_style_index_0_lang.js");const r={class:"uv-steps"},p={class:"uv-steps-content"},d={name:"UvSteps"},_=Object.assign(d,{props:{modelValue:{type:Number,default:0},isAbleClick:{type:Boolean,default:!0},activeColor:{type:String,default:"#0078d4"},inactiveColor:{type:String,default:"#999999"}},emits:["update:modelValue","change"],setup(u,{emit:o}){const l=u;s.watch(()=>l.modelValue,e=>{c(e),o("change",e)});const c=e=>{l.isAbleClick&&o("update:modelValue",e),n.forEach((t,a)=>{a<=e?t.isActive=!0:t.isActive=!1,a<e?t.lineActive=!0:t.lineActive=!1})},{fields:n}=i.useChildren("steps",{props:l,acitveItemUpdate:c});return(e,t)=>(s.openBlock(),s.createElementBlock("div",r,[s.createElementVNode("div",p,[s.renderSlot(e.$slots,"default")])]))}});module.exports=_;