var gulp = require('gulp');
var connect = require('gulp-connect');
var jsoncombine = require("gulp-jsoncombine");
var colors = require('colors');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');
var clean = require('gulp-clean');

gulp.task('dev', function() {
  // Start a server
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);
  // Watch HTML files for changes
  console.log('[CONNECT] Watching HTML files for live-reload'.blue);
  watch({
    glob: ['./partials/**/*.html', './js/**/*.js', './index.html', './style.css', './bower_components/rv-common-style/dist/css/rise.min.css', './distribution/**/*.*']
  })
    .pipe(connect.reload());
});

gulp.task('default', [], function() {
  console.log('***********************'.yellow);
  console.log('  gulp dev: start a server in the folder and watch LESS files'.yellow);
  console.log('***********************'.yellow);
  return true;
});
