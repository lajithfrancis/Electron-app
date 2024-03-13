(()=>{var e={};e.id=619,e.ids=[619],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7101:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u});var n=r(7096),i=r(6132),o=r(7284),a=r.n(o),s=r(2564),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let u=["",{children:["[lng]",{children:["[...not-found]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5958)),"D:\\Projects\\app-p2p-office-web\\src\\app\\[lng]\\[...not-found]\\page.tsx"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,4775)),"D:\\Projects\\app-p2p-office-web\\src\\app\\[lng]\\[...not-found]\\loading.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9113)),"D:\\Projects\\app-p2p-office-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\Projects\\app-p2p-office-web\\src\\app\\[lng]\\[...not-found]\\page.tsx"],c="/[lng]/[...not-found]/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/[lng]/[...not-found]/page",pathname:"/[lng]/[...not-found]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},474:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3579,23)),Promise.resolve().then(r.t.bind(r,619,23)),Promise.resolve().then(r.t.bind(r,1459,23)),Promise.resolve().then(r.t.bind(r,3456,23)),Promise.resolve().then(r.t.bind(r,847,23)),Promise.resolve().then(r.t.bind(r,7303,23))},6839:(e,t,r)=>{Promise.resolve().then(r.bind(r,7293))},3432:(e,t,r)=>{Promise.resolve().then(r.bind(r,9973))},5303:()=>{},9174:(e,t,r)=>{"use strict";var n=r(1769);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.generateColumnGap=P,t.generateDirection=j,t.generateGrid=b,t.generateRowGap=k,t.resolveSpacingClasses=O,t.resolveSpacingStyles=$;var i=n(r(7542)),o=n(r(5233)),a=v(r(4218));n(r(4324));var s=n(r(8273)),l=r(9216),u=r(6844);n(r(2687));var d=n(r(2353)),c=n(r(68)),p=n(r(6087)),f=n(r(5580)),h=v(r(2465)),g=r(3854);let x=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function y(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function b({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((n,i)=>{let a={};if(t[i]&&(r=t[i]),!r)return n;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let s=(0,l.unstable_resolveBreakpointValues)({values:t.columns,breakpoints:e.breakpoints.values}),u="object"==typeof s?s[i]:s;if(null==u)return n;let d=`${Math.round(r/u*1e8)/1e6}%`,c={};if(t.container&&t.item&&0!==t.columnSpacing){let r=e.spacing(t.columnSpacing);if("0px"!==r){let e=`calc(${d} + ${y(r)})`;c={flexBasis:e,maxWidth:e}}}a=(0,o.default)({flexBasis:d,flexGrow:0,maxWidth:d},c)}return 0===e.breakpoints.values[i]?Object.assign(n,a):n[e.breakpoints.up(i)]=a,n},{})}function j({theme:e,ownerState:t}){let r=(0,l.unstable_resolveBreakpointValues)({values:t.direction,breakpoints:e.breakpoints.values});return(0,l.handleBreakpoints)({theme:e},r,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${h.default.item}`]={maxWidth:"none"}),t})}function w({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(e=>{""===r&&0!==t[e]&&(r=e)});let n=Object.keys(e).sort((t,r)=>e[t]-e[r]);return n.slice(0,n.indexOf(r))}function k({theme:e,ownerState:t}){let{container:r,rowSpacing:n}=t,i={};if(r&&0!==n){let t;let r=(0,l.unstable_resolveBreakpointValues)({values:n,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=w({breakpoints:e.breakpoints.values,values:r})),i=(0,l.handleBreakpoints)({theme:e},r,(r,n)=>{var i;let o=e.spacing(r);return"0px"!==o?{marginTop:`-${y(o)}`,[`& > .${h.default.item}`]:{paddingTop:y(o)}}:null!=(i=t)&&i.includes(n)?{}:{marginTop:0,[`& > .${h.default.item}`]:{paddingTop:0}}})}return i}function P({theme:e,ownerState:t}){let{container:r,columnSpacing:n}=t,i={};if(r&&0!==n){let t;let r=(0,l.unstable_resolveBreakpointValues)({values:n,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=w({breakpoints:e.breakpoints.values,values:r})),i=(0,l.handleBreakpoints)({theme:e},r,(r,n)=>{var i;let o=e.spacing(r);return"0px"!==o?{width:`calc(100% + ${y(o)})`,marginLeft:`-${y(o)}`,[`& > .${h.default.item}`]:{paddingLeft:y(o)}}:null!=(i=t)&&i.includes(n)?{}:{width:"100%",marginLeft:0,[`& > .${h.default.item}`]:{paddingLeft:0}}})}return i}function $(e,t,r={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r[`spacing-xs-${String(e)}`]];let n=[];return t.forEach(t=>{let i=e[t];Number(i)>0&&n.push(r[`spacing-${t}-${String(i)}`])}),n}let _=(0,d.default)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{container:n,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:l,breakpoints:u}=r,d=[];n&&(d=$(a,u,t));let c=[];return u.forEach(e=>{let n=r[e];n&&c.push(t[`grid-${e}-${String(n)}`])}),[t.root,n&&t.container,o&&t.item,l&&t.zeroMinWidth,...d,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...c]}})(({ownerState:e})=>(0,o.default)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),j,k,P,b);function O(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let r=[];return t.forEach(t=>{let n=e[t];if(Number(n)>0){let e=`spacing-${t}-${String(n)}`;r.push(e)}}),r}let S=e=>{let{classes:t,container:r,direction:n,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:l}=e,d=[];r&&(d=O(o,l));let c=[];l.forEach(t=>{let r=e[t];r&&c.push(`grid-${t}-${String(r)}`)});let p={root:["root",r&&"container",i&&"item",s&&"zeroMinWidth",...d,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...c]};return(0,u.unstable_composeClasses)(p,h.getGridUtilityClass,t)},M=a.forwardRef(function(e,t){let r=(0,c.default)({props:e,name:"MuiGrid"}),{breakpoints:n}=(0,p.default)(),u=(0,l.unstable_extendSxProp)(r),{className:d,columns:h,columnSpacing:m,component:v="div",container:y=!1,direction:b="row",item:j=!1,rowSpacing:w,spacing:k=0,wrap:P="wrap",zeroMinWidth:$=!1}=u,O=(0,i.default)(u,x),M=w||k,C=m||k,W=a.useContext(f.default),G=y?h||12:W,N={},T=(0,o.default)({},O);n.keys.forEach(e=>{null!=O[e]&&(N[e]=O[e],delete T[e])});let q=(0,o.default)({},u,{columns:G,container:y,direction:b,item:j,rowSpacing:M,columnSpacing:C,wrap:P,zeroMinWidth:$,spacing:k},N,{breakpoints:n.keys}),E=S(q);return(0,g.jsx)(f.default.Provider,{value:G,children:(0,g.jsx)(_,(0,o.default)({ownerState:q,className:(0,s.default)(E.root,d),as:v,ref:t},T))})});t.default=M},5580:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(4218));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}let o=n.createContext();t.default=o},2465:(e,t,r)=>{"use strict";var n=r(1769);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getGridUtilityClass=function(e){return(0,o.default)("MuiGrid",e)};var i=n(r(9015)),o=n(r(3407));let a=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],s=(0,i.default)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...a.map(e=>`grid-xs-${e}`),...a.map(e=>`grid-sm-${e}`),...a.map(e=>`grid-md-${e}`),...a.map(e=>`grid-lg-${e}`),...a.map(e=>`grid-xl-${e}`)]);t.default=s},769:(e,t,r)=>{"use strict";var n=r(1769);Object.defineProperty(t,"__esModule",{value:!0});var i={gridClasses:!0};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"gridClasses",{enumerable:!0,get:function(){return a.default}});var o=n(r(9174)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(2465));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}Object.keys(a).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(i,e))&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))})},2687:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(273);t.default=n.unstable_requirePropFactory},7293:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(3854),i=r(769),o=r.n(i);r(4218);var a=r(7915);let s="#4fa94d",l={"aria-busy":!0,role:"progressbar"},u=(0,a.ZP).div`
  display: ${e=>e.$visible?"flex":"none"};
`,d=(0,a.F4)`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;(0,a.ZP).path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${d} ${1.6}s linear infinite;
`;let c=(0,a.F4)`
to {
   transform: rotate(360deg);
 }
`;(0,a.ZP).svg`
  animation: ${c} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,(0,a.ZP).polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;let p=({height:e=80,width:t=80,strokeWidth:r=2,radius:i=1,color:o=s,ariaLabel:a="tail-spin-loading",wrapperStyle:d,wrapperClass:c,visible:p=!0})=>{let f=parseInt(String(r)),h=f+36,g=f/2,x=g+parseInt(String(i))-1;return(0,n.jsx)(u,{style:d,$visible:p,className:c,"data-testid":"tail-spin-loading","aria-label":a,...l,children:(0,n.jsxs)("svg",{width:t,height:e,viewBox:`0 0 ${h} ${h}`,xmlns:"http://www.w3.org/2000/svg","data-testid":"tail-spin-svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a",children:[(0,n.jsx)("stop",{stopColor:o,stopOpacity:"0",offset:"0%"}),(0,n.jsx)("stop",{stopColor:o,stopOpacity:".631",offset:"63.146%"}),(0,n.jsx)("stop",{stopColor:o,offset:"100%"})]})}),(0,n.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,n.jsxs)("g",{transform:`translate(${g} ${g})`,children:[(0,n.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:o,strokeWidth:r,children:(0,n.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),(0,n.jsx)("circle",{fill:"#fff",cx:"36",cy:"18",r:x,children:(0,n.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})})},f=(0,a.F4)`
to {
   stroke-dashoffset: 136;
 }
`;(0,a.ZP).polygon`
  stroke-dasharray: 17;
  animation: ${f} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,(0,a.ZP).svg`
  transform-origin: 50% 65%;
`;var h=r(6346);function g(){return n.jsx(o(),{sx:{padding:"16px",marginTop:"54px",width:"100%",height:"calc(100vh - 220px)"},children:n.jsx(p,{height:"50",width:"50",radius:"5",color:h.Z.colors.colorName1,ariaLabel:"loading",wrapperStyle:{width:"100%",height:"calc(100vh - 220px)",justifyContent:"center",alignItems:"center"}})})}},9973:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var n=r(3854),i=r(7915),o=r(388),a=r.n(o);let s=a();var l=r(4218);let u=(0,l.createContext)(null);function d({children:e}){let[t,r]=(0,l.useState)([]);return n.jsx(u.Provider,{value:{quotes:t,addQuote:function(e){r([...t,e])}},children:e})}var c=r(3716),p=r(6214),f=r(6595);function h({children:e}){let[t]=(0,l.useState)(new c.S);return(0,n.jsxs)(p.aH,{client:t,children:[e,n.jsx(f.t,{initialIsOpen:!1})]})}var g=r(3927),x=r.n(g),m=r(8279),v=r.n(m);function y(e){return n.jsx("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:n.jsx("path",{d:"M12.199 5.8L8.999 9m0 0l-3.2 3.2m3.2-3.2l-3.2-3.2m3.2 3.2l3.2 3.2M9 17A8 8 0 109 1a8 8 0 000 16z",stroke:"currentColor",strokeWidth:1.314,strokeLinecap:"round",strokeLinejoin:"round"})})}let b=(0,l.createContext)(null);function j({children:e}){let[t,r]=(0,l.useState)();function i(){r(void 0)}return(0,n.jsxs)(b.Provider,{value:r,children:[e,!!t&&n.jsx(x(),{anchorOrigin:{vertical:"top",horizontal:"right"},open:!0,onClose:i,autoHideDuration:4e3,ClickAwayListenerProps:{onClickAway:()=>void 0},sx:{padding:"0 12px",borderRadius:"4px"},children:(0,n.jsxs)(v(),{severity:t.type||"error",sx:{display:"flex",fontSize:"12px","& .MuiAlert-icon":{paddingTop:"8px","& svg":{height:"16px",width:"16px"}}},children:[t.message,n.jsx(y,{style:{cursor:"pointer",marginLeft:"50px",marginBottom:"-4px"},onClick:i,width:16,height:16})]})})]})}var w=r(1018);function k({children:e}){let[t]=(0,l.useState)(()=>new i.qH);return(0,w.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),n.jsx(n.Fragment,{children:e})}),n.jsx(i.LC,{sheet:t.instance,children:e})}let P={createGlobalStyle:i.vJ},$=P.createGlobalStyle`
  body {
    height: 100%;
  }
  // your global styles
`;var _=r(6346),O=r(8157),S=r(6702),M=r(7952);let C=(0,S.xC)({reducer:{todoReducer:M.ZP}}),W=function({children:e}){return n.jsx(O.zt,{store:C,children:e})};function G({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[n.jsx("title",{children:"Vendor Portal Admin Panel"}),n.jsx("body",{className:s.className,children:(0,n.jsxs)(k,{children:[n.jsx($,{}),n.jsx(i.f6,{theme:_.Z,children:n.jsx(h,{children:n.jsx(j,{children:n.jsx(d,{children:n.jsx(W,{children:e})})})})})]})})]})}},7952:(e,t,r)=>{"use strict";r.d(t,{CA:()=>s,Xd:()=>a,ZP:()=>l,rk:()=>o});var n=r(6702);let i=(0,n.oM)({name:"todo",initialState:{list:[],user:"todo"},reducers:{addTodo:(e,t)=>{e.list.push(t.payload)},removeTodo:(e,t)=>{e.list=e.list.filter(e=>e.id!==t.payload)},toggleTodo:(e,t)=>{let r=e.list.find(e=>e.id===t.payload);r&&(r.done=!r.done)}}}),{addTodo:o,removeTodo:a,toggleTodo:s}=i.actions,l=i.reducer},6346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let n={colors:{primary:"#fff",secondary:"#13a4cc",backgroundColor:"#384c4c"}}},4656:(e,t,r)=>{"use strict";e.exports=r(7096).vendored["react-rsc"].ReactJsxRuntime},4775:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>o,default:()=>l});var n=r(5153);let i=(0,n.createProxy)(String.raw`D:\Projects\app-p2p-office-web\src\app\[lng]\[...not-found]\loading.tsx`),{__esModule:o,$$typeof:a}=i,s=i.default,l=s},5958:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(4656);let i=require("better-sqlite3");var o=r.n(i);let a=require("os");var s=r(1017),l=r.n(s);let u=new(o())(l().join((0,a.homedir)()+"/mydb.db"));function d(){return n.jsx("h3",{children:"404 - not found"})}console.log("path: ",l().join((0,a.homedir)()+"/mydb.db")),u.exec("CREATE TABLE IF NOT EXISTS cats('name' varchar, 'surname' varchar, 'age' varchar);")},9113:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>o,default:()=>l});var n=r(5153);let i=(0,n.createProxy)(String.raw`D:\Projects\app-p2p-office-web\src\app\layout.tsx`),{__esModule:o,$$typeof:a}=i,s=i.default,l=s}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[330],()=>r(7101));module.exports=n})();