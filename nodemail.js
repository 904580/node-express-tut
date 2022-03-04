var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'anoopkumar8171@gmail.com',
        pass:'anoop8171'
    }

});
var mailOptions={
    from:'anoopkumar8171@gmail.com',
    to:'anoopsaini421@gmail.com',
    subject:"Node Tutorial",
    text:"This is node tutorials and code by me!"
}
transporter.sendMail(mailOptions,function (error,info){
if (error){
    console.log(error);
}
else{
    console.log("email has been sent", info.response);
}
})

