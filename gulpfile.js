const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

gulp.task('hello', (done) => {
    console.log('Привет, мир!');
    done();
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task("minify-css", () => {
    return (
      gulp
        .src("./css/**/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest("minified"))
    );
  });