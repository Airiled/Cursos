console.log("Hola mundo");
let i = 0;
let a = 100;


setInterval(function(){
// SetInterval me permtie ejecutar una función cada n cantidad de tiempo, por lo que quiere que recibe 
// como argumentos: Función a ejecutarse, intervalo de tiempo.
// A tener  en cuenta esta función no se detiene y continúa su ejecución ad infinitum.
// Detener ejecución con ctrl+ alt + m en Run Code, o con Ctrl +c en la terminal.

    console.log("Hola soy el numero ",i);
    i++;
    if(i == 5){
        console.log("Forzamos error");
        i = i + z;
    }
}, 1000)

console.log("Segundo proceso");

setInterval(function(){

    console.log("Hola soy el numero ",a);
    a--;
}, 1000)