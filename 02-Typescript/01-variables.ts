//npm i -g typescript
const nombre:string = 'Vero';
const edad:number = 12;
const nada = null;
const casado: boolean = false;
const loQueSea: any = {};
loQueSea = 1;
loQueSea = 'facil';
loQueSea = true;
const fechaNAciminto: Date = new Date();
const identificador: number | string = '1';
identificador = 'uno';
const usuario: {
    nombre: string;
    apellido: string;
    edad?: number | string;
} = {
    nombre: 'Adrian',
    apellido: 'Eguez'
};
const usuario: UsuarioInterface = {
    Interface

}
class Usuario {
    public nombre: string;
    public apellido: string;
    public edad?: number | string;
}
const usuario: Usuario = {

};
function sumarDosNumeros (
    numUno: number, numDos: number
){
    return  numUno + numDos;
}
//sumarDosNumeros(numUno: 2, numDos: 2);

const saludar = (nombre: string, apellido?: string): string | number => {};
saludar( nombre: 'nombre', apellido: 'eguez');

let respuesta = <string> saludar(nombre: 'nombre', )
let nombreDos = 'adrian';  //