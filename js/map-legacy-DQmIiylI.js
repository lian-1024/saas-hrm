System.register(["./index-legacy-FCYPyWIL.js","./drawer-legacy-DjxaYW61.js","./vue-vendor-legacy-x9FjLCOD.js","./antd-vendor-legacy-C9XdHwF7.js","./lodash-vendor-legacy-D6Hi_gR3.js","./axios-vendor-legacy-B4nRALG8.js","./skeleton-legacy-KE-_dRl6.js","./index-legacy-CHUU-5It.js","./index-legacy-JyVfonfR.js","./spin-legacy-NTWxnDiJ.js","./department.service-legacy-BkPFY2K_.js","./vue3-count-to.esm-legacy-jOYS7Gk9.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./generate-menu-item-legacy-SOaWgP50.js"],(function(e,l){"use strict";var s,o,t,a,n,r,i,u,c,d,p,g,y,m,v,f;return{setters:[e=>{s=e.c,o=e.Y,t=e.J,a=e.W,n=e.F},e=>{r=e.c},e=>{i=e.d,u=e.af,c=e.ag,d=e.j,p=e.r,g=e.a2,y=e.a3,m=e.a4,v=e.c,f=e.u},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",i({name:"AttendanceScopedMap",__name:"map",props:u({scopedRadius:{},scopedCenter:{}},{scopedRadius:{default:500},scopedRadiusModifiers:{},scopedCenter:{default:{lat:39.91799,lng:116.397027}},scopedCenterModifiers:{}}),emits:["update:scopedRadius","update:scopedCenter"],setup(e){const{isDark:l}=s(),i=c(e,"scopedRadius"),u=c(e,"scopedCenter"),j=d((()=>r(i.value))),x=p(15),h=e=>{console.log(e)},k={scale:{},zoom:{position:"topRight"}},b={mapStyleId:l?"style2":"style1"},C={circle:{color:"rgba(41,91,255,0.16)",showBorder:!0,borderColor:"rgba(41,91,255,1)",borderWidth:2}},R=d((()=>[{styleId:"circle",radius:i.value,center:u.value}])),_={zIndex:1},w={color:"#333",size:20,offset:{x:0,y:0},angle:0,alignment:"center",verticalAlignment:"middle",backgroundColor:"#ffffff",padding:"15px"},z=d((()=>[{id:"label",styleId:"label",position:u.value,content:`${j.value}可打卡`,properties:{title:"label"}}])),I=d((()=>({geometries:[{styleId:"marker",position:u.value}],styles:{marker:{width:20,height:30,anchor:{x:10,y:30}}},options:{minZoom:5,maxZoom:15}}))),M=p(),S=d((()=>{}));return(e,l)=>(y(),g(f(n),{ref_key:"mapRef",ref:M,options:b,class:"h-full w-full","api-key":S.value,center:u.value,zoom:x.value,control:k,onClick:h},{default:m((()=>[v(f(o),{geometries:R.value,styles:C,options:_},null,8,["geometries"]),v(f(t),{styles:w,geometries:z.value},null,8,["geometries"]),v(f(a),{geometries:I.value.geometries,styles:I.value.styles,options:I.value.options},null,8,["geometries","styles","options"])])),_:1},8,["api-key","center","zoom"]))}}))}}}));
