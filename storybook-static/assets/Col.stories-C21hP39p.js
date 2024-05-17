import{j as d}from"./themeProvider-Z-9a9TSg.js";import{p as w,c as u,P as h}from"./provideTheme-B100LR_O.js";import{B as v}from"./breakpoints-B9NbqeLH.js";import{u as $,R as g}from"./row-BZk6rbfe.js";import"./index-uubelm5h.js";const T=w.div`
  height: fit-content;
  width: ${({xs:e,sm:l,md:a,lg:n,xl:r,span:t,gutter:i,childCount:m})=>`calc((100% / 24 * (${t||r||n||a||l||e})) - (${(i||0)*((m||0)-1)/(m||0)}px))
  `};
  background-color: red;

  /* Adicionando uma media query */
  ${({xs:e,span:l,gutter:a,childCount:n})=>e&&u`
      @media screen and (max-width: ${v.xs}px) {
        width: calc(
          (100% / 24 * ${e||l}) -
            (${(a||0)*((n||0)-1)/(n||0)}px)
        );
      }
    `}

  ${({xs:e,sm:l,span:a,gutter:n,childCount:r})=>l&&u`
      @media screen and (min-width: ${v.sm}px) {
        width: calc(
          (100% / 24 * ${l||e||a}) -
            (${(n||0)*((r||0)-1)/(r||0)}px)
        );
      }
    `}

  ${({xs:e,sm:l,md:a,span:n,gutter:r,childCount:t})=>a&&u`
      @media screen and (min-width: ${v.md}px) {
        width: calc(
          (100% / 24 * ${a||l||e||n}) -
            (${(r||0)*((t||0)-1)/(t||0)}px)
        );
      }
    `}

  ${({xs:e,sm:l,md:a,lg:n,span:r,gutter:t,childCount:i})=>n&&u`
      @media screen and (min-width: ${v.lg}px) {
        width: calc(
          (100% / 24 * ${n||a||l||e||r}) -
            (${(t||0)*((i||0)-1)/(i||0)}px)
        );
      }
    `}

  ${({xs:e,sm:l,md:a,lg:n,xl:r,span:t,gutter:i,childCount:m})=>r&&u`
      @media screen and (min-width: ${v.xl}px) {
        width: calc(
          (100% / 24 * ${r||n||a||l||e||t}) -
            (${(i||0)*((m||0)-1)/(m||0)}px)
        );
      }
    `} 
    
    ${({xs:e,sm:l,md:a,lg:n,xl:r,xxl:t,span:i,gutter:m,childCount:p})=>t&&u`
      @media screen and (min-width: ${v.xl}px) {
        width: calc(
          (100% / 24 * ${t||r||n||a||l||e||i}) -
            (${(m||0)*((p||0)-1)/(p||0)}px)
        );
      }
    `}
`,x=({children:e,...l})=>{const{childCount:a,gutter:n}=$();return console.log(a),d.jsx(T,{gutter:n,childCount:a,...l,children:e})};x.__docgenInfo={description:"",methods:[],displayName:"Col",props:{children:{required:!1,tsType:{name:"union",raw:"ReactChild | string | any",elements:[{name:"ReactChild"},{name:"string"},{name:"any"}]},description:""},span:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},xs:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},sm:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},md:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},lg:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},xl:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},xxl:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},gutter:{required:!1,tsType:{name:"number"},description:""},gutterX:{required:!1,tsType:{name:"number"},description:""},childCount:{required:!1,tsType:{name:"number"},description:""}}};const o=({...e})=>d.jsx(h,{t:"light",children:d.jsx(g,{style:{backgroundColor:"blue"},children:new Array(4).fill(null).map((l,a)=>d.jsx(x,{...e,style:{height:50,display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",fontWeight:800,fontSize:26},children:a+1},`div-${a}`))})});o.__docgenInfo={description:"",methods:[],displayName:"Example",props:{children:{required:!1,tsType:{name:"union",raw:"ReactChild | string | any",elements:[{name:"ReactChild"},{name:"string"},{name:"any"}]},description:""},span:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},xs:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},sm:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},md:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},lg:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},xl:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},xxl:{required:!1,tsType:{name:"union",raw:`| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24`,elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"},{name:"literal",value:"24"}]},description:""},gutter:{required:!1,tsType:{name:"number"},description:""},gutterX:{required:!1,tsType:{name:"number"},description:""},childCount:{required:!1,tsType:{name:"number"},description:""}}};const E={title:"Layout/Col",component:o,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},q=e=>d.jsx(o,{...e}),s=q.bind({});s.args={};var c,f,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Example {...args} />",...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const k=["Default"];export{s as Default,k as __namedExportsOrder,E as default};
