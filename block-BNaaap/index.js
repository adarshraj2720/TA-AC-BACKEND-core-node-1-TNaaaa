var http= require('http')

var server= http.createServer(handleRequest)

function handleRequest(req,res){

    res.statusCode=201
    res.writeHead(201,{'content':`text/html`})
    res.write(`<h1>Hello Adarsh</h1>`);
    res.write('<h1>Hii everyone</h1>')
    res.end(`WELCOME`)
}
server.listen(4444)