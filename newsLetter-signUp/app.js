const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const request = require("request");
app.listen(3000,function(req,res){
    console.log("server started");
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req,res){
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    console.log("Data collected");
})