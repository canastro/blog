(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return x}),n.d(e,"StaticQueryContext",function(){return b}),n.d(e,"StaticQuery",function(){return p});var r=n(8),o=n(0),a=n.n(o),i=n(4),c=n.n(i),u=n(151),s=n.n(u);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var f=n(154),l=n.n(f);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var b=a.a.createContext({}),p=function(t){return Object(r.c)(b.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(r.c)("div",null,"Loading (StaticQuery)")})};function x(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r={primary:"#222222",orange:"#f29d0b",gray:"#f1f5f7",white:"#fff"},o={title:{color:r.white},subtitle:{color:r.white},link:{color:r.orange},body:{color:r.gray},blockquote:{color:r.gray}}},154:function(t,e,n){var r;t.exports=(r=n(159))&&r.default||r},156:function(t,e,n){"use strict";n.d(e,"b",function(){return f}),n.d(e,"a",function(){return l});n(155);var r=n(164),o=n.n(r),a=n(165),i=n.n(a),c=n(8),u=n(153);i.a.overrideThemeStyles=function(){return{h1:{color:u.b.title.color},"h2, h3, h4":{color:u.b.subtitle.color},blockquote:{color:u.b.blockquote.color},a:{color:u.b.link.color},"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var s=new o.a(i.a);var f=function(t){var e=s.scale(t);return Object(c.b)("font-size:",e.fontSize,";line-height:",e.lineHeight,";")},l=s.rhythm},157:function(t,e,n){"use strict";n(155),n(162);var r=n(8),o=(n(0),n(4)),a=n.n(o),i=n(152),c=(n(163),n(160),n(153)),u=n(156),s=Object(r.b)("body{background:",c.a.primary,";color:",c.b.body.color,";}"),f={root:Object(r.b)("margin-left:auto;margin-right:auto;max-width:",Object(u.a)(30),";padding:",Object(u.a)(1.5)," ",Object(u.a)(.75),";"),h1:Object(r.b)(Object(u.b)(1.25)," margin-bottom:",Object(u.a)(1),";margin-top:0;"),h3:Object(r.b)("font-family:Montserrat,sans-serif;margin-top:0;margin-bottom:",Object(u.a)(-1),";"),link:{name:"yckaeb",styles:"box-shadow:none;text-decoration:none;color:inherit;"}},l=function(t){var e,n=t.location,o=t.title,a=t.children;return e="/blog/"===n.pathname||n.pathname.startsWith("/blog/tags")?Object(r.c)("h1",{css:f.h1},Object(r.c)(i.Link,{css:f.link,to:"/"},o)):Object(r.c)("h3",{css:f.h3},Object(r.c)(i.Link,{css:f.link,to:"/"},o)),Object(r.c)("div",{css:f.root},Object(r.c)(r.a,{styles:s}),e,a)};l.propTypes={location:a.a.object.isRequired,title:a.a.string.isRequired,children:a.a.any.isRequired},e.a=l},158:function(t,e,n){"use strict";var r=n(8),o=n(161),a=(n(0),n(4)),i=n.n(a),c=n(166),u=n.n(c),s=n(152),f=function(t){var e=t.description,n=t.lang,a=t.meta,i=t.keywords,c=t.title;return Object(r.c)(s.StaticQuery,{query:"4017075492",render:function(t){var o=e||t.site.siteMetadata.description;return Object(r.c)(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:o})};f.defaultProps={lang:"en",meta:[],keywords:[]},f.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=f},159:function(t,e,n){"use strict";n.r(e);n(51);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(52),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},160:function(t,e,n){},161:function(t){t.exports={data:{site:{siteMetadata:{title:"Canastro's notes",description:"Software development (mainly javascript) blog written by Ricardo Canastro a Software Developer based in Porto, Portugal and currently working for dashdash.",author:"Ricardo Canastro"}}}}},167:function(t,e,n){"use strict";var r=n(8),o=n(169),a=(n(0),n(152)),i=n(174),c=n(156),u={root:Object(r.b)("display:flex;flex-direction:column;margin-bottom:",Object(c.a)(1),";"),social:{name:"12f8cuf",styles:"display:flex;justify-content:space-around;width:150px;align-self:center;"}};e.a=function(){return Object(r.c)(a.StaticQuery,{query:"3268991543",render:function(t){var e=t.site.siteMetadata.social;return Object(r.c)("div",{css:u.root},Object(r.c)("div",{css:u.social},Object(r.c)("a",{title:"twitter",href:e.twitter},Object(r.c)(i.c,null)),Object(r.c)("a",{title:"linkedin",href:e.linkedin},Object(r.c)(i.a,null)),Object(r.c)("a",{title:"stackoverflow",href:e.stackoverflow},Object(r.c)(i.b,null))))},data:o})}},169:function(t){t.exports={data:{site:{siteMetadata:{author:"Ricardo Canastro",social:{linkedin:"//www.linkedin.com/in/ricardocanastro",stackoverflow:"//stackoverflow.com/users/236205/canastro",twitter:"//www.twitter.com/canastro"}}}}}},170:function(t,e,n){var r=n(192).Symbol;t.exports=r},172:function(t,e,n){var r=n(186)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=r},173:function(t,e,n){var r=n(191);t.exports=function(t){return null==t?"":r(t)}},186:function(t,e,n){var r=n(187),o=n(188),a=n(201),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(a(o(e).replace(i,"")),t,"")}}},187:function(t,e){t.exports=function(t,e,n,r){var o=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}},188:function(t,e,n){var r=n(189),o=n(173),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(a,r).replace(i,"")}},189:function(t,e,n){var r=n(190)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},190:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},191:function(t,e,n){var r=n(170),o=n(194),a=n(195),i=n(196),c=1/0,u=r?r.prototype:void 0,s=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-c?"-0":n}},192:function(t,e,n){var r=n(193),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},193:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(75))},194:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},195:function(t,e){var n=Array.isArray;t.exports=n},196:function(t,e,n){var r=n(197),o=n(200),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==a}},197:function(t,e,n){var r=n(170),o=n(198),a=n(199),i="[object Null]",c="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:i:u&&u in Object(t)?o(t):a(t)}},198:function(t,e,n){var r=n(170),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(u){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},199:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},200:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},201:function(t,e,n){var r=n(202),o=n(203),a=n(173),i=n(204);t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?o(t)?i(t):r(t):t.match(e)||[]}},202:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},203:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},204:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",o="\\d+",a="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+i+"|"+c+")",d="(?:"+f+"|"+c+")",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,s].join("|")+")[\\ufe0e\\ufe0f]?"+b+")*"),x="(?:"+[a,u,s].join("|")+")"+p,g=RegExp([f+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,f,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,f+l,"$"].join("|")+")",f+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,x].join("|"),"g");t.exports=function(t){return t.match(g)||[]}}}]);
//# sourceMappingURL=2-9242936936f46389ca16.js.map