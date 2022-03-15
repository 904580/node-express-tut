const https = require('https');
const fs = require('fs');
const { Certificate } = require('crypto');

const options={
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')

};

https.createServer(options,(req,res)=>{
    res.writeHead(200);
    res.end("Hello Node");
}).listen(8080);

//command//openssl req -nodes -new -x509 -keyout server.key -out server.cert

