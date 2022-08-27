// beforeExit
process.on('beforeExit', () =>{
    console.log('------funcion beforeExit------')
    console.log('Probando distintas funciones de "process.on"');
})

// function uncaughtException, si llega a haber algun error que no fue recibido por algun catch mediante este comando prodemos
// recibir dicho error y trabajarlo y poder continuar con el programa, en el caso de que esta funcion no sea declarada y
// suceda el error el programa se terminará por completo
process.on('uncaughtException', (err, origen) => {
    console.error('se encontro un error!');
    console.log('El origen del error está en: ' + origen);
    console.error(err);
})


// Exis it out of the event loop
process.on('exit', () => {
    console.log('------funcion exit------')
    console.log('Chau nos vemos');
})

// Forzando error
funcionQueNoExiste();