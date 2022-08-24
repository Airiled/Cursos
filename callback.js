function hola(nombre, miCallback){
    setTimeout(function(){

    console.log("Hola "+ nombre);
    miCallback(nombre);
    

    }, 1000);
}

function adios(nombre, segundoCallback){
     
    setTimeout(function(){
        
        console.log("Adios "+ nombre);
        segundoCallback();
        
    }, 1000);
}

// Callback es una funcion que se encuentra dentro de otra funcion como argumento y que será llamada en otro momento
// Las caracteristicas de las callbacks es que estas funciones comparten variables. La funcion que recibe como argumentos
// otras funciones es denominada funcion de orden superior (higher-order function) la cual esta declarada claramente para
// ejecutar adecuadamente la funcion callback

//En este programa vamos a hacer un callback que tenga dentro de si mismo otro callback.....

console.log("Empezando el proceso....");

hola("Agustin", function(nombre){
    adios(nombre, function(){
        console.log("Terminando el proceso...")
    });
});
