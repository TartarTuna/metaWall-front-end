import{r as o,a as d,d as c,b as a,w as x,e as k,v as F,t as g,L as f,f as C,Q as P,h as j,o as u,$ as B,a0 as D,a1 as N,i as M}from"./index.d2db32d7.js";import{p as V}from"./image.0541a8e8.js";import{b as $}from"./post.1395b4d3.js";const T={class:"container mt-7 px-lg-12 mb-12"},G={class:"row"},I={class:"col-lg-7"},L=a("div",{class:"card mb-5 rounded-0 border-2 titleDashBoard"},[a("h2",{class:"text-center fw-bold py-3 mb-0 fs-5"},"\u5F35\u8CBC\u52D5\u614B")],-1),U={class:"card border border-dark border-2 shadow-pushcard border8px p-5"},E={class:"form-group mb-3"},J=a("label",{for:"content fw-bold"},"\u8CBC\u6587\u5167\u5BB9",-1),R={key:0,class:"my-0 text-center fs-7 text-danger"},S={class:"mb-3"},A=["src"],H={key:2,class:"my-0 text-center fs-7 text-danger"},O={class:"d-grid gap-2 col-8 mx-auto mt-5"},Q=M(" \u9001\u51FA\u8CBC\u6587 "),X={setup(q){const i=o(!1),l=o(null),m=o(null),b=o(["jpg","jpeg","JPG","JPEG","png","PNG"]),n=o(null),p=o(!1),s=o({src:"",imgFile:null}),_=e=>{n.value="";const t=e.target.files[0],v=t.type.split("/")[1];if(!y(v)){n.value="\u6A94\u6848\u683C\u5F0F\u932F\u8AA4\uFF0C\u50C5\u9650\u4E0A\u50B3 jpg\u3001jpeg \u8207 png \u683C\u5F0F",m.value="";return}const r=new FileReader;r.readAsDataURL(t),r.onload=()=>{s.value.src=r.result,s.value.imgFile=t}},y=e=>!!b.value.includes(e),h=async()=>{try{const e=new FormData;e.append("image",s.value.imgFile);const{data:{imageUrl:t=""}}=await V(e);return t}catch(e){return Promise.reject(e)}},w=async()=>{if(i.value=!0,p.value=!1,n.value="",!l.value){p.value=!0,i.value=!1;return}try{let e="";s.value.imgFile&&(e=await h());const t={content:l.value};e&&(t.image=e),await $(t),alert("\u65B0\u589E\u6210\u529F"),l.value=null,m.value="",s.value.imgFile=null,s.value.src=null}catch(e){console.log(e),alert(e.message)}finally{i.value=!1}};return(e,t)=>{const v=j("Button");return u(),d(P,null,[c(B),a("section",T,[a("div",G,[a("div",I,[L,a("div",U,[a("form",{onSubmit:t[2]||(t[2]=x(()=>{},["prevent"]))},[a("div",E,[J,k(a("textarea",{"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),class:"form-control border border-dark border-2",type:"text",id:"content",rows:"5",placeholder:"\u8F38\u5165\u60A8\u7684\u8CBC\u6587\u5167\u5BB9"},null,512),[[F,l.value]])]),p.value&&!l.value?(u(),d("div",R,g("\u8ACB\u586B\u5BEB\u8CBC\u6587\u5167\u5BB9"))):f("",!0),a("div",S,[a("input",{ref_key:"inputFile",ref:m,type:"file",class:"d-none",placeholder:"\u4E0A\u50B3\u5716\u7247",onChange:_},null,544),a("button",{class:"btn btn-dark border",style:{"border-radius":"8px"},onClick:t[1]||(t[1]=r=>e.$refs.inputFile.click())}," \u4E0A\u50B3\u5716\u7247 ")]),s.value.src?(u(),d("img",{key:1,src:s.value.src,alt:"photo",class:"w-100 img-fluid mb-2"},null,8,A)):f("",!0),n.value?(u(),d("div",H,g(n.value),1)):f("",!0),a("div",O,[c(v,{class:"btn btn-gray-dark border border-dark border-2 fw-bold py-3 border8px",type:"submit",loading:i.value,onClick:w},{default:C(()=>[Q]),_:1},8,["loading"])])],32)])]),c(D)])]),c(N)],64)}}};export{X as default};
