(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{204:function(t,n,e){"use strict";e.r(n);var o=e(9),a=(e(0),e(214)),r=e(212),c=e(213);n.default=function(t){var n=t.location;return Object(o.d)(a.a,null,Object(o.d)(r.a,{location:n},Object(o.d)(c.a,{title:"404: Not Found"}),Object(o.d)("h1",null,"Not Found"),Object(o.d)("p",null,"You just hit a route that doesn't exist... the sadness.")))}},207:function(t,n,e){"use strict";e.d(n,"b",function(){return d});var o=e(9),a=e(0),r=e.n(a),c=e(74),i=e.n(c);e.d(n,"a",function(){return i.a});e(208),e(11).default.enqueue;var l=r.a.createContext({});function s(t){var n=t.staticQueryData,e=t.data,a=t.query,c=t.render,i=e?e.data:n[a]&&n[a].data;return Object(o.d)(r.a.Fragment,null,i&&c(i),!i&&Object(o.d)("div",null,"Loading (StaticQuery)"))}var d=function(t){var n=t.data,e=t.query,a=t.render,r=t.children;return Object(o.d)(l.Consumer,null,function(t){return Object(o.d)(s,{data:n,query:e,render:a||r,staticQueryData:t})})}},208:function(t,n,e){var o;t.exports=(o=e(215))&&o.default||o},210:function(t,n,e){"use strict";var o=e(0),a=Object(o.createContext)();n.a=a},211:function(t,n,e){"use strict";e.d(n,"b",function(){return s}),e.d(n,"a",function(){return d});var o=e(220),a=e.n(o),r=e(221),c=e.n(r),i=e(9);delete c.a.googleFonts;var l=new a.a(c.a);var s=function(t){var n=l.scale(t);return Object(i.c)("font-size:",n.fontSize,";line-height:",n.lineHeight,";")},d=l.rhythm},212:function(t,n,e){"use strict";e(209),e(219);var o=e(9),a=e(0),r=e(207),c=e(217),i=e(210),l=e(211),s={root:Object(o.c)("position:relative;margin-left:auto;margin-right:auto;max-width:",Object(l.a)(30),";padding:",Object(l.a)(1.5)," ",Object(l.a)(.75),";"),h1:Object(o.c)(Object(l.b)(1.25)," margin-bottom:",Object(l.a)(1),";margin-top:0;"),h3:Object(o.c)("font-family:Montserrat,sans-serif;margin-top:0;margin-bottom:",Object(l.a)(-1),";"),link:{name:"yckaeb",styles:"box-shadow:none;text-decoration:none;color:inherit;"},toggleTheme:function(t){return Object(o.c)("position:absolute;right:0;top:",Object(l.a)(2),";border:0;background:",t.color,";color:",t.background,";height:30px;width:30px;border-radius:50%;")}};n.a=function(t){var n,e=t.location,l=t.title,d=t.children,g=Object(a.useContext)(i.a),u=g.theme,b=g.toggleTheme;return n="/blog/"===e.pathname||e.pathname.startsWith("/blog/tags")?Object(o.d)("h1",{css:s.h1},Object(o.d)(r.a,{css:s.link,to:"/"},l)):Object(o.d)("h3",{css:s.h3},Object(o.d)(r.a,{css:s.link,to:"/"},l)),Object(o.d)("div",{css:s.root},n,Object(o.d)("button",{css:s.toggleTheme,onClick:b},"light"===u?Object(o.d)(c.a,{size:"0.75rem"}):Object(o.d)(c.c,{size:"0.75rem"})),d)}},213:function(t,n,e){"use strict";var o=e(9),a=e(216),r=(e(0),e(222)),c=e.n(r),i=e(207),l=function(t){var n=t.description,e=t.lang,r=t.meta,l=t.keywords,s=t.title;return Object(o.d)(i.b,{query:"4017075492",render:function(t){var a=n||t.site.siteMetadata.description;return Object(o.d)(c.a,{htmlAttributes:{lang:e},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:a})};l.defaultProps={lang:"en",meta:[],keywords:[]},n.a=l},214:function(t,n,e){"use strict";var o=e(58),a=(e(209),e(9)),r=e(0),c=e(218),i=e(210),l="#222222",s="#f29d0b",d="#f1f5f7",g="#fff",u="#007acc",b=function(t){return"light"===t?{background:g,color:l,link:u}:{background:l,color:d,link:s}};n.a=function(t){var n=t.children,e=function(){var t="undefined"!=typeof window&&window.localStorage.getItem("theme"),n=Object(r.useState)(t||"dark"),e=n[0],o=n[1];return Object(r.useEffect)(function(){"undefined"!=typeof window&&window.localStorage.setItem("theme",e)},[e]),[e,function(){return o(function(t){return"light"===t?"dark":"light"})}]}(),l=e[0],s=e[1],d=b(l),g=b("light"),u=d.color,m=Object(r.useState)(0),h=m[0],p=m[1];return Object(r.useEffect)(function(){p(1),document.body.classList.remove("dark")},[]),Object(a.d)(i.a.Provider,{value:{theme:l,toggleTheme:s}},Object(a.d)(c.a,{theme:d},Object(a.d)(a.a,{styles:Object(a.c)({body:{backgroundColor:d.background},a:{color:d.link},blockquote:{color:u},"body.light":{".container":{background:g.background,color:g.color}}})}),Object(a.d)(a.a,{styles:Object(a.c)("light"===l?"\n\tcode[class*='language-'],\n\tpre[class*='language-'] {\n\t\tcolor: #657b83; /* base00 */\n\t\tfont-family: 'Fira Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\t\tfont-size: 16px;\n\t\ttext-align: left;\n\t\twhite-space: pre;\n\t\tword-spacing: normal;\n\t\tword-break: normal;\n\t\tword-wrap: normal;\n\t\ttransition: 0.4s ease;\n\n\t\tline-height: 1.65;\n\n\t\t-moz-tab-size: 2;\n\t\t-o-tab-size: 2;\n\t\ttab-size: 2;\n\n\t\t-webkit-hyphens: none;\n\t\t-moz-hyphens: none;\n\t\t-ms-hyphens: none;\n\t\thyphens: none;\n\t}\n\n\tpre[class*='language-']::-moz-selection,\n\tpre[class*='language-'] ::-moz-selection,\n\tcode[class*='language-']::-moz-selection,\n\tcode[class*='language-'] ::-moz-selection {\n\t\tbackground: #eee8d5; /* base02 */\n\t}\n\n\tpre[class*='language-']::selection,\n\tpre[class*='language-'] ::selection,\n\tcode[class*='language-']::selection,\n\tcode[class*='language-'] ::selection {\n\t\tbackground: #eee8d5; /* base02 */\n\t}\n\n\t/* Code blocks */\n\tpre[class*='language-'] {\n\t\tpadding: 1em;\n\t\tmargin: 0.5em 0 1.5em 0;\n\t\toverflow: auto;\n\t\tborder-radius: 0.3em;\n\t}\n\n\t:not(pre) > code[class*='language-'],\n\tpre[class*='language-'] {\n\t\tbackground-color: rgba(253,246,227,0.5);\n\t}\n\n\t/* handle initial background for dark mode separately to avoid flashing eyes at night */\n\tbody.dark :not(pre) > code[class*='language-'],\n\tbody.dark pre[class*='language-'] {\n\t\tbackground-color: rgba(255, 255, 255, 0.05);\n\t}\n\n\t/* Inline code */\n\t:not(pre) > code[class*='language-'] {\n\t\tcolor: #6c71c4;\n\t\tpadding: 0.1em;\n\t\tborder-radius: 0.3em;\n\t}\n\n\t.token.comment,\n\t.token.prolog,\n\t.token.doctype,\n\t.token.cdata {\n\t\tcolor: #93a1a1; /* base1 */\n\t}\n\n\t.token.punctuation {\n\t\tcolor: #586e75; /* base01 */\n\t}\n\n\t.namespace {\n\t\topacity: 0.7;\n\t}\n\n\t.token.property,\n\t.token.tag,\n\t.token.boolean,\n\t.token.number,\n\t.token.constant,\n\t.token.symbol,\n\t.token.deleted {\n\t\tcolor: #268bd2; /* blue */\n\t}\n\n\t.token.selector,\n\t.token.attr-name,\n\t.token.string,\n\t.token.char,\n\t.token.builtin,\n\t.token.url,\n\t.token.inserted {\n\t\tcolor: #2aa198; /* cyan */\n\t}\n\n\t.token.entity {\n\t\tcolor: #657b83; /* base00 */\n\t\tbackground: #eee8d5; /* base2 */\n\t}\n\n\t.token.atrule,\n\t.token.attr-value {\n\t\tcolor: #859900;\n\t}\n\n\t.token.keyword {\n\t\tcolor: #d33682;\n\t\tfont-style: italic;\n\t}\n\n\t.token.function,\n\t.token.class-name {\n\t\tcolor: #b58900; /* yellow */\n\t}\n\n\t.token.regex,\n\t.token.important,\n\t.token.variable {\n\t\tcolor: #cb4b16; /* orange */\n\t}\n\n\t.token.important,\n\t.token.bold {\n\t\tfont-weight: bold;\n\t}\n\t.token.italic {\n\t\tfont-style: italic;\n\t}\n\n\t.token.entity {\n\t\tcursor: help;\n\t}\n\n\t.gatsby-highlight-code-line {\n\t\tbackground-color: #feb;\n\t\tdisplay: block;\n\t\tmargin-right: -1em;\n\t\tmargin-left: -1em;\n\t\tpadding-right: 1em;\n\t\tpadding-left: 0.75em;\n\t\tborder-left: 0.25em solid #f99;\n\t}\n\n\t/**\n\t * Add back the container background-color, border-radius, padding, margin\n\t * and overflow that we removed from <pre>.\n\t */\n\t.gatsby-highlight {\n\t\tbackground-color: rgba(253,246,227,0.5);\n\t\tborder-radius: 0.3em;\n\t\tmargin: 0.5em 0 1.5em 0;\n\t\tpadding: 1em;\n\t\toverflow: auto;\n\t}\n\n\t/**\n\t * Remove the default PrismJS theme background-color, border-radius, margin,\n\t * padding and overflow.\n\t * 1. Make the element just wide enough to fit its content.\n\t * 2. Always fill the visible space in .gatsby-highlight.\n\t * 3. Adjust the position of the line numbers\n\t */\n\t.gatsby-highlight pre[class*=\"language-\"] {\n\t\tbackground-color: transparent;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\toverflow: initial;\n\t\tfloat: left; /* 1 */\n\t\tmin-width: 100%; /* 2 */\n\t}\n":"\n\tcode[class*='language-'],\n\tpre[class*='language-'] {\n\t\tcolor: #e3e8ff; /* base00 */\n\t\tfont-family: 'Fira Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\t\tfont-size: 16px;\n\t\ttext-align: left;\n\t\twhite-space: pre;\n\t\tword-spacing: normal;\n\t\tword-break: normal;\n\t\tword-wrap: normal;\n\t\ttransition: 0.4s ease;\n\n\t\tline-height: 1.65;\n\n\t\t-moz-tab-size: 2;\n\t\t-o-tab-size: 2;\n\t\ttab-size: 2;\n\n\t\t-webkit-hyphens: none;\n\t\t-moz-hyphens: none;\n\t\t-ms-hyphens: none;\n\t\thyphens: none;\n\t}\n\n\tpre[class*='language-']::-moz-selection,\n\tpre[class*='language-'] ::-moz-selection,\n\tcode[class*='language-']::-moz-selection,\n\tcode[class*='language-'] ::-moz-selection {\n\t\tbackground: rgba(255, 255, 255, 0.09); /* base02 */\n\t}\n\n\tpre[class*='language-']::selection,\n\tpre[class*='language-'] ::selection,\n\tcode[class*='language-']::selection,\n\tcode[class*='language-'] ::selection {\n\t\tbackground: rgba(255, 255, 255, 0.09); /* base02 */\n\t}\n\n\t/* Code blocks */\n\tpre[class*='language-'] {\n\t\tpadding: 1em;\n\t\tmargin: 0.5em 0 1.5em 0;\n\t\toverflow: auto;\n\t\tborder-radius: 0.3em;\n\t}\n\n\t:not(pre) > code[class*='language-'],\n\tpre[class*='language-'] {\n\t\tbackground-color: rgba(255, 255, 255, 0.05);\n\t}\n\n\t/* Inline code */\n\t:not(pre) > code[class*='language-'] {\n\t\tcolor: #84ffff;\n\t\tpadding: 0.1em;\n\t\tborder-radius: 0.3em;\n\t}\n\n\t.token.comment,\n\t.token.prolog,\n\t.token.doctype,\n\t.token.cdata {\n\t\tcolor: rgba(227,232,255,0.5); /* base1 */\n\t}\n\n\t.token.punctuation {\n\t\tcolor: rgba(227,232,255,0.6); /* base01 */\n\t}\n\n\t.namespace {\n\t\topacity: 0.7;\n\t}\n\n\t.token.property,\n\t.token.tag,\n\t.token.boolean,\n\t.token.number {\n\t\tcolor: #82aaff;\n\t}\n\n\t.token.constant,\n\t.token.symbol,\n\t.token.deleted {\n\t\tcolor: #c792ea /* blue */\n\t}\n\n\t.token.selector,\n\t.token.attr-name,\n\t.token.string,\n\t.token.char,\n\t.token.builtin,\n\t.token.url,\n\t.token.inserted {\n\t\tcolor: #c3e88d; /* cyan */\n\t}\n\n\t.token.entity {\n\t\tcolor: rgba(227,232,255,0.7);\n\t\tbackground: rgba(255, 255, 255, 0.05);\n\t}\n\n\t.token.atrule,\n\t.token.attr-value {\n\t\tcolor: #80cbc4;\n\t}\n\n\t.token.keyword {\n\t\tcolor: #f07178;\n\t\tfont-style: italic;\n\t}\n\n\t.token.function,\n\t.token.class-name {\n\t\tcolor: #ffcb6b; /* yellow */\n\t}\n\n\t.token.regex,\n\t.token.important,\n\t.token.variable {\n\t\tcolor: #f78c6c; /* orange */\n\t}\n\n\t.token.important,\n\t.token.bold {\n\t\tfont-weight: bold;\n\t}\n\t.token.italic {\n\t\tfont-style: italic;\n\t}\n\n\t.token.entity {\n\t\tcursor: help;\n\t}\n\n\t.gatsby-highlight-code-line {\n\t\t/* Use a hex code since rgba causes weird overlays with multiple highlighted lines */\n\t\tbackground-color: #393939;\n\t\tdisplay: block;\n\t\tmargin-right: -1em;\n\t\tmargin-left: -1em;\n\t\tpadding-right: 1em;\n\t\tpadding-left: 0.75em;\n\t\tborder-left: 0.25em solid #f78c6c;\n\t}\n\n\t/**\n\t * Add back the container background-color, border-radius, padding, margin\n\t * and overflow that we removed from <pre>.\n\t */\n\t.gatsby-highlight {\n\t\tbackground-color: rgba(255, 255, 255, 0.05);\n\t\tborder-radius: 0.3em;\n\t\tmargin: 0.5em 0 1.5em 0;\n\t\tpadding: 1em;\n\t\toverflow: auto;\n\t}\n\n\t/**\n\t * Remove the default PrismJS theme background-color, border-radius, margin,\n\t * padding and overflow.\n\t * 1. Make the element just wide enough to fit its content.\n\t * 2. Always fill the visible space in .gatsby-highlight.\n\t * 3. Adjust the position of the line numbers\n\t */\n\t.gatsby-highlight pre[class*=\"language-\"] {\n\t\tbackground-color: transparent;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\toverflow: initial;\n\t\tfloat: left; /* 1 */\n\t\tmin-width: 100%; /* 2 */\n\t}\n")}),Object(a.d)("div",{css:Object(o.a)({color:u,zIndex:1,position:"relative",overflow:"hidden"}),className:"container",key:h},n)))}},215:function(t,n,e){"use strict";e.r(n);e(28);var o=e(0),a=e.n(o),r=e(102);n.default=function(t){var n=t.location,e=t.pageResources;return e?a.a.createElement(r.a,Object.assign({location:n,pageResources:e},e.json)):null}},216:function(t){t.exports={data:{site:{siteMetadata:{title:"Canastro's notes",description:"Software development (mainly javascript) blog written by Ricardo Canastro a Software Developer based in Porto, Portugal and currently working for dashdash.",author:"Ricardo Canastro"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-71508030e313c0c302bc.js.map