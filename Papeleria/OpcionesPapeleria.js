"use strict";
//import {from} from "rxjs";
exports.__esModule = true;
exports.opcionesMenu = [
    'Crear',
    'Borrar',
    'Actualizar',
    'Buscar'
];
exports.menu = [
    {
        type: 'input',
        name: 'opcionMenuSeleccionado',
        message: 'Escoja Opcion'
    }
];
exports.menu2 = [
    {
        type: 'list',
        name: 'opcionMenuSeleccionado2',
        message: 'Escoja Opcion',
        choices: exports.opcionesMenu
    }
];
