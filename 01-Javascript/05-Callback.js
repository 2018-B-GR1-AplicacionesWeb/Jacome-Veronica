const fs = require('fs');

fs.readFile('06-operadores.js',
    'utf-8',
    (error, contenidoArchivo) => {  // Callback
        if (error) {
            console.error(error);
            try {
                throw new Error(error);
            } catch (e) {
                console.log(e);
            }
            console.log('Extra')
        } else {
            // Callback Hell!
            console.log(contenidoArchivo);

        }
    });


console.log('Fin');