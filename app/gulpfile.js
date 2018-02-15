var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var maps   = require('gulp-sourcemaps');

var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

var jsFiles = [
               'js/src/jquery.js',
               'js/src/index.js',
               'js/src/backbone.js',
               ];

var jsDest = 'js/dist';

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['sass','scripts'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
