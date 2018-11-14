"use strict";
exports.__esModule = true;
var menu = require('console-menu');
var Funcione_1 = require("./Funcione");
var Opciones_1 = require("./Opciones");
var prueba_1 = require("./prueba");
var ejecutarMenuPrincipal = function () {
    var menuSeleccion = [
        { hotkey: '1', title: 'Ingresar al Sistema', data: { nombre: 'IngresarAlSistema' } },
        { hotkey: '2', title: 'Salir del Sistema', data: { nombre: 'SalirDelSistema' } },
    ];
    var configuracionesMenuPrincipal = {
        header: 'Papel express',
        border: true
    };
    return menu(menuSeleccion, configuracionesMenuPrincipal)
        .then(function (itemSeleccionado) {
        switch (itemSeleccionado.hotkey) {
            case '1':
                Funcione_1.Funcione.papeleria(Opciones_1.arregloPapeleria, prueba_1.funcionPREUBA())
                    .then(function (respuestaPromesa) {
                    console.log(respuestaPromesa);
                })["catch"](function (respuestaPromesaError) {
                    return respuestaPromesaError;
                });
                break;
            case '2':
                console.log('Escogió la Opcion 2 Salir');
                break;
            default:
                console.log('Opcion Invalida');
        }
        ;
    });
};
ejecutarMenuPrincipal();
