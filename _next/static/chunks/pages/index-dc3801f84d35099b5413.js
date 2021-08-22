(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{340:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return w}});var o=e(5893),r=e(6265),s=e(809),c=e.n(s),u=e(2447),a=e(9008),i=e(7294),y=e(3301),x=e.n(y),f=e(5323),l=e.n(f),p=e(8416),d=e.n(p),_=e(3928),h=function(n){var t=n.baseURL,e=n.fetch,o=(void 0===t?"":t).replace(/\/$/,""),r="/tasks",s="/token",c="/user",u="GET",a="POST",i="DELETE",y="PATCH";return{tasks:{_taskId:function(n){var t="".concat(r,"/").concat(n);return{patch:function(n){return e(o,t,y,n).send()},$patch:function(n){return e(o,t,y,n).send().then((function(n){return n.body}))},delete:function(n){return e(o,t,i,n).send()},$delete:function(n){return e(o,t,i,n).send().then((function(n){return n.body}))},$path:function(){return"".concat(o).concat(t)}}},get:function(n){return e(o,r,u,n).json()},$get:function(n){return e(o,r,u,n).json().then((function(n){return n.body}))},post:function(n){return e(o,r,a,n).json()},$post:function(n){return e(o,r,a,n).json().then((function(n){return n.body}))},$path:function(n){return"".concat(o).concat(r).concat(n&&n.query?"?".concat((0,_.dataToURLString)(n.query)):"")}},token:{post:function(n){return e(o,s,a,n).json()},$post:function(n){return e(o,s,a,n).json().then((function(n){return n.body}))},$path:function(){return"".concat(o).concat(s)}},user:{get:function(n){return e(o,c,u,n).json()},$get:function(n){return e(o,c,u,n).json().then((function(n){return n.body}))},post:function(n){return e(o,c,a,n,"FormData").json()},$post:function(n){return e(o,c,a,n,"FormData").json().then((function(n){return n.body}))},$path:function(){return"".concat(o).concat(c)}},get:function(n){return e(o,"",u,n).text()},$get:function(n){return e(o,"",u,n).text().then((function(n){return n.body}))},$path:function(){return"".concat(o)}}}(d()());function b(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function j(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?b(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var m=0,v=1,k=2,w=function(){var n=x()(h.tasks),t=n.data,e=n.error,r=n.revalidate,s=(0,i.useState)(""),y=s[0],f=s[1],p=((0,i.useCallback)((function(n){return f(n.target.value)}),[]),(0,i.useCallback)(function(){var n=(0,u.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),y){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,h.tasks.post({body:{label:y}});case 5:f(""),r();case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[y]),(0,i.useCallback)(function(){var n=(0,u.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.tasks._taskId(t.id).patch({body:{done:!t.done}});case 2:r();case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[]),function(n,t){return function(n,t){return n.x===t.x&&n.y===t.y}(n,t)?function(n,t){return j(j({},n),{},{stone:t.stone===v?k:v})}(n,t):n}),d=(0,i.useState)([{x:0,y:0,stone:m},{x:1,y:0,stone:m},{x:2,y:0,stone:m},{x:3,y:0,stone:m},{x:4,y:0,stone:m},{x:5,y:0,stone:m},{x:6,y:0,stone:m},{x:7,y:0,stone:m},{x:0,y:1,stone:m},{x:1,y:1,stone:m},{x:2,y:1,stone:m},{x:3,y:1,stone:m},{x:4,y:1,stone:m},{x:5,y:1,stone:m},{x:6,y:1,stone:m},{x:7,y:1,stone:m},{x:0,y:2,stone:m},{x:1,y:2,stone:m},{x:2,y:2,stone:m},{x:3,y:2,stone:m},{x:4,y:2,stone:m},{x:5,y:2,stone:m},{x:6,y:2,stone:m},{x:7,y:2,stone:m},{x:0,y:3,stone:m},{x:1,y:3,stone:m},{x:2,y:3,stone:m},{x:3,y:3,stone:v},{x:4,y:3,stone:k},{x:5,y:3,stone:m},{x:6,y:3,stone:m},{x:7,y:3,stone:m},{x:0,y:4,stone:m},{x:1,y:4,stone:m},{x:2,y:4,stone:m},{x:3,y:4,stone:k},{x:4,y:4,stone:v},{x:5,y:4,stone:m},{x:6,y:4,stone:m},{x:7,y:4,stone:m},{x:0,y:5,stone:m},{x:1,y:5,stone:m},{x:2,y:5,stone:m},{x:3,y:5,stone:m},{x:4,y:5,stone:m},{x:5,y:5,stone:m},{x:6,y:5,stone:m},{x:7,y:5,stone:m},{x:0,y:6,stone:m},{x:1,y:6,stone:m},{x:2,y:6,stone:m},{x:3,y:6,stone:m},{x:4,y:6,stone:m},{x:5,y:6,stone:m},{x:6,y:6,stone:m},{x:7,y:6,stone:m},{x:0,y:7,stone:m},{x:1,y:7,stone:m},{x:2,y:7,stone:m},{x:3,y:7,stone:m},{x:4,y:7,stone:m},{x:5,y:7,stone:m},{x:6,y:7,stone:m},{x:7,y:7,stone:m}]),_=d[0],b=d[1];return e?(0,o.jsx)("div",{children:"failed to load"}):t?(0,o.jsxs)("div",{className:l().container,children:[(0,o.jsxs)(a.default,{children:[(0,o.jsx)("title",{children:"frourio-todo-app"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,o.jsx)("main",{className:l().main,children:(0,o.jsx)("div",{className:"wrapper",children:(0,o.jsx)("div",{className:l().square,children:(0,o.jsx)("div",{className:l().squareIn,children:_.map((function(n,t){return(0,o.jsx)("div",{className:l().cell,onClick:function(){!function(n){console.log("\u5de6\u304b\u3089".concat(n.x,"\u5217\u76ee\u3001\u4e0a\u304b\u3089").concat(n.y,"\u884c\u76ee\u306b").concat(0!==n.stone?1===n.stone?"\u9ed2\u3044\u77f3\u304c\u3042\u308a\u307e\u3059":"\u767d\u3044\u77f3\u304c\u3042\u308a\u307e\u3059":"\u77f3\u306f\u3042\u308a\u307e\u305b\u3093"));var t=_.map((function(t){return p(t,n)}));b(t)}(n)},children:0!==n.stone&&(0,o.jsx)("div",{className:1===n.stone?l().blackStone:l().whiteStone})},t)}))})})})})]}):(0,o.jsx)("div",{children:"loading..."})}},5301:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(340)}])},5323:function(n){n.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",logo:"Home_logo__1YbrH",tasks:"Home_tasks__1C02r",wrapper:"Home_wrapper__3EDsh",cell:"Home_cell__3Oy4_",square:"Home_square__2sS-E",squareIn:"Home_squareIn__3uGK1",blackStone:"Home_blackStone__3r_M5",whiteStone:"Home_whiteStone__UeI8G"}}},function(n){n.O(0,[414,774,888,179],(function(){return t=5301,n(n.s=t);var t}));var t=n.O();_N_E=t}]);