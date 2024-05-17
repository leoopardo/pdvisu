import{j as t}from"./themeProvider-Z-9a9TSg.js";import{R as C,r as s}from"./index-uubelm5h.js";import{p,c as h,P as D}from"./provideTheme-B100LR_O.js";import{I as i}from"./icons-Cmc3EDCm.js";const E=p.select(({theme:e})=>({width:"100%",height:"26px",border:"none",outline:"none",fontSize:14,color:e.text.primary,backgroundColor:"transparent",display:"none"})),O=p.span(({theme:e,SelectSize:n,isFocused:o,rounded:d,error:r,value:u})=>h`
      border-radius: ${d?"25px":"4px"};
      padding-top: ${n==="sm"?"8px":n==="lg"?"10px":"8px"};
      padding-bottom: ${n==="sm"?"8px":n==="lg"?"10px":"8px"};
      padding-left: 8px;
      padding-right: 8px;
      cursor: text;
      font-family: Inter;
      font-size: 14px;
      outline: 2px solid
        ${r?e.input.outline.error:e.input.outline.initial};
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      gap: 8px;
      transition:
        outline 0.3s,
        color 0.3s;
      color: ${r?e.input.outline.error:e.input.primary};
      opacity: ${u?1:.7};
      ${o&&h`
        font-size: 14px;
        outline: 2px solid
          ${r?e.input.outline.error:e.input.outline.active};
        color: ${r?e.input.outline.error:e.input.outline.active};
      `};
    `);p.option(({theme:e})=>({color:e.text.primary,fontFamily:"Inter",marginTop:"16px",fontSize:"14px"}));const R=p.ul(({open:e})=>({marginTop:8,width:"100%",borderRadius:8,padding:8,backgroundColor:"red",position:"absolute",animationFillMode:"forwards",animationDuration:"0.3s",animationName:e?"openDropdown":"closeDropdown","@Keyframes openDropdown":{from:{opacity:0},to:{opacity:1}},"@Keyframes closeDropdown":{from:{opacity:1},to:{opacity:0}}})),x=C.forwardRef(({addonBefore:e,options:n,placeholder:o,value:d,...r})=>{const[u,c]=s.useState(!1),m=s.useRef(null),[g,v]=s.useState(!1),[f,q]=s.useState(d||""),I=()=>{c(a=>!a)},b=()=>{c(!1)};return s.useEffect(()=>{const a=k=>{m.current&&!m.current.contains(k.target)&&(c(!1),v(!1))};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),t.jsxs("div",{children:[t.jsxs(O,{...r,isFocused:u,onBlur:b,onClick:()=>{I(),v(!0)},children:[t.jsxs("div",{style:{display:"flex",gap:8},children:[e&&e,t.jsx(E,{ref:m,onBlur:b,children:n&&n.map(a=>t.jsx("option",{value:a.value,children:a.label},a.value))}),f||(o??"")]}),t.jsxs("div",{style:{display:"flex",gap:4},children:[f&&t.jsx(i,{name:"XMarkIcon",size:"small",style:{cursor:"pointer"},onClick:()=>q(void 0)}),g?t.jsx(i,{name:"ChevronUpIcon",size:"small"}):t.jsx(i,{name:"ChevronDownIcon",size:"small"})]})]}),t.jsx(R,{open:g,style:r.style,children:n&&n.map(a=>t.jsx("li",{value:a.value,children:a.label},a.value))})]})});x.displayName="Input";x.__docgenInfo={description:"",methods:[],displayName:"Input"};const y=({disabled:e=!1,theme:n,...o})=>t.jsx(D,{t:n,children:t.jsx(x,{disabled:e,addonBefore:t.jsx(i,{name:"UserCircleIcon",size:"large"}),style:{width:300},...o})});y.__docgenInfo={description:"",methods:[],displayName:"Example",props:{SelectSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},theme:{required:!1,tsType:{name:"union",raw:'"dark" | "light"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:""},addonBefore:{required:!1,tsType:{name:"ReactChild"},description:""},addonAfter:{required:!1,tsType:{name:"ReactChild"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string; disabled?: boolean }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"{ value: string; label: string; disabled?: boolean }[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const B={title:"Components/Select",component:y,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}},args:{options:[{label:"Option 1",value:"option 1"},{label:"Option 2",value:"option 2"},{label:"Option 3",value:"option 3"},{label:"Option 4",value:"option 4"},{label:"Option 5",value:"option 5"}]}},S=e=>t.jsx(y,{...e}),l=S.bind({});l.args={};var j,w,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Example {...args} />",...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const N=["Default"];export{l as Default,N as __namedExportsOrder,B as default};
