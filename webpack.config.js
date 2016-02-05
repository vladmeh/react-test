var webpack = require('webpack');
module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: './public/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
    ,devtool: 'source-map'
    ,resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js']
    }
    ,plugins: [
        new webpack.optimize.UglifyJsPlugin()
        ,new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]

};
