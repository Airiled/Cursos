<<<<<<< HEAD
async function hola(nombre){

    return new Promise (function(resolve, reject) {
        setTimeout(function(){

            console.log("Hola "+ nombre);
            resolve(nombre);
            
        
            }, 1000);
    });
    
}

async function hablar(callbackHablar){

    return new Promise (function(resolve, reject){
        setTimeout(function(){
            console.log("Bla bla bla bla....");
            resolve();
        }, 1000);
    })
    
    
}


async function adios(nombre){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
        
            console.log("Adios "+ nombre);
            resolve();
            
        }, 1000);
    });
}

async function main (){
    let nombre = await hola('Agustin');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el programa');
}

// ------------

console.log('Empieza el programa');

main ();

=======
async function hola(nombre){

    return new Promise (function(resolve, reject) {
        setTimeout(function(){

            console.log("Hola "+ nombre);
            resolve(nombre);
            
        
            }, 1000);
    });
    
}

async function hablar(callbackHablar){

    return new Promise (function(resolve, reject){
        setTimeout(function(){
            console.log("Bla bla bla bla....");
            resolve();
        }, 1000);
    })
    
    
}


async function adios(nombre){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
        
            console.log("Adios "+ nombre);
            resolve();
            
        }, 1000);
    });
}

async function main (){
    let nombre = await hola('Agustin');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el programa');
}

// ------------

console.log('Empieza el programa');

main ();

>>>>>>> e9f7127d2b9cbf580e8ff257a2b641939977cbea
