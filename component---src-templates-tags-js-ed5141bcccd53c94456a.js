(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{203:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return s});var n=a(9),r=(a(0),a(207)),o=a(212),i=a(213),c=a(225);e.default=function(t){var e=t.pageContext,a=t.data,s=t.location,d=a.site.siteMetadata.title,l=e.tag,u=a.allMarkdownRemark,b=u.edges,f=u.totalCount,j=f+" post"+(1===f?"":"s")+' tagged with "'+l+'"';return Object(n.d)(o.a,{location:s,title:d},Object(n.d)(i.a,{title:l,description:j}),Object(n.d)(c.a,null),Object(n.d)("h4",null,j),Object(n.d)("ul",null,b.map(function(t){var e=t.node.frontmatter,a=e.path,o=e.title;return Object(n.d)("li",{key:a},Object(n.d)(r.a,{to:a},o))})),Object(n.d)(r.a,{to:"/tags"},"All tags"))};var s="1895758229"},207:function(t,e,a){"use strict";a.d(e,"b",function(){return l});var n=a(9),r=a(0),o=a.n(r),i=a(74),c=a.n(i);a.d(e,"a",function(){return c.a});a(208),a(11).default.enqueue;var s=o.a.createContext({});function d(t){var e=t.staticQueryData,a=t.data,r=t.query,i=t.render,c=a?a.data:e[r]&&e[r].data;return Object(n.d)(o.a.Fragment,null,c&&i(c),!c&&Object(n.d)("div",null,"Loading (StaticQuery)"))}var l=function(t){var e=t.data,a=t.query,r=t.render,o=t.children;return Object(n.d)(s.Consumer,null,function(t){return Object(n.d)(d,{data:e,query:a,render:r||o,staticQueryData:t})})}},208:function(t,e,a){var n;t.exports=(n=a(214))&&n.default||n},209:function(t,e,a){"use strict";a.d(e,"b",function(){return d}),a.d(e,"a",function(){return l});var n=a(222),r=a.n(n),o=a(223),i=a.n(o),c=a(9);delete i.a.googleFonts;var s=new r.a(i.a);var d=function(t){var e=s.scale(t);return Object(c.c)("font-size:",e.fontSize,";line-height:",e.lineHeight,";")},l=s.rhythm},211:function(t,e,a){"use strict";var n=a(0),r=Object(n.createContext)();e.a=r},212:function(t,e,a){"use strict";a(210),a(221);var n=a(9),r=a(0),o=a(207),i=a(217),c=a(211),s=a(209),d={root:Object(n.c)("position:relative;margin-left:auto;margin-right:auto;max-width:",Object(s.a)(30),";padding:",Object(s.a)(1.5)," ",Object(s.a)(.75),";"),h1:Object(n.c)(Object(s.b)(1.25)," margin-bottom:",Object(s.a)(1),";margin-top:0;"),h3:Object(n.c)("font-family:Montserrat,sans-serif;margin-top:0;margin-bottom:",Object(s.a)(-1),";"),link:{name:"yckaeb",styles:"box-shadow:none;text-decoration:none;color:inherit;"},toggleTheme:function(t){return Object(n.c)("position:absolute;right:0;top:",Object(s.a)(1.5),";border:0;background:",t.color,";color:",t.background,";height:40px;width:40px;border-radius:50%;")}};e.a=function(t){var e,a=t.location,s=t.title,l=t.children,u=Object(r.useContext)(c.a),b=u.theme,f=u.toggleTheme;return e="/blog/"===a.pathname||a.pathname.startsWith("/blog/tags")?Object(n.d)("h1",{css:d.h1},Object(n.d)(o.a,{css:d.link,to:"/"},s)):Object(n.d)("h3",{css:d.h3},Object(n.d)(o.a,{css:d.link,to:"/"},s)),Object(n.d)("div",{css:d.root},e,Object(n.d)("button",{css:d.toggleTheme,onClick:f},"light"===b?Object(n.d)(i.a,null):Object(n.d)(i.c,null)),l)}},213:function(t,e,a){"use strict";var n=a(9),r=a(215),o=(a(0),a(224)),i=a.n(o),c=a(207),s=function(t){var e=t.description,a=t.lang,o=t.meta,s=t.keywords,d=t.title;return Object(n.d)(c.b,{query:"4017075492",render:function(t){var r=e||t.site.siteMetadata.description;return Object(n.d)(i.a,{htmlAttributes:{lang:a},title:d,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:d},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(o)})},data:r})};s.defaultProps={lang:"en",meta:[],keywords:[]},e.a=s},214:function(t,e,a){"use strict";a.r(e);a(28);var n=a(0),r=a.n(n),o=a(102);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null}},215:function(t){t.exports={data:{site:{siteMetadata:{title:"Canastro's notes",description:"Software development (mainly javascript) blog written by Ricardo Canastro a Software Developer based in Porto, Portugal and currently working for dashdash.",author:"Ricardo Canastro"}}}}},225:function(t,e,a){"use strict";var n=a(9),r=a(227),o=(a(0),a(207)),i=a(217),c=a(209),s={root:Object(n.c)("display:flex;flex-direction:column;margin-bottom:",Object(c.a)(1),";"),social:{name:"12f8cuf",styles:"display:flex;justify-content:space-around;width:150px;align-self:center;"}};e.a=function(){return Object(n.d)(o.b,{query:"3268991543",render:function(t){var e=t.site.siteMetadata.social;return Object(n.d)("div",{css:s.root},Object(n.d)("div",{css:s.social},Object(n.d)("a",{title:"twitter",href:e.twitter},Object(n.d)(i.e,null)),Object(n.d)("a",{title:"linkedin",href:e.linkedin},Object(n.d)(i.b,null)),Object(n.d)("a",{title:"stackoverflow",href:e.stackoverflow},Object(n.d)(i.d,null))))},data:r})}},227:function(t){t.exports={data:{site:{siteMetadata:{author:"Ricardo Canastro",social:{linkedin:"//www.linkedin.com/in/ricardocanastro",stackoverflow:"//stackoverflow.com/users/236205/canastro",twitter:"//www.twitter.com/canastro"}}}}}}}]);
//# sourceMappingURL=component---src-templates-tags-js-ed5141bcccd53c94456a.js.map