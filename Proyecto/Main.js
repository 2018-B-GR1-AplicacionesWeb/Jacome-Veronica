const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Crear',
        'Borrar',
        'Buscar',
        'Actualizar',
    ]
};
const preguntaUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es el id de Artículo'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es tu nombre de Artículo'
    },
    {
        type: 'input',
        name: 'precioCompra',
        message: 'Ingrese precio de compra'
    },
    {
        type: 'input',
        name: 'precioVenta',
        message: 'Ingrese precio de venta al público'
    },
    {
        type: 'input',
        name: 'cantidad',
        message: 'Ingrese la cantidad del Artículo'
    },
];
const preguntaActualizar = [
    {
        type: 'input',
        name: 'buscarArticulo',
        message: 'Cual es el Artículo que desea editar'
    },
];
function main() {
    console.log('Empezo');
    inicializarBase()
        .pipe(mergeMap(// preguntar opcion
    (respuestaBDD) => {
        return preguntarMenu()
            .pipe(map((respuesta) => {
            return {
                respuestaUsuario: respuesta,
                respuestaBDD
            };
        }));
    }), // dependiendo de la opcion PREGUNTAMOS DEPENDIENDO LAS OPCIONES
    mergeMap((respuesta) => {
        //console.log(respuesta);
        switch (respuesta.respuestaUsuario.opcionMenu) {
            case 'Crear':
                return rxjs
                    .from(inquirer.prompt(preguntaUsuario))
                    .pipe(map((usuario) => {
                    respuesta.usuario = usuario;
                    return respuesta;
                }));
            case 'Actualizar':
                return rxjs
                    .from(inquirer.prompt(preguntaActualizar))
                    .pipe(map((nombre, nuevoNombre) => {
                    respuesta.usuario = nuevoNombre;
                    return respuesta;
                }));
            default:
                respuesta.usuario = {
                    id: null,
                    nombre: null,
                    precioCompra: null,
                    precioVenta: null,
                    cantidad: null
                };
                rxjs.of(respuesta);
        }
    }), // Ejecutar Accion
    map((respuesta) => {
        //console.log('respuesta en accion', respuesta);
        switch (respuesta.respuestaUsuario.opcionMenu) {
            case 'Crear':
                const articulo = respuesta.usuario;
                respuesta.respuestaBDD.bdd.articulos.push(articulo);
                return respuesta;
        }
    }), // Guardar Base de Datos
    mergeMap((respuesta) => {
        return guardarBase(respuesta.respuestaBDD.bdd);
    }))
        .subscribe((mensaje) => {
        console.log(mensaje);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('Completado');
        main();
    });
}
function inicializarBase() {
    const leerBDD$ = rxjs.from(leerBDD());
    return leerBDD$
        .pipe(mergeMap((respuestaLeerBDD) => {
        if (respuestaLeerBDD.bdd) {
            // truty / {}
            return rxjs.of(respuestaLeerBDD);
        }
        else {
            // falsy / null
            return rxjs.from(crearBDD());
        }
    }));
}
function preguntarMenu() {
    return rxjs.from(inquirer.prompt(preguntaMenu));
}
function leerBDD() {
    return new Promise((resolve) => {
        fs.readFile('bdd.json', 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'Base de datos vacia',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Si existe la Base',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        });
    });
}
function crearBDD() {
    const contenidoInicialBDD = '{"articulos":[]}';
    return new Promise((resolve, reject) => {
        fs.writeFile('bdd.json', contenidoInicialBDD, (err) => {
            if (err) {
                reject({
                    mensaje: 'Error creando Base',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD creada',
                    bdd: JSON.parse('{"articulos":[]}')
                });
            }
        });
    });
}
function guardarBase(bdd) {
    return new Promise((resolve, reject) => {
        fs.writeFile('bdd.json', JSON.stringify(bdd), (err) => {
            if (err) {
                reject({
                    mensaje: 'Error guardando BDD',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD guardada'
                });
            }
        });
    });
}
function anadirUsuario(usuario) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                bdd.usuarios.push(usuario);
                fs.writeFile('bdd.json', JSON.stringify(bdd), (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({ mensaje: 'Artículo Creado' });
                    }
                });
            }
        });
    });
}
function editarArticulo(nombre, nuevoNombre) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const indiceUsuario = bdd.usuarios
                    .findIndex((usuario) => {
                    return usuario.nombre = nombre;
                });
                bdd.usuarios[indiceUsuario].nombre = nuevoNombre;
                fs.writeFile('bdd.json', JSON.stringify(bdd), (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({ mensaje: 'Usuario Editado' });
                    }
                });
            }
        });
    });
}
function buscarUsuarioPorNombre(nombre) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaFind = bdd.usuarios
                    .find((usuario) => {
                    return usuario.nombre === nombre;
                });
                resolve(respuestaFind);
            }
        });
    });
}
main();
