(()=>{var e={};e.id=1145,e.ids=[1145],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},44544:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.ZP,__next_app__:()=>c,originalPathname:()=>p,pages:()=>l,routeModule:()=>u,tree:()=>d});var s=t(50482),a=t(69108),i=t(83543),o=t(68300),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);t.d(r,n);let d=["",{children:["[lng]",{children:["passwordSetting",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,11379)),"D:\\Projects\\app-market-place-web\\src\\app\\[lng]\\passwordSetting\\page.tsx"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,18788)),"D:\\Projects\\app-market-place-web\\src\\app\\[lng]\\passwordSetting\\loading.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,80155)),"D:\\Projects\\app-market-place-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"]}],l=["D:\\Projects\\app-market-place-web\\src\\app\\[lng]\\passwordSetting\\page.tsx"],p="/[lng]/passwordSetting/page",c={require:t,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lng]/passwordSetting/page",pathname:"/[lng]/passwordSetting",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2564:(e,r,t)=>{Promise.resolve().then(t.bind(t,48359))},56640:(e,r,t)=>{Promise.resolve().then(t.bind(t,2842))},48854:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var s=t(3729),a=t(86234),i=t(40044),o=t(71016);let n=s.useSyncExternalStore;function d(e,r={}){let t=(0,o.Z)(),{defaultMatches:d=!1,matchMedia:l=null,ssrMatchMedia:p=null,noSsr:c=!1}=(0,i.Z)({name:"MuiUseMediaQuery",props:r,theme:t}),u="function"==typeof e?e(t):e;return(void 0!==n?function(e,r,t,a,i){let o=s.useCallback(()=>r,[r]),d=s.useMemo(()=>{if(i&&t)return()=>t(e).matches;if(null!==a){let{matches:r}=a(e);return()=>r}return o},[o,e,a,i,t]),[l,p]=s.useMemo(()=>{if(null===t)return[o,()=>()=>{}];let r=t(e);return[()=>r.matches,e=>(r.addListener(e),()=>{r.removeListener(e)})]},[o,t,e]);return n(p,l,d)}:function(e,r,t,i,o){let[n,d]=s.useState(()=>o&&t?t(e).matches:i?i(e).matches:r);return(0,a.Z)(()=>{let r=!0;if(!t)return;let s=t(e),a=()=>{r&&d(s.matches)};return a(),s.addListener(a),()=>{r=!1,s.removeListener(a)}},[e,t]),n})(u=u.replace(/^@media( ?)/m,""),d,l,p,c)}},48359:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(95344),a=t(83306);function i(){return s.jsx(a.Z,{})}},2842:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>v});var s=t(95344),a=t(3729),i=t(43584),o=t(43809),n=t(80443),d=t(72833),l=t(84502),p=t(8428),c=t(44716),u=t(92607),x=t.n(u),g=t(56542),_=t(57993),h=t(96056);let m={src:"/_next/static/media/visibility_on_red.d855557f.svg",height:15,width:21,blurWidth:0,blurHeight:0},b={src:"/_next/static/media/visibility_off_red.b5a3a94e.svg",height:24,width:24,blurWidth:0,blurHeight:0};var f=t(89410),w=t(15099),P=t(79119);let v=()=>{let e=(0,p.useRouter)(),{t:r}=(0,w.$)("en","authentication"),[t,u]=(0,a.useState)(!1),[v,j]=(0,a.useState)(!1),C={textTransform:"none",borderRadius:"50px",fontSize:"12px",height:"35px",width:"180px"},[y,F]=(0,a.useState)({password:"",confirmPassword:""}),E=l.Ry().shape({password:l.Z_().required(r("newPassword")).matches(P.gt,r("passwordCriteriaMessage")),confirmPassword:l.Z_().required(r("confirmPasswordMessage"))}),[Z,S]=(0,a.useState)({password:"",confirmPassword:""}),q=e=>{let{name:r,value:t}=e.target;S(e=>({...e,[r]:""})),F(e=>({...e,[r]:t}))},$=async e=>{e.preventDefault();try{await E.validate(y,{abortEarly:!1}).then(()=>{y.password!==y.confirmPassword?S({password:r("passwordNotMatchedError"),confirmPassword:r("passwordMismatch")}):S({password:"",confirmPassword:""})})}catch(e){if(e instanceof l.p8){let r={};e.inner.forEach(e=>{r[e.path??""]=e.message}),S(e=>({...e,...r}))}}},N=()=>Z.password?Z.password:0===y.password.length&&0===y.confirmPassword.length?"":P.yS.test(y.password)?"":r("passwordCriteriaMessage");return s.jsx(g.Z,{children:(0,s.jsxs)("div",{className:x().passwordResetWrapper,children:[s.jsx("span",{className:x().setPasswordText,children:r("setPassword")}),s.jsx("br",{}),s.jsx("span",{className:x().strongPassword,children:r("strongPasswordText")}),(0,s.jsxs)("div",{style:{marginTop:"50px"},children:[(0,s.jsxs)("div",{className:x().inputField,style:{marginBottom:N()?"30px":"0"},children:[s.jsx("p",{className:x().requiredLabel,children:r("password")}),(0,s.jsxs)(i.Z,{className:x().inputFields,elevation:0,component:"form",sx:{display:"flex",border:Z.password?`1px solid ${c.KE} `:`1px solid ${c.Ux} `,backgroundColor:Z.password?c.w$:c.ix,height:"50px",alignItems:"center",borderRadius:"5px",width:"inherit",":focus-within":{border:`1px solid ${c.Ux} `}},children:[s.jsx(o.ZP,{sx:{ml:1,mr:1,flex:1,color:c.d$,fontSize:"16px",fontWeight:"600"},type:t?"text":"password",inputProps:{"aria-label":"password"},autoComplete:"off",name:"password",onChange:q}),s.jsx(n.Z,{onClick:()=>{u(!t)},children:t?s.jsx(f.default,{src:Z.confirmPassword?m:_.Z,width:24,height:24,alt:"eye-icon"}):s.jsx(f.default,{src:Z.confirmPassword?b:h.Z,width:24,height:24,alt:"eye-icon"})})]}),s.jsx("p",{className:`${x().error} ${x().confirmPasswordError}`,children:N()})]}),(0,s.jsxs)("div",{className:x().inputField,children:[s.jsx("p",{className:x().requiredLabel,children:r("confirmPassword")}),(0,s.jsxs)(i.Z,{className:x().inputFields,elevation:0,component:"form",sx:{display:"flex",border:Z.confirmPassword?`1px solid ${c.KE} `:`1px solid ${c.Ux} `,backgroundColor:Z.confirmPassword?c.w$:c.ix,height:"50px",alignItems:"center",borderRadius:"5px",width:"inherit",":focus-within":{border:`1px solid ${c.Ux} `}},children:[s.jsx(o.ZP,{sx:{ml:1,mr:1,flex:1,color:c.d$,fontSize:"16px",fontWeight:"600"},type:v?"text":"password",inputProps:{"aria-label":"password"},autoComplete:"off",name:"confirmPassword",onChange:q}),s.jsx(n.Z,{onClick:()=>{j(!v)},children:v?s.jsx(f.default,{src:Z.confirmPassword?m:_.Z,width:24,height:24,alt:"eye-icon"}):s.jsx(f.default,{src:Z.confirmPassword?b:h.Z,width:24,height:24,alt:"eye-icon"})})]}),s.jsx("p",{className:`${x().error} ${x().confirmPasswordError}`,children:Z.confirmPassword})]})]}),(0,s.jsxs)("div",{className:x().buttonGrp,children:[s.jsx(d.Z,{variant:"outlined",sx:{"&.MuiButtonBase-root":{...C,color:c.Hh,border:`1px solid ${c.L0}`,backgroundColor:c.ix,boxShadow:c.HG,height:"inherit","&:hover":{backgroundColor:c.z8,border:`1px solid ${c.uH}`,color:c.uH},":focus-visible":{border:`2px solid ${c.d$} `,borderRadius:"50px"}}},onClick:()=>{e.push("/login")},children:r("cancel")}),s.jsx(d.Z,{variant:"outlined",sx:{"&.MuiButtonBase-root":{...C,color:c.Hh,border:"1px solid transparent",backgroundColor:c.l7,boxShadow:c.HG,height:"inherit","&:hover":{backgroundColor:c.VK},":focus-visible":{border:`2px solid ${c.Hh} `,borderRadius:"50px"}}},onClick:$,children:r("confirm")})]})]})})}},56542:(e,r,t)=>{"use strict";t.d(r,{Z:()=>x});var s=t(95344);t(3729);var a=t(44918),i=t.n(a),o=t(48854),n=t(15099),d=t(13089),l=t(30310),p=t(89410),c=t(8428);let u=()=>{let e=(0,c.useRouter)(),r=(0,o.Z)("(max-width:480px)"),{t}=(0,n.$)("en","authentication");return s.jsx("div",{className:i().logoSection,children:(0,s.jsxs)("div",{className:i().static,children:[s.jsx("div",{className:i().logo,children:s.jsx(p.default,{src:r?l.Z:d.Z,height:124,width:167,alt:"prodigy-logo",className:i().logo,onClick:()=>{e.push("/")}})}),s.jsx("p",{className:i().title,children:t("Heading1")}),(0,s.jsxs)("div",{className:i().mobileText,children:[(0,s.jsxs)("span",{className:i().text,children:[t("your"),s.jsx("span",{className:i().decoratedText,children:t("trustedPartner")})]}),s.jsx("br",{}),s.jsx("span",{className:i().text,children:t("forMarineSuppliers")}),s.jsx("br",{}),s.jsx("span",{className:i().text,children:t("forMarineStores")}),s.jsx("br",{}),(0,s.jsxs)("span",{className:i().text,children:[" ",t("services")]})]})]})})},x=({children:e})=>s.jsx(s.Fragment,{children:s.jsx("div",{className:i().mainWrapper,children:(0,s.jsxs)("div",{className:i().wrapper,children:[s.jsx(u,{}),e]})})})},83306:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var s=t(95344),a=t(12997),i=t(44716),o=t(84359);function n(){return s.jsx(o.Z,{sx:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(a.gy,{height:"50",width:"50",color:i.T$,ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})})}},79119:(e,r,t)=>{"use strict";t.d(r,{BP:()=>c,CU:()=>o,OL:()=>p,YH:()=>u,gt:()=>d,pB:()=>a,q4:()=>x,t2:()=>n,t3:()=>i,yS:()=>l});var s=t(9871);let a="Prodigy",i="CloudSupply",o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n="connect-form-heading",d=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,l=/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,p=process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY??"";process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;let c=`${s.Z.IDPurl}`,u="is already taken",x="Error submitting the data"},92607:e=>{e.exports={inputField:"page_inputField__FxxZ1",setPasswordText:"page_setPasswordText__6QGYJ",strongPassword:"page_strongPassword__mKfwD",buttonGrp:"page_buttonGrp__pxbpU",requiredLabel:"page_requiredLabel__4oXuW",error:"page_error__Ovohs",passwordResetWrapper:"page_passwordResetWrapper__y0W5x",confirmPasswordError:"page_confirmPasswordError__u1kzh"}},44918:e=>{e.exports={mainWrapper:"page_mainWrapper__uxmj1",wrapper:"page_wrapper__xrma4",formSection:"page_formSection__esquH",logoSection:"page_logoSection__4NNQe",section:"page_section__xXFLU",formFields:"page_formFields__D4urW",fieldWrapper:"page_fieldWrapper__Hqm_m",inputField:"page_inputField__SOYIk",buyerCompanyName:"page_buyerCompanyName__1XPG5",registerText:"page_registerText__t0XN8",line1:"page_line1__8NDJW",modalText:"page_modalText__fDbwk",title:"page_title__Bw4KZ",logo:"page_logo__rHDr0",text:"page_text__CCSqY",decoratedText:"page_decoratedText__bukio",signInText:"page_signInText__lGZVV",label:"page_label__0VRKr",requiredLabel:"page_requiredLabel__smzbb",error:"page_error__xni3h",fileUploadText:"page_fileUploadText__13ihW",haveAccount:"page_haveAccount__wZaWb",buttonGrp:"page_buttonGrp__oss9A",sellerButtonGrp:"page_sellerButtonGrp__UNytR",noOptionsFound:"page_noOptionsFound__xodQE",reCaptcha:"page_reCaptcha__tz14_",sellerReCaptcha:"page_sellerReCaptcha__88L86",textField:"page_textField__5D_ZW",button:"page_button__HV2rI",static:"page_static___b3Td",inputFieldsWrapper:"page_inputFieldsWrapper__c40IS"}},18788:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});let s=(0,t(86843).createProxy)(String.raw`D:\Projects\app-market-place-web\src\app\[lng]\passwordSetting\loading.tsx`),{__esModule:a,$$typeof:i}=s,o=s.default},11379:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});let s=(0,t(86843).createProxy)(String.raw`D:\Projects\app-market-place-web\src\app\[lng]\passwordSetting\page.tsx`),{__esModule:a,$$typeof:i}=s,o=s.default},13089:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s={src:"/_next/static/media/prodigy_logo_desktop.84d70e13.svg",height:124,width:167,blurWidth:0,blurHeight:0}},30310:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s={src:"/_next/static/media/prodigy_logo_mobile.4ff0cb72.svg",height:39,width:173,blurWidth:0,blurHeight:0}},96056:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s={src:"/_next/static/media/visibility_off_grey.6d35a426.svg",height:21,width:21,blurWidth:0,blurHeight:0}},57993:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s={src:"/_next/static/media/visibility_on_grey.2097f5aa.svg",height:20,width:20,blurWidth:0,blurHeight:0}},44716:e=>{"use strict";e.exports=JSON.parse('{"Ux":"#ADADAD","z8":"rgba(247, 192, 136, 0.25)","x8":"#CDCDCD","NI":"rgba(1, 97, 127, 0.10)","w$":"#FFE2DC","KE":"#D74949","HG":"0px 4px 8.9px 0px rgba(59, 59, 59, 0.25)","fZ":"rgba(10, 43, 84, 1)","b4":"#F7C08838","in":"#CCECEC","dR":"#56381E","R2":"#fff","nP":"#333333","ud":"#f6b100","l7":"#f7c088","uJ":"#FBDEC1","uH":"#765333","zu":"#674627","Hh":"#56381E","VK":"#E6A059","SI":"#F7C08899","L0":"#9D7A5A","qg":"#808080","T$":"#13a4cc","Iw":"#f6b100","M7":"#F7C088","d$":"#333","ix":"#FFF","zy":"#FDD5AC","Sn":"black","b7":"#ffefc5","qs":"var(--gradient, linear-gradient(135deg, #F6B100 0%, #F68500 100%))","hY":"rgba(0, 0, 0, 0.18)","TK":"#FFEFC5","Ti":"#EFEFEF","mw":"#FBFBFB","HQ":"rgba(0, 0, 0, 0.15)","e5":"#DFDFDF","Me":"rgba(0, 0, 0, 0.20)","DB":"#50A919","dt":"#adadad","Ol":"#edf1f2","PO":"#0d7491","Co":"#fffefe","qd":"rgba(0, 0, 0, 0.50)","qM":"#F2F2F2","cI":"#DEF2F8","$A":"rgba(255, 255, 255, 0.38)","xi":"rgba(0, 0, 0, 0.25)","pj":"rgba(8, 8, 8, 0.25)","$j":"rgba(0, 22, 41, 0.45)","iz":"#87694F","Cs":"rgba(0,0,0,0.18)","Tu":"#f7f7f7","yd":"#FDF1E6","Av":"rgba(116, 116, 116, 0.25)","nF":"#0A2B54","xt":"#F7DABD","EY":"#EEA964","yr":"red","V0":"#EEE","Cg":"rgba(42, 42, 42, 0.25)","Ae":"rgba(247, 192, 136, 1)","Pc":"rgba(118, 83, 51, 1)","_T":"rgba(251, 222, 193, 1)","d3":"0px 4px 8px 0px rgba(0, 0, 0, 0.16)","IK":"0px 4px 6.2px 0px rgba(42, 42, 42, 0.25)","HP":"rgba(0, 0, 0, 0.08)","J4":"#384C4C","E4":"rgba(247, 192, 136, 0.22)","d0":"rgb(172, 134, 95)","wJ":"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)","ZF":"#666","hB":"#E4E4E4","Q6":"#FF0000","Bj":"rgba(0, 0, 0, 1)","jH":"rgba(247, 192, 136, 0.52)","R":"#4F6684","d_":"rgba(247, 192, 136, 0.52)","EF":"0px 4px 11.2px 0px rgba(187, 187, 187, 0.25)","hC":"rgba(255, 255, 255, 0.24)"}')}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1645,7137,1950,2997,4502,8592],()=>t(44544));module.exports=s})();