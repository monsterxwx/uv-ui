"use strict";const e=require("vue"),h=require("../icon/index.js");require("./collapse-item.vue_vue_type_style_index_0_lang.js");const u={class:"uv-collapse-item"},p={class:"collapse-item-right"},v={class:"collapse-item-content-wrapper"},g={class:"collapse-item-content"},f={name:"UvCollapseItem"},y=Object.assign(f,{props:{title:{type:String},name:{type:String},disabled:{type:Boolean,default:!1}},setup(l){const o=l,n=e.inject("collapse"),s=e.computed(()=>n.activeNames.value.indexOf(o.name)>-1),a=()=>{o.disabled||n.handleItemClick(o.name)},c=t=>{t.style.height="auto";const i=window.getComputedStyle(t).height;t.style.height="0px",t.offsetHeight,t.style.height=i},r=t=>{t.style.height=null},d=t=>{t.style.height=window.getComputedStyle(t).height,t.offsetHeight,t.style.height="0px"},m=t=>{t.style.height=null};return(t,i)=>(e.openBlock(),e.createElementBlock("div",u,[e.createElementVNode("div",{class:e.normalizeClass(["collapse-item-title",e.unref(s)?"collapse-item-bottom-line":""]),onClick:a},[e.createElementVNode("div",{class:e.normalizeClass(l.disabled?"collapse-item-title-disabled":"")},[e.renderSlot(t.$slots,"title",{},()=>[e.createTextVNode(e.toDisplayString(l.title),1)])],2),e.createElementVNode("div",p,[e.createElementVNode("div",null,[e.renderSlot(t.$slots,"right")]),e.createElementVNode("div",{class:e.normalizeClass(["collapse-item-arrow",e.unref(s)?"collapse":""])},[e.createVNode(e.unref(h),{size:"16",color:l.disabled?"#c8c9cc":"#969799",name:"arrow-down"},null,8,["color"])],2)])],2),e.createVNode(e.Transition,{name:"collapse",onEnter:c,onAfterEnter:r,onLeave:d,onAfterLeave:m},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",v,[e.createElementVNode("div",g,[e.renderSlot(t.$slots,"default")])],512),[[e.vShow,e.unref(s)]])]),_:3})]))}});module.exports=y;