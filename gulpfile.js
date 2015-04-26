"use strict";
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass'); 
var autoprefixer   = require('gulp-autoprefixer');
var webpack = require("webpack");
var runSequence = require('run-sequence');
var bower = require('gulp-bower');
var del = require('del');
var argv = require('minimist')(process.argv.slice(2));

gulp.task('clean', function () {
  return del(['build/*'] , function (err, deletedFiles) {
    console.log('successfully deleted');
  }); 
});

gulp.task('bower', function () {
  return bower({ cmd: 'update'});
});

gulp.task('copy', function () {
  return gulp.src('bower_components/font-awesome/fonts/*')
             .pipe(gulp.dest('build/fonts'))
});

gulp.task('sass', function () {
  return  gulp.src(['client/scss/**/*.{scss,sass}'])
              .pipe(sass({ includePaths : ['bower_components', 'node_modules'], errLogToConsole: true}))
              .pipe(autoprefixer({
                browsers: ['last 2 versions', 'ie 10']
              }))
              .pipe(gulp.dest('build/css'));
});

gulp.task("js", function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('build', function(cb) {
  runSequence('clean', 'bower', ['copy', 'sass', 'js'], function () {
    cb();
  });
});


gulp.task('watch', ['build'], function () {
  gulp.watch(['client/**/*.{scss,sass}'], ['sass']);
  gulp.watch(['client/**/*.{js,jsx}'], ['js']);
});

gulp.task('default', ['watch']);