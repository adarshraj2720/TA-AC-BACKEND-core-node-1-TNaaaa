var http =  require('http');

var server= http.createServer(handleRequest)

function handleRequest(req,res){
    console.log(req.method,req.url)

    if(req.method==='GET' && req.url==='/'){
        res.writeHead(200,{'Content-Type':'plain/text'})
        res.end('Welcome to homepage')
    }
    else if(req.method==='GET' && req.url==='/about'){
        res.writeHead(200,{'Content-Type':'plain/html'})
        res.end('<h2>This is all about NodeJs</h2>')
    }
    else if(req.method==='POST' && req.url==='/about'){
        res.writeHead(200,{'Content-Type':'plain/json'})
        res.end(JSON.stringify(`{message: this is a post request}`))
    }
}

server.listen(5000,()=>{
    console.log('Enter in the server 5k localhost')
})