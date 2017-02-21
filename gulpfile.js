"use strict";

var gulp = require('gulp'),
    concatCSS = require('gulp-concat'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-cssmin'),
    connect = require('gulp-connect'),
    ngrok = require('ngrok'),
    uglify = require('gulp-uglify'),// Minify JavaScript
    imagemin = require('gulp-imagemin'),// Minify images
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var site      = '';
var portVal   = 3000;

gulp.task('connect', function() {
    connect.server({
        port: portVal,
        root: 'app/debug',
        livereload: true //with LiveReload!
    });
});

gulp.task('ngrok-url', function(cb) {
    return ngrok.connect(portVal, function (err, url) {
        site = url;
        console.log('serving your tunnel from: ' + site);
        cb();
    });
});

gulp.task('images', function() {
    gulp.src('./app/src/img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./app/debug/img'));
});

gulp.task('html', function() {
    return gulp.src('app/src/*.html')
        .pipe(gulp.dest('app/debug'))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    return gulp.src('./app/src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/debug/css'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('app/src/sass/*.scss', ['sass']);
    gulp.watch('app/src/index.html',['html']);
    gulp.watch('app/src/img/*',['images']);
});


gulp.task('build', ['sass','html','images']);

gulp.task('default', ['connect','build','watch']);