const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BndyvAo1.js","./BaAFlbDb.js","./Ceim1iO1.js","./D2lh8xVa.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{p as f,aB as p,_ as v,d as g,aC as d,B as l,m as h,W as _,aA as r,A as C}from"./BaAFlbDb.js";import{u as y}from"./D-Lihe8E.js";import{q as w,w as m,e as P,s as $,j as N,u as j}from"./Ceim1iO1.js";import{u as T}from"./D2lh8xVa.js";const D=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if($())return(await v(()=>import("./BndyvAo1.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await y(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),O=E;export{O as default};
