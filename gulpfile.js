var browserify = require('browserify')
var babelify = require('babelify')
var gulp = require('gulp')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var gutil = require('gulp-util')
var connect = require('gulp-connect')

gulp.task('js', function() {
    var b = browserify({
        entries: 'src/index.js',
        debug: true
    })

    b.transform(babelify, { presets: ['es2015'] })

    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('www/js/'));
});

gulp.task('connect', function() {
	connect.server({
		root: 'www',
		livereload: true,
		open: true
	})
})

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['js'])
})

gulp.task('serve', ['js', 'connect', 'watch']);
