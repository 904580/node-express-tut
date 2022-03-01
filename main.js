const express = require('express');
const app = express()
const fs = require('fs');

app.get('/',(req,res)=>{
    const datajson = fs.readFileSync('user.json');
    const print =datajson.toString();
    res.send(print);
    
})

app.listen(8000,()=>{
    console.log('listening the port 8080');
});