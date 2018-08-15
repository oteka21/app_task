const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('styles',()=>{
	gulp
	.src('src/sass/index.scss')
	.pipe(sass())
	.pipe(rename('app.css'))
	.pipe(gulp.dest('src/public'));
});
console.log('holaa');

gulp.task('default',['styles'],()=>{
	console.log('watching for changes on the project');
	gulp.watch('src/sass/index.scss',['styles']);
});