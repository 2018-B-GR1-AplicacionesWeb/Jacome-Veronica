"use strict";
exports.__esModule = true;
var inquirer = require('inquirer');
var Opciones_1 = require("./Opciones");
exports.funcionPREUBA = function () {
    var preguntas = [
        { type: 'input', name: 'nombreDelJuego', message: 'Ingrese nombre del Juego:' },
        { type: 'input', name: 'precioDelJuego', message: 'Ingrese el precio del Juego:' },
        { type: 'list', name: 'tipoDelJuego', message: 'Escoga el tipo de Juego:', choices: Opciones_1.articulos },
        { type: 'input', name: 'nombreDeLaEmpresaDelJuego', message: 'Ingrese nombre de la Empresa:' },
        { type: 'list', name: 'clasificacion', message: 'Escoga la clasficación del Juego:', choices: Opciones_1.servicios },
    ];
    inquirer
        .prompt(preguntas)
        .then(function (respuetas) {
        console.log(respuetas);
    });
};
