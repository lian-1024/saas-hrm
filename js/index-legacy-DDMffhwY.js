System.register(["./index-legacy-FCYPyWIL.js","./vue-vendor-legacy-x9FjLCOD.js","./spin-legacy-NTWxnDiJ.js","./index-legacy-CHUU-5It.js","./permission-legacy-CDPpi0C4.js","./antd-vendor-legacy-C9XdHwF7.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./axios-vendor-legacy-B4nRALG8.js","./lodash-vendor-legacy-D6Hi_gR3.js"],(function(e,s){"use strict";var i,a,n,o,l,t,r,d,c,u,p,m,y,v,g,f,k,_,x,b,j,C,h,P,S,I,w,z,B;return{setters:[e=>{i=e.u,a=e._},e=>{n=e.d,o=e.a9,l=e.u,t=e.a5,r=e.r,d=e.o,c=e.a2,u=e.a3,p=e.a4,m=e.ah,y=e.c,v=e.G,g=e.ad,f=e.an,k=e.ae,_=e.h},e=>{x=e.Q},e=>{b=e.u},e=>{j=e.P,C=e.a},e=>{h=e.h,P=e.B,S=e.a1,I=e.F,w=e.ae,z=e.au},e=>{B=e._},null,null],execute:function(){e("default",B(n({name:"PermissionPage",__name:"index",setup(e){o((e=>({"7d72f5c4":`${l(q).paddingLG}px`,"3f700837":l(q).colorBgContainer,"3a84f477":`${l(q).borderRadiusLG}px`,"2a5ff8ba":l(q).colorBorderSecondary})));const n=k((()=>a((()=>s.import("./permission-modal-legacy-BOtitjaK.js")),void 0))),{t:B}=t(),E=[{title:B("permission.table.columns.name"),dataIndex:"name",key:"name"},{title:B("permission.table.columns.key"),dataIndex:"key",key:"key"},{title:B("permission.table.columns.description"),dataIndex:"description",key:"description"},{title:B("permission.table.columns.operations"),dataIndex:"operations",key:"operations",fixed:"right",width:200}],G=r([]),L=r(!1),T=r(!1),F=r(),{run:$,loading:O}=i(C.getPermissionList,{manual:!0,onSuccess:({data:e})=>{G.value=j.convertPermissionToTableTree(e)}}),{run:Q}=i(C.deletePermissionById,{manual:!0,onSuccess:()=>{h.success(B("permission.messages.deleteSuccess")),$()},onError:e=>{h.error(e.message||B("permission.messages.deleteError"))}}),R=e=>{T.value=e,L.value=!0},U=e=>{F.value=e,R(!1)};d((async()=>{await $()}));const{token:q}=b();return(e,s)=>(u(),c(l(I),{class:"permission-wrapper h-full",vertical:"",gap:"middle"},{default:p((()=>[m("div",null,[y(l(P),{type:"primary",onClick:s[0]||(s[0]=e=>U(0))},{default:p((()=>[v(g(l(B)("permission.actions.addPermission")),1)])),_:1})]),y(l(x),{spinning:l(O)},{default:p((()=>[y(l(S),{pagination:!1,class:"permission-table","data-source":G.value,columns:E,"default-expand-all":!0,"indent-size":15,bordered:""},{bodyCell:p((({column:e,record:s})=>["operations"===e.key?(u(),c(l(I),{key:0},{default:p((()=>[y(l(P),{size:"small",onClick:e=>U(s.id),type:"link"},{default:p((()=>[v(g(l(B)("permission.table.actions.add")),1)])),_:2},1032,["onClick"]),y(l(P),{size:"small",onClick:e=>{return i=s.id,F.value=i,void R(!0);var i},type:"link"},{default:p((()=>[v(g(l(B)("permission.table.actions.edit")),1)])),_:2},1032,["onClick"]),y(l(P),{size:"small",onClick:e=>{return i=s.id,void w.confirm({content:B("permission.messages.deleteConfirm"),icon:_(z),onOk:async()=>{try{await Q(i)}finally{return null}}});var i},type:"link"},{default:p((()=>[v(g(l(B)("permission.table.actions.delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)):f("",!0)])),_:1},8,["data-source"])])),_:1},8,["spinning"]),y(l(n),{"permission-id":F.value,"is-edit":T.value,open:L.value,"onUpdate:open":s[1]||(s[1]=e=>L.value=e),"permission-tree":G.value,onSuccess:l($)},null,8,["permission-id","is-edit","open","permission-tree","onSuccess"])])),_:1}))}}),[["__scopeId","data-v-f093501e"]]))}}}));
