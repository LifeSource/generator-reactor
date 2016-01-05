var config = require("./config")(),
    WebpackNotification = require("webpack-notifier");

module.exports = {

    entry: {
        app: [
            config.src + "/index.js"
        ]
    },
    devtool: "exec-source-map",
    output: {
        path: config.dist,
        filename: "/js/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: [config.src, config.test],
                exclude: [config.nodeModules]
            },
            {
                test: /\.styl$/,
                loader: "style-loader!css-loader!stylus-loader"
            }
        ]
    },
    plugins: [
        new WebpackNotification()
    ]

};
