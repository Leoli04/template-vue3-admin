import{aS as p,a as k,k as w,o as _,c as E,b as B,d as o,w as l,e,f as m,t as c,n as C,s as G,F as v,p as J,q as K,ah as Q,aT as $,E as X,i as Y,aj as Z,z as ee,y as te}from"./index-dtHZBTLx.js";import{u as oe,E as le}from"./use-table-handlers-UakrxxyC.js";import{a as ae,E as ne}from"./el-form-item-BY7osHy-.js";const se=n=>p({url:"sys/user/listPage",method:"get",data:n}),re=n=>p({url:"sys/user/save",method:"post",data:n}),de=n=>{const{id:s}=n;return p({url:`sys/user/update/${s}`,method:"post",data:n})},ie=n=>p({url:"sys/user/delete",method:"post",data:n}),ue=n=>{const{id:s}=n;return delete n.id,p({url:`sys/user/password/${s}`,method:"post",data:n})},me={class:"main-body"},ce={class:"toolbar"},he={__name:"User",setup(n){const s=k({id:"",name:"",roleId:""}),f=k({name:""}),{t,tableRef:I,dialogVisible:h,isEdit:b,formLoading:x,formRef:S,doAdd:R,doEdit:P,doSubmit:T,doRemove:W,doSearch:q,doClose:y}=oe(s),D=w(()=>[{type:"selection",selectable:U},{prop:"id",label:t("thead.ID"),minWidth:60},{prop:"name",label:t("thead.username"),minWidth:120},{prop:"roleName",label:t("thead.group"),minWidth:120},{prop:"createdBy",label:t("thead.createdBy"),minWidth:120},{prop:"ip",label:t("thead.latestIp"),minWidth:120},{prop:"visitTime",label:t("thead.latestVisit"),minWidth:120}]),H=[{type:"edit",show:a=>a.createdBy!=="system"},{type:"delete",show:a=>a.createdBy!=="system"}],N=w(()=>({name:[{required:!0,message:t("form.usernameHolder"),trigger:["blur","change"]}],roleId:[{required:!0,message:t("form.roleRequired"),trigger:["blur","change"]}]}));function U(a){return a.createdBy!=="system"}function F(a,d){W(ie,a,d)}function L(){T({save:re,update:de},a=>{b.value||$.alert(`${t("tips.success")}${t("form.username")}: ${a.data.name},${t("form.password")}: ${a.data.password}`,t("tips.title"),{confirmButtonText:t("action.confirm")})})}function j(){ue({...s}).then(a=>{$.alert(`${t("tips.success")}${t("form.username")}: ${a.data.name},${t("form.password")}: ${a.data.password}`,t("tips.title"),{confirmButtonText:t("action.confirm")})})}return(a,d)=>{const g=X,i=ae,u=Y,V=ne,z=Z,A=ee,M=te,O=le;return _(),E(v,null,[B("div",me,[B("div",ce,[o(V,{inline:!0,model:e(f)},{default:l(()=>[o(i,null,{default:l(()=>[o(g,{modelValue:e(f).name,"onUpdate:modelValue":d[0]||(d[0]=r=>e(f).name=r),placeholder:e(t)("thead.username")},null,8,["modelValue","placeholder"])]),_:1}),o(i,null,{default:l(()=>[o(u,{icon:"search",type:"primary",onClick:e(q)},{default:l(()=>[m(c(e(t)("action.search")),1)]),_:1},8,["onClick"])]),_:1}),o(i,null,{default:l(()=>[o(u,{icon:"plus",type:"primary",onClick:e(R)},{default:l(()=>[m(c(e(t)("action.add")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),o(z,{ref_key:"tableRef",ref:I,"get-page":e(se),filters:e(f),columns:e(D),operations:H,showPagination:!0,onHandleEdit:e(P),onHandleDelete:F},null,8,["get-page","filters","columns","onHandleEdit"])]),o(O,{title:e(b)?e(t)("action.edit"):e(t)("action.add"),modelValue:e(h),"onUpdate:modelValue":d[3]||(d[3]=r=>Q(h)?h.value=r:null),draggable:"",width:"40%","close-on-click-modal":!1,onClose:e(y)},{footer:l(()=>[o(u,{onClick:e(y)},{default:l(()=>[m(c(e(t)("action.cancel")),1)]),_:1},8,["onClick"]),e(b)?(_(),C(u,{key:0,type:"primary",onClick:j},{default:l(()=>[m(c(e(t)("form.resetPassword")),1)]),_:1})):G("",!0),o(u,{type:"primary",onClick:L,loading:e(x)},{default:l(()=>[m(c(e(t)("action.submit")),1)]),_:1},8,["loading"])]),default:l(()=>[o(V,{ref_key:"formRef",ref:S,model:e(s),"label-width":"80px",rules:e(N),"label-position":"right"},{default:l(()=>[o(i,{label:e(t)("form.username"),prop:"name"},{default:l(()=>[o(g,{modelValue:e(s).name,"onUpdate:modelValue":d[1]||(d[1]=r=>e(s).name=r)},null,8,["modelValue"])]),_:1},8,["label"]),o(i,{label:e(t)("form.group"),prop:"roleId"},{default:l(()=>[o(M,{modelValue:e(s).roleId,"onUpdate:modelValue":d[2]||(d[2]=r=>e(s).roleId=r),placeholder:e(t)("form.choose"),style:{width:"100%"}},{default:l(()=>[(_(!0),E(v,null,J(e(K),r=>(_(),C(A,{key:r.name,label:r.label,value:r.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","onClose"])],64)}}};export{he as default};