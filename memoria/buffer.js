//Creacion de buffer clasico
let buffer = Buffer.alloc(4);
console.log(buffer); 
// Output:
//<Buffer 00 00 00 00>

// Datos en un arreglo
let buffer2 = Buffer.from([1,2,3]); 
console.log(buffer2); // espacios que ocupa la variable buffer sin codificar

// Datos de tipo string

let buffer3 = Buffer.from('Hola');
console.log(buffer3); // texto 'hola' sin codificar
console.log(buffer3.toString()); // texto 'hola' codificado

// Guardar el abecedario en un buffer

let abc =  Buffer.alloc(26);
console.log(abc); // espacios de memoria de la variable abc

for (let i = 0; i< abc.length; i++){
  abc[i] = i + 97;
}

console.log(abc); // abecedario descodificado
console.log(abc.toString()); // abecedario codificado

