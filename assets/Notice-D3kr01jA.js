import{aS as f,a as y,k as V,o as I,c as O,b as E,d as l,w as o,e,f as c,t as p,ah as j,F as A,E as L,i as $,aj as z}from"./index-dtHZBTLx.js";import{u as G,E as J}from"./use-table-handlers-UakrxxyC.js";import{E as K}from"./el-switch-BFkUiSd4.js";import{a as M,E as Q}from"./el-form-item-BY7osHy-.js";const X=i=>f({url:"sys/notice/listPage",method:"get",data:i}),Y=i=>f({url:"sys/notice/save",method:"post",data:i}),Z=i=>{const{id:a}=i;return f({url:`sys/notice/update/${a}`,method:"post",data:i})},ee=i=>f({url:"sys/notice/delete",method:"post",data:i}),te={class:"main-body"},le={class:"toolbar"},re={__name:"Notice",setup(i){const a=y({id:"",title:"",content:"",isPublish:!1}),{t,tableRef:k,dialogVisible:_,isEdit:w,formLoading:C,formRef:v,doAdd:T,doEdit:x,doSubmit:R,doRemove:B,doSearch:P,doClose:b}=G(a),d=y({title:""}),S=V(()=>[{type:"selection"},{prop:"id",label:t("thead.ID"),minWidth:60},{prop:"title",label:t("thead.title"),minWidth:120,showOverflowTooltip:!0},{prop:"content",label:t("thead.content"),minWidth:120,showOverflowTooltip:!0},{prop:"publishTime",label:t("thead.publishTime"),minWidth:120},{prop:"createdTime",label:t("thead.createdTime"),minWidth:120},{prop:"createdBy",label:t("thead.createdBy"),minWidth:120}]),W=[{type:"edit",disabled:u=>!!u.publishTime},{type:"delete"}],q=V(()=>({title:[{required:!0,message:t("form.titleRequired"),trigger:["blur","change"]},{min:2,max:60,message:t("form.titleError"),trigger:["blur","change"]}],content:[{required:!0,message:t("form.contentRequired"),trigger:["blur","change"]},{min:2,max:300,message:t("form.contentError"),trigger:["blur","change"]}]}));function D(u,n){B(ee,u,n)}function U(){R({save:Y,update:Z})}return(u,n)=>{const h=L,s=M,m=$,g=Q,F=z,H=K,N=J;return I(),O(A,null,[E("div",te,[E("div",le,[l(g,{inline:!0,model:e(d)},{default:o(()=>[l(s,null,{default:o(()=>[l(h,{modelValue:e(d).title,"onUpdate:modelValue":n[0]||(n[0]=r=>e(d).title=r),placeholder:e(t)("thead.title")},null,8,["modelValue","placeholder"])]),_:1}),l(s,null,{default:o(()=>[l(m,{icon:"search",type:"primary",onClick:e(P)},{default:o(()=>[c(p(e(t)("action.search")),1)]),_:1},8,["onClick"])]),_:1}),l(s,null,{default:o(()=>[l(m,{icon:"plus",type:"primary",onClick:e(T)},{default:o(()=>[c(p(e(t)("action.add")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),l(F,{ref_key:"tableRef",ref:k,"get-page":e(X),filters:e(d),columns:e(S),operations:W,showPagination:!0,onHandleEdit:e(x),onHandleDelete:D},null,8,["get-page","filters","columns","onHandleEdit"])]),l(N,{title:e(w)?e(t)("action.edit"):e(t)("action.add"),width:"40%",draggable:"",modelValue:e(_),"onUpdate:modelValue":n[4]||(n[4]=r=>j(_)?_.value=r:null),"close-on-click-modal":!1,onClose:e(b)},{footer:o(()=>[l(m,{onClick:e(b)},{default:o(()=>[c(p(e(t)("action.cancel")),1)]),_:1},8,["onClick"]),l(m,{type:"primary",loading:e(C),onClick:U},{default:o(()=>[c(p(e(t)("action.submit")),1)]),_:1},8,["loading"])]),default:o(()=>[l(g,{ref_key:"formRef",ref:v,model:e(a),rules:e(q),"label-width":"80px","label-position":"right"},{default:o(()=>[l(s,{label:e(t)("thead.title"),prop:"title"},{default:o(()=>[l(h,{modelValue:e(a).title,"onUpdate:modelValue":n[1]||(n[1]=r=>e(a).title=r)},null,8,["modelValue"])]),_:1},8,["label"]),l(s,{label:e(t)("thead.content"),prop:"content"},{default:o(()=>[l(h,{type:"textarea",modelValue:e(a).content,"onUpdate:modelValue":n[2]||(n[2]=r=>e(a).content=r),"words-limit":300},null,8,["modelValue"])]),_:1},8,["label"]),l(s,{label:e(t)("form.publish")},{default:o(()=>[l(H,{modelValue:e(a).isPublish,"onUpdate:modelValue":n[3]||(n[3]=r=>e(a).isPublish=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","onClose"])],64)}}};export{re as default};