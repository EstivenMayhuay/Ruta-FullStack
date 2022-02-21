const gulp = require("gulp");
const pug = require("gulp-pug");
const less = require("gulp-less");

// create task for pug
gulp.task("pug", function () {
  return gulp
    .src("src/pug/pages/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("docs/"));
});

// create task for less
gulp.task("less", function () {
  return gulp.src("src/less/*.less").pipe(less()).pipe(gulp.dest("docs/css"));
});

// by execute gulp write in the command line the following command "gulp compilePug" o "npm run buildPug"
gulp.task("compilePug", function () {
  gulp.watch("src/pug/pages/*.pug", gulp.series("pug"));
});

// by execute gulp write in the command line the following command "gulp compileLess" o "npm run buildLess"
gulp.task("compileLess", function () {
  gulp.watch("src/less/*.less", gulp.series("less"));
});
