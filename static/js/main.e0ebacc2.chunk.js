(this.webpackJsonpaxios_project=this.webpackJsonpaxios_project||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},21:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(14),r=a.n(o),s=(a(20),a(4)),l=a(2),i=(a(21),a(3)),m=a.n(i);var u=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),i=Object(l.a)(r,2),u=i[0],p=i[1],b=Object(n.useState)(1),d=Object(l.a)(b,2),f=d[0],h=d[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),y=v[0],E=v[1],j=function(e){e.preventDefault(),"inc"===e.target.name?h(f+1):"dec"===e.target.name&&f>1?h(f-1):h(e.target.value),E(!0),console.log("pageNum: ",f)};return Object(n.useEffect)((function(){y&&m.a.get("https://api.unsplash.com/search/photos",{params:{query:a,page:f,per_page:20},headers:{Authorization:"Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"}}).then((function(e){p(Object(s.a)(e.data.results)),E(!1)})).catch((function(e){console.log(e.message)}))})),c.a.createElement("div",{className:"container-fluid mt-5"},c.a.createElement("div",{className:"bg-secondary p-4 mb-5 rounded"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.a.get("https://api.unsplash.com/search/photos",{params:{query:a,per_page:20},headers:{Authorization:"Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"}}).then((function(e){p(Object(s.a)(e.data.results))})).catch((function(e){console.log(e.message)}))},className:"form-row"},c.a.createElement("div",{className:"col"}," ",c.a.createElement("input",{type:"text",onChange:function(e){o(e.target.value),console.log(a)},className:"form-control",style:{height:"50px"},placeholder:"Picture title ..."})),c.a.createElement("div",{className:"col-3"},c.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-success form-control",style:{height:"50px"}})))),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"d-flex flex-wrap border-1"},u.length?u.map((function(e){return c.a.createElement("img",{src:e.urls.thumb,alt:e.alt_description,key:e.id,style:{width:"150px",height:"150px"},className:"m-1 rounded border-1"})})):null),u.length?c.a.createElement("div",{className:"d-flex justify-content-between mt-4"},c.a.createElement("button",{type:"button",onClick:j,name:"dec",className:"form-control col-3 btn btn-primary"},"<<"),c.a.createElement("button",{type:"button",onClick:j,name:"inc",className:"form-control col-3 btn btn-primary"},">>")):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e0ebacc2.chunk.js.map