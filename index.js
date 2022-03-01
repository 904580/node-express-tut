const express = require('express');
const res = require('express/lib/response');
const app = express()

const path = require ('path');
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

// app.get('/contact',(req,res)=>{
//     res.sendFile(`${publicPath}/contact.html`);// remove .html extention from url
// })
app.listen(5000);
