//import {from} from "rxjs";

export const opciones=
    [
        'Crear',
        'Borrar',
        'Actualizar',
        'Buscar'
    ]
export const opcion1=[
    {
        type:'input',
        name:'opcionMenuSeleccionado',
        message: 'Escoja Opcion'
    }
]
export const opcion2=[
    {
        type:'list',
        name:'opcionMenuSeleccionado2',
        message: 'Escoja Opcion',
        choices: opciones
    }
]