console.log('Welcome to Node Js')


var os=require('os')
console.log(os.freemem())
console.log(os.cpus())
console.log(os.uptime())
console.log(os.version())



var{readFile} = require('fs');
readFile('./index.md','utf8',(err,content)=>{
    console.log(content)
})

//refactor
var{readFile,readFileSync,unlink,fstat}=
require('fs')

//blocking and non-blocking
var sync=readFileSync('./app.js');
readFile('./app.js' ,(err,content)=>{
    console.log(err,content.toString())
})




let buff1= Buffer.alloc(12)
buff1.write('Welcome to altcampus')
console.log(buff1.toString())
let buff2=Buffer.allocUnsafe(12)
buff2.write('WELCOME TO ALTCAMPUS')
console.log(buff2.toString())


var url = require("url");
const parsedUrl = url.parse(
  "https://airindia.com/fares/calculate?from=delhi&to=detroi"
    ,true
);

console.log(parsedUrl.query)
console.log(parsedUrl.pathname)
console.log(parsedUrl.protocol)
