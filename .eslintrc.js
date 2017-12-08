module.exports = {
    extends: [
        '@canastro/eslint-config',
        '@canastro/eslint-config/jsdoc',
        '@canastro/eslint-config/react',
    ],
    rules: {
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off"
    },
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        graphql: false,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
}
