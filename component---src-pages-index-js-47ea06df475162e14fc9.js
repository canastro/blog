(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{185:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"pageQuery",function(){return k});var n=a(55),r=a.n(n),i=(a(195),a(0),a(4)),o=a.n(i),s=a(189),l=a(210),c=a.n(l),d=a(203),m=a(192),u=a(193),p=a(204),f=a(191),g={post:{marginBottom:Object(f.a)(2)},h3:{marginTop:Object(f.a)(.25),marginBottom:Object(f.a)(.25)},link:{boxShadow:"none"},p:{marginBottom:15},tags:{display:"flex"},titleWrapper:{marginBottom:Object(f.a)(.25)},subtitle:{color:"black",fontWeight:700}},b=function(t){var a=t.data,n=t.location,i=a.site.siteMetadata,o=i.title,l=i.keywords,f=a.allMarkdownRemark.edges;return e.createElement(m.a,{location:n,title:o},e.createElement(u.a,{title:"All posts",keywords:l}),e.createElement(d.a,null),f.map(function(t){var a=t.node,n=a.frontmatter,i=n.subtitle,o=n.path,l=n.title,d=void 0===l?a.fields.slug:l,m=a.frontmatter.tags.map(function(e){return{text:e,link:"/tags/"+c()(e)+"/"}});return e.createElement("div",{css:g.post,key:a.fields.slug},e.createElement("small",null,a.frontmatter.date),e.createElement("div",{css:g.titleWrapper},e.createElement("h3",{css:g.h3},e.createElement(s.Link,{css:g.link,to:o},d)),i&&e.createElement("span",{css:g.subtitle},i)),e.createElement("p",{css:g.p,dangerouslySetInnerHTML:{__html:a.excerpt}}),e.createElement("div",{css:g.tags},m.map(function(t){return e.createElement(p.a,r()({key:t.text},t))})))}))};b.propTypes={data:o.a.object.isRequired,location:o.a.object.isRequired},t.default=b;var k="694252979"}.call(this,a(81))},204:function(e,t,a){"use strict";(function(e){a(195),a(0);var n=a(4),r=a.n(n),i=a(189),o={root:{display:"flex",alignItems:"center",border:"1px solid #007acc",borderRadius:5,padding:"0 5px",marginRight:5,"&:hover":{backgroundColor:"#e6f5ff"}},a:{boxShadow:"none",fontSize:"0.75rem"}},s=function(t){var a=t.link,n=t.text;return e.createElement("div",{css:o.root},e.createElement(i.Link,{css:o.a,to:a},n))};s.propTypes={text:r.a.string.isRequired,link:r.a.string.isRequired},t.a=s}).call(this,a(81))}}]);
//# sourceMappingURL=component---src-pages-index-js-47ea06df475162e14fc9.js.map