// Node funciona a base de módulos, los módulos son el código que permite a Node tener ciertas funcionalidades.
// Para que Node funcione correctamente siempre ha de tener sus módulos globales, son aquellos módulos que nos permiten usar la mayoría de funcionalidades básicas y complejas que conocemos de Node, como setTimeout, setInerval, etc.
// Estos módulos los podemos usar sin necesidad de importarlos explícitamente en nuestro código, pueden ser usados en cualquier archivo de Node.

console.log(global); //nos muestra varias funciones globales

let i = 0;
let intento = setInterval(function(){ //Hacemos uso de las funciones setInterval() y clearIntervar()

    console.log('Inicio de la funcion');
    if(i === 3){
        clearInterval(intento);
    }
    i++;

}, 1000)

console.log('Me llamo carpa');

setImmediate(function(){  //setImmediate() lo que nos permite es priorizar esta funcion sobre las demas funciones asincronas sin interrumpir 
                          // hilo principal del programa
    console.log('Aviso importante!!')
})

console.log('Me despido, gracias por venir');

//Otros modulos muy importantes
// require
// __dirname
// __filename
// process