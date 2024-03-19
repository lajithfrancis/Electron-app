"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6387],{10027:function(e,r,t){t.r(r),t.d(r,{SearchActions:function(){return s},SearchProvider:function(){return A},ToggleState:function(){return n},default:function(){return Q}});var a,u,n,s,c=t(3827),i=t(64090),l=t(28501),o=t(50557),E=t(44301),y=t(9894),P=t(34050),d=t(45131);async function _(e){let{page_number:r,search_name:t,item_type:a}=e;return(await d.Z.post("getSeller",{page_number:r,page_size:10,search_name:t,item_type:a})).data.data_response.data.seller}var p=t(56518);function R(e,r,t){let{t:a}=(0,p.$)("en","home");return(0,P.N)({queryKey:["seller",r,t],queryFn:e=>{let{pageParam:u}=e;return _({page_number:u,search_name:null!=r?r:"",item_type:null!=t?t:a("ToggleSupply")})},initialPageParam:1,getNextPageParam:(e,r,t)=>{if(0!==e.length)return t+1},getPreviousPageParam:(e,r,t)=>{if(!(t<=1))return t-1},initialData:{pages:[e],pageParams:[]}})}async function T(e){let{page_number:r,search_name:t}=e;return(await d.Z.post("getProduct",{page_number:r,page_size:10,search_name:t})).data.data_response.data.product}(a=n||(n={})).Supply="SUPPLY",a.Service="SERVICE";let S=(0,i.createContext)(null);function g(e,r){let{type:t,payload:a,idList:u}=r;switch(t){case"UPDATE_COUNTRY_QUERY":return{...e,countryQuery:null!=a?a:""};case"SET_COUNTRY":return{...e,selectedCountries:Array.isArray(a)?a:[...e.selectedCountries,a],selectedCountryIds:Array.isArray(u)?u:[...e.selectedCountryIds,u],countryQuery:""};case"UPDATE_PORT_QUERY":return{...e,portQuery:null!=a?a:""};case"SET_PORT":return{...e,selectedPorts:Array.isArray(a)?a:[...e.selectedPorts,a],selectedPortIds:Array.isArray(u)?u:[...e.selectedPortIds,u],portQuery:""};case"UPDATE_CATEGORY_QUERY":return{...e,categoryQuery:null!=a?a:""};case"SET_CATEGORY":return{...e,selectedCategories:Array.isArray(a)?a:[...e.selectedCategories,a],categoryQuery:""};case"UPDATE_MAKE_QUERY":return{...e,makeQuery:null!=a?a:""};case"SET_MAKE":return{...e,selectedMake:Array.isArray(a)?a:[...e.selectedMake,a],makeQuery:""};case"UPDATE_PRODUCT_QUERY":return{...e,productQuery:null!=a?a:""};case"SET_PRODUCT":return{...e,selectedProduct:Array.isArray(a)?a:[...e.selectedProduct,a],productQuery:""};case"UPDATE_SELLER_QUERY":return{...e,sellerQuery:null!=a?a:""};case"SET_SELLER":return{...e,selectedSeller:Array.isArray(a)?a:[...e.selectedSeller,a],sellerQuery:""};case"UPDATE_SERVICE_PROVIDER_QUERY":return{...e,serviceProviderQuery:null!=a?a:""};case"SET_SERVICE_PROVIDER":return{...e,selectedServiceProvider:Array.isArray(a)?a:[...e.selectedServiceProvider,a],serviceProviderQuery:""};case"UPDATE_SERVICE_TYPE_QUERY":return{...e,serviceTypeQuery:null!=a?a:""};case"SET_SERVICE_TYPE":return{...e,selectedServiceType:Array.isArray(a)?a:[...e.selectedServiceType,a],ServiceTypeQuery:""};case"UPDATE_SEARCH_KEY":return{...e,searchKey:a};case"RESET":return{...C,searchKey:a,resetTimeStamp:new Date().getUTCMilliseconds()};case"CATEGORY_RESET":return{...e,selectedCategories:[]};case"COUNTRY_RESET":return{...e,selectedCountries:[]};case"PORT_RESET":return{...e,selectedPorts:[]};case"MAKE_RESET":return{...e,selectedMake:[]};case"SELLER_RESET":return{...e,selectedSeller:[]};case"SERVICE_TYPE_RESET":return{...e,selectedServiceType:[]};case"SERVICE_PROVIDER_RESET":return{...e,selectedServiceProvider:[]};case"PRODUCT_RESET":return{...e,selectedProduct:[]};default:return e}}(u=s||(s={})).updateCountryQuery="UPDATE_COUNTRY_QUERY",u.setCountry="SET_COUNTRY",u.updatePortQuery="UPDATE_PORT_QUERY",u.setPort="SET_PORT",u.updateCategoryQuery="UPDATE_CATEGORY_QUERY",u.setCategory="SET_CATEGORY",u.updateMakeQuery="UPDATE_MAKE_QUERY",u.setMake="SET_MAKE",u.updateProductQuery="UPDATE_PRODUCT_QUERY",u.setProduct="SET_PRODUCT",u.updateSellerQuery="UPDATE_SELLER_QUERY",u.setSeller="SET_SELLER",u.reset="RESET",u.setServiceProvider="SET_SERVICE_PROVIDER",u.updateServiceProviderQuery="UPDATE_SERVICE_PROVIDER_QUERY",u.updateServiceTypeQuery="UPDATE_SERVICE_TYPE_QUERY",u.setServiceType="SET_SERVICE_TYPE",u.updateSearchKey="UPDATE_SEARCH_KEY",u.categoryReset="CATEGORY_RESET",u.countryReset="COUNTRY_RESET",u.portReset="PORT_RESET",u.makeReset="MAKE_RESET",u.sellerReset="SELLER_RESET",u.serviceTypeReset="SERVICE_TYPE_RESET",u.serviceProviderReset="SERVICE_PROVIDER_RESET",u.productReset="PRODUCT_RESET";let C={selectedCountries:[],countryQuery:"",selectedPorts:[],portQuery:"",selectedCategories:[],categoryQuery:"",selectedMake:[],makeQuery:"",selectedProduct:[],productQuery:"",selectedSeller:[],sellerQuery:"",selectedServiceProvider:[],serviceProviderQuery:"",selectedServiceType:[],serviceTypeQuery:"",selectedPortIds:[],selectedCountryIds:[],searchKey:"",resetTimeStamp:new Date().getUTCMilliseconds()};function A(e){var r;let{initCountries:t,initPorts:a,initCategories:u,children:n,initMake:s,initProduct:d,initSeller:_,initServiceProvider:p,initServiceType:A}=e,[Q,m]=(0,i.useReducer)(g,C),[v,U]=(0,i.useState)("SUPPLY"),f=(0,E.Z)(t,Q.countryQuery,Q.selectedPorts,Q.selectedPortIds),Y=(0,y.Z)(a,Q.portQuery,Q.selectedCountries,Q.selectedCountryIds),D=(0,l.Z)(u,Q.categoryQuery,"SUPPLY"),h=(0,o.Z)(s,Q.makeQuery),I=(r=Q.productQuery,(0,P.N)({queryKey:["product",r],queryFn:e=>{let{pageParam:t}=e;return T({page_number:t,search_name:null!=r?r:""})},initialPageParam:1,getNextPageParam:(e,r,t)=>{if(0!==e.length)return t+1},getPreviousPageParam:(e,r,t)=>{if(!(t<=1))return t-1},initialData:{pages:[d],pageParams:[]}})),O=R(_,Q.sellerQuery,"SUPPLY"),N=R(p,Q.serviceProviderQuery,"SERVICE"),V=(0,l.Z)(A,Q.serviceTypeQuery,"SERVICE"),[Z,k]=(0,i.useState)(!1),[K,L]=(0,i.useState)("/en");return(0,i.useEffect)(()=>{L(window.location.pathname)}),(0,c.jsx)(S.Provider,{value:{search:Q,dispatch:m,countries:f,ports:Y,categories:D,toggle:v,setToggle:U,make:h,product:I,seller:O,serviceProvider:N,serviceType:V,searchResultsLoading:Z,setSearchResultsLoading:k,searchCurrentPathname:K},children:n})}function Q(){return(0,i.useContext)(S)}},45131:function(e,r,t){var a=t(7908),u=t(24671);let n=t(98955).Z.get("Access_token"),s=a.default.create({baseURL:u.Z.apiUrl,headers:{"Content-Type":"application/json",Accept:"application/json",tenant_id:u.Z.tenantId,locale:"en",time_zone:"IND",...n&&{Authorization:"Bearer ".concat(n)}}});s.interceptors.request.use(e=>e),s.interceptors.response.use(e=>e,e=>e.response),r.Z=s},28501:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(34050),u=t(45131);async function n(e){let{page_number:r,search_name:t,item_type:a}=e;return(await u.Z.post("getCategory",{page_number:r,page_size:25,search_name:t,item_type:a})).data.data_response.data.category}var s=t(56518);function c(e,r,t){let{t:u}=(0,s.$)("en","home");return(0,a.N)({queryKey:["category",r,t],queryFn:e=>{let{pageParam:a}=e;return n({page_number:a,search_name:null!=r?r:"",item_type:null!=t?t:u("ToggleSupply")})},initialPageParam:1,getNextPageParam:(e,r,t)=>{if((null==e?void 0:e.length)!==0)return t+1},getPreviousPageParam:(e,r,t)=>{if(!(t<=1))return t-1},initialData:{pages:[e],pageParams:[]}})}},44301:function(e,r,t){t.d(r,{Z:function(){return s}});var a=t(34050),u=t(45131);async function n(e){let{page_number:r,search_name:t,supply_port_id:a}=e;return(await u.Z.post("getCountry",{page_number:r,page_size:10,search_name:t,supply_port_id:a})).data.data_response.data.country}function s(e,r,t,u){return(0,a.N)({queryKey:["country",r,t],queryFn:e=>{let{pageParam:t}=e;return n({page_number:t,search_name:null!=r?r:"",supply_port_id:null!=u?u:[]})},initialPageParam:1,getNextPageParam:(e,r,t)=>{if(0!==e.length)return t+1},getPreviousPageParam:(e,r,t)=>{if(!(t<=1))return t-1},initialData:{pages:[e],pageParams:[]}})}},50557:function(e,r,t){t.d(r,{Z:function(){return s}});var a=t(34050),u=t(45131);async function n(e){let{page_number:r,search_name:t}=e;return(await u.Z.post("getMake",{page_number:r,page_size:10,search_name:t})).data.data_response.data.make}function s(e,r){return(0,a.N)({queryKey:["make",r],queryFn:e=>{let{pageParam:t}=e;return n({page_number:t,search_name:null!=r?r:""})},initialPageParam:1,getNextPageParam:(e,r,t)=>{if(0!==e.length)return t+1},getPreviousPageParam:(e,r,t)=>{if(!(t<=1))return t-1},initialData:{pages:[e],pageParams:[]}})}},9894:function(e,r,t){t.d(r,{Z:function(){return s}});var a=t(34050),u=t(45131);async function n(e){let{page_number:r,search_name:t,country_id:a}=e;return(await u.Z.post("getSupplyPort",{page_number:r,page_size:10,search_name:t,country_id:a})).data.data_response.data.supply_port}function s(e,r,t,u){return(0,a.N)({queryKey:["supply-port",r,t],queryFn:e=>{let{pageParam:t}=e;return n({page_number:t,search_name:null!=r?r:"",country_id:null!=u?u:[]})},initialPageParam:1,getNextPageParam:(e,r,t)=>{if(0!==e.length)return t+1},getPreviousPageParam:(e,r,t)=>{if(!(t<=1))return t-1},initialData:{pages:[e],pageParams:[]}})}},74951:function(e,r){r.Z={src:"/_next/static/media/close_outlined.d79a8bfc.svg",height:26,width:26,blurWidth:0,blurHeight:0}}}]);