(this["webpackJsonpgpa-calculator"]=this["webpackJsonpgpa-calculator"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=(a(95),a(8)),s=a(78),i=a(143),m=a(139),u=a(154),d=a(150),p=a(107),b=a(153),E=a(146),g=a(44),x=a(152),v=a(145),f=a(61),y=a.n(f),j=Object(m.a)((function(e){return{root:{color:"black"},input:{margin:5},button:{marginTop:-6,color:"#2d85fe"}}})),O=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=(a[0],a[1]),c=j();return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(x.a,{inputProps:{min:0,style:{textAlign:"center"}},id:"credits",label:"Credits",type:"number",variant:"outlined",size:"small",className:c.input}),l.a.createElement(x.a,{inputProps:{style:{textAlign:"center"},maxLength:1},id:"grade",label:"Grade",variant:"outlined",size:"small",className:c.input,onChange:function(e){return r(e.target.value)},onInput:function(e){e.target.value=(""+e.target.value).toUpperCase()}}),l.a.createElement(v.a,{"aria-label":"add an alarm",className:c.button,onClick:function(){var t=document.getElementById("credits").value,a=document.getElementById("grade").value;e.newItem({credits:t,grade:a})}},l.a.createElement(y.a,{fontSize:"large"}))))},h=Object(m.a)((function(e){return{paper:{width:e.spacing(50),height:e.spacing(8),backgroundColor:"#F0F5FF",color:"#10286b"},item:{padding:e.spacing(1),marginTop:e.spacing(2),marginLeft:e.spacing(2)}}})),S=function(e){var t=h();return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{container:!0},l.a.createElement(E.a,{item:!0},l.a.createElement(i.a,{className:t.paper,elevation:3},l.a.createElement(E.a,{container:!0},l.a.createElement(E.a,{item:!0,className:t.item},"Number of Credits: ",e.credits),l.a.createElement(E.a,{item:!0,className:t.item},"Estimated Grade: ",e.grade))))))},k=a(144),N=a(147),A=a(35),C=a.n(A),I=a(75),B=a.n(I),w=Object(m.a)((function(e){return{deleteIcon:{color:"#2d79fe"}}})),T=function(){var e=w(),t=Object(n.useState)(0),a=Object(o.a)(t,2),r=(a[0],a[1]),c=Object(n.useState)(""),s=Object(o.a)(c,2),i=(s[0],s[1],Object(n.useState)(0)),m=Object(o.a)(i,2),u=(m[0],m[1]),d=Object(n.useState)(0),b=Object(o.a)(d,2),E=(b[0],b[1],Object(n.useState)([])),x=Object(o.a)(E,2),f=x[0],y=x[1],j=Object(n.useState)(0),h=Object(o.a)(j,2),A=(h[0],h[1],Object(n.useState)("")),I=Object(o.a)(A,2),T=I[0],F=I[1],P=Object(n.useState)(0),z=Object(o.a)(P,2),D=z[0],M=z[1],G=Object(n.useState)(""),L=Object(o.a)(G,2),V=(L[0],L[1]),W=Object(n.useState)(""),J=Object(o.a)(W,2),R=(J[0],J[1],Object(n.useState)(!1)),H=Object(o.a)(R,2),U=H[0],$=H[1],q=function(e){M(T);var t=0;e.map((function(e,a){t+=Number(e.credits)}));var a=0;e.map((function(e,t){a+=e.credits*e.grade}));var n=a/t;n=+n.toFixed(2),console.log("CALCULATED"),console.log(n),F(n)};return l.a.createElement("div",null,l.a.createElement(O,{newItem:function(e){r(e.credits);var t=e.grade,a=0;switch(t){case"S":a=10;break;case"A":a=9;break;case"B":a=8;break;case"C":a=7;break;case"D":a=6;break;case"E":a=5;break;case"F":case"N":a=0}u(a);var n={credits:e.credits,DisplayGrade:t,grade:a};V(f.length),f.push(n),q(f),$(!1)}}),l.a.createElement("h1",{style:{fontSize:"3em",color:"#2d85fe"}},function(){var e=D,t=isNaN(T)?"":U?0:T;return l.a.createElement(C.a,{start:e,end:t,duration:1.75,separator:" ",decimals:2,decimal:"."})}(),l.a.createElement("span",{style:{fontSize:"0.45em",color:"#A6A6A6",fontWeight:"400"}},"/10")),l.a.createElement(k.a,null,f.map((function(t,a){return l.a.createElement(N.a,{key:a},l.a.createElement(p.a,{color:"textSecondary"},l.a.createElement(S,{credits:t.credits,grade:t.DisplayGrade})),l.a.createElement(v.a,{"aria-label":"delete",onClick:function(){return function(e){var t=Object(g.a)(f);t.splice(e,1),y(t),console.log(t),t.length>0?q(t):$(!0)}(a)}},l.a.createElement(B.a,{fontSize:"large",className:e.deleteIcon})))}))))},F=a(149),P=a(155),z=a(148),D=Object(m.a)((function(e){return{input:{color:"#606060"},text:{textAlign:"left",paddingTop:"0.6em",paddingLeft:"3em",fontFamily:"Nunito Sans"},button:{marginTop:"1.5rem"},checkbox:{color:"#606060"}}})),M=function(e){var t=D(),a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),u=m[0],d=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(E.a,{container:!0,spacing:2},l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(z.a,{className:t.checkbox,control:l.a.createElement(P.a,{checked:c,onChange:function(){c?(document.getElementById("labTab1").style.display="none",document.getElementById("labTab2").style.display="none"):(document.getElementById("labTab1").style.display="block",document.getElementById("labTab2").style.display="block"),s(!c)},name:"checkedF"}),label:"Add Lab Component"})),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(z.a,{className:t.checkbox,control:l.a.createElement(P.a,{checked:u,onChange:function(){u?(document.getElementById("projectTab1").style.display="none",document.getElementById("projectTab2").style.display="none"):(document.getElementById("projectTab1").style.display="block",document.getElementById("projectTab2").style.display="block"),d(!u)},name:"checkedF"}),label:"Add J - Component"})),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(p.a,{className:t.text,style:{color:"#606060"}},"Enter CAT 1 Marks")),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(x.a,{inputProps:{style:{textAlign:"center"},maxLength:2},type:"number",id:"cat1",label:"Marks",variant:"outlined",size:"small",className:t.input})),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(p.a,{className:t.text,style:{color:"#606060"}},"Enter CAT 2 Marks")),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(x.a,{inputProps:{style:{textAlign:"center"},maxLength:2},type:"number",id:"cat2",label:"Marks",variant:"outlined",size:"small",className:t.input})),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(p.a,{className:t.text,style:{color:"#606060"}},"Enter DA Marks")),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(x.a,{inputProps:{style:{textAlign:"center"},maxLength:2},id:"da",type:"number",label:"Marks",variant:"outlined",size:"small",className:t.input})),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(p.a,{className:t.text,style:{color:"#606060"}},"Enter FAT Marks")),l.a.createElement(E.a,{item:!0,xs:6},l.a.createElement(x.a,{inputProps:{style:{textAlign:"center"},maxLength:2},type:"number",id:"fat",label:"Marks",variant:"outlined",size:"small",className:t.input})),l.a.createElement(E.a,{item:!0,xs:6,id:"labTab1",style:{display:"none"}},l.a.createElement(p.a,{className:t.text,style:{color:"#606060"}},"Enter Lab Marks")),l.a.createElement(E.a,{item:!0,xs:6,id:"labTab2",style:{display:"none"}},l.a.createElement(x.a,{inputProps:{style:{textAlign:"center"},maxLength:2},type:"number",id:"lab",label:"Marks",variant:"outlined",size:"small",className:t.input})),l.a.createElement(E.a,{item:!0,xs:6,id:"projectTab1",style:{display:"none"}},l.a.createElement(p.a,{className:t.text,style:{color:"#606060"}},"Enter Project Marks")),l.a.createElement(E.a,{item:!0,xs:6,id:"projectTab2",style:{display:"none"}},l.a.createElement(x.a,{inputProps:{style:{textAlign:"center"},maxLength:2},type:"number",id:"project",label:"Marks",variant:"outlined",size:"small",className:t.input})),l.a.createElement(E.a,{item:!0,xs:12},l.a.createElement(F.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){var t=parseFloat(document.getElementById("cat1").value),a=parseFloat(document.getElementById("cat2").value),n=parseFloat(document.getElementById("da").value),l=parseFloat(document.getElementById("fat").value),r=parseFloat(document.getElementById("project").value);console.log(r);var o=parseFloat(document.getElementById("lab").value);console.log(o);var s=.3*t+.3*a+.4*l+n;u&&!c?s=r*(1/3)+s*(2/3):c&&!u?(s=o*(1/3)+s*(2/3),console.log(s)):c&&u&&(s=r*(1/4)+.5*s+c*(1/4)),e.getMarks(s)}},"Calculate")))))},G=Object(m.a)((function(e){return{input:{color:"black"}}})),L=function(){G();var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{getMarks:function(e){r(e)}}),l.a.createElement("h1",{style:{fontSize:"3em",color:"#2d85fe"}},function(){var e=a;return l.a.createElement(C.a,{start:0,end:e,duration:1.75,separator:" ",decimals:2,decimal:"."})}(),l.a.createElement("span",{style:{fontSize:"0.45em",color:"#A6A6A6",fontWeight:"400"}},"/100")))},V=a(4),W=a(74),J=a(142),R=a(109),H=Object(m.a)((function(e){return{input:{color:"#606060",minHeight:"5px",maxHeight:"12px",textAlign:"center"},grid:{marginBottom:"1rem"},text:{textAlign:"left",paddingTop:"0.35em",paddingLeft:"3em",fontFamily:"Nunito Sans"}}})),U=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(0),b=Object(o.a)(d,2),g=(b[0],b[1],Object(n.useState)(e.indx)),v=Object(o.a)(g,2),f=v[0];v[1];Object(n.useEffect)((function(){var t;r&&m&&(t={credits:r,GPA:m,indx:f},e.sendValues(t))}),[r,m]);var y=H();return l.a.createElement("div",null,l.a.createElement(E.a,{container:!0,className:y.grid},l.a.createElement(E.a,{item:!0,xs:4,id:"semester1A"},l.a.createElement(p.a,{className:y.text,style:{color:"#606060"}},e.title)),l.a.createElement(E.a,{item:!0,xs:8,id:"semester1B"},l.a.createElement(E.a,{container:!0,spacing:1},l.a.createElement(E.a,{item:!0,xs:4},l.a.createElement(x.a,{InputProps:{classes:{input:y.input}},type:"number",id:"credits",label:"Credits",variant:"outlined",size:"small",onBlur:function(e){var t=e.target.value;c(t)}})),l.a.createElement(E.a,{item:!0,xs:4},l.a.createElement(x.a,{InputProps:{classes:{input:y.input}},type:"number",id:"gpa",label:"GPA",variant:"outlined",size:"small",onBlur:function(e){var t=e.target.value;u(t)}}))))))},$=(a(102),Object(V.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:30,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:15,fontWeight:800,padding:"10px 13px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"])}}}))(R.a)),q=Object(m.a)((function(e){return{textbox:{display:"none"},dropDown:{marginBottom:"20px",color:"#2D85FE"},button:{marginTop:"1.5rem"}}})),K=function(e){var t=q(),a=Object(n.useState)(1),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)([0]),m=Object(o.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)([0]),b=Object(o.a)(p,2),E=b[0],x=b[1],v=Object(n.useState)(1),f=Object(o.a)(v,2),y=(f[0],f[1],function(e){var t=parseFloat(e.GPA),a=parseInt(e.credits),n=parseInt(e.indx-1),l=Object(g.a)(E),r=Object(g.a)(u);r[n]=t,l[n]=a,x(l),d(r)});return Object(n.useEffect)((function(){!function(){for(var e=["sem1","sem2","sem3","sem4","sem5","sem6","sem7","sem8","sem9","sem10"],t=c,a=e.slice(0,t),n=0;n<e.length;n++)document.getElementById(e[n]).style.display="none";for(var l=0;l<a.length;l++)document.getElementById(a[l]).style.display="block"}()}),[c]),l.a.createElement("div",null,l.a.createElement(J.a,{className:t.margin},l.a.createElement(W.a,{id:"semestersDone",onChange:function(e){s(e.target.value)},input:l.a.createElement($,null),className:t.dropDown},l.a.createElement("option",{value:1},"1 Semester Done"),l.a.createElement("option",{value:2},"2 Semester Done"),l.a.createElement("option",{value:3},"3 Semester Done"),l.a.createElement("option",{value:4},"4 Semester Done"),l.a.createElement("option",{value:5},"5 Semester Done"),l.a.createElement("option",{value:6},"6 Semester Done"),l.a.createElement("option",{value:7},"7 Semester Done"),l.a.createElement("option",{value:8},"8 Semester Done"),l.a.createElement("option",{value:9},"9 Semester Done"),l.a.createElement("option",{value:10},"10 Semester Done"))),l.a.createElement("div",{style:{color:"#606060"}},l.a.createElement("div",{className:t.textbox,id:"sem1"},l.a.createElement(U,{title:"Semester 1",indx:"1",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem2"},l.a.createElement(U,{title:"Semester 2",indx:"2",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem3"},l.a.createElement(U,{title:"Semester 3",indx:"3",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem4"},l.a.createElement(U,{title:"Semester 4",indx:"4",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem5"},l.a.createElement(U,{title:"Semester 5",indx:"5",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem6"},l.a.createElement(U,{title:"Semester 6",indx:"6",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem7"},l.a.createElement(U,{title:"Semester 7",indx:"7",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem8"},l.a.createElement(U,{title:"Semester 8",indx:"8",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem9"},l.a.createElement(U,{title:"Semester 9",indx:"9",sendValues:y})),l.a.createElement("div",{className:t.textbox,id:"sem10"},l.a.createElement(U,{title:"Semester 10",indx:"10",sendValues:y})),l.a.createElement(F.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){for(var t=0,a=0,n=0;n<E.length;n++)t+=E[n]*u[n],a+=E[n];t/=a,e.getMarks(t)}},"Calculate")))},Q=Object(m.a)((function(e){return{input:{color:"black"}}})),X=function(){Q();var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(K,{getMarks:function(e){r(e)}}),l.a.createElement("h1",{style:{fontSize:"3em",color:"#2d85fe"}},function(){var e=a;return l.a.createElement(C.a,{start:0,end:e,duration:1.75,separator:" ",decimals:2,decimal:"."})}(),l.a.createElement("span",{style:{fontSize:"0.45em",color:"#A6A6A6",fontWeight:"400"}},"/100")))};function Y(e){var t=e.children,a=e.value,n=e.index,r=Object(s.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"wrapped-tabpanel-".concat(n),"aria-labelledby":"wrapped-tab-".concat(n)},r),a===n&&l.a.createElement(b.a,{p:3},l.a.createElement(p.a,null,t)))}function Z(e){return{id:"wrapped-tab-".concat(e),"aria-controls":"wrapped-tabpanel-".concat(e)}}var _=Object(m.a)((function(e){return{root:{flexGrow:1},outerGrid:{margin:"auto"},paper:{padding:e.spacing(1),textAlign:"center",background:"white",color:"black",paddingLeft:"50px",borderRadius:10,maxWidth:"560px",marginBottom:"100px"}}}));function ee(){var e=_(),t=l.a.useState("one"),a=Object(o.a)(t,2),n=a[0],r=a[1];return l.a.createElement("div",{className:e.root},l.a.createElement(E.a,{container:!0},l.a.createElement(E.a,{item:!0,className:e.outerGrid},l.a.createElement(i.a,{className:e.paper},l.a.createElement(u.a,{value:n,onChange:function(e,t){r(t)},"aria-label":"wrapped label tabs example"},l.a.createElement(d.a,Object.assign({value:"one",label:"Semester GPA"},Z("one"))),l.a.createElement(d.a,Object.assign({value:"two",label:"Subject Total "},Z("two"))),l.a.createElement(d.a,Object.assign({value:"three",label:"CGPA Estimator"},Z("three")))),l.a.createElement(Y,{value:n,index:"one"},l.a.createElement(T,null)),l.a.createElement(Y,{value:n,index:"two"},l.a.createElement(L,null)),l.a.createElement(Y,{value:n,index:"three"},l.a.createElement(X,null))))))}var te=a(76),ae=a.n(te),ne=(a(103),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"title"},l.a.createElement("h1",null,"GPA Calculator"),l.a.createElement("p",null,"Calculate your Semester GPA, Cumulative CGPA and Estimated Total for a subject"),l.a.createElement(ee,null)),l.a.createElement("div",{className:"footer",style:{textAlign:"center",marginTop:"2em"}},l.a.createElement("p",null," Made with love exclusively for VITians \ud83d\udc9a"))),l.a.createElement("div",{className:"phone"},l.a.createElement("img",{src:ae.a,className:"phoneIcon"}),l.a.createElement("p",null,"Oops! This website is not currently compatible with mobile \ud83d\ude2c",l.a.createElement("br",null),"Please open it in your desktop :)")))}),le=a(77),re=Object(le.a)({props:{MuiButtonBase:{disableRipple:!0}}}),ce=a(151);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce.a,{theme:re},l.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a.p+"static/media/phone.6cfac974.svg"},90:function(e,t,a){e.exports=a(104)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.912e680c.chunk.js.map