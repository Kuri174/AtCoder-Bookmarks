(this["webpackJsonpatcoder-bookmarks"]=this["webpackJsonpatcoder-bookmarks"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(22),s=c(23),i=c(0),r=c.n(i),o=c(11),l=c.n(o),d=c(60),j=c(56),u=c(58),m=c(57),b=c(59);var x=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(d.a,{position:"static",children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(m.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),Object(a.jsx)(u.a,{variant:"h6",className:e.title,children:e.title}),Object(a.jsx)(b.a,{color:"inherit",children:e.menuButton})]})})})};var O=function(e){return Object(a.jsxs)("div",{className:"tweet",children:[Object(a.jsx)("div",{className:"icon-container",children:e.icon}),Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsxs)("div",{className:"status-display",children:[Object(a.jsx)("span",{className:"display-name",children:e.displayName}),Object(a.jsxs)("span",{className:"account-name",children:["@",e.accountName]})]}),Object(a.jsx)("div",{className:"content",children:e.content})]})]})};var h=function(e){var t=e.tweets.map((function(e){return Object(a.jsx)(O,{icon:e.icon,displayName:e.displayName,accountName:e.accountName,content:e.content},e.id)}));return Object(a.jsx)("div",{className:"timeline",children:t})};var v=function(e){var t=r.a.useRef(null),c=r.a.useCallback((function(){t.current&&e.addTweet({id:(new Date).getTime(),icon:"\u2620\ufe0f",displayName:"\u30df\u30b9\u30bf\u30fc\u6b7b",accountName:"mrdeath",content:t.current.value})}),[e]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{className:"tweet-textarea",ref:t})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:c,className:"send-tweet",children:"Tweet"})})]})};c(37);function N(){var e=localStorage.getItem("atcoder");console.log("local",e);var t=r.a.useState([{id:0,icon:"\ud83c\udf3d",displayName:null,accountName:"morokoshi",content:null},{id:1,icon:"\ud83e\udd90",displayName:"\u30a8\u30d3\u30c7\u30f3\u30b9",accountName:"evidence",content:"\u304b\u306b\u307f\u305d\u305f\u3079\u305f\u3044"}]),c=Object(s.a)(t,2),i=c[0],o=c[1],l=r.a.useCallback((function(e){return o((function(t){return[e].concat(Object(n.a)(t))}))}),[o]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{menuButton:"\u66f4\u65b0",title:"AtCoder-Bookmarks"}),Object(a.jsx)(v,{addTweet:l}),Object(a.jsx)(h,{tweets:i})]})}var p=document.querySelector("#app");l.a.render(Object(a.jsx)(N,{}),p)}},[[38,1,2]]]);
//# sourceMappingURL=main.47363be5.chunk.js.map