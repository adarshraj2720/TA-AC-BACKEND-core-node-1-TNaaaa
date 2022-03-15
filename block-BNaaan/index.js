var http= require('http')

var server=http.createServer(handleRequest)

function handleRequest(req,res){
    console.log(req.headers)
    console.log(req.method,req.url)
    
    res.end('Welcome to the server localhost server 4000')
}
server.listen(3000,()=>{
    console.log('server 3000 localhost')
})