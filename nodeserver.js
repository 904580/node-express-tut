var http =require('http');
var uc = require('upper-case');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase("hello Web developer"));
    res.end();
}).listen(8080);