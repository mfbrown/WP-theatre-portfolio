var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
watch = require('gulp-watch'),
autoprefixer = require('gulp-autoprefixer'),
minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: './'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('./'));
});

// gulp.task('watch', function () {
//     watch({glob: 'scss/**/*.scss'}, function(files) {
//         return files.pipe(sass({sourcemap: true, sourcemapPath: './'}))
//             .pipe(gulp.dest('./'));
//     });
// });

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass'], function(){
    	console.log("A file was changed, running SASS");
    });
});

gulp.task('prefix', function () {
    return gulp.src('style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('minify-css', function() {
  gulp.src('style.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'))
});

// var watcher = gulp.watch('scss/**/*.scss', ['sass', 'watch']);

gulp.task('default', ['sass', 'watch']);
gulp.task('prod', ['sass', 'prefix', 'minify-css']);

