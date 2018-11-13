// declare var module:any;
var rxjs = require('rxjs');
var map = require('rxjs/operators').map;
var disctinct = require('rxjs/operators').distinct;
var observableUno$ = rxjs.of([1, 2, 3], 3, 'Hola', 3, true, 3, { nombre: 'Adrian' }, new Date(), 3);
console.log(observableUno$);
observableUno$
    .pipe(disctinct(), map(function (valor) {
    console.log('Valor', valor);
    return {
        data: valor
    };
}))
    .pipe()
    .pipe()
    .subscribe(function (ok) {
    console.log('En ok', ok);
}, function (error) {
    console.log(error);
}, function () {
    console.log('Completado');
});
var promesita = function () {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        reject(':(');
    });
};
var observableDePromesa$ = rxjs.from(promesita());
observableDePromesa$
    .pipe(map(function (valor) {
    return {
        data: valor
    };
}))
    .subscribe(function (objetoFeliz) {
    console.log(objetoFeliz);
}, function (error) {
    console.log(error);
});
