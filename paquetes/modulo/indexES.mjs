import myOwnES6Module from './myOwnES6ModuleES6.mjs';

console.log(myOwnES6Module.property1);
console.log('Property 2 value (number): ', myOwnES6Module.property2);
myOwnES6Module.sayHello();

// También se podría utilizar el operador de desestructuración para obtener las funciones y 
// propiedades del módulo importado directamente en variables independientes, 
// por ejemplo utiizando el primer ejemplo:

// const { sayHello, property1, property 2 } = require('./myOwnModule.js');