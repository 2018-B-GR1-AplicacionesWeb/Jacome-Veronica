
import {opcion2} from "./OpcionesPapeleria";
declare var  require;
let inquirer = require('inquirer');
let fs = require('fs');

inquirer
    .prompt(
        opcion2
    )
    .then(
        (respuesta)=>[
            console.log (respuesta)
        ]
    )