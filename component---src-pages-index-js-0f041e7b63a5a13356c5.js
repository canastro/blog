(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(148),l=a(155),c=a(152),s=a(153),d=a(149),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(i.a.Component);t.default=u;var p="1623555389"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(150),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var n=a(157),r=a.n(n),A=a(158),i=a.n(A);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var l=o.rhythm,c=o.scale},150:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(53),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";a(159);var n=a(7),r=a.n(n),A=(a(32),a(0)),i=a.n(A),o=a(148),l=(a(160),a(149)),c={root:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},h1:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0}),h3:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)},link:{boxShadow:"none",textDecoration:"none",color:"inherit"},footer:{display:"flex",alignItems:"center",justifyContent:"center",padding:Object(l.a)(.75),backgroundColor:"#000",color:"#fff"}},s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/blog/"===a.pathname?i.a.createElement("h1",{style:c.h1},i.a.createElement(o.Link,{style:c.link,to:"/"},n)):i.a.createElement("h3",{style:c.h3},i.a.createElement(o.Link,{style:c.link,to:"/"},n)),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:c.root},e,r),i.a.createElement("footer",{style:c.footer},i.a.createElement("span",null,"© 2019, Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},t}(i.a.Component);t.a=s},153:function(e,t,a){"use strict";var n=a(154),r=a(0),A=a.n(r),i=a(4),o=a.n(i),l=a(161),c=a.n(l),s=a(148);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return A.a.createElement(s.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return A.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var u="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Canastro's notes",description:"A blog!",author:"Ricardo Canastro"}}}}},155:function(e,t,a){"use strict";var n=a(156),r=a(0),A=a.n(r),i=a(148),o=a(162),l=a.n(o),c=a(165),s=a(149),d={root:{display:"flex",flexDirection:"column",marginBottom:Object(s.a)(2.5)},gravatar:{marginRight:Object(s.a)(.5),marginBottom:0},description:{flex:1},social:{display:"flex",justifyContent:"space-around",width:150,alignSelf:"center"}};var u="4007731267";t.a=function(){return A.a.createElement(i.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return A.a.createElement("div",{style:d.root},A.a.createElement("div",{style:{display:"flex"}},A.a.createElement("div",{style:d.gravatar},A.a.createElement(l.a,{size:75,email:"ricardocanastro@gmail.com"})),A.a.createElement("p",{style:d.description},A.a.createElement("strong",null,'"Canastro\'s Notes"'),", is a software development (mainly javascript) blog written by"," ",A.a.createElement("strong",null,a)," a Software Developer based in Porto, Portugal and currently working for dashdash.")),A.a.createElement("div",{style:d.social},A.a.createElement("a",{title:"twitter",href:n.twitter},A.a.createElement(c.c,null)),A.a.createElement("a",{title:"linkedin",href:n.linkedin},A.a.createElement(c.a,null)),A.a.createElement("a",{title:"stackoverflow",href:n.stackoverflow},A.a.createElement(c.b,null))))},data:n})}},156:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAABtTuWpVlGTeDJ0HAG/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAgMTABEjJP/aAAgBAQABBQJzpYGe3LyGZxGLsY+mY8Yzof/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBIh/9oACAEDAQE/AcKjj//EABkRAAEFAAAAAAAAAAAAAAAAAAABEBIhMf/aAAgBAgEBPwGyQmN//8QAIBAAAQIFBQAAAAAAAAAAAAAAAQARAgMQEiExQWGBkf/aAAgBAQAGPwItqmMdwNLT4n2JbCwQU/Kl90//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFR/9oACAEBAAE/IUVXGRfSl5yZEWkVrGwnd6EDTA+sdXqEbIVcO+k//9oADAMBAAIAAwAAABD76AH/xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhMVH/2gAIAQMBAT8QhKbI9NMWH//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBEhUf/aAAgBAgEBPxBNtovyBrT/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV04hQo4lO/wAzyyjjEGw+cZbkILxecbfXBH7zaeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/blog/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg",srcSet:"/blog/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg 1x,\n/blog/static/4f27694bd7811d13157e5e488ad64f43/0b804/profile-pic.jpg 1.5x,\n/blog/static/4f27694bd7811d13157e5e488ad64f43/753c3/profile-pic.jpg 2x,\n/blog/static/4f27694bd7811d13157e5e488ad64f43/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Ricardo Canastro",social:{twitter:"//www.twitter.com/canastro"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-0f041e7b63a5a13356c5.js.map