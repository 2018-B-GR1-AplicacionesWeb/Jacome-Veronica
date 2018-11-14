"use strict";
exports.__esModule = true;
var OpcionesPapeleria_1 = require("./OpcionesPapeleria");
var inquirer = require('inquirer');
var fs = require('fs');
inquirer
    .prompt(OpcionesPapeleria_1.opcion2)
    .then(function (respuesta) { return [
    console.log(respuesta)
]; });
