import{j as i}from"./themeProvider-Z-9a9TSg.js";import{r}from"./index-uubelm5h.js";import{p as m}from"./provideTheme-B100LR_O.js";const p=m.div(({gutter:e,gutterX:s,gutterY:n,justify:a,align:l,wrap:t})=>({gap:`${n||e||8}px ${s||e||8}px`,justifyContent:a||"flex-start",display:"flex",alignItems:l==="bottom"?"flex-end":l==="center"?"center":"flex-start",height:"fit-content",width:"100%",flexWrap:t===!1?"nowrap":"wrap",maxWidth:"100%",flexGrow:""})),o=r.createContext({gutter:null,childCount:null}),u=r.forwardRef(({children:e,forwardedRef:s,gutter:n,...a},l)=>{const t=r.useRef(0);return r.useEffect(()=>{Array.isArray(e)?t.current=e.length:t.current=e?1:0},[e]),i.jsx(o.Provider,{value:{gutter:a.gutterX||n||8,childCount:t.current},children:i.jsx(p,{...a,ref:s||l,gutter:n,children:e})})}),x=()=>r.useContext(o);u.displayName="Row";u.__docgenInfo={description:"",methods:[],displayName:"Row",props:{children:{required:!1,tsType:{name:"union",raw:"ReactChild | string | any",elements:[{name:"ReactChild"},{name:"string"},{name:"any"}]},description:""},gutter:{required:!1,tsType:{name:"number"},description:""},gutterX:{required:!1,tsType:{name:"number"},description:""},gutterY:{required:!1,tsType:{name:"number"},description:""},align:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "center"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"center"'}]},description:""},justify:{required:!1,tsType:{name:"union",raw:`| "flex-start"
| "flex-end"
| "center"
| "space-between"
| "space-evenly"
| "space-around"`,elements:[{name:"literal",value:'"flex-start"'},{name:"literal",value:'"flex-end"'},{name:"literal",value:'"center"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-evenly"'},{name:"literal",value:'"space-around"'}]},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:""},forwardedRef:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLDivElement"}],raw:"ForwardedRef<HTMLDivElement>"},description:""}}};export{u as R,x as u};
