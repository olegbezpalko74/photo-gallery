!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var o=function(){"use strict";function r(){e(t)(this,r)}return e(n)(r,[{key:"fetchPost",value:function(){return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}}]),r}();document.querySelector(".js-posts"),document.querySelector("load-more-btn"),new o}();
//# sourceMappingURL=index.f9a747ed.js.map