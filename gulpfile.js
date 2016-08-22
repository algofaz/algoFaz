// Import the dependencies
var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css');


// Define a task to compile bootstrap.less
gulp.task('less', function(){
    return gulp.src(['wp-content/assets/less/bootstrap.less']).
        pipe(less()).
        pipe(minifyCSS({})).
        pipe(gulp.dest('./wp-content/assets/css'));
});

// Watch for changes in the less folder
gulp.task('watch', ['less'], function () {
    gulp.watch('wp-content/assets/less/**/*.less', ['less']);
});