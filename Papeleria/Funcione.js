var inquirer = require('inquirer');
var fs = require('fs');
var articulos = [
    'Papel', 'Cuadernos', 'Esferos', 'Lápiz', 'Correctores', 'Reglas', 'Borradores', 'Marcadores', 'Láminas', 'Regalos', 'Aretes'
];
var tipoServicio = [
    'Copias', 'Impresiones', 'Articulos de Papeleria', 'Articulos de Bazar', 'Fotos',
    'Internet', 'Cortes', 'Anillados', 'Plastificados'
];
var opcionesMenu = [
    'Crear', 'Borrar', 'Actualizar', 'Buscar',
];
var menu = [
    { type: 'list',
        name: 'menu',
        message: '¿Qué servicio desea?',
        choices: opcionesMenu },
];
inquirer
    .prompt(menu)
    .then(function (respuesta) {
    if (respuesta.menu === 'Crear' || 'Actualizar') {
        var preguntasFormulario = [
            { type: 'input',
                name: 'nombreArticulo',
                message: 'Ingrese articulo:'
            },
            { type: 'input',
                name: 'precioArticulo',
                message: 'Ingrese el valor:'
            },
            { type: 'list',
                name: 'tipoDeServicio',
                message: 'Elija el servicio:',
                choices: tipoServicio
            },
        ];
        inquirer
            .prompt(preguntasFormulario)
            //.catch()
            .then(function (respuestasFormulario) {
            console.log(respuestasFormulario);
            funcionEscritura(respuestasFormulario.nombre, JSON.stringify(respuestasFormulario));
        });
    }
    if (respuesta.menu == 'Borrar') {
        var BorrarArticulo = [
            { type: 'input', name: 'nombreDeArticulo', message: '¿Qué desea borrar?' }
        ];
        inquirer
            .prompt(BorrarArticulo)
            .then(function (respuestaBorrarArticulo) {
            funcionBorrar(respuestaBorrarArticulo.nombre);
        });
    }
    if (respuesta.menu == 'Buscar') {
        var preguntaBusqueda = [{
                type: 'input', name: 'nombre', message: '¿Qué artículo necesita?'
            }];
        inquirer
            .prompt(preguntaBusqueda)
            .then(function (respuestaBusqueda) {
            console.log(respuestaBusqueda);
            buscar(respuestaBusqueda.nombre);
        });
    }
});
var funcionEscritura = function (nombreDelArchivo, respuestasDeLasPreguntas) {
    fs.writeFile(nombreDelArchivo, respuestasDeLasPreguntas, function (error) {
        return new Promise(function (resolve, reject) {
            if (error) {
                reject({
                    mensaje: 'No se pudo registrar articulo'
                });
            }
            else {
                resolve({
                    mensaje: 'Articulo ingresado exitosamente'
                });
            }
        });
    });
};
var funcionBorrar = function (nombreDelArchivo) {
    fs.unlink(nombreDelArchivo, function (err) {
        return new Promise(function (resolve, reject) {
            if (err) {
                reject({
                    mensaje: 'No se pudo eliminar el artículo'
                });
            }
            else {
                resolve({
                    mensaje: 'Artículo eliminado correctamente'
                });
            }
        });
    });
};
var buscar = function (nombreDelArchivo) {
    fs.readFile('../' + nombreDelArchivo, function (error, datos) {
        return new Promise(function (resolve, reject) {
            if (error) {
                reject({
                    mensaje: 'El artículo buscado no esta disponible'
                });
            }
            else {
                resolve({
                    mensaje: "Artículo encontrado: " + datos
                });
            }
        });
    });
};
function crearBDD() {
    const contenidoInicialBDD = '{""}'
    return new Promise()
}

function inicializarBase() {
    const leerBDD$ = rxjs.from(leerBDD());
    leerBDD$
        .pipe(
            mergeMap(
                (respuesta)
            )
        )
    return new Promise()
}
