
/* constants */
const VERSION = '1.0.1';
const PATH_DEST = 'core_dist/';
const FILE_NAME = 'controlpanel.core';
const filesJS = [
        './core/core.module.js',
        './core/constants.js',
        './core/**/*.js'
    ];

/* fields */
var gulp = require('gulp');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

/* tasks */
gulp.task('clean:' + PATH_DEST, Clean)
gulp.task('compress-js', CompressJS);
gulp.task('default', Run);

/* methods */
function Clean(){
  del.sync(PATH_DEST);
}
function CompressJS(){
  gulp.src(filesJS)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat(FILE_NAME + '.' + VERSION + '.min.js'))
    .pipe(gulp.dest('dist'))
}
function Run(){
  runSequence('clean:' + PATH_DEST, 'compress-js');
}
