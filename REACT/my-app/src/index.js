//tipos basicos de variables: number(enteros, decimales), string, boolean (true, false)
//objetos --> variables de tipo complejo que contienen estructuras de datos de cualquier tipo
/*
    un objeto es un tipo complejo formado por parejas (propiedad: valor) separados por ,
*/
const persona = {
    nif: '242424242', //variable monovaluada
    nombre: 'jose antonio',
    apellidos: 'morgado',
    edad: 50,
    casado: false,
    direccion: {
        calle: 'c/la pimienta',
        numero: 5,
        codpostal: '04880',
        ciudad: 'Almeria',
        pais: 'España'
    },
    aficiones: ['ciclismo', 'natación', 'petanca'], //variable multivaluada
    
}

//Hacer una copia del objeto (DUPLICAR).

//OPERADOR SPREAD --> ...OBJETO     ...ARRAY
console.log( { ...persona } );

console.log( { ...persona.aficiones } );

const persona3 = { ...persona };
persona3.nombre = 'Alfonso';
persona3.edad = 30;
delete(persona3.aficiones);
console.log(persona3);




// const persona2 = persona;       //la copia de la referencia que apunta a la persona
// persona2.nombre = 'Ana Maria';          
// persona2.edad = 22;
// delete(persona2.aficiones);




// console.log(persona, persona2);

// console.log(persona);
// console.table(persona);
// console.log(persona.direccion.ciudad);


/*
console.log (persona.aficiones[0]);
console.log (persona.aficiones[1]);
console.log (persona.aficiones[2]);
console.log (persona.aficiones.length); //length --> tamaño-longitud del array

console.log (persona.aficiones.length -1);

console.log (persona.aficiones [persona.aficiones.length -1]);

let ultimo = persona.aficiones.length -1;
console.table(persona.aficiones[ultimo]);
*/



// console.table (persona);
// console.log (persona.edad + 30);


// [] --> indica un array

//ARRAY --> Variable que contiene varios valores