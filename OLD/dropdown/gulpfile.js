var gulp = require('gulp'); //for build process
var gutil = require('gulp-util'); //for counsel logging the build process
var source = require('vinyl-source-stream');
var browserify = require('browserify'); //responsible for figuring out dependability of module
var watchify = require('watchify'); //tool to automatically runs gulp file whenever any changes occur
var reactify = require('reactify'); //help converting jsx files to javascript

gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache:{},
    packageCache: {},
    fullPaths: true
  }));

function build(file) {
    if (file) gutil.log('Recompiling' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil,'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build(); // execute build function
  bundler.on('update',build); //when changes execute build again
});