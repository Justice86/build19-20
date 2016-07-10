var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var imageMin = require('gulp-imagemin');
var server = require('gulp-server-livereload');

gulp.task('scripts', function() {
    return gulp.src(['src/js/*.js'])
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true,
            defaultFile: 'index.html'
        }));
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
    return gulp.src('src/images/*')
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/css/fonts'))
});

gulp.task('default', function () {
    gulp.start('scripts', 'sass', 'images', 'fonts', 'pages', 'webserver');
    gulp.watch('src/index.html', ['pages']);
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/**/*.scss', ['sass']);
});