const express = require('express');
const app = express();
const multer = require('multer');


    const upload = multer({
        storage:multer.diskStorage({
            destination: function(req,file,cb)
            {
                cb(null, "uploads")
            },
            filename:function(req,file,cb){
                cb(null,file.fieldname + "-" + Date.now()+ ".jpg")
            }
        })
    }).single("user_file");
    app.post('/upload', upload,(req,res)=>{
    res.send("file uploaded..")

});
app.listen(8000,()=>{
    console.log("listening the port 8000");
})