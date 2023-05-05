const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode === 'production' ? 'prod' : 'dev';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);


const webpackBaseConfig = {
    entry: {
        main: resolve('src/index.tsx')
    },
    output: {
        path: resolve(process.cwd(), 'dist'),
    },
    resolve: {
        alias: {
            '@pages': resolve('src/pages'),
            '@states': resolve('src/states'),
            '@hooks': resolve('src/hooks'),
        },
        extensions: ['.js', '.ts', '.tsx', 'jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'swc-loader',
                },
            },
        ],
    },
    plugins: [
        new Dotenv()
    ]
}

module.exports = merge.default(webpackBaseConfig, _mergeConfig);