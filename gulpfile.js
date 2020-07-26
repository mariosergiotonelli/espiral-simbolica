var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


// Sass caminho
var scssPasta = ['espacocura/assets/sass/**/*.scss','espacocura/assets/sass/*.scss'];

// CSS destino
var cssDest = 'espacocura/assets/css/';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
  //outputStyle: 'expanded'
}

// task para o sass
gulp.task('sassdev', function() {
  return gulp.src(scssPasta)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssDest));
});

gulp.task('sassprod', function() {
  return gulp.src(scssPasta)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssDest));
});

gulp.task('browser-sync', function() {
  var files = [
  //CSS
    './espacocura/style.css',
    './espacocura/assets/css/**/*.css',
    './espacocura/assets/dist/*.css',

  //PHP
    './espacocura**/*.php',
    './espacocura/**/*.php',
  //JS
    './espacocura/assets/dist/*.js',
    './espacocura/assets/js/*.js',
    './espacocura/scripts/*.js'
  ];

  ////----////

  browserSync.init(files, {
    proxy:"http://localhost/Espaco-Cura/",
    watchEvents : ['change', 'add', 'unlink', 'addDir', 'unlinkDir'],
    notify:false
  });

});


// task para watch
gulp.task('watch', function() {
  gulp.watch(scssPasta, ['sassprod']);
  //gulp.watch(scssPasta, ['sassdev', 'sassprod']);
});


// task default gulp
gulp.task('default', ['sassprod', 'browser-sync', 'watch']);
//gulp.task('default', ['sassprod', 'watch']);