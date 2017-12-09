---
title: With the Power of Flow Runtime!
tags:
  - dev environment
draft: false
date: "2017-12-08T22:00:00.000Z"
readNext: /eslint-configuration/
---

# What is Flow?

Flow is a static type checker for javascript that allows you to:
* Code **faster**: Flow identifies problems as you code. Stop wasting your time guessing and checking;
* Code **smarter**: Flow understands your code and makes its knowledge available, enabling other smart tools to be built on top of Flow;
* Code **confidently**: Flow helps you refactor safely;
* Code **bigger**: Flow can help prevent bad rebases. Flow can help protect your carefully designed library from your coworkers. And Flow can help you understand the code you wrote six months ago.

Text *extracted* from *[flow.org](flow.org)*

# What is Flow Runtime?

Flow runtime annotates your code with type validations to be ran in runtime.
Some type errors cannot be detected on compilation time but only on runtime, imagine the follow code:

```javascript
const getValue = (input: Object, shouldParse: boolean): number =>
    shouldParse ? Number(input.value) : input.value;
```
If the `input.value` is a string and the `shouldParse` is passed as `false` then the output of the given function is a string. This type error can only be detected in runtime.

**Flow-runtime to the rescue!**

The original code is compiled to the following:
```javascript
const getValue = _flowRuntime2.default.annotate(function (input, shouldParse) {
    const _inputType = _flowRuntime2.default.object();
    const _shouldParseType = _flowRuntime2.default.boolean();
    const _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.number());

    _flowRuntime2.default.param('input', _inputType).assert(input);
    _flowRuntime2.default.param('shouldParse', _shouldParseType).assert(shouldParse);

    return _returnType2.assert(shouldParse ? Number(input.value) : input.value);
}, _flowRuntime2.default.function(
    _flowRuntime2.default.param('input', _flowRuntime2.default.object()),
    _flowRuntime2.default.param('shouldParse', _flowRuntime2.default.boolean()),
    _flowRuntime2.default.return(_flowRuntime2.default.number())
));
```

In case of type mismatch, the `_returnType2.assert` calls will throw a error. In this case, if the `shouldParse` is false and the `input.value` is a string then, the following error would be thrown:
```error
Uncaught TypeError: Return Type must be a number
Expected: number
Actual Value: "test-string"
Actual Type: string
```

# Flow & flow-runtime annotations in production builds?
No, no, definitely not! All flow and flow-runtime annotations should be removed for a production build.

`babel-plugin-transform-flow-strip-types` module will remove all flow annotations and `babel-plugin-flow-runtime` should only be configured for the `development` environment.

Following a configuration similar with this, we will achieve a bundle clean of any flow annotation:
```json
{
    "presets": [
        ["env", {"targets": {"browsers": ["IE >= 11"]}}]
    ],
    "plugins": ["transform-flow-strip-types"],
    "env": {
        "development": {
            "plugins": [
                ["flow-runtime", {
                    "assert": true,
                    "annotate": true
                }]
            ]
        }
    }
}
```

# How to validate flow types on build?
In order to have flow type errors during build process you shoud install `babel-plugin-flow-runtime` and add the plugin to your `webpack.config.js` file.

```javascript
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader' }
		]
	},
	plugins: [new FlowBabelWebpackPlugin()]
};
```

# Setup a playground
Lets setup a dummy project just to get you started with flow.

> If you, like me, prefer to see code instead of steps to achieve the final goal, check  a dummy project here: [flow-runtime-demo](https://github.com/canastro/flow-runtime-demo)

1. Install dependencies

```
npm i -g webpack

npm i -D babel-cli babel-core
npm i -D babel-loader babel-preset-env

npm i -D flow-runtime
npm i -D babel-preset-env babel-plugin-flow-runtime
npm i -D babel-plugin-transform-flow-strip-types  
npm i -D flow-babel-webpack-plugin
```

2. Create a .babelrc file (as explained above)

3. Create a webpack.config.js file (as explained above)

4. Create your entry.js (or whatever you want to call it) and index.html files

5. Add flow stuff!

Here you go, you have simple setup of webpack + flow + flow-runtime, now go bananas and make something useful!

![Go Bananas](./go-go-bananas.jpg)

# Resources
* [flow](https://flow.org/)
* [flow-runtime](https://codemix.github.io/flow-runtime/#/)
* [flow-runtime-demo](https://github.com/canastro/flow-runtime-demo)
