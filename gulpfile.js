"use strict";
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass'); 
var autoprefixer   = require('gulp-autoprefixer');
var webpack = require("webpack");
var del = require('del');
var argv = require('minimist')(process.argv.slice(2));

gulp.task('clean', function () {
  return del(['build/*'] , function (err, deletedFiles) {
    console.log('successfully deleted');
  }); 
});

gulp.task('copy', function () {
  
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
  runSequence('clean', ['copy', 'sass'], function () {
    cb();
  });
});


gulp.task('watch', ['copy', 'sass'], function () {
  gulp.watch(['client/**/*.{scss,sass}'], ['sass']);
});

gulp.task('default', ['watch']);
