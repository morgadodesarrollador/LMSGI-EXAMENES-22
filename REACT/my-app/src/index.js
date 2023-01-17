//ARRAY es una variable multivaluada que contiene un conjunto o lista de valores se expresa --> []

//Declaración y inicialización del array. Son equivalentes

// const datos = new Array();
let valores = []; //Array vacío.

console.log(valores); //Devuelve un array vacío.
valores.push(2); // Inserta datos en el final del Array.
valores.push(6);
valores.push(4);
// valores.pop(55);
console.log(valores);

let edades = valores;
console.log(edades);

edades.push(45,567,34);

 // [2,6,4] el operador spread que son los 3 puntos antes de valores, nos despliega los valores asignados anteriormente con el push.
             // Solo tiene sentido usar spread en un array o un objeto.

// console.log(datos);
// console.log(valores);

//Metodos sobre array --> lenght(longitud del array) es una propiedad.
//forEach recorre/ITERA todos los elementos de un Array/Vector/Arreglo/Lista.
let datos = [ 88, ...valores, 100, 105 ];
datos.push(99);
datos.forEach(function(valor){
console.log ("valor =", valor);
})

let suma = 0;
datos.forEach( ( ele ) => [
    suma = suma + ele,
    console.log(ele)
])


// datos.forEach(v => {
//     console.log(v)
// })







