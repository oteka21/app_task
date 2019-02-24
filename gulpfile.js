const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const browserify = require('browserify');
const babel = require('babelify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const pump = require('pump');
const bs = require('browser-sync').create();
var streamify = require('gulp-streamify');			

gulp.task('styles',()=>{
	gulp
	.src('src/sass/index.scss')
	.pipe(sass())
	.pipe(rename('app.css'))
	.pipe(gulp.dest('src/public'));
});

gulp.task('scripts', ()=>{
	browserify('./src/scripts/index.js')
		.transform(babel)
			.bundle()
			.pipe(source('index.js'))
			.pipe(rename('app.js'))
			.pipe(gulp.dest('src/public'));
});

gulp.task('uglify-error-debugging', function (cb) {
  pump([
    gulp.src('./src/public./app.js'),
    uglify(),
    gulp.dest('./src/public')
  ], cb);
});

gulp.task('default',['styles','scripts','uglify-error-debugging'],()=>{
	console.log('watching for changes on the project');
	gulp.watch('src/sass/index.scss',['styles']);
	gulp.watch('src/scripts/*.js',['scripts']);
});
