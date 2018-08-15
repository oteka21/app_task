const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const source = require('vinyl-source-stream');

gulp.task('styles',()=>{
	gulp
	.src('src/sass/index.scss')
	.pipe(sass())
	.pipe(rename('app.css'))
	.pipe(gulp.dest('src/public'));
});

gulp.task('scripts', ()=>{
	gulp
	.src('src/scripts/index.js')
	.pipe(browserify({ debug: true }))
	.pipe(rename('app.js'))
	.pipe(gulp.dest('src/public/'))
});

gulp.task('default',['styles','scripts'],()=>{
	console.log('watching for changes on the project');
	gulp.watch('src/sass/index.scss',['styles']);
	gulp.watch('src/scripts/*.js',['scripts']);
});