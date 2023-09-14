const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app') //Importando funções de app.js
const { depsCSS, depsFonts } = require('./gulpTasks/deps')//Importando funções de deps.js
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')//Importando funções de servidor.js


module.exports.default = series(//Irá executar os grupos em paralelo primeiro
    parallel(
        series( appHTML, appCSS, appJS, appIMG ),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos //Vão ser executados por ultimo 
)