(()=>{var e={};e.id=129,e.ids=[129],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},98258:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.ZP,__next_app__:()=>d,originalPathname:()=>c,pages:()=>l,routeModule:()=>u,tree:()=>p});var s=r(50482),a=r(69108),i=r(83543),n=r(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let p=["",{children:["[lng]",{children:["(pages)",{children:["privacy-policy",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,40335)),"D:\\Projects\\app-market-place-web\\src\\app\\[lng]\\(pages)\\privacy-policy\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,13088)),"D:\\Projects\\app-market-place-web\\src\\app\\[lng]\\(pages)\\layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,80155)),"D:\\Projects\\app-market-place-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],l=["D:\\Projects\\app-market-place-web\\src\\app\\[lng]\\(pages)\\privacy-policy\\page.tsx"],c="/[lng]/(pages)/privacy-policy/page",d={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lng]/(pages)/privacy-policy/page",pathname:"/[lng]/privacy-policy",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},82129:(e,t,r)=>{Promise.resolve().then(r.bind(r,60178))},60178:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(95344),a=r(3729),i=r(84359),n=r(84047),o=r(43253),p=r.n(o),l=r(56761),c=r(89410),d=r(77974),u=r(15099),x=r(83306),g=r(98809);let h=()=>{let{t:e}=(0,u.$)("en","about-us"),t=(0,l.Z)(),[r,o]=(0,a.useState)(!0),[h,y]=(0,a.useState)(null);async function m(){try{let e=await (0,g.Z)("Privacy_Policy"),t=e?.staticContent;y(t),o(!1)}catch(e){}}return(0,a.useEffect)(()=>{m()},[]),(0,s.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:t.palette.lightYellow,boxShadow:`inset 0px 4px 11.2px 0px ${t.palette.yellowShadow}, inset 0px -4px 11.2px 0px ${t.palette.yellowShadow}`},children:[r&&s.jsx(i.Z,{sx:{height:"100vh"},children:s.jsx(x.Z,{})}),!r&&(0,s.jsxs)(s.Fragment,{children:[s.jsx(i.Z,{sx:{fontSize:"40px",fontWeight:700,lineHeight:"50px",marginTop:"75px"},children:h?.page_title||e("noDataFound")}),s.jsx(i.Z,{className:p().privacyPolicyMessage,sx:{width:"75%",fontSize:"14px",fontWeight:400,lineHeight:"26px",marginTop:"20px",marginBottom:"17px"},children:h?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:[" ",h?.paragraph?.para1||e("noPolicy")]}),(0,s.jsxs)("p",{children:[" ",h?.paragraph?.para2||e("noPolicy")]}),(0,s.jsxs)("p",{children:[" ",h?.paragraph?.para3||e("noPolicy")]}),(0,s.jsxs)("p",{children:[" ",h?.paragraph?.para4||e("noPolicy")]}),(0,s.jsxs)("p",{children:[" ",h?.paragraph?.para5||e("noPolicy")]}),(0,s.jsxs)("p",{children:[" ",h?.paragraph?.para6||e("noPolicy")]})]}):(0,s.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"10%"},children:[s.jsx(c.default,{src:d.Z,alt:"No Data Found",height:"80",width:"82"}),(0,s.jsxs)(n.Z,{sx:{color:t.palette.productCard,fontWeight:"500",fontSize:"14px",lineHeight:"21px",letterSpacing:"1.5%",marginTop:"2%",marginBottom:"8%"},children:[" ",e("noDataFound")]})]})})]})]})}},83306:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(95344),a=r(12997),i=r(44716),n=r(84359);function o(){return s.jsx(n.Z,{sx:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(a.gy,{height:"50",width:"50",color:i.T$,ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})})}},98809:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(93329);async function a(e="Home"){let t=await s.Z.get(`StaticContent?key=${e}`);if(t.data?.data_response?.data?.staticContent)return t.data.data_response.data.staticContent=JSON.parse(t.data.data_response.data.staticContent),t.data.data_response.data;throw Error("Failed to load home data")}},43253:e=>{e.exports={privacyPolicyMessage:"style_privacyPolicyMessage__S63YA"}},40335:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let s=(0,r(86843).createProxy)(String.raw`D:\Projects\app-market-place-web\src\app\[lng]\(pages)\privacy-policy\page.tsx`),{__esModule:a,$$typeof:i}=s,n=s.default},77974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s={src:"/_next/static/media/no_data_found.41d4ca63.svg",height:80,width:82,blurWidth:0,blurHeight:0}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1645,7137,1950,2997,6470,6576,4879,1364,7594,6906,8592,6875,7177],()=>r(98258));module.exports=s})();