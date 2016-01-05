var path = require("path");

module.exports = function() {

        "use strict";

        var port = process.env.PORT || 3000,
            env = process.env.NODE_ENV || "dev";

        var root = path.resolve(__dirname, "./"),
            src = path.resolve(__dirname, "src"),
            dist = path.resolve(__dirname, "dist"),
            test = path.resolve(__dirname, "test"),
            nodeModules = path.resolve(__dirname, "node_modules");

        var config = {
            env: env,
            port: port,
            // Paths
            root: root,
            src: src,
            dist: dist,
            fonts: [],
            test: test,
            // Files
            index: root + "index.html",
            nodeModules: nodeModules,
            packages: ["./package.json"],
            // Karma
            karma: {
                files: test + "/index.js",
                exclude: [
                    nodeModules
                ],
                preprocessors: {


                }

            }

        };

        return config;
};
