var gulp = require('gulp')
var connect = require('gulp-connect')

gulp.task('connect', function() {
	connect.server({
		root: 'www',
		livereload: true,
		open: true
	})
})

gulp.task('default', ['connect']);
