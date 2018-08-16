const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const browserify = require('browserify');
const babel = require('babelify');
const source = require('vinyl-source-stream');

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

gulp.task('default',['styles','scripts'],()=>{
	console.log('watching for changes on the project');
	gulp.watch('src/sass/index.scss',['styles']);
	gulp.watch('src/scripts/*.js',['scripts']);
});