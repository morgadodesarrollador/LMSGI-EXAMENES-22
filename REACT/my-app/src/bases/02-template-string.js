
//TEMPLATE STRING
// Con el + se hace muy complejo concatenar String y Variables

const nombre = "trino";
const apellidos = "navarro";
const fecha = 1997;
let anio = 2022;

//"te llamas navarro, trino y tienes xx años"
//sustitucion de variables/expresiones

function edad( fecha ) {
    return (2022 - fecha)
}

console.log( edad (1972) );
console.log( edad (2000));

console.log (`${ nombre }`);

let cadena = `te llamas ${ nombre } ${ apellidos } y tienes ${anio-edad}`;
console.log(cadena);