import{aS as h,u as b,r as g,a as E,k as V,o as W,c as k,b as v,d as a,w as l,e as t,f as y,t as B,E as I,i as P,aj as w}from"./index-dtHZBTLx.js";import{a as x,E as D}from"./el-form-item-BY7osHy-.js";const F=n=>h({url:"logs/visit/listPage",method:"get",data:n}),N={class:"main-body"},T={class:"toolbar"},j={__name:"Visit",setup(n){const{t:e}=b(),s=g(),o=E({username:""}),m=V(()=>[{prop:"id",label:e("thead.ID"),minWidth:60},{prop:"username",label:e("thead.username"),minWidth:100},{prop:"status",label:e("thead.status"),minWidth:120},{prop:"ip",label:e("thead.IP"),minWidth:120},{prop:"duration",label:e("thead.duration"),minWidth:80},{prop:"createTime",label:e("thead.createdTime"),minWidth:120}]),c=()=>{s.value.reload()};return(C,r)=>{const u=I,i=x,d=P,p=D,_=w;return W(),k("div",N,[v("div",T,[a(p,{inline:!0,model:t(o)},{default:l(()=>[a(i,null,{default:l(()=>[a(u,{modelValue:t(o).username,"onUpdate:modelValue":r[0]||(r[0]=f=>t(o).username=f),placeholder:t(e)("loginForm.username")},null,8,["modelValue","placeholder"])]),_:1}),a(i,null,{default:l(()=>[a(d,{icon:"search",type:"primary",onClick:c},{default:l(()=>[y(B(t(e)("action.search")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),a(_,{ref_key:"tableRef",ref:s,"get-page":t(F),filters:t(o),columns:t(m),showPagination:!1,showBatchDelete:!1},null,8,["get-page","filters","columns"])])}}};export{j as default};