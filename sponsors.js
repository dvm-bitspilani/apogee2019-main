!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=50)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t,o=n[1]||"",r=n[3];if(!r)return o;if(e&&"function"==typeof btoa){var a=(t=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[o].concat(i).concat([a]).join("\n")}return[o].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(r=0;r<n.length;r++){var i=n[r];null!=i[0]&&o[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),e.push(i))}},e}},function(n,e,t){var o,r,a,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),l=(a={},function(n,e){if("function"==typeof n)return n();if(void 0===a[n]){var t=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}a[n]=t}return a[n]}),p=null,c=0,f=[],d=t(6);function u(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function m(n,e){for(var t=[],o={},r=0;r<n.length;r++){var a=n[r],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):t.push(o[i]={id:i,parts:[s]})}return t}function g(n,e){var t=l(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),f.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(n.insertAt.before,t);t.insertBefore(e,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=f.indexOf(n);0<=e&&f.splice(e,1)}function x(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=t.nc;o&&(n.attrs.nonce=o)}return b(e,n.attrs),g(n,e),e}function b(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function v(n,e){var t,o,r,a,i,s;if(e.transform&&n.css){if(!(a="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=a}if(e.singleton){var l=c++;t=p||(p=x(e)),o=k.bind(null,t,l,!1),r=k.bind(null,t,l,!0)}else r=n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=e,s=document.createElement("link"),void 0===i.attrs.type&&(i.attrs.type="text/css"),i.attrs.rel="stylesheet",b(s,i.attrs),g(i,s),o=function(n,e,t){var o=t.css,r=t.sourceMap,a=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||a)&&(o=d(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,t=s,e),function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=x(e),o=function(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),function(){h(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=m(n,e);return u(t,e),function(n){for(var o=[],r=0;r<t.length;r++){var a=t[r];(s=i[a.id]).refs--,o.push(s)}for(n&&u(m(n,e),e),r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var y,w=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function k(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}},function(n,e,t){n.exports=t.p+"f05ff531bfa9bbf662d36a5c32f10951.jpg"},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){var o=t(5);"string"==typeof o&&(o=[[n.i,o,""]]);t(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  border: 0;\n  box-sizing: border-box;\n  font-family: 'bahnschrift', sans-serif; }\n\nhtml, body {\n  color: #fff;\n  background: #00061c;\n  height: 100%;\n  width: 100%;\n  background: #01061C; }\n\n#container {\n  transition: all 0.5s ease; }\n\na {\n  color: inherit;\n  text-decoration: inherit; }\n\n.section {\n  min-height: 100vh;\n  position: relative; }\n\n#navbar {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 100px;\n  width: 100vw;\n  padding: 0px 10vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 998;\n  transition: -webkit-transform 0.1s linear;\n  transition: transform 0.1s linear;\n  transition: transform 0.1s linear, -webkit-transform 0.1s linear;\n  background: #01061C; }\n  #navbar #links2 {\n    display: none;\n    transition: all 0.5s ease;\n    opacity: 0; }\n    #navbar #links2 #close-events {\n      cursor: pointer; }\n\n#logo {\n  max-height: 50px; }\n\n#hamburger {\n  max-height: 40px;\n  cursor: pointer;\n  transition: all 0.07s ease-in-out; }\n\n#links {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  transition: all 0.5s ease; }\n\n#nav-links {\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 35vw; }\n\n#nav-links span {\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out; }\n\n#nav-links span:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n\n#register-btn {\n  color: #fff;\n  padding: 5px 20px;\n  border: 1.5px solid #B525E9;\n  border-radius: 20px;\n  cursor: pointer; }\n\n#side-menu {\n  position: fixed;\n  right: -400px;\n  top: 0px;\n  width: 400px;\n  background: blue;\n  height: 100vh;\n  padding: 0 25px;\n  overflow-y: auto;\n  transition: right 0.5s cubic-bezier(0, 0.93, 0.39, 1);\n  background-image: linear-gradient(60deg, #250135, #162539);\n  z-index: 9999; }\n\n#side-menu-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100px;\n  align-items: center; }\n\n#close-hamburger {\n  max-height: 35px;\n  cursor: pointer;\n  transition: all 0.07s ease-in-out; }\n\n#side-menu-heading {\n  font-size: 20px;\n  color: #fff; }\n\n#side-menu-list {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px; }\n\n#side-menu-list span {\n  color: #fff;\n  font-size: 20px;\n  text-transform: uppercase;\n  margin-bottom: 40px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer; }\n\n#side-menu-list span:hover {\n  margin-left: 10px; }\n\n#hamburger:hover, #close-hamburger:hover, #close-events:hover {\n  -webkit-animation: rotateAnim 0.5s ease-out;\n          animation: rotateAnim 0.5s ease-out; }\n\n@-webkit-keyframes rotateAnim {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@keyframes rotateAnim {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n#events {\n  position: relative;\n  height: 130vh; }\n\n.content-wrap {\n  display: flex;\n  width: 550px;\n  justify-content: space-between; }\n  .content-wrap .content-line-wrap {\n    display: flex;\n    align-items: center;\n    height: 33px;\n    width: 10%; }\n  .content-wrap .content-text {\n    line-height: 33px;\n    width: 85%;\n    font-size: 105%; }\n\n.before-content-line {\n  background: #fc18b9;\n  width: 70px;\n  height: 2px; }\n\n.social-links {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 25vw;\n  height: 100%; }\n  .social-links .social-icons {\n    height: 22%;\n    width: 30%;\n    display: flex;\n    justify-content: space-around; }\n    .social-links .social-icons img {\n      height: 100%; }\n\n.overlay {\n  background: #00061c;\n  height: 100vh;\n  width: 100vw;\n  z-index: 999;\n  position: fixed;\n  top: 120%;\n  left: 0px;\n  color: #fff;\n  transition: opacity 0.3s ease-in-out, top 0.5s cubic-bezier(0.55, 0.01, 0.17, 1); }\n  .overlay .overlay-content {\n    height: calc(100vh - 150px);\n    overflow-y: auto;\n    padding: 20px 10vw 0 10vw; }\n    @media all and (max-width: 1000px) {\n      .overlay .overlay-content {\n        padding: 30px 10vw 0 10vw; } }\n    @media all and (max-width: 600px) {\n      .overlay .overlay-content {\n        padding: 0px 10vw 0 10vw; } }\n  .overlay h2 {\n    font-size: 4em;\n    font-family: 'teko-light';\n    letter-spacing: 20px;\n    color: #fc18b9; }\n    @media all and (max-width: 1000px) {\n      .overlay h2 {\n        font-size: 2.5em;\n        margin-bottom: 10px; } }\n    @media all and (max-width: 600px) {\n      .overlay h2 {\n        font-size: 2em;\n        letter-spacing: 10px; } }\n\n.overlay-topbar {\n  display: flex;\n  width: 100vw;\n  height: 100px;\n  padding: 0 10vw;\n  justify-content: space-between;\n  align-items: center; }\n  .overlay-topbar .close-overlay {\n    max-height: 35px;\n    cursor: pointer;\n    transition: all 0.07s ease-in-out; }\n  .overlay-topbar .close-overlay:hover {\n    -webkit-animation: rotateAnim 0.5s ease-out;\n            animation: rotateAnim 0.5s ease-out; }\n\n@keyframes rotateAnim {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n  .overlay-topbar .logo-overlay {\n    max-height: 40px; }\n\n@media all and (max-width: 600px) and (orientation: portrait) {\n  .content-wrap {\n    width: 90vw; }\n    .content-wrap .content-line-wrap {\n      height: 22px; }\n    .content-wrap .content-text {\n      line-height: 22px;\n      font-size: 90%; }\n  .before-content-line {\n    width: 50px; } }\n",""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,a=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?n:(r=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,e,t){var o=t(8);"string"==typeof o&&(o=[[n.i,o,""]]);t(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".mobile-only {\n  display: none; }\n\n.desktop-only {\n  display: block; }\n\n.vertical-lines {\n  background: #1d4273;\n  height: 100vh;\n  width: 1px;\n  position: fixed;\n  opacity: 0.2; }\n\n#nav {\n  position: fixed;\n  top: 50%;\n  left: 80px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 5;\n  transition: all 0.5s ease; }\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  height: 70px;\n  margin-top: -3px;\n  position: relative; }\n\n.nav-item:first-child {\n  margin-top: 0; }\n\n.bar {\n  height: 100%;\n  width: 1px;\n  background: #fc18b9;\n  margin-right: 15px; }\n\n.active-bar {\n  width: 3px;\n  height: 120%;\n  z-index: 999;\n  margin-left: -1.5px; }\n\n.nav-item::before {\n  content: '';\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  top: 0px;\n  left: -1.5px;\n  background: #fff;\n  position: absolute; }\n\n.nav-item::after {\n  content: '';\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  bottom: 0px;\n  left: -1.5px;\n  background: #fff;\n  position: absolute; }\n\n.nav-active {\n  color: #fff; }\n\n.nav-text {\n  opacity: 0;\n  position: absolute;\n  left: 15px;\n  font-size: 20px;\n  z-index: 5; }\n\n.nav-number-primary {\n  font-size: 12px;\n  color: #63385b;\n  z-index: 5; }\n\n.nav-hover-text {\n  font-size: 110%;\n  color: #fc18b9;\n  opacity: 0;\n  transition: opacity 0.1s linear; }\n\n.nav-item {\n  cursor: pointer; }\n\n.nav-item:hover > .nav-hover-text {\n  opacity: 1; }\n\n.nav-active:hover > .nav-hover-text {\n  opacity: 0; }\n\n.nav-number-secondary {\n  font-size: 20px;\n  position: absolute;\n  left: -40px;\n  opacity: 0; }\n\n#about {\n  min-height: 120vh; }\n\n.scroll-disable {\n  overflow: hidden; }\n\n.scroll-x-disable {\n  overflow-x: hidden; }\n\n.scroll-y-disable {\n  overflow-x: hidden; }\n",""])},function(n,e,t){var o=t(10);"string"==typeof o&&(o=[[n.i,o,""]]);t(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"@media all and (max-width: 600px) and (orientation: portrait) {\n  .desktop-only {\n    display: none !important; }\n  .mobile-only {\n    display: block; }\n  #navbar {\n    height: 60px;\n    padding: 0 5vw;\n    border-bottom: 1px solid #B525E9; }\n  #logo {\n    height: 75%; }\n  #hamburger {\n    max-height: 30px; }\n  #side-menu {\n    width: 100vw;\n    right: -100vw; }\n  #side-menu-top {\n    height: 60px; }\n  #side-menu-footer {\n    bottom: 20px;\n    height: 80px;\n    width: 95%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    #side-menu-footer .content-line-wrap {\n      height: 100%;\n      width: 60%;\n      display: flex;\n      align-items: center; }\n      #side-menu-footer .content-line-wrap .before-content-line {\n        width: 100%; }\n    #side-menu-footer a {\n      height: 22%; }\n      #side-menu-footer a img {\n        height: 100%; }\n  #close-hamburger {\n    max-height: 27px; }\n  #container {\n    padding: 80px 0 0 0; } }\n",""])},function(n,e,t){var o=t(12);"string"==typeof o&&(o=[[n.i,o,""]]);t(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(n.exports=o.locals)},function(n,e,t){e=n.exports=t(0)(!1);var o=t(3),r=o(t(13)),a=o(t(14)),i=o(t(15)),s=o(t(16));e.push([n.i,"@font-face {\n  font-family: 'bahnschrift';\n  src: url("+r+"); }\n\n@font-face {\n  font-family: 'teko-light';\n  src: url("+a+"); }\n\n@font-face {\n  font-family: 'teko-medium';\n  src: url("+i+"); }\n\n@font-face {\n  font-family: 'teko-regular';\n  src: url("+s+"); }\n",""])},function(n,e,t){n.exports=t.p+"b3483ec650bba4a4416d39c4d6030a99.ttf"},function(n,e,t){n.exports=t.p+"126fdb9ec0f6bba1f4d4914b63a29614.ttf"},function(n,e,t){n.exports=t.p+"57ca7f3c577cb98905e3d8fac191008c.ttf"},function(n,e,t){n.exports=t.p+"f852bb6855bccb0f26015ab829c1b68d.ttf"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,e,t){"use strict";t(4),t(7),t(11),t(9),t(51),function(){var n=document.getElementById("all-sponsors-categories"),e=document.getElementById("category-sponsors"),o=[{category_name:"All",sponsors:[]},{category_name:"Media Partners",sponsors:[{name:"Sponsor1",image:t(2),role:"Title sponsor"},{name:"Sponsor2",image:t(2),role:"Paisa diya"},{name:"Sponsor3",image:t(2),role:"Mere paise pe hilaoge"}]},{category_name:"Powered by",sponsors:[{name:"Sponsor1",image:t(2),role:"Powered By"}]},{category_name:"Others",sponsors:[{name:"Sponsor1",image:t(2),role:"Castaa aaah"},{name:"Sponsor2",image:t(2),role:"Sidelined sponsor"}]}],r={category_name:"All",sponsors:[]};o.map(function(n){n.sponsors.map(function(n){return r.sponsors.push(n)})}),console.log(r),o[0]=r;var a=document.createElement("div");a.id="categories-items",o.map(function(n,t){var r=document.createElement("span");r.className="category-item "+(0===t?"active-category":""),r.setAttribute("data","category: '"+n.category_name+"', index: '"+t+"'"),r.addEventListener("click",function(){return function(n){n=parseInt(n);for(var t=document.getElementsByClassName("category-item"),r=0;r<t.length;r++)t[r].classList.remove("active-category"),r===n&&t[r].classList.add("active-category");for(var a=document.getElementsByClassName("event-box"),i=function(n){setTimeout(function(){return a[n].classList.add("popout-class")},10*(a.length-n-1))},s=a.length-1;0<s;s--)i(s);setTimeout(function(){e.innerHTML="",o[n].sponsors.map(function(t){e.innerHTML+='\n                <div class="box" data-category='+o[n].category_name+" data-event="+t.name+">\n                    <img src="+t.image+" alt="+t.name+" /> \n                    <span>"+t.name+'</span>\n                    <span class="sponsor-role">< '+t.role+" ></span>\n                </div>\n                "})},10*a.length)}(t)}),r.innerHTML=n.category_name,a.appendChild(r),0===t&&n.sponsors.map(function(t){e.innerHTML+='\n                            <div class="box" data-category='+n.category_name+" data-event="+t.name+">\n                                <img src="+t.image+" alt="+t.name+" /> \n                                <span>"+t.name+'</span>\n                                <span class="sponsor-role">< '+t.role+" ></span>\n                            </div>\n                            "})}),n.appendChild(a)}()},function(n,e,t){var o=t(52);"string"==typeof o&&(o=[[n.i,o,""]]);t(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"#all-sponsors {\n  min-height: 100%;\n  width: 100vw;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  padding: 100px 0 0 0;\n  transition: all 0.5s ease; }\n  #all-sponsors #all-sponsors-title {\n    font-size: 80px;\n    letter-spacing: 20px;\n    color: #fff;\n    font-family: 'teko-light'; }\n  #all-sponsors #all-sponsors-categories {\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0 0 0;\n    width: 80%;\n    border-top: 1px solid #fc18b9;\n    border-bottom: 1px solid #fc18b9;\n    margin-bottom: 50px; }\n    #all-sponsors #all-sponsors-categories > span {\n      font-size: 30px;\n      letter-spacing: 5px;\n      color: #fc18b9;\n      text-transform: uppercase; }\n    #all-sponsors #all-sponsors-categories #categories-items {\n      display: flex;\n      flex-wrap: wrap;\n      margin: 10px 0; }\n    #all-sponsors #all-sponsors-categories .category-item {\n      color: #fc18b9;\n      text-transform: uppercase;\n      padding: 10px 30px;\n      font-size: 15px;\n      cursor: pointer;\n      border: 1px solid #fc18b9;\n      border-radius: 20px;\n      margin: 5px 10px 5px 0;\n      transition: all 0.5s ease; }\n    #all-sponsors #all-sponsors-categories .category-item:hover, #all-sponsors #all-sponsors-categories .active-category {\n      color: #fff;\n      background-color: #fc18b9; }\n  #all-sponsors #category-sponsors {\n    width: 80%;\n    margin: 30px 0;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center; }\n  #all-sponsors .box {\n    width: 200px;\n    height: 300px;\n    background-image: linear-gradient(60deg, #250135, #162539);\n    margin: 20px;\n    cursor: pointer;\n    transition: all 0.5s ease;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    z-index: 99;\n    -webkit-animation: popup 0.5s ease;\n            animation: popup 0.5s ease; }\n    #all-sponsors .box img {\n      width: 190px;\n      height: 190px;\n      padding: 5px 0; }\n    #all-sponsors .box span {\n      font-size: 20px;\n      text-transform: uppercase;\n      padding: 5px;\n      color: #fff;\n      text-align: center; }\n    #all-sponsors .box .sponsor-role {\n      font-size: 20px;\n      text-transform: uppercase;\n      font-weight: lighter; }\n    #all-sponsors .box .sponsor-role::before, #all-sponsors .box .sponsor-role::after {\n      content: none; }\n  #all-sponsors .sponsor-box:hover {\n    -webkit-transform: scale(1.05) !important;\n            transform: scale(1.05) !important;\n    box-shadow: 0 0 30px 5px #00000040; }\n\n@-webkit-keyframes popup {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes popup {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  #all-sponsors .popout-class {\n    -webkit-animation: popout 0.5s ease forwards;\n            animation: popout 0.5s ease forwards; }\n\n@-webkit-keyframes popout {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n@keyframes popout {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n.nav-links-sponsors {\n  justify-content: flex-end !important; }\n\n@media all and (max-width: 600px) and (orientation: portrait) {\n  #all-sponsors #all-sponsors-categories, #all-sponsors #category-sponsors {\n    width: 90%; }\n    #all-sponsors #all-sponsors-categories > span, #all-sponsors #category-sponsors > span {\n      font-size: 20px;\n      letter-spacing: 15px; }\n    #all-sponsors #all-sponsors-categories #categories-items, #all-sponsors #category-sponsors #categories-items {\n      flex-wrap: nowrap;\n      overflow-x: scroll; }\n    #all-sponsors #all-sponsors-categories .category-item, #all-sponsors #category-sponsors .category-item {\n      padding: 0 30px;\n      display: flex;\n      justify-content: center;\n      align-items: center; } }\n",""])}]);