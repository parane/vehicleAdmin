const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: ['./src/index.js'],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'es2015', {
                                        modules: false
                                    }
                                ],
                                'es2016',
                                'stage-2'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './dist',
        inline: true
    },
    node: {
        dns: 'mock',
        net: 'mock'
    },
    devtool: 'source-map'
}