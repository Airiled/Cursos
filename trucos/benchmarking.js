//Benchmarking (Clase 26)
//Probando la funcion de console.time->console.timeEnd
//Se verifica el tiempo que tarda el mismo for en ejecutar una accion con diferente sintaxis establecida

let suma = 0;
let suma2 = 0;

console.time('Tiempo bucle');
for (let i = 0; i < 1000; i++) {
    suma++;
}
console.timeEnd('Tiempo bucle')

console.time('Tiempo bucle 2');
for (let j = 0; j < 1000; j++) {
    suma2 = suma2 + j;
}
console.timeEnd('Tiempo bucle 2');