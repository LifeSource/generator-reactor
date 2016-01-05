"use strict";

var generators  = require("yeoman-generator"),
    _ = require("lodash"),
    path = require('path'),
    yosay = require('yosay'),
    chalk = require('chalk'),
    config = require("../../config")();

module.exports = generators.Base.extend({

    constructor: function () {

        generators.Base.apply(this, arguments);

        this.argument('appName', { type: String, required: false });
        this.appName = _.camelCase(this.appName);

    },

    initializing: function () {
        this.log(yosay("Welcome to my ReactJS generator!"));
    },

    prompting: function () {

        var done = this.async();
        if (this.appName) { return; }

        var prompts = [config.appNamePrompt];

        this.prompt(prompts, function (answers) {
            this.config.set("appName", answers.appName);
            this.config.save();
            done();
        }.bind(this));
    },

    configuring: function () {

    },

    default: function () {

    },

    writing: {

        settings: function () {
            this.directory("settings", "./");
        },

        packageJson: function () {
            this.fs.copyTpl(
                this.templatePath("json/_package.json"),
                this.destinationPath("./package.json"),
                { appName: this.config.get("appName") }
            );
        },

        scripts: function() {
            this.copy("js/app.js", "./src/client/app/app.js");       
        },

        html: function () {
            this.fs.copyTpl(
            this.templatePath("html/index.html"),
            this.destinationPath("./src/client/index.html"),
            { appName: this.config.get("appName") }
        );
        }

    },

    install: function () {
        this.installDependencies();
    },

    end: function () {
        this.log(chalk.green.bold("\n----->>> Mission Accomplished! <<<-----\n"));
    }

});
