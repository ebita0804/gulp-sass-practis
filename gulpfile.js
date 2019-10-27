var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');



// sassコンパイルタスク
gulp.task('sass', function(){
  gulp.src('./source/sass/**/*.scss')
    .pipe(plumber()) // ←plumberここが追加
    .pipe(sass())
    .pipe(gulp.dest('./htdocs/css/'));
});
// watchタスク(Sassファイル変更時に実行するタスク)
gulp.task('sass-watch', ['sass'], function(){
  var watcher = gulp.watch('./source/sass/**/*.scss', ['sass']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('default', ['sass-watch']);