(function(t){function e(e){for(var r,u,i=e[0],l=e[1],s=e[2],c=0,p=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function u(t){return i.p+"js/"+({album:"album",login:"login",reg:"reg"}[t]||t)+"."+{album:"98c06ee1",login:"34e78868",reg:"2e5f0ec0"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var s=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),u=n("a7fe"),i=n.n(u),l=n("71a5"),s=n.n(l),c=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(c["a"]);var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("相簿")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[0===t.user.length?n("b-nav-item",{attrs:{to:"/login"}},[t._v("登入")]):n("b-nav-item",{attrs:{to:"/album"}},[t._v("我的相簿")]),0===t.user.length?n("b-nav-item",{attrs:{to:"/reg"}},[t._v("註冊")]):n("b-nav-item",{on:{click:t.logout}},[t._v("登出")])],1)],1)],1)],1),n("b-container",[n("router-view")],1)],1)},p=[],h={name:"app",computed:{user:function(){return this.$store.getters.user}},methods:{logout:function(){var t=this;this.axios.delete("https://tsaichiaalbum.herokuapp.com/logout").then((function(e){var n=e.data;n.success?(alert("登出成功"),t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")):alert(n.message)})).catch((function(t){alert(t.response.data.message)}))},heartbeat:function(){var t=this;this.axios.get("https://tsaichiaalbum.herokuapp.com/heartbeat").then((function(e){var n=e.data;t.user.length>0&&(n||(alert("登入時效已過"),t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")))})).catch((function(){alert("發生錯誤"),t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/")}))}},mounted:function(){var t=this;this.heartbeat(),setInterval((function(){t.heartbeat()}),5e3)}},m=h,d=n("2877"),b=Object(d["a"])(m,f,p,!1,null,null,null),g=b.exports,v=(n("b0c0"),n("d3b7"),n("8c4f")),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("br"),n("h1",{staticClass:"text-center"},[t._v("歡迎使用線上相簿")]),n("h2",{staticClass:"text-center"},[t._v("Please Login")])])}],w={},j=Object(d["a"])(w,y,_,!1,null,null,null),O=j.exports,$=n("2f62"),x=n("0e44");r["default"].use($["a"]);var P=new $["a"].Store({state:{user:""},mutations:{login:function(t,e){t.user=e},logout:function(t){t.user=""}},getters:{user:function(t){return t.user}},plugins:[Object(x["a"])()]});r["default"].use(v["a"]);var k=[{path:"/",name:"Home",component:O,meta:{login:!1,title:"線上相簿"}},{path:"/reg",name:"Reg",component:function(){return n.e("reg").then(n.bind(null,"b8b8"))},meta:{login:!1,title:"線上相簿 | 註冊"}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{login:!1,title:"線上相簿 | 登入"}},{path:"/album",name:"Album",component:function(){return n.e("album").then(n.bind(null,"ee18"))},meta:{login:!0}}],E=new v["a"]({routes:k});E.beforeEach((function(t,e,n){t.meta.login&&!P.state.user?n("/login"):n()})),E.afterEach((function(t,e){document.title="Album"!==t.name?t.meta.title:P.state.user+"的相簿"}));var C=E;o.a.defaults.withCredentials=!0,r["default"].use(i.a,o.a),r["default"].use(s.a),r["default"].config.productionTip=!1,new r["default"]({router:C,store:P,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.5c95fa64.js.map