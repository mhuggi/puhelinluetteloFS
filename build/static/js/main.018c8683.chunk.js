(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(14),c=t.n(r),l=t(4),o=t(2),i=function(e){var n=e.person,t=e.click;return u.a.createElement("div",null,u.a.createElement("p",null,n.name," ",n.number,u.a.createElement("button",{key:n.name+"button",onClick:t},"delete")))},m=function(e){return u.a.createElement("div",null,"Filter shown with ",u.a.createElement("input",{value:e.filter,onChange:e.onChange}))},s=function(e){return u.a.createElement("form",{onSubmit:e.addNewPerson},u.a.createElement("div",null,"Name: ",u.a.createElement("input",{value:e.newName,onChange:e.handleNewNameChange})," "),u.a.createElement("div",null,"Number: ",u.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})," "),u.a.createElement("button",{type:"submit"},"save"))},f=t(3),d=t.n(f),b="/api/persons",h=function(){return d.a.get(b).then((function(e){return e.data}))},E=function(e){return d.a.post(b,e).then((function(e){return e.data}))},v=function(e){return d.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return d.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"message"},n)},g=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"error"},n)},N=(t(37),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),f=Object(o.a)(c,2),d=f[0],b=f[1],N=Object(a.useState)(""),O=Object(o.a)(N,2),j=O[0],C=O[1],k=Object(a.useState)(""),S=Object(o.a)(k,2),y=S[0],T=S[1],D=Object(a.useState)(null),P=Object(o.a)(D,2),x=P[0],A=P[1],J=Object(a.useState)(null),L=Object(o.a)(J,2),B=L[0],F=L[1];Object(a.useEffect)((function(){h().then((function(e){r(e)}))}),[]);var I,M;return u.a.createElement("div",null,u.a.createElement(w,{message:x}),u.a.createElement(g,{message:B}),u.a.createElement("h2",null,"Phonebook"),u.a.createElement(m,{filter:y,onChange:function(e){T(e.target.value)}}),u.a.createElement("div",null,u.a.createElement("h2",null,"Add new"),u.a.createElement(s,{addNewPerson:function(e){e.preventDefault();var n={name:d,number:j};if(t.some((function(e){return e.name===d}))){if(window.confirm("".concat(d," is already added to phonebook, replace old number with a new one?"))){var a=t.find((function(e){return e.name===d})),u=Object(l.a)(Object(l.a)({},a),{},{number:j});p(a.id,u),A("number has been updated for ".concat(d," ")),setTimeout((function(){A(null)}),3e3)}C(""),b("")}else E(n).then((function(e){r(t.concat(e)),C(""),b(""),A("Added ".concat(d," ")),setTimeout((function(){A(null)}),3e3)})).catch((function(e){A(e.response.data.error),setTimeout((function(){A(null)}),3e3)}))},newName:d,handleNewNameChange:function(e){b(e.target.value)},newNumber:j,handleNumberChange:function(e){C(e.target.value)}})),u.a.createElement("h2",null,"Numbers"),u.a.createElement("div",null,(I=t,M=y,I.filter((function(e){return-1!==e.name.toLowerCase().indexOf(M.toLowerCase())}))).map((function(e,n){return u.a.createElement("div",null,u.a.createElement(i,{key:e.name,person:e,click:function(){return function(e){window.confirm("Delete "+e.name+"?")&&(v(e.id).then((function(n){return A("Deleted ".concat(e.name," "))})).catch((function(n){F("".concat(e.name," was already removed from server")),setTimeout((function(){F(null)}),3e3)})),setTimeout((function(){A(null)}),3e3))}(e)}}))}))))});c.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(N,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.018c8683.chunk.js.map