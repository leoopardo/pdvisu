import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{r as h}from"./index-uubelm5h.js";import{p}from"./provideTheme-CloLajsq.js";const o=t=>p[t](({theme:a,level:e,strong:n,italic:i})=>({fontSize:e==="h1"?46:e==="p"?16:Math.floor(64/+e[1]),fontFamily:["h1","h2","h3","h4"].includes(e)?"GothamPro":"Inter",fontWeight:n?800:500,fontStyle:i?"italic":"unset",color:a.text.primary})),l=o("h1"),y=o("h2"),m=o("h3"),d=o("h4"),g=o("p"),s=h.forwardRef(({children:t,level:a,...e},n)=>({h1:r.jsx(l,{level:a,ref:n,...e,children:t}),h2:r.jsx(y,{level:a,ref:n,...e,children:t}),h3:r.jsx(m,{level:a,ref:n,...e,children:t}),h4:r.jsx(d,{level:a,ref:n,...e,children:t}),p:r.jsx(g,{level:a,ref:n,...e,children:t})})[a]);s.displayName="Typography";s.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{children:{required:!1,tsType:{name:"union",raw:"ReactChild | string | any",elements:[{name:"ReactChild"},{name:"string"},{name:"any"}]},description:""},level:{required:!0,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h3" | "h4" | "p"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"p"'}]},description:""},strong:{required:!1,tsType:{name:"boolean"},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"union",raw:'"dark" | "light"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:""}}};export{s as T};
