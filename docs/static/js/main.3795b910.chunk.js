(this["webpackJsonpsagra-mielgo-gig-challenge"]=this["webpackJsonpsagra-mielgo-gig-challenge"]||[]).push([[0],{27:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(20),l=n.n(i),r=n(7),s=n(9),o=n(2),u=(n(27),n(0));var j=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("div",{className:"footer__btnNew",children:Object(u.jsx)(r.b,{className:"footer__btnNew--link",to:"/detail/new",children:"+"})})})},d=n(12),m=n.n(d);n(35);var b=function(e){var t=m.a.getName(e.client.country);return Object(u.jsxs)("article",{className:"clientCard",children:[Object(u.jsx)("h3",{className:"clientCard__name",children:e.client.name}),Object(u.jsx)("h3",{className:"clientCard__lastName",children:e.client.lastName}),Object(u.jsx)("a",{className:"clientCard__email",href:"mailto:".concat(e.client.email),children:e.client.email}),Object(u.jsx)("h3",{className:"clientCard__country",children:t}),Object(u.jsxs)("section",{className:"btnSection",children:[Object(u.jsx)("button",{className:"btnSection__btnEdit",children:Object(u.jsx)(r.b,{className:"btnSection__btnEdit--link",to:"/detail/".concat(e.client.id),children:"Edit"})}),Object(u.jsx)("button",{className:"btnSection__btnRemove far fa-trash-alt",onClick:function(){e.removeClient(e.client.id)}})]})]})};n(36);var h=function(e){var t=function(){return e.clients.map((function(t){return Object(u.jsx)("li",{className:"clientItem",children:Object(u.jsx)(b,{client:t,removeClient:function(){e.removeClient(t.id)}})},t.id)}))};return Object(u.jsx)("div",{className:"listContainer",children:e.clients.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"clientListTitle",children:"Client list"}),Object(u.jsx)("ul",{className:"clientList",children:t()})]}):Object(u.jsxs)("div",{className:"listContainer",children:[Object(u.jsxs)("header",{className:"listContainer__header",children:[Object(u.jsx)("h1",{className:"listContainer__header--title",children:"There are no registered clients."}),Object(u.jsx)("h2",{className:"listContainer__header--title",children:"Click on the button below to create a new one."})]}),Object(u.jsx)(j,{})]})})};var O=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{className:"form__label",htmlFor:e.id,children:e.label}),Object(u.jsx)("input",{className:"form__input",type:"text",id:e.id,value:e.value,pattern:e.pattern,required:e.required,onChange:function(t){e.handleInput(t.target.value)}})]})};var f=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{className:"form__label",children:e.label}),Object(u.jsx)("select",{className:"form__input",value:e.value,onChange:function(t){e.handleSelect(t.target.value)},children:function(){var e=m.a.getNameList(),t=[];for(var n in e){var a=e[n];t.push(Object(u.jsx)("option",{value:a,children:m.a.getName(a)},a))}return t}()})]})};n(37);var v=function(e){var t,n,c,i,l=Object(a.useState)((null===(t=e.client)||void 0===t?void 0:t.name)||""),r=Object(s.a)(l,2),o=r[0],j=r[1],d=Object(a.useState)((null===(n=e.client)||void 0===n?void 0:n.lastName)||""),m=Object(s.a)(d,2),b=m[0],h=m[1],v=Object(a.useState)((null===(c=e.client)||void 0===c?void 0:c.email)||""),x=Object(s.a)(v,2),N=x[0],_=x[1],g=Object(a.useState)((null===(i=e.client)||void 0===i?void 0:i.country)||""),C=Object(s.a)(g,2),p=C[0],w=C[1];return Object(u.jsx)("main",{className:"formContainer",children:Object(u.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.isEdit?e.setClient(e.client.id,{name:o,lastName:b,email:N,country:p}):e.createClient({name:o,lastName:b,email:N,country:p}),window.history.back()},children:[Object(u.jsx)(O,{label:"First name:",id:"name",required:!0,value:o,handleInput:j}),Object(u.jsx)(O,{label:"Last name:",id:"lastName",value:b,required:!0,handleInput:h}),Object(u.jsx)(O,{label:"Email:",id:"email",required:!0,value:N,pattern:"^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",handleInput:_}),Object(u.jsx)(f,{label:"Country:",value:p,handleSelect:w}),Object(u.jsxs)("section",{className:"form__submitSection",children:[Object(u.jsx)("input",{className:"form__submit btnCancel ",type:"button",value:"Cancel",onClick:function(){return window.history.back()}}),Object(u.jsx)("input",{className:"form__submit btnCreate",type:"submit",value:e.isEdit?"Save":"Create"})]})]})})},x=n(22),N=n(13),_=n(41),g="data",C={get:function(e){var t=localStorage.getItem(g);return null===t?e:JSON.parse(t)},set:function(e){localStorage.setItem(g,JSON.stringify(e))}},p={getAll:function(){return C.get([])},get:function(e,t){return Object(N.a)(e).find((function(e){return e.id===t}))},create:function(e,t){var n=Object(N.a)(e),a=Object(x.a)({},t);return a.id=Object(_.a)(),n.push(a),C.set(n),n},set:function(e,t,n){var a=Object(N.a)(e),c=a.find((function(e){return e.id===t}));return c.name=n.name,c.lastName=n.lastName,c.email=n.email,c.country=n.country,C.set(a),a},remove:function(e,t){var n=Object(N.a)(e),a=n.findIndex((function(e){return e.id===t}));return n.splice(a,1),C.set(n),n},sortByLastName:function(e){return e.sort((function(e,t){var n=e.lastName.toLowerCase(),a=t.lastName.toLowerCase();return n<a?-1:n>a?1:0}))}};var w=function(){var e=Object(a.useState)(p.getAll()),t=Object(s.a)(e,2),n=t[0],c=t[1],i=function(e,t){var a=p.set(n,e,t);c(a)},l=p.sortByLastName(n);return Object(u.jsxs)(o.c,{children:[Object(u.jsxs)(o.a,{exact:!0,path:"/",children:[Object(u.jsx)(h,{clients:l,removeClient:function(e){if(window.confirm("Are you sure? This will remove this client from the list")){var t=p.remove(n,e);c(t)}window.history.back()}}),Object(u.jsx)(j,{})]}),Object(u.jsx)(o.a,{path:"/detail/new",children:Object(u.jsx)(v,{isEdit:!1,createClient:function(e){var t=p.create(n,e);c(t)}})}),Object(u.jsx)(o.a,{path:"/detail/:clientId",render:function(e){var t=e.match.params.clientId,a=p.get(n,t);return Object(u.jsx)(v,{isEdit:!0,client:a,setClient:i})}})]})};n(38);l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(w,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3795b910.chunk.js.map