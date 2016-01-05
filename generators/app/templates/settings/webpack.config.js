var config = require("./config")();

module.exports = {

    entry: [
        { bundle: config.src + "main.js" }
    ],
    output: {

        path: config.dist,
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel"],
                include: [config.src, config.test]
            },
            {
                test: /\.jsx$/,
                loaders: ["babel-loader", "jsx-loader"],
                include: [config.src, config.test]
            }
        ]
    }

};
