const fs = require ('fs');
console.log('Inicio');
fs.readFile('04-operadores.js',
    'utf-8',
    (error, contenidoArchivo)=>{
    if (error){
        console.error(error);

        try {
            throw new Error(error);
        }
    catch (e) {
        console.log(e);
    }
    console.log('Extra')
    } else {
        console.log('Si sirvio', contenidoArchivo);
    }
    });
Console.log('Fin');