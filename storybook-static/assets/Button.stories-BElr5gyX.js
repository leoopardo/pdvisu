import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{I as ao}from"./icons-Ba5odkDV.js";import{u as no,P as io}from"./provideTheme-DWp2NUCK.js";import{R as lo}from"./index-uubelm5h.js";import{L as m}from"./loading-CXJqSEsc.js";import"./themeProvider-Bzcnva43.js";const to=no.button(({theme:o,disabled:n,size:l,variant:i,danger:r,shape:t,loading:c})=>{var d,b,g,f,x,y,k,v,$,C,T,j,w,q,E,B,R,I,_,F,H,M,N,L,S,z,D,A,O,W,G,J,K,P,Q,U,V,X,Y,Z;const s={border:0,lineHeight:1,fontSize:"18px",cursor:"pointer",fontWeight:"700",borderRadius:t==="round"?"50px":"10px",width:"fit-content",height:"fit-content",animationName:n?`disable-${i}`:"able",animationFillMode:"forwards",animationDuration:"0.5s",padding:l==="large"?"14.51px 8px":l==="medium"?"12px 8px":"10px 8px",transition:"background-color 0.3s, color 0.3s, border-radius 0.3s, outline 0.3s, boxShadow 0.3s",gap:"8px",display:"flex",justifyContent:"center",alignItems:"center",outline:"transparent",opacity:c?.6:1};if(!i||i==="primary")return{...s,color:(d=o==null?void 0:o.text)==null?void 0:d.button,backgroundColor:(b=o==null?void 0:o.button.primary)==null?void 0:b.background[`initial${r?"-danger":""}`],"&:hover":{backgroundColor:(g=o==null?void 0:o.button.primary)==null?void 0:g.background[`hover${r?"-danger":""}`]},"&:active":{backgroundColor:(f=o==null?void 0:o.button.primary)==null?void 0:f.background[`active${r?"-danger":""}`]},"&:focus":{outline:`6px solid ${o.button.primary[`stroke${r?"-danger":""}`]}`},"@keyframes disable-primary":{from:{backgroundColor:(x=o==null?void 0:o.button.primary)==null?void 0:x.background[`initial${r?"-danger":""}`]},to:{backgroundColor:(k=(y=o==null?void 0:o.button.primary)==null?void 0:y.background)==null?void 0:k.disabled,cursor:"no-drop"}}};if(i==="secondary")return{...s,color:(v=o==null?void 0:o.text)==null?void 0:v.secondary,backgroundColor:(C=($=o==null?void 0:o.button)==null?void 0:$.secondary)==null?void 0:C.background[`initial${r?"-danger":""}`],"&:hover":{backgroundColor:(j=(T=o==null?void 0:o.button)==null?void 0:T.secondary)==null?void 0:j.background[`hover${r?"-danger":""}`]},"&:active":{backgroundColor:(q=(w=o==null?void 0:o.button)==null?void 0:w.secondary)==null?void 0:q.background[`active${r?"-danger":""}`]},"&:focus":{outline:`6px solid ${o.button.secondary[`stroke${r?"-danger":""}`]}`},"@keyframes disable-secondary":{from:{backgroundColor:(B=(E=o==null?void 0:o.button)==null?void 0:E.secondary)==null?void 0:B.background[`initial${r?"-danger":""}`]},to:{backgroundColor:(_=(I=(R=o==null?void 0:o.button)==null?void 0:R.secondary)==null?void 0:I.background)==null?void 0:_.disabled,cursor:"no-drop"}}};if(i==="outline")return{...s,color:(F=o==null?void 0:o.button)==null?void 0:F.outline[`text${r?"-danger":""}`],backgroundColor:(N=(M=(H=o==null?void 0:o.button)==null?void 0:H.outline)==null?void 0:M.background)==null?void 0:N.initial,outline:`2px solid ${(L=o==null?void 0:o.button)==null?void 0:L.outline[`text${r?"-danger":""}`]}`,"&:hover":{backgroundColor:!n&&((z=(S=o==null?void 0:o.button)==null?void 0:S.outline)==null?void 0:z.background[`hover${r?"-danger":""}`])},"&:active":{backgroundColor:(A=(D=o==null?void 0:o.button)==null?void 0:D.outline)==null?void 0:A.background[`active${r?"-danger":""}`]},"&:focus":{boxShadow:`0px 0px 0px 8px ${(W=(O=o==null?void 0:o.button)==null?void 0:O.outline)==null?void 0:W.background[`hover${r?"-danger":""}`]};`},"@keyframes disable-outline":{from:{color:(J=(G=o==null?void 0:o.button)==null?void 0:G.outline)==null?void 0:J.text,outline:`2px solid ${(P=(K=o==null?void 0:o.button)==null?void 0:K.outline)==null?void 0:P.text}`},to:{color:(V=(U=(Q=o==null?void 0:o.button)==null?void 0:Q.outline)==null?void 0:U.background)==null?void 0:V.disabled,outline:`2px solid ${(Z=(Y=(X=o==null?void 0:o.button)==null?void 0:X.outline)==null?void 0:Y.background)==null?void 0:Z.disabled}`,cursor:"no-drop"}}}}),e=lo.forwardRef(({children:o,icon:n,iconPosition:l,loading:i,...r},t)=>a.jsxs(to,{"data-testid":`button-${o}`,type:"button",ref:t,...r,children:[n&&l==="left"&&!i?n:a.jsx(a.Fragment,{}),n&&l==="left"&&i?a.jsx(m,{size:"medium",variant:r.variant,danger:r.danger}):a.jsx(a.Fragment,{}),o,n&&l!=="left"&&i?a.jsx(m,{size:"medium",variant:r.variant,danger:r.danger}):a.jsx(a.Fragment,{}),n&&l!=="left"&&!i?n:a.jsx(a.Fragment,{})]}));e.displayName="Button";e.__docgenInfo={description:"",methods:[],displayName:"Button"};const p=({children:o,theme:n,variant:l,disabled:i,iconPosition:r,loading:t,size:c,danger:s,shape:d})=>a.jsx(io,{t:n,children:a.jsx("div",{className:"flex w-3/12",children:a.jsx(e,{style:{width:"100%"},theme:n,variant:l,icon:a.jsx(ao,{name:"ArrowRightIcon"}),disabled:i,iconPosition:r,loading:t,size:c,danger:s,shape:d,children:o})})});p.__docgenInfo={description:"",methods:[],displayName:"Example",props:{children:{required:!1,tsType:{name:"ReactChild"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "outline"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outline"'}]},description:""},shape:{required:!1,tsType:{name:"union",raw:'"default" | "round"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"round"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},theme:{required:!1,tsType:{name:"union",raw:'"dark" | "light"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:""},icon:{required:!1,tsType:{name:"ReactChild"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},danger:{required:!1,tsType:{name:"boolean"},description:""}}};const fo={title:"Components/Button",component:p,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}},args:{children:"Button"}},so=o=>a.jsx(p,{...o}),u=so.bind({});u.args={};var h,oo,ro;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Example {...args} />",...(ro=(oo=u.parameters)==null?void 0:oo.docs)==null?void 0:ro.source}}};const xo=["Default"];export{u as Default,xo as __namedExportsOrder,fo as default};
