var gulp = require('gulp'),
	sass = require('gulp-sass'),
	gutil = require('gulp-util'),
	uglifycss = require('gulp-uglifycss'),
	gls = require('gulp-live-server');


var http = require('http');
var cors = require('cors');
var connect = require('connect');

var serveStatic = require('serve-static');


gulp.task('css', function() {
	gulp.src(['assets/scss/wd.easy.checkout.revamped.scss'])
		.pipe(sass().on('error', gutil.log))
		//.pipe(uglifycss())
		.on('error', gutil.log)
		.pipe(gulp.dest('assets/css'));
	//.pipe(livereload());
});

gulp.task('serve', function(){
	//let server = gls.static('', 3092);
	//server.start();

	// const connect = require('connect');
	// const serveStatic = require('serve-static');
	// connect().use(serveStatic(__dirname)).listen(3092, function() {
	//     console.log('Server running on 3092...');
	// });

	
	var app = connect();

	app.use(cors());
	app.use(serveStatic(__dirname));

	http.createServer(app).listen(3092);
});

gulp.task('watch', ['css'], function() {
	gulp.watch(['assets/scss/**/*.*', 'assets/scss/*.*'], ['css']);
});

gulp.task('default', ['watch', 'serve']);

//livereload.listen();
