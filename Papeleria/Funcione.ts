declare var  require;
const inquirer = require('inquirer');
const fs = require ('fs');
declare var Promise:any;

const articulos = [
    'Papel','Cuadernos','Esferos','Lapiz','Correctores','Reglas','Borradores','Marcadores','Laminas','Regalos','Aretes'
];

const tipoServicio = [
    'Copias','Impresiones','Articulos de Papeleria','Articulos de Bazar','Fotos',
    'Internet','Cortes','Anillados','Plastificados'

]

const opcionesMenu = [
    'Crear','Borrar','Actualizar','Buscar',
];

const menu = [
    { type: 'list',
        name: 'menu',
        message: '¿Qué servicio desea?',
        choices: opcionesMenu },
];

inquirer
    .prompt(menu)
    .then((respuesta) => {

        if (respuesta.menu === 'Crear'||'Actualizar'){
            const preguntasFormulario = [
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

                .then((respuestasFormulario) => {
                        console.log(respuestasFormulario)
                        funcionEscritura(respuestasFormulario.nombre,JSON.stringify(respuestasFormulario));
                    }
                );
        }if(respuesta.menu == 'Borrar'){
            const BorrarArticulo = [

                { type: 'input', name: 'nombreDeArticulo', message: '¿Qué desea borrar?' }];
            inquirer
                .prompt(BorrarArticulo)
                .then((respuestaBorrarArticulo) => {

                        funcionBorrar(respuestaBorrarArticulo.nombre);
                    }
                )
        }if(respuesta.menu == 'Buscar'){
            const preguntaBusqueda = [{
                type: 'input', name: 'nombre', message: '¿Qué artículo necesita?'
            }];
            inquirer
                .prompt(preguntaBusqueda)
                .then((respuestaBusqueda)=>{
                    console.log(respuestaBusqueda);

                    buscar(respuestaBusqueda.nombre);
                })
        }
    });




const funcionEscritura = (nombreDelArchivo,respuestasDeLasPreguntas)=>{
    fs.writeFile(nombreDelArchivo,respuestasDeLasPreguntas,
        (error)=> {
            return new Promise(
                (resolve,reject)=>{
                    if(error){
                        reject({
                            mensaje:'No se pudo registrar articulo',
                        })
                    }else {
                        resolve ({
                            mensaje: 'Articulo ingresado exitosamente'
                        })
                    }
                }
            )
        });
};


const funcionBorrar =(nombreDelArchivo)=> {
    fs.unlink(nombreDelArchivo, (err) => {
        return new Promise(
            (resolve, reject) => {
                if (err) {
                    reject({
                        mensaje: 'No se pudo eliminar el artículo'
                    })
                } else {
                    resolve({
                        mensaje: 'Artículo eliminado correctamente'
                    });
                }
            });
    });
};

const buscar = (nombreDelArchivo)=>{
    fs.readFile('../'+nombreDelArchivo, (error,datos) => {
        return new Promise(
            (resolve, reject) => {
                if (error) {
                    reject({
                        mensaje: 'El artículo buscado no esta disponible'
                    })

                } else {
                    resolve({
                        mensaje: "Artículo encontrado: "+ datos
                    });
                }
            });
    });
};