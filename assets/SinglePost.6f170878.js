import{r as d,a as r,d as i,b as u,V as m,f as p,W as _,L as V,Y as v,o as n,a7 as w,a8 as B,a9 as N,i as P}from"./index.2b65006e.js";import{a as $}from"./post.e7252f34.js";import{E as f,_ as b}from"./PostCard.9e787db5.js";import"./like.ac4e1f49.js";import"./day.22152a0f.js";import"./_commonjsHelpers.4e997714.js";import"./image.e045ad59.js";const q={class:"container mt-7 px-lg-12 mb-12"},U={class:"row"},F={class:"col-lg-7"},M=P("\u8F09\u5165\u4E2D... "),T=P("\u6B64\u8CBC\u6587\u5DF2\u522A\u9664 "),W={key:0,class:"ps-0"},O={props:{userId:{type:String,required:!0},postId:{type:String,required:!0}},setup(k){const l=k,e=d(null),I=d(null),c=d(!1),g=async s=>{const{data:t}=await $(s);return t};(async()=>{if(l){const t=(await g(l.userId)).filter(o=>o._id===l.postId);e.value=t[0],I.value=t}})();const h=s=>{e.value.likes.push({_id:v.value._id})},x=s=>{const t=e.value.likes.findIndex(o=>o._id===v.value._id);~t&&e.value.likes.splice(t,1)},y=({postId:s,comment:t})=>{e.value.comments.push(t)},C=({postId:s,commentId:t,content:o})=>{const a=e.value.comments.find(S=>S._id===t);a.content=o},D=({postId:s,commentId:t})=>{const o=e.value.comments.findIndex(a=>a._id===t);~o&&e.value.comments.splice(o,1)},E=({postId:s,content:t,image:o,tag:a})=>{e.value.content=t,e.value.tag=a,e.value.image=o},L=s=>{e.value=null,c.value=!0};return(s,t)=>(n(),r(_,null,[i(w),u("section",q,[u("div",U,[u("div",F,[!e.value&&!c.value?(n(),m(f,{key:0},{default:p(()=>[M]),_:1})):!e.value&&c.value?(n(),m(f,{key:1},{default:p(()=>[T]),_:1})):(n(),r(_,{key:2},[e.value?(n(),r("ul",W,[i(b,{post:e.value,onPostLike:h,onDeleteLike:x,onPostComment:y,onEditComment:C,onDeleteComment:D,onEditPost:E,onDeletePost:L},null,8,["post"])])):V("",!0)],64))]),i(B)])]),i(N)],64))}};export{O as default};
