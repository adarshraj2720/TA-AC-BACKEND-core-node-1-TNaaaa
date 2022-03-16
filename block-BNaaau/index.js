var http = require('http')
var fs = require('fs')
var url = require('url')
var server = http.createServer(handleRequest)


//1
function handleRequest (req,res){
    console.log(req,res )
}
server.listen(5000)


//2
function handleRequest(req,res){
     res.end('MY first server in NOdejs')
}
server.listen(5100)
//3
function handleRequest(req,res){
    console.log(req.headers)
    res.end(req.headers['user-agent'])
    
}
server.listen(5100)


//4
// function handleRequest(req,res){
//     // console.log(req.method,req.url)
//     res.setHeader('Content-Type','text/plain')
//     console.log(req.method,req.url)
//     res.end(req.method+req.url)
// }
// server.listen(5566)


//5
// function handleRequest(req,res){
//     console.log(req.headers)
//     res.end(JSON.stringify(req.headers))
// }
// server.listen(7000,()=>{
//     console.log(`Server  listening on port 7000`)
// })

//6
// function handleRequest(req,res){
//     res.statusCode=202
//    res.end(JSON.stringify(req.headers))
// }
// server.listen(3333)

//7
// function handleRequest(req,res){
//     res.setHeader('Content-Type','text/html')
//     res.end('<h2>Welcome to Altcampus</h2>')
// }
// server.listen(8000)

//8
// function handleRequest(req,res){
//     res.writeHead(201,{'Content-Type':'text/html'})
//     res.end('<h2>Welcome to Altcampus</h2>')
// }
// server.listen(8000)

//9
// function handleRequest(req,res){
//     res.setHeader('Content-Type','application/json')
//     res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}))
// }
// server.listen(8888)

//10
// function handleRequest(req,res){
//    
//     console.log(req.method)
//     res.setHeader('Content-Type','text/html')
//     res.end('<h2>Posted for first time</h2')
// }
// server.listen(5050)

//11
// function handleRequest(req,res){
//     if(req.method==='GET' && req.url==="/"){
//         res.setHeader('Content-Type','text/plain')
//         res.end('Adarsh Raj')
//     }
//     if(req.method==="GET" && req.url==='/about'){
//         res.writeHead(404,{'Content-type':'text/html'})
//         res.end('<h2> ADARSH RAJ </h2>')
//     }
//     else{
//         res.statusCode=404;
//         res.end()
//     }
// }
// server.listen(2345)

//12
// function handleRequest(req,res){
//     if(req.method==='GET' && req.url==='/users'){
//         res.setHeader('Content-Type','text/html')
//         fs.createReadStream('./index.html').pipe(res)
//     }
//     if(req.method==="POST" && req.url==='/users'){
//         res.end(`Posted for the second time`)
//     }
// }
// server.listen(2345)

//13
function handleRequest(req,res){
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.pathname,req.url)
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(parsedUrl.query))
}
server.listen