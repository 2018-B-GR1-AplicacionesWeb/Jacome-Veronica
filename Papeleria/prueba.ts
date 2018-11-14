declare var  require;
var inquirer = require('inquirer');
import {articulos,servicios} from "./Opciones";

export const funcionPREUBA = ()=>{
    const preguntas = [
        { type: 'input', name: 'nombreDelJuego', message: 'Ingrese nombre del Juego:' },
        { type: 'input', name: 'precioDelJuego', message: 'Ingrese el precio del Juego:' },
        { type: 'list', name: 'tipoDelJuego', message: 'Escoga el tipo de Juego:', choices: articulos },
        { type: 'input', name: 'nombreDeLaEmpresaDelJuego', message: 'Ingrese nombre de la Empresa:'},
        { type: 'list', name: 'clasificacion', message: 'Escoga la clasficación del Juego:', choices: servicios},
    ];

    inquirer
        .prompt(preguntas)
        .then(function (respuetas) {
            console.log(respuetas)
        });
}
