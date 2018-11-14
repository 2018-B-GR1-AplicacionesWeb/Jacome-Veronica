
import {menu2} from "./OpcionesPapeleria";
declare var  require;
let inquirer = require('inquirer');
let fs = require('fs');

inquirer
    .prompt(
        menu2
    )
    .then(
        (respuesta)=>[
            console.log (respuesta)
        ]
    )