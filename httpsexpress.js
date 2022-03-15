const express = require ('express');
const app = express();
const fs = require('fs');
const https = require('https');


app.get('/',(req,res)=>{
    res.send("this is express to minimized code");
});

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    },
    app
  )


app.listen(3000,()=>{
    console.log('listening the port 3k..')
});
