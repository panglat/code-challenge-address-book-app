(this["webpackJsonpaddress-book"]=this["webpackJsonpaddress-book"]||[]).push([[0],{23:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return i}));var a=n(6),r=function(e){return{type:a.f,payload:{params:e}}},c=function(e){return{type:a.g,payload:{response:e}}},u=function(e){return{type:a.e,payload:{error:e}}},s=function(e){return{type:a.c,payload:{records:e}}},o=function(){return{type:a.b,payload:{}}},l=function(){return{type:a.a,payload:{}}},i=function(e){return{type:a.d,payload:{userSearch:e}}}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="SET_NATIONALITY_SEARCH"},49:function(e,t,n){e.exports=n(82)},54:function(e,t,n){},59:function(e,t,n){},6:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return l}));var a="USERS_FETCH_REQUESTED",r="USERS_FETCH_SUCCEEDED",c="USERS_FETCH_FAILED",u="SET_USERS_RECORD_TO_DISPLAY",s="RESET_USERS_FETCH_FAILED",o="CLEAR_USERS_LIST",l="SET_USERS_SEARCH"},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),u=n.n(c),s=(n(54),n(30)),o=n(17),l=n(5),i=(n(59),function(e){var t=e.children;return r.a.createElement("header",{className:"header"},t)});i.defaultProps={children:null};var d=i,f=(n(60),function(e){var t=e.children;return r.a.createElement("main",{className:"main"},t)});f.defaultProps={children:null};var p=f,b=n(29),m=n.n(b),v=(n(61),function(e){var t=e.className;return r.a.createElement("ul",{className:m()("nav-bar",t)},r.a.createElement("li",{className:"nav-bar__item"},r.a.createElement(o.c,{className:"nav-bar__item-link",exact:!0,activeClassName:"nav-bar__item-link--active",to:"/"},"Home")),r.a.createElement("li",{className:"nav-bar__item"},r.a.createElement(o.c,{className:"nav-bar__item-link",activeClassName:"nav-bar__item-link--active",to:"/settings"},"Settings")))});v.defaultProps={className:""};var E=v,h=(n(63),Object(a.lazy)((function(){return n.e(3).then(n.bind(null,99))}))),O=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,100))})),j=function(e){var t=e.store;return r.a.createElement(s.a,{store:t},r.a.createElement(o.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(d,null,r.a.createElement(E,null)),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/settings"},r.a.createElement(p,null,r.a.createElement(O,null))),r.a.createElement(l.a,{path:"/"},r.a.createElement(p,null,r.a.createElement(h,null)))))))};j.defaultProps={store:null};var S=j,y=n(14),_=n(45),g=n(48),w=n(25),R=n(7),T=n(6),k={recordsToDisplay:0,loading:!1,error:null,userList:[],userSearch:""};var x=n(35),L={nationalitySearch:[]};var N=Object(y.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.f:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case T.g:return Object(R.a)(Object(R.a)({},e),{},{loading:!1,error:null,userList:[].concat(Object(w.a)(e.userList),Object(w.a)(t.payload.response))});case T.e:return Object(R.a)(Object(R.a)({},e),{},{loading:!1,error:t.payload.error});case T.c:return Object(R.a)(Object(R.a)({},e),{},{recordsToDisplay:t.payload.records});case T.b:return Object(R.a)(Object(R.a)({},e),{},{error:null});case T.a:return Object(R.a)(Object(R.a)({},e),{},{userList:[]});case T.d:return Object(R.a)(Object(R.a)({},e),{},{userSearch:t.payload.userSearch});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.a:return Object(R.a)(Object(R.a)({},e),{},{nationalitySearch:t.payload.nationalitySearch});default:return e}}}),C=n(12),D=n.n(C),U=n(15),A=n(23),H=n(46),I=n(47),F=n.n(I).a.create({baseURL:"https://randomuser.me/api/"}),P=function(){var e=Object(H.a)(D.a.mark((function e(){var t,n,a=arguments;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{listLength:10,nationalities:null},e.prev=1,e.next=4,F.get("",{params:{results:t.listLength,nat:t.nationalities}});case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),console.log(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),z=D.a.mark(B),J=D.a.mark(M),Y=D.a.mark(Q);function B(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(U.b)((function(){return P(e.payload.params)}));case 3:return t=n.sent,n.next=6,Object(U.c)(Object(A.d)(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(U.c)(Object(A.c)(n.t0.message));case 12:case"end":return n.stop()}}),z,null,[[0,8]])}function M(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.e)(T.f,B);case 2:case"end":return e.stop()}}),J)}function Q(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([M()]);case 2:case"end":return e.stop()}}),Y)}var W=D.a.mark(q);function q(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([Q].map(U.d));case 2:case"end":return e.stop()}}),W)}var G=Object(g.a)();var K=function(){var e=Object(_.composeWithDevTools)({}),t=Object(y.createStore)(N,e(Object(y.applyMiddleware)(G)));return G.run(q),t}();u.a.render(r.a.createElement(S,{store:K}),document.getElementById("root"))}},[[49,1,2]],[3,4]]);
//# sourceMappingURL=main.f954ae5b.chunk.js.map