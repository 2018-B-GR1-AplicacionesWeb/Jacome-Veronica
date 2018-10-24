const fs = require ('fs');
fs.readFile('04-operadores.js',
    'utf-8',
    (error, contenidoArchivo)=>{
    if (error){
        console.error(error);
        throw new Error(error);
    }
    else {
        console.log(contenidoArchivo);
    }
    }
    );