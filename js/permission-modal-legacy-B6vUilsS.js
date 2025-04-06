System.register(["./vue-vendor-legacy-ikyms0Ip.js","./permission-legacy-PfFga5PU.js","./modal.vue_vue_type_script_setup_true_lang-legacy-B8VAqqil.js","./spin-legacy-CX9iz6gd.js","./index-legacy-D_zaI8lQ.js","./index-legacy-Dr3Ksir8.js","./status-legacy-Bu0-MHTm.js","./antd-vendor-legacy-DsFsidym.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./axios-vendor-legacy-B4nRALG8.js","./lodash-vendor-legacy-k_izlGWN.js"],(function(e,s){"use strict";var a,i,l,r,o,n,d,m,t,u,c,p,g,f,v,b,y,_,h,E,j,x,k,P,S,C,I,O,w,V;return{setters:[e=>{a=e.d,i=e.ah,l=e.ab,r=e.u,o=e.ai,n=e.r,d=e.a,m=e.a7,t=e.j,u=e.w,c=e.a4,p=e.a5,g=e.a6,f=e.c,v=e.G,b=e.af},e=>{y=e.a},e=>{_=e._},e=>{h=e.Q},e=>{E=e.u},e=>{j=e.u},e=>{x=e.O},e=>{k=e.h,P=e.ag,S=e.ah,C=e.ai,I=e.S,O=e.F,w=e.B},e=>{V=e._},null,null],execute:function(){const s=(e,a)=>e.some((e=>e.name===a||e.children&&s(e.children,a))),q=a({__name:"permission-modal",props:i({permissionId:{},isEdit:{type:Boolean},permissionTree:{}},{open:{default:!1},openModifiers:{}}),emits:i(["success"],["update:open"]),setup(e,{emit:a}){l((e=>({"3b630cd9":`${r(W).marginLG}px`,d5f2489c:`${r(W).paddingLG}px`,"42b99349":`${r(W).borderRadiusLG}px`,"5703ee25":r(W).colorBgContainer})));const i=o(e,"open"),V=e,q=n(),B=a,D=d({id:0,name:"",code:"",description:"",enVisible:0,type:0,pid:1}),{t:G}=m(),L=t((()=>V.isEdit?G("permission.modal.title.edit"):G("permission.modal.title.add"))),U=()=>{i.value=!1,q.value?.resetFields()},F=t((()=>D.enVisible===x.OPENED)),N=()=>{D.enVisible=D.enVisible===x.OPENED?x.CLOSED:x.OPENED},T={name:[{required:!0,message:G("permission.modal.form.rules.name.required"),trigger:"blur"},{validator:async(e,a)=>new Promise(((e,i)=>(V.isEdit||s(V.permissionTree,a)&&i(G("permission.modal.form.rules.name.exists")),e()))),trigger:"blur"},{max:50,min:2,message:G("permission.modal.form.rules.name.length"),trigger:"blur"}],code:[{required:!0,message:G("permission.modal.form.rules.code.required"),trigger:"blur"},{validator:async(e,a)=>new Promise(((e,i)=>{if(V.isEdit)return e();var l,r;l=V.permissionTree,r=a,l.some((e=>e.code===r||e.children&&s(e.children,r)))&&i(G("permission.modal.form.rules.code.exists")),e()})),trigger:"blur"},{max:50,min:2,message:G("permission.modal.form.rules.code.length"),trigger:"blur"}]},{run:$,loading:R}=j(y.updatePermission,{manual:!0,onSuccess:()=>{k.success(G("permission.messages.editSuccess")),U(),B("success")},onError:e=>{k.error(e.message||G("permission.messages.editError"))},onFinally:()=>{U()}}),{run:J,loading:M}=j(y.getPermissionById,{manual:!0,onSuccess:({data:e})=>{Object.assign(D,e)}}),{run:Q,loading:z}=j(y.addPermission,{manual:!0,onSuccess:()=>{k.success(G("permission.messages.addSuccess")),U(),B("success")},onError:e=>{k.error(e.message||G("permission.messages.addError"))}}),A=async()=>{q.value&&q.value.validate().then((async e=>{if(V.isEdit)await $({...D});else{const{id:e,...s}=D;await Q({...s,pid:V.permissionId})}}))},H=()=>U(),K=t((()=>z.value||R.value));u([i,()=>V.permissionId],(([e,s])=>{V.isEdit&&e&&s&&J(s)}));const{token:W}=E();return(e,s)=>(p(),c(r(_),{mask:"",open:i.value,"onUpdate:open":s[3]||(s[3]=e=>i.value=e),onCancel:H,title:L.value,closable:""},{footer:g((()=>[f(r(O),{justify:"center",gap:"small"},{default:g((()=>[f(r(w),{type:"primary",onClick:A,loading:K.value},{default:g((()=>[v(b(r(G)("permission.modal.buttons.confirm")),1)])),_:1},8,["loading"]),f(r(w),{onClick:H},{default:g((()=>[v(b(r(G)("permission.modal.buttons.cancel")),1)])),_:1})])),_:1})])),default:g((()=>[f(r(h),{spinning:r(M)},{default:g((()=>[f(r(P),{layout:"vertical",ref_key:"formRef",ref:q,class:"permission-form",rules:T,model:D},{default:g((()=>[f(r(S),{label:r(G)("permission.modal.form.fields.name"),name:"name"},{default:g((()=>[f(r(C),{value:D.name,"onUpdate:value":s[0]||(s[0]=e=>D.name=e),placeholder:r(G)("permission.modal.form.placeholder.name")},null,8,["value","placeholder"])])),_:1},8,["label"]),f(r(S),{label:r(G)("permission.modal.form.fields.code"),name:"code"},{default:g((()=>[f(r(C),{value:D.code,"onUpdate:value":s[1]||(s[1]=e=>D.code=e),placeholder:r(G)("permission.modal.form.placeholder.code")},null,8,["value","placeholder"])])),_:1},8,["label"]),f(r(S),{label:r(G)("permission.modal.form.fields.description"),name:"description"},{default:g((()=>[f(r(C),{value:D.description,"onUpdate:value":s[2]||(s[2]=e=>D.description=e),placeholder:r(G)("permission.modal.form.placeholder.description")},null,8,["value","placeholder"])])),_:1},8,["label"]),f(r(S),{label:r(G)("permission.modal.form.fields.enable"),name:"enVisible"},{default:g((()=>[f(r(I),{checked:F.value,onChange:N},null,8,["checked"])])),_:1},8,["label"])])),_:1},8,["model"])])),_:1},8,["spinning"])])),_:1},8,["open","title"]))}});e("default",V(q,[["__scopeId","data-v-a7368adc"]]))}}}));
