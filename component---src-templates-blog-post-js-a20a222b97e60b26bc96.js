(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{202:function(t,n,e){"use strict";e.r(n),e.d(n,"pageQuery",function(){return g});e(28);var o=e(9),a=(e(0),e(207)),r=e(216),c=e(212),i=e(213),l=e(226),s=e(209);function d(){return(d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var u={subtitle:Object(o.c)("display:block;margin-top:",Object(s.a)(-1),";margin-bottom:",Object(s.a)(1),";font-size:1.5rem;"),smallText:Object(o.c)(Object(s.b)(-.2)," display:block;margin-bottom:",Object(s.a)(1),";"),hr:Object(o.c)("margin-bottom:",Object(s.a)(1),";"),navigation:{name:"1qfxf3w",styles:"display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;padding:0;"},tags:{name:"k008qs",styles:"display:flex;"}};n.default=function(t){var n=t.data.markdownRemark,e=t.data.site.siteMetadata.title,s=t.pageContext,g=s.previous,b=s.next,f=s.tags,m=n.frontmatter,p=m.title,y=m.subtitle,h=f.map(function(t){return t.text});return Object(o.d)(r.a,null,Object(o.d)(c.a,{location:t.location,title:e},Object(o.d)(i.a,{title:p,description:n.excerpt,keywords:h}),Object(o.d)("div",{css:u.header},Object(o.d)("h1",null,p),y&&Object(o.d)("strong",{css:u.subtitle},y),Object(o.d)("div",{css:u.tags},f.map(function(t){return Object(o.d)(l.a,d({key:t.text},t))})),Object(o.d)("p",{css:u.smallText},n.frontmatter.date)),Object(o.d)("div",{dangerouslySetInnerHTML:{__html:n.html}}),Object(o.d)("hr",{css:u.hr}),Object(o.d)("ul",{css:u.navigation},Object(o.d)("li",null,g&&Object(o.d)(a.a,{to:g.fields.slug,rel:"prev"},"← ",g.frontmatter.title)),Object(o.d)("li",null,b&&Object(o.d)(a.a,{to:b.fields.slug,rel:"next"},b.frontmatter.title," →")))))};var g="1743552234"},207:function(t,n,e){"use strict";e.d(n,"b",function(){return d});var o=e(9),a=e(0),r=e.n(a),c=e(74),i=e.n(c);e.d(n,"a",function(){return i.a});e(208),e(11).default.enqueue;var l=r.a.createContext({});function s(t){var n=t.staticQueryData,e=t.data,a=t.query,c=t.render,i=e?e.data:n[a]&&n[a].data;return Object(o.d)(r.a.Fragment,null,i&&c(i),!i&&Object(o.d)("div",null,"Loading (StaticQuery)"))}var d=function(t){var n=t.data,e=t.query,a=t.render,r=t.children;return Object(o.d)(l.Consumer,null,function(t){return Object(o.d)(s,{data:n,query:e,render:a||r,staticQueryData:t})})}},208:function(t,n,e){var o;t.exports=(o=e(214))&&o.default||o},209:function(t,n,e){"use strict";e.d(n,"b",function(){return s}),e.d(n,"a",function(){return d});var o=e(222),a=e.n(o),r=e(223),c=e.n(r),i=e(9);delete c.a.googleFonts;var l=new a.a(c.a);var s=function(t){var n=l.scale(t);return Object(i.c)("font-size:",n.fontSize,";line-height:",n.lineHeight,";")},d=l.rhythm},211:function(t,n,e){"use strict";var o=e(0),a=Object(o.createContext)();n.a=a},212:function(t,n,e){"use strict";e(210),e(221);var o=e(9),a=e(0),r=e(207),c=e(217),i=e(211),l=e(209),s={root:Object(o.c)("position:relative;margin-left:auto;margin-right:auto;max-width:",Object(l.a)(30),";padding:",Object(l.a)(1.5)," ",Object(l.a)(.75),";"),h1:Object(o.c)(Object(l.b)(1.25)," margin-bottom:",Object(l.a)(1),";margin-top:0;"),h3:Object(o.c)("font-family:Montserrat,sans-serif;margin-top:0;margin-bottom:",Object(l.a)(-1),";"),link:{name:"yckaeb",styles:"box-shadow:none;text-decoration:none;color:inherit;"},toggleTheme:function(t){return Object(o.c)("position:absolute;right:0;top:",Object(l.a)(1.5),";border:0;background:",t.color,";color:",t.background,";height:40px;width:40px;border-radius:50%;")}};n.a=function(t){var n,e=t.location,l=t.title,d=t.children,u=Object(a.useContext)(i.a),g=u.theme,b=u.toggleTheme;return n="/blog/"===e.pathname||e.pathname.startsWith("/blog/tags")?Object(o.d)("h1",{css:s.h1},Object(o.d)(r.a,{css:s.link,to:"/"},l)):Object(o.d)("h3",{css:s.h3},Object(o.d)(r.a,{css:s.link,to:"/"},l)),Object(o.d)("div",{css:s.root},n,Object(o.d)("button",{css:s.toggleTheme,onClick:b},"light"===g?Object(o.d)(c.a,null):Object(o.d)(c.c,null)),d)}},213:function(t,n,e){"use strict";var o=e(9),a=e(215),r=(e(0),e(224)),c=e.n(r),i=e(207),l=function(t){var n=t.description,e=t.lang,r=t.meta,l=t.keywords,s=t.title;return Object(o.d)(i.b,{query:"4017075492",render:function(t){var a=n||t.site.siteMetadata.description;return Object(o.d)(c.a,{htmlAttributes:{lang:e},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:a})};l.defaultProps={lang:"en",meta:[],keywords:[]},n.a=l},214:function(t,n,e){"use strict";e.r(n);e(28);var o=e(0),a=e.n(o),r=e(102);n.default=function(t){var n=t.location,e=t.pageResources;return e?a.a.createElement(r.a,Object.assign({location:n,pageResources:e},e.json)):null}},215:function(t){t.exports={data:{site:{siteMetadata:{title:"Canastro's notes",description:"Software development (mainly javascript) blog written by Ricardo Canastro a Software Developer based in Porto, Portugal and currently working for dashdash.",author:"Ricardo Canastro"}}}}},216:function(t,n,e){"use strict";var o=e(59),a=(e(210),e(9)),r=e(0),c=(e(16),e(45),e(143)),i=e.n(c),l=e(141),s=(e(218),Object(l.a)(function(t){return Object(l.a)(function(n){return function(t,n){return"function"==typeof n?n(t):i()({},t,n)}(t,n)})})),d=function(t){return Object(r.createElement)(a.b.Consumer,null,function(n){return t.theme!==n&&(n=s(n)(t.theme)),Object(r.createElement)(a.b.Provider,{value:n},t.children)})};var u=e(211),g="#222222",b="#f29d0b",f="#f1f5f7",m="#fff",p="#007acc",y=function(t){return"light"===t?{background:m,color:g,link:p}:{background:g,color:f,link:b}};n.a=function(t){var n=t.children,e=function(){var t="undefined"!=typeof window&&window.localStorage.getItem("theme"),n=Object(r.useState)(t||"light"),e=n[0],o=n[1];return Object(r.useEffect)(function(){"undefined"!=typeof window&&window.localStorage.setItem("theme",e)},[e]),[e,function(){return o(function(t){return"light"===t?"dark":"light"})}]}(),c=e[0],i=e[1],l=y(c),s=y("light"),g=l.color,b=Object(r.useState)(0),f=b[0],m=b[1];return Object(r.useEffect)(function(){m(1),document.body.classList.remove("dark")},[]),Object(a.d)(u.a.Provider,{value:{theme:c,toggleTheme:i}},Object(a.d)(d,{theme:l},Object(a.d)(a.a,{styles:Object(a.c)({body:{backgroundColor:l.background},a:{color:l.link},blockquote:{color:g},"body.light":{".container":{background:s.background,color:s.color}}})}),Object(a.d)(a.a,{styles:Object(a.c)("light"===c?"\n\tcode[class*='language-'],\n\tpre[class*='language-'] {\n\t\tcolor: #657b83; /* base00 */\n\t\tfont-family: 'Fira Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\t\tfont-size: 16px;\n\t\ttext-align: left;\n\t\twhite-space: pre;\n\t\tword-spacing: normal;\n\t\tword-break: normal;\n\t\tword-wrap: normal;\n\t\ttransition: 0.4s ease;\n\n\t\tline-height: 1.65;\n\n\t\t-moz-tab-size: 2;\n\t\t-o-tab-size: 2;\n\t\ttab-size: 2;\n\n\t\t-webkit-hyphens: none;\n\t\t-moz-hyphens: none;\n\t\t-ms-hyphens: none;\n\t\thyphens: none;\n\t}\n\n\tpre[class*='language-']::-moz-selection,\n\tpre[class*='language-'] ::-moz-selection,\n\tcode[class*='language-']::-moz-selection,\n\tcode[class*='language-'] ::-moz-selection {\n\t\tbackground: #eee8d5; /* base02 */\n\t}\n\n\tpre[class*='language-']::selection,\n\tpre[class*='language-'] ::selection,\n\tcode[class*='language-']::selection,\n\tcode[class*='language-'] ::selection {\n\t\tbackground: #eee8d5; /* base02 */\n\t}\n\n\t/* Code blocks */\n\tpre[class*='language-'] {\n\t\tpadding: 1em;\n\t\tmargin: 0.5em 0 1.5em 0;\n\t\toverflow: auto;\n\t\tborder-radius: 0.3em;\n\t}\n\n\t:not(pre) > code[class*='language-'],\n\tpre[class*='language-'] {\n\t\tbackground-color: rgba(253,246,227,0.5);\n\t}\n\n\t/* handle initial background for dark mode separately to avoid flashing eyes at night */\n\tbody.dark :not(pre) > code[class*='language-'],\n\tbody.dark pre[class*='language-'] {\n\t\tbackground-color: rgba(255, 255, 255, 0.05);\n\t}\n\n\t/* Inline code */\n\t:not(pre) > code[class*='language-'] {\n\t\tcolor: #6c71c4;\n\t\tpadding: 0.1em;\n\t\tborder-radius: 0.3em;\n\t}\n\n\t.token.comment,\n\t.token.prolog,\n\t.token.doctype,\n\t.token.cdata {\n\t\tcolor: #93a1a1; /* base1 */\n\t}\n\n\t.token.punctuation {\n\t\tcolor: #586e75; /* base01 */\n\t}\n\n\t.namespace {\n\t\topacity: 0.7;\n\t}\n\n\t.token.property,\n\t.token.tag,\n\t.token.boolean,\n\t.token.number,\n\t.token.constant,\n\t.token.symbol,\n\t.token.deleted {\n\t\tcolor: #268bd2; /* blue */\n\t}\n\n\t.token.selector,\n\t.token.attr-name,\n\t.token.string,\n\t.token.char,\n\t.token.builtin,\n\t.token.url,\n\t.token.inserted {\n\t\tcolor: #2aa198; /* cyan */\n\t}\n\n\t.token.entity {\n\t\tcolor: #657b83; /* base00 */\n\t\tbackground: #eee8d5; /* base2 */\n\t}\n\n\t.token.atrule,\n\t.token.attr-value {\n\t\tcolor: #859900;\n\t}\n\n\t.token.keyword {\n\t\tcolor: #d33682;\n\t\tfont-style: italic;\n\t}\n\n\t.token.function,\n\t.token.class-name {\n\t\tcolor: #b58900; /* yellow */\n\t}\n\n\t.token.regex,\n\t.token.important,\n\t.token.variable {\n\t\tcolor: #cb4b16; /* orange */\n\t}\n\n\t.token.important,\n\t.token.bold {\n\t\tfont-weight: bold;\n\t}\n\t.token.italic {\n\t\tfont-style: italic;\n\t}\n\n\t.token.entity {\n\t\tcursor: help;\n\t}\n\n\t.gatsby-highlight-code-line {\n\t\tbackground-color: #feb;\n\t\tdisplay: block;\n\t\tmargin-right: -1em;\n\t\tmargin-left: -1em;\n\t\tpadding-right: 1em;\n\t\tpadding-left: 0.75em;\n\t\tborder-left: 0.25em solid #f99;\n\t}\n\n\t/**\n\t * Add back the container background-color, border-radius, padding, margin\n\t * and overflow that we removed from <pre>.\n\t */\n\t.gatsby-highlight {\n\t\tbackground-color: rgba(253,246,227,0.5);\n\t\tborder-radius: 0.3em;\n\t\tmargin: 0.5em 0 1.5em 0;\n\t\tpadding: 1em;\n\t\toverflow: auto;\n\t}\n\n\t/**\n\t * Remove the default PrismJS theme background-color, border-radius, margin,\n\t * padding and overflow.\n\t * 1. Make the element just wide enough to fit its content.\n\t * 2. Always fill the visible space in .gatsby-highlight.\n\t * 3. Adjust the position of the line numbers\n\t */\n\t.gatsby-highlight pre[class*=\"language-\"] {\n\t\tbackground-color: transparent;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\toverflow: initial;\n\t\tfloat: left; /* 1 */\n\t\tmin-width: 100%; /* 2 */\n\t}\n":"\n\tcode[class*='language-'],\n\tpre[class*='language-'] {\n\t\tcolor: #e3e8ff; /* base00 */\n\t\tfont-family: 'Fira Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\t\tfont-size: 16px;\n\t\ttext-align: left;\n\t\twhite-space: pre;\n\t\tword-spacing: normal;\n\t\tword-break: normal;\n\t\tword-wrap: normal;\n\t\ttransition: 0.4s ease;\n\n\t\tline-height: 1.65;\n\n\t\t-moz-tab-size: 2;\n\t\t-o-tab-size: 2;\n\t\ttab-size: 2;\n\n\t\t-webkit-hyphens: none;\n\t\t-moz-hyphens: none;\n\t\t-ms-hyphens: none;\n\t\thyphens: none;\n\t}\n\n\tpre[class*='language-']::-moz-selection,\n\tpre[class*='language-'] ::-moz-selection,\n\tcode[class*='language-']::-moz-selection,\n\tcode[class*='language-'] ::-moz-selection {\n\t\tbackground: rgba(255, 255, 255, 0.09); /* base02 */\n\t}\n\n\tpre[class*='language-']::selection,\n\tpre[class*='language-'] ::selection,\n\tcode[class*='language-']::selection,\n\tcode[class*='language-'] ::selection {\n\t\tbackground: rgba(255, 255, 255, 0.09); /* base02 */\n\t}\n\n\t/* Code blocks */\n\tpre[class*='language-'] {\n\t\tpadding: 1em;\n\t\tmargin: 0.5em 0 1.5em 0;\n\t\toverflow: auto;\n\t\tborder-radius: 0.3em;\n\t}\n\n\t:not(pre) > code[class*='language-'],\n\tpre[class*='language-'] {\n\t\tbackground-color: rgba(255, 255, 255, 0.05);\n\t}\n\n\t/* Inline code */\n\t:not(pre) > code[class*='language-'] {\n\t\tcolor: #84ffff;\n\t\tpadding: 0.1em;\n\t\tborder-radius: 0.3em;\n\t}\n\n\t.token.comment,\n\t.token.prolog,\n\t.token.doctype,\n\t.token.cdata {\n\t\tcolor: rgba(227,232,255,0.5); /* base1 */\n\t}\n\n\t.token.punctuation {\n\t\tcolor: rgba(227,232,255,0.6); /* base01 */\n\t}\n\n\t.namespace {\n\t\topacity: 0.7;\n\t}\n\n\t.token.property,\n\t.token.tag,\n\t.token.boolean,\n\t.token.number {\n\t\tcolor: #82aaff;\n\t}\n\n\t.token.constant,\n\t.token.symbol,\n\t.token.deleted {\n\t\tcolor: #c792ea /* blue */\n\t}\n\n\t.token.selector,\n\t.token.attr-name,\n\t.token.string,\n\t.token.char,\n\t.token.builtin,\n\t.token.url,\n\t.token.inserted {\n\t\tcolor: #c3e88d; /* cyan */\n\t}\n\n\t.token.entity {\n\t\tcolor: rgba(227,232,255,0.7);\n\t\tbackground: rgba(255, 255, 255, 0.05);\n\t}\n\n\t.token.atrule,\n\t.token.attr-value {\n\t\tcolor: #80cbc4;\n\t}\n\n\t.token.keyword {\n\t\tcolor: #f07178;\n\t\tfont-style: italic;\n\t}\n\n\t.token.function,\n\t.token.class-name {\n\t\tcolor: #ffcb6b; /* yellow */\n\t}\n\n\t.token.regex,\n\t.token.important,\n\t.token.variable {\n\t\tcolor: #f78c6c; /* orange */\n\t}\n\n\t.token.important,\n\t.token.bold {\n\t\tfont-weight: bold;\n\t}\n\t.token.italic {\n\t\tfont-style: italic;\n\t}\n\n\t.token.entity {\n\t\tcursor: help;\n\t}\n\n\t.gatsby-highlight-code-line {\n\t\t/* Use a hex code since rgba causes weird overlays with multiple highlighted lines */\n\t\tbackground-color: #393939;\n\t\tdisplay: block;\n\t\tmargin-right: -1em;\n\t\tmargin-left: -1em;\n\t\tpadding-right: 1em;\n\t\tpadding-left: 0.75em;\n\t\tborder-left: 0.25em solid #f78c6c;\n\t}\n\n\t/**\n\t * Add back the container background-color, border-radius, padding, margin\n\t * and overflow that we removed from <pre>.\n\t */\n\t.gatsby-highlight {\n\t\tbackground-color: rgba(255, 255, 255, 0.05);\n\t\tborder-radius: 0.3em;\n\t\tmargin: 0.5em 0 1.5em 0;\n\t\tpadding: 1em;\n\t\toverflow: auto;\n\t}\n\n\t/**\n\t * Remove the default PrismJS theme background-color, border-radius, margin,\n\t * padding and overflow.\n\t * 1. Make the element just wide enough to fit its content.\n\t * 2. Always fill the visible space in .gatsby-highlight.\n\t * 3. Adjust the position of the line numbers\n\t */\n\t.gatsby-highlight pre[class*=\"language-\"] {\n\t\tbackground-color: transparent;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\toverflow: initial;\n\t\tfloat: left; /* 1 */\n\t\tmin-width: 100%; /* 2 */\n\t}\n")}),Object(a.d)("div",{css:Object(o.a)({color:g,zIndex:1,position:"relative",overflow:"hidden"}),className:"container",key:f},n)))}},218:function(t,n,e){"use strict";e(44),e(100);var o=e(219),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function l(t){return o.isMemo(t)?c:i[t.$$typeof]||a}i[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var s=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,f=Object.prototype;t.exports=function t(n,e,o){if("string"!=typeof e){if(f){var a=b(e);a&&a!==f&&t(n,a,o)}var c=d(e);u&&(c=c.concat(u(e)));for(var i=l(n),m=l(e),p=0;p<c.length;++p){var y=c[p];if(!(r[y]||o&&o[y]||m&&m[y]||i&&i[y])){var h=g(e,y);try{s(n,y,h)}catch(k){}}}return n}return n}},219:function(t,n,e){"use strict";t.exports=e(220)},220:function(t,n,e){"use strict";e(58),e(44),e(100),Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,g=o?Symbol.for("react.concurrent_mode"):60111,b=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,p=o?Symbol.for("react.lazy"):60116;function y(t){if("object"==typeof t&&null!==t){var n=t.$$typeof;switch(n){case a:switch(t=t.type){case u:case g:case c:case l:case i:case f:return t;default:switch(t=t&&t.$$typeof){case d:case b:case s:return t;default:return n}}case p:case m:case r:return n}}}function h(t){return y(t)===g}n.typeOf=y,n.AsyncMode=u,n.ConcurrentMode=g,n.ContextConsumer=d,n.ContextProvider=s,n.Element=a,n.ForwardRef=b,n.Fragment=c,n.Lazy=p,n.Memo=m,n.Portal=r,n.Profiler=l,n.StrictMode=i,n.Suspense=f,n.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===c||t===g||t===l||t===i||t===f||"object"==typeof t&&null!==t&&(t.$$typeof===p||t.$$typeof===m||t.$$typeof===s||t.$$typeof===d||t.$$typeof===b)},n.isAsyncMode=function(t){return h(t)||y(t)===u},n.isConcurrentMode=h,n.isContextConsumer=function(t){return y(t)===d},n.isContextProvider=function(t){return y(t)===s},n.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===a},n.isForwardRef=function(t){return y(t)===b},n.isFragment=function(t){return y(t)===c},n.isLazy=function(t){return y(t)===p},n.isMemo=function(t){return y(t)===m},n.isPortal=function(t){return y(t)===r},n.isProfiler=function(t){return y(t)===l},n.isStrictMode=function(t){return y(t)===i},n.isSuspense=function(t){return y(t)===f}},226:function(t,n,e){"use strict";e(210);var o=e(9),a=(e(0),e(207)),r={a:function(t){return Object(o.c)("display:flex;align-items:center;border:1px solid ",t.link,";border-radius:5px;padding:0 5px;margin-right:5px;box-shadow:none;font-size:0.75rem;")}};n.a=function(t){var n=t.link,e=t.text;return Object(o.d)(a.a,{css:r.a,to:n},e)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a20a222b97e60b26bc96.js.map