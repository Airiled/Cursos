let nombre = process.env.NOMBRE || "no se ingreso ningun nombre";
let apellido = process.env.APELLIDO || "no se ingreso ninguin apellido";

console.log("El nombre ingresado fue: "+nombre+" junto a su apellido: "+ apellido);

console.log("Haciendo prueba de nodemon....");

// Nodemon al ser un gestor de codigo lo que nos permite hacer es que cada vez que se realice un cambio
// en el codigo y este es guardado, el archivo se recopilara automaticamente solo, ahorrandonos mucho 
// tiempo de codigo y siendo mas fluido el proceso de programar.

//  Tambien esta el concepto de 
//  --------------------------Producción-----------------------

// sudo npm install -g pm2

// PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

// Voy a poner monitorizar el código para saber si algo se rompe.
// Me permite ver dashboards de mi código, puedo ver que está corriendo.
// Puedo ver el rendimiento de mi cpu
// Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.