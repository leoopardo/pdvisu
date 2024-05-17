import{r as i}from"./index-uubelm5h.js";var a={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=i,l=Symbol.for("react.element"),f=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,_=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function c(r,e,s){var t,o={},n=null,u=null;s!==void 0&&(n=""+s),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(u=e.ref);for(t in e)h.call(e,t)&&!v.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:l,type:r,key:n,ref:u,props:o,_owner:_.current}}m.Fragment=f;m.jsx=c;m.jsxs=c;a.exports=m;var x=a.exports;const T={theme:"light",setTheme:()=>null},p=i.createContext(T);function y({children:r,...e}){const[s,t]=i.useState("light"),o={theme:s,setTheme:n=>{t(n)}};return x.jsx(p.Provider,{...e,value:o,children:r})}const E=()=>{const r=i.useContext(p);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r};y.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{y as T,x as j,E as u};
