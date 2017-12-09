---
title: ESLint Configurations - Your Project, Your Rules!
tags:
  - dev environment
draft: false
date: "2017-12-07T17:00:00.000Z"
---

In the last couple of years I've been working in a few freelance and personal projects. At first I was happy just having the airbnb's eslint rules, but after a while I came up with a set of overrides to which I was more comfortable with.

I started copying those rules to all my projects, but once in a while I stumbled upon another rule that I wish to be added.

> ![Monkey Work](./monkey-work.jpg)
> Oh noo! Here comes the monkey work...

In each project I needed to figure out which rules were missing and add them manually. This had to be a manual process because I had no distinction between which rules were specific to the project in hand and which were general to all projects. Obviously, this was not very productive.

If you're facing a similar issue, I suggest you to create your own eslint configuration module.

### Create your npm module
1. Create your own module named `eslint-config-{name}`

2. Add your peer dependencies, in case you're extending airbnb it could be something like this:

#### package.json
```json
"peerDependencies": {
  "eslint-config-airbnb": ">16",
  "eslint-plugin-import": ">2",
  "eslint-plugin-jsx-a11y": ">6",
  "eslint-plugin-react": ">7",
  "eslint": ">4"
}
```


3. Add as many configuration files as you want, for example:
#### index.js
```javascript
    module.exports = {
        extends: ['airbnb'],
        parserOptions: {
            sourceType: 'module'
        },
        rules: {
            'comma-dangle': ['error', 'never'],
            'max-len': ['warn', 100, 4]
        }
    };
```

#### jsdoc.js
```javascript
module.exports = {
    rules: {
        'require-jsdoc': [
            'warn',
            {
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    FunctionDeclaration: true,
                    MethodDefinition: true
                }
            }
        ],
        'valid-jsdoc': [
            'warn',
            {
                requireReturn: false
            }
        ]
    }
};
```

4. [Publish your module to npm](https://docs.npmjs.com/getting-started/publishing-npm-packages)

### Usage
In the modules where you want to use these rules follow the following steps:
1. Install your eslint configuration module

```
npm install --save-dev eslint-config-{name}
```

2. Update your .eslintrc.js file
```javascript
    module.exports = {
        extends: [
            'eslint-config-{name}',
            'eslint-config-{name}/jsdoc'
        ],
        rules: {
            "import/no-extraneous-dependencies": "off"
        },
        globals: {
            graphql: false
        }
    }
```

3. Done!

### Extra - Scoped Modules
If you, like me, don't feel inspired on a name for your module, or simply don't want a module your (or your company's name) you can just use scoped modules.

In order to achieve this you need to change the project's name on the package.json into something like: `@canastro/eslint-config` and publish like: `npm publish --access=public`.

To use the eslint config in a scoped module you have to install your module `npm i --save-dev @canastro/eslint-config` and update your extends to something in this fashion:
```javascript
extends: [
    '@canastro/eslint-config',
    '@canastro/eslint-config/jsdoc',
    '@canastro/eslint-config/react',
],
```

### Resources
* [ESLint Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
* [ESLint Config AirBNB](https://www.npmjs.com/package/eslint-config-airbnb)
* [NPM Publishing packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [NPM scoped packages](https://www.npmjs.com/docs/orgs/publishing-an-org-scoped-package.html)
* [My own config](https://github.com/canastro/eslint-config)
