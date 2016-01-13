"use strict";

var gulp = require("gulp"),
    inject = require("gulp-inject");

var config = require("./config")();

gulp.task("default", ["serve-spec"]);

gulp.task("inject", function () {
    
    gulp.src(config.specRunnerFile)
        .pipe(inject(gulp.src(config.testFiles)))
        .pipe(gulp.dest(config.tests));
});
