function ejemplo() {}
    var ejemploDos = function () { } //funciones anonimas
var adrian = {
    trabajar: function () {
        return 'trabajo';
    }
};
console.log(typeof ejemplo); //tipo de dato
console.log(ejemplo);//definicion de la funcion
console.log(ejemplo ());// ejecucion funcion

var variableUno;
let variableDos= 2; //usar mutable
varableDos = variableDos + 1;
const pi = 3.1416;

const vicente = {
    nombre:  'Vicente'
};
vicente.nombre = 'Adrian';
vicente.edad=24;

var arregloDeNombres =['A', 'b', 'c'];
arregloDeNombres.forEach(
    function (valorActual, indiceActual, arreglo) {

        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);

    }
);

arregloDeNombres.forEach(
    function (valorActual, indiceActual, arreglo) => {

        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);

    }
);
const arregloDeNombresDos = [ 'E', 'F', 'G', 'H'];
const resultado = arregloDeNombre
    .map(
        valorActual=>{
            return valorActual + '.';
        }
    );
console.log (resultado);

