"use strict";const l=require("vue"),d=require("../packages/hooks/useContext.js");require("./checkbox-group.vue_vue_type_style_index_0_lang.js");const f={name:"UvCheckboxGroup"},p=Object.assign(f,{props:{modelValue:{type:Array,default:()=>[]},max:{type:Number},direction:{type:String,default:"row"},iconSize:{type:[Number,String],default:18},checkedColor:{type:String,default:"#1989fa"},shape:{type:String,default:"round"}},emits:["update:modelValue","change"],setup(a,{emit:s}){const c=a,u=l.ref(!1);l.watch(()=>c.modelValue,t=>{u.value&&(o.forEach(e=>{e.isSelect=!1}),t.forEach(e=>{o.forEach(r=>{r.label===e&&(r.isSelect=!0)})})),u.value=!0});const n=t=>{if(c.max&&i.value===c.max&&!o[t].isSelect)return;u.value=!1,o[t].isSelect=!o[t].isSelect;const e=[];o.forEach(r=>{r.isSelect&&e.push(r.label)}),s("change",e),s("update:modelValue",e)},i=l.computed(()=>c.modelValue.length),{fields:o}=d.useChildren("checkbox-group",{props:c,updateItem:n});return(t,e)=>(l.openBlock(),l.createElementBlock("div",{class:"uv-checkbox-group",style:l.normalizeStyle({flexDirection:a.direction==="column"?"column":"row"})},[l.renderSlot(t.$slots,"default")],4))}});module.exports=p;