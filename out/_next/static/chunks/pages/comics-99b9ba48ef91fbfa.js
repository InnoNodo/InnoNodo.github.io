(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{2861:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comics",function(){return i(2580)}])},2580:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return s}});var n=i(5893),a=i(7294),c=i(7066),r=()=>{let[t,e]=(0,a.useState)(""),[i,r]=(0,a.useState)(null),s=async e=>{e.preventDefault();try{let e=encodeURIComponent(t),i=await c.Z.get("https://fwd.innopolis.university/api/hw2?email=".concat(e)),n="https://fwd.innopolis.university/api/comic?id=".concat(i.data),a=await c.Z.get(n);r(a.data)}catch(t){console.error("Error fetching comic data:",t)}};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("form",{id:"emailForm",onSubmit:s,children:[(0,n.jsx)("input",{type:"email",id:"email",value:t,onChange:t=>e(t.target.value),required:!0}),(0,n.jsx)("button",{type:"submit",children:"Submit"})]}),i&&(0,n.jsxs)("div",{className:"container-for-comics",children:[(0,n.jsx)("img",{id:"comicImage",src:i.img,alt:i.alt}),(0,n.jsxs)("h1",{id:"comicTitle",children:["Title: ",i.safe_title]}),(0,n.jsxs)("p",{id:"comicDate",children:["Uploaded on: ",new Date(parseInt(String(i.year)),parseInt(String(i.month))-1,parseInt(String(i.day))).toLocaleDateString()]})]})]})},s=()=>(0,n.jsx)("div",{children:(0,n.jsx)(r,{})})}},function(t){t.O(0,[66,888,774,179],function(){return t(t.s=2861)}),_N_E=t.O()}]);