const fs = require('fs');
const stream = require('stream');
const util = require('util');

const Transform = stream.Transform;

//let data = '';
//let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.on('data', function (chunk){
//     console.log(chunk.toString());
// })

function Mayus(){
    Transform.call(this);
}

util.inherits(Mayus,Transform);

Mayus.prototype._transform=function(chunk,codifi,callback){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}


var mayus = new Mayus();

readablesStream.pipe(mayus).pipe(process.stdout);