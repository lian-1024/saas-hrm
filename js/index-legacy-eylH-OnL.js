System.register(["./index-legacy-Dr3Ksir8.js","./vue-vendor-legacy-ikyms0Ip.js","./spin-legacy-CX9iz6gd.js","./index-legacy-D_zaI8lQ.js","./permission-legacy-PfFga5PU.js","./antd-vendor-legacy-DsFsidym.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./axios-vendor-legacy-B4nRALG8.js","./lodash-vendor-legacy-k_izlGWN.js"],(function(e,s){"use strict";var i,a,n,o,l,r,t,d,c,u,m,p,y,g,v,f,k,_,b,x,j,C,h,P,S,I,w,z,B;return{setters:[e=>{i=e.u,a=e._},e=>{n=e.d,o=e.ab,l=e.u,r=e.a7,t=e.r,d=e.o,c=e.a4,u=e.a5,m=e.a6,p=e.aj,y=e.c,g=e.G,v=e.af,f=e.aq,k=e.ag,_=e.h},e=>{b=e.Q},e=>{x=e.u},e=>{j=e.P,C=e.a},e=>{h=e.h,P=e.B,S=e.$,I=e.F,w=e.ac,z=e.ar},e=>{B=e._},null,null],execute:function(){e("default",B(n({name:"PermissionPage",__name:"index",setup(e){o((e=>({"7d72f5c4":`${l(R).paddingLG}px`,"3f700837":l(R).colorBgContainer,"3a84f477":`${l(R).borderRadiusLG}px`,"2a5ff8ba":l(R).colorBorderSecondary})));const n=k((()=>a((()=>s.import("./permission-modal-legacy-B6vUilsS.js")),void 0))),{t:B}=r(),E=[{title:B("permission.table.columns.name"),dataIndex:"name",key:"name"},{title:B("permission.table.columns.key"),dataIndex:"key",key:"key"},{title:B("permission.table.columns.description"),dataIndex:"description",key:"description"},{title:B("permission.table.columns.operations"),dataIndex:"operations",key:"operations",fixed:"right",width:200}],G=t([]),L=t(!1),T=t(!1),$=t(),{run:q,loading:D}=i(C.getPermissionList,{manual:!0,onSuccess:({data:e})=>{G.value=j.convertPermissionToTableTree(e)}}),{run:F}=i(C.deletePermissionById,{manual:!0,onSuccess:()=>{h.success(B("permission.messages.deleteSuccess")),q()},onError:e=>{h.error(e.message||B("permission.messages.deleteError"))}}),O=e=>{T.value=e,L.value=!0},Q=e=>{$.value=e,O(!1)};d((async()=>{await q()}));const{token:R}=x();return(e,s)=>(u(),c(l(I),{class:"permission-wrapper h-full",vertical:"",gap:"middle"},{default:m((()=>[p("div",null,[y(l(P),{type:"primary",onClick:s[0]||(s[0]=e=>Q(0))},{default:m((()=>[g(v(l(B)("permission.actions.addPermission")),1)])),_:1})]),y(l(b),{spinning:l(D)},{default:m((()=>[y(l(S),{pagination:!1,class:"permission-table","data-source":G.value,columns:E,"default-expand-all":!0,"indent-size":15,bordered:""},{bodyCell:m((({column:e,record:s})=>["operations"===e.key?(u(),c(l(I),{key:0},{default:m((()=>[y(l(P),{size:"small",onClick:e=>Q(s.id),type:"link"},{default:m((()=>[g(v(l(B)("permission.table.actions.add")),1)])),_:2},1032,["onClick"]),y(l(P),{size:"small",onClick:e=>{return i=s.id,$.value=i,void O(!0);var i},type:"link"},{default:m((()=>[g(v(l(B)("permission.table.actions.edit")),1)])),_:2},1032,["onClick"]),y(l(P),{size:"small",onClick:e=>{return i=s.id,void w.confirm({content:B("permission.messages.deleteConfirm"),icon:_(z),onOk:async()=>{try{await F(i)}finally{return null}}});var i},type:"link"},{default:m((()=>[g(v(l(B)("permission.table.actions.delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)):f("",!0)])),_:1},8,["data-source"])])),_:1},8,["spinning"]),y(l(n),{"permission-id":$.value,"is-edit":T.value,open:L.value,"onUpdate:open":s[1]||(s[1]=e=>L.value=e),"permission-tree":G.value,onSuccess:l(q)},null,8,["permission-id","is-edit","open","permission-tree","onSuccess"])])),_:1}))}}),[["__scopeId","data-v-f093501e"]]))}}}));
