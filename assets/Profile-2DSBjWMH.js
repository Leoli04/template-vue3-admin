import{u as x,r as V,a as B,k as u,m as F,n as m,w as t,e,o as s,d as c,b as w,t as _,c as N,p as R,q as S,F as q,f as C,s as P,h as z,v as D,x as L,y as M,i as O,z as T}from"./index-eULJHsq-.js";import{E as U,a as j}from"./el-form-item-1NvOx5oQ.js";const J={__name:"Profile",setup(A){const{t:l}=x(),b=z(),d=V(),o=B({name:"",roleIds:""}),r=u(()=>b.state.user.userInfo),n=u(()=>r.value.createBy==="system"),y=u(()=>({roleId:{required:!0,message:l("form.roleRequired"),trigger:"blur"}}));F(r,()=>{g()},{immediate:!0});function g(){o.name=r.value.name,o.roleId=r.value.roleId}function I(){d.value.validate(i=>{i&&D({...o}).then(()=>{L.success(l("tips.success"))})})}return(i,p)=>{const f=j,h=T,v=M,k=O,E=U;return s(),m(E,{ref_key:"formRef",ref:d,model:e(o),rules:e(y),"label-width":"80px","label-position":"left"},{default:t(()=>[c(f,{label:e(l)("form.username")},{default:t(()=>[w("label",null,_(e(o).name),1)]),_:1},8,["label"]),c(f,{label:e(l)("form.group"),prop:e(n)?"":"roleId"},{default:t(()=>[c(v,{modelValue:e(o).roleId,"onUpdate:modelValue":p[0]||(p[0]=a=>e(o).roleId=a),disabled:e(n),placeholder:e(l)("form.choose"),style:{"margin-right":"10px"}},{default:t(()=>[(s(!0),N(q,null,R(e(S),a=>(s(),m(h,{key:a.name,label:a.label,value:a.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled","placeholder"]),e(n)?P("",!0):(s(),m(k,{key:0,type:"primary",onClick:I},{default:t(()=>[C(_(e(l)("action.apply")),1)]),_:1}))]),_:1},8,["label","prop"])]),_:1},8,["model","rules"])}}};export{J as default};