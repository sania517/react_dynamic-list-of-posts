(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{11:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),u=n(10),o=n(2),l=n(9),i=n.n(l),m=(n(25),n(1)),p=n.n(m),f=n(3),d="https://jsonplaceholder.typicode.com/";function E(){return h.apply(this,arguments)}function h(){return(h=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(d+"users").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(d+"posts").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return v.apply(this,arguments)}function v(){return(v=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(d+"comments").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(27),n(28);var O=function(e){var t=e.user,n=t.name,a=t.email,c=t.address,s=c.city,u=c.street,o=c.zipcode;return r.a.createElement("div",{className:"user"},r.a.createElement("p",null,"Autor contacts:"),r.a.createElement("p",null,"name: ".concat(n,", email: ").concat(a)),r.a.createElement("p",null,"address: ".concat(o,", ").concat(u,", ").concat(s)))},g=(n(29),function(e){var t=e.comment,n=t.name,a=t.email,c=t.body;return r.a.createElement("li",{className:"comment"},r.a.createElement("p",{className:"comment__autor"},r.a.createElement("span",null,"autor: ".concat(n," ")),r.a.createElement("span",null,"e-mail: ".concat(a))),r.a.createElement("p",{className:"comment__text"},c))}),N=function(e){var t=e.comments;return r.a.createElement("ul",{className:"commentList"},t.map((function(e){return r.a.createElement(g,{key:e.id,comment:e})})))},_=function(e){var t=e.post,n=t.title,a=t.body,c=t.user,s=t.comments;return r.a.createElement("li",{className:"post"},r.a.createElement("h3",{className:"post__title"},n),r.a.createElement("p",{className:"post__text"},a),r.a.createElement(O,{user:c}),r.a.createElement(N,{comments:s}))},k=function(e){var t=e.postList;return r.a.createElement("ul",{className:"postList"},t.map((function(e){return r.a.createElement(_,{key:e.id,post:e})})))},w=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),l=Object(o.a)(s,2),m=l[0],p=l[1],f=Object(a.useState)(!1),d=Object(o.a)(f,2),h=d[0],y=d[1],v=Object(a.useState)(""),O=Object(o.a)(v,2),g=O[0],N=O[1],_=Object(a.useState)(""),w=Object(o.a)(_,2),x=w[0],L=w[1];var S=Object(a.useMemo)((function(){return function(e,t){var n=new RegExp(t.trim(),"gi");return e.filter((function(e){return n.test(e.title)||n.test(e.body)}))}(n,x)}),[x,n]),C=Object(a.useCallback)(i()(L,1e3),[]);return n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of posts"),r.a.createElement("input",{className:"search-field",value:g,type:"text",placeholder:"Enter search query",onChange:function(e){N(e.target.value),C(e.target.value)}}),r.a.createElement("div",{className:"App"},r.a.createElement(k,{postList:S}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of posts"),r.a.createElement("button",{type:"button",onClick:function(){p(!1),y(!0),Promise.all([E(),b(),j()]).then((function(e){var t=Object(o.a)(e,3),n=t[0],a=t[1],r=t[2];y(!1);var s=a.map((function(e){return Object(u.a)({},e,{user:n.find((function(t){return t.id===e.userId})),comments:r.filter((function(t){return t.postId===e.id}))})}));c(s)})).catch((function(){p(!0),y(!1)}))},disabled:h},"Load posts"),r.a.createElement("p",null,h?"Loading":""),r.a.createElement("p",null,m?"Error occured. Try again later":""))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.06fc3923.chunk.js.map