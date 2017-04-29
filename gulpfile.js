let gulp = require('gulp');

let pug = require('gulp-pug');
let sourcemaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');

// let htmlbeautify = require('gulp-html-beautify');

gulp.task('buildHTML', function buildHTML() {
  return gulp.src('./src/views/!(_)*.pug')
  .pipe(pug({pretty: true}))
  // .pipe(htmlbeautify())
  .pipe(gulp.dest('./dist'));
});

gulp.task('buildHTML:watch', function () {
  gulp.watch('./src/views/**/*.pug', ['buildHTML']);
  gulp.watch('./src/views/**/*.html', ['buildHTML']);
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./dist/css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['buildHTML', 'buildHTML:watch', 'sass', 'sass:watch']);
