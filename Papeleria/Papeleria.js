"use strict";
exports.__esModule = true;
exports.papeleria = function (arregloPapeleria, nuevoElemento) {
    arregloPapeleria.push(nuevoElemento);
    return new Promise(function (resolve, reject) {
        resolve(arregloPapeleria);
        reject({
            mensaje: 'Elemento no agregado'
        });
    });
};
