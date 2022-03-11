const express = require ('express');
const app = express();
const EventEmitter = require('events');
const event =  new EventEmitter();

event.on("sayMyName",()=>{
    console.log("this is anoop saini");

});
event.on("sayMyName",()=>{
    console.log("this is anoop saini");

});

event.emit("sayMyName");


//  we also passed the callback parameters...

event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);

});

event.emit("checkpage", 200, "ok");











