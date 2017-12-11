webpackJsonp([0xb6ff9c619133],{566:function(n,s){n.exports={data:{site:{siteMetadata:{author:"Ricardo Canastro",homeCity:"Porto"}},markdownRemark:{html:'<p>In the last couple of years I’ve been working in a few freelance and personal projects. At first I was happy just having the airbnb’s eslint rules, but after a while I came up with a set of overrides to which I was more comfortable with.</p>\n<p>I started copying those rules to all my projects, but once in a while I stumbled upon another rule that I wish to be added.</p>\n<blockquote>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/monkey-work-b526965f52816cf88f237eaefaea3cc0-94e9d.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.16666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB13J2aMCIf//EABwQAAICAgMAAAAAAAAAAAAAAAEDAhIEESExM//aAAgBAQABBQJ76RS60QdjM9ojgdf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBAMAAAAAAAAAAAAAAAAQAAEhIjEycf/aAAgBAQAGPwKuVOxbg//EABoQAAIDAQEAAAAAAAAAAAAAAAABESExQbH/2gAIAQEAAT8hrqT6Y+iuMZdRB4MQnJJDI//aAAwDAQACAAMAAAAQnD//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAn/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQVHx/9oACAEBAAE/ECVBaFdh0HcIS/ijJzMzkZagK4PtE9nYV5AFXk//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Monkey Work"\n        title=""\n        src="/blog/static/monkey-work-b526965f52816cf88f237eaefaea3cc0-2b94f.jpg"\n        srcset="/blog/static/monkey-work-b526965f52816cf88f237eaefaea3cc0-abfcc.jpg 148w,\n/blog/static/monkey-work-b526965f52816cf88f237eaefaea3cc0-99059.jpg 295w,\n/blog/static/monkey-work-b526965f52816cf88f237eaefaea3cc0-2b94f.jpg 590w,\n/blog/static/monkey-work-b526965f52816cf88f237eaefaea3cc0-94e9d.jpg 600w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nOh noo! Here comes the monkey work…</p>\n</blockquote>\n<p>In each project I needed to figure out which rules were missing and add them manually. This had to be a manual process because I had no distinction between which rules were specific to the project in hand and which were general to all projects. Obviously, this was not very productive.</p>\n<p>If you’re facing a similar issue, I suggest you to create your own eslint configuration module.</p>\n<h3>Create your npm module</h3>\n<ol>\n<li>\n<p>Create your own module named <code>eslint-config-{name}</code></p>\n</li>\n<li>\n<p>Add your peer dependencies, in case you’re extending airbnb it could be something like this:</p>\n</li>\n</ol>\n<h4>package.json</h4>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token property">"peerDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"eslint-config-airbnb"</span><span class="token operator">:</span> <span class="token string">">16"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-import"</span><span class="token operator">:</span> <span class="token string">">2"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-jsx-a11y"</span><span class="token operator">:</span> <span class="token string">">6"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-react"</span><span class="token operator">:</span> <span class="token string">">7"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">">4"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ol start="3">\n<li>\n<p>Add as many configuration files as you want, for example:</p>\n<h4>index.js</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    parserOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        sourceType<span class="token punctuation">:</span> <span class="token string">\'module\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'comma-dangle\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> <span class="token string">\'never\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token string">\'max-len\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'warn\'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n</li>\n</ol>\n<h4>jsdoc.js</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'require-jsdoc\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                require<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    ArrowFunctionExpression<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    ClassDeclaration<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    FunctionDeclaration<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    MethodDefinition<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token string">\'valid-jsdoc\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                requireReturn<span class="token punctuation">:</span> <span class="token boolean">false</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ol start="4">\n<li><a href="https://docs.npmjs.com/getting-started/publishing-npm-packages">Publish your module to npm</a></li>\n</ol>\n<h3>Usage</h3>\n<p>In the modules where you want to use these rules follow the following steps:</p>\n<ol>\n<li>Install your eslint configuration module</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install --save-dev eslint-config-{name}</code></pre>\n      </div>\n<ol start="2">\n<li>\n<p>Update your .eslintrc.js file</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token keyword">extends</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token string">\'airbnb\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'eslint-config-{name}\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'eslint-config-{name}/jsdoc\'</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"import/no-extraneous-dependencies"</span><span class="token punctuation">:</span> <span class="token string">"off"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    globals<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        graphql<span class="token punctuation">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>Done!</p>\n</li>\n</ol>\n<h3>Extra - Scoped Modules</h3>\n<p>If you, like me, don’t feel inspired on a name for your module, or simply don’t want a module your (or your company’s name) you can just use scoped modules.</p>\n<p>In order to achieve this you need to change the project’s name on the package.json into something like: <code>@canastro/eslint-config</code> and publish like: <code>npm publish --access=public</code>.</p>\n<p>To use the eslint config in a scoped module you have to install your module <code>npm i --save-dev @canastro/eslint-config</code> and update your extends to something in this fashion:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">extends</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token string">\'airbnb\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'@canastro/eslint-config\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'@canastro/eslint-config/jsdoc\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'@canastro/eslint-config/react\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<h3>Resources</h3>\n<ul>\n<li><a href="https://eslint.org/docs/developer-guide/shareable-configs">ESLint Shareable Configs</a></li>\n<li><a href="https://www.npmjs.com/package/eslint-config-airbnb">ESLint Config AirBNB</a></li>\n<li><a href="https://docs.npmjs.com/getting-started/publishing-npm-packages">NPM Publishing packages</a></li>\n<li><a href="https://www.npmjs.com/docs/orgs/publishing-an-org-scoped-package.html">NPM scoped packages</a></li>\n<li><a href="https://github.com/canastro/eslint-config">My own config</a></li>\n</ul>',excerpt:"In the last couple of years I’ve been working in a few freelance and personal projects. At first I was happy just having the airbnb’s eslint…",fields:{tagSlugs:["/tags/dev-environment/","/tags/eslint/"]},frontmatter:{title:"ESLint Configurations - Your Project, Your Rules!",tags:["dev environment","eslint"],date:"December 07, 2017"}}},pathContext:{slug:"/2017-12-07---eslint-configuration/"}}}});
//# sourceMappingURL=path---2017-12-07-eslint-configuration-17d88b4375192e389c4a.js.map