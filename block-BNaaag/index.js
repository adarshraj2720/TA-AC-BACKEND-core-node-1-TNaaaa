

1.
var fs = require('fs')
fs.readFile('./index.md',(error,content)=>{
    console.log(content.toString())
})

//2.Sync
console.log('Welcome to Altcampus')
console.log('Welcome in dharmshala')


//3.Async
setTimeout(() =>{
    console.log('Adarsh')
},2000)
console.log('My name is ?')



//4 and 5 Buffer
let buff1= Buffer.alloc(10);
console.Console(buff1);
buff1.write('Buffer')
console.log(buff1.toString())


