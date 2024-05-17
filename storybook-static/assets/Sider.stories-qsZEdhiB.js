import{u as E,j as e}from"./themeProvider-Z-9a9TSg.js";import{p as s,P as B}from"./provideTheme-B100LR_O.js";import{r as m}from"./index-uubelm5h.js";import{I as c}from"./icons-Cmc3EDCm.js";import{L as N}from"./logo-Bvk-tVPk.js";import{d as g}from"./breakpoints-B9NbqeLH.js";import{L as q}from"./layout-B69T3GWG.js";import{B as _}from"./button-D1OaQCJ3.js";import{T as K}from"./typography-Y5iREezm.js";import"./loading-CBrh4Q67.js";const P=s.button(({theme:n,open:t})=>({margin:8,marginTop:16,color:n.text.primary,backgroundColor:"transparent",[g("md")]:{marginTop:t?24:16}})),$=s.div(({theme:n,open:t})=>({color:n.text.primary,backgroundColor:"transparent",animationFillMode:"forwards",animationDuration:"0.3s",animationName:t===!0?"menuArrowClose":"menuArrowOpen","@Keyframes menuArrowOpen":{from:{rotate:"0deg"},to:{rotate:"180deg"}},"@Keyframes menuArrowClose":{from:{rotate:"180deg"},to:{rotate:"0deg"}}})),z=s.div(({theme:n,open:t})=>({color:n.text.primary,backgroundColor:"transparent",animationFillMode:"forwards",animationDuration:"0.3s",animationName:t===!0?"menuArrowOpen":"menuArrowClose","@Keyframes subMenuArrowOpen":{from:{rotate:"0deg"},to:{rotate:"180deg"}},"@Keyframes subMenuArrowClose":{from:{rotate:"180deg"},to:{rotate:"0deg"}}})),G=s.div(({theme:n,open:t})=>({width:"255px",height:"500px",backgroundColor:n.background.elevated,animationName:t===!0?"open":t===!1?"close":"",animationFillMode:"forwards",animationDuration:"0.5s",padding:8,paddingTop:16,display:"flex",flexDirection:"column",justifyContent:"space-between",[g("md")]:{display:t?void 0:"none",flexDirection:"row",position:"absolute",paddingLeft:24},"@keyframes open":{from:{width:"80px"},to:{width:"255px"}},"@keyframes close":{from:{width:"255px"},to:{width:"80px"}}})),U=s.div(()=>({width:"100%",[g("md")]:{position:"absolute",bottom:8,left:8,width:"95%"}})),W=s.a(({theme:n,open:t,disabled:o,level:r,active:y})=>({color:y?n.primary[500]:o?n.text.grey:n.text.primary,backgroundColor:n.sider.background[r||0],maxWidth:"105%",width:r&&r>1?`calc(103% - (${r*12}px))`:"calc(100% + 6px)",overflow:"hidden",textOverflow:"ellipsis",display:"flex",fontSize:"16px",whiteSpace:"nowrap",gap:8,animationFillMode:"forwards",animationDuration:"0.5s",padding:12,borderRadius:r&&r>1?0:10,marginLeft:r&&r>1?12*r:void 0,borderLeft:r&&r>1?`3px solid ${n.primary[600]}`:void 0,transition:"background-color 0.3s, color 0.3s",cursor:o?"no-drop":"pointer",justifyContent:t?"space-between":"center","&:hover":{backgroundColor:n.primary[50]}})),H=s.p(({theme:n,open:t,disabled:o,active:r})=>({display:t===!1?"none":"flex",color:r?n.primary[500]:o?n.text.grey:n.text.primary,animationName:t!==!1?"unFadeLink":"",animationFillMode:"forwards",animationDuration:"1s",transition:"color 0.3s",gap:6,"@Keyframes unFadeLink":{from:{opacity:0},to:{opacity:1}}})),D=({children:n,open:t,routes:o,footer:r,...y})=>{const[l,u]=m.useState(t===!0||t===!1?t:!0),[f,k]=m.useState(!0),[w,T]=m.useState([]),{theme:R}=E();console.log(R),m.useEffect(()=>{if(l===!1){k(!1),h({});return}setTimeout(()=>k(!0),150)},[l]),m.useEffect(()=>{u(t)},[t]);const[S,h]=m.useState({}),L=i=>{h(d=>({...d,[i]:!d[i]}))},v=(i,d=1,I,O)=>i==null?void 0:i.map(a=>{if(a.permission===!1)return null;const M=e.jsxs(W,{href:a.disabled?void 0:a.path,open:f,disabled:a.disabled,active:w.includes(a.key),onClick:a.disabled?()=>{}:()=>{a.childrens&&L(a.key),a.childrens&&u(!0);const b=[];console.log(),I&&b.push(O),a.childrens||(b.push(a.key),T(b)),a.path&&u(!1)},style:{paddingLeft:`${d*16}px`},level:d,childrens:a.childrens,children:[e.jsxs("div",{style:{display:"flex",gap:6},children:[a.icon&&a.icon,e.jsxs(H,{active:w.includes(a.key),open:f,disabled:a.disabled,children:[a.label," "]})]}),a.childrens&&f&&e.jsx(z,{open:S[a.key],children:e.jsx(c,{name:"ChevronDownIcon",size:"small"})})]},a.key),F=a.childrens&&v(a.childrens,d+1,!0,a.key);return e.jsxs(e.Fragment,{children:[M,a.childrens&&S[a.key]&&F]})});return e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start"},children:[e.jsxs(G,{...y,open:l||!1,children:[e.jsxs("div",{children:[e.jsx(N,{style:{paddingLeft:l?15:void 0,margin:0,maxWidth:128}}),e.jsxs("div",{style:{marginTop:24},children:[o&&v(o,1,!1,""),n]})]}),r&&e.jsx(U,{children:r})]}),e.jsx(P,{open:l||!1,onClick:()=>{u(i=>!i),h({})},children:e.jsx($,{open:l||!1,children:e.jsx(c,{name:"ChevronDoubleLeftIcon"})})})]})};D.__docgenInfo={description:"",methods:[],displayName:"Sider",props:{children:{required:!1,tsType:{name:"union",raw:"ReactChild | string | any",elements:[{name:"ReactChild"},{name:"string"},{name:"any"}]},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},setOpen:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""},routes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label?: string;
  path?: string;
  icon?: ReactChild;
  permission?: boolean;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
  disabled?: boolean;
  childrens?: Route[];
  level?: number;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"path",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactChild",required:!1}},{key:"permission",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"setActive",value:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>",required:!1}},{key:"open",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"childrens",value:{name:"Array",elements:[{name:"Route"}],raw:"Route[]",required:!1}},{key:"level",value:{name:"number",required:!1}}]}}],raw:"Array<Route>"},description:""},footer:{required:!1,tsType:{name:"union",raw:"ReactChild | any",elements:[{name:"ReactChild"},{name:"any"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:'"dark" | "light"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:""}}};const x=({theme:n,...t})=>e.jsx(B,{t:n,children:e.jsxs(q,{style:{display:"flex",flexDirection:"row"},children:[e.jsx(D,{footer:e.jsx(_,{style:{width:"100%"},children:"Sair"}),...t}),e.jsx(q,{style:{padding:8},children:e.jsx(K,{level:"h3",children:"Conteúdo da página"})})]})});x.__docgenInfo={description:"",methods:[],displayName:"Example",props:{children:{required:!1,tsType:{name:"union",raw:"ReactChild | string | any",elements:[{name:"ReactChild"},{name:"string"},{name:"any"}]},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},setOpen:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""},routes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label?: string;
  path?: string;
  icon?: ReactChild;
  permission?: boolean;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
  disabled?: boolean;
  childrens?: Route[];
  level?: number;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"path",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactChild",required:!1}},{key:"permission",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"setActive",value:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>",required:!1}},{key:"open",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"childrens",value:{name:"Array",elements:[{name:"Route"}],raw:"Route[]",required:!1}},{key:"level",value:{name:"number",required:!1}}]}}],raw:"Array<Route>"},description:""},footer:{required:!1,tsType:{name:"union",raw:"ReactChild | any",elements:[{name:"ReactChild"},{name:"any"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:'"dark" | "light"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:""}}};const ie={title:"Layout/Sider",component:x,argTypes:{children:{control:{type:"text"}}},args:{open:!0,routes:[{key:"dashboard",label:"Dashboard",icon:e.jsx(c,{name:"HomeIcon"}),disabled:!0},{key:"franquias",label:"Franquias",icon:e.jsx(c,{name:"BuildingStorefrontIcon"})},{key:"terminais",label:"Terminais",icon:e.jsx(c,{name:"CalculatorIcon"}),childrens:[{key:"geral",label:"Geral"},{key:"pending",label:"Pendentes"}]},{key:"usuarios",label:"Usuários",icon:e.jsx(c,{name:"UserIcon"}),childrens:[{key:"user-geral",label:"Geral"}]}]},parameters:{controls:{expanded:!0}}},J=n=>e.jsx(x,{...n}),p=J.bind({});p.args={};var A,j,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:"args => <Example {...args} />",...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const oe=["Default"];export{p as Default,oe as __namedExportsOrder,ie as default};