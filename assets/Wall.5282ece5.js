import{M as $,z as D,p as V,r as m,N as Z,O as C,P as J,Q as ee,k as te,R as oe,S as se,T as ne,U as ae,a as O,d as L,b as E,V as T,f as le,W as B,L as q,X as re,o as g,i as ie,u as ce,Y as W,h as N}from"./index.2b65006e.js";import{g as A}from"./post.e7252f34.js";import{_ as ue}from"./PostFilter.2ac958c0.js";import{E as F,_ as de}from"./PostCard.9e787db5.js";import"./like.ac4e1f49.js";import"./day.22152a0f.js";import"./_commonjsHelpers.4e997714.js";import"./image.e045ad59.js";function pe(n){var e;const t=te(n);return(e=t==null?void 0:t.$el)!=null?e:t}const fe=$?window:void 0;$&&window.document;$&&window.navigator;$&&window.location;function _e(...n){let e,t,u,r;if(Z(n[0])?([t,u,r]=n,e=fe):[e,t,u,r]=n,!e)return C;let i=C;const v=V(()=>pe(e),d=>{i(),d&&(d.addEventListener(t,u,r),i=()=>{d.removeEventListener(t,u,r),i=C})},{immediate:!0,flush:"post"}),a=()=>{v(),i()};return J(a),a}const j=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},R="__vueuse_ssr_handlers__";j[R]=j[R]||{};j[R];function ve(n,e={}){const{throttle:t=0,idle:u=200,onStop:r=C,onScroll:i=C,offset:v={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0}}=e,d=m(0),b=m(0),k=m(!1),p=D({left:!0,right:!1,top:!0,bottom:!1}),f=D({left:!1,right:!1,top:!1,bottom:!1});if(n){const I=oe(h=>{k.value=!1,f.left=!1,f.right=!1,f.top=!1,f.bottom=!1,r(h)},t+u),w=h=>{const y=h.target===document?h.target.documentElement:h.target,x=y.scrollLeft;f.left=x<d.value,f.right=x>d.value,p.left=x<=0+(v.left||0),p.right=x+y.clientWidth>=y.scrollWidth-(v.right||0),d.value=x;const S=y.scrollTop;f.top=S<b.value,f.bottom=S>b.value,p.top=S<=0+(v.top||0),p.bottom=S+y.clientHeight>=y.scrollHeight-(v.bottom||0),b.value=S,k.value=!0,I(h),i(h)};_e(n,"scroll",t?ee(w,t):w,a)}return{x:d,y:b,isScrolling:k,arrivedState:p,directions:f}}var me=Object.defineProperty,he=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,K=(n,e,t)=>e in n?me(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,M=(n,e)=>{for(var t in e||(e={}))we.call(e,t)&&K(n,t,e[t]);if(H)for(var t of H(e))ye.call(e,t)&&K(n,t,e[t]);return n},Pe=(n,e)=>he(n,ge(e));function be(n,e,t={}){var u;const r=D(ve(n,Pe(M({},t),{offset:M({bottom:(u=t.distance)!=null?u:0},t.offset)})));V(()=>r.arrivedState.bottom,i=>{i&&e(r)})}const ke={class:"container mt-7 px-lg-12 mb-12"},xe={class:"row d-flex justify-content-center"},Se={class:"col-12 col-lg-7"},Oe=ie("\u8F09\u5165\u4E2D..."),Ee={key:1,class:"ps-0"},Ce={key:0,class:"card py-4 px-4 mb-3 border-2 shadow-pushcard border8px position-relative text-center h-100"},Le=E("div",null,[E("span",{class:"spinner-border",role:"status","aria-hidden":"true"})],-1),$e=E("div",{class:"pt-2"},"\u8F09\u5165\u65B0\u7684\u8CBC\u6587\u4E2D...",-1),Ie=[Le,$e],We={setup(n){const e=se("https://metawall-06.herokuapp.com"),t=ce(),u=10,r=m(!0),i=m("desc"),v=m(""),a=m([]),d=m(0),b=m(1),k=m(!1);e.on("connect",()=>{console.log(e.id)}),e.on("newPost",o=>{o&&d.value++});let p=ne().query;ae(async o=>{p=o.query,await w({reset:!0})}),be(window,()=>{b.value++});const f=V(b,async o=>{k.value=!0;const{data:s}=await A({createdAt:i.value,q:v.value,pageIndex:o,pageSize:u});s.length<u&&f(),a.value.push(...s),k.value=!1}),I=async()=>{const o={createdAt:i.value,q:v.value};p&&p.post&&(o._id=p.post);const{data:s}=await A(o);return s},w=async({reset:o=!1}={})=>{try{r.value=!0,o&&(a.value=[]);const s=await I();a.value.push(...s)}finally{r.value=!1}},h=o=>{i.value=o,w({reset:!0})},y=o=>{v.value=o,w({reset:!0})},x=o=>{a.value.find(l=>l._id===o).likes.push({_id:W.value._id})},S=o=>{const s=a.value.find(c=>c._id===o),l=s.likes.findIndex(c=>c._id===W.value._id);~l&&s.likes.splice(l,1)},z=({postId:o,comment:s})=>{a.value.find(c=>c._id===o).comments.push(s)},U=({postId:o,commentId:s,content:l})=>{const _=a.value.find(P=>P._id===o).comments.find(P=>P._id===s);_.content=l},G=({postId:o,commentId:s})=>{const l=a.value.find(_=>_._id===o),c=l.comments.findIndex(_=>_._id===s);~c&&l.comments.splice(c,1)},Q=({postId:o,content:s,image:l,tag:c})=>{const _=a.value.find(P=>P._id===o);_.content=s,_.tag=c,_.image=l},X=o=>{const s=a.value.findIndex(l=>l._id===o);~s&&a.value.splice(s,1)},Y=()=>{d.value=0,t.push("/wall"),Object.keys(p).length||w({reset:!0})};return w(),(o,s)=>{const l=N("Navbar"),c=N("RightBar"),_=N("PhoneMenu");return g(),O(B,null,[L(l),E("section",ke,[E("div",xe,[E("div",Se,[L(ue,{loading:r.value,sort:i.value,onChangeSort:h,onChangeKeyword:y},null,8,["loading","sort"]),r.value?(g(),T(F,{key:0},{default:le(()=>[Oe]),_:1})):(g(),O(B,{key:1},[d.value?(g(),O("p",{key:0,class:"text-muted text-center",style:{cursor:"pointer"},onClick:Y}," - \u6709\u65B0\u8CBC\u6587\u5594\uFF01\u9EDE\u64CA\u8F09\u5165 - ")):q("",!0),a.value.length?(g(),O("ul",Ee,[(g(!0),O(B,null,re(a.value,P=>(g(),T(de,{key:P._id,post:P,onPostLike:x,onDeleteLike:S,onPostComment:z,onEditComment:U,onDeleteComment:G,onEditPost:Q,onDeletePost:X},null,8,["post"]))),128)),k.value?(g(),O("li",Ce,Ie)):q("",!0)])):(g(),T(F,{key:2}))],64))]),L(c)])]),L(_)],64)}}};export{We as default};
