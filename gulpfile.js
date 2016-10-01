var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('app/sass/application.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/sass/application.scss',['styles']);
    gulp.watch('app/sass/**/*.scss',['styles']);
    gulp.watch('app/components/**/*.scss',['styles']);
});