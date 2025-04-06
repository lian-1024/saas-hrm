const _=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,w=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,O=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function $(r,t){if(r==="__proto__"||r==="constructor"&&t&&typeof t=="object"&&"prototype"in t){E(r);return}return t}function E(r){console.warn('[destr] Dropping "'.concat(r,'" key to prevent prototype pollution.'))}function h(r,t={}){if(typeof r!="string")return r;if(r[0]==='"'&&r[r.length-1]==='"'&&r.indexOf("\\")===-1)return r.slice(1,-1);const e=r.trim();if(e.length<=9)switch(e.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!O.test(r)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return r}try{if(_.test(r)||w.test(r)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(r,$)}return JSON.parse(r)}catch(n){if(t.strict)throw n;return r}}function P(r,t){if(r==null)return;let e=r;for(let n=0;n<t.length;n++){if(e==null||e[t[n]]==null)return;e=e[t[n]]}return e}function d(r,t,e){if(e.length===0)return t;const n=e[0];return e.length>1&&(t=d(typeof r!="object"||r===null||!Object.prototype.hasOwnProperty.call(r,n)?Number.isInteger(Number(e[1]))?[]:{}:r[n],t,Array.prototype.slice.call(e,1))),Number.isInteger(Number(n))&&Array.isArray(r)?r.slice()[n]:Object.assign({},r,{[n]:t})}function N(r,t){if(r==null||t.length===0)return r;if(t.length===1){if(r==null)return r;if(Number.isInteger(t[0])&&Array.isArray(r))return Array.prototype.slice.call(r,0).splice(t[0],1);const e={};for(const n in r)e[n]=r[n];return delete e[t[0]],e}if(r[t[0]]==null){if(Number.isInteger(t[0])&&Array.isArray(r))return Array.prototype.concat.call([],r);const e={};for(const n in r)e[n]=r[n];return e}return d(r,N(r[t[0]],Array.prototype.slice.call(t,1)),[t[0]])}function I(r,t){return t.map(e=>e.split(".")).map(e=>[e,P(r,e)]).filter(e=>e[1]!==void 0).reduce((e,n)=>d(e,n[1],n[0]),{})}function S(r,t){return t.map(e=>e.split(".")).reduce((e,n)=>N(e,n),r)}function g(r,{storage:t,serializer:e,key:n,debug:s,pick:o,omit:l,beforeHydrate:c,afterHydrate:i},u,a=!0){try{a&&(c==null||c(u));const f=t.getItem(n);if(f){const p=e.deserialize(f),y=o?I(p,o):p,A=l?S(y,l):y;r.$patch(A)}a&&(i==null||i(u))}catch(f){s&&console.error("[pinia-plugin-persistedstate]",f)}}function m(r,{storage:t,serializer:e,key:n,debug:s,pick:o,omit:l}){try{const c=o?I(r,o):r,i=l?S(c,l):c,u=e.serialize(i);t.setItem(n,u)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function z(r,t,e){const{pinia:n,store:s,options:{persist:o=e}}=r;if(!o)return;if(!(s.$id in n.state.value)){const i=n._s.get(s.$id.replace("__hot:",""));i&&Promise.resolve().then(()=>i.$persist());return}const c=(Array.isArray(o)?o:o===!0?[{}]:[o]).map(t);s.$hydrate=({runHooks:i=!0}={})=>{c.forEach(u=>{g(s,u,r,i)})},s.$persist=()=>{c.forEach(i=>{m(s.$state,i)})},c.forEach(i=>{g(s,i,r),s.$subscribe((u,a)=>m(a,i),{detached:!0})})}function F(r={}){return function(t){var e;z(t,n=>{var s,o,l,c,i,u,a;return{key:(r.key?r.key:f=>f)((s=n.key)!=null?s:t.store.$id),debug:(l=(o=n.debug)!=null?o:r.debug)!=null?l:!1,serializer:(i=(c=n.serializer)!=null?c:r.serializer)!=null?i:{serialize:f=>JSON.stringify(f),deserialize:f=>h(f)},storage:(a=(u=n.storage)!=null?u:r.storage)!=null?a:window.localStorage,beforeHydrate:n.beforeHydrate,afterHydrate:n.afterHydrate,pick:n.pick,omit:n.omit}},(e=r.auto)!=null?e:!1)}}export{F as createPersistedState};
