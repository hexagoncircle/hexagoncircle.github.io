!function(e){function r(r){for(var n,u,c=r[0],i=r[1],s=r[2],p=0,l=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(r);l.length;)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(n=!1)}n&&(a.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={31:0},a=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=function(e){return u.p+"js/"+({30:"firebase"}[e]||e)+"-"+{30:"798ef308ecf13a2f4723",34:"86e7a557ff6abf66cd67"}[e]+".chunk.js"}(e);var i=new Error;a=function(r){c.onerror=c.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,t[1](i)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="https://cpwebassets.codepen.io/assets/packs/",u.oe=function(e){throw console.error(e),e};var c=(self||this).webpackJsonp=(self||this).webpackJsonp||[],i=c.push.bind(c);c.push=r,c=c.slice();for(var s=0;s<c.length;s++)r(c[s]);var f=i;a.push([562,1]),t()}({293:function(e,r,t){"use strict";t.d(r,"b",(function(){return w})),t.d(r,"a",(function(){return g}));var n=t(3),o=t.n(n),a=t(23),u=t.n(a),c=t(31),i=t.n(c),s=function(e){return Math.floor(e/1e3)},f=function(){return s(Date.now())};function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d,b=null,h=function(){var e=i()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([t.e(34),t.e(30)]).then(t.bind(null,878)).then((function(e){return e.default})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function v(){return y.apply(this,arguments)}function y(){return(y=i()(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=2;break}return e.abrupt("return",d);case 2:return e.prev=2,e.next=5,h();case 5:return(r=e.sent).apps.length<1&&r.initializeApp(window.__firebase.config),window.firebase=r,e.next=10,r.auth().signInWithCustomToken(window.__firebase.token);case 10:return d=r.database(),b=d.ref(),e.abrupt("return",d);case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}var w=function(){var e=i()(u.a.mark((function e(r,t,n){var o,a,c,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v();case 4:return o=e.sent,a=o.ref("items/".concat(r)),e.next=8,a.once("value");case 8:c=e.sent,i=c.val(),u=l(l(l({},i),n),{},{id:r,ownerId:t,updatedAt:f()}),s=JSON.parse(JSON.stringify(u)),a.update(s);case 12:case"end":return e.stop()}var u}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),m=function(){var e=i()(u.a.mark((function e(r,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g("items/".concat(r),t);case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),g=function(){var e=i()(u.a.mark((function e(r,t){var n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return n=e.sent,(o=n.ref(r)).on("value",(function(e){var r=e.val();t(r)})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();window.CPFirebase={authFirebase:v,onChanges:g,getObjectReference:function(e){var r="".concat(window.__rtData.roomID,"/").concat(e);return b.child(r)},onItemChanges:m,setItemAttributes:w}},562:function(e,r,t){"use strict";t.r(r);t(293)}});