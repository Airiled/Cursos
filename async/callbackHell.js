function hola(nombre, miCallback){
    setTimeout(function(){

    console.log("Hola "+ nombre);
    miCallback(nombre);
    

    }, 1000);
}

function hablar(callbackHablar){

    setTimeout(function(){
        console.log("Bla bla bla bla....");
        callbackHablar();
    }, 1000);
    
}

/****************HELL********************** PARA EVITAR QUE SUCEDA LO SIGUIENTE CREAMOS LA FUNCION CONVERSACION
// hola('Alejandro', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function() {

conversacion es una funcion recursiva porque estoy llamando a conversacion dentro de si misma. 
y mediante un If como estructura de control le digo que cantidad de veces va a  ejectuarse la funcion hablar. De esta
manera nos ahorramos codigo y se termina logrando un programa mas legible y mas prolijo*/

function conversacion(nombre, veces, callback){
    if(veces > 0)
    {
        hablar(function(){
            conversacion(nombre, --veces, callback);
        },1000);
        
    } else {
        adios(nombre, callback); // Al terminarse las veces que queremos que hablemos entonces va a llamar a la
                                 // funcion adios PERO esta vez en vez de que la funcion utilice su propio callback
                                 // (es decir el de la funcion adios()) le mandamos el callback de la funcion 
                                 // conversacion (que en este caso son las lineas de codigo de cuando se termina
                                 // el programa)
    }

}

function adios(nombre, segundoCallback){
     
    setTimeout(function(){
        
        console.log("Adios "+ nombre);
        segundoCallback();
        
    }, 1000);
}


// ----

console.log("Empezando el proceso....");

hola("Agustin", function(nombre){
    conversacion(nombre, 3, function(){
        console.log("Funciono!!!");
        console.log("Terminando proceso.....");
    })
});
