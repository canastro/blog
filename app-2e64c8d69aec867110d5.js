webpackJsonp([0xd2a57dc1d883],{118:function(e,n,t){"use strict";function o(e,n,t){var o=r.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function a(e,n,t){return r.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=a;var r=[{plugin:t(293),options:{plugins:[],trackingId:"UA-110924562-1",anonymize:!0}},{plugin:t(295),options:{plugins:[]}},{plugin:t(296),options:{plugins:[]}}]},175:function(e,n,t){"use strict";var o;n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(276),"component---src-templates-blog-post-js":t(281),"component---src-templates-tag-page-js":t(282),"component---src-pages-404-js":t(278),"component---src-pages-index-js":t(279),"component---src-pages-tags-js":t(280)},n.json=(o={"layout-index.json":t(15),"offline-plugin-app-shell-fallback.json":t(287)},o["layout-index.json"]=t(15),o["eslint-configuration.json"]=t(285),o["layout-index.json"]=t(15),o["power-of-flow-runtime.json"]=t(288),o["layout-index.json"]=t(15),o["speedtracker.json"]=t(289),o["layout-index.json"]=t(15),o["tags-dev-environment.json"]=t(291),o["layout-index.json"]=t(15),o["tags-performance.json"]=t(292),o["layout-index.json"]=t(15),o["404.json"]=t(283),o["layout-index.json"]=t(15),o["index.json"]=t(286),o["layout-index.json"]=t(15),o["tags.json"]=t(290),o["layout-index.json"]=t(15),o["404-html.json"]=t(284),o),n.layouts={"layout---index":t(277)}},176:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(1),c=o(s),l=t(2),f=o(l),p=t(144),d=o(p),g=t(105),m=o(g),h=t(118),y=function(e){var n=e.children;return c.default.createElement("div",null,n())},v=function(e){function n(t){a(this,n);var o=r(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,h.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=v,e.exports=n.default},105:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(330),r=o(a),u=(0,r.default)();e.exports=u},177:function(e,n,t){"use strict";var o=t(117),a={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var r=decodeURIComponent(t),u=r.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),a[u])return a[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,a[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,a[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,a[u]=e,!0}return!1}),i}}},178:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(136),r=o(a),u=t(118),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,r.default)();e.exports=c},284:function(e,n,t){t(4),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(306)})})}},283:function(e,n,t){t(4),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(307)})})}},285:function(e,n,t){t(4),e.exports=function(e){return t.e(60724442115432,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(308)})})}},286:function(e,n,t){t(4),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(309)})})}},15:function(e,n,t){t(4),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(138)})})}},287:function(e,n,t){t(4),e.exports=function(e){return t.e(0xbf4c176e203a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(310)})})}},288:function(e,n,t){t(4),e.exports=function(e){return t.e(0xb6da0080c41a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(311)})})}},289:function(e,n,t){t(4),e.exports=function(e){return t.e(0xd9c39e1220a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(312)})})}},291:function(e,n,t){t(4),e.exports=function(e){return t.e(0xc15354fb53a8,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(313)})})}},292:function(e,n,t){t(4),e.exports=function(e){return t.e(85273878220361,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(314)})})}},290:function(e,n,t){t(4),e.exports=function(e){return t.e(55702396619907,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(315)})})}},277:function(e,n,t){t(4),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(179)})})}},144:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var a=t(1),r=(o(a),t(177)),u=o(r),i=t(105),s=o(i),c=void 0,l={},f={},p={},d={},g={},m=[],h=[],y={},v=[],R={},j=function(e){return e&&e.default||e},x=void 0,P=!0;x=t(180)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){w(e,function(){v=v.filter(function(n){return n!==e}),x.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var b=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},_=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},w=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[n])e.nextTick(function(){t(null,d[n])});else{var o=void 0;o="component---"===n.slice(0,12)?f.components[n]:"layout---"===n.slice(0,9)?f.layouts[n]:f.json[n],o(function(e,o){d[n]=o,t(e,o)})}},C=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):w(n,function(e,o){if(e)t(e);else{var a=j(o());g[n]=a,t(e,a)}})},N=1,k={empty:function(){h=[],y={},R={},v=[],m=[]},addPagesArray:function(e){m=e;var n="";n="/blog",c=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return h.pop()},enqueue:function(e){if(!m.some(function(n){return n.path===e}))return!1;var n=1/N;N+=1,y[e]?y[e]+=1:y[e]=1,k.has(e)||h.unshift(e),h.sort(_);var t=c(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,v.indexOf(t.jsonName)!==-1||d[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,v.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(b),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:h,pathCount:y}},getPage:function(e){return c(e)},has:function(e){return h.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};P&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var a;if(t){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),P=!1;var o=c(n);if(!o)return console.log("A page wasn't found for \""+n+'"'),t();if(n=o.path,p[n])return e.nextTick(function(){t(p[n]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:p[n]})}),p[n];s.default.emit("onPreLoadPageResources",{path:n});var a=void 0,r=void 0,u=void 0,i=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){p[n]={component:a,json:r,layout:u,page:o};var e={component:a,json:r,layout:u,page:o};t(e),s.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return C(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),a=n,i()}),C(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),r=n,i()}),void(o.layoutComponentChunkName&&C(o.layout,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(e){return h.length-h.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:k.getResourcesForPathname};n.default=k}).call(n,t(139))},316:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"eslint-configuration.json",path:"/eslint-configuration/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"power-of-flow-runtime.json",path:"/power-of-flow-runtime/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"speedtracker.json",path:"/speedtracker/"},{componentChunkName:"component---src-templates-tag-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-dev-environment.json",path:"/tags/dev-environment/"},{componentChunkName:"component---src-templates-tag-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-performance.json",path:"/tags/performance/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},180:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],a=[],r=function(){var e=n();e&&(a.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(118),u=t(1),i=o(u),s=t(1),c=o(s),l=t(117),f=t(300),p=t(268),d=o(p),g=t(178),m=o(g),h=t(105),y=o(h),v=t(316),R=o(v),j=t(317),x=o(j),P=t(176),b=o(P),_=t(175),w=o(_),C=t(144),N=o(C);t(258),window.___emitter=y.default,N.default.addPagesArray(R.default),N.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=N.default,window.matchPath=l.matchPath;var k=x.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),E=function(e){var n=k[e];return null!=n&&(m.default.replace(n.toPath),!0)};E(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){E(e.pathname)||(0,r.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(181);var o=function(e){function n(t){t.page.path===N.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=k[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);N.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var s=(0,r.apiRunner)("replaceRouterComponent",{history:m.default})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:m.default},n)},g=(0,l.withRouter)(b.default);N.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(s?s:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(g,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return N.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,a({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},317:function(e,n){e.exports=[]},181:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(105),r=o(a),u="/";u="/blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},268:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,e=function(){for(t.removeEventListener(a,e),r=1;e=n.shift();)e()}),function(e){r?setTimeout(e,0):n.push(e)}})},4:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(e){u&&(u(t,e),u=null)};return!r&&n&&n[o]?void c(!0):(a(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,e(function(){i||(i=!0,r?r[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},293:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(window.ga("set","page",(n||{}).pathname),window.ga("send","pageview"))}},276:function(e,n,t){t(4),e.exports=function(e){return t.e(99219681209289,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(294)})})}},295:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},296:function(e,n,t){"use strict";n.onClientEntry=function(){}},330:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},278:function(e,n,t){t(4),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(185)})})}},279:function(e,n,t){t(4),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(186)})})}},280:function(e,n,t){t(4),e.exports=function(e){return t.e(0xb2200a1b9a48,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(187)})})}},281:function(e,n,t){t(4),e.exports=function(e){return t.e(0x620f737b6699,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(188)})})}},282:function(e,n,t){t(4),e.exports=function(e){return t.e(77653406118394,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(189)})})}}});
//# sourceMappingURL=app-2e64c8d69aec867110d5.js.map