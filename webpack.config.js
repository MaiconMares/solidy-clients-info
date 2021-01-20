const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Webpack uses this to work with directories
const path = require('path');

module.exports = {
    entry: './src/javascript/index.js',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },

    // Path to your entry point. From this file Webpack will begin his work
    output: {

        // Webpack will bundle all JavaScript into this file
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //It tells Webpack how to transform each type of file
    module: {
        rules: [
            
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
    ],

    // Default mode for Webpack is production.
    mode: 'development'
}