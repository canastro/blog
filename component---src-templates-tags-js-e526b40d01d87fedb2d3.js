(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return d});var n=a(8),r=(a(0),a(4)),i=a.n(r),o=a(152),c=a(157),s=a(158),l=a(167),u=function(t){var e=t.pageContext,a=t.data,r=t.location,i=a.site.siteMetadata.title,u=e.tag,d=a.allMarkdownRemark,b=d.edges,p=d.totalCount,f=p+" post"+(1===p?"":"s")+' tagged with "'+u+'"';return Object(n.c)(c.a,{location:r,title:i},Object(n.c)(s.a,{title:u,description:f}),Object(n.c)(l.a,null),Object(n.c)("h4",null,f),Object(n.c)("ul",null,b.map(function(t){var e=t.node.frontmatter,a=e.path,r=e.title;return Object(n.c)("li",{key:a},Object(n.c)(o.Link,{to:a},r))})),Object(n.c)(o.Link,{to:"/tags"},"All tags"))};u.propTypes={pageContext:i.a.shape({tag:i.a.string.isRequired}),data:i.a.shape({allMarkdownRemark:i.a.shape({totalCount:i.a.number.isRequired,edges:i.a.arrayOf(i.a.shape({node:i.a.shape({frontmatter:i.a.shape({path:i.a.string.isRequired,title:i.a.string.isRequired})})}).isRequired)}),site:i.a.shape({siteMetadata:i.a.shape({title:i.a.string.isRequired})})}),location:i.a.object.isRequired},e.default=u;var d="1895758229"},152:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return g}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return f});var n=a(8),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(151),l=a.n(s);a.d(e,"Link",function(){return l.a}),a.d(e,"withPrefix",function(){return s.withPrefix}),a.d(e,"navigate",function(){return s.navigate}),a.d(e,"push",function(){return s.push}),a.d(e,"replace",function(){return s.replace}),a.d(e,"navigateTo",function(){return s.navigateTo});var u=a(154),d=a.n(u);a.d(e,"PageRenderer",function(){return d.a});var b=a(33);a.d(e,"parsePath",function(){return b.a});var p=i.a.createContext({}),f=function(t){return Object(n.c)(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.c)("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r});var n={primary:"#222222",orange:"#f29d0b",gray:"#f1f5f7",white:"#fff"},r={title:{color:n.white},subtitle:{color:n.white},link:{color:n.orange},body:{color:n.gray},blockquote:{color:n.gray}}},154:function(t,e,a){var n;t.exports=(n=a(159))&&n.default||n},156:function(t,e,a){"use strict";a.d(e,"b",function(){return u}),a.d(e,"a",function(){return d});a(155);var n=a(164),r=a.n(n),i=a(165),o=a.n(i),c=a(8),s=a(153);o.a.overrideThemeStyles=function(){return{h1:{color:s.b.title.color},"h2, h3, h4":{color:s.b.subtitle.color},blockquote:{color:s.b.blockquote.color},a:{color:s.b.link.color},"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var u=function(t){var e=l.scale(t);return Object(c.b)("font-size:",e.fontSize,";line-height:",e.lineHeight,";")},d=l.rhythm},157:function(t,e,a){"use strict";a(155),a(162);var n=a(8),r=(a(0),a(4)),i=a.n(r),o=a(152),c=(a(163),a(160),a(153)),s=a(156),l=Object(n.b)("body{background:",c.a.primary,";color:",c.b.body.color,";}"),u={root:Object(n.b)("margin-left:auto;margin-right:auto;max-width:",Object(s.a)(30),";padding:",Object(s.a)(1.5)," ",Object(s.a)(.75),";"),h1:Object(n.b)(Object(s.b)(1.25)," margin-bottom:",Object(s.a)(1),";margin-top:0;"),h3:Object(n.b)("font-family:Montserrat,sans-serif;margin-top:0;margin-bottom:",Object(s.a)(-1),";"),link:{name:"yckaeb",styles:"box-shadow:none;text-decoration:none;color:inherit;"}},d=function(t){var e,a=t.location,r=t.title,i=t.children;return e="/blog/"===a.pathname||a.pathname.startsWith("/blog/tags")?Object(n.c)("h1",{css:u.h1},Object(n.c)(o.Link,{css:u.link,to:"/"},r)):Object(n.c)("h3",{css:u.h3},Object(n.c)(o.Link,{css:u.link,to:"/"},r)),Object(n.c)("div",{css:u.root},Object(n.c)(n.a,{styles:l}),e,i)};d.propTypes={location:i.a.object.isRequired,title:i.a.string.isRequired,children:i.a.any.isRequired},e.a=d},158:function(t,e,a){"use strict";var n=a(8),r=a(161),i=(a(0),a(4)),o=a.n(i),c=a(166),s=a.n(c),l=a(152),u=function(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,c=t.title;return Object(n.c)(l.StaticQuery,{query:"4017075492",render:function(t){var r=e||t.site.siteMetadata.description;return Object(n.c)(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:r})};u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=u},159:function(t,e,a){"use strict";a.r(e);a(51);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},160:function(t,e,a){},161:function(t){t.exports={data:{site:{siteMetadata:{title:"Canastro's notes",description:"Software development (mainly javascript) blog written by Ricardo Canastro a Software Developer based in Porto, Portugal and currently working for dashdash.",author:"Ricardo Canastro"}}}}},167:function(t,e,a){"use strict";var n=a(8),r=a(169),i=(a(0),a(152)),o=a(174),c=a(156),s={root:Object(n.b)("display:flex;flex-direction:column;margin-bottom:",Object(c.a)(1),";"),social:{name:"12f8cuf",styles:"display:flex;justify-content:space-around;width:150px;align-self:center;"}};e.a=function(){return Object(n.c)(i.StaticQuery,{query:"3268991543",render:function(t){var e=t.site.siteMetadata.social;return Object(n.c)("div",{css:s.root},Object(n.c)("div",{css:s.social},Object(n.c)("a",{title:"twitter",href:e.twitter},Object(n.c)(o.c,null)),Object(n.c)("a",{title:"linkedin",href:e.linkedin},Object(n.c)(o.a,null)),Object(n.c)("a",{title:"stackoverflow",href:e.stackoverflow},Object(n.c)(o.b,null))))},data:r})}},169:function(t){t.exports={data:{site:{siteMetadata:{author:"Ricardo Canastro",social:{linkedin:"//www.linkedin.com/in/ricardocanastro",stackoverflow:"//stackoverflow.com/users/236205/canastro",twitter:"//www.twitter.com/canastro"}}}}}}}]);
//# sourceMappingURL=component---src-templates-tags-js-e526b40d01d87fedb2d3.js.map