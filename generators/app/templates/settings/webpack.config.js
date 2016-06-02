"use strict";

var config = require("./config")(),
    precss = require("precss"),
    autoprefixer = require("autoprefixer"),
    Webpack = require("webpack"),
    WebpackNotification = require("webpack-notifier"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: {
        app: [
            config.src + "/index.js"
        ]
    },
    //devtool: "source-map",
    output: {
        path: config.dist,
        filename: "/js/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: [config.src, config.tests],
                exclude: [config.nodeModules],
                query: {
                     plugins: ["transform-runtime"],
                     presets: ["es2015", "stage-0", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
            }
        ]
    },
    postcss: function() {
        return [autoprefixer({ browsers: "last 2 version" }), precss];
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".css", ".scss"]
    },
    plugins: [
        new Webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new ExtractTextPlugin("styles/[name].bundle.css"),
        new WebpackNotification()
    ]

};
