import{d as _}from"./demo-block.7f8a4cc7.js";import{G as g,r as m,c as B,d as N,h as e,i as u,f as l,H as R,I as r,x as f,J as F,K as I,L as S,N as q,g as v,t as G,E as z,C as E,B as d,A as P,z as n,j as V,k as b}from"./index.fb11df31.js";const j=v("div",{style:{color:"red"}}," \u8868\u5355\u6807\u9898 ",-1),A=v("div",null,"\u65E0\u8BBA\u6211\u4EEC\u80FD\u6D3B\u591A\u4E45\uFF0C\u6211\u4EEC\u80FD\u591F\u4EAB\u53D7\u7684\u53EA\u6709\u65E0\u6CD5\u5206\u5272\u7684\u6B64\u523B\uFF0C\u6B64\u5916\u522B\u65E0\u5176\u4ED6\u3002",-1),K={__name:"index",setup(D){const a=g({input:"11",input1:"222",textarea:"333",test1:50,test2:!1,test3:5,test4:3,radioselect:"test1",select:[],currentValue:""}),c=s=>s.length>=5&&s.length<=14,k=s=>(console.log("value",s),s>=20&&s<=70),p=m(!1),y=m([{key:1,value:"\u676D\u5DDE"},{key:2,value:"\u5B81\u6CE2"},{key:3,value:"\u6E29\u5DDE"},{key:3,value:"\u8087\u5E86"},{key:3,value:"\u6E56\u5DDE"},{key:3,value:"\u5E7F\u5DDE"}]),x=g({input:[{required:!0,message:"\u6B64\u9879\u5FC5\u586B\uFF01\uFF01\uFF01",trigger:"blur"},{validator:c,message:"\u8BF7\u8F93\u5165\u957F\u5EA6\u57285~14\u4E4B\u95F4",trigger:"change"}],textarea:[{required:!0,message:"\u8BE5\u9879\u5FC5\u586B\u54E6"}],test1:[{validator:k,message:"\u9009\u62E9\u8303\u56F4\u572820-70\u4E4B\u95F4",trigger:"change"}],currentValue:[{validator:s=>!!["\u5E7F\u5DDE","\u6E29\u5DDE"].includes(s),message:"\u53EA\u80FD\u9009\u62E9\u5E7F\u5DDE\u6216\u6E29\u5DDE",trigger:"blur"}]}),i=m(null),U=async()=>{try{await i.value.validate(),console.log("\u9A8C\u8BC1\u6210\u529F")}catch{console.log("\u9A8C\u8BC1\u5931\u8D25")}},w=()=>{i.value.clearValidate()},C=()=>{i.value.resetFields()};return(s,t)=>(B(),N("div",null,[e(_,{title:"\u57FA\u672C\u4F7F\u7528"},{default:u(()=>[e(l(R),{ref_key:"formRef",ref:i,model:a,"label-width":80,rules:x,card:"",gap:""},{default:u(()=>[e(l(r),{"bg-color":"#eee"},{label:u(()=>[j]),_:1}),e(l(r),{label:"\u63CF\u8FF0\u6587\u672C"},{default:u(()=>[A]),_:1}),e(l(r),{label:"\u65E0\u8FB9\u6846",prop:"input1"},{default:u(()=>[e(l(f),{modelValue:a.input1,"onUpdate:modelValue":t[0]||(t[0]=o=>a.input1=o)},null,8,["modelValue"])]),_:1}),e(l(r),{label:"\u6587\u672C\u57DF","label-position":"top",prop:"textarea"},{default:u(()=>[e(l(f),{type:"textarea",border:"",modelValue:a.textarea,"onUpdate:modelValue":t[1]||(t[1]=o=>a.textarea=o)},null,8,["modelValue"])]),_:1}),e(l(r),{label:"\u6ED1\u5757",prop:"test1"},{default:u(()=>[e(l(F),{style:{width:"100%"},modelValue:a.test1,"onUpdate:modelValue":t[2]||(t[2]=o=>a.test1=o)},null,8,["modelValue"])]),_:1}),e(l(r),{label:"\u8F93\u5165\u6846",prop:"input"},{default:u(()=>[e(l(f),{border:"",modelValue:a.input,"onUpdate:modelValue":t[3]||(t[3]=o=>a.input=o)},null,8,["modelValue"])]),_:1}),e(l(r),{label:"\u5F00\u5173",prop:"test2"},{default:u(()=>[e(l(I),{size:"20",modelValue:a.test2,"onUpdate:modelValue":t[4]||(t[4]=o=>a.test2=o)},null,8,["modelValue"])]),_:1}),e(l(r),{label:"\u6B65\u8FDB\u5668",prop:"test3"},{default:u(()=>[e(l(S),{modelValue:a.test3,"onUpdate:modelValue":t[5]||(t[5]=o=>a.test3=o)},null,8,["modelValue"])]),_:1}),e(l(r),{label:"\u8BC4\u5206",prop:"test4"},{default:u(()=>[e(l(q),{modelValue:a.test4,"onUpdate:modelValue":t[6]||(t[6]=o=>a.test4=o)},null,8,["modelValue"])]),_:1}),e(l(r),{label:"\u9009\u62E9\u5668",prop:"currentValue",arrow:"",clickable:""},{default:u(()=>[v("div",{onClick:t[7]||(t[7]=o=>p.value=!0)},G(a.currentValue||"\u8BF7\u9009\u62E9\u5730\u70B9"),1),e(l(z),{show:p.value,"onUpdate:show":t[8]||(t[8]=o=>p.value=o),modelValue:a.currentValue,"onUpdate:modelValue":t[9]||(t[9]=o=>a.currentValue=o),title:"\u5730\u70B9\u9009\u62E9",list:y.value,"key-name":"value"},null,8,["show","modelValue","list"])]),_:1}),e(l(r),{label:"\u5355\u9009\u6846",prop:"radioselect"},{default:u(()=>[e(l(E),{modelValue:a.radioselect,"onUpdate:modelValue":t[10]||(t[10]=o=>a.radioselect=o)},{default:u(()=>[e(l(d),{label:"test1"}),e(l(d),{label:"test2"}),e(l(d),{label:"test3"}),e(l(d),{label:"test4"}),e(l(d),{label:"test5"})]),_:1},8,["modelValue"])]),_:1}),e(l(r),{label:"\u591A\u9009\u6846",prop:"select"},{default:u(()=>[e(l(P),{modelValue:a.select,"onUpdate:modelValue":t[11]||(t[11]=o=>a.select=o),shape:"square"},{default:u(()=>[e(l(n),{label:"test1"}),e(l(n),{label:"test2"}),e(l(n),{label:"test3"}),e(l(n),{label:"test4"}),e(l(n),{label:"test5"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),e(l(V),{style:{"margin-top":"10px",padding:"0 10px"},type:"success",block:"",onClick:U},{default:u(()=>[b(" \u63D0\u4EA4 ")]),_:1}),e(l(V),{style:{"margin-top":"10px",padding:"0 10px"},type:"primary",block:"",onClick:w},{default:u(()=>[b(" \u6E05\u7A7A\u9A8C\u8BC1 ")]),_:1}),e(l(V),{style:{"margin-top":"10px",padding:"0 10px"},type:"error",block:"",onClick:C},{default:u(()=>[b(" \u91CD\u7F6E\u6570\u636E ")]),_:1},8,["onClick"])]),_:1})]))}};export{K as default};
