import{A as D}from"./ApplicationLogo-617ca3b4.js";import{m as M,p as N,h as v,q as L,o as u,f as m,b as e,r as g,i as w,s as $,a as s,w as a,n as c,u as d,T as B,c as k,l as y,d as l,t as b,g as E}from"./app-0291d9f3.js";const j={class:"relative"},z={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(o){const r=o,t=p=>{i.value&&p.key==="Escape"&&(i.value=!1)};M(()=>document.addEventListener("keydown",t)),N(()=>document.removeEventListener("keydown",t));const n=v(()=>({48:"w-48"})[r.width.toString()]),h=v(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top"),i=L(!1);return(p,f)=>(u(),m("div",j,[e("div",{onClick:f[0]||(f[0]=_=>i.value=!i.value)},[g(p.$slots,"trigger")]),w(e("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=_=>i.value=!1)},null,512),[[$,i.value]]),s(B,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[w(e("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[d(n),d(h)]]),style:{display:"none"},onClick:f[2]||(f[2]=_=>i.value=!1)},[e("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses])},[g(p.$slots,"content")],2)],2),[[$,i.value]])]),_:3})]))}},C={__name:"DropdownLink",setup(o){return(r,t)=>(u(),k(d(y),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:a(()=>[g(r.$slots,"default")]),_:3}))}},S={__name:"NavLink",props:["href","active"],setup(o){const r=o,t=v(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(n,h)=>(u(),k(d(y),{href:o.href,class:c(d(t))},{default:a(()=>[g(n.$slots,"default")]),_:3},8,["href","class"]))}},x={__name:"ResponsiveNavLink",props:["href","active"],setup(o){const r=o,t=v(()=>r.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-left text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(n,h)=>(u(),k(d(y),{href:o.href,class:c(d(t))},{default:a(()=>[g(n.$slots,"default")]),_:3},8,["href","class"]))}},V={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},A={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},O={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},T={class:"flex justify-between h-16"},P={class:"flex"},q={class:"shrink-0 flex items-center"},R={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},U={class:"hidden sm:flex sm:items-center sm:ml-6"},F={class:"ml-3 relative"},G={class:"inline-flex rounded-md"},H={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"},I=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),J={class:"-mr-2 flex items-center sm:hidden"},K={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Q={class:"pt-2 pb-3 space-y-1"},W={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},X={class:"px-4"},Y={class:"font-medium text-base text-gray-800 dark:text-gray-200"},Z={class:"font-medium text-sm text-gray-500"},ee={class:"mt-3 space-y-1"},te={key:0,class:"bg-white dark:bg-gray-800 shadow"},re={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},se={__name:"AuthenticatedLayout",setup(o){const r=L(!1);return(t,n)=>(u(),m("div",null,[e("div",V,[e("nav",A,[e("div",O,[e("div",T,[e("div",P,[e("div",q,[s(d(y),{href:t.route("dashboard")},{default:a(()=>[s(D,{class:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})]),_:1},8,["href"])]),e("div",R,[s(S,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[l(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",U,[e("div",F,[s(z,{align:"right",width:"48"},{trigger:a(()=>[e("span",G,[e("button",H,[l(b(t.$page.props.auth.user.name)+" ",1),I])])]),content:a(()=>[s(C,{href:t.route("profile.edit")},{default:a(()=>[l(" Profile ")]),_:1},8,["href"]),s(C,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>[l(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",J,[e("button",{onClick:n[0]||(n[0]=h=>r.value=!r.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"},[(u(),m("svg",K,[e("path",{class:c({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:c({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:c([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",Q,[s(x,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[l(" Dashboard ")]),_:1},8,["href","active"])]),e("div",W,[e("div",X,[e("div",Y,b(t.$page.props.auth.user.name),1),e("div",Z,b(t.$page.props.auth.user.email),1)]),e("div",ee,[s(x,{href:t.route("profile.edit")},{default:a(()=>[l(" Profile ")]),_:1},8,["href"]),s(x,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>[l(" Log Out ")]),_:1},8,["href"])])])],2)]),t.$slots.header?(u(),m("header",te,[e("div",re,[g(t.$slots,"header")])])):E("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{se as _};
