(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{340:function(r,e,s){"use strict";s.r(e),s.d(e,{default:function(){return x}});var a=s(5893),_=s(809),o=s.n(_),u=s(2447),d=s(9008),n=s(7294),t=s(3301),b=s.n(t),c=s(5323),q=s.n(c),i=s(8416),m=s.n(i),l=s(3928),v=function(r){var e=r.baseURL,s=r.fetch,a=(void 0===e?"":e).replace(/\/$/,""),_="/tasks",o="/token",u="/user",d="GET",n="POST",t="DELETE",b="PATCH";return{tasks:{_taskId:function(r){var e="".concat(_,"/").concat(r);return{patch:function(r){return s(a,e,b,r).send()},$patch:function(r){return s(a,e,b,r).send().then((function(r){return r.body}))},delete:function(r){return s(a,e,t,r).send()},$delete:function(r){return s(a,e,t,r).send().then((function(r){return r.body}))},$path:function(){return"".concat(a).concat(e)}}},get:function(r){return s(a,_,d,r).json()},$get:function(r){return s(a,_,d,r).json().then((function(r){return r.body}))},post:function(r){return s(a,_,n,r).json()},$post:function(r){return s(a,_,n,r).json().then((function(r){return r.body}))},$path:function(r){return"".concat(a).concat(_).concat(r&&r.query?"?".concat((0,l.dataToURLString)(r.query)):"")}},token:{post:function(r){return s(a,o,n,r).json()},$post:function(r){return s(a,o,n,r).json().then((function(r){return r.body}))},$path:function(){return"".concat(a).concat(o)}},user:{get:function(r){return s(a,u,d,r).json()},$get:function(r){return s(a,u,d,r).json().then((function(r){return r.body}))},post:function(r){return s(a,u,n,r,"FormData").json()},$post:function(r){return s(a,u,n,r,"FormData").json().then((function(r){return r.body}))},$path:function(){return"".concat(a).concat(u)}},get:function(r){return s(a,"",d,r).text()},$get:function(r){return s(a,"",d,r).text().then((function(r){return r.body}))},$path:function(){return"".concat(a)}}}(m()()),x=function(){var r=b()(v.tasks),e=r.data,s=r.error,_=r.revalidate,t=(0,n.useState)(""),c=t[0],i=t[1];(0,n.useCallback)((function(r){return i(r.target.value)}),[]),(0,n.useCallback)(function(){var r=(0,u.Z)(o().mark((function r(e){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),c){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,v.tasks.post({body:{label:c}});case 5:i(""),_();case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[c]),(0,n.useCallback)(function(){var r=(0,u.Z)(o().mark((function r(e){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.tasks._taskId(e.id).patch({body:{done:!e.done}});case 2:_();case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[]),(0,n.useCallback)(function(){var r=(0,u.Z)(o().mark((function r(e){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.tasks._taskId(e.id).delete();case 2:_();case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[]);return s?(0,a.jsx)("div",{children:"failed to load"}):e?(0,a.jsxs)("div",{className:q().container,children:[(0,a.jsxs)(d.default,{children:[(0,a.jsx)("title",{children:"frourio-todo-app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,a.jsx)("main",{className:q().main,children:(0,a.jsxs)("div",{className:q().square,children:[(0,a.jsx)("div",{className:q().squareIn,children:(0,a.jsx)("div",{className:q().parent})}),(0,a.jsxs)("div",{className:q().child,children:[(0,a.jsx)("div",{className:q().square_border1}),(0,a.jsx)("div",{className:q().square_border2}),(0,a.jsx)("div",{className:q().square_border3}),(0,a.jsx)("div",{className:q().square_border4}),(0,a.jsx)("div",{className:q().square_border5}),(0,a.jsx)("div",{className:q().square_border6}),(0,a.jsx)("div",{className:q().square_border7}),(0,a.jsx)("div",{className:q().square_border8}),(0,a.jsx)("div",{className:q().square_border9}),(0,a.jsx)("div",{className:q().square_border10}),(0,a.jsx)("div",{className:q().square_border11}),(0,a.jsx)("div",{className:q().square_border12}),(0,a.jsx)("div",{className:q().square_border13}),(0,a.jsx)("div",{className:q().square_border14}),(0,a.jsx)("div",{className:q().square_border15}),(0,a.jsx)("div",{className:q().square_border16}),(0,a.jsx)("div",{className:q().square_border17}),(0,a.jsx)("div",{className:q().square_border18}),(0,a.jsx)("div",{className:q().square_border19}),(0,a.jsx)("div",{className:q().square_border20}),(0,a.jsx)("div",{className:q().square_border21}),(0,a.jsx)("div",{className:q().square_border22}),(0,a.jsx)("div",{className:q().square_border23}),(0,a.jsx)("div",{className:q().square_border24}),(0,a.jsx)("div",{className:q().square_border25}),(0,a.jsx)("div",{className:q().square_border26}),(0,a.jsx)("div",{className:q().square_border27}),(0,a.jsx)("div",{className:q().square_border28}),(0,a.jsx)("div",{className:q().square_border29}),(0,a.jsx)("div",{className:q().square_border30}),(0,a.jsx)("div",{className:q().square_border31}),(0,a.jsx)("div",{className:q().square_border32}),(0,a.jsx)("div",{className:q().square_border33}),(0,a.jsx)("div",{className:q().square_border34}),(0,a.jsx)("div",{className:q().square_border35}),(0,a.jsx)("div",{className:q().square_border36}),(0,a.jsx)("div",{className:q().square_border37}),(0,a.jsx)("div",{className:q().square_border38}),(0,a.jsx)("div",{className:q().square_border39}),(0,a.jsx)("div",{className:q().square_border40}),(0,a.jsx)("div",{className:q().square_border41}),(0,a.jsx)("div",{className:q().square_border42}),(0,a.jsx)("div",{className:q().square_border43}),(0,a.jsx)("div",{className:q().square_border44}),(0,a.jsx)("div",{className:q().square_border45}),(0,a.jsx)("div",{className:q().square_border46}),(0,a.jsx)("div",{className:q().square_border47}),(0,a.jsx)("div",{className:q().square_border48}),(0,a.jsx)("div",{className:q().square_border49}),(0,a.jsx)("div",{className:q().square_border50}),(0,a.jsx)("div",{className:q().square_border51}),(0,a.jsx)("div",{className:q().square_border52}),(0,a.jsx)("div",{className:q().square_border53}),(0,a.jsx)("div",{className:q().square_border54}),(0,a.jsx)("div",{className:q().square_border55}),(0,a.jsx)("div",{className:q().square_border56}),(0,a.jsx)("div",{className:q().square_border57}),(0,a.jsx)("div",{className:q().square_border58}),(0,a.jsx)("div",{className:q().square_border59}),(0,a.jsx)("div",{className:q().square_border60}),(0,a.jsx)("div",{className:q().square_border61}),(0,a.jsx)("div",{className:q().square_border62}),(0,a.jsx)("div",{className:q().square_border63}),(0,a.jsx)("div",{className:q().square_border64})]})]})}),(0,a.jsx)("footer",{className:q().footer,children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,a.jsx)("img",{src:"/vercel.svg",alt:"Vercel Logo",className:q().logo})]})})]}):(0,a.jsx)("div",{children:"loading..."})}},5301:function(r,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(340)}])},5323:function(r){r.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",logo:"Home_logo__1YbrH",tasks:"Home_tasks__1C02r",square:"Home_square__2sS-E",squareIn:"Home_squareIn__3uGK1",parent:"Home_parent__1zA9X",child:"Home_child__1US5Y",square_border1:"Home_square_border1__3227e",square_border2:"Home_square_border2__3iiv_",square_border3:"Home_square_border3__9EY86",square_border4:"Home_square_border4__101dz",square_border5:"Home_square_border5__366X6",square_border6:"Home_square_border6__3wSQK",square_border7:"Home_square_border7__-1UEs",square_border8:"Home_square_border8__1iVfF",square_border9:"Home_square_border9__ZDDmG",square_border10:"Home_square_border10__2E3Bo",square_border11:"Home_square_border11__3VfN5",square_border12:"Home_square_border12__1ZtbA",square_border13:"Home_square_border13__3BnJi",square_border14:"Home_square_border14__2lEwo",square_border15:"Home_square_border15__378iU",square_border16:"Home_square_border16__2Kfno",square_border17:"Home_square_border17__1Q31m",square_border18:"Home_square_border18__3GHKs",square_border19:"Home_square_border19__3ThFq",square_border20:"Home_square_border20__cN8fg",square_border21:"Home_square_border21__1uxjv",square_border22:"Home_square_border22__2KsZv",square_border23:"Home_square_border23__2PA_6",square_border24:"Home_square_border24__1NMPT",square_border25:"Home_square_border25__zgwg0",square_border26:"Home_square_border26__1f53v",square_border27:"Home_square_border27__39nPr",square_border28:"Home_square_border28__U1hVD",square_border29:"Home_square_border29__2Zolw",square_border30:"Home_square_border30__3Q-vk",square_border31:"Home_square_border31__1a0en",square_border32:"Home_square_border32__x90KA",square_border33:"Home_square_border33__2Nf-s",square_border34:"Home_square_border34__pSUGi",square_border35:"Home_square_border35__1TTtK",square_border36:"Home_square_border36__20eUO",square_border37:"Home_square_border37__VNUCQ",square_border38:"Home_square_border38__2AWyl",square_border39:"Home_square_border39__rB_Uz",square_border40:"Home_square_border40__FarYm",square_border41:"Home_square_border41__2QeCH",square_border42:"Home_square_border42__2XI-W",square_border43:"Home_square_border43__1YK7l",square_border44:"Home_square_border44__yTNuh",square_border45:"Home_square_border45__1CNrw",square_border46:"Home_square_border46__1Fclk",square_border47:"Home_square_border47__33CSF",square_border48:"Home_square_border48__1AbJD",square_border49:"Home_square_border49__idWX1",square_border50:"Home_square_border50__pjUHh",square_border51:"Home_square_border51__h27lI",square_border52:"Home_square_border52__1L--1",square_border53:"Home_square_border53__1dKlc",square_border54:"Home_square_border54__bEKMz",square_border55:"Home_square_border55__3hHp3",square_border56:"Home_square_border56__1Ay_B",square_border57:"Home_square_border57__1YSiB",square_border58:"Home_square_border58__1j-TP",square_border59:"Home_square_border59__1YYtY",square_border60:"Home_square_border60__1EN8w",square_border61:"Home_square_border61__rcMaP",square_border62:"Home_square_border62__3Y-Pt",square_border63:"Home_square_border63__2bLBs",square_border64:"Home_square_border64__hFNz4"}}},function(r){r.O(0,[414,774,888,179],(function(){return e=5301,r(r.s=e);var e}));var e=r.O();_N_E=e}]);