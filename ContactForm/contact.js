const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", function(req,res){
    res.sendFile(__dirname+"/contactForm.html");
})

app.post("/", function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var desc = req.body.desc;

    res.send("Hello "+name+ ", We are glad that you have responded");
})
app.listen(3000,function()
{
    console.log("Server is started");
})