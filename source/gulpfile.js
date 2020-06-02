var gulp = require('gulp'); //import gulp

gulp.task('html', function(){ //create task to cpy all html
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('css', function(){
    return gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css'));
});

gulp.task('img', function(){
    return gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'));
});

gulp.task('default', gulp.parallel(
    'html',
    'css',
    'img'
));