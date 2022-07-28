const gulp = require('gulp');
const replace = require('gulp-replace');
gulp.task('templates', async() => {
  gulp.src('public/**/*.*')
    .pipe(replace('cdn.jsdelivr.net', 'cdn1.tianli0.top'))
    .pipe(gulp.dest('public/')),  { overwrite: true };
});
gulp.task("default", gulp.parallel('templates'));
//以上是gulpfile.js，用来实现全局替换cdn.jsdelivr.net为cdn1.tianli0.top
