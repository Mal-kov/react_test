var webpack = require('webpack');

module.exports = {

    entry: "./src/index.js",
    output: {
        path: __dirname + '/publuc',
        filename: "bundle.js"
    },
};