(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{340:function(o,n,c){"use strict";c.r(n),c.d(n,{default:function(){return v}});var e=c(5893),s=c(809),t=c.n(s),i=c(2447),x=c(9008),a=c(7294),_=c(3301),b=c.n(_),u=c(5323),l=c.n(u),r=c(8416),m=c.n(r),f=c(3928),d=function(o){var n=o.baseURL,c=o.fetch,e=(void 0===n?"":n).replace(/\/$/,""),s="/tasks",t="/token",i="/user",x="GET",a="POST",_="DELETE",b="PATCH";return{tasks:{_taskId:function(o){var n="".concat(s,"/").concat(o);return{patch:function(o){return c(e,n,b,o).send()},$patch:function(o){return c(e,n,b,o).send().then((function(o){return o.body}))},delete:function(o){return c(e,n,_,o).send()},$delete:function(o){return c(e,n,_,o).send().then((function(o){return o.body}))},$path:function(){return"".concat(e).concat(n)}}},get:function(o){return c(e,s,x,o).json()},$get:function(o){return c(e,s,x,o).json().then((function(o){return o.body}))},post:function(o){return c(e,s,a,o).json()},$post:function(o){return c(e,s,a,o).json().then((function(o){return o.body}))},$path:function(o){return"".concat(e).concat(s).concat(o&&o.query?"?".concat((0,f.dataToURLString)(o.query)):"")}},token:{post:function(o){return c(e,t,a,o).json()},$post:function(o){return c(e,t,a,o).json().then((function(o){return o.body}))},$path:function(){return"".concat(e).concat(t)}},user:{get:function(o){return c(e,i,x,o).json()},$get:function(o){return c(e,i,x,o).json().then((function(o){return o.body}))},post:function(o){return c(e,i,a,o,"FormData").json()},$post:function(o){return c(e,i,a,o,"FormData").json().then((function(o){return o.body}))},$path:function(){return"".concat(e).concat(i)}},get:function(o){return c(e,"",x,o).text()},$get:function(o){return c(e,"",x,o).text().then((function(o){return o.body}))},$path:function(){return"".concat(e)}}}(m()()),v=function(){var o=b()(d.tasks),n=o.data,c=o.error,s=o.revalidate,_=(0,a.useState)(""),u=_[0],r=_[1],m=((0,a.useCallback)((function(o){return r(o.target.value)}),[]),(0,a.useCallback)(function(){var o=(0,i.Z)(t().mark((function o(n){return t().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n.preventDefault(),u){o.next=3;break}return o.abrupt("return");case 3:return o.next=5,d.tasks.post({body:{label:u}});case 5:r(""),s();case 7:case"end":return o.stop()}}),o)})));return function(n){return o.apply(this,arguments)}}(),[u]),(0,a.useCallback)(function(){var o=(0,i.Z)(t().mark((function o(n){return t().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,d.tasks._taskId(n.id).patch({body:{done:!n.done}});case 2:s();case 3:case"end":return o.stop()}}),o)})));return function(n){return o.apply(this,arguments)}}(),[]),(0,a.useCallback)(function(){var o=(0,i.Z)(t().mark((function o(n){return t().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,d.tasks._taskId(n.id).delete();case 2:s();case 3:case"end":return o.stop()}}),o)})));return function(n){return o.apply(this,arguments)}}(),[]),function(o,n){alert("\u4e0a\u304b\u3089".concat(o,"\u884c\u76ee\u3001\u5de6\u304b\u3089").concat(n,"\u884c\u76ee\u306e\u767d\u3044\u77f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u307e\u3057\u305f"))}),f=function(o,n){alert("\u4e0a\u304b\u3089".concat(o,"\u884c\u76ee\u3001\u5de6\u304b\u3089").concat(n,"\u884c\u76ee\u306e\u9ed2\u3044\u77f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u307e\u3057\u305f"))},v=function(o,n){alert("\u4e0a\u304b\u3089".concat(o,"\u884c\u76ee\u3001\u5de6\u304b\u3089").concat(n,"\u884c\u76ee\u306b\u77f3\u306f\u3042\u308a\u307e\u305b\u3093"))};return c?(0,e.jsx)("div",{children:"failed to load"}):n?(0,e.jsxs)("div",{className:l().container,children:[(0,e.jsxs)(x.default,{children:[(0,e.jsx)("title",{children:"frourio-todo-app"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,e.jsx)("main",{className:l().main,children:(0,e.jsx)("div",{className:"wrapper",onClick:function(){alert("\u30af\u30ea\u30c3\u30af\u3055\u308c\u307e\u3057\u305f")},children:(0,e.jsx)("div",{className:l().square,children:(0,e.jsxs)("div",{className:l().squareIn,children:[(0,e.jsx)("div",{className:l().box1,onClick:function(){v(1,1)}}),(0,e.jsx)("div",{className:l().box2,onClick:function(){v(1,2)}}),(0,e.jsx)("div",{className:l().box3,onClick:function(){v(1,3)}}),(0,e.jsx)("div",{className:l().box4,onClick:function(){v(1,4)}}),(0,e.jsx)("div",{className:l().box5,onClick:function(){v(1,5)}}),(0,e.jsx)("div",{className:l().box6,onClick:function(){v(1,6)}}),(0,e.jsx)("div",{className:l().box7,onClick:function(){v(1,7)}}),(0,e.jsx)("div",{className:l().box8,onClick:function(){v(1,8)}}),(0,e.jsx)("div",{className:l().box9,onClick:function(){v(2,1)}}),(0,e.jsx)("div",{className:l().box10,onClick:function(){v(2,2)}}),(0,e.jsx)("div",{className:l().box11,onClick:function(){v(2,3)}}),(0,e.jsx)("div",{className:l().box12,onClick:function(){v(2,4)}}),(0,e.jsx)("div",{className:l().box13,onClick:function(){v(2,5)}}),(0,e.jsx)("div",{className:l().box14,onClick:function(){v(2,6)}}),(0,e.jsx)("div",{className:l().box15,onClick:function(){v(2,7)}}),(0,e.jsx)("div",{className:l().box16,onClick:function(){v(2,8)}}),(0,e.jsx)("div",{className:l().box17,onClick:function(){v(3,1)}}),(0,e.jsx)("div",{className:l().box18,onClick:function(){v(3,2)}}),(0,e.jsx)("div",{className:l().box19,onClick:function(){v(3,3)}}),(0,e.jsx)("div",{className:l().box20,onClick:function(){v(3,4)}}),(0,e.jsx)("div",{className:l().box21,onClick:function(){v(3,5)}}),(0,e.jsx)("div",{className:l().box22,onClick:function(){v(3,6)}}),(0,e.jsx)("div",{className:l().box23,onClick:function(){v(3,7)}}),(0,e.jsx)("div",{className:l().box24,onClick:function(){v(3,8)}}),(0,e.jsx)("div",{className:l().box25,onClick:function(){v(4,1)}}),(0,e.jsx)("div",{className:l().box26,onClick:function(){v(4,2)}}),(0,e.jsx)("div",{className:l().box27,onClick:function(){v(4,3)}}),(0,e.jsx)("div",{className:l().box28,children:(0,e.jsx)("div",{className:l().stone1,onClick:function(){f(4,4)}})}),(0,e.jsx)("div",{className:l().box29,children:(0,e.jsx)("div",{className:l().stone2,onClick:function(){m(4,5)}})}),(0,e.jsx)("div",{className:l().box30,onClick:function(){v(4,6)}}),(0,e.jsx)("div",{className:l().box31,onClick:function(){v(4,7)}}),(0,e.jsx)("div",{className:l().box32,onClick:function(){v(4,8)}}),(0,e.jsx)("div",{className:l().box33,onClick:function(){v(5,1)}}),(0,e.jsx)("div",{className:l().box34,onClick:function(){v(5,2)}}),(0,e.jsx)("div",{className:l().box35,onClick:function(){v(5,3)}}),(0,e.jsx)("div",{className:l().box36,children:(0,e.jsx)("div",{className:l().stone4,onClick:function(){m(5,4)}})}),(0,e.jsx)("div",{className:l().box37,children:(0,e.jsx)("div",{className:l().stone3,onClick:function(){f(5,5)}})}),(0,e.jsx)("div",{className:l().box38,onClick:function(){v(5,6)}}),(0,e.jsx)("div",{className:l().box39,onClick:function(){v(5,7)}}),(0,e.jsx)("div",{className:l().box40,onClick:function(){v(5,8)}}),(0,e.jsx)("div",{className:l().box41,onClick:function(){v(6,1)}}),(0,e.jsx)("div",{className:l().box42,onClick:function(){v(6,2)}}),(0,e.jsx)("div",{className:l().box43,onClick:function(){v(6,3)}}),(0,e.jsx)("div",{className:l().box44,onClick:function(){v(6,4)}}),(0,e.jsx)("div",{className:l().box45,onClick:function(){v(6,5)}}),(0,e.jsx)("div",{className:l().box46,onClick:function(){v(6,6)}}),(0,e.jsx)("div",{className:l().box47,onClick:function(){v(6,7)}}),(0,e.jsx)("div",{className:l().box48,onClick:function(){v(6,8)}}),(0,e.jsx)("div",{className:l().box49,onClick:function(){v(7,1)}}),(0,e.jsx)("div",{className:l().box50,onClick:function(){v(7,2)}}),(0,e.jsx)("div",{className:l().box51,onClick:function(){v(7,3)}}),(0,e.jsx)("div",{className:l().box52,onClick:function(){v(7,4)}}),(0,e.jsx)("div",{className:l().box53,onClick:function(){v(7,5)}}),(0,e.jsx)("div",{className:l().box54,onClick:function(){v(7,6)}}),(0,e.jsx)("div",{className:l().box55,onClick:function(){v(7,7)}}),(0,e.jsx)("div",{className:l().box56,onClick:function(){v(7,8)}}),(0,e.jsx)("div",{className:l().box57,onClick:function(){v(8,1)}}),(0,e.jsx)("div",{className:l().box58,onClick:function(){v(8,2)}}),(0,e.jsx)("div",{className:l().box59,onClick:function(){v(8,3)}}),(0,e.jsx)("div",{className:l().box60,onClick:function(){v(8,4)}}),(0,e.jsx)("div",{className:l().box61,onClick:function(){v(8,5)}}),(0,e.jsx)("div",{className:l().box62,onClick:function(){v(8,6)}}),(0,e.jsx)("div",{className:l().box63,onClick:function(){v(8,7)}}),(0,e.jsx)("div",{className:l().box64,onClick:function(){v(8,8)}})]})})})})]}):(0,e.jsx)("div",{children:"loading..."})}},5301:function(o,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(340)}])},5323:function(o){o.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",logo:"Home_logo__1YbrH",tasks:"Home_tasks__1C02r",wrapper:"Home_wrapper__3EDsh",square:"Home_square__2sS-E",squareIn:"Home_squareIn__3uGK1",box1:"Home_box1__2m7W2",box2:"Home_box2__3koXL",box3:"Home_box3__1U65S",box4:"Home_box4__1MTG_",box5:"Home_box5__o5bPJ",box6:"Home_box6__1vux1",box7:"Home_box7__3tf1e",box8:"Home_box8__2i7bo",box9:"Home_box9__d819_",box10:"Home_box10__2uL65",box11:"Home_box11__OybUp",box12:"Home_box12__3YokD",box13:"Home_box13__3nkDN",box14:"Home_box14__2QvWk",box15:"Home_box15__25IAQ",box16:"Home_box16__1qFAN",box17:"Home_box17__39ecB",box18:"Home_box18__24avO",box19:"Home_box19__qStYj",box20:"Home_box20__2xqdh",box21:"Home_box21__1hPXz",box22:"Home_box22__2Tstz",box23:"Home_box23__3LTuo",box24:"Home_box24__2NXo8",box25:"Home_box25__2aPcA",box26:"Home_box26__1yMTc",box27:"Home_box27__74Ev1",box28:"Home_box28__3A0lH",box29:"Home_box29__2AK9F",box30:"Home_box30__1eh8I",box31:"Home_box31__uwifm",box32:"Home_box32__3Lt9n",box33:"Home_box33__dTFLM",box34:"Home_box34__2Sw3Y",box35:"Home_box35__1y8Qw",box36:"Home_box36__1I8uU",box37:"Home_box37__1KdXN",box38:"Home_box38__cS0tZ",box39:"Home_box39__u2HPs",box40:"Home_box40__1QyVR",box41:"Home_box41__ZLunX",box42:"Home_box42__IW2bE",box43:"Home_box43__1jlsA",box44:"Home_box44__1NPRd",box45:"Home_box45__29-al",box46:"Home_box46__1WaV4",box47:"Home_box47__2KrDv",box48:"Home_box48__3R3Hi",box49:"Home_box49__2t7Fs",box50:"Home_box50__2hiIm",box51:"Home_box51__3C5Wl",box52:"Home_box52__1WU1d",box53:"Home_box53__128xg",box54:"Home_box54__5iM2Y",box55:"Home_box55__3vflr",box56:"Home_box56__F-b4P",box57:"Home_box57__xuc8O",box58:"Home_box58__9hT1p",box59:"Home_box59__tnBQC",box60:"Home_box60__2UCDr",box61:"Home_box61__2h7X3",box62:"Home_box62__3pWt4",box63:"Home_box63__3YEZk",box64:"Home_box64__KUGqi",stone1:"Home_stone1__2U56m",stone2:"Home_stone2__3fXrx",stone3:"Home_stone3__2KJc0",stone4:"Home_stone4__12oI2"}}},function(o){o.O(0,[414,774,888,179],(function(){return n=5301,o(o.s=n);var n}));var n=o.O();_N_E=n}]);