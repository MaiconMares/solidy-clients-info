const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', //It shouldn't be used in Production
    devServer: {
        contentBase: './dist',
        writeToDisk: true,
    },
});