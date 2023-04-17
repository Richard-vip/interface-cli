const path = require('path');
module.exports = {
    entry: {
        main: path.resolve('src/index.tsx')
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
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
}