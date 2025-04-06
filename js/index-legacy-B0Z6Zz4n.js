System.register([],(function(e,r){"use strict";return{execute:function(){e("createPersistedState",(function(e={}){return function(o){!function(e,r,t){const{pinia:n,store:i,options:{persist:o=t}}=e;if(!o)return;if(!(i.$id in n.state.value)){const e=n._s.get(i.$id.replace("__hot:",""));return void(e&&Promise.resolve().then((()=>e.$persist())))}const s=(Array.isArray(o)?o:!0===o?[{}]:[o]).map(r);i.$hydrate=({runHooks:r=!0}={})=>{s.forEach((t=>{l(i,t,e,r)}))},i.$persist=()=>{s.forEach((e=>{f(i.$state,e)}))},s.forEach((r=>{l(i,r,e),i.$subscribe(((e,t)=>f(t,r)),{detached:!0})}))}(o,(s=>({key:(e.key?e.key:e=>e)(s.key??o.store.$id),debug:s.debug??e.debug??!1,serializer:s.serializer??e.serializer??{serialize:e=>JSON.stringify(e),deserialize:e=>function(e,o={}){if("string"!=typeof e)return e;if('"'===e[0]&&'"'===e[e.length-1]&&-1===e.indexOf("\\"))return e.slice(1,-1);const s=e.trim();if(s.length<=9)switch(s.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!n.test(e)){if(o.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(r.test(e)||t.test(e)){if(o.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,i)}return JSON.parse(e)}catch(u){if(o.strict)throw u;return e}}(e)},storage:s.storage??e.storage??window.localStorage,beforeHydrate:s.beforeHydrate,afterHydrate:s.afterHydrate,pick:s.pick,omit:s.omit})),e.auto??!1)}}));const r=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,t=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,n=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function i(e,r){if(!("__proto__"===e||"constructor"===e&&r&&"object"==typeof r&&"prototype"in r))return r;!function(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}(e)}function o(e,r){if(null==e)return;let t=e;for(let n=0;n<r.length;n++){if(null==t||null==t[r[n]])return;t=t[r[n]]}return t}function s(e,r,t){if(0===t.length)return r;const n=t[0];return t.length>1&&(r=s("object"==typeof e&&null!==e&&Object.prototype.hasOwnProperty.call(e,n)?e[n]:Number.isInteger(Number(t[1]))?[]:{},r,Array.prototype.slice.call(t,1))),Number.isInteger(Number(n))&&Array.isArray(e)?e.slice()[n]:Object.assign({},e,{[n]:r})}function u(e,r){if(null==e||0===r.length)return e;if(1===r.length){if(null==e)return e;if(Number.isInteger(r[0])&&Array.isArray(e))return Array.prototype.slice.call(e,0).splice(r[0],1);const t={};for(const r in e)t[r]=e[r];return delete t[r[0]],t}if(null==e[r[0]]){if(Number.isInteger(r[0])&&Array.isArray(e))return Array.prototype.concat.call([],e);const t={};for(const r in e)t[r]=e[r];return t}return s(e,u(e[r[0]],Array.prototype.slice.call(r,1)),[r[0]])}function a(e,r){return r.map((e=>e.split("."))).map((r=>[r,o(e,r)])).filter((e=>void 0!==e[1])).reduce(((e,r)=>s(e,r[1],r[0])),{})}function c(e,r){return r.map((e=>e.split("."))).reduce(((e,r)=>u(e,r)),e)}function l(e,{storage:r,serializer:t,key:n,debug:i,pick:o,omit:s,beforeHydrate:u,afterHydrate:l},f,p=!0){try{p&&u?.(f);const i=r.getItem(n);if(i){const r=t.deserialize(i),n=o?a(r,o):r,u=s?c(n,s):n;e.$patch(u)}p&&l?.(f)}catch(y){i&&console.error("[pinia-plugin-persistedstate]",y)}}function f(e,{storage:r,serializer:t,key:n,debug:i,pick:o,omit:s}){try{const i=o?a(e,o):e,u=s?c(i,s):i,l=t.serialize(u);r.setItem(n,l)}catch(u){i&&console.error("[pinia-plugin-persistedstate]",u)}}}}}));
