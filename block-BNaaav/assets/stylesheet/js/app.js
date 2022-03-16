var http = require('http')

var fs = require('fs')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    if(req.method==="GET" && req.url==="/"){
        fs.readFile('./index.html',(err,content)=>{
            res.setHeader('Content-Type','text/html')
            if(err) console.log(err)
            res.end(content)
        })    
    }
     if(req.method==="GET" && req.url==="/about"){
        fs.readFile('./about.html',(err,content)=>{
            res.setHeader('Content-Type','text/html')
            if(err) console.log(err)
            res.end(content)
        })    
    }
    if(req.url.split('.').pop() === 'css') {
        // set header for css file
        res.setHeader('Content-Type', 'text/css');
        // read css file and send it in response
        fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
}}
server.listen(9000,()=>{
    console.log('Welcome')
})