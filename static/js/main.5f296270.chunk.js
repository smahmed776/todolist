(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),l=s(6),i=s.n(l),n=(s(12),s(0)),r=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"#",children:"To-Do List"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(n.jsx)("ul",{className:"navbar-nav",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})})})]})})},o=s(7),j=s(2),d=Object(c.createContext)(),b=function(e){Object(c.useEffect)((function(){var e=localStorage.getItem("todo"),t=JSON.parse(e);t?(console.log(a),l(t),console.log(t)):(l([]),console.log("local storage not working"))}),[]);var t=Object(c.useState)(JSON.parse(localStorage.getItem("todo"))||[]),s=Object(j.a)(t,2),a=s[0],l=s[1];return Object(n.jsx)(d.Provider,{value:[a,l],children:e.children})},m=s(17),x=function(){var e=Object(c.useContext)(d),t=Object(j.a)(e,2),s=t[0],a=t[1],l=Object(c.useState)(""),i=Object(j.a)(l,2),r=i[0],b=i[1],x=Object(c.useState)(""),h=Object(j.a)(x,2);h[0],h[1];return Object(n.jsx)("form",{className:"row m-auto",onSubmit:function(e){e.preventDefault(),r.trim()?(a([].concat(Object(o.a)(s),[{title:r,id:Object(m.a)(),sno:s.length+1}])),console.log(s),b("")):alert("input can not be empty!")},children:Object(n.jsx)("div",{className:"col-8 my-5 m-auto ",children:Object(n.jsxs)("div",{className:"input-group m-auto",children:[Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Write To-do here","aria-label":"Write To-do here","aria-describedby":"button-addon2",value:r,onChange:function(e){b(e.target.value)}}),Object(n.jsx)("button",{className:"btn btn-outline-secondary",title:"Add To-Do",type:"submit",id:"button-addon2",style:{paddingTop:"0",paddingBottom:"5px"},children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"})})})]})})})},h=function(){var e=Object(c.useContext)(d),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(s);localStorage.setItem("todo",e)}),[s]),Object(n.jsx)("div",{className:"container px-5",children:Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"#"}),Object(n.jsx)("th",{scope:"col",children:"Select To-Do"}),Object(n.jsx)("th",{scope:"col",children:"To-Do Name"}),Object(n.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(n.jsx)("tbody",{children:s.length?s.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:e.sno}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"checkbox",name:"","data-id":e.sno,onChange:function(e){var t=e.target.dataset.id,s=document.getElementById("todo".concat(t));s.classList.toggle("text-decoration-line-through"),s.classList.toggle("fst-italic"),s.classList.toggle("text-muted")}})}),Object(n.jsx)("td",{className:"text-start ps-2",id:"todo".concat(e.sno),children:e.title}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:"btn btn-outline-warning text-danger",onClick:function(t){!function(e){var t=s.filter((function(t){return t.id!==e})),c=[];t.map((function(e){c.push({id:e.id,title:e.title,sno:c.length+1})})),a(c)}("".concat(e.id))},children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})})})})]},e.id)})):Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row"}),Object(n.jsx)("td",{className:"text-start ps-2"}),Object(n.jsx)("td",{className:"text-start text-danger ps-2",children:"No To-Do found, Please add some.."}),Object(n.jsx)("td",{className:"text-start ps-2"})]})})]})})},O=function(){return Object(n.jsx)("footer",{className:"py-8 py-md-11 my-4 bg-gray-200",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-12 col-md-4 col-lg-3",children:[Object(n.jsx)("img",{src:"./assets/img/brand.svg",alt:"...",className:"footer-brand img-fluid mb-2"}),Object(n.jsx)("p",{className:"text-gray-700 mb-2",children:"A better way to build."}),Object(n.jsxs)("ul",{className:"list-unstyled list-inline list-social mb-6 mb-md-0",children:[Object(n.jsx)("li",{className:"list-inline-item list-social-item me-3",children:Object(n.jsx)("a",{href:"#!",className:"text-decoration-none",children:Object(n.jsx)("img",{src:"./assets/img/icons/social/instagram.svg",className:"list-social-icon",alt:"..."})})}),Object(n.jsx)("li",{className:"list-inline-item list-social-item me-3",children:Object(n.jsx)("a",{href:"#!",className:"text-decoration-none",children:Object(n.jsx)("img",{src:"./assets/img/icons/social/facebook.svg",className:"list-social-icon",alt:"..."})})}),Object(n.jsx)("li",{className:"list-inline-item list-social-item me-3",children:Object(n.jsx)("a",{href:"#!",className:"text-decoration-none",children:Object(n.jsx)("img",{src:"./assets/img/icons/social/twitter.svg",className:"list-social-icon",alt:"..."})})}),Object(n.jsx)("li",{className:"list-inline-item list-social-item",children:Object(n.jsx)("a",{href:"#!",className:"text-decoration-none",children:Object(n.jsx)("img",{src:"./assets/img/icons/social/pinterest.svg",className:"list-social-icon",alt:"..."})})})]})]}),Object(n.jsxs)("div",{className:"col-6 col-md-4 col-lg-2",children:[Object(n.jsx)("h6",{className:"fw-bold text-uppercase text-gray-700",children:"Products"}),Object(n.jsxs)("ul",{className:"list-unstyled text-muted mb-6 mb-md-8 mb-lg-0",children:[Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Page Builder"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"UI Kit"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Styleguide"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Documentation"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Changelog"})})]})]}),Object(n.jsxs)("div",{className:"col-6 col-md-4 col-lg-2",children:[Object(n.jsx)("h6",{className:"fw-bold text-uppercase text-gray-700",children:"Services"}),Object(n.jsxs)("ul",{className:"list-unstyled text-muted mb-6 mb-md-8 mb-lg-0",children:[Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Documentation"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Changelog"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Pagebuilder"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"UI Kit"})})]})]}),Object(n.jsxs)("div",{className:"col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0",children:[Object(n.jsx)("h6",{className:"fw-bold text-uppercase text-gray-700",children:"Connect"}),Object(n.jsxs)("ul",{className:"list-unstyled text-muted mb-0",children:[Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Page Builder"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"UI Kit"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Styleguide"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Documentation"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Changelog"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Documentation"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Changelog"})})]})]}),Object(n.jsxs)("div",{className:"col-6 col-md-4 col-lg-2",children:[Object(n.jsx)("h6",{className:"fw-bold text-uppercase text-gray-700",children:"Legal"}),Object(n.jsxs)("ul",{className:"list-unstyled text-muted mb-0",children:[Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Documentation"})}),Object(n.jsx)("li",{className:"mb-3",children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Changelog"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",className:"text-reset",children:"Pagebuilder"})})]})]})]})})})};s(14);var g=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(r,{}),Object(n.jsxs)(b,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(h,{})]}),Object(n.jsx)(O,{})]})},u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),l(e),i(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.5f296270.chunk.js.map