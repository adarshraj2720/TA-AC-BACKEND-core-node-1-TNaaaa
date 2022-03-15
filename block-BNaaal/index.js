var http=require('http')

//1st way
http.createServer((req,res)=>{
    console.log(req,res)
    res.end('Welcome in the Server 4000')
}).listen(4000,'localhost')


//2nd way


var Server = http.createServer(handleRequest)

function handleRequest(req,res){
    res.end('Welcome in the 4000 localhost server')
}

Server.listen(4000,()=>{
    console.log('Server Listening in 4000 localhost server')
})