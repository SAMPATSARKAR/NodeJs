const express = require('express');
const path = require('path');
const app = express();
app.use('/public',express.static(path.join(__dirname,'../public')));
app.get('/',(req,res)=>{
    // res.send('Hello World');
    res.sendFile(path.join(__dirname,'../public','index.html'));
});
app.listen(3000);