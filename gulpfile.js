var path = require('path');

var gulp       = require('gulp'),
    less       = require('gulp-less'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    ngTplCache = require('gulp-angular-templatecache'),
    webserver  = require('gulp-webserver');


/* Build JS */
gulp.task('build.scripts.application', function() {
    return gulp.src([
        'src/app/**/workr.js',
        'src/app/**/*.module.js',
        'src/app/**/*.config.js',
        'src/app/**/*.controller.js',
        'src/app/**/*.service.js'
    ])
        .pipe(concat('application.js'))
        .pipe(gulp.dest('dist/scripts'));
});
gulp.task('build.scripts.vendor', function() {
    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/scripts'));
});
gulp.task('build.scripts', ['build.scripts.vendor','build.scripts.application']);

/* Build CSS */
gulp.task('build.styles.application', function() {
    return gulp.src('src/styles/application.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'src', 'styles') ]
        }))
        .pipe(gulp.dest('dist/styles'));
});
gulp.task('build.styles.vendor', function() {
    return gulp.src('src/styles/vendor.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'src', 'styles') ]
        }))
        .pipe(gulp.dest('dist/styles'));
});
gulp.task('build.styles', ['build.styles.vendor','build.styles.application']);

/* Build TPL */
gulp.task('build.templates', function() {
    return gulp.src('src/app/**/*.html')
        .pipe(ngTplCache({
            standalone: true,
            moduleSystem: 'IIFE'
        }))
        .pipe(gulp.dest('dist/scripts'));
});

/* Build */
gulp.task('build', ['build.styles','build.scripts','build.templates']);


/* Copy Assets */
gulp.task('copy.assets', function() {
    return gulp.src('src/assets/*')
        .pipe(gulp.dest('dist/assets'))
});

/* Copy Fonts */
gulp.task('copy.fonts', function() {
    return gulp.src([
        'bower_components/font-awesome/fonts/FontAwesome.otf',
        'bower_components/font-awesome/fonts/fontawesome-webfont.eot',
        'bower_components/font-awesome/fonts/fontawesome-webfont.svg',
        'bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
        'bower_components/font-awesome/fonts/fontawesome-webfont.woff',
        'bower_components/font-awesome/fonts/fontawesome-webfont.woff2'
    ])
        .pipe(gulp.dest('dist/fonts'))
});

/* Copy Index */
gulp.task('copy.index', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
});

/* Copy */
gulp.task('copy', ['copy.assets','copy.fonts','copy.index']);


/* (BUILD, COPY) -> EVERYTHING */
gulp.task('default', ['build', 'copy']);


/* Webserver */
gulp.task('webserver', function() {
    return gulp.src('dist/')
        .pipe(webserver({
            fallback: 'index.html'
        }));
});
