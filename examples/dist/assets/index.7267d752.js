import{d as a}from"./demo-block.7d56476c.js";import{_ as d,r as _,c as u,d as p,h as t,i as l,f as n,af as o,g as r}from"./index.172d5fe2.js";const v={class:"action-demo"},m={__name:"index",setup(x){const s=_(30),i=c=>{let e=s.value;c==="-"?(e-=5,e<=0?s.value=0:s.value=e):c==="+"&&(e+=5,e>=100?s.value=100:s.value=e)};return(c,e)=>(u(),p("div",null,[t(a,{title:"\u57FA\u672C\u4F7F\u7528"},{default:l(()=>[t(n(o),{percent:60})]),_:1}),t(a,{title:"\u4E0D\u663E\u793A\u767E\u5206\u6BD4"},{default:l(()=>[t(n(o),{percent:60,"show-percent":!1})]),_:1}),t(a,{title:"\u5916\u90E8\u767E\u5206\u6BD4\u663E\u793A"},{default:l(()=>[t(n(o),{percent:60,"inset-percent":!1})]),_:1}),t(a,{title:"\u4FEE\u6539\u989C\u8272\u548C\u9AD8\u5EA6"},{default:l(()=>[t(n(o),{percent:60,height:"15px","track-color":"#fff","progress-color":"#1989fa"})]),_:1}),t(a,{title:"\u624B\u52A8\u589E\u51CF"},{default:l(()=>[t(n(o),{percent:s.value},null,8,["percent"]),r("div",v,[r("div",{class:"action-item",onClick:e[0]||(e[0]=f=>i("-"))}," \u51CF\u5C11 "),r("div",{class:"action-item",onClick:e[1]||(e[1]=f=>i("+"))}," \u589E\u52A0 ")])]),_:1})]))}},h=d(m,[["__scopeId","data-v-f97d3f55"]]);export{h as default};
