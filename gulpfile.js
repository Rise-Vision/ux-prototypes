(function (console) {
  "use strict";

  var bower = require("gulp-bower");
  var bump = require("gulp-bump");
  var colors = require("colors");
  var connect = require("gulp-connect");
  var del = require("del");
  var gulp = require("gulp");
  var jshint = require("gulp-jshint");
  var runSequence = require("run-sequence");
  var watch = require("gulp-watch");

  var jsFiles = ["js/**/*.js", "prototypes/**/*.js"],
    files = ["*.html", "bower_components/**/*", ,
      "partials/**/*.html", "prototypes/**/*.html", "prototypes/**/*.css"];

  gulp.task("bower-clean-install", ["clean-bower"], function(cb) {
    return bower().on("error", function(err) {
      console.log(err);
      cb();
    });
  });

  gulp.task("build", function(cb) {
    runSequence(["clean"], ["source", "images"], cb);
  });

  gulp.task("bump", function() {
    return gulp.src(["./package.json", "./bower.json"])
      .pipe(bump({type:"patch"}))
      .pipe(gulp.dest("./"));
  });

  gulp.task("clean", function (cb) {
    del(["./dist/**"], cb);
  });

  gulp.task("clean-bower", function(cb) {
    del(["./bower_components/**"], cb);
  });

  gulp.task("dev", function() {
    // Start a server
    connect.server({
      root: "",
      port: 3000,
      livereload: true
    });
    console.log("[CONNECT] Listening on port 3000".yellow.inverse);
    // Watch HTML files for changes
    console.log("[CONNECT] Watching HTML files for live-reload".blue);
    watch({
      glob: ["./partials/**/*.html", "./js/**/*.js", "./index.html", "./style.css",
        "./bower_components/rv-common-style/dist/css/rise.min.css", "./distribution/**/*.*"]
      })
      .pipe(connect.reload());
  });

  gulp.task("lint", function() {
    return gulp.src(jsFiles)
      .pipe(jshint())
      .pipe(jshint.reporter("jshint-stylish"))
      .pipe(jshint.reporter("fail"));
  });

  gulp.task("source", ["lint"], function () {
    return gulp.src(files.concat(jsFiles), { base: "./" })
      .pipe(gulp.dest("dist/"));
  });

  gulp.task("images", function() {
    return gulp.src(["img/**/*.*", "prototypes/**/img/**/*.*"], { base: "./" })
      .pipe(gulp.dest("dist/"));
  });

  gulp.task("default", [], function() {
    console.log("***********************".yellow);
    console.log("  gulp bower-clean-install: delete and re-install bower components".yellow);
    console.log("  gulp bump: bump the version number".yellow);
    console.log("  gulp dev: start a server in the folder and watch LESS files".yellow);
    console.log("  gulp build: build a distribution version".yellow);
    console.log("***********************".yellow);
    return true;
  });
})(console);