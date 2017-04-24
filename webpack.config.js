var webpack = require('webpack');

module.exports = {

    entry: "./src/index.js",
    output: {
        path: __dirname + '/publuc',
        filename: "bundle.js"
    },

    module: {
        loader: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    }
};