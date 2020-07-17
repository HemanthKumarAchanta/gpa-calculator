(this["webpackJsonpgpa-calculator"]=this["webpackJsonpgpa-calculator"]||[]).push([[0],{71:function(e,a,t){e.exports=t(83)},76:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),i=(t(76),t(15)),o=t(45),m=t(58),u=t(118),s=t(115),d=t(128),p=t(124),b=t(123),g=t(127),E=t(121),v=t(126),f=t(120),h=t(44),j=t.n(h),O=Object(s.a)((function(e){return{root:{color:"black"},input:{margin:5},button:{marginTop:-6}}})),w=function(e){var a=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(v.a,{inputProps:{min:0,style:{textAlign:"center"}},id:"credits",label:"Credits",variant:"outlined",size:"small",className:a.input}),r.a.createElement(v.a,{inputProps:{style:{textAlign:"center"}},id:"grade",label:"Grade",variant:"outlined",size:"small",className:a.input}),r.a.createElement(f.a,{color:"secondary","aria-label":"add an alarm",className:a.button,onClick:function(){var a=document.getElementById("credits").value,t=document.getElementById("grade").value;e.newItem({credits:a,grade:t})}},r.a.createElement(j.a,{fontSize:"large"}))))},k=Object(s.a)((function(e){return{paper:{width:e.spacing(50),height:e.spacing(8)},item:{padding:e.spacing(1),marginTop:e.spacing(2),marginLeft:e.spacing(2)}}})),x=function(e){var a=k();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0},r.a.createElement(u.a,{className:a.paper},r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,className:a.item},"Number of Credits: ",e.credits),r.a.createElement(E.a,{item:!0,className:a.item},"Estimated Grade: ",e.grade))))))},G=t(119),N=t(122),S=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=(a[0],a[1]),c=Object(n.useState)(""),l=Object(i.a)(c,2),o=(l[0],l[1],Object(n.useState)(0)),m=Object(i.a)(o,2),u=(m[0],m[1]),s=Object(n.useState)([]),d=Object(i.a)(s,2),p=d[0],g=(d[1],Object(n.useState)(0)),E=Object(i.a)(g,2),v=(E[0],E[1],Object(n.useState)(-1)),f=Object(i.a)(v,2),h=f[0],j=f[1],O=function(){var e=0;p.map((function(a,t){e+=Number(a.credits)}));var a=0;p.map((function(e,t){a+=e.credits*e.grade})),console.log(a),console.log(e),j(a/e)};return r.a.createElement("div",null,r.a.createElement(w,{newItem:function(e){t(e.credits),u(e.grade);var a={credits:e.credits,grade:e.grade};u(p.length),p.push(a),O()}}),r.a.createElement("h1",null,h),r.a.createElement(G.a,null,p.map((function(e,a){return r.a.createElement(N.a,{key:a},r.a.createElement(b.a,{color:"textSecondary"},r.a.createElement(x,{credits:e.credits,grade:e.grade})))}))))};function y(e){var a=e.children,t=e.value,n=e.index,c=Object(m.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"wrapped-tabpanel-".concat(n),"aria-labelledby":"wrapped-tab-".concat(n)},c),t===n&&r.a.createElement(g.a,{p:3},r.a.createElement(b.a,null,a)))}function C(e){return{id:"wrapped-tab-".concat(e),"aria-controls":"wrapped-tabpanel-".concat(e)}}var A=Object(s.a)((function(e){var a;return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},outerGrid:{margin:"auto"},paper:(a={padding:e.spacing(1),textAlign:"center",background:"pink",color:"black"},Object(o.a)(a,"padding",10),Object(o.a)(a,"borderRadius",10),a)}}));function P(){var e=A(),a=r.a.useState("one"),t=Object(i.a)(a,2),n=t[0],c=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,className:e.outerGrid},r.a.createElement(u.a,{className:e.paper},r.a.createElement(d.a,{value:n,onChange:function(e,a){c(a)},"aria-label":"wrapped label tabs example"},r.a.createElement(p.a,Object.assign({value:"one",label:"Semester GPA",wrapped:!0},C("one"))),r.a.createElement(p.a,Object.assign({value:"two",label:"Subject Grade "},C("two"))),r.a.createElement(p.a,Object.assign({value:"three",label:"CGPA Estimator"},C("three")))),r.a.createElement(y,{value:n,index:"one"},r.a.createElement(S,null)),r.a.createElement(y,{value:n,index:"two"},"Item Two"),r.a.createElement(y,{value:n,index:"three"},"Item Three")))))}t(82);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"title"},r.a.createElement("h1",null,"CGPA Calculator"),r.a.createElement("p",null,"Calculate your sem GPA, overall CGPA, estimated GPA"),r.a.createElement(P,null)))},B=t(57),T=Object(B.a)({props:{MuiButtonBase:{disableRipple:!0}}}),z=t(125);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z.a,{theme:T},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.d328087d.chunk.js.map