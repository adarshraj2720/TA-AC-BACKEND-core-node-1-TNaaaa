var http =  require('http');

var server= http.createServer(handleRequest)

function handleRequest(req,res){
    console.log(req.method,req.url)

    if(req.method==='GET' && req.url==='/'){
        // res.writeHead(200,{'Content-type':'text/plain'})
        res.setHeader('content','text/plain')
        res.end('Welcome to homepage')
    }
    else if(req.method==='GET' && req.url==='/about'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end('<h2>This is all about NodeJs</h2>')
    }
    else if(req.method==='POST' && req.url==='/about'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(`{message: this is a post request}`)
    }
}

server.listen(5000,()=>{
    console.log('Enter in the server 5k localhost')
})