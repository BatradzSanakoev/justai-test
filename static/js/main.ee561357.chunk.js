(this["webpackJsonpjustai-test"]=this["webpackJsonpjustai-test"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),n=r(6),i=r.n(n),c=(r(12),r(2)),u=(r(13),r(0));function o(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{className:"header__head",children:"JustAI Test Task"})})}function l(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__text",children:"\xa92021 JustAI Test Task"})})}var d=r.p+"static/media/trash.4664d724.svg";function m(e){e.index;var t=e.picture,r=e.name,a=e.registered,s=e.email,n=e.handleFavourite,i=e.isFavouriteDOM,c=e.handleDeleteFavourite,o=[{picture:t,name:r,registered:a,email:s}];return Object(u.jsxs)("div",{className:"user-card",draggable:!0,onDragStart:function(e){return function(e,t){e.target.closest(".main__search-list")&&(n(t),document.querySelector(".main__favourites-list").style.background="steelblue",document.querySelector(".main__favourites-list").style.opacity=".6",e.target.style.border="2px solid steelblue",document.querySelector(".main__favourites-list_overlay").style.visibility="hidden",document.querySelector(".main__favourites-list_overlay").style.opacity="0",document.querySelector(".main__favourites-list_overlay").style.transition="all .2s linear")}(e,o)},onDragEnd:function(e){return function(e){e.target.closest(".main__search-list")&&(document.querySelector(".main__favourites-list").style.background="white",document.querySelector(".main__favourites-list").style.opacity="1",e.target.style.border="1px solid steelblue",document.querySelector(".main__favourites-list_overlay").style.visibility="visible",document.querySelector(".main__favourites-list_overlay").style.opacity="1",document.querySelector(".main__favourites-list_overlay").style.transition="all .2s linear")}(e)},onDragOver:function(e){return function(e){e.preventDefault()}(e)},children:[Object(u.jsx)("img",{className:"user-card__img",src:t.large,alt:"User img"}),Object(u.jsxs)("div",{className:"user-card__data",children:[Object(u.jsx)("p",{className:"user-card__text",children:r}),Object(u.jsxs)("p",{className:"user-card__text",children:["register data: ",new Date(a.date).toLocaleString("en",{month:"long",day:"numeric",year:"numeric"})]}),Object(u.jsx)("p",{className:"user-card__text",children:s})]}),i&&Object(u.jsx)("img",{src:d,alt:"delete",className:"user-card__delete-icon",onClick:function(e){return c(e,r)}})]})}function h(e){var t=e.userSearch,r=s.a.useState(""),a=Object(c.a)(r,2),n=a[0],i=a[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{type:"text",name:"input",value:n||"",placeholder:"Search field (enter name with lower case)",className:"main__search-input",onChange:function(e){var r=e.target.value;"input"===e.target.name&&i(r),t(r)}})})}function j(e){var t=e.sortUsers,r=e.isLoaded,a=e.userSearch,s=(e.searchResults,e.handleFavourite),n=function(e){e.target.closest(".main__search-list-user-type").querySelector(".main__search-list-type-users").classList.toggle("main__search-list-type-users_close")};return Object(u.jsxs)("div",{className:"main__search-list",children:[Object(u.jsx)("h3",{className:"main__search-list-head",children:"Search user"}),Object(u.jsx)(h,{userSearch:a}),Object(u.jsx)("div",{className:"main__search-list-users",children:r&&Object.entries(t).map((function(e,t){return Object(u.jsxs)("div",{className:"main__search-list-user-type ".concat(e[1].length<1&&"main__search-list-user-type_disabled"),children:[Object(u.jsxs)("div",{className:"main__search-list-user-type-head",onClick:n,children:[Object(u.jsx)("p",{className:"main__search-list-user-type-name",children:e[0]}),Object(u.jsx)("span",{className:"main__search-list-user-type-arrow",children:"\u21f5"})]}),Object(u.jsx)("ul",{className:"main__search-list-type-users",children:e[1].map((function(e,t){var r=Object.assign({},e);return Object(u.jsx)(m,{index:t,picture:r.picture,name:r.name,registered:r.registered,email:r.email,handleFavourite:s},t)}))})]},t)}))})]})}var _=r(7);function g(e){var t=e.favourite,r=s.a.useState([]),a=Object(c.a)(r,2),n=a[0],i=a[1],o=s.a.useState(null),l=Object(c.a)(o,2),d=l[0],h=l[1],j=function(e,t){i(n.filter((function(e){return e.name!==t})))};return Object(u.jsxs)("div",{className:"main__favourites",children:[Object(u.jsx)("h3",{className:"main__favourites-head",children:"Favourites"}),Object(u.jsx)("ul",{className:"main__favourites-list",draggable:!0,onDrop:function(e){return function(e){e.preventDefault(),t.map((function(e){n.some((function(t){return t.name===e.name}))||i([].concat(Object(_.a)(n),[e]))}))}(e)},onDragOver:function(e){return function(e){e.preventDefault()}(e)},children:Object(u.jsx)("div",{className:"main__favourites-list_overlay",children:n.map((function(e,t){return Object(u.jsx)("li",{className:"main__favourites-list-item",draggable:!0,onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDragLeave:function(e){},onDragStart:function(t){return function(e,t){h(t)}(0,e)},onDragEnd:function(e){return function(e){e.target.style.boxShadow="none"}(e)},onDrop:function(t){return function(e,t){e.preventDefault(),e.target.closest(".main__search-list")||(i(n.map((function(e){return e===t?d:e===d?t:e}))),e.target.style.boxShadow="none")}(t,e)},children:Object(u.jsx)(m,{index:t,picture:e.picture,name:e.name,registered:e.registered,email:e.email,isFavouriteDOM:true,handleDeleteFavourite:j},t)},t)}))})})]})}function f(e){var t=e.isLoadError,r=e.isLoading,a=!t&&!r&&"preloader__visible",s=!r&&"preloader__visible",n=!t&&"preloader__visible";return Object(u.jsxs)("section",{className:"preloader ".concat(a),children:[Object(u.jsx)("i",{className:"circle-preloader ".concat(s)}),Object(u.jsx)("div",{className:"preloader__container ".concat(n),children:Object(u.jsx)("p",{className:"preloader__text",children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"})})]})}function v(e){var t=e.sortUsers,r=e.isLoaded,a=e.userSearch,s=e.searchResults,n=e.handleFavourite,i=e.favourite,c=e.isLoadError,o=e.isLoading;return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsx)("h2",{className:"main__head",children:"Users List"}),Object(u.jsxs)("div",{className:"main__container",children:[r?Object(u.jsx)(j,{sortUsers:t,isLoaded:r,userSearch:a,searchResults:s,handleFavourite:n}):Object(u.jsx)(f,{isLoading:o,isLoadError:c}),Object(u.jsx)("div",{className:"main__hr"}),Object(u.jsx)(g,{favourite:i})]})]})}var b=function(){return fetch("".concat("https://randomuser.me/api/?results=5000"),{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.results}))},p=function(e){return Object.entries(e).map((function(e){e[1]=[]}))},O=function(e){var t={"1-10":[],"11-20":[],"21-30":[],"31-40":[],"41-50":[],"51-60":[],"61-70":[],"71-80":[],"81-90":[],"91-100":[]};return p(t),e.forEach((function(e){e.registered.age>=0&&e.registered.age<=10&&t["1-10"].push(e),e.registered.age>=11&&e.registered.age<=20&&t["11-20"].push(e),e.registered.age>=21&&e.registered.age<=30&&t["21-30"].push(e),e.registered.age>=31&&e.registered.age<=40&&t["31-40"].push(e),e.registered.age>=41&&e.registered.age<=50&&t["41-50"].push(e),e.registered.age>=51&&e.registered.age<=60&&t["51-60"].push(e),e.registered.age>=61&&e.registered.age<=70&&t["61-70"].push(e),e.registered.age>=71&&e.registered.age<=80&&t["71-80"].push(e),e.registered.age>=81&&e.registered.age<=90&&t["81-90"].push(e),e.registered.age>=91&&e.registered.age<=100&&t["91-100"].push(e)})),t};var x=function(){var e=s.a.useState([]),t=Object(c.a)(e,2),r=t[0],a=t[1],n=s.a.useState(!1),i=Object(c.a)(n,2),d=i[0],m=i[1],h=s.a.useState([]),j=Object(c.a)(h,2),_=j[0],g=(j[1],s.a.useState([])),f=Object(c.a)(g,2),p=f[0],x=f[1],y=s.a.useState(null),S=Object(c.a)(y,2),N=S[0],D=S[1],L=s.a.useState(!1),w=Object(c.a)(L,2),F=w[0],q=w[1],E=s.a.useState(!1),k=Object(c.a)(E,2),C=k[0],U=k[1];return s.a.useEffect((function(){m(!1),q(!0),b().then((function(e){e.sort((function(e,t){return e.registered.age-t.registered.age})),e.map((function(e){e.name=e.name.first+" "+e.name.last})),a(O(e)),x(O(e))})).catch((function(e){console.log(e),U(!0)})).finally((function(){m(!0),q(!1)}))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o,{}),Object(u.jsx)(v,{sortUsers:r,isLoaded:d,userSearch:function(e){var t=new Array,r=new Array;Object.values(p).map((function(e){Object.values(e).map((function(e){t.push(e)}))}));for(var s=0;s<t.length;s++)-1!==t[s].name.toLowerCase().indexOf(e.toLowerCase())&&r.push(t[s]);a(O(r))},searchResults:_,handleFavourite:function(e){D(e)},favourite:N,isLoadError:C,isLoading:F}),Object(u.jsx)(l,{})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ee561357.chunk.js.map