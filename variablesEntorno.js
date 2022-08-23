let nombre = process.env.NOMBRE || "sin ingresar";
let lugar = process.env.LUGAR || "sin ingresar";

//¿Qué ocurre cuando quiero llamar un valor que no va dentro del software, 
// si quiereo llamar una API, o que necesito una clave, o un token?

//+ El código no  debería guardar este tipo de valores credenciales y por esto existen las variables de entorno. 
// Si grabasemos estos datos estaríamos obligados a cambiar el código del programa cada vez que se ejecutan en lugares diferentes, dificultando 
// el despliegue.

//+ Por buenas prácticas heredadas de Linux las variables de entorno que vengan desde fuera (process.env.VARIABLE ) se ponen en mayúscula 
// y se separan mediante guion bajo en vez de espacio.

// ----IMPORTANTE---- Para declarar la variable por consola se debera hacer de la siguiente manera: 
// $env:NOMBRE="Sebastian"; $env:LUGAR="Palomar"; node Cursos\variablesEntorno.js

console.log("El nombre ingresado fue: "+ nombre);
console.log("El lugar ingreado fue: "+ lugar);
