const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    //devTool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
});