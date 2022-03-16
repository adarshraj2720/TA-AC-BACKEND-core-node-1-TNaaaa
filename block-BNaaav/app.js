var http = require('http')

var fs = require('fs')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    if(req.method==="GET" && req.url==="/"){
        res.setHeader('Content-Type','text/html')
        fs.createReadStream('../')
        // fs.readFile('../',(err,content)=>{
        //     if(err) console.log(err)
        //     res.end(content)
        // })    
    }
     if(req.method==="GET" && req.url==="/about"){
        res.setHeader('Content-Type','text/html')
        fs.readFile('../about.html',(err,content)=>{
            if(err) console.log(err)
            res.end(content)
        })    
    }
}
server.listen(9000,()=>{
    console.log('Welcome')
})