const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({'uglyComments': false}))//Permite que os comentarios também sejam enviados com o restante do codigo
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}


function depsFonts(){
    return gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('build/assets/fonts'))
}


module.exports = { //Funções que vão ser exportadas a partir do arquivo deps.js
    depsCSS,
    depsFonts
}