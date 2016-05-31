
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    mainBowerFiles = require('main-bower-files'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglifyjs'),
    htmlmin = require('gulp-htmlmin');
  

gulp.task('mainBowerFiles', function () {
   return gulp.src(mainBowerFiles())
       .pipe(gulp.dest('app/bower_components'))
});

gulp.task('sass', function () {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions',  'ie 8', 'ie 7'],{cascade:true}))
        .pipe(csscomb())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task('browserSync', function () {
    browserSync({
        server:{
            baseDir:'app'
        },
        notify:false
    });
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload)
});


gulp.task('production', function () {
   return gulp.src('app/css/*.css' )
           .pipe(cssnano())
           .pipe(gulp.dest('production/css'));

           // .pipe(gulp.src('app/bower_components/*.css'))
           // .pipe(gulp.dest('production/css'));

           // .pipe(gulp.src('app/js/*.js'))
           // .pipe(uglify())
           // .pipe(gulp.dest('production/js'))
           //
           //
           // .pipe(gulp.src('app/index.html'))
           // // .pipe(htmlmin({collapseWhitespace: true}))
           // .pipe(gulp.dest('production'))
});