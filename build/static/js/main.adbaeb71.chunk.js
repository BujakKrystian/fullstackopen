(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),r=t(16),o=t.n(r),u=(t(7),t(6)),i=t(3),s=t(0),l=function(e){var n=e.newFilter,t=e.filterNames;return Object(s.jsxs)("div",{children:["filter shown with :"," ",Object(s.jsx)("input",{value:n,onChange:t,onKeyUp:t})]})},d=function(e){var n=e.newName,t=e.handlingName,c=e.newNumber,a=e.handlingNumber,r=e.addNewName;return Object(s.jsx)("form",{onSubmit:r,children:Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:n,onChange:t}),"\n","number: ",Object(s.jsx)("input",{value:c,onChange:a}),Object(s.jsx)("button",{type:"submit",children:"add"})]})})},b=t(4),j=t.n(b),f="https://young-gorge-13396.herokuapp.com/api/persons",m=function(e){return j.a.post(f,e).then((function(e){return e.data}))},h=function(){return j.a.get(f).then((function(e){return e.data}))},O=function(e,n){return j.a.delete("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e,n){return j.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){var n=e.filtered,t=e.setFiltered,c=e.setPersons;return Object(s.jsx)("div",{children:n.map((function(e,a){return Object(s.jsxs)("p",{children:[e.name," ",e.number," ",Object(s.jsx)("button",{type:"submit",onClick:function(){return window.confirm("Delete '".concat(e.name,"'"))?O(e.id).then((function(a){var r=n.filter((function(n){return e.id!==n.id}));t(r),c(r)})):console.log("canceled")},children:"Delete"},"i")]},a)}))})},v=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:n.type,children:n.text})},g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),b=o[0],j=o[1],f=Object(c.useState)(""),O=Object(i.a)(f,2),g=O[0],w=O[1],N=Object(c.useState)(""),y=Object(i.a)(N,2),k=y[0],S=y[1],C=Object(c.useState)(t),F=Object(i.a)(C,2),D=F[0],P=F[1],T=Object(c.useState)(null),E=Object(i.a)(T,2),I=E[0],J=E[1];Object(c.useEffect)((function(){h().then((function(e){a(e),P(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(v,{message:I}),Object(s.jsx)(l,{newFilter:k,filterNames:function(e){P(t),S(e.target.value);var n=t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));P(n)}}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(d,{newName:b,newNumber:g,handlingName:function(e){j(e.target.value)},handlingNumber:function(e){w(e.target.value)},addNewName:function(e){e.preventDefault();var n={name:b,number:g};if(D.some((function(e){return e.name===b}))){var c=t.filter((function(e){return e.name===n.name})),r=Object(u.a)(Object(u.a)({},n),{},{id:c[0].id});window.confirm("".concat(n.name," is already added to  phonebook,replace the old number with a new one?"))?p(r.id,r).then((function(e){a(t.map((function(t){return t.name!==n.name?t:e}))),P(t.map((function(t){return t.name!==n.name?t:e}))),J({text:"Updated as ".concat(n.name," number"),type:"succesful"}),setTimeout((function(){J(null)}),5e3)})).catch((function(e){J({text:"Information of ".concat(n.name," has already been removed from server"),type:"error"}),setTimeout((function(){J(null)}),5e3)})):console.log("nothing has changed")}else m(n).then((function(e){P(D.concat(e)),a(t.concat(e)),j(""),w(""),J({text:"Added' ".concat(n.name,"'"),type:"succesful"}),setTimeout((function(){J(null)}),5e3)}))}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(x,{filtered:D,setFiltered:P,setPersons:a})]})};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))},7:function(e,n,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.adbaeb71.chunk.js.map