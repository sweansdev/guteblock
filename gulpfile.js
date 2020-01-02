const gulp = require("gulp");
const zip = require("gulp-zip");

function bundle() {
	// Copy files to Local SVN folder to commit to WordPress repository.
	return gulp
		.src([
			"**/*",
			"!node_modules/**",
			"!bundled/**",
			"!gulpfile.js",
			"!package.json",
			"!package-lock.json",
			"!webpack.config.js",
			"!.gitignore"
		])
		.pipe(gulp.dest("D:/Guteblock/SVN/Files/trunk"))
		.pipe(zip("guteblock.zip"))
		.pipe(gulp.dest("D:/Guteblock/Build"))
		.pipe(gulp.dest("bundled"));
}

exports.bundle = bundle;
