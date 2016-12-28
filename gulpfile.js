var gulp = require('gulp');

gulp.task('default', function() {
  var inline = require('gulp-inline')
  , uglify = require('gulp-uglify')
  , minifyCss = require('gulp-minify-css')
  , autoprefixer = require('gulp-autoprefixer');

  gulp.src('src/index.html')
    .pipe(inline({
      base: './',
      js: uglify,
      css: [minifyCss, autoprefixer({ browsers:['last 2 versions'] })],
      // disabledTypes: ['svg', 'img', 'js'],
      ignore: ['../third_party/handlebars-v3.0.0.js']
    }))
    .pipe(gulp.dest('./'));
});