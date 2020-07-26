var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


// Sass caminho
var scssPasta = ['espiral-simbolica/assets/sass/**/*.scss','espiral-simbolica/assets/sass/*.scss'];

// CSS destino
var cssDest = 'espiral-simbolica/assets/css/';

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
    './espiral-simbolica/style.css',
    './espiral-simbolica/assets/css/**/*.css',
    './espiral-simbolica/assets/dist/*.css',

  //PHP
    './espiral-simbolica**/*.php',
    './espiral-simbolica/**/*.php',
  //JS
    './espiral-simbolica/assets/dist/*.js',
    './espiral-simbolica/assets/js/*.js',
    './espiral-simbolica/scripts/*.js'
  ];

  browserSync.init(files, {
    proxy:"http://localhost/Espiral-Simbolica/",
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