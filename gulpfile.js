var gulp = require('gulp-help')(require('gulp')),
    jshint = require('gulp-jshint'),
    include = require('gulp-include'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sequence = require('run-sequence');

gulp.task('checkstyle-js', 'check the code style of the scripts', function () {
    gulp
        .src('./src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .on('error', console.log)
});

gulp.task('build-js', 'concat and minify scripts to ./dist/oojs.min.js', function () {
    gulp
        .src('./src/PopUpManager.js')
        .pipe(include())
        .pipe(uglify())
        .pipe(rename('popupmanager.min.js'))
        .on('error', console.log)
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', 'build scripts', function (done) {
    sequence('checkstyle-js', 'build-js', done);
});
