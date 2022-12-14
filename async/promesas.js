<<<<<<< HEAD
/*Las promesas son una sintaxis mas elegante y legible de realizar callbacks, creando así un código mucho más escalable y entendible para todas las personas.
Una promesa al final no deja de ser un callback, solo que, con la novedad de tener estados, las promesas cuentan con 3 estados, resuelta, en progreso y en fallo.
Para utilizar una promesa solo debemos de instanciar una nueva, una promesa en si es una función que recibe dos parámetros, resolve y reject, que son los dos estados de una promesa.
Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un valor no deseado.
New Promise( (resolve, reject) => {
…code
If(code === true){
resolve(correctValue);
}else {
Reject(wrongValue);
}
});
Para poder obtener los valores que retorna una función debemos utilizar su propiedad .then, esta propiedad es una función que recibe un callback el cual tendrá como parámetro el valor retornado con resolve o reject.
Siempre que usemos una promesa además de realizar la propiedad .then debemos invocar la propiedad .catch, la cual es un callback que recibe como parámetro el error ocurrido en caso de haber sucedió uno.

myPromise(‘Parameter’)
.then( data => console.log(data) )
.catch( err => console.log(err) )*/

function hola(nombre){

    return new Promise (function(resolve, reject) {
        setTimeout(function(){

            console.log("Hola "+ nombre);
            resolve(nombre);
            
        
            }, 1000);
    });
    
}

function hablar(callbackHablar){

    return new Promise (function(resolve, reject){
        setTimeout(function(){
            console.log("Bla bla bla bla....");
            reject();
        }, 1000);
    })
    
    
}


function adios(nombre){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
        
            console.log("Adios "+ nombre);
            resolve();
            
        }, 1000);
    });
     
    
}


// ------

hola('Agustin')
    .then(hablar) //.then hace referencia al resolve() de las promesas. A estas por como estan declaradas les mandamos la variable
                  //nombre y con esta variable podemos llamar a otra funcion/promesa (en este caso lo hacemos con la funcion hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Termino el proceso....')
    })
    .catch(error => {  //Al momento de haber encontrado un error en vez de seguir ejecutando todo el codigo se detiene todo el proceso ahi
        console.error('ha habido un error');
        console.error('Ignorar.....');
    })

=======
/*Las promesas son una sintaxis mas elegante y legible de realizar callbacks, creando así un código mucho más escalable y entendible para todas las personas.
Una promesa al final no deja de ser un callback, solo que, con la novedad de tener estados, las promesas cuentan con 3 estados, resuelta, en progreso y en fallo.
Para utilizar una promesa solo debemos de instanciar una nueva, una promesa en si es una función que recibe dos parámetros, resolve y reject, que son los dos estados de una promesa.
Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un valor no deseado.
New Promise( (resolve, reject) => {
…code
If(code === true){
resolve(correctValue);
}else {
Reject(wrongValue);
}
});
Para poder obtener los valores que retorna una función debemos utilizar su propiedad .then, esta propiedad es una función que recibe un callback el cual tendrá como parámetro el valor retornado con resolve o reject.
Siempre que usemos una promesa además de realizar la propiedad .then debemos invocar la propiedad .catch, la cual es un callback que recibe como parámetro el error ocurrido en caso de haber sucedió uno.

myPromise(‘Parameter’)
.then( data => console.log(data) )
.catch( err => console.log(err) )*/

function hola(nombre){

    return new Promise (function(resolve, reject) {
        setTimeout(function(){

            console.log("Hola "+ nombre);
            resolve(nombre);
            
        
            }, 1000);
    });
    
}

function hablar(callbackHablar){

    return new Promise (function(resolve, reject){
        setTimeout(function(){
            console.log("Bla bla bla bla....");
            reject();
        }, 1000);
    })
    
    
}


function adios(nombre){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
        
            console.log("Adios "+ nombre);
            resolve();
            
        }, 1000);
    });
     
    
}


// ------

hola('Agustin')
    .then(hablar) //.then hace referencia al resolve() de las promesas. A estas por como estan declaradas les mandamos la variable
                  //nombre y con esta variable podemos llamar a otra funcion/promesa (en este caso lo hacemos con la funcion hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Termino el proceso....')
    })
    .catch(error => {  //Al momento de haber encontrado un error en vez de seguir ejecutando todo el codigo se detiene todo el proceso ahi
        console.error('ha habido un error');
        console.error('Ignorar.....');
    })

>>>>>>> e9f7127d2b9cbf580e8ff257a2b641939977cbea
