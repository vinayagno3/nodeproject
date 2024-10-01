const express = require('express');
const app = express();
const PORT=process.env.PORT|| 8888;


//Configuring Routes

app.get('/firstapp',(req,res)=>{

    //res.send(200);
    res.send('<h1 style="color:blue;">WELCOME NODE JS WEB-APP Framework - EXPRESS ...!!!</h1>');

});

app.get('/firstapp/hello',(req,res)=>{

    res.status(200);
    res.send('<h1>Hello ' + req.query.name + ' <br> Welcome To NODE EXPRESS ...!!!</h1>');

});

//starting Web-Server on port 8888.

app.listen(PORT,(err)=>{
    if(!err)
    {
            console.log('Server Running On Port : ' + PORT);
    }
    else
    {

            console.log('Error ! Can not start server...');
    }

});
