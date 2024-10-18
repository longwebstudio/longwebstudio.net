import{d as C,W as w,C as B,D as I,r as f,B as D,ax as S,c as s,e as o,f as d,n as l,E as e,F as y,K as g,L as x,h as N,t as U,ae as z,af as A,ai as E,H as F,Z as L}from"./BaAFlbDb.js";const V=["onClick"],H=C({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(h){const _={wrapper:"relative my-5 space-y-6",header:"flex items-center relative overflow-x-auto",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},m=h,i=w(),{ui:r,attrs:k}=B("content.tabs",void 0,_,I(m,"class"),!0),p=f(m.selectedIndex||0),b=f(1),v=D(()=>{var u;return b.value,((u=i.default)==null?void 0:u.call(i).map((n,c)=>{var t,a;return{index:c,label:((t=n.props)==null?void 0:t.label)||`${c}`,icon:(a=n.props)==null?void 0:a.icon,component:n}}))||[]});return S(()=>{b.value+=1}),(u,n)=>{const c=L;return s(),o("div",F({class:e(r).wrapper},e(k)),[d("div",{class:l(e(r).header)},[d("div",{class:l(e(r).border)},null,2),(s(!0),o(y,null,g(e(v),(t,a)=>(s(),o("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:$=>p.value=a},[t.icon?(s(),x(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):N("",!0),d("span",null,U(t.label),1)],10,V))),128))],2),(s(!0),o(y,null,g(e(v),(t,a)=>z((s(),o("div",{key:a},[(s(),x(E(t.component)))])),[[A,e(p)===a]])),128))],16)}}});export{H as default};
