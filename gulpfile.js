var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

    
gulp.task('scripts', function(){
    gulp.src('./js/*.js')
        .pipe(uglify()) 
        .pipe(rename({ extname: '.min.js' })) 
        .pipe(gulp.dest('./build/js')) 
});

gulp.task('watch', function() {
   gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts']);

