import{d as s}from"./demo-block.7d56476c.js";import{_ as y,r as u,c as h,d as w,h as e,i as l,f as o,V as d,g as V,t as U,T as g,q as L,s as b}from"./index.172d5fe2.js";const k=n=>(L("data-v-a4ee24a8"),n=n(),b(),n),B={style:{overflow:"auto",width:"100%",height:"100%","background-color":"#ffffff"}},I=k(()=>V("img",{src:"https://cdn.uviewui.com/uview/demo/upload/positive.png",mode:"widthFix",style:{width:"250px",height:"150px"}},null,-1)),S={class:"diy-cover"},z={__name:"index",setup(n){const r=u([{url:"https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg",name:"leaf.jpeg"},{url:"https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg",name:"tree.jpeg"}]),m=u([{url:"https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg",status:"uploading",message:"\u4E0A\u4F20\u4E2D..."},{url:"https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg",status:"failed",message:"\u4E0A\u4F20\u5931\u8D25"}]),v=u([]),f=u([]),_=u([]),c=u([{url:"https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg",name:"leaf.jpeg"}]),j=p=>p.type!=="image/jpeg"?(g({message:"\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247"}),!1):!0,x=p=>{g({message:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500kb"})};return(p,a)=>(h(),w("div",B,[e(s,{title:"\u57FA\u672C\u4F7F\u7528"},{default:l(()=>[e(o(d))]),_:1}),e(s,{title:"\u6587\u4EF6\u9884\u89C8"},{default:l(()=>[e(o(d),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),e(s,{title:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF"},{default:l(()=>[e(o(d),{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=t=>v.value=t),"max-count":2},null,8,["modelValue"])]),_:1}),e(s,{title:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F"},{default:l(()=>[e(o(d),{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=t=>f.value=t),"max-size":500*1024,onOversize:x},null,8,["modelValue"])]),_:1}),e(s,{title:"\u4E0A\u4F20\u72B6\u6001"},{default:l(()=>[e(o(d),{modelValue:m.value,"onUpdate:modelValue":a[3]||(a[3]=t=>m.value=t)},null,8,["modelValue"])]),_:1}),e(s,{title:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406"},{default:l(()=>[e(o(d),{"before-read":j})]),_:1}),e(s,{title:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20"},{default:l(()=>[e(o(d),{disabled:""})]),_:1}),e(s,{title:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F"},{default:l(()=>[e(o(d),{class:"diy-uploader",modelValue:_.value,"onUpdate:modelValue":a[4]||(a[4]=t=>_.value=t)},{default:l(()=>[I]),_:1},8,["modelValue"])]),_:1}),e(s,{title:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F"},{default:l(()=>[e(o(d),{modelValue:c.value,"onUpdate:modelValue":a[5]||(a[5]=t=>c.value=t)},{"preview-cover":l(({file:t,item:i})=>[V("div",S,U((i==null?void 0:i.name)||(t==null?void 0:t.name)),1)]),_:1},8,["modelValue"])]),_:1})]))}},T=y(z,[["__scopeId","data-v-a4ee24a8"]]);export{T as default};
