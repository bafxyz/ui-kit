const babelLoader = require('web-chunks/dist/loaders/babel').default
const sassLoader = require('web-chunks/dist/loaders/sass').default
const rawLoader = require('web-chunks/dist/loaders/raw').default

module.exports = async ({ config, mode }) => ({
    ...config,
    module: { ...config.module, rules: [babelLoader(), sassLoader(), rawLoader()] },
    resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, '.ts', '.tsx', 'raw.md'],
        alias: {
            ...config.resolve.alias,
            '~': process.cwd() + '/src',
            '@': process.cwd() + '/node_modules'
        }
    }
})
