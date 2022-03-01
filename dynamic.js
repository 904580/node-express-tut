const express = require('express');
const app = express()
app.set('view engine', 'hbs')

app.get('',(req, res)=>{//dynamic data
    const userDetails = {
        name:'samy',
        address:'delhi'
    }
    res.render('ContactUs', userDetails);
});
//res.send('<h1>Hii</h1>')//static data
//})
app.listen(3030);
    



