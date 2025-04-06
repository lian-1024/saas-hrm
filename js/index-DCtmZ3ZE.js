const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/table-popover-CFD4Yd2E.js","js/vue-vendor-BX3z0DRI.js","js/antd-vendor-ChGXved8.js","js/lodash-vendor-C1hxrrCz.js","js/index-BZBl1bBK.js","js/axios-vendor-cIIFlI1p.js","js/skeleton-BLzL0NKa.js","js/spin-Dif1E5Ka.js","js/index-BUvr80Hr.js","js/department.service-CaNKM9sv.js","js/vue3-count-to.esm-B-Ex2Uhy.js","js/_plugin-vue_export-helper-DlAUqK2U.js","js/modal-BXhDqv9T.js","js/modal.vue_vue_type_script_setup_true_lang-BGdz2b2r.js","js/status-Bkxi8BcS.js","js/update-attendance-DdP-SPaB.js","js/drawer-6QaFcoY7.js","js/generate-menu-item-vU3zl0rQ.js"])))=>i.map(i=>d[i]);
import{i as y,u as V,_ as O}from"./index-BZBl1bBK.js";import{d as K,ab as W,u as t,a7 as tt,r as v,a as T,w as z,a4 as M,a5 as R,a6 as l,c as o,aj as U,G as I,af as k,a9 as et,F as at,al as nt,ag as A,h as ot}from"./vue-vendor-BX3z0DRI.js";import{Q as G}from"./skeleton-BLzL0NKa.js";import{Q as st}from"./spin-Dif1E5Ka.js";import{u as dt}from"./index-BUvr80Hr.js";import{D as lt}from"./department.service-CaNKM9sv.js";import{C as rt}from"./vue3-count-to.esm-B-Ex2Uhy.js";import{F as S,J as ct,B as F,X as it,Y as ut,Z as pt,$ as mt}from"./antd-vendor-ChGXved8.js";import{_ as ft}from"./_plugin-vue_export-helper-DlAUqK2U.js";const gt={1:{text:"正常",color:"#52c41a"},2:{text:"旷工",color:"#ff4d4f"},3:{text:"迟到",color:"#faad14"},4:{text:"早退",color:"#faad14"},5:{text:"外出",color:"#1890ff"},6:{text:"出差",color:"#1890ff"},7:{text:"年假",color:"#52c41a"},8:{text:"事假",color:"#faad14"},9:{text:"病假",color:"#faad14"},10:{text:"婚假",color:"#52c41a"},11:{text:"丧假",color:"#8c8c8c"},12:{text:"产假",color:"#52c41a"},13:{text:"奖励产假",color:"#52c41a"},14:{text:"陪产假",color:"#52c41a"},15:{text:"探亲假",color:"#52c41a"},16:{text:"工伤假",color:"#faad14"},17:{text:"调休",color:"#52c41a"},18:{text:"产检假",color:"#52c41a"},19:{text:"流产假",color:"#faad14"},20:{text:"长期病假",color:"#faad14"},21:{text:"补签",color:"#1890ff"},22:{text:"休息",color:"#8c8c8c"},99:{text:"-",color:"#8c8c8c"}};class xt{static getAttendanceList(i){return y.get("/attendances",{params:i})}static getCompanyList(){return y.get("/company/list")}static updateCompanyList(i){return y.put("/company/list",{data:i})}static updateAttendance(i,D){return y.put("/attendances/".concat(i),{data:D})}static getAttendancesAdtStatuList(i){return y.get("/attendances/adtStatu/list",{params:{userId:i}})}}const vt={class:"attendance-middle-checkbox-group"},bt={class:"attendance-table"},_t=K({name:"AttendancePage",__name:"index",setup(Q){W(n=>({"6a78231f":"".concat(t(u).paddingLG,"px"),"2c753592":t(u).colorBgContainer,"0dfce7fc":"".concat(t(u).borderRadiusLG,"px"),"4c790b7e":t(u).colorBorderSecondary,"8b2ca8e4":"".concat(t(u).fontSizeLG,"px"),"61ab6ef2":"".concat(t(u).fontSizeXL,"px"),"11b6d538":"".concat(t(u).padding,"px"),65500879:t(u).colorBgElevated}));const i=A(()=>O(()=>import("./table-popover-CFD4Yd2E.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),D=A(()=>O(()=>import("./modal-BXhDqv9T.js"),__vite__mapDeps([12,9,4,1,2,3,5,13,8,6,14,11]))),X=A(()=>O(()=>import("./update-attendance-DdP-SPaB.js"),__vite__mapDeps([15,13,8,2,1,3,6,4,5,11,7,9,10]))),q=A(()=>O(()=>import("./drawer-6QaFcoY7.js").then(n=>n.d),__vite__mapDeps([16,4,1,2,3,5,6,8,17,11]))),{token:u}=dt(),{t:r}=tt(),N=v([]),b=v([]),L=v(!1),$=v(!1),h=v(!1),E=[{title:r("attendance.table.columns.key"),dataIndex:"key",key:"key",width:80,fixed:"left"},{title:r("attendance.table.columns.username"),dataIndex:"username",key:"username",width:150,fixed:"left"},{title:r("attendance.table.columns.workNumber"),dataIndex:"workNumber",key:"workNumber",width:150,fixed:"left"},{title:r("attendance.table.columns.departmentName"),dataIndex:"departmentName",key:"departmentName",width:150,fixed:"left"},{title:r("attendance.table.columns.mobile"),dataIndex:"mobile",key:"mobile",width:150,fixed:"left"}],B=v(E),C=T({total:0,rows:[]}),_=T({monthOfReport:1,tobeTaskCount:0,dayOfMonth:0,yearOfReport:2026,attendanceRecord:[]}),m=T({page:1,pagesize:10,deptID:b.value.join(",")}),p=T({day:"",adtStatu:0,userId:0,departmentId:0}),J=n=>{const{yearOfReport:e,monthOfReport:a}=_;return n.map(s=>{const c={key:s.id,id:s.id,departmentId:s.departmentId,departmentName:s.departmentName,mobile:s.mobile,username:s.username,workNumber:s.workNumber,attendanceRecord:s.attendanceRecord},g=s.attendanceRecord.reduce((x,f)=>{const d=parseInt(f.day.slice(6));return{...x,["".concat(e,"/").concat(a,"/").concat(d)]:f.adtStatu}},{});return{...c,...g}})},Y=n=>{const e=[],{yearOfReport:a,monthOfReport:s}=_;for(let c=1;c<=n;c++){const g="".concat(a,"/").concat(s,"/").concat(c);e.push({title:"".concat(s,"/").concat(c),dataIndex:g,key:g,width:80,align:"center",customRender:({text:x,record:f})=>{const d=f.attendanceRecord.find(w=>w.day===g);return gt[x]?ot(i,{username:f.username,yearOfReport:a,monthOfReport:s,dayOfReport:c,adtStatu:x,adtInTime:d==null?void 0:d.adtInTime,adtOutTime:d==null?void 0:d.adtOutTime,adtInPlace:d==null?void 0:d.adtInPlace,adtOutPlace:d==null?void 0:d.adtOutPlace,onClick:()=>{var w;p.userId=(w=f.id)!=null?w:0,p.departmentId=f.departmentId,p.day=g,p.adtStatu=x,h.value=!0}}):x}})}return e},Z=(n,e)=>{Object.assign(m,{page:n,pagesize:e}),P(m)},{run:P,loading:j}=V(xt.getAttendanceList,{onSuccess:({data:n})=>{const{yearOfReport:e,monthOfReport:a,tobeTaskCount:s,data:{rows:c}}=n;Object.assign(_,{tobeTaskCount:s,dayOfMonth:new Date(e,a,0).getDate(),attendanceRecord:c,yearOfReport:e,monthOfReport:a}),C.rows=J(c),C.total=n.data.total}}),{loading:H}=V(lt.getCompanyDepartmentList,{onSuccess:({data:n})=>{N.value=n.map(e=>({label:e.name,value:e.id}))}});return z(()=>_.dayOfMonth,n=>{n>0&&(B.value=[...E,...Y(n)])}),z(()=>b.value,()=>{m.deptID=b.value.join(","),P(m)}),(n,e)=>(R(),M(t(S),{class:"attendance-wrapper h-full",vertical:"",gap:"middle"},{default:l(()=>[o(t(S),{justify:"space-between",align:"center",class:"attendance-top"},{default:l(()=>[o(t(S),{vertical:"",align:"center",gap:"small"},{default:l(()=>[o(t(ct),{class:"attendance-top-title"},{default:l(()=>[I(k(t(r)("attendance.top.unprocessed")),1)]),_:1}),o(t(G),{paragraph:!1,active:"",loading:t(j)},{default:l(()=>[o(t(rt),{"start-val":0,"end-val":_.tobeTaskCount,duration:3e3,class:"attendance-top-total"},null,8,["end-val"])]),_:1},8,["loading"])]),_:1}),o(t(S),{gap:"middle"},{default:l(()=>[o(t(F),{onClick:e[0]||(e[0]=a=>L.value=!0)},{default:l(()=>[I(k(t(r)("attendance.actions.clockInRange")),1)]),_:1}),o(t(F),{type:"primary",onClick:e[1]||(e[1]=a=>$.value=!0)},{default:l(()=>[I(k(t(r)("attendance.actions.settings")),1)]),_:1})]),_:1})]),_:1}),o(t(S),{class:"attendance-middle",gap:"small",align:"flex-start"},{default:l(()=>[o(t(it),{class:"attendance-middle-label",level:5},{default:l(()=>[I(k(t(r)("attendance.filter.department"))+": ",1)]),_:1}),o(t(G),{active:"",title:!1,loading:t(H),paragraph:{rows:2}},{default:l(()=>[o(t(ut),{value:b.value,"onUpdate:value":e[2]||(e[2]=a=>b.value=a),class:"w-full"},{default:l(()=>[U("div",vt,[(R(!0),et(at,null,nt(N.value,a=>(R(),M(t(pt),{key:a.value.toString(),value:a.value},{default:l(()=>[I(k(a.label),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])]),_:1},8,["loading"])]),_:1}),U("div",bt,[o(t(st),{spinning:t(j)},{default:l(()=>[o(t(mt),{pagination:{position:["bottomCenter"],pageSize:m.pagesize,total:C.total,current:m.page,onChange:Z,showTotal:a=>t(r)("attendance.table.pagination.total",{total:a})},columns:B.value,"data-source":C.rows,scroll:{x:"max-content"},bordered:""},null,8,["pagination","columns","data-source"])]),_:1},8,["spinning"])]),o(t(q),{open:L.value,"onUpdate:open":e[3]||(e[3]=a=>L.value=a)},null,8,["open"]),o(t(D),{open:$.value,"onUpdate:open":e[4]||(e[4]=a=>$.value=a)},null,8,["open"]),o(t(X),{day:p.day,adtStatu:p.adtStatu,userId:p.userId,departmentId:p.departmentId,open:h.value,"onUpdate:open":e[5]||(e[5]=a=>h.value=a),onUpdate:e[6]||(e[6]=a=>t(P)(m))},null,8,["day","adtStatu","userId","departmentId","open"])]),_:1}))}}),yt=ft(_t,[["__scopeId","data-v-bef77a1a"]]),$t=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"}));export{gt as A,xt as a,$t as i};
