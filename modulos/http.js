const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('Recibimos peticion');
    console.log(req.url);
    console.log('------------------SE LLAMO A LA FUNCION---------------------');

    switch(req.url){
        case "/hola":
            console.log('------------------SE ENTRO A LA FUNCION /hola---------------------');
            res.write('HOLA COMO ANDAS');
            res.end();
            break;
            
            case "/logro":
                res.write('¡Ya se corrigio el error!');
                res.end();
                break;
        
        default:
            console.log('------------------SE ENTRO A LA FUNCION DEFAULT---------------------');
            res.write('No se entiende su peticion');
            res.end();
            break;
    }

    //Establecemos una cabecera a la pagina
    res.writeHead(201, {'Content-type':'text-plain'});
    
    // Escribimos respuesta al usuario
    res.write('Hola como te va?');


    res.end();
}

