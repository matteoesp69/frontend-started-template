const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('gulp-purgecss');
const replace = require('gulp-replace');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// File path

const files = {
  sassPath: 'app/scss/**/*.scss',
  jsPath: 'app/js/**/!(custom)*.js',
  htmlPath: 'app/**/*.html',
  imagePath: 'app/img/*',
}

// Imagemin
function imageminTask() {
  return gulp.src(files.imagePath)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());
}

// Htmlmin Task
function htmlminTask() {
  return gulp.src(files.htmlPath)
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

// Compile css into scss
function cssTask() {
  return gulp.src(files.sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(purgecss({
      content: ['**/*.html']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// Js Task 
function jsTask() {
  return gulp.src([files.jsPath,
    // Import all bootstrap 
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    'assets/jquery-collapser/src/jquery.collapser.js',
    'node_modules/picturefill/dist/picturefill.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'app/js/custom.js'
  ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

// Cache Control Task
function cacheBustTask() {
  var cbString = new Date().getTime();
  return gulp.src(['**/*.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(gulp.dest('.'))
}

// Watch files
function watch() {
  browserSync.init({
    server: {
      baseDir: "dist/",
    }
  });

  gulp.watch('app/scss/**/*.scss', cssTask)
  gulp.watch('app/**/*.html', htmlminTask)
  gulp.watch('app/img/*', imageminTask)
  gulp.watch('app/js/**/*.js', jsTask)
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imageminTask = imageminTask;
exports.htmlminTask = htmlminTask;
exports.cacheBustTask = cacheBustTask;
exports.watch = watch;