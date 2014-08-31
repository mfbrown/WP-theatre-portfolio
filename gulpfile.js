var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
watch = require('gulp-watch'),
livereload = require('gulp-livereload'),
lr = require('tiny-lr'),
server = lr();


gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: './'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('./'))
});

    watch({glob: 'scss/**/*.scss'}, function(files) {
        return files.pipe(sass({sourcemap: true, sourcemapPath: './'}))
            .pipe(gulp.dest('./'));
            
    });
});

var watcher = gulp.watch('scss/**/*.scss', ['sass', 'watch']);

gulp.task('default', ['sass', 'watch']);