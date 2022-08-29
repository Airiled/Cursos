// Un patrón que se sigue siempre en cualquier lenguaje y programa de devs es Error First Callbacks 
// esto quiere decir que siempre que tengamos un callback el primer parámetro debería ser el error.
// Por practica general, los errores son los que primeros se evaluan.

function asincrona(cb){
    setTimeout(function(){
        try{
            let z = 3 + a;
            console.log(z);
        } catch(err){
            cb(err);
        }
    }, 1000)
}

asincrona((err, dato) =>{
    if(err){
        console.log('Tenemos un error');
        console.log(err);
        console.log('Cambialo');
        return false;
        // throw err;  NO SE UTILIZA EN FUNCOINES ASYNC PORQUE NO VA A FUNCIONAR.
    }else{
        console.log('El programa va perfecto');
    }
})