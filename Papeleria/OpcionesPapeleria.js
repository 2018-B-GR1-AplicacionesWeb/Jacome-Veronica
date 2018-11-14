"use strict";
//import {from} from "rxjs";
exports.__esModule = true;
exports.opciones = [
    'Crear',
    'Borrar',
    'Actualizar',
    'Buscar'
];
exports.opcion1 = [
    {
        type: 'input',
        name: 'opcionMenuSeleccionado',
        message: 'Escoja Opcion'
    }
];
exports.opcion2 = [
    {
        type: 'list',
        name: 'opcionMenuSeleccionado2',
        message: 'Escoja Opcion',
        choices: exports.opciones
    }
];
