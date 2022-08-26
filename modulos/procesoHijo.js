const { exec } = require('child_process');
const { Console } = require('console');

exec('dir', (e, err, stdout, stderr) => {
    
    console.log('------------Iniciamos funcion------------------');
    console.log(stdout);
    // console.log('------------Probando otra funcion------------------');
    // console.log(stderr);
    // console.log('------------IGNORAR IGNORAR IGNORAR------------------');
    // console.log(err);
} )