const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('Recibimos peticion');
    console.log(req.url);

    switch(req, res){
        case '/hola':
            res.write('HOLA COMO ANDAS');
            res.end();
            break;
        
        default:
            res.write('No se entiende su peticion');
            res.end();
    }

    // Establecemos una cabecera a la pagina
    // res.writeHead(201, {'Content-type':'text-plain'})
    
    // Escribimos respuesta al usuario
    // res.write('Hola como te va?');


    // res.end();
}