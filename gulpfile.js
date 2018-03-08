const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const browserSync = require("browser-sync");
const reload = browserSync.reload;

gulp.task("build", () => gulp.src("fractal.config.js")
    .pipe($.plumber())
    .pipe($.shell("npx fractal-beta author --build")));

gulp.task("watch", () => {
    browserSync({
        notify: false,
        server: ["dist/"],
        startPath: "design-system/index.html"
    });

    gulp.watch(
        "public/design-system/styleguide/**/*.{js,css,njk}",
        gulp.series("build", reload)
    );

    gulp.watch(
        "public/design-system/styles/**/*",
        gulp.series(reload)
    );
});

gulp.task("default", gulp.series("build", "watch"));
