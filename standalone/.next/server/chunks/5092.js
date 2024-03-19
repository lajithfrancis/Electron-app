exports.id=5092,exports.ids=[5092],exports.modules={95044:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var r=o(95344),l=o(3729),s=o(3108);o(20188);var i=o(2029),n=o(34397),a=o(72833),d=o(89410),p=o(84359),c=o(89731),u=o(15099),x=o(56761);let h=({dropDownSelectedItems:e,setDropDownSelectedItems:t,required:o,options:h,textLabel:b,searchable:g=!1,definedWidth:m="",clearIcon:S="",definedHeight:f="45px",isLabel:$=!0,definedBottom:y="unset",labelTop:v="",componentType:w="Other",indexValue:k,backgroundColor:C,isError:j})=>{let{t:R}=(0,u.$)("en","enquiry-page"),[z,B]=(0,l.useState)(!1),Z=(0,x.Z)(),O=e[k]?e[k]:{label:"",value:""},F=async(e,t)=>{let o;if(e){let t=e.toLowerCase();o=h.filter(e=>e.label.toLowerCase().includes(t))}else o=h;let r=o.length>t.length+10;return{options:o.slice(t.length,t.length+10),hasMore:r}},I=()=>{B(e=>!e),N("")},T=parseFloat(m)-2+"%",L=({children:e})=>{let t="hsla(218, 50%, 10%, 0.1)";return r.jsx(p.Z,{sx:{backgroundColor:Z.palette.white,borderRadius:1,boxShadow:`0 0 0 1px ${t}, 0 4px 11px ${t}`,position:"absolute",zIndex:11,width:m,bottom:y},children:e})},W=({onClick:e})=>r.jsx(p.Z,{sx:{bottom:0,left:0,top:0,right:0,position:"fixed",zIndex:10},onClick:e}),[q,H]=(0,l.useState)(null),[M,N]=(0,l.useState)("");return(0,r.jsxs)("div",{children:[""!==v?r.jsx(c.Z,{htmlFor:v,className:"Quote"==w?"topQouteLabelText":"topLabelText",children:(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)("span",{children:[v," "]}),o&&r.jsx("span",{style:{color:"red"},children:"*"})]})}):"",r.jsx(({children:e,isOpen:t,target:o,onClose:l})=>(0,r.jsxs)("div",{style:{position:"relative"},children:[o,t?r.jsx(L,{children:e}):null,t?r.jsx(W,{onClick:l}):null]}),{isOpen:z,onClose:I,target:(0,r.jsxs)(r.Fragment,{children:[O?.value!==""&&$?(0,r.jsxs)("label",{className:"InputLabelText",style:{position:O?.value!==""?"absolute":"relative"},children:["\xa0",b]}):r.jsx(r.Fragment,{}),(0,r.jsxs)(a.Z,{disableRipple:!0,disableFocusRipple:!0,sx:{"&.MuiButtonBase-root":{backgroundColor:C||Z.palette.container,width:m,height:f,borderRadius:"4px",padding:"8px",border:z?`1px solid ${Z.palette.buttonBorderRoot}`:$?`1px solid ${Z.palette.container}`:j?`1px solid ${Z.palette.errorRed}`:`1px solid ${Z.palette.textBoxBorder}`,"&:hover":{backgroundColor:Z.palette.textFieldBorderColorHover,border:$?`1px solid ${Z.palette.buttonHoverEffect}`:`1px solid ${Z.palette.textBoxBorder}`,color:Z.palette.subTabColorTitle},".MuiButton-endIcon":{color:`${Z.palette.productCard} !important`},":focus-visible":{border:`1px solid   ${j?"red":Z.palette.buttonBorderRoot}`}}},onClick:I,className:"ButtonStyle",endIcon:z?r.jsx(n.Z,{}):r.jsx(i.Z,{}),children:[r.jsx("label",{className:O?.label==""?"ButtonLabelTextStyle":"buttonLabelText",children:O?.label==""?b:O?.label}),O?.label!==""&&!1===z&&r.jsx(d.default,{src:S,alt:"positive",height:14,width:12,style:{position:"absolute",right:25},onClick:o=>{o.stopPropagation();let r=[...e];r[k]={label:"",value:""},t(r)}})]})]}),children:r.jsx(s.n9,{noOptionsMessage:()=>R("noOptionsFound"),controlShouldRenderValue:!1,value:q,onChange:o=>{if(o){H(o);let r=[...e];r[k]=o,t(r),B(!1)}},closeMenuOnSelect:!0,loadOptions:F,menuIsOpen:z,autoFocus:!0,placeholder:"Search",styles:{control:e=>({...e,width:T,fontSize:"12px !important",fontWeight:400,minHeight:"30px !important",borderColor:`${Z.palette.borderSelectInput} !important`,margin:"2px 2px 2px 2px",display:!g&&"none",boxShadow:"none"}),menu:()=>({width:m,maxHeight:"180px !important"}),menuList:e=>({...e,width:m,maxHeight:"180px","::-webkit-scrollbar":{width:"7px",height:"0px",borderRadius:"20px"},"::-webkit-scrollbar-track":{width:"4px",background:Z.palette.scrollBar,color:Z.palette.container,borderRadius:"20px"},"::-webkit-scrollbar-thumb":{background:Z.palette.white,width:"5px",border:`1px solid ${Z.palette.scrollBar}`,borderRadius:"20px"}}),option:e=>({...e,textAlign:"left",fontSize:"12px !important",fontWeight:400,color:`${Z.palette.productCard} !important`,backgroundColor:`${Z.palette.quoteShadow} !important`,":hover":{fontSize:"12px !important",fontWeight:400,color:`${Z.palette.productCard} !important`,backgroundColor:`${Z.palette.offWhite} !important`,borderRadius:"4px !important",cursor:"pointer !important"}}),noOptionsMessage:e=>({...e,fontSize:"12px !important",fontWeight:400})},isClearable:!1,hideSelectedOptions:!1,components:{IndicatorSeparator:null,DropdownIndicator:null},className:"indicatorContainer",onInputChange:(e,{action:t})=>{"input-change"===t&&N(e)},inputValue:M})})]})}},32747:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var r=o(95344),l=o(3729),s=o(56761),i=o(11666),n=o(44716);let a=i.ZP.div`
  width: ${e=>e.customStyles?.width?e.customStyles.width:"100%"};
  height: ${e=>e.customStyles?.height||"35px"};
  border-radius: 4px;
  border: ${e=>e.customStyles?.border||`1px solid ${n.dt}`};
  background: ${n.R2};
  &:hover {
    border-radius: ${e=>e.hoverStyles?.borderRadius||"5px"};
    border: ${e=>e.hoverStyles?.border||`1px solid ${n.dt}`};
    background-color: ${e=>e.hoverStyles?.backgroundColor||n.Ol};
    box-shadow: ${e=>e.hoverStyles?.boxShadow||"0px 2px 8px 0px rgba(65, 65, 65, 0.16)"};
    color: ${e=>e.focusStyles?.color||n.d$};
    font-size: ${e=>e.hoverStyles?.fontSize||"12px"};
  }
  &:focus-within {
    border: ${e=>e.focusStyles?.border||`1px solid ${n.PO}`};
    background-color: ${e=>e.focusStyles?.backgroundColor||n.ix};
    color: ${e=>e.focusStyles?.color||n.d$};
    font-size: ${e=>e.focusStyles?.fontSize||"12px"};
  }
`,d=i.ZP.input`
  border-radius: 4px;
  border: none;
  width: 100%;
  font-family: inherit !important;
  background-color: ${e=>e.customStyles?.backgroundColor||n.ix};
  height: 100%;
  padding: ${e=>e.customStyles?.padding||"10px"};
  color: ${e=>e.customStyles?.color||n.qg};
  opacity: 1;
  font-size: ${e=>e.customStyles?.fontSize||"12px"};
  font-style: normal;
  font-weight: ${e=>e.customStyles?.fontWeight||600};
  line-height: normal;
  outline: none;
  box-sizing: border-box;
  text-align: ${e=>e.customStyles?.textAlign||"start"};

  &::placeholder {
    color: ${n.qg} !important;
    font-weight: normal;
  }
  &:hover {
    background-color: ${e=>e.hoverStyles?.backgroundColor||n.Ol};
    color: ${e=>e.hoverStyles?.color||n.qg};
    font-size: ${e=>e.hoverStyles?.fontSize||"12px"};
  }

  &:focus-within {
    background-color: ${e=>e.focusStyles?.backgroundColor||n.ix};
    color: ${e=>e.focusStyles?.color||n.d$};
    font-size: ${e=>e.focusStyles?.fontSize||"12px"};
  }
  &::-webkit-scrollbar {
    width: 7px;
    height: 0px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    width: 3px;
    background: ${n.R2};
    border: 1px solid ${n.e5};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${n.e5};
    border-radius: 4px;
    color: ${n.R2};
    border-radius: 20px;
  }
`;var p=o(89731),c=o(84359);let u=({placeHolder:e,OnChange:t,id:o,type:i,name:u,customStyles:x,hoverStyles:h,focusStyles:b,label:g,required:m,componentType:S="Other",disabled:f=!1,defaultValue:$,typeChanging:y=!1,itemValue:v,step:w,grandTotal:k,value:C})=>{(0,l.useEffect)(()=>{C&&""!==C&&R(C)},[C]);let[j,R]=(0,l.useState)($||""),z=(0,s.Z)();return(0,r.jsxs)(r.Fragment,{children:[g?r.jsx(p.Z,{htmlFor:o,sx:{fontSize:"Quote"==S?"12px":"Enquiry"==S?"12px":"10px",color:"Quote"==S?z.palette.Text:z.palette.productCard,fontWeight:400,lineHeight:"normal",fontStyle:"normal",marginBottom:"8px",marginTop:"Quote"==S?"0px":"23px"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)("span",{children:[g," "]}),m&&r.jsx("span",{style:{color:"red"},children:"*"})]})}):"",r.jsx(a,{customStyles:x,focusStyles:b,hoverStyles:h,grandTotal:k,style:{border:x?.border||`1px solid ${n.dt}`,borderRadius:x?.borderRadius||"4px !important"},children:r.jsx(d,{id:o,style:{border:"none",padding:"10px",borderRadius:"4px !important"},value:y?v:j,type:i||"text",min:"number"===i?0:void 0,step:"number"===i?w??.01:"",name:u,placeholder:e,customStyles:x,onChange:e=>{if("number"!==i)R(e.target.value),t(e.target.value);else{let o=e.target.value;(/^\d*\.?\d{0,2}$/.test(o)||""===o)&&(R(o),t(o))}},hoverStyles:h,focusStyles:b,autoComplete:"off",disabled:f,onKeyDown:e=>{1===w&&"."===e.key&&e.preventDefault()}})})]})}},20188:()=>{}};