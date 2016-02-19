var gulp = require('gulp'); //for build process
var gutil = require('gulp-util'); //for counsel logging the build process
var source = require('vinyl-source-stream');
var browserify = require('browserify'); //responsible for figuring out dependability of module
var watchify = require('watchify'); //tool to automatically runs gulp file whenever any changes occur
var reactify = require('reactify'); //help converting jsx files to javascript

gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: []
  }))



  gulp.src('src/**')
    .pipe(react())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./'))
});