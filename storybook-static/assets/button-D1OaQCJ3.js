import{j as n}from"./themeProvider-Z-9a9TSg.js";import{R as m}from"./index-uubelm5h.js";import{L as Y}from"./loading-CBrh4Q67.js";import{p as h}from"./provideTheme-B100LR_O.js";const e=h.button(({theme:o,disabled:u,size:i,variant:a,danger:r,shape:d,loading:P})=>{var l,s,c,t,g,p,x,k,f,y,$,C,v,j,F,w,B,R,N,S,z,I,L,_,D,E,G,H,M,q,A,J,K,O,Q,T,U,V,W,X;const b={border:0,lineHeight:1,fontSize:"16px",fontFamily:"GothamPro",cursor:"pointer",borderRadius:d==="round"?"50px":"10px",width:"fit-content",height:"fit-content",animationName:u?`disable-${a}`:"able",animationFillMode:"forwards",animationDuration:"0.5s",padding:i==="large"?"14.51px 8px":i==="medium"?"12px 8px":"10px 8px",transition:"background-color 0.3s, color 0.3s, border-radius 0.3s, outline 0.3s, boxShadow 0.3s",gap:"8px",display:"flex",justifyContent:"center",alignItems:"center",outline:"transparent",opacity:P?.6:1};if(!a||a==="primary")return{...b,color:(l=o==null?void 0:o.text)==null?void 0:l.button,backgroundColor:(s=o==null?void 0:o.button.primary)==null?void 0:s.background[`initial${r?"-danger":""}`],"&:hover":{backgroundColor:(c=o==null?void 0:o.button.primary)==null?void 0:c.background[`hover${r?"-danger":""}`]},"&:active":{backgroundColor:(t=o==null?void 0:o.button.primary)==null?void 0:t.background[`active${r?"-danger":""}`]},"&:focus":{outline:`6px solid ${o.button.primary[`stroke${r?"-danger":""}`]}`},"@keyframes disable-primary":{from:{backgroundColor:(g=o==null?void 0:o.button.primary)==null?void 0:g.background[`initial${r?"-danger":""}`]},to:{backgroundColor:(x=(p=o==null?void 0:o.button.primary)==null?void 0:p.background)==null?void 0:x.disabled,cursor:"no-drop"}}};if(a==="secondary")return{...b,color:(k=o==null?void 0:o.text)==null?void 0:k.secondary,backgroundColor:(y=(f=o==null?void 0:o.button)==null?void 0:f.secondary)==null?void 0:y.background[`initial${r?"-danger":""}`],"&:hover":{backgroundColor:(C=($=o==null?void 0:o.button)==null?void 0:$.secondary)==null?void 0:C.background[`hover${r?"-danger":""}`]},"&:active":{backgroundColor:(j=(v=o==null?void 0:o.button)==null?void 0:v.secondary)==null?void 0:j.background[`active${r?"-danger":""}`]},"&:focus":{outline:`6px solid ${o.button.secondary[`stroke${r?"-danger":""}`]}`},"@keyframes disable-secondary":{from:{backgroundColor:(w=(F=o==null?void 0:o.button)==null?void 0:F.secondary)==null?void 0:w.background[`initial${r?"-danger":""}`]},to:{backgroundColor:(N=(R=(B=o==null?void 0:o.button)==null?void 0:B.secondary)==null?void 0:R.background)==null?void 0:N.disabled,cursor:"no-drop"}}};if(a==="outline")return{...b,color:(S=o==null?void 0:o.button)==null?void 0:S.outline[`text${r?"-danger":""}`],backgroundColor:(L=(I=(z=o==null?void 0:o.button)==null?void 0:z.outline)==null?void 0:I.background)==null?void 0:L.initial,outline:`2px solid ${(_=o==null?void 0:o.button)==null?void 0:_.outline[`text${r?"-danger":""}`]}`,"&:hover":{backgroundColor:!u&&((E=(D=o==null?void 0:o.button)==null?void 0:D.outline)==null?void 0:E.background[`hover${r?"-danger":""}`])},"&:active":{backgroundColor:(H=(G=o==null?void 0:o.button)==null?void 0:G.outline)==null?void 0:H.background[`active${r?"-danger":""}`]},"&:focus":{boxShadow:`0px 0px 0px 8px ${(q=(M=o==null?void 0:o.button)==null?void 0:M.outline)==null?void 0:q.background[`hover${r?"-danger":""}`]};`},"@keyframes disable-outline":{from:{color:(J=(A=o==null?void 0:o.button)==null?void 0:A.outline)==null?void 0:J.text,outline:`2px solid ${(O=(K=o==null?void 0:o.button)==null?void 0:K.outline)==null?void 0:O.text}`},to:{color:(U=(T=(Q=o==null?void 0:o.button)==null?void 0:Q.outline)==null?void 0:T.background)==null?void 0:U.disabled,outline:`2px solid ${(X=(W=(V=o==null?void 0:o.button)==null?void 0:V.outline)==null?void 0:W.background)==null?void 0:X.disabled}`,cursor:"no-drop"}}}}),Z=m.forwardRef(({children:o,icon:u,iconPosition:i,loading:a,...r},d)=>n.jsxs(e,{"data-testid":`button-${o}`,type:"button",ref:d,...r,children:[u&&i==="left"&&!a?u:n.jsx(n.Fragment,{}),u&&i==="left"&&a?n.jsx(Y,{size:"medium",variant:r.variant,danger:r.danger}):n.jsx(n.Fragment,{}),o,u&&i!=="left"&&a?n.jsx(Y,{size:"medium",variant:r.variant,danger:r.danger}):n.jsx(n.Fragment,{}),u&&i!=="left"&&!a?u:n.jsx(n.Fragment,{})]}));Z.displayName="Button";Z.__docgenInfo={description:"",methods:[],displayName:"Button"};export{Z as B};