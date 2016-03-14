var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
        hot: true,
        inline: true,
        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || '8080'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }
        ]
    }
}
